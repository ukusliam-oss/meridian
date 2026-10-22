// Geography lab: the demographic transition model linked to the population pyramid it produces.
// One number, t ∈ [0, 1], drives both charts; stage = ⌊5t⌋ + 1.
import { gsap, reduced, $, $$, icons } from '../core.js';

const BR = [38, 40, 39, 39, 37, 29, 17, 14, 13, 10.5, 9];
const DR = [36, 32, 37, 25, 17, 13, 11, 10, 10, 11, 12];
const PYR = [   // male share by age band 0–9 … 80+, one row per stage
  [10, 8, 6.5, 5.5, 4.5, 3.4, 2.4, 1.2, 0.3],
  [12.5, 9.5, 7.3, 5.6, 4.2, 3.0, 2.0, 1.0, 0.3],
  [9, 8.6, 7.8, 6.8, 5.6, 4.4, 3.2, 1.9, 0.7],
  [6, 6.2, 6.4, 6.6, 6.5, 6.2, 5.4, 4.0, 2.4],
  [4.2, 4.6, 5.2, 5.8, 6.4, 6.8, 6.4, 5.3, 4.3],
];
const AGES = ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60–69', '70–79', '80+'];
const cr = (a, t) => {   // Catmull-Rom through evenly spaced samples
  const n = a.length - 1, f = Math.min(n - 1e-6, Math.max(0, t * n)), i = Math.floor(f), u = f - i;
  const p0 = a[Math.max(0, i - 1)], p1 = a[i], p2 = a[i + 1], p3 = a[Math.min(n, i + 2)];
  return 0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u * u + (-p0 + 3 * p1 - 3 * p2 + p3) * u * u * u);
};
const ease = u => u * u * (3 - 2 * u);

