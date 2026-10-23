// Meridian world engine: one globe that travels through time and place as the page scrolls.
// States are painted into an equirectangular canvas per scene from CShapes 2.0 (borders dated to the day) and
// cross-faded on the GPU, with Natural Earth relief for terrain. Close to the ground each scene also gets a sharp detail
// texture around its camera target; at city scale that texture carries Berlin's sectors and border strip. Borders,
// arrows and lines (the iron curtain, the real 1989 route of the Wall) are vector geometry so they stay sharp.
// Data maps (Economics) are coloured in the shader: an id texture says which country is under each texel and a value
// texture holds every scene's figures, so moving from one year to the next blends the values themselves.
// Painting runs in a worker (src/world/paint-worker.js) when the browser has OffscreenCanvas, else in idle time.
// The page drives everything with setProgress(p): p = scene index + fraction towards the next (p < 0 is the hero).
// A frame is drawn only when something on screen can change.

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, ShaderMaterial, CanvasTexture, DataTexture, Texture,
  TextureLoader, Vector2, Vector3, Vector4, Color, BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial,
  TubeGeometry, CatmullRomCurve3, ConeGeometry, MeshBasicMaterial, BackSide, AdditiveBlending, SRGBColorSpace,
  LinearFilter, NearestFilter, RGFormat, FloatType, Quaternion, Points, InstancedMesh, CylinderGeometry, Matrix4, DynamicDrawUsage,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { geoInterpolate, geoDistance } from 'd3-geo';
import { mesh } from 'topojson-client';
import { DEG, dayNum, PALETTE, WALL_DOWN, featuresOf, countriesAt, runJob } from './paint.js';

