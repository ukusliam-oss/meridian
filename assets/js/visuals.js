// Subject hero art. Each piece runs on GSAP's ticker, pauses off-screen, and is static under
// reduced motion.
import { gsap, reduced } from './core.js';

function whenVisible(el, fn) {
  let on = true;
  new IntersectionObserver(([e]) => { on = e.isIntersecting; }).observe(el);
  const tick = (t, dt) => { if (on && !document.hidden) fn(t, dt); };
  gsap.ticker.add(tick);
  return tick;
}

// History: a slow departure board of years; the row crossing the middle lights up.
function history(el, d) {
  const seen = new Set(), rows = [];
  d.lab.events.forEach(([y, lane, title]) => {
    const yr = Math.floor(y);
    if (seen.has(yr)) return;
    seen.add(yr);
    rows.push({ yr, title, c: d.lab.lanes[lane - 1].c });
  });
  el.innerHTML = `<div class="years"><ul>${[...rows, ...rows].map(r => `<li style="--c:${r.c}"><b>${r.yr}</b><span>${r.title}</span></li>`).join('')}</ul></div>`;
  const ul = el.querySelector('ul'), lis = [...ul.children], box = el.querySelector('.years');
  let y = 0;
  const frame = (t, dt) => {
    const half = ul.scrollHeight / 2, h = box.clientHeight, mid = h / 2;
    if (!reduced) y = (y + dt * 0.028) % half;
    ul.style.transform = `translate3d(0, ${-y}px, 0)`;
    for (const li of lis) {
      const c = li.offsetTop - y + li.offsetHeight / 2;
      const k = Math.max(0, 1 - Math.abs(c - mid) / (h * 0.55));
      li.style.opacity = (0.08 + k * k * 0.92).toFixed(3);
      li.classList.toggle('is-on', Math.abs(c - mid) < li.offsetHeight / 2);
    }
  };
  whenVisible(el, frame);
  frame(0, 0);
}

// Economics: supply and demand that never quite sit still, with a live price readout.
function economics(el) {
  el.innerHTML = `<svg class="econ-art" viewBox="0 0 640 520" preserveAspectRatio="xMaxYMid meet">
    ${Array.from({ length: 11 }, (_, i) => `<line x1="${80 + i * 50}" x2="${80 + i * 50}" y1="40" y2="460" class="g"/>`).join('')}
    ${Array.from({ length: 9 }, (_, i) => `<line x1="80" x2="580" y1="${60 + i * 50}" y2="${60 + i * 50}" class="g"/>`).join('')}
    <path class="ax" d="M80 30 V460 H600"/>
    <path class="guide" data-g/><path class="s" data-s/><path class="d" data-d/>
    <circle class="ring" data-r r="10"/><circle class="dot" data-o r="7"/>
    <text class="lbl" data-ld>D</text><text class="lbl" data-ls>S</text>
    <g data-tag><rect x="0" y="-22" width="176" height="34" rx="10" class="tag-bg"/><text class="tag-t" x="14" y="0">P* $2.50</text></g>
  </svg>`;
  const q = s => el.querySelector(s), D = q('[data-d]'), S = q('[data-s]'), G = q('[data-g]'), O = q('[data-o]'), R = q('[data-r]'), T = q('.tag-t'), tag = q('[data-tag]');
  const X = Q => 80 + Q * 5, Y = P => 460 - P * 4.2;
  const frame = t => {
    const a = 92 + Math.sin(t * 0.55) * 9 + Math.sin(t * 0.21) * 4, c = 8 + Math.sin(t * 0.37 + 1.4) * 8;
    const b = 0.82, dd = 0.78, Qe = (a - c) / (b + dd), Pe = a - b * Qe;
    D.setAttribute('d', `M${X(8)} ${Y(a - b * 8)} L${X(98)} ${Y(a - b * 98)}`);
    S.setAttribute('d', `M${X(4)} ${Y(c + dd * 4)} L${X(104)} ${Y(c + dd * 104)}`);
    G.setAttribute('d', `M80 ${Y(Pe)} H${X(Qe)} V460`);
    O.setAttribute('cx', X(Qe)); O.setAttribute('cy', Y(Pe));
    R.setAttribute('cx', X(Qe)); R.setAttribute('cy', Y(Pe));
    R.setAttribute('r', 10 + ((t * 0.8) % 1) * 26); R.style.opacity = (1 - ((t * 0.8) % 1)) * 0.6;
    q('[data-ld]').setAttribute('x', X(98) + 8); q('[data-ld]').setAttribute('y', Y(a - b * 98) + 6);
    q('[data-ls]').setAttribute('x', X(104) + 8); q('[data-ls]').setAttribute('y', Y(c + dd * 104) + 6);
    tag.setAttribute('transform', `translate(${X(Qe) + 18} ${Y(Pe) - 18})`);
    T.textContent = `P* $${(Pe / 20).toFixed(2)}  Q* ${Math.round(Qe * 10)}k`;
  };
  whenVisible(el, t => frame(reduced ? 0 : t));
  frame(0);
}