export function mount(el, lab) {
  const CX0 = 46, CX1 = 624, CY0 = 330, CY1 = 44;
  const tx = t => CX0 + t * (CX1 - CX0);
  const ry = r => CY0 - (r / 45) * (CY0 - CY1);
  const N = 240;
  const ts = Array.from({ length: N + 1 }, (_, i) => i / N);
  const br = ts.map(t => cr(BR, t)), dr = ts.map(t => cr(DR, t));
  const pop = [1];
  for (let i = 1; i <= N; i++) pop.push(pop[i - 1] * (1 + (br[i] - dr[i]) * 0.0014));
  const pmax = Math.max(...pop), py = p => CY0 - (p / pmax) * (CY0 - CY1 - 20);
  const line = arr => arr.map((v, i) => `${i ? 'L' : 'M'}${tx(ts[i]).toFixed(1)} ${ry(v).toFixed(1)}`).join('');
  const area = (top, bot) => `${line(top)}${bot.map((v, i) => [i, v]).reverse().map(([i, v]) => `L${tx(ts[i]).toFixed(1)} ${ry(v).toFixed(1)}`).join('')}Z`;
  const lo = br.map((b, i) => Math.min(b, dr[i]));

  el.innerHTML = `<div class="card">
    <div class="dtm">
      <div class="dtm__chart">
        <svg viewBox="0 0 640 372" role="img" aria-label="Demographic transition model">
          ${[1, 2, 3, 4].map(k => `<line class="stage-line" x1="${tx(k / 5)}" x2="${tx(k / 5)}" y1="${CY1 - 16}" y2="${CY0}"/>`).join('')}
          ${[1, 2, 3, 4, 5].map(k => `<text class="stage-txt" data-st="${k}" x="${tx((k - 0.5) / 5)}" y="${CY1 - 22}" text-anchor="middle">Stage ${k}</text>`).join('')}
          ${[0, 10, 20, 30, 40].map(r => `<text class="axis-t" x="${CX0 - 8}" y="${ry(r) + 4}" text-anchor="end">${r}</text><line class="stage-line" x1="${CX0}" x2="${CX1}" y1="${ry(r)}" y2="${ry(r)}" style="opacity:.4"/>`).join('')}
          <text class="axis-t" x="${CX0 - 34}" y="${CY0 - 140}" transform="rotate(-90 ${CX0 - 34} ${CY0 - 140})" text-anchor="middle">per 1,000 per year</text>
          <path class="ni" d="${area(br, lo)}"/><path class="ni ni--neg" d="${area(dr, lo)}"/>
          <path class="ln ln--pop" d="${pop.map((p, i) => `${i ? 'L' : 'M'}${tx(ts[i]).toFixed(1)} ${py(p).toFixed(1)}`).join('')}"/>
          <path class="ln ln--dr" d="${line(dr)}"/><path class="ln ln--br" d="${line(br)}"/>
          <line class="cursor" data-cur y1="${CY1 - 10}" y2="${CY0}"/>
          <circle data-dot="br" r="5.5" style="fill:var(--accent);stroke:var(--surface);stroke-width:2.5"/>
          <circle data-dot="dr" r="5.5" style="fill:var(--text);stroke:var(--surface);stroke-width:2.5"/>
          <text class="axis-t" x="${tx(0)}" y="${CY0 + 22}">Time →</text>
          <text class="axis-t" data-read x="${CX1}" y="${CY0 + 22}" text-anchor="end" style="font-weight:600;fill:var(--text-2)"></text>
        </svg>
        <div class="dtm__legend" style="margin-top:10px">
          <span style="--c:var(--accent)"><i></i>Birth rate</span><span style="--c:var(--text)"><i></i>Death rate</span>
          <span style="--c:var(--hist)"><i style="height:0;border-top:2px dotted var(--hist);background:none"></i>Total population</span>
          <span style="--c:color-mix(in oklab, var(--accent) 30%, transparent)"><i style="height:10px"></i>Natural increase</span>
        </div>
      </div>
      <div class="dtm__pyr">
        <p class="eyebrow eyebrow--plain">Population pyramid</p>
        <svg viewBox="0 0 300 300" role="img" aria-label="Population pyramid for the selected stage">
          ${AGES.map((a, i) => { const y = 288 - (i + 1) * 32 + 5; return `<rect class="bar-m" data-m="${i}" y="${y}" height="26" rx="4"/><rect class="bar-f" data-f="${i}" y="${y}" height="26" rx="4"/><text class="age" x="150" y="${y + 17}" text-anchor="middle">${a}</text>`; }).join('')}
        </svg>
        <div class="dtm__legend"><span style="--c:var(--accent)"><i></i>Male</span><span style="--c:color-mix(in oklab, var(--accent) 55%, var(--text))"><i></i>Female</span></div>
      </div>
    </div>
    <div class="dtm__controls">
      <button class="icon-btn" data-play aria-label="Play through the stages" style="border:1px solid var(--line-2);width:44px;height:44px">${icons.play}</button>
      <input class="range" type="range" min="0" max="1000" value="300" data-t aria-label="Position in the demographic transition">
    </div>
    <div class="dtm__card" aria-live="polite"></div>
    <div class="dtm__card" style="grid-template-columns:1fr 1fr;gap:20px">
      <div style="display:grid;gap:8px"><p class="eyebrow eyebrow--plain" style="color:var(--good)">Strengths of the model</p><ul class="steps">${lab.strengths.map(x => `<li><span>${x}</span></li>`).join('')}</ul></div>
      <div style="display:grid;gap:8px"><p class="eyebrow eyebrow--plain" style="color:var(--bad)">Limitations</p><ul class="steps">${lab.limits.map(x => `<li><span>${x}</span></li>`).join('')}</ul></div>
    </div>
  </div>`;

  const svg = $('.dtm__chart svg', el), range = $('[data-t]', el), card = $('.dtm__card', el), play = $('[data-play]', el);
  const bars = AGES.map((_, i) => [$(`[data-m="${i}"]`, el), $(`[data-f="${i}"]`, el)]);
  const state = { t: 0.3 };
  let stage = 0, tween = null;

  function render() {
    const t = state.t, x = tx(t);
    range.value = Math.round(t * 1000);
    range.style.setProperty('--p', `${t * 100}%`);
    $('[data-cur]', svg).setAttribute('x1', x); $('[data-cur]', svg).setAttribute('x2', x);
    const b = cr(BR, t), d = cr(DR, t);
    $('[data-dot="br"]', svg).setAttribute('cx', x); $('[data-dot="br"]', svg).setAttribute('cy', ry(b));
    $('[data-dot="dr"]', svg).setAttribute('cx', x); $('[data-dot="dr"]', svg).setAttribute('cy', ry(d));
    const ni = (b - d) / 10;
    $('[data-read]', svg).textContent = `Birth ${b.toFixed(0)} · Death ${d.toFixed(0)} · Natural increase ${ni >= 0 ? '+' : '−'}${Math.abs(ni).toFixed(1)}%`;

    const f = Math.min(4, Math.max(0, t * 5 - 0.5)), i = Math.min(3, Math.floor(f)), u = ease(f - i);
    bars.forEach(([m, fe], k) => {
      const v = PYR[i][k] + (PYR[i + 1][k] - PYR[i][k]) * u;
      const vf = v * (1 + 0.035 * k * (0.4 + t));
      const wm = (v / 13) * 128, wf = (vf / 13) * 128;
      m.setAttribute('x', 128 - wm); m.setAttribute('width', Math.max(0, wm));
      fe.setAttribute('x', 172); fe.setAttribute('width', Math.max(0, wf));
    });

    const n = Math.min(5, Math.floor(t * 5) + 1);
    if (n !== stage) {
      stage = n;
      $$('[data-st]', svg).forEach(s => s.classList.toggle('is-on', +s.dataset.st === n));
      const S = lab.stages[n - 1];
      card.innerHTML = `<span class="lvl">${n}</span><h3 class="h3">Stage ${n}: ${S.name}</h3><p>${S.text}</p><p><b style="color:var(--text)">Why:</b> ${S.why} <span class="faint">${S.eg}</span></p>`;
      if (!reduced) gsap.from(card.children, { y: 12, opacity: 0, duration: 0.5, stagger: 0.05, overwrite: true });
    }
  }
  const stop = () => { tween?.kill(); tween = null; play.innerHTML = icons.play; play.setAttribute('aria-label', 'Play through the stages'); };
  range.addEventListener('input', () => { stop(); state.t = range.value / 1000; render(); });
  play.addEventListener('click', () => {
    if (tween) return stop();
    if (state.t > 0.995) state.t = 0;
    play.innerHTML = icons.pause; play.setAttribute('aria-label', 'Pause');
    tween = gsap.to(state, { t: 1, duration: (1 - state.t) * 12, ease: 'none', onUpdate: render, onComplete: stop });
  });
  render();
  if (!reduced) gsap.from($$('.ln--br, .ln--dr', svg), { drawSVG: '0%', duration: 2, stagger: 0.2, ease: 'm.io', scrollTrigger: { trigger: svg, start: 'top 80%', once: true } });
}
