// Economics chapter data: modern borders keyed by ISO3, and the indicators the chapter colours the globe with.
//   node tools/build-econ.mjs          (downloads missing inputs into tools/.cache, then builds)
// Outputs
//   assets/data/countries-modern.json  TopoJSON: objects.countries (key = ISO3, name, lat/lon label point), objects.land
//   assets/data/econ.json              { indicators: { ID: { label, unit, source, years|months, values: { ISO3: [...] } } } }
// Sources
//   Natural Earth admin-0 50m (public domain)
//   IMF DataMapper: World Economic Outlook (reuse with citation; non-commercial use needs no permission)
//   BIS central bank policy rates (unrestricted with credit)
//   Our World in Data: Gini (World Bank PIP) and CO2 per capita (Global Carbon Project), CC BY 4.0

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { topology } from 'topojson-server';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { mergeArcs, feature } from 'topojson-client';
import { geoArea, geoCentroid } from 'd3-geo';

const ROOT = new URL('../', import.meta.url);
const CACHE = new URL('tools/.cache/', ROOT);
mkdirSync(CACHE, { recursive: true });

// RFC 4180 CSV: quoted fields may contain commas (BIS titles do), so never split on commas directly
function parseCsv(text) {
  const rows = []; let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; } else field += c; continue; }
    if (c === '"') q = true; else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

async function cached(name, url) {
  const f = new URL(name, CACHE);
  if (!existsSync(f)) {
    process.stdout.write(`downloading ${name} … `);
    const r = await fetch(url, { signal: AbortSignal.timeout(180000) });
    if (!r.ok) throw new Error(`${url}: ${r.status}`);
    writeFileSync(f, Buffer.from(await r.arrayBuffer()));
    console.log('ok');
  }
  return readFileSync(f, 'utf8');
}

