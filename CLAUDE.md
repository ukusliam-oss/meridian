# Meridian

A motion-heavy revision site for the I&S prefect: Cambridge IGCSE History 0470, Economics 0455 and
Geography 0460 for the 2027 exams. A calmer sibling built in a parallel session lives in `../is-desk`
(its CLAUDE.md lists the syllabus facts both sites rely on). Constraints shared with it: the school
is in mainland China, so nothing loads from a CDN (fonts and libraries are vendored); nothing needs
an account or typed input; ask before deploying.

Plain HTML/CSS/JS, no runtime framework. Preview: the `meridian` entry in `../.claude/launch.json`
(python http.server on :5183).

```
npm run build          # bake land dots + bundle the three.js globe → assets/js/globe.js
python3 tools/pages.py # regenerate index/history/economics/geography.html from one shell
```

## Map
- `assets/css/site.css` — the whole design system, shared by hubs and chapters: tokens (dark default, light via
  `data-theme`, `data-tone="dark"` forces dark inside light pages), nav + phone tab bar, home, subject, labs.
  One type system everywhere: `.display/.h1/.h2` are light serif capitals whose `<em>` lead phrase sits on its own
  line in italic and the subject colour; `.mono`/`.eyebrow`/`.tag` are Plex Mono capitals; Inter for reading.
  The nav bar, tab bar and sub-nav are grey glass; the chapter pill and scene menu are violet glass (`--brand`, the
  pill with `glass.js`'s pointer-lit `.stroke-border` rim); `--accent`/`--accent-deep` is the subject colour for
  content. Reading floor: labels 12px (`--fs-label`), notes 13px, nothing below 11px; small accent
  labels on light paper use `--accent-deep` for 4.5:1.
- `assets/js/core.js` — motion core: Lenis on GSAP's ticker, reveals, SplitText headlines,
  counters (`data-count`), magnetic buttons, nav tone, theme toggle (view-transition circle),
  sub-nav scroll spy, `store` (localStorage, try/catch).
- `assets/js/ui.js` — exam anatomy, Paper 2 topic finder, topic map, examples tracker, technique
  blocks, command words, flashcards, quiz.
- `assets/js/data/*.js` — all content. `subject.js` renders a page from one of these.
- `assets/js/practice.js` — written practice: one set of exam-style structured questions at a time,
  a mark-scheme reveal per part, a Level 2 and a stronger example answer side by side for the long
  part, data tables, a year-scaled line chart and a labelled S&D diagram. It injects
  `assets/css/practice.css` itself. Content: `assets/js/data/practice-{history,economics,geography}.js`
  (8, 7 and 6 sets). `subject.js` mounts it after Exam technique as "Practice" in the sub-nav.
  Nothing is typed or saved.
- `assets/js/labs/` — `timeline.js` (History), `supply-demand.js` (Economics), `dtm.js` (Geography).
- `assets/js/visuals.js` — subject hero art: year ribbon, live S&D, canvas contour map.
- `src/globe.js` → `assets/js/globe.js` — the home globe (three 0.186, custom shaders), driven by
  `setProgress(f)`: 0 hero, 1 History, 2 Economics, 3 Geography.

## History scroll chapters (plan: `../Meridian History 설계 계획서.md`)
- `history/kq6.html` — KQ6 chapter: 33 scenes over one globe. `assets/js/chapter.js` renders the scenes from
  `assets/js/data/history/kq6.js` and turns scroll into globe progress (a scene holds while its panel is on the reading
  line; the camera flies in the gaps). `assets/css/chapter.css` adds the globe layer, scene panels, pill navigator and
  scene menu on top of site.css's type system (`--acc` = `--accent`; History chapters and their hub cards are violet
  `--brand`, the History hub itself amber). The pill's orb is a glass ball in a progress ring: a lit arc with a
  glowing head follows the scroll, dots mark where each part starts.
- `history/kq6-paper2.html` + `assets/js/paper2.js` — Paper 2 room from `kq6-paper2.js` (sources on paper cards).
  The History hub links both through `CHAPTERS` in `tools/pages.py`.
