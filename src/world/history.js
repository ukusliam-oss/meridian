// History layer: states painted from CShapes 2.0 (borders dated to the day), Berlin's sectors and border strip at city
// scale, dated border lines cross-faded between scenes, the iron curtain traced along the real dated border and the
// real 1989 route of the Wall. Scenes opt in with `map.borders` (an ISO date); a scene without it shows land only.

import { LineSegments, LineBasicMaterial, Mesh, TubeGeometry, CatmullRomCurve3 } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import { R_KM, clamp, ll, dayNum, upright, ringFix, lineGeometry, pathPoints, tubeMaterial, disposeTree } from './util.js';

// Bloc palette, fixed for the whole site (plan 4.3). `focus` is the chapter accent.
export const PALETTE = {
  land: '#2a303d', soviet: '#9b2c35', bloc: '#6e3a3c', west: '#2d4a6e', neutral: '#4b5160', focus: '#a084ee',
};
const SECTORS = { us: '#2c5687', uk: '#2d6b74', fr: '#4a4f93', su: PALETTE.bloc };
const ARROW = { military: '#ff5a4f', people: '#ffd59a', pressure: '#c9b3ff' };
const LINE = { 'iron-curtain': '#dfe6f2', wall: '#ffffff' };
const WALL_UP = '1961-08-13', WALL_DOWN = '1989-11-09';

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