export { PALETTE };
const R_KM = 6371;
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const ll = (lat, lon, r = 1) => {
  const p = lat * DEG, l = lon * DEG;
  return new Vector3(Math.cos(p) * Math.sin(l) * r, Math.sin(p) * r, Math.cos(p) * Math.cos(l) * r);
};
const ARROW = { military: '#ff5a4f', people: '#ffd59a', pressure: '#c9b3ff', capital: '#7ef0c2', trade: '#9db7ff' };
const LINE = { 'iron-curtain': '#dfe6f2', wall: '#ffffff' };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ── data colour scales (Economics) ─────────────────────────────────────────
// Sequential: deep blue to green to warm yellow. Diverging: orange below zero, grey at zero, blue above, so neither
// side reads as "good" or "bad". Every indicator has a default domain; a scene can override it.
const RAMP = {
  sequential: ['#14243f', '#1d4f6e', '#1f8a7a', '#58c48b', '#e8d867', '#f59e4c'],
  diverging: ['#d9662f', '#b5603d', '#5b4a48', '#3a3f4c', '#3e5878', '#3b78bf', '#62a8f0'],
};
const RAMP_ROW = { sequential: 0, diverging: 1 };
const DOMAIN = {
  NGDP_RPCH: [-8, 8, 'diverging'], PCPIPCH: [0, 15, 'sequential'], LUR: [0, 20, 'sequential'],
  BCA_NGDPD: [-10, 10, 'diverging'], GGXCNL_NGDP: [-12, 12, 'diverging'], GGXWDG_NGDP: [0, 150, 'sequential'],
  POLICY_RATE: [0, 20, 'sequential'], GINI: [25, 60, 'sequential'], CO2_PC: [0, 20, 'sequential'],
};
const hexRgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
export function scaleOf(spec) {
  const [d0, d1, kind] = spec.domain ? [...spec.domain, spec.scale || 'sequential'] : (DOMAIN[spec.id] || [0, 100, 'sequential']);
  const k = spec.scale || kind;
  const stops = RAMP[k].map(hexRgb);
  const color = v => {
    const t = clamp((v - d0) / (d1 - d0)) * (stops.length - 1);
    const n = Math.min(stops.length - 2, Math.floor(t)), u = t - n;
    const c = stops[n].map((x, m) => Math.round(x + (stops[n + 1][m] - x) * u));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  };
  return { color, d0, d1, kind: k, stops: RAMP[k] };
}
// value of an indicator for a country at a scene's year (or month for monthly series); latest earlier value if latestOnly
export function valueOf(values, spec, key) {
  const ind = values && values[spec.id]; if (!ind) return null;
  const row = ind.values[key]; if (!row) return null;
  if (ind.months) {
    const [y, m] = String(spec.month || `${spec.year}-12`).split('-').map(Number);
    const [y0, m0] = ind.months[0].split('-').map(Number);
    let i = (y - y0) * 12 + (m - m0);
    while (i >= 0 && row[i] == null) i--;
    return i >= 0 ? row[i] : null;
  }
  let i = spec.year - ind.years[0];
  if (ind.latestOnly) { while (i >= 0 && row[i] == null) i--; return i >= 0 ? row[i] : null; }
  return row[i] ?? null;
}
export const fmtValue = v => (Math.abs(v) >= 100 ? Math.round(v) : +v.toFixed(1)).toLocaleString('en-GB');
const sameScale = (a, b) => a && b && a.id === b.id && String(a.domain) === String(b.domain) && a.scale === b.scale;

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
  uniform sampler2D uIGA, uIDA, uIGB, uIDB, uVal, uRamp;
  uniform vec4 uSlotA, uSlotB;      // x: value row (< 0: no data layer), y: d0, z: d1, w: ramp row
  uniform float uWA, uWB;           // inside each state, how far its values have moved towards the other state's row
  uniform float uMix, uHatch; uniform vec3 uLight, uOcean, uOceanLift, uRim, uFocus;
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  vec2 lonlat() { return vec2(vUv.x * 360.0 - 180.0, vUv.y * 180.0 - 90.0); }
  vec3 lin(vec3 c) { return pow(c, vec3(2.2)); }
  float idAt(sampler2D t, ivec2 p) { vec4 c = texelFetch(t, p, 0); return floor(c.r * 255.0 + 0.5) + 256.0 * floor(c.g * 255.0 + 0.5); }
  vec2 valAt(float row, float id) { return texelFetch(uVal, ivec2(int(id) - 1, int(row)), 0).rg; }
  vec3 rampAt(float v, vec4 slot) {
    float t = clamp((v - slot.y) / (slot.z - slot.y), 0.0, 1.0);
    return texture2D(uRamp, vec2((t * 255.0 + 0.5) / 256.0, (slot.w + 0.5) / 2.0)).rgb;
  }
  vec3 hatch() {
    float s = step(0.86, fract(dot(vW, vec3(0.71, 0.5, -0.5)) * uHatch));
    return lin(mix(vec3(0.153, 0.173, 0.216), vec3(0.235, 0.259, 0.31), s));
  }
  // colour of one country: its value in this state's row, blended towards the other row by w (same indicator only)
  vec4 dataOf(float id, vec4 own, vec4 other, float w) {
    vec2 a = valAt(own.x, id);
    vec2 b = other.x >= 0.0 && w > 0.0 ? valAt(other.x, id) : a;
    bool ha = a.r > -1e8, hb = b.r > -1e8;
    vec3 c = ha && hb ? rampAt(mix(a.r, b.r, w), own) : mix(ha ? rampAt(a.r, own) : hatch(), hb ? rampAt(b.r, own) : hatch(), w);
    return vec4(c, mix(a.g, b.g, w));
  }
  // four taps, coloured first and filtered after, so borders between colours stay smooth at any zoom
  vec4 dataTex(sampler2D t, vec2 uv, vec4 own, vec4 other, float w, out float cover) {
    vec2 size = vec2(textureSize(t, 0));
    vec2 tc = uv * size - 0.5; vec2 f = fract(tc); ivec2 i0 = ivec2(floor(tc)); ivec2 mx = ivec2(size) - 1;
    vec4 acc = vec4(0.0); cover = 0.0;
    for (int k = 0; k < 4; k++) {
      ivec2 o = ivec2(k & 1, k >> 1);
      float wt = (o.x == 1 ? f.x : 1.0 - f.x) * (o.y == 1 ? f.y : 1.0 - f.y);
      float id = idAt(t, clamp(i0 + o, ivec2(0), mx));
      if (id > 0.5) { acc += dataOf(id, own, other, w) * wt; cover += wt; }
    }
    return cover > 0.0 ? acc / cover : vec4(0.0);
  }
  // a state = a world texture plus a sharp detail texture over a lon/lat box around the scene, and its data layer
  vec4 state(sampler2D g, sampler2D d, sampler2D ig, sampler2D id, vec4 box, vec4 own, vec4 other, float w, out float focus) {
    vec4 col = texture2D(g, vUv);
    vec2 q = (lonlat() - box.xy) / (box.zw - box.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    float inD = e > 0.0 ? smoothstep(0.0, 0.05, e) : 0.0;
    if (inD > 0.0) col = mix(col, texture2D(d, q), inD);
    focus = 0.0;
    if (own.x < 0.0) return col;
    float cg, cd = 0.0;
    vec4 dg = dataTex(ig, vUv, own, other, w, cg), dd = dg;
    if (inD > 0.0) dd = dataTex(id, q, own, other, w, cd);
    float cover = mix(cg, cd, inD); vec4 dat = mix(dg, dd, inD);
    focus = dat.a * cover;
    return vec4(mix(col.rgb, dat.rgb, cover), max(col.a, cover));
  }
  float relief() {
    vec2 q = (lonlat() - uRelBox.xy) / (uRelBox.zw - uRelBox.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    float w = texture2D(uRelW, vUv).r;
    return e > 0.0 ? mix(w, texture2D(uRelE, q).r, smoothstep(0.0, 0.04, e)) : w;
  }
  void main() {
    float fa, fb;
    vec4 a = state(uGA, uDA, uIGA, uIDA, uBoxA, uSlotA, uSlotB, uWA, fa);
    vec4 b = uMix > 0.0 ? state(uGB, uDB, uIGB, uIDB, uBoxB, uSlotB, uSlotA, uWB, fb) : a;
    if (uMix <= 0.0) fb = fa;
    vec4 land = mix(a, b, uMix);
    float focus = mix(fa, fb, uMix);
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float lit = 0.42 + 0.58 * smoothstep(-0.35, 0.9, dot(n, normalize(uLight)));
    float shade = clamp(0.2 + 0.93 * relief(), 0.48, 1.24);
    float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    vec3 ocean = mix(uOcean, uOceanLift, 0.5 + 0.5 * n.y) * (0.75 + 0.25 * lit);
    vec3 lc = land.rgb * (1.0 + 0.28 * focus) + uFocus * 0.06 * focus;
    vec3 col = mix(ocean, lc * lit * shade, land.a);
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

// ── geometry ────────────────────────────────────────────────────────────────
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
const ringsOf = f => {
  const g = f.geometry; if (!g) return [];
  return (g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : []).flat();
};

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

// ── painting: worker when possible, idle time on the main thread otherwise ────────────────────────────
function painter(feats, dataUrl, onDone) {
  const jobs = new Map(); // key → job, waiting
  let worker = null, mode = 'main';
  const canWorker = !!dataUrl && typeof Worker !== 'undefined' && typeof OffscreenCanvas !== 'undefined'
    && (() => { try { return !!new OffscreenCanvas(1, 1).getContext('2d'); } catch { return false; } })();
  if (canWorker) {
    try {
      worker = new Worker(new URL('./world-paint.js', import.meta.url), { type: 'module' });
      mode = 'worker';
      worker.onmessage = ({ data: m }) => {
        if (m.failed || m.ready) { if (m.failed) fallBack(); return; }
        const job = jobs.get(m.key); jobs.delete(m.key);
        if (job) onDone(job, m.bitmap ? { bitmap: m.bitmap } : { ids: m.ids }, m.ms, 'worker');
      };
      worker.onerror = fallBack;
      worker.postMessage({ type: 'init', url: new URL(dataUrl, location.href).href });
    } catch { worker = null; mode = 'main'; }
  }
  function fallBack() {
    if (mode === 'main') return;
    mode = 'main'; try { worker.terminate(); } catch { /* gone already */ }
    for (const job of jobs.values()) queueMain(job);
  }
  const idle = f => (window.requestIdleCallback ? requestIdleCallback(f, { timeout: 400 }) : setTimeout(f, 16));
  let mainQueue = [], busy = false;
  function queueMain(job) { mainQueue.push(job); pump(); }
  function pump() {
    if (busy || !mainQueue.length) return;
    busy = true;
    idle(() => {
      const job = mainQueue.shift(); busy = false;
      if (jobs.has(job.key)) {
        jobs.delete(job.key);
        const r = runJob(feats, job, (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; });
        onDone(job, r.ids ? { ids: r.ids } : { canvas: r.canvas }, r.ms, 'main');
      }
      pump();
    });
  }
  return {
    get mode() { return mode; },
    has: key => jobs.has(key),
    request(job, urgent = false) {
      if (jobs.has(job.key)) return;
      jobs.set(job.key, job);
      if (mode === 'worker') worker.postMessage(job);
      else if (urgent) { mainQueue.unshift(job); pump(); } else queueMain(job);
    },
    // the first states are needed before the first frame: paint them now, wherever the painter lives
    now(job) {
      const r = runJob(feats, job, (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; });
      onDone(job, r.ids ? { ids: r.ids } : { canvas: r.canvas }, r.ms, 'main');
    },
    destroy() { if (worker) worker.terminate(); },
  };
}

// ── engine ──────────────────────────────────────────────────────────────────
// scenes: engine scenes; a chapter panel that steps through several years has one per year, all with the same `panel`.
export async function createWorld(host, { scenes, hero, data, dataUrl, relief, values = null, accent = null, reduced = false, onFrame } = {}) {
  if (accent) PALETTE.focus = accent;
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
  const stats = { paints: [], frames: 0, skipped: 0, frameMs: 0, worstFrameMs: 0, painter: '' };
  let dirty = true;

  const feats = featuresOf(data);
  const { countries, berlin } = feats;
  // label point of each country (modern borders carry one; dated borders do not need it)
  const point = new Map(countries.filter(f => f.properties.lat != null).map(f => [f.properties.key, f.properties]));
  const sceneOf = i => (i < 0 ? hero : scenes[i]);
  const isData = s => !!(values && s && s.map.data && values[s.map.data.id]);

  // ── values: one row per state (row 0 = hero, row i + 1 = scene i), one column per country, (value, focus) ──
  const NC = countries.length, NS = scenes.length + 1;
  const valArr = new Float32Array(NC * NS * 2).fill(-1e9);
  [hero, ...scenes].forEach((s, r) => {
    if (!isData(s)) return;
    const focus = new Set(s.map.focus || []);
    countries.forEach((f, n) => {
      const v = valueOf(values, s.map.data, f.properties.key), o = (r * NC + n) * 2;
      valArr[o] = v == null ? -1e9 : v; valArr[o + 1] = focus.has(f.properties.key) ? 1 : 0;
    });
  });
  const valTex = new DataTexture(valArr, NC, NS, RGFormat, FloatType);
  valTex.minFilter = valTex.magFilter = NearestFilter; valTex.needsUpdate = true;
  const rampArr = new Uint8Array(256 * 2 * 4);
  for (const [k, row] of Object.entries(RAMP_ROW)) {
    const sc = scaleOf({ id: '', domain: [0, 255], scale: k });
    for (let x = 0; x < 256; x++) {
      const [r, g, b] = sc.color(x).match(/\d+/g).map(Number), o = (row * 256 + x) * 4;
      rampArr.set([r, g, b, 255], o);
    }
  }
  const rampTex = new DataTexture(rampArr, 256, 2); rampTex.colorSpace = SRGBColorSpace;
  rampTex.minFilter = rampTex.magFilter = LinearFilter; rampTex.needsUpdate = true;
  const slotOf = i => {
    const s = sceneOf(i); if (!isData(s)) return new Vector4(-1, 0, 1, 0);
    const sc = scaleOf(s.map.data); return new Vector4(i + 1, sc.d0, sc.d1, RAMP_ROW[sc.kind]);
  };

  // ── textures: per state a world and a detail texture (painted), plus id textures for data states ──
  const GW = 2048, DW = phone ? 1536 : 3072; // the world texture is only seen from far away; close-ups use the detail texture
  const texCache = new Map(); // key → { tex, used }
  const aniso = renderer.capabilities.getMaxAnisotropy();
  const toTex = (job, out) => {
    let t;
    if (out.ids) {
      t = new DataTexture(out.ids, job.W, job.H); t.minFilter = t.magFilter = NearestFilter;
    } else {
      t = out.bitmap ? new Texture(out.bitmap) : new CanvasTexture(out.canvas);
      t.colorSpace = SRGBColorSpace; t.anisotropy = aniso; t.minFilter = LinearFilter;
    }
    t.flipY = false; t.generateMipmaps = false; t.needsUpdate = true; return t;
  };
  const paint = painter(feats, dataUrl, (job, out, ms, where) => {
    texCache.set(job.key, { tex: toTex(job, out), used: performance.now() });
    stats.paints.push({ kind: job.kind, ms: Math.round(ms), where });
    evict(); dirty = true;
  });
  stats.painter = paint.mode;
  function evict() {
    const LIMIT = 14; if (texCache.size <= LIMIT) return;
    const old = [...texCache.entries()].sort((a, b) => a[1].used - b[1].used);
    for (const [k, v] of old.slice(0, texCache.size - LIMIT)) { v.tex.dispose(); texCache.delete(k); } // GPU copy only: a texture still bound uploads again
  }
  // what a state needs; equal keys are painted once (the years of one panel share every texture)
  const jobsFor = i => {
    const s = sceneOf(i), data = isData(s);
    // data states draw their focus in the shader and with vector outlines, so the painted layer leaves it out
    const map = { borders: s.map.borders, fill: s.map.fill, city: data ? null : s.map.city, areas: s.map.areas, focus: data ? [] : s.map.focus };
    const { lat, lon, alt } = s.camera;
    const half = clamp(alt / 111 * 0.9 + (alt < 300 ? 0.15 : 1.5), 0.25, 32);
    const box = [lon - half * 2, Math.max(-89, lat - half), lon + half * 2, 0];
    box[3] = box[1] + (box[2] - box[0]) / 2; // 2:1, so one scale fits both axes
    const r = v => +v.toFixed(3);
    const bk = box.map(r).join(','), mk = JSON.stringify({ ...map, city: null });
    const jobs = {
      g: { kind: 'paint', key: `g|${mk}`, map: { ...map, city: null }, box: [-180, -90, 180, 90], W: GW, H: GW / 2 },
      d: { kind: 'paint', key: `d|${JSON.stringify(map)}|${bk}`, map, box, W: DW, H: DW / 2 },
    };
    if (data) {
      jobs.ig = { kind: 'ids', key: `ig|${map.borders}`, date: map.borders, box: [-180, -90, 180, 90], W: GW, H: GW / 2 };
      jobs.id = { kind: 'ids', key: `id|${map.borders}|${bk}`, date: map.borders, box, W: DW, H: DW / 2 };
    }
    return { jobs, box: new Vector4(...box) };
  };
  const stateCache = new Map();
  const stateOf = i => { if (!stateCache.has(i)) stateCache.set(i, jobsFor(i)); return stateCache.get(i); };
  // the textures of a state, or null while any is still painting (the caller then keeps the last complete one)
  function texturesOf(i, urgent = false) {
    const st = stateOf(i), out = { box: st.box }, now = performance.now();
    let ready = true;
    for (const [k, job] of Object.entries(st.jobs)) {
      const c = texCache.get(job.key);
      if (c) { c.used = now; out[k] = c.tex; } else { ready = false; paint.request(job, urgent); }
    }
    return ready ? out : null;
  }
  const blank = new DataTexture(new Uint8Array(4), 1, 1); blank.needsUpdate = true;

  // relief: Natural Earth shaded relief, a world image plus a sharper one over Europe
  const flat = new DataTexture(new Uint8Array([219, 219, 219, 255]), 1, 1); flat.needsUpdate = true;
  const light = new Vector3(-0.6, 0.55, 0.9);
  const rim = new Color('#8f86ff');
  const earthU = {
    uGA: { value: null }, uDA: { value: null }, uGB: { value: null }, uDB: { value: null },
    uIGA: { value: blank }, uIDA: { value: blank }, uIGB: { value: blank }, uIDB: { value: blank },
    uVal: { value: valTex }, uRamp: { value: rampTex },
    uSlotA: { value: new Vector4(-1, 0, 1, 0) }, uSlotB: { value: new Vector4(-1, 0, 1, 0) }, uWA: { value: 0 }, uWB: { value: 1 },
    uBoxA: { value: new Vector4() }, uBoxB: { value: new Vector4() },
    uRelW: { value: flat }, uRelE: { value: flat }, uRelBox: { value: new Vector4(...(relief?.europeBox || [0, 0, 1, 1])) },
    uMix: { value: 0 }, uHatch: { value: 60 }, uLight: { value: light },
    uOcean: { value: new Color('#06080d') }, uOceanLift: { value: new Color('#0c1220') }, uRim: { value: rim }, uFocus: { value: new Color(PALETTE.focus) },
  };
  if (relief) {
    const tl = new TextureLoader();
    tl.load(relief.world, t => { t.minFilter = LinearFilter; earthU.uRelW.value = t; dirty = true; });
    tl.load(relief.europe, t => { t.minFilter = LinearFilter; earthU.uRelE.value = t; dirty = true; });
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
    for (const f of countriesAt(countries, date)) lines.push(...ringsOf(f));
    const m = new LineSegments(lineGeometry(lines), new LineBasicMaterial({ color: values ? '#0b0e15' : '#c8cde0', transparent: true, opacity: 0, depthWrite: false }));
    globe.add(m); borderSets.set(date, m); return m;
  };

  // per-scene overlays: arrows, lines and focus outlines, built on demand
  const gates = new Map(); // panel → 0..1: flows wait for their step of a chain
  const overlays = new Map();
  const overlayFor = i => {
    if (i < 0 || i >= scenes.length) return null;
    if (overlays.has(i)) return overlays.get(i);
    const s = scenes[i]; const g = new Group(); const items = [];
    (s.map.arrows || []).forEach(a => { const m = arrowMesh(a.from, a.to, ARROW[a.kind] || '#fff', s.camera.alt); g.add(m); items.push({ type: 'arrow', m }); });
    (s.map.flows || []).forEach(a => {
      const p = point.get(a.from), q = point.get(a.to); if (!p || !q) return;
      const m = arrowMesh([p.lat, p.lon], [q.lat, q.lon], ARROW[a.kind] || ARROW.capital, s.camera.alt); g.add(m); items.push({ type: 'arrow', m, flow: true });
    });
    if (isData(s) && (s.map.focus || []).length) {
      const rings = countriesAt(countries, s.map.borders).filter(f => s.map.focus.includes(f.properties.key)).flatMap(ringsOf);
      const mat = new LineBasicMaterial({ color: PALETTE.focus, transparent: true, opacity: 0, depthWrite: false });
      const m = new LineSegments(lineGeometry(rings, 1.0018), mat); g.add(m); items.push({ type: 'outline', m, mat });
    }
    (s.map.lines || []).forEach(l => {
      if (l.kind === 'wall' && berlin) {
        // the real route; after 9 November 1989 it is drawn broken, as the crossings open
        const open = s.map.borders >= WALL_DOWN;
        const r = clamp(s.camera.alt / R_KM * 0.0011, 0.0000045, 0.0004);
        for (const kind of ['front', 'rear']) {
          const m = wallMesh(berlin.wall, kind, kind === 'front' ? r : r * 0.6, open ? 7 : 0);
          if (m) { g.add(m); items.push({ type: 'line', m, mat: m.material, k: kind === 'front' ? 1 : 0.55, dash: open }); }
        }
        return;
      }
      if (l.kind === 'iron-curtain') {
        // the real dated border between the West (West Germany, Austria) and the bloc (East Germany, Czechoslovakia, Hungary)
        if (!data.objects.cshapes) return;
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
          g.add(tube); items.push({ type: 'line', m: tube, mat, k: 1, dash: true });
        }
        return;
      }
      const wall = l.kind === 'wall';
      const pts = pathPoints(l.points, wall ? 1.00003 : 1.0008);
      const closed = l.points[0][0] === l.points.at(-1)[0] && l.points[0][1] === l.points.at(-1)[1];
      const radius = clamp(s.camera.alt / R_KM * (wall ? 0.0016 : 0.0021), 0.000012, 0.003);
      const mat = tubeMaterial(LINE[l.kind] || '#fff', wall ? 0 : 90);
      const m = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, closed, 'centripetal'), Math.min(1200, pts.length * 3), radius, 5, false), mat);
      g.add(m); items.push({ type: 'line', m, mat, k: 1, dash: !wall });
    });
    g.visible = false; globe.add(g); const o = { g, items }; overlays.set(i, o); return o;
  };
  // returns true while a visible item animates on its own (dashed lines), so the next frame must be drawn
  const setOverlay = (i, draw, opacity, time) => {
    const o = overlayFor(i); if (!o) return false;
    o.g.visible = opacity > 0.001;
    const gate = gates.has(scenes[i].panel) ? gates.get(scenes[i].panel) : 1;
    let live = false;
    o.items.forEach((it, k) => {
      if (it.type === 'arrow') {
        const d = clamp(draw * 1.25 - k * 0.12) * (it.flow ? gate : 1);
        it.m.userData.mat.uniforms.uDraw.value = reduced ? (it.flow ? (gate > 0.5 ? 1 : 0) : 1) : d;
        it.m.userData.mat.uniforms.uOpacity.value = opacity;
        it.m.userData.head.material.opacity = opacity * smooth(0.92, 1, it.m.userData.mat.uniforms.uDraw.value);
      } else if (it.type === 'outline') {
        it.mat.opacity = opacity * 0.9;
      } else {
        it.mat.uniforms.uDraw.value = reduced ? 1 : clamp(draw * 1.1);
        it.mat.uniforms.uOpacity.value = opacity * 0.95 * it.k;
        it.mat.uniforms.uTime.value = time;
        if (it.dash && opacity > 0.001 && !reduced) live = true;
      }
    });
    return live;
  };

  // spikes: columns rising from each country's label point, height = value (only where height means something)
  const spikeKeys = [...point.keys()];
  const spikes = new InstancedMesh(new CylinderGeometry(1, 1, 1, 10, 1, false).translate(0, 0.5, 0), new MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.92, depthWrite: true }), Math.max(1, spikeKeys.length));
  spikes.instanceMatrix.setUsage(DynamicDrawUsage); spikes.frustumCulled = false; spikes.visible = false;
  globe.add(spikes);
  const spikeDirs = spikeKeys.map(k => { const p = point.get(k); return ll(p.lat, p.lon).normalize(); });
  const spikeCache = new Map();
  const spikeHeights = i => {
    if (spikeCache.has(i)) return spikeCache.get(i);
    const s = sceneOf(i), sp = s.map.spikes;
    const h = new Float32Array(spikeKeys.length);
    if (sp && values) { const d1 = scaleOf(sp).d1; spikeKeys.forEach((k, n) => { const v = valueOf(values, sp, k); h[n] = v == null || v <= 0 ? 0 : Math.min(1.4, v / d1); }); }
    const r = { h, on: !!sp, alt: s.camera.alt, spec: sp }; spikeCache.set(i, r); return r;
  };
  const sm = new Matrix4(), sq = new Quaternion(), sv = new Vector3(), ss = new Vector3(), Y = new Vector3(0, 1, 0);
  const spikeColor = new Color(), WHITE = new Color('#ffffff');
  let spikeKey = '';
  function setSpikes(i, j, mix, alt) {
    const A = spikeHeights(i), B = spikeHeights(j);
    const on = (A.on ? 1 - mix : 0) + (B.on ? mix : 0);
    spikes.visible = on > 0.01; if (!spikes.visible) return;
    const key = `${i}|${j}|${mix.toFixed(4)}|${Math.round(alt)}`; if (key === spikeKey) return; spikeKey = key;
    const len = 0.3, rad = clamp(Math.sqrt(alt / 6000) * 0.0032, 0.0012, 0.006); // needles: height carries the value
    spikeKeys.forEach((k, n) => {
      const hA = A.on ? A.h[n] : 0, hB = B.on ? B.h[n] : 0;
      const hh = (hA + (hB - hA) * mix) * on, dir = spikeDirs[n];
      sq.setFromUnitVectors(Y, dir); sv.copy(dir).multiplyScalar(1.0006);
      ss.set(rad, Math.max(1e-6, hh * len), rad);
      sm.compose(sv, sq, ss); spikes.setMatrixAt(n, sm);
      spikeColor.set(PALETTE.focus).lerp(WHITE, clamp(hh / Math.max(on, 1e-3) / 1.2) * 0.7); spikes.setColorAt(n, spikeColor);
    });
    spikes.instanceMatrix.needsUpdate = true; if (spikes.instanceColor) spikes.instanceColor.needsUpdate = true;
  }

  // ── legend: indicator, year (rolls), colour ramp with the focus countries on it, source ───────────
  const legend = document.createElement('div'); legend.className = 'world__legend'; host.appendChild(legend);
  legend.innerHTML = '<div class="world__lg"></div>';
  let legendKey = '', legendYear = '', legendTicks = [];
  const whenOf = spec => (spec.month ? `${MONTHS[+spec.month.slice(5) - 1]} ${spec.month.slice(0, 4)}` : String(spec.year));
  // the legend follows the state that fills more of the screen; values blend when both states share an indicator
  function setLegend(sA, sB, w) {
    const s = w < 0.5 ? sA : sB;
    const spec = s && (s.map.data || s.map.spikes), sp = s && s.map.data && s.map.spikes;
    const key = spec && values && values[spec.id] ? `${spec.id}|${spec.domain}|${sp ? sp.id : ''}|${(s.map.focus || []).join()}` : '';
    if (key !== legendKey) {
      legendKey = key; legendYear = '';
      legend.classList.toggle('is-on', !!key);
      if (key) {
        const ind = values[spec.id], sc = scaleOf(spec), focus = (s.map.data && s.map.focus) || [];
        const box = legend.firstElementChild, next = box.cloneNode(false);
        next.innerHTML = `<p class="mono world__ind"><span>${ind.label}</span> · <span class="world__yr"><b></b></span><span class="world__fc"></span></p>
          <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${sc.stops.join(',')})"></div>
            ${focus.map(k => `<i class="world__tick" data-k="${k}"><span>${k}</span></i>`).join('')}</div>
          <div class="world__ticks mono"><span>${sc.d0 < 0 ? '' : '≤ '}${fmtValue(sc.d0)}</span>${sc.kind === 'diverging' ? '<span>0</span>' : ''}<span>≥ ${fmtValue(sc.d1)}</span></div>
          <p class="mono world__unit">${ind.unit}${s.map.data ? ' · <i class="world__nodata"></i> no data' : ''}</p>
          ${sp && values[sp.id] ? `<p class="mono world__spk"><i></i>Height · ${values[sp.id].label} · <span class="world__spkm"></span></p>` : ''}
          <p class="world__src">${ind.source}${sp && values[sp.id] ? '. ' + values[sp.id].source : ''}</p>`;
        box.classList.add('is-out'); next.classList.add('is-in'); legend.appendChild(next);
        requestAnimationFrame(() => next.classList.remove('is-in'));
        setTimeout(() => box.remove(), reduced ? 0 : 450);
        legendTicks = focus.map(k => ({ k, el: next.querySelector(`[data-k="${k}"]`) }));
      }
    }
    if (!key) return;
    const box = legend.lastElementChild, ind = values[spec.id], sc = scaleOf(spec);
    const blend = s.map.data && sameScale(sA?.map.data, sB?.map.data);
    // year: the state on screen; while two years blend, the label rolls over at the midpoint
    const y = whenOf(spec), fc = ind.forecastFrom && +String(spec.month || spec.year).slice(0, 4) >= ind.forecastFrom ? ' · IMF projection' : '';
    if (y !== legendYear) {
      const yr = box.querySelector('.world__yr'), old = yr.firstElementChild, nb = document.createElement('b');
      nb.textContent = y;
      if (legendYear && !reduced) { nb.className = 'is-in'; yr.appendChild(nb); old.className = 'is-out'; requestAnimationFrame(() => nb.classList.remove('is-in')); setTimeout(() => old.remove(), 400); }
      else { yr.replaceChildren(nb); }
      box.querySelector('.world__fc').textContent = fc;
      legendYear = y;
    }
    if (sp) { const m = box.querySelector('.world__spkm'); const t = whenOf(sp); if (m && m.textContent !== t) m.textContent = t; }
    for (const t of legendTicks) {
      const a = sA && sA.map.data ? valueOf(values, sA.map.data, t.k) : null, b = sB && sB.map.data ? valueOf(values, sB.map.data, t.k) : null;
      const v = blend && a != null && b != null ? a + (b - a) * w : (w < 0.5 ? a : b);
      t.x = v == null ? null : clamp((v - sc.d0) / (sc.d1 - sc.d0)) * 100;
      t.el.style.opacity = v == null ? 0 : 1;
      if (v != null) t.el.style.left = `${t.x.toFixed(2)}%`;
    }
    // labels that would touch step up a row
    const ends = [];
    for (const t of legendTicks.filter(t => t.x != null).sort((p, q) => p.x - q.x)) {
      let r = 0; while (ends[r] != null && t.x - ends[r] < 11) r++;
      ends[r] = t.x; if (t.row !== r) { t.row = r; t.el.style.setProperty('--row', Math.min(r, 2)); }
    }
    const rb = box.querySelector('.world__rampbox'); if (rb && +rb.dataset.rows !== ends.length) { rb.dataset.rows = ends.length; rb.style.setProperty('--rows', Math.max(0, Math.min(ends.length, 3) - 1)); }
  }

  // ── markers: DOM labels pinned to the globe; on data maps the focus countries carry their live value ──
  const labels = document.createElement('div'); labels.className = 'world__labels'; host.appendChild(labels);
  const markerEls = new Map();
  const markersFor = i => {
    if (markerEls.has(i)) return markerEls.get(i);
    const s = sceneOf(i);
    const auto = isData(s) ? (s.map.focus || []).map(key => point.get(key)).filter(Boolean).map(p => ({ at: [p.lat, p.lon], label: p.name, key: p.key })) : [];
    const list = [...(s.map.markers || []), ...auto].map(m => {
      const el = document.createElement('div'); el.className = 'world__marker';
      el.innerHTML = `<i></i><span>${m.label}</span>${m.key ? '<b class="mono"></b>' : ''}`; labels.appendChild(el);
      return { el, v: ll(m.at[0], m.at[1], 1.001), key: m.key, val: m.key ? el.querySelector('b') : null, text: '' };
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
    return alt;
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
    for (const list of markerEls.values()) list.forEach(m => { m.w = 0; });
    dirty = true;
  }

  // ── frame ─────────────────────────────────────────────────────────────────
  let progress = -1, drawn = NaN, live = false, visible = true, raf = 0;
  const t0 = performance.now();
  const proj = new Vector3();
  let lastA = null, lastB = null;
  function showMarkers(idx, o, valueAt) {
    markersFor(idx).forEach((m, k) => {
      const facing = m.v.clone().normalize().dot(tmp.copy(camera.position).sub(m.v).normalize());
      proj.copy(m.v).project(camera);
      const x = (proj.x * 0.5 + 0.5) * W, y = (-proj.y * 0.5 + 0.5) * H;
      const vis = facing > 0.05 && proj.z < 1 && x > -40 && x < W + 40 && y > -20 && y < H + 20;
      m.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      m.el.style.opacity = vis ? clamp(o * 1.8 - k * 0.14) : 0; // labels arrive one after another
      if (m.key) {
        const v = valueAt(m.key), unit = values[sceneOf(idx).map.data.id].unit.startsWith('%') ? '%' : '';
        const text = v == null ? 'no data' : fmtValue(v) + unit;
        if (text !== m.text) { m.val.textContent = text; m.text = text; m.w = 0; }
      }
      if (vis && !m.w) m.w = m.el.offsetWidth;
      const w = (m.w || 160) + 12;
      m.el.classList.toggle('is-left', x + w > W && x - w > 0);
    });
  }
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!visible) return;
    const n = scenes.length;
    const p = clamp(progress, -1, n - 1);
    const heroLive = p < 0 && !reduced;
    // draw only when something can have changed: progress, size, a new texture, the drifting hero or a dashed line
    if (!dirty && p === drawn && !heroLive && !live) { stats.skipped++; return; }
    const c0 = performance.now();
    dirty = false; drawn = p;
    const time = (now - t0) / 1000;
    const i = Math.floor(p), f = p - i, j = Math.min(i + 1, n - 1);
    const sA = sceneOf(i), sB = sceneOf(j);
    const samePanel = i >= 0 && sA.panel != null && sA.panel === sB.panel;
    const tt = reduced ? (f < 0.5 ? 0 : 1) : ease(smooth(0.08, 0.92, f));
    // the hero drifts slowly until the reader starts scrolling
    const heroCam = { ...hero.camera, lon: hero.camera.lon + (reduced ? 0 : Math.sin(time * 0.06) * 12) };
    const alt = placeCamera(i < 0 ? heroCam : sA.camera, j < 0 ? heroCam : sB.camera, tt);

    // textures: keep the last complete state while a new one is painting, so nothing ever flashes blank
    const A = texturesOf(i, true) || lastA || lastB, B = texturesOf(j, true) || A;
    if (!A) { renderer.render(scene, camera); return; }
    lastA = A; lastB = B;
    earthU.uGA.value = A.g; earthU.uDA.value = A.d; earthU.uBoxA.value = A.box; earthU.uIGA.value = A.ig || blank; earthU.uIDA.value = A.id || blank;
    earthU.uGB.value = B.g; earthU.uDB.value = B.d; earthU.uBoxB.value = B.box; earthU.uIGB.value = B.ig || blank; earthU.uIDB.value = B.id || blank;
    const mix = reduced ? (f < 0.5 ? 0 : 1) : smooth(0.35, 0.65, f);
    // values: within one panel the years blend evenly across the gap; between panels they follow the texture mix
    const w = reduced ? (f < 0.5 ? 0 : 1) : samePanel ? smooth(0.1, 0.9, f) : mix;
    const blend = isData(sA) && isData(sB) && sameScale(sA.map.data, sB.map.data);
    earthU.uSlotA.value = (A.ig ? slotOf(i) : new Vector4(-1, 0, 1, 0)); earthU.uSlotB.value = (B.ig ? slotOf(j) : new Vector4(-1, 0, 1, 0));
    earthU.uWA.value = blend ? w : 0; earthU.uWB.value = blend ? 1 - w : 0;
    earthU.uMix.value = j === i ? 0 : mix;
    earthU.uHatch.value = 1.2e6 / Math.max(60, alt); // stripes about six pixels apart at any height

    const ba = bordersFor(sA.map.borders), bb = bordersFor(sB.map.borders);
    for (const m of borderSets.values()) m.material.opacity = 0;
    const cityA = sA.map.city ? 0.4 : 1, cityB = sB.map.city ? 0.4 : 1;
    ba.material.opacity += 0.28 * (1 - mix) * cityA; bb.material.opacity += 0.28 * mix * cityB;

    setSpikes(i, j, mix, alt);
    setLegend(sA, sB, w);
    live = false;
    for (const [idx, o] of overlays) if (idx !== i && idx !== j) o.g.visible = false;
    // within one panel the overlays and labels are the same, so the first stays and nothing dips between years
    if (samePanel) { live = setOverlay(i, 1, 1, time); if (j !== i) { const o = overlayFor(j); if (o) o.g.visible = false; } }
    else {
      if (i >= 0) live = setOverlay(i, 1, 1 - smooth(0.05, 0.4, f), time) || live;
      if (j !== i) live = setOverlay(j, smooth(0.55, 1, f), smooth(0.5, 0.8, f), time) || live;
    }

    const valueAt = key => {
      const a = isData(sA) ? valueOf(values, sA.map.data, key) : null, b = isData(sB) ? valueOf(values, sB.map.data, key) : null;
      return blend && a != null && b != null ? a + (b - a) * w : (w < 0.5 ? a : b);
    };
    for (const [idx, list] of markerEls) if (idx !== i && idx !== j) list.forEach(m => { m.el.style.opacity = 0; });
    if (samePanel) { showMarkers(i, 1, valueAt); if (j !== i) markersFor(j).forEach(m => { m.el.style.opacity = 0; }); }
    else {
      showMarkers(i, 1 - smooth(0.1, 0.45, f), valueAt);
      if (j !== i) showMarkers(j, smooth(0.6, 0.95, f), valueAt);
    }

    renderer.render(scene, camera);
    if (onFrame) onFrame(p);
    const ms = performance.now() - c0;
    stats.frames++; stats.frameMs += ms; stats.worstFrameMs = Math.max(stats.worstFrameMs, ms);
  }

  const ro = new ResizeObserver(resize); ro.observe(host);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; dirty = true; }); io.observe(host);
  addEventListener('visibilitychange', () => { visible = !document.hidden; dirty = true; });
  resize();
  // the first states are painted before the first frame, so the globe never starts blank
  for (const k of [-1, 0]) for (const job of Object.values(stateOf(k).jobs)) if (!texCache.has(job.key)) paint.now(job);
  raf = requestAnimationFrame(frame);

  return {
    setProgress(p) { progress = p; },
    // flows of a panel wait for the step of its chain that sends them (0 hidden, 1 drawn)
    setGate(panel, g) { if (gates.get(panel) !== g) { gates.set(panel, g); dirty = true; } },
    pointOf: key => point.get(key),
    // paint a coming state and build its overlays and labels in idle time, so its first frame does no work
    prepare(i) { if (i >= -1 && i < scenes.length) { texturesOf(i); overlayFor(i); markersFor(i); } },
    stats,
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); paint.destroy(); renderer.dispose(); },
  };
}
