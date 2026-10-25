// Meridian sound, synthesised with Web Audio (no audio files). Modelled on the measured character of Cartier's
// "Le Chœur des Pierres": one quiet, warm, very wide choir-like bed that never moves much, a soft chime when the
// pointer meets something to press, and a small sparkle when it is pressed. Nothing reacts to the scroll.
//   measured on the reference: music −41 to −49 dB RMS (peaks −26 dB); 81% of the energy between 80 and 320 Hz, little
//   below and almost nothing above 1 kHz; a still E major pentatonic (E, F♯, B, C♯, G♯) voiced from E2 to B3; more
//   side than middle in the stereo. Hover: B3, E5, G♯5, fading over about 5 s. Click: a high shimmer around A6.
//   bed    eight voices on E, B, F♯, G♯, C♯ (sus2 and add9 colours), each two detuned triangles and a soft sawtooth,
//          low-passed near 700 Hz, every voice placed far left or far right with its own slow swell, into a long warm
//          hall; the chord shifts between three close voicings of the same notes every 20 s or so
//   chime  three sine partials per note, B3 E5 G♯5 (or a neighbour), long decay, mostly reverb
//   spark  a few high sine glints and a breath of high noise, short
// The browser lets sound start only after a tap, so a chapter asks once, on its loader (start()); the choice is kept
// per viewer (store 'sound') and the speaker in the nav bar switches it.
import { store, reduced } from './core.js';

let ctx = null, master = null, verbIn = null, dry = null;
let enabled = store.get('sound', true);
const listeners = new Set();
export const sound = {
  get enabled() { return enabled; },
  get running() { return !!ctx && ctx.state === 'running'; },
  onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); },
};
const emit = () => listeners.forEach(fn => fn(enabled));
const at = (param, v, t, tc) => param.setTargetAtTime(v, t ?? ctx.currentTime, tc);
const hz = midi => 440 * Math.pow(2, (midi - 69) / 12);

// a warm hall: 6 s of decaying noise that darkens as it fades, different on each side for width
function hall(seconds = 6) {
  const n = Math.round(ctx.sampleRate * seconds), b = ctx.createBuffer(2, n, ctx.sampleRate), pre = Math.round(ctx.sampleRate * 0.04);
  for (let c = 0; c < 2; c++) {
    const d = b.getChannelData(c); let y = 0;
    for (let i = pre; i < n; i++) {
      const t = (i - pre) / (n - pre), cut = 0.22 * Math.pow(1 - t, 1.3) + 0.02;
      y += cut * ((Math.random() * 2 - 1) - y);
      d[i] = y * Math.pow(1 - t, 1.8) * (1 - Math.exp(-(i - pre) / 1800));
    }
  }
  return b;
}

// ── the bed ─────────────────────────────────────────────────────────────────
// three voicings of the same E major pentatonic colour (MIDI notes): open fifths low, sus2 and add9 above
const VOICINGS = [
  [40, 47, 52, 54, 59, 61, 64, 66], // E2 B2 E3 F#3 B3 C#4 E4 F#4
  [40, 47, 54, 56, 59, 63, 64, 68], // E2 B2 F#3 G#3 B3 D#4 E4 G#4 (a touch of major seventh)
  [35, 47, 52, 54, 59, 61, 66, 71], // B1 B2 E3 F#3 B3 C#4 F#4 B4
];
const S = { voices: [] };
function build() {
  ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'playback' });
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -24; comp.knee.value = 10; comp.ratio.value = 3; comp.attack.value = 0.05; comp.release.value = 0.5;
  master = ctx.createGain(); master.gain.value = 0;
  master.connect(comp).connect(ctx.destination);
  dry = ctx.createGain(); dry.gain.value = 0.55; dry.connect(master);
  const verb = ctx.createConvolver(); verb.buffer = hall();
  verbIn = ctx.createGain(); verbIn.gain.value = 0.8; verbIn.connect(verb).connect(master);

  // the bed's own level: about −42 dB RMS at the speakers, as quiet as the reference (measured on a recording)
  const bed = ctx.createGain(); bed.gain.value = 0;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.5;
  const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 45; hp.Q.value = 0.5; // little sub: the warmth sits above 80 Hz
  bed.connect(hp).connect(lp); lp.connect(dry); lp.connect(verbIn);
  VOICINGS[0].forEach((m, k) => {
    const g = ctx.createGain(), p = ctx.createStereoPanner();
    p.pan.value = (k % 2 ? 1 : -1) * (0.8 + Math.random() * 0.2); // wide: every voice leans hard to one side
    g.gain.value = 0;
    const oscs = [['triangle', -6, 1], ['triangle', 7, 1], ['sawtooth', 2, 0.26]].map(([type, cents, a]) => {
      const o = ctx.createOscillator(), og = ctx.createGain();
      o.type = type; o.frequency.value = hz(m); o.detune.value = cents + (Math.random() - 0.5) * 3; og.gain.value = a;
      o.connect(og).connect(g); o.start(); return o;
    });
    // each voice swells on its own slow cycle, so the chord shimmers like a held choir
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = 0.03 + Math.random() * 0.05; lg.gain.value = 0.35;
    const base = ctx.createConstantSource(); base.offset.value = 0.65;
    base.connect(g.gain); lfo.connect(lg).connect(g.gain); lfo.start(); base.start();
    const lvl = ctx.createGain(); lvl.gain.value = k < 2 ? 0.0034 : 0.002; // the two lowest notes carry the warmth
    g.connect(lvl).connect(p).connect(bed);
    S.voices.push({ oscs });
  });
  // a quiet low root under the chord (the reference has a little body below 80 Hz)
  const root = ctx.createOscillator(), rg = ctx.createGain();
  root.type = 'sine'; root.frequency.value = hz(28); rg.gain.value = 0.001;
  root.connect(rg).connect(bed); root.start();
  Object.assign(S, { bed, lp, root });
  at(bed.gain, 1, ctx.currentTime + 0.1, 3); // a slow bloom when the reader enters
  drift();
  document.addEventListener('visibilitychange', () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else if (enabled) ctx.resume(); });
}
// every 18–26 s the voices glide to another voicing of the same notes, and the filter breathes a little
let voicing = 0;
function drift() {
  setTimeout(() => {
    if (!ctx) return;
    voicing = (voicing + 1) % VOICINGS.length;
    const t = ctx.currentTime;
    VOICINGS[voicing].forEach((m, k) => S.voices[k].oscs.forEach(o => at(o.frequency, hz(m), t, 4)));
    at(S.root.frequency, hz(VOICINGS[voicing][0] - 12), t, 4);
    at(S.lp.frequency, 760 + Math.random() * 300, t, 6);
    drift();
  }, 18000 + Math.random() * 8000);
}

