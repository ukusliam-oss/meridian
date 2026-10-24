// Geography layers for the globe: node tools/build-geo.mjs
// Inputs are fetched once into tools/.cache/geo/ and the outputs written to assets/data/geo/:
//   quakes.json     earthquakes of magnitude 5.5 and over, 2000–2025: USGS ANSS Comprehensive Catalog (public domain)
//   volcanoes.json  Holocene volcanoes: Smithsonian Global Volcanism Program, Volcanoes of the World (cited as asked)
//   plates.json     plate boundaries by type with relative speeds: PB2002 (Bird 2003) as GeoJSON by Ahlenius, ODC-BY 1.0
//   natural.json    the natural globe for Geography (no states): Natural Earth 1:10m land, lakes, rivers and the 200 m
//                   bathymetry worldwide, simplified evenly (borders.json keeps detail only around Europe). The inputs
//                   are the Natural Earth shapefiles tools/build-maps.mjs already caches in tools/.cache/ne/
//   dem/{site}.png  a patch of real height for a 3D landscape scene: Copernicus DEM GLO-30, heights packed in RGB
//                   (h = R·65536 + G·256 + B − 1000, whole metres) so the browser reads them losslessly; dem/{site}.json
//                   gives the box, size and height range
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { fromUrl } from 'geotiff';
import { PNG } from 'pngjs';
import shapefile from 'shapefile';
import { topology } from 'topojson-server';
import { feature } from 'topojson-client';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { geoArea } from 'd3-geo';

const CACHE = 'tools/.cache/geo', OUT = 'assets/data/geo';
mkdirSync(CACHE, { recursive: true }); mkdirSync(`${OUT}/dem`, { recursive: true });
const cached = async (file, url) => {
  if (!existsSync(`${CACHE}/${file}`)) {
    const r = await fetch(url, { signal: AbortSignal.timeout(300000) });
    if (!r.ok) throw new Error(`${url}: ${r.status}`);
    writeFileSync(`${CACHE}/${file}`, Buffer.from(await r.arrayBuffer()));
  }
  return readFileSync(`${CACHE}/${file}`, 'utf8');
};
const r2 = v => Math.round(v * 100) / 100;

