// Policy lab model for the Economics chapter (0455 Topic 4.1–4.4). Read by assets/js/policy-lab.js.
// A simplified model for learning, not a forecast. Status: reviewed by an Economics teacher on 2026-10-25.
//
// How it works
// - Time runs in quarters (0 to 24 = six years). Each dial is measured from its `neutral` position,
//   in steps of `per` (for example one step of income tax = 5 percentage points).
// - Each row of `effects` gives the change in one aim for one step of one dial: k[0] by the end of the
//   short run (2 years) and k[1] by the end of the long run (6 years). The change builds up over the
//   quarters in `lags`: the short-run part over lags.sr, then the move from k[0] to k[1] over lags.lr.
// - Effects of different dials add together. The scenarios add a shock (what happened to the economy)
//   on top, and the gauges compare "with the policy" against "no change in policy".
//
// Direction table for a RISE in each dial (short run / long run). ↑ up, ↓ down, · no change.
// Each cell has a one-line IGCSE justification in `effects` below (`why`), and `depends` where
// textbooks say the answer depends on circumstances. The test page checks the model against this table.
//
//                          Growth  Unemploy.  Inflation  Current acc.  Inequality  CO₂   Budget bal.
// Income tax rate  +5 pts   ↓ ↓     ↑ ↑        ↓ ↓        ↑ ↑           ↓ ↓         ↓ ↓   ↑ ↑
// Govt spending    +2% GDP  ↑ ↑     ↓ ↓        ↑ ↑        ↓ ↓           ↓ ↓         ↑ ↑   ↓ ↓
// Interest rate    +1 pt    ↓ ↓     ↑ ↑        ↓ ↓        ↑ ↑ (depends) ↑ ↑         ↓ ↓   ↓ ↓
// Exchange rate    +10%     ↓ ↓     ↑ ↑        ↓ ↓        ↓ ↓           · ·         · ·   ↓ ↓
// Supply-side inv. +1% GDP  ↑ ↑     ↓ ↓        ↑ ↓        ↓ ↑           · ↓         ↑ ↑   ↓ ↓

