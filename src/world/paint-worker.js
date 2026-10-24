// Paint worker: keeps texture painting (55–265 ms a scene) off the main thread, so scrolling never waits for it.
// It fetches and parses the same topology as the page (a cache hit), then answers paint and id jobs.
import { PALETTE, featuresOf, runJob } from './paint.js';

let feats = null;
const queue = [];
const run = job => {
  const r = runJob(feats, job, (w, h) => new OffscreenCanvas(w, h));
  if (r.ids) postMessage({ key: job.key, ids: r.ids, ms: r.ms }, [r.ids.buffer]);
  else { const bitmap = r.canvas.transferToImageBitmap(); postMessage({ key: job.key, bitmap, ms: r.ms }, [bitmap]); }
};
onmessage = async ({ data: msg }) => {
  if (msg.type === 'init') {
    if (msg.focus) PALETTE.focus = msg.focus; // the chapter accent, set on the page's copy of the palette
    try {
      // the map's lettering (Berlin's sector names) uses the site's mono face, which a worker has to load itself
      try { const f = new FontFace('Plex Mono', `url(${new URL('../fonts/plex-mono-500.woff2', import.meta.url)})`, { weight: '500' }); self.fonts.add(f); await f.load(); } catch {}
      const topo = await (await fetch(msg.url)).json();
      feats = featuresOf(topo);
      postMessage({ ready: true });
      while (queue.length) run(queue.shift());
    } catch (err) { postMessage({ failed: String(err) }); }
    return;
  }
  if (!feats) queue.push(msg); else run(msg);
};
