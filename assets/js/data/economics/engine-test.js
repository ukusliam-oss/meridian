// Engine test for the Economics chapter: one scene per new feature. Not linked from the site.
// Figures come from assets/data/econ.json (IMF WEO October 2026, BIS); the text is placeholder until the chapter file exists.
const SRC = 'imf-weo';
export default {
  id: 'engine-test', subject: 'economics', borders: 'modern', accent: '#46d6a0',
  title: 'Engine test', question: 'Government and the macroeconomy',
  hero: { camera: { lat: 22, lon: 20, alt: 17000 } },
  ribbon: ['2000-01-01', '2027-01-01'], heroDate: '2019-01-01',
  pill: { part: 'Topic 4.1–4.4', date: 'Government and the macroeconomy' },
  syllabus: [{ id: '4.1.1', text: 'Macroeconomic aims' }, { id: '4.2.1', text: 'Government budget' }, { id: '4.3.2', text: 'Monetary policy measures' }],
  scenes: [
    {
      id: 't1', part: 'Aims', date: '2021-01-01', dateLabel: '2019 to 2021',
      camera: { lat: 22, lon: 20, alt: 15000 },
      map: { borders: 'modern', data: { id: 'NGDP_RPCH', years: [2019, 2020, 2021] } },
      title: 'Economic growth: 2020 in one map', body: '<p>Keep scrolling while this panel is in the middle of the screen. The map moves from 2019 to 2020 to 2021.</p>',
      why: 'Test: a multi-year map inside one panel.', facts: [{ text: 'Real GDP growth by country.', src: SRC }],
      check: { q: 'In which year did most economies shrink?', a: '2020.' }, syllabus: ['4.1.1'], sources: [SRC],
    },
    {
      id: 't2', part: 'Aims', date: '2024-01-01', dateLabel: '2019 to 2024',
      camera: { lat: 38, lon: 0, alt: 11000 },
      map: { borders: 'modern', data: { id: 'PCPIPCH', years: [2019, 2021, 2022, 2024] }, focus: ['USA', 'GBR', 'TUR', 'JPN'] },
      title: 'Stable prices: the inflation of 2022',
      body: '<p>Value labels on the focus countries change with the year.</p>',
      chart: { title: 'Inflation, average consumer prices', unit: '% change', source: SRC, marks: [{ x: 2022, label: '2022' }],
        series: [
          { label: 'United States', points: [[2015, 0.1], [2016, 1.3], [2017, 2.1], [2018, 2.4], [2019, 1.8], [2020, 1.3], [2021, 4.7], [2022, 8], [2023, 4.1], [2024, 3], [2025, 2.7]] },
          { label: 'United Kingdom', points: [[2015, 0], [2016, 0.7], [2017, 2.7], [2018, 2.5], [2019, 1.8], [2020, 0.9], [2021, 2.6], [2022, 9.1], [2023, 7.3], [2024, 2.5], [2025, 3.4]] },
        ] },
      why: 'Test: line chart and value labels.', facts: [{ text: 'Inflation by country.', src: SRC }],
      check: { q: 'Which had higher inflation in 2022, the US or the UK?', a: 'The UK (9.1% against 8.0%).' }, syllabus: ['4.1.1'], sources: [SRC],
    },
    {
      id: 't3', part: 'Monetary policy', date: '2023-12-01', dateLabel: 'December 2021 to December 2023',
      camera: { lat: 36, lon: -160, alt: 21000 },
      map: { borders: 'modern', data: { id: 'PCPIPCH', year: 2022 }, spikes: { id: 'POLICY_RATE', years: ['2021-12', '2022-06', '2022-12', '2023-12'] }, focus: ['USA', 'JPN'],
        flows: [{ from: 'JPN', to: 'USA', kind: 'capital', label: 'Money flows to higher US interest rates' }] },
      title: 'Interest rates rise around the world',
      body: '<p>Spikes show each central bank\'s policy rate and grow as the months pass.</p>',
      chain: { globe: 2, steps: ['The US central bank raises its interest rate', 'Saving in US dollars earns more than saving in yen', 'Money flows from Japan into US assets', 'Demand for dollars rises', 'The dollar appreciates and the yen depreciates'] },
      why: 'Test: spikes over months, a capital-flow arrow and a chain.', facts: [{ text: 'Policy rates from the BIS.', src: 'bis' }],
      check: { q: 'What happens to a currency when its interest rate rises relative to others?', a: 'It tends to appreciate.' }, syllabus: ['4.3.2'], sources: ['bis'],
    },
    {
      id: 't4', part: 'Fiscal policy', date: '2020-12-31', dateLabel: '2019 and 2020',
      camera: { lat: 45, lon: -30, alt: 9500 },
      map: { borders: 'modern', data: { id: 'GGXCNL_NGDP', years: [2019, 2020] }, focus: ['GBR', 'DEU', 'USA'] },
      title: 'Government budgets: the deficit wave of 2020',
      body: '<p>A diverging scale: orange for deficits, blue for surpluses.</p>',
      evaluation: ['How long the extra spending lasts', 'How much of it households save rather than spend', 'How large the debt already is'],
      why: 'Test: diverging scale and the evaluation block.', facts: [{ text: 'Net lending/borrowing, % of GDP.', src: SRC }],
      check: { q: 'What is a government budget deficit?', a: 'When government spending is greater than government revenue in a year.' }, syllabus: ['4.2.1'], sources: [SRC],
    },
    {
      id: 't5', part: 'Fiscal policy', date: '2013-12-31', dateLabel: '2013',
      camera: { lat: 38.5, lon: 23, alt: 1500 },
      map: { borders: 'modern', data: { id: 'LUR', year: 2013 }, focus: ['GRC'] },
      title: 'Greece: austerity and unemployment',
      body: '<p>Country scale: the camera leans towards the horizon.</p>',
      chart: { title: 'Greece', source: SRC, series: [
        { label: 'Unemployment, %', ind: 'LUR', iso: 'GRC', from: 2007, to: 2019 },
        { label: 'Budget balance, % of GDP', ind: 'GGXCNL_NGDP', iso: 'GRC', from: 2007, to: 2019 },
      ] },
      why: 'Test: close-up and a chart with negative values.', facts: [{ text: 'Unemployment and budget balance.', src: SRC }],
      check: { q: 'What happened to Greek unemployment as the deficit was cut, 2010–2013?', a: 'It rose, from 12.7% to 27.5%.' }, syllabus: ['4.2.1'], sources: [SRC],
    },
  ],
  sources: {
    'imf-weo': { title: 'World Economic Outlook database, October 2026', author: 'International Monetary Fund', publisher: 'IMF DataMapper', year: 2026, url: 'https://www.imf.org/external/datamapper' },
    bis: { title: 'Central bank policy rates', author: 'Bank for International Settlements', publisher: 'BIS Data Portal', year: 2026, url: 'https://data.bis.org/topics/CBPOL' },
  },
  toolkit: { summary: ['Engine test page.'], checks: [{ q: 'Does every feature work?', a: 'Check each scene.' }] },
};
