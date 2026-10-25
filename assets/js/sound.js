// Meridian sound: everything is synthesised with the Web Audio API, so there are no audio files to download.
// Sound follows the map, not a playlist: it speaks when data moves on the globe and stays quiet while the reader reads.
// The browser lets sound start only after a tap, so a chapter with sound asks once, on its loader (start()).
// The choice is kept per viewer (store 'sound'), and the toggle in the nav bar turns it off and on at any time.
//
// Earthquakes (Geography): as the clock plays through the years, every quake the globe shows is heard where it is.
//   magnitude 5.5–6.9  a grain of "rain": a short knock of filtered noise, brighter for shallow quakes
//   magnitude 7+       a struck stone: an inharmonic bell tuned to a pentatonic scale, lower for deeper quakes,
//                      louder and longer for larger ones
//   magnitude 8+       the stone plus a deep boom felt more than heard
//   left–right         where the quake is on screen; one on the far side of the globe is quieter and duller
// A low drone of the Earth sits under the playing scene, and each new year gives a soft tick.
import { store, reduced } from './core.js';

let ctx = null, master = null, comp = null, verb = null, verbIn = null, dry = null, bed = null;
let enabled = store.get('sound', true);
const listeners = new Set();
export const sound = {
  get enabled() { return enabled; },
  get running() { return !!ctx && ctx.state === 'running'; },
  onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); },
};
const emit = () => listeners.forEach(fn => fn(enabled));

// a reverb tail made from decaying noise (3 s, stereo), so no impulse file is needed
function impulse(seconds = 3.2, decay = 3) {
  const n = Math.round(ctx.sampleRate * seconds), buf = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay);
  }
  return buf;
}
let noiseBuf = null;
function noise() {
  if (noiseBuf) return noiseBuf;
  const n = ctx.sampleRate * 2; noiseBuf = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  return noiseBuf;
}

function build() {
  ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'interactive' });
  // master → limiter → speakers; a quiet master so many voices never clip
  comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -14; comp.knee.value = 8; comp.ratio.value = 12; comp.attack.value = 0.004; comp.release.value = 0.25;
  master = ctx.createGain(); master.gain.value = 0;
  master.connect(comp).connect(ctx.destination);
  dry = ctx.createGain(); dry.gain.value = 0.9; dry.connect(master);
  verb = ctx.createConvolver(); verb.buffer = impulse();
  verbIn = ctx.createGain(); verbIn.gain.value = 0.55; verbIn.connect(verb).connect(master);
  // pause with the page: nothing plays in a background tab
  document.addEventListener('visibilitychange', () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else if (enabled) ctx.resume(); });
}

// call from a tap (the loader's buttons, the toggle): creates and starts the audio
export async function start(on = true) {
  enabled = on; store.set('sound', on);
  if (on) {
    if (!ctx) build();
    try { await ctx.resume(); } catch { /* blocked: stays silent */ }
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setTargetAtTime(0.8, ctx.currentTime, 0.4);
  } else if (ctx) {
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.15);
  }
  emit();
}
export const toggle = () => start(!enabled);

// ── voices ─────────────────────────────────────────────────────────────────
const live = () => ctx && enabled && ctx.state === 'running';
const panner = pan => { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); return p; };

// A minor pentatonic over four octaves (A1 to A5): shallow quakes ring high, deep ones low
const SCALE = [0, 3, 5, 7, 10];
const noteOf = depth => {
  const t = Math.max(0, Math.min(1, Math.log(1 + depth / 8) / Math.log(1 + 700 / 8))); // 0 shallow … 1 deepest
  const steps = Math.round((1 - t) * (4 * SCALE.length - 1));
  const oct = Math.floor(steps / SCALE.length), semi = SCALE[steps % SCALE.length];
  return 55 * Math.pow(2, oct + semi / 12);
};

// a struck stone: three inharmonic partials with fast attack and long decay, through a soft low-pass
function stone(e, when) {
  const f = noteOf(e.depth), big = Math.max(0, e.mag - 7);
  const out = ctx.createGain(), lp = ctx.createBiquadFilter(), p = panner(e.pan * 0.9);
  lp.type = 'lowpass'; lp.frequency.value = e.near ? 5200 : 1400; lp.Q.value = 0.4;
  const peak = Math.min(0.32, 0.07 + big * 0.12) * e.near * e.gain, decay = 1.4 + big * 2.6;
  out.gain.setValueAtTime(0, when);
  out.gain.linearRampToValueAtTime(peak, when + 0.006);
  out.gain.exponentialRampToValueAtTime(0.0008, when + decay);
  out.connect(lp).connect(p); p.connect(dry); p.connect(verbIn);
  [[1, 1], [2.76, 0.42], [5.4, 0.18], [8.93, 0.07]].forEach(([r, a]) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = f * r * (1 + (Math.random() - 0.5) * 0.004);
    g.gain.value = a; g.gain.setValueAtTime(a, when); g.gain.exponentialRampToValueAtTime(0.0005, when + decay / Math.sqrt(r));
    o.connect(g).connect(out); o.start(when); o.stop(when + decay + 0.1);
  });
}

