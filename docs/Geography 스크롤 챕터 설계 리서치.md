# Tectonic hazards로 Geography 지구본 챕터를 열어라

KQ6의 설계를 Cambridge IGCSE Geography 0460(2027–2029)으로 옮길 때 첫 챕터는 **Topic 4 Tectonic hazards**가 맞다. 2027 specimen Paper 1에서 모두가 풀어야 하는 Section A Question 1이 Alaska 지진 지도와 Whakaari 화산 위치도로 만든 tectonics 문항이다. 또 이 주제는 두 detailed specific example(4.4.3 지진, 4.4.4 분화)이 모두 날짜, 좌표, 규모를 가진 사건이라서 KQ6의 "날짜가 있는 scene" 모델에 그대로 들어맞는다. 주 사례로는 **Türkiye–Syria 2023 지진**(CUP 3판 coursebook이 쓰는 사례)과 **Eyjafjallajökull 2010**을 권한다. LIC/MIC 쪽 대안은 **Merapi 2010**, 마지막 장면은 **Hunga Tonga 2022**다. 핵심 데이터인 USGS ComCat(public domain), PB2002(ODC-By 1.0), GEBCO(public domain, 출처 표시 필요), Natural Earth(public domain)는 공개 저장소에 합법적으로 오프라인 번들할 수 있다. 다만 History의 `borders.json`처럼 CC BY-NC-SA 파일 하나로 합치면 안 되고, 레이어마다 파일과 licence 고지를 따로 둬야 한다. Smithsonian GVP는 조심해서 쓰고, UNEP-WCMC coral reef 레이어는 아예 쓰지 않는다. 엔진은 카메라, cross-fade, 캐시, tube, marker, WebGL fallback을 그대로 쓸 수 있다. 하지만 먼저 고칠 것이 다섯 가지다. `borders`가 없는 scene에서 멈추는 버그, 날짜변경선을 넘으면 detail texture가 비는 버그(Tonga와 Aleutians에서 확인), frame 안에서 동기로 paint하는 문제, iPad 메모리, 그리고 hold 동안 시간이 흐르게 할 진행값이 없다는 점이다. 학습과학 연구는 scrollytelling이 몰입은 높이지만 이해는 스스로 높이지 못한다는 쪽을 가리킨다. 그래서 품질은 움직임이 아니라 segmenting, pre-training, signalling, 그리고 scene과 Part마다 끼워 넣는 retrieval practice에서 나온다. 연습실은 specimen의 1·1·2·2·4·3 문항 흐름을 따르는 25점짜리 "Paper 1 Section A" 방으로 만들고, 그림 자료는 챕터와 같은 데이터에서 bake한다. 한 가지 전제가 있다. 연구 환경에서는 Cambridge 공식 PDF를 하나도 열 수 없었다. 그래서 syllabus와 mark scheme 문구는 검색 발췌 수준이고, 공개 전에 교사가 원문과 대조해야 한다.

## Tectonic hazards만 여섯 기준 모두 만점이다

