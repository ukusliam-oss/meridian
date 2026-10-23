// Meridian world engine: one globe that travels through time and place as the page scrolls.
// States are painted into an equirectangular canvas per scene from CShapes 2.0 (borders dated to the day) and
// cross-faded on the GPU, with Natural Earth relief for terrain. Close to the ground each scene also gets a sharp detail
// texture around its camera target; at city scale that texture carries Berlin's sectors and border strip. Borders,
// arrows and lines (the iron curtain, the real 1989 route of the Wall) are vector geometry so they stay sharp.
// The page drives everything with setProgress(p): p = scene index + fraction towards the next (p < 0 is the hero).

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, ShaderMaterial, CanvasTexture, DataTexture,
  TextureLoader, Vector3, Vector4, Color, BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial,
  TubeGeometry, CatmullRomCurve3, ConeGeometry, MeshBasicMaterial, BackSide, AdditiveBlending, SRGBColorSpace,
  LinearFilter, Quaternion, Points,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { geoEquirectangular, geoPath, geoInterpolate, geoDistance, geoArea } from 'd3-geo';
import { feature, mesh } from 'topojson-client';

const DEG = Math.PI / 180;
const R_KM = 6371;
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const ll = (lat, lon, r = 1) => {
  const p = lat * DEG, l = lon * DEG;
  return new Vector3(Math.cos(p) * Math.sin(l) * r, Math.sin(p) * r, Math.cos(p) * Math.cos(l) * r);
};
const dayNum = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d) / 864e5; };

