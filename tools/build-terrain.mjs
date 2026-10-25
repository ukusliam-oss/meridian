// Bake shaded-terrain tiles for the chapters' close and middle views: node tools/build-terrain.mjs
// Source: Copernicus DEM GLO-90 (Cloud Optimized GeoTIFFs on AWS, read by range requests at the overview level each
// output level needs; cached in tools/.cache/dem/). "Produced using Copernicus WorldDEM-90 © DLR e.V. 2010-2014 and
// © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all rights reserved."
// Output: assets/data/terrain/{z}/{x}_{y}.jpg, 512 px greyscale equirectangular tiles, row 0 at the north edge, and
// assets/data/terrain/index.json listing every tile. Tile x = floor((lon + 180) / deg), y = floor((lat + 90) / deg).
//   z0   64 px/degree (~1.7 km), from the 370 m overview halved, everywhere a scene below 2500 km looks
//   z1  256 px/degree (~430 m), from the 370 m overview, where a screen pixel is under ~1 km
//   z2  512 px/degree (~215 m), from the 185 m overview, everywhere a scene sharper than 0.45 km per screen pixel looks
// ONLY=0 (or 0,1 …) rebuilds just those levels and keeps the others in index.json.
// The shading: four light directions around the north-west (as the globe is lit), weighted towards the north-west,
// with height exaggerated more on the coarser level; flat ground is 0.75, the value the engine treats as level.
import { mkdirSync, writeFileSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { fromUrl } from 'geotiff';
import jpeg from 'jpeg-js';
import { footprint } from '../src/world/view.js';

const T = 512;
const LEVELS = [
  { z: 0, ppd: 64, deg: 8, ov: 3, exag: 4, pick: fp => true, maxAlt: 2500 },
  { z: 1, ppd: 256, deg: 2, ov: 2, exag: 2.6, pick: fp => fp.kmPerPx < 1, maxAlt: 2500 },
  { z: 2, ppd: 512, deg: 1, ov: 1, exag: 1.8, pick: fp => fp.kmPerPx < 0.45, maxAlt: 1e9 },
];
const SCREENS = [[1440, 900], [390, 844], [1920, 1080], [760, 1000]];
const CHAPTERS = ['assets/js/data/history/kq6.js', 'assets/js/data/economics/macro-policy.js',
  ...readdirSync('assets/js/data/geography').filter(f => f.endsWith('.js') && f !== 'engine-test.js').map(f => `assets/js/data/geography/${f}`)];

// ── which tiles: every tile a scene's footprint touches, on any of the reference screens ──
const want = new Map(LEVELS.map(L => [L.z, new Set()]));
for (const file of CHAPTERS) {
  const { default: ch } = await import(pathToFileURL(file).href);
  for (const s of ch.scenes) for (const [W, H] of SCREENS) {
    const fp = footprint(s.camera, W, H);
    if (!fp.box) continue;
    for (const L of LEVELS) {
      if (s.camera.alt > L.maxAlt || !L.pick(fp)) continue;
      const [w, so, e, n] = fp.box;
      for (let x = Math.floor((w + 180) / L.deg); x <= Math.floor((e + 180) / L.deg); x++)
        for (let y = Math.floor((so + 90) / L.deg); y <= Math.floor((n + 90) / L.deg); y++) want.get(L.z).add(`${x}_${y}`);
    }
  }
}
for (const L of LEVELS) console.log(`z${L.z}: ${want.get(L.z).size} tiles`);

// ── DEM: one 1° tile at one overview level, cached as Float32 with its size ──
mkdirSync('tools/.cache/dem', { recursive: true });
const demName = (lat, lon) => `Copernicus_DSM_COG_30_${lat < 0 ? 'S' : 'N'}${String(Math.abs(lat)).padStart(2, '0')}_00_${lon < 0 ? 'W' : 'E'}${String(Math.abs(lon)).padStart(3, '0')}_00_DEM`;
const demCache = new Map();
async function dem(lat, lon, ov) {
  const key = `${lat}_${lon}_${ov}`;
  if (demCache.has(key)) return demCache.get(key);
  const file = `tools/.cache/dem/${demName(lat, lon)}_o${ov}.f32`;
  let out = null;
  if (ov === 3) { // the 370 m overview halved by averaging (the files hold no coarser level)
    const src = await dem(lat, lon, 2);
    if (src) {
      const w = src.w >> 1, h = src.h >> 1, d = new Float32Array(w * h);
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        let a = 0; for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { const z = src.d[(y * 2 + dy) * src.w + x * 2 + dx]; a += z > -500 && z < 9000 ? z : 0; }
        d[y * w + x] = a / 4;
      }
      out = { w, h, d };
    }
    demCache.set(key, out); return out;
  }
  if (existsSync(file)) {
    const buf = readFileSync(file);
    if (buf.length > 8) { const w = buf.readUInt32LE(0), h = buf.readUInt32LE(4); out = { w, h, d: new Float32Array(buf.buffer.slice(buf.byteOffset + 8, buf.byteOffset + 8 + w * h * 4)) }; }
  } else {
    const n = demName(lat, lon);
    try {
      const tiff = await fromUrl(`https://copernicus-dem-90m.s3.amazonaws.com/${n}/${n}.tif`);
      const im = await tiff.getImage(Math.min(ov, (await tiff.getImageCount()) - 1));
      const d = Float32Array.from(await im.readRasters({ interleave: true }));
      out = { w: im.getWidth(), h: im.getHeight(), d };
      const head = Buffer.alloc(8); head.writeUInt32LE(out.w, 0); head.writeUInt32LE(out.h, 4);
      writeFileSync(file, Buffer.concat([head, Buffer.from(d.buffer)]));
    } catch { writeFileSync(file, Buffer.alloc(0)); } // no tile there: sea
  }
  demCache.set(key, out); return out;
}
// height at a lon/lat (bilinear inside a 1° tile; 0 over sea)
function heightAt(lat, lon, ov) {
  const la = Math.floor(lat), lo = Math.floor(lon), t = demCache.get(`${la}_${lo}_${ov}`);
  if (!t) return 0;
  const fx = (lon - lo) * t.w - 0.5, fy = (la + 1 - lat) * t.h - 0.5;
  const x0 = Math.max(0, Math.min(t.w - 1, Math.floor(fx))), y0 = Math.max(0, Math.min(t.h - 1, Math.floor(fy)));
  const x1 = Math.min(t.w - 1, x0 + 1), y1 = Math.min(t.h - 1, y0 + 1), ax = Math.max(0, Math.min(1, fx - x0)), ay = Math.max(0, Math.min(1, fy - y0));
  const v = (x, y) => { const z = t.d[y * t.w + x]; return z > -500 && z < 9000 ? z : 0; };
  return (v(x0, y0) * (1 - ax) + v(x1, y0) * ax) * (1 - ay) + (v(x0, y1) * (1 - ax) + v(x1, y1) * ax) * ay;
}
// fetch with a few at a time
async function pool(items, n, fn) { let i = 0; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; await fn(items[k], k); } })); }