2027–2029 syllabus는 열 개 topic으로 이루어진다. Paper 1에는 physical 다섯 개(changing river environments, changing coastal environments, changing ecosystems, tectonic hazards, climate change), Paper 2에는 human 다섯 개(changing populations, changing towns and cities, development, changing economies, resource provision)가 있다([0460 syllabus 2027–2029](https://www.cambridgeinternational.org/Images/718150-2027-2029-syllabus.pdf)). Cambridge는 climate change 내용을 늘렸다. 또 Geographical Skills paper를 없애고 그 기술을 "across all question papers"에서 평가한다고 밝혔다([Cambridge 0460 page](https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-geography-0460/)). 이 변화가 이 프로젝트에 중요하다. 지도 읽기는 이제 따로 떨어진 시험이 아니라 Paper 1 문항 안의 자료 해석이 되었고, 지구본 챕터가 바로 그 기술을 가르칠 수 있다. 용어도 바뀌었다. case study는 **detailed specific example(DSE)**로, MEDC/LEDC는 HIC/MIC/LIC로 바뀌었다([Scribd: 0460 syllabus changes](https://www.scribd.com/document/863064432/GEOGRAPHY-0460-SYLLABUS-CHANGES)). DSE는 모두 16개이고 Paper마다 8개다. 공식 또는 준공식 발췌로 문구를 확인한 것은 1.3.8, 2.3.7, 2.3.8(첫 bullet), 3.4.4, 4.4.3, 4.4.4, 7.3.2뿐이다. 나머지는 이전 세션이 `assets/js/data/geography.js`에 옮겨 적은 내용에 기대고 있다.

Tectonics가 1위인 이유는 시험 구조에 있다. specimen 0460/01은 1시간 45분, 75점 시험이다. 수험생은 Section A의 Question 1과 Section B 두 문항을 푼다([0460/01 specimen paper](https://www.cambridgeinternational.org/Images/718820-2027-specimen-paper-1.pdf)). 그 Question 1이 tectonics다. 첫 문항들은 이렇다. 판 이동 방향 tick-box(1점), "state the latitude and longitude of the earthquake labelled X in Figure 1.1"(1점), Richter magnitude(2점), 다른 지진 척도 이름 대기(2점), "describe the distribution" of earthquakes(4점), Figure 1.2를 보고 Whakaari 위치 서술하기(3점)([0460/01 specimen mark scheme](https://www.cambridgeinternational.org/Images/718816-2027-specimen-paper-1-mark-scheme.pdf)). 이 여섯 문항은 위도·경도 격자, 분포 패턴, 판 이동, 위치 서술처럼 지구본이 가장 잘 가르치는 것들이다. 4.4.3의 문구도 사건을 요구한다. 학생은 "the causes and impacts of an earthquake on a named country/area • the responses to the earthquake • the strategies and techniques used to manage the impacts of earthquakes"를 다뤄야 한다([geographypods 4.4](https://www.ibgeographypods.org/44-managing-the-impacts-of-tectonic-hazards.html)).

| 순위 | Topic | 점수 /30 | 핵심 근거 |
|---|---|---|---|
| 1 | 4 Tectonic hazards | **30** | specimen Section A 필수 문항이 지도 기반; DSE 두 개가 모두 날짜 있는 사건; 판 경계는 행성 규모 패턴; 시험관 보고서가 기록한 오개념 다수; 선과 화살표가 엔진의 tube·arrow에 바로 대응 |
| 2 | 5 Climate change | 24 | 새 topic이라 기출이 없어 학생 수요가 가장 큼; specimen Q4(CO₂와 기온, 1960–2020); DSE는 하나뿐 |
| 3 | 2 Coasts(tropical storms, reefs, mangroves 포함) | 22 | DSE 두 개; storm track은 움직이는 여정; headland·stack 같은 지형은 지구본이 잘 못 보여 줌 |
| 3 | 6 Population(migration 포함) | 22 | Paper 2 중 최선; 이주 화살표; 기존 DTM lab과 겹침 |
| 5 | 3 Ecosystems | 20 | specimen Q3 Antarctica; DSE 하나 |
| 6–10 | Economies, Resources, Rivers, Development, Towns and cities | 19–14 | 정적 choropleth이거나 지역 규모, 또는 1:50 000 지도 기술이 중심 |

점수는 연구자의 판단이다. 기준은 시험 비중, DSE 수, 시공간 여정, 공개 데이터, 문서화된 오개념, 카메라 적합도이며 각 1–5점이다. 오개념 열의 1점은 증거가 없다는 뜻이 아니라 조사를 못 했다는 뜻이다. specimen도 하나뿐이어서 실제 시험의 Section A는 다른 Paper 1 topic일 수 있다. 그래도 2위와의 격차가 6점이어서 순위가 뒤집힐 가능성은 낮다. tectonics와 tropical storms를 묶은 "hazardous Earth" 챕터도 생각해 볼 만하다. 하지만 그렇게 하면 KQ6의 "챕터 하나에 syllabus 단원 하나" 원칙이 깨지고, 2.3.7 DSE가 coasts에서 떨어져 나간다. 대신 tectonics 챕터 끝에 coasts 챕터로 넘어가는 "other hazards" 안내 scene을 하나 두는 편이 낫다.

DSE는 교사가 고르므로 챕터는 주 사례 하나를 깊게 다루고 "선생님이 X를 골랐다면" 대안을 한두 개 곁들여야 한다. Türkiye–Syria 2023이 가장 안전한 주 사례다. USGS는 M7.8 Pazarcık 지진(01:17 UTC, "strike-slip faulting at shallow depth", East Anatolia fault zone 안)과 약 9시간 뒤 95 km 떨어진 곳의 M7.5 Elbistan 지진을 각각 event page로 공개한다([USGS us6000jllz](https://earthquake.usgs.gov/earthquakes/eventpage/us6000jllz); [USGS us6000jlqa](https://earthquake.usgs.gov/earthquakes/eventpage/us6000jlqa)). 지표 파열은 Antakya와 Karaköse 사이 EAF를 따라 "over 300 km"다([SSA abstract](https://seismosoc.secure-platform.com/a/gallery/rounds/31/details/10177)). endorsed CUP 3판 coursebook도 tectonic DSE를 "set in Türkiye"로 쓴다([CUP 3rd edition coursebook](https://www.cambridge.org/us/education/subject/humanities/geography/cambridge-igcse-and-o-level-geography-3rd-edition/cambridge-igcse-and-o-level-geography-3rd-edition-coursebook-digital-access-2-years-digital-coursebook-2-years)). 사망자 수는 출처마다 다르다. ">50,000"이라는 출처가 있고([Learning from Earthquakes](https://learningfromearthquakes.org/images/earthquakes/2023_02_05_Turkey/M7.8_Turkey-Syria_EQ_6_February_2023.pdf)), ">59,000 fatalities and ~$119B in damage"라는 출처도 있다([NSF PAR](https://par.nsf.gov/biblio/10585045)). 따라서 KQ6처럼 범위로 보여 줘야 한다. 분화 쪽 Eyjafjallajökull 2010은 수치가 동료심사 논문에 있다. 약 108,000편 결항, 1,050만 명 승객 영향, 항공사 손실 US$1.7 bn 이상이다([Budd et al.](https://figshare.com/articles/journal_contribution/A_fiasco_of_volcanic_proportions_Eyjafjallaj_kull_and_the_closure_of_European_airspace/9449402)). Merapi 2010은 LIC/MIC 대비로 쓴다. 인도네시아 재난청 수치로 11월 8일까지 279,702명이 대피했고 141명이 숨졌다([JICA](https://www.jica.go.jp/project/english/indonesia/0800040/news/general/101026.html)). 10월 26일 directed blast는 Kinahrejo 마을을 덮쳐 Mbah Marijan을 포함해 약 30명이 숨졌다([Indonesian Journal of Geoscience](https://ijog.geologi.esdm.go.id/index.php/IJOG/article/view/163)). Nepal 2015, Haiti, Christchurch, Tōhoku는 이미 `assets/js/data/practice-geography.js`의 비교표와 응답 문항에 쓰이고 있으니 주 사례로 다시 쓰지 않는다. 2027용 교사 자료가 Haiti 2010과 Hunga Tonga 2022를 DSE로 쓰는 것을 보면([Tes: tectonic hazards 2027](https://www.tes.com/teaching-resource/updated-syllabus-tectonic-hazards-igcse-geography-cambridge-assessment-13401735)), 대안 카드가 왜 필요한지 알 수 있다.

## Specimen Q1의 1·1·2·2·4·3이 장면과 블록의 모양을 정한다

Paper 1의 각 structured question은 25점이며 "a range of short-answer items and an extended response"로 이루어지고, 일부는 자료를 바탕으로 한다([0460 syllabus](https://www.cambridgeinternational.org/Images/718150-2027-2029-syllabus.pdf)). 저장소가 이전에 확인한 바로는 Section B의 Q2–4가 1·2·3·4·3·5·7 흐름이다. 5점 문항은 1점을 evaluation에 남겨 두고, 7점 (c)는 Table B로 채점한다(`CLAUDE.md`, "Where practice marks come from"). Section A Q1은 1·1·2·2·4·3으로 시작해서 흐름이 다르다. 기존 연습 세트는 Q2–4 흐름만 따른다. Table B Level 3(6–7점)의 조건은 "uses named example (when appropriate)"와 "specific details about place or process"다([0460/01 specimen MS](https://www.cambridgeinternational.org/Images/718816-2027-specimen-paper-1-mark-scheme.pdf)). 2020 specimen에서도 Level 3은 "named example with at least one piece of place-specific detail"이었다([2020 specimen MS](https://www.cambridgeinternational.org/images/414660-2020-specimen-paper-mark-scheme-1.pdf)). 따라서 DSE scene의 일은 분명하다. 학생이 시험장에서 떠올릴 수 있는 **장소에 고유한 구체 정보**를 만들어 주는 것이다.

시험관 보고서는 그 구체 정보가 어디서 무너지는지 보여 준다. June 2023 보고서는 "Where place-specific detail was also given, full marks were gained"라고 썼다. 약한 답안은 입지 요인을 알면서도 "could not convincingly link them to a specific location"이었다. 보고서는 나라 대신 지역 이름을 쓰라고 권한다("Pipri rather than Pakistan")([June 2023 examiner report](https://www.cambridgeinternational.org/Images/569587-june-2023-examiner-report.pdf)). 카메라가 지구에서 지역, 다시 구역으로(Türkiye → Kahramanmaraş → Antakya) 내려가는 연출은 바로 이 "Pipri 수준"을 눈으로 보여 주는 장치다. 아래 표는 tectonics 오개념 가운데 근거가 있는 것만 모은 것이다. 이 보고서들은 모두 2027 이전 syllabus 기준이지만 tectonics 내용은 그대로 이어진다.

| 오개념 또는 약점 | 근거 | 챕터에서 고치는 곳 |
|---|---|---|
| 지진 지역에 사는 이유를 "they can easily be predicted, and people can therefore fully evacuate"라고 씀 | [2023 examiner report](https://www.cambridgeinternational.org/Images/569587-june-2023-examiner-report.pdf) (June/Nov 구분 불명) | "왜 위험한 곳에 사는가" scene의 Common mistake 카드 |
| 지도에 없는 판 경계를 근거로 듦 | 같은 보고서 | Alaska 기술 scene에서 판 레이어를 끄고 지도에 보이는 것만 서술 |
| 지진을 묻는데 화산의 장점을 씀(질문 오독) | 같은 보고서 | Check yourself마다 command word와 초점 한 줄 |
| "viscous lava ... travels faster than that from a shield volcano" | [June 2024 examiner report](https://www.cambridgeinternational.org/Images/569587-june-2024-examiner-report.pdf) | shield vs strato scene |
| convergent margin은 알아보지만 화산이 생기는 과정을 설명하지 못함 | [March 2020 report](https://aleveler.com/wp-content/uploads/past-papers/0460_m20_er.pdf) | 섭입 단면 inset을 단계별로 그리기 |
| "Few answers showed understanding of the term 'distribution'" | [March 2025 report (2차 업로드)](https://www.scribd.com/document/936090016/Geography-march-2025-past-paper-exam-2025) | 첫 분포 scene과 모범 "describe the distribution" 답 |
| 화산이 무작위로 흩어져 있다, 지진이 분화를 일으킨다 | [InVEST Volcanic Concept Survey](https://files.eric.ed.gov/fulltext/EJ1164573.pdf) | 오프닝 scene의 예측 질문 |
| 해양–대륙 경계에서 섭입이 왜 일어나는지 혼동 | [Mills, Tomas & Lewthwaite 2017](https://eprints.qut.edu.au/107275/3/107275.pdf) (검색 요약) | 섭입 scene의 "밀도" In fact 카드 |

KQ6의 블록은 시험 기능에 맞게 다시 정의해야 한다. "Why it matters"는 이 내용이 어느 문항 유형에 쓰이는지 말해 준다(예: "4점짜리 describe the distribution 문항의 재료다"). "Common mistake / In fact"에는 위 표처럼 근거가 있는 오개념만 싣는다. "맨틀은 액체 마그마의 바다다", "규모 8은 규모 4의 두 배다", "VEI는 사망자 수다"처럼 그럴듯하지만 출처가 없는 카드는 출처를 찾을 때까지 넣지 않는다. "Judgement"는 시험의 AO3에 맞춰 "Evaluate"로 바꾼다. for/against/verdict 구조가 5점 문항의 evaluation 1점과 Table B 7점 문항의 연습이 되게 한다. "Check yourself"는 describe, explain, suggest, evaluate를 돌아가며 쓰고 "이 command word가 원하는 것" 한 줄을 붙인다. `CLAUDE.md`의 "Not done"에는 History scene에 아직 "exam link" 필드가 없다고 적혀 있다. Geography는 처음부터 `exam: { paper: 1, section: 'A', skill: 'describe the distribution', marks: 4 }` 같은 필드를 두는 편이 낫다. 각 DSE 묶음은 "외울 장소 고유 정보 세 가지" 카드로 끝내고, 그 카드는 `ui.js`의 examples tracker 항목(4.4.3, 4.4.4)과 연결한다.

지구본이 가르칠 수 없는 것도 분명히 해야 한다. Paper 2 Section A는 Kingston, Jamaica의 1:50 000 survey map으로 grid reference, 작업장 위치, 공항 위치를 묻는다([0460/02 specimen paper](https://www.cambridgeinternational.org/Images/719022-2027-specimen-paper-2.pdf)). 이것은 지형도 읽기 기술이라서 지구본 챕터의 범위 밖이다. Paper 4 Geographical Investigations는 30점짜리 fieldwork 문항 두 개(해변 자갈 연구, Rome으로의 이주)로 이루어진다([0460/04 specimen](https://www.cambridgeinternational.org/Images/718821-2027-specimen-paper-4.pdf)). tectonics 챕터에서는 "진앙에서 멀어질수록 피해가 줄어드는지 검증할 조사를 설계하라" 같은 선택 프롬프트 하나로 연결하는 정도가 알맞다.

## 공개 데이터는 충분하지만, 한 파일로 합치면 라이선스가 꼬인다

tectonics 챕터의 핵심 데이터는 모두 public domain이거나 출처 표시만 요구하는 라이선스다. USGS ComCat은 USGS 자료에서 "Public Domain"으로 표시된다([USGS ComCat wrapper libraries](https://www.usgs.gov/media/images/comcat-wrapper-libraries); [IFRC Monty STAC: USGS](https://ifrcgo.org/monty-stac-extension/model/sources/USGS/)). ShakeMap도 같다([USGS ShakeMap icon](https://www.usgs.gov/media/images/shakemap-icon-0)). 판 경계는 Bird(2003) PB2002를 Hugo Ahlenius(Nordpil)가 GIS로 변환한 fraxen/tectonicplates를 쓴다. 이 변환본은 **Open Data Commons Attribution License**이고 Ahlenius, Nordpil, Bird를 표기하라고 요청한다([fraxen LICENSE.md](https://raw.githubusercontent.com/fraxen/tectonicplates/master/LICENSE.md)). Bird 원본 파일의 라이선스 원문은 찾지 못했다. Nordpil이 "free unrestricted download"라고 설명했을 뿐이다([Nordpil](https://nordpil.com/resources/tectonic-plates-gis-data/)). GEBCO grid는 public domain이다. 하지만 출처를 밝혀야 하고, GEBCO/IHO/IOC가 보증한 것처럼 보이면 안 되며, 항해용으로 쓰면 안 된다([GEBCO terms of use](https://www.gebco.net/data-products/gridded-bathymetry/terms-of-use)). ETOPO 2022는 "may be used and redistributed for free but is not intended for legal use"다([ERDDAP ETOPO 2022](https://oceanwatch.pfeg.noaa.gov/noaa_wide/erddap/griddap/ETOPO_2022_v1_30s.html)). Natural Earth는 모든 판이 public domain이다([Natural Earth about](https://www.naturalearthdata.com/about/)). 실측 증거 scene에 쓸 위성영상도 열려 있다. Landsat은 "no restrictions"다([USGS Landsat FAQ](https://www.usgs.gov/faqs/are-there-any-restrictions-use-or-redistribution-landsat-data)). Sentinel은 수정했으면 "Contains modified Copernicus Sentinel data [Year]"를 붙여야 한다([ESA Sentinel Data Legal Notice](https://sentinel.esa.int/documents/247904/690755/Sentinel_Data_Legal_Notice)). NASA Earth Observatory 이미지는 "NASA" 출처만 밝히면 되지만 NASA 로고는 쓸 수 없다([NASA EO image use](https://earthobservatory.nasa.gov/ImageUse); [NASA images and media](https://www.nasa.gov/nasa-brand-center/images-and-media/)).

조심해야 할 것은 화산 목록이다. Smithsonian GVP Volcanoes of the World에는 Smithsonian Terms of Use가 적용된다. CC0가 아닌 콘텐츠는 "may only be used for personal, educational, and other non-commercial uses consistent with the principles of fair use"이다([Smithsonian Terms of Use](https://www.si.edu/termsofuse); [GVP citation page](https://volcano.si.edu/gvp_cite.cfm)). 이것은 공개 라이선스가 아니다. 버전도 2026년 동안 5.3.4에서 5.4.0으로 바뀌었다([GVP VOTW](https://volcano.si.edu/gvp_votw.cfm)). 챕터에 필요한 것은 화산 삼각형 수백 개와 DSE 화산 몇 개다. 그러니 이름, 위경도, 유형, 최근 분화 연도만 남긴 최소 파생 목록을 별도 파일로 두고, 정확한 버전과 내려받은 날짜를 적어 인용하는 것이 현실적이다. NOAA NCEI의 Significant Volcanic Eruptions database는 public domain 대안일 가능성이 있지만 이번에 조사하지 못했다.

| 데이터셋 | 쓰임 | 라이선스 | 판정 |
|---|---|---|---|
| USGS ComCat(+ ShakeMap) | 진앙, 진도 지도 | US public domain | **번들**: M≥6, 1900–2026 필터 |
| PB2002(fraxen) | 판 경계(유형별) | ODC-By 1.0(변환본), Bird 원본은 불명 | **번들**: 단순화, Ahlenius/Nordpil/Bird 표기 |
| Smithsonian GVP VOTW | 화산 | Smithsonian Terms of Use | **주의**: 최소 파생 목록만 별도 파일로 |
| GEBCO_2025/2026, ETOPO 2022 | 해저 지형, 기복 | public domain + 표기 / 자유 재배포 | **번들**: bake한 JPEG/R8 crop |
| Natural Earth | 육지, 국경, 하천 | public domain | **번들** |
| Landsat, Sentinel-2, NASA EO | 실측 증거, 사진 자료 | 제한 없음 / 고정 고지문 / "NASA" | **번들**: 캡션에 credit |
| NOAA IBTrACS v04r01 | (coasts 챕터) storm track | US 정부 저작물 | **번들**: 일부만 추린 subset |
| Allen Coral Atlas, Global Mangrove Watch v3.0 | (coasts 챕터) 산호초, 맹그로브 | CC BY 4.0 | **번들** |
| GISTEMP, NOAA GML CO₂, NSIDC Sea Ice Index v4 | (climate 챕터) 시계열 | US 정부 / CC0 | **번들** |
| ERA5 | (climate 챕터) 기온 이상 텍스처 | CC BY 4.0(2025-07-02부터) | **번들** |
| Berkeley Earth | 기온 | CC BY-NC 4.0 | **주의**: GISTEMP/NOAA를 우선 |
| HydroRIVERS/HydroBASINS | 하천 | HydroSHEDS licence agreement | **주의**: 사례 하나를 bake한 이미지만 |
| OpenStreetMap | 지형도식 지도 | ODbL | **주의**: 정적 이미지로만, vector는 금지 |
| UNEP-WCMC warm-water coral reefs | 산호초 | UNEP-WCMC General Data License | **사용 금지** |

합치는 규칙이 중요하다. CC 지침과 대학 도서관 해설에 따르면 public domain, CC0, CC BY 4.0, CC BY 3.0 IGO, ODC-By 자료는 CC BY-NC-SA 2차 저작물에 합칠 수 있다([CC compatible licenses](https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses); [Western Sydney CC compatibility](https://westernsydney.pressbooks.pub/cclicensingattribution/chapter/understanding-cc-licence-compatibility/)). 반면 BY-NC-SA와 BY-SA는 한 2차 저작물에 섞을 수 없다([Wikimedia Meta guide](https://meta.wikimedia.org/wiki/Open_Content_-_A_Practical_Guide_to_Using_Creative_Commons_Licences/The_Creative_Commons_licencing_scheme)). 합치는 것이 가능해도 피해야 할 이유가 두 가지 있다. 하나는 public domain과 CC BY 레이어가 NC-SA에 묶여 버려 형제 사이트 `is-desk`가 재사용하기 어려워진다는 점이다. 다른 하나는 Smithsonian, HydroSHEDS 같은 맞춤 약관과 ODbL은 애초에 다른 라이선스로 바꿀 수 없다는 점이다. 그래서 레이어마다 파일을 따로 두고 `assets/data/geo/LICENSES.txt`(또는 레이어별 `*-LICENSE.txt`)에 다섯 가지를 적는다. 출처, 라이선스와 URL, 가한 변경("simplified, quantised, converted to TopoJSON"), 필요한 credit 문구, 버전과 내려받은 날짜다. 페이지에도 연습 문제의 `source`처럼 credit을 보여 준다. 여러 라이선스 파일을 한 페이지에 나란히 보여 주는 것은 CC 관점에서 2차 저작물이 아니라 collection이다.

쓰지 말아야 할 것도 분명하다. UNEP-WCMC General Data License는 "You may not redistribute the Data in whole or in part by any means including ... through interactive web maps"라고 쓰고, 2차 저작물 안에서의 sub-licensing도 금지한다([UNEP-WCMC General Data License](https://www.unep-wcmc.org/policies/general-data-license-excluding-wdpa)). 이 사이트의 JSON과 PNG는 누구나 내려받을 수 있으므로 bake한 텍스처도 안전하지 않다. 대신 Allen Coral Atlas(CC BY 4.0)를 쓴다([Allen Coral Atlas FAQ](https://allencoralatlas.org/faq/)). HydroSHEDS 구버전 문서는 "stand-alone product"로 배포하는 것을 금지한다([HydroSHEDS TechDoc v1.3](https://uploads-ssl.webflow.com/602eb43d42a3b5553a4f134c/624361e8ace0af1ff6fa65fa_HydroSHEDS_TechDoc_v1_3_legacy.pdf)). 그러니 전 지구 하천은 Natural Earth로 그린다. OSM은 정적 이미지라면 attribution만 있으면 된다([OSMF Attribution Guideline](https://osmfoundation.org/wiki/Attribution)). 하지만 OSM vector를 CC BY-NC-SA 파일에 넣으면 두 share-alike 조건이 충돌한다. Wikimedia 사진은 파일마다 라이선스가 다르다([Commons: Reusing content](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia)). 시험 자료처럼 주석을 달면 2차 저작물이 되므로 ND 사진은 쓸 수 없다([University of Guelph guide](https://books.lib.uoguelph.ca/copyrightcc/?p=46)). 실측 증거 scene에 흔히 쓰이는 Maxar 전후 비교 사진([Al Jazeera](https://www.aljazeera.com/news/longform/2023/2/8/satellite-images-show-scale-of-destruction-in-turkey-syria-earthquake))은 상업 영상이다. 같은 형식을 Sentinel이나 Landsat으로 직접 만들어야 한다.

용량은 다룰 만하다. 아래는 측정값이 아닌 계획용 추정이다. M≥6 지진 수만 건을 약 0.01° 정밀도와 깊이, 규모, 날짜로 양자화하면 150–300 KB이고, GVP 최소 목록은 30–60 KB, 단순화한 PB2002는 50–150 KB 정도다. 래스터 crop은 각각 150–400 KB로 History의 relief JPEG(174 KB, 366 KB)와 비슷하다. ComCat의 이른 시기 기록은 불완전하다. ISC-GEM은 1900–2009를 시기별 완전성 기준으로 정리하고 있다([USGS pub on ISC-GEM](https://pubs.usgs.gov/publication/70137462)). 따라서 date ribbon에서 1960년 이전 구간이 불완전하다는 것을 표시해야 정직하다. 챕터 데이터는 전체 약 1 MB 이하를 목표로 한다.

중국 본토라는 조건은 실행 시점보다 빌드 시점에 더 문제가 된다. 사이트는 실행 중 외부 요청을 하지 않으므로 학생은 차단을 겪지 않는다. 하지만 원본을 내려받을 호스트가 막혀 있다. www.ngdc.noaa.gov는 2026-06-24 측정에서 100% 차단되었다([GreatFire ngdc](https://en.greatfire.org/www.ngdc.noaa.gov)). Earth Observatory는 2025-12-29부터 간섭을 받고 있다([GreatFire Earth Observatory](https://en.greatfire.org/https/www.earthobservatory.nasa.gov)). github.com은 2026-08-25에 50% 장애가 있었다([GreatFire github.com](https://en.greatfire.org/https/github.com/github)). 그러니 History처럼 원본을 방화벽 밖에서 한 번만 받거나 AWS Open Data, Zenodo 같은 mirror에서 받는다. 받은 파일은 `tools/.cache/geo/`(gitignore 대상)에 두고, URL과 파일 이름은 `CLAUDE.md`에 적는다. GitHub Pages 자체가 가끔 끊기는 것은 데이터가 아니라 공개 사이트의 위험이며 이 보고서의 범위 밖이다.

## 움직임은 몰입을 만들고, 기억은 인출 연습이 만든다

### 빌려 올 것은 뉴스룸의 화려함보다 과학기관의 정직함이다

가장 쓸모 있는 참고작은 흔히 떠올리는 화려한 뉴스 그래픽이 아니다. 실측 증거와 과장 비율을 숨기지 않는 과학기관의 작업이다. 첫째는 USGS의 2023 Türkiye geonarrative다. 순서가 구조적 배경, 1900년 이후 지진 이력, M7.8과 M7.5 연쇄, 단층 운동, 위성 변위, 애니메이션 timeline이다([USGS geonarrative](https://www.usgs.gov/programs/earthquake-hazards/news/new-interactive-geonarrative-explains-2023-turkey-earthquake)). 이 순서를 DSE Part의 틀로 그대로 쓸 수 있다. 둘째는 NASA SVS *Perpetual Ocean*이다. 어두운 해저 지형 위에 흐름을 그리고, 육지 20배, 해저 40배라는 과장 비율을 밝힌다([NASA SVS 3827](https://svs.gsfc.nasa.gov/3827)). 물이 먼저 보이는 지구본의 재료로 가장 좋은 참고다. 셋째는 Washington Post의 2018 Hurricane Michael tracker다. 실제 폭풍을 보여 주기 전에 *가상의* 허리케인으로 해일이 왜 오른쪽 앞 사분면에서 가장 강한지 먼저 설명한다([WaPo: Tracking Hurricane Michael](https://www.washingtonpost.com/graphics/2018/national/tracking-hurricane-michael/)). IGCSE의 "과정 먼저, 사례 다음" 논리와 같다. 넷째는 The Weather Channel의 폭풍 해일 영상이다. 157 cm 기상캐스터를 가상 거리에 세워 해일 높이를 사람 크기로 보여 줬고, 클립 조회수가 2,300만을 넘었다([Pew Trusts](https://www.pewtrusts.org/en/research-and-analysis/articles/2018/12/03/the-weather-channel-uses-animation-to-show-dangers-of-storm-surge)). 수치 옆에 사람이나 2층집 같은 SVG 기준 척도를 두라는 교훈이다. 다섯째, 2025 Myanmar 지진에 대한 ESA Sentinel-1 coherence map은 단층을 어두운 균열로 보여 준다([ESA](https://www.esa.int/ESA_Multimedia/Images/2025/04/Myanmar_earthquake_coherence_map_from_Sentinel-1)). 직접 만들 수 있는 실측 증거의 표준 형식이다. 마지막으로 Snow Fall은 3D 지형을 장식이 아니라 사건의 위치를 짚는 데 썼다. 하지만 데이터가 커서 페이지가 멈출 위험 때문에 맞춤 코드가 필요했다([CGW](https://www.cgw.com/Press-Center/News/2013/Students-Elevate-Work-on-Groundbreaking-Times-Pi.aspx)). 무게가 경고 신호라는 뜻이다.

반대로 피할 것도 있다. Google Earth Timelapse와 earth.nullschool 같은 실시간 서비스, AR, 위치 정보, 게임 엔진 수준의 사실감이다. 실시간 서비스는 외부 로딩 금지 원칙을 깨고, 사실감은 아래에서 보듯 이해를 돕지 않는다. NYT의 Archie Tse가 Malofiej 2016에서 "Why We Are Doing Fewer Interactives"라는 발표를 한 이유도 같다([Nieman Lab](https://www.niemanlab.org/2016/03/at-the-malofiej-infographics-world-summit-the-best-form-of-storytelling-is-often-static/)). 중요한 내용은 tooltip이나 hover 뒤에 숨기면 안 된다.

### 한 장면 한 생각, 한 번에 하나만 움직인다

학습과학의 결론은 일관된다. Mayer의 segmenting 원리는 10개 검증 중 10개에서 지지되었고 효과크기 중앙값은 d = 0.79다. pre-training은 16개 중 13개에서 d = 0.75였다(수치는 검색 요약)([Mayer & Pilegard](https://cambridge.org/core/books/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258)). segmenting 메타분석은 시스템이 끊는 분할에서도 효과가 유지됨을 보였다([Rey et al. 2019](https://is.mpg.de/publications/rey2018segmenting)). 스크롤 구간이 바로 그런 분할이다. signalling의 효과는 retention d = 0.27, transfer d = 0.34다([Xie et al. 2017](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5576760/)). 애니메이션의 효과는 생각보다 작다. 정적 그림 대비 d = 0.37([Höffler & Leutner 2007](https://www.leibniz-ipn.de/en/research/publications/instructional-animation-versus-static-pictures-a-meta-analysis)), 61개 연구를 묶은 메타분석에서는 g = 0.226이다([Berney & Bétrancourt 2016](https://archive-ouverte.unige.ch/unige:92234)). 애니메이션은 장면이 계속 사라지므로 학습자가 지나간 프레임을 작업기억에 붙들어야 한다. 이 transient information 문제는 스크롤바 같은 학습자 제어로 줄일 수 있다([UNSW appendix](https://www.animations.physics.unsw.edu.au/appendices/Appendix9.pdf)). 그래서 hold 안에서 시간을 *스크롤로* 진행시키는 설계가 정당화된다.

두 연구가 특히 경고한다. Hegarty 등은 날씨 지도에서 중요한 정보를 더 눈에 띄게 해도 원리를 배우기 *전에는* 정확도가 오르지 않고, 배운 *뒤에만* 오른다는 것을 보였다([Hegarty, Canham & Fabrikant 2010](https://www.ovid.com/journals/jeplm/pdf/00004786-201001000-00021~thinking-about-the-weather-how-display-salience-and)). 그래서 Part마다 첫머리에 핵심 용어 3–5개를 먼저 가르쳐야 한다(crust, mantle, plate boundary, subduction, magma chamber). Smallman과 St. John은 사람들이 사실적인 화면을 선호하지만 그 화면에서 오히려 수행이 나빠지는 "naïve realism"을 보고했다([Smallman & St. John](https://tarheels.live/topics/wp-content/uploads/sites/2744/2023/04/naive-realism.pdf)). 사진 같은 텍스처보다 패턴이 잘 보이는 깨끗한 지도가 낫다. 애니메이션 choropleth에서 독자는 어디가 바뀌었는지 자주 놓치면서도 자신 있어 했다([Penn State GEOG 486 on Fish et al. 2011](https://courses.ems.psu.edu/geog486/book/export/html/924)). 휴대폰에서는 small multiples가 애니메이션보다 일관되게 빨랐다([Brehmer et al. 2020](https://hal.archives-ouvertes.fr/hal-02317687)). 따라서 VEI 비교나 지진 네 건 비교는 정적 small multiples로 만든다.

가장 불편한 결과는 scrollytelling 자체가 이해를 높여 주지 않는다는 것이다. 개인정보 처리방침을 scrollytelling으로 만들었더니 몰입과 체감 명확성은 올랐지만 이해 정확도는 텍스트와 같았다([ACM: scrollytelling privacy policies](https://dl.acm.org/doi/10.1145/3772318.3790704)). 반면 인출 연습의 근거는 강하다. 21분짜리 온라인 강의 중간에 시험을 끼워 넣자, 시험이 없는 집단에서 약 40%이던 딴생각이 절반으로 줄고 기억이 좋아졌다. 단순히 강의를 끊거나 다시 공부하게 하는 것으로는 효과가 없었다([Szpunar, Khan & Schacter 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC3631699/)). 교실 실험 50건(n = 5,374)에서는 효과크기의 57%가 중간 이상이었다. 다만 94%가 미국과 서유럽에서 나온 연구다([Agarwal, Nunes & Blunt 2021](https://www.retrievalpractice.org/review)). 영상 구간마다 사전 질문을 넣으면 질문한 내용과 새 내용 모두 학습이 좋아졌다는 결과도 있다. 실제 강의에서는 효과가 대부분 질문한 내용에 그쳤다([Toftness et al. 2018](https://pure.royalholloway.ac.uk/files/30437641/JARMAC_Toftness_et_al.pdf)). 이 결과를 종합하면 설계 규칙이 나온다. scene당 생각 하나(본문 60–120단어와 시각 자료 하나). 카메라는 scene 사이 간격에서만 날고, 레이어 애니메이션은 hold 중에만 하며, 둘을 동시에 하지 않는다. 애니메이션 데이터는 2–3개 등급으로 단순화한다. scene마다 Check yourself를 두고 그중 일부는 공개 *전* 예측 질문으로 만든다. Part마다(10–15분 간격) command word를 쓴 누적 3–5문항 점검을 넣는다. 어떤 점검도 진행을 막지 않는다. 단면도는 지구본 안이 아니라 패널 안 2D SVG로 단계별로 그리고, 지구본 위의 단면선(SECTION A–B)과 이름을 맞춘다. AR sandbox가 지형 이해는 높였지만 단면도 작성 능력은 높이지 못했다는 연구가 있다([Evans et al. 2018](https://www.ige.unicamp.br/terraedidatica/v14_4/144-8.html)). 학생이 시험지에 직접 그릴 수 있는 "exam version"으로 단면을 끝내야 하는 이유다.

### 같은 문법, 다른 재료: 파란 바다 지구본과 휴대폰 bottom sheet

시각 정체성은 KQ6의 *문법*을 지키고 *재료*를 바꾸는 방식이 좋다. 지킬 문법은 italic 첫 단어가 있는 serif 대문자, Plex Mono 대문자, pill tag, glass panel, orb가 있는 glass pill navigator, 하단 ribbon이다. 바꿀 재료는 이렇다. 바다를 깊이에 따라 한 가지 순차 청색 ramp로 칠하고(대륙붕은 밝게, 해구는 거의 검게), 그 위에 어둡게 hillshade한 육지를 얹는다. History가 육지 국경을 강조했다면 Geography는 해저와 기복을 강조한다. 판 경계는 유형별 색에 *패턴*도 더한다. divergent는 실선, conservative는 점선, subduction은 위로 올라타는 판 쪽에 톱니를 단다. 지진은 크기로 규모를, 색각 이상에 안전한 순차 ramp로 깊이를 나타낸다. 무지개와 빨강–초록 ramp는 데이터를 왜곡하고 색각 이상자가 읽을 수 없다([Crameri, Shephard & Heron 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7595127)). 중국 쓰촨대 신입생 검사에서 남학생의 4.11%가 색각 이상이었다([Int J Ophthalmol 2023](https://gjyk.ijournals.cn/gjyken/article/abstract/20230923)). 남학생 25명 반이면 한 명꼴이다. accent는 보라 대신 청색 3색을 쓴다. 이번 조사에서 계산한 대비는 이렇다. `--acc #7cc4ff`는 `#05060a` 위에서 10.8:1, `--acc-deep #1f5fbf` 위 흰 글자는 6.1:1, `--acc-ink #06182e`는 `#7cc4ff` 위에서 9.5:1이다. 모두 History의 짝(8.3:1, 6.4:1)과 같거나 높다. 위험과 열에만 쓸 따뜻한 보조색 `#ff9b54`(9.7:1)를 하나 두면, 파랑은 물과 차분함으로, 주황은 위험으로 읽힌다. 과장 비율은 Plex Mono로 "RELIEF ×20 · SEAFLOOR ×40"처럼 화면에 밝힌다. 다만 과장은 "의심스러우면 덜" 하는 것이 원칙이다([Shaded Relief](https://shadedrelief.com/3D_Terrain_Maps/3dterrainmapsver.html)).

휴대폰 배치는 History와 달라야 한다. KQ6는 900 px 이하에서 패널이 지도를 덮는다. History에서는 본문이 내용을 실어 날랐기 때문에 괜찮았다. Geography에서는 지도가 증거다. 그래서 hold 순간 화면 위쪽 45–55%를 지도에 남기는 bottom sheet로 바꾸고, 카메라 목표를 그 띠의 가운데로 올린다. The Pudding은 휴대폰 경험을 처음부터 설계하라고 하고, 스크롤을 유지할 이유는 전환이 "truly meaningful"할 때뿐이라고 한다([The Pudding](https://pudding.cool/process/responsive-scrollytelling/)). 움직임 감소도 진지하게 다뤄야 한다. WCAG 2.3.3은 parallax처럼 덧붙인 움직임을 끌 수 있어야 한다고 본다([W3C Understanding 2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)). 40세 이상 미국 성인의 35.4%에서 전정기능 이상이 관찰되었다([Agrawal et al. 2009](https://pubmed.ncbi.nlm.nih.gov/19468085)). 화면을 프로젝터로 띄우는 교사를 생각하면 pill 메뉴에 눈에 보이는 motion 토글을 두는 것이 맞다. 움직임 감소 모드에서는 hard cut 대신 150–250 ms cross-fade를 쓰고, 시간 애니메이션은 최종 상태와 재생 버튼으로 바꾼다. 본문의 핵심 단어를 지도 레이어와 같은 색으로 연결하면 회상이 좋아졌다([Zhi, Ottley & Metoyer 2019](https://diglib.eg.org/handle/10.1111/cgf13719)). 제목과 주석이 메시지를 기억에 남긴다는 연구도 있다([Borkin et al. 2015](https://vcg.seas.harvard.edu/publications/20150101-beyond-memorability-visualization-recognition-and-recall)). 그러니 scene 제목은 장소 이름이 아니라 요점이어야 한다. "Mid-Atlantic Ridge"가 아니라 "*Where* plates pull apart, new crust is made"다. 지금 `history/kq6.html`의 world container는 `aria-hidden="true"`다. Geography에서는 지도가 증거이므로 scene마다 `map.alt` 한 문장과 숫자 표를 visually hidden 텍스트로 넣어야 한다. 차트의 대체 설명과 데이터 표를 함께 주는 Datawrapper 방식이 참고가 된다([Datawrapper Academy](https://www.datawrapper.de/academy/how-we-make-sure-our-charts-maps-and-tables-are-accessible)).

## 지금 엔진은 borders 없는 scene 하나에 멈춘다

`src/world/engine.js`는 작고 대부분 범용이다. 공개 API는 `createWorld(host, { scenes, hero, data, relief, reduced, onFrame })` → `{ setProgress(p), prepare(i), destroy() }`뿐이다([engine.js:218, 478-482](../src/world/engine.js)). 번들 `world.js`는 596,239 bytes(gzip 155,407 bytes)인데, 그중 three가 556 KB이고 엔진 코드는 15 KB에 불과하다. great-circle 카메라 비행과 log 고도 보간, scene별 world texture와 detail texture의 A/B cross-fade, idle 시간 paint 캐시, 그리기 shader가 있는 arrow와 tube, DOM marker, WebGL 실패 시 `null` fallback은 Geography에서도 그대로 쓴다. History 전용인 것은 CShapes 해석, `paintTexture`의 Berlin 분기와 focus halo, `overlayFor`의 `iron-curtain`과 `wall` 분기, 보라색 `PALETTE`다.

| 파일 | 그대로 쓰는 것 | 바꿔야 하는 것 |
|---|---|---|
| `src/world/engine.js` | `ll`, `placeCamera`, view offset, A/B cross-fade와 shader `state()` box blend, 캐시와 `prepare()`, `arrowMesh`/`tubeMaterial`/`pathPoints`/`lineGeometry`, DOM marker, WebGL fallback | core와 History/Geography layer 모듈로 분리; `borders`·`cshapes`를 선택 사항으로; 날짜변경선; frame 안 paint 금지; canvas pool; 해저 sampler; GPU 점·선 레이어; label escape; 보라 상수를 token으로 |
| `assets/js/chapter.js` | `measure`/`progressAt`/`goTo`, Part, 메뉴, pill, check 토글, facts와 sources, toolkit, loader | `data-chapter`로 동적 import; hero 문구·ribbon 축·데이터 URL·loader 바이트(하드코딩 660000)를 데이터로; `'After'` 하드코딩; `FP…` 접두; `chart()`를 inset registry로; `{p, u}` 반환 |
| `assets/css/chapter.css` | 타입 시스템 전체 | 보라 literal(`rgb(182 147 255 / …)` 20회 등)을 `--acc-rgb` token으로; 900 px 이하 ribbon 숨김과 패널 배치를 bottom sheet로; no-WebGL 보라 gradient를 scene별 정적 이미지로 |
| `tools/build-maps.mjs` | "scene이 쓰는 것만 남긴다"는 방식, licence 파일 | `^kq\d\.js$` 정규식(아홉 챕터에서 끊김); 같은 방식의 `tools/build-geo.mjs`를 새로 |
| `assets/js/paper2.js` | 2단 배치, sticky 자료 열, 그림을 깜박이는 chip | 텍스트 sources를 그림 자료(map/photo/graph)로; level 채점을 `practice.js` scheme(`p`, `data`, `e5`, `tb`)으로 |
| `tools/pages.py` | `shell()` | `CHAPTERS`를 과목별 dict로; `chapter_shell()`로 손으로 쓴 `history/kq6.html`의 nav·footer 중복 제거 |

먼저 고칠 다섯 가지가 있다. 첫째, `createWorld`가 `data.objects.cshapes`를 무조건 읽고, `map.borders`가 없는 scene은 `dayNum(undefined)`에서 예외를 던진다([engine.js:27, 232, 248, 453](../src/world/engine.js)). 지금은 Geography scene을 하나만 넣어도 페이지가 멈춘다. 둘째, detail box를 날짜변경선 처리 없는 경도로 만들고 회전하지 않은 `geoEquirectangular`로 그린다. 그래서 Tonga 상공(−20.5, −175.4, 고도 2,000 km)에서는 box가 −210.8…−140°가 되어 180° 서쪽(Vanuatu, Fiji 대부분)이 비고, Kamchatka 상공에서는 Aleutians와 Alaska가 빈다. 이번 조사의 재현 스크립트로 확인했다(`/tmp/claude-0/-home-user-meridian/307a9112-9d66-5ee5-94ce-4faaf7e89f46/scratchpad/bench/dateline.mjs`; [engine.js:54, 109, 252-254](../src/world/engine.js)). specimen을 본뜬 Alaska–Aleutians scene과 Hunga Tonga 마지막 장면이 둘 다 이 선을 넘는다. 셋째, `frame()`이 `texFor(i)`와 `texFor(j)`를 동기로 호출하고, `goTo`는 1.6초 동안 중간 scene을 모두 지나며 스크롤한다. 그래서 메뉴에서 멀리 점프하면 비행 도중 캐시에 없는 scene을 여러 개 paint한다([engine.js:447](../src/world/engine.js); [chapter.js:138-141](../assets/js/chapter.js)). 넷째, 메모리다. scene 상태 하나가 데스크톱과 태블릿에서 26.0 MiB, 휴대폰에서 12.5 MiB이고 캐시는 5–6개를 들고 있다. 휴대폰 판정이 폭(`max-width: 760px`)만 보기 때문에 iPad는 3072 경로를 탄다. iOS Safari는 전체 canvas 메모리 예산(보고된 값 224–576 MB)을 넘으면 `getContext`가 `null`을 돌려준다([pqina](https://www.pqina.nl/blog/total-canvas-memory-use-exceeds-the-maximum-limit/); [WebKit bug 195325](https://bugs.webkit.org/show_bug.cgi?id=195325)). 그러면 `paintTexture`는 매 frame 예외를 던질 것이다. 다섯째, hold 동안 `p`가 정확한 정수여서 카메라가 멈춘 사이에 시간이 흐를 방법이 없다. 지진이 해마다 쌓이거나 화산재가 유럽으로 번지는 장면을 만들 수 없다는 뜻이다. `progressAt`이 hold 안에서 `u = (c − start_k)/(end_k − start_k)`도 돌려주게 해야 한다([chapter.js:115-141](../assets/js/chapter.js)). 이 밖에도 정리할 것이 있다. Safari는 canvas `filter`를 기본으로 꺼 두므로 focus halo가 흐려지지 않은 단색 tint로 그려진다([Can I Use](https://caniuse.com/mdn-api_canvasrenderingcontext2d_filter)). 엔진은 변화가 없어도 매 frame을 그리고, overlay를 해제하지 않으며, label을 escape하지 않고 `innerHTML`에 넣는다.

레이어 비용은 Node/Skia에서 엔진의 paint 코드를 그대로 돌려 쟀다(`/tmp/claude-0/-home-user-meridian/307a9112-9d66-5ee5-94ce-4faaf7e89f46/scratchpad/bench/bench.mjs`). 같은 History scene이 Node에서 41–84 ms, dev Mac 브라우저에서 55–120 ms였다. 보통 scene에서는 브라우저가 Node보다 1.3–1.5배 느리다고 보면 된다. 측정 결과 Geography는 per-scene canvas paint 예산 안에 들어간다. 다만 수가 많거나 움직이는 것을 canvas에 그리면 안 된다.

| 레이어(합성 데이터) | World 2048×1024 | Detail 3072×1536 |
|---|---|---|
| History scene(배포본) | 18–23 ms | 22–63 ms |
| Geography base(Natural Earth 육지만) | 13 ms | 11 ms |
| 지진 원 2,000개 | +23 ms | +16 ms |
| 지진 원 10,000개 | +57 ms | +66 ms |
| 지진 원 50,000개 | +326 ms | – |
| 하천 100k vertices | +153 ms | +164 ms |
| Choropleth 241개국(50m) / 177개국(110m) | 285 ms / 49 ms | – |
| 래스터 `drawImage` | 5 ms | 25 ms |
| focus halo blur 유무(kq6-g2) | – | 63 ms / 21 ms |

그래서 렌더링을 세 층으로 나눈다. 정적 vector 맥락(육지, 현대 국경, 강조할 나라, 단순화한 지역 하천)은 per-scene canvas에 그린다. 해저 지형, 기온 이상, 산림 손실, 야간 조명 같은 래스터는 단일 채널(R8)로 만들어 shader에서 ramp로 칠하고, 시간은 값에 넣어 `uYear`로 임계 처리한다. choropleth는 ID 래스터와 lookup table로 해결한다. 수가 많거나 시간에 따라 움직이는 것은 GPU geometry로 한 번만 만든다. 지진은 `uNow`로 숨기고 드러내는 `Points`라서 paint 비용이 0이다. 판 경계는 유형별 `LineSegments2`를 쓴다. three r186의 `LineSegmentsGeometry`는 `InstancedBufferGeometry`를 상속하므로 정수 하나(`instanceCount`)로 그려 나가기를 할 수 있다([LineSegmentsGeometry.js](https://github.com/mrdoob/three.js/blob/r186/examples/jsm/lines/LineSegmentsGeometry.js)). 판 이동은 instanced chevron으로, 화산은 glyph나 `InstancedMesh`로 그린다. 단면, 진도 척도, VEI 비교 같은 2D inset은 패널 안 SVG 컴포넌트(`mount(el, spec) → { set(u), destroy() }`)로 만들고 같은 ticker의 `u`로 움직인다. WebGL2 기기의 99.95%가 fragment texture unit을 16개 이상 제공하지만([web3dsurvey](https://web3dsurvey.com/webgl2/parameters/MAX_TEXTURE_IMAGE_UNITS), 검색 요약), earth shader는 sampler 약 12개 이하로 유지한다. three 0.186은 WebGL2 전용이므로([WebGLRenderer.js r186](https://github.com/mrdoob/three.js/blob/r186/src/renderers/WebGLRenderer.js)) WebGL2가 없는 기기는 텍스트 fallback으로 간다. 버전은 `0.186.1`에 고정해 둔다.

구조 개편은 History를 깨지 않는 방향이어야 한다. `src/world/core.js`(카메라, 상태, 캐시와 pool, frame, marker)를 두고, `history.js`와 `geography.js`는 `load`, `paint`, `build`, `global`, `update`, `dispose` hook을 가진 레이어로 만든다. Geography 전용 shader 기능은 `#define`으로 컴파일해서 History가 비용을 내지 않게 한다. scene schema v2는 기존 필드를 모두 유효하게 두고 선택 필드만 더한다. 챕터 수준 `axis: { kind: 'date'|'year'|'hours'|'days'|'ma'|'none', from, to, format }`, `camera.tilt`와 `heading`, `map.base: 'modern'`, `map.layers`, `map.legend`, `map.alt`, `inset`, DSE 코드를 담는 `example`, 앞에서 말한 `exam`, 그리고 `judgement`의 별칭인 `evaluate`다. `chapter.js`는 `<body data-subject="geography" data-chapter="geography/tectonics">`를 읽어 데이터 모듈을 build stamp(`?v=`)와 함께 동적으로 import한다. 이렇게 하면 `CLAUDE.md`의 module cache 함정도 피한다. `tools/build-geo.mjs`(`npm run geo`)는 `assets/js/data/geography/*.js`가 쓰는 지역, 시간 창, 레이어만 모아 다음을 만든다. `assets/data/geo/base.json`, `quakes.bin`, `raster/*`, `fallback/<scene>.webp`, `LICENSES.txt`다. 엔진의 paint 코드가 Node의 `@napi-rs/canvas`에서 수정 없이 돌아가는 것을 확인했다. 따라서 scene별 정적 이미지 하나로 no-WebGL 독자, 접근성, 연습실 그림 자료를 한꺼번에 해결할 수 있다. esbuild code splitting으로 three를 공유 chunk로 빼면 홈과 챕터를 모두 보는 방문자의 다운로드가 gzip 기준 319 KB에서 181 KB로 준다. 중국의 느린 회선에서는 paint 시간보다 첫 로딩 크기가 더 중요하다.

## 결론

History에서 Geography로 넘어가면 지구본의 역할이 바뀐다. KQ6에서 지구본은 배경이었고 본문이 내용을 실었다. Geography에서는 지도 자체가 시험 자료이고 정답의 근거다. "describe the distribution", "state the latitude and longitude", "describe the location"은 모두 지도를 읽으라는 명령이다. 그러므로 엔진을 연출 도구가 아니라 **시험 자료 생성기**로 봐야 한다. 모든 scene 상태는 격자, 축척, 범례, 대체 텍스트를 갖춘 정적 그림으로 다시 만들 수 있어야 한다. 이 요구 하나가 no-WebGL fallback, 접근성, 연습실 그림을 함께 해결한다. 날짜변경선 버그를 첫 번째로 고쳐야 하는 이유도 여기 있다. specimen이 실제로 고른 Alaska–Aleutians가 그 선 위에 있다.

두 번째로, 품질의 병목은 렌더링이 아니라 검증이다. 공식 문구는 검색 발췌로만 확인했고, 사망자 수는 출처마다 다르며, 그럴듯한 오개념 카드 상당수에 출처가 없다. 그래서 KQ6가 약속만 하고 만들지 않은 coverage lint를 Geography에서는 먼저 만들어야 한다. 이 lint는 필드, source key, syllabus 코드를 검사하고, `src` 없는 fact나 "출처 필요" 카드가 있으면 배포를 막는다. 챕터의 화려함은 연구가 보여 주듯 몰입을 사는 데 쓰이고, 점수는 그 몰입 사이에 끼워 넣은 인출 연습과 장소 고유 정보에서 나온다.

### 권장 빌드 계획

`CLAUDE.md`에 따라 `main`에 push하면 곧바로 공개 사이트가 다시 배포되므로 모든 작업은 branch에서 하고, 배포 전에는 반드시 묻는다.

| 단계 | 내용 | 산출물 | 완료 기준 |
|---|---|---|---|
| 0. 엔진 일반화 | 아래 "먼저 할 엔진 수정" 1–8 | `src/world/core.js`, `history.js`, `geography.js`; `chapter.js` manifest; 보라 token | KQ6가 이전과 똑같이 보임(desktop, 375 px, reduced motion); Tonga·Aleutians 시험 scene에서 detail이 채워짐; 1→30 점프 중 frame 안 paint 0회 |
| 1. 데이터 파이프라인 | 방화벽 밖에서 원본을 한 번 받아 `tools/.cache/geo/`에 둠; `npm run geo` | `base.json`, `quakes.bin`, 판 경계, 화산 목록, 해저·기복 crop, `fallback/*.webp`, `LICENSES.txt` | 챕터 데이터 ≤ 약 1 MB; 레이어마다 licence, 버전, 날짜 기재; Smithsonian·HydroSHEDS·UNEP-WCMC 원본은 commit하지 않음 |
| 2. 챕터 콘텐츠 | `geography/tectonics.html`, `assets/js/data/geography/tectonics.js`(30 scenes, status draft) | scene, sources, toolkit, DSE 카드 | coverage lint 통과; 모든 수치에 `src`; 범위가 있는 수치는 범위로 |
| 3. 연습실 | `geography/tectonics-paper1.html`, `assets/js/data/geography/tectonics-paper1.js` | 아래 25점 방 | 그림이 챕터 데이터에서 bake됨; 문항마다 `source`에 출처 수준 표기 |
| 4. 검수 | preview(desktop, 375 px, 가로 스크롤 없음), reduced motion, no-WebGL, Safari/iPad, 저가 Android, 학교 실기기; 교사 검토 | 검수 기록을 `CLAUDE.md` "Measured facts"에 | console 오류 0; 교사가 syllabus 원문과 대조; 배포 승인 |
| 5. 다음 챕터 | climate change(화산 레이어와 Antarctica 재사용, 기온 이상 래스터, CO₂ 시계열) → coasts(IBTrACS, Allen Coral Atlas, GMW) → population | – | 같은 schema v2와 build-geo로 |

**먼저 할 엔진 수정(순서대로)**

| # | 수정 | 근거 | 완료 기준 |
|---|---|---|---|
| 1 | `borders`·`cshapes`를 레이어로 옮겨 선택 사항으로; 로드 시 scene 검증 | [engine.js:27, 232, 248, 453](../src/world/engine.js) | `map.base: 'modern'` scene이 오류 없이 그려짐 |
| 2 | 날짜변경선: detail을 `geoEquirectangular().rotate([−lon0, 0])`로 그리고 shader에서 `dl = mod(lon − lon0 + 540., 360.) − 180.` | `bench/dateline.mjs` 재현 | Tonga, Kamchatka–Aleutians 양쪽이 채워짐 |
| 3 | `frame()` 안 paint 금지: 캐시에 없으면 가장 가까운 상태를 쓰고 idle에 대기열; `goTo`는 목표를 먼저 `prepare` | [engine.js:447](../src/world/engine.js); [chapter.js:138-141](../assets/js/chapter.js) | 메뉴 점프 중 frame이 긴 작업에 막히지 않음 |
| 4 | hold-local `u`: `progressAt → {p, u}`, `setProgress(p, u)` | [chapter.js:115-141](../assets/js/chapter.js) | 오프닝 scene에서 1900→2026 지진이 스크롤로 쌓임 |
| 5 | 메모리: canvas pool(터치 기기 3상태, desktop 4상태), 해제한 canvas는 1×1로, `maxTextureSize`·기기 기준 detail 크기, R8 래스터, `getContext` null 방어 | [pqina](https://www.pqina.nl/blog/total-canvas-memory-use-exceeds-the-maximum-limit/) | iPad에서 30 scene을 끝까지 스크롤해도 texture 누락 없음 |
| 6 | GPU 레이어: 지진 `Points`(`uNow`, 규모·깊이), 판 경계 `LineSegments2`(유형별 패턴), chevron | 위 비용표 | 지진 1만 개를 paint 0 ms로 |
| 7 | `chapter.js` manifest: `data-chapter` 동적 import, hero·axis·데이터 URL·loader 바이트를 데이터로; `chapter.css` 보라 literal을 `--acc-rgb` token으로 | [chapter.js:6, 155, 166-167, 183-190](../assets/js/chapter.js) | 같은 모듈로 KQ6와 tectonics가 모두 열림 |
| 8 | 정리: render on demand(dirty flag), ±3 scene 밖 overlay 해제, label escape, `ctx.filter` halo를 mask나 ¼ 해상도로 대체, `build-maps.mjs` 정규식 수정, coverage lint 작성 | [engine.js:140, 381, 435-469](../src/world/engine.js) | Safari에서도 halo가 같음; 아무것도 안 할 때 GPU가 쉼 |
| 9 | 접근성과 fallback: `map.alt`, DOM 범례(모양과 패턴 포함), inset 뒤 숫자 표, scene별 정적 WebP | [history/kq6.html:33](../history/kq6.html) | screen reader로 scene마다 지도 요지를 들을 수 있음 |
| 10 | 배포 최적화: esbuild splitting으로 three 공유 chunk; `pages.py`의 `CHAPTERS` dict와 `chapter_shell()` | [tools/pages.py](../tools/pages.py) | 홈과 챕터 합계 gzip 약 181 KB |

**첫 챕터: "Tectonic hazards" scene 구성(30 scenes + 요약)**

Part마다 첫머리에 핵심 용어 strip(3–5개)을 두고, 끝에는 누적 점검(3–5문항, command word)을 둔다. ribbon 단위는 Part에 따라 바뀐다. Part 1–5는 연도(1900–2026, 1960년 이전 불완전 표시), Part 6은 시간(6 Feb 2023 UTC), Part 7은 일(April 2010)이다. 구조 scene에는 "deep time" chip을 붙인다. "출처 필요"로 표시한 카드와 수치는 출처를 찾기 전에는 싣지 않는다.

| # | Part | 장소·시점 | 지구본과 inset | Syllabus·exam link | Common mistake 카드(근거) |
|---|---|---|---|---|---|
| 1 | 1 어디서 | 지구 전체, 1900–2026 | 예측 질문 → `u`로 M6+ 진앙이 쌓이고 화산 삼각형 등장 | 4.1 분포 | 화산·지진은 무작위(InVEST) |
| 2 | 1 | 지구 단면 | 2D 단면 inset: inner core, outer core, mantle, crust, lithosphere | 4.1 구조 | 맨틀은 액체 마그마(출처 필요) |
| 3 | 1 | 지구 | PB2002 판, 이동 chevron | 4.1 판 | – |
| 4 | 1 | Pacific | Ring of Fire와 위경도 격자; 모범 "describe the distribution" 답(패턴 + 지명 + 위경도·데이터 + 예외) | P1 Q1(a)(v) 4점 | describe에 이유를 씀; 'distribution' 이해 부족(March 2025, 2차) |
| 5 | 2 경계 | Mid-Atlantic Ridge → Þingvellir | 단면 A–B; 판이 벌어지고 새 지각 생성 | 4.1 divergent | – |
| 6 | 2 | Japan Trench 또는 Andes | 섭입 단면을 단계별로, 마지막에 "exam version" | 4.1 convergent | 이름은 알아도 과정을 설명 못 함(March 2020); 섭입 원인은 밀도(Mills 2017) |
| 7 | 2 | Himalaya / Nepal | 습곡산지, 지진, 화산 없음 | 4.1 collision | – |
| 8 | 2 | San Andreas → East Anatolian Fault | transform 운동; DSE 예고 | 4.1 conservative | conservative 경계에 화산(출처 필요) |
| 9 | 2 | Alaska–Aleutians(날짜변경선) | specimen식 지도: 판 레이어 끔, 판 방향 tick-box, 지진 X의 위경도 | P1 Q1(a)(i)–(ii) | 지도에 없는 판 경계 인용(2023 report) |
| 10 | 3 지진 | Kahramanmaraş 단면 | focus, epicentre, seismic waves | 4.2 | focus와 epicentre 혼동(출처 필요) |
| 11 | 3 | Türkiye ShakeMap | moment magnitude vs Mercalli intensity, Richter | P1 Q1(a)(iii)–(iv) | 규모는 로그 척도(출처 필요) |
| 12 | 4 화산 | Hawaii → Merapi | shield vs strato small multiples | 4.2 유형 | 점성 큰 용암이 더 빠르다(June 2024) |
| 13 | 4 | cinder cone(출처 있는 사례 선정 필요) | cinder cone | 4.2 유형 | – |
| 14 | 4 | Merapi 사면 | pyroclastic flow, lahar, ash, gases | 4.2 위험 | – |
| 15 | 4 | Eyjafjallajökull(4), Merapi(4), Hunga Tonga(5–6) | VEI 사다리 small multiples | 4.2 VEI | VEI = 사망자(출처 필요) |
| 16 | 4 | Whakaari, NZ | active/dormant/extinct; "describe the location"(방향 + 단위가 있는 거리 + 지명) | P1 Q1(b)(i) 3점 | location과 distribution 혼동; Whakaari 2019 수치는 출처 필요 |
| 17 | 5 위험·영향 | Merapi 농지, Iceland 지열 | 왜 위험한 곳에 사는가 | 4.3 | 예측해서 다 대피할 수 있다(2023 report) |
| 18 | 5 | Haiti, Christchurch, Tōhoku, Nepal | primary/secondary, social/economic/environmental, 개발 수준 small multiples; 기존 연습 세트와 연결 | 4.3 | 피해는 규모만으로 정해진다(수치 출처 재확인 필요) |
| 19 | 6 DSE 지진 | Anatolia–Africa–Arabia | 구조적 배경과 1900년 이후 이력(USGS geonarrative 순서) | 4.4.3 | – |
| 20 | 6 | 6 Feb 2023, 01:17 UTC → 약 9시간 뒤 | M7.8 Pazarcık + 95 km 떨어진 M7.5 Elbistan(ribbon 단위: 시간) | 4.4.3 원인 | "지진은 한 번이었다"(주진이 둘) |
| 21 | 6 | Antakya–Karaköse | 300 km 넘는 파열; Sentinel로 직접 만든 변위·coherence 그림 | 4.4.3 증거 | – |
| 22 | 6 | 지구 → Kahramanmaraş → Antakya | 피해(사망 >50,000~>59,000 범위, 약 $119B); Syria 포함; 사람 크기 기준 척도 | 4.4.3 영향, Table B "place-specific" | – |
| 23 | 6 | Türkiye–Syria | 대응(primary/secondary); Evaluate 블록; **DSE 카드: 장소 고유 정보 세 가지** | 4.4.1, 4.4.3 | 건축 기준 집행 수치는 출처 필요 |
| 24 | 7 DSE 분화 | Eyjafjallajökull, April 2010 | 빙하 융해수, VEI 4(ribbon 단위: 일) | 4.4.4 원인 | – |
| 25 | 7 | 유럽 상공 | `u`로 화산재가 퍼지고 항로 호가 사라짐: 결항 약 108,000편, 1,050만 명, US$1.7 bn 이상 | 4.4.4 영향 | 영향은 국지적이다 |
| 26 | 7 | Iceland와 유럽 | 대응과 관리; Evaluate 블록; DSE 카드 | 4.4.4 | – |
| 27 | 7 대안 | Merapi, Oct–Nov 2010 | 위험 구역; 279,702명 대피(11월 8일), 사망 범위; 10월 26일 Kinahrejo | 4.4.4 대안(LIC/MIC) | 대피하면 사망자가 없다 |
| 28 | 8 관리 | Japan, Merapi | monitoring, prediction, protection, planning, technology | 4.4.2 | prediction과 forecasting 혼동(출처 필요) |
| 29 | 8 | 비교 | 전략 평가: for/against/verdict, evaluation 1점 연습 | 4.4.2, 5점 evaluate | – |
| 30 | 끝 | Hunga Tonga, 15 Jan 2022(날짜변경선) | 태평양을 건너는 tsunami 고리; 약 57 km plume; coasts 챕터 안내 | 4.2/4.3 전 지구 규모 | – |
| 요약 | – | – | DSE 카드 두 장, Part 점검 모음, toolkit, 연습실 링크 | – | – |

**연습실: "Paper 1 · Section A · Tectonic hazards"(25점, 약 35분)**

자료(Insert)는 모두 `build-geo.mjs`가 챕터 데이터에서 bake한다. Fig. 1.1은 한 지역(Anatolia 또는 Andes)의 M5+ 지진 지도로 위경도 격자, 판 화살표, 지진 X를 담는다. Fig. 1.2는 Yogyakarta 기준 Merapi 위치도로 축척 막대, 방위 표시, 지명을 담는다. Photo 1.3은 라이선스를 확인한 공공 영역 위험 사진이다. 문항을 펼치면 "이 기술을 다룬 장면" 링크로 해당 scene(#4, #9, #11, #16, #23, #26, #29)에 돌아갈 수 있게 한다. 기존 `practice-geography.js`의 지진 세트(Section B식 표 자료)는 그대로 두고, 지도·위치·사진 문항이 하나도 없다는 공백을 이 방이 메운다.

| 문항 | 점수 | 자료 | 점수를 얻는 조건 | 형식의 출처 |
|---|---|---|---|---|
| (a)(i) | 1 | Fig. 1.1 | 판 이동 방향 tick-box | specimen |
| (a)(ii) | 1 | Fig. 1.1 | 지진 X의 위도와 경도(단위, N/S/E/W) | specimen |
| (a)(iii) | 2 | Fig. 1.1 | 규모 읽기와 의미 | specimen |
| (a)(iv) | 2 | – | 다른 척도 두 개 | specimen |
| (a)(v) | 4 | Fig. 1.1 | 패턴 + 지명 + 위경도나 데이터 + 예외 | specimen |
| (b)(i) | 3 | Fig. 1.2 | 방향 + 단위가 있는 거리 + 지명 | specimen 형식 |
| (b)(ii) | 5 | Photo 1.3 + 배운 내용 | monitoring과 prediction 평가; evaluation 1점(`e5`) | 자체 설계(Section B 형식) |
| (c) | 7 | – | "For a named volcanic eruption you have studied, explain its causes and impacts"; Table B(`tb`); Level 2와 Level 3 모범답(Eyjafjallajökull 2010, 수치마다 source key) | 자체 설계 |

1+1+2+2+4+3+5+7 = 25점이다. `source` 블록에는 (b)(i) 이후 문항이 자체 설계라는 점과, Section A의 7점 문항이 Table A인지 Table B인지 확인하지 못했다는 점을 적는다. 코드는 `paper2.js`의 2단 배치와 chip을 쓰고, 채점 scheme은 `practice.js`의 `p`, `data`, `e5`, `tb`를 재사용한다. `resource.type`에는 `map`, `photo`, `graph`, `multi`를 더한다. 입력란이나 저장은 없고 문항마다 펼쳐 보기만 한다. 다음 단계에서 붙일 것은 둘이다. tropical storm track 지도를 쓰는 Section B식 coasts 세트(1·2·3·4·3·5·7)와 Paper 4 연결용 "조사 설계" 문항 하나다.

### 공식 페이지에 닿지 못해 확인하지 못한 것

연구 환경에서 WebFetch는 cambridgeinternational.org, wikipedia.org, usgs.gov, volcano.si.edu, gebco.net, naturalearthdata.com, creativecommons.org 등의 DNS를 풀지 못했다. proxy를 거친 curl은 cambridgeinternational.org, papacambridge, savemyexams, cambridge.org 등에서 403을 받았다. 아래 항목은 검색 발췌, 2차 사본, 저장소 전사에 기대고 있다.

| 영역 | 확인하지 못한 것 | 영향과 대응 |
|---|---|---|
| Syllabus | DSE 1.3.9, 5.3.3, 6.2.3, 6.3.5, 8.3.4, 9.2.6, 9.3.5, 10.3.6, 10.6.4의 공식 문구; 2.3.8과 4.1–4.3의 전체 bullet | tectonics는 4.4.3·4.4.4를 2차 사본으로 확인함. 나머지 챕터 전에 원문 대조 |
| Syllabus | "Cambridge recommends examples from 2000 to the present day"(저장소 주장, 검색으로 못 찾음) | ribbon 2010–2023은 어느 쪽이든 안전. 문구를 인용하지 말 것 |
| Syllabus | Paper 비중(P1 36%, P2 36%, C3/P4 28%)과 AO 비중(32/48/20) | 저장소 값을 다시 검증해야 함 |
| Specimen | P1 Q1의 (b)(i) 이후 문항과 점수; Q1 마지막 7점이 Table A인지 Table B인지 | 연습실 `source`에 자체 설계라고 명시 |
| Specimen | Table B 전체 문구(Level 1–2), 5점 evaluation 규칙의 공식 문구, P1 Insert 내용 | `practice-geography.js`의 의역을 원문과 대조 |
| Specimen | Whakaari 위치 채점 요소(0976 MS 발췌의 "about 250 km offshore"는 틀려 보임) | 원문을 읽기 전에는 scene 16 모범답에 쓰지 말 것 |
| 시험관 보고서 | 2023 오개념 인용이 June인지 November인지; 2024–2025 보고서의 문항별 내용 | 카드에 보고서 연도만 표기 |
| 사례 수치 | Türkiye(AFAD)와 Syria 공식 사망자; Whakaari 2019, Tōhoku, Haiti, Christchurch, Nepal 수치; 건축 기준 집행; cinder cone 사례 | scene 13·16·18·23·28은 출처를 찾기 전까지 "출처 필요" |
| 데이터 라이선스 | Bird PB2002 원본 약관; GISTEMP 라이선스 문장; GMW v4/v4.1 라이선스; WPP 2024 데이터 파일 자체의 CC BY 3.0 IGO | tectonics에는 PB2002만 관련. 변환본(ODC-By)으로 진행하고 Bird를 표기 |
| 데이터 라이선스 | Smithsonian Terms of Use 현재 원문과 GVP spreadsheet 재배포에 관한 문장; NOAA NCEI 화산·지진 DB(조사 안 함) | 화산 목록은 최소 파생 + 별도 파일. GVP나 NCEI에 확인 권장 |
| 데이터 라이선스 | CC 호환 표 원문(BY-NC → BY-NC-SA 칸); HydroSHEDS v1.4 Appendix A 전문; World Bank "Restricted Data" 목록 | 레이어를 따로 두는 설계라면 결론이 바뀌지 않음 |
| 데이터 실무 | 실제 다운로드 크기(ComCat 건수와 API 행 제한, IBTrACS, GVP); 중국에서 naturalearthdata, gebco, earthquake.usgs.gov, volcano.si.edu, zenodo 접근성 | 용량은 추정치. 방화벽 밖에서 한 번에 받기 |
| 디자인 | NYT 2021 Atlantic 기사의 장면 구성; Reuters·BBC·FT·Guardian의 지진·홍수 그래픽; The Pudding 원문(검색 요약만) | 이 작품들을 URL과 함께 인용하지 말 것 |
| 학습과학 | Mayer 효과크기 원문(검색 snippet끼리 값이 다름); Harrower 2003/2007, Mills 2017 원문; Crameri colour map 이름과 라이선스 | 수치를 정확히 인용하기 전에 원문 확인 |
| 엔진 | 실제 브라우저와 GPU 측정(Node/Skia만); iPad canvas 한도, 저가 Android, 학교 노트북과 중국 브라우저의 WebGL2; GitHub Pages gzip; context restore | 4단계 실기기 검수에서 texture 크기와 점 수 상한 확정 |
