// Painting for the world engine, shared by the paint worker and the main-thread fallback.
// Two kinds of texture, both equirectangular over a lon/lat box and stored bottom-up (row 0 = the box's south edge),
// so the engine uploads them with flipY off whatever the source (canvas, ImageBitmap or typed array):
//   paintTexture: land, dated state fills, Berlin, halos and areas, antialiased (a 2D canvas)
//   rasterIds:    the index + 1 of the country under each texel, no antialiasing, so the shader can colour by data
import { geoEquirectangular, geoPath, geoArea, geoTransform } from 'd3-geo';
import { feature } from 'topojson-client';

export const DEG = Math.PI / 180;
export const dayNum = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d) / 864e5; };

// Bloc palette, fixed for the whole site (plan 4.3). `focus` is the chapter accent.
export const PALETTE = {
  land: '#2a303d', soviet: '#9b2c35', bloc: '#6e3a3c', west: '#2d4a6e', neutral: '#4b5160', focus: '#a084ee',
};
const SECTORS = { us: '#2c5687', uk: '#2d6b74', fr: '#4a4f93', su: PALETTE.bloc };
// how much of a state colour covers the land beneath it; the focus colour is bright, so it is the thinnest glaze
const GLAZE = { focus: 0.62, soviet: 0.82, bloc: 0.8, west: 0.85, neutral: 0.8 };
const lighter = hex => { const n = parseInt(hex.slice(1), 16), m = c => Math.round(c + (255 - c) * 0.38); return `rgb(${m(n >> 16)},${m((n >> 8) & 255)},${m(n & 255)})`; };
export const WALL_UP = '1961-08-13', WALL_DOWN = '1989-11-09';

const ringFix = poly => (geoArea(poly) > 2 * Math.PI ? { type: 'Polygon', coordinates: poly.coordinates.map(r => r.slice().reverse()) } : poly);
// d3 wants clockwise outer rings; simplification can leave a few the other way round, which would flood the globe
export const upright = f => {
  const g = f.geometry; if (!g) return f;
  const fix = c => (geoArea({ type: 'Polygon', coordinates: c }) > 2 * Math.PI ? c.map(r => r.slice().reverse()) : c);
  if (g.type === 'Polygon') f.geometry = { type: 'Polygon', coordinates: fix(g.coordinates) };
  else if (g.type === 'MultiPolygon') f.geometry = { type: 'MultiPolygon', coordinates: g.coordinates.map(fix) };
  return f;
};

// Features from a topology: countries in topology order (a country's id in the id texture is its index + 1), land, Berlin.
export function featuresOf(data) {
  const obj = data.objects.cshapes || data.objects.countries;
  const countries = feature(data, obj).features.map(f => upright({
    ...f, from: f.properties.from ? dayNum(f.properties.from) : -Infinity, to: f.properties.to ? dayNum(f.properties.to) : Infinity,
  }));
  const berlin = data.objects.sectors ? {
    sectors: feature(data, data.objects.sectors).features.map(upright),
    wall: feature(data, data.objects.wall).features, strip: feature(data, data.objects.strip).features.map(upright),
  } : null;
  return { countries, land: feature(data, data.objects.land), berlin };
}
export const countriesAt = (countries, date) => {
  const d = dayNum(date === 'modern' || !date ? '2000-01-01' : date);
  return countries.filter(f => f.from <= d && d < f.to);
};

export function paintTexture(canvas, feats, map, box = [-180, -90, 180, 90]) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.setTransform(1, 0, 0, -1, 0, H); // bottom-up, see the header
  // the world: d3's equirectangular (it cuts at the antimeridian); a detail box: lon and lat scaled separately, so its
  // texels can be square on the ground (see textureSize in view.js)
  const world = box[2] - box[0] >= 360;
  const k = W / ((box[2] - box[0]) * DEG), sx = W / (box[2] - box[0]), sy = H / (box[3] - box[1]);
  const proj = world ? geoEquirectangular().scale(k).translate([-k * box[0] * DEG, k * box[3] * DEG]).precision(0.1)
    : geoTransform({ point(lon, lat) { this.stream.point((lon - box[0]) * sx, (box[3] - lat) * sy); } });
  const path = geoPath(proj, ctx);
  const fill = map.fill || {};
  const date = map.borders;
  const countries = countriesAt(feats.countries, date);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = PALETTE.land;
  ctx.beginPath(); path(feats.land); ctx.fill();
  // fills are a glaze over the land, not a lid: the land shows through (so the relief does), and a lighter band just
  // inside each filled state's edge says where it ends, about two screen pixels wide in a detail texture
  const edge = world ? 1.5 : 3;
  for (const f of countries) {
    const state = fill[f.properties.key];
    if (!state) continue;
    const c = PALETTE[state] || PALETTE.land;
    ctx.globalAlpha = GLAZE[state] ?? 0.8; ctx.fillStyle = c;
    ctx.beginPath(); path(f); ctx.fill();
    ctx.save(); ctx.clip(); ctx.globalAlpha = 0.5; ctx.strokeStyle = lighter(c); ctx.lineWidth = edge * 2; ctx.lineJoin = 'round'; ctx.stroke(); ctx.restore();
  }
  ctx.globalAlpha = 1;
  const focus = map.focus || [];
  if (focus.length) {
    ctx.save(); ctx.strokeStyle = PALETTE.focus; ctx.globalAlpha = 0.85; ctx.lineWidth = Math.max(1, W / 2600); ctx.lineJoin = 'round';
    for (const f of countries) if (focus.includes(f.properties.key)) { ctx.beginPath(); path(f); ctx.stroke(); }
    ctx.restore();
  }
  // Berlin at city scale: the four sectors of 1945, then West Berlin as one Western enclave, then the border strip
  const city = map.city === 'berlin' && feats.berlin;
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
    // an inner glow in the focus countries so the eye lands on them; kept inside the border, so it never spills onto a
    // neighbour (detail texture only: blur is expensive)
    const glow = Math.max(4, Math.round(Math.max(W, H) / 220));
    for (const f of countries) if (fill[f.properties.key] === 'focus' || focus.includes(f.properties.key)) {
      ctx.save(); ctx.beginPath(); path(f); ctx.clip();
      ctx.globalCompositeOperation = 'lighter'; ctx.filter = `blur(${glow}px)`; ctx.globalAlpha = 0.35;
      ctx.strokeStyle = PALETTE.focus; ctx.lineWidth = glow * 2; ctx.stroke(); ctx.restore();
    }
  }
  // extra areas drawn last (an optional hand-drawn shape over everything)
  for (const a of map.areas || []) {
    const ring = a.points.map(([lat, lon]) => [lon, lat]);
    if (ring[0][0] !== ring.at(-1)[0] || ring[0][1] !== ring.at(-1)[1]) ring.push(ring[0]);
    ctx.fillStyle = PALETTE[a.fill] || PALETTE.west;
    ctx.beginPath(); path(ringFix({ type: 'Polygon', coordinates: [ring] })); ctx.fill();
  }
}

