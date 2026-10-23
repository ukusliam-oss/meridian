// Checks the policy-lab model: node tools/check-lab.mjs
// - every dial has one effect row for every aim and for the budget (5 × 7 = 35)
// - each row's short-run and long-run signs match the direction a textbook gives (`expect`)
// - the scenarios replay to the right side of the "no change in policy" line where the beats say they should:
//   2009 policy raises growth and lowers unemployment; 2022 policy lowers inflation
import { pathToFileURL } from 'node:url';

const { default: m } = await import(pathToFileURL('assets/js/data/economics/policy-lab.js').href);
// the reader imports core.js (browser only), so the model's run() is reimplemented here from the same rules
const errors = [];
const targets = [...m.aims.map(a => a.id), 'budget'];
for (const d of m.dials) for (const t of targets) {
  const rows = m.effects.filter(e => e.dial === d.id && e.aim === t);
  if (rows.length !== 1) { errors.push(`${d.id} → ${t}: ${rows.length} rows`); continue; }
  const e = rows[0];
  e.expect.forEach((x, n) => {
    const k = e.k[n], ok = x === 'up' ? k > 0 : x === 'down' ? k < 0 : k === 0;
    if (!ok) errors.push(`${d.id} → ${t} (${n ? 'long' : 'short'} run): k = ${k} but the table says ${x}`);
  });
  if (!e.why) errors.push(`${d.id} → ${t}: no explanation`);
}
for (const e of m.effects) if (!m.dials.some(d => d.id === e.dial) || !targets.includes(e.aim)) errors.push(`unknown row ${e.dial} → ${e.aim}`);

const DT = 0.25, H = m.horizon, N = H / DT + 1;
const ramp = (s, [a, b]) => (s <= a ? 0 : s >= b ? 1 : (t => t * t * (3 - 2 * t))((s - a) / (b - a)));
const along = (pts, t, before) => { if (!pts || !pts.length) return before; if (t <= pts[0][0]) return before ?? pts[0][1]; for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) { const [q0, v0] = pts[i - 1], [q1, v1] = pts[i]; return v0 + (v1 - v0) * (t - q0) / Math.max(1e-9, q1 - q0); } return pts.at(-1)[1]; };
function effect(sc, aim, q) {
  let sum = 0;
  for (const d of m.dials) {
    const e = m.effects.find(x => x.dial === d.id && x.aim === aim), lag = m.lags[d.id];
    for (let i = 1; i < N; i++) {
      const t0 = (i - 1) * DT, step = (along(sc.moves[d.id], i * DT, sc.dials[d.id]) - along(sc.moves[d.id], t0, sc.dials[d.id])) / d.per;
      if (step && q >= i * DT) { const s = q - t0; sum += step * (e.k[0] * ramp(s, e.sr || lag.sr) + (e.k[1] - e.k[0]) * ramp(s, e.lr || lag.lr)); }
    }
  }
  return sum;
}
const sc09 = m.scenarios.find(s => s.id === 'recession-2009'), sc22 = m.scenarios.find(s => s.id === 'inflation-2022');
if (!(effect(sc09, 'growth', 9) > 0)) errors.push('2009: policy does not raise growth by the short run');
if (!(effect(sc09, 'unemployment', 12) < 0)) errors.push('2009: policy does not lower unemployment');
if (!(effect(sc22, 'inflation', 14) < 0)) errors.push('2022: policy does not lower inflation');
for (const sc of m.scenarios) for (const b of sc.beats) for (const k of b.src || []) if (!m.sources[k]) errors.push(`${sc.id}: beat source ${k} missing`);
JSON.stringify(m, (k, v) => { if (typeof v === 'string' && v.includes('—')) errors.push(`em dash: ${v.slice(0, 60)}`); return v; });

for (const e of errors) console.log('ERROR ' + e);
console.log(`policy lab: ${m.effects.length} effect rows, ${m.scenarios.length} scenarios · ${errors.length} errors`);
process.exit(errors.length ? 1 : 0);
