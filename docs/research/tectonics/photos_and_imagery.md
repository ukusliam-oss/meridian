# Openly licensed photographs and satellite imagery for the "Tectonic hazards" chapter and its Paper 1 Section A practice room

Researched 2026-10-23 in the cloud sandbox. Scope: images for the 30-scene chapter outlined in
`docs/Geography 스크롤 챕터 설계 리서치.md` (scenes 5–8, 12–17, 19–30) and for the practice-room Insert
(Fig. 1.1 regional quake map, Fig. 1.2 location map, Photo 1.3).

**Method and its limits (read first).**
- WebFetch could not resolve any agency host: commons.wikimedia.org, earthobservatory.nasa.gov and www.usgs.gov all
  returned ENOTFOUND.
- WebSearch was cut off after four queries. The tool said the 200-search budget for this turn, shared with the other
  agents, was used up. Those four queries covered the USGS policy, the Maxar licence, the GeoNet licence and ESA's
  CC BY-SA 3.0 IGO terms. I made no more searches and did not work around the limit.
- So no Wikimedia Commons file page, USGS photo page, NASA Earth Observatory article or Copernicus EMS product was
  opened or verified. Ground-level photographs are mostly the gap that remains.
- What I could verify directly: curl through the proxy reaches public **AWS S3 buckets** and **Google Cloud Storage**,
  not only raw.githubusercontent.com, npm and PyPI. I listed and HEAD-checked public imagery buckets: Maxar Open Data,
  Sentinel-2 L2A COGs, NOAA GOES-17, NOAA Himawari-8, the GeoNet camera archive, the Landsat Collection 1 mirror and
  Copernicus DEM. I read their licence statements from the AWS Open Data Registry YAML files on
  raw.githubusercontent.com.
- I installed rasterio from PyPI in a scratch venv, read small windows from cloud-optimized GeoTIFFs with HTTP range
  requests, and saved six small verification crops. I looked at each one.
- Each "reachable" line below gives an exact object URL and a byte size from an HTTP HEAD or listing. Items marked
  **UNVERIFIED** are leads from prior knowledge. Check them outside the firewall before use.

Verification samples saved (untrusted data, never executed), all in
`/tmp/claude-0/-home-user-meridian/307a9112-9d66-5ee5-94ce-4faaf7e89f46/scratchpad/geo-data/images/`:

| File | Bytes | What it shows |
|---|---|---|
| `maxar_antakya_20221222.jpg` | 181,206 | Central Antakya before the quake, about 540 × 555 m, 0.89 m/px |
| `maxar_antakya_20230211.jpg` | 174,903 | Same area after the quake; collapsed blocks and rubble-filled streets are clear |
| `s2_hunga_20211203.jpg` | 114,267 | Hunga Tonga–Hunga Haʻapai island whole, with its crater lake (9.4 × 8.9 km, 20 m/px) |
| `s2_hunga_20220211.jpg` | 91,452 | Same area after 15 Jan 2022; only two small remnants are left |
| `geonet_WHOH_2019343_0120.jpg` | 296,501 | GeoNet camera at Whakatāne, 2019-12-09 01:20 UTC; eruption plume over Whakaari (2048 × 1536) |
| `landsat7_eyjafjallajokull_20100419.jpg` | 135,027 | Landsat 7, 19 Apr 2010; poor (scene edge, SLC-off stripes); kept only as evidence |

Two more GeoNet frames, one of Taranaki and one from the Whakaari crater rim, were downloaded, found to show only
cloud or fog, and deleted.

---

## Q1. What can actually be fetched from this sandbox, and under what licence?

### Takeaway
Six openly licensed imagery archives are fully reachable from the sandbox, each with a stated licence:

| Archive | Covers | Licence |
|---|---|---|
| Maxar Open Data | Türkiye 2023, Tonga 2022 | CC BY-NC 4.0 |
| Sentinel-2 L2A COGs | 2015 onward, anywhere | Copernicus free and open |
| NOAA GOES-17 | Tonga plume | NOAA NODD, "can be used as desired" |
| NOAA Himawari-8 | Tonga plume | JMA data, distributed freely by NOAA |
| GeoNet volcano cameras | Whakaari, Taranaki, Ruapehu, Ngauruhoe and more | CC BY 3.0 NZ |
| Landsat 7 / 5 Collection 1 on GCS | 2010 Eyjafjallajökull and Merapi | US public domain |

Copernicus DEM GLO-30 tiles are also reachable for relief renders of every volcano and plate boundary. Wikimedia,
USGS, NASA, ESA, Copernicus EMS, GNS and BNPB web hosts are not reachable.

