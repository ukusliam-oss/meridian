// Bakes the land mask into a list of dot positions so the page ships no map data.
// Fibonacci sphere → keep points inside Natural Earth 110m land (spherical test via d3-geo).
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { feature } from 'topojson-client';
import { geoContains, geoBounds } from 'd3-geo';

const require = createRequire(import.meta.url);
const topo = JSON.parse(readFileSync(require.resolve('world-atlas/land-110m.json'), 'utf8'));
const land = feature(topo, topo.objects.land);
const polys = land.features.flatMap(f =>
  f.geometry.type === 'MultiPolygon'
    ? f.geometry.coordinates.map(c => ({ type: 'Feature', geometry: { type: 'Polygon', coordinates: c } }))
    : [f]);
const boxes = polys.map(p => ({ p, b: geoBounds(p) }));
const inBox = ([lon, lat], [[x0, y0], [x1, y1]]) =>
  lat >= y0 - 1 && lat <= y1 + 1 && (x0 <= x1 ? lon >= x0 - 1 && lon <= x1 + 1 : lon >= x0 - 1 || lon <= x1 + 1);

const N = Number(process.argv[2] || 18000);
const out = [];
const golden = Math.PI * (3 - Math.sqrt(5));
for (let i = 0; i < N; i++) {
  const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = golden * i;
  const lat = Math.asin(y) * 180 / Math.PI;
  const lon = ((Math.atan2(r * Math.sin(th), r * Math.cos(th)) * 180 / Math.PI) + 540) % 360 - 180;
  const pt = [lon, lat];
  if (lat < -60) { if (lat < -63) out.push(pt); continue; }   // Antarctica: the 110m ring is coarse
  if (boxes.some(({ p, b }) => inBox(pt, b) && geoContains(p, pt))) out.push(pt);
}
const flat = out.flatMap(([lon, lat]) => [Math.round(lat * 10), Math.round(lon * 10)]);
writeFileSync(new URL('../src/land-dots.json', import.meta.url), JSON.stringify(flat));
console.log(`${out.length} land dots of ${N}`);
