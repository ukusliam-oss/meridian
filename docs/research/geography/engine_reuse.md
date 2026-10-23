# Reusing the History scroll-chapter engine for an IGCSE Geography chapter

Scope: what in Meridian's History chapter engine (`src/world/engine.js` → `assets/js/world.js`, `assets/js/chapter.js`,
`assets/css/chapter.css`, `tools/build-maps.mjs`, `assets/js/paper2.js`, `tools/pages.py`) can be reused as-is, what is
History-specific, what must be generalised, and how to add Geography layers within the performance budget.
Method: read every file listed (line numbers below are from the repo at commit `adcb116`, 2026-10-23); rebuilt the
bundles with `npm ci` in a scratch copy; benchmarked the engine's own canvas paint code in Node with `@napi-rs/canvas`
(Skia, CPU raster, 4-core Linux sandbox; scripts in
`/tmp/claude-0/-home-user-meridian/307a9112-9d66-5ee5-94ce-4faaf7e89f46/scratchpad/bench/`); checked three.js 0.186.1
source in `node_modules`; web sources for browser/GPU limits. No tracked file in the repo was changed.

Calibration caveat for every timing below: Node/Skia is not a browser. The same History scenes paint in 41–84 ms in Node
(Berlin 58 ms) against 55–120 ms (Berlin about 265 ms) measured on the dev Mac per `CLAUDE.md`. So browser figures are
roughly 1.3–1.5× the Node figures for ordinary scenes. Berlin is the outlier at about 4.5×, probably because the Mac figure
also includes building the Wall tubes, but that is not confirmed. Use the Node numbers to compare layers with each other,
not as absolute browser timings.

## 1. How engine.js works end to end, and its public API

### Takeaway
`engine.js` is a small, mostly generic "one globe, N camera states" engine. The core is reusable as it is: great-circle
camera flights with log-altitude zoom, a two-state cross-fade of a per-scene world texture plus a per-scene sharp detail
texture, an idle-time paint cache, DOM labels, arrow and tube overlays with draw-on shaders, and a fallback when WebGL
fails. The History-specific parts are in the data decoding, `paintTexture`, `overlayFor` and the colour constants. The
API is just `createWorld(host, opts) → { setProgress(p), prepare(i), destroy() }`.

### Cited Findings
**Geometry and shaders**
- The globe is one `SphereGeometry(1, 160, 120)` with a custom `ShaderMaterial`, rotated `-π/2` so that equirectangular
  u=0 sits at lon −180. There is a back-face additive "air" shell at r=1.06 and 1,800 star points at r=30–60 for depth
  cues — [src/world/engine.js:279-296](src/world/engine.js).
- `ll(lat, lon, r)` maps to `x = cos φ sin λ, y = sin φ, z = cos φ cos λ`. It is exported and shared by every layer —
  [engine.js:23-26](src/world/engine.js).
- Fragment shader `earthFrag` ([engine.js:46-75](src/world/engine.js)):
  - Uniforms are `uGA, uDA, uGB, uDB` (world and detail textures for states A and B), `uBoxA, uBoxB` (lon/lat boxes of the
    detail textures), `uRelW, uRelE, uRelBox` (relief), `uMix`, `uLight`, `uOcean`, `uOceanLift` and `uRim`.
  - `state(g, d, box)` samples the world texture. If the fragment's lon/lat falls inside the box, it mixes in the detail
    texture with a 5 % edge feather (`smoothstep(0.0, 0.05, e)`).
  - Land colour is `mix(state(A), state(B), uMix)`. Land alpha decides land against ocean. Lighting is
    `0.42 + 0.58·smoothstep(...)`. Relief is used only as a shading multiplier,
    `clamp(0.2 + 0.93·relief, 0.48, 1.24)`, and is not displaced.
  - The ocean is a flat two-colour gradient by `n.y`, so there is no bathymetry. A Fresnel rim is added on top.
- Each frame samples six textures per fragment: four state textures and two relief textures —
  [engine.js:47](src/world/engine.js).

**World texture plus detail texture**
- `GW = 2048`. `DW = 1536` on phones (`matchMedia('(max-width: 760px)')`) and 3072 on everything else —
  [engine.js:227,242](src/world/engine.js).
- `texFor(i)` paints two canvases per scene. The first is a 2048×1024 world canvas, with `city: null` so the Berlin layers
  are skipped. The second is a 2:1 detail canvas over a box whose half-height in degrees is
  `clamp(alt/111·0.9 + (alt<300 ? 0.15 : 1.5), 0.25, 32)` and whose width is 4×half. Both canvases are wrapped as
  `CanvasTexture` (sRGB, maximum anisotropy, `LinearFilter`, no mipmaps) — [engine.js:244-257](src/world/engine.js).
- The cache keeps about five scenes. When it grows past 4 it evicts one entry more than 2 scenes away and disposes its
  textures — [engine.js:243,259](src/world/engine.js).
- Resolution implied by these formulas (my arithmetic):
  - Berlin at alt 90 km gives a 3.5°×1.76° box, about 77 m per pixel at 3072 px.
  - Alt 1,500 km gives a box about 55° wide, about 1.35 km per pixel at 47°N.
  - At alt ≥ 3,389 km the box is capped at 128°.
  - The world texture is about 19.6 km per pixel at the equator.

**Painting** (`paintTexture`, [engine.js:105-152](src/world/engine.js))
- It builds a d3-geo `geoEquirectangular` projection scaled to the box (`precision(0.1)`) and draws with
  `geoPath(proj, ctx)`.
- Fill order:
  1. Natural Earth land in `PALETTE.land`.
  2. Each CShapes state whose key appears in `s.map.fill`, in its bloc colour.
  3. When `city === 'berlin'`: the four 1945 sectors (before 1949-10-07) or West Berlin, the border strip after
     `WALL_UP`, and sector outlines.
  4. Otherwise, on detail textures only, a blurred 30 % violet halo (`ctx.filter = blur(...)`,
     `globalCompositeOperation = 'lighter'`) over the `focus` states.
  5. Optional hand-drawn `areas` polygons.
- Polygon winding is fixed twice: `upright` at load ([engine.js:97-103](src/world/engine.js)) and `ringFix` for areas
  ([engine.js:95](src/world/engine.js)). This is the "polygon winding" trap in `CLAUDE.md`.

**Relief**
- One world relief image and one regional relief image (Europe, box `[-15, 30, 65, 75]`) are loaded with `TextureLoader`.
  A 1×1 grey `DataTexture` stands in until they arrive — [engine.js:264-278](src/world/engine.js);
  [assets/js/chapter.js:199](assets/js/chapter.js).
- The files are greyscale JPEGs: `relief-world.jpg` is 2048×1024 (174 KB) and `relief-europe.jpg` is 2400×1350 (366 KB),
  measured with `file`. Europe works out at about 3.7 km per pixel at the equator, about 2.4 km per pixel at 50°N.

**Borders, arrows, tubes**
- Dated borders: `bordersFor(date)` builds one `LineSegments` (1-px `LineBasicMaterial`) from all rings of the states
  valid on that date, and caches it per date. In each frame A's set fades out while B's fades in at opacity 0.28, dimmed
  to 0.4× in city scenes — [engine.js:299-310, 453-456](src/world/engine.js).
- `lineGeometry` skips segments that jump more than 180° in longitude, which handles the antimeridian —
  [engine.js:154-163](src/world/engine.js).
