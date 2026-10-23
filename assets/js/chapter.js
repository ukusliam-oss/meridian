// History chapter page: renders the scenes of one key question from its data file and drives the globe.
// Scroll position becomes globe progress p (scene index + fraction); the date ribbon and the pill follow it.
// The text works without WebGL: if the globe cannot start, the page is still a complete chapter.

import { $, $$, gsap, lenis, reduced, boot, esc } from './core.js';
import data from './data/history/kq6.js';

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

function chart(c) {
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
      <div class="part__fps mono">${[...new Set(part.scenes.flatMap(k => scenes[k].syllabus).filter(t => t.startsWith('FP')))].sort()
        .map(t => `<span>${t} · ${esc(data.focusPoints.find(f => f.id === t).text)}</span>`).join('')}</div>
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
      ${s.chart ? chart(s.chart) : ''}${s.compare ? compare(s.compare) : ''}${s.cascade ? cascade(s.cascade) : ''}
      <div class="sc__block sc__why"><span class="sc__label mono">Why it matters</span><p>${esc(s.why)}</p></div>
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
function goTo(i) {
  const y = holds[i][0] - innerHeight * 0.5 + 4;
  if (lenis) lenis.scrollTo(y, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) }); else scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
}

// ── date ribbon ───────────────────────────────────────────────────────────
const dayNum = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d) / 864e5; };
const T0 = dayNum('1945-01-01'), T1 = dayNum('1992-01-01');
const ribbon = $('[data-ribbon]'), track = $('[data-track]');
track.innerHTML = scenes.map((s, i) => `<i class="ribbon__tick${parts.some(p => p.first === i) ? ' is-part' : ''}" style="left:${((dayNum(s.date) - T0) / (T1 - T0) * 100).toFixed(2)}%"></i>`).join('') + '<i class="ribbon__needle" data-needle></i>';
const needle = $('[data-needle]'), yearEl = $('[data-year]'), labelEl = $('[data-label]');
const pillPart = $('[data-pill-part]'), pillDate = $('[data-pill-date]'), orb = $('[data-orb]');
const ORB = 2 * Math.PI * 22;
let lastShown = -2;
function updateUI(p) {
  const i = Math.max(0, Math.floor(p)), f = p - Math.floor(p);
  const near = p < 0 ? 0 : Math.min(N - 1, Math.round(p));
  const da = p < 0 ? dayNum('1948-01-01') : dayNum(scenes[i].date);
  const db = p < 0 ? dayNum(scenes[0].date) : dayNum(scenes[Math.min(N - 1, i + 1)].date);
  const d = da + (db - da) * (p < 0 ? Math.max(0, p + 1) : f);
  needle.style.left = `${((d - T0) / (T1 - T0) * 100).toFixed(2)}%`;
  yearEl.textContent = new Date(d * 864e5).getUTCFullYear();
  ribbon.classList.toggle('is-on', p > -0.6 && p < N - 0.6);
  const key = p < -0.5 ? -1 : near;
  if (key !== lastShown) {
    lastShown = key;
    const s = scenes[near];
    labelEl.textContent = s.dateLabel;
    pillPart.textContent = p < -0.5 ? 'Key question 6' : `${s.part} · ${String(near + 1).padStart(2, '0')}/${N}`;
    if (p < -0.5) pillDate.innerHTML = 'Eastern Europe, 1948–<span class="lc">c.</span>1989'; else pillDate.textContent = s.dateLabel;
    $$('[data-go]', menu).forEach(a => a.setAttribute('aria-current', +a.dataset.go === near));
    sections.forEach((sec, k) => sec.classList.toggle('is-active', key >= 0 && k === near));
    // paint the neighbouring scenes while the reader is reading, so no paint lands mid-flight
    if (world) [near + 1, near - 1, near + 2].forEach((k, n) => idle(() => world.prepare(k), n * 120));
  }
  orb.style.strokeDashoffset = (ORB * (1 - Math.max(0, (p + 1) / N))).toFixed(1);
}

// ── globe ─────────────────────────────────────────────────────────────────
const idle = (f, delay = 0) => setTimeout(() => (window.requestIdleCallback ? requestIdleCallback(f, { timeout: 1200 }) : f()), delay);
let world = null;
const hero = { camera: { lat: 47, lon: 24, alt: 15500 }, map: { ...scenes[0].map, markers: [], arrows: [], lines: [] } };
const loader = $('[data-loader]'), pct = $('[data-pct]'), bar = $('[data-bar]');
const setPct = v => { const n = Math.round(v * 100); pct.textContent = String(n).padStart(3, '0') + '%'; bar.style.width = n + '%'; };

async function loadBorders() {
  const res = await fetch('../assets/data/borders.json');
  if (!res.ok || !res.body) throw new Error('borders');
  const total = +res.headers.get('content-length') || 660000;
  const reader = res.body.getReader(); const chunks = []; let got = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); got += value.length; setPct(Math.min(0.92, got / Math.max(total, got) * 0.92)); }
  return JSON.parse(new TextDecoder().decode(await new Blob(chunks).arrayBuffer()));
}

async function start() {
  setPct(0.02);
  try {
    const [{ createWorld }, borders] = await Promise.all([import('./world.js'), loadBorders()]);
    setPct(0.96);
    world = await createWorld($('[data-world]'), {
      scenes, hero, data: borders, reduced,
      relief: { world: '../assets/data/relief-world.jpg', europe: '../assets/data/relief-europe.jpg', europeBox: [-15, 30, 65, 75] },
    });
    if (!world) root.classList.add('no-webgl');
  } catch (err) {
    console.warn('Globe unavailable:', err);
    root.classList.add('no-webgl');
  }
  setPct(1);
  measure();
  let lastP = NaN;
  gsap.ticker.add(() => {
    const p = progressAt(lenis ? lenis.scroll : scrollY);
    if (p === lastP) return; lastP = p;
    if (world) world.setProgress(p);
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
