// Bake the map data the History chapters need into one TopoJSON file.
//   node tools/build-maps.mjs        (inputs in tools/.cache/, not committed)
// Inputs:
//   cshapes-2.0.geojson   CShapes 2.0 (Schvitz et al., ETH Zürich), CC BY-NC-SA 4.0, https://icr.ethz.ch/data/cshapes/
//                         States with borders dated to the day. Colonies are not states, so they show as plain land.
//   berlin/ortsteile.json ALKIS Berlin Ortsteile (Geoportal Berlin), Datenlizenz Deutschland Zero 2.0
//   berlin/a_grenzmauer.json, b_hinterlandmauer.json, d_grenzstreifen.json
//                         "Verlauf der Berliner Mauer, 1989" (Forum für Geschichte und Gegenwart e.V. / Geoportal Berlin),
//                         Datenlizenz Deutschland Zero 2.0, traced from an aerial photograph of 25 April 1989
//   Natural Earth 1:10m (tools/.cache/ne/, from naciscdn.org), public domain: land (coastlines and the base fill), rivers
//                         and lake centrelines (+ the Europe supplement), lakes (+ Europe), and the 200 m bathymetry.
// Output: assets/data/borders.json with objects
//   cshapes  states valid 1945–1992, { key, name, from, to } (ISO dates, to is exclusive). Europe detailed, rest coarse.
//   land     Natural Earth land
//   rivers   rivers in and around Europe, { r: scalerank } (0 the largest; the Europe supplement adds 10–12)
//   lakes    lakes in and around Europe, { r: scalerank }
//   deep     sea deeper than 200 m in and around Europe (the rest of the sea is continental shelf)
//   sectors  Berlin's four sectors of 1945, { sector: us | uk | fr | su }, built from today's Ortsteile
//   wall     the Wall in 1989, { kind: front | rear }
//   strip    the border strip ("death strip") in 1989
// The derived map data is shared under CC BY-NC-SA 4.0 (see assets/data/BORDERS-LICENSE.txt).

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { topology } from 'topojson-server';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { feature, merge } from 'topojson-client';
import { geoCentroid, geoArea } from 'd3-geo';
import shapefile from 'shapefile';

const read = p => JSON.parse(readFileSync(p, 'utf8'));
// d3 draws spherical polygons with clockwise outer rings; GeoJSON (RFC 7946) sources use the opposite order
const fixPoly = poly => (geoArea({ type: 'Polygon', coordinates: poly }) > 2 * Math.PI ? poly.map(r => r.slice().reverse()) : poly);
const rewind = g => (!g ? g : g.type === 'Polygon' ? { type: 'Polygon', coordinates: fixPoly(g.coordinates) }
  : g.type === 'MultiPolygon' ? { type: 'MultiPolygon', coordinates: g.coordinates.map(fixPoly) } : g);
const GW = {
  365: 'USSR', 290: 'POL', 265: 'GDR', 260: 'FRG', 255: 'FRG', 315: 'CSK', 310: 'HUN', 360: 'ROU', 355: 'BGR',
  339: 'ALB', 345: 'YUG', 305: 'AUT', 375: 'FIN', 350: 'GRC', 640: 'TUR', 325: 'ITA', 220: 'FRA', 200: 'GBR',
  2: 'USA', 700: 'AFG',
};
const pad = n => String(n).padStart(2, '0');
const day = (y, m, d) => `${y}-${pad(m)}-${pad(d)}`;
const next = s => { const t = new Date(s + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() + 1); return t.toISOString().slice(0, 10); };

// ── states ──────────────────────────────────────────────────────────────
const states = read('tools/.cache/cshapes-2.0.geojson').features.map(f => {
  const p = f.properties;
  return {
    type: 'Feature', geometry: rewind(f.geometry),
    properties: { key: GW[+p.gwcode] || '', name: p.cntry_name, from: day(p.gwsyear, p.gwsmonth, p.gwsday), to: next(day(p.gweyear, p.gwemonth, p.gweday)) },
  };
}).filter(f => f.geometry && f.properties.to > '1945-01-01' && f.properties.from <= '1992-12-31');