- Arrows (`arrowMesh`):
  - 49 points along a great circle (`geoInterpolate`), raised by `sin(πt)·clamp(angle·0.22, …, 0.07)`.
  - A `TubeGeometry(curve, 96, radius, 6)` whose radius scales with camera altitude, plus a `ConeGeometry` head aligned to
    the end tangent — [engine.js:183-199](src/world/engine.js).
- Tube shader: the fragment discards `vUv.x > uDraw` (draw-on), has an optional moving dash (`uDash`, `uTime`) and a bright
  head. It uses additive blending with `depthWrite: false` — [engine.js:83-92, 178-181](src/world/engine.js).
- Iron curtain: built from the real CShapes topology with
  `topojson.mesh(data, cshapes, (a,b) => FRG|AUT on one side, GDR|CSK|HUN on the other)`, filtered to states valid on the
  scene date. Each line becomes a dashed tube — [engine.js:330-346](src/world/engine.js).
- Wall: one merged tube mesh each for the front and rear walls from the Geoportal lines (`wallMesh`). It is drawn dashed
  ("broken") after `WALL_DOWN` — [engine.js:202-215, 320-328](src/world/engine.js).
- Any other `lines` entry becomes a Catmull-Rom tube through hand-placed points (`pathPoints`, great circles sampled every
  0.002 rad) — [engine.js:166-176, 347-353](src/world/engine.js).
- Overlays are built lazily per scene (`overlayFor`) and never disposed. `setOverlay` staggers the draw-on of the arrows
  (`draw·1.25 − k·0.12`) — [engine.js:313-372](src/world/engine.js).

**Markers**
- DOM elements in `.world__labels` with `el.innerHTML = <i></i><span>${m.label}</span>`. The label is not escaped.
- Each frame every marker is projected to screen. It is hidden when facing away or off-screen, and the markers fade in one
  after another (`o·1.8 − k·0.14`). They flip left near the right edge using a width measured once and cached
  (`m.w`) — [engine.js:374-385, 422-434](src/world/engine.js).

**Camera** (`placeCamera(a, b, t)`, [engine.js:390-405](src/world/engine.js))
- Direction: slerp of the two target directions.
- Altitude: geometric interpolation `exp(lerp(log altA, log altB))`, times a "lift" of
  `1 + min(2.2, travelKm / max(altA, altB, 400)·0.35)·sin(πt)` so long flights rise. Portrait screens (`W/H < 0.8`) get
  1.7× the altitude.
- Tilt towards the horizon of up to 24° below 2,500 km. The look-at target blends from the globe centre (above 6,000 km)
  to the ground point. Near and far planes scale with altitude (`near = max(2e-6, (d−1)·0.15)`).
- There is no per-scene heading or tilt: the view is always north-up.
- `resize` uses `setViewOffset` to push the subject 20 % to the right of the text panel on wide screens and 18 % upwards on
  narrow ones. Pixel ratio is capped at 1.5 on phones and 1.75 elsewhere — [engine.js:407-416](src/world/engine.js).

**Frame loop** ([engine.js:435-469](src/world/engine.js))
- The progress `p` is split into `i = floor(p)`, `f` and `j = i+1`.
- Timing: the camera uses `ease(smooth(0.08, 0.92, f))`, the textures mix over `smooth(0.35, 0.65, f)`, overlay A fades
  out over 0.05–0.4 and overlay B draws in over 0.55–1.0.
- Under reduced motion the camera and the mix snap at f = 0.5 and arrows appear fully drawn.
- `texFor(i)` and `texFor(j)` are called synchronously inside the frame.
- It renders every animation frame while the page is visible: `IntersectionObserver` and `visibilitychange` gate it, but
  nothing checks whether anything changed. The hero drifts by `sin(time·0.06)·12°`.

**WebGL failure, and the public API**
- `new WebGLRenderer(...)` is wrapped in `try/catch`. On failure the canvas is removed and `createWorld` returns `null`.
  `chapter.js` then adds `.no-webgl` and the page stays a complete text chapter —
  [engine.js:222-225](src/world/engine.js); [chapter.js:197-205](assets/js/chapter.js).
