// Meridian world engine: one globe that travels through time and place as the page scrolls.
// Each scene's look is painted into an equirectangular canvas by the chapter's layers (History: dated borders; see
// history.js) and cross-faded on the GPU, with Natural Earth relief for terrain. Close to the ground each scene also gets
// a sharp detail texture around its camera target, painted in a projection centred on the target so it works across the
// antimeridian. Arrows and lines are vector geometry so they stay sharp; layers can claim line kinds of their own.
// The page drives everything with setProgress(p, u): p = scene index + fraction towards the next (p < 0 is the hero),
// u = how far the reader is through the current scene's hold (0–1), for layers that animate while the camera rests.

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, ShaderMaterial, CanvasTexture, DataTexture,
  TextureLoader, Vector3, Vector4, Color, BufferGeometry, Float32BufferAttribute, TubeGeometry, CatmullRomCurve3,
  ConeGeometry, MeshBasicMaterial, BackSide, AdditiveBlending, SRGBColorSpace, LinearFilter, Quaternion, Points,
} from 'three';
import { geoEquirectangular, geoPath, geoInterpolate, geoDistance } from 'd3-geo';
import { DEG, R_KM, clamp, smooth, ease, ll, esc, pathPoints, tubeMaterial, disposeTree } from './util.js';

export { ll };

// colours a chapter can override through its layers' `theme`
const THEME = {
  ocean: '#06080d', oceanLift: '#0c1220', rim: '#8f86ff', stars: [0.75, 0.72, 1.0],
  arrows: {}, lines: {}, arrow: '#ffffff', line: '#ffffff',
};

// ── shaders ─────────────────────────────────────────────────────────────────
const shellVert = /* glsl */`
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  void main() {
    vUv = uv; vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`;
const earthFrag = /* glsl */`
  uniform sampler2D uGA, uDA, uGB, uDB, uRelW, uRelE; uniform vec4 uBoxA, uBoxB, uRelBox;
  uniform float uMix, uTime; uniform vec3 uLight, uOcean, uOceanLift, uRim;
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  vec2 lonlat() { return vec2(vUv.x * 360.0 - 180.0, vUv.y * 180.0 - 90.0); }
  // a state = a world texture plus a sharp detail texture over a lon/lat box around the scene; the box may run past
  // ±180 degrees, so longitude is measured from the box centre
  vec4 state(sampler2D g, sampler2D d, vec4 box) {
    vec4 cg = texture2D(g, vUv);
    vec2 p = lonlat();
    float w = box.z - box.x;
    float dl = mod(p.x - 0.5 * (box.x + box.z) + 540.0, 360.0) - 180.0;
    vec2 q = vec2(dl / w + 0.5, (p.y - box.y) / (box.w - box.y));
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    if (e <= 0.0) return cg;
    return mix(cg, texture2D(d, q), smoothstep(0.0, 0.05, e));
  }
  float relief() {
    vec2 q = (lonlat() - uRelBox.xy) / (uRelBox.zw - uRelBox.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    float w = texture2D(uRelW, vUv).r;
    return e > 0.0 ? mix(w, texture2D(uRelE, q).r, smoothstep(0.0, 0.04, e)) : w;
  }
  void main() {
    vec4 land = mix(state(uGA, uDA, uBoxA), state(uGB, uDB, uBoxB), uMix);
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float lit = 0.42 + 0.58 * smoothstep(-0.35, 0.9, dot(n, normalize(uLight)));
    float shade = clamp(0.2 + 0.93 * relief(), 0.48, 1.24);
    float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    vec3 ocean = mix(uOcean, uOceanLift, 0.5 + 0.5 * n.y) * (0.75 + 0.25 * lit);
    vec3 col = mix(ocean, land.rgb * lit * shade, land.a);
    col += uRim * rim * 0.55;
    gl_FragColor = vec4(col, 1.0);
  }`;
