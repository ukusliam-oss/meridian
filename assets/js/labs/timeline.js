// History lab: a pannable 1919–1991 timeline with a minimap, lane filters and an event reader.
import { gsap, reduced, hover, $, $$, icons } from '../core.js';

export function mount(el, lab) {
  const Y0 = 1918.4, Y1 = 1992.6;
  const PX = innerWidth < 700 ? 46 : 62;
  const W = Math.round((Y1 - Y0) * PX);
  const x = y => (y - Y0) * PX;
  const laneY = id => 74 + (id - 1) * 37;
  const lanes = lab.lanes;
  const events = lab.events
    .map(([y, lane, title, date, text, why]) => ({ y, lane, title, date, text, why, c: lanes[lane - 1].c }))
    .sort((a, b) => a.y - b.y);

  const years = [];
  for (let y = Math.ceil(Y0); y <= Math.floor(Y1); y++) {
    const dec = y % 10 === 0;
    if (dec || y % 2 === 1 || PX > 50) years.push(`<span class="tl__year ${dec ? 'is-decade' : ''}" style="left:${x(y)}px">${dec || y % 5 === 0 ? `<span>${y}</span>` : ''}</span>`);
  }
  el.innerHTML = `<div class="card tl">
    <div class="tl__top">
      <div class="lab__chips" data-filter role="group" aria-label="Filter by key question">
        <button class="chip" data-lane="0" aria-pressed="true">All</button>
        ${lanes.map(l => `<button class="chip" data-lane="${l.id}" aria-pressed="false" style="--c:${l.c}"><span class="dot"></span>${l.label}</button>`).join('')}
      </div>
      <div style="display:flex;gap:6px;align-items:center">
        <span class="faint" style="font-size:12.5px;margin-right:6px" data-pos></span>
        <button class="icon-btn" data-prev aria-label="Previous event" style="border:1px solid var(--line-2);transform:scaleX(-1)">${icons.arrow}</button>
        <button class="icon-btn" data-next aria-label="Next event" style="border:1px solid var(--line-2)">${icons.arrow}</button>
      </div>
    </div>
    <div class="tl__mini" aria-hidden="true">${events.map(e => `<i style="left:${(x(e.y) / W) * 100}%;top:${18 + (e.lane - 3.5) * 4}px;--c:${e.c}"></i>`).join('')}<span class="tl__win"></span></div>
    <div class="tl__scroll" tabindex="0" aria-label="Timeline 1919 to 1991. Use left and right arrows to move between events.">
      <div class="tl__track" style="width:${W}px">
        ${lab.eras.map(([a, b, name, kind]) => `<div class="tl__era ${kind === 'war' ? 'tl__era--war' : ''}" style="left:${x(a)}px;width:${x(b) - x(a)}px"><span>${name}</span></div>`).join('')}
        ${lanes.map(l => `<div class="tl__lane" style="top:${laneY(l.id)}px"></div>`).join('')}
        <div class="tl__axis">${years.join('')}</div>
        ${events.map((e, i) => `<button class="tl__ev" data-i="${i}" style="left:${x(e.y)}px;top:${laneY(e.lane)}px;--c:${e.c}" aria-label="${e.date}: ${e.title}"><span>${Math.floor(e.y)}</span></button>`).join('')}
      </div>
    </div>
    <div class="tl__detail" aria-live="polite"></div>
  </div>`;

  const scroll = $('.tl__scroll', el), track = $('.tl__track', el), detail = $('.tl__detail', el);
  const mini = $('.tl__mini', el), win = $('.tl__win', mini), dots = $$('.tl__ev', el);
  let lane = 0, cur = 0, panned = false;
  const visible = () => events.map((e, i) => i).filter(i => !lane || events[i].lane === lane);

  function show(i, { pan = true } = {}) {
    cur = i;
    const e = events[i];
    dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
    const L = lanes[e.lane - 1];
    detail.style.setProperty('--c', e.c);
    detail.innerHTML = `<div class="tl__date"><b>${Math.floor(e.y)}</b><span>${e.date}</span><span class="tag" style="--accent:${e.c};width:max-content">${L.label}</span></div>
      <div class="tl__body"><h3 class="h3">${e.title}</h3><p>${e.text}</p><p class="why"><b>Why it matters:</b> ${e.why}</p></div>`;
    if (!reduced) gsap.from(detail.children, { y: 16, opacity: 0, duration: 0.6, stagger: 0.06 });
    const v = visible(), n = v.indexOf(i);
    $('[data-pos]', el).textContent = `${n + 1} / ${v.length}`;
    if (pan) {
      const left = x(e.y) - scroll.clientWidth / 2;
      const target = Math.max(0, Math.min(W - scroll.clientWidth, left));
      if (Math.abs(target - scroll.scrollLeft) > 4) gsap.to(scroll, { scrollLeft: target, duration: reduced ? 0 : 0.9, ease: 'm.out', overwrite: true });
    }
  }
  const step = d => {
    const v = visible();
    let n = v.indexOf(cur);
    n = n < 0 ? 0 : (n + d + v.length) % v.length;
    show(v[n]);
  };

  dots.forEach((d, i) => d.addEventListener('click', () => { if (!panned) show(i); }));
  $('[data-prev]', el).addEventListener('click', () => step(-1));
  $('[data-next]', el).addEventListener('click', () => step(1));
  scroll.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });

  $$('[data-filter] .chip', el).forEach(b => b.addEventListener('click', () => {
    lane = +b.dataset.lane;
    $$('[data-filter] .chip', el).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    dots.forEach((d, i) => d.classList.toggle('is-dim', !!lane && events[i].lane !== lane));
    if (!reduced) gsap.fromTo(dots.filter((d, i) => !lane || events[i].lane === lane), { scale: 0.4 }, { scale: 1, duration: 0.7, stagger: 0.015, ease: 'm.snap' });
    const v = visible();
    show(v.includes(cur) ? cur : v[0]);
  }));

  // minimap window follows the scroll position; drag or click it to jump
  const syncMini = () => {
    win.style.width = `${(scroll.clientWidth / W) * 100}%`;
    win.style.left = `${(scroll.scrollLeft / W) * 100}%`;
  };
  scroll.addEventListener('scroll', syncMini, { passive: true });
  new ResizeObserver(syncMini).observe(scroll);
  const jump = (cx, smooth) => {
    const r = mini.getBoundingClientRect();
    const t = ((cx - r.left) / r.width) * W - scroll.clientWidth / 2;
    const v = Math.max(0, Math.min(W - scroll.clientWidth, t));
    if (smooth) gsap.to(scroll, { scrollLeft: v, duration: 0.6, ease: 'm.out', overwrite: true });
    else { gsap.killTweensOf(scroll); scroll.scrollLeft = v; }
  };
  let miniDrag = false;
  mini.addEventListener('pointerdown', e => { miniDrag = true; mini.setPointerCapture(e.pointerId); jump(e.clientX, true); });
  mini.addEventListener('pointermove', e => { if (miniDrag) jump(e.clientX, false); });
  mini.addEventListener('pointerup', () => { miniDrag = false; });

  // drag-to-pan with a mouse (touch already scrolls natively)
  if (hover) {
    let sx = 0, sl = 0, down = false;
    scroll.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse') return;
      down = true; panned = false; sx = e.clientX; sl = scroll.scrollLeft;
      gsap.killTweensOf(scroll);
    });
    addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (Math.abs(dx) > 4) { panned = true; scroll.classList.add('is-panning'); }
      scroll.scrollLeft = sl - dx;
    });
    addEventListener('pointerup', () => { down = false; scroll.classList.remove('is-panning'); setTimeout(() => { panned = false; }, 0); });
    // vertical wheel pans the track sideways only when the pointer is over it and shift is held
  }

  if (!reduced) {
    gsap.from($$('.tl__lane', el), { scaleX: 0, transformOrigin: 'left', duration: 1.6, stagger: 0.08, ease: 'm.io', scrollTrigger: { trigger: el, start: 'top 80%', once: true } });
    gsap.from(dots, { scale: 0, duration: 0.8, stagger: 0.012, ease: 'm.snap', delay: 0.3, scrollTrigger: { trigger: el, start: 'top 80%', once: true } });
  }
  show(0, { pan: false });
  syncMini();
}
