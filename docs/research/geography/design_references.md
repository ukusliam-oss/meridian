# Design references and evidence for a Geography scroll chapter on a globe (Meridian, IGCSE 0460)

Scope note for the report writer. These notes cover published exemplars, techniques, phone/accessibility practice,
learning-science evidence, how to make Geography visually distinct from the History chapter, and failure modes.
They were compiled on 2026-10-23. Context from the repo: the History chapter (`history/kq6.html`,
`assets/css/chapter.css`, `assets/js/chapter.js`) is 33 scenes over one dark three.js globe, about 50 minutes of
reading; a scene holds while its glass panel (520 px wide, blur 22 px) is on the reading line and the camera flies in
the gaps; a fixed date ribbon (1945–1992, serif year at 44 px, violet needle) and a glass pill navigator with a glowing
orb sit at the bottom; each panel carries "Why it matters", "Common mistake / In fact", a "Check yourself — tap to
reveal" button and a collapsible "Facts and sources" list. The violet accent triad is `--acc #b693ff`,
`--acc-deep #6d3fd0`, `--acc-ink #190e33` on `--ink #05060a`; the site's Geography accent is `--geo #5fb0ff` (dark)
and `#1a68cf` (light). Under `prefers-reduced-motion`, core.js turns Lenis off and the world engine snaps between
scene states instead of flying. These facts come from reading the files, not from the web.

Research limits worth knowing: the sandbox could not fetch nytimes.com, reuters.com, bbc.co.uk/bbc.com, pudding.cool,
snd.org, arxiv.org, wiley.com or source.opennews.org, and web search refused the reuters.com and bbc domains. NYT,
Reuters and BBC pieces are therefore described from secondary sources (award pages, reposts, write-ups), and several
well-known Reuters/BBC/FT/Guardian pieces could not be verified at all (listed under Gaps).

## 1. Which published pieces are the strongest examples of geographic or earth-science scrollytelling, and what technique is worth borrowing from each?