// Country ids by scanline fill (even-odd per polygon, so lakes and enclaves stay holes). RGBA8: id = R + 256 G.
// Natural Earth cuts polygons at the antimeridian, so a plain lon/lat to pixel map needs no clipping.
export function rasterIds(feats, date, box, W, H) {
  const out = new Uint8Array(W * H * 4);
  const sx = W / (box[2] - box[0]), sy = H / (box[3] - box[1]);
  const d = dayNum(date === 'modern' || !date ? '2000-01-01' : date);
  feats.countries.forEach((f, n) => {
    if (!(f.from <= d && d < f.to) || !f.geometry) return;
    const id = n + 1, r = id & 255, g = id >> 8;
    const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [];
    for (const poly of polys) {
      // edges in pixel space with y0 < y1, sorted by y0; an active list sweeps the rows
      const edges = [];
      let lo = Infinity, hi = -Infinity, left = Infinity, right = -Infinity;
      for (const ring of poly) for (let i = 1; i < ring.length; i++) {
        const ax = (ring[i - 1][0] - box[0]) * sx, ay = (ring[i - 1][1] - box[1]) * sy;
        const bx = (ring[i][0] - box[0]) * sx, by = (ring[i][1] - box[1]) * sy;
        if (ax < left) left = ax; if (ax > right) right = ax;
        if (ay === by) continue;
        const e = ay < by ? [ay, by, ax, (bx - ax) / (by - ay)] : [by, ay, bx, (ax - bx) / (ay - by)];
        edges.push(e); if (e[0] < lo) lo = e[0]; if (e[1] > hi) hi = e[1];
      }
      if (!edges.length || right < 0 || left > W || hi < 0 || lo > H) continue;
      edges.sort((a, b) => a[0] - b[0]);
      const r0 = Math.max(0, Math.ceil(lo - 0.5)), r1 = Math.min(H - 1, Math.floor(hi - 0.5));
      let next = 0; const active = []; const xs = [];
      for (let row = r0; row <= r1; row++) {
        const yc = row + 0.5;
        while (next < edges.length && edges[next][0] <= yc) active.push(edges[next++]);
        xs.length = 0;
        for (let k = active.length - 1; k >= 0; k--) {
          const e = active[k];
          if (e[1] <= yc) { active[k] = active[active.length - 1]; active.pop(); continue; }
          if (e[0] <= yc) xs.push(e[2] + (yc - e[0]) * e[3]);
        }
        xs.sort((a, b) => a - b);
        const base = row * W * 4;
        for (let k = 0; k + 1 < xs.length; k += 2) {
          const x0 = Math.max(0, Math.ceil(xs[k] - 0.5)), x1 = Math.min(W - 1, Math.floor(xs[k + 1] - 0.5));
          for (let x = x0; x <= x1; x++) { const o = base + x * 4; out[o] = r; out[o + 1] = g; out[o + 3] = 255; }
        }
      }
    }
  });
  return out;
}

// One paint job, run in the worker or on the main thread: the canvas factory decides which.
export function runJob(feats, job, makeCanvas) {
  const t0 = performance.now();
  if (job.kind === 'ids') {
    const ids = rasterIds(feats, job.date, job.box, job.W, job.H);
    return { ids, ms: performance.now() - t0 };
  }
  const c = makeCanvas(job.W, job.H);
  paintTexture(c, feats, job.map, job.box);
  return { canvas: c, ms: performance.now() - t0 };
}
