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
- `assets/css/site.css` — the whole design system: tokens (dark default, light via `data-theme`,
  `data-tone="dark"` forces dark inside light pages), nav + phone tab bar, home, subject, labs.
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

## Scroll chapters (History plan: `../Meridian History 설계 계획서.md`; Geography plan: `docs/`)
- `history/kq6.html` — KQ6 chapter: 33 scenes over one globe. `assets/js/chapter.js` loads the data file named by
  `<body data-chapter="history/kq6">` (→ `assets/js/data/history/kq6.js`) and turns scroll into globe progress p and
  hold progress u (a scene holds while its panel is on the reading line, u runs 0–1 through the hold; the camera flies
  in the gaps). Page setup lives in the data file: `axis` (ribbon dates), `hero.camera`, `world` (layer, data file and
  relief, paths from the site root) and `partLeads`; the pill's hero text is whatever the page's HTML says. `assets/css/chapter.css` is the type system ported from emotion-agency.com
  (light serif capitals with an italic lead word, Plex Mono capitals, violet pill tags, glass pill navigator).
- `history/kq6-paper2.html` + `assets/js/paper2.js` — Paper 2 room from `kq6-paper2.js` (sources on paper cards).
  Each hub links its chapters through `CHAPTERS[subject]` in `tools/pages.py`.
- `src/world/index.js` → `assets/js/world.js` (`npm run world`). `engine.js` is the subject-neutral core: per scene a
  2048 world texture plus a sharp detail texture around the camera target (painted in a projection centred on the target,
  so close-ups across ±180° work), cross-faded in the shader; relief; camera flights; arrows, generic lines and DOM
  labels. It renders on demand and never paints in the frame loop: a missing state borrows the nearest painted one and is
  painted once scrolling settles (`prefetch(i)` queues neighbours; `prepare(i)` paints now, used before a menu jump).
  Layers paint into the textures and can claim line kinds: `history.js` holds the dated CShapes states and border
  lines, the iron curtain (real FRG/AUT vs GDR/CSK/HUN borders, via topojson mesh), `city: 'berlin'` (1945 sectors, West
  Berlin, border strip) and `kind: 'wall'` (the real 1989 route). A scene without `map.borders` shows land only.
- `chapter.css` colours come from accent tokens on `.chapter` (`--acc`, `--acc-rgb`, `--acc-deep` …); a subject
  overrides them on `.chapter[data-subject=…]`. `npm run lint` (`tools/lint-chapters.mjs`) checks every chapter file:
  fields, dates inside the axis, cameras, syllabus tags, and that every fact, chart and cascade item cites a source.
- `tools/build-maps.mjs` (`npm run maps`) → `assets/data/borders.json`. Inputs go in `tools/.cache/` (gitignored):
  CShapes 2.0 (`icr.ethz.ch/data/cshapes/CShapes-2.0.geojson`, CC BY-NC-SA 4.0), and from `gdi.berlin.de` the WFS
  layers `berlinermauer:a_grenzmauer|b_hinterlandmauer|d_grenzstreifen` and `alkis_ortsteile:ortsteile`
  (both Datenlizenz Deutschland Zero 2.0). It keeps only state versions valid on a scene date of some
  `assets/js/data/history/kq*.js`, so rerun it after adding a chapter. Relief: Natural Earth SR_50M via `sips`.

## Measured facts
- History chapter (2026-10-23): borders.json 414 KB (315 state versions, Europe detailed, rest coarse, Berlin layers);
  relief 174 + 366 KB; world.js 600 KB (157 KB gzipped). Painting one scene's textures takes 55–120 ms on the dev Mac
  (Berlin about 265 ms), so neighbours are painted in idle time while the reader reads. Checked in the preview at desktop
  and 375 px.
- Engine split (2026-10-23, headless Chromium with SwiftShader, so relative numbers only): 20 fixed KQ6 views at desktop,
  375 px and reduced motion match the old engine to 0.00–0.15 % of pixels (label text shifts by a sub-pixel; the hero
  differs only by its drift; dashes no longer move under reduced motion). A menu jump from scene 1 to 31 cut main-thread
  stalls from 580 ms (worst 323) to 190–260 ms (worst 105–147: the destination is painted before the flight). A
  Chukotka close-up is sharp on both sides of 180°. No console errors on any page, with or without reduced motion.
- Globe bundle 595 KB, 163 KB gzipped; 5,748 land dots from Natural Earth 110m.
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
- **What the cloud sandbox can reach** (tested 2026-10-23): `git clone` of public GitHub repos, raw.githubusercontent.com,
  npm, PyPI and public AWS S3 / Google Cloud buckets (Natural Earth, terrain tiles, Sentinel-2, Maxar Open Data, GOES).
  Agency hosts (USGS, NOAA NCEI, Smithsonian, Zenodo, Cambridge, Wikimedia) are blocked. In a blobless partial clone,
  `git ls-tree -l` fetches every blob (2.8 GB for natural-earth-raster).
- **Jumping to a scene in the preview**: the browser restores the old scroll after reload and Lenis animates slowly in a
  hidden pane. Use `(await import('../assets/js/core.js')).lenis.scrollTo(y, { immediate: true })`, then nudge the wheel.
- Mono labels are upper-case; wrap "c." in `<span class="lc">` so "c.1989" stays lower-case.
- **The world engine renders on demand.** Anything that changes the picture outside `setProgress` must set `dirty`
  (a layer that moves by itself sets `animating`). Labels are projected before `render()`, so `placeCamera` updates
  the camera matrix itself; without that, labels lag one frame and stay wrong once rendering stops.

## Not done
- Deployed 2026-10-22 with GitHub Pages from `main` (root): https://ukusliam-oss.github.io/meridian/
  The repo is public. Every push to `main` redeploys the live site.
- No automated tests beyond `npm run lint`; other checks were manual in the preview pane or headless Chromium.
- Engine work left from the Geography plan's phase 0: share one three.js chunk between `globe.js` and `world.js`
  (esbuild splitting), generate chapter page shells from `tools/pages.py` (kq6.html is still hand-written), and per-scene
  map alt text, legends and static fallback images. GPU point and line layers (earthquakes, plates) come with Geography.
- Geography chapters: none yet. Research and build plan (2026-10-23, in Korean): `docs/Geography 스크롤 챕터 설계 리서치.md`,
  notes in `docs/research/geography/`. First chapter: Topic 4 Tectonic hazards. Cambridge PDFs were unreachable from the
  research sandbox, so its syllabus and mark-scheme wording is from search extracts and must be checked against the originals.
  Materials for that chapter (2026-10-23, in Korean): `docs/Tectonic hazards 챕터 자료 수집.md`, notes in
  `docs/research/tectonics/`: per-scene facts, the specimen Q1 structure (1·1·2·2·4·3·5·7, (c) marked with Table A), a
  data and image manifest with what is reachable here and five downloads that must come from outside the firewall.
  Every figure came from search snippets, not opened pages, so each needs checking before it goes live.
- History chapters: only KQ6 exists (status draft, not yet teacher-reviewed). West Staaken is drawn inside the British
  sector (it was GDR-run from 1951). Scenes have no field yet for the plan's "exam link" layer.
