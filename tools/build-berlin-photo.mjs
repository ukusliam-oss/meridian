// Fetch the 1953 aerial-photo mosaic of Berlin as map tiles: node tools/build-berlin-photo.mjs
// Source: Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen Berlin, "Luftbilder 1953 (Maßstab 1:22 000)" — Soviet
// vertical photographs of the whole city, June 1953 — via the Geoportal Berlin WMS (luftbild_1953_22, layer
// c_luftbilder_1953_22_raster), Datenlizenz Deutschland – Zero – Version 2.0 (https://www.govdata.de/dl-de/zero-2-0).
// Output: assets/data/berlin1953/{z}/{x}_{y}.jpg, 512 px greyscale equirectangular tiles (row 0 at the north edge), and
// assets/data/berlin1953/index.json. Tile x = floor((lon + 180) * ppd / 512), y = floor((lat + 90) * ppd / 512).
//   z1  2048 px/°  (~54 m N–S, ~33 m E–W)  the whole city
//   z2  8192 px/°  (~14 m, ~8 m)           the whole city
//   z3  32768 px/° (~3.4 m, ~2 m)          the centre, where the Wall ran between Wedding, Mitte, Kreuzberg and Treptow
// Tiles are kept only where the photograph has content (the WMS returns white outside its coverage).
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import jpeg from 'jpeg-js';
import { merge } from 'topojson-client';

const WMS = 'https://gdi.berlin.de/services/wms/luftbild_1953_22';
const LAYER = 'c_luftbilder_1953_22_raster';
const T = 512;
const CITY = [13.08, 52.33, 13.77, 52.68];
const LEVELS = [
  { z: 1, ppd: 2048, box: CITY },
  { z: 2, ppd: 8192, box: CITY },
  { z: 3, ppd: 32768, box: [13.30, 52.465, 13.50, 52.56] },
];
const CACHE = 'tools/.cache/berlin1953';
mkdirSync(CACHE, { recursive: true });

async function tile(L, x, y) {
  const deg = T / L.ppd, w = x * deg - 180, s = y * deg - 90, e = w + deg, n = s + deg;
  const file = `${CACHE}/${L.z}_${x}_${y}.jpg`;
  if (existsSync(file)) return readFileSync(file);
  // WMS 1.3.0 with EPSG:4326 takes the bounding box as lat,lon
  const url = `${WMS}?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=${LAYER}&STYLES=&CRS=EPSG:4326&BBOX=${s},${w},${n},${e}&WIDTH=${T}&HEIGHT=${T}&FORMAT=image/jpeg`;
  for (let k = 0; k < 4; k++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(60000) });
      const buf = Buffer.from(await r.arrayBuffer());
      if (r.ok && buf[0] === 0xff && buf[1] === 0xd8) { writeFileSync(file, buf); return buf; }
    } catch { /* retry */ }
    await new Promise(r => setTimeout(r, 2000 * (k + 1)));
  }
  throw new Error(`tile ${L.z} ${x} ${y} failed`);
}
async function pool(items, n, fn) { let i = 0; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; await fn(items[k], k); } })); }

