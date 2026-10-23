// Paint worker: keeps texture painting (55–265 ms a scene) off the main thread, so scrolling never waits for it.
// It fetches and parses the same topology as the page (a cache hit), then answers paint and id jobs.
import { featuresOf, runJob } from './paint.js';

let feats = null;
const queue = [];
const run = job => {
  const r = runJob(feats, job, (w, h) => new OffscreenCanvas(w, h));
  if (r.ids) postMessage({ key: job.key, ids: r.ids, ms: r.ms }, [r.ids.buffer]);
  else { const bitmap = r.canvas.transferToImageBitmap(); postMessage({ key: job.key, bitmap, ms: r.ms }, [bitmap]); }
};
onmessage = async ({ data: msg }) => {
  if (msg.type === 'init') {
    try {
      const topo = await (await fetch(msg.url)).json();
      feats = featuresOf(topo);
      postMessage({ ready: true });
      while (queue.length) run(queue.shift());
    } catch (err) { postMessage({ failed: String(err) }); }
    return;
  }
  if (!feats) queue.push(msg); else run(msg);
};