// ── shade one output tile ──
const LIGHTS = [[315, 0.5], [270, 0.2], [0, 0.2], [225, 0.1]].map(([az, w]) => { const a = az * Math.PI / 180; return [Math.sin(a), Math.cos(a), w]; });
const ALT = Math.PI / 4, SIN = Math.sin(ALT), COS = Math.cos(ALT);
function shade(L, x, y) {
  const lon0 = x * L.deg - 180, lat1 = (y + 1) * L.deg - 90, step = L.deg / T;
  // heights on a (T + 2)² grid of pixel centres, one pixel of margin for the gradient
  const G = T + 2, h = new Float32Array(G * G);
  for (let r = 0; r < G; r++) for (let c = 0; c < G; c++) h[r * G + c] = heightAt(lat1 - (r - 0.5) * step, lon0 + (c - 0.5) * step, L.ov) * L.exag;
  const px = new Uint8Array(T * T * 4);
  for (let r = 0; r < T; r++) {
    const lat = lat1 - (r + 0.5) * step, dx = step * 111320 * Math.cos(lat * Math.PI / 180), dy = step * 110574;
    for (let c = 0; c < T; c++) {
      const H = (rr, cc) => h[(r + 1 + rr) * G + (c + 1 + cc)];
      // Horn's gradient (east and north positive)
      const gx = ((H(-1, 1) + 2 * H(0, 1) + H(1, 1)) - (H(-1, -1) + 2 * H(0, -1) + H(1, -1))) / (8 * dx);
      const gy = ((H(-1, -1) + 2 * H(-1, 0) + H(-1, 1)) - (H(1, -1) + 2 * H(1, 0) + H(1, 1))) / (8 * dy);
      const len = Math.hypot(gx, gy, 1);
      let v = 0;
      for (const [lx, ly, w] of LIGHTS) v += w * Math.max(0, (SIN + COS * (-gx * lx - gy * ly)) / len); // light towards (lx, ly)
      const o = (r * T + c) * 4, g = Math.round(Math.max(0, Math.min(1, v / SIN * 0.75)) * 255);
      px[o] = px[o + 1] = px[o + 2] = g; px[o + 3] = 255;
    }
  }
  return px;
}