### Cited Findings
- **Maxar Open Data** (S3 bucket `maxar-opendata`, reachable):
  - The event folders `events/Kahramanmaras-turkey-earthquake-23/` and `events/tonga-volcano21/` exist. Each
    `collection.json` carries `"license": "CC-BY-NC-4.0"`.
  - Türkiye collection: title "Turkey and Syria Earthquake 2023", 15,600 bytes, 76 acquisitions, temporal extent
    2021-02-28 to 2023-03-11.
  - Tonga collection: title "Tonga Volcano", 3,158 bytes, 10 acquisitions, 2021-03-27 to 2022-01-18.
  - Sources: [Türkiye collection.json](https://maxar-opendata.s3.amazonaws.com/events/Kahramanmaras-turkey-earthquake-23/collection.json); [Tonga collection.json](https://maxar-opendata.s3.amazonaws.com/events/tonga-volcano21/collection.json)
- AWS registry entry for Maxar: "License: Creative Commons Attribution Non Commercial 4.0"; "New data is released in response to activations." — [awslabs open-data-registry maxar-open-data.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/maxar-open-data.yaml)
- Maxar's own blog says imagery released through the programme is CC BY-NC 4.0, chosen so that responders can use it
  quickly. Commercial users must buy the imagery. — [Maxar blog: Türkiye–Syria 2023 open data](https://blog.maxar.com/for-a-better-world/2023/open-data-response-to-the-earthquakes-in-turkey-and-syria); [Maxar event page](https://maxar.com/open-data/turkey-earthquake-2023); [AWS registry page](https://registry.opendata.aws/maxar-open-data/)
- **Sentinel-2 L2A COGs** (Element 84, bucket `sentinel-cogs`, reachable). Registry licence text: "Access to Sentinel
  data is free, full and open for the broad Regional, National, European and International user community", linking
  the Sentinel Data Legal Notice. — [sentinel-2-l2a-cogs.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/sentinel-2-l2a-cogs.yaml)
- The Sentinel legal notice permits reproduction, distribution and adaptation. Modified data must carry "Contains
  modified Copernicus Sentinel data [Year]". — [ESA Sentinel Data Legal Notice](https://sentinel.esa.int/documents/247904/690755/Sentinel_Data_Legal_Notice) (as quoted in `docs/research/geography/datasets_and_licences.md`)
- **NOAA GOES** (buckets `noaa-goes16/17/18`, reachable). Registry licence text:
  - "NOAA data disseminated through NODD are open to the public and can be used as desired."
  - "NOAA requests attribution for the use or dissemination of unaltered NOAA data. However, it is not permissible to
    state or imply endorsement by or affiliation with NOAA. If you modify NOAA data, you may not state or imply that it
    is original, unaltered NOAA data."
  - Source: [noaa-goes.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/noaa-goes.yaml)
- **NOAA Himawari** (bucket `noaa-himawari8`, reachable). Registry licence text:
  - "Himawari data is produced and managed by JMA. NOAA has rights to distribute this data freely and openly to the
    public."
  - "NOAA and JMA request attribution for the use or dissemination of unaltered data. However, it is not permissible
    to state or imply endorsement by or affiliation with NOAA or JMA. If you modify these data, you may not state or
    imply that it is original, unaltered data."
  - Source: [noaa-himawari.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/noaa-himawari.yaml)
- **GeoNet open data** (bucket `geonet-open-data`, ap-southeast-2, reachable). Top-level prefixes are `camera/`,
  `coastal/`, `gnss/`, `landslide-products/`, `seismic-products/`, `time-series/` and `waveforms/`.
  `camera/volcano/images/` holds yearly folders from 2000 to 2026. Registry licence text: "GeoNet data are made
  available free of charge under 'CC3 licence' [https://creativecommons.org/licenses/by/3.0/nz/] … Please acknowledge
  the GeoNet programme and its sponsors when using the data, see 'GeoNet Data Policy'." — [geonet.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/geonet.yaml)
- **Landsat Collection 1 on Google Cloud** (`gcp-public-data-landsat`, reachable). 2010 scenes exist for Merapi
  (WRS-2 120/065) and Eyjafjallajökull (218/015), each with its MTL metadata (details in Q3 and Q4). Landsat data have
  "no restrictions … it can be used or redistributed as desired", and the source should be stated. — [GCS Landsat index](https://storage.googleapis.com/gcp-public-data-landsat/index.csv.gz) (HTTP 200); [USGS Landsat FAQ](https://www.usgs.gov/faqs/are-there-any-restrictions-use-or-redistribution-landsat-data) (cited in the datasets note)
- **Copernicus DEM GLO-30** (`copernicus-dem-30m`, reachable). The readme says GLO-30 Public and GLO-90 "are
  available on a free basis for the general public under the terms and conditions of the Licence". — [copernicus-dem.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/copernicus-dem.yaml); [bucket readme](https://copernicus-dem-30m.s3.amazonaws.com/readme.html)
- Unreachable hosts (curl status 000 or DNS failure, tested 2026-10-23): upload.wikimedia.org, commons.wikimedia.org,
  en.wikipedia.org, api.wikimedia.org, www.usgs.gov, earthquake.usgs.gov, volcanoes.usgs.gov, pubs.usgs.gov,
  sciencebase.gov, earthobservatory.nasa.gov, eoimages.gsfc.nasa.gov, svs.gsfc.nasa.gov, images.nasa.gov,
  worldview.earthdata.nasa.gov, gibs.earthdata.nasa.gov, emergency.copernicus.eu, www.esa.int, www.geonet.org.nz,
  data.geonet.org.nz, www.gns.cri.nz, www.jma.go.jp, bnpb.go.id, photolib.noaa.gov, cdn.star.nesdis.noaa.gov,
  gws-access.jasmin.ac.uk (COMET LiCSAR), archive.org, zenodo.org, huggingface.co, flickr.com, cdn.jsdelivr.net and
  unpkg.com. Two USGS website media buckets (`d9-wret`, `prd-wret`) answer 403 to a listing, so files there need exact
  keys. (Own test.)

### Inferences
- Satellite crops can be **made reproducibly from this sandbox**. A build script (for example `tools/build-geo-images.mjs`
  or a Python `-I` script) could read COG windows by range request and commit only the small JPEG/WebP crops. This
  avoids slow downloads from mainland China, the problem the CLAUDE.md "Traps" section records.
- For a public, non-commercial, vendored site these licences work as follows:
  - Sentinel-2, Landsat, Copernicus DEM, GOES and Himawari crops may be cropped, annotated and redistributed with a
    credit line.
  - Maxar crops may be cropped and annotated, but only for non-commercial use (CC BY-NC 4.0). Keep them in separate
    files with their own notice, as `BORDERS-LICENSE.txt` does for CShapes.
  - GeoNet frames are CC BY 3.0 NZ: adapt freely, with attribution and a note of changes.

### Gaps
- Whether these S3 and GCS hosts are reachable, or fast, from the school network in mainland China was not tested.
  That does not matter if crops are baked in the sandbox and committed.
- Maxar Intelligence may have rebranded since 2025. I did not check whether the open data programme name or its
  credit format changed. The S3 bucket and its CC BY-NC 4.0 metadata were live on 2026-10-23.

---

## Q2. Türkiye–Syria 2023: damaged buildings, surface rupture, before/after imagery and InSAR

### Takeaway
The best verified material is Maxar WorldView-2/3 imagery at 0.3–0.8 m, before and after, for central Antakya,
central Kahramanmaraş and İslahiye on the East Anatolian Fault. It is reachable now, CC BY-NC 4.0, and the Antakya crop
clearly shows pancaked blocks and rubble-filled streets. Maxar also publishes building-change polygons and Sentinel-1
change polygons for a damage layer. Ground photographs (Commons, USGS) and InSAR images (ESA, NASA ARIA, COMET)
**could not be identified or verified** this session.

### Cited Findings
**T-1 (recommended) — Maxar, central Antakya before/after (scenes 22 and 23; also Photo-style resource for an earthquake item)**

Both images below are on the same ARD tile, `37/031133023302` (UTM 37N, EPSG:32637), with bbox 36.1209–36.1656°E,
36.1988–36.2477°N. Each `visual.tif` is a 17,408 × 17,408 px RGB COG on a 0.305 m grid, with overviews 2–64.

| | Before | After |
|---|---|---|
| Date and time (UTC) | 2022-12-22 08:24 | 2023-02-11 08:51 |
| Catalogue ID | 10300100DF6BFE00 | 10300100E18CB600 |
| Sensor and GSD | WorldView-2, 0.51 m | WorldView-2, 0.67 m |
| Off-nadir | 17.8° | 34.0° |
| Cloud | 0 % | 0 % |
| Tile cover | Data over 20.7 of 28.2 km² | Full tile |
| File size | **70,497,516 bytes** | **81,969,423 bytes** |

- Before, item JSON: https://maxar-opendata.s3.amazonaws.com/events/Kahramanmaras-turkey-earthquake-23/ard/37/031133023302/2022-12-22/10300100DF6BFE00.json
- Before, image: https://maxar-opendata.s3.amazonaws.com/events/Kahramanmaras-turkey-earthquake-23/ard/37/031133023302/2022-12-22/10300100DF6BFE00-visual.tif
- After, image: https://maxar-opendata.s3.amazonaws.com/events/Kahramanmaras-turkey-earthquake-23/ard/37/031133023302/2023-02-11/10300100E18CB600-visual.tif
- Alternatives on the same tile:
  - After 2023-02-08 (10300500D9F8D500, WV02, 0.78 m, 40.1° off-nadir): `.../2023-02-08/10300500D9F8D500-visual.tif`,
    **72,582,351 bytes**.
  - Before 2021-09-27 (10300500BFF95000, WV02, 0.57 m, 27.1° off-nadir, data over 26.5 km²). Size not checked.
- The neighbouring tile `031133023303`, just east across the Asi (Orontes), has its own pair: before 2022-12-22,
  **64,136,231 bytes**; after 2023-02-11, **76,110,576 bytes**.
- The verification crop spans 36.1565–36.1625°E, 36.2015–36.2065°N.
- Source: own listing and HEAD of the S3 objects above.

**T-2 — Maxar, central Kahramanmaraş before/after (scene 22, "Türkiye → Kahramanmaraş → Antakya" zoom)**
- Tile `37/031131233233`, bbox 36.90–36.96°E, 37.567–37.616°N.
- Before: 2022-07-26 08:19 UTC, 10300100D797E100, WV02, 0.54 m, 23.1° off-nadir, 0 % cloud, data over 15.9 km².
  **52,285,617 bytes.**
- After: 2023-02-11 08:52 UTC, 10300100E291D100, WV02, 0.63 m, 31.7° off-nadir, 0 % cloud. **71,160,847 bytes.**
- URLs follow the pattern
  `https://maxar-opendata.s3.amazonaws.com/events/Kahramanmaras-turkey-earthquake-23/ard/37/031131233233/<date>/<catalogue ID>-visual.tif`.

**T-3 — Maxar, İslahiye on the Pazarcık segment of the East Anatolian Fault (scene 21, rupture evidence)**
- Tile `37/031133012123`, bbox 36.580–36.641°E, 37.020–37.069°N.
- Before: 2022-12-27 08:40 UTC, 10300100E0287700, WV02, 0.49 m, 15.1° off-nadir. **66,636,080 bytes.**
- After: 2023-02-07 08:27 UTC, 1040010082698700, **WorldView-3, 0.31 m**, 6.0° off-nadir, 0 % cloud.
  **98,549,666 bytes.**
- Other 2023 acquisitions cover Nurdağı and Türkoğlu: 1050050044DE7E00 (2023-02-07) and 10300100E19A4400 (2023-02-11).
- Whether the surface rupture crosses this particular tile was **not checked**. Find the trace first in a rupture
  map (see Gaps), then pick the tile.

**T-4 — Maxar damage layers (scene 22 overlay)**
- `building_change/37_Feb11_vis_change.gpkg` (**1,837,957,120 bytes**) and `36_Feb11_vis_change.gpkg` (27,361,280 bytes).
  Polygons are tagged "removed building", "new building", "building to building" or "building change", with before
  and after dates and IDs. The description warns: "The change polygons are not building footprints … Image
  misalignment can cause false new building and removed building … Extreme tall building lean in the imagery can also
  affect results." Licence: CC BY-NC 4.0. — [DataDescription.txt](https://maxar-opendata.s3.amazonaws.com/events/Kahramanmaras-turkey-earthquake-23/building_change/DataDescription.txt)
- `pcm-sarfx/feb9|feb10|feb13-earthquake_pcm-sarfx.gpkg` (15.7 MB, 48.2 MB and 11.9 MB). This is a "Frequent Change
  Detection product created by analyzing changes between a short multi-temporal stack of five Sentinel-1 Synthetic
  Aperture Radar GRDH IW (10m) images before the earthquake, with one image after the event". Licence: CC BY-NC 4.0.
  It is the only radar-derived Türkiye product I could reach. — [pcm-sarfx DataDescription.txt](https://maxar-opendata.s3.amazonaws.com/events/Kahramanmaras-turkey-earthquake-23/pcm-sarfx/DataDescription.txt)

**T-5 — Sentinel-2 alternative (any scene that needs a free, non-NC licence)**
- Antakya is MGRS tile 37SBA and Kahramanmaraş is 37SCB. COGs live at
  `https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/37/S/BA/2023/<month>/…/TCI.tif`.
- At 10 m, Sentinel-2 shows city-scale change and debris fields but not individual collapses. Scenes for February
  2023 were not listed this session.

**Policy lines relevant here**
- USGS-authored material is US public domain; USGS asks only that it be acknowledged as the source. Non-USGS images on
  USGS sites "are generally marked as being copyrighted" and need the holder's permission. Credit examples:
  "Credit: U.S. Geological Survey", "Department of the Interior/USGS", "U.S. Geological Survey/photo by
  [photographer]". — [USGS credit page](https://www.usgs.gov/visual-id/credit_usgs.html); [USGS FAQ: are USGS reports copyrighted](https://www.usgs.gov/faqs/are-usgs-reports-copyrighted); [NOAA InPort copy of USGS policy](https://fisheries.noaa.gov/inport/item/59574)
- ESA releases "subsets of content … where expressly so stated … under the CC BY-SA 3.0 IGO licence". Credit formats
  are such as "ESA/Photographer's name, CC BY-SA 3.0 IGO". Users must link the licence and indicate changes. Other ESA
  material falls under the Sentinel data policy or ESA's standard terms. Example of a Sentinel-derived ESA credit:
  "contains modified Copernicus Sentinel data (2017), processed by ESA, CC BY-SA 3.0 IGO". — [open.esa.int](https://open.esa.int/?p=2) (search summary)

### Inferences
- **Recommended credit** for T-1 to T-4: "Satellite imagery: Maxar Open Data Program, [date], CC BY-NC 4.0
  (creativecommons.org/licenses/by-nc/4.0/). Cropped, resampled and labelled by Meridian." The metadata has no
  provider or attribution field (the item and collection JSON have no `providers` key), so Maxar's exact preferred
  wording (often seen as "© 2023 Maxar Technologies") should be confirmed on maxar.com/open-data.
- **Antakya caveat for captions:** the after image has a 34° off-nadir view against 17.8° before. Tall buildings lean
  differently, which inflates apparent change. Either use the 2022-12-22 / 2023-02-08 pair and note the angles, or say
  "view angles differ".
- Satellite views avoid the ethical problem of ground photos showing victims or rescuers. They fit KQ6's restrained
  tone and the plan's "실측 증거" (measured evidence) scene.
- The plan's suggestion to "make your own displacement / coherence map from Sentinel" (scene 21) is not achievable from
  this sandbox. Sentinel-1 SLCs sit behind ASF or Copernicus logins, and COMET LiCSAR is unreachable. The Maxar
  Sentinel-1 change polygons are the nearest reachable stand-in, and they are not a displacement field.

### Gaps
- **Collapsed-building ground photos (Antakya, Kahramanmaraş): none identified.**
  - Search outside the firewall: Commons MediaSearch for "Antakya 2023 earthquake" and "Kahramanmaraş 2023
    earthquake", restricted to CC0, PD, CC BY or CC BY-SA, at
    https://commons.wikimedia.org/w/index.php?title=Special:MediaSearch&type=image&search=Antakya+2023+earthquake.
  - USGS has no large ground-photo collection for this event that I know of. **UNVERIFIED.**
- **Surface-rupture and offset field photos: none identified.**
  - The most likely public-domain sources are USGS scientists' field photos, which have appeared in USGS news items and
    papers. Recalled lead: Reitman et al. (2023) in *The Seismic Record*, a USGS-led rupture-mapping paper with a
    ScienceBase data release. Its title, DOI and any photo URLs are **UNVERIFIED**.
  - GEER and EERI reconnaissance photos are not public domain by default.
  - The USGS event pages (us6000jllz for the M7.8 and us6000jlqa for the M7.5, cited in the plan) carry public-domain
    ShakeMap and PAGER images. They are the official map sources, but they are not photos.
- **NASA Earth Observatory before/after and the ARIA Damage Proxy Map** (JPL, from Copernicus Sentinel-1) for Antakya:
  not verified. JPL/Caltech images use the credit "NASA/JPL-Caltech", and their reuse terms differ from Earth
  Observatory's; this was not checked this session.
- **Copernicus EMS rapid-mapping products** for the activation (recalled as EMSR648, **UNVERIFIED**): terms not
  re-checked.
- **ESA Sentinel-1 interferogram pages and COMET LiCSAR interferograms** (recalled as CC BY 4.0, **UNVERIFIED**):
  not opened.

---

## Q3. Eyjafjallajökull 2010 and Merapi 2010

### Takeaway
Only Landsat 7 2010 scenes were verified (public domain, reachable on GCS). Eyjafjallajökull falls at the edge of the
19 April scene and the SLC-off stripes spoil it, so it is not display-quality. The 15 November Merapi scene (13 % cloud)
is the best reachable post-eruption view. The images people expect could not be verified this session: MODIS or ALI
plume images (NASA Earth Observatory), grounded aircraft and departure boards, ash-covered farms, USGS VDAP Merapi
photos, BNPB photos and NASA's Merapi images. They must be fetched outside the firewall.

### Cited Findings
**E-1 — Landsat 7 ETM+, 19 April 2010, WRS-2 path 218 row 015 (scene 24 or 25, as evidence only)**
- Folder: https://storage.googleapis.com/gcp-public-data-landsat/LE07/01/218/015/LE07_L1TP_218015_20100419_20161214_01_T1/
- MTL: DATE_ACQUIRED 2010-04-19, SCENE_CENTER_TIME 12:26:05Z, CLOUD_COVER 18.00, product corners 65.295°N 20.760°W to
  63.120°N 15.748°W. Band B3 is **18,335,275 bytes**, 8451 × 7721 px at 30 m, EPSG:32627.
- The verification crop (20.3–18.9°W, 63.35–63.95°N) shows Mýrdalsjökull clearly. The scene edge runs past
  Eyjafjallajökull, and SLC-off stripes cross the image. **Not recommended for display.**
- Other scenes on the same path: 2010-04-03 (67 % cloud), 2010-05-05 and 2010-05-21 (L1GT, Tier 2; not inspected).

**M-1 — Landsat 7 ETM+, 15 November 2010, path 120 row 065 (scenes 14 and 27; pyroclastic and lahar deposits from above)**
- Folder: https://storage.googleapis.com/gcp-public-data-landsat/LE07/01/120/065/LE07_L1TP_120065_20101115_20161212_01_T1/
- MTL: SCENE_CENTER_TIME 02:40:51Z, CLOUD_COVER 13.00, corners 6.284°S 108.924°E to 8.166°S 111.088°E (Merapi at
  about 7.54°S 110.44°E lies inside). B3 is **20,307,655 bytes**.
- The 30 October scene is 98 % cloud. Landsat 5 LT05_L1GS_120065_20101107 (Tier 2) exists but was not inspected.
- The image itself was not cropped or viewed. SLC-off stripes will be present.

**M-2 — Sentinel-2 L2A, 24 August 2023, tile 49MDM (scene 12 or 14; present-day summit and Gendol valley)**
- https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/49/M/DM/2023/8/S2B_49MDM_20230824_0_L2A/TCI.tif
- Tile cloud 1.2 %. TCI is only **30,977,221 bytes**, which suggests partial tile coverage, so check that Merapi lies
  inside. Not viewed.

**Relief for both volcanoes (Copernicus DEM GLO-30)**
- Eyjafjallajökull: `Copernicus_DSM_COG_10_N63_00_W020_00_DEM.tif`, **11,588,202 bytes**.
- Merapi: `Copernicus_DSM_COG_10_S08_00_E110_00_DEM.tif`, **46,029,148 bytes**.
- Both under https://copernicus-dem-30m.s3.amazonaws.com/<name>/<name>.tif.

**Policy lines**
- NASA Earth Observatory: "Most materials … including images, are freely available for re-publication or re-use,
  including commercial purposes, except for where copyright is indicated"; the mandatory credit is "NASA". — [NASA EO image use policy](https://earthobservatory.nasa.gov/ImageUse) (as quoted in the datasets note)
- NASA media "generally are not subject to copyright in the United States". The NASA insignia, logotype and seal are
  excluded and need permission. — [NASA images and media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) (as quoted in the datasets note)
- Smithsonian GVP content that is not CC0 "may only be used for personal, educational, and other non-commercial uses
  consistent with the principles of fair use". — [Smithsonian Terms of Use](https://www.si.edu/termsofuse) (as quoted in the datasets note)

### Inferences
- For scenes 24 and 25, the reachable route is to **render the plume yourself**, not to use a Landsat crop. Any MODIS
  image of mid-April 2010 would do, but MODIS hosts were unreachable. Alternatively, download one NASA Earth Observatory
  plume image outside the firewall and credit "NASA". The ash-dispersal animation in scene 25 is better drawn as data
  (ash-advisory polygons or schematic) on the globe than as a photo.
- Grounded aircraft and departure boards show airline logos (trademarks) and sometimes identifiable people. Prefer an
  empty-apron or departure-board shot with no faces, and keep logos incidental.
- For Merapi, a public-domain USGS VDAP photo (USGS staff worked at Merapi in 2010) is the most likely clean licence.
  Indonesian agency photos should be treated as all rights reserved until checked.

### Gaps
- **UNVERIFIED leads to download outside the firewall.** Search terms are given; no page was opened.
  - NASA Earth Observatory articles on the 2010 Eyjafjallajökull plume (Terra or Aqua MODIS, and EO-1 ALI), April–May
    2010.
  - Commons MediaSearch "Eyjafjallajökull 2010 eruption", "Eyjafjallajökull ash farm", "airport closed volcanic ash
    2010 departures".
  - USGS VDAP Merapi 2010 photos: https://www.usgs.gov/programs/VHP/volcano-disaster-assistance-program (landing page
    from prior knowledge).
  - NASA Earth Observatory Merapi November 2010 (recalled as EO-1 ALI or ASTER).
  - Commons "Merapi 2010 eruption", "Merapi lahar", "Merapi evacuation".
- **BNPB image terms: nothing found.** Treat BNPB and PVMBG photos and hazard maps as all rights reserved and ask
  permission. Indonesian copyright law on government works was not researched.
- Exact eruption timing and dates for captions (for example the 14 April onset of the explosive phase, or Merapi's
  26 October and 5 November 2010 eruptions) were not re-verified here. Take them from the case-study notes.

---

## Q4. Hunga Tonga–Hunga Haʻapai 2022: plume from orbit and before/after island images

### Takeaway
This event is fully covered with verified, reachable, openly licensed data:
- Sentinel-2 before/after crops (verified visually, Copernicus free licence) show the island destroyed.
- Maxar WorldView-2 tiles at 0.5 m (CC BY-NC 4.0), 2021-03-27 against 2022-01-17.
- GOES-17 full-disk files every 10 minutes through the eruption hour (NOAA NODD, open).
- Himawari-8 full-disk files (JMA data distributed freely by NOAA, with attribution).

### Cited Findings
**H-1 (recommended) — Sentinel-2 L2A, 2021-12-03 against 2022-02-11, tile 01KFT (scene 30 and the practice room)**

| | Before | After |
|---|---|---|
| Image URL | https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/1/K/FT/2021/12/S2A_1KFT_20211203_0_L2A/TCI.tif | https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/1/K/FT/2022/2/S2A_1KFT_20220211_0_L2A/TCI.tif |
| Date and time (UTC) | 2021-12-03 22:01:30 | 2022-02-11 |
| File size | **320,196,731 bytes** | **336,055,712 bytes** |
| Notes | Tile cloud 20.2 %; the island window was clear | Scattered cumulus near the island |

- Both TCIs are 10,980 × 10,980 px at 10 m in EPSG:32701, with overviews 2–16. Item JSON lives next to each TCI,
  for example `.../S2A_1KFT_20211203_0_L2A/S2A_1KFT_20211203_0_L2A.json`.
- Verification crops use the same bounds, 175.44–175.35°W and 20.585–20.505°S (about 9.4 × 8.9 km):
  - Before: the joined island, its crater lake and fringing shoals.
  - After: two small remnants and open water where the cone stood.
- Other dates with low tile cloud cover: 2021-12-15 (0 %) and 2022-01-19 (4.8 %). Both returned no data over the
  island window, because that orbit's swath misses it. 2022-01-17 (28.7 %) had data over the island (mean
  brightness 106 in the probe) but was not inspected.
- Source: own listing, probe and crops.

**H-2 — Maxar WorldView-2, tile 01/300222100221 (bbox 175.419–175.368°W, 20.568–20.520°S, which covers the island)**
- Before: 2021-03-27 21:58 UTC, 10300100BC131900, 0.57 m, 26.5° off-nadir, 0 % cloud. **117,887,647 bytes.**
  https://maxar-opendata.s3.amazonaws.com/events/tonga-volcano21/ard/01/300222100221/2021-03-27/10300100BC131900-visual.tif
- After: 2022-01-17 21:53 UTC, 10300100CB08B200, 0.51 m, 18.5° off-nadir, 21 % cloud. **62,050,767 bytes.**
  https://maxar-opendata.s3.amazonaws.com/events/tonga-volcano21/ard/01/300222100221/2022-01-17/10300100CB08B200-visual.tif
- Second after image: 10300100CC09BB00 (21:54 UTC, 0.52 m, 22 % cloud), **68,581,328 bytes.**
- Licence: CC BY-NC 4.0. Other acquisitions from 14–18 January 2022 cover parts of Tongatapu (tsunami and ash impacts
  near Nukuʻalofa). Which tiles cover the town was not checked.

**H-3 — GOES-17 ABI full disk, 2022-01-15, hour 04 UTC (scene 30 plume)**
- Folder: `https://noaa-goes17.s3.amazonaws.com/ABI-L2-CMIPF/2022/015/04/`. Six 10-minute frames per band. Examples:
  - Band 13, 10.3 µm IR, 2 km: `OR_ABI-L2-CMIPF-M6C13_G17_s20220150400320_e20220150409397_c20220150409461.nc`,
    **26,949,078 bytes**. The 04:10 frame is 26,955,677 bytes and the 04:20 frame 26,962,836 bytes.
  - Band 1, 0.47 µm, 1 km: the 04:00 frame is **36,115,341 bytes**.
  - Band 2, 0.64 µm, 0.5 km: the 04:30 frame `…M6C02_G17_s20220150430320…` is **270,501,283 bytes**.
- The multi-band `ABI-L2-MCMIPF` files are about 316–330 MB per frame.
- One-minute mesoscale files (`ABI-L2-CMIPM`) exist. Their sector position was not checked: band-1 files of about
  77 KB at night over the US suggest the sectors were not over Tonga.
- Licence: NOAA NODD (see Q1).

**H-4 — Himawari-8 AHI full disk, 2022-01-15 04:10 UTC**
- Folder: `https://noaa-himawari8.s3.amazonaws.com/AHI-L1b-FLDK/2022/01/15/0410/`, 160 files.
- Band 3 (0.64 µm, 0.5 km) comes in ten segments of 14.3–43.0 MB, bz2-compressed HSD. For example
  `HS_H08_20220115_0410_B03_FLDK_R05_S0710.DAT.bz2` is **42,842,148 bytes**.
- Which segment holds 20.5°S was not checked.
- Licence: see Q1.

**Relief:** Copernicus DEM `Copernicus_DSM_COG_10_S21_00_W176_00_DEM.tif` is only **101,500 bytes** (mostly ocean).
It records the islands at the DEM's acquisition time, not after 2022.

### Inferences
- **Credit lines:**
  - Sentinel-2: "Contains modified Copernicus Sentinel data 2021, 2022."
  - GOES: "NOAA GOES-17 ABI data (NOAA Open Data Dissemination Program), processed by Meridian." The licence forbids
    presenting modified data as original NOAA data.
  - Himawari: "Himawari-8 data: Japan Meteorological Agency, via NOAA NODD; processed by Meridian."
- A GOES-17 band-13 sequence, about 27 MB per frame and cropped around 20.5°S 175.4°W, is the cleanest public-domain
  plume animation, and the build can render it. NASA Earth Observatory's own GOES-17 animation was not opened this
  session. If used, credit it "NASA Earth Observatory".
- The Sentinel-2 pair is **the strongest image in this whole note for a "before/after" exam resource**: unambiguous,
  free to adapt, and small (about 100 KB each at 20 m/px).

### Gaps
- NASA Earth Observatory Hunga Tonga articles, including plume-height work, were not opened. JMA's own website
  copyright terms (separate from the NOAA-distributed Himawari data) were not checked. The exact eruption onset time for
  captions was not re-verified; take it from the case-study notes.

---

## Q5. Whakaari 2019, volcano types and plate-boundary landforms

### Takeaway
- **Whakaari:** GeoNet's camera archive (CC BY 3.0 NZ) is reachable and holds frames from the mainland Whakatāne camera
  throughout 9 December 2019. The 01:20 UTC frame shows the eruption plume over the island. The crater-rim cameras'
  2019 archive stops at 7 December 23:50 UTC.
- **Volcano types and plate boundaries:** no ground photos were verified. The reachable route is cloud-free Sentinel-2
  scenes plus Copernicus DEM tiles for Parícutin and Sunset Crater (cinder cones), Fuji (strato), Mauna Loa (shield),
  Þingvellir, the Carrizo Plain (San Andreas), Everest and the East Anatolian Fault. GeoNet cameras also watch
  Taranaki, Ruapehu and Ngauruhoe, all classic composite cones; clear frames still have to be picked by hand.

### Cited Findings
**W-1 (recommended) — GeoNet camera WHOH view 02, 2019-12-09 01:20 UTC (scene 16; Photo 1.3 candidate)**
- https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2019/WHOH/WHOH.02/2019.343/2019.343.0120.00.WHOH.02.jpg
  **296,501 bytes**, 2048 × 1536 JPEG.
- Neighbouring frames: 01:00 (**288,864 bytes**), 01:10 (**285,882**) and 01:30 (**330,634**), the same name with the
  time changed. A frame every 10 minutes, 144 per day.
- Camera metadata from GeoNet's delta repository:
  - Mount WHOH "Whakatane Observatory Hill", −37.956903, 177.000764, 100 m; description "Images of White Island".
  - View 02 label "Whakaari/White Island from Whakatāne", azimuth 19°.
  - The camera in place from 2013-08-07 to 2023-01-18 was a Mobotix M15, "Whakatane looking at White Island".
  - Sources: [mounts.csv](https://raw.githubusercontent.com/GeoNet/delta/main/network/mounts.csv); [views.csv](https://raw.githubusercontent.com/GeoNet/delta/main/network/views.csv); [cameras.csv](https://raw.githubusercontent.com/GeoNet/delta/main/install/cameras.csv)
- Crater-rim cameras on the island:
  - WIWR "White Island West Rim" (−37.5188, 177.1795, 280 m; "looking into the crater").
  - WINR "North Rim" and WICF "Crater Floor".
  - The 2019 folders for all three end at day 341; the last WIWR frame is `2019.341.2350.00` (2019-12-07 23:50 UTC).
    The mount end dates are 2023-12-01.
  - Frames are about 245–270 KB each. One frame checked, `2019.341.2000.00`, showed only fog.
  - Sources: own listing; mounts.csv as above.
- After the eruption, from orbit: Sentinel-2 `S2A_60HWD_20191227_0_L2A` (2019-12-27, tile cloud 3.8 %).
  `https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/60/H/WD/2019/12/S2A_60HWD_20191227_0_L2A/TCI.tif`,
  **314,351,238 bytes**. Not viewed.
- Island relief: `Copernicus_DSM_COG_10_S38_00_E177_00_DEM.tif`, **7,609,034 bytes**.
- GeoNet attribution: users are asked to acknowledge the GeoNet programme sponsors, listed as NHC, GNS Science, LINZ,
  NEMA and MBIE. The policy also offers suggested wording. Creative Commons reports that GeoNet adopted "a CC BY
  license" with no version given. A 2013 data.govt.nz case study says CC BY 3.0 NZ, which matches the registry. — [GeoNet policy](https://geonet.org.nz/policy); [CC blog on GeoNet](https://creativecommons.org/2017/05/23/geonet/); [data.govt.nz GeoNet case study](https://data.govt.nz/assets/OpenDataCaseStudies-printablePDFs/GeoNet-case-study.pdf)

**V-1 — Cinder cone (scene 13)**
- Parícutin, tile 13QGB: `S2A_13QGB_20240304_0_L2A`, tile cloud 0.0007 %.
  `https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/13/Q/GB/2024/3/S2A_13QGB_20240304_0_L2A/TCI.tif`,
  **309,657,684 bytes**. DEM `Copernicus_DSM_COG_10_N19_00_W103_00_DEM.tif`, **41,879,397 bytes**.
- Sunset Crater, tile 12SVE: `S2A_12SVE_20240617_0_L2A`, tile cloud 0.007%.
  `…/12/S/VE/2024/6/S2A_12SVE_20240617_0_L2A/TCI.tif`, **150,946,107 bytes**. DEM
  `Copernicus_DSM_COG_10_N35_00_W112_00_DEM.tif`, **37,529,476 bytes**.

**V-2 — Strato or composite volcano (scene 12)**
- Fuji, tile 54STE: `S2A_54STE_20241210_0_L2A`, tile cloud 0.09 % (December, so the cone should be snow-capped).
  `…/54/S/TE/2024/12/S2A_54STE_20241210_0_L2A/TCI.tif`, **214,137,001 bytes**. DEM
  `Copernicus_DSM_COG_10_N35_00_E138_00_DEM.tif`, **43,412,544 bytes**.
- Mayon: DEM `Copernicus_DSM_COG_10_N13_00_E123_00_DEM.tif`, **29,347,790 bytes**. No scene under 5 % cloud in March
  2024.
- GeoNet cameras of New Zealand composite cones (CC BY 3.0 NZ), from views.csv:
  - TEMO "Taranaki Maunga from New Plymouth".
  - MNTA.02/.03 "Ngauruhoe from West".
  - KMTP.01 "Ruapehu & Ngauruhoe from East".
  - MTSR "Ruapehu from South".
  - The one TEMO frame checked (`2024/TEMO/TEMO.02/2024.180/2024.180.2300.00.TEMO.02.jpg`, 426,886 bytes) was
    cloud-covered.

**V-3 — Shield volcano (scene 12)**
- Mauna Loa and Kīlauea: DEM `Copernicus_DSM_COG_10_N19_00_W156_00_DEM.tif`, **31,714,695 bytes**. It is the ideal
  source for a true-scale profile against Fuji.
- Sentinel-2 tile 05QKB had no scene under 5 % cloud in June 2024; try other months.

**B-1 — Plate-boundary landforms (scenes 5, 7 and 8)**
- Þingvellir: DEM `Copernicus_DSM_COG_10_N64_00_W022_00_DEM.tif`, **21,395,489 bytes**. Tile 27WVM had no scene under
  5 % cloud in July 2024.
- San Andreas, Carrizo Plain, tile 11SKV: `S2A_11SKV_20240629_0_L2A`, tile cloud 0.004 %.
  `…/11/S/KV/2024/6/S2A_11SKV_20240629_0_L2A/TCI.tif`, **338,057,992 bytes**. DEM
  `Copernicus_DSM_COG_10_N35_00_W120_00_DEM.tif`, **41,972,713 bytes**.
- Everest and the Himalaya, tile 45RVL: `S2A_45RVL_20241107_0_L2A`, tile cloud 3.5 %.
  `…/45/R/VL/2024/11/S2A_45RVL_20241107_0_L2A/TCI.tif`, **303,389,728 bytes**. DEM
  `Copernicus_DSM_COG_10_N27_00_E086_00_DEM.tif`, **43,039,634 bytes**.
- East Anatolian Fault around Antakya: DEM `Copernicus_DSM_COG_10_N36_00_E036_00_DEM.tif`, **40,945,681 bytes**.
- Tile cloud percentages are tile-wide. MGRS tiles were computed with the `mgrs` Python package. None of these
  Sentinel-2 scenes was viewed.
- Copernicus DEM credit (from the datasets note):
  - Unmodified: "© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the
    European Union and ESA; all rights reserved".
  - Modified: "produced using Copernicus WorldDEM-30 © DLR e.V. …" plus a liability disclaimer.
  - Source: [Copernicus Data Space: Copernicus DEM](https://dataspace.copernicus.eu/node/1306)

### Inferences
- **Recommended GeoNet credit:** "Image: GeoNet camera WHOH (Whakatāne Observatory Hill, looking north-north-east at
  Whakaari), 9 December 2019, 01:20 UTC. We acknowledge the New Zealand GeoNet programme and its sponsors NHC, GNS
  Science, LINZ, NEMA and MBIE for providing images used here. CC BY 3.0 NZ. Contrast adjusted and cropped."
  Re-check the exact sponsor wording on geonet.org.nz/policy.
- From the mount coordinates, the WHOH camera is **about 51 km from the WIWR rim camera, on a bearing of about 18°**
  (own haversine calculation). This is the same "direction + distance with units + place name" that the specimen's
  Whakaari location question rewards, so the photo and Fig. 1.2 reinforce each other.
- The WHOH frame is distant and hazy. A levels adjustment, allowed under CC BY with a note of changes, makes it read
  like an exam photo. People died in this eruption. The frame shows no people, but the caption should stay factual.
  Do not use crater-rim frames from the morning of the eruption, even if they turn up elsewhere: they may show
  visitors.
- Volcano-type scenes are best made as **matched DEM small multiples** (same vertical scale) plus one top-down
  Sentinel-2 crop each. This avoids the per-photo licensing problem and teaches the true shape difference. The plan
  records the June 2024 examiner-report misconception about viscous lava and shield volcanoes (scene 12); that is a
  shape-and-speed contrast, and a profile shows it better than a postcard.

### Gaps
- **Ground photos not verified (UNVERIFIED leads, to download outside):**
  - Þingvellir rift walls (Almannagjá).
  - The San Andreas aerial over the Carrizo Plain. USGS public-domain aerials of this fault are widely reused;
    check the exact file.
  - Everest and the Himalaya.
  - An Andean subduction volcano, such as Osorno or Villarrica. No MGRS tile was computed and nothing was checked.
  - Mauna Loa and Kīlauea: USGS HVO photos, public domain, https://www.usgs.gov/observatories/hvo.
  - Mayon, Fuji and Merapi ground views.
  - Parícutin: historical USGS photos from 1943–52; the photographers and PD status were not checked.
  - Sunset Crater: NPS photos are generally US public domain; not checked.
  - Commons MediaSearch with the place name works for all of these. Filter by licence and keep each file's credit.
- GNS Science's own website photo terms were not checked. The GeoNet CC BY 3.0 NZ statement covers GeoNet data and
  images, not necessarily every GNS page.
- I did not check whether GNS Science's institutional status changed in 2025 (merger reports), which may affect the
  sponsor list.

---

## Q6. Management imagery: monitoring station, base isolation, drills, hazard maps, tsunami signs

### Takeaway
No management photograph was verified this session. The only reachable, licensed "monitoring" image is the GeoNet
camera frame itself, which is a monitoring instrument with documented metadata. The rest must come from USGS
(public domain), NOAA, FEMA or Commons outside the firewall, or be drawn: a hazard map is better baked from data than
copied.

### Cited Findings
- The GeoNet WHOH installation record shows a long-running monitoring camera. A Mobotix M15 "Whakatane looking at White
  Island" ran from 2013-08-07 to 2023-01-18, followed by a Mobotix M16 and, from 2025-07-09, an Axis Q1808-LE. — [GeoNet delta cameras.csv](https://raw.githubusercontent.com/GeoNet/delta/main/install/cameras.csv)
- GeoNet's bucket also holds `gnss/`, `seismic-products/` and `waveforms/` data, all CC BY 3.0 NZ. These could feed a
  "what monitoring records" mini-graph (for example a seismogram before the 2019 eruption) next to the camera frame.
  Contents were not inspected. — [geonet.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/geonet.yaml)
- USGS public-domain status and credit format apply to USGS photos of seismometer, GPS or gas stations; see Q2 policy
  lines. — [USGS credit page](https://www.usgs.gov/visual-id/credit_usgs.html)

### Inferences
- **Seismometer or monitoring station:** a USGS HVO or VHP field photo is the cleanest licence. Second choice is a GeoNet
  data figure, for example a seismogram with the camera frame (CC BY 3.0 NZ).
- **Base isolation or retrofitting:** USGS, FEMA or NIST photos are US federal works and so US public domain; NIST is a
  federal agency too. Japanese or Turkish ministry photos have unknown terms. Commons is the realistic source.
- **Earthquake drill:** "Drop, Cover, Hold On" and ShakeOut imagery is usually owned by the Earthquake Country Alliance,
  not the government. Check each one. Photos of children in a drill raise consent issues; prefer an illustration.
- **Hazard map:** bake Meridian's own from open data, for example Copernicus DEM plus documented hazard zones. Do not
  copy BNPB or PVMBG Merapi maps or JMA maps (terms unknown).
- **Tsunami sign:** Commons has many. A plain sign photo is usually the photographer's copyright, so check the file
  licence. Drawing a generic evacuation-route pictogram in SVG avoids the issue.

### Gaps
- No source pages were opened for any management photo, because the search budget was exhausted. Candidates to
  check outside the firewall:
  - USGS Multimedia Gallery: https://www.usgs.gov/products/multimedia-gallery (landing page from prior knowledge).
  - NOAA Photo Library: https://photolib.noaa.gov/ (host confirmed to exist; unreachable here). Its terms were not
    re-checked.
  - Commons MediaSearch: "seismometer installation", "base isolator", "tsunami evacuation route sign",
    "earthquake drill school".
- JMA and BNPB image terms are still unknown.

---

## Q7. Agency and Wikimedia image-use policies, and whether annotated CC BY-SA photos fit this site

### Takeaway
- **Most permissive:** US federal works (USGS, NASA, NOAA, Landsat). Public domain in the US, attribution
  requested, no logos, no implied endorsement.
- **Free with a fixed notice:** Copernicus Sentinel and Copernicus DEM.
- **Attribution only:** GeoNet (CC BY 3.0 NZ).
- **Non-commercial:** Maxar (CC BY-NC 4.0). Legal here, but it must stay in separately marked files.
- **ShareAlike:** ESA CC BY-SA 3.0 IGO and Wikimedia CC BY-SA photos may be cropped and annotated, but the annotated
  image must itself be released under CC BY-SA. Show it on the page as a separately licensed item. Do not fold it into
  a CC BY-NC-SA file.
- **Unknown or restrictive:** JMA's website (as opposed to NOAA-distributed Himawari data), BNPB, GNS web pages and
  Smithsonian GVP photos. Assume all rights reserved.

### Cited Findings
| Agency | Policy (as found) | Credit wording | Source |
|---|---|---|---|
| USGS | USGS-authored or produced material is US public domain; acknowledge USGS. Non-USGS images on USGS sites are "generally marked as being copyrighted" and need the holder's permission. USGS personnel may have publicity rights for commercial use. | "Credit: U.S. Geological Survey", "Department of the Interior/USGS", "U.S. Geological Survey/photo by [photographer]" | [USGS credit page](https://www.usgs.gov/visual-id/credit_usgs.html); [USGS FAQ](https://www.usgs.gov/faqs/are-usgs-reports-copyrighted); [NOAA InPort copy](https://fisheries.noaa.gov/inport/item/59574) |
| Landsat (USGS) | "no restrictions … can be used or redistributed as desired"; state the source | e.g. "Landsat 7 image courtesy of the U.S. Geological Survey" (older policy: "USGS/NASA Landsat Program") | [USGS Landsat FAQ](https://www.usgs.gov/faqs/are-there-any-restrictions-use-or-redistribution-landsat-data) (via datasets note) |
| NOAA (NODD: GOES, Himawari) | "open to the public and can be used as desired"; attribution requested; no implied endorsement or affiliation; modified data must not be presented as original | "NOAA GOES-17 data, processed by …" | [noaa-goes.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/noaa-goes.yaml) |
| JMA (Himawari via NOAA) | JMA produces the data; NOAA "has rights to distribute this data freely and openly"; NOAA and JMA request attribution; no implied endorsement | "Himawari-8 data: JMA, via NOAA" | [noaa-himawari.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/noaa-himawari.yaml) |
| NASA | Earth Observatory images free to reuse, even commercially, except where copyright is marked; the mandatory credit is "NASA". Media generally not under US copyright; schools may use them without permission. Insignia, logotype and seal excluded. | "NASA Earth Observatory" (use each image's own credit line) | [NASA EO ImageUse](https://earthobservatory.nasa.gov/ImageUse); [NASA images and media](https://www.nasa.gov/nasa-brand-center/images-and-media/) (via datasets note) |
| ESA | Only content "expressly so stated" is CC BY-SA 3.0 IGO. Credit is mandatory; link the licence; indicate changes. Other material falls under the Sentinel policy or ESA standard terms. | "ESA/[name], CC BY-SA 3.0 IGO"; "contains modified Copernicus Sentinel data (2017), processed by ESA, CC BY-SA 3.0 IGO" | [open.esa.int](https://open.esa.int/?p=2) |
| Copernicus Sentinel | Free, full and open; reproduce, distribute, adapt | "Contains modified Copernicus Sentinel data [Year]" | [Sentinel Data Legal Notice](https://sentinel.esa.int/documents/247904/690755/Sentinel_Data_Legal_Notice) |
| Copernicus DEM | Free licence; fixed notice | see Q5 | [Copernicus DEM](https://dataspace.copernicus.eu/node/1306) |
| Maxar Open Data | CC BY-NC 4.0 for all programme imagery and derived layers; commercial users must buy | not stated in metadata (see Q2) | [collection.json](https://maxar-opendata.s3.amazonaws.com/events/Kahramanmaras-turkey-earthquake-23/collection.json); [Maxar blog](https://blog.maxar.com/for-a-better-world/2023/open-data-response-to-the-earthquakes-in-turkey-and-syria); [registry](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/maxar-open-data.yaml) |
| GeoNet (GNS Science and partners) | CC BY 3.0 NZ; acknowledge GeoNet and sponsors (NHC, GNS Science, LINZ, NEMA, MBIE) | suggested wording on the policy page | [geonet.yaml](https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/geonet.yaml); [GeoNet policy](https://geonet.org.nz/policy) |
| Smithsonian GVP | Non-CC0 content: "personal, educational, and other non-commercial uses consistent with the principles of fair use"; cite author and source; keep notices | "Global Volcanism Program, Smithsonian Institution" + photographer | [Smithsonian ToU](https://www.si.edu/termsofuse); [GVP cite](https://volcano.si.edu/gvp_cite.cfm) (via datasets note) |
| BNPB | **not found** | – | – |
| Wikimedia Commons | Licence varies by file and is stated on each file page; usually CC BY, CC BY-SA, GFDL or PD; hotlinking "not recommended" | the file page's attribution (title, author, source, licence) | [Commons: Reusing content](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia) (via datasets note) |

- CC licensing rules relevant to annotated photos:
  - BY-NC-SA and BY-SA cannot be combined into one adaptation. — [Wikimedia Meta guide](https://meta.wikimedia.org/wiki/Open_Content_-_A_Practical_Guide_to_Using_Creative_Commons_Licences/The_Creative_Commons_licencing_scheme)
  - ND works cannot be used in publicly shared adaptations. — [University of Guelph guide](https://books.lib.uoguelph.ca/copyrightcc/?p=46)
  - A collection, as opposed to an adaptation, may combine any CC content with proper attribution. — [Meadville Lombard guide](https://library.meadville.edu/creative_commons/using) (via datasets note)

### Inferences
- **Annotating a CC BY-SA photo on Meridian (site CC BY-NC-SA, or all rights reserved).** Cropping and adding labels
  and arrows to a CC BY-SA photo makes an adaptation, which must be licensed CC BY-SA, the same or a compatible
  licence. That is legal on this site as long as:
  - the annotated image is a separate file, marked "CC BY-SA 4.0 (or the original's version), adapted by Meridian"
    with the original credit;
  - the site's own NC-SA terms are not applied to it;
  - it is not merged into a BY-NC-SA file such as a sprite sheet or baked texture.
  The page as a whole is then a collection. An all-rights-reserved page can show it the same way; only the image file
  carries BY-SA. CC BY photos are simpler: the annotated version can carry any licence, including the site's NC-SA.
  Public-domain photos impose no conditions, though credit should still be given.
- **ESA CC BY-SA 3.0 IGO** images follow the same ShareAlike logic. Whether an adaptation may move to BY-SA 4.0 was not
  checked; keep it at 3.0 IGO to be safe.
- **Maxar NC** is fine for a non-commercial school site. It does limit reuse by anyone commercial, and it adds a third
  licence family to the repository. Keep Maxar crops in their own folder with a `MAXAR-LICENSE.txt`.
- **Implied endorsement:** never put NASA, NOAA, USGS, ESA or GeoNet logos on chapter pages. Keep the credit in plain
  text.

### Gaps
- The CC compatibility chart, including the BY-NC to BY-NC-SA cell, was not read directly. The ESA IGO "later
  version" question is open.
- The current wording of the NASA, USGS and NOAA Photo Library pages was not re-read this session. The NASA and EO
  quotes come from the 2026-10-23 datasets note. The USGS lines come from a search summary of the USGS credit and FAQ
  pages.
- JMA website terms, BNPB terms and GNS Science website terms: not researched (no search budget).

---

## Q8. Shortlist by need, and the two best candidates for practice-room "Photo 1.3"

### Takeaway
For Photo 1.3, the two verified, reachable, adaptable candidates are:
1. **The GeoNet WHOH monitoring-camera frame of Whakaari erupting** (CC BY 3.0 NZ). It suits a question on monitoring
   and prediction.
2. **The Sentinel-2 before/after pair of Hunga Tonga–Hunga Haʻapai** (Copernicus, free). It suits a question on
   volcanic hazards and impacts.

A USGS public-domain field photo of a monitoring station (HVO or VDAP) would be the most exam-like third option, but it
was not verified.

### Cited Findings
(All facts are from Q1–Q6 above; repeated here as the shortlist.)

| Need | Candidate (status) | Licence / credit | Size verified | Scene or item |
|---|---|---|---|---|
| Türkiye damaged buildings | T-1 Maxar Antakya, 2022-12-22 / 2023-02-11 (**reachable, crop made**) | CC BY-NC 4.0; "Maxar Open Data Program" | 70,497,516 / 81,969,423 B | 22, 23 |
| | T-2 Maxar Kahramanmaraş, 2022-07-26 / 2023-02-11 (**reachable**) | CC BY-NC 4.0 | 52,285,617 / 71,160,847 B | 22 |
| | Ground photo, Commons (**not identified**) | per file | – | 22 |
| Surface rupture and offset | T-3 Maxar İslahiye WV03 0.31 m (**reachable; rupture on tile not checked**) | CC BY-NC 4.0 | 66,636,080 / 98,549,666 B | 21 |
| | USGS field photos (**UNVERIFIED**) | US PD; "U.S. Geological Survey/photo by …" | – | 21 |
| Before/after satellite | T-1, T-2 (Maxar); Sentinel-2 37SBA (**reachable, not listed**) | NC / Copernicus | see above | 21–22 |
| InSAR | Maxar pcm-sarfx Sentinel-1 change polygons (**reachable; not InSAR**) | CC BY-NC 4.0 | 48,193,536 B (feb10) | 21 |
| | ESA, ARIA or COMET interferograms (**UNVERIFIED**) | ESA CC BY-SA 3.0 IGO / NASA-JPL / CC BY 4.0? | – | 21 |
| Eyjafjallajökull plume | E-1 Landsat 7, 2010-04-19 (**reachable, poor**) | US PD | B3 18,335,275 B | 24–25 (evidence only) |
| | NASA EO MODIS image (**UNVERIFIED**) | "NASA" | – | 24–25 |
| Grounded aircraft, ash-covered farms | Commons (**UNVERIFIED**) | per file | – | 25 |
| Merapi pyroclastic flow, lahar, camps | M-1 Landsat 7, 2010-11-15 (**reachable, not viewed**) | US PD | B3 20,307,655 B | 14, 27 |
| | USGS VDAP photos (**UNVERIFIED**) | US PD | – | 14, 27 |
| Hunga Tonga plume | H-3 GOES-17 C13, 04:00–04:50 UTC (**reachable**) | NOAA NODD | 26,949,078 B per frame | 30 |
| | H-4 Himawari-8 B03 (**reachable**) | JMA via NOAA | e.g. 42,842,148 B segment | 30 |
| Hunga Tonga before/after | H-1 Sentinel-2, 2021-12-03 / 2022-02-11 (**reachable, crops made**) | "Contains modified Copernicus Sentinel data 2021, 2022" | 320,196,731 / 336,055,712 B | 30 |
| | H-2 Maxar 0.5 m, 2021-03-27 / 2022-01-17 (**reachable**) | CC BY-NC 4.0 | 117,887,647 / 62,050,767 B | 30 |
| Whakaari eruption | W-1 GeoNet WHOH, 2019-12-09 01:20 UTC (**reachable, downloaded**) | CC BY 3.0 NZ + GeoNet acknowledgement | 296,501 B | 16 |
| | Sentinel-2, 2019-12-27 (**reachable, not viewed**) | Copernicus | 314,351,238 B | 16 |
| Shield | Mauna Loa DEM (**reachable**); HVO photos (**UNVERIFIED**) | Copernicus DEM / US PD | 31,714,695 B | 12 |
| Strato or composite | Fuji Sentinel-2 + DEM (**reachable**); GeoNet Taranaki or Ngauruhoe cameras (**reachable; clear frame not yet found**) | Copernicus / CC BY 3.0 NZ | 214,137,001 B; 43,412,544 B | 12 |
| Cinder cone | Parícutin Sentinel-2 + DEM; Sunset Crater Sentinel-2 + DEM (**reachable**) | Copernicus | 309,657,684 B; 150,946,107 B | 13 |
| Plate boundaries | Carrizo (San Andreas), Everest Sentinel-2; Þingvellir and EAF DEMs (**reachable**); ground photos (**UNVERIFIED**) | Copernicus | see Q5 | 5, 7, 8 |
| Management | GeoNet camera as a monitoring example (**reachable**); others (**UNVERIFIED**) | CC BY 3.0 NZ | – | 28 |

### Inferences
**Photo 1.3, candidate A (monitoring and prediction): GeoNet WHOH frame, 9 December 2019, 01:20 UTC.**
- Draft caption: "Photo 1.3: image from a volcano-monitoring camera at Whakatāne, New Zealand, about 50 km from
  Whakaari, on 9 December 2019."
- It fits a 5-mark "evaluate how far monitoring can predict eruptions" item, with the evaluation mark reserved. The
  photo shows a monitoring instrument's output during an eruption that was not predicted in time, which gives
  material for both sides.
- It also pairs naturally with a Whakaari location figure. The plan's Fig. 1.2 is a Merapi location map, so either
  move Fig. 1.2 to Whakaari or keep Photo 1.3 independent.
- Drawbacks: it is hazy and distant, unlike the clear field photos Cambridge usually prints, and the eruption was fatal.
  Mitigate with a contrast adjustment (noted in the credit) and a neutral caption.

**Photo 1.3, candidate B (volcanic hazards and impacts): Sentinel-2 Hunga Tonga–Hunga Haʻapai, 3 December 2021 against
11 February 2022.**
- Two panels, both cropped to 175.44–175.35°W and 20.585–20.505°S.
- Supports "describe the changes shown" (3 marks) and "suggest hazards caused by this eruption" (tsunami, ash,
  pressure wave). It is unambiguous and free to adapt.
- Drawback: it is a satellite image, not a field photograph. It is still a legitimate resource type.

**Fallback if a true field photograph is wanted:** fetch one USGS public-domain photo of volcano-monitoring equipment
(HVO or VHP) or of Merapi 2010 deposits (VDAP) outside the firewall. Commons is the alternative, using only PD, CC0 or
CC BY files and avoiding BY-SA for a figure that will be heavily annotated.

**Ethics for Türkiye scenes:** prefer the Maxar pair to ground photos. Satellite views show the scale of the damage
without identifiable victims.

### Gaps
- Because the web-search budget ran out, the "two to three per need" target is met with **verified** items only for
  Türkiye (satellite), Hunga Tonga, Whakaari, volcano types (satellite and DEM) and plate boundaries (satellite and
  DEM). The following still lack any verified ground photograph:
  - rupture photos;
  - Eyjafjallajökull plume, aircraft and farms;
  - Merapi pyroclastic flows, lahars and camps;
  - InSAR images;
  - all management photos.
- **Practical tip for the follow-up.** A Commons file URL can be built from its exact file name: replace spaces with
  underscores, take the MD5 of the name, and use
  `https://upload.wikimedia.org/wikipedia/commons/<md5[0]>/<md5[0:2]>/<File_name>`. Once the file pages are found
  outside the firewall, the build can record exact URLs.
- None of the Sentinel-2 scenes other than Hunga Tonga, nor the Maxar Tonga and Kahramanmaraş tiles, were viewed. Their
  local cloud and coverage should be checked with the same range-read crop before committing.
