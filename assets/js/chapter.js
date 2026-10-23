// Scroll chapter page (History and Economics): renders the scenes of one chapter from its data file and drives the globe.
// Scroll position becomes globe progress p (scene index + fraction); the date ribbon and the pill follow it.
// The text works without WebGL: if the globe cannot start, the page is still a complete chapter.
// The page names its data file in <body data-chapter>; anything a chapter does not set falls back to KQ6's values.

import { $, $$, gsap, lenis, reduced, boot, esc } from './core.js';
const { default: data } = await import(document.body.dataset.chapter || './data/history/kq6.js');
const CFG = {
  borders: data.borders === 'modern' ? '../assets/data/countries-modern.json' : '../assets/data/borders.json',
  values: data.scenes.some(s => s.map && (s.map.data || s.map.spikes)) ? '../assets/data/econ.json' : null,
  hero: data.hero || { lat: 47, lon: 24, alt: 15500 },
  ribbon: data.ribbon || ['1945-01-01', '1992-01-01'],
  heroDate: data.heroDate || '1948-01-01',
  pill: data.pill || { part: 'Key question 6', date: 'Eastern Europe, 1948–<span class="lc">c.</span>1989' },
  relief: data.relief || { world: '../assets/data/relief-world.jpg', europe: '../assets/data/relief-europe.jpg', europeBox: [-15, 30, 65, 75] },
  accent: data.accent || null,
};

const root = document.documentElement;
const scenes = data.scenes;
const N = scenes.length;
const srcKeys = Object.keys(data.sources);
const srcNo = k => srcKeys.indexOf(k) + 1;

// ── markup ─────────────────────────────────────────────────────────────────
const title = t => {
  const i = t.indexOf(': ');
  if (i > 0) return `<em>${esc(t.slice(0, i + 1))}</em>${esc(t.slice(i + 2))}`;
  const s = t.indexOf(' ');
  return s > 0 ? `<em>${esc(t.slice(0, s))}</em>${esc(t.slice(s + 1))}` : esc(t);
};
const parts = [];
scenes.forEach((s, i) => { if (!parts.length || parts.at(-1).name !== s.part) parts.push({ name: s.part, first: i, scenes: [] }); parts.at(-1).scenes.push(i); });
const partOf = i => parts.findIndex(p => p.scenes.includes(i));

