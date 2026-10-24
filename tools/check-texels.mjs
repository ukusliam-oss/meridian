// How sharp each scene's map is: node tools/check-texels.mjs [chapter data file]
// For every scene it works out, with the engine's own code (src/world/view.js), what the camera shows on a desktop
// (1440 × 900) and a phone (390 × 844) screen, the detail texture the engine paints for it, and how many CSS pixels one
// texel of that texture and one texel of the shaded relief cover. Under ~1 is sharp; the relief fades out above ~2.
// It fails when a detail texture comes out coarser than one CSS pixel per texel.
import { pathToFileURL } from 'node:url';
import { footprint, textureSize } from '../src/world/view.js';

const file = process.argv[2] || 'assets/js/data/history/kq6.js';
const { default: data } = await import(pathToFileURL(file).href);
// relief images (assets/data/relief-*.jpg): pixels per degree, Europe where its box covers the target
const RELIEF = { world: 2048 / 360, europe: { box: [-15, 30, 65, 75], ppd: 2400 / 80 } };
const SCREENS = { desktop: { W: 1440, H: 900, max: 4096, px: 4096 * 2560, texel: 0.55 }, phone: { W: 390, H: 844, max: 2048, px: 2048 * 1280, texel: 0.5 } };

let bad = 0;
const rows = [];
data.scenes.forEach((s, i) => {
  const c = s.camera, row = { n: i + 1, alt: c.alt };
  for (const [name, sc] of Object.entries(SCREENS)) {
    const fp = footprint(c, sc.W, sc.H);
    if (!fp.box) { row[name] = 'globe'; continue; }
    const size = textureSize(fp.box, Math.max(0.01, fp.kmPerPx * sc.texel), sc.max, sc.px);
    const tex = size.texelKm / fp.kmPerPx;
    const e = RELIEF.europe, inEu = c.lon > e.box[0] && c.lon < e.box[2] && c.lat > e.box[1] && c.lat < e.box[3];
    const reliefKm = 111 / (inEu ? e.ppd : RELIEF.world), rel = reliefKm / fp.kmPerPx;
    row[name] = `${size.W}x${size.H} ${tex.toFixed(2)} px/texel · relief ${rel.toFixed(1)}`;
    if (tex > 1) bad++;
  }
  rows.push(row);
});
for (const r of rows) console.log(`${String(r.n).padStart(2)} ${String(r.alt).padStart(5)} km  desktop ${r.desktop.padEnd(40)} phone ${r.phone}`);
console.log(`${data.scenes.length} scenes · ${bad} detail textures coarser than 1 CSS px per texel`);
process.exit(bad ? 1 : 0);