const index = {
  attribution: 'Aerial photographs, June 1953: Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen Berlin, Luftbilder 1953 (1:22 000), dl-de/zero-2-0.',
  date: '1953-06', tile: T, levels: [],
};
for (const L of LEVELS) {
  const deg = T / L.ppd, [w, s, e, n] = L.box, list = [];
  for (let x = Math.floor((w + 180) / deg); x <= Math.floor((e + 180) / deg); x++)
    for (let y = Math.floor((s + 90) / deg); y <= Math.floor((n + 90) / deg); y++) list.push([x, y]);
  mkdirSync(`assets/data/berlin1953/${L.z}`, { recursive: true });
  const kept = []; let bytes = 0, done = 0;
  await pool(list, 6, async ([x, y]) => {
    const buf = await tile(L, x, y);
    // keep tiles with photograph in them: outside its coverage the service paints white
    const img = jpeg.decode(buf, { useTArray: true, formatAsRGBA: false });
    let white = 0, n = 0;
    for (let i = 0; i < img.data.length; i += 3 * 41) { n++; if (img.data[i] > 245) white++; }
    if (white / n < 0.97) { writeFileSync(`assets/data/berlin1953/${L.z}/${x}_${y}.jpg`, buf); kept.push(`${x}_${y}`); bytes += buf.length; }
    if (++done % 25 === 0) console.log(`z${L.z} ${done}/${list.length}`);
  });
  index.levels.push({ z: L.z, ppd: L.ppd, deg, tiles: kept.sort() });
  console.log(`z${L.z}: ${kept.length} of ${list.length} tiles, ${(bytes / 2 ** 20).toFixed(1)} MB`);
}
// ── frame levelling ──
// The mosaic is cut from separate photographs, each exposed differently, so it reads as a patchwork of rectangles with
// sharp, straight seams. On the z2 grid (log brightness): find the seams (below), then give half of each seam's step
// to either side, fading out over ~2 km away from the seam and tapered along it, so the step is gone and nothing else
// changes. Every level's tiles get the same correction.
{
  const L = LEVELS[1], kept = index.levels[1].tiles.map(k => k.split('_').map(Number));
  const x0 = Math.min(...kept.map(v => v[0])), x1 = Math.max(...kept.map(v => v[0])), y0 = Math.min(...kept.map(v => v[1])), y1 = Math.max(...kept.map(v => v[1]));
  const MW = (x1 - x0 + 1) * T, MH = (y1 - y0 + 1) * T, N = MW * MH;
  const lum = new Float32Array(N), w = new Float32Array(N);
  for (const [x, y] of kept) {
    const img = jpeg.decode(readFileSync(`${CACHE}/2_${x}_${y}.jpg`), { useTArray: true, formatAsRGBA: false });
    const ox = (x - x0) * T, oy = (y1 - y) * T;
    for (let r = 0; r < T; r++) for (let c = 0; c < T; c++) {
      const v = img.data[(r * T + c) * 3], i = (oy + r) * MW + ox + c;
      if (v < 245) { lum[i] = Math.log(v + 8); w[i] = 1; }
    }
  }
  // weighted box blur along rows (dx = 1) or columns (dx = MW), radius R
  const box = (a, R, alongRows) => {
    const out = new Float32Array(N), [n, m, st, ls] = alongRows ? [MH, MW, 1, MW] : [MW, MH, MW, 1];
    for (let l = 0; l < n; l++) {
      let acc = 0; const b = l * ls;
      for (let k = -R; k < m + R; k++) {
        const add = k + R, sub = k - R - 1;
        if (add < m) acc += a[b + add * st];
        if (sub >= 0) acc -= a[b + sub * st];
        if (k >= 0 && k < m) out[b + k * st] = acc;
      }
    }
    return out;
  };
  // lightly smoothed brightness, then the seams in each direction
  const sw = box(box(w, 2, true), 2, false), sl = box(box(Float32Array.from(lum, (v, i) => v * w[i]), 2, true), 2, false);
  const ls = Float32Array.from(sl, (v, i) => sw[i] > 0.5 ? v / sw[i] : 0);
  const K = 6, TH = +(process.env.TH || 0.06), RATIO = +(process.env.RATIO || 0.6), STRAIGHT = +(process.env.STRAIGHT || 0.55);
  const C = new Float32Array(N), LAMBDA = 250, FADE = Math.exp(-1 / LAMBDA);
  const seams = alongRows => { // alongRows: the step across columns, so seams run north–south
    const [n, m, st, lstr] = alongRows ? [MH, MW, 1, MW] : [MW, MH, MW, 1];
    const step = new Float32Array(N);
    for (let l = 0; l < n; l++) {
      const b = l * lstr;
      for (let k = K; k < m - K; k++) {
        let a1 = 0, a2 = 0, w1 = 0, w2 = 0;
        for (let j = 0; j < K; j++) { const p = b + (k - j) * st, q = b + (k + 1 + j) * st; a1 += ls[p] * w[p]; w1 += w[p]; a2 += ls[q] * w[q]; w2 += w[q]; }
        if (w1 >= K - 1 && w2 >= K - 1) step[b + k * st] = a2 / w2 - a1 / w1;
      }
    }
    // a seam is a column (or row) that steps the same way along a whole block of BL lines (~2.6 km): frame edges are
    // straight and run on for kilometres, shores, forest edges and streets of light and dark blocks do not. Blocks
    // overlap; along each block line the barrier follows the step's peak, as the WMS turns the frames by about a degree
    const BL = alongRows ? 256 : 512; // east–west seams (between flight strips) run longer
    const bar = new Uint8Array(N), S = new Float32Array(m), A = new Float32Array(m), at = new Int32Array(BL);
    for (let l0 = 0; l0 + BL <= n; l0 += BL / 4) {
      S.fill(0); A.fill(0);
      for (let l = l0; l < l0 + BL; l++) for (let k = 0; k < m; k++) { const v = step[l * lstr + k * st]; S[k] += v; A[k] += Math.abs(v); }
      for (let k = 6; k < m - 6; k++) {
        const v = Math.abs(S[k]);
        if (v < TH * BL || v < RATIO * A[k]) continue;
        let peak = true;
        for (let j = 1; j <= 6 && peak; j++) peak = v >= Math.abs(S[k - j]) && v >= Math.abs(S[k + j]);
        if (!peak) continue;
        const sg = Math.sign(S[k]);
        let straight = 0;
        for (let l = l0; l < l0 + BL; l++) {
          let best = k, bv = -Infinity;
          for (let j = -4; j <= 4; j++) { const kk = k + j; if (kk < 0 || kk >= m) continue; const u = step[l * lstr + kk * st] * sg; if (u > bv) { bv = u; best = kk; } }
          at[l - l0] = best;
          if (Math.abs(best - k) <= 2) straight++;
        }
        if (straight < STRAIGHT * BL) continue; // a real seam stays on its line; noise jumps about
        // a seam between at and at + 1: the side before it goes up by half the step, the side after down by half. Hann
        // windows on blocks overlapping by three quarters add up to 2, hence the extra half
        const half = Math.max(-0.5, Math.min(0.5, S[k] / BL)) * 0.25;
        for (let l = l0; l < l0 + BL; l++) {
          const a = at[l - l0], h = half * (0.5 - 0.5 * Math.cos(2 * Math.PI * (l - l0 + 0.5) / BL)), b = l * lstr;
          bar[b + a * st] = 1;
          let f = h;
          for (let kk = a; kk >= 0 && kk > a - 4 * LAMBDA; kk--, f *= FADE) C[b + kk * st] += f;
          f = h;
          for (let kk = a + 1; kk < m && kk <= a + 4 * LAMBDA; kk++, f *= FADE) C[b + kk * st] -= f;
        }
      }
    }
    return bar;
  };
  const barV = seams(true), barH = seams(false);
  for (let i = 0; i < N; i++) C[i] = Math.max(-0.7, Math.min(0.7, C[i]));
  let nb = 0; for (let i = 0; i < N; i++) nb += barV[i] + barH[i];
  if (process.env.SEAMS) { // a check image: the photo dimmed, the seams found in white, at a third of the size
    const DW = Math.floor(MW / 3), DH = Math.floor(MH / 3), d = new Uint8Array(DW * DH * 4);
    for (let r = 0; r < DH * 3; r++) for (let c = 0; c < DW * 3; c++) {
      const i = r * MW + c, o = (Math.floor(r / 3) * DW + Math.floor(c / 3)) * 4;
      if (barV[i] || barH[i]) d[o] = d[o + 1] = d[o + 2] = 255; else if (r % 3 === 1 && c % 3 === 1 && d[o] !== 255) d[o] = d[o + 1] = d[o + 2] = w[i] ? Math.exp(lum[i]) * 0.45 : 0;
      d[o + 3] = 255;
    }
    writeFileSync('tools/.cache/seams.jpg', jpeg.encode({ data: d, width: DW, height: DH }, 80).data);
  }
  console.log(`levelling: ${MW}x${MH}, ${nb} seam pixels`);
  // z3 tiles come from the service darker than z2 over the same ground; D (on the z2 grid, smoothed over ~100 m) is how
  // much brighter z2 is there, so z3 keeps its detail and takes z2's tone and its box edge never shows
  const z3 = index.levels.find(l => l.z === 3), D = new Float32Array(N);
  if (z3) {
    const sum = new Float32Array(N), cnt = new Float32Array(N);
    for (const key of z3.tiles) {
      const [x, y] = key.split('_').map(Number), img = jpeg.decode(readFileSync(`${CACHE}/3_${x}_${y}.jpg`), { useTArray: true, formatAsRGBA: false });
      for (let r = 0; r < T; r++) {
        const row = (y1 + 1) * T - ((y + 1) * T - r) / 4;
        for (let c = 0; c < T; c++) {
          const v = img.data[(r * T + c) * 3], i = Math.floor(row) * MW + Math.floor((x * T + c) / 4 - x0 * T);
          if (v < 245 && i >= 0 && i < N) { sum[i] += Math.log(v + 8); cnt[i]++; }
        }
      }
    }
    const both = Float32Array.from(cnt, (v, i) => v > 0 && w[i] ? 1 : 0), B = a => box(box(box(box(a, 8, true), 8, false), 8, true), 8, false);
    const den = B(both), n2 = B(Float32Array.from(lum, (v, i) => v * both[i])), n3 = B(Float32Array.from(sum, (v, i) => both[i] ? v / cnt[i] : 0));
    for (let i = 0; i < N; i++) D[i] = den[i] > 1 ? Math.max(-0.7, Math.min(0.7, (n2[i] - n3[i]) / den[i])) : 0;
  }
  // contrast: some frames are hazy. Around the local mean M (~300 m), detail is scaled by G so the local spread of
  // brightness comes out the same everywhere (within limits, so a lake stays calm and a lit roof stays lit)
  const BB = a => box(box(box(box(a, 30, true), 30, false), 30, true), 30, false);
  const wb = BB(w), mb = BB(Float32Array.from(lum, (v, i) => v * w[i])), qb = BB(Float32Array.from(lum, (v, i) => v * v * w[i]));
  const M = new Float32Array(N), SD = new Float32Array(N);
  for (let i = 0; i < N; i++) if (wb[i] > 1) { M[i] = mb[i] / wb[i]; SD[i] = Math.sqrt(Math.max(1e-6, qb[i] / wb[i] - M[i] * M[i])); }
  const sds = SD.filter((v, i) => w[i] && v > 0).sort(), target = sds[Math.floor(sds.length / 2)];
  const G = Float32Array.from(SD, v => v > 0 ? Math.max(0.75, Math.min(1.8, target / v)) : 1);
  console.log(`contrast: median spread ${target.toFixed(3)}`);
  // apply to every level's tiles, sampling C, M, G (and for z3, D) bilinearly on the z2 grid
  const at = (lon, lat, C) => {
    const fx = (lon + 180) * L.ppd - x0 * T - 0.5, fy = (y1 + 1) * T - (lat + 90) * L.ppd - 0.5;
    const cx = Math.max(0, Math.min(MW - 2, Math.floor(fx))), cy = Math.max(0, Math.min(MH - 2, Math.floor(fy)));
    const ax = Math.max(0, Math.min(1, fx - cx)), ay = Math.max(0, Math.min(1, fy - cy)), i = cy * MW + cx;
    return (C[i] * (1 - ax) + C[i + 1] * ax) * (1 - ay) + (C[i + MW] * (1 - ax) + C[i + MW + 1] * ax) * ay;
  };
  for (const lv of index.levels) {
    const Lz = LEVELS.find(l => l.z === lv.z);
    for (const key of lv.tiles) {
      const [x, y] = key.split('_').map(Number), img = jpeg.decode(readFileSync(`${CACHE}/${lv.z}_${x}_${y}.jpg`), { useTArray: true, formatAsRGBA: false });
      const px = new Uint8Array(T * T * 4);
      for (let r = 0; r < T; r++) {
        const lat = (y + 1) * lv.deg - 90 - (r + 0.5) / Lz.ppd;
        for (let c = 0; c < T; c++) {
          const v = img.data[(r * T + c) * 3], o = (r * T + c) * 4;
          const lon = x * lv.deg - 180 + (c + 0.5) / Lz.ppd, m = at(lon, lat, M);
          const lg = Math.log(v + 8) + (lv.z === 3 ? at(lon, lat, D) : 0);
          const out = m ? m + (lg - m) * at(lon, lat, G) + at(lon, lat, C) : lg + at(lon, lat, C);
          const g = v >= 245 ? v : Math.max(0, Math.min(244, Math.round(Math.exp(out) - 8)));
          px[o] = px[o + 1] = px[o + 2] = g; px[o + 3] = 255;
        }
      }
      writeFileSync(`assets/data/berlin1953/${lv.z}/${key}.jpg`, jpeg.encode({ data: px, width: T, height: T }, 84).data);
    }
  }
}
// coverage mask: where the photographs have content, from the z1 tiles, blurred over ~6 px (~300 m) so the photo can
// fade out softly instead of ending at tile edges, and cut to Greater Berlin (the four sectors of borders.json) with
// about a kilometre to spare, so the Wall on the city limit stands on the photograph and the frames' ragged outer edge
// never shows. One greyscale image over the z1 tiles' box.
{
  const L = LEVELS[0], deg = T / L.ppd, kept = index.levels[0].tiles.map(k => k.split('_').map(Number));
  const x0 = Math.min(...kept.map(v => v[0])), x1 = Math.max(...kept.map(v => v[0])), y0 = Math.min(...kept.map(v => v[1])), y1 = Math.max(...kept.map(v => v[1]));
  const MW = (x1 - x0 + 1) * T, MH = (y1 - y0 + 1) * T, cov = new Float32Array(MW * MH);
  for (const [x, y] of kept) {
    const img = jpeg.decode(readFileSync(`assets/data/berlin1953/1/${x}_${y}.jpg`), { useTArray: true, formatAsRGBA: false });
    const ox = (x - x0) * T, oy = (y1 - y) * T; // rows run north to south
    for (let r = 0; r < T; r++) for (let c = 0; c < T; c++) cov[(oy + r) * MW + ox + c] = img.data[(r * T + c) * 3] < 240 ? 1 : 0;
  }
  const blur = (src, R) => { // separable box blur, twice
    let a = src, b = new Float32Array(src.length);
    for (let pass = 0; pass < 2; pass++) {
      for (let r = 0; r < MH; r++) { let acc = 0; for (let c = -R; c < MW + R; c++) { acc += a[r * MW + Math.min(MW - 1, Math.max(0, c + R))] - a[r * MW + Math.min(MW - 1, Math.max(0, c - R - 1))]; if (c >= 0 && c < MW) b[r * MW + c] = acc / (2 * R + 1); } }
      for (let c = 0; c < MW; c++) { let acc = 0; for (let r = -R; r < MH + R; r++) { acc += b[Math.min(MH - 1, Math.max(0, r + R)) * MW + c] - b[Math.min(MH - 1, Math.max(0, r - R - 1)) * MW + c]; if (r >= 0 && r < MH) a[r * MW + c] = acc / (2 * R + 1); } }
    }
    return a;
  };
  // Greater Berlin, scanline-filled (even-odd) on the mask grid
  const topo = JSON.parse(readFileSync('assets/data/borders.json', 'utf8'));
  const city = merge(topo, topo.objects.sectors.geometries);
  const rings = (city.type === 'Polygon' ? [city.coordinates] : city.coordinates).flat();
  const bx0 = x0 * deg - 180, by1 = (y1 + 1) * deg - 90, inCity = new Float32Array(MW * MH);
  for (let r = 0; r < MH; r++) {
    const lat = by1 - (r + 0.5) / L.ppd, xs = [];
    for (const ring of rings) for (let k = 0; k < ring.length - 1; k++) {
      const [ax, ay] = ring[k], [bx, by] = ring[k + 1];
      if ((ay > lat) !== (by > lat)) xs.push(((ax + (lat - ay) / (by - ay) * (bx - ax)) - bx0) * L.ppd);
    }
    xs.sort((a, b) => a - b);
    for (let k = 0; k + 1 < xs.length; k += 2) for (let c = Math.max(0, Math.ceil(xs[k] - 0.5)); c < Math.min(MW, xs[k + 1] - 0.5); c++) inCity[r * MW + c] = 1;
  }
  // coverage × 1.5 closes the specks where white roofs read as no photograph
  const near = blur(inCity, 16), m = blur(cov, 3), px = new Uint8Array(MW * MH * 4);
  for (let i = 0; i < m.length; i++) { const v = Math.round(Math.min(1, m[i] * 1.5, near[i] * 2) * 255); px[i * 4] = px[i * 4 + 1] = px[i * 4 + 2] = v; px[i * 4 + 3] = 255; }
  writeFileSync('assets/data/berlin1953/mask.jpg', jpeg.encode({ data: px, width: MW, height: MH }, 85).data);
  // Greater Berlin's own box with ~1.5 km to spare: the photo is masked to the city, so layers need cover no more
  const pts = rings.flat(), cityBox = [Math.min(...pts.map(q => q[0])) - 0.02, Math.min(...pts.map(q => q[1])) - 0.015, Math.max(...pts.map(q => q[0])) + 0.02, Math.max(...pts.map(q => q[1])) + 0.015];
  index.mask = { file: 'mask.jpg', city: cityBox.map(v => +v.toFixed(4)), box: [x0 * deg - 180, y0 * deg - 90, (x1 + 1) * deg - 180, (y1 + 1) * deg - 90] };
  console.log(`mask ${MW}x${MH}`);
}
writeFileSync('assets/data/berlin1953/index.json', JSON.stringify(index));
console.log('wrote assets/data/berlin1953/index.json');
