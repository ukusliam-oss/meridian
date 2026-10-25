// Meridian sound: an ambient soundscape for the scroll chapters, synthesised with Web Audio (no audio files).
// The character follows the sites that inspired it: dark and low (most of the energy under 300 Hz), loud enough to
// surround, swelling slowly every half minute, with a whoosh when the camera flies and a boom on the way in.
//   wash   white noise in stereo, darkened and slowly breathing: the air of the room
//   pad    a detuned chord (four voices, three oscillators each) under a low-pass filter, drifting through a slow
//          progression, drowned in a long reverb: the dream
//   sub    a deep sine under the pad, rising with each swell
//   wind   high noise that opens with the speed of the scroll
//   whoosh a sweep of noise and a falling sub when the globe flies from one scene to the next
//   boom   a deep hit with a long tail when the reader enters the chapter and at each new part
// While the reader holds still on a panel the whole bed sinks, and it rises again when they move.
// The browser lets sound start only after a tap, so a chapter with sound asks once, on its loader (start()); the choice
// is kept per viewer (store 'sound') and the speaker in the nav bar switches it.
import { store, reduced } from './core.js';

let ctx = null, master = null, bus = null, verbIn = null;
let enabled = store.get('sound', true);
const listeners = new Set();
export const sound = {
  get enabled() { return enabled; },
  get running() { return !!ctx && ctx.state === 'running'; },
  onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); },
};
const emit = () => listeners.forEach(fn => fn(enabled));
const at = (param, v, t, tc) => param.setTargetAtTime(v, t ?? ctx.currentTime, tc);

// ── buffers made in code ──────────────────────────────────────────────────────
// white noise, one channel per side so the wash is wide
function whiteBuf(seconds = 4) {
  const n = ctx.sampleRate * seconds, b = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; }
  return b;
}
// brown noise: white noise integrated with a little leak, deep and soft
function brownBuf(seconds = 6) {
  const n = ctx.sampleRate * seconds, b = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = b.getChannelData(c); let y = 0;
    for (let i = 0; i < n; i++) { y = (y + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = y * 3.5; }
    // fade the loop point so it never clicks
    for (let i = 0; i < 2000; i++) { const g = i / 2000; d[i] *= g; d[n - 1 - i] *= g; }
  }
  return b;
}
// a large dark hall: 7 s of decaying noise, low-passed so the tail is warm, slightly different on each side
function hall(seconds = 7) {
  const n = Math.round(ctx.sampleRate * seconds), b = ctx.createBuffer(2, n, ctx.sampleRate), pre = Math.round(ctx.sampleRate * 0.03);
  for (let c = 0; c < 2; c++) {
    const d = b.getChannelData(c); let y = 0;
    for (let i = pre; i < n; i++) {
      const t = (i - pre) / (n - pre), cut = 0.35 * Math.pow(1 - t, 1.5) + 0.03; // darker as it fades
      y += cut * ((Math.random() * 2 - 1) - y);
      d[i] = y * Math.pow(1 - t, 2.2) * (1 - Math.exp(-(i - pre) / 600));
    }
  }
  return b;
}