// ── earthquakes: one flat array, five numbers each: lon, lat, depth (km), magnitude, decimal year ──
{
  const csv = await cached('quakes-2000-2025-m55.csv', 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&starttime=2000-01-01&endtime=2026-01-01&minmagnitude=5.5&orderby=time-asc&limit=20000');
  const rows = csv.trim().split('\n'), head = rows.shift().split(',');
  const col = k => head.indexOf(k), [cT, cLat, cLon, cD, cM] = ['time', 'latitude', 'longitude', 'depth', 'mag'].map(col);
  const data = [];
  for (const line of rows) {
    const f = line.split(','); // the place field can hold commas, but it comes after the columns read here
    const t = new Date(f[cT]), year = t.getUTCFullYear() + (t - Date.UTC(t.getUTCFullYear(), 0, 1)) / (365.25 * 864e5);
    data.push(r2(+f[cLon]), r2(+f[cLat]), Math.round(+f[cD]), Math.round(+f[cM] * 10) / 10, r2(year));
  }
  writeFileSync(`${OUT}/quakes.json`, JSON.stringify({
    source: 'USGS ANSS Comprehensive Catalog (ComCat), magnitude 5.5 and over, 2000–2025', fields: ['lon', 'lat', 'depth', 'mag', 'year'], data,
  }));
  console.log(`quakes: ${data.length / 5}`);
}

// ── volcanoes: lon, lat, type (0 stratovolcano, 1 shield, 2 cinder or pyroclastic cone, 3 other), last eruption year
// (null when unknown or before the Common Era), and name ──
{
  const j = JSON.parse(await cached('gvp-holocene.json', 'https://webservices.volcano.si.edu/geoserver/GVP-VOTW/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=GVP-VOTW:Smithsonian_VOTW_Holocene_Volcanoes&outputFormat=application%2Fjson'));
  const typeOf = t => /strato/i.test(t) ? 0 : /shield/i.test(t) ? 1 : /cinder|pyroclastic cone|scoria/i.test(t) ? 2 : 3;
  const data = j.features.filter(f => f.geometry).map(f => {
    const p = f.properties, [lon, lat] = f.geometry.coordinates, y = Number(p.Last_Eruption_Year);
    return [r2(lon), r2(lat), typeOf(p.Primary_Volcano_Type || ''), Number.isFinite(y) && y > 0 ? y : null, p.Volcano_Name];
  });
  writeFileSync(`${OUT}/volcanoes.json`, JSON.stringify({
    source: 'Global Volcanism Program, Smithsonian Institution: Volcanoes of the World, Holocene volcano list', fields: ['lon', 'lat', 'type', 'lastEruption', 'name'], data,
  }));
  console.log(`volcanoes: ${data.length}`);
}

// ── plate boundaries: PB2002 steps grouped into three kinds, chained into lines; each line keeps its mean speed ──
{
  const j = JSON.parse(await cached('PB2002_steps.json', 'https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_steps.json'));
  // OSR spreading ridge, CRB continental rift; SUB subduction, OCB/CCB convergent; OTF/CTF transform
  const KIND = { OSR: 'divergent', CRB: 'divergent', SUB: 'convergent', OCB: 'convergent', CCB: 'collision', OTF: 'transform', CTF: 'transform' };
  const lines = { divergent: [], convergent: [], collision: [], transform: [] };
  let cur = null;
  for (const f of j.features) {
    const p = f.properties, kind = KIND[p.STEPCLASS]; if (!kind) continue;
    const a = [r2(p.STARTLONG), r2(p.STARTLAT)], b = [r2(p.FINALLONG), r2(p.FINALLAT)];
    if (Math.abs(a[0] - b[0]) > 180) { cur = null; continue; } // a step across the antimeridian: drop it
    if (cur && cur.kind === kind && cur.bound === p.PLATEBOUND && cur.pts.at(-1)[0] === a[0] && cur.pts.at(-1)[1] === a[1]) {
      cur.pts.push(b); cur.v += p.VELOCITYLE; cur.n++;
    } else { cur = { kind, bound: p.PLATEBOUND, pts: [a, b], v: p.VELOCITYLE, n: 1 }; lines[kind].push(cur); }
  }
  const out = Object.fromEntries(Object.entries(lines).map(([k, ls]) => [k, ls.map(l => ({ b: l.bound, v: Math.round(l.v / l.n), p: l.pts }))]));
  writeFileSync(`${OUT}/plates.json`, JSON.stringify({
    source: 'PB2002 (Bird 2003, doi:10.1029/2001GC000252), GIS by Hugo Ahlenius, ODC-BY 1.0. v: relative speed, mm per year',
    ...out,
  }));
  console.log('plates:', Object.entries(out).map(([k, v]) => `${k} ${v.length}`).join(', '));
}

// ── natural globe ──
{
  const ne = async n => (await shapefile.read(`tools/.cache/ne/${n}/${n}.shp`, `tools/.cache/ne/${n}/${n}.dbf`)).features;
  // rings wound as d3 expects (a ring larger than a hemisphere is reversed), as build-maps does
  const fixRing = r => (geoArea({ type: 'Polygon', coordinates: [r] }) > 2 * Math.PI ? r.slice().reverse() : r);
  const fix = g => (!g ? g : g.type === 'Polygon' ? { type: 'Polygon', coordinates: g.coordinates.map(fixRing) }
    : g.type === 'MultiPolygon' ? { type: 'MultiPolygon', coordinates: g.coordinates.map(p => p.map(fixRing)) } : g);
  const fc = features => ({ type: 'FeatureCollection', features });
  const area = f => ({ type: 'Feature', geometry: fix(f.geometry), properties: f.properties.scalerank != null ? { r: f.properties.scalerank } : {} });
  // rivers and lakes up to rank 7 worldwide: the larger ones, which still read from a few hundred kilometres up
  const KEEP = +(process.env.KEEP || 0.1); // the share of points kept (the most important, by effective area)
  const t = topology({
    countries: fc([]),
    land: fc((await ne('ne_10m_land')).map(area)),
    lakes: fc((await ne('ne_10m_lakes')).filter(f => f.properties.scalerank <= 7).map(area)),
    rivers: fc((await ne('ne_10m_rivers_lake_centerlines')).filter(f => f.properties.scalerank <= 7).map(f => ({ type: 'Feature', geometry: f.geometry, properties: { r: f.properties.scalerank } }))),
    deep: fc((await ne('ne_10m_bathymetry_K_200')).map(area)),
  }); // not quantised here: points are dropped from absolute coordinates, then the result is quantised
  const ps = presimplify(t), min = quantile(ps, KEEP);
  ps.arcs = ps.arcs.map(arc => arc.filter((q, i) => i === 0 || i === arc.length - 1 || q[2] >= min));
  const st = topology(Object.fromEntries(Object.keys(t.objects).map(k => [k, fc(feature(ps, ps.objects[k]).features.filter(f => f.geometry))])), 1e5);
  st.waterBox = [-180, -90, 180, 90];
  st.attribution = 'Natural Earth 1:10m land, lakes, rivers and bathymetry (public domain).';
  const out = JSON.stringify(st);
  writeFileSync(`${OUT}/natural.json`, out);
  console.log(`natural: ${Math.round(out.length / 1024)} KB`);
}

// ── height patches for 3D landscape scenes ──
const SITES = {
  fuji: { center: [35.3606, 138.7274], half: [0.12, 0.15], size: 640 },
};
for (const [name, s] of Object.entries(SITES)) {
  const [clat, clon] = s.center, [hl, hn] = s.half, box = [clon - hn, clat - hl, clon + hn, clat + hl];
  const W = s.size, H = Math.round(s.size * hl / (hn * Math.cos(clat * Math.PI / 180)));
  const tiles = new Map();
  const tileOf = async (lat, lon) => {
    const key = `${lat}_${lon}`; if (tiles.has(key)) return tiles.get(key);
    const n = `Copernicus_DSM_COG_10_${lat < 0 ? 'S' : 'N'}${String(Math.abs(lat)).padStart(2, '0')}_00_${lon < 0 ? 'W' : 'E'}${String(Math.abs(lon)).padStart(3, '0')}_00_DEM`;
    const file = `${CACHE}/${n}.f32`;
    let t;
    if (existsSync(file)) { const b = readFileSync(file); t = { w: b.readUInt32LE(0), h: b.readUInt32LE(4), d: new Float32Array(b.buffer.slice(b.byteOffset + 8)) }; }
    else {
      const im = await (await fromUrl(`https://copernicus-dem-30m.s3.amazonaws.com/${n}/${n}.tif`)).getImage(0);
      t = { w: im.getWidth(), h: im.getHeight(), d: Float32Array.from(await im.readRasters({ interleave: true })) };
      const head = Buffer.alloc(8); head.writeUInt32LE(t.w, 0); head.writeUInt32LE(t.h, 4);
      writeFileSync(file, Buffer.concat([head, Buffer.from(t.d.buffer)]));
    }
    tiles.set(key, t); return t;
  };
  const png = new PNG({ width: W, height: H });
  let lo = Infinity, hi = -Infinity;
  for (let r = 0; r < H; r++) {
    const lat = box[3] - (r + 0.5) / H * (box[3] - box[1]);
    for (let c = 0; c < W; c++) {
      const lon = box[0] + (c + 0.5) / W * (box[2] - box[0]);
      const t = await tileOf(Math.floor(lat), Math.floor(lon));
      const fx = (lon - Math.floor(lon)) * t.w - 0.5, fy = (Math.floor(lat) + 1 - lat) * t.h - 0.5;
      const x0 = Math.max(0, Math.min(t.w - 2, Math.floor(fx))), y0 = Math.max(0, Math.min(t.h - 2, Math.floor(fy))), ax = fx - x0, ay = fy - y0;
      const v = (x, y) => Math.max(-50, t.d[y * t.w + x]);
      const h = (v(x0, y0) * (1 - ax) + v(x0 + 1, y0) * ax) * (1 - ay) + (v(x0, y0 + 1) * (1 - ax) + v(x0 + 1, y0 + 1) * ax) * ay;
      const q = Math.round(h + 1000), o = (r * W + c) * 4;
      png.data[o] = q >> 16; png.data[o + 1] = (q >> 8) & 255; png.data[o + 2] = q & 255; png.data[o + 3] = 255;
      lo = Math.min(lo, h); hi = Math.max(hi, h);
    }
  }
  writeFileSync(`${OUT}/dem/${name}.png`, PNG.sync.write(png));
  writeFileSync(`${OUT}/dem/${name}.json`, JSON.stringify({ box: box.map(v => +v.toFixed(5)), width: W, height: H, min: Math.round(lo), max: Math.round(hi), source: 'Copernicus DEM GLO-30' }));
  console.log(`dem ${name}: ${W}x${H}, ${Math.round(lo)}–${Math.round(hi)} m`);
}