// Geography: contour lines over a drifting noise terrain (marching squares on a coarse grid).
function geography(el) {
  const cv = document.createElement('canvas');
  cv.className = 'geo-art';
  el.append(cv);
  const ctx = cv.getContext('2d');
  const P = new Uint8Array(512);
  const perm = [...Array(256).keys()];
  for (let i = 255; i > 0; i--) { const j = (Math.sin(i * 91.7) * 43758.5453 % 1 + 1) % 1 * (i + 1) | 0; [perm[i], perm[j]] = [perm[j], perm[i]]; }
  for (let i = 0; i < 512; i++) P[i] = perm[i & 255];
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10), lerp = (a, b, t) => a + (b - a) * t;
  const grad = (h, x, y, z) => { const u = h < 8 ? x : y, v = h < 4 ? y : h === 12 || h === 14 ? x : z; return ((h & 1) ? -u : u) + ((h & 2) ? -v : v); };
  const noise = (x, y, z) => {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
    x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
    const u = fade(x), v = fade(y), w = fade(z);
    const A = P[X] + Y, AA = P[A] + Z, AB = P[A + 1] + Z, B = P[X + 1] + Y, BA = P[B] + Z, BB = P[B + 1] + Z;
    return lerp(lerp(lerp(grad(P[AA] & 15, x, y, z), grad(P[BA] & 15, x - 1, y, z), u), lerp(grad(P[AB] & 15, x, y - 1, z), grad(P[BB] & 15, x - 1, y - 1, z), u), v),
      lerp(lerp(grad(P[AA + 1] & 15, x, y, z - 1), grad(P[BA + 1] & 15, x - 1, y, z - 1), u), lerp(grad(P[AB + 1] & 15, x, y - 1, z - 1), grad(P[BB + 1] & 15, x - 1, y - 1, z - 1), u), v), w);
  };
  const color = getComputedStyle(el).getPropertyValue('--geo').trim() || '#5fb0ff';
  let W = 0, H = 0, cols = 0, rows = 0, cell = 16, field = null, z = 3.7, frameN = 0;
  const resize = () => {
    const r = el.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cell = W < 700 ? 14 : 16;
    cols = Math.ceil(W / cell) + 1; rows = Math.ceil(H / cell) + 1;
    field = new Float32Array(cols * rows);
    draw();
  };
  const LEVELS = Array.from({ length: 14 }, (_, i) => -0.65 + i * 0.1);
  function draw() {
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const x = i * cell / 260, y = j * cell / 260;
      field[j * cols + i] = noise(x, y, z) * 0.85 + noise(x * 2.3, y * 2.3, z * 1.4 + 9) * 0.3 + (i / cols - 0.5) * 0.35;
    }
    ctx.clearRect(0, 0, W, H);
    LEVELS.forEach((L, li) => {
      ctx.beginPath();
      for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
        const a = field[j * cols + i], b = field[j * cols + i + 1], c = field[(j + 1) * cols + i + 1], d = field[(j + 1) * cols + i];
        const k = (a > L ? 8 : 0) | (b > L ? 4 : 0) | (c > L ? 2 : 0) | (d > L ? 1 : 0);
        if (k === 0 || k === 15) continue;
        const x = i * cell, y = j * cell;
        const top = [x + cell * (L - a) / (b - a), y], right = [x + cell, y + cell * (L - b) / (c - b)];
        const bot = [x + cell * (L - d) / (c - d), y + cell], left = [x, y + cell * (L - a) / (d - a)];
        const segs = {
          1: [left, bot], 2: [bot, right], 3: [left, right], 4: [top, right], 5: [left, top, bot, right], 6: [top, bot], 7: [left, top],
          8: [left, top], 9: [top, bot], 10: [left, bot, top, right], 11: [top, right], 12: [left, right], 13: [bot, right], 14: [left, bot],
        }[k];
        for (let s = 0; s < segs.length; s += 2) { ctx.moveTo(segs[s][0], segs[s][1]); ctx.lineTo(segs[s + 1][0], segs[s + 1][1]); }
      }
      const index = li % 4 === 0;
      ctx.strokeStyle = color;
      ctx.globalAlpha = index ? 0.62 : 0.24;
      ctx.lineWidth = index ? 1.4 : 0.8;
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
  }
  new ResizeObserver(resize).observe(el);
  whenVisible(el, (t, dt) => {
    if (reduced) return;
    z += dt * 0.00004;
    if (++frameN % 2 === 0) draw();
  });
}

export function heroArt(el, id, data) {
  ({ history, economics, geography })[id]?.(el, data);
  // History's years and the Economics diagram never sit behind the title. Two boxes are measured whenever the hero
  // changes size: beside the title word (above the lede row) and above the whole title block. The art takes the box
  // in which it can be drawn larger, so wide screens put it next to the title and phones put it above.
  const hero = el.closest('.s-hero'), block = hero && hero.querySelector('.wrap');
  if (!block || id === 'geography') return;
  const [aw, ah] = id === 'economics' ? [640, 520] : [5, 6];
  const word = hero.querySelector('.s-hero__code') || hero.querySelector('.s-hero__title'), row = hero.querySelector('.s-hero__row');
  const fit = () => {
    const box = n => n.getBoundingClientRect(), H = box(hero), W = box(block), T = box(word), R = box(row);
    const top = (parseFloat(getComputedStyle(hero).getPropertyValue('--nav-h')) || 64) + 16, right = W.right - H.left;
    const pick = [
      { l: T.right - H.left + 40, t: top, b: R.top - H.top - 32 },
      { l: W.left - H.left, t: top, b: W.top - H.top - 24 },
    ].map(c => ({ ...c, w: Math.min(right - c.l, 820), h: c.b - c.t })).map(c => ({ ...c, s: Math.min(c.w / aw, c.h / ah) }))
      .reduce((a, c) => (c.s > a.s ? c : a));
    const px = v => `${Math.max(0, Math.round(v))}px`;
    hero.style.setProperty('--art-l', px(right - pick.w)); hero.style.setProperty('--art-t', px(pick.t));
    hero.style.setProperty('--art-w', px(pick.w)); hero.style.setProperty('--art-h', px(pick.h));
  };
  new ResizeObserver(fit).observe(hero); fit();
}