// ── the graph ───────────────────────────────────────────────────────────────
const S = {};
function build() {
  ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'playback' });
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -10; comp.knee.value = 6; comp.ratio.value = 8; comp.attack.value = 0.01; comp.release.value = 0.4;
  master = ctx.createGain(); master.gain.value = 0;
  master.connect(comp).connect(ctx.destination);
  bus = ctx.createGain(); bus.gain.value = 1; bus.connect(master); // the bed: sinks while the reader reads
  const verb = ctx.createConvolver(); verb.buffer = hall();
  verbIn = ctx.createGain(); verbIn.gain.value = 1;
  const verbOut = ctx.createGain(); verbOut.gain.value = 0.9;
  verbIn.connect(verb).connect(verbOut).connect(master);

  // wash: brown noise for the body, a thin breath of white noise above it, both slowly opening and closing
  const brown = ctx.createBufferSource(); brown.buffer = brownBuf(); brown.loop = true;
  const bLp = ctx.createBiquadFilter(); bLp.type = 'lowpass'; bLp.frequency.value = 420; bLp.Q.value = 0.3;
  const bG = ctx.createGain(); bG.gain.value = 0.22;
  brown.connect(bLp).connect(bG); bG.connect(bus); bG.connect(verbIn);
  const air = ctx.createBufferSource(); air.buffer = whiteBuf(); air.loop = true;
  const aBp = ctx.createBiquadFilter(); aBp.type = 'bandpass'; aBp.frequency.value = 1800; aBp.Q.value = 0.5;
  const aG = ctx.createGain(); aG.gain.value = 0.018;
  air.connect(aBp).connect(aG); aG.connect(bus); aG.connect(verbIn);
  // slow breathing of the wash
  const lfo = ctx.createOscillator(), lfoG = ctx.createGain(); lfo.frequency.value = 0.045; lfoG.gain.value = 180;
  lfo.connect(lfoG).connect(bLp.frequency);
  brown.start(); air.start(); lfo.start();

  // pad: four voices of three detuned sawtooths each, through one low-pass, mostly into the hall
  const padLp = ctx.createBiquadFilter(); padLp.type = 'lowpass'; padLp.frequency.value = 520; padLp.Q.value = 0.7;
  const padG = ctx.createGain(); padG.gain.value = 0;
  const padDry = ctx.createGain(); padDry.gain.value = 0.35;
  padLp.connect(padG); padG.connect(padDry).connect(bus); padG.connect(verbIn);
  const voices = [0, 1, 2, 3].map(() => {
    const g = ctx.createGain(); g.gain.value = 0.05; g.connect(padLp);
    const oscs = [-9, 0, 8].map(cents => { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.detune.value = cents + (Math.random() - 0.5) * 4; o.connect(g); o.start(); return o; });
    return { g, oscs };
  });
  // sub: a sine an octave under the pad's root
  const sub = ctx.createOscillator(), subG = ctx.createGain(); sub.type = 'sine'; subG.gain.value = 0;
  sub.connect(subG).connect(bus); sub.start();

  // wind: high noise opened by the speed of the scroll
  const wind = ctx.createBufferSource(); wind.buffer = whiteBuf(); wind.loop = true;
  const wHp = ctx.createBiquadFilter(); wHp.type = 'bandpass'; wHp.frequency.value = 900; wHp.Q.value = 0.6;
  const wG = ctx.createGain(); wG.gain.value = 0;
  wind.connect(wHp).connect(wG); wG.connect(bus); wG.connect(verbIn); wind.start();

  Object.assign(S, { bLp, bG, padLp, padG, voices, sub, subG, wHp, wG });
  setChord(0, 0.01);
  progression();
  swell();
  document.addEventListener('visibilitychange', () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else if (enabled) ctx.resume(); });
}

// a slow progression in D, each chord held about 22 s and glided into: Dadd9, Bm(add11), Gmaj7(#11), Asus2
const D2 = 73.42;
const CHORDS = [[0, 7, 14, 16], [-3, 7, 10, 17], [-7, 7, 11, 18], [-5, 7, 12, 14]];
let chordIx = 0;
function setChord(k, glide = 5) {
  const t = ctx.currentTime;
  CHORDS[k].forEach((semi, v) => S.voices[v].oscs.forEach(o => at(o.frequency, D2 * Math.pow(2, semi / 12), t, glide)));
  at(S.sub.frequency, D2 * Math.pow(2, CHORDS[k][0] / 12) / 2, t, glide);
}
function progression() {
  setTimeout(() => { if (!ctx) return; chordIx = (chordIx + 1) % CHORDS.length; setChord(chordIx); progression(); }, 22000);
}
// swells: every 25–40 s the pad rises and opens, then settles, as the reference loops do
function swell() {
  if (!ctx) return;
  const t = ctx.currentTime, high = 0.55 + Math.random() * 0.45;
  at(S.padG.gain, 0.32 * high, t, 6);
  at(S.padLp.frequency, 380 + 900 * high, t, 7);
  at(S.subG.gain, 0.22 * high, t, 6);
  setTimeout(() => { if (!ctx) return; const t2 = ctx.currentTime; at(S.padG.gain, 0.16, t2, 9); at(S.padLp.frequency, 420, t2, 9); at(S.subG.gain, 0.1, t2, 9); }, 12000 + Math.random() * 6000);
  setTimeout(swell, 25000 + Math.random() * 15000);
}

// call from a tap (the loader's buttons, the toggle)
export async function start(on = true) {
  enabled = on; store.set('sound', on);
  if (on) {
    if (!ctx) build();
    try { await ctx.resume(); } catch { /* blocked: stays silent */ }
    master.gain.cancelScheduledValues(ctx.currentTime);
    at(master.gain, 0.9, ctx.currentTime, 0.8);
  } else if (ctx) {
    at(master.gain, 0, ctx.currentTime, 0.25);
  }
  emit();
}
export const toggle = () => start(!enabled);
const live = () => ctx && enabled && ctx.state === 'running';

