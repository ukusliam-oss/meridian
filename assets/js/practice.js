// Exam-style written practice: one set of structured questions at a time. The student writes or plans
// an answer on paper, then opens the mark scheme for each part. Nothing is typed, saved or required.
// Content lives in data/practice-<subject>.js; the styles are injected from css/practice.css.
import { gsap, ScrollTrigger, reduced, $, $$, toggleHeight, scrollToEl, icons } from './core.js';

const css = new URL('../css/practice.css', import.meta.url).href;
if (!document.querySelector(`link[href="${css}"]`)) {
  const link = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: css });
  link.addEventListener('load', () => ScrollTrigger.refresh());
  document.head.append(link);
}

const list = xs => `<ul class="pr__list">${xs.map(x => `<li>${x}</li>`).join('')}</ul>`;

// ── Resources: data tables and a simple line chart ──────────────────────────
function table(r) {
  return `<div class="pr__tablewrap"><table class="pr__table">
    <thead><tr>${r.cols.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead>
    <tbody>${r.rows.map(row => `<tr>${row.map((c, i) => i ? `<td>${c}</td>` : `<th scope="row">${c}</th>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;
}

function line(r) {
  const W = 520, H = 230, L = 52, R = 16, T = 26, B = 34;
  const [lo, hi] = r.range, step = r.tick;
  const [x0, x1] = [r.x[0], r.x[r.x.length - 1]];
  const x = i => L + ((r.x[i] - x0) * (W - L - R)) / (x1 - x0); // plotted by year, so uneven gaps stay uneven
  const y = v => T + ((hi - v) * (H - T - B)) / (hi - lo);
  const ticks = [];
  for (let v = lo; v <= hi; v += step) ticks.push(v);
  const pts = r.y.map((v, i) => `${x(i)},${y(v)}`).join(' ');
  return `<svg class="pr__chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${r.alt}">
    ${ticks.map(v => `<line class="grid" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/><text class="tick" x="${L - 8}" y="${y(v) + 4}" text-anchor="end">${v}</text>`).join('')}
    <text class="unit" x="${L - 8}" y="${T - 12}" text-anchor="end">${r.unit}</text>
    <polyline class="ln" points="${pts}"/>
    ${r.y.map((v, i) => `<circle class="pt" cx="${x(i)}" cy="${y(v)}" r="4"/><text class="val" x="${x(i)}" y="${y(v) - 10}" text-anchor="middle">${v}</text><text class="tick" x="${x(i)}" y="${H - 12}" text-anchor="middle">${r.x[i]}</text>`).join('')}
  </svg>`;
}

function resource(r) {
  if (!r) return '';
  const body = r.type === 'line' ? line(r) + `<div class="sr-only">${table({ cols: ['Year', r.unit], rows: r.x.map((v, i) => [v, r.y[i]]) })}</div>` : table(r);
  return `<figure class="pr__res"><figcaption><b>${r.label}</b> ${r.caption}</figcaption>${body}${r.note ? `<p class="pr__fine">${r.note}</p>` : ''}</figure>`;
}

// ── Supply and demand diagram for mark schemes that ask for one ───────────────
// Lines run between two points in a 300 × 220 box with the origin at (46, 186).
function cross([[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]]) {
  const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / d;
  return [x1 + t * (x2 - x1), y1 + t * (y2 - y1)];
}
// shift a line sideways, then trim its ends so it stays between x = 60 and x = 280
const nudge = ([a, b], dx) => {
  const [p, q] = [[a[0] + dx, a[1]], [b[0] + dx, b[1]]];
  const at = x => [x, p[1] + ((x - p[0]) * (q[1] - p[1])) / (q[0] - p[0])];
  return [p[0] < 60 ? at(60) : p, q[0] > 280 ? at(280) : q];
};
function sd(g) {
  const D1 = [[76, 40], [266, 168]], S1 = [[76, 168], [266, 40]];
  const D2 = g.d ? nudge(D1, g.d) : null, S2 = g.s ? nudge(S1, g.s) : null;
  const e1 = cross(D1, S1), e2 = cross(D2 || D1, S2 || S1);
  const seg = (l, cls) => `<line class="${cls}" x1="${l[0][0]}" y1="${l[0][1]}" x2="${l[1][0]}" y2="${l[1][1]}"/>`;
  const tag = (l, t, end) => `<text class="lab" x="${l[end][0] + 6}" y="${l[end][1] + (end ? 4 : 12)}">${t}</text>`;
  const drop = ([ex, ey], n) => `<path class="dash" d="M46 ${ey}H${ex}V186"/><text class="lab" x="40" y="${ey + 4}" text-anchor="end">P${n}</text><text class="lab" x="${ex}" y="202" text-anchor="middle">Q${n}</text>`;
  return `<svg class="pr__sd" viewBox="0 0 300 220" role="img" aria-label="${g.alt}">
    <path class="ax" d="M46 14V186H290"/><text class="lab" x="52" y="14">Price</text><text class="lab" x="290" y="214" text-anchor="end">Quantity</text><text class="lab" x="40" y="200" text-anchor="end">O</text>
    ${drop(e1, 1)}${drop(e2, 2)}
    ${seg(D1, 'd')}${tag(D1, 'D1', 1)}${seg(S1, 's')}${tag(S1, 'S1', 1)}
    ${D2 ? seg(D2, 'new') + tag(D2, 'D2', 1) : ''}${S2 ? seg(S2, 'new') + tag(S2, 'S2', 1) : ''}
  </svg>`;
}

// ── Mark scheme for one part ───────────────────────────────────────────────
function scheme(s) {
  if (!s) return '';
  const rows = s.levels ? `<div class="pr__levels">${s.levels.map(l => `<div class="pr__lv"><b>${l.l === '' ? '' : `Level ${l.l}`}</b><span>${l.d}</span><em>${l.m}</em></div>`).join('')}</div>` : '';
  return `<div class="pr__block"><h5>How it is marked</h5><p>${s.how}</p>${rows}</div>`;
}
function content(ms) {
  if (!ms) return '';
  return `<div class="pr__block"><h5>${ms.head || 'Indicative content'}</h5>${ms.lead ? `<p>${ms.lead}</p>` : ''}
    ${ms.working ? `<div class="pr__working">${ms.working.map(w => `<span>${w}</span>`).join('')}</div>` : ''}
    ${ms.diagram ? `<div class="pr__fig">${sd(ms.diagram)}</div>` : ''}
    ${ms.points ? list(ms.points) : ''}
    ${(ms.groups || []).map(g => `<div class="pr__group ${g.tone ? `pr__group--${g.tone}` : ''}"><h6>${g.h}</h6>${g.points ? list(g.points) : ''}${g.text ? `<p>${g.text}</p>` : ''}</div>`).join('')}
    ${ms.tip ? `<p class="pr__tip">${ms.tip}</p>` : ''}</div>`;
}
function answers(p) {
  if (!p.answers) return '';
  return `<div class="pr__block"><h5>Example answers</h5><p>Two answers to the same question. Compare them with your own, then read why each one gets its mark.</p>
    <div class="pr__answers">${p.answers.map(a => `
      <article class="pr__ans ${a.strong ? 'is-strong' : ''}">
        <header><span class="tag">${a.level}</span><b>${a.marks}</b></header>
        <div class="pr__ans-text">${a.text.map(t => `<p>${t}</p>`).join('')}</div>
        <p class="pr__why"><b>Why:</b> ${a.why}</p>
      </article>`).join('')}</div>
    ${p.answersNote ? `<p class="pr__fine">${p.answersNote}</p>` : ''}</div>`;
}

// ── Component ──────────────────────────────────────────────────────────────
export function practice(el, data) {
  const { sets, schemes } = data;
  const mins = p => p.mins ?? schemes[p.scheme]?.mins ?? Math.max(1, Math.round(p.m * data.minutesPerMark));
  let cur = 0;

  el.innerHTML = `<div class="pr">
    <div class="pr__top" data-reveal>
      <div class="pr__picker" role="group" aria-label="Choose a practice set">${sets.map((s, i) => `<button class="chip" data-i="${i}" aria-pressed="${i === 0}"><i>${s.tag}</i> ${s.short}</button>`).join('')}</div>
      <p class="pr__how">${data.how}</p>
    </div>
    <article class="card pr__set" data-reveal></article>
    <details class="pr__source"><summary>Where the marks and mark schemes come from</summary><div>${data.source}</div></details>
  </div>`;
  const card = $('.pr__set', el), chips = $$('.pr__picker .chip', el);

  const partHTML = (p, si, pi) => {
    const id = `pr-${data.id}-${si}-${pi}`;
    return `<li class="pr__part">
      <div class="pr__q"><span class="pr__k">${p.k}</span><p class="pr__stem">${p.q}</p><span class="pr__m">${p.m} mark${p.m > 1 ? 's' : ''}</span></div>
      <div class="pr__row"><span class="pr__time">About ${mins(p)} min</span>
        <button class="pr__open" aria-expanded="false" aria-controls="${id}"><span>Show mark scheme</span>${icons.plus}</button></div>
      <div class="pr__ms" id="${id}"><div class="pr__ms-in">${scheme(schemes[p.scheme])}${content(p.ms)}${answers(p)}</div></div>
    </li>`;
  };

  const render = (animate = true) => {
    const s = sets[cur], marks = s.parts.reduce((n, p) => n + p.m, 0), time = s.parts.reduce((n, p) => n + mins(p), 0);
    card.innerHTML = `
      <header class="pr__head">
        <p class="eyebrow">${s.paper}</p>
        <h3 class="h3">${s.title}</h3>
        <div class="pr__meta"><span>${marks} marks</span><span>About ${time} minutes</span><span>Set ${cur + 1} of ${sets.length}</span></div>
        ${s.intro ? `<p class="pr__intro">${s.intro}</p>` : ''}
        ${s.note ? `<p class="pr__fine">${s.note}</p>` : ''}
      </header>
      ${resource(s.resource)}
      <ol class="pr__parts">${s.parts.map((p, pi) => partHTML(p, cur, pi)).join('')}</ol>
      <footer class="pr__foot">
        <button class="btn btn--ghost btn--sm" data-step="-1" ${cur ? '' : 'disabled'}>Previous set</button>
        <button class="btn btn--primary btn--sm" data-step="1" ${cur < sets.length - 1 ? '' : 'disabled'}>Next set ${icons.arrow}</button>
      </footer>`;
    $$('.pr__part', card).forEach(part => {
      const btn = $('.pr__open', part), body = $('.pr__ms', part);
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(open));
        $('span', btn).textContent = open ? 'Hide mark scheme' : 'Show mark scheme';
        part.classList.toggle('is-open', open);
        toggleHeight(body, open);
      });
    });
    $$('[data-step]', card).forEach(b => b.addEventListener('click', () => go(cur + +b.dataset.step, true)));
    if (animate && !reduced) gsap.from(card.children, { y: 18, opacity: 0, duration: 0.7, stagger: 0.05, clearProps: 'transform,opacity' });
    ScrollTrigger.refresh();
  };

  const go = (i, scroll = false) => {
    if (i < 0 || i >= sets.length || i === cur) return;
    cur = i;
    chips.forEach((c, k) => c.setAttribute('aria-pressed', String(k === cur)));
    render();
    if (scroll && card.getBoundingClientRect().top < 0) scrollToEl(card);
  };
  chips.forEach((c, i) => c.addEventListener('click', () => go(i)));
  render(false);
}
