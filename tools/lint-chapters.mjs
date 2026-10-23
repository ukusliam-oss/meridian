// Coverage lint for scroll chapters: node tools/lint-chapters.mjs (npm run lint).
// Every chapter data file under assets/js/data/<subject>/ that has `scenes` is checked: required scene fields, dates
// inside the ribbon axis, cameras on the globe, syllabus tags that exist, and every fact, chart and cascade item pointing
// at a source that exists. Errors fail the run; warnings (unused sources, syllabus points no scene covers) do not.

import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = 'assets/js/data';
const LAYERS = ['history'];
const isDate = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s + 'T00:00:00Z'));
const str = s => typeof s === 'string' && s.trim().length > 0;
const num = (x, a, b) => typeof x === 'number' && Number.isFinite(x) && x >= a && x <= b;

let errors = 0, warnings = 0, files = 0;
const say = (kind, file, where, msg) => { kind === 'error' ? errors++ : warnings++; console.log(`${kind === 'error' ? 'ERROR' : 'warn '} ${file}${where ? ' ' + where : ''}: ${msg}`); };

function lint(file, d) {
  const E = (w, m) => say('error', file, w, m), Wn = (w, m) => say('warn', file, w, m);
  const sources = d.sources || {};
  const used = new Set();
  const src = (w, k) => { if (!str(k)) E(w, 'missing source key'); else if (!sources[k]) E(w, `unknown source "${k}"`); else used.add(k); };
  const tags = new Set([...(d.focusPoints || []), ...(d.specified || [])].map(t => t.id));

  for (const k of ['id', 'title', 'status']) if (!str(d[k])) E('', `missing ${k}`);
  if (!d.axis || !isDate(d.axis.from) || !isDate(d.axis.to) || d.axis.from >= d.axis.to) E('axis', 'needs from < to as YYYY-MM-DD');
  if (d.axis?.hero && !isDate(d.axis.hero)) E('axis.hero', 'not a date');
  const cam = (w, c) => { if (!c || !num(c.lat, -90, 90) || !num(c.lon, -180, 360) || !num(c.alt, 1, 60000)) E(w, 'camera needs lat, lon and alt (km)'); };
  cam('hero', d.hero?.camera);
  if (!d.world || (d.world.layer && !LAYERS.includes(d.world.layer))) E('world', `layer must be one of ${LAYERS.join(', ')}`);
  if (d.world?.layer === 'history' && !str(d.world.data)) E('world', 'the history layer needs a data file');

  const ids = new Set();
  (d.scenes || []).forEach((s, i) => {
    const w = `scene ${i + 1}${s.id ? ` (${s.id})` : ''}`;
    for (const k of ['id', 'part', 'dateLabel', 'title', 'body', 'why']) if (!str(s[k])) E(w, `missing ${k}`);
    if (ids.has(s.id)) E(w, 'duplicate id'); ids.add(s.id);
    if (!isDate(s.date)) E(w, 'date must be YYYY-MM-DD');
    else if (d.axis && (s.date < d.axis.from || s.date > d.axis.to)) E(w, `date ${s.date} is outside the ribbon axis`);
    cam(w, s.camera);
    if (!s.map || typeof s.map !== 'object') E(w, 'missing map');
    else {
      if (d.world?.layer === 'history' && s.map.borders && !isDate(s.map.borders)) E(w, 'map.borders must be a date');
      (s.map.markers || []).forEach((m, k) => { if (!Array.isArray(m.at) || !num(m.at[0], -90, 90) || !num(m.at[1], -180, 360) || !str(m.label)) E(w, `marker ${k + 1} needs at [lat, lon] and a label`); });
      (s.map.arrows || []).forEach((a, k) => { if (!Array.isArray(a.from) || !Array.isArray(a.to) || !str(a.kind)) E(w, `arrow ${k + 1} needs from, to and kind`); });
      (s.map.lines || []).forEach((l, k) => { if (!str(l.kind)) E(w, `line ${k + 1} needs a kind`); });
    }
    if (!s.check || !str(s.check.q) || !str(s.check.a)) E(w, 'check needs q and a');
    if (!Array.isArray(s.facts) || !s.facts.length) E(w, 'needs at least one fact');
    else s.facts.forEach((f, k) => { if (!str(f.text)) E(w, `fact ${k + 1} has no text`); src(`${w} fact ${k + 1}`, f.src); });
    (s.sources || []).forEach(k => src(`${w} sources`, k));
    if (!Array.isArray(s.syllabus) || !s.syllabus.length) E(w, 'needs syllabus tags');
    else s.syllabus.forEach(t => { if (!tags.has(t)) E(w, `unknown syllabus tag "${t}"`); });
    if (s.misconception && (!str(s.misconception.wrong) || !str(s.misconception.right))) E(w, 'misconception needs wrong and right');
    if (s.judgement && (!s.judgement.for?.length || !s.judgement.against?.length || !str(s.judgement.verdict))) E(w, 'judgement needs for, against and verdict');
    if (s.chart) { src(`${w} chart`, s.chart.src); if (!Array.isArray(s.chart.series) || !s.chart.series.length) E(w, 'chart has no series'); }
    (s.cascade || []).forEach((c, k) => src(`${w} cascade ${k + 1}`, c.src));
  });

  for (const [k, s] of Object.entries(sources)) {
    if (!str(s.title) || !str(s.publisher) || !/^https?:\/\//.test(s.url || '')) E(`source ${k}`, 'needs title, publisher and an http(s) url');
    if (!used.has(k)) Wn(`source ${k}`, 'not cited by any scene');
  }
  const covered = new Set((d.scenes || []).flatMap(s => s.syllabus || []));
  for (const t of tags) if (!covered.has(t)) Wn(`syllabus ${t}`, 'no scene covers it');
  if (!d.toolkit?.summary?.length || !d.toolkit?.checks?.length) E('toolkit', 'needs a summary and quick checks');
}

for (const subject of readdirSync(ROOT)) {
  const dir = join(ROOT, subject);
  if (!statSync(dir).isDirectory()) continue;
  for (const f of readdirSync(dir).filter(f => f.endsWith('.js'))) {
    const d = (await import(pathToFileURL(join(dir, f)).href)).default;
    if (!d?.scenes) continue;
    files++;
    lint(join(dir, f), d);
  }
}
console.log(`${files} chapter${files === 1 ? '' : 's'} checked: ${errors} error${errors === 1 ? '' : 's'}, ${warnings} warning${warnings === 1 ? '' : 's'}`);
process.exit(errors ? 1 : 0);