export default {
  id: 'policy-lab',
  status: 'reviewed',
  kicker: 'Policy lab · Topic 4.1–4.4',
  title: { lead: 'Policy lab:', rest: 'five tools, six aims' },
  intro: 'Watch what governments did in the 2009 recession and the 2022 inflation, or move the dials to test your own policy. Each gauge shows one macroeconomic aim.',
  warning: 'Simplified model for learning, not a forecast',
  warningMore: 'The scenarios use real policy decisions, but the gauge values come from the model, not from real data.',

  horizon: 24,                      // quarters shown on the clock
  readouts: { short: 8, long: 24 }, // when the short-run and long-run figures are read
  zones: { short: 'Short run', shortNote: 'first 2 years', long: 'Long run', longNote: 'years 3 to 6' },

  dials: [
    { id: 'tax', group: 'Fiscal policy', label: 'Income tax rate', unit: '%', min: 10, max: 45, step: 1, neutral: 25, per: 5, perLabel: '5 percentage points', dp: 0,
      low: 'Lower', high: 'Higher', note: 'The main rate of income tax, a progressive direct tax.' },
    { id: 'spend', group: 'Fiscal policy', label: 'Government spending', unit: '% of GDP', min: 30, max: 50, step: 0.5, neutral: 40, per: 2, perLabel: '2% of GDP', dp: 1,
      low: 'Less', high: 'More', note: 'Day-to-day spending, such as benefits, wages in the public sector and health care. Spending on education, training and infrastructure is on the supply-side dial.' },
    { id: 'rate', group: 'Monetary policy', label: 'Interest rate', unit: '%', min: 0, max: 10, step: 0.25, neutral: 3, per: 1, perLabel: '1 percentage point', dp: 2,
      low: 'Lower', high: 'Higher', note: 'The central bank\'s policy rate. Banks follow it when they set rates for loans and savings.' },
    { id: 'fx', group: 'Monetary policy', label: 'Exchange rate', unit: '%', min: -20, max: 20, step: 1, neutral: 0, per: 10, perLabel: '10%', dp: 0, signed: true,
      low: 'Managed down', high: 'Managed up', note: 'The central bank buys or sells its own currency to push the exchange rate up or down. 0 is the starting rate.' },
    { id: 'supply', group: 'Supply-side policy', label: 'Supply-side investment', unit: '% of GDP', min: 0, max: 4, step: 0.25, neutral: 1.5, per: 1, perLabel: '1% of GDP', dp: 2,
      low: 'Less', high: 'More', note: 'Government spending on education, training and infrastructure such as roads, railways and broadband.' },
  ],

  // better: 'up' (higher is closer to the aim), 'down', or a number (the target value).
  // zone: the range drawn as the aim on the gauge. eps: smallest change counted as a move. span: typical size of a move.
  aims: [
    { id: 'growth', label: 'Economic growth', aim: 'Aim: steady economic growth', measure: 'Real GDP, % change a year', unit: '%', min: -6, max: 8, base: 2.5, zone: [2, 4], better: 'up', dp: 1, eps: 0.1, span: 2 },
    { id: 'unemployment', label: 'Unemployment', aim: 'Aim: full employment', measure: '% of the labour force', unit: '%', min: 0, max: 14, base: 4.5, zone: [3, 5], better: 'down', dp: 1, eps: 0.1, span: 1.5 },
    { id: 'inflation', label: 'Inflation', aim: 'Aim: stable prices (2% target)', measure: 'Consumer prices, % change a year', unit: '%', min: -2, max: 12, base: 2, zone: [1, 3], better: 2, dp: 1, eps: 0.1, span: 2 },
    { id: 'current', label: 'Current account', aim: 'Aim: balance of payments stability', measure: 'Balance, % of GDP', unit: '%', min: -8, max: 8, base: -1, zone: [-2, 2], better: 0, dp: 1, eps: 0.1, span: 1.5 },
    { id: 'gini', label: 'Income inequality', aim: 'Aim: redistribution of income', measure: 'Gini index, 0 to 100 (higher = less equal)', unit: '', min: 20, max: 50, base: 34, zone: [24, 30], better: 'down', dp: 1, eps: 0.15, span: 1.5 },
    { id: 'co2', label: 'Environmental sustainability', aim: 'Aim: lower emissions', measure: 'CO₂ emissions, index (start = 100)', unit: '', min: 85, max: 115, base: 100, zone: [85, 95], better: 'down', dp: 1, eps: 0.2, span: 4 },
  ],
  // not a gauge: the side effect on the government budget (Topic 4.2.1)
  budget: { id: 'budget', label: 'Government budget balance', unit: '% of GDP', base: -2, dp: 1, eps: 0.1,
    note: 'A minus figure is a budget deficit: government spending is greater than tax revenue.' },

  // quarters over which effects build up: sr = [start, full] for the short-run effect, lr = [start, full] for the
  // move to the long-run effect. `effects` rows may override one of them.
  lags: {
    tax:    { sr: [1, 4], lr: [8, 16], text: 'Tax changes reach spending within a few months, once pay slips change.' },
    spend:  { sr: [1, 4], lr: [8, 16], text: 'Extra spending takes a few months to plan and start.' },
    rate:   { sr: [2, 6], lr: [10, 18], text: 'Interest rates change spending within about a year, and inflation within about 18 months to 2 years.' },
    fx:     { sr: [1, 5], lr: [8, 16], text: 'Import prices change within months. Export and import volumes take a year or more, as buyers switch suppliers.' },
    supply: { sr: [1, 5], lr: [8, 22], text: 'At first only the spending itself adds to demand. Most of the effect on productive capacity comes after 2 to 5 years.' },
  },

  // One row per dial and aim (5 × 7 = 35). k = [short run, long run] change for one step (`per`) of the dial.
  // expect = the direction an IGCSE textbook gives for a rise in the dial: 'up', 'down' or 'none'.
  effects: [
    // ── Income tax rate, +5 percentage points ────────────────────────────────────────────
    { dial: 'tax', aim: 'growth', k: [-0.5, -0.2], expect: ['down', 'down'],
      why: 'Households have less disposable income, so consumption and aggregate demand fall. In the long run lower rewards for work may reduce the supply of labour.' },
    { dial: 'tax', aim: 'unemployment', k: [0.35, 0.15], expect: ['up', 'up'],
      why: 'Lower demand for goods and services means firms need fewer workers.' },
    { dial: 'tax', aim: 'inflation', k: [-0.3, -0.1], expect: ['down', 'down'],
      why: 'Lower aggregate demand reduces demand-pull inflation.' },
    { dial: 'tax', aim: 'current', k: [0.25, 0.15], expect: ['up', 'up'],
      why: 'With less disposable income, households buy fewer imports, so the current account improves.' },
    { dial: 'tax', aim: 'gini', k: [-0.8, -0.8], expect: ['down', 'down'],
      why: 'Income tax is progressive: people on higher incomes pay a larger proportion, so income after tax is more equal.',
      depends: 'It depends which rate rises. A rise in the top rate only does more for redistribution than a rise in the basic rate.' },
    { dial: 'tax', aim: 'co2', k: [-0.5, -0.3], expect: ['down', 'down'],
      why: 'Less spending and output means less energy use and pollution.' },
    { dial: 'tax', aim: 'budget', k: [0.9, 0.8], expect: ['up', 'up'],
      why: 'Tax revenue rises, so the budget deficit falls. Part of the gain is lost because incomes and spending are lower.' },

    // ── Government spending, +2% of GDP ─────────────────────────────────────────────────
    { dial: 'spend', aim: 'growth', k: [0.8, 0.1], expect: ['up', 'up'],
      why: 'Government spending is part of aggregate demand, so output rises. The boost fades in the long run because day-to-day spending does not add to productive capacity.' },
    { dial: 'spend', aim: 'unemployment', k: [-0.6, -0.2], expect: ['down', 'down'],
      why: 'Firms need more workers to produce the extra output, and the public sector employs more staff.' },
    { dial: 'spend', aim: 'inflation', k: [0.4, 0.2], expect: ['up', 'up'],
      why: 'Higher aggregate demand can cause demand-pull inflation, especially when the economy is close to full capacity.',
      depends: 'It depends on spare capacity. In a deep recession, extra demand raises output more than prices.' },
    { dial: 'spend', aim: 'current', k: [-0.4, -0.3], expect: ['down', 'down'],
      why: 'Higher incomes increase spending on imports, so the current account worsens.' },
    { dial: 'spend', aim: 'gini', k: [-0.6, -0.5], expect: ['down', 'down'],
      why: 'Benefits and free public services help low-income households most.',
      depends: 'It depends what the money is spent on.' },
    { dial: 'spend', aim: 'co2', k: [0.6, 0.4], expect: ['up', 'up'],
      why: 'More output uses more energy and resources.' },
    { dial: 'spend', aim: 'budget', k: [-1.8, -1.6], expect: ['down', 'down'],
      why: 'Spending rises faster than tax revenue, so the budget deficit grows. Higher incomes bring back a little in tax.' },

    // ── Interest rate, +1 percentage point ──────────────────────────────────────────────
    { dial: 'rate', aim: 'growth', k: [-0.45, -0.1], expect: ['down', 'down'],
      why: 'Borrowing costs more and saving pays more, so consumption and investment fall.' },
    { dial: 'rate', aim: 'unemployment', k: [0.25, 0.1], expect: ['up', 'up'],
      why: 'Firms produce less, so they need fewer workers.' },
    { dial: 'rate', aim: 'inflation', k: [-0.35, -0.25], expect: ['down', 'down'], sr: [3, 8],
      why: 'Lower spending reduces demand-pull inflation. The effect takes about 18 months to 2 years to arrive in full.' },
    { dial: 'rate', aim: 'current', k: [0.1, 0.05], expect: ['up', 'up'],
      why: 'People and firms spend less, including on imports.',
      depends: 'A higher interest rate can also attract money from abroad and raise the exchange rate, which would worsen the current account. The lab keeps the exchange rate on its own dial.' },
    { dial: 'rate', aim: 'gini', k: [0.15, 0.1], expect: ['up', 'up'],
      why: 'Unemployment rises, which hits low-income households hardest, and savers, who tend to have higher incomes, receive more interest.',
      depends: 'Borrowers with mortgages also pay more, and many of them are on middle incomes.' },
    { dial: 'rate', aim: 'co2', k: [-0.3, -0.15], expect: ['down', 'down'],
      why: 'Less output means less energy use and pollution.' },
    { dial: 'rate', aim: 'budget', k: [-0.3, -0.25], expect: ['down', 'down'],
      why: 'Lower incomes reduce tax revenue, more people claim unemployment benefits, and interest on government debt costs more.' },

    // ── Exchange rate, managed up by 10% ────────────────────────────────────────────────
    { dial: 'fx', aim: 'growth', k: [-0.35, -0.25], expect: ['down', 'down'],
      why: 'Exports become dearer for foreign buyers and imports become cheaper, so net exports and aggregate demand fall.' },
    { dial: 'fx', aim: 'unemployment', k: [0.2, 0.15], expect: ['up', 'up'],
      why: 'Exporters and firms that compete with imports sell less, so they need fewer workers.' },
    { dial: 'fx', aim: 'inflation', k: [-0.5, -0.3], expect: ['down', 'down'], sr: [0, 3],
      why: 'Imported goods, raw materials and energy cost less in the home currency, which reduces cost-push inflation. Import prices change within months.' },
    { dial: 'fx', aim: 'current', k: [-0.3, -0.7], expect: ['down', 'down'], lr: [8, 18],
      why: 'Exports fall and imports rise, so the current account worsens. The effect grows over time as buyers switch suppliers.',
      depends: 'It depends on the price elasticity of demand for exports and imports.' },
    { dial: 'fx', aim: 'gini', k: [0, 0], expect: ['none', 'none'],
      why: 'Textbooks give no clear direction, so the lab leaves it unchanged.' },
    { dial: 'fx', aim: 'co2', k: [0, 0], expect: ['none', 'none'],
      why: 'No clear direction: less is produced at home, but cheaper imports raise consumption. The lab leaves it unchanged.' },
    { dial: 'fx', aim: 'budget', k: [-0.15, -0.1], expect: ['down', 'down'],
      why: 'Slightly lower output and employment reduce tax revenue.' },

    // ── Supply-side investment, +1% of GDP ──────────────────────────────────────────────
    { dial: 'supply', aim: 'growth', k: [0.3, 0.6], expect: ['up', 'up'],
      why: 'In the short run the spending adds to aggregate demand. In the long run better skills and infrastructure increase productive capacity (the PPC shifts outwards).' },
    { dial: 'supply', aim: 'unemployment', k: [-0.2, -0.45], expect: ['down', 'down'],
      why: 'Building projects create jobs at first. Later, trained workers can fill vacancies, which reduces structural unemployment.' },
    { dial: 'supply', aim: 'inflation', k: [0.1, -0.3], expect: ['up', 'down'],
      why: 'The spending adds a little demand at first. Once capacity has grown, output can rise without pushing up prices, and costs of production fall.' },
    { dial: 'supply', aim: 'current', k: [-0.1, 0.35], expect: ['down', 'up'],
      why: 'The extra spending pulls in some imports at first. In the long run more productive firms compete better in export markets.' },
    { dial: 'supply', aim: 'gini', k: [0, -0.5], expect: ['none', 'down'],
      why: 'Education and training raise the skills and earnings of lower-paid workers, but only after some years.' },
    { dial: 'supply', aim: 'co2', k: [0.4, 0.5], expect: ['up', 'up'],
      why: 'Building uses energy and materials, and more output means more emissions.',
      depends: 'It depends on the project. Public transport or renewable energy can reduce emissions.' },
    { dial: 'supply', aim: 'budget', k: [-0.9, -0.5], expect: ['down', 'down'],
      why: 'The government pays for the investment. In the long run higher output brings in more tax revenue.' },
  ],

  // Shown when one aim moves towards its target and another moves away. The three syllabus conflicts come first.
  // ab: when `a` moves towards its aim and `b` away. ba: the reverse.
  conflicts: [
    { a: 'unemployment', b: 'inflation', syllabus: true, title: 'Full employment and stable prices',
      ab: 'Unemployment falls, but inflation moves away from the target. When demand rises, firms take on more workers but also raise prices.',
      ba: 'Inflation moves towards the target, but unemployment rises. Lower demand slows price rises, but firms need fewer workers.' },
    { a: 'growth', b: 'co2', syllabus: true, title: 'Economic growth and environmental sustainability',
      ab: 'Output grows faster, but emissions rise. Producing more uses more energy and resources.',
      ba: 'Emissions fall, but growth is slower. Less output means less pollution, but also fewer goods and services.' },
    { a: 'unemployment', b: 'current', syllabus: true, title: 'Full employment and balance of payments stability',
      ab: 'Unemployment falls, but the current account moves further from balance. People spend part of their higher incomes on imports.',
      ba: 'The current account moves towards balance, but unemployment rises. Lower incomes cut spending on imports and on goods made at home.' },
    { a: 'growth', b: 'inflation', title: 'Economic growth and stable prices',
      ab: 'Output grows faster, but inflation moves away from the target. Demand is rising faster than the economy can produce.',
      ba: 'Inflation moves towards the target, but growth is slower. Higher borrowing costs or taxes reduce spending.' },
    { a: 'gini', b: 'growth', title: 'Redistribution of income and economic growth',
      ab: 'Income is more equal, but growth is slower. Higher taxes on income reduce spending and may reduce the reward for working.',
      ba: 'Growth is faster, but income is less equal.' },
    { a: 'inflation', b: 'current', title: 'Stable prices and balance of payments stability',
      ab: 'Inflation moves towards the target, but the current account moves further from balance. A stronger currency makes imports cheaper but exports dearer.',
      ba: 'The current account moves towards balance, but inflation moves away from the target. A weaker currency helps exporters but makes imports dearer.' },
    { a: 'growth', b: 'current', title: 'Economic growth and balance of payments stability',
      ab: 'Output grows faster, but the current account moves further from balance. Higher incomes are partly spent on imports.',
      ba: 'The current account moves towards balance, but growth is slower.' },
  ],
  noConflict: {
    still: 'Little has changed yet. Most policies take months or years to work.',
    none: 'No conflict at this point. The aims that have moved have all moved the same way.',
  },

  manual: {
    id: 'manual', label: 'Your policy',
    beats: [
      { t: 0, text: 'Move any dial to test a policy. The clock then runs for six years from the change, so you can see the short run and the long run.' },
      { t: 1, text: 'The first months. Most policies have not had time to work yet. Import prices react first if the exchange rate has moved.' },
      { t: 4, text: 'Short run. Changes in tax, spending and interest rates have reached aggregate demand: output, jobs and imports respond first.' },
      { t: 9, text: 'Long run. Demand effects fade, and the effects of supply-side investment on productive capacity build up.' },
    ],
  },

  scenarios: [
    {
      id: 'recession-2009', label: '2009: recession', title: 'The 2009 recession', startYear: 2008,
      about: 'A typical high-income economy in the global financial crisis, using policies that many governments chose.',
      start: { growth: 2.5, unemployment: 5, inflation: 2.5, current: -2, gini: 34, co2: 100, budget: -2.5 },
      dials: { tax: 25, spend: 40, rate: 5, fx: 0, supply: 1.5 },
      // shock: what happens to the economy with no change in policy, added to `start`. [quarter, change]
      shock: {
        growth: [[0, 0], [2, -2.5], [4, -7.5], [6, -7], [8, -3.8], [11, -1.6], [16, -0.8], [24, -0.4]],
        unemployment: [[0, 0], [3, 0.8], [6, 2.8], [10, 3.6], [16, 3.4], [24, 2.8]],
        inflation: [[0, 0], [2, 1], [4, -0.6], [7, -2.8], [10, -2.6], [16, -2], [24, -1.6]],
        current: [[0, 0], [4, 0.5], [7, 1.5], [12, 1.2], [24, 0.8]],
        gini: [[0, 0], [6, 0.6], [12, 1], [24, 0.8]],
        co2: [[0, 0], [3, -1], [7, -6], [12, -4.5], [24, -3]],
        budget: [[0, 0], [4, -2], [8, -4.5], [12, -4.5], [16, -3.5], [24, -2.5]],
      },
      // dial positions over time. [quarter, value]
      moves: {
        rate: [[2.4, 5], [3.4, 4.5], [4.4, 2], [5.2, 0.5]],
        tax: [[3.9, 25], [5, 23], [10.6, 23], [12.4, 25]],
        spend: [[3.9, 40], [5.6, 42.5], [10.6, 42.5], [15, 41]],
        supply: [[3.9, 1.5], [6.2, 2]],
      },
      beats: [
        { t: 0, text: 'Banks have made large losses on loans linked to US housing, and they start to lend less. Growth begins to slow.' },
        { t: 2.6, text: 'The banking crisis spreads around the world. Households and firms cut spending and investment, so aggregate demand falls. Output and jobs start to fall.' },
        { t: 4.6, text: 'Central banks cut interest rates quickly. The US Federal Reserve cut its rate to between 0% and 0.25% in December 2008. The Bank of England cut Bank Rate to 0.5% in March 2009.', src: ['fed', 'boe'] },
        { t: 5.7, text: 'Governments use expansionary fiscal policy. In February 2009 the USA passed the American Recovery and Reinvestment Act: tax cuts, more government spending, and investment in roads, railways and broadband.', src: ['arra'] },
        { t: 9, text: 'Short run. Lower interest rates and extra spending raise demand, so output grows again. Unemployment falls more slowly, because firms wait before they take on workers.' },
        { t: 11.6, text: 'The budget deficit is much larger, because tax revenue fell and spending rose. Temporary tax cuts end, and from 2010 several governments, including the UK, cut spending to reduce their deficits.', src: ['uk-sr2010'] },
        { t: 18, text: 'Long run. The investment in skills and infrastructure adds a little to productive capacity. As output grows, emissions rise again: economic growth and environmental sustainability conflict.' },
        { t: 24, text: 'On each gauge the dashed line shows the same economy with no change in policy. The gap between the lines is the effect of the policy.' },
      ],
    },
    {
      id: 'inflation-2022', label: '2022: high inflation', title: 'The 2022 inflation', startYear: 2021,
      about: 'A typical high-income economy that imports energy, using policies that many governments and central banks chose.',
      start: { growth: 2.5, unemployment: 5.5, inflation: 1.5, current: -1.5, gini: 34, co2: 100, budget: -6 },
      dials: { tax: 25, spend: 41, rate: 0.25, fx: 0, supply: 1.5 },
      shock: {
        growth: [[0, 0], [2, 3], [4, 1.8], [6, -0.6], [8, -1], [12, -0.6], [24, -0.2]],
        unemployment: [[0, 0], [4, -1], [8, -1.5], [12, -1.4], [24, -1]],
        inflation: [[0, 0], [3, 2], [5, 4.5], [7, 8.5], [9, 7.5], [12, 4.5], [16, 2], [20, 1.2], [24, 1]],
        current: [[0, 0], [4, -0.5], [7, -2.5], [12, -1.5], [24, -0.5]],
        gini: [[0, 0], [8, 0.4], [24, 0.2]],
        co2: [[0, 0], [3, 2], [7, -1], [12, -2], [24, -3]],
        budget: [[0, 0], [4, 3], [8, 4], [24, 4]],
      },
      moves: {
        supply: [[3.4, 1.5], [6, 2]],
        rate: [[3.6, 0.25], [4.6, 0.75], [7, 3], [10, 5.25], [14.4, 5.25], [16.5, 4.75], [20, 4]],
        fx: [[6.4, 0], [7.2, 5], [11, 5], [15, 0]],
        spend: [[6.8, 41], [7.6, 42.5], [10, 42.5], [13, 41]],
      },
      beats: [
        { t: 0, text: 'Economies reopen after the pandemic. Demand recovers quickly, but supply chains cannot keep up, so prices start to rise. Interest rates are close to zero.' },
        { t: 3.5, text: 'In November 2021 the USA passed the Infrastructure Investment and Jobs Act, a supply-side policy: spending on roads, railways, broadband and power networks over several years.', src: ['iija'] },
        { t: 4.8, text: 'In February 2022 Russia invaded Ukraine. Energy and food prices rose sharply, so costs of production rose across the economy: cost-push inflation.' },
        { t: 6, text: 'Central banks raise interest rates to bring inflation down. The Bank of England raised Bank Rate 14 times, from 0.1% in December 2021 to 5.25% in August 2023.', src: ['boe'] },
        { t: 6.9, text: 'Some central banks push their exchange rate up. Japan bought yen in September and October 2022 to slow its fall, the first time since 1998. A stronger currency makes imported energy cheaper.', src: ['mof'] },
        { t: 7.6, text: 'UK inflation reached 11.1% in October 2022, the highest for over 40 years. Governments paid part of households\' energy bills, which helped low-income households but added to budget deficits.', src: ['ons-cpi', 'uk-epg'] },
        { t: 11, text: 'Short run. Higher interest rates reduce borrowing and spending, so growth slows and unemployment rises a little. Inflation falls, but only about a year after the first rise: full employment and stable prices conflict.' },
        { t: 15, text: 'With inflation close to the 2% target, central banks start to cut interest rates: the Bank of England in August 2024 and the US Federal Reserve in September 2024.', src: ['boe', 'fed'] },
        { t: 24, text: 'Long run. The infrastructure investment adds to productive capacity, which helps growth without adding to inflation. On each gauge the dashed line shows the same economy with no change in policy.' },
      ],
    },
  ],

  notes: [
    'This is a simplified model for learning, not a forecast. It shows the directions that IGCSE textbooks give and the order in which effects arrive. The sizes are chosen to make the directions easy to see.',
    'Each effect builds up over time. Demand effects (tax, spending, interest rates, exchange rate) come first. The effects of supply-side investment on productive capacity come in the long run.',
    'The effects of different dials are added together. Real economies are not this simple: the size of each effect depends on confidence, spare capacity, what other countries do, and how the policy is designed.',
    'The scenarios describe a typical high-income economy, not one real country. The dates and policies in the text are real. The lab treats energy support as ordinary government spending; in the UK the Energy Price Guarantee also lowered measured inflation directly, because it capped prices.',
  ],

  sources: {
    fed: { title: 'Open market operations: changes in the target federal funds rate', publisher: 'Board of Governors of the Federal Reserve System', url: 'https://www.federalreserve.gov/monetarypolicy/openmarket.htm' },
    boe: { title: 'Official Bank Rate history', publisher: 'Bank of England', url: 'https://www.bankofengland.co.uk/boeapps/database/Bank-Rate.asp' },
    arra: { title: 'H.R.1, American Recovery and Reinvestment Act of 2009', publisher: 'Congress.gov', url: 'https://www.congress.gov/bill/111th-congress/house-bill/1' },
    'uk-sr2010': { title: 'Spending Review 2010', publisher: 'HM Treasury', url: 'https://www.gov.uk/government/publications/spending-review-2010' },
    iija: { title: 'H.R.3684, Infrastructure Investment and Jobs Act', publisher: 'Congress.gov', url: 'https://www.congress.gov/bill/117th-congress/house-bill/3684' },
    mof: { title: 'Foreign exchange intervention operations', publisher: 'Ministry of Finance, Japan', url: 'https://www.mof.go.jp/english/policy/international_policy/reference/feio/index.html' },
    'ons-cpi': { title: 'CPI annual rate 00: all items (series D7G7)', publisher: 'Office for National Statistics', url: 'https://www.ons.gov.uk/economy/inflationandpriceindices/timeseries/d7g7/mm23' },
    'uk-epg': { title: 'Energy Price Guarantee', publisher: 'GOV.UK', url: 'https://www.gov.uk/government/publications/energy-price-guarantee' },
  },
};