- three 0.186 throws `'WebGL 1 is not supported since r163'` for a WebGL1 context, and throws again if `webgl2` cannot be
  created, so any device without WebGL2 takes this fallback —
  [three r186 WebGLRenderer.js:61,102,409-422](https://github.com/mrdoob/three.js/blob/r186/src/renderers/WebGLRenderer.js);
  [three.js Migration Guide](https://github.com/mrdoob/three.js/wiki/Migration-Guide).
- The public API is `createWorld(host, { scenes, hero, data, relief, reduced, onFrame })` returning
  `{ setProgress(p), prepare(i), destroy() }`, plus the exports `ll` and `PALETTE`. `chapter.js` uses only
  `createWorld`, `setProgress` and `prepare`. `onFrame` and `destroy` are unused, and `destroy` does not remove the label
  DOM or the `visibilitychange` listener — [engine.js:218, 478-482](src/world/engine.js);
  [chapter.js:171,195-212](assets/js/chapter.js).

**Bundle**
- `world.js` is 596,239 bytes (582 KiB), 155,407 bytes gzipped. Of the minified bytes, three accounts for 556 KB,
  d3-geo 21 KB, topojson-client 3 KB and engine code 15 KB. These figures come from an esbuild metafile of a rebuild that is
  byte-identical to the committed file — scratchpad rebuild (`npm run world` with `--metafile`).
- The home bundle `globe.js` (163.5 KB gzipped) carries its own copy of three. With
  `esbuild --splitting --format=esm` on both entry points, one shared chunk comes out at 540 KB (138 KB gzipped), globe at
  26 KB gzipped and engine at 17 KB gzipped. A visitor who sees both pages would download 181 KB gzipped instead of
  319 KB — scratchpad experiment.

### Inferences
**Reusable unchanged:**
- `ll`, `placeCamera`, `resize`/view offset, the frame/visibility gating, the A/B state cross-fade and the shader's
  `state()` box blend.
- The cache and `prepare()` idle-paint protocol.
- `arrowMesh`, `tubeMaterial` (draw-on and dash), `pathPoints`, `lineGeometry`.
- DOM markers and the `null` WebGL fallback.

**History-specific:**
- `PALETTE`, `SECTORS`, `ARROW`, `LINE`, `WALL_UP`/`WALL_DOWN` ([engine.js:30-36](src/world/engine.js)).
- The CShapes decode and `at(date)` ([engine.js:232-238](src/world/engine.js)).
- The Berlin branch and the focus halo in `paintTexture`.
- The `iron-curtain` and `wall` branches in `overlayFor`.
- The border opacity and city dimming in `frame`.
- Relief hard-wired to "world plus one region".

**Must be generalised** because Geography scenes would break the current code:
- `createWorld` requires `data.objects.cshapes`.
- `texFor` and `frame` call `at(s.map.borders)` and `bordersFor(s.map.borders)`. With no `borders` field,
  `dayNum(undefined)` throws (`undefined.split`).

### Gaps
- I could not run the engine in a real browser here (no Chromium in the sandbox), so the GPU frame cost and the true
  browser paint times were not measured. Timings are Node/Skia CPU only.
- Whether three's context-restore path re-uploads `CanvasTexture`s without help from the app was not tested. three does
  re-run `initGLContext()` on `webglcontextrestored` ([WebGLRenderer.js:1123-1135](https://github.com/mrdoob/three.js/blob/r186/src/renderers/WebGLRenderer.js)).

## 2. How chapter.js maps scroll to scenes and renders the page; the scene schema and its History-specific fields

### Takeaway
`chapter.js` is a thin, readable controller. Its scroll-to-progress model, menu, pill, check buttons, toolkit and source
list are generic. Its hard-coded strings, ribbon range, static data import, bar chart and focus-point logic tie it to KQ6.
The scene schema has 13 required fields and 5 optional ones. Only the `map` block is shared with the engine, and inside it
`borders`, `fill` bloc states, `city: 'berlin'`, line kinds `iron-curtain` and `wall`, and arrow kinds
`military`/`people`/`pressure` are History-only.

### Cited Findings
**Scroll to progress** ([chapter.js:115-141](assets/js/chapter.js))
- `measure()` takes each panel's rectangle. On desktop a scene holds from `top + m` to `bottom − m`, with
  `m = min(0.3·vh, 0.3·panel height)`. On narrow screens (≤900 px) the hold starts at `top − 0.32·vh`, because the panel
  covers the map and the scene must settle while the panel is still entering.
- `progressAt(y)` uses a reading line at `y + 0.5·vh`. Before the first hold, p runs from −1 (hero) to 0. Inside hold k,
  p is exactly k. In the gap between holds p is linear, `k + (c − end_k)/(start_{k+1} − end_k)`.
- `goTo(i)` calls `lenis.scrollTo(holdStart − vh/2 + 4, { duration: 1.6 })`, or native smooth scroll when Lenis is off.
- The GSAP ticker reads `lenis.scroll` (or `scrollY`) every tick and pushes `p` to `world.setProgress` and `updateUI`.
  Heights are re-measured on resize, when fonts load and on a `ResizeObserver` of the scenes container —
  [chapter.js:208-217](assets/js/chapter.js).
- This matches `CLAUDE.md`'s trap that globe progress is read from the ticker, not from ScrollTrigger callbacks.
- Lenis is created only when reduced motion is off, with `lerp 0.105` and `syncTouch: false`, so touch scrolling stays
  native. It runs on GSAP's ticker with `lagSmoothing(0)` — [assets/js/core.js:9,23-28](assets/js/core.js).

**Ribbon, pill and menu** ([chapter.js:99-110, 143-174](assets/js/chapter.js))
- The ribbon's day range is fixed at `T0 = 1945-01-01` and `T1 = 1992-01-01`. It has one tick per scene date (taller on
  part openers). The needle interpolates the date between scenes; the year shows in big type and `dateLabel` beside it.
- The ribbon shows only when `−0.6 < p < N − 0.6`, and `chapter.css` hides it at ≤900 px — [assets/css/chapter.css:229](assets/css/chapter.css).
- The pill shows `part · nn/N` and the `dateLabel`. Its progress ring is an SVG `strokeDashoffset`.
- The hero strings are hard-coded: `'Key question 6'` and `'Eastern Europe, 1948–c.1989'` at
  [chapter.js:166-167](assets/js/chapter.js), and the hero ribbon date `'1948-01-01'` at
  [chapter.js:155](assets/js/chapter.js).
- On every change of nearest scene it marks `aria-current` in the menu, toggles `.is-active` on the section (which drives
  the CSS reveals), and schedules `world.prepare` for `near+1`, `near−1` and `near+2` 0, 120 and 240 ms apart through
  `requestIdleCallback` (timeout 1200) — [chapter.js:168-171,177](assets/js/chapter.js).

**Panels** (`sceneHTML`, [chapter.js:52-81](assets/js/chapter.js))
- A part opener appears on the first scene of each part. It shows "Part n of N", with the italic lead word `'After'`
  hard-coded for the last part (line 56), and lists the part's `FP…` focus points from `data.focusPoints` (line 57).
- Each panel then shows: meta tag and number, `dateLabel`, a title (the italic lead word is the text before `': '` or the
  first word), `body` HTML, optional `chart`, `compare` and `cascade`, "Why it matters", optional `misconception`, optional
  `judgement` (for, against, verdict), a "Check yourself" reveal button, and `<details>` with facts and numbered source
  links.
- `chart()` is KQ6-specific: a bar chart whose bars turn white for `x >= 1962`, annotated "Wall built" —
  [chapter.js:25-41](assets/js/chapter.js).
- The end of the chapter renders `toolkit.summary`, `toolkit.checks` and every entry of `sources` —
  [chapter.js:86-91](assets/js/chapter.js).

**Loading**
- `chapter.js` statically imports `./data/history/kq6.js` (line 6). It streams `../assets/data/borders.json` for the loader
  percentage, with a hard-coded `content-length` fallback of 660000 —
  [chapter.js:183-190](assets/js/chapter.js).
- The hero camera is `{ lat: 47, lon: 24, alt: 15500 }`, using scene 0's map —
  [chapter.js:179](assets/js/chapter.js).

**Scene schema** (measured by importing `kq6.js` in Node; 33 scenes)
- Top-level fields: `id, title, question, status, focusPoints[{id,text}], specified[{id,text}], scenes, sources{key:
  {title, author, publisher, year, url}} (61), toolkit{summary[], checks[{q,a}]}`.
- Scene fields present in all 33: `id, part, date (ISO), dateLabel, camera{lat, lon, alt km}, map, title, body (HTML),
  facts[{text, src}], why, check{q, a}, syllabus[FPn|SCn], sources[]`.
- Optional scene fields: `misconception{wrong, right}` (10), `judgement{for[], against[], verdict}` (6),
  `chart{kind, title, unit, series[[x, v]], note, src}` (1), `compare{left, right, rows[{k, l, r}]}` (1),
  `cascade[{country, when, how, src}]` (1).
- `map` fields present in all scenes: `borders (ISO date), fill{STATEKEY: soviet|bloc|west|neutral|focus},
  arrows[{from, to, kind, label}], markers[{at, label}], lines[{kind, points}], city`.
- Usage:
  - Arrow kinds: military 11, pressure 10, people 4.
  - Line kinds: `iron-curtain` 4 and `wall` 4.
  - `city: 'berlin'` in 6 scenes.
  - `areas` is supported by the engine but used 0 times.
  - `arrow.label` is never read by the engine.
  - `scene.sources` and `data.specified` are never read by `chapter.js`; facts carry their own `src`.
- Camera altitudes range from 60 km (Berlin) to 9,000 km (world views).
- The `kq6.js` header says `syllabus` tags "feed the coverage lint", but no lint script exists in `tools/`
  ([kq6.js:3](assets/js/data/history/kq6.js); `grep` of `tools/`).

**HTML shell** (`history/kq6.html`)
- Written by hand, not generated. It duplicates the `pages.py` nav, tab bar and footer, and hard-codes the loader text
  (line 29), "33 scenes across 41 years" (line 38), the Paper 2 link (line 48), the data credits (line 50), the ribbon ends
  1945/1992 (line 53), the pill text (line 56), and `aria-hidden="true"` on the world container (line 33) —
  [history/kq6.html](history/kq6.html).

**CSS accent**
- The chapter type system hard-codes the violet accent as literals: `rgb(182 147 255 / …)` 20 times,
  `rgb(109 63 208 / …)` 3 times, plus `#b693ff`, `#8f6bff`, `#d9c8ff` and `#6d3fd0`. This is separate from the site's
  subject tokens `--hist #f0b45a`, `--econ #46d6a0` and `--geo #5fb0ff` —
  [assets/css/chapter.css:11 and grep counts](assets/css/chapter.css); [assets/css/site.css:27,45-47](assets/css/site.css).
- The engine also has violet built in: `PALETTE.focus #a084ee`, rim `#8f86ff` and the star colour —
  [engine.js:31,266,294](src/world/engine.js).

### Inferences
**Generic as written:**
- The `measure`/`progressAt`/`goTo` model.
- Parts, menu, pill, check toggle, facts and sources, toolkit, and the loader.

**Must become data-driven:**
- The data import: dynamic, chosen by `<body data-chapter="geography/tectonics">`.
- The hero (camera and strings).
- The ribbon axis (range, unit and formatter, or no ribbon).
- The data URL list and loader byte total.
- The relief config.
- The focus-point prefix (Geography would use syllabus codes such as `4.2`, `4.4.3` and the "detailed specific example"
  code).
- The last-part label.
- The chart, which should be replaced by a library of insets.

**Missing for Geography:** a hold-local progress. During a hold p is an exact integer, so nothing can animate "through
time" while the camera holds still: earthquakes over years, a cyclone track growing, a hydrograph lag scrub.
`progressAt` should also return `u = (c − start_k)/(end_k − start_k)` inside a hold, and the engine and insets should take
`setProgress(p, u)`.

**Accent:** move the violet literals to tokens (`--acc-rgb: 182 147 255; rgb(var(--acc-rgb) / .14)`), and set them per
subject from `body[data-subject]`. Whether Geography keeps the violet chapter accent or uses `--geo` blue is a design
choice; the CSS cannot currently make it without a find-and-replace.

### Gaps
- No teacher-facing documentation of the scene schema exists beyond the `kq6.js` header comment. The schema above was
  reverse-engineered.

## 3. What Geography needs, and how each layer should be rendered

### Takeaway
Use three tiers:
1. **Painted into the per-scene canvas (CPU, d3-geo):** static vector context such as land, modern borders, focus fills,
   a few hundred small symbols and regional rivers already simplified at build time.
2. **Global rasters sampled in the shader:** relief, bathymetry, choropleths by ID raster plus a colour lookup table, and
   overlays such as temperature anomaly, forest loss or night lights, stored as one channel and coloured by a ramp.
3. **3D or instanced geometry:** anything numerous, animated through time or needing to stay sharp. This covers
   earthquakes, volcanoes, plate boundaries with motion arrows, cyclone tracks, and big rivers as fat lines.

Labels stay in the DOM. 2D insets are SVG in the panel, driven by the new hold-local progress `u`.

### Cited Findings
Measured layer costs in Node/Skia (best of 3; the canvas sizes are the engine's own):

| Layer (synthetic data unless stated) | World 2048×1024 | Detail 3072×1536 |
|---|---|---|
| History scene as shipped (p1 / h2 / c4 / b4 Berlin / g2) | 18–23 ms | 22 / 30 / 26 / 40 / 63 ms |
| Same, detail without the `ctx.filter` blur halo | – | 21 / 29 / 23 / 43 / 21 ms |
| Geography base (Natural Earth land only) | 13 ms | 11 ms |
| 2,000 quake circles (3 batched fills by depth class) | +23 ms | +16 ms |
| 10,000 quake circles | +57 ms | +66 ms |
| 50,000 quake circles | +326 ms | – |
| Rivers: 4,000 lines × 25 points (100k vertices), 6 width classes | +153 ms | +164 ms |
| Choropleth, 241 countries (world-atlas 50m) | 285 ms | – |
| Choropleth, 177 countries (world-atlas 110m) | 49 ms | – |
| 200 `geoCircle` polygons (for example felt or ash radii) | 42 ms | – |
| Raster overlay `drawImage` (2048 image, alpha 0.7) | 5 ms | 25 ms (crop and scale) |

— scratchpad `bench/bench.mjs`, run against `assets/data/borders.json`, `kq6.js` and `node_modules/world-atlas`.

- The focus halo's `ctx.filter = blur()` is the costliest single step in wide scenes: kq6-g2, with the USSR as focus, takes
  63 ms with the halo and 21 ms without. Safari does not ship `CanvasRenderingContext2D.filter` enabled by default. Can I
  Use lists Safari and iOS 18.0 onward as "disabled by default" and earlier versions as unsupported — [Can I Use: canvas
  filter](https://caniuse.com/mdn-api_canvasrenderingcontext2d_filter);
  [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter). On iPhones, iPads and Mac Safari
  the halo is therefore drawn unblurred as a hard 30 % tint (inference from engine.js:140 plus this support data).
- **ID raster plus lookup-table prototype.** Countries were painted as `rgb(id,0,0)` to an ID image:
  - 110m: 51 ms at 2048×1024, 174 KB as a greyscale PNG, 2 MiB on the GPU as R8.
  - 50m: 564 ms at 4096×2048, 643 KB PNG, 8 MiB R8.
  - Boundary pixels were 7.7–10.9 % of land pixels. Canvas antialiasing blends IDs at edges, so a build step must snap
    edge pixels to a valid neighbour ID.
  - Source: scratchpad `bench/idraster.mjs`, output in `scratchpad/out/`.
- **Fat lines in three r186.**
  - `LineSegmentsGeometry extends InstancedBufferGeometry`, and `instanceCount` defaults to the segment count, so drawing
    only the first k segments (draw-on for a cyclone track) is one integer per frame.
  - `LineMaterial` has `linewidth` in CSS pixels, or in world units when `worldUnits` is true, plus a `worldUnits` uniform,
    dashing and alpha-to-coverage.
  - `Line2` and `LineSegments2` are `Mesh` subclasses.
  - Sources: [LineSegmentsGeometry.js:23,116](https://github.com/mrdoob/three.js/blob/r186/examples/jsm/lines/LineSegmentsGeometry.js);
    [LineMaterial.js:11-12,440,502-544](https://github.com/mrdoob/three.js/blob/r186/examples/jsm/lines/LineMaterial.js);
    [LineSegments2.js:60,251](https://github.com/mrdoob/three.js/blob/r186/examples/jsm/lines/LineSegments2.js) (checked in
    `node_modules/three`, `REVISION = '186'`).
- The engine already uses `Points` with a `ShaderMaterial` that sets `gl_PointSize` (stars), and the home globe does the
  same with per-point attributes (`aRand`) — [engine.js:288-296](src/world/engine.js); [src/globe.js:86,163-173](src/globe.js).
- **WebGL2 limits.**
  - At least 16 fragment texture units on 99.95 % of WebGL2 reports —
    [web3dsurvey MAX_TEXTURE_IMAGE_UNITS](https://web3dsurvey.com/webgl2/parameters/MAX_TEXTURE_IMAGE_UNITS).
  - `MAX_TEXTURE_SIZE` ≥ 4096 on 99.95 %, ≥ 8192 on about 94.5 % overall but only about 59 % on Android, ≥ 16384 on about
    80 % — [web3dsurvey MAX_TEXTURE_SIZE](https://web3dsurvey.com/webgl2/parameters/MAX_TEXTURE_SIZE). These come from a
    search-result summary: the page itself could not be fetched (DNS blocked).
  - No survey data was found for `ALIASED_POINT_SIZE_RANGE`. A Khronos list thread notes the values vary widely between
    devices — [Khronos public_webgl](https://www.khronos.org/webgl/public-mailing-list/public_webgl/1402/msg00016.php).
- **Existing 2D diagram code.**
  - `labs/dtm.js` drives the DTM and population pyramid from one internal `state.t` with a slider and a play button. It has
    no exported setter — [assets/js/labs/dtm.js:22,78-114](assets/js/labs/dtm.js).
  - `practice.js` renders `line` and `table` resources, with a screen-reader-only table behind each line chart —
    [assets/js/practice.js:15-43](assets/js/practice.js).

### Inferences
Recommended implementation per layer:

**Earthquake epicentres** (size by magnitude, colour by depth, thousands of points, animated through time)
- GPU only. Use one `Points` or `InstancedBufferGeometry` with attributes `lat/lon → position`, `mag`, `depth` and `t`.
- The vertex shader hides points with `t > uNow`, runs a short pulse ring when `|t − uNow|` is small, and sizes by
  magnitude in world units (`size·uScale/−mv.z`, the pattern `globe.js` already uses).
- Colour by depth class through a ramp texture that is safe for colour-blind readers, with size as a second encoding.
- CPU paint cost per scene is zero. Painting more than about 2k points into the canvas would break the budget
  (10k adds +57–66 ms, 50k adds +326 ms).
- Very large magnitudes at close range may hit point-size limits. A ground-aligned instanced disc (quad in the tangent
  plane) avoids that and stays geographically honest.

**Volcanoes**
- A few hundred at most. Either paint them as glyphs into the detail texture (cheap), or use an `InstancedMesh` of small
  cones or triangles sized by VEI when they must stand out in 3D. Name labels go in the DOM for the few that matter.

**Plate boundaries by type**
- A `LineSegments2` per type with `worldUnits: false` (pixel width).
- Encode the type by pattern as well as colour: solid for divergent, dashed for transform, and an instanced "teeth"
  triangle strip on the overriding side for subduction.
- Motion arrows are an `InstancedMesh` of chevrons placed along boundaries at build time, with an offset animated in the
  shader by `uTime`, static under reduced motion. The existing `arrowMesh` suits a handful of large narrative arrows
  ("Indian plate moves north").

**Tropical cyclone tracks**
- `LineSegments2` or `Line2` with per-vertex colours by intensity category.
- Draw on through `geometry.instanceCount = k(u)`. The storm position is a moving instanced marker interpolated along the
  track. Wind-radius rings can be `geoCircle` polygons painted into the detail texture (about 0.2 ms each) or a
  shader-drawn ring.

**River networks by stream order**
- Global major rivers (orders ≥ 5 or 6) as `LineSegments2`, grouped into a few width classes, one object per class,
  because `LineMaterial` has a single `linewidth`.
- Regional detail (one basin) is painted into the detail texture from a basin subset simplified at build time, keeping
  well below the 100k-vertex test (153–164 ms). Alternatively, bake per-region river rasters at build time and sample them
  in the shader.

**Bathymetry and relief with vertical exaggeration**
- Bathymetry: a greyscale world raster sampled in `earthFrag` for ocean colour, replacing the flat `uOcean` gradient.
- Relief: replace the single Europe crop with per-scene relief crops (box plus texture per state, exactly like the detail
  texture), loaded lazily.
- True exaggeration needs geometry. Add a local displaced grid mesh (for example 256×256 vertices) over the detail box,
  reading elevation in the vertex shader, used only at low altitude where the 24° tilt shows it. The 160×120 sphere is far
  too coarse for regional displacement.

**Raster overlays** (temperature anomaly, forest loss, night lights)
- Precompute single-channel equirectangular rasters, sample them in the shader with their own box, and colour them with a
  256×1 ramp texture.
- Encode time in the value so the shader can threshold. For example, forest-loss year as 1…N, revealed up to `uYear`, so
  "deforestation spreading" is a uniform change rather than a repaint.
- `drawImage` into the canvas is also affordable (5–25 ms) when the overlay is static.

**Choropleths** (HDI, population growth)
- Either paint them into the world texture from 110m geometry (49 ms; 50m at 285 ms is too slow per scene), or use the ID
  raster plus lookup table: one R8 ID texture with nearest filtering, plus a 256×1 RGBA lookup texture per variable and
  year.
- A year change or a cross-fade (HDI 1990 → 2022) then costs about 0 ms of paint, by mixing two lookup tables.
- At close range, keep painting the vector borders into the detail texture so the jagged ID edges never show.

**Labels and callouts**
- Keep DOM markers. Add a `callout` variant with a leader line, label priority with simple greedy collision, and
  escaping. Budget about 30 visible labels; the cached width measurement already avoids layout thrash.

**2D inset diagrams** (subduction cross-section, river long profile and Bradshaw model, storm hydrograph, climate graph,
population pyramid, DTM)
- SVG components with a common interface `mount(el, spec) → { set(u), destroy() }`, placed in the panel under the body.
- `set(u)` is fed from the hold-local progress, and the inset steps through key states when reduced motion is on.
- Refactor `dtm.js` to export `set(t)` so it can serve both as a lab and as an inset. Add a screen-reader-only data table
  as `practice.js` does.

### Gaps
- No real dataset sizes were measured here (USGS ComCat, PB2002, IBTrACS, HydroRIVERS, ETOPO, Hansen GFC). Those belong
  to the datasets research. The synthetic counts above set the per-layer budget, not the actual data volume.
- GPU frame cost of about 12 texture samples per fragment on low-end Mali or Adreno phones was not measured.

## 4. Performance: costs against the per-scene budget, texture memory, precomputation, targets

### Takeaway
A Geography scene can stay inside the existing 55–120 ms browser paint budget if only static vector context is painted
per scene. A land-only base is cheaper than a History scene, because History also fills its 315 dated state versions.
Everything numerous or animated must be built once on the GPU. The real risks are not paint time but:
- synchronous paints during fast jumps;
- canvas and texture memory on iPads and phones (26 MiB per scene on desktop and tablets);
- continuous rendering on weak laptops.

### Cited Findings
- **Texture memory per cached scene** (RGBA, no mipmaps): desktop and tablet 2048×1024 + 3072×1536 = 26.0 MiB; phone
  2048×1024 + 1536×768 = 12.5 MiB.
- The cache holds up to about 5–6 states (the current ±2 neighbours plus the hero), so about 130–156 MiB desktop and about
  63–75 MiB phone. Each state also keeps its source canvas alive through `CanvasTexture.image`. Sources: arithmetic from
  [engine.js:242-259](src/world/engine.js); bench output.
- The relief JPEGs are greyscale but are uploaded as RGBA by default, about 20 MiB of GPU memory for 2048×1024 plus
  2400×1350 (arithmetic; `TextureLoader` defaults).
- **iOS canvas limits.** iOS and iPadOS Safari enforce a total canvas memory budget. Reported values are 224 MB (iOS 12),
  256 MB (iPad), 288 MB (iPhone X), 384 MB (iOS 15) and 576 MB (an iPad).
  - Past the budget, `getContext` returns `null`.
  - The suggested workaround is shrinking unused canvases to 1×1 so Safari releases them.
  - A separate limit caps a single canvas at 16,777,216 pixels.
  - Sources: [pqina: total canvas memory](https://www.pqina.nl/blog/total-canvas-memory-use-exceeds-the-maximum-limit/);
    [Apple Developer Forums 112218](https://developer.apple.com/forums/thread/112218);
    [WebKit bug 190280](https://bugs.webkit.org/show_bug.cgi?id=190280);
    [WebKit bug 195325](https://bugs.webkit.org/show_bug.cgi?id=195325);
    [pqina: canvas area](https://pqina.nl/blog/canvas-area-exceeds-the-maximum-limit/).
- **The phone test is width-only** (`max-width: 760px`), so iPads get the 3072 detail texture —
  [engine.js:227,242](src/world/engine.js).
- **Paint on a cache miss happens inside the frame.** `frame()` calls `texFor(i)` and `texFor(j)` synchronously —
  [engine.js:447](src/world/engine.js). `goTo` scrolls through all intermediate scenes over 1.6 s —
  [chapter.js:138-141](assets/js/chapter.js). A menu jump from scene 1 to scene 30 therefore paints several uncached
  scenes in the middle of the flight; idle prepare only covers ±2 of the nearest scene.
- **Startup.** Decoding the History topology (`feature()` for 315 states, land and Berlin) takes 91 ms in Node, on the main
  thread at startup, after `JSON.parse` — bench output.
- **Off-thread painting.** OffscreenCanvas with a 2D context is supported in Safari and iOS 16.4 and later (WebGL in a
  worker only from Safari 17) — [Can I Use: OffscreenCanvas 2d](https://caniuse.com/mdn-api_offscreencanvas_getcontext_2d_context);
  [WebKit bug 263010](https://bugs.webkit.org/show_bug.cgi?id=263010).
- For ImageBitmap textures, three skips `UNPACK_FLIP_Y`, so a bitmap painted in a worker must be created flipped
  (`imageOrientation: 'flipY'`) or sampled with flipped v —
  [three r186 WebGLTextures.js:918-926](https://github.com/mrdoob/three.js/blob/r186/src/renderers/webgl/WebGLTextures.js).
- **WebGL2 coverage.** About 97.5 % of web3dsurvey reports (Safari about 94.4 %, Linux about 84.4 %) —
  [web3dsurvey](https://web3dsurvey.com/) (search-result summary; page not fetchable from here).
- **Download weight of the History chapter today:** world.js 155 KB gzipped, borders.json 414 KB raw, relief 174 + 366 KB
  — measured; `CLAUDE.md`.

### Inferences
**Budget targets** (browser, dev Mac):
- At most 60 ms CPU paint per scene, so that a weak school laptop at about 2–3× slower stays under about 180 ms, done only
  in idle time.
- Zero ms of paint for anything animated.
- At most about 12 texture samples per earth fragment.
- At most about 50k points and about 100k fat-line segments live at once.
- Tubes only for a handful of hero lines; a `TubeGeometry` arrow is about 600 vertices plus its cone.

**Never paint in a frame.**
- When `texFor(i)` is a miss during a flight, reuse the nearest cached state (or a half-resolution quick paint), and queue
  the real paint for idle time.
- Optionally move `paintTexture` to a worker with OffscreenCanvas 2D and transfer an ImageBitmap. d3-geo and the
  pre-decoded features would have to live in the worker too, so this is a second step.

**Memory.**
- Use a fixed pool of canvases: 3 states on phones and iPads, 4 on desktop, reusing canvases rather than allocating new
  ones, and shrinking evicted ones to 1×1.
- Choose the detail size from `renderer.capabilities.maxTextureSize`, device memory and pointer type, not width alone.
- Upload relief, bathymetry and ID rasters as single-channel R8 textures.
- Turn on mipmaps for the world texture once fine features (rivers, dots) are painted into it. Without mipmaps they will
  shimmer when the camera zooms out.

**Precompute at build time** (`tools/build-geo.mjs`):
- Simplified, per-region TopoJSON.
- Quantised binary point and track buffers.
- Single-channel rasters (relief and bathymetry crops per scene region, overlays with time encoded in the values, ID
  rasters).
- Plate-arrow placements.
- A static fallback image per scene (WebP, about 1280 px), produced with the same d3-geo paint code under Node canvas.
  This serves both no-WebGL readers and the practice room's map figures; I verified that the engine's paint code runs
  unchanged in Node with `@napi-rs/canvas`.

**Render on demand.**
- Skip `renderer.render` when `p`, `u`, size and every active animation are unchanged.
- Throttle the decorative dash and hero drift (or freeze them under reduced motion). This keeps phones cool and school
  laptops responsive.

**Download.**
- Ship one shared three chunk through esbuild code splitting. This saves about 138 KB gzipped for readers who visit both
  the home page and a chapter.
- Keep each Geography chapter's data at or below about 1 MB, loaded per scene where possible. Slow links from mainland
  China make the first-load size matter more than paint time.

### Gaps
- No device measurements: GPU timings on a 375 px phone, an iPad or a school laptop were not possible in this sandbox.
- Whether GitHub Pages serves `.json` and `.js` gzipped, which affects the real download sizes, was not verified here.

## 5. Refactor proposal: one shared engine for History and Geography; build script; pages.py; the practice room

### Takeaway
Split the engine into a generic core plus layer modules:
- the core: camera, state cross-fade, cache and pool, frame loop, markers;
- History layers: dated CShapes fills, borders, Berlin, iron curtain;
- Geography layers: quakes, plates, tracks, rivers, rasters, choropleth.

Make `chapter.js` read a chapter manifest from the page: subject, accent, ribbon axis, data URLs and hero. Add
`tools/build-geo.mjs` beside `build-maps.mjs` with the same "keep only what the scenes use" logic. Generate chapter pages
and hub cards from `pages.py`. For practice, extend `practice.js`'s resource model rather than `paper2.js`'s text sources.

### Cited Findings
- `build-maps.mjs` keeps only the CShapes state versions valid on some scene's `map.borders`. It finds them by importing
  every `assets/js/data/history/kq\d.js` (regex `^kq\d\.js$`, so only single-digit chapter ids). It keeps more detail
  inside a Europe box (`quantile 0.24`) than elsewhere (`0.025`) and writes one TopoJSON with `cshapes`, `land`,
  `sectors`, `wall` and `strip` (quantisation 3e5) — [tools/build-maps.mjs:49-66, 98-107](tools/build-maps.mjs).
- `borders.json` contains 5,266 arcs and 28,352 points: 315 `cshapes`, 1 `land`, 4 `sectors`, 241 `wall` and 67 `strip`
  geometries (measured).
- `pages.py` writes only `index.html` and the three subject hubs from `shell()`. The paths are root-relative
  (`assets/...`). `CHAPTERS` is one HTML string appended only to the History hero
  (`+ (CHAPTERS if k == 'history' else '')`). The chapter pages under `history/` are written by hand —
  [tools/pages.py:16-65, 183-214](tools/pages.py).
- `paper2.js` renders text-only sources (`s.text[]` paragraphs and `ref.copyright`) beside five level-marked parts. Its
  sticky source column has chips that flash a card — [assets/js/paper2.js:17-57](assets/js/paper2.js).
- Geography 0460 for 2027 has Paper 1 (Physical) and Paper 2 (Human): 75 marks each, structured questions with
  "short-answer items, some based on resources such as maps, photographs and graphs, and an extended response".
  Paper 4 covers geographical investigations — [assets/js/data/geography.js:7-44](assets/js/data/geography.js).
- The site's Geography practice already models parts marked 1·2·3·4·3·5·7, with point-marked (`p`, `data`, `e5`) and
  Table B (`tb`) schemes and `resource.type` of `table` or `line` —
  [assets/js/data/practice-geography.js:1-40](assets/js/data/practice-geography.js);
  [practice.js:42](assets/js/practice.js); `CLAUDE.md` "Measured facts".

### Inferences
**Proposed architecture**

1. **`src/world/core.js`**: the current camera, resize, frame, cache and markers code.
   - `createWorld(host, { scenes, hero, layers, palette, reduced })` → `{ setProgress(p, u), prepare(i), destroy() }`.
   - Each layer is an object with optional hooks:
     - `load()` (async data);
     - `paint(ctx, path, scene, box, isDetail)` (CPU canvas);
     - `build(scene, i)` → `Object3D` (per-scene overlays);
     - `global()` → `Object3D` (shared GPU layers);
     - `uniforms` plus a GLSL chunk, compiled with `#define HAS_…` so History pays nothing;
     - `update(sceneA, sceneB, f, u, time)`;
     - `dispose()`.
   - The core gives the earth shader optional slots: bathymetry, overlay A and B with ramp, ID plus lookup tables A and B,
     and relief per state. It wraps longitude differences in `state()` and paints detail with
     `geoEquirectangular().rotate([−lon0, 0])` so detail boxes can cross the antimeridian (see Q6).
2. **`src/world/history.js`**: `datedStates(data)` (paint fills, border line sets), `berlin(data)` and
   `ironCurtain(data)`. It contains the current History constants. Bundle entry: `npm run world` →
   `assets/js/world-history.js`. Alternatively, one splitting build that outputs `chunks/three-*.js`, `world/core`,
   `world/history` and `world/geography`.
3. **`src/world/geography.js`**:
   - `modernBase` (Natural Earth admin-0, optional `fill`);
   - `quakes` (Points, `uNow`);
   - `volcanoes`;
   - `plates` (`LineSegments2` by type, teeth, instanced chevrons);
   - `tracks` (`Line2`, `instanceCount` draw-on, storm marker);
   - `rivers` (fat lines for big rivers, painted regional rivers);
   - `raster` (ramp and time threshold);
   - `choropleth` (ID plus lookup table);
   - `terrain` (local displaced patch, exaggeration per scene).
4. **Scene schema v2.** History data stays valid; new fields are optional.
   - `t` replaces `date` for the ribbon, with an axis declared at chapter level:
     `axis: { kind: 'date'|'year'|'ma'|'hours'|'none', from, to, format }`. Old `date` maps to
     `{ kind: 'date', from: '1945-01-01', to: '1992-01-01' }`.
   - `camera` gains `tilt` and `heading`.
   - `map.base`: `'cshapes:<date>'` (History) or `'modern'`.
   - `map.layers`, for example `{ quakes: { from, to, minMag, play: true }, plates: { types, arrows: true },
     tracks: { ids: [...] }, raster: { id: 'anomaly', year }, choropleth: { id: 'hdi', year }, rivers: { basin, minOrder },
     terrain: { exaggerate: 3 } }`.
   - `map.legend[]` and `map.alt` (text describing the map state).
   - `inset: { kind: 'cross-section'|'long-profile'|'hydrograph'|'climate'|'pyramid'|'dtm', data, scrub: true }`.
   - `syllabus` holds syllabus codes; `example` holds a detailed-specific-example code such as `'4.4.3'`.
   - `judgement` is renamed or aliased to `evaluate`, matching the 7-mark AO3 part.
5. **`chapter.js` becomes one generic module.** It reads
   `<body data-subject="geography" data-chapter="geography/tectonics">`, dynamically imports
   `./data/${chapter}.js`, and gets the hero, strings, axis, data URLs, accent and layer list from the data file.
   - `progressAt` returns `{ p, u }`.
   - The ribbon formatter comes from the axis.
   - Insets are mounted from a registry (`insets/*.js`).
   - `chart()` moves into that registry with its 1962 annotation turned into data.
6. **`tools/build-geo.mjs`** (`npm run geo`) reads inputs from `tools/.cache/geo/` (gitignored, like the CShapes input). It
   imports every `assets/js/data/geography/*.js`, collects the regions, time windows and layers the scenes use, and
   writes:
   - `assets/data/geo/base.json` (TopoJSON: land, admin-0 at 110m world and finer inside the scene regions, plates by
     type, rivers by order per basin);
   - `quakes.bin` and `tracks.bin` (quantised Int16 or Uint8 with a small JSON header);
   - `raster/*.png` or `*.jpg` (single channel: relief and bathymetry crops per region, overlays, ID rasters);
   - `fallback/<scene>.webp`;
   - a `geo/LICENSES.txt` like `BORDERS-LICENSE.txt`.

   Fix `build-maps.mjs`'s `^kq\d\.js$` filter so that it skips `-paper2` files but does not stop at nine chapters.
7. **`pages.py`**
   - Turn `CHAPTERS` into a dict per subject, for example
     `CHAPTERS = {'history': [card(...), ...], 'geography': [...]}`, appended as `CHAPTERS.get(k)`.
   - Add a `chapter_shell(subject, id, ...)` that writes `history/*.html` and `geography/*.html` with a `base='../'`
     prefix. This removes the hand-copied nav and footer in `kq6.html`, and puts the loader text, ribbon ends and preload
     links in one place.
   - Optionally read the card text from a small `chapters.json`, so that `pages.py` and the chapter data cannot drift
     apart.
8. **Practice room** (Geography's counterpart of `paper2.js`)
   - Reuse `paper2.js`'s two-column layout (sticky resource column, chips that flash the figure) with `practice.js`'s
     schemes (`p`, `data`, `e5`, `tb`) and 1·2·3·4·3·5·7 parts.
   - Extend `resource.type` with:
     - `map`: a static WebP baked by `build-geo.mjs` from the same layers, with key, scale bar, north arrow and optional
       grid, plus alt text;
     - `photo`: a vendored image with credit, licence and alt text;
     - `graph`: kinds `climate` (bars and line on two axes), `hydrograph`, `pyramid`, `scatter`, `bar` and
       `divided-bar`, built from the same SVG components as the insets, each with a screen-reader-only table;
     - `table`;
     - `multi`, for Fig. 1.1A/B.
   - Each figure gets `label`, `caption` and `source` with a "practice data" flag, as `practice-geography.js` does now.
   - Link it from the chapter end card as `kq6.html` links its Paper 2 room.

### Gaps
- The proposal has not been prototyped in a browser. The layer hook interface is a design sketch, not tested code.
- Which Geography topic comes first decides which layers to build first (tectonics: quakes, plates, volcanoes, terrain;
  coasts and storms: tracks, bathymetry). That choice belongs to the syllabus research.

## 6. Risks, including fragile spots in the current code

### Takeaway
The biggest risks for Geography are:
- detail textures that cannot cross the antimeridian (Pacific Ring of Fire, Tonga, the Aleutians);
- synchronous paints during jumps;
- canvas and texture memory on iPads and phones;
- a halo that Safari cannot blur;
- continuous rendering;
- accessibility, because Geography maps carry evidence that the current `aria-hidden` globe gives no text for.

three 0.186's WebGL2-only renderer and the module-cache and Lenis traps are known and manageable.

### Cited Findings
- **Antimeridian (verified).** The detail box is built in raw longitudes ([engine.js:252-254](src/world/engine.js)) and
  painted with an unrotated `geoEquirectangular` ([engine.js:109](src/world/engine.js)). The shader compares unwrapped
  longitudes ([engine.js:54](src/world/engine.js)). For a camera over Tonga (−20.5, −175.4, alt 2,000 km), the box is
  −210.8…−140°: every pixel west of 180° (Vanuatu, New Caledonia, most of Fiji) stays empty in the detail texture. Over
  Kamchatka (55, 175, alt 3,000 km) everything east of 180° (Aleutians, Alaska) is empty. The shader then falls back to
  the blurry 2048 world texture there — scratchpad `bench/dateline.mjs` (land pixels per tenth of the width:
  `0 0 0 0 54 176 0 10 68 56` and `77265 59012 29596 29760 20534 7481 0 0 0 0`).
- **Jank on jumps:** paint on a cache miss inside `frame()` while `goTo` scrolls through every scene in between —
  [engine.js:447](src/world/engine.js); [chapter.js:138-141](assets/js/chapter.js).
- **iOS and iPadOS canvas memory:** limits of 224–576 MB, after which `getContext` returns `null`. iPads take the 3072 path
  (26 MiB per state, about 5–6 states, plus canvases evicted but not yet collected) —
  [pqina](https://www.pqina.nl/blog/total-canvas-memory-use-exceeds-the-maximum-limit/);
  [WebKit 195325](https://bugs.webkit.org/show_bug.cgi?id=195325); [engine.js:227,242,259](src/world/engine.js). If
  `getContext` returned `null`, `paintTexture` would throw inside `frame()` on every frame, because `requestAnimationFrame`
  is re-armed first (line 436) (inference from the code).
- **Safari canvas `filter`:** not enabled by default, so the halo is a hard tint on Apple devices; it is also the most
  expensive paint step in wide scenes — [Can I Use](https://caniuse.com/mdn-api_canvasrenderingcontext2d_filter);
  [engine.js:140](src/world/engine.js); bench (kq6-g2, 63 vs 21 ms).
- **Continuous rendering:** `frame()` renders every animation frame while visible; dashes and the hero drift animate
  without end — [engine.js:435-469](src/world/engine.js).
- **Unbounded growth:** `overlays` and `borderSets` are never disposed, so GPU memory grows through a long session —
  [engine.js:299-356](src/world/engine.js).
- **Missing fields crash:** a scene without `map.borders` throws in `dayNum(undefined)`; `createWorld` reads
  `data.objects.cshapes` unconditionally — [engine.js:27,232,248,453](src/world/engine.js).
- **Unescaped labels:** `m.label` is inserted with `innerHTML` (authored data, but `&`, `<` or a stray tag would break the
  label) — [engine.js:381](src/world/engine.js).
- **three version:** WebGL1 is gone since r163, so non-WebGL2 browsers get the text-only page. That is about 2.5 % of
  web3dsurvey reports overall and about 16 % of Linux reports. The custom shaders use GLSL1-style `texture2D` and
  `gl_FragColor` inside `ShaderMaterial`, which three translates for WebGL2 today. A future move to `WebGPURenderer` or TSL
  would mean rewriting them, so keep three pinned at `0.186.1` in `package.json` —
  [WebGLRenderer.js:61,102](https://github.com/mrdoob/three.js/blob/r186/src/renderers/WebGLRenderer.js);
  [web3dsurvey](https://web3dsurvey.com/); [package.json](package.json).
- **Accessibility:** the world container is `aria-hidden="true"` ([history/kq6.html:33](history/kq6.html)). In History the
  panel text carries the content. A Geography map that shows a distribution (where earthquakes cluster, a track's
  intensity) is itself the evidence. The no-WebGL fallback is a violet gradient with no map —
  [chapter.css:33](assets/css/chapter.css).
- **Reduced motion:** Lenis is disabled and GSAP's timeline is sped up 20× ([core.js:9,21,24](assets/js/core.js)). The
  engine snaps flights at mid-gap and shows arrows fully drawn ([engine.js:363-367,442,450](src/world/engine.js)).
- **Module cache trap:** python `http.server` lets modules cache, and a `?v=` on the page does not refresh nested imports
  (`CLAUDE.md` "Traps"). `chapter.js`'s static data import (line 6) means every data edit hits this trap.
- **Lenis trap:** Lenis undoes `window.scrollTo` in the preview pane (`CLAUDE.md` "Traps"). `goTo` relies on
  `lenis.scrollTo` — [chapter.js:140](assets/js/chapter.js).

### Inferences
**Risk list with mitigations:**
1. **Antimeridian.** Paint detail with a rotated projection and store `lon0`. In the shader use
   `dl = mod(lon − lon0 + 540., 360.) − 180.`. Test with a Tonga scene and an Aleutians scene.
2. **Jumps.** Never paint in `frame()`. Fall back to the nearest cached state, and prepare the jump target first in
   `goTo`, before the scroll starts.
3. **Memory.** Use a canvas pool, shrink evicted canvases to 1×1, size the detail texture by device rather than width, use
   R8 rasters, and cap the cache at 3 states on touch devices.
4. **Halo.** Replace `ctx.filter` blur with a focus mask (paint focus IDs into a channel or an ID texture) and do the glow
   in the shader. Alternatively, paint the halo at ¼ resolution and let the GPU's bilinear upscale blur it. This is faster
   and looks the same in Safari.
5. **Render on demand.** Use a dirty flag plus an "animating" set (time playback, dash, drift). Freeze decorative
   animations under reduced motion.
6. **Disposal.** Dispose of overlays more than ±3 scenes away; Geography layers that are global are built once and only
   toggled.
7. **Schema crashes.** Make `borders` and `cshapes` optional through the layer system, and validate scenes at load with
   clear console errors. Write the "coverage lint" the `kq6.js` header promises, as a Node script that checks fields,
   source keys and syllabus codes.
8. **Accessibility.** Give each scene a `map.alt`, rendered as visually hidden text in the panel. Use a real DOM legend
   with shape and pattern as well as colour, colour-blind-safe ramps, and screen-reader-only tables behind insets. Show the
   build-time fallback WebP per scene when WebGL is unavailable. Under reduced motion, show the end state of time
   animations (all quakes, the full track) and let the inset step through key states with buttons instead of scrubbing.
   This last point is an inference following WCAG's guidance on animation triggered by interaction.
9. **Lenis and insets.** Any scrollable or draggable inset needs `data-lenis-prevent`. Keep touch scrolling native
   (`syncTouch: false`, as now). Read `u` from the same ticker as `p`, so the globe and insets never disagree.
10. **Module cache.** Dynamically import the data file with a build stamp (`?v=${BUILD}`), and keep the preview workflow
    `fetch(url, { cache: 'reload' })` for nested modules.
11. **Shader complexity.** Compile Geography slots behind `#define`s. Keep the earth shader at no more than about 12
    samplers; WebGL2 guarantees 16, which is the value on 99.95 % of reports. Profile on a 375 px Android phone before
    adding terrain displacement.
12. **Data licences.** NC-SA licences like CShapes' propagate to derived files. `build-geo.mjs` should write a licence file
    per output, as `build-maps.mjs` does ([assets/data/BORDERS-LICENSE.txt](assets/data/BORDERS-LICENSE.txt)).

### Gaps
- Real-device behaviour (iPad canvas limit, Android GPU fill rate, school laptops' WebGL2 availability in the browsers
  common in mainland China) could not be tested from here.
- The WCAG reasoning in item 8 is not quoted from a fetched source. The relevant success criterion is 2.3.3, "Animation
  from Interactions" (AAA), which was not retrieved in this session.
