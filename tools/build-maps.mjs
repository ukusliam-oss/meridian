// Bake the map data the History chapters need into one TopoJSON file.
//   node tools/build-maps.mjs        (inputs in tools/.cache/, not committed)
// Inputs:
//   cshapes-2.0.geojson   CShapes 2.0 (Schvitz et al., ETH Zürich), CC BY-NC-SA 4.0, https://icr.ethz.ch/data/cshapes/
//                         States with borders dated to the day. Colonies are not states, so they show as plain land.
//   berlin/ortsteile.json ALKIS Berlin Ortsteile (Geoportal Berlin), Datenlizenz Deutschland Zero 2.0
//   berlin/a_grenzmauer.json, b_hinterlandmauer.json, d_grenzstreifen.json
//                         "Verlauf der Berliner Mauer, 1989" (Forum für Geschichte und Gegenwart e.V. / Geoportal Berlin),
//                         Datenlizenz Deutschland Zero 2.0, traced from an aerial photograph of 25 April 1989
//   Natural Earth land 50m (world-atlas package), public domain: coastlines and the base fill.
// Output: assets/data/borders.json with objects
//   cshapes  states valid 1945–1992, { key, name, from, to } (ISO dates, to is exclusive). Europe detailed, rest coarse.
//   land     Natural Earth land
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

// One topology for states and land, so shared borders stay shared. Points inside a box around Europe keep much more
// detail than points elsewhere: the regional scenes are all in Europe, while the rest of the world is only seen from far away.
const world50 = read('node_modules/world-atlas/countries-50m.json');
const EU = ([x, y]) => x > -26 && x < 50 && y > 33 && y < 72;
let st = presimplify(topology({ cshapes: { type: 'FeatureCollection', features: used }, land: feature(world50, world50.objects.land) }));
const tEU = quantile(st, 0.24), tWorld = quantile(st, 0.025);
st.arcs = st.arcs.map(arc => arc.filter((p, i) => i === 0 || i === arc.length - 1 || p[2] >= (EU(p) ? tEU : tWorld)));
const cshapes = feature(st, st.objects.cshapes).features;
const land = feature(st, st.objects.land);

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
  cshapes: fc(cshapes), land,
  sectors: fc(berlinTopo.sectors), wall: fc(berlinTopo.wall), strip: fc(berlinTopo.strip),
}, 3e5);
topo.attribution = 'States 1945–1992: CShapes 2.0 (Schvitz et al., ETH Zürich), CC BY-NC-SA 4.0. Coastlines: Natural Earth (public domain). Berlin: Geoportal Berlin, "Verlauf der Berliner Mauer, 1989" and ALKIS Berlin Ortsteile, dl-de/zero-2-0.';
mkdirSync('assets/data', { recursive: true });
const out = JSON.stringify(topo);
writeFileSync('assets/data/borders.json', out);
const keys = [...new Set(cshapes.map(f => f.properties.key).filter(Boolean))].sort();
console.log(`${dates.size} scene dates · ${used.length} of ${states.length} state versions kept`);
console.log(`borders.json ${(out.length / 1024).toFixed(0)} KB · ${cshapes.length} states (${keys.join(' ')}) · Berlin: ${berlinTopo.wall.length} wall lines, ${berlinTopo.strip.length} strip polygons`);
console.log('sector check:', sectors.map(s => s.properties.sector + ':' + ot.features.filter(f => sectorOf(f.properties.nam) === s.properties.sector).length).join(' '));