// the deep boom of a great earthquake: a falling sine and a slow rumble of low noise
function boom(e, when) {
  const g = ctx.createGain(), o = ctx.createOscillator(), p = panner(e.pan * 0.5);
  o.type = 'sine'; o.frequency.setValueAtTime(62, when); o.frequency.exponentialRampToValueAtTime(34, when + 2.2);
  const peak = Math.min(0.5, 0.22 + (e.mag - 8) * 0.25) * e.gain * (e.near ? 1 : 0.6);
  g.gain.setValueAtTime(0, when); g.gain.linearRampToValueAtTime(peak, when + 0.05); g.gain.exponentialRampToValueAtTime(0.0008, when + 3.4);
  o.connect(g).connect(p).connect(dry); o.start(when); o.stop(when + 3.6);
  const n = ctx.createBufferSource(), lp = ctx.createBiquadFilter(), ng = ctx.createGain();
  n.buffer = noise(); lp.type = 'lowpass'; lp.frequency.value = 180;
  ng.gain.setValueAtTime(0, when); ng.gain.linearRampToValueAtTime(peak * 0.7, when + 0.25); ng.gain.exponentialRampToValueAtTime(0.0008, when + 4);
  n.connect(lp).connect(ng).connect(p); p.connect(verbIn); n.start(when); n.stop(when + 4.1);
}

// a grain of rain: a few milliseconds of band-passed noise, brighter for shallow quakes
function grain(e, when) {
  const n = ctx.createBufferSource(), bp = ctx.createBiquadFilter(), g = ctx.createGain(), p = panner(e.pan);
  n.buffer = noise();
  const t = Math.min(1, Math.log(1 + e.depth / 8) / Math.log(1 + 700 / 8));
  bp.type = 'bandpass'; bp.frequency.value = (e.near ? 4200 : 1600) * Math.pow(0.28, t) * (0.85 + Math.random() * 0.3); bp.Q.value = 6;
  const peak = 0.05 * Math.pow(10, 0.35 * (e.mag - 5.5)) * e.near * e.gain;
  g.gain.setValueAtTime(0, when); g.gain.linearRampToValueAtTime(peak, when + 0.002); g.gain.exponentialRampToValueAtTime(0.0005, when + 0.09);
  n.connect(bp).connect(g).connect(p); p.connect(dry); p.connect(verbIn);
  const at = Math.random() * 1.9; n.start(when, at, 0.1);
}

// The clock passes about 400 quakes a second (magnitude 5.5 and over), so each kind of voice has a budget that refills
// with time, and the largest quakes of a frame are heard first: about 5 stones and 30 grains a second, every boom.
// What is left out is heard as density, not as separate notes.
const budget = { stone: { rate: 5, max: 3, n: 3 }, grain: { rate: 30, max: 6, n: 6 }, t: 0 };
function refill() {
  const t = ctx.currentTime, dt = budget.t ? Math.min(0.5, t - budget.t) : 0; budget.t = t;
  for (const b of [budget.stone, budget.grain]) b.n = Math.min(b.max, b.n + dt * b.rate);
}
// one frame's quakes, largest first; grains are spread over a few milliseconds so they patter instead of clicking together
export function quakes(list, kind, year) {
  if (!live()) return;
  const now = ctx.currentTime + 0.01;
  if (kind === 'year') { yearTick(now, year); return; }
  if (kind === 'loop') return;
  refill();
  let k = 0;
  for (const e of list.sort((a, b) => b.mag - a.mag)) {
    if (e.mag >= 8) boom(e, now);
    if (e.mag >= 7 && budget.stone.n >= 1) { budget.stone.n--; stone(e, now + Math.random() * 0.03); }
    else if (budget.grain.n >= 1) { budget.grain.n--; grain(e, now + k++ * 0.007 + Math.random() * 0.012); }
    else if (e.mag < 7) break; // sorted: nothing larger is left that could still ring
  }
}

// each new year: a soft wooden tick
function yearTick(when, year) {
  const o = ctx.createOscillator(), g = ctx.createGain(), bp = ctx.createBiquadFilter();
  o.type = 'triangle'; o.frequency.value = year % 5 === 0 ? 1320 : 990;
  bp.type = 'bandpass'; bp.frequency.value = 1200; bp.Q.value = 3;
  g.gain.setValueAtTime(0, when); g.gain.linearRampToValueAtTime(year % 5 === 0 ? 0.05 : 0.03, when + 0.003); g.gain.exponentialRampToValueAtTime(0.0005, when + 0.12);
  o.connect(bp).connect(g).connect(dry); o.start(when); o.stop(when + 0.15);
}

// the Earth's drone under a playing scene: two slow, detuned low tones and a breath of filtered noise
export function drone(on) {
  if (!ctx || reduced) return;
  if (on && !bed) {
    bed = { g: ctx.createGain(), nodes: [] };
    bed.g.gain.value = 0; bed.g.connect(dry); bed.g.connect(verbIn);
    for (const [f, a] of [[55, 0.06], [82.6, 0.035], [110.4, 0.015]]) {
      const o = ctx.createOscillator(), g = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain();
      o.frequency.value = f; g.gain.value = a; lfo.frequency.value = 0.05 + Math.random() * 0.05; lg.gain.value = a * 0.6;
      lfo.connect(lg).connect(g.gain); o.connect(g).connect(bed.g); o.start(); lfo.start(); bed.nodes.push(o, lfo);
    }
    const n = ctx.createBufferSource(), lp = ctx.createBiquadFilter(), ng = ctx.createGain();
    n.buffer = noise(); n.loop = true; lp.type = 'lowpass'; lp.frequency.value = 260; ng.gain.value = 0.05;
    n.connect(lp).connect(ng).connect(bed.g); n.start(); bed.nodes.push(n);
  }
  if (!bed) return;
  bed.on = on;
  bed.g.gain.setTargetAtTime(on ? 1 : 0, ctx.currentTime, on ? 1.2 : 0.6);
  if (!on) {
    const b = bed; bed = null;
    setTimeout(() => { if (!b.on) { b.nodes.forEach(n => { try { n.stop(); } catch { /* stopped */ } }); b.g.disconnect(); } }, 4000);
  }
}