const airFrag = /* glsl */`
  uniform vec3 uRim; varying vec3 vN; varying vec3 vW;
  void main() {
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float f = pow(clamp(1.0 - abs(dot(n, v)), 0.0, 1.0), 2.4);
    gl_FragColor = vec4(uRim, f * 0.9);
  }`;

// ── painting ───────────────────────────────────────────────────────────────
// box = [west, south, east, north] in degrees; east may exceed 180. The projection is centred on the box, so shapes that
// cross the antimeridian inside it are drawn whole.
function paintState(canvas, layers, s, box, detail) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return false; // out of canvas memory: the state stays blank rather than breaking every frame
  const W = canvas.width, H = canvas.height;
  const cx = (box[0] + box[2]) / 2, hw = (box[2] - box[0]) / 2;
  const k = W / ((box[2] - box[0]) * DEG);
  const proj = geoEquirectangular().rotate([-cx, 0]).scale(k).translate([k * hw * DEG, k * box[3] * DEG]).precision(0.1);
  const path = geoPath(proj, ctx);
  ctx.clearRect(0, 0, W, H);
  for (const L of layers) L.paint?.(ctx, path, s, { box, detail, W, H, proj });
  return true;
}

function arrowMesh(a, b, color, alt) {
  const from = [a[1], a[0]], to = [b[1], b[0]];
  const it = geoInterpolate(from, to);
  const ang = geoDistance(from, to);
  const h = clamp(ang * 0.22, 0.00002, 0.07);
  const pts = [];
  for (let i = 0; i <= 48; i++) { const t = i / 48; const [lon, lat] = it(t); pts.push(ll(lat, lon, 1.002 + Math.sin(Math.PI * t) * h)); }
  const radius = clamp(alt / R_KM * 0.0032, 0.00006, 0.004);
  const curve = new CatmullRomCurve3(pts);
  const mat = tubeMaterial(color);
  const tube = new Mesh(new TubeGeometry(curve, 96, radius, 6, false), mat);
  const head = new Mesh(new ConeGeometry(radius * 3.2, radius * 9, 10), new MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false }));
  head.position.copy(curve.getPointAt(1));
  head.quaternion.copy(new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), curve.getTangentAt(1)));
  const g = new Group(); g.add(tube, head); g.userData = { mat, head };
  return g;
}