- `src/world/engine.js` → `assets/js/world.js` (`npm run world`). Per scene: a 2048 world texture plus a sharp detail
  texture around the camera target, cross-faded in the shader; relief from `assets/data/relief-{world,europe}.jpg`;
  borders, arrows, the iron curtain (real FRG/AUT vs GDR/CSK/HUN borders, via topojson mesh) and the Wall as tubes.
  `city: 'berlin'` paints the 1945 sectors, West Berlin and the border strip; `kind: 'wall'` draws the real 1989 route.
- `tools/build-maps.mjs` (`npm run maps`) → `assets/data/borders.json`. Inputs go in `tools/.cache/` (gitignored):
  CShapes 2.0 (`icr.ethz.ch/data/cshapes/CShapes-2.0.geojson`, CC BY-NC-SA 4.0), and from `gdi.berlin.de` the WFS
  layers `berlinermauer:a_grenzmauer|b_hinterlandmauer|d_grenzstreifen` and `alkis_ortsteile:ortsteile`
  (both Datenlizenz Deutschland Zero 2.0). It keeps only state versions valid on a scene date of some
  `assets/js/data/history/kq*.js`, so rerun it after adding a chapter. Relief: Natural Earth SR_50M via `sips`.

## Economics scroll chapter (Topic 4.1–4.4, draft)
- `economics/macro-policy.html` reuses `chapter.js`: `<body data-chapter>` names the data file
  (`assets/js/data/economics/macro-policy.js`, 41 scenes, status draft); anything a chapter leaves out falls back to KQ6's
  values. Linked from the Economics hub through `ECON_CHAPTERS` in `tools/pages.py`. Case notes and URLs:
  `../Meridian Economics research notes.md` (outside the repo).
- Scene maps can colour countries by an indicator (`map.data`), raise needles (`map.spikes`), step through years in one
  panel (`years: [...]`, all engine scenes of a panel share `panel` and every texture), and show focus outlines with live
  value labels. Panels add line charts (`chart.series` items may be `{ label, ind, iso, from, to }`, read from econ.json),
  chains (`chain.steps`, `chain.globe` = the step that sends the map's flows), `evaluation`, `judgement`, `compare`, `cascade`.
- Toolkit adds `definitions` and `practiceSets` (rendered by `practice.js` with the schemes of `practice-economics.js`).
- Policy lab: `assets/js/policy-lab.js` + `assets/css/policy-lab.css` read `data/economics/policy-lab.js`; mounted in
  `#lab` when the chapter names `lab`. Classes are `plab__*` because site.css already owns `.lab`.
- `economics/engine-test.html` (unlinked, noindex) runs `engine-test.js`, one scene per engine feature.
- `tools/build-econ.mjs` → `countries-modern.json` (Natural Earth 50m, ISO3 keys, IMF names shortened for labels) and
  `econ.json` (IMF WEO October 2026, BIS policy rates, OWID Gini and CO₂). Axes are stored as ranges:
  `years: [first, last]`, `months: ['YYYY-MM', 'YYYY-MM']`.
- Checks before committing: `node tools/check-econ.mjs` (fields, sources, indicators and ISO3 codes, syllabus coverage,
  no em dashes; it also runs `tools/check-lab.mjs`, which checks every model effect against the direction table).

## World engine
- `src/world/engine.js` → `assets/js/world.js`, `src/world/paint-worker.js` → `assets/js/world-paint.js` (`npm run world`
  builds both); `src/world/paint.js` is shared. Painting runs in the worker (OffscreenCanvas), else in idle time.
  Textures are stored bottom-up and uploaded with flipY off.
- Data maps are coloured in the shader: an id texture (country index + 1, scanline-filled, no antialiasing) and a float
  value texture (one row per engine scene). Four taps are coloured then filtered, so borders stay smooth. Years in one
  panel blend the values themselves. KQ6's painted fills are unchanged.
- A frame is drawn only when progress, size, a texture or a dashed line can change. `world.stats` holds paint times and
  frame CPU; `window.__meridianWorld` exposes it in the preview. `prepare(i)` paints and builds overlays in idle time.
- `chapter.js` keys its ticker on the scroll position, not the scene index (a held panel keeps the same index while its
  years, chain steps and chart move).

## Measured facts
- History chapter (2026-10-23): borders.json 414 KB (315 state versions, Europe detailed, rest coarse, Berlin layers);
  relief 174 + 366 KB; world.js 582 KB. Painting one scene's textures takes 55–120 ms on the dev Mac (Berlin about
  265 ms), so neighbours are painted in idle time while the reader reads. Checked in the preview at desktop and 375 px.