// keep only state versions that some chapter scene (or a hero) actually shows
const dir = 'assets/js/data/history';
const dates = new Set();
for (const f of readdirSync(dir).filter(f => /^kq\d\.js$/.test(f))) {
  const ch = (await import(pathToFileURL(`${dir}/${f}`).href)).default;
  for (const s of ch.scenes || []) dates.add(s.map.borders);
}
const used = states.filter(f => [...dates].some(d => f.properties.from <= d && d < f.properties.to));

// ── Natural Earth 1:10m ─────────────────────────────────────────────────
const ne = async n => (await shapefile.read(`tools/.cache/ne/${n}/${n}.shp`, `tools/.cache/ne/${n}/${n}.dbf`)).features;
const inBox = ([w, s, e, n]) => f => { // any vertex inside the box
  const g = f.geometry; if (!g) return false;
  const walk = c => (typeof c[0] === 'number' ? c[0] > w && c[0] < e && c[1] > s && c[1] < n : c.some(walk));
  return walk(g.coordinates);
};
const WATER = [-26, 33, 50, 72], CORE_BOX = [4, 40, 36, 60];
// large rivers and lakes anywhere around Europe, small ones (rank 10–11) only where the close scenes look
const keepWater = f => f.properties.scalerank <= 9 || (f.properties.scalerank <= 11 && inBox(CORE_BOX)(f));
const land10 = { type: 'FeatureCollection', features: (await ne('ne_10m_land')).map(f => ({ type: 'Feature', geometry: rewind(f.geometry), properties: {} })) };
const rivers = [...await ne('ne_10m_rivers_lake_centerlines'), ...await ne('ne_10m_rivers_europe')].filter(inBox(WATER)).filter(keepWater)
  .map(f => ({ type: 'Feature', geometry: f.geometry, properties: { r: f.properties.scalerank } }));
const lakes = [...await ne('ne_10m_lakes'), ...await ne('ne_10m_lakes_europe')].filter(inBox(WATER)).filter(keepWater)
  .map(f => ({ type: 'Feature', geometry: rewind(f.geometry), properties: { r: f.properties.scalerank } }));
const deep = (await ne('ne_10m_bathymetry_K_200')).filter(inBox(WATER)).map(f => ({ type: 'Feature', geometry: rewind(f.geometry), properties: {} }));

// One topology for states, land and water, so shared lines stay shared. How much detail a point keeps depends on where it
// is: the close and middle scenes look at central and eastern Europe (CORE, nearly full detail), the rest of Europe is
// seen from further away, and the rest of the world only as a globe.
const CORE = ([x, y]) => x > 4 && x < 36 && y > 40 && y < 60;
const EU = ([x, y]) => x > -26 && x < 50 && y > 33 && y < 72;
let st = presimplify(topology({
  cshapes: { type: 'FeatureCollection', features: used }, land: land10,
  rivers: { type: 'FeatureCollection', features: rivers }, lakes: { type: 'FeatureCollection', features: lakes }, deep: { type: 'FeatureCollection', features: deep },
}));
const tCore = quantile(st, 0.8), tEU = quantile(st, 0.12), tWorld = quantile(st, 0.02);
st.arcs = st.arcs.map(arc => arc.filter((p, i) => i === 0 || i === arc.length - 1 || p[2] >= (CORE(p) ? tCore : EU(p) ? tEU : tWorld)));
const cshapes = feature(st, st.objects.cshapes).features;
const land = feature(st, st.objects.land);
const water = { rivers: feature(st, st.objects.rivers).features, lakes: feature(st, st.objects.lakes).features, deep: feature(st, st.objects.deep).features };