export function historyLayer(data) {
  const o = data.objects;
  const countries = o.cshapes ? feature(data, o.cshapes).features.map(f => upright({ ...f, from: dayNum(f.properties.from), to: dayNum(f.properties.to) })) : [];
  const land = o.land ? feature(data, o.land) : null;
  const berlin = o.sectors ? {
    sectors: feature(data, o.sectors).features.map(upright),
    wall: feature(data, o.wall).features, strip: feature(data, o.strip).features.map(upright),
  } : null;
  const at = date => { if (!date) return []; const d = dayNum(date); return countries.filter(f => f.from <= d && d < f.to); };

  let globe = null, scenes = [], sceneOf = () => null;

  // a soft halo around the focus countries so the eye lands on them: drawn small and scaled up, which blurs it the
  // same way in every browser (Safari has no canvas filter) and costs a fraction of a blur filter
  let haloCanvas = null;
  function halo(ctx, proj, feats, fill, W, H) {
    const s = Math.max(2, Math.round(W / 700));
    const w = Math.ceil(W / s), h = Math.ceil(H / s);
    haloCanvas ||= document.createElement('canvas');
    if (haloCanvas.width !== w || haloCanvas.height !== h) { haloCanvas.width = w; haloCanvas.height = h; }
    const hc = haloCanvas.getContext('2d'); if (!hc) return;
    hc.clearRect(0, 0, w, h); hc.fillStyle = PALETTE.focus;
    const small = geoEquirectangular().rotate(proj.rotate()).scale(proj.scale() / s).translate(proj.translate().map(v => v / s)).precision(0.3);
    const p = geoPath(small, hc);
    for (const f of feats) if (fill[f.properties.key] === 'focus') { hc.beginPath(); p(f); hc.fill(); }
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.3;
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(haloCanvas, 0, 0, w * s, h * s);
    ctx.restore();
  }

  // dated border lines: one line set per distinct border date, cross-faded
  const borderSets = new Map();
  const bordersFor = date => {
    if (!date) return null;
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

  return {
    name: 'history',
    theme: { arrows: ARROW, lines: LINE },

    init(ctx) { globe = ctx.globe; scenes = ctx.scenes; sceneOf = ctx.sceneOf; },

    paint(ctx, path, s, { detail, W, H, proj }) {
      const fill = s.map.fill || {};
      const date = s.map.borders;
      const feats = at(date);
      if (land) { ctx.fillStyle = PALETTE.land; ctx.beginPath(); path(land); ctx.fill(); }
      for (const f of feats) {
        const state = fill[f.properties.key];
        if (!state) continue;
        ctx.fillStyle = PALETTE[state] || PALETTE.land;
        ctx.beginPath(); path(f); ctx.fill();
      }
      // Berlin at city scale: the four sectors of 1945, then West Berlin as one Western enclave, then the border strip
      if (detail && s.map.city === 'berlin' && berlin) {
        const before = date < '1949-10-07';
        for (const f of berlin.sectors) {
          const sec = f.properties.sector;
          if (sec === 'su' && !before) continue;
          ctx.fillStyle = before ? SECTORS[sec] : PALETTE.west;
          ctx.beginPath(); path(f); ctx.fill();
        }
        if (date >= WALL_UP) {
          ctx.fillStyle = 'rgba(232, 226, 255, 0.34)';
          for (const f of berlin.strip) { ctx.beginPath(); path(f); ctx.fill(); }
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)'; ctx.lineWidth = Math.max(1, W / 2400);
        for (const f of berlin.sectors) { ctx.beginPath(); path(f); ctx.stroke(); }
      } else if (detail) {
        halo(ctx, proj, feats, fill, W, H); // detail texture only
      }
      // extra areas drawn last (an optional hand-drawn shape over everything)
      for (const a of s.map.areas || []) {
        const ring = a.points.map(([lat, lon]) => [lon, lat]);
        if (ring[0][0] !== ring.at(-1)[0] || ring[0][1] !== ring.at(-1)[1]) ring.push(ring[0]);
        ctx.fillStyle = PALETTE[a.fill] || PALETTE.west;
        ctx.beginPath(); path(ringFix({ type: 'Polygon', coordinates: [ring] })); ctx.fill();
      }
    },

    // the iron curtain and the Wall; any other line kind is left to the engine's generic tube
    line(l, s) {
      if (l.kind === 'wall' && berlin) {
        // the real route; after 9 November 1989 it is drawn broken, as the crossings open
        const open = s.map.borders >= WALL_DOWN;
        const r = clamp(s.camera.alt / R_KM * 0.0011, 0.0000045, 0.0004);
        const items = [];
        for (const kind of ['front', 'rear']) {
          const m = wallMesh(berlin.wall, kind, kind === 'front' ? r : r * 0.6, open ? 7 : 0);
          if (m) items.push({ m, mat: m.material, k: kind === 'front' ? 1 : 0.55 });
        }
        return items;
      }
      if (l.kind === 'iron-curtain' && o.cshapes) {
        // the real dated border between the West (West Germany, Austria) and the bloc (East Germany, Czechoslovakia, Hungary)
        const items = [];
        if (!s.map.borders) return items;
        const on = g => g.properties.from <= s.map.borders && s.map.borders < g.properties.to;
        const W = ['FRG', 'AUT'], E = ['GDR', 'CSK', 'HUN'];
        const m = mesh(data, o.cshapes, (a, b) => a !== b && on(a) && on(b)
          && ((W.includes(a.properties.key) && E.includes(b.properties.key)) || (E.includes(a.properties.key) && W.includes(b.properties.key))));
        const radius = clamp(s.camera.alt / R_KM * 0.0021, 0.000012, 0.003);
        for (const line of m.coordinates) {
          if (line.length < 2) continue;
          const pts = line.map(([lon, lat]) => ll(lat, lon, 1.0008));
          let len = 0; for (let q = 1; q < pts.length; q++) len += pts[q].distanceTo(pts[q - 1]);
          const mat = tubeMaterial(LINE['iron-curtain'], Math.max(6, len * 1800));
          const tube = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, false, 'centripetal'), Math.min(1600, pts.length * 3), radius, 5, false), mat);
          items.push({ m: tube, mat, k: 1 });
        }
        return items;
      }
      if (l.kind === 'wall') {
        // no Berlin data: a hand-placed guide, solid and close to the ground
        const pts = pathPoints(l.points, 1.00003);
        const closed = l.points[0][0] === l.points.at(-1)[0] && l.points[0][1] === l.points.at(-1)[1];
        const radius = clamp(s.camera.alt / R_KM * 0.0016, 0.000012, 0.003);
        const mat = tubeMaterial(LINE.wall, 0);
        return [{ m: new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, closed, 'centripetal'), Math.min(1200, pts.length * 3), radius, 5, false), mat), mat, k: 1 }];
      }
      return null;
    },

    frame({ i, j, mix }) {
      const a = sceneOf(i), b = sceneOf(j);
      const ba = bordersFor(a.map.borders), bb = bordersFor(b.map.borders);
      for (const m of borderSets.values()) m.material.opacity = 0;
      if (ba) ba.material.opacity += 0.28 * (1 - mix) * (a.map.city ? 0.4 : 1);
      if (bb) bb.material.opacity += 0.28 * mix * (b.map.city ? 0.4 : 1);
      for (const m of borderSets.values()) m.visible = m.material.opacity > 0;
      // keep the line sets of nearby scenes only
      if (borderSets.size > 8) {
        const keep = new Set();
        for (let k = i - 3; k <= j + 3; k++) { const s = k < -1 || k >= scenes.length ? null : sceneOf(k); if (s?.map.borders) keep.add(s.map.borders); }
        for (const [date, m] of borderSets) if (!keep.has(date)) { disposeTree(m); borderSets.delete(date); }
      }
    },
  };
}