// call from a tap (the loader's buttons, the toggle)
export async function start(on = true) {
  enabled = on; store.set('sound', on);
  if (on) {
    if (!ctx) build();
    try { await ctx.resume(); } catch { /* blocked: stays silent */ }
    master.gain.cancelScheduledValues(ctx.currentTime);
    at(master.gain, 1, ctx.currentTime, 0.6);
  } else if (ctx) {
    at(master.gain, 0, ctx.currentTime, 0.25);
  }
  emit();
}
export const toggle = () => start(!enabled);
const live = () => ctx && enabled && ctx.state === 'running';

// ── touches ─────────────────────────────────────────────────────────────────
// a soft chime: three notes of the chord, each a sine with two quiet partials, long tail, mostly in the hall
const CHIMES = [[59, 76, 80], [64, 76, 83], [59, 71, 80], [61, 73, 76]]; // B3 E5 G#5 and close relatives
let lastChime = 0, chimeIx = 0;
function chime() {
  if (!live() || reduced || ctx.currentTime - lastChime < 0.18) return;
  lastChime = ctx.currentTime;
  const t = ctx.currentTime + 0.005, notes = CHIMES[chimeIx++ % CHIMES.length];
  notes.forEach((m, k) => {
    const when = t + k * 0.045;
    [[1, 1], [2, 0.12], [3, 0.05]].forEach(([r, a]) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), p = ctx.createStereoPanner();
      o.type = 'sine'; o.frequency.value = hz(m) * r; p.pan.value = (k - 1) * 0.5;
      const peak = 0.0016 * a * (k === 0 ? 1.4 : 1);
      g.gain.setValueAtTime(0, when); g.gain.linearRampToValueAtTime(peak, when + 0.012); g.gain.exponentialRampToValueAtTime(0.000005, when + 4.5 / r);
      o.connect(g).connect(p); p.connect(verbIn); p.connect(dry); o.start(when); o.stop(when + 4.6 / r);
    });
  });
}
// a small sparkle: a few high glints around A6 and a breath of high noise
let noiseBuf = null;
function spark() {
  if (!live()) return;
  const t = ctx.currentTime + 0.005;
  [93, 96, 100, 105].forEach((m, k) => {
    const o = ctx.createOscillator(), g = ctx.createGain(), p = ctx.createStereoPanner(), when = t + k * 0.03;
    o.type = 'sine'; o.frequency.value = hz(m) * (1 + (Math.random() - 0.5) * 0.004); p.pan.value = (Math.random() - 0.5) * 1.2;
    g.gain.setValueAtTime(0, when); g.gain.linearRampToValueAtTime(0.0035, when + 0.004); g.gain.exponentialRampToValueAtTime(0.00002, when + 1.6);
    o.connect(g).connect(p); p.connect(verbIn); p.connect(dry); o.start(when); o.stop(when + 1.7);
  });
  if (!noiseBuf) { const n = ctx.sampleRate; noiseBuf = ctx.createBuffer(1, n, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; }
  const n = ctx.createBufferSource(), hp = ctx.createBiquadFilter(), g = ctx.createGain();
  n.buffer = noiseBuf; hp.type = 'highpass'; hp.frequency.value = 6000;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.0025, t + 0.01); g.gain.exponentialRampToValueAtTime(0.00002, t + 0.6);
  n.connect(hp).connect(g).connect(verbIn); n.start(t); n.stop(t + 0.7);
}

// hover and press on the things a reader can use (menus, scene list, checks, practice, cards)
const PRESSABLE = 'button, a[href], summary, [role="button"]';
export function bindUI(root = document) {
  let over = null;
  root.addEventListener('pointerover', e => {
    if (e.pointerType !== 'mouse') return;
    const el = e.target.closest(PRESSABLE);
    if (el && el !== over) { over = el; chime(); }
    if (!el) over = null;
  });
  root.addEventListener('click', e => { if (e.target.closest(PRESSABLE)) spark(); }, true);
}