- Globe bundle 595 KB, 163 KB gzipped; 5,748 land dots from Natural Earth 110m.
- Engine (2026-10-23, dev Mac, preview): id rasters 17–59 ms and Economics paints 160–207 ms, all in the worker; KQ6
  paints 9–19 ms in the worker. A scripted scroll through the engine test drew 202 frames at 0.88 ms CPU on average
  (worst 16 ms) and skipped 73 unchanged frames. The preview pane throttles rAF, so fps itself was not measured.
- Vendored: GSAP 3.15 (+ScrollTrigger, SplitText, Flip, DrawSVG, CustomEase), Lenis 1.3.27,
  Inter (48 KB) and Instrument Serif (2 × 21 KB).
- Checked in the preview on 2026-10-22: home lenses, all three labs and every mode, flashcards,
  quiz, light theme, 375 px phone layout (no horizontal scroll). No console errors.
- Where practice marks come from (checked 2026-10-22; each data file's `source` shows it on the
  page): History P1 4/6/10 and the (b)/(c) levels are from the published 0470/11 June 2025 mark
  scheme, because the 2027–28 syllabus states only parts (a), (b), (c). Economics follows the 2027
  specimen Paper 2 mark scheme v3 (Section B 2/4/6/8, point-marked (a)–(c), Table A for (d)).
  Geography follows the 2027 specimen P1/P2 mark schemes: Questions 2–4 run 1·2·3·4·3·5·7, 5-mark
  items keep 1 mark for evaluation, and the 7-mark (c) uses Table B (named example). The syllabus
  gives no per-part marks. Geography case-study figures in example answers are flagged on the
  page as not checked against official documents.

## Traps
- **Map colours stay the engine's own**: KQ6's focus fills, halos and marker glows are violet (`PALETTE.focus`
  `#a084ee`), not History amber. A chapter can name `accent` (Economics does); the engine sends it to the paint
  worker in its `init` message.
- **The preview pane throttles requestAnimationFrame** while nothing drives it, so the globe can
  look dim or mid-zoom in screenshots. Run a short rAF loop in the page before screenshotting.
- **Module cache**: python's http.server lets the browser cache JS modules; a `?v=` on the page
  does not refresh them. `fetch(url, { cache: 'reload' })` each changed module, then reload.
- `data-count` is global: core.js animates every element with it. Use another attribute for
  labels that only look like numbers (the timeline uses `data-pos`).
- Globe progress is read from the ticker each frame, not from ScrollTrigger `onUpdate` — that
  callback is skipped when a jump lands outside the trigger range.
- `[hidden]` needs `display: none !important`, or `.btn`'s display shows hidden buttons.
- **Lenis undoes `window.scrollTo`** in the preview. To reach a section, click its sub-nav link
  and wheel-scroll, or clone the node into a fixed overlay for a screenshot.

- **Polygon winding**: d3 fills a counter-clockwise ring as "the whole world except this". CShapes and the Berlin WFS
  use GeoJSON order, so the build rewinds and the engine checks again (`upright`); a flooded one-colour globe means this.
- **Downloads from here are slow** (ETH ran at about 20 KB/s). Keep the inputs in `tools/.cache/` and rebuild offline.
- **Jumping to a scene in the preview**: the browser restores the old scroll after reload and Lenis animates slowly in a
  hidden pane. Use `(await import('../assets/js/core.js')).lenis.scrollTo(y, { immediate: true })`, then nudge the wheel.
- Mono labels are upper-case; wrap "c." in `<span class="lc">` so "c.1989" stays lower-case.

## Not done
- Deployed 2026-10-22 with GitHub Pages from `main` (root): https://ukusliam-oss.github.io/meridian/
  The repo is public. Every push to `main` redeploys the live site.
- No automated browser tests; the data checks are `tools/check-econ.mjs` and `tools/check-lab.mjs`.
- Economics: the chapter and the lab are drafts, not yet reviewed by an Economics teacher. The Section A data room
  (`economics/data-room.html`) from the plan is not built. Nothing of the Economics chapter is deployed yet.
- History chapters: only KQ6 exists (status draft, not yet teacher-reviewed). West Staaken is drawn inside the British
  sector (it was GDR-run from 1951). Scenes have no field yet for the plan's "exam link" layer.
