// Shared helpers for the world engine and its layers: globe coordinates, dates, polygon winding and tube geometry.

import { Vector3, BufferGeometry, Float32BufferAttribute, ShaderMaterial, Color, AdditiveBlending } from 'three';
import { geoInterpolate, geoDistance, geoArea } from 'd3-geo';

export const DEG = Math.PI / 180;
export const R_KM = 6371;
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const ll = (lat, lon, r = 1) => {
  const p = lat * DEG, l = lon * DEG;
  return new Vector3(Math.cos(p) * Math.sin(l) * r, Math.sin(p) * r, Math.cos(p) * Math.cos(l) * r);
};
export const dayNum = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d) / 864e5; };
export const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const ringFix = poly => (geoArea(poly) > 2 * Math.PI ? { type: 'Polygon', coordinates: poly.coordinates.map(r => r.slice().reverse()) } : poly);
// d3 wants clockwise outer rings; simplification can leave a few the other way round, which would flood the globe
export const upright = f => {
  const g = f.geometry; if (!g) return f;
  const fix = c => (geoArea({ type: 'Polygon', coordinates: c }) > 2 * Math.PI ? c.map(r => r.slice().reverse()) : c);
  if (g.type === 'Polygon') f.geometry = { type: 'Polygon', coordinates: fix(g.coordinates) };
  else if (g.type === 'MultiPolygon') f.geometry = { type: 'MultiPolygon', coordinates: g.coordinates.map(fix) };
  return f;
};

export function lineGeometry(lines, lift = 1.0015) {
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
export function pathPoints(points, lift) {
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
export const tubeMaterial = (color, dash = 0) => new ShaderMaterial({
  uniforms: { uColor: { value: new Color(color) }, uDraw: { value: 0 }, uOpacity: { value: 0 }, uDash: { value: dash }, uTime: { value: 0 } },
  vertexShader: tubeVert, fragmentShader: tubeFrag, transparent: true, depthWrite: false, blending: AdditiveBlending,
});

// free a group's geometries and materials (overlays far from the reader)
export function disposeTree(obj) {
  obj.traverse(o => {
    o.geometry?.dispose();
    [].concat(o.material || []).forEach(m => m.dispose());
  });
  obj.removeFromParent();
}