// ── engine ──────────────────────────────────────────────────────────────────
export async function createWorld(host, { scenes, hero, layers = [], relief, reduced = false, onFrame } = {}) {
  const canvas = document.createElement('canvas');
  canvas.className = 'world__canvas';
  host.appendChild(canvas);
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch { canvas.remove(); return null; }
  renderer.setClearColor(0x05060a, 1);
  const phone = matchMedia('(max-width: 760px)').matches;
  const touch = matchMedia('(pointer: coarse)').matches; // tablets too: iOS caps the memory all canvases may use
  const theme = Object.assign({}, THEME, ...layers.map(L => L.theme || {}));
  theme.arrows = Object.assign({}, ...layers.map(L => L.theme?.arrows || {}));
  theme.lines = Object.assign({}, ...layers.map(L => L.theme?.lines || {}));
  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.0005, 100);
  const globe = new Group(); scene.add(globe);
  const sceneOf = i => (i < 0 ? hero : scenes[i]);
  let dirty = true;

  // textures: per scene, a world texture plus a sharp detail texture around the camera target
  const maxTex = renderer.capabilities.maxTextureSize || 4096;
  const GW = Math.min(2048, maxTex); // the world texture is only seen from far away; close-ups use the detail texture
  const DW = Math.min(phone ? 1536 : touch ? 2048 : 3072, maxTex);
  const MAX_STATES = touch ? 4 : 5;
  const cache = new Map();
  let pinned = [-1, 0];
  const mkTex = c => { const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); t.minFilter = LinearFilter; t.generateMipmaps = false; return t; };
  const mkCanvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
  const detailBox = s => {
    const { lat, lon, alt } = s.camera;
    const half = clamp(alt / 111 * 0.9 + (alt < 300 ? 0.15 : 1.5), 0.25, 32);
    const box = [lon - half * 2, Math.max(-89, lat - half), lon + half * 2, 0];
    box[3] = box[1] + (box[2] - box[0]) / 2; // 2:1, so one scale fits both axes
    return box;
  };
  // paint one state now; when the cache is full, the state farthest from the reader gives up its canvases
  function paintNow(i) {
    if (cache.has(i)) return cache.get(i);
    let g = null, d = null;
    if (cache.size >= MAX_STATES) {
      const now = Math.floor(clamp(progress, -1, scenes.length - 1));
      let victim, far = -1;
      for (const k of cache.keys()) if (k !== i && !pinned.includes(k) && Math.abs(k - now) > far) { far = Math.abs(k - now); victim = k; }
      if (victim !== undefined) {
        const v = cache.get(victim); cache.delete(victim);
        v.g.dispose(); v.d.dispose(); g = v.g.image; d = v.d.image;
      }
    }
    g ||= mkCanvas(GW, GW / 2); d ||= mkCanvas(DW, DW / 2);
    const s = sceneOf(i), box = detailBox(s);
    paintState(g, layers, s, [-180, -90, 180, 90], false);
    paintState(d, layers, s, box, true);
    const t = { g: mkTex(g), d: mkTex(d), box: new Vector4(...box) };
    cache.set(i, t); dirty = true;
    return t;
  }
  // in the frame loop a missing state is never painted: the nearest painted one stands in, and the missing one is
  // painted once scrolling settles. Neighbours asked for with prefetch() wait in the same queue, so a jump through the
  // menu, which passes many scenes, paints none of them on the way.
  const queue = new Set();
  let pumping = false, lastFast = 0;
  const later = f => (window.requestIdleCallback ? requestIdleCallback(f, { timeout: 600 }) : setTimeout(f, 30));
  function pump() {
    pumping = false;
    if (performance.now() - lastFast < 220) { schedule(); return; }
    const now = Math.floor(clamp(progress, -1, scenes.length - 1));
    for (const k of queue) if (Math.abs(k - now) > 2 || cache.has(k)) queue.delete(k); // passed by, or already there
    let k, far = Infinity;
    for (const q of queue) if (Math.abs(q - progress) < far) { far = Math.abs(q - progress); k = q; } // nearest first
    if (k === undefined) return;
    queue.delete(k); paintNow(k);
    if (queue.size) schedule();
  }
  function schedule() { if (!pumping) { pumping = true; setTimeout(() => later(pump), 60); } }
  function stateFor(i) {
    if (cache.has(i)) return cache.get(i);
    if (!cache.size) return paintNow(i);
    queue.add(i); schedule();
    let best = null, far = Infinity;
    for (const [k, t] of cache) if (Math.abs(k - i) < far) { far = Math.abs(k - i); best = t; }
    return best;
  }

  // relief: Natural Earth shaded relief, a world image plus a sharper regional one
  const flat = new DataTexture(new Uint8Array([219, 219, 219, 255]), 1, 1); flat.needsUpdate = true;
  const light = new Vector3(-0.6, 0.55, 0.9);
  const rim = new Color(theme.rim);
  const earthU = {
    uGA: { value: null }, uDA: { value: null }, uGB: { value: null }, uDB: { value: null },
    uBoxA: { value: new Vector4() }, uBoxB: { value: new Vector4() },
    uRelW: { value: flat }, uRelE: { value: flat }, uRelBox: { value: new Vector4(...(relief?.europeBox || [0, 0, 1, 1])) },
    uMix: { value: 0 }, uTime: { value: 0 }, uLight: { value: light },
    uOcean: { value: new Color(theme.ocean) }, uOceanLift: { value: new Color(theme.oceanLift) }, uRim: { value: rim },
  };
  if (relief) {
    const tl = new TextureLoader();
    if (relief.world) tl.load(relief.world, t => { t.minFilter = LinearFilter; earthU.uRelW.value = t; dirty = true; });
    if (relief.europe) tl.load(relief.europe, t => { t.minFilter = LinearFilter; earthU.uRelE.value = t; dirty = true; });
  }
  const earth = new Mesh(new SphereGeometry(1, 160, 120), new ShaderMaterial({ uniforms: earthU, vertexShader: shellVert, fragmentShader: earthFrag }));
  earth.rotation.y = -Math.PI / 2; // equirectangular u=0 at lon -180
  const air = new Mesh(new SphereGeometry(1.06, 96, 64), new ShaderMaterial({
    uniforms: { uRim: { value: rim } }, vertexShader: shellVert, fragmentShader: airFrag,
    side: BackSide, transparent: true, blending: AdditiveBlending, depthWrite: false,
  }));
  globe.add(earth, air);

  // star dust far away, for depth when the camera moves
  {
    const n = 1800, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const v = new Vector3().randomDirection().multiplyScalar(30 + Math.random() * 30); pos.set([v.x, v.y, v.z], i * 3); }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3));
    const [r, gr, b] = theme.stars;
    scene.add(new Points(g, new ShaderMaterial({
      vertexShader: 'void main(){ gl_PointSize = 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: `void main(){ gl_FragColor = vec4(${r.toFixed(3)},${gr.toFixed(3)},${b.toFixed(3)},0.35); }`, transparent: true, depthWrite: false,
    })));
  }

  const ctx = { globe, scene, scenes, hero, sceneOf, reduced, phone };
  for (const L of layers) L.init?.(ctx);

  // per-scene overlays: arrows and lines, built on demand; layers may claim a line kind and build it themselves
  const overlays = new Map();
  const overlayFor = i => {
    if (i < 0 || i >= scenes.length) return null;
    if (overlays.has(i)) return overlays.get(i);
    const s = scenes[i]; const g = new Group(); const items = [];
    (s.map.arrows || []).forEach(a => { const m = arrowMesh(a.from, a.to, theme.arrows[a.kind] || theme.arrow, s.camera.alt); g.add(m); items.push({ type: 'arrow', m }); });
    (s.map.lines || []).forEach(l => {
      for (const L of layers) {
        const own = L.line?.(l, s);
        if (own) { own.forEach(it => { g.add(it.m); items.push({ type: 'line', ...it }); }); return; }
      }
      const pts = pathPoints(l.points, 1.0008);
      const closed = l.points[0][0] === l.points.at(-1)[0] && l.points[0][1] === l.points.at(-1)[1];
      const radius = clamp(s.camera.alt / R_KM * 0.0021, 0.000012, 0.003);
      const mat = tubeMaterial(theme.lines[l.kind] || theme.line, 90);
      const m = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, closed, 'centripetal'), Math.min(1200, pts.length * 3), radius, 5, false), mat);
      g.add(m); items.push({ type: 'line', m, mat, k: 1 });
    });
    globe.add(g); const o = { g, items }; overlays.set(i, o); return o;
  };
  let moving = false; // a visible dashed line keeps the frame loop rendering
  const setOverlay = (i, draw, opacity, time) => {
    const o = overlayFor(i); if (!o) return;
    o.g.visible = opacity > 0.001;
    o.items.forEach((it, k) => {
      if (it.type === 'arrow') {
        const d = clamp(draw * 1.25 - k * 0.12);
        it.m.userData.mat.uniforms.uDraw.value = reduced ? 1 : d;
        it.m.userData.mat.uniforms.uOpacity.value = opacity;
        it.m.userData.head.material.opacity = opacity * smooth(0.92, 1, reduced ? 1 : d);
      } else {
        it.mat.uniforms.uDraw.value = reduced ? 1 : clamp(draw * 1.1);
        it.mat.uniforms.uOpacity.value = opacity * 0.95 * it.k;
        it.mat.uniforms.uTime.value = reduced ? 0 : time;
        if (o.g.visible && it.mat.uniforms.uDash.value > 0) moving = true;
      }
    });
  };

  // markers: DOM labels pinned to the globe
  const labels = document.createElement('div'); labels.className = 'world__labels'; host.appendChild(labels);
  const markerEls = new Map();
  const markersFor = i => {
    if (markerEls.has(i)) return markerEls.get(i);
    const list = (sceneOf(i).map.markers || []).map(m => {
      const el = document.createElement('div'); el.className = 'world__marker';
      el.innerHTML = `<i></i><span>${esc(m.label)}</span>`; labels.appendChild(el);
      return { el, v: ll(m.at[0], m.at[1], 1.001) };
    });
    markerEls.set(i, list); return list;
  };
  // overlays and labels of scenes far from the reader are freed
  function prune(i) {
    if (overlays.size > 6) for (const [k, o] of overlays) if (Math.abs(k - i) > 3) { disposeTree(o.g); overlays.delete(k); }
    if (markerEls.size > 8) for (const [k, list] of markerEls) if (Math.abs(k - i) > 3) { list.forEach(m => m.el.remove()); markerEls.delete(k); }
  }

  // ── camera ────────────────────────────────────────────────────────────────
  let W = 1, H = 1;
  const up = new Vector3(0, 1, 0), tmp = new Vector3();
  function placeCamera(a, b, t) {
    const da = ll(a.lat, a.lon), db = ll(b.lat, b.lon);
    const ang = da.angleTo(db);
    const dir = ang < 1e-6 ? da : da.clone().multiplyScalar(Math.sin((1 - t) * ang)).add(db.clone().multiplyScalar(Math.sin(t * ang))).divideScalar(Math.sin(ang));
    dir.normalize();
    const travelKm = ang * R_KM;
    const lift = 1 + Math.min(2.2, travelKm / Math.max(a.alt, b.alt, 400) * 0.35) * Math.sin(Math.PI * t);
    const alt = Math.exp(Math.log(a.alt) * (1 - t) + Math.log(b.alt) * t) * lift * (W / H < 0.8 ? 1.7 : 1); // tall phones see less width
    const d = 1 + alt / R_KM;
    const tilt = (alt < 2500 ? 24 * (1 - alt / 2500) : 0) * DEG; // lean towards the horizon close to the ground
    const south = new Vector3().crossVectors(dir, new Vector3().crossVectors(up, dir)).normalize().negate();
    camera.position.copy(dir).multiplyScalar(d).addScaledVector(south, Math.tan(tilt) * (d - 1) * 1.2);
    camera.up.copy(up);
    camera.lookAt(tmp.copy(dir).multiplyScalar(1 - smooth(2500, 6000, alt)));
    camera.near = Math.max(0.000002, (d - 1) * 0.15); camera.far = d + 3; camera.updateProjectionMatrix();
    camera.updateMatrixWorld(); // the labels are projected before render() would update it
  }

  function resize() {
    W = host.clientWidth || innerWidth; H = host.clientHeight || innerHeight;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 1.5 : 1.75));
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    // keep the subject clear of the text: right of the panel on desktop, above the panel on phones
    const wide = W > 900;
    camera.setViewOffset(W, H, wide ? -W * 0.2 : 0, wide ? 0 : H * 0.18, W, H);
    camera.updateProjectionMatrix();
    dirty = true;
  }

  // ── frame ─────────────────────────────────────────────────────────────────
  let progress = -1, hold = 0, visible = true, raf = 0, lastP = NaN, lastU = NaN;
  const t0 = performance.now();
  const proj = new Vector3();
  function showMarkers(idx, o) {
    markersFor(idx).forEach((m, k) => {
      const facing = m.v.clone().normalize().dot(tmp.copy(camera.position).sub(m.v).normalize());
      proj.copy(m.v).project(camera);
      const x = (proj.x * 0.5 + 0.5) * W, y = (-proj.y * 0.5 + 0.5) * H;
      const vis = facing > 0.05 && proj.z < 1 && x > -40 && x < W + 40 && y > -20 && y < H + 20;
      m.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      m.el.style.opacity = vis ? clamp(o * 1.8 - k * 0.14) : 0; // labels arrive one after another
      if (vis && !m.w) m.w = m.el.offsetWidth;
      const w = (m.w || 160) + 12;
      m.el.classList.toggle('is-left', x + w > W && x - w > 0);
    });
  }
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!visible) return;
    const n = scenes.length;
    const p = clamp(progress, -1, n - 1), u = hold;
    if (Math.abs(p - lastP) > 0.02) lastFast = now;
    // render only when something changed or something on screen moves by itself (the hero drift, dashed lines)
    const animating = !reduced && (p < 0 || moving || layers.some(L => L.animating));
    if (!dirty && !animating && p === lastP && u === lastU) return;
    dirty = false; lastP = p; lastU = u; moving = false;

    const time = (now - t0) / 1000;
    const i = Math.floor(p), f = p - i, j = Math.min(i + 1, n - 1);
    pinned = [i, j];
    const tt = reduced ? (f < 0.5 ? 0 : 1) : ease(smooth(0.08, 0.92, f));
    // the hero drifts slowly until the reader starts scrolling
    const heroCam = { ...hero.camera, lon: hero.camera.lon + (reduced ? 0 : Math.sin(time * 0.06) * 12) };
    placeCamera(i < 0 ? heroCam : scenes[i].camera, j < 0 ? heroCam : scenes[j].camera, tt);

    const A = stateFor(i), B = stateFor(j);
    earthU.uGA.value = A.g; earthU.uDA.value = A.d; earthU.uBoxA.value = A.box;
    earthU.uGB.value = B.g; earthU.uDB.value = B.d; earthU.uBoxB.value = B.box;
    const mix = reduced ? (f < 0.5 ? 0 : 1) : smooth(0.35, 0.65, f);
    earthU.uMix.value = mix;

    for (const L of layers) L.frame?.({ i, j, f, u, mix, time, p });

    for (const [idx, o] of overlays) if (idx !== i && idx !== j) o.g.visible = false;
    if (i >= 0) setOverlay(i, 1, 1 - smooth(0.05, 0.4, f), time);
    if (j !== i) setOverlay(j, smooth(0.55, 1, f), smooth(0.5, 0.8, f), time);

    for (const [idx, list] of markerEls) if (idx !== i && idx !== j) list.forEach(m => { m.el.style.opacity = 0; });
    showMarkers(i, 1 - smooth(0.1, 0.45, f));
    if (j !== i) showMarkers(j, smooth(0.6, 0.95, f));
    prune(i);

    earthU.uTime.value = time;
    renderer.render(scene, camera);
    if (onFrame) onFrame(p, u);
  }

  const ro = new ResizeObserver(resize); ro.observe(host);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; dirty = true; }); io.observe(host);
  const onVis = () => { visible = !document.hidden; dirty = true; };
  addEventListener('visibilitychange', onVis);
  resize();
  paintNow(-1); paintNow(0); // warm the first states so the first frame is not blank
  raf = requestAnimationFrame(frame);

  return {
    setProgress(p, u = 0) { progress = p; hold = u; },
    // paint a scene now (the page calls this before a jump, for the destination)
    prepare(i) { if (i >= -1 && i < scenes.length) paintNow(i); },
    // paint a scene when scrolling settles, unless the reader has moved on by then (the neighbours of the current scene)
    prefetch(i) { if (i >= -1 && i < scenes.length && !cache.has(i)) { queue.add(i); schedule(); } },
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); removeEventListener('visibilitychange', onVis);
      for (const t of cache.values()) { t.g.dispose(); t.d.dispose(); t.g.image.width = t.g.image.height = 1; t.d.image.width = t.d.image.height = 1; }
      cache.clear(); renderer.dispose();
    },
  };
}