// ── events ─────────────────────────────────────────────────────────────────
// a deep hit with a long tail: entering the chapter, and each new part
export function boom(strength = 1) {
  if (!live()) return;
  const t = ctx.currentTime + 0.02;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sine'; o.frequency.setValueAtTime(58, t); o.frequency.exponentialRampToValueAtTime(29, t + 2.6);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.75 * strength, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0008, t + 3.6);
  o.connect(g); g.connect(master); g.connect(verbIn); o.start(t); o.stop(t + 3.8);
  const n = ctx.createBufferSource(), lp = ctx.createBiquadFilter(), ng = ctx.createGain();
  n.buffer = whiteBuf(2); lp.type = 'lowpass'; lp.frequency.setValueAtTime(900, t); lp.frequency.exponentialRampToValueAtTime(80, t + 1.6);
  ng.gain.setValueAtTime(0, t); ng.gain.linearRampToValueAtTime(0.35 * strength, t + 0.01); ng.gain.exponentialRampToValueAtTime(0.0008, t + 1.8);
  n.connect(lp).connect(ng); ng.connect(verbIn); ng.connect(master); n.start(t); n.stop(t + 2);
}
// a sweep of noise and a falling sub as the globe flies to the next scene (dir: 1 forward, -1 back)
let lastWhoosh = 0;
function whoosh(dir = 1) {
  if (!live() || ctx.currentTime - lastWhoosh < 1.2) return;
  lastWhoosh = ctx.currentTime;
  const t = ctx.currentTime + 0.01, len = 2.2;
  const n = ctx.createBufferSource(), bp = ctx.createBiquadFilter(), g = ctx.createGain(), p = ctx.createStereoPanner();
  n.buffer = whiteBuf(3);
  bp.type = 'bandpass'; bp.Q.value = 1.2;
  bp.frequency.setValueAtTime(180, t); bp.frequency.exponentialRampToValueAtTime(dir > 0 ? 2400 : 1400, t + len * 0.55); bp.frequency.exponentialRampToValueAtTime(220, t + len);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.28, t + len * 0.5); g.gain.exponentialRampToValueAtTime(0.0008, t + len);
  p.pan.setValueAtTime(-0.6 * dir, t); p.pan.linearRampToValueAtTime(0.6 * dir, t + len);
  n.connect(bp).connect(g).connect(p); p.connect(bus); p.connect(verbIn); n.start(t); n.stop(t + len + 0.1);
  const o = ctx.createOscillator(), og = ctx.createGain();
  o.type = 'sine'; o.frequency.setValueAtTime(70, t + len * 0.3); o.frequency.exponentialRampToValueAtTime(34, t + len);
  og.gain.setValueAtTime(0, t); og.gain.linearRampToValueAtTime(0.32, t + len * 0.55); og.gain.exponentialRampToValueAtTime(0.0008, t + len + 0.6);
  o.connect(og).connect(bus); o.start(t); o.stop(t + len + 0.7);
}

// called on every scroll step with the chapter's progress (scene index + fraction) and its part index
let lastP = null, lastT = 0, lastPart = null, still = null, vel = 0;
export function motion(p, part) {
  if (!live() || reduced) { lastP = p; lastPart = part; return; }
  const t = ctx.currentTime;
  if (lastP != null) {
    const dt = Math.max(1 / 120, t - lastT), v = Math.abs(p - lastP) / dt; // scenes a second
    vel = vel * 0.7 + v * 0.3;
    // wind opens with speed; it falls back by itself when the scroll stops (time constant 0.4 s)
    at(S.wG.gain, Math.min(0.16, vel * 0.09), t, 0.08);
    at(S.wHp.frequency, 700 + Math.min(2600, vel * 1500), t, 0.1);
    at(S.wG.gain, 0, t + 0.15, 0.4);
    // a flight: the camera leaves a held scene (the fraction moves off a whole number)
    const fa = lastP - Math.floor(lastP), fb = p - Math.floor(p);
    if (Math.floor(p) !== Math.floor(lastP) || (fa < 0.08 && fb >= 0.08) || (fa > 0.92 && fb <= 0.92)) whoosh(p >= lastP ? 1 : -1);
    if (part != null && lastPart != null && part !== lastPart) boom(0.7);
  }
  lastP = p; lastT = t; lastPart = part;
  // the bed rises while moving and sinks back after a second and a half of stillness
  at(bus.gain, 1, t, 0.5);
  clearTimeout(still);
  still = setTimeout(() => { if (ctx) at(bus.gain, 0.55, ctx.currentTime, 2.5); }, 1500);
}