// ── Berlin ──────────────────────────────────────────────────────────────
// 1945 sectors, by the pre-2001 borough each Ortsteil belonged to. (West Staaken, handed to the Soviet zone in 1945 and
// run by the GDR from 1951, is left inside the British sector: it is too small to show at this scale.)
const SECTOR = {
  us: ['Kreuzberg', 'Neukölln', 'Britz', 'Buckow', 'Rudow', 'Gropiusstadt', 'Tempelhof', 'Mariendorf', 'Marienfelde', 'Lichtenrade',
    'Schöneberg', 'Friedenau', 'Steglitz', 'Lichterfelde', 'Lankwitz', 'Zehlendorf', 'Dahlem', 'Nikolassee', 'Wannsee', 'Schlachtensee'],
  uk: ['Tiergarten', 'Moabit', 'Hansaviertel', 'Charlottenburg', 'Westend', 'Charlottenburg-Nord', 'Wilmersdorf', 'Halensee', 'Grunewald',
    'Schmargendorf', 'Spandau', 'Haselhorst', 'Siemensstadt', 'Staaken', 'Gatow', 'Kladow', 'Hakenfelde', 'Falkenhagener Feld', 'Wilhelmstadt'],
  fr: ['Wedding', 'Gesundbrunnen', 'Reinickendorf', 'Tegel', 'Konradshöhe', 'Heiligensee', 'Frohnau', 'Hermsdorf', 'Waidmannslust', 'Lübars',
    'Wittenau', 'Märkisches Viertel', 'Borsigwalde'],
};
const ot = read('tools/.cache/berlin/ortsteile.json');
ot.features.forEach(f => { f.geometry = rewind(f.geometry); });
const sectorOf = name => Object.keys(SECTOR).find(k => SECTOR[k].includes(name)) || 'su';
const otTopo = topology({ o: ot }, 1e6);
const sectors = ['us', 'uk', 'fr', 'su'].map(k => ({
  type: 'Feature', properties: { sector: k },
  geometry: merge(otTopo, otTopo.objects.o.geometries.filter((g, i) => sectorOf(ot.features[i].properties.nam) === k)),
}));
const wall = [
  ...read('tools/.cache/berlin/a_grenzmauer.json').features.map(f => ({ type: 'Feature', geometry: f.geometry, properties: { kind: 'front' } })),
  ...read('tools/.cache/berlin/b_hinterlandmauer.json').features.map(f => ({ type: 'Feature', geometry: f.geometry, properties: { kind: 'rear' } })),
];
const strip = read('tools/.cache/berlin/d_grenzstreifen.json').features.map(f => ({ type: 'Feature', geometry: rewind(f.geometry), properties: {} }));
const berlinTopo = (() => {
  let t = topology({ sectors: { type: 'FeatureCollection', features: sectors }, wall: { type: 'FeatureCollection', features: wall }, strip: { type: 'FeatureCollection', features: strip } }, 1e6);
  t = simplify(presimplify(t), quantile(t, 0.35));
  return { sectors: feature(t, t.objects.sectors).features, wall: feature(t, t.objects.wall).features, strip: feature(t, t.objects.strip).features };
})();

// ── write ───────────────────────────────────────────────────────────────
const fc = features => ({ type: 'FeatureCollection', features });
const topo = topology({
  cshapes: fc(cshapes), land, rivers: fc(water.rivers), lakes: fc(water.lakes), deep: fc(water.deep),
  sectors: fc(berlinTopo.sectors), wall: fc(berlinTopo.wall), strip: fc(berlinTopo.strip),
}, 1e6);
topo.attribution = 'States 1945–1992: CShapes 2.0 (Schvitz et al., ETH Zürich), CC BY-NC-SA 4.0. Coastlines, rivers, lakes and bathymetry: Natural Earth (public domain). Berlin: Geoportal Berlin, "Verlauf der Berliner Mauer, 1989" and ALKIS Berlin Ortsteile, dl-de/zero-2-0.';
mkdirSync('assets/data', { recursive: true });
const out = JSON.stringify(topo);
writeFileSync('assets/data/borders.json', out);
const keys = [...new Set(cshapes.map(f => f.properties.key).filter(Boolean))].sort();
console.log(`${dates.size} scene dates · ${used.length} of ${states.length} state versions kept`);
console.log(`borders.json ${(out.length / 1024).toFixed(0)} KB · ${cshapes.length} states (${keys.join(' ')}) · Berlin: ${berlinTopo.wall.length} wall lines, ${berlinTopo.strip.length} strip polygons`);
console.log('sector check:', sectors.map(s => s.properties.sector + ':' + ot.features.filter(f => sectorOf(f.properties.nam) === s.properties.sector).length).join(' '));
