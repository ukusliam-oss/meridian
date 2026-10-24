// How sharp each scene's map is: node tools/check-texels.mjs [chapter data file]
// For every scene it works out, with the engine's own code (src/world/view.js), what the camera shows on a desktop
// (1440 × 900) and a phone (390 × 844) screen, the detail texture the engine paints for it, and how many CSS pixels one
// texel of that texture and one texel of the shaded relief cover. Under ~1 is sharp; the relief fades out above ~2.
// It fails when a detail texture comes out coarser than one CSS pixel per texel.
import { pathToFileURL } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';
import { footprint, textureSize } from '../src/world/view.js';

const file = process.argv[2] || 'assets/js/data/history/kq6.js';
const { default: data } = await import(pathToFileURL(file).href);
// relief images (assets/data/relief-*.jpg): pixels per degree, Europe where its box covers the target
const RELIEF = { world: 2048 / 360, europe: { box: [-15, 30, 65, 75], ppd: 2400 / 80 } };
// shaded terrain tiles (tools/build-terrain.mjs), chosen as the engine does: none above 2500 km; z0 and z1, plus z2 where
// a screen pixel is under 0.45 km at the target; drawn on a canvas of at most 2048 px, leaving out a level more than 3×
// finer than that canvas. Returns the level that shows and the canvas's pixels per degree.
const TERRAIN = existsSync('assets/data/terrain/index.json') ? JSON.parse(readFileSync('assets/data/terrain/index.json', 'utf8')).levels : [];
const terrainOf = (c, fp) => {
  if (c.alt > 2500 || !TERRAIN.length) return null;
  const levels = TERRAIN.filter(l => l.z <= 1 || (fp.kmPerPx < 0.45 && l.z === 2)).sort((a, b) => a.ppd - b.ppd);
  const [w, s, e, n] = fp.box, top = levels.at(-1), ppd = Math.min(top.ppd, 2048 / (e - w), 2048 / (n - s));
  const shown = levels.filter((l, k) => k === 0 || l.ppd <= ppd * 3).filter(l => {
    const x = Math.floor((c.lon + 180) / l.deg), y = Math.floor((c.lat + 90) / l.deg);
    return l.tiles.includes(`${x}_${y}`); // the tile under the target exists (sea and uncovered places have none)
  }).at(-1);
  return shown ? { z: shown.z, ppd: Math.min(shown.ppd, ppd) } : null;
};
const SCREENS = { desktop: { W: 1440, H: 900, max: 4096, px: 4096 * 2560, texel: 0.55 }, phone: { W: 390, H: 844, max: 2048, px: 2048 * 1280, texel: 0.5 } };

let bad = 0;
const rows = [];
data.scenes.forEach((s, i) => {
  const c = s.camera, row = { n: i + 1, alt: c.alt };
  for (const [name, sc] of Object.entries(SCREENS)) {
    const fp = footprint(c, sc.W, sc.H);
    if (!fp.box) { row[name] = 'globe'; continue; }
    const size = textureSize(fp.box, Math.max(0.003, fp.kmPerPx * sc.texel), sc.max, sc.px);
    const tex = size.texelKm / fp.kmPerPx;
    const e = RELIEF.europe, inEu = c.lon > e.box[0] && c.lon < e.box[2] && c.lat > e.box[1] && c.lat < e.box[3];
    const T = terrainOf(c, fp);
    const reliefKm = 111 / (T ? T.ppd : inEu ? e.ppd : RELIEF.world), rel = reliefKm / fp.kmPerPx;
    row[name] = `${size.W}x${size.H} ${tex.toFixed(2)} px/texel · ${T ? `terrain z${T.z}` : 'relief'} ${rel.toFixed(1)}`;
    if (tex > 1) bad++;
  }
  rows.push(row);
});
for (const r of rows) console.log(`${String(r.n).padStart(2)} ${String(r.alt).padStart(5)} km  desktop ${r.desktop.padEnd(40)} phone ${r.phone}`);
console.log(`${data.scenes.length} scenes · ${bad} detail textures coarser than 1 CSS px per texel`);
process.exit(bad ? 1 : 0);