// Bloc palette, fixed for the whole site (plan 4.3). `focus` is the chapter accent.
export const PALETTE = {
  land: '#2a303d', soviet: '#9b2c35', bloc: '#6e3a3c', west: '#2d4a6e', neutral: '#4b5160', focus: '#a084ee',
};
const SECTORS = { us: '#2c5687', uk: '#2d6b74', fr: '#4a4f93', su: PALETTE.bloc };
const ARROW = { military: '#ff5a4f', people: '#ffd59a', pressure: '#c9b3ff' };
const LINE = { 'iron-curtain': '#dfe6f2', wall: '#ffffff' };
const WALL_UP = '1961-08-13', WALL_DOWN = '1989-11-09';

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
  // a state = a world texture plus a sharp detail texture over a lon/lat box around the scene
  vec4 state(sampler2D g, sampler2D d, vec4 box) {
    vec4 cg = texture2D(g, vUv);
    vec2 q = (lonlat() - box.xy) / (box.zw - box.xy);
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
const tubeVert = /* glsl */`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const tubeFrag = /* glsl */`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float head = smoothstep(uDraw - 0.12, uDraw, vUv.x);
    gl_FragColor = vec4(uColor * (1.0 + head * 0.6), uOpacity * (0.8 + 0.45 * head));
  }`;

// ── painting ───────────────────────────────────────────────────────────────
const ringFix = poly => (geoArea(poly) > 2 * Math.PI ? { type: 'Polygon', coordinates: poly.coordinates.map(r => r.slice().reverse()) } : poly);
// d3 wants clockwise outer rings; simplification can leave a few the other way round, which would flood the globe
const upright = f => {
  const g = f.geometry; if (!g) return f;
  const fix = c => (geoArea({ type: 'Polygon', coordinates: c }) > 2 * Math.PI ? c.map(r => r.slice().reverse()) : c);
  if (g.type === 'Polygon') f.geometry = { type: 'Polygon', coordinates: fix(g.coordinates) };
  else if (g.type === 'MultiPolygon') f.geometry = { type: 'MultiPolygon', coordinates: g.coordinates.map(fix) };
  return f;
};

function paintTexture(canvas, feats, s, box = [-180, -90, 180, 90]) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const k = W / ((box[2] - box[0]) * DEG);
  const proj = geoEquirectangular().scale(k).translate([-k * box[0] * DEG, k * box[3] * DEG]).precision(0.1);
  const path = geoPath(proj, ctx);
  const fill = s.map.fill || {};
  const date = s.map.borders;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = PALETTE.land;
  ctx.beginPath(); path(feats.land); ctx.fill();
  for (const f of feats.countries) {
    const state = fill[f.properties.key];
    if (!state) continue;
    ctx.fillStyle = PALETTE[state] || PALETTE.land;
    ctx.beginPath(); path(f); ctx.fill();
  }
  // Berlin at city scale: the four sectors of 1945, then West Berlin as one Western enclave, then the border strip
  const city = s.map.city === 'berlin' && feats.berlin;
  if (city) {
    const before = date < '1949-10-07';
    for (const f of feats.berlin.sectors) {
      const sec = f.properties.sector;
      if (sec === 'su' && !before) continue;
      ctx.fillStyle = before ? SECTORS[sec] : PALETTE.west;
      ctx.beginPath(); path(f); ctx.fill();
    }
    if (date >= WALL_UP) {
      ctx.fillStyle = 'rgba(232, 226, 255, 0.34)';
      for (const f of feats.berlin.strip) { ctx.beginPath(); path(f); ctx.fill(); }
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)'; ctx.lineWidth = Math.max(1, W / 2400);
    for (const f of feats.berlin.sectors) { ctx.beginPath(); path(f); ctx.stroke(); }
  } else if (box[2] - box[0] < 360) {
    // a soft halo around the focus countries so the eye lands on them (detail texture only: blur is expensive)
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.filter = `blur(${Math.round(W / 700)}px)`;
    ctx.globalAlpha = 0.3; ctx.fillStyle = PALETTE.focus;
    for (const f of feats.countries) if (fill[f.properties.key] === 'focus') { ctx.beginPath(); path(f); ctx.fill(); }
    ctx.restore();
  }
  // extra areas drawn last (an optional hand-drawn shape over everything)
  for (const a of s.map.areas || []) {
    const ring = a.points.map(([lat, lon]) => [lon, lat]);
    if (ring[0][0] !== ring.at(-1)[0] || ring[0][1] !== ring.at(-1)[1]) ring.push(ring[0]);
    ctx.fillStyle = PALETTE[a.fill] || PALETTE.west;
    ctx.beginPath(); path(ringFix({ type: 'Polygon', coordinates: [ring] })); ctx.fill();
  }
}

function lineGeometry(lines, lift = 1.0015) {
  const pos = [];
  for (const ring of lines) for (let i = 1; i < ring.length; i++) {
    const a = ring[i - 1], b = ring[i];
    if (Math.abs(a[0] - b[0]) > 180) continue; // antimeridian jump
    const va = ll(a[1], a[0], lift), vb = ll(b[1], b[0], lift);
    pos.push(va.x, va.y, va.z, vb.x, vb.y, vb.z);
  }
  const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3)); return g;
}

// Points along great circles through a list of [lat, lon], lifted off the ground.
function pathPoints(points, lift) {
  const out = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    if (!i) { out.push(ll(p[0], p[1], lift)); continue; }
    const q = points[i - 1]; const it = geoInterpolate([q[1], q[0]], [p[1], p[0]]);
    const n = Math.max(1, Math.ceil(geoDistance([q[1], q[0]], [p[1], p[0]]) / 0.002));
    for (let k = 1; k <= n; k++) { const [lon, lat] = it(k / n); out.push(ll(lat, lon, lift)); }
  }
  return out;
}

const tubeMaterial = (color, dash = 0) => new ShaderMaterial({
  uniforms: { uColor: { value: new Color(color) }, uDraw: { value: 0 }, uOpacity: { value: 0 }, uDash: { value: dash }, uTime: { value: 0 } },
  vertexShader: tubeVert, fragmentShader: tubeFrag, transparent: true, depthWrite: false, blending: AdditiveBlending,
});

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

// The real 1989 Wall: one merged tube mesh per kind (front wall bright, rear wall dim).
function wallMesh(features, kind, radius, dash) {
  const geos = [];
  for (const f of features) {
    if (f.properties.kind !== kind || !f.geometry) continue;
    const parts = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.type === 'MultiLineString' ? f.geometry.coordinates : [];
    for (const line of parts) {
      if (line.length < 2) continue;
      const pts = line.map(([lon, lat]) => ll(lat, lon, 1.000004));
      geos.push(new TubeGeometry(new CatmullRomCurve3(pts, false, 'centripetal'), Math.max(4, pts.length * 2), radius, 4, false));
    }
  }
  if (!geos.length) return null;
  return new Mesh(mergeGeometries(geos), tubeMaterial(kind === 'front' ? LINE.wall : '#a99be0', dash));
}

// ── engine ──────────────────────────────────────────────────────────────────
export async function createWorld(host, { scenes, hero, data, relief, reduced = false, onFrame } = {}) {
  const canvas = document.createElement('canvas');
  canvas.className = 'world__canvas';
  host.appendChild(canvas);
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch { canvas.remove(); return null; }
  renderer.setClearColor(0x05060a, 1);
  const phone = matchMedia('(max-width: 760px)').matches;
  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.0005, 100);
  const globe = new Group(); scene.add(globe);

  const countries = feature(data, data.objects.cshapes).features.map(f => upright({ ...f, from: dayNum(f.properties.from), to: dayNum(f.properties.to) }));
  const land = feature(data, data.objects.land);
  const berlin = data.objects.sectors ? {
    sectors: feature(data, data.objects.sectors).features.map(upright),
    wall: feature(data, data.objects.wall).features, strip: feature(data, data.objects.strip).features.map(upright),
  } : null;
  const at = date => { const d = dayNum(date); return countries.filter(f => f.from <= d && d < f.to); };
  const sceneOf = i => (i < 0 ? hero : scenes[i]);

  // textures: per scene, a world texture plus a sharp detail texture around the camera target
  const GW = 2048, DW = phone ? 1536 : 3072; // the world texture is only seen from far away; close-ups use the detail texture
  const cache = new Map();
  const mkTex = c => { const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); t.minFilter = LinearFilter; t.generateMipmaps = false; return t; };
  const texFor = i => {
    if (cache.has(i)) return cache.get(i);
    const s = sceneOf(i);
    const feats = { land, countries: at(s.map.borders), berlin };
    const g = document.createElement('canvas'); g.width = GW; g.height = GW / 2;
    paintTexture(g, feats, { ...s, map: { ...s.map, city: null } });
    const { lat, lon, alt } = s.camera;
    const half = clamp(alt / 111 * 0.9 + (alt < 300 ? 0.15 : 1.5), 0.25, 32);
    const box = [lon - half * 2, Math.max(-89, lat - half), lon + half * 2, 0];
    box[3] = box[1] + (box[2] - box[0]) / 2; // 2:1, so one scale fits both axes
    const d = document.createElement('canvas'); d.width = DW; d.height = DW / 2;
    paintTexture(d, feats, s, box);
    const t = { g: mkTex(g), d: mkTex(d), box: new Vector4(...box) };
    cache.set(i, t);
    if (cache.size > 4) { const k = [...cache.keys()].find(k => Math.abs(k - i) > 2); if (k !== undefined) { cache.get(k).g.dispose(); cache.get(k).d.dispose(); cache.delete(k); } }
    return t;
  };

  // relief: Natural Earth shaded relief, a world image plus a sharper one over Europe
  const flat = new DataTexture(new Uint8Array([219, 219, 219, 255]), 1, 1); flat.needsUpdate = true;
  const light = new Vector3(-0.6, 0.55, 0.9);
  const rim = new Color('#8f86ff');
  const earthU = {
    uGA: { value: null }, uDA: { value: null }, uGB: { value: null }, uDB: { value: null },
    uBoxA: { value: new Vector4() }, uBoxB: { value: new Vector4() },
    uRelW: { value: flat }, uRelE: { value: flat }, uRelBox: { value: new Vector4(...(relief?.europeBox || [0, 0, 1, 1])) },
    uMix: { value: 0 }, uTime: { value: 0 }, uLight: { value: light },
    uOcean: { value: new Color('#06080d') }, uOceanLift: { value: new Color('#0c1220') }, uRim: { value: rim },
  };
  if (relief) {
    const tl = new TextureLoader();
    tl.load(relief.world, t => { t.minFilter = LinearFilter; earthU.uRelW.value = t; });
    tl.load(relief.europe, t => { t.minFilter = LinearFilter; earthU.uRelE.value = t; });
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
    scene.add(new Points(g, new ShaderMaterial({
      vertexShader: 'void main(){ gl_PointSize = 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'void main(){ gl_FragColor = vec4(0.75,0.72,1.0,0.35); }', transparent: true, depthWrite: false,
    })));
  }

  // borders: one line set per distinct border date, cross-faded
  const borderSets = new Map();
  const bordersFor = date => {
    if (borderSets.has(date)) return borderSets.get(date);
    const lines = [];
    for (const f of at(date)) {
      const g = f.geometry; if (!g) continue;
      const polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
      for (const p of polys) for (const ring of p) lines.push(ring);
    }
    const m = new LineSegments(lineGeometry(lines), new LineBasicMaterial({ color: '#c8cde0', transparent: true, opacity: 0, depthWrite: false }));
    globe.add(m); borderSets.set(date, m); return m;
  };

  // per-scene overlays: arrows and lines, built on demand
  const overlays = new Map();
  const overlayFor = i => {
    if (i < 0 || i >= scenes.length) return null;
    if (overlays.has(i)) return overlays.get(i);
    const s = scenes[i]; const g = new Group(); const items = [];
    (s.map.arrows || []).forEach(a => { const m = arrowMesh(a.from, a.to, ARROW[a.kind] || '#fff', s.camera.alt); g.add(m); items.push({ type: 'arrow', m }); });
    (s.map.lines || []).forEach(l => {
      if (l.kind === 'wall' && berlin) {
        // the real route; after 9 November 1989 it is drawn broken, as the crossings open
        const open = s.map.borders >= WALL_DOWN;
        const r = clamp(s.camera.alt / R_KM * 0.0011, 0.0000045, 0.0004);
        for (const kind of ['front', 'rear']) {
          const m = wallMesh(berlin.wall, kind, kind === 'front' ? r : r * 0.6, open ? 7 : 0);
          if (m) { g.add(m); items.push({ type: 'line', m, mat: m.material, k: kind === 'front' ? 1 : 0.55 }); }
        }
        return;
      }
      if (l.kind === 'iron-curtain') {
        // the real dated border between the West (West Germany, Austria) and the bloc (East Germany, Czechoslovakia, Hungary)
        const d = dayNum(s.map.borders), on = g => g.properties.from <= s.map.borders && s.map.borders < g.properties.to;
        const W = ['FRG', 'AUT'], E = ['GDR', 'CSK', 'HUN'];
        const m = mesh(data, data.objects.cshapes, (a, b) => a !== b && on(a) && on(b)
          && ((W.includes(a.properties.key) && E.includes(b.properties.key)) || (E.includes(a.properties.key) && W.includes(b.properties.key))));
        const radius = clamp(s.camera.alt / R_KM * 0.0021, 0.000012, 0.003);
        for (const line of m.coordinates) {
          if (line.length < 2 || !d) continue;
          const pts = line.map(([lon, lat]) => ll(lat, lon, 1.0008));
          let len = 0; for (let q = 1; q < pts.length; q++) len += pts[q].distanceTo(pts[q - 1]);
          const mat = tubeMaterial(LINE['iron-curtain'], Math.max(6, len * 1800));
          const tube = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, false, 'centripetal'), Math.min(1600, pts.length * 3), radius, 5, false), mat);
          g.add(tube); items.push({ type: 'line', m: tube, mat, k: 1 });
        }
        return;
      }
      const wall = l.kind === 'wall';
      const pts = pathPoints(l.points, wall ? 1.00003 : 1.0008);
      const closed = l.points[0][0] === l.points.at(-1)[0] && l.points[0][1] === l.points.at(-1)[1];
      const radius = clamp(s.camera.alt / R_KM * (wall ? 0.0016 : 0.0021), 0.000012, 0.003);
      const mat = tubeMaterial(LINE[l.kind] || '#fff', wall ? 0 : 90);
      const m = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, closed, 'centripetal'), Math.min(1200, pts.length * 3), radius, 5, false), mat);
      g.add(m); items.push({ type: 'line', m, mat, k: 1 });
    });
    globe.add(g); const o = { g, items }; overlays.set(i, o); return o;
  };
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
        it.mat.uniforms.uTime.value = time;
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
      el.innerHTML = `<i></i><span>${m.label}</span>`; labels.appendChild(el);
      return { el, v: ll(m.at[0], m.at[1], 1.001) };
    });
    markerEls.set(i, list); return list;
  };

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
  }

  // ── frame ─────────────────────────────────────────────────────────────────
  let progress = -1, visible = true, raf = 0;
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
    const time = (now - t0) / 1000;
    const n = scenes.length;
    const p = clamp(progress, -1, n - 1);
    const i = Math.floor(p), f = p - i, j = Math.min(i + 1, n - 1);
    const tt = reduced ? (f < 0.5 ? 0 : 1) : ease(smooth(0.08, 0.92, f));
    // the hero drifts slowly until the reader starts scrolling
    const heroCam = { ...hero.camera, lon: hero.camera.lon + (reduced ? 0 : Math.sin(time * 0.06) * 12) };
    placeCamera(i < 0 ? heroCam : scenes[i].camera, j < 0 ? heroCam : scenes[j].camera, tt);

    const A = texFor(i), B = texFor(j);
    earthU.uGA.value = A.g; earthU.uDA.value = A.d; earthU.uBoxA.value = A.box;
    earthU.uGB.value = B.g; earthU.uDB.value = B.d; earthU.uBoxB.value = B.box;
    const mix = reduced ? (f < 0.5 ? 0 : 1) : smooth(0.35, 0.65, f);
    earthU.uMix.value = mix;

    const ba = bordersFor(sceneOf(i).map.borders), bb = bordersFor(sceneOf(j).map.borders);
    for (const m of borderSets.values()) m.material.opacity = 0;
    const cityA = sceneOf(i).map.city ? 0.4 : 1, cityB = sceneOf(j).map.city ? 0.4 : 1;
    ba.material.opacity += 0.28 * (1 - mix) * cityA; bb.material.opacity += 0.28 * mix * cityB;

    for (const [idx, o] of overlays) if (idx !== i && idx !== j) o.g.visible = false;
    if (i >= 0) setOverlay(i, 1, 1 - smooth(0.05, 0.4, f), time);
    if (j !== i) setOverlay(j, smooth(0.55, 1, f), smooth(0.5, 0.8, f), time);

    for (const [idx, list] of markerEls) if (idx !== i && idx !== j) list.forEach(m => { m.el.style.opacity = 0; });
    showMarkers(i, 1 - smooth(0.1, 0.45, f));
    if (j !== i) showMarkers(j, smooth(0.6, 0.95, f));

    earthU.uTime.value = time;
    renderer.render(scene, camera);
    if (onFrame) onFrame(p);
  }

  const ro = new ResizeObserver(resize); ro.observe(host);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(host);
  addEventListener('visibilitychange', () => { visible = !document.hidden; });
  resize();
  texFor(-1); texFor(0); // warm the first states so the first frame is not blank
  raf = requestAnimationFrame(frame);

  return {
    setProgress(p) { progress = p; },
    prepare(i) { if (i >= -1 && i < scenes.length) texFor(i); },
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); renderer.dispose(); },
  };
}