// ── run ──
const ONLY = process.env.ONLY ? process.env.ONLY.split(',').map(Number) : null;
const old = ONLY && existsSync('assets/data/terrain/index.json') ? JSON.parse(readFileSync('assets/data/terrain/index.json', 'utf8')) : null;
const index = { attribution: 'Terrain: Copernicus DEM GLO-90 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA.', tile: T, levels: [] };
for (const L of LEVELS) {
  if (ONLY && !ONLY.includes(L.z)) { const keep = old && old.levels.find(l => l.z === L.z); if (keep) index.levels.push(keep); continue; }
  const tiles = [...want.get(L.z)].map(k => k.split('_').map(Number));
  // every 1° DEM tile those output tiles need, plus a ring for the gradient margin
  const cells = new Set();
  for (const [x, y] of tiles) for (let la = Math.floor(y * L.deg - 90) - 1; la <= Math.floor((y + 1) * L.deg - 90); la++)
    for (let lo = Math.floor(x * L.deg - 180) - 1; lo <= Math.floor((x + 1) * L.deg - 180); lo++) cells.add(`${la}_${lo}`);
  const list = [...cells].map(k => k.split('_').map(Number));
  let done = 0; const t0 = Date.now();
  await pool(list, 12, async ([la, lo]) => { await dem(la, lo, L.ov); if (++done % 40 === 0) console.log(`z${L.z} DEM ${done}/${list.length} · ${Math.round((Date.now() - t0) / 1000)} s`); });
  mkdirSync(`assets/data/terrain/${L.z}`, { recursive: true });
  const kept = [];
  let bytes = 0;
  for (const [x, y] of tiles) {
    const px = shade(L, x, y);
    // all-sea tiles are flat: leave them out, the engine falls back to the coarser relief there
    let flat = true; for (let i = 0; i < px.length; i += 4 * 97) if (Math.abs(px[i] - 191) > 2) { flat = false; break; }
    if (flat) continue;
    const jpg = jpeg.encode({ data: px, width: T, height: T }, 62).data; // soft shading: quality 62 is ~35% smaller than 78 and looks the same
    writeFileSync(`assets/data/terrain/${L.z}/${x}_${y}.jpg`, jpg); kept.push(`${x}_${y}`); bytes += jpg.length;
  }
  index.levels.push({ z: L.z, ppd: L.ppd, deg: L.deg, tiles: kept.sort() });
  index.levels.sort((a, b) => a.z - b.z);
  console.log(`z${L.z}: ${kept.length} tiles written, ${(bytes / 2 ** 20).toFixed(1)} MB`);
}
writeFileSync('assets/data/terrain/index.json', JSON.stringify(index));
console.log('wrote assets/data/terrain/index.json');
