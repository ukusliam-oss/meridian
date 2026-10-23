// Checks an Economics scroll chapter before it is committed:
//   node tools/check-econ.mjs [assets/js/data/economics/macro-policy.js]
// - every scene has the fields the page renders, and ids are unique
// - every fact, chart and scene source is listed in `sources`
// - every indicator, year, month and ISO3 code exists in econ.json and countries-modern.json
// - every syllabus point the chapter lists is covered by a scene, and Topic 4.1–4.4 is complete
// - no em dashes in any text (house style)
// - the policy-lab model passes its own direction check (tools/check-lab.mjs), when that tool exists
import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const file = process.argv[2] || 'assets/js/data/economics/macro-policy.js';
const { default: ch } = await import(pathToFileURL(file).href);
const { indicators } = JSON.parse(readFileSync('assets/data/econ.json', 'utf8'));
const iso = new Set(JSON.parse(readFileSync('assets/data/countries-modern.json', 'utf8')).objects.countries.geometries.map(g => g.properties.key));
// Topic 4.1–4.4 of the 0455 syllabus for 2027–2029 (plan §1.1)
const TOPIC = ['4.1.1', '4.2.1', '4.2.2', '4.2.3', '4.2.4', '4.2.5', '4.2.6', '4.3.1', '4.3.2', '4.3.3', '4.4.1', '4.4.2', '4.4.3'];

