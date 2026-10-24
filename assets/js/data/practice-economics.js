// Written practice for Economics 0455 Paper 2 Section B (2027 format).
// Part marks, point-based marking and Table A follow the 2027 specimen Paper 2 mark scheme (v3).
// Questions, indicative content and example answers are our own wording.
export default {
  id: 'economics',
  minutesPerMark: 1.4,
  head: '<em>Paper 2 practice:</em>Section B questions',
  lede: 'Seven Section B questions, each in four parts worth 2, 4, 6 and 8 marks. Two include calculations and one asks for a diagram. Part (d) has two example answers to compare.',
  how: 'Choose a set. Write your answer on paper, or plan it in your head, then open the mark scheme for each part. Draw diagrams on paper too. The times are a guide based on the marks. Nothing here is saved.',
  source: `<p><b>Marks per part</b> (2, 4, 6 and 8) and the point-based marking for parts (a) to (c) follow the 2027 specimen Paper 2 mark scheme (version 3). The levels for part (d) are paraphrased from Table A in that mark scheme.</p>
    <p><b>Calculations</b> are marked like the specimen's Section A calculation: 2 marks for the correct answer, or 1 mark for a correct method with a wrong answer. In the specimen, calculations appear in Section A. They are included here for practice.</p>
    <p><b>The diagram question</b> in the wheat set uses the specimen's 4-mark diagram criteria (Question 1(d)). The split between diagram and written analysis is our own.</p>
    <p><b>Questions, indicative content and example answers</b> are our own. They were not written by Cambridge.</p>`,
  schemes: {
    a: { how: '<b>Point-marked.</b> One mark for each correct point or each part of a definition.' },
    calc: { how: '<b>Point-marked.</b> 2 marks for the correct answer. 1 mark for a correct method with a wrong answer.' },
    b: { how: '<b>Point-marked.</b> For each of two points: 1 mark for identifying it and 1 mark for explaining it. If you give more than two, only the first three are considered.' },
    c: { how: '<b>Point-marked.</b> Marks for identifying the relevant ideas, then 1 mark for each linked step in your analysis, up to 6. Fewer points in more depth score better than a list.' },
    cd: { how: '<b>Point-marked.</b> Up to 4 marks for an accurate, labelled diagram and up to 2 marks for written analysis.' },
    d: {
      how: '<b>Marked in levels</b> (Table A in the specimen mark scheme). You need to analyse both sides and reach a conclusion.',
      levels: [
        { l: 3, d: 'A reasoned discussion of both sides, with clear and logical analysis and accurate use of economic terms. One side may be more developed than the other. It may point out what the outcome depends on.', m: '6–8' },
        { l: 2, d: 'A reasoned discussion with clear analysis, but it lacks depth or is one-sided. Some relevant use of economic terms.', m: '3–5' },
        { l: 1, d: 'Relevant definitions or statements that are not developed.', m: '1–2' },
        { l: 0, d: 'No creditable content.', m: '0' },
      ],
    },
  },
  sets: [
    // ── 1. PED (calculation) ─────────────────────────────────────────────
    {
      tag: '1', short: 'Bus fares', paper: 'Paper 2 · Section B · Topic 2: The allocation of resources', title: 'Price elasticity of demand and public transport',
      intro: 'A city bus company raised the price of a single journey from $2.00 to $2.50. As a result, the number of journeys fell from 40,000 to 36,000 a day. The city government is now considering whether to make bus travel free.',
      parts: [
        {
          k: '(a)', m: 2, scheme: 'calc', q: 'Calculate the price elasticity of demand (PED) for bus journeys. Show your working.',
          ms: {
            head: 'Answer',
            working: ['% change in quantity demanded = (36,000 − 40,000) ÷ 40,000 × 100 = −10%', '% change in price = (2.50 − 2.00) ÷ 2.00 × 100 = +25%', 'PED = −10% ÷ 25% = <b>−0.4</b>'],
            points: ['Correct answer, −0.4: 2 marks.', 'Correct method but a wrong answer, for example the formula % change in quantity demanded ÷ % change in price: 1 mark.'],
            tip: 'PED is negative because price and quantity demanded move in opposite directions. A value between 0 and −1 means demand is <b>price inelastic</b>.',
          },
        },
        {
          k: '(b)', m: 4, scheme: 'b', q: 'Explain two reasons why the demand for bus journeys may be price inelastic.',
          ms: {
            lead: '1 mark for identifying each reason and 1 mark for explaining it. Answers may include:',
            points: [
              '<b>Few close substitutes</b> (1): if there is no train or metro and taxis are expensive, passengers have little choice but to keep using the bus (1).',
              '<b>A necessity</b> (1): many people must travel to work or school every day, so they keep making the journey when the price rises (1).',
              '<b>A small proportion of income</b> (1): a rise of 50 cents is a small part of most people\'s income, so it has little effect on the number of journeys (1).',
              '<b>A short time period</b> (1): in the short run, passengers have not had time to find alternatives, such as buying a bicycle or sharing a car (1).',
            ],
          },
        },
        {
          k: '(c)', m: 6, scheme: 'c', q: 'Analyse how the price rise affected the bus company\'s total revenue.',
          ms: {
            lead: '1 mark for each step, up to 6. Answers may include:',
            points: [
              'Total revenue = price × quantity (1).',
              'Before the rise: $2.00 × 40,000 = $80,000 a day (1).',
              'After the rise: $2.50 × 36,000 = $90,000 a day (1).',
              'Total revenue rose by $10,000 a day (1).',
              'Demand is <b>price inelastic</b> (PED −0.4), so the percentage fall in quantity demanded (10%) is smaller than the percentage rise in price (25%) (1).',
              'The extra revenue from charging more for each journey is greater than the revenue lost from the 4,000 journeys no longer made (1).',
            ],
          },
        },
        {
          k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not the city government should make bus travel free.',
          ms: {
            groups: [
              { h: 'Why it should', tone: 'yes', points: [
                'Car journeys create <b>external costs</b> such as congestion, air pollution and accidents. If more people use buses, these costs fall.',
                'Without a fare, bus travel is no longer <b>under-consumed</b> because of its price.',
                'It helps <b>low-income households</b>, who spend a larger share of their income on transport, so relative poverty may fall.',
                'Workers can reach more jobs, which improves the <b>geographical mobility</b> of labour.',
                'Some places have done this. For example, Luxembourg made all its public transport free in 2020.',
              ] },
              { h: 'Why it should not', tone: 'no', points: [
                '<b>Opportunity cost</b>: the city loses its fare revenue and must pay for this, for example by cutting spending on schools or raising taxes.',
                'Demand extends sharply at a price of zero, which may cause <b>overcrowding</b> and a worse service unless more buses are provided.',
                'Some new passengers may be people who used to <b>walk or cycle</b>, so car use may not fall much.',
                'Without fares, the bus company has less <b>incentive to be efficient</b>.',
                'Passengers on high incomes also gain, so it is not well targeted at people in poverty.',
              ] },
              { h: 'What the answer depends on', tone: 'judge', text: 'How many car drivers switch to the bus; whether the city can afford more buses as well as the lost fares; and whether a smaller step, such as free travel for students and pensioners, could bring most of the benefits at a lower cost.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['The government should make bus travel free because more people would use the bus instead of their cars. This would reduce pollution and traffic jams, which are external costs. Poor people would also save money.', 'However, it would cost the government a lot of money.'],
              why: 'It analyses one side with relevant terms, but the other side is a single statement that is not developed, and there is no conclusion. A reasoned but one-sided answer is Level 2.',
            },
            {
              level: 'Level 3', marks: '8 marks', strong: true,
              text: [
                'Making bus travel free could benefit the city. Car journeys create external costs, such as congestion and air pollution, which are paid by third parties. If buses are free, the price of a bus journey falls to zero, so demand extends. Some drivers will switch to the bus, so there will be fewer cars on the roads, less pollution and fewer accidents. Free buses would also help low-income households, who spend a larger proportion of their income on travel, so relative poverty could fall.',
                'However, free buses have an opportunity cost. The city would lose $90,000 a day in fares and would have to pay for this through higher taxes or by cutting spending on services such as schools. Demand would also rise sharply, so buses could become overcrowded. If the city cannot afford more buses, the quality of the service would fall. In addition, some new passengers might be people who used to walk or cycle, so the fall in car use might be small.',
                'Overall, it depends on how many car drivers change to the bus. The data shows that demand for bus journeys is price inelastic (−0.4), so a change in price has a fairly small effect on the number of journeys. This suggests that free buses might not attract many drivers. A cheaper option, such as better routes or free travel only for students and pensioners, might bring most of the benefits at a lower cost.',
              ],
              why: 'Both sides are analysed in chains of reasoning with accurate terms, and the answer uses the data in the question. The conclusion explains what the outcome depends on and why. That is Level 3.',
            },
          ],
        },
      ],
    },
    // ── 2. Supply shift (diagram) ────────────────────────────────────────
    {
      tag: '2', short: 'Wheat prices', paper: 'Paper 2 · Section B · Topic 2: The allocation of resources', title: 'Supply, demand and maximum prices',
      intro: 'A drought reduces the wheat harvest in several countries that export wheat. Wheat is used to make bread, which is a basic food for many households. Some governments are considering a maximum price for bread.',
      parts: [
        {
          k: '(a)', m: 2, scheme: 'a', q: 'Define "equilibrium price".',
          ms: { head: 'Answer', points: ['The price at which quantity demanded equals quantity supplied (1)…', '…so there is no shortage or surplus in the market (1).'] },
        },
        {
          k: '(b)', m: 4, scheme: 'b', q: 'Explain two reasons, other than the weather, why the supply of wheat might decrease.',
          ms: {
            lead: '1 mark for identifying each reason and 1 mark for explaining it. Answers may include:',
            points: [
              '<b>Higher costs of production</b> (1): if the price of fertiliser or fuel rises, farmers make less profit at each price, so they supply less (1).',
              '<b>An indirect tax or the removal of a subsidy</b> (1): this raises farmers\' costs for each unit, so supply shifts to the left (1).',
              '<b>Disease or pests</b> (1): these destroy part of the crop, so less wheat is available to sell (1).',
              '<b>Farmers switch crops</b> (1): if another crop becomes more profitable, farmers use their land for that crop instead (1).',
              '<b>Conflict</b> (1): war in a wheat-growing region can stop farming and block exports (1).',
            ],
          },
        },
        {
          k: '(c)', m: 6, scheme: 'cd', q: 'Analyse, using a demand and supply diagram, the effect of the drought on the market for wheat.',
          ms: {
            head: 'Diagram and analysis',
            diagram: { s: -44, alt: 'Demand and supply diagram. Supply shifts to the left from S1 to S2. The price rises from P1 to P2 and the quantity falls from Q1 to Q2.' },
            groups: [
              { h: 'Diagram (up to 4 marks)', points: ['Axes labelled price and quantity (1).', 'Original curves labelled D1 and S1 (1).', 'New supply curve S2 drawn to the left of S1 (1).', 'Original and new equilibrium shown: P1 and Q1, P2 and Q2 (1).'] },
              { h: 'Analysis (up to 2 marks)', points: ['The drought reduces supply, so at the original price P1 there is a shortage (excess demand) (1).', 'The shortage pushes the price up to P2. Demand contracts until a new equilibrium is reached at a lower quantity, Q2 (1).'] },
            ],
            tip: 'Use a ruler, label every curve and line, and show both equilibrium points. An unlabelled diagram earns very few marks.',
          },
        },
        {
          k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not a government should set a maximum price for bread.',
          ms: {
            groups: [
              { h: 'Why it should', tone: 'yes', points: [
                'Bread is a <b>necessity</b>. A maximum price keeps it affordable for low-income households, which can reduce absolute poverty and improve nutrition.',
                'It protects consumers when prices rise quickly, for example after a drought.',
                'It may prevent <b>social unrest</b>, because sharp rises in food prices can lead to protests.',
                'If a few large firms have <b>market power</b>, it stops them from exploiting consumers.',
              ] },
              { h: 'Why it should not', tone: 'no', points: [
                'If the maximum price is set <b>below the equilibrium price</b>, quantity demanded is greater than quantity supplied, so there is a <b>shortage</b>.',
                'Shortages lead to <b>queues</b>, rationing and <b>black markets</b>, where bread is sold illegally at higher prices.',
                'Bakers\' profits fall, so some may cut output or <b>leave the market</b>. In the long run, supply may fall further.',
                'Producers may lower the <b>quality</b> of bread to cut costs.',
                'The government may have to <b>subsidise</b> bakers to keep supply up, which has an opportunity cost.',
              ] },
              { h: 'What the answer depends on', tone: 'judge', text: 'How far below the equilibrium price the maximum is set, how much supply responds (PES), and whether the government also helps producers, for example with a subsidy. A small, temporary maximum price may protect consumers. A large, permanent one is likely to cause shortages.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['A maximum price would help poor people because bread would be cheaper, so they could afford to eat. This would reduce poverty. However, if the price is too low there may be a shortage.'],
              why: 'The first side has a short chain of reasoning. The second side is one statement that is not explained, and there is no conclusion. This is reasoned but one-sided, so it is Level 2.',
            },
            {
              level: 'Level 3', marks: '8 marks', strong: true,
              text: [
                'A maximum price could benefit consumers. Bread is a necessity, so demand for it is price inelastic. When the drought reduces supply, the price of bread rises sharply, and low-income households must spend more of their income on it. A maximum price set by law stops the price from rising above a certain level, so these households can still afford to eat. This could reduce absolute poverty and help to prevent protests over food prices.',
                'However, if the maximum price is set below the equilibrium price, it will cause a shortage. At the lower price, demand extends but supply contracts, because bakers earn less from each loaf. Some bakers may make a loss and leave the market. Consumers may then face queues and empty shelves, and a black market could develop where bread is sold above the legal price. Some people could end up paying more than before.',
                'Overall, a maximum price is only likely to work if it is close to the equilibrium price and is combined with help for producers, such as a subsidy that keeps supply up. Without this, the shortages it causes may harm the households it is meant to protect. It also depends on how long the drought lasts: a short-term maximum price is less risky than a permanent one.',
              ],
              why: 'Both sides are analysed in clear chains, using terms such as price inelastic, shortage and black market. The conclusion explains what the result depends on. That is Level 3.',
            },
          ],
        },
      ],
    },
    // ── 3. Unemployment (calculation) ────────────────────────────────────
    {
      tag: '3', short: 'Unemployment', paper: 'Paper 2 · Section B · Topics 3 and 4: Workers and the macroeconomy', title: 'Unemployment and the minimum wage',
      intro: 'In 2025, Country Z had a labour force of 24 million people. Of these, 1.8 million were unemployed. The government is considering raising the national minimum wage to reduce poverty among low-paid workers.',
      parts: [
        {
          k: '(a)', m: 2, scheme: 'calc', q: 'Calculate the unemployment rate in Country Z in 2025. Show your working.',
          ms: {
            head: 'Answer',
            working: ['Unemployment rate = number unemployed ÷ labour force × 100', '= 1.8 million ÷ 24 million × 100 = <b>7.5%</b>'],
            points: ['Correct answer, 7.5%: 2 marks.', 'Correct method but a wrong answer: 1 mark.'],
            tip: 'The unemployment rate is a percentage of the <b>labour force</b>, not of the whole population.',
          },
        },
        {
          k: '(b)', m: 4, scheme: 'b', q: 'Explain two costs of unemployment to a government.',
          ms: {
            lead: '1 mark for identifying each cost and 1 mark for explaining it. Answers may include:',
            points: [
              '<b>Lower tax revenue</b> (1): unemployed people pay little or no income tax, and they spend less, so revenue from indirect taxes also falls (1).',
              '<b>Higher spending on benefits</b> (1): the government pays unemployment benefits, which has an opportunity cost, such as less spending on education (1).',
              '<b>Social costs</b> (1): unemployment is linked to poor health and crime, which increases spending on healthcare and policing (1).',
            ],
          },
        },
        {
          k: '(c)', m: 6, scheme: 'c', q: 'Analyse how a cut in interest rates could reduce unemployment.',
          ms: {
            lead: '1 mark for each step, up to 6. Answers may include:',
            points: [
              'A cut in interest rates is a <b>monetary policy</b> tool, usually used by the central bank (1).',
              'Borrowing becomes cheaper (1), so households borrow more to buy cars and houses (1).',
              'Saving earns less interest (1), so households save less and spend more (1).',
              'Firms borrow more to <b>invest</b> in new machinery and buildings (1).',
              '<b>Total (aggregate) demand</b> rises (1), so firms sell more and need to produce more (1).',
              'Firms employ more workers (1), so <b>cyclical unemployment</b> falls (1).',
              'Lower interest rates may also cause the exchange rate to fall, which makes exports cheaper and increases demand for them (1).',
            ],
          },
        },
        {
          k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not raising the national minimum wage will reduce poverty.',
          ms: {
            groups: [
              { h: 'Why it will', tone: 'yes', points: [
                'Low-paid workers earn more, so they can afford more <b>basic necessities</b>.',
                'It narrows the gap between low and average incomes, so <b>relative poverty</b> may fall.',
                'Workers may be more <b>motivated</b>, so productivity may rise and firms may not need to cut jobs.',
                'Higher wages increase spending, which raises <b>total demand</b> and may create jobs elsewhere.',
              ] },
              { h: 'Why it will not', tone: 'no', points: [
                'If the minimum wage is above the <b>equilibrium wage</b>, the supply of labour is greater than the demand for labour, so <b>unemployment</b> rises. Workers who lose their jobs may become poorer.',
                'Firms may cut hours, stop hiring or replace workers with <b>machines</b>.',
                'Firms may pass higher costs on as higher prices (<b>cost-push inflation</b>), which reduces the real value of the wage rise.',
                'It does not help the poorest people who are not in work, such as the unemployed, many pensioners or workers in the <b>informal sector</b>.',
              ] },
              { h: 'What the answer depends on', tone: 'judge', text: 'How large the rise is compared with the equilibrium wage, how much firms can afford to pay, and the state of the economy. A small rise when the economy is growing is likely to reduce poverty. A large rise during a recession is more likely to increase unemployment.' },
            ],
            tip: 'A national minimum wage diagram is new to the 2027 syllabus and helps here. Draw the minimum wage above the equilibrium wage and label the excess supply of labour as unemployment.',
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['Raising the minimum wage will reduce poverty because workers will earn more money. They will be able to buy more food and pay their bills, so fewer people will be in poverty. But some firms might not be able to pay.'],
              why: 'It explains why the policy could reduce poverty, but the other side is one statement that is not developed, and there is no conclusion. This is one-sided, so it stays in Level 2.',
            },
            {
              level: 'Level 3', marks: '8 marks', strong: true,
              text: [
                'Raising the national minimum wage could reduce poverty. Low-paid workers would receive a higher income for each hour they work, so they could afford more necessities such as food and housing. This would narrow the gap between their income and the average income, which reduces relative poverty. The higher incomes would also be spent in local shops, increasing total demand, so firms might employ more workers.',
                'However, if the minimum wage is raised above the equilibrium wage, firms will demand less labour while more people want to work at the higher wage. This creates an excess supply of labour, which is unemployment. Workers who lose their jobs, or whose hours are cut, could end up poorer than before. Firms may also raise their prices to cover the higher wage costs, and this cost-push inflation reduces the real value of the wage rise.',
                'A higher minimum wage also does not help everyone in poverty. People who are unemployed, retired or working in the informal sector do not receive it.',
                'Overall, a higher minimum wage is most likely to reduce poverty if the rise is small and the economy is growing, so that firms can afford it. Country Z already has an unemployment rate of 7.5%, so a large rise could increase unemployment further. It would work best alongside other policies, such as training, that help people who are not in work.',
              ],
              why: 'Both sides are developed with logical chains and accurate terms. The conclusion uses the data from the question and explains what the outcome depends on. That is Level 3.',
            },
          ],
        },
      ],
    },
    // ── 4. Trade protection ──────────────────────────────────────────────
    {
      tag: '4', short: 'Tariffs', paper: 'Paper 2 · Section B · Topic 6: International trade and globalisation', title: 'Trade protection',
      intro: 'Country Y imports most of the steel it uses. Its own steel firms say they cannot compete with cheaper imports. The government is considering a tariff on imported steel.',
      parts: [
        {
          k: '(a)', m: 2, scheme: 'a', q: 'Identify two methods of trade protection, other than a tariff.',
          ms: { lead: '1 mark for each method, up to 2:', points: ['Quota.', 'Embargo.', 'Subsidy to domestic producers.'] },
        },
        {
          k: '(b)', m: 4, scheme: 'b', q: 'Explain two reasons why a government may want to protect its steel industry.',
          ms: {
            lead: '1 mark for identifying each reason and 1 mark for explaining it. Answers may include:',
            points: [
              '<b>To protect jobs</b> (1): if steel firms close, workers in steel towns may face long-term structural unemployment (1).',
              '<b>It is a strategic industry</b> (1): steel is needed for defence and construction, so the country may not want to rely on foreign suppliers (1).',
              '<b>To protect an infant industry</b> (1): new firms need time to grow and gain economies of scale before they can compete (1).',
              '<b>To prevent dumping</b> (1): foreign firms may be selling steel below its cost of production to drive local firms out (1).',
              '<b>To improve the current account</b> (1): buying less imported steel reduces spending on imports (1).',
            ],
          },
        },
        {
          k: '(c)', m: 6, scheme: 'c', q: 'Analyse how a tariff on imported steel could affect firms in Country Y that use steel to make cars.',
          ms: {
            lead: '1 mark for each step, up to 6. Answers may include:',
            points: [
              'A tariff is a <b>tax on imports</b> (1), so the price of imported steel rises (1).',
              'Domestic steel firms face less competition, so they may also raise their prices (1).',
              'Car makers\' <b>costs of production</b> rise (1), so they may raise the price of their cars (1).',
              'Demand for their cars may fall, especially if demand is price elastic (1), so revenue and profits fall (1).',
              'Their cars become less competitive in <b>export markets</b> (1).',
              'Car makers may cut output and jobs (1).',
            ],
          },
        },
        {
          k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not a tariff on imported steel will benefit Country Y\'s economy.',
          ms: {
            groups: [
              { h: 'Why it will', tone: 'yes', points: [
                'Domestic steel firms sell more, so they keep or create <b>jobs</b> and avoid structural unemployment in steel towns.',
                'The government gains <b>tax revenue</b> from the tariff, which it could spend on public services.',
                'Fewer imports may improve the <b>current account</b> of the balance of payments.',
                'The country keeps a <b>strategic industry</b> and depends less on other countries.',
              ] },
              { h: 'Why it will not', tone: 'no', points: [
                'Firms that use steel, such as car makers and builders, face higher <b>costs</b>, so they may raise prices and cut jobs.',
                'Consumers pay <b>higher prices</b> and have less choice.',
                'Other countries may <b>retaliate</b> with tariffs on Country Y\'s exports, so export industries lose sales.',
                'Protected steel firms face less competition, so they have less <b>incentive to become efficient</b>.',
                'Resources stay in an industry where the country is not competitive, so some benefits of <b>specialisation</b> are lost.',
              ] },
              { h: 'What the answer depends on', tone: 'judge', text: 'The size of the tariff, whether other countries retaliate, and how many jobs depend on steel compared with the industries that use steel. A small, temporary tariff that gives firms time to become competitive is more likely to help than a large, permanent one.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['A tariff would help Country Y because its steel firms would sell more steel and keep their workers. The government would also get tax revenue from the tariff. However, other countries might put tariffs on Country Y\'s exports.'],
              why: 'It gives a reasoned case for the tariff, but the other side is not developed and there is no conclusion. This is one-sided, so it is Level 2.',
            },
            {
              level: 'Level 3', marks: '8 marks', strong: true,
              text: [
                'A tariff could benefit Country Y\'s economy. A tariff is a tax on imports, so imported steel becomes more expensive. Firms that use steel will buy more from domestic producers instead, so Country Y\'s steel firms will produce more and keep their workers. This avoids structural unemployment in steel towns, where workers may not have the skills for other jobs. The government also gains revenue from the tariff, and spending on imports falls, which may improve the current account.',
                'However, the tariff raises costs for firms that use steel. Car makers and construction firms will pay more for steel, so they may raise their prices. If demand for their products is price elastic, their sales will fall and they may cut jobs. More jobs may be lost in these industries than are saved in steel. Other countries may also retaliate by putting tariffs on Country Y\'s exports, which reduces export revenue.',
                'Overall, the tariff is likely to benefit the steel industry but may harm the economy as a whole. The result depends on how many workers depend on steel-using industries and on whether other countries retaliate. A small, temporary tariff that gives steel firms time to become more efficient is less risky than a permanent one.',
              ],
              why: 'Both sides are analysed in logical chains with accurate terms. The conclusion weighs the two sides and explains what the outcome depends on. That is Level 3.',
            },
          ],
        },
      ],
    },
    // ── 5. Firms and mergers ─────────────────────────────────────────────
    {
      tag: '5', short: 'Mergers', paper: 'Paper 2 · Section B · Topic 3: Microeconomic decision-makers', title: 'Mergers and the size of firms',
      intro: 'Two of the largest supermarket chains in a country plan to merge. Together they would sell about 40% of the country\'s groceries. Many small grocery shops also operate in the same towns.',
      parts: [
        {
          k: '(a)', m: 2, scheme: 'a', q: 'Define "horizontal merger".',
          ms: {
            head: 'Answer',
            points: ['When two firms join together (1)…', '…that are in the same industry and at the same stage of production (1).'],
            tip: 'Merger definitions are new to the 2027 syllabus. A <b>vertical</b> merger joins firms at different stages of production in the same industry. A <b>conglomerate</b> merger joins firms in different industries.',
          },
        },
        {
          k: '(b)', m: 4, scheme: 'b', q: 'Explain two economies of scale that the merged supermarket might gain.',
          ms: {
            lead: '1 mark for identifying each economy of scale and 1 mark for explaining it. Answers may include:',
            points: [
              '<b>Purchasing (bulk-buying) economies</b> (1): it buys very large quantities from suppliers, so it can demand lower prices, which reduces its average costs (1).',
              '<b>Marketing economies</b> (1): the cost of an advertising campaign is spread over more stores and sales, so the cost per unit falls (1).',
              '<b>Financial economies</b> (1): banks see a large firm as less risky, so it can borrow at lower interest rates (1).',
              '<b>Technical economies</b> (1): it can afford large, automated warehouses that lower the cost of handling each item (1).',
              '<b>Managerial economies</b> (1): it can employ specialist managers, for example in buying and transport, who work more efficiently (1).',
            ],
          },
        },
        {
          k: '(c)', m: 6, scheme: 'c', q: 'Analyse why small grocery shops can survive alongside large supermarkets.',
          ms: {
            lead: '1 mark for identifying each reason, up to 2, and the remaining marks for analysis. Answers may include:',
            points: [
              '<b>Convenience</b> (1): small shops are often close to people\'s homes and open long hours (1), so customers use them to buy a few items quickly without travelling (1).',
              '<b>Personal service</b> (1): owners know their customers and may offer delivery or credit (1), which builds loyalty (1).',
              '<b>Niche products</b> (1): some shops sell specialist or local goods that supermarkets do not stock (1), and the market is too small to attract large firms (1).',
              '<b>Flexibility</b> (1): small shops can quickly change what they stock to meet local demand (1).',
              '<b>Buying groups</b> (1): some small shops join groups that buy in bulk together (1), so they gain some of the cost savings of large firms (1).',
            ],
          },
        },
        {
          k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not consumers would benefit from the merger of the two supermarket chains.',
          ms: {
            groups: [
              { h: 'Why they would', tone: 'yes', points: [
                '<b>Economies of scale</b> lower average costs. If these savings are passed on, prices fall.',
                'Higher profits can pay for <b>investment</b> in new stores, online ordering and delivery.',
                'A larger firm can offer a wider <b>range</b> of products.',
              ] },
              { h: 'Why they would not', tone: 'no', points: [
                'With 40% of the market, the merged firm has more <b>market power</b>. With less competition, it may raise prices.',
                'Consumers have less <b>choice</b> of where to shop.',
                'With less pressure from rivals, it has less incentive to improve <b>quality</b> or service.',
                'It may squeeze <b>suppliers</b>, such as farmers, which could reduce the variety of products in the long run.',
                'A very large firm may suffer <b>diseconomies of scale</b>, such as poor communication, which raise average costs.',
              ] },
              { h: 'What the answer depends on', tone: 'judge', text: 'Whether the cost savings are passed on to consumers, how strong the remaining competitors are, and whether a competition authority regulates the merger. If new firms can easily enter the market, the merged firm is less able to raise prices.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['Consumers would benefit because the merged supermarket would be bigger and would get economies of scale, such as bulk-buying. This means its costs would fall and it could lower its prices. But it might become a monopoly.'],
              why: 'It analyses one benefit clearly, but the other side is one brief statement and there is no conclusion. This is one-sided, so it is Level 2. "Monopoly" is also used loosely here: the firm would have market power, but it would not be the only seller.',
            },
            {
              level: 'Level 3', marks: '8 marks', strong: true,
              text: [
                'Consumers could benefit from the merger. The merged supermarket would buy in much larger quantities, so it could gain purchasing economies of scale by negotiating lower prices from suppliers. Its marketing and transport costs would also be spread over more stores. Its average costs would fall, and if it passed these savings on, consumers would pay lower prices. Higher profits could also pay for investment in online ordering and home delivery.',
                'However, the merged firm would sell about 40% of the country\'s groceries, which gives it more market power. With one fewer large rival, it would face less competition, so it could raise prices instead of lowering them. Consumers would also have less choice, and with less pressure from rivals the firm might not improve its quality or service.',
                'Overall, whether consumers benefit depends on whether the cost savings are passed on. This is more likely if strong competitors remain, such as other supermarket chains, discount stores and online sellers, and if a competition authority sets conditions on the merger. Without this, the merger is more likely to benefit the firm\'s owners than its customers.',
              ],
              why: 'Both sides are analysed in logical chains and use the information in the question. The conclusion identifies what the outcome depends on. That is Level 3.',
            },
          ],
        },
      ],
    },
    // ── 6. Fiscal policy and growth ──────────────────────────────────────
    {
      tag: '6', short: 'Growth', paper: 'Paper 2 · Section B · Topic 4: Government and the macroeconomy', title: 'Fiscal policy and economic growth',
      intro: 'A government plans to spend more on roads, railways and ports, paid for by borrowing. Some politicians argue that a cut in income tax would do more to increase economic growth.',
      parts: [
        {
          k: '(a)', m: 2, scheme: 'a', q: 'Identify two macroeconomic aims of a government.',
          ms: { lead: '1 mark for each aim, up to 2:', points: ['Economic growth.', 'Full employment (low unemployment).', 'Stable prices (low inflation).', 'Balance of payments stability.', 'Redistribution of income.', 'Environmental sustainability.'] },
        },
        {
          k: '(b)', m: 4, scheme: 'b', q: 'Explain two reasons why a government levies taxes.',
          ms: {
            lead: '1 mark for identifying each reason and 1 mark for explaining it. Answers may include:',
            points: [
              '<b>To raise revenue</b> (1) to pay for public goods and services, such as defence, schools and hospitals (1).',
              '<b>To redistribute income</b> (1): progressive taxes take a larger share from people on high incomes, and the money can fund benefits for people on low incomes (1).',
              '<b>To discourage harmful products</b> (1): a tax on demerit goods such as cigarettes raises their price, so consumption falls (1).',
              '<b>To protect domestic industries</b> (1): tariffs make imports more expensive (1).',
              '<b>To influence the economy</b> (1): higher taxes reduce total demand, which can help to control inflation (1).',
              '<b>To encourage environmental sustainability</b> (1): a tax on carbon emissions makes polluting activities more expensive, so firms and consumers switch to cleaner alternatives (1).',
            ],
            tip: 'Reasons for taxation are covered explicitly in the 2027 syllabus.',
          },
        },
        {
          k: '(c)', m: 6, scheme: 'c', q: 'Analyse how government spending on infrastructure could increase economic growth.',
          ms: {
            lead: '1 mark for each step, up to 6. Answers may include:',
            points: [
              'Government spending is part of <b>total (aggregate) demand</b> (1).',
              'Building firms hire more workers and buy more materials (1), so incomes rise and are spent in other businesses (1).',
              'Output rises in the short run (1).',
              'In the long run, better roads, railways and ports cut journey times and transport costs for firms (1), which raises <b>productivity</b> (1).',
              'The <b>productive capacity</b> of the economy increases, which can be shown as an outward shift of the PPC (1).',
              'Better infrastructure may attract <b>investment</b>, including from multinational companies (1).',
            ],
          },
        },
        {
          k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not a cut in income tax will increase economic growth.',
          ms: {
            groups: [
              { h: 'Why it will', tone: 'yes', points: [
                'Households have more <b>disposable income</b>, so consumer spending rises. Total demand increases and firms raise output.',
                'It increases the <b>incentive to work</b>: people keep more of each extra dollar they earn, so some work longer hours.',
                'It may encourage <b>enterprise</b> and attract skilled workers from abroad.',
                'Higher saving may provide more funds for investment.',
              ] },
              { h: 'Why it will not', tone: 'no', points: [
                'If <b>confidence</b> is low, households may save the extra income instead of spending it.',
                'Some of the extra spending may go on <b>imports</b>, which raises output in other countries.',
                'If the economy is near <b>full capacity</b>, higher demand causes inflation rather than more output.',
                '<b>Tax revenue falls</b>, so the government may have to cut spending on education or infrastructure, which could reduce growth in the long run.',
                'Some workers may choose to work <b>fewer hours</b>, because they can earn the same income in less time.',
                'If it mainly helps people on high incomes, <b>income inequality</b> may increase.',
              ] },
              { h: 'What the answer depends on', tone: 'judge', text: 'The size of the tax cut, whether people spend or save the extra income, whether the economy has spare capacity, and how the cut is paid for. Compared with spending on infrastructure, a tax cut acts more quickly on demand but does less to increase productive capacity.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['A cut in income tax will increase economic growth because people will have more money to spend. Firms will sell more and produce more goods, so GDP will rise. But people might save the money instead.'],
              why: 'There is a clear chain of reasoning on one side. The other side is a single point that is not developed, and there is no conclusion. This is one-sided, so it is Level 2.',
            },
            {
              level: 'Level 3', marks: '8 marks', strong: true,
              text: [
                'A cut in income tax could increase economic growth. Households would have more disposable income, so consumer spending would rise. As consumer spending is part of total demand, firms would sell more and increase their output, so real GDP would rise. Lower income tax also increases the reward for working, so some people may work longer hours or start businesses, which increases the productive capacity of the economy.',
                'However, the tax cut may not increase growth much. If households are worried about the future, they may save the extra income instead of spending it. Some of the extra spending may go on imports, which increases output in other countries rather than at home. If the economy is already close to full capacity, the extra demand will mainly cause inflation. The government will also collect less tax, so it may have to cut spending on infrastructure or education, which could reduce growth in the long run.',
                'Overall, a cut in income tax is most likely to increase growth when there is spare capacity and consumer confidence is high. Spending on infrastructure may be more effective in the long run, because it raises productivity as well as demand. The best choice depends on whether the economy needs more demand now or more capacity in the future.',
              ],
              why: 'Both sides are analysed in logical chains with accurate terms. The conclusion compares the tax cut with the policy in the question and explains what the outcome depends on. That is Level 3.',
            },
          ],
        },
      ],
    },
    // ── 7. Poverty and development ───────────────────────────────────────
    {
      tag: '7', short: 'Poverty', paper: 'Paper 2 · Section B · Topic 5: Economic development', title: 'Poverty and development',
      intro: 'In a low-income country, many people live in absolute poverty. Life expectancy is low, and many families cannot afford to see a doctor. The government is deciding whether to spend more on healthcare or on education.',
      parts: [
        {
          k: '(a)', m: 2, scheme: 'a', q: 'Define "absolute poverty".',
          ms: {
            head: 'Answer',
            points: ['When a person\'s income is too low (1)…', '…to meet basic needs, such as food, clean water, shelter and clothing (1).'],
            tip: 'Compare <b>relative poverty</b>: when income is well below the average income in a country.',
          },
        },
        {
          k: '(b)', m: 4, scheme: 'b', q: 'Explain two causes of poverty in a low-income country.',
          ms: {
            lead: '1 mark for identifying each cause and 1 mark for explaining it. Answers may include:',
            points: [
              '<b>Unemployment and underemployment</b> (1): people without regular work have little or no income (1).',
              '<b>Low productivity</b> (1): workers with few skills or poor equipment produce little, so wages are low (1).',
              '<b>Poor health</b> (1): illness stops people from working, and medical costs use up savings (1).',
              '<b>Lack of education</b> (1): people without qualifications cannot get better-paid jobs (1).',
              '<b>Large families</b> (1): income must be shared among more dependants (1).',
              '<b>Conflict or natural disasters</b> (1): these destroy homes, farms and businesses (1).',
            ],
          },
        },
        {
          k: '(c)', m: 6, scheme: 'c', q: 'Analyse how improving education could reduce poverty.',
          ms: {
            lead: '1 mark for each step, up to 6. Answers may include:',
            points: [
              'More education and training increase workers\' <b>skills</b> (1).',
              'Skilled workers are more <b>productive</b> (1), so firms are willing to pay them higher wages (1).',
              'Workers can move into better-paid jobs, so <b>occupational mobility</b> rises (1).',
              'With higher incomes, households can afford basic needs (1), so <b>absolute poverty</b> falls (1).',
              'Educated parents tend to have smaller families (1), so income is shared among fewer dependants (1).',
              'A more skilled workforce attracts investment, which creates more jobs (1).',
            ],
          },
        },
        {
          k: '(d)', m: 8, scheme: 'd', q: 'Discuss whether or not improving healthcare is the best way to reduce poverty in a low-income country.',
          ms: {
            groups: [
              { h: 'Why it is', tone: 'yes', points: [
                'Healthier workers miss fewer days of work and are more <b>productive</b>, so they earn more.',
                'Families spend less of their income on <b>medical costs</b>, which leaves more for food and housing.',
                'Healthy children attend school more often, which improves <b>education</b> as well.',
                'Lower <b>infant mortality</b> means families may choose to have fewer children, so income is shared among fewer people.',
              ] },
              { h: 'Why it is not', tone: 'no', points: [
                '<b>Opportunity cost</b>: the money could be spent on education, infrastructure or job creation, which may raise incomes more.',
                'Better health does not create <b>jobs</b>. Without work, healthier people can still be poor.',
                'It takes time to train doctors and nurses and to build hospitals, so the benefits may be slow.',
                'If spending is badly managed (<b>government failure</b>), little of it may reach poor households.',
                'Longer life expectancy may increase the population and the number of <b>dependants</b>.',
              ] },
              { h: 'What the answer depends on', tone: 'judge', text: 'The main causes of poverty in the country. Where disease keeps many adults out of work, healthcare may be the best first step. In most cases it works best alongside education and job creation, because each one makes the others more effective.' },
            ],
            tip: 'Improved healthcare provision is new to the list of anti-poverty policies in the 2027 syllabus. "Best" means you must compare it with at least one other policy.',
          },
          answers: [
            {
              level: 'Level 2', marks: '4 marks',
              text: ['Improving healthcare will reduce poverty because healthy people can work more and earn more money. Also, they will not need to pay so much for medicine. However, education is also important.'],
              why: 'It explains how healthcare could reduce poverty, but the other side is only named, not analysed. There is no conclusion about whether healthcare is the best way. This is one-sided, so it is Level 2.',
            },
            {
              level: 'Level 3', marks: '8 marks', strong: true,
              text: [
                'Improving healthcare could reduce poverty. In a low-income country, illnesses such as malaria stop many adults from working, so households lose income. Better healthcare means workers miss fewer days and are more productive, so their incomes rise. Families also spend less on medicine, so more of their income is left for food and housing. Healthier children attend school more often, which raises their future earnings.',
                'However, healthcare may not be the best way to reduce poverty. The money has an opportunity cost. It could be spent on education instead, which raises workers\' skills and productivity and allows them to move into better-paid jobs. Better health also does not create jobs, so if unemployment is high, healthier people may still have no income. In addition, building hospitals and training doctors takes many years, and if the money is badly managed, little of it may reach the poorest households.',
                'Overall, whether healthcare is the best way depends on the main cause of poverty. If disease is keeping many people out of work, healthcare should come first. If the main problem is a lack of skills or jobs, education and job creation may have a bigger effect. In practice the policies support each other, so a mix is likely to be most effective.',
              ],
              why: 'Both sides are analysed in logical chains, and the answer deals with the word "best" by comparing healthcare with another policy. The conclusion explains what the outcome depends on. That is Level 3.',
            },
          ],
        },
      ],
    },
  ],
};