### Takeaway
The strongest references cluster into four families: (a) newsroom scroll stories that fly a camera over real terrain
or ocean (NYT *Snow Fall*, NYT's 2021 Atlantic Ocean piece, WaPo *2°C*), (b) science-agency visualisations that
make invisible flows visible over dark bathymetry or night lights (NASA SVS *Perpetual Ocean*, NASA Black Marble,
earth.nullschool), (c) change-over-time imagery (NASA *World of Change*, Google Earth Timelapse, Reuters' Delhi
fixed-camera piece, before/after satellite pairs), and (d) "follow one thing" journeys (River Runner's raindrop,
Ancient Earth's "where was your city", NYT's "compare with your city's air"). Meridian should borrow the *journey
logic* and *material* from (a) and (b), the *evidence style* from (c), and one personal hook from (d), all rebuilt as
pre-baked static assets.

### Cited Findings

**Newsroom scroll stories**
- *Snow Fall: The Avalanche at Tunnel Creek* (NYT, John Branch, published 20 Dec 2012) is usually treated as the
  origin of modern scrollytelling; it won the 2013 Pulitzer for Feature Writing and a Peabody — [Wikipedia: Snow Fall](https://wikipedia.com/wiki/Snow_Fall); [The Architect in the Newsroom](https://brackets.substack.com/p/the-architect-in-the-newsroom)
- Its design was a series of chapters with multimedia embedded inside the scrolling story rather than in sidebars; it
  had animated graphics of the snow layers, a 3D simulation of the avalanche, and readers could follow skier positions
  on a 3D terrain map; 11 graphic artists and designers worked on it, and custom code was needed because the data size
  risked freezing or crashing the page — [Studio Republic: Snowfall design](https://www.studiorepublic.com/blog/snowfall-design/); [Creative Bloq](https://www.creativebloq.com/web-design/snowfall-51411702); [CGW](https://www.cgw.com/Press-Center/News/2013/Students-Elevate-Work-on-Groundbreaking-Times-Pi.aspx). A making-of exists at [Source/OpenNews: How we made Snow Fall](https://source.opennews.org/articles/how-we-made-snow-fall/) (could not be fetched from the sandbox).
  - Borrow: 3D terrain used to *locate* events (where each skier was) rather than as decoration. Avoid: page weight.
- *In the Atlantic Ocean, Subtle Shifts Hint at Dramatic Dangers* (NYT, 2 Mar 2021, Moises Velasquez-Manoff with
  graphics editor Jeremy White), a "major graphic article" about a possible slowing of the Gulf Stream and the deep
  currents connected to it: `nytimes.com/interactive/2021/03/02/climate/atlantic-ocean-climate-change.html` — [Atlantic Salmon Federation](https://www.asf.ca/subtle-shifts-and-dramatic-dangers-in-north-atlantic-current-changes/); [UNAM reprint listing authors](https://let.iiec.unam.mx/print/3384); [WHOI](https://www.whoi.edu/?p=291504)
  - This is the closest published analogue to an "ocean-first" Geography globe. The scene-by-scene technique could
    not be inspected (NYT blocked); see Gaps.
- *See How the World's Most Polluted Air Compares With Your City's* (NYT, 2 Dec 2019): particles stand for PM2.5; the
  reader compares their own city with Delhi, Beijing and wildfire-season Bay Area; the visual starts at a density
  matching the US EPA "good" level; on phones it offered an augmented-reality view —
  [FlowingData](https://flowingdata.com/2019/12/04/compare-your-citys-air-pollution-to-the-rest-of-the-world/); [UW–Madison repost with URL](https://eap.wisc.edu/2019/12/05/new-york-times-features-alex-karambelas-16/)
  - Borrow: a personal baseline first ("your city"), then the extreme. For Meridian's readers in mainland China, a
    familiar Chinese city is the natural baseline (no geolocation needed; a fixed choice or a tap list).
- NYT's Beirut port explosion piece used "moviescrollers", one of which moves from aerial imagery into a 3D
  rendering of the scene — [data.europa.eu Data Visualisation Guide: moviescroller](https://data.europa.eu/apps/data-visualisation-guide/scrollytelling-moviescroller)
  - Borrow: scrub a pre-rendered sequence with scroll (imagery → model) for one or two set pieces where real-time 3D
    would be too heavy.
- *2°C: Beyond the Limit* (Washington Post, 2019) won the 2020 Pulitzer Prize for Explanatory Reporting; it used
  global datasets and nearly 170 years of temperature records to map every place that has already passed 2°C of
  warming, and found extreme warming already affects about 10% of Earth's surface; Harry Stevens was among the
  graphics team — [CleanTechnica](https://cleantechnica.com/2020/05/18/washington-post-wins-pulitzer-for-2c-beyond-the-limit-series-about-climate-change/); [06880](https://06880danwoog.com/2020/05/07/and-the-pulitzer-prize-for-explanatory-reporting-goes-to/); [SEJ awards entry](https://awards.journalists.org/entries/2c-beyond-the-limit/)
  - Borrow: one memorable threshold mapped globally, then drill into local places (martini-glass structure, see §4).
- Washington Post hurricane graphics: the 2018 Hurricane Michael tracker used an animation of a *generic* hurricane to
  explain why surge is strongest in the front-right quadrant (rotation plus forward motion) before showing the real
  storm — [WaPo: Tracking Hurricane Michael](https://www.washingtonpost.com/graphics/2018/national/tracking-hurricane-michael/); Florence (2018) used a schematic surge diagram — [WaPo: Florence path](https://www.washingtonpost.com/graphics/2018/national/tracking-hurricane-florence/); Helene (2024) combined maps and videos along the storm's path — [WaPo: Helene destruction](https://www.washingtonpost.com/weather/interactive/2024/hurricane-helene-destruction-north-carolina/); a 2025 investigation mapped moisture hotspots ("rivers in the sky") feeding deadly floods — [WaPo 2025](https://www.washingtonpost.com/weather/interactive/2025/deadly-flooding-moisture-hotspots-maps/)
  - Borrow: "generic model first, named case second" — exactly the IGCSE pattern of process → case study.
- The Weather Channel's immersive mixed-reality storm-surge segment (Hurricane Florence, Sept 2018) put a 157 cm
  meteorologist inside a virtual street as surge rose past her; a clip passed 23 million views; the network said it had
  always struggled to communicate surge danger and this let it "show, not say"; reportedly built with Unreal Engine —
  [Pew Trusts](https://www.pewtrusts.org/en/research-and-analysis/articles/2018/12/03/the-weather-channel-uses-animation-to-show-dangers-of-storm-surge); [Washington Post](https://www.washingtonpost.com/technology/2018/09/14/weather-channels-viral-demo-shows-worst-case-scenario-storm-surge/); [Fox News](https://www.foxnews.com/tech/weather-channels-frightening-augmented-reality-videos-show-worst-case-storm-surge)
  - NOAA later funded a storm-surge VR simulation (2025) — [WaPo 2025](https://www.washingtonpost.com/science/2025/03/23/virtual-reality-storm-surge-dangers/)
  - Borrow: a human-scale yardstick (a person, a door, a two-storey house) next to any height or depth figure. This
    can be a simple SVG, not a game engine.
- Reuters' *A window into Delhi's deadly pollution* (late 2018) paired photos from a fixed camera at the Reuters
  Delhi bureau (11 a.m. daily, 20 Oct–8 Nov) with PM2.5 readings; it won the Malofiej Endesa Best of Show (digital),
  27th edition — [SND-E](https://snd-e.com/es/noticias/mostrar/national-geographic-reuters-ganan-endesa-best-show-award-malofiej); [Yahoo repost of the Reuters story](https://sg.news.yahoo.com/window-deadly-pollution-delhi-071159268.html); [ScoopWhoop](https://www.scoopwhoop.com/delhi-smog-pics-over-two-months/)
  - Borrow: repeat photography + one number per frame is the most convincing before/after form; it suits coastal
    retreat, flood extent or urban sprawl.
- Reuters Graphics was named World's Best-Designed (digital) at SND44 (2023) for its biodiversity coverage (insect
  collapse, why plants matter, drones against plant extinction); Simon Scarr won World's Best Designer for Reuters art
  direction; at SND45 (2024) Reuters' Adolfo Arranz won World's Best Designer for illustration/art direction —
  [SND: overview of SND44 winners](https://snd.org/an-overview-of-the-winners-from-snd44/); [SND45 Q&A: Adolfo Arranz](https://snd.org/?p=50695); [SND: NYT, DIE ZEIT and Reuters named World's Best Designed](https://snd.org/?p=49632)
  - Borrow: Reuters' signature of hand-drawn scientific illustration (cutaways, cross-sections) combined with data.

**Science-agency and independent visualisations**
- NASA SVS *Perpetual Ocean* shows surface currents from June 2005 to December 2007 from the ECCO2 model (MIT/JPL),
  with no narration or text; dark patterns mark seafloor bathymetry; terrain is exaggerated 20× and seafloor relief 40×;
  shown at SIGGRAPH Asia 2012 — [NASA SVS 3827](https://svs.gsfc.nasa.gov/3827); *Perpetual Ocean 2: Western
  Boundary Currents* (2021–2023 model output) renders 3D velocity fields with particle trails; its narrated version
  was accepted to the SIGGRAPH 2025 Electronic Theater — [NASA SVS 5425](https://svs.gsfc.nasa.gov/5425)
  - Borrow: streaklines over dark, shaded bathymetry — the single best "material" reference for a Geography globe.
    Also borrow the honesty of stating vertical exaggeration.
- NASA Black Marble (VIIRS on Suomi NPP, NOAA-20, NOAA-21) provides night-light composites used to track urbanisation,
  electrification and out-migration; flat global maps for 2012 and 2016 are downloadable as JPEG/GeoTIFF at 3600×1800,
  13500×6750 and 86400×43200 — [NASA Earthdata: Black Marble](https://www.earthdata.nasa.gov/data/projects/black-marble); [NASA Earth at Night flat maps](https://science.nasa.gov/earth/earth-observatory/earth-at-night/maps/); [NASA SVS 5313](https://svs.gsfc.nasa.gov/5313/)
  - Borrow: a night-lights globe material for the population/urbanisation part.
- NASA Earth Observatory *World of Change* (started 2009 for EO's tenth anniversary) shows annual image series such as
  the shrinking Aral Sea and Dubai's urbanisation (ASTER, 2000–2011) — [World of Change: Aral Sea](https://science.nasa.gov/earth/earth-observatory/world-of-change/aral-sea/); [World of Change: Dubai](https://science.nasa.gov/earth/earth-observatory/world-of-change/dubai/)
  - Borrow: a fixed frame, one image per year, as a scroll-scrubbed sequence or small multiples.
- Google Earth Timelapse: annual cloud-free Landsat composites from 1984 (2013 version to 2012; 2021 3D version to
  about 2020, built with Carnegie Mellon's CREATE Lab, with five guided "Earth Voyager" themes including urban growth;
  coverage highlighted shifting and eroding coastlines) — [USGS](https://www.usgs.gov/news/usgs-landsat-satellites-enable-google-portray-global-change); [CBS](https://www.cbsnews.com/losangeles/news/google-earths-new-timelapse-feature-dramatically-reveals-37-years-of-climate-change); [Laughing Squid](https://laughingsquid.com/google-earth-timelapse/)
  - Borrow the idea, not the service (it is a Google runtime; see constraints). Landsat itself is public domain (USGS).
- earth.nullschool.net (Cameron Beccario, from 2013): animated streamlines on a globe, colour for wind speed, GFS
  forecast data refreshed every three hours, layers for waves, temperature, pressure, precipitation and upper winds —
  [Cool Infographics](https://coolinfographics.com/blog/2017/7/31/earth-a-visualization-project.html); [Bellingcat toolkit](https://bellingcat.gitbook.io/toolkit/more/all-tools/nullschool-earth-map); [nullschool.net](https://nullschool.net/)
  - Borrow: particle advection on the globe for trade winds, monsoon, cyclone inflow and ocean currents, from a
    pre-baked vector field.
- *River Runner* (Sam Learner, 2021): click anywhere in the contiguous US and a raindrop is animated downstream to its
  end point (usually the ocean) with a 3D flyover, using USGS NHDPlus and the NLDI API — [FlowingData](https://flowingdata.com/2021/05/25/map-shows-you-where-a-raindrop-ends-up/); [American Rivers](https://www.americanrivers.org/2021/07/new-web-project-traces-every-waterway-in-contiguous-u-s/); [Mapbox build write-up mirror](https://www.plushcap.com/content/mapbox/blog/mapbox-river-runner-how-i-built-it)
  - Borrow: "follow one raindrop" as the camera path for drainage basin → upper course → lower course → delta, with
    the river long profile drawn underneath.
- *Ancient Earth* globe (Ian Webster): enter a place and see where it sat at 25 times from 0 to 750 million years ago,
  using Scotese's PALEOMAPS and GPlates; Webster says the plots are approximate — [Live Science](https://livescience.com/earth-millions-years-ago-interactive.html); [ScienceAlert](https://www.sciencealert.com/this-interactive-map-can-show-you-where-your-hometown-was-750-million-years-ago)
  - Borrow: a deep-time ribbon for the plate-tectonics part (a log-scaled "Ma" ribbon replaces History's years).
- *Human Terrain* (Matt Daniels, The Pudding, Oct 2018): population density from the Global Human Settlement Layer
  rendered as 3D "population mountains", with 1990 vs 2015 comparison and growth/decline views; Daniels argued height
  reveals more than subtle colour differences — [Mapbox blog: how I built it](https://blog.mapbox.com/3d-mapping-global-population-density-how-i-built-it-141785c91107); [Nature Index](https://www.nature.com/nature-index/news/human-terrain-map-visualization-earth-population-data-three-dimensions); [Creative Bloq](https://creativebloq.com/news/stunning-dataviz-project-maps-the-worlds-population)
  - Borrow: extruded spikes for megacities on the globe (baked geometry, not tiles).
- USGS geonarrative on the 2023 Türkiye earthquakes: tectonic setting, historical seismicity since 1900, the M7.8 and
  M7.5 sequences, rupture kinematics, satellite displacement across the faults, and an animated timeline — [USGS](https://www.usgs.gov/programs/earthquake-hazards/news/new-interactive-geonarrative-explains-2023-turkey-earthquake). The M7.8 rupture was ~240 km × 20 km of strike-slip faulting near the Anatolia–Africa–Arabia triple junction — [Learning From Earthquakes report](https://learningfromearthquakes.org/images/earthquakes/2023_02_05_Turkey/M7.8_Turkey-Syria_EQ_6_February_2023.pdf); DLR published displacement imagery (blue = eastward, red = westward motion) — [DLR](https://www.dlr.de/en/images/satellite-image-of-the-earthquake-area-in-turkiye-syria)
  - Borrow: the order setting → history → event → measured evidence → impacts.
- Before/after satellite pairs (Maxar, distributed by Reuters) of Islahiye and Nurdağı after the 2023 earthquakes —
  [Al Jazeera](https://www.aljazeera.com/news/longform/2023/2/8/satellite-images-show-scale-of-destruction-in-turkey-syria-earthquake)
- A fresh case for 2027: ESA's Sentinel-1 coherence map of the March 2025 Myanmar (Mandalay/Sagaing fault) earthquake
  shows the fault as a dark fracture across the land — [ESA](https://www.esa.int/ESA_Multimedia/Images/2025/04/Myanmar_earthquake_coherence_map_from_Sentinel-1); the rupture was about 460–500 km long, partly supershear, with up to ~4.6 m of surface displacement; magnitude is usually given as 7.7 and death tolls vary (≈3,600 to >5,000) by source — [KeAi / Geodesy and Geodynamics](https://www.keaipublishing.com/en/news/study-reveals-how-myanmar-s-deadly-earthquake-in-2025-tore-open-a-500-km-rupture/); [Earth.com](https://www.earth.com/news/myanmars-massive-earthquake-ripped-310-mile-rupture-through-the-earth-eric-does-images/)

**Templates and tools (for structure, not for runtime use)**
- Mapbox's storytelling template: each chapter has `id`, `alignment` (left/right/center/full), `title`, `image`,
  `description`, a `location` (`center`, `zoom`, `pitch` 0–60, `bearing`, plus `speed` and `curve` for flyTo),
  `mapAnimation` (`flyTo` default, `easeTo`, `jumpTo`), `rotateAnimation` ("Rotates 90 degrees over 24 seconds"),
  `callback`, and `onChapterEnter`/`onChapterExit` arrays that set layer opacity; "Do not hide the layer" — set opacity
  to 0 and fade it in; alignment defaults to center below 750 px; built with Scrollama — [GitHub: mapbox/storytelling](https://github.com/mapbox/storytelling); [Mapbox scroll fly-to example](https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/)
- Esri StoryMaps "sidecar": slides pair a media panel with narrative in Docked, Floating or Slideshow layouts; "map
  actions" (author-set buttons/text that change layers or extent) are treated as secondary content readers need not
  use to progress — [Esri docs: add sidecars](https://doc.esri.com/en/arcgis-storymaps/latest/author-and-share/add-sidecars.html); [Esri blog: 6 ways to use sidecar](https://www.esri.com/arcgis-blog/products/arcgis-storymaps/mapping/6-ways-to-use-sidecar-in-the-new-arcgis-storymaps)
- A d3/TopoJSON scrollytelling-globe tutorial ("flying" from a close-up to a global view by scrolling) — [Storybench](https://www.storybench.org/from-csv-to-spinning-sphere-how-to-build-a-scrollytelling-globe-with-d3-js/)

**Awards context**
- The Malofiej awards were paused on 1 Oct 2021 "while we open a period of reflection"; 2019 Best of Show went to the
  NYT (print, Sahil Chinoy and Jessia Ma) and National Geographic (digital); 2021 to El País and Errea Comunicación —
  [Wikipedia: Malofiej Awards](https://en.wikipedia.org/wiki/Malofiej_Awards); [FlowingData 2019](https://flowingdata.com/?p=61368); [Cool Infographics 2021](https://coolinfographics.com/news/2021/7/23/el-pas-and-errea-comunicacin-receive-the-best-of-show-awards?format=amp)
- At Malofiej 2016 the NYT's Archie Tse gave a much-discussed talk, "Why We Are Doing Fewer Interactives" — [Nieman Lab](https://www.niemanlab.org/2016/03/at-the-malofiej-infographics-world-summit-the-best-form-of-storytelling-is-often-static/); a single blog summary attributes to him that readers "just want to scroll", that tooltips and rollovers should be assumed unseen, that important content should not be hidden, and that the bar for interactives is now very high — [The Mario Blog](https://garciamedia.com/?p=2509) (secondary; wording unverified)

### Inferences
- Adopt: the chaptered scroll with media inside the flow (Snow Fall), terrain used to locate events, "generic process
  first, named case second" (WaPo Michael), a human-scale yardstick (Weather Channel), streaklines over dark
  bathymetry with stated exaggeration (Perpetual Ocean), night lights for urban scenes (Black Marble), annual image
  sequences (World of Change), a "follow one raindrop" river journey (River Runner), deep-time positions (Ancient
  Earth), population spikes (Human Terrain), and a measured-evidence scene (InSAR / coherence map) per hazard.
- Adapt: Google Timelapse and earth.nullschool are live services; reproduce the *look* from pre-baked public-domain
  data (Landsat/USGS, NASA, NOAA GFS snapshots) shipped as files.
- Avoid: AR, geolocation, game-engine realism and any per-reader live data. They break the no-CDN/no-account rule, do
  not run on school devices, and (per §4) realism is not what improves understanding.
- The scroll-scrubbed "moviescroller" is the safe way to include one very heavy set piece (e.g., a subduction-zone
  cutaway rendered offline to a short image sequence or video), because cost is fixed and predictable.

### Gaps
- Could not verify (blocked hosts) the following widely cited pieces, so their URLs and exact techniques are unconfirmed:
  Reuters' 2023 Türkiye–Syria earthquake graphics, Reuters' 2022 Pakistan floods graphics, Reuters' 2023 Grindavík
  magma-tunnel cross-section, Reuters' Hunga Tonga explainer; BBC Visual Journalism before/after sliders; The Guardian's
  *Firestorm* (2013); Financial Times and Bloomberg climate/earth pieces; National Geographic's digital Best of Show
  (2019). The report should not quote URLs for these without checking.
- The scene-level choreography of the NYT 2021 Atlantic Ocean piece (camera path, depth cutaways) could not be
  inspected.
- Whether Malofiej resumed after the 2021 pause was not confirmed; no 2023–2025 Malofiej Best of Show results were found.
- No sound or haptics exemplars were researched in depth; none of the verified pieces above relies on sound.

## 2. Which techniques matter (camera choreography, time scrubbing, layer reveals, cross-sections, before/after, annotated imagery, 3D terrain and bathymetry, scale and locators, small multiples, animated flows, sound)?

### Takeaway
Use a mathematically "optimal" zoom-out–pan–zoom-in path for long flights, hold the camera still while text is read,
change one thing per scene, prefer static small multiples or a scrubbed sequence over free-running animation for
comparisons, reserve animation for things that actually move (plates, storms, water, air), and state vertical
exaggeration. Cross-sections should be drawn as linked 2D SVG panels beside the globe rather than inside it.

### Cited Findings
**Camera choreography**
- van Wijk & Nuij's "Smooth and efficient zooming and panning" (InfoVis 2003) defines the zoom-out-then-in path that
  d3's `interpolateZoom` implements; each view is (cx, cy, width), and the interpolator exposes a recommended duration
  derived from the path length, scalable by a factor V — [d3-interpolate: zoom](https://d3js.org/d3-interpolate/zoom); [d3-zoom](https://d3js.org/d3-zoom)
- Mapbox/MapLibre `flyTo` uses the same method: `curve` defaults to 1.42, "the average value selected by participants
  in the user study discussed in van Wijk (2003)"; 1 gives circular motion; lower values approach `easeTo`; `speed`
  defaults to 1.2 "screenfuls per second" — [MapLibre FlyToOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/FlyToOptions/); [MapTiler FlyToOptions](https://docs.maptiler.com/sdk-js/api-reference/types/FlyToOptions/)
- van Wijk–Nuij paths are not smooth at the endpoints or when interrupted by a new target; Reach & North (2018) propose
  an alternative that is — [arXiv 1801.09358](https://arxiv.org/pdf/1801.09358)
- The Mapbox template distinguishes `flyTo` (arc), `easeTo` (direct) and `jumpTo` (cut), and offers a slow post-arrival
  rotation (90° over 24 s) — [GitHub: mapbox/storytelling](https://github.com/mapbox/storytelling)

**Time and change**
- Animated choropleths cause "change blindness": in Fish, Goldsberry & Battersby (2011, *Cartography and Geographic
  Information Science* 38(4)) readers often misidentified which places changed between frames and were consistently
  overconfident; the authors suggested tweening between frames — [Penn State GEOG 486](https://courses.ems.psu.edu/geog486/book/export/html/924); [MSU thesis](https://d.lib.msu.edu/etd/17458). Change is missed unless the scene-to-scene change is salient enough to attract fixation — [USC thesis](https://scholarcommons.sc.edu/etd/1278)
- Harrower's "Tips for Designing Effective Animated Maps" (2003) recommends heavy generalisation (many animated maps
  "try to do too much and end up saying very little") and classing data into two or three classes — [Cartographic Perspectives 44](https://cartographicperspectives.org/index.php/journal/article/download/cp44-harrower/pdf/2665) (summary via search; full text not fetched). Harrower (2007, "The cognitive limits of animated maps") is cited for segmenting animations into chunks and for user control reducing load — [Cartographic Perspectives 82](https://cartographicperspectives.org/index.php/journal/article/download/cp82-multimaki-et-al/1467/); [ICA Abstracts 2024](https://ica-abs.copernicus.org/articles/7/19/2024/ica-abs-7-19-2024.pdf)
- Robertson et al. (InfoVis 2008): for analysis, animation was slowest and least accurate; small multiples were more
  accurate; for presentation, animation was fastest and rated enjoyable but produced many errors — [Microsoft Research](https://www.microsoft.com/en-us/research/?p=145396); [Georgia Tech PDF](https://faculty.cc.gatech.edu/~stasko/papers/infovis08-anim.pdf)
- On phones (Brehmer, Lee, Isenberg & Choe, IEEE TVCG 2020; 96 crowdworkers, nine tasks), small multiples were
  consistently faster than animation, animation gave slightly higher confidence, and accuracy was task-dependent; the
  authors note news graphics had drifted to "animation on the phone, small multiples on the desktop" —
  [HAL](https://hal.archives-ouvertes.fr/hal-02317687); [LISN](https://www.lisn.upsaclay.fr/publications/a-comparative-evaluation-of-animation-and-small-multiples-for-trend-visualization-on-mobile-phones-2/?lang=en)

**Layer reveals**
- The Mapbox template fades layers in and out with opacity on chapter enter/exit rather than toggling visibility —
  [GitHub: mapbox/storytelling](https://github.com/mapbox/storytelling); [Mapbox Labs](https://labs.mapbox.com/education/impact-tools/interactive-storytelling)

**3D terrain, bathymetry and vertical exaggeration**
- Practitioner advice: "when in doubt, use slightly less vertical exaggeration rather than more"; smoothed elevation
  takes exaggeration better than detailed data (which goes spiky); flat terrain and small-scale maps need more,
  steep terrain little or none; modest exaggeration with illumination, hypsometric tints or land cover enhances the 3D
  effect — [Shaded Relief: vertical exaggeration advice](https://shadedrelief.com/3D_Terrain_Maps/3dterrainmapsver.html)
- Some scientists object that exaggeration makes oblique views dramatic "at the cost of misleading the viewer"; too
  much confuses readers — [Wikipedia: Vertical exaggeration](https://en.wikipedia.org/wiki/Vertical_exaggeration)
- NASA's Perpetual Ocean uses 20× on land and 40× on the seafloor — [NASA SVS 3827](https://svs.gsfc.nasa.gov/3827)

**Cross-sections**
- Students struggle to relate contour patterns to 3D landforms; an AR sandbox improved Grade 11 students'
  understanding of landscapes but not their ability to construct cross-sectional profiles — [Evans et al., Terra Didatica 2018](https://www.ige.unicamp.br/terraedidatica/v14_4/144-8.html)
- Portuguese 16–17-year-olds' plate-tectonics misconceptions were targeted with 3D models of plate boundaries
  (Marques & Thompson 1997), and junior secondary students' greatest confusion was the cause of subduction at an
  ocean–continent boundary (Mills, Tomas & Lewthwaite 2017, n = 95) — [QUT ePrints](https://eprints.qut.edu.au/107275/3/107275.pdf) (summary via search; full text not fetched)

**Animated flows**
- earth.nullschool animates streamlines over a globe with colour for speed — [Cool Infographics](https://coolinfographics.com/blog/2017/7/31/earth-a-visualization-project.html); Perpetual Ocean 2 uses 3D particle trails — [NASA SVS 5425](https://svs.gsfc.nasa.gov/5425); River Runner animates a single drop's path — [FlowingData](https://flowingdata.com/2021/05/25/map-shows-you-where-a-raindrop-ends-up/)
- Tversky, Morrison & Bétrancourt (2002): by the Congruence Principle "animated graphics should be effective in
  portraying change over time", but by the Apprehension Principle animations are "often too complex or too fast to be
  accurately perceived"; many continuous events are conceived as sequences of discrete steps — [Stanford copy](https://hci.stanford.edu/courses/cs448b/papers/Tversky_AnimationFacilitate_IJHCS02.pdf)

**Annotated imagery and before/after**
- Annotated radar products (ESA coherence map; DLR displacement with a stated colour key) and before/after optical
  pairs (Maxar) are the standard evidence forms for recent hazards — [ESA](https://www.esa.int/ESA_Multimedia/Images/2025/04/Myanmar_earthquake_coherence_map_from_Sentinel-1); [DLR](https://www.dlr.de/en/images/satellite-image-of-the-earthquake-area-in-turkiye-syria); [Al Jazeera](https://www.aljazeera.com/news/longform/2023/2/8/satellite-images-show-scale-of-destruction-in-turkey-syria-earthquake)
- Reuters' Delhi piece shows that a fixed frame plus a number per frame works as a time series — [SND-E](https://snd-e.com/es/noticias/mostrar/national-geographic-reuters-ganan-endesa-best-show-award-malofiej)

### Inferences
- **Camera.** Port the van Wijk–Nuij path (about 20 lines; `rho ≈ 1.42`) into the world engine for long hops
  (e.g., Pacific Ring of Fire → Iceland), and use a direct ease for short hops within a region. Give each flight a
  duration from path length, clamped (roughly 0.8–2.2 s of scroll-equivalent), so long hops do not feel rushed and
  short hops do not drag. Keep History's rule that the camera holds while the panel is on the reading line; never
  move the camera and change data at the same moment (change blindness + apprehension).
- **Zoom levels.** Use three named framings so the reader always knows the scale: *planet* (whole globe, plate
  boundaries or climate belts), *region* (one plate boundary, one ocean basin, one country), *site* (a city, a delta, a
  coastline, ~10–100 km). A locator inset (small globe with a box) should appear whenever the camera is at *site*
  level, and a scale bar whenever distances are discussed. (No specific study was found on locator insets; this is
  standard cartographic practice.)
- **Time.** Replace History's year ribbon with a ribbon whose *unit changes by part*: millions of years (log scale) for
  plate tectonics, years (1950–2050) for population/urbanisation and climate, hours/days for a tropical-storm track,
  and *kilometres from source* for the river part, where the ribbon itself becomes the x-axis of the long profile. The
  needle and tick styling can stay identical.
- **Layer reveals.** One new layer per scene, faded in with opacity; previous layers dim to ~25% rather than
  disappear, so the reader can see what changed. Use 2–3 data classes for anything animated (Harrower).
- **Comparisons.** For "1990 vs 2015", "four storms", "LIC vs HIC", use static small multiples (two to four mini-globes
  or mini-maps in the panel) rather than an animated morph; Robertson and Brehmer both favour small multiples for
  accuracy and speed, and phones especially.
- **Cross-sections.** Draw subduction zones, the river long profile, the coastal profile and the hurricane structure as
  2D SVG diagrams inside the panel, linked to the globe by a coloured line on the map showing where the section is cut
  (the "section line" convention). The AR-sandbox result suggests 3D views alone do not teach students to draw a
  cross-section, and IGCSE asks them to; so the section should build up step by step and be exam-drawable.
- **Flows.** Animate only what moves in reality (plates at a stated rate, storm tracks, trade winds, longshore drift,
  river flow, migration); everything else stays still. Particles should be pre-baked (a small vector field texture)
  and capped (a few thousand) for school devices.
- **Exaggeration.** State it on screen in Plex Mono, e.g. "RELIEF ×20 · SEAFLOOR ×40", as NASA does; pick lower values
  at *site* zoom.
- **Sound/haptics.** No evidence found that they help here; the site's constraints (classrooms, no account) argue for
  none, or at most an opt-in, muted-by-default ambience.

### Gaps
- No empirical study was found that compares camera-flight styles (arc vs direct vs cut) for comprehension; the 1.42
  value comes from a preference study reported in SDK docs, not from a learning study.
- No study was found specifically on locator insets or scale bars in scrollytelling.
- Harrower 2003/2007 and Mills et al. 2017 were read only via search summaries; exact recommendations and the full list
  of misconceptions should be checked in the originals before quoting.

## 3. How do the best pieces handle phones, reduced motion, text–map synchronisation, label legibility, colour, and accessibility?

### Takeaway
Plan the phone layout first and keep the scroll only where transitions carry meaning; never scroll-jack; honour
`prefers-reduced-motion` by removing *added* motion (parallax, flights, auto-rotation) while keeping content; link text
to map explicitly (highlighted words that match map colours); use soft halos for labels over imagery; use perceptually
uniform, colour-blind-safe ramps (no rainbow, no red–green); and give every map state a short text alternative plus
the underlying numbers.

### Cited Findings
- The Pudding's "Responsive scrollytelling best practices" (Russell Goldenberg, 2017): plan the mobile experience from
  the outset; mobile-first "forces you to pare the experience down"; on small screens choose between keeping the scroll
  and stacking; the main reason to keep the scroll is that the transitions are "truly meaningful"; scrollytelling only
  watches scroll position, whereas scrolljacking manipulates scroll mechanics and is "generally considered bad
  practice" — [The Pudding](https://pudding.cool/process/responsive-scrollytelling/) (via search summary; page not fetchable). Scrollama targets the sticky-graphic pattern and reducing scroll jank — [The Pudding: six libraries](https://pudding.cool/process/how-to-implement-scrollytelling)
- The Mapbox template switches text to centre alignment under 750 px wide — [GitHub: mapbox/storytelling](https://github.com/mapbox/storytelling)
- WCAG 2.3.3 Animation from Interactions (AAA) names parallax scrolling as a case; moving new content into view is
  essential to scrolling, but added motion should be removable; options are avoiding it, a user control, or the OS
  reduce-motion setting; technique C39 wraps animation CSS in `prefers-reduced-motion`; 2.2.2 Pause, Stop, Hide
  (Level A) covers auto-playing motion — [W3C Understanding 2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions); [W3C C39](https://w3.org/WAI/WCAG22/Techniques/css/C39); Deque recommends a visible toggle as well and warns reduced motion must not block content — [Deque](https://dequeuniversity.com/resources/wcag2.1/2.3.3-animations-from-interactions)
- 35.4% of US adults aged 40+ (NHANES 2001–2004) showed vestibular dysfunction, rising from 18.5% in their 40s to 85% at
  80+ — [Agrawal et al. 2009, PubMed](https://pubmed.ncbi.nlm.nih.gov/19468085); [Agrawal, Ward & Minor 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC4069154)
- Text–visual linking: in a crowdsourced study (n = 180), a slideshow layout gave better comprehension than a vertical
  layout; recall was better with slideshow *plus* linking; linking raised engagement and was preferred — [Zhi, Ottley & Metoyer 2019, CGF 38(3)](https://diglib.eg.org/handle/10.1111/cgf13719); [NSF PAR copy](https://par.nsf.gov/servlets/purl/10334145)
- Titles and annotations carry the message: visualisations with effective titles and text annotations were remembered
  more accurately; people spend most time on text, especially the title — [Borkin et al. 2015, Beyond Memorability](https://vcg.seas.harvard.edu/publications/20150101-beyond-memorability-visualization-recognition-and-recall)
- Label legibility over imagery: Tom Patterson recommends feathered, blurred-relief "type halos" behind labels over
  relief, aerial or satellite imagery (hard vector buffers are "often worse than the disease"); point symbols such as
  peak markers do not need halos — [Shaded Relief: type halos](https://shadedrelief.com/type-halos/); halos should be
  darker than light text (and vice versa) and blended so they do not dominate — [QGIS Planet](https://plugins.qgis.org/planet/tag/cartography/?page=1); Esri treats label-to-background contrast as an accessibility issue — [Esri ArcUser](https://esri.com/about/newsroom/?p=474922)
- Colour: rainbow-like and red–green colour maps distort data through uneven gradients and are unreadable to people
  with colour-vision deficiency; the authors provide a guide to scientifically derived (perceptually uniform, CVD-safe)
  colour maps and call on the press to stop misusing colour — [Crameri, Shephard & Heron 2020, Nature Communications 11:5444](https://pmc.ncbi.nlm.nih.gov/articles/PMC7595127)
- Colour-vision deficiency in China: 4.11% of male and 0.16% of female Sichuan University freshmen (n = 17,303, 2022
  screening) — [Int J Ophthalmol 2023](https://gjyk.ijournals.cn/gjyken/article/abstract/20230923)
- Accessibility of maps: Datawrapper provides an alternative-description field (which hides the chart body from
  assistive tech to avoid redundancy) and a data-download link so screen-reader users can hear the numbers —
  [Datawrapper Academy](https://www.datawrapper.de/academy/how-we-make-sure-our-charts-maps-and-tables-are-accessible); map images need a text alternative that states the map's purpose, and multiple formats are best — [SDSU accessibility hub](https://www.sdstate.edu/digital-accessibility-hub/accessibility-data-visualizations); static alt text cannot follow an interactive map, so AltGeoViz (IEEE VIS 2024) generates alt text from the current map view; five screen-reader users could build spatial understanding with it — [AltGeoViz PDF](https://makeabilitylab.cs.washington.edu/media/publications/Li_AltgeovizFacilitatingAccessibleGeovisualization_IEEEVIS2024.pdf)
- Tooltips and rollovers should be assumed unseen and important content should not be hidden behind interaction —
  [The Mario Blog on Archie Tse](https://garciamedia.com/?p=2509) (secondary)

### Inferences
- **Phone layout.** History's rule (≤900 px: the panel covers the map and the scene settles while the panel enters
  from below) is right for text-heavy History but costly for Geography, where the map *is* the evidence. Recommend a
  bottom-sheet panel that leaves the top ~45–55% of the screen for the map at the moment of the hold, with the camera
  target shifted upward so the subject is centred in the visible strip, and a "collapse panel" handle. Keep cross-
  sections and small multiples inside the panel (they are 2D and work at 375 px).
- **Reduced motion.** Keep the existing snap behaviour (engine `reduced` → state cut), but cross-fade 150–250 ms rather
  than hard-cut (fades are not vestibular triggers); stop auto-rotation, particle advection and parallax; replace
  animated flows with static arrows of the same colour and a "play" button that the reader can press (WCAG 2.2.2). Add a
  visible motion toggle in the pill menu, since teachers projecting the page may have vestibular issues (Agrawal).
- **Text–map sync.** Colour-match key words in the panel to map layers (a coloured underline or swatch) and make them
  tappable to pulse that layer (the "linking" that improved recall in Zhi et al.). Every scene title should state the
  takeaway (Borkin), e.g. *"Where plates pull apart, new crust is made"*, not *"Mid-Atlantic Ridge"*.
- **Labels.** History's glass chips (dark 66% background + 6 px blur) already act as soft halos; keep them for place
  labels, and use Patterson-style feathered halos for labels drawn *into* textures (rivers, ridges). Leave point
  markers without halos.
- **Colour.** Use one sequential ramp for depth/elevation/intensity, one diverging ramp for anomalies (temperature,
  population change), and a categorical set of at most 5 for boundaries/hazards; check every ramp with a CVD simulator.
  Avoid the classic red/green "deforestation vs forest" and rainbow "earthquake depth" palettes.
- **Text alternatives.** Each scene's data file should carry a one-sentence `alt` describing what the map shows at the
  hold (e.g., "Globe centred on the Pacific; red lines mark the Ring of Fire; 12 labelled volcanoes"), rendered as
  visually hidden text inside the panel, plus a "numbers" table where the map shows data. This also serves the
  no-WebGL fallback the History chapter already promises.

### Gaps
- No source was found on how the major newsrooms implement `prefers-reduced-motion` in globe stories.
- No data on motion-sickness prevalence among 14–16-year-olds specifically.
- Crameri's named maps (batlow, oleron, vik, roma) were not confirmed by the search results; check
  `fabiocrameri.ch/colourmaps` (licence and exact ramps) before naming them in the report.
- Text–map linking evidence (Zhi et al.) comes from adult crowdworkers, not teenagers.

## 4. What does learning science say, and how should it shape scene length, how much moves at once, and where "Check yourself" prompts go?

### Takeaway
The evidence supports short, learner-paced segments with signalling and words placed next to the picture; animation
helps only modestly on average and only when it shows change the learner must understand; realism and salience do not
help novices unless they know what to look for (so pre-train key terms and point at the right feature); scrollytelling
raises engagement but has not been shown to raise comprehension by itself; and retrieval practice interpolated
through the narrative is the most reliable lever for memory. Design for one idea per scene, one moving thing at a time,
a prediction before each reveal, a quick check per scene, and a cumulative check every 10–15 minutes.

### Cited Findings
**Mayer's multimedia principles**
- Segmenting (learner-paced segments) was supported in 10 of 10 tests with a median d = 0.79; pre-training (names and
  characteristics of key concepts first) in 13 of 16 tests, median d = 0.75 — [Mayer & Pilegard, Cambridge Handbook of Multimedia Learning, ch. "Segmenting, pretraining and modality principles"](https://cambridge.org/core/books/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258) (values via search summary)
- A Mayer review in the *Journal of Computer Assisted Learning* reports a median d = 1.67 for the multimedia principle
  (words + pictures vs words alone, 5 comparisons); search snippets gave inconsistent values for coherence, signalling,
  segmenting and pre-training (0.70 / 0.46) and should be checked in the original — [MetaTOC listing: "Using multimedia for e-learning"](https://www.metatoc.com/papers/105408-using-multimedia-for-e-learning)
- Meta-analysis of segmenting (Rey et al. 2019, *Educational Psychology Review* 31:389–419; 56 investigations, 88
  comparisons): small-to-medium effects on retention and transfer, lower overall cognitive load, longer learning time;
  effects also hold for *system-paced* segmentation; learners with *higher* prior knowledge gained more on retention —
  [MPI-IS](https://is.mpg.de/publications/rey2018segmenting); [DOI](https://www.doi.org/10.1007/S10648-018-9456-4)
- Meta-analysis of cueing/signalling (Xie et al. 2017): retention d = 0.27, transfer d = 0.34, subjective cognitive
  load d = −0.11 — [PMC5576760](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5576760/)

**Animation versus static images, and cognitive load**
- Höffler & Leutner (2007, *Learning and Instruction* 17(6); 26 studies, 76 comparisons): animation beat static
  pictures with d = 0.37 overall; representational (not decorative) animation d = 0.40; highly realistic video-based
  d = 0.76; procedural-motor knowledge d = 1.06 — [Leibniz IPN](https://www.leibniz-ipn.de/en/research/publications/instructional-animation-versus-static-pictures-a-meta-analysis); [PDF](https://wikicap.ulb.be/images/e/ef/Hoffler_Leutner_2007.pdf)
- Berney & Bétrancourt (2016; 61 studies, N = 7,036, 140 comparisons): overall g = 0.226, a small effect —
  [UNIGE archive](https://archive-ouverte.unige.ch/unige:92234); [EARLI 2016 slides](https://tecfa.unige.ch/perso/sandra/pdf/Earli2016_berney_betrancourt_FINAL.pdf)
- Tversky, Morrison & Bétrancourt (2002): research on animated over static graphics "is not encouraging"; apparent
  advantages often reflect non-equivalent content or procedures; "judicious use of interactivity may overcome both
  these disadvantages" — [Stanford copy](https://hci.stanford.edu/courses/cs448b/papers/Tversky_AnimationFacilitate_IJHCS02.pdf)
- Transient information effect: animations replace information continuously, so learners must hold vanished frames in
  working memory; this is usually cited as the main reason animations are not more effective than static pictures
  (Ayres & Paas 2007); controlling speed and sequence via a learner-control device "such as the scrollbar" can offset
  transience — [UNSW appendix](https://www.animations.physics.unsw.edu.au/appendices/Appendix9.pdf); [Birmingham: transient information and element interactivity](https://birmingham.elsevierpure.com/en/publications/52472d3c-eb17-42be-8c05-609405d3b309)
- Salience and knowledge (Hegarty, Canham & Fabrikant 2010, *JEP: LMC* 36(1)): on weather maps, making task-relevant
  information more salient had no effect on accuracy *before* students learned the meteorological principles, and
  improved accuracy *after*; eye fixations were driven mainly by task and knowledge — [Ovid](https://www.ovid.com/journals/jeplm/pdf/00004786-201001000-00021~thinking-about-the-weather-how-display-salience-and); novices attend to the most salient features while experts attend to thematically relevant ones — [Canham & Hegarty 2006 via eScholarship](https://escholarship.org/uc/item/27b2r8kb); Fabrikant, Hespanha & Hegarty (2010) found salience changed eye movements and response time but not accuracy — [Fabrikant PDF](https://user.geo.uzh.ch/sfabri/pubs/fabrikant_etal_an09.pdf)
- "Naïve realism" (Smallman & St. John 2005, *Ergonomics in Design*): users and designers prefer realistic displays that
  perform poorly; increasing realism often impaired performance, and lowering terrain fidelity revealed the layout
  needed for the task; low-spatial-ability users needed explicit feedback to recalibrate — [UNC copy](https://tarheels.live/topics/wp-content/uploads/sites/2744/2023/04/naive-realism.pdf); [PhilPapers](https://api.philpapers.org/rec/SMANRF)

**Narrative visualisation and scrollytelling studies**
- Segel & Heer (2010) frame narrative visualisation as a balance between author-driven flow and reader-driven
  discovery; the "martini glass" starts author-driven and then opens up for exploration — [Segel & Heer PDF](https://homes.cs.washington.edu/~jheer/files/narrative.pdf)
- McKenna et al. (EuroVis 2017; 80 stories analysed, seven "flow factors"; n = 240): visuals and navigation feedback
  (e.g., static vs animated transitions) affected engagement; level of control (discrete vs continuous, i.e. stepper
  vs scroller) may not — [Utah VDL](https://vdl.sci.utah.edu/publications/2017_eurovis_narrative-flow/); [PDF](https://users.cs.utah.edu/~miriah/publications/narrative-flow.pdf)
- Boy, Détienne & Fekete (CHI 2015, three field experiments): introductory stories did *not* increase engagement with
  exploratory visualisations (people spent less time and interacted less after the story); memory/understanding were not
  measured — [HAL](https://hal-imt.archives-ouvertes.fr/hal-01133595); [conference report](https://tagteam.harvard.edu/hub_feeds/1977/feed_items/2100766)
- Recent studies: scrollytelling privacy policies gave higher engagement, lower cognitive load and more perceived clarity
  but the same comprehension accuracy as text — [arXiv 2603.04367 / ACM](https://dl.acm.org/doi/10.1145/3772318.3790704); a visualisation-onboarding study (n = 25) found no comprehension difference between static, scrollytelling and chatbot formats but higher engagement for interactive ones — [arXiv 2607.03023](https://arxiv.org/abs/2607.03023); a within-subjects journalism study found higher perceived engagement for scrollytelling — [Umeå University thesis](https://umu.diva-portal.org/smash/get/diva2:1810221/FULLTEXT01.pdf); an older study found scrolling vs paging readers recalled equally but scrollers took longer — [ISLS](https://repository.isls.org/bitstream/1/497/1/18.pdf)

**Map literacy and misconceptions (teenagers)**
- Grade 11 students had difficulty understanding topographic maps and landforms associated with contour patterns, a
  problem the authors say is not unique to South Africa; an AR sandbox helped landscape understanding but not
  cross-section construction — [Evans, Fleming, Thwala & Drennan, Terra Didatica 2018](https://www.ige.unicamp.br/terraedidatica/v14_4/144-8.html)
- Secondary students hold many plate-tectonics alternative conceptions, the greatest confusion being the cause of
  subduction at ocean–continent boundaries (Mills, Tomas & Lewthwaite 2017, n = 95); Singapore secondary students find
  eruptions and earthquakes hard to visualise from textbook text and images — [QUT ePrints](https://eprints.qut.edu.au/107275/3/107275.pdf); [NIE repository](https://repository.nie.edu.sg/server/api/core/bitstreams/9b8ae117-c098-4e09-aca0-d2c498465f27/content)

**Retrieval practice inside narratives**
- Interpolated memory tests during a 21-minute online lecture halved mind-wandering (from about 40% of the time in
  untested students), tripled extra note-taking, improved retention, and reduced anxiety about the final test; simply
  breaking up the lecture or re-studying did not help — [Szpunar, Khan & Schacter 2013, PNAS](https://pmc.ncbi.nlm.nih.gov/articles/PMC3631699/); [Harvard Psychology](https://psychology.fas.harvard.edu/publications/interpolated-memory-tests-reduce-mind-wandering-and-improve-learning-online)
- Classroom evidence: of 50 school/classroom experiments (n = 5,374), 57% of effect sizes showed medium or large
  benefits of retrieval practice across levels, subjects, delays and formats; 40% were in secondary schools; 94% were in
  the US and Western Europe — [Agarwal, Nunes & Blunt 2021, Educ Psych Review 33(4)](https://www.retrievalpractice.org/review); [TeacherToolkit summary](https://www.teachertoolkit.co.uk/2021/08/22/classroom-retrieval-practice/)
- Prequestions before each of three video segments improved learning of both prequestioned and new material (n = 85,
  Carpenter & Toftness 2017); with real 20-minute lectures the benefit was limited mostly to prequestioned content
  (Toftness et al. 2018) — [Royal Holloway PDF](https://pure.royalholloway.ac.uk/files/30437641/JARMAC_Toftness_et_al.pdf); [Learning Scientists](https://www.learningscientists.org/blog/2017/11/2-1)

### Inferences
- **Scene length.** One idea per scene, about 60–120 words of body plus one visual, roughly 1–2 minutes (History
  averages ~1.5 min/scene: 33 scenes in ~50 min). Segmenting is supported even when the system sets the breaks, and the
  scroll gives learner pacing for free. Split any scene that needs two map changes.
- **How much moves.** At most one moving element at a time: either the camera flies (in the gap) *or* a layer
  animates (during the hold), never both. Animated data should be two or three classes. Use animation only when the
  concept *is* motion (plate movement, storm track, flow, sprawl over time); otherwise a static, well-labelled state.
- **Pre-training.** Open each Part with a 3–5-term "key words" strip with mini-icons (e.g., *crust, mantle, plate
  boundary, subduction, magma chamber*), because salience only helps once students know what to look for (Hegarty).
- **Signalling.** Arrows, pulses and colour-matched words that point at the task-relevant feature; dim the rest
  (coherence). Avoid photoreal textures where a cleaner map would show the pattern better (naïve realism).
- **Check yourself placement.** Keep one per scene (as History does), but make some of them *predictions* before the
  reveal ("Where will the next big earthquake on this boundary be most likely?") — a prequestion that orients
  attention. Add a cumulative 3–5-question retrieval block at the end of each Part, about every 10–15 minutes,
  mirroring Szpunar's interpolated tests, with exam-style command words ("Describe", "Explain", "Suggest") and
  mark-scheme-style answers. Never make the check blocking; tap-to-reveal stays.
- **Misconceptions.** Give the subduction scene a "Common mistake / In fact" block on *why* the oceanic plate sinks
  (density), as History already supports `misconception`.
- **Engagement ≠ learning.** Scrollytelling's measured advantage is engagement, not comprehension; comprehension has to
  come from the content design (segmenting, signalling, retrieval), not from the motion.

### Gaps
- No study was found that measures *retention* from a scroll-driven globe story against a static version, and none
  with 14–16-year-olds.
- Mayer's coherence, signalling, spatial and temporal contiguity effect sizes could not be confirmed from a primary
  source in this session (snippets conflicted); the report should cite the 2021 *Multimedia Learning* (3rd ed.) or the
  2017 JCAL review directly.
- Map-literacy evidence for teenagers is thin and mostly about contour maps; nothing was found on teenagers reading
  choropleths or globes specifically.
- Agarwal et al. note 94% of classroom studies come from the US/Western Europe; no evidence specific to Chinese
  international-school students was found.

## 5. How can the Geography chapter be visually distinct while staying consistent with the History chapter's typography and navigator?

### Takeaway
Keep the *grammar* (serif capitals with an italic lead word, Plex Mono capitals, pill tags, glass panel, glass pill
navigator with orb, a bottom ribbon) and change the *material and accent*: a blue water-first globe (shaded bathymetry,
dark land with relief), with part-specific "skins" (plate boundaries + seismicity, night lights, climate anomaly),
blue pills and orb, and a ribbon whose units change by part.

### Cited Findings
- Dark bathymetry patterns under flow visualisations, with land ×20 and seafloor ×40 exaggeration, are NASA SVS's
  established look for ocean stories — [NASA SVS 3827](https://svs.gsfc.nasa.gov/3827); [NASA SVS 5425](https://svs.gsfc.nasa.gov/5425)
- Black Marble night-light composites are available as flat global JPEG/GeoTIFF at 3600×1800, 13500×6750 and
  86400×43200 and are used to monitor urbanisation — [NASA Earth at Night flat maps](https://science.nasa.gov/earth/earth-observatory/earth-at-night/maps/); [NASA Earthdata](https://www.earthdata.nasa.gov/data/projects/black-marble)
- Height rather than colour communicates population density more legibly (Daniels' rationale for Human Terrain) —
  [Creative Bloq](https://creativebloq.com/news/stunning-dataviz-project-maps-the-worlds-population)
- Use perceptually uniform, CVD-readable colour maps rather than rainbow or red–green — [Crameri et al. 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7595127)
- Modest exaggeration combined with illumination and hypsometric tint enhances apparent relief — [Shaded Relief](https://shadedrelief.com/3D_Terrain_Maps/3dterrainmapsver.html)

### Inferences
- **Accent triad.** Swap History's violet for a blue triad on the same ink. Computed WCAG contrast (this session):
  `--acc #7cc4ff` on `#05060a` = 10.8:1; site `--geo #5fb0ff` on `#05060a` = 8.8:1 (History's `#b693ff` is 8.3:1);
  white on a deep pill `#1f5fbf` = 6.1:1 (History's white on `#6d3fd0` is 6.4:1); dark ink `#06182e` on `#7cc4ff` = 9.5:1.
  So `--acc: #7cc4ff; --acc-deep: #1f5fbf; --acc-ink: #06182e` keeps every History text pairing at AA or better. Keep
  one warm secondary only for hazards and heat (e.g., `#ff9b54`, 9.7:1 on ink), so blue reads as water/calm and orange
  as danger.
- **Globe material.** Base: ocean shaded by depth (one sequential blue ramp, lighter on shelves, near-black in
  trenches) with hillshaded dark land, i.e. History's relief approach turned inside-out (History emphasises land
  borders; Geography emphasises sea floor and physical relief). No political fills except where a case study needs a
  country outline. Part skins, cross-faded only during part-title screens:
  - *Plate tectonics/hazards:* plate boundaries as thin glowing lines coloured by type (constructive / destructive /
    conservative), earthquakes as points sized by magnitude and shaded by depth (sequential, not rainbow), volcanoes as
    small triangles; trenches visible in the bathymetry.
  - *Tropical storms and coasts:* warm sea-surface-temperature band (≥26–27°C) as a soft overlay, storm tracks as
    drawn tubes (History's arrow/tube code), particle inflow during one hold only.
  - *Rivers:* drainage basins as faint fills, one main river traced by a glowing "raindrop" head (History's line
    `uDraw` reveal), long profile in the panel.
  - *Population/urbanisation:* night lights (Black Marble) on a darkened day side, megacity spikes.
  - *Climate:* diverging anomaly ramp, ice extent outlines.
- **Ribbon.** Same position and styling as History, but the unit follows the part (Ma log scale → years → hours →
  km from source). The serif "year" becomes a serif *value* ("200 MA", "1950", "36 H", "KM 1,200").
- **Navigator.** Same pill and orb; tint the orb blue, and let it show a tiny depth/elevation gauge or a mini-globe
  with the current camera box (locator inset) at *site* zoom.
- **Type.** Keep serif capitals with italic lead word ("*Where* plates pull apart"), Plex Mono for labels, units and
  exaggeration notes, and pills for part names. Add a mono "SECTION A–B" label convention for cross-sections so the
  section line on the globe and the SVG diagram share a name.
- **Light/dark.** The chapter should stay dark (like History, `data-tone="dark"`) because night lights, bathymetry and
  glowing lines need it; the light theme can apply to the end-of-chapter toolkit only.

### Gaps
- No exemplar was found that formally tests distinct "materials" per topic in one narrative; the part-skin idea is a
  design inference.
- Licences, file sizes and processing of bathymetry (GEBCO/ETOPO), Black Marble and plate-boundary datasets are covered
  by the parallel datasets research, not here.

## 6. What would make it exceptional rather than merely good, and what are the common failure modes?

### Takeaway
Exceptional pieces make one invisible process visible at human scale, tie every visual to a sentence the reader is
reading, show measured evidence (not just illustration), and let the reader test themselves; they fail when motion is
decorative, pages are heavy, labels drown in imagery, phones get a desktop layout, or the scroll is hijacked.

### Cited Findings
- Snow Fall needed custom code because its data size risked freezing or crashing the page — [CGW](https://www.cgw.com/Press-Center/News/2013/Students-Elevate-Work-on-Groundbreaking-Times-Pi.aspx); [Studio Republic](https://www.studiorepublic.com/blog/snowfall-design/)
- Scrolljacking is "generally considered bad practice"; keep the scroll on phones only where transitions are
  meaningful — [The Pudding](https://pudding.cool/process/responsive-scrollytelling/)
- Interactives must clear a "very high" bar; hidden content and tooltips are often missed — [Nieman Lab](https://www.niemanlab.org/2016/03/at-the-malofiej-infographics-world-summit-the-best-form-of-storytelling-is-often-static/); [The Mario Blog](https://garciamedia.com/?p=2509)
- Animated map changes are missed and readers are overconfident about them — [Penn State GEOG 486 on Fish et al. 2011](https://courses.ems.psu.edu/geog486/book/export/html/924)
- Realistic displays are preferred but often perform worse — [Smallman & St. John](https://tarheels.live/topics/wp-content/uploads/sites/2744/2023/04/naive-realism.pdf)
- Too much vertical exaggeration misleads and confuses — [Wikipedia: Vertical exaggeration](https://en.wikipedia.org/wiki/Vertical_exaggeration); [Shaded Relief](https://shadedrelief.com/3D_Terrain_Maps/3dterrainmapsver.html)
- Weather Channel's surge segment worked because it set the hazard against a person — [Pew Trusts](https://www.pewtrusts.org/en/research-and-analysis/articles/2018/12/03/the-weather-channel-uses-animation-to-show-dangers-of-storm-surge)
- Engagement gains from storytelling formats do not by themselves produce comprehension gains — [ACM: Scrollytelling privacy policies](https://dl.acm.org/doi/10.1145/3772318.3790704); [Boy et al. 2015](https://hal-imt.archives-ouvertes.fr/hal-01133595)
- Measured facts from this repo (CLAUDE.md, 2026-10-23): History's world.js is 582 KB, borders.json 414 KB, relief
  textures 174 + 366 KB; painting one scene's textures takes 55–120 ms on the dev Mac (Berlin ~265 ms), so neighbours
  are painted in idle time.

### Inferences
**What would make it exceptional**
1. *A single through-line per part with a human anchor*: e.g., "follow one raindrop from the Tibetan Plateau to the
   Yangtze delta", "follow one plate from the Mid-Atlantic Ridge to the Peru–Chile trench", "follow one typhoon from warm
   water to landfall". Each ends at a named IGCSE case study.
2. *Process → model → evidence → case → impact → response*, the exam's own logic, every time: a generic animated
   model (WaPo Michael style), then measured evidence (InSAR / coherence map / before–after / repeat photography), then
   the named case with numbers and sources.
3. *Exam-drawable diagrams*: every cross-section is built in steps the student could reproduce in an exam answer, and
   the final step shows the labelled "exam version".
4. *Human scale and local hooks*: a person next to surge height, a familiar Chinese city as a baseline, a "where was
   your city 200 million years ago" moment (Ancient Earth) with a fixed list, no geolocation.
5. *Honest cartography visible on screen*: exaggeration factors, data dates, a scale bar and locator at site zoom,
   every number linked to a source (History's `facts`/`sources` model).
6. *Retrieval woven in*: predictions before reveals, a check per scene, a cumulative check per part, and an end
   "toolkit" with exam-style questions (History already has `toolkit.checks`).
7. *Fallback parity*: no-WebGL and reduced-motion readers get the same content as static images and text, not a
   degraded page.

**Common failure modes and mitigations**
- *Scroll-jacking / smooth-scroll lag*: Lenis is not scroll-jacking but changes feel; keep it disabled under reduced
  motion (as now) and make sure wheel, keyboard and touch all move content at native speed.
- *Motion sickness*: long fast flights, constant auto-rotation, parallax, large-field particle motion; keep flights in
  gaps, cap angular speed, stop rotation during holds, provide a motion toggle.
- *Unreadable labels*: labels over bright imagery or busy relief; use glass chips/soft halos, limit to ~5–8 labels
  per hold, minimum ~11–12 px mono at 375 px, and never label in the panel-covered area on phones.
- *Decorative animation*: anything moving that is not a real process; remove it.
- *Change blindness*: changing data during flights or fading several layers at once; one change per hold, dim old
  layers, tween.
- *Heavy loading on school devices / Chinese networks*: big textures and many scenes; budget the first paint (hero
  globe + first part) to roughly History's size, lazy-load part skins at part titles, use 2048-px bases with regional
  detail textures as History already does, cap particles, and keep a static fallback. All assets vendored (no CDN).
- *Desktop-only design*: map hidden under the panel on phones; use the bottom-sheet layout and test at 375 px (as the
  History chapter was).
- *Rainbow/red–green ramps*: replace with sequential/diverging CVD-safe ramps.
- *Engagement without learning*: rich motion but no retrieval; keep checks and exam links.

### Gaps
- No measured performance data for low-end Chromebooks/Android phones typical of the school was found; the History
  chapter's timings are from a dev Mac only, so real-device testing is needed before deciding texture sizes and
  particle counts.
- No empirical study was found on motion sickness from scroll-driven globe flights specifically.
- Exact recommended label sizes over imagery for phones were not found in a primary source; the 11–12 px figure is a
  practical inference matching the History chapter's existing marker size (11 px mono).