const errors = [], warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`), warn = (where, msg) => warnings.push(`${where}: ${msg}`);
const src = ch.sources || {};
const hasSrc = k => Object.prototype.hasOwnProperty.call(src, k);

// indicators and dates
function checkSpec(where, spec, kind, scene = {}) {
  const ind = indicators[spec.id];
  if (!ind) return err(where, `${kind} indicator ${spec.id} is not in econ.json`);
  const whens = spec.years || (spec.year != null ? [spec.year] : spec.month ? [spec.month] : []);
  if (!whens.length) err(where, `${kind} ${spec.id} names no year or month`);
  for (const w of whens) {
    // econ.json stores ranges: years [first, last], months ['YYYY-MM', 'YYYY-MM']
    if (String(w).includes('-')) {
      if (!ind.months) err(where, `${kind} ${spec.id} is annual but ${w} is a month`);
      else if (String(w) < ind.months[0] || String(w) > ind.months[1]) err(where, `${kind} ${spec.id} has no month ${w}`);
    } else if (ind.years && (+w < ind.years[0] || +w > ind.years[1])) err(where, `${kind} ${spec.id} has no year ${w}`);
    else if (ind.months && (String(w) < ind.months[0].slice(0, 4) || String(w) > ind.months[1].slice(0, 4))) err(where, `${kind} ${spec.id} has no months in ${w}`);
    else if (ind.forecastFrom && +String(w).slice(0, 4) >= ind.forecastFrom && !/projection/i.test(scene.body || '')) warn(where, `${kind} ${spec.id} ${w} is an IMF projection: say so in the text`);
    // a map of a year where most countries have no figure says little
    if (!String(w).includes('-') && ind.years && !ind.latestOnly) {
      const k = +w - ind.years[0], n = Object.values(ind.values).filter(r => r[k] != null).length;
      if (n < 40) warn(where, `${kind} ${spec.id} ${w} has figures for only ${n} countries`);
    }
  }
}

const ids = new Set();
const covered = new Set();
(ch.scenes || []).forEach((s, i) => {
  const at = `scene ${i + 1} (${s.id})`;
  if (ids.has(s.id)) err(at, 'duplicate id'); ids.add(s.id);
  for (const f of ['part', 'date', 'dateLabel', 'title', 'body', 'why']) if (!s[f]) err(at, `missing ${f}`);
  if (!s.camera || [s.camera.lat, s.camera.lon, s.camera.alt].some(v => typeof v !== 'number')) err(at, 'camera needs lat, lon, alt');
  if (!s.map) err(at, 'missing map');
  if (!s.check || !s.check.q || !s.check.a) err(at, 'check needs q and a');
  if (!(s.facts || []).length) err(at, 'no facts');
  for (const f of s.facts || []) if (!hasSrc(f.src)) err(at, `fact source "${f.src}" is not in sources`);
  for (const k of s.sources || []) if (!hasSrc(k)) err(at, `scene source "${k}" is not in sources`);
  if (!(s.syllabus || []).length) err(at, 'no syllabus points'); else s.syllabus.forEach(t => covered.add(t));
  const m = s.map || {};
  if (m.data) checkSpec(at, m.data, 'map.data', s);
  if (m.spikes) checkSpec(at, m.spikes, 'map.spikes', s);
  for (const k of m.focus || []) if (!iso.has(k)) err(at, `focus ${k} is not a country in countries-modern.json`);
  for (const fl of m.flows || []) for (const k of [fl.from, fl.to]) if (!iso.has(k)) err(at, `flow end ${k} is not a country`);
  if (m.focus && m.focus.length > 6) warn(at, `${m.focus.length} focus countries crowd the map labels`);
  if (s.chart) {
    const c = s.chart;
    if (c.source && /^[a-z0-9-]+$/.test(c.source) && !hasSrc(c.source)) err(at, `chart source "${c.source}" is not in sources`);
    for (const sr of c.series || []) {
      if (Array.isArray(sr)) continue; // bar chart pair
      if (sr.ind) {
        const ind = indicators[sr.ind];
        if (!ind) { err(at, `chart series ${sr.label}: ${sr.ind} is not in econ.json`); continue; }
        if (!ind.values[sr.iso]) { err(at, `chart series ${sr.label}: no ${sr.ind} values for ${sr.iso}`); continue; }
        const n = ind.values[sr.iso].filter(v => v != null).length;
        if (n < 2) err(at, `chart series ${sr.label}: fewer than two values`);
      } else if (!(sr.points || []).length) err(at, `chart series ${sr.label}: no points and no indicator`);
      else if (!c.source) warn(at, `chart series ${sr.label} has typed points: give the chart a source`);
    }
  }
  if (s.chain) {
    if (!(s.chain.steps || []).length) err(at, 'chain has no steps');
    if (s.chain.globe != null && !(m.flows || []).length) warn(at, 'chain.globe is set but the map has no flows to send');
  }
});

// syllabus
const listed = (ch.syllabus || []).map(t => t.id);
for (const t of listed) if (!covered.has(t)) err('syllabus', `${t} is listed but no scene covers it`);
for (const t of covered) if (!listed.includes(t)) warn('syllabus', `${t} is used by a scene but not listed in syllabus`);
if (ch.subject === 'economics' && ch.id !== 'engine-test') for (const t of TOPIC) if (!covered.has(t)) err('syllabus', `Topic ${t} is not covered`);

// toolkit
const tk = ch.toolkit || {};
if (!(tk.summary || []).length) err('toolkit', 'no summary');
if (ch.id !== 'engine-test') {
  if ((tk.checks || []).length < 20) err('toolkit', `${(tk.checks || []).length} quick checks, plan asks for 20`);
  if (!(tk.definitions || []).length) warn('toolkit', 'no definition bank');
  if ((tk.practiceSets || []).length < 4) warn('toolkit', 'fewer than 4 Section B practice sets');
}

// sources used at least once
const used = new Set();
JSON.stringify(ch, (k, v) => { if ((k === 'src' || k === 'source') && typeof v === 'string') used.add(v); if (k === 'sources' && Array.isArray(v)) v.forEach(x => used.add(x)); return v; });
for (const k of Object.keys(src)) {
  if (!used.has(k)) warn('sources', `${k} is never cited`);
  const s = src[k]; if (!s.title || !s.url) err('sources', `${k} needs a title and a url`);
}

// house style: no em dashes anywhere in the chapter's text
JSON.stringify(ch, (k, v) => { if (typeof v === 'string' && v.includes('—')) err('style', `em dash in "${v.slice(Math.max(0, v.indexOf('—') - 30), v.indexOf('—') + 30)}"`); return v; });

// the policy lab checks itself
if (existsSync('tools/check-lab.mjs')) {
  const r = spawnSync(process.execPath, ['tools/check-lab.mjs'], { encoding: 'utf8' });
  if (r.status !== 0) err('policy lab', (r.stdout + r.stderr).trim().split('\n').slice(-5).join(' / '));
}

for (const w of warnings) console.log('warn  ' + w);
for (const e of errors) console.log('ERROR ' + e);
console.log(`${file}: ${(ch.scenes || []).length} scenes, ${covered.size} syllabus points, ${Object.keys(src).length} sources · ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