const toYear = x => (typeof x === 'string' ? (([y, m]) => y + ((m || 1) - 1) / 12)(x.split('-').map(Number)) : x);
const SERIES = ['var(--acc)', '#9db7ff', '#ffd59a', '#ff8a7a'];
function lineChart(c) {
  const W = 460, H = 220, L = 34, R = 16, T = 16, B = 24;
  const all = c.series.flatMap(sr => sr.points.map(([x, y]) => [toYear(x), y])).filter(d => d[1] != null);
  const xs = all.map(d => d[0]), ys = all.map(d => d[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  let y0 = Math.min(0, ...ys), y1 = Math.max(...ys);
  const step = [0.5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100].find(st => (y1 - y0) / st <= 5) || 200;
  y0 = Math.floor(y0 / step) * step; y1 = Math.ceil(y1 / step) * step;
  const X = x => L + (x - x0) / Math.max(1e-6, x1 - x0) * (W - L - R), Yp = y => T + (1 - (y - y0) / (y1 - y0)) * (H - T - B);
  const grid = []; for (let v = y0; v <= y1 + 1e-9; v += step) grid.push(`<line x1="${L}" x2="${W - R}" y1="${Yp(v).toFixed(1)}" y2="${Yp(v).toFixed(1)}" class="lc-grid${v === 0 ? ' is-zero' : ''}"/><text x="${L - 6}" y="${(Yp(v) + 3.5).toFixed(1)}" text-anchor="end" class="mono lc-t">${+v.toFixed(1)}</text>`);
  const yrs = []; const ys0 = Math.ceil(x0), span = Math.floor(x1) - ys0, every = span > 14 ? 5 : span > 6 ? 2 : 1;
  for (let y = ys0; y <= x1; y += every) yrs.push(`<text x="${X(y).toFixed(1)}" y="${H - 6}" text-anchor="middle" class="mono lc-t">${y}</text>`);
  const ends = c.series.map((sr, k) => { const pts = sr.points.map(([x, y]) => [toYear(x), y]).filter(d => d[1] != null); return { k, pts, y: Yp(pts.at(-1)[1]) - 7 }; });
  ends.slice().sort((a, b) => a.y - b.y).forEach((e, n, arr) => { if (n && e.y - arr[n - 1].y < 12) e.y = arr[n - 1].y + 12; });
  const lines = ends.map(({ k, pts, y }) => {
    const sr = c.series[k];
    const d = pts.map(([x, yy], n) => `${n ? 'L' : 'M'}${X(x).toFixed(1)} ${Yp(yy).toFixed(1)}`).join('');
    return `<path d="${d}" class="lc-line" style="--c:${sr.color || SERIES[k % 4]};--k:${k}" pathLength="1"/>`
      + `<text x="${W - 2}" y="${y.toFixed(1)}" text-anchor="end" class="mono lc-lab" fill="${sr.color || SERIES[k % 4]}">${esc(sr.label)}</text>`;
  }).join('');
  const marks = (c.marks || []).map(m => `<line x1="${X(toYear(m.x)).toFixed(1)}" x2="${X(toYear(m.x)).toFixed(1)}" y1="${T}" y2="${H - B}" class="lc-mark"/><text x="${(X(toYear(m.x)) + 4).toFixed(1)}" y="${T + 10}" class="mono lc-t">${esc(m.label)}</text>`).join('');
  const unit = c.unit || c.series[0].unit || '';
  const src = c.source ? (data.sources[c.source] ? `<a class="src mono" href="#src-${c.source}">${srcNo(c.source)}</a>` : esc(c.source)) : '';
  return `<figure class="sc__chart sc__lc"><figcaption class="mono">${esc(c.title || c.series.map(sr => sr.label).join(', '))}${unit ? ' · ' + esc(unit) : ''}</figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title || 'Chart')}">${grid.join('')}${yrs.join('')}${marks}${lines}</svg>
    ${c.note || src ? `<figcaption class="mono">${esc(c.note || 'Source')} ${src}</figcaption>` : ''}</figure>`;
}
function chain(c) {
  return `<div class="sc__block"><span class="sc__label mono">${esc(c.title || 'Chain of analysis')}</span><ol class="chain2">${c.steps.map((x, k) => `<li style="--k:${k}"><span class="mono">${k + 1}</span><span>${esc(x)}</span></li>`).join('')}</ol></div>`;
}
function chart(c) {
  if (c.series && c.series[0] && !Array.isArray(c.series[0])) return lineChart(c);
  const W = 460, H = 190, max = Math.max(...c.series.map(d => d[1]));
  const bw = W / c.series.length;
  const bars = c.series.map(([x, v], k) => {
    const h = (v / max) * (H - 28);
    const wall = x >= 1962;
    return `<rect class="bar" style="--k:${k}" x="${(k * bw + 3).toFixed(1)}" y="${(H - 18 - h).toFixed(1)}" width="${(bw - 6).toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${wall ? '#ffffff' : '#b693ff'}" opacity="${wall ? .55 : .9}"/>`
      + (k % 2 === 0 || wall ? `<text x="${(k * bw + bw / 2).toFixed(1)}" y="${H - 4}" text-anchor="middle" class="mono" fill="rgba(255,255,255,.55)" font-size="10">${String(x).slice(2)}</text>` : '');
  }).join('');
  const peak = c.series.reduce((a, b) => (b[1] > a[1] ? b : a));
  return `<figure class="sc__chart"><figcaption class="mono">${esc(c.title)} · ${esc(c.unit)}</figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title)}">${bars}
      <text x="${W}" y="12" text-anchor="end" class="mono" fill="#fff" font-size="10.5">Peak ${peak[0]}: ${peak[1].toLocaleString('en-GB')}</text>
      <text x="${(c.series.findIndex(d => d[0] === 1962) * bw + 3).toFixed(1)}" y="${H - 58}" class="mono" fill="#fff" font-size="10">Wall built</text>
      <path d="M${(c.series.findIndex(d => d[0] === 1962) * bw + bw / 2).toFixed(1)} ${H - 52}v14" stroke="#fff" stroke-width="1"/></svg>
    <figcaption class="mono">${esc(c.note)} <a class="src mono" href="#src-${c.src}">${srcNo(c.src)}</a></figcaption></figure>`;
}

function compare(c) {
  return `<div class="sc__block cmp" role="table" aria-label="${esc(c.left)} compared with ${esc(c.right)}">
    <div class="cmp__head" role="row"><span role="columnheader"></span><span class="mono" role="columnheader">${esc(c.left)}</span><span class="mono" role="columnheader">${esc(c.right)}</span></div>
    ${c.rows.map((r, k) => `<div class="cmp__row" role="row" style="--k:${k}"><span class="mono" role="rowheader">${esc(r.k)}</span><span role="cell">${esc(r.l)}</span><span role="cell">${esc(r.r)}</span></div>`).join('')}</div>`;
}
function cascade(list) {
  return `<ol class="sc__block cascade">${list.map((c, k) => `<li style="--k:${k}"><span class="cascade__dot"></span><span class="mono">${esc(c.when)}</span><b>${esc(c.country)}</b><span>${esc(c.how)} <a class="src mono" href="#src-${c.src}">${srcNo(c.src)}</a></span></li>`).join('')}</ol>`;
}

function sceneHTML(s, i) {
  const pi = partOf(i), part = parts[pi];
  const opener = part.first === i ? `<header class="part ch-wrap" data-part="${pi}">
      <span class="tag mono">Part ${pi + 1} of ${parts.length}</span>
      <h2 class="display part__title"><em>${pi === parts.length - 1 ? 'After' : 'Part ' + (pi + 1)}</em>${esc(s.part)}</h2>
      <div class="part__fps mono">${[...new Set(part.scenes.flatMap(k => scenes[k].syllabus || []))].sort()
        .map(t => (data.focusPoints || data.syllabus || []).find(f => f.id === t)).filter(Boolean)
        .filter(f => !data.focusPoints || f.id.startsWith('FP')).map(f => `<span>${f.id} · ${esc(f.text)}</span>`).join('')}</div>
    </header>` : '';
  const judge = s.judgement ? `<div class="sc__block"><span class="sc__label mono">Judgement</span><div class="sc__judge">
      <div class="for"><span class="mono">Arguments for</span><ul>${s.judgement.for.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="against"><span class="mono">Arguments against</span><ul>${s.judgement.against.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="sc__verdict"><span class="mono">A supported judgement</span><p>${esc(s.judgement.verdict)}</p></div></div></div>` : '';
  const mis = s.misconception ? `<div class="sc__block sc__mis">
      <p class="is-wrong"><span class="mono">Common mistake</span>${esc(s.misconception.wrong)}</p>
      <p class="is-right"><span class="mono">In fact</span>${esc(s.misconception.right)}</p></div>` : '';
  return `<section class="sc" id="${s.id}" data-i="${i}">${opener}
    <div class="ch-wrap"><article class="sc__panel" data-panel>
      <div class="sc__meta"><span class="tag mono">${esc(s.part)}</span><span class="sc__n mono">${String(i + 1).padStart(2, '0')} / ${N}</span></div>
      <p class="sc__date">${esc(s.dateLabel)}</p>
      <h2 class="display sc__title">${title(s.title)}</h2>
      <div class="sc__body">${s.body}</div>
      ${s.chart ? chart(s.chart) : ''}${s.chain ? chain(s.chain) : ''}${s.compare ? compare(s.compare) : ''}${s.cascade ? cascade(s.cascade) : ''}
      <div class="sc__block sc__why"><span class="sc__label mono">Why it matters</span><p>${esc(s.why)}</p></div>
      ${s.evaluation && s.evaluation.length ? `<div class="sc__block"><span class="sc__label mono">It depends on</span><ul class="sc__eval">${s.evaluation.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
      ${mis}${judge}
      <div class="sc__block"><button class="sc__check" type="button" aria-expanded="false"><span class="mono"><span>Check yourself</span><span>Tap to reveal</span></span>
        <span class="q">${esc(s.check.q)}</span><span class="a">${esc(s.check.a)}</span></button></div>
      <details class="sc__block sc__facts"><summary class="mono">Facts and sources (${s.facts.length})</summary>
        <ol>${s.facts.map(f => `<li>${esc(f.text)}<a class="src mono" href="#src-${f.src}" title="${esc(data.sources[f.src].title)}">${srcNo(f.src)}</a></li>`).join('')}</ol></details>
    </article></div></section>`;
}

$('[data-scenes]').innerHTML = scenes.map(sceneHTML).join('');

// end of chapter: one-page summary, quick checks, every source
$('[data-sum]').innerHTML = data.toolkit.summary.map(x => `<p>${x}</p>`).join('');
$('[data-checks]').innerHTML = data.toolkit.checks.map(c => `<button class="sc__check" type="button" aria-expanded="false"><span class="mono"><span>Quick check</span><span>Tap</span></span><span class="q">${esc(c.q)}</span><span class="a">${esc(c.a)}</span></button>`).join('');
$('[data-sources]').innerHTML = srcKeys.map((k, n) => {
  const s = data.sources[k];
  return `<li id="src-${k}"><span class="mono">${n + 1}</span> <b>${esc(s.title)}</b>. ${esc(s.author)}. ${esc(s.publisher)}${s.year && s.year !== 'n.d.' ? ', ' + s.year : ''}. <a href="${esc(s.url)}" rel="noopener">${esc(s.url.replace(/^https?:\/\//, ''))}</a></li>`;
}).join('');

document.addEventListener('click', e => {
  const b = e.target.closest('.sc__check'); if (!b) return;
  b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  const hint = b.querySelector('.mono span:last-child'); if (hint) hint.textContent = b.getAttribute('aria-expanded') === 'true' ? 'Hide' : 'Tap to reveal';
});

// ── scene menu and pill ───────────────────────────────────────────────────
const menu = $('[data-menu]');
menu.innerHTML = parts.map((p, k) => `<h4 class="mono">Part ${k + 1} · ${esc(p.name)}</h4>`
  + p.scenes.map(i => `<a href="#${scenes[i].id}" data-go="${i}"><span class="mono">${String(i + 1).padStart(2, '0')}</span><span>${esc(scenes[i].title)}</span></a>`).join('')).join('');
const menuBtn = $('[data-menu-btn]');
const setMenu = open => { menu.hidden = !open; menuBtn.setAttribute('aria-expanded', open); };
menuBtn.addEventListener('click', () => setMenu(menu.hidden));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
menu.addEventListener('click', e => {
  const a = e.target.closest('[data-go]'); if (!a) return;
  e.preventDefault(); setMenu(false); goTo(+a.dataset.go);
});

// ── scroll → progress ─────────────────────────────────────────────────────
// A scene holds (p = i exactly) while its panel fills the reading line in the middle of the screen; the
// camera flies between scenes in the gap between two panels, including the part title screens.
let holds = [], heroAnchor = 0;
const panels = $$('[data-panel]');
const sections = $$('.sc[data-i]');
function measure() {
  const y = scrollY, vh = innerHeight;
  // on narrow screens the panel covers the map, so a scene settles while its panel is still entering from below
  const narrow = innerWidth <= 900;
  holds = panels.map(p => {
    const r = p.getBoundingClientRect(), top = y + r.top, bot = top + r.height, m = Math.min(vh * 0.3, r.height * 0.3);
    const start = narrow ? top - vh * 0.32 : top + m;
    return [start, Math.max(start, bot - m)];
  });
  heroAnchor = vh * 0.5;
}
function progressAt(y) {
  const c = y + innerHeight * 0.5;
  if (c < holds[0][0]) return -1 + Math.max(0, (c - heroAnchor) / (holds[0][0] - heroAnchor));
  for (let k = 0; k < N; k++) {
    if (c <= holds[k][1]) return k;
    if (k < N - 1 && c < holds[k + 1][0]) return k + (c - holds[k][1]) / (holds[k + 1][0] - holds[k][1]);
  }
  return N - 1;
}
// engine scene space: a panel whose map spans several years holds one engine scene per year
let eScenes = [], base = [], span = [];
function engineP(y) {
  const c = y + innerHeight * 0.5;
  if (c < holds[0][0]) return progressAt(y);
  for (let k = 0; k < N; k++) {
    if (c <= holds[k][1]) {
      const u = span[k] > 1 ? Math.max(0, Math.min(1, (c - holds[k][0]) / Math.max(1, holds[k][1] - holds[k][0]))) : 0;
      return base[k] + u * (span[k] - 1);
    }
    if (k < N - 1 && c < holds[k + 1][0]) return base[k] + span[k] - 1 + (c - holds[k][1]) / (holds[k + 1][0] - holds[k][1]);
  }
  return eScenes.length - 1;
}
function goTo(i) {
  const y = holds[i][0] - innerHeight * 0.5 + 4;
  if (lenis) lenis.scrollTo(y, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) }); else scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
}

// ── date ribbon ───────────────────────────────────────────────────────────
const dayNum = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d) / 864e5; };
const T0 = dayNum(CFG.ribbon[0]), T1 = dayNum(CFG.ribbon[1]);
const ribbon = $('[data-ribbon]'), track = $('[data-track]');
track.innerHTML = scenes.map((s, i) => `<i class="ribbon__tick${parts.some(p => p.first === i) ? ' is-part' : ''}" style="left:${((dayNum(s.date) - T0) / (T1 - T0) * 100).toFixed(2)}%"></i>`).join('') + '<i class="ribbon__needle" data-needle></i>';
const needle = $('[data-needle]'), yearEl = $('[data-year]'), labelEl = $('[data-label]');
if ($('[data-ends]')) $('[data-ends]').innerHTML = `<span>${CFG.ribbon[0].slice(0, 4)}</span><span>${+CFG.ribbon[1].slice(0, 4) - 1}</span>`;
const pillPart = $('[data-pill-part]'), pillDate = $('[data-pill-date]'), orb = $('[data-orb]');
const ORB = 2 * Math.PI * 22;
let lastShown = -2;
function updateUI(p) {
  const i = Math.max(0, Math.floor(p)), f = p - Math.floor(p);
  const near = p < 0 ? 0 : Math.min(N - 1, Math.round(p));
  const da = p < 0 ? dayNum(CFG.heroDate) : dayNum(scenes[i].date);
  const db = p < 0 ? dayNum(scenes[0].date) : dayNum(scenes[Math.min(N - 1, i + 1)].date);
  const d = da + (db - da) * (p < 0 ? Math.max(0, p + 1) : f);
  needle.style.left = `${((d - T0) / (T1 - T0) * 100).toFixed(2)}%`;
  const ep = eScenes.length ? engineP(lenis ? lenis.scroll : scrollY) : -1, es = eScenes[Math.max(0, Math.round(ep))];
  const shown = ep >= -0.5 && es && es.map && (es.map.spikes || es.map.data);
  yearEl.textContent = shown ? (shown.month ? shown.month.replace(/-(\d\d)$/, (m, mm) => ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][+mm - 1]).split(' ').reverse().join(' ') : shown.year) : new Date(d * 864e5).getUTCFullYear();
  ribbon.classList.toggle('is-on', p > -0.6 && p < N - 0.6);
  const key = p < -0.5 ? -1 : near;
  if (key !== lastShown) {
    lastShown = key;
    const s = scenes[near];
    labelEl.textContent = s.dateLabel;
    pillPart.textContent = p < -0.5 ? CFG.pill.part : `${s.part} · ${String(near + 1).padStart(2, '0')}/${N}`;
    if (p < -0.5) pillDate.innerHTML = CFG.pill.date; else pillDate.textContent = s.dateLabel;
    $$('[data-go]', menu).forEach(a => a.setAttribute('aria-current', +a.dataset.go === near));
    sections.forEach((sec, k) => sec.classList.toggle('is-active', key >= 0 && k === near));
    // paint the neighbouring scenes while the reader is reading, so no paint lands mid-flight
    if (world) [base[near + 1], base[near] + span[near] - 1, base[near - 1], base[near + 2]].filter(k => k != null).forEach((k, n) => idle(() => world.prepare(k), n * 120));
  }
  orb.style.strokeDashoffset = (ORB * (1 - Math.max(0, (p + 1) / N))).toFixed(1);
}

