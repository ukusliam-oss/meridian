// Economics lab: an exam-style supply and demand diagram that redraws itself and writes the
// chain of analysis. Three modes: shift a curve, price controls, elasticity and revenue.
import { gsap, reduced, $, $$, segmented, icons } from '../core.js';

const X0 = 70, X1 = 530, Y0 = 470, Y1 = 30;
const qx = q => X0 + (q / 100) * (X1 - X0);
const py = p => Y0 - (p / 100) * (Y0 - Y1);
const solve = s => { const Q = (s.a - s.c) / (s.b + s.d); return { Q, P: s.a - s.b * Q }; };
const usd = p => `$${(p / 20).toFixed(2)}`;
const cups = q => `${Math.round(q * 10)}k`;
const rev = (p, q) => { const v = (p / 20) * q * 10; return v >= 1000 ? `$${(v / 1000).toFixed(2)}m` : `$${Math.round(v)}k`; };
const cmp = (a, b, e = 0.4) => (a - b > e ? 1 : b - a > e ? -1 : 0);
const NS = 'http://www.w3.org/2000/svg';

export function mount(el, lab) {
  const BASE = { a: 90, b: 0.8, c: 10, d: 0.8 };
  const s = { ...BASE, pc: 35 };
  let mode = 'shift', ctrl = 'max', selD = null, selS = null, ghost = { ...BASE };

  el.innerHTML = `<div class="card lab">
    <div class="lab__stage sd">
      <svg viewBox="0 0 560 520" role="img" aria-label="Supply and demand diagram for the ${lab.market} market">
        <defs><marker id="sd-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor" style="color:var(--text-3)"/></marker></defs>
        <rect class="rev" data-r="old"/><rect class="rev rev--new" data-r="new"/>
        <path class="axis" d="M${X0} ${Y1 - 12} V${Y0} H${X1 + 14}"/>
        <text class="axis-label" x="${X0 - 12}" y="${Y1 - 20}" text-anchor="start">Price ($ per cup)</text>
        <text class="axis-label" x="${X1 + 14}" y="${Y0 + 42}" text-anchor="end">Quantity (cups per week)</text>
        <text class="axis-label" x="${X0 - 10}" y="${Y0 + 18}" text-anchor="end">0</text>
        <path class="guide" data-g="0"/><path class="guide" data-g="1"/>
        <path class="ghost curve--d" data-c="gd" style="stroke:var(--accent)"/><path class="ghost" data-c="gs" style="stroke:var(--text)"/>
        <path class="curve curve--s" data-c="s"/><path class="curve curve--d" data-c="d"/>
        <line class="ctrl" data-x="ctrl"/><line class="gap" data-x="gap"/><text class="lbl" data-x="gapl" text-anchor="middle"/>
        <line class="arrow" data-a="d"/><line class="arrow" data-a="s"/>
        <text class="lbl lbl--muted" data-l="gd"/><text class="lbl lbl--muted" data-l="gs"/>
        <text class="lbl lbl--d" data-l="d"/><text class="lbl" data-l="s"/>
        <text class="tick" data-t="p0" text-anchor="end"/><text class="tick" data-t="p1" text-anchor="end"/>
        <text class="tick" data-t="q0" text-anchor="middle"/><text class="tick" data-t="q1" text-anchor="middle"/>
        <circle class="eq-ring" data-e="ring" r="6" opacity="0"/><circle class="eq" data-e="0" r="5.5" style="opacity:.5"/><circle class="eq" data-e="1" r="6.5"/>
      </svg>
    </div>
    <div class="lab__side">
      <div class="seg" data-mode>
        <button data-value="shift" aria-selected="true">Shift a curve</button>
        <button data-value="controls">Price controls</button>
        <button data-value="ped">Elasticity</button>
      </div>
      <div data-panel="shift" class="lab__group" style="gap:18px">
        <div class="lab__group"><h3>Changes in demand</h3><div class="lab__chips">${lab.demand.map(c => `<button class="chip" data-k="d" data-id="${c.id}" aria-pressed="false"><i>${c.dir > 0 ? 'D →' : '← D'}</i>${c.label}</button>`).join('')}</div></div>
        <div class="lab__group"><h3>Changes in supply</h3><div class="lab__chips">${lab.supply.map(c => `<button class="chip" data-k="s" data-id="${c.id}" aria-pressed="false"><i>${c.dir > 0 ? 'S →' : '← S'}</i>${c.label}</button>`).join('')}</div></div>
        <p class="lab__note">Select one change in demand and one in supply to see both curves shift. Select a change again to remove it.</p>
      </div>
      <div data-panel="controls" class="lab__group" hidden style="gap:16px">
        <div class="seg" data-ctrl><button data-value="max" aria-selected="true">Maximum price</button><button data-value="min">Minimum price</button></div>
        <label class="lab__group" style="gap:6px"><span style="display:flex;justify-content:space-between;font-size:14px"><span class="muted">Legal price</span><b class="num" data-pc></b></span>
          <input class="range" type="range" min="12" max="88" step="0.5" data-pcr aria-label="Legal price"></label>
      </div>
      <div data-panel="ped" class="lab__group" hidden style="gap:10px">
        <p class="muted" style="font-size:14.5px">Costs of production rise, so supply shifts to the left. Use the slider to change the price elasticity of demand and see the effect on total revenue.</p>
        <input class="range" type="range" min="0" max="100" step="1" value="30" data-pedr aria-label="Elasticity of demand">
        <span style="display:flex;justify-content:space-between;font-size:12.5px" class="faint"><span>Inelastic (steep)</span><span>Elastic (flat)</span></span>
      </div>
      <div class="lab__out"><div class="badges" aria-live="polite"></div><ol class="chain"></ol></div>
      <div class="sd-stats"><div><span>Price</span><b data-s="p"></b></div><div><span>Quantity</span><b data-s="q"></b></div><div><span>Revenue</span><b data-s="r"></b></div></div>
    </div></div>`;

  const svg = $('svg', el);
  const q = sel => $(sel, svg);
  const set = (node, attrs) => { for (const k in attrs) node.setAttribute(k, attrs[k]); };
  const show = (node, on) => { node.style.display = on ? '' : 'none'; };

  const seg = (k, c) => {   // visible part of a demand ("d") or supply ("s") line
    let lo, hi;
    if (k === 'd') { lo = Math.max(4, (c.a - 96) / c.b); hi = Math.min(96, (c.a - 6) / c.b); }
    else { lo = Math.max(4, (6 - c.c) / c.d); hi = Math.min(96, (96 - c.c) / c.d); }
    const P = Q => (k === 'd' ? c.a - c.b * Q : c.c + c.d * Q);
    return { lo, hi, P, d: `M${qx(lo)} ${py(P(lo))} L${qx(hi)} ${py(P(hi))}` };
  };
  const label = (node, k, c, text) => {
    const L = seg(k, c);
    set(node, { x: qx(L.hi) + 8, y: py(L.P(L.hi)) + (k === 'd' ? 14 : 4) });
    node.textContent = text;
  };
  const guide = (node, e) => set(node, { d: `M${X0} ${py(e.P)} H${qx(e.Q)} V${Y0}` });

  function render() {
    const e1 = solve(s), e0 = solve(ghost);
    const dMoved = Math.abs(s.a - ghost.a) > 0.3 || Math.abs(s.b - ghost.b) > 0.01;
    const sMoved = Math.abs(s.c - ghost.c) > 0.3;
    const moved = dMoved || sMoved;
    set(q('[data-c="d"]'), { d: seg('d', s).d });
    set(q('[data-c="s"]'), { d: seg('s', s).d });
    set(q('[data-c="gd"]'), { d: seg('d', ghost).d }); show(q('[data-c="gd"]'), dMoved && mode !== 'ped');
    set(q('[data-c="gs"]'), { d: seg('s', ghost).d }); show(q('[data-c="gs"]'), sMoved);
    label(q('[data-l="d"]'), 'd', s, dMoved && mode !== 'ped' ? 'D2' : 'D1');
    label(q('[data-l="s"]'), 's', s, sMoved ? 'S2' : 'S1');
    label(q('[data-l="gd"]'), 'd', ghost, 'D1'); show(q('[data-l="gd"]'), dMoved && mode !== 'ped');
    label(q('[data-l="gs"]'), 's', ghost, 'S1'); show(q('[data-l="gs"]'), sMoved);

    // shift arrows, drawn at a fixed price level between old and new curves
    const arrow = (node, k, on) => {
      show(node, on);
      if (!on) return;
      const P = k === 'd' ? 74 : 78;
      const qa = k === 'd' ? (ghost.a - P) / ghost.b : (P - ghost.c) / ghost.d;
      const qb = k === 'd' ? (s.a - P) / s.b : (P - s.c) / s.d;
      const dir = Math.sign(qb - qa);
      set(node, { x1: qx(qa) + dir * 8, y1: py(P), x2: qx(qb) - dir * 10, y2: py(P) });
    };
    arrow(q('[data-a="d"]'), 'd', dMoved && mode !== 'ped' && Math.abs(s.a - ghost.a) > 4);
    arrow(q('[data-a="s"]'), 's', sMoved && Math.abs(s.c - ghost.c) > 4);

    const ctrlOn = mode === 'controls';
    show(q('[data-x="ctrl"]'), ctrlOn); show(q('[data-x="gap"]'), false); show(q('[data-x="gapl"]'), false);
    let ticks = [['p0', e0.P, moved ? 'P1' : 'P1'], ['q0', e0.Q, 'Q1']];
    if (moved) ticks.push(['p1', e1.P, 'P2'], ['q1', e1.Q, 'Q2']);
    if (ctrlOn) {
      const Qd = (s.a - s.pc) / s.b, Qs = (s.pc - s.c) / s.d;
      set(q('[data-x="ctrl"]'), { x1: X0, x2: X1, y1: py(s.pc), y2: py(s.pc) });
      const binding = ctrl === 'max' ? s.pc < e1.P - 0.2 : s.pc > e1.P + 0.2;
      if (binding) {
        const g = q('[data-x="gap"]'), gl = q('[data-x="gapl"]');
        show(g, true); show(gl, true);
        g.setAttribute('class', `gap ${ctrl === 'max' ? 'gap--short' : 'gap--surplus'}`);
        set(g, { x1: qx(Math.min(Qd, Qs)), x2: qx(Math.max(Qd, Qs)), y1: py(s.pc), y2: py(s.pc) });
        set(gl, { x: (qx(Qd) + qx(Qs)) / 2, y: py(s.pc) + (ctrl === 'max' ? 26 : -14) });
        gl.textContent = ctrl === 'max' ? 'Shortage' : 'Surplus';
        ticks = [['p0', e1.P, 'Pe'], ['p1', s.pc, ctrl === 'max' ? 'Pmax' : 'Pmin'], ['q0', Math.min(Qd, Qs), ctrl === 'max' ? 'Qs' : 'Qd'], ['q1', Math.max(Qd, Qs), ctrl === 'max' ? 'Qd' : 'Qs']];
      } else ticks = [['p0', e1.P, 'Pe'], ['p1', s.pc, ctrl === 'max' ? 'Pmax' : 'Pmin'], ['q0', e1.Q, 'Qe']];
    }
    ['p0', 'p1', 'q0', 'q1'].forEach(k => show(q(`[data-t="${k}"]`), false));
    ticks.forEach(([k, v, t], i) => {
      const n = q(`[data-t="${k}"]`);
      const other = ticks.find(([k2, v2], j) => j < i && k2[0] === k[0] && Math.abs(v2 - v) < 3.2);
      if (other) return;
      show(n, true);
      if (k[0] === 'p') set(n, { x: X0 - 10, y: py(v) + 4 }); else set(n, { x: qx(v), y: Y0 + 20 });
      n.textContent = t;
    });
    guide(q('[data-g="0"]'), ctrlOn ? e1 : e0);
    guide(q('[data-g="1"]'), e1); show(q('[data-g="1"]'), moved && !ctrlOn);
    set(q('[data-e="0"]'), { cx: qx(e0.Q), cy: py(e0.P) }); show(q('[data-e="0"]'), moved && !ctrlOn);
    set(q('[data-e="1"]'), { cx: qx(e1.Q), cy: py(e1.P) });
    set(q('[data-e="ring"]'), { cx: qx(e1.Q), cy: py(e1.P) });

    const ro = q('[data-r="old"]'), rn = q('[data-r="new"]');
    show(ro, mode === 'ped'); show(rn, mode === 'ped');
    if (mode === 'ped') {
      set(ro, { x: X0, y: py(e0.P), width: qx(e0.Q) - X0, height: Y0 - py(e0.P) });
      set(rn, { x: X0, y: py(e1.P), width: qx(e1.Q) - X0, height: Y0 - py(e1.P) });
    }
    $('[data-s="p"]', el).textContent = usd(ctrlOn ? s.pc : e1.P);
    $('[data-s="q"]', el).textContent = cups(ctrlOn ? Math.min((s.a - s.pc) / s.b, (s.pc - s.c) / s.d) : e1.Q);
    $('[data-s="r"]', el).textContent = ctrlOn ? rev(s.pc, Math.min((s.a - s.pc) / s.b, (s.pc - s.c) / s.d)) : rev(e1.P, e1.Q);
  }

  const badge = (name, d) => `<span class="badge ${d > 0 ? 'up' : d < 0 ? 'down' : 'flat'}">${d > 0 ? icons.up : d < 0 ? icons.down : icons.flat}${name} ${d > 0 ? 'rises' : d < 0 ? 'falls' : 'unchanged'}</span>`;
  function explain(final) {
    const e1 = solve(final), e0 = solve(ghost), out = [];
    let badges = [];
    if (mode === 'shift') {
      const dC = lab.demand.find(c => c.id === selD), sC = lab.supply.find(c => c.id === selS);
      if (dC && !sC) {
        const up = dC.dir > 0;
        out.push(`<b>${dC.label}.</b> ${dC.why}, so demand ${up ? 'increases' : 'decreases'}. The demand curve shifts to the ${up ? 'right' : 'left'}, from D1 to D2.`,
          `At the original price (P1) there is now <b>excess ${up ? 'demand' : 'supply'}</b>. ${up ? 'Consumers want to buy more than producers are supplying.' : 'Producers are supplying more than consumers want to buy.'}`,
          up ? 'The shortage pushes the price up. As the price rises, producers supply more. This is an <b>extension of supply</b> along S1.' : 'Producers lower the price to sell their unsold stock. As the price falls, they supply less. This is a <b>contraction of supply</b> along S1.',
          `At the new equilibrium, price has ${up ? 'risen' : 'fallen'} from P1 to P2 and quantity has ${up ? 'risen' : 'fallen'} from Q1 to Q2.`);
      } else if (sC && !dC) {
        const up = sC.dir > 0;
        out.push(`<b>${sC.label}.</b> ${sC.why}, so supply ${up ? 'increases' : 'decreases'}. The supply curve shifts to the ${up ? 'right' : 'left'}, from S1 to S2.`,
          `At the original price (P1) there is now <b>excess ${up ? 'supply' : 'demand'}</b>.`,
          up ? 'Producers lower the price to sell the extra output. As the price falls, consumers buy more. This is an <b>extension of demand</b> along D1.' : 'Consumers compete for the smaller supply, so the price rises. As the price rises, consumers buy less. This is a <b>contraction of demand</b> along D1.',
          `At the new equilibrium, price has ${up ? 'fallen' : 'risen'} from P1 to P2 and quantity has ${up ? 'risen' : 'fallen'} from Q1 to Q2.`);
      } else if (dC && sC) {
        const same = dC.dir === sC.dir, amb = same ? 'price' : 'quantity', res = same ? cmp(e1.P, e0.P) : cmp(e1.Q, e0.Q);
        out.push(`<b>${dC.label}</b>: demand shifts to the ${dC.dir > 0 ? 'right' : 'left'}. <b>${sC.label}</b>: supply shifts to the ${sC.dir > 0 ? 'right' : 'left'}.`,
          same ? `Both shifts change quantity in the same direction, so quantity ${dC.dir > 0 ? 'rises' : 'falls'}. However, they push price in opposite directions.`
            : `Both shifts change price in the same direction, so price ${dC.dir > 0 ? 'rises' : 'falls'}. However, they push quantity in opposite directions.`,
          `The change in ${amb} depends on <b>which shift is larger</b>. In this diagram the shifts are the same size, so ${amb} ${res > 0 ? 'rises' : res < 0 ? 'falls' : 'does not change'}.`,
          '<b>Exam tip:</b> state the change that is certain first. Then explain that the other change depends on the relative size of the two shifts.');
      } else out.push('Select a change in demand or supply. The diagram will update, and the steps of the analysis will appear here in the order you would write them in an answer.');
      if (dC || sC) badges = [badge('Price', cmp(e1.P, e0.P)), badge('Quantity', cmp(e1.Q, e0.Q))];
    } else if (mode === 'controls') {
      const Qd = (final.a - final.pc) / final.b, Qs = (final.pc - final.c) / final.d, gap = Math.abs(Qd - Qs);
      const isMax = ctrl === 'max', binding = isMax ? final.pc < e1.P - 0.2 : final.pc > e1.P + 0.2;
      if (!binding) out.push(`A ${isMax ? 'maximum' : 'minimum'} price of <b>${usd(final.pc)}</b> is ${isMax ? 'above' : 'below'} the equilibrium price of ${usd(e1.P)}.`, `It has <b>no effect</b>, because the market price is already ${isMax ? 'lower' : 'higher'}. A ${isMax ? 'maximum' : 'minimum'} price only has an effect if it is set ${isMax ? 'below' : 'above'} the equilibrium price.`);
      else if (isMax) {
        out.push(`A maximum price of <b>${usd(final.pc)}</b> is set below the equilibrium price of ${usd(e1.P)}.`, `At this price, quantity demanded rises to ${cups(Qd)} cups, but quantity supplied falls to ${cups(Qs)}.`, `This creates a <b>shortage of ${cups(gap)} cups</b> per week. Shortages can lead to queues, rationing or a black market.`, 'Consumers who can buy coffee benefit from the lower price. Consumers who cannot buy it, and producers, lose out.');
        badges = [badge('Price', -1), `<span class="badge down">Shortage ${cups(gap)}</span>`];
      } else {
        out.push(`A minimum price of <b>${usd(final.pc)}</b> is set above the equilibrium price of ${usd(e1.P)}.`, `At this price, quantity supplied rises to ${cups(Qs)} cups, but quantity demanded falls to ${cups(Qd)}.`, `This creates a <b>surplus of ${cups(gap)} cups</b> per week. The government may have to buy the surplus, or it may be wasted.`, 'A national minimum wage works in the same way in the labour market. The surplus of labour is unemployment.');
        badges = [badge('Price', 1), `<span class="badge" style="color:var(--geo)">Surplus ${cups(gap)}</span>`];
      }
    } else {
      const dP = ((e1.P - e0.P) / e0.P) * 100, dQ = ((e1.Q - e0.Q) / e0.Q) * 100, ped = dQ / dP;
      const r0 = (e0.P / 20) * e0.Q * 10, r1 = (e1.P / 20) * e1.Q * 10, inel = Math.abs(ped) < 1;
      out.push(`Higher costs shift supply to the left, from S1 to S2. The price rises by <b>${dP.toFixed(0)}%</b>.`,
        `Quantity demanded falls by ${Math.abs(dQ).toFixed(0)}%, so PED = <b>${ped.toFixed(2)}</b>. Demand is price ${inel ? 'inelastic' : 'elastic'}.`,
        `Total revenue (price × quantity, shown by the shaded area) ${r1 > r0 ? 'rises' : 'falls'} from ${rev(e0.P, e0.Q)} to ${rev(e1.P, e1.Q)}.`,
        inel ? 'Consumers have few close substitutes, so producers can pass most of the cost increase on to consumers. Taxes on products like this raise a lot of government revenue.' : 'Consumers switch to substitutes, so producers cannot pass on the cost increase without losing sales. Total revenue falls.');
      badges = [badge('Price', 1), badge('Quantity', -1), badge('Revenue', cmp(r1, r0, 1))];
    }
    $('.badges', el).innerHTML = badges.join('');
    const chain = $('.chain', el);
    chain.innerHTML = out.map(t => `<li><span>${t}</span></li>`).join('');
    if (!reduced) gsap.from([...$$('.badge', el), ...chain.children], { opacity: 0, y: 10, duration: 0.6, stagger: 0.06, overwrite: true });
  }

  const go = (target, pulse = true) => {
    explain({ ...s, ...target });
    gsap.to(s, {
      ...target, duration: reduced ? 0 : 1.05, ease: 'm.out', overwrite: true, onUpdate: render,
      onComplete: () => { render(); if (pulse && !reduced) gsap.fromTo(q('[data-e="ring"]'), { attr: { r: 6 }, opacity: 0.9 }, { attr: { r: 30 }, opacity: 0, duration: 1.1, ease: 'm.out' }); },
    });
  };
  const shiftTarget = () => {
    const dC = lab.demand.find(c => c.id === selD), sC = lab.supply.find(c => c.id === selS);
    return { ...BASE, a: BASE.a + (dC ? dC.dir * 18 : 0), c: BASE.c - (sC ? sC.dir * 18 : 0) };
  };
  const pedB = v => 0.3 * Math.pow(10.7, 1 - v / 100);   // 3.2 (steep) … 0.3 (flat)
  const pedTarget = v => { const b = pedB(v); return { b, a: 50 + b * 50, c: BASE.c + 20, d: BASE.d }; };

  $$('[data-panel="shift"] .chip', el).forEach(btn => btn.addEventListener('click', () => {
    const k = btn.dataset.k, id = btn.dataset.id;
    if (k === 'd') selD = selD === id ? null : id; else selS = selS === id ? null : id;
    $$(`[data-k="${k}"]`, el).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.id === (k === 'd' ? selD : selS))));
    go(shiftTarget());
  }));

  const pcr = $('[data-pcr]', el), pcl = $('[data-pc]', el);
  const setPc = v => {
    s.pc = +v; pcr.value = v; pcl.textContent = usd(+v);
    pcr.style.setProperty('--p', `${((v - 12) / 76) * 100}%`);
  };
  pcr.addEventListener('input', () => { setPc(pcr.value); render(); explain(s); });
  segmented($('[data-ctrl]', el), v => { ctrl = v; setPc(v === 'max' ? 35 : 65); render(); explain(s); });

  const pedr = $('[data-pedr]', el);
  const pedInput = () => {
    pedr.style.setProperty('--p', `${pedr.value}%`);
    const t = pedTarget(+pedr.value);
    ghost = { ...t, c: BASE.c };
    Object.assign(s, { a: t.a, b: t.b });
    gsap.killTweensOf(s);
    s.c = t.c;
    render(); explain(s);
  };
  pedr.addEventListener('input', pedInput);

  segmented($('[data-mode]', el), v => {
    mode = v;
    $$('[data-panel]', el).forEach(p => { p.hidden = p.dataset.panel !== v; });
    if (!reduced) gsap.from($(`[data-panel="${v}"]`, el), { opacity: 0, y: 12, duration: 0.5 });
    if (v === 'shift') { ghost = { ...BASE }; go(shiftTarget()); }
    else if (v === 'controls') { ghost = { ...BASE }; setPc(ctrl === 'max' ? 35 : 65); go({ ...BASE }, false); }
    else {
      pedr.style.setProperty('--p', `${pedr.value}%`);
      const t = pedTarget(+pedr.value);
      ghost = { ...t, c: BASE.c };
      Object.assign(s, { a: t.a, b: t.b, c: BASE.c });
      render();
      go(t);
    }
  });

  setPc(35);
  render();
  explain(s);
}
