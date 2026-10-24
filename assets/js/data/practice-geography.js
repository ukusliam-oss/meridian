// Written practice for Geography 0460 Papers 1 and 2 (2027 format).
// The syllabus gives marks per paper and per question only. Part marks, the 5-mark evaluation rule and
// Table B follow the 2027 specimen Papers 1 and 2 (Questions 2–4). Questions and answers are our own wording.
export default {
  id: 'geography',
  minutesPerMark: 1.3,
  head: '<em>Practice:</em>Paper 1 and Paper 2',
  lede: 'Six questions in the 2027 format. Each one starts with short items based on a resource and ends with a 7-mark answer that uses a detailed specific example. Each 7-mark part has two example answers to compare.',
  how: 'Choose a set. Write your answer on paper, or plan it in your head, then open the mark scheme for each part. The times are a guide based on the marks. Nothing here is saved.',
  source: `<p><b>Marks per part.</b> The syllabus gives the marks for each paper (75) and each question (25), but not for individual parts. The marks used here follow Questions 2 to 4 of the 2027 specimen Papers 1 and 2, where the parts are worth 1, 2, 3, 4, 3, 5 and 7 marks. Each set leaves out one or two parts to keep it short.</p>
    <p><b>Marking.</b> The rule for 5-mark evaluation items and the levels for the 7-mark part (Table B) are paraphrased from the 2027 specimen mark schemes.</p>
    <p><b>Resources</b> labelled "practice data" were invented for these questions. Real figures, in resources and in example answers, are rounded from widely reported sources and have not been checked against official documents.</p>
    <p><b>Questions, indicative content and example answers</b> are our own. They were not written by Cambridge.</p>`,
  schemes: {
    p: { how: '<b>Point-marked.</b> One mark for each correct point.' },
    data: { how: '<b>Point-marked.</b> One mark for each correct point. Quote figures from the resource, with units. In the specimen mark schemes, one mark is often kept for data.' },
    e5: { how: '<b>Point-marked.</b> Up to 4 simple points (1 mark each) or 2 developed points (2 marks each), or a mix. One mark is kept for an evaluation or judgement.' },
    tb: {
      how: '<b>Marked in levels</b> (Table B in the specimen mark schemes). Name your example and include specific details about the place.',
      levels: [
        { l: 3, d: 'Uses a named example. A detailed answer with developed statements that are relevant to the question, including specific details about the place or process.', m: '6–7' },
        { l: 2, d: 'Developed statements that show good knowledge and understanding and are relevant to the question.', m: '3–5' },
        { l: 1, d: 'Simple statements with limited detail.', m: '1–2' },
        { l: 0, d: 'No creditable response.', m: '0' },
      ],
    },
  },
  sets: [
    // ── Paper 1: rivers ──────────────────────────────────────────────────
    {
      tag: 'P1', short: 'Rivers', paper: 'Paper 1 · Topic 1: Changing river environments', title: 'River channels and flooding',
      note: 'Part (b)(i), worth 3 marks, is left out. This set is worth 22 of the 25 marks in a full question.',
      resource: {
        type: 'table', label: 'Table 1.1', caption: 'Fieldwork measurements at five sites along a river.',
        cols: ['Site', 'Distance from source (km)', 'Width (m)', 'Mean depth (m)', 'Mean velocity (m/s)'],
        rows: [['A', '2', '1.8', '0.15', '0.28'], ['B', '6', '3.4', '0.22', '0.35'], ['C', '11', '5.1', '0.31', '0.41'], ['D', '17', '6.0', '0.29', '0.39'], ['E', '24', '8.6', '0.44', '0.52']],
        note: 'Practice data: these figures were invented for this question.',
      },
      parts: [
        { k: '(a)(i)', m: 1, scheme: 'p', q: 'State the width of the river at Site C.', ms: { head: 'Answer', points: ['5.1 m.'] } },
        {
          k: '(a)(ii)', m: 2, scheme: 'p', q: 'Use Table 1.1 to identify two ways in which the river channel changes between Site A and Site E.',
          ms: { lead: '1 mark for each, up to 2:', points: ['It becomes wider.', 'It becomes deeper.', 'The water flows faster (velocity increases).'] },
        },
        {
          k: '(a)(iii)', m: 3, scheme: 'data', q: 'Describe how mean velocity changes downstream. Refer to data in your answer.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'Velocity increases overall downstream.',
              'It rises from 0.28 m/s at Site A to 0.52 m/s at Site E.',
              'The exception is Site D, where velocity falls slightly, from 0.41 m/s to 0.39 m/s.',
              'The largest increase is between Sites D and E (0.13 m/s).',
            ],
            tip: 'Describe means say what the data shows. Do not explain why here; that is the next part.',
          },
        },
        {
          k: '(a)(iv)', m: 4, scheme: 'p', q: 'Explain why the velocity of a river usually increases downstream.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'Tributaries join the river, so <b>discharge</b> increases.',
              'The channel becomes wider and deeper.',
              'A smaller proportion of the water is in contact with the bed and banks…',
              '…so there is less <b>friction</b> to slow the water down.',
              'The bed becomes smoother, because the load is smaller and more rounded downstream.',
              'The channel is more <b>efficient</b>, and this outweighs the fall in gradient.',
            ],
          },
        },
        {
          k: '(b)(ii)', m: 5, scheme: 'e5', q: 'Evaluate the different ways in which the impacts of river flooding can be managed.',
          ms: {
            groups: [
              { h: 'Strategies, such as', points: [
                '<b>Dams and reservoirs</b> store water and control discharge, but they are expensive and can force people to move.',
                '<b>Embankments (levées)</b> raise the banks, but they can fail and may move the flood risk downstream.',
                '<b>Channel straightening</b> carries water away quickly, but it increases the flood risk further downstream.',
                '<b>Afforestation</b> increases interception and slows the flow of water into the river. It is cheap and sustainable but takes years to work.',
                '<b>Floodplain zoning</b> stops building in high-risk areas. It is cheap, but it limits development where land is scarce.',
                '<b>Warning systems</b> give people time to move to safety. They save lives but do not protect buildings or crops.',
              ] },
              { h: 'Evaluation (the reserved mark), such as', tone: 'judge', points: [
                'Floods cannot be prevented, only managed.',
                'Hard engineering protects specific places but is expensive, so HICs can afford more protection than LICs.',
                'A combination of strategies is usually the most effective.',
              ] },
            ],
          },
        },
        {
          k: '(c)', m: 7, scheme: 'tb', q: 'For a named river flood you have studied, explain the causes and impacts of the flood.',
          ms: {
            groups: [
              { h: 'Causes, such as', points: ['Heavy or long periods of rainfall, for example during a monsoon or a tropical storm.', 'Melting snow or glaciers.', 'Saturated or impermeable ground, so water runs off quickly.', 'Deforestation, which reduces interception.', 'Urban areas, where concrete and drains carry water to the river quickly.', 'Building on the floodplain.'] },
              { h: 'Impacts, such as', points: ['Deaths and injuries.', 'Homes, roads and bridges destroyed.', 'Crops and livestock lost, which leads to food shortages and higher prices.', 'Disease spread by contaminated water.', 'Economic losses, and people unable to work.', 'Some positive impacts, such as fertile silt deposited on farmland.'] },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['The floods in Pakistan in 2022 were caused by heavy monsoon rain. Glaciers also melted. Many people died and homes were destroyed. Crops were ruined, so there was less food. Diseases spread in the floodwater.'],
              why: 'It names a real flood and makes relevant points, and a few of them are developed. There are no figures or named places, so it cannot reach Level 3.',
            },
            {
              level: 'Level 3', marks: '7 marks', strong: true,
              text: [
                'In 2022 Pakistan had its worst floods in recent history, mainly along the Indus River in the provinces of Sindh and Balochistan. The main cause was monsoon rain that was far heavier than usual: in August, parts of Sindh received several times their normal rainfall. Earlier in the year, a heatwave had increased the melting of glaciers in the north, which added more water to the Indus and its tributaries. Much of Sindh is flat, so the water could not drain away and stayed for weeks.',
                'The impacts were severe. More than 1,700 people died and about 33 million people were affected. Around two million homes were damaged or destroyed, and roads and bridges were washed away, which cut villages off from help. Large areas of crops, such as cotton and rice, were lost, and over a million farm animals died, so food prices rose. Standing water led to outbreaks of malaria and diarrhoea. The World Bank estimated the total damage and losses at about US$30 billion.',
              ],
              why: 'It names the flood, the river and the regions, and it explains both the natural causes and why the water stayed. The impacts are specific and include figures. This detailed, developed answer about a named example reaches Level 3.',
            },
          ],
          answersNote: 'The figures in the example answers are rounded from widely reported estimates and have not been checked against an official document. Use the figures your teacher gives you.',
        },
      ],
    },
    // ── Paper 1: tectonics ───────────────────────────────────────────────
    {
      tag: 'P1', short: 'Earthquakes', paper: 'Paper 1 · Topic 4: Tectonic hazards', title: 'Earthquakes and their impacts',
      note: 'Part (b)(i), worth 3 marks, is left out. This set is worth 22 of the 25 marks in a full question.',
      resource: {
        type: 'table', label: 'Table 4.1', caption: 'Four earthquakes.',
        cols: ['Earthquake', 'Year', 'Magnitude', 'Deaths (approximate)', 'Income group at the time'],
        rows: [
          ['Haiti', '2010', '7.0', '100,000 to over 300,000 (estimates vary)', 'LIC'],
          ['Christchurch, New Zealand', '2011', '6.2', '185', 'HIC'],
          ['Tōhoku, Japan', '2011', '9.0–9.1', 'about 18,000 dead or missing, mostly from the tsunami', 'HIC'],
          ['Gorkha, Nepal', '2015', '7.8', 'about 9,000', 'LIC'],
        ],
        note: 'Figures are rounded from widely reported estimates and have not been checked against an official document.',
      },
      parts: [
        { k: '(a)(i)', m: 1, scheme: 'p', q: 'Which earthquake in Table 4.1 had the highest magnitude?', ms: { head: 'Answer', points: ['Tōhoku, Japan (2011).'] } },
        {
          k: '(a)(ii)', m: 2, scheme: 'p', q: 'Define the terms focus and epicentre.',
          ms: { head: 'Answer', points: ['<b>Focus</b>: the point underground where an earthquake starts (1).', '<b>Epicentre</b>: the point on the Earth\'s surface directly above the focus (1).'] },
        },
        {
          k: '(a)(iii)', m: 3, scheme: 'data', q: 'Use Table 4.1 to show that the number of deaths caused by an earthquake does not depend on magnitude alone. Refer to data in your answer.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'Tōhoku had the highest magnitude (9.0–9.1), but far fewer deaths than Haiti (7.0).',
              'Christchurch (6.2) caused 185 deaths, while Haiti (7.0) caused over 100,000.',
              'Nepal (7.8) had a higher magnitude than Haiti but fewer deaths (about 9,000).',
              'Earthquakes in LICs caused more deaths than those in HICs, even when the magnitude was lower.',
            ],
          },
        },
        {
          k: '(a)(iv)', m: 4, scheme: 'p', q: 'Explain why earthquakes of a similar magnitude can cause very different numbers of deaths.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              '<b>Building quality</b>: in HICs, building codes require earthquake-resistant designs, so fewer buildings collapse.',
              '<b>Preparation</b>: drills and education teach people what to do.',
              '<b>Emergency services</b>: richer countries can rescue and treat injured people more quickly.',
              '<b>Population density</b>: more people are at risk in crowded cities.',
              '<b>Depth of the focus</b>: shallow earthquakes cause stronger shaking at the surface.',
              '<b>Time of day</b>: whether people are in homes, offices or schools affects how many are trapped.',
              '<b>Secondary hazards</b>: tsunamis, landslides and fires can cause many deaths.',
            ],
          },
        },
        {
          k: '(b)(ii)', m: 5, scheme: 'e5', q: 'Evaluate the ways in which the impacts of earthquakes can be reduced.',
          ms: {
            groups: [
              { h: 'Strategies, such as', points: [
                '<b>Earthquake-resistant buildings</b>, for example with cross-bracing, deep foundations or rubber shock absorbers. Very effective, but expensive.',
                '<b>Retrofitting</b> older buildings. Cheaper than rebuilding, but slow.',
                '<b>Land-use planning</b>: keeping schools and hospitals away from the most dangerous areas.',
                '<b>Education and drills</b>, such as "drop, cover and hold on". Cheap and effective.',
                '<b>Early warning systems</b> can give a few seconds of warning to stop trains and shut off gas. They cannot predict when an earthquake will happen.',
                '<b>Emergency planning</b>: stores of supplies and trained rescue teams.',
              ] },
              { h: 'Evaluation (the reserved mark), such as', tone: 'judge', points: [
                'Earthquakes cannot be predicted or prevented, so the aim is to reduce their impacts.',
                'Building design saves the most lives but costs the most, so LICs often rely on cheaper strategies such as education.',
              ] },
            ],
          },
        },
        {
          k: '(c)', m: 7, scheme: 'tb', q: 'For a named earthquake you have studied, describe the responses to the earthquake.',
          ms: {
            groups: [
              { h: 'Short-term responses, such as', points: ['Search and rescue, including teams from other countries.', 'Emergency shelter, food, water and medical care.', 'Field hospitals, and helicopters to reach remote areas.', 'Restoring power, water and roads.'] },
              { h: 'Long-term responses, such as', points: ['Rebuilding homes and infrastructure to stronger standards.', 'Grants or loans for rebuilding.', 'New building codes and better planning.', 'International aid.', 'Education and preparation for future earthquakes.'] },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['After the earthquake in Nepal in 2015, rescue teams came from other countries to search for survivors. People were given tents, food and water. Later, houses and other buildings were rebuilt.'],
              why: 'It names a real earthquake and describes relevant responses, but there are no specific details such as dates, figures, places or organisations. It stays in Level 2.',
            },
            {
              level: 'Level 3', marks: '7 marks', strong: true,
              text: [
                'The Gorkha earthquake struck Nepal on 25 April 2015. It had a magnitude of 7.8 and killed about 9,000 people. In the short term, the Nepalese army and police led search and rescue, and teams arrived from other countries, including India and China. Many villages in mountain districts such as Sindhupalchok and Gorkha could only be reached by helicopter, because landslides had blocked the roads. Aid agencies such as the Red Cross gave out tents, food and clean water, and field hospitals treated the injured.',
                'In the long term, international donors pledged over US$4 billion for reconstruction at a conference in June 2015. The government set up the National Reconstruction Authority, and families whose homes had been destroyed received grants to rebuild using earthquake-resistant designs. However, rebuilding was slow. The authority was not set up until December 2015, and a blockade of the border with India later in 2015 caused shortages of fuel and building materials.',
              ],
              why: 'It names the earthquake, the date, places and organisations, and it separates short-term from long-term responses. Specific details about place and process take it to Level 3.',
            },
          ],
          answersNote: 'The figures and dates in the example answers are from widely reported sources and have not been checked against an official document. Use the details your teacher gives you.',
        },
      ],
    },
    // ── Paper 1: climate change ──────────────────────────────────────────
    {
      tag: 'P1', short: 'Climate change', paper: 'Paper 1 · Topic 5: Climate change', title: 'Evidence and impacts of climate change',
      note: 'Part (b)(i), worth 3 marks, is left out. This set is worth 22 of the 25 marks in a full question.',
      resource: {
        type: 'line', label: 'Figure 5.1', caption: 'Carbon dioxide in the atmosphere, measured at Mauna Loa, Hawaii (yearly averages).',
        x: [1960, 1980, 2000, 2010, 2020], y: [317, 339, 370, 390, 414], unit: 'ppm', range: [300, 420], tick: 20,
        alt: 'Line graph of carbon dioxide in parts per million: 317 in 1960, 339 in 1980, 370 in 2000, 390 in 2010 and 414 in 2020.',
        note: 'Yearly averages rounded from the NOAA Mauna Loa record. Not checked against the original data for this page.',
      },
      parts: [
        { k: '(a)(i)', m: 1, scheme: 'p', q: 'State the concentration of carbon dioxide in 2000.', ms: { head: 'Answer', points: ['370 ppm (parts per million).'] } },
        { k: '(a)(ii)', m: 2, scheme: 'p', q: 'Name two greenhouse gases.', ms: { lead: '1 mark for each, up to 2:', points: ['Carbon dioxide.', 'Methane.', 'Nitrous oxide.', 'Water vapour.', 'CFCs.'] } },
        {
          k: '(a)(iii)', m: 3, scheme: 'data', q: 'Describe the trend shown in Figure 5.1. Refer to data in your answer.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'The concentration rises throughout the period and never falls.',
              'It rises from 317 ppm in 1960 to 414 ppm in 2020.',
              'The rate of increase gets faster: 22 ppm in the 20 years from 1960 to 1980, but 24 ppm in the 10 years from 2010 to 2020.',
            ],
            tip: 'The readings are not evenly spaced in time, so compare the rate of change (ppm per year), not only the size of each rise.',
          },
        },
        {
          k: '(a)(iv)', m: 4, scheme: 'p', q: 'Explain how human activities have increased the greenhouse effect.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'Burning <b>fossil fuels</b> in power stations, vehicles and factories releases carbon dioxide.',
              '<b>Deforestation</b> means fewer trees absorb carbon dioxide, and burning them releases it.',
              '<b>Farming</b>: cattle and rice paddies release methane, and fertilisers release nitrous oxide.',
              '<b>Landfill</b> sites release methane.',
              'More greenhouse gases trap more heat that would otherwise escape to space…',
              '…so global temperatures rise. This is the <b>enhanced greenhouse effect</b>.',
            ],
          },
        },
        {
          k: '(b)(ii)', m: 5, scheme: 'e5', q: 'Evaluate mitigation and adaptation as responses to climate change.',
          ms: {
            groups: [
              { h: 'Points, such as', points: [
                '<b>Mitigation</b> reduces the causes, for example renewable energy, energy efficiency, planting trees and international agreements such as the Paris Agreement (2015).',
                '<b>Adaptation</b> reduces the effects, for example sea walls, drought-resistant crops and flood warning systems.',
                'Mitigation deals with the cause, but it needs many countries to cooperate and takes decades to have an effect.',
                'Adaptation protects people now, but it can be expensive, and poorer countries may not be able to afford it.',
              ] },
              { h: 'Evaluation (the reserved mark), such as', tone: 'judge', points: ['Both are needed: some climate change is already happening, so adaptation is essential, but only mitigation can limit it in the long term.'] },
            ],
          },
        },
        {
          k: '(c)', m: 7, scheme: 'tb', q: 'For a named country or region you have studied, describe the impacts of climate change.',
          ms: {
            lead: 'Ideas such as:',
            points: ['Rising sea levels and coastal flooding.', 'Salt water getting into farmland and drinking water.', 'More intense storms, floods or droughts.', 'Changes to crop yields and food supply.', 'Water shortages.', 'The spread of diseases.', 'People forced to migrate.', 'Damage to ecosystems, such as coral bleaching.', 'Impacts that are happening now and impacts predicted for the future.'],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['Bangladesh is affected by climate change because it is low-lying. Sea levels are rising, so there is more flooding. Cyclones are getting stronger. Farmers lose their crops, and some people move to the cities.'],
              why: 'It names a country and makes relevant points, some with a short explanation. It lacks specific details, such as places, events or figures, so it stays in Level 2.',
            },
            {
              level: 'Level 3', marks: '7 marks', strong: true,
              text: [
                'Bangladesh is one of the countries most affected by climate change, because much of it is a low-lying delta formed by the Ganges, Brahmaputra and Meghna rivers. As sea levels rise, salt water moves further inland. In coastal districts such as Khulna and Satkhira, salt has entered rice fields and wells, so crop yields have fallen and many people have to fetch drinking water from further away.',
                'Climate change is also expected to make tropical cyclones more intense. Cyclones such as Sidr (2007) and Amphan (2020) destroyed homes, crops and embankments along the coast. Heavier monsoon rain increases river flooding, and river banks are eroded, so families lose their land. Many of these people migrate to Dhaka, where they often live in crowded informal settlements. In the future, further rises in sea level could flood large parts of the coast and force millions of people to move.',
              ],
              why: 'It names the country and specific districts and events, and it links each impact to its cause. It also includes a predicted impact. These specific details take it to Level 3.',
            },
          ],
          answersNote: 'The places and events in the example answers are from widely reported sources and have not been checked against an official document.',
        },
      ],
    },
    // ── Paper 2: population ──────────────────────────────────────────────
    {
      tag: 'P2', short: 'Population', paper: 'Paper 2 · Topic 6: Changing populations', title: 'Population structure and change',
      note: 'Parts (b)(i) and (b)(ii), worth 8 marks, are left out. This set is worth 17 of the 25 marks in a full question.',
      resource: {
        type: 'table', label: 'Table 6.1', caption: 'Population data for three countries.',
        cols: ['Country', 'Birth rate (per 1,000)', 'Death rate (per 1,000)', 'Life expectancy (years)', 'Aged under 15 (%)'],
        rows: [['A', '38', '9', '61', '44'], ['B', '18', '6', '75', '24'], ['C', '7', '12', '84', '12']],
        note: 'Practice data: the countries and figures were invented for this question.',
      },
      parts: [
        { k: '(a)(i)', m: 1, scheme: 'p', q: 'Define the term natural increase.', ms: { head: 'Answer', points: ['The birth rate minus the death rate, when there are more births than deaths.'] } },
        {
          k: '(a)(ii)', m: 2, scheme: 'p', q: 'Which country in Table 6.1 has a natural decrease? Give evidence from the table.',
          ms: { head: 'Answer', points: ['Country C (1).', 'Its death rate (12 per 1,000) is higher than its birth rate (7 per 1,000) (1).'] },
        },
        {
          k: '(a)(iii)', m: 3, scheme: 'data', q: 'Compare the populations of Country A and Country C. Refer to data in your answer.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'Country A has a much higher birth rate: 38 per 1,000, compared with 7 in Country C.',
              'Country A has a lower death rate: 9 per 1,000, compared with 12.',
              'Life expectancy is 23 years longer in Country C (84 years, compared with 61).',
              'Country A has a much more youthful population: 44% are under 15, compared with 12% in Country C.',
              'Country A\'s population is growing quickly, while Country C\'s is falling.',
            ],
            tip: 'A comparison needs both countries in the same sentence, using words such as "higher than" or "whereas".',
          },
        },
        {
          k: '(a)(iv)', m: 4, scheme: 'p', q: 'Explain why birth rates usually fall as countries develop.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'Better <b>healthcare</b> lowers infant mortality, so parents do not need to have as many children.',
              '<b>Contraception</b> and family planning become more widely available.',
              'More women stay in <b>education</b> and have careers, so they marry and have children later.',
              '<b>Urbanisation</b>: children are expensive to raise in cities and are not needed to work on farms.',
              'Children stay in education for longer, so they cost money rather than earn it.',
              'Pensions mean that parents rely less on their children in old age.',
            ],
          },
        },
        {
          k: '(c)', m: 7, scheme: 'tb', q: 'For a named country you have studied, explain the impacts of a policy designed to change its birth rate.',
          ms: {
            lead: 'Ideas such as:',
            points: ['The name of the policy, when it was introduced and how it worked.', 'Its effect on the birth rate and on population growth.', 'Impacts on the population structure, such as ageing or an imbalance between males and females.', 'Social impacts on families.', 'Economic impacts, such as a shortage of workers or the cost of pensions.', 'How the policy has changed over time.'],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['China\'s one-child policy reduced the birth rate. Families who had more than one child were fined. Because many families wanted a son, there are now more men than women. The population is also getting older.'],
              why: 'It names a policy and gives relevant impacts, some with a reason. It lacks specific details, such as dates and figures, so it stays in Level 2.',
            },
            {
              level: 'Level 3', marks: '7 marks', strong: true,
              text: [
                'China introduced its one-child policy in 1980 to slow population growth. Couples who had more than one child could be fined or lose benefits, while those with one child received rewards such as better access to housing. There were exceptions, for example for many rural families whose first child was a girl, and for ethnic minorities. The birth rate fell, although it had already been falling during the 1970s, so the policy was not the only cause.',
                'The policy had serious side effects. Many parents preferred sons, so the sex ratio became unbalanced, with about 120 boys born for every 100 girls at its peak in the 2000s. The population is now ageing quickly, and many only children must support two parents and four grandparents. There are fewer young workers to pay for pensions and healthcare. China replaced the policy with a two-child policy in 2016 and a three-child policy in 2021, but its population began to fall in 2022.',
              ],
              why: 'It names the policy, explains how it worked and gives specific dates and figures. It explains intended and unintended impacts, with a reason for each. This reaches Level 3.',
            },
          ],
          answersNote: 'The dates and figures in the example answers are from widely reported sources and have not been checked against an official document.',
        },
      ],
    },
    // ── Paper 2: urban ───────────────────────────────────────────────────
    {
      tag: 'P2', short: 'Cities', paper: 'Paper 2 · Topic 7: Changing towns and cities', title: 'Rapid urban growth',
      note: 'Part (b)(i), worth 3 marks, is left out. This set is worth 22 of the 25 marks in a full question.',
      resource: {
        type: 'table', label: 'Table 7.1', caption: 'Population of a city in an LIC.',
        cols: ['Year', 'Population (millions)', 'Living in informal settlements (%)'],
        rows: [['1980', '1.2', '30'], ['2000', '3.5', '45'], ['2020', '8.1', '52']],
        note: 'Practice data: the city and figures were invented for this question.',
      },
      parts: [
        { k: '(a)(i)', m: 1, scheme: 'p', q: 'Define the term urbanisation.', ms: { head: 'Answer', points: ['An increase in the proportion of a country\'s population living in urban areas.'] } },
        {
          k: '(a)(ii)', m: 2, scheme: 'p', q: 'Give two pull factors that attract people from rural areas to cities in LICs.',
          ms: { lead: '1 mark for each, up to 2:', points: ['More jobs, often with higher wages.', 'Better access to schools and healthcare.', 'Services such as electricity and clean water.', 'The hope of a better quality of life.', 'Family or friends who already live there.'] },
        },
        {
          k: '(a)(iii)', m: 3, scheme: 'data', q: 'Describe how the city\'s population and its informal settlements changed between 1980 and 2020. Refer to data in your answer.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'The population grew rapidly, from 1.2 million in 1980 to 8.1 million in 2020.',
              'It grew faster after 2000: by 4.6 million between 2000 and 2020, compared with 2.3 million between 1980 and 2000.',
              'The percentage living in informal settlements rose from 30% to 52%.',
              'By 2020, more than half of the population lived in informal settlements.',
            ],
          },
        },
        {
          k: '(a)(iv)', m: 4, scheme: 'p', q: 'Explain the challenges faced by people living in informal settlements.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'No <b>clean water</b> or sanitation, so diseases such as cholera spread.',
              '<b>Overcrowding</b>: homes are small and built close together, so fires spread easily.',
              'Homes are often built on <b>unsafe land</b>, such as steep slopes or floodplains, so they are at risk from landslides and floods.',
              'Residents may have no <b>legal right</b> to the land, so they can be evicted.',
              'Many people work in the <b>informal sector</b>, with low and unreliable incomes.',
              'There is poor access to schools, healthcare and transport.',
            ],
          },
        },
        {
          k: '(b)(ii)', m: 5, scheme: 'e5', q: 'Evaluate the strategies that can be used to improve informal settlements.',
          ms: {
            groups: [
              { h: 'Strategies, such as', points: [
                '<b>Self-help schemes</b>: residents are given materials to improve their own homes. Cheap, and communities stay together, but quality varies.',
                '<b>Site and services schemes</b>: plots with water, sanitation and electricity are provided, and people build their own homes. Affordable, but only for people who can pay something.',
                '<b>Upgrading</b> settlements with paved roads, drains and water pipes. This improves health without moving people.',
                '<b>Low-cost housing</b> or moving people to new estates. Better quality, but often far from jobs and expensive for the government.',
                '<b>Legal ownership</b> of land encourages residents to invest in their homes.',
              ] },
              { h: 'Evaluation (the reserved mark), such as', tone: 'judge', points: ['Strategies that involve residents and keep them close to their jobs tend to be more sustainable than clearing settlements, which can leave people homeless.'] },
            ],
          },
        },
        {
          k: '(c)', m: 7, scheme: 'tb', q: 'For a named urban area you have studied, explain the causes of its rapid growth.',
          ms: {
            lead: 'Ideas such as:',
            points: ['Rural to urban migration: push factors in the countryside and pull factors in the city.', 'Natural increase: a youthful population with a high birth rate.', 'International migration.', 'Economic growth: jobs in industry, ports, services or the informal sector.', 'The city\'s role as a capital or a major port.'],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['Lagos in Nigeria has grown quickly. Many people move there from rural areas because there are more jobs and better services. The birth rate is also high, so the population grows naturally.'],
              why: 'It names a city and explains two causes in simple terms. It has no specific details, such as figures, industries or the places people come from, so it stays in Level 2.',
            },
            {
              level: 'Level 3', marks: '7 marks', strong: true,
              text: [
                'Lagos, in south-west Nigeria, is one of the fastest-growing cities in Africa. Estimates of its population vary widely, from about 15 million to over 20 million. The main cause of its growth is rural to urban migration. In rural areas, many people depend on farming, which pays little, and services such as schools and clinics are limited. In the north-east, violence by Boko Haram has also forced many people to leave their homes. Lagos attracts migrants because it is Nigeria\'s main commercial centre, with ports, factories, banks and a large informal sector where newcomers can find work.',
                'Natural increase is also important. Nigeria has a youthful population and a high birth rate, and many migrants are young adults who start families in the city. Lagos also attracts people from other West African countries, because citizens of ECOWAS member states can move freely between them. As the city\'s ports and businesses keep growing, for example with the opening of the Lekki Deep Sea Port in 2023, it continues to attract more people.',
              ],
              why: 'It names the city and gives specific details about why people leave rural areas and what attracts them to Lagos. It explains both migration and natural increase. This detailed, developed answer reaches Level 3.',
            },
          ],
          answersNote: 'The figures and details in the example answers are from widely reported sources and have not been checked against an official document.',
        },
      ],
    },
    // ── Paper 2: economies ───────────────────────────────────────────────
    {
      tag: 'P2', short: 'TNCs', paper: 'Paper 2 · Topic 9: Changing economies', title: 'Employment structure and TNCs',
      note: 'Parts (b)(i) and (b)(ii), worth 8 marks, are left out. This set is worth 17 of the 25 marks in a full question.',
      resource: {
        type: 'table', label: 'Table 9.1', caption: 'Employment structure of three countries (percentage of workers in each sector).',
        cols: ['Country', 'Primary (%)', 'Secondary (%)', 'Tertiary (%)'],
        rows: [['X (LIC)', '65', '10', '25'], ['Y (MIC)', '30', '30', '40'], ['Z (HIC)', '2', '18', '80']],
        note: 'Practice data: the countries and figures were invented for this question.',
      },
      parts: [
        { k: '(a)(i)', m: 1, scheme: 'p', q: 'Which country in Table 9.1 has the highest percentage of workers in the tertiary sector?', ms: { head: 'Answer', points: ['Country Z (80%).'] } },
        { k: '(a)(ii)', m: 2, scheme: 'p', q: 'Give two examples of jobs in the primary sector.', ms: { lead: '1 mark for each, up to 2:', points: ['Farming.', 'Fishing.', 'Mining or quarrying.', 'Forestry.'] } },
        {
          k: '(a)(iii)', m: 3, scheme: 'data', q: 'Compare the employment structures of Country X and Country Z. Refer to data in your answer.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              'Country X has far more workers in the primary sector: 65%, compared with 2% in Country Z.',
              'Country Z has far more workers in the tertiary sector: 80%, compared with 25%.',
              'Country Z also has more workers in the secondary sector (18%, compared with 10%).',
              'The largest sector is primary in Country X but tertiary in Country Z.',
            ],
          },
        },
        {
          k: '(a)(iv)', m: 4, scheme: 'p', q: 'Explain why the percentage of people working in the primary sector falls as a country develops.',
          ms: {
            lead: 'Ideas such as:',
            points: [
              '<b>Mechanisation</b> of farming means that fewer workers are needed.',
              'Factories and offices offer <b>higher and more reliable wages</b>, so people leave farming.',
              'Rural to urban migration moves workers into the secondary and tertiary sectors.',
              'Better <b>education</b> allows people to get skilled jobs.',
              'As incomes rise, people spend more on <b>services</b>, which creates tertiary jobs.',
              'Some raw materials run out, or it becomes cheaper to import them.',
            ],
          },
        },
        {
          k: '(c)', m: 7, scheme: 'tb', q: 'For a named transnational corporation (TNC) you have studied, explain its impacts on the country or area where it operates.',
          ms: {
            groups: [
              { h: 'Positive impacts, such as', tone: 'yes', points: ['Jobs, training and new skills.', 'Wages that are often higher than in local firms.', 'Investment in infrastructure.', 'Exports and tax revenue.', 'Work for local suppliers (the multiplier effect).'] },
              { h: 'Negative impacts, such as', tone: 'no', points: ['Low wages and long hours in some factories.', 'Profits sent back to the country where the TNC is based.', 'Local firms unable to compete.', 'Pollution or the loss of farmland.', 'Dependence on one company, which could move elsewhere.'] },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['Samsung, a South Korean TNC, has large factories in Vietnam that make mobile phones. It gives jobs to many people, which gives them a regular income. It also helps Vietnam to export more, which earns money for the country. However, the wages are low compared with the profits, and the profits go back to South Korea.'],
              why: 'It names the TNC and the country and gives developed points on positive and negative impacts. It lacks specific details, such as places, figures or dates, so it stays in Level 2.',
            },
            {
              level: 'Level 3', marks: '7 marks', strong: true,
              text: [
                'Samsung, a South Korean TNC, has made Vietnam one of its main bases for making mobile phones. Its largest factories are in Bac Ninh and Thai Nguyen provinces, near Hanoi. They employ tens of thousands of workers, many of them young people from rural provinces, who earn a more regular income than they could on farms. Samsung\'s exports make up a large share of Vietnam\'s total exports, which brings foreign currency into the country, and the company pays taxes and trains workers in new skills.',
                'However, there are disadvantages. Many of the most valuable components are imported, and few Vietnamese firms supply Samsung directly, so the multiplier effect on local businesses is smaller than it could be. The profits return to South Korea, and Vietnam offered Samsung tax incentives to attract it. Vietnam\'s exports also depend heavily on one company, which could move production to another country if costs rise.',
              ],
              why: 'It names the TNC, the country and the provinces, and it explains positive and negative impacts with specific details. This reaches Level 3.',
            },
          ],
          answersNote: 'The details in the example answers are from widely reported sources and have not been checked against an official document.',
        },
      ],
    },
  ],
};