// ── globe ─────────────────────────────────────────────────────────────────
const idle = (f, delay = 0) => setTimeout(() => (window.requestIdleCallback ? requestIdleCallback(f, { timeout: 1200 }) : f()), delay);
let world = null;
let hero = null;
const loader = $('[data-loader]'), pct = $('[data-pct]'), bar = $('[data-bar]');
const setPct = v => { const n = Math.round(v * 100); pct.textContent = String(n).padStart(3, '0') + '%'; bar.style.width = n + '%'; };

async function loadBorders() {
  const res = await fetch(CFG.borders);
  if (!res.ok || !res.body) throw new Error('borders');
  const total = +res.headers.get('content-length') || 660000;
  const reader = res.body.getReader(); const chunks = []; let got = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); got += value.length; setPct(Math.min(0.92, got / Math.max(total, got) * 0.92)); }
  return JSON.parse(new TextDecoder().decode(await new Blob(chunks).arrayBuffer()));
}

// one engine scene per year of a multi-year map; arrows and lines only on the last year, value labels on focus countries
function buildEngineScenes(borders, values) {
  const obj = borders.objects.countries;
  const info = new Map(obj ? obj.geometries.map(g => [g.properties.key, g.properties]) : []);
  eScenes = []; base = []; span = [];
  const fmt = v => (Math.abs(v) >= 100 ? Math.round(v) : +v.toFixed(1)).toLocaleString('en-GB');
  scenes.forEach((s, k) => {
    const spec = s.map.spikes || s.map.data;
    const steps = spec && Array.isArray(spec.years) && spec.years.length > 1 ? spec.years : [spec ? (spec.years ? spec.years[0] : spec.year ?? spec.month) : null];
    base.push(eScenes.length); span.push(steps.length);
    steps.forEach((y, n) => {
      const when = y == null ? {} : (String(y).includes('-') ? { month: y, year: +String(y).slice(0, 4) } : { year: y });
      const map = { ...s.map };
      if (map.data) map.data = { ...map.data, year: when.year ?? map.data.year };
      if (map.spikes) map.spikes = { ...map.spikes, ...when };
      if (n < steps.length - 1) { map.arrows = []; map.flows = []; map.lines = []; }
      if (values && spec && (map.focus || []).length && info.size) {
        const ind = values[spec.id], unit = ind && ind.unit.startsWith('%') ? '%' : '';
        const extra = map.focus.map(key => {
          const p = info.get(key); if (!p) return null;
          return { at: [p.lat, p.lon], label: p.name, key };
        }).filter(Boolean);
        map.markers = [...(map.markers || []), ...extra.map(m => ({ ...m, label: `${m.label}${(() => { const v = valueAt(values, { ...spec, ...when }, m.key); return v == null ? '' : ' · ' + fmt(v) + unit; })()}` }))];
      }
      eScenes.push({ ...s, map });
    });
  });
  const h = data.hero && data.hero.camera ? data.hero : { camera: CFG.hero };
  hero = { camera: h.camera, map: { ...eScenes[0].map, markers: [], arrows: [], flows: [], lines: [] } };
}
// same lookup as the engine's valueOf, kept here so labels can be built before the engine loads
function valueAt(values, spec, key) {
  const ind = values[spec.id]; if (!ind) return null; const row = ind.values[key]; if (!row) return null;
  if (ind.months) {
    const [y, m] = String(spec.month || `${spec.year}-12`).split('-').map(Number), [y0, m0] = ind.months[0].split('-').map(Number);
    let i = (y - y0) * 12 + (m - m0); while (i >= 0 && row[i] == null) i--; return i >= 0 ? row[i] : null;
  }
  let i = spec.year - ind.years[0]; if (ind.latestOnly) { while (i >= 0 && row[i] == null) i--; return i >= 0 ? row[i] : null; }
  return row[i] ?? null;
}

