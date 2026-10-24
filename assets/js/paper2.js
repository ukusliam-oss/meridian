// Paper 2 practice room: one source-based question set (sources on paper cards, five parts, mark scheme and
// example answers behind buttons). Nothing is typed or saved.

import { $, $$, boot, esc, scrollToEl } from './core.js';
import { glassChrome } from './glass.js';
import set from './data/history/kq6-paper2.js';

const root = document.documentElement;
const ref = k => set.references[k];

$('[data-p2-head]').innerHTML = `
  <span class="tag mono">${esc(set.paper)}</span>
  <h1 class="display p2-title"><em>${esc(set.title.split(':')[0])}:</em>${esc(set.title.split(':').slice(1).join(':').trim())}</h1>
  <p class="mono p2-meta">${Math.floor(set.time / 60)} hour ${set.time % 60} minutes · ${set.marks} marks · ${set.sources.length} sources · ${set.parts.length} parts</p>
  <p class="p2-how">${esc(set.how)}</p>
  <div class="p2-bg"><span class="mono">Background</span>${set.background}</div>`;

$('[data-p2-sources]').innerHTML = set.sources.map(s => `
  <article class="paper" id="source-${s.id}">
    <header><b>${s.id}</b><p>${s.intro}</p></header>
    ${s.text.map(t => `<p>${esc(t)}</p>`).join('')}
    <footer class="mono">${esc(ref(s.ref).title)} · ${esc(ref(s.ref).copyright.split('.')[0])}</footer>
  </article>`).join('');

const scheme = (sc, k) => `
  <p class="p2-follows mono">Mark bands follow ${esc(sc.follows)}</p>
  ${sc.rule ? `<p class="p2-rule">${esc(sc.rule)}</p>` : ''}
  <table class="p2-levels"><thead><tr><th class="mono">Level</th><th class="mono">Marks</th><th class="mono">What the answer does</th></tr></thead>
    <tbody>${sc.levels.map(l => `<tr><td>${l.l}</td><td>${esc(l.m)}</td><td>${esc(l.d)}</td></tr>`).join('')}</tbody></table>
  ${sc.groups.map(g => `<div class="p2-group${g.tone ? ' is-' + g.tone : ''}"><span class="mono">${esc(g.h)}</span>${g.text ? `<p>${esc(g.text)}</p>` : `<ul>${g.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`}</div>`).join('')}
  ${sc.tip ? `<p class="p2-tip"><span class="mono">Tip</span>${esc(sc.tip)}</p>` : ''}`;

$('[data-p2-parts]').innerHTML = set.parts.map((p, k) => `
  <article class="p2-part" id="part-${k}">
    <header><span class="p2-k">${esc(p.k)}</span><span class="mono p2-m">[${p.m} marks]</span></header>
    <p class="p2-q">${esc(p.q)}</p>
    <div class="p2-use">${p.sources.map(id => `<a class="p2-chip mono" href="#source-${id}" data-src="${id}">Source ${id}</a>`).join('')}</div>
    <details class="p2-drawer"><summary class="mono">Mark scheme</summary>${scheme(p.scheme, k)}</details>
    <details class="p2-drawer"><summary class="mono">Example answers (${p.answers.length})</summary>
      ${p.answers.map(a => `<div class="p2-ans${a.strong ? ' is-strong' : ''}"><span class="mono">${esc(a.level)} · ${esc(a.marks)}</span>
        ${a.text.map(t => `<p>${esc(t)}</p>`).join('')}<p class="p2-why"><span class="mono">Why this mark</span>${esc(a.why)}</p></div>`).join('')}
    </details>
  </article>`).join('');

$('[data-p2-notes]').innerHTML = `${set.source}
  <h3 class="mono">Sources and copyright</h3>
  <ol class="ch-sources">${Object.entries(set.references).map(([k, r]) => `<li><b>${esc(r.title)}</b>. ${esc(r.author)}. ${esc(r.publisher)}${r.year && r.year !== 'n.d.' ? ', ' + r.year : ''}. <a href="${esc(r.url)}" rel="noopener">${esc(r.url.replace(/^https?:\/\//, ''))}</a>. <i>${esc(r.copyright)}</i></li>`).join('')}</ol>`;

// a source chip scrolls the source column (desktop) or the page (phone) and flashes the card
document.addEventListener('click', e => {
  const chip = e.target.closest('[data-src]'); if (!chip) return;
  e.preventDefault();
  const card = $('#source-' + chip.dataset.src);
  const col = $('[data-p2-sources]');
  if (getComputedStyle(col).position === 'sticky' && col.scrollHeight > col.clientHeight) col.scrollTo({ top: card.offsetTop - 12, behavior: 'smooth' });
  else scrollToEl(card);
  card.classList.remove('is-flash'); void card.offsetWidth; card.classList.add('is-flash');
});

boot();
glassChrome();
root.classList.add('is-ready');
