// Geography layers on the globe (tools/build-geo.mjs): earthquakes and volcanoes as GPU points, plate boundaries as lines.
// A scene asks for them in its map: points: [{ id: 'quakes', minMag, years: [from, to], play }, { id: 'volcanoes', types }],
// plates: true or a list of kinds. Points sit just above the ground and the globe hides those on its far side.
import { BufferGeometry, Float32BufferAttribute, Points, ShaderMaterial, Color } from 'three';
import { ll } from './view.js';

// plate boundary colours: spreading teal, subduction red, collision amber, transform lilac
export const PLATE_COLOR = { divergent: '#4fd6c4', convergent: '#ff5a4f', collision: '#ffb347', transform: '#c9b3ff' };
// earthquake depth ramp (km): shallow quakes red, intermediate amber, deep ones cyan to violet
export const DEPTH_STOPS = [[0, '#ff5a4f'], [70, '#ffb347'], [300, '#6fd3ff'], [700, '#8f86ff']];
export const VOLCANO_COLOR = '#ff8a3d';
// shaking intensity (Modified Mercalli, IV to X): pale yellow to deep red
export const MMI_COLOR = { 4: '#fff3a3', 5: '#ffd166', 6: '#ffa94d', 7: '#ff7a3d', 8: '#ff4f3a', 9: '#e0233d', 10: '#a3123a' };
export const MMI_ROMAN = { 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X' };

const vert = /* glsl */`
  attribute vec4 aInfo;                 // magnitude (quakes), depth km, year, type (volcanoes)
  uniform float uKind, uOpacity, uY0, uY1, uNow, uMinMag, uPx, uScale;
  uniform vec4 uTypes;
  uniform vec3 uC0, uC1, uC2, uC3, uVolc;
  varying vec3 vColor; varying float vAlpha;
  vec3 depthColor(float d) {
    if (d < 70.0) return mix(uC0, uC1, d / 70.0);
    if (d < 300.0) return mix(uC1, uC2, (d - 70.0) / 230.0);
    return mix(uC2, uC3, clamp((d - 300.0) / 400.0, 0.0, 1.0));
  }
  void main() {
    float on = uOpacity;
    float size;
    if (uKind < 0.5) {
      on *= step(uMinMag, aInfo.x + 0.001) * step(uY0, aInfo.z) * step(aInfo.z, uY1);
      size = 1.6 + (aInfo.x - 5.5) * 2.6;
      vColor = depthColor(aInfo.y);
      // playing through the years: a quake appears when the clock passes it, flares, then settles
      if (uNow > 0.0) {
        float age = uNow - aInfo.z;
        on *= step(0.0, age);
        float flare = exp(-age * 2.5);
        size *= 1.0 + 2.2 * flare; vColor = mix(vColor, vec3(1.0), flare * 0.6);
      }
    } else {
      float t = aInfo.w;
      on *= t < 0.5 ? uTypes.x : t < 1.5 ? uTypes.y : t < 2.5 ? uTypes.z : uTypes.w;
      size = 7.0; vColor = uVolc;
    }
    vAlpha = on;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = on > 0.001 ? size * uPx * uScale : 0.0;
  }`;
const frag = /* glsl */`
  uniform float uKind;
  varying vec3 vColor; varying float vAlpha;
  void main() {
    vec2 p = gl_PointCoord;
    float a;
    if (uKind < 0.5) { float d = length(p - 0.5); a = smoothstep(0.5, 0.36, d); }
    else { // a triangle, point up, with a dark edge so neighbours stay apart
      float y = p.y, w = (y - 0.12) * 0.62;
      float inside = step(0.12, y) * step(y, 0.88) * step(abs(p.x - 0.5), w);
      float edge = step(0.2, y) * step(y, 0.8) * step(abs(p.x - 0.5), w - 0.07);
      if (inside < 0.5) discard;
      gl_FragColor = vec4(mix(vec3(0.05), vColor, edge), vAlpha); return;
    }
    if (a < 0.02) discard;
    gl_FragColor = vec4(vColor, a * vAlpha * 0.9);
  }`;

// one Points object per dataset; set(spec, opacity, now, px, scale) drives it each frame
export function pointsLayer(kind, json) {
  const n = json.data.length / (kind === 'quakes' ? 5 : 1);
  const pos = new Float32Array(n * 3), info = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    let lon, lat, a, b, c, d;
    if (kind === 'quakes') { [lon, lat, b, a, c] = json.data.slice(i * 5, i * 5 + 5); d = 0; }
    else { const r = json.data[i]; [lon, lat] = r; a = 0; b = 0; c = r[3] || 0; d = r[2]; }
    const v = ll(lat, lon, 1.0004); pos.set([v.x, v.y, v.z], i * 3); info.set([a, b, c, d], i * 4);
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('aInfo', new Float32BufferAttribute(info, 4));
  const col = h => new Color(h);
  const mat = new ShaderMaterial({
    vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false,
    uniforms: {
      uKind: { value: kind === 'quakes' ? 0 : 1 }, uOpacity: { value: 0 }, uY0: { value: 0 }, uY1: { value: 1e4 }, uNow: { value: 0 },
      uMinMag: { value: 0 }, uPx: { value: 1 }, uScale: { value: 1 }, uTypes: { value: [1, 1, 1, 1] },
      uC0: { value: col(DEPTH_STOPS[0][1]) }, uC1: { value: col(DEPTH_STOPS[1][1]) }, uC2: { value: col(DEPTH_STOPS[2][1]) }, uC3: { value: col(DEPTH_STOPS[3][1]) },
      uVolc: { value: col(VOLCANO_COLOR) },
    },
  });
  const obj = new Points(g, mat); obj.frustumCulled = false; obj.visible = false; obj.renderOrder = 3;
  return {
    obj,
    set(spec, opacity, now, px, scale) {
      const u = mat.uniforms;
      obj.visible = opacity > 0.001; u.uOpacity.value = opacity;
      if (!spec) return;
      u.uMinMag.value = spec.minMag || 0;
      u.uY0.value = spec.years ? spec.years[0] : 0; u.uY1.value = spec.years ? spec.years[1] + 1 : 1e4;
      u.uNow.value = now; u.uPx.value = px; u.uScale.value = scale;
      const t = spec.types; u.uTypes.value = t ? [0, 1, 2, 3].map(k => (t.includes(k) ? 1 : 0)) : [1, 1, 1, 1];
    },
  };
}

// plate boundary lines of the asked kinds, as [kind, lines] for the engine's fat-line overlay
export function plateLines(json, kinds) {
  return (kinds === true ? Object.keys(PLATE_COLOR) : kinds).filter(k => json[k]).map(k => [k, json[k].map(l => l.p)]);
}

// ── landscape: a patch of real height (dem/{site}.png, heights packed in RGB) laid on the globe ────────────────
// Each vertex sits at its height × exag above the sphere; the shader colours by height, shades with the globe's light
// and can draw contour lines (contours: interval in metres, faded in with uTopo), the step from landscape to map.
export async function loadDem(base, site) {
  const meta = await (await fetch(`${base}${site}.json`)).json();
  const img = await createImageBitmap(await (await fetch(`${base}${site}.png`)).blob(), { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
  const c = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(img.width, img.height) : Object.assign(document.createElement('canvas'), { width: img.width, height: img.height });
  const x = c.getContext('2d', { willReadFrequently: true });
  x.drawImage(img, 0, 0);
  const px = x.getImageData(0, 0, img.width, img.height).data, h = new Float32Array(img.width * img.height);
  for (let i = 0; i < h.length; i++) h[i] = px[i * 4] * 65536 + px[i * 4 + 1] * 256 + px[i * 4 + 2] - 1000;
  const [w, s, e, n] = meta.box;
  // height (m) at a lat/lon inside the box, bilinear
  const at = (lat, lon) => {
    const fx = (lon - w) / (e - w) * meta.width - 0.5, fy = (n - lat) / (n - s) * meta.height - 0.5;
    const x0 = Math.max(0, Math.min(meta.width - 2, Math.floor(fx))), y0 = Math.max(0, Math.min(meta.height - 2, Math.floor(fy)));
    const ax = Math.max(0, Math.min(1, fx - x0)), ay = Math.max(0, Math.min(1, fy - y0)), W = meta.width;
    return (h[y0 * W + x0] * (1 - ax) + h[y0 * W + x0 + 1] * ax) * (1 - ay) + (h[(y0 + 1) * W + x0] * (1 - ax) + h[(y0 + 1) * W + x0 + 1] * ax) * ay;
  };
  return { meta, at };
}

const R_M = 6371000;
const patchVert = /* glsl */`
  attribute float aH; attribute float aEdge;
  varying float vH; varying float vEdge; varying vec3 vN;
  void main() { vH = aH; vEdge = aEdge; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const patchFrag = /* glsl */`
  uniform vec3 uLight; uniform float uOpacity, uTopo, uContour, uLo, uHi;
  varying float vH; varying float vEdge; varying vec3 vN;
  void main() {
    float t = clamp((vH - uLo) / max(1.0, uHi - uLo), 0.0, 1.0);
    // low ground the natural globe's grey-blue, rising to pale stone and white near the top
    vec3 base = mix(vec3(0.36, 0.40, 0.50), vec3(0.78, 0.76, 0.72), smoothstep(0.0, 0.7, t));
    base = mix(base, vec3(0.97), smoothstep(0.8, 0.98, t));
    float lit = 0.35 + 0.75 * max(0.0, dot(normalize(vN), normalize(uLight)));
    vec3 col = base * mix(lit, 1.0, uTopo * 0.7); // the map flattens the shading
    if (uContour > 0.0) {
      float f = vH / uContour, w = fwidth(f);
      float line = 1.0 - smoothstep(0.0, w * 1.4, abs(fract(f - 0.5) - 0.5));
      float index = 1.0 - step(0.5, abs(mod(floor(f + 0.5), 5.0))); // every fifth line is an index contour
      col = mix(col, vec3(0.55, 0.30, 0.12), line * uTopo * (0.65 + 0.35 * index));
    }
    gl_FragColor = vec4(col, uOpacity * smoothstep(0.0, 0.06, vEdge));
  }`;

// grid: (gw + 1) × (gh + 1) vertices over the DEM's box
export function terrainPatch(dem, exag, light, three) {
  const { BufferGeometry, Float32BufferAttribute, Mesh, ShaderMaterial, Vector3 } = three;
  const { meta, at } = dem, [w, s, e, n] = meta.box;
  const gw = Math.min(200, Math.round(meta.width / 3)), gh = Math.round(gw * meta.height / meta.width);
  const pos = [], hs = [], edge = [], idx = [];
  for (let r = 0; r <= gh; r++) for (let c = 0; c <= gw; c++) {
    const lat = n - r / gh * (n - s), lon = w + c / gw * (e - w), h = at(lat, lon);
    const v = ll(lat, lon, 1 + Math.max(0, h) * exag / R_M);
    pos.push(v.x, v.y, v.z); hs.push(h); edge.push(Math.min(c / gw, 1 - c / gw, r / gh, 1 - r / gh));
  }
  for (let r = 0; r < gh; r++) for (let c = 0; c < gw; c++) {
    const a = r * (gw + 1) + c, b = a + 1, d = a + gw + 1, f = d + 1;
    idx.push(a, d, b, b, d, f);
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('aH', new Float32BufferAttribute(hs, 1)); g.setAttribute('aEdge', new Float32BufferAttribute(edge, 1));
  g.setIndex(idx); g.computeVertexNormals();
  const mat = new ShaderMaterial({
    vertexShader: patchVert, fragmentShader: patchFrag, transparent: true, depthWrite: true,
    uniforms: { uLight: { value: light }, uOpacity: { value: 0 }, uTopo: { value: 0 }, uContour: { value: 0 }, uLo: { value: meta.min }, uHi: { value: meta.max } },
  });
  const m = new Mesh(g, mat); m.frustumCulled = false; m.visible = false; m.renderOrder = 2;
  return m;
}

// a line across the landscape at its own height (just above it), and the profile along it: [{ d km, h m }]
export function sectionOf(dem, from, to, exag, n = 240) {
  const pts = [], prof = [];
  const R = 6371, rad = Math.PI / 180;
  const dist = (a, b) => R * Math.acos(Math.min(1, Math.sin(a[0] * rad) * Math.sin(b[0] * rad) + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.cos((b[1] - a[1]) * rad)));
  const total = dist(from, to);
  for (let k = 0; k <= n; k++) {
    const t = k / n, lat = from[0] + (to[0] - from[0]) * t, lon = from[1] + (to[1] - from[1]) * t, h = dem.at(lat, lon);
    pts.push(ll(lat, lon, 1 + (Math.max(0, h) * exag + 40) / R_M)); prof.push({ d: total * t, h });
  }
  return { pts, prof, total };
}

// ── the Earth cut open: an octant removed, its three faces showing the layers ───────────────────────────────
// radii from the centre, km: inner core to 1220, outer core to 3480, mantle to about 6340 (a 30 km crust above, drawn
// thicker so it shows). The earth shader discards the octant (lat > 0 and lon0 ≤ lon ≤ lon0 + 90° · open).
export const LAYERS = [
  { name: 'Inner core', r0: 0, r1: 1220, c: '#fff1b8' },
  { name: 'Outer core', r0: 1220, r1: 3480, c: '#ffb04a' },
  { name: 'Mantle', r0: 3480, r1: 6250, c: '#d9542f' },
  { name: 'Crust', r0: 6250, r1: 6371, c: '#a3adc2' },
];
export function cutaway(lon0, three) {
  const { BufferGeometry, Float32BufferAttribute, Mesh, MeshBasicMaterial, Group, Color, DoubleSide } = three;
  const g = new Group(); g.visible = false;
  const Y = [0, 1, 0], dir = lon => { const v = ll(0, lon); return [v.x, v.y, v.z]; };
  // a quarter annulus in the plane of u and v, one-degree sectors in order of angle, so drawRange can open it
  const quarter = (u, v, r0, r1, color) => {
    const pos = [];
    for (let k = 0; k < 90; k++) {
      const a0 = k * Math.PI / 180, a1 = (k + 1) * Math.PI / 180;
      const p = (a, r) => [0, 1, 2].map(i => (Math.cos(a) * u[i] + Math.sin(a) * v[i]) * r / 6371);
      const q00 = p(a0, r0), q01 = p(a0, r1), q10 = p(a1, r0), q11 = p(a1, r1);
      pos.push(...q00, ...q01, ...q11, ...q00, ...q11, ...q10);
    }
    const geo = new BufferGeometry(); geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    const m = new Mesh(geo, new MeshBasicMaterial({ color: new Color(color), side: DoubleSide, transparent: true, opacity: 1 }));
    m.frustumCulled = false; return m;
  };
  const faces = { a: [], b: [], eq: [] };
  for (const L of LAYERS) {
    faces.a.push(quarter(dir(lon0), Y, L.r0, L.r1, L.c));
    faces.b.push(quarter(dir(lon0 + 90), Y, L.r0, L.r1, L.c));
    faces.eq.push(quarter(dir(lon0), dir(lon0 + 90), L.r0, L.r1, L.c));
  }
  const b = new Group(); faces.b.forEach(m => b.add(m)); g.add(b);
  [...faces.a, ...faces.eq].forEach(m => g.add(m));
  return {
    g,
    // open: 0 closed, 1 a full octant removed; face b swings round the axis and the equatorial face grows with it
    set(open, opacity) {
      g.visible = opacity > 0.001 && open > 0.001;
      b.rotation.y = -(1 - open) * Math.PI / 2;
      const count = Math.round(90 * open) * 6;
      faces.eq.forEach(m => { m.geometry.setDrawRange(0, count); m.material.opacity = opacity; });
      [...faces.a, ...faces.b].forEach(m => { m.material.opacity = opacity; });
    },
  };
}