async function start() {
  setPct(0.02);
  try {
    const [{ createWorld }, borders, values] = await Promise.all([import('./world.js'), loadBorders(), CFG.values ? fetch(CFG.values).then(r => r.json()).then(j => j.indicators) : null]);
    buildEngineScenes(borders, values);
    setPct(0.96);
    world = await createWorld($('[data-world]'), { scenes: eScenes, hero, data: borders, values, accent: CFG.accent, reduced, relief: CFG.relief });
    if (!world) root.classList.add('no-webgl');
  } catch (err) {
    if (!eScenes.length) { base = scenes.map((_, k) => k); span = scenes.map(() => 1); eScenes = scenes; }
    console.warn('Globe unavailable:', err);
    root.classList.add('no-webgl');
  }
  setPct(1);
  measure();
  let lastP = NaN;
  gsap.ticker.add(() => {
    const y = lenis ? lenis.scroll : scrollY, p = progressAt(y);
    if (p === lastP) return; lastP = p;
    if (world) world.setProgress(engineP(y));
    updateUI(p);
  });
  addEventListener('resize', () => { measure(); lastP = NaN; });
  document.fonts?.ready.then(() => { measure(); lastP = NaN; });
  new ResizeObserver(() => { measure(); lastP = NaN; }).observe($('[data-scenes]'));
  requestAnimationFrame(() => { loader.classList.add('is-done'); root.classList.add('is-ready'); });
  boot();
  if (location.hash) { const k = scenes.findIndex(s => '#' + s.id === location.hash); if (k >= 0) setTimeout(() => goTo(k), 400); }
}
start();