// ── borders ─────────────────────────────────────────────────────────────────
const NE = JSON.parse(await cached('ne_50m_admin_0_countries.geojson', 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson'));
// Natural Earth codes that differ from the IMF's. Disputed areas without a code stay as land with no data.
const FIX = { KOS: 'UVK', SOL: 'SOM', IOA: 'AUS', ATC: 'AUS' };
const imfNames = JSON.parse(await cached('imf-countries.json', 'https://www.imf.org/external/datamapper/api/v1/countries')).countries;

const keyOf = p => FIX[p.ADM0_A3] || (p.ISO_A3_EH !== '-99' ? p.ISO_A3_EH : null);
// IMF names, shortened for map labels the way IMF tables print them ("Korea", "China"), never renamed otherwise
const SHORT = {
  "China, People's Republic of": 'China', 'Korea, Republic of': 'Korea', "Korea, Dem. People's Rep. of": 'Korea, DPR',
  'Congo, Dem. Rep. of the': 'DR Congo', 'Congo, Republic of': 'Congo', 'Gambia, The': 'The Gambia', 'Bahamas, The': 'The Bahamas',
  'Micronesia, Fed. States of': 'Micronesia', 'United States Virgin Islands': 'US Virgin Islands',
};
const shortName = n => { n = n.trim(); return SHORT[n] || n.replace(/, Republic of$/, ''); };
const iso2 = {};
const byKey = new Map();
for (const f of NE.features) {
  const p = f.properties, key = keyOf(p);
  if (!key) continue;
  if (p.ISO_A2_EH && p.ISO_A2_EH !== '-99') iso2[p.ISO_A2_EH] = key;
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  if (!byKey.has(key)) byKey.set(key, { name: shortName(imfNames[key]?.label || p.NAME_EN || p.NAME), polys: [] });
  byKey.get(key).polys.push(...polys);
}
const countries = [];
for (const [key, { name, polys }] of byKey) {
  // label point: centroid of the largest polygon, so France sits in Europe and not in the Atlantic
  const big = polys.map(c => ({ type: 'Polygon', coordinates: c })).sort((a, b) => geoArea(b) - geoArea(a))[0];
  const [lon, lat] = geoCentroid(big);
  countries.push({ type: 'Feature', properties: { key, name, from: '1900-01-01', to: '2100-01-01', lat: +lat.toFixed(2), lon: +lon.toFixed(2) }, geometry: { type: 'MultiPolygon', coordinates: polys } });
}
// simplify on full precision, decode, then quantize once (simplified arcs still carry their weights otherwise)
let st = presimplify(topology({ countries: { type: 'FeatureCollection', features: countries } }));
st = simplify(st, quantile(st, 0.8));
let topo = topology({ countries: feature(st, st.objects.countries) }, 2e5);
topo.objects.land = { type: 'GeometryCollection', geometries: [mergeArcs(topo, topo.objects.countries.geometries)] };
const bordersOut = JSON.stringify(topo);
writeFileSync(new URL('assets/data/countries-modern.json', ROOT), bordersOut);
console.log(`countries-modern.json: ${countries.length} countries, ${(bordersOut.length / 1024).toFixed(0)} KB`);
const known = new Set(countries.map(c => c.properties.key));

// ── indicators ──────────────────────────────────────────────────────────────
const Y0 = 2000, Y1 = 2026;
const years = Array.from({ length: Y1 - Y0 + 1 }, (_, i) => Y0 + i);
const r1 = v => (v == null || Number.isNaN(v) ? null : Math.round(v * 10) / 10);
const indicators = {};

const IMF = {
  NGDP_RPCH: { label: 'Real GDP growth', unit: '% change' },
  PCPIPCH: { label: 'Inflation, average consumer prices', unit: '% change' },
  LUR: { label: 'Unemployment rate', unit: '% of labour force' },
  BCA_NGDPD: { label: 'Current account balance', unit: '% of GDP' },
  GGXCNL_NGDP: { label: 'Government budget balance (net lending/borrowing)', unit: '% of GDP' },
  GGXWDG_NGDP: { label: 'Government gross debt', unit: '% of GDP' },
};
const imfMeta = JSON.parse(await cached('imf-indicators.json', 'https://www.imf.org/external/datamapper/api/v1/indicators')).indicators;
for (const [id, m] of Object.entries(IMF)) {
  const raw = JSON.parse(await cached(`imf-${id}.json`, `https://www.imf.org/external/datamapper/api/v1/${id}`)).values[id];
  const values = {};
  for (const [k, series] of Object.entries(raw)) if (known.has(k)) values[k] = years.map(y => r1(series[y]));
  indicators[id] = { ...m, source: `IMF, ${imfMeta[id].source}`, years: [Y0, Y1], forecastFrom: 2026, values };
}

// BIS policy rates, monthly. Euro-area members share the ECB rate (BIS area XM).
const EURO = { AUT: 1999, BEL: 1999, CYP: 2008, DEU: 1999, EST: 2011, ESP: 1999, FIN: 1999, FRA: 1999, GRC: 2001, HRV: 2023, IRL: 1999, ITA: 1999, LTU: 2015, LUX: 1999, LVA: 2014, MLT: 2008, NLD: 1999, PRT: 1999, SVK: 2009, SVN: 2007 };
const bis = await cached('bis-cbpol-monthly.csv', 'https://stats.bis.org/api/v2/data/dataflow/BIS/WS_CBPOL/1.0/M.?startPeriod=2015-01&format=csv');
const rows = parseCsv(bis.trim()); const head = rows.shift();
const iArea = head.indexOf('REF_AREA'), iT = head.indexOf('TIME_PERIOD'), iV = head.indexOf('OBS_VALUE');
const M0 = 2015, months = (2026 - M0 + 1) * 12;
const rate = {};
for (const c of rows) {
  const area = c[iArea], t = c[iT], v = parseFloat(c[iV]);
  if (!t || Number.isNaN(v)) continue;
  const [y, m] = t.split('-').map(Number); const idx = (y - M0) * 12 + (m - 1); if (idx < 0 || idx >= months) continue;
  const targets = area === 'XM' ? Object.entries(EURO).filter(([, since]) => y >= since).map(([k]) => k) : [iso2[area]].filter(Boolean);
  for (const k of targets) { if (!known.has(k)) continue; (rate[k] ||= Array(months).fill(null))[idx] = r1(v); }
}
indicators.POLICY_RATE = { label: 'Central bank policy rate', unit: '%', source: 'BIS, Central bank policy rates', months: ['2015-01', `2026-12`], values: rate };

// Our World in Data: Gini and CO2 per capita
function owid(csv, col, k = 1) {
  const lines = parseCsv(csv.trim()); const h = lines.shift().map(x => x.toLowerCase());
  const ic = h.indexOf('iso_code') >= 0 ? h.indexOf('iso_code') : h.indexOf('code'), iy = h.indexOf('year'), iv = h.indexOf(col.toLowerCase());
  const out = {};
  for (const c of lines) {
    const key = c[ic], y = +c[iy], v = parseFloat(c[iv]);
    if (!known.has(key) || y < Y0 || y > Y1 || Number.isNaN(v)) continue;
    (out[key] ||= Array(years.length).fill(null))[y - Y0] = r1(v * k);
  }
  return out;
}
const giniCsv = await cached('owid-gini.csv', 'https://ourworldindata.org/grapher/economic-inequality-gini-index.csv?v=1&csvType=full&useColumnShortNames=true');
const giniCol = giniCsv.split('\n')[0].split(',').find(c => /gini/i.test(c));
indicators.GINI = { label: 'Income inequality (Gini index)', unit: '0 = equal, 100 = unequal', source: 'World Bank Poverty and Inequality Platform, via Our World in Data (CC BY 4.0)', years: [Y0, Y1], latestOnly: true, values: owid(giniCsv, giniCol, 100) };
const co2Csv = await cached('owid-co2.csv', 'https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.csv');
indicators.CO2_PC = { label: 'CO₂ emissions per person', unit: 'tonnes per person', source: 'Global Carbon Project, via Our World in Data (CC BY 4.0)', years: [Y0, Y1], values: owid(co2Csv, 'co2_per_capita') };

const out = JSON.stringify({ built: new Date().toISOString().slice(0, 10), indicators });
writeFileSync(new URL('assets/data/econ.json', ROOT), out);
for (const [id, d] of Object.entries(indicators)) console.log(`${id.padEnd(12)} ${Object.keys(d.values).length} countries`);
console.log(`econ.json: ${(out.length / 1024).toFixed(0)} KB`);
