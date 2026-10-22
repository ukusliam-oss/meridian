// Written practice for History 0470 Paper 1 (Option B Core content and depth study B, Germany).
// Part marks and level descriptors follow the published 0470 Paper 1 mark scheme (June 2025); the
// 2027–2028 syllabus gives only the (a)/(b)/(c) structure. Questions and answers are our own wording.
export default {
  id: 'history',
  head: 'Paper 1 practice: structured questions',
  lede: 'Eight sets of Paper 1 questions on the Option B key questions and depth study B (Germany). Each set has a 4-mark (a), a 6-mark (b) and a 10-mark (c), with a mark scheme for every part and two example answers for part (c).',
  how: 'Choose a set. Write your answer on paper, or plan it in your head, then open the mark scheme for each part. The times are a guide based on the marks. Nothing here is saved.',
  source: `<p><b>Marks per part.</b> The 2027–2028 syllabus says that each Paper 1 question has three parts, (a), (b) and (c), but it does not give the marks for each part. The 4, 6 and 10 marks used here come from the published 0470 Paper 1 mark scheme for June 2025. The syllabus states that there are no significant changes for 2027.</p>
    <p><b>Level descriptors</b> are paraphrased from the same June 2025 mark scheme. The 2027 specimen mark scheme was not available to check.</p>
    <p><b>Questions, indicative content and example answers</b> are our own. They were not written by Cambridge. Use your teacher's marking as the final guide.</p>`,
  schemes: {
    a: { mins: 6, how: '<b>Point-marked.</b> One mark for each relevant, accurate point, up to 4. You do not need to explain.' },
    b: {
      mins: 11, how: '<b>Marked in levels.</b> The examiner decides the level first, then the mark within it.',
      levels: [
        { l: 4, d: 'Explains two reasons.', m: '6' },
        { l: 3, d: 'Explains one reason. 4 marks, or 5 if the explanation is supported by specific detail.', m: '4–5' },
        { l: 2, d: 'Identifies or describes reasons but does not explain them. One mark for each.', m: '2–3' },
        { l: 1, d: 'Writes about the topic but does not answer the question.', m: '1' },
        { l: 0, d: 'Nothing creditable.', m: '0' },
      ],
    },
    c: {
      mins: 20, how: '<b>Marked in levels.</b> To reach Level 4 you must explain at least one point on each side. Level 5 also needs a judgement on "how far" that is supported.',
      levels: [
        { l: 5, d: 'Explains both sides and supports a judgement on "how far".', m: '10' },
        { l: 4, d: 'Explains both sides. 7 marks for one explanation on each side, plus 1 for each further explanation.', m: '7–9' },
        { l: 3, d: 'Explains one side only. One mark for each explanation.', m: '4–6' },
        { l: 2, d: 'Identifies or describes valid points but does not explain them. One mark for each.', m: '2–3' },
        { l: 1, d: 'Writes about the topic but does not answer the question.', m: '1' },
        { l: 0, d: 'Nothing creditable.', m: '0' },
      ],
    },
  },
  sets: [
    // ── KQ1 ──────────────────────────────────────────────────────────────
    {
      tag: 'KQ1', short: 'Versailles', paper: 'Paper 1 · Section A · Option B key question 1', title: 'The Treaty of Versailles',
      parts: [
        {
          k: '(a)', m: 4, scheme: 'a', q: 'Describe the territory that Germany lost under the Treaty of Versailles.',
          ms: {
            lead: 'One mark for each relevant point. Answers may include:',
            points: [
              '<b>Alsace-Lorraine</b> was returned to France.',
              '<b>West Prussia and Posen</b> went to Poland. This created the <b>Polish Corridor</b>, which cut East Prussia off from the rest of Germany.',
              '<b>Danzig</b> became a free city run by the League of Nations.',
              'The <b>Saar</b> was run by the League for 15 years, and France took the coal from its mines.',
              '<b>Eupen and Malmedy</b> went to Belgium, and <b>North Schleswig</b> went to Denmark after a plebiscite.',
              'Part of <b>Upper Silesia</b> went to Poland after a plebiscite in 1921.',
              'Germany lost all its <b>overseas colonies</b>. They became mandates run by League members such as Britain and France.',
              'In total, Germany lost about 13% of its land in Europe.',
            ],
            tip: 'Four separate, accurate points are enough. Naming places scores more reliably than general statements such as "Germany lost a lot of land".',
          },
        },
        {
          k: '(b)', m: 6, scheme: 'b', q: 'Why did Clemenceau want a harsh peace treaty?',
          ms: {
            groups: [
              { h: 'Reasons that can be explained (Levels 3 and 4)', points: [
                '<b>Damage to France</b>: much of the fighting on the Western Front took place in northern France. Towns, farmland, mines and factories were destroyed, so Clemenceau wanted Germany to pay to rebuild them.',
                '<b>Loss of life</b>: over a million French soldiers were killed. French voters wanted Germany punished, and Clemenceau needed to satisfy them.',
                '<b>Security</b>: Germany had invaded France in 1870 and again in 1914. Clemenceau wanted Germany too weak to attack again, which is why he wanted a small German army and a demilitarised Rhineland.',
                '<b>Revenge for 1871</b>: France had lost Alsace-Lorraine to Germany in 1871 and wanted it back.',
              ] },
              { h: 'Points that only identify a reason (Level 2)', points: ['France had been invaded.', 'He wanted revenge.', 'He wanted reparations.'] },
            ],
            tip: 'Two fully explained reasons earn all 6 marks. A third reason does not add marks once two are explained.',
          },
        },
        {
          k: '(c)', m: 10, scheme: 'c', q: '"The Treaty of Versailles was the main cause of Germany\'s problems between 1919 and 1923." How far do you agree with this statement? Explain your answer.',
          ms: {
            groups: [
              { h: 'Agree: the treaty caused the problems', tone: 'yes', points: [
                '<b>Reparations</b> were set at £6.6 billion in 1921. When Germany fell behind with payments, France and Belgium occupied the <b>Ruhr</b> in January 1923. Workers went on strike, the government printed money to pay them, and this led to <b>hyperinflation</b>.',
                'The <b>military terms</b> cut the army to 100,000 men. When the government tried to disband Freikorps units, some of them joined the <b>Kapp Putsch</b> in Berlin in 1920.',
                'Many Germans saw the treaty as a <b>"Diktat"</b> and hated the politicians who signed it. Nationalists called them the "November criminals", and extremists murdered Erzberger (1921) and Rathenau (1922).',
              ] },
              { h: 'Disagree: other causes', tone: 'no', points: [
                '<b>The war itself</b>: Germany paid for the war mainly by borrowing and printing money, so prices were already rising before the treaty was signed.',
                '<b>Defeat and revolution</b>: the Kaiser abdicated in November 1918. The <b>Spartacist Rising</b> in January 1919 happened before the treaty was signed in June 1919.',
                '<b>The Weimar Constitution</b>: proportional representation led to weak coalition governments, and Article 48 allowed rule by decree.',
                '<b>Government decisions</b>: in 1923 the government chose to print money to support the strikers in the Ruhr.',
              ] },
              { h: 'A possible judgement', tone: 'judge', text: 'The treaty was the most important cause because it turned existing problems into crises. Inflation and political violence began with defeat in 1918, but reparations led directly to the Ruhr occupation and hyperinflation in 1923, and the "Diktat" gave extremists a reason to attack the Republic.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['I agree that the treaty caused Germany\'s problems. Germany had to pay £6.6 billion in reparations. The army was cut to 100,000 men. In 1923 France and Belgium occupied the Ruhr and there was hyperinflation. However, there was also the Spartacist Rising in 1919.'],
              why: 'It describes accurate points on both sides, but it never explains how the treaty caused each problem. Identifying points keeps it in Level 2, and there is no judgement.',
            },
            {
              level: 'Level 5', marks: '10 marks', strong: true,
              text: [
                'The treaty did cause many of Germany\'s problems. Reparations were set at £6.6 billion in 1921, and when Germany fell behind with its payments, France and Belgium occupied the Ruhr in January 1923. German workers went on strike, so the government printed money to pay them. Prices rose so fast that money became worthless and people\'s savings were wiped out. Without the dispute over reparations, the Ruhr crisis would not have happened.',
                'The treaty also caused political violence. Many Germans saw it as a "Diktat" and blamed the politicians who signed it. Nationalists called them the "November criminals", and extremists murdered Erzberger in 1921 and Rathenau in 1922. This weakened support for the Republic.',
                'However, some problems began before the treaty. Germany had paid for the war by borrowing and printing money, so prices were already rising in 1918. Defeat and revolution also caused unrest. The Spartacists tried to seize power in January 1919, five months before the treaty was signed, because they wanted a communist revolution like the one in Russia.',
                'Overall, I mostly agree. The war and defeat created the problems, but the treaty made them much worse. The crisis of 1923, the worst of the period, followed directly from the dispute over reparations, so the treaty was the main cause.',
              ],
              why: 'It explains two ways in which the treaty caused problems and one cause that came before it, each with specific detail. The last paragraph weighs the two sides and says why the treaty mattered most. That is a supported judgement, so it reaches Level 5.',
            },
          ],
        },
      ],
    },
    // ── KQ2 ──────────────────────────────────────────────────────────────
    {
      tag: 'KQ2', short: 'League', paper: 'Paper 1 · Section A · Option B key question 2', title: 'The League of Nations',
      parts: [
        {
          k: '(a)', m: 4, scheme: 'a', q: 'Describe the humanitarian work of the League of Nations.',
          ms: {
            lead: 'One mark for each relevant point. Answers may include:',
            points: [
              'The League\'s commission led by <b>Fridtjof Nansen</b> helped about 400,000 prisoners of war to return home after the First World War.',
              'It introduced the <b>Nansen passport</b> (1922), an identity document for refugees who had no country.',
              'It helped to house and resettle <b>refugees</b>, for example in Greece after the war between Greece and Turkey.',
              'The <b>Health Organisation</b> worked to fight diseases such as leprosy and malaria.',
              'The <b>International Labour Organization (ILO)</b> worked to improve conditions at work, for example by limiting working hours and the use of poisonous white lead paint.',
              'The <b>Slavery Commission</b> worked to end slavery, for example in Sierra Leone.',
              'It took action against the trade in illegal drugs.',
            ],
          },
        },
        {
          k: '(b)', m: 6, scheme: 'b', q: 'Why did the League of Nations fail to stop Italy\'s invasion of Abyssinia?',
          ms: {
            groups: [
              { h: 'Reasons that can be explained (Levels 3 and 4)', points: [
                '<b>Weak sanctions</b>: the League banned arms sales and loans to Italy, but not oil, which Italy needed most to fight the war.',
                '<b>The Suez Canal stayed open</b>: Britain did not close it, so Italy could still send troops and supplies to East Africa.',
                '<b>Britain and France put their own interests first</b>: they wanted Mussolini as an ally against Hitler. In December 1935 the Hoare–Laval Plan offered Italy much of Abyssinia. When it was leaked, the League lost its credibility.',
                '<b>Hitler</b>: in March 1936 Germany remilitarised the Rhineland, which turned Britain and France\'s attention away from Abyssinia.',
                '<b>No USA</b>: the USA was not a member, so it could keep trading with Italy and sanctions were less effective.',
              ] },
              { h: 'Points that only identify a reason (Level 2)', points: ['Sanctions did not include oil.', 'The Hoare–Laval Pact.', 'Britain and France were weak.'] },
            ],
          },
        },
        {
          k: '(c)', m: 10, scheme: 'c', q: '"The League of Nations was successful in the 1920s." How far do you agree with this statement? Explain your answer.',
          ms: {
            groups: [
              { h: 'Agree: successes', tone: 'yes', points: [
                '<b>Aaland Islands (1921)</b>: Sweden and Finland both claimed the islands. The League gave them to Finland, and Sweden accepted the decision.',
                '<b>Bulgaria (1925)</b>: after Greece invaded Bulgaria, the League ordered Greece to withdraw. Greece obeyed and paid compensation.',
                '<b>Humanitarian work</b>: the League returned about 400,000 prisoners of war, helped refugees and fought diseases.',
                'Germany joined the League in 1926, which suggested that the League was becoming widely accepted.',
              ] },
              { h: 'Disagree: failures and limits', tone: 'no', points: [
                '<b>Vilna (1920)</b>: Poland seized Vilna, the capital of Lithuania. The League did not make Poland leave.',
                '<b>Corfu (1923)</b>: Mussolini occupied Corfu after an Italian general was murdered in Greece. The Conference of Ambassadors made Greece pay compensation, so a great power got its way.',
                'Its successes involved small states. When a great power such as Italy was involved, the League backed down.',
                'The most important agreements of the 1920s, the Locarno Treaties (1925) and the Kellogg–Briand Pact (1928), were made outside the League.',
                'Disarmament made little progress.',
              ] },
              { h: 'A possible judgement', tone: 'judge', text: 'The League was successful in the 1920s, but only in a limited way. It settled disputes between small states and did valuable humanitarian work. It failed when a great power was involved, as in Corfu. This showed that its success depended on the great powers, a weakness that the crises of the 1930s exposed.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['The League was successful in the Aaland Islands and in Bulgaria. It also helped prisoners of war to get home. But it failed in Corfu and in Vilna. So it was partly successful.'],
              why: 'It names relevant disputes on both sides, but it does not explain why any of them was a success or a failure. "Partly successful" is not supported, so it is not a judgement. It stays in Level 2.',
            },
            {
              level: 'Level 5', marks: '10 marks', strong: true,
              text: [
                'In some ways the League was successful in the 1920s. In 1921 Sweden and Finland both claimed the Aaland Islands. The League investigated and gave them to Finland, and Sweden accepted this without fighting. In 1925, when Greece invaded Bulgaria, the League ordered Greece to withdraw and pay compensation, and Greece obeyed. These cases show that the League could stop small disputes from turning into wars.',
                'However, the League failed when a powerful country was involved. In 1923 Mussolini occupied the Greek island of Corfu after an Italian general was murdered in Greece. Greece appealed to the League, but the decision was passed to the Conference of Ambassadors, which made Greece pay compensation. Mussolini had used force and been rewarded, which showed that a great power could ignore the League.',
                'Overall, the League was only partly successful. Its successes involved small countries that were willing to accept its decisions. Corfu shows that it could not control a great power, and this was the same weakness that led to its failures over Manchuria and Abyssinia in the 1930s.',
              ],
              why: 'Each side is explained with a specific example, and the answer shows how each one supports or challenges the statement. The conclusion explains why the successes were limited, so it is a supported judgement (Level 5).',
            },
          ],
        },
      ],
    },
    // ── KQ3 ──────────────────────────────────────────────────────────────
    {
      tag: 'KQ3', short: 'Road to war', paper: 'Paper 1 · Section A · Option B key question 3', title: 'Hitler\'s foreign policy and appeasement',
      parts: [
        {
          k: '(a)', m: 4, scheme: 'a', q: 'Describe how Germany achieved Anschluss with Austria in 1938.',
          ms: {
            lead: 'One mark for each relevant point. Answers may include:',
            points: [
              'In February 1938 Hitler forced the Austrian Chancellor, <b>Schuschnigg</b>, to appoint the Austrian Nazi <b>Seyss-Inquart</b> as Minister of the Interior.',
              'Schuschnigg announced a <b>plebiscite</b> on whether Austria should stay independent.',
              'Hitler threatened to invade, and Schuschnigg resigned.',
              'German troops entered Austria on <b>12 March 1938</b> and met no resistance.',
              'A plebiscite held under Nazi control in April 1938 showed <b>99.7%</b> in favour of union.',
              'Britain and France protested but took no action, even though the Treaty of Versailles had forbidden Anschluss.',
            ],
          },
        },
        {
          k: '(b)', m: 6, scheme: 'b', q: 'Why did Britain follow a policy of appeasement towards Hitler?',
          ms: {
            groups: [
              { h: 'Reasons that can be explained (Levels 3 and 4)', points: [
                '<b>Fear of another war</b>: memories of the First World War made the British public strongly against war. Chamberlain believed people would not support a war unless every other option had been tried.',
                '<b>Britain was not ready</b>: its armed forces were not prepared for a major war in the mid-1930s. Appeasement could give time to rearm.',
                '<b>Sympathy for Germany</b>: many British people thought the Treaty of Versailles had been too harsh, so some of Hitler\'s demands, such as the Rhineland, seemed reasonable.',
                '<b>Fear of communism</b>: some politicians saw a strong Germany as a barrier against the USSR.',
                '<b>Economic problems</b>: after the Depression, Britain could not easily afford large military spending.',
                '<b>No reliable allies</b>: the USA was isolationist and France was divided, so Britain did not want to act alone.',
              ] },
              { h: 'Points that only identify a reason (Level 2)', points: ['People did not want another war.', 'Britain needed time to rearm.', 'The Treaty of Versailles was unfair.'] },
            ],
          },
        },
        {
          k: '(c)', m: 10, scheme: 'c', q: '"The policy of appeasement was justified." How far do you agree with this statement? Explain your answer.',
          ms: {
            groups: [
              { h: 'Agree: appeasement was justified', tone: 'yes', points: [
                'It <b>bought time</b>: between 1938 and 1939 Britain built many more fighter planes, such as Hurricanes and Spitfires, and extended its radar stations.',
                '<b>Public opinion</b> in 1938 did not support war. After Hitler broke the Munich Agreement in March 1939, Britain went to war united.',
                'The <b>dominions</b>, such as Canada and South Africa, were reluctant to fight over Czechoslovakia in 1938.',
                'Many people thought Hitler\'s early demands were <b>reasonable</b>, because the Treaty of Versailles had been harsh.',
              ] },
              { h: 'Disagree: appeasement was a mistake', tone: 'no', points: [
                'It <b>encouraged Hitler</b>: each success, from the Rhineland in 1936 to Anschluss and the Sudetenland in 1938, made him more confident.',
                'It <b>betrayed Czechoslovakia</b>, which had a strong army and border defences in the Sudetenland. These were lost without a fight.',
                'It <b>alienated the USSR</b>: Stalin was not invited to Munich, which helped lead to the Nazi–Soviet Pact in August 1939.',
                'Germany also used the extra time to <b>rearm</b>, so Britain did not close the gap.',
                'Hitler could probably have been stopped earlier, for example in the Rhineland in 1936, when the German army was still weak.',
              ] },
              { h: 'A possible judgement', tone: 'judge', text: 'Appeasement can be defended in 1938, when Britain was not ready for war and the public did not want one. It is much harder to defend in 1936, when Germany was weak. By giving way at Munich, Britain lost Czechoslovakia as an ally and pushed Stalin towards Hitler, so the policy failed in its main aim of preventing war.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['Appeasement was justified because Britain needed time to rearm and people did not want another war. But it was not justified because it encouraged Hitler and he took the Sudetenland. Also, Stalin was not invited to Munich.'],
              why: 'It identifies valid reasons on both sides, but it does not explain how any of them made appeasement right or wrong. It stays in Level 2.',
            },
            {
              level: 'Level 5', marks: '10 marks', strong: true,
              text: [
                'Appeasement was justified in some ways. In 1938 Britain was not ready for war. Its air force had too few modern fighters, and its radar stations were not complete. By the time war began in September 1939, Britain had many more Hurricanes and Spitfires. These planes helped Britain to win the Battle of Britain in 1940, so the year gained at Munich was valuable.',
                'However, appeasement encouraged Hitler. When Britain and France did nothing about the Rhineland in 1936 or Anschluss in 1938, Hitler concluded that they would not fight. At Munich he gained the Sudetenland and its strong border defences without a war. Six months later he took the rest of Czechoslovakia. Appeasement made him more ambitious, not less.',
                'Appeasement also pushed the USSR towards Germany. Stalin was not invited to Munich, so he decided that Britain and France could not be trusted. In August 1939 he signed the Nazi–Soviet Pact, which allowed Hitler to invade Poland without fighting on two fronts.',
                'Overall, appeasement was not justified. Britain did gain time to rearm, but Germany rearmed during the same period, and Britain lost the support of Czechoslovakia and the USSR. The policy failed in its main aim, which was to prevent war.',
              ],
              why: 'It explains one argument for appeasement and two against it, each with precise detail. The conclusion compares them and explains why the arguments against are stronger. That is a supported judgement (Level 5).',
            },
          ],
        },
      ],
    },
    // ── KQ4 ──────────────────────────────────────────────────────────────
    {
      tag: 'KQ4', short: 'Cold War', paper: 'Paper 1 · Section A · Option B key question 4', title: 'The origins of the Cold War',
      parts: [
        {
          k: '(a)', m: 4, scheme: 'a', q: 'Describe what was agreed at the Yalta Conference in February 1945.',
          ms: {
            lead: 'One mark for each relevant point. Answers may include:',
            points: [
              'Germany would be divided into <b>four zones</b> of occupation, run by the USA, Britain, France and the USSR. Berlin would also be divided.',
              '<b>Free elections</b> would be held in the countries of Eastern Europe that had been freed from Nazi rule.',
              '<b>Poland</b> would lose land in the east to the USSR and gain land from Germany in the west.',
              'The Polish government would include <b>non-communists</b> as well as communists.',
              'The USSR would join the <b>war against Japan</b> three months after Germany\'s defeat.',
              'The <b>United Nations</b> would be set up to keep the peace.',
              'Nazi war criminals would be put on trial.',
            ],
          },
        },
        {
          k: '(b)', m: 6, scheme: 'b', q: 'Why did Stalin blockade West Berlin in June 1948?',
          ms: {
            groups: [
              { h: 'Reasons that can be explained (Levels 3 and 4)', points: [
                '<b>The new currency</b>: in June 1948 the western Allies introduced the Deutschmark in their zones without agreeing it with the USSR. Stalin feared it would damage the economy of the Soviet zone.',
                '<b>A strong West Germany</b>: Britain and the USA had merged their zones in 1947, and France was joining them. Stalin feared that a rebuilt Germany could threaten the USSR again.',
                '<b>The Marshall Plan</b>: American money was helping western Germany to recover, while the Soviet zone stayed poor. West Berlin showed East Germans how much richer the West was.',
                '<b>Forcing the West out</b>: West Berlin was about 160 km inside the Soviet zone. Stalin hoped that cutting road, rail and canal links would make the western Allies give up the city.',
                '<b>Testing the USA</b>: it tested whether the USA would really defend Western Europe, as the Truman Doctrine suggested.',
              ] },
              { h: 'Points that only identify a reason (Level 2)', points: ['There was a new currency.', 'He wanted all of Berlin.', 'He was angry about the Marshall Plan.'] },
            ],
          },
        },
        {
          k: '(c)', m: 10, scheme: 'c', q: '"The USSR was more to blame than the USA for starting the Cold War." How far do you agree with this statement? Explain your answer.',
          ms: {
            groups: [
              { h: 'Agree: the USSR was more to blame', tone: 'yes', points: [
                '<b>Broken promises</b>: at Yalta, Stalin agreed to free elections in Eastern Europe. Instead, communists took power using "salami tactics". The Polish election of 1947 was rigged.',
                '<b>Czechoslovakia (1948)</b>: the communist takeover removed the last democratic government in Eastern Europe.',
                '<b>The Berlin Blockade (1948–49)</b>: Stalin tried to force the West out of West Berlin by cutting off its supplies. This was the first major crisis of the Cold War.',
                '<b>Ideology</b>: the West believed that Stalin wanted to spread communism across Europe.',
              ] },
              { h: 'Disagree: the USA was to blame, or both were', tone: 'no', points: [
                '<b>Truman\'s attitude</b>: he took a tougher line than Roosevelt at Potsdam, and the USA had the atomic bomb, which made Stalin feel threatened.',
                '<b>The Truman Doctrine and the Marshall Plan (1947)</b> divided Europe into two camps. The USSR saw the Marshall Plan as "dollar imperialism".',
                '<b>Soviet fears</b>: Russia had been invaded from the west in 1914 and 1941, and the USSR lost over 20 million people in the Second World War. Control of Eastern Europe can be seen as a defensive buffer zone.',
                '<b>Mutual suspicion</b>: each side saw the other\'s actions as aggressive, so both share the blame.',
              ] },
              { h: 'A possible judgement', tone: 'judge', text: 'Both sides contributed, but the USSR was more to blame for starting the Cold War. Stalin\'s fears were real, but breaking the Yalta promise of free elections turned a buffer zone into a system of control. The American policies of 1947 were mainly a reaction to this, although they made the division of Europe deeper.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['The USSR was to blame because Stalin took over Eastern Europe and started the Berlin Blockade. But the USA was also to blame because of the Marshall Plan and the atomic bomb. Both sides were to blame.'],
              why: 'It identifies actions by both sides but does not explain how any of them caused the Cold War. "Both sides were to blame" is a statement, not a supported judgement. It stays in Level 2.',
            },
            {
              level: 'Level 5', marks: '10 marks', strong: true,
              text: [
                'There is a strong case that the USSR was more to blame. At Yalta in February 1945, Stalin agreed that there would be free elections in Eastern Europe. Instead, communist parties backed by the Red Army removed their opponents one group at a time. In Poland the 1947 election was rigged, and in 1948 the communists took full control of Czechoslovakia. By 1946 Churchill was already warning that an "iron curtain" had come down across Europe.',
                'On the other hand, the USA also increased tension. Truman trusted Stalin far less than Roosevelt had, and at Potsdam he told Stalin about a powerful new weapon. The atomic bomb gave the USA an advantage that worried Stalin. Then, in 1947, the Truman Doctrine and the Marshall Plan divided Europe into two blocs. The USSR saw the Marshall Plan as an attempt to bring Europe under American control and kept Eastern Europe out of it.',
                'Stalin\'s actions can also be seen as defensive. The USSR had been invaded through Eastern Europe twice in 30 years and had lost over 20 million people in the war. A buffer zone of friendly states seemed essential for its security.',
                'Overall, I agree that the USSR was more to blame. Its fears were understandable, but breaking the promise of free elections came first, and the American policies of 1947 were mainly a response to it. The USA made the division deeper, but the USSR started it.',
              ],
              why: 'It explains the case against the USSR and the case against the USA with accurate dates and examples, and it recognises Soviet motives. The conclusion explains why one side is more to blame, based on the order of events. That is a supported judgement (Level 5).',
            },
          ],
        },
      ],
    },
    // ── KQ5 ──────────────────────────────────────────────────────────────
    {
      tag: 'KQ5', short: 'Containment', paper: 'Paper 1 · Section A · Option B key question 5', title: 'Containment in Korea and Vietnam',
      parts: [
        {
          k: '(a)', m: 4, scheme: 'a', q: 'Describe the tactics used by the Viet Cong against American forces in Vietnam.',
          ms: {
            lead: 'One mark for each relevant point. Answers may include:',
            points: [
              '<b>Guerrilla warfare</b>: small groups attacked suddenly, then disappeared into the jungle or villages.',
              '<b>Booby traps</b>, such as punji stakes and hidden mines, killed and injured many US soldiers.',
              '<b>Tunnels</b>, such as those at Cu Chi, were used to hide, store supplies and move without being seen.',
              'They <b>blended in with civilians</b>, so US troops could not tell who was an enemy.',
              'They fought very close to US troops ("<b>hugging</b>"), so the Americans could not use air strikes or artillery without hitting their own men.',
              'Supplies came from North Vietnam along the <b>Ho Chi Minh Trail</b>.',
              'They tried to win the <b>support of peasants</b>, for example by helping them on the land.',
            ],
          },
        },
        {
          k: '(b)', m: 6, scheme: 'b', q: 'Why did the USA withdraw its forces from Vietnam?',
          ms: {
            groups: [
              { h: 'Reasons that can be explained (Levels 3 and 4)', points: [
                '<b>The Tet Offensive (1968)</b>: Viet Cong attacks on over 100 towns and cities, including the US embassy in Saigon, showed Americans that the war was far from being won.',
                '<b>Casualties</b>: by the end of the war over 58,000 Americans had died. Each year of fighting added to the death toll and turned more people against the war.',
                '<b>Protest at home</b>: anti-war protests grew, especially among students. In 1970 four students were shot dead by the National Guard at Kent State University.',
                '<b>The media</b>: television brought the war into American homes, and the news of the My Lai massacre, reported in 1969, shocked the public.',
                '<b>Cost</b>: the war cost billions of dollars a year, money that President Johnson had wanted to spend on social programmes at home.',
                '<b>Nixon\'s policy</b>: Nixon was elected in 1968 promising to end the war. Through Vietnamisation, South Vietnamese forces took over the fighting, and US forces left after the Paris Peace Accords in January 1973.',
              ] },
              { h: 'Points that only identify a reason (Level 2)', points: ['Too many soldiers were dying.', 'People protested.', 'The Tet Offensive.'] },
            ],
          },
        },
        {
          k: '(c)', m: 10, scheme: 'c', q: '"The Korean War was a success for the USA\'s policy of containment." How far do you agree with this statement? Explain your answer.',
          ms: {
            groups: [
              { h: 'Agree: a success', tone: 'yes', points: [
                '<b>The main aim was achieved</b>: North Korea\'s invasion of June 1950 was reversed, and South Korea stayed non-communist.',
                'The USA acted through the <b>UN</b>, because the USSR was boycotting the Security Council. This gave its action international support.',
                'It showed that the USA would <b>fight</b> to stop the spread of communism, which strengthened its alliances in Asia.',
                'The <b>Inchon landings</b> (September 1950) pushed North Korean forces out of the South within weeks.',
              ] },
              { h: 'Disagree: limits and costs', tone: 'no', points: [
                'MacArthur advanced towards the <b>Yalu River</b>, which brought China into the war in October 1950. UN forces were pushed back and lost Seoul again in January 1951.',
                'The attempt to <b>unite Korea</b> under a non-communist government failed. Korea stayed divided near the 38th parallel.',
                '<b>The cost</b> was very high: about 36,000 American deaths and millions of Korean deaths, for a border almost the same as in 1950.',
                '<b>Stalemate</b>: from 1951 to 1953 there was little movement while peace talks dragged on.',
              ] },
              { h: 'A possible judgement', tone: 'judge', text: 'Korea was a success for containment but a failure for anything more ambitious. South Korea was saved, which was what containment meant. The attempt to roll back communism in the North brought China into the war and turned a quick victory into a costly stalemate.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['The Korean War was a success because South Korea did not become communist and the UN helped the USA. But it was not a success because China joined the war and the border stayed at the 38th parallel.'],
              why: 'It identifies relevant points on both sides but does not explain how any of them shows success or failure for containment. It stays in Level 2.',
            },
            {
              level: 'Level 5', marks: '10 marks', strong: true,
              text: [
                'The Korean War was a success for containment in its main aim. When North Korea invaded in June 1950, it captured most of the South. The USA persuaded the UN to act while the USSR was boycotting the Security Council. After the Inchon landings in September 1950, UN forces drove the North Koreans back across the 38th parallel. When the armistice was signed in 1953, South Korea was still non-communist, which was exactly what containment set out to achieve.',
                'However, the war also showed the limits of US policy. MacArthur did not stop at the 38th parallel but advanced towards the Yalu River and the Chinese border. In October 1950 China sent large numbers of troops into Korea, and the UN forces were pushed back past Seoul. The war became a stalemate that lasted two more years and cost about 36,000 American lives.',
                'Overall, the war was a limited success. Containment means stopping communism from spreading, and South Korea was saved. The failure came from going beyond containment and trying to unite Korea by force. The war was a success for containment, but a failure for the attempt to roll back communism.',
              ],
              why: 'Both sides are explained with accurate detail. The conclusion uses a clear definition of containment to decide how far the statement is true, which is a supported judgement (Level 5).',
            },
          ],
        },
      ],
    },
    // ── KQ6 ──────────────────────────────────────────────────────────────
    {
      tag: 'KQ6', short: 'Eastern Europe', paper: 'Paper 1 · Section A · Option B key question 6', title: 'Soviet control over Eastern Europe',
      parts: [
        {
          k: '(a)', m: 4, scheme: 'a', q: 'Describe the events of the Hungarian Rising in 1956.',
          ms: {
            lead: 'One mark for each relevant point. Answers may include:',
            points: [
              'In October 1956 students and workers in <b>Budapest</b> demonstrated against Soviet control, and a statue of Stalin was pulled down.',
              '<b>Imre Nagy</b> became Prime Minister and promised reforms, such as free elections.',
              'Soviet troops withdrew from Budapest for a short time.',
              'Nagy announced that Hungary would <b>leave the Warsaw Pact</b>.',
              'On <b>4 November 1956</b> Soviet tanks entered Budapest and crushed the rising. Thousands of Hungarians were killed.',
              'About <b>200,000</b> Hungarians fled to the West.',
              'Nagy was replaced by <b>János Kádár</b>, and Nagy was executed in 1958.',
              'The West condemned the invasion but did not intervene.',
            ],
          },
        },
        {
          k: '(b)', m: 6, scheme: 'b', q: 'Why was the Berlin Wall built in 1961?',
          ms: {
            groups: [
              { h: 'Reasons that can be explained (Levels 3 and 4)', points: [
                '<b>The refugee problem</b>: by 1961 over two million East Germans had left for the West, most of them through Berlin, where the border was easiest to cross.',
                '<b>Loss of skilled workers</b>: many of those leaving were young and well educated, such as doctors, engineers and teachers. East Germany\'s economy could not afford to lose them.',
                '<b>Propaganda</b>: the steady flow of people to the West was a humiliation. It suggested that people preferred capitalism to communism.',
                '<b>West Berlin as a showcase</b>: West Berlin was rich and free, and it was in the middle of East Germany. It was also a base for Western spies.',
                '<b>Khrushchev\'s failure</b>: he had demanded in 1958 that the West leave Berlin, and he got no agreement at the Vienna summit with Kennedy in June 1961. A wall solved the problem without a war.',
              ] },
              { h: 'Points that only identify a reason (Level 2)', points: ['People were escaping.', 'East Germany was losing workers.', 'It was embarrassing for the USSR.'] },
            ],
          },
        },
        {
          k: '(c)', m: 10, scheme: 'c', q: '"Gorbachev was personally responsible for the collapse of Soviet control over Eastern Europe." How far do you agree with this statement? Explain your answer.',
          ms: {
            groups: [
              { h: 'Agree: Gorbachev was responsible', tone: 'yes', points: [
                '<b>Glasnost</b> allowed more open criticism, which encouraged people in Eastern Europe to demand change.',
                'He <b>abandoned the Brezhnev Doctrine</b>. In December 1988 he told the United Nations that countries should be free to choose their own path, and he announced cuts to Soviet forces.',
                'He <b>refused to use force</b> in 1989, when Poland held partly free elections, Hungary opened its border with Austria and East Germans protested in large numbers.',
                'When the Berlin Wall was opened in November 1989, Soviet troops in East Germany did not act.',
              ] },
              { h: 'Disagree: other causes', tone: 'no', points: [
                '<b>Economic weakness</b>: the Soviet economy was stagnating long before 1985, and it could not afford both the arms race and support for Eastern Europe.',
                '<b>The war in Afghanistan</b> (1979–89) was expensive and showed the limits of Soviet power.',
                '<b>Solidarity</b>: from 1980 this independent trade union, with about ten million members, showed that communist rule could be challenged. In June 1989 it won almost every seat it was allowed to contest.',
                '<b>People power</b>: mass protests, such as the demonstrations in Leipzig in 1989, forced communist governments to give way.',
                '<b>Long-term resentment</b> of Soviet control had been clear since 1956 and 1968.',
              ] },
              { h: 'A possible judgement', tone: 'judge', text: 'Gorbachev was responsible for the timing of the collapse, but not for its causes. By refusing to use force, he removed the threat that had kept communist governments in power since 1956. However, economic crisis and the demands of people across Eastern Europe meant that Soviet control was already weak. Gorbachev wanted to reform communism, not end it.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['Gorbachev was responsible because he introduced glasnost and perestroika and did not send in the tanks. But other things were also important, such as Solidarity in Poland and the bad Soviet economy. So he was partly responsible.'],
              why: 'It identifies relevant factors on both sides but does not explain how any of them led to the collapse. The last sentence is not supported. It stays in Level 2.',
            },
            {
              level: 'Level 5', marks: '10 marks', strong: true,
              text: [
                'Gorbachev was very important in the collapse of Soviet control. Earlier Soviet leaders had used tanks to crush opposition in Hungary in 1956 and Czechoslovakia in 1968. In 1988 Gorbachev told the United Nations that every nation should be free to choose its own path. When Poland held elections in 1989 and Hungary opened its border with Austria, he did not send troops. Without the threat of Soviet force, communist governments had nothing to fall back on, and they collapsed one after another.',
                'However, Soviet control was already weak before Gorbachev. The Soviet economy had been stagnating since the 1970s, and the war in Afghanistan and the arms race with the USA drained its resources. In Poland, Solidarity had shown in 1980 that millions of workers would openly oppose communist rule. It survived martial law and won almost every seat it was allowed to contest in June 1989. These pressures came from below, not from Moscow.',
                'Overall, Gorbachev was responsible for when the collapse happened, but not for why it happened. His refusal to use force allowed it to happen peacefully in 1989. The deeper causes, economic failure and the opposition of ordinary people, had built up over decades, so he was not personally responsible on his own.',
              ],
              why: 'It explains Gorbachev\'s role and other factors with accurate detail, then separates the trigger from the deeper causes. That is a supported judgement on "how far" (Level 5).',
            },
          ],
        },
      ],
    },
    // ── Depth study B: Germany ──────────────────────────────────────────
    {
      tag: 'B', short: 'Rise of Hitler', paper: 'Paper 1 · Section B · Depth study B: Germany, 1918–45', title: 'Weimar and the rise of the Nazis',
      parts: [
        {
          k: '(a)', m: 4, scheme: 'a', q: 'Describe the Munich Putsch of 1923.',
          ms: {
            lead: 'One mark for each relevant point. Answers may include:',
            points: [
              'On <b>8 November 1923</b> Hitler and the SA burst into a meeting in a Munich beer hall where <b>Kahr</b>, who was running the Bavarian government, was speaking.',
              'Hitler announced a "national revolution" and forced Kahr and other leaders to agree to support him. They later changed their minds.',
              '<b>Ludendorff</b>, the First World War general, supported the Putsch.',
              'On 9 November about 2,000 Nazis marched through Munich. The police opened fire and <b>16 Nazis</b> were killed.',
              'Hitler escaped but was <b>arrested</b> two days later.',
              'At his trial in 1924 he was sentenced to <b>five years</b> in Landsberg prison but served only about nine months. He wrote <b>Mein Kampf</b> there.',
              'The Nazi Party was banned for a time.',
            ],
          },
        },
        {
          k: '(b)', m: 6, scheme: 'b', q: 'Why did the Nazis have little success before 1930?',
          ms: {
            groups: [
              { h: 'Reasons that can be explained (Levels 3 and 4)', points: [
                '<b>Economic recovery</b>: under Stresemann, the new Rentenmark ended hyperinflation, and the Dawes Plan (1924) brought American loans. With jobs and stable prices, few voters wanted extreme parties.',
                '<b>The failure of the Munich Putsch</b>: the Nazi Party was banned, and Hitler was in prison until December 1924. The party split while he was away.',
                '<b>Stability abroad</b>: the Locarno Treaties (1925) and joining the League of Nations (1926) improved Germany\'s position, which weakened nationalist complaints.',
                '<b>A new strategy took time</b>: after prison Hitler decided to win power through elections. Building a national party organisation took several years.',
                '<b>Limited support</b>: in the 1928 election the Nazis won only 2.6% of the vote and 12 seats.',
              ] },
              { h: 'Points that only identify a reason (Level 2)', points: ['The economy was doing well.', 'Hitler was in prison.', 'Stresemann.'] },
            ],
          },
        },
        {
          k: '(c)', m: 10, scheme: 'c', q: '"The Depression was the main reason why Hitler became Chancellor in January 1933." How far do you agree with this statement? Explain your answer.',
          ms: {
            groups: [
              { h: 'Agree: the Depression', tone: 'yes', points: [
                '<b>Unemployment</b> rose to about six million by 1932. Desperate voters turned to parties that promised radical solutions.',
                '<b>Nazi votes rose</b> from 2.6% in 1928 to 18.3% in 1930 and 37.3% in July 1932, when the Nazis became the largest party in the Reichstag.',
                'The <b>government failed</b>: Brüning cut spending and governed by decree using Article 48, which made democracy look useless.',
                '<b>Fear of communism</b> grew as the Communist vote also rose, which pushed the middle classes and business leaders towards the Nazis.',
              ] },
              { h: 'Disagree: other reasons', tone: 'no', points: [
                '<b>Propaganda and organisation</b>: Goebbels ran modern campaigns, and in 1932 Hitler flew around Germany to speak at rallies.',
                '<b>Hitler\'s appeal</b>: he promised "work and bread" and to restore Germany\'s pride, which attracted many different groups.',
                '<b>The SA</b> intimidated opponents and made the Nazis look strong and disciplined.',
                '<b>A political deal</b>: the Nazi vote fell to 33.1% in November 1932. Hitler became Chancellor because von Papen persuaded Hindenburg to appoint him, believing that conservatives could control him.',
                '<b>Weaknesses of the Weimar Constitution</b>: proportional representation and Article 48 had already weakened democracy.',
              ] },
              { h: 'A possible judgement', tone: 'judge', text: 'The Depression was the main reason the Nazis became a mass party, but it does not explain January 1933 on its own. By then the Nazi vote was falling. Hitler became Chancellor because of a deal made by a small group of conservative politicians. The Depression made the deal possible by making the Nazis too large to ignore.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['The Depression was important because unemployment went up to six million and people voted for the Nazis. But there were other reasons, such as Nazi propaganda, the SA and von Papen\'s deal with Hindenburg.'],
              why: 'It identifies relevant points on each side with some detail, but it does not explain how any of them helped Hitler to become Chancellor. It stays in Level 2.',
            },
            {
              level: 'Level 5', marks: '10 marks', strong: true,
              text: [
                'The Depression was a very important reason. After the Wall Street Crash, American banks called in their loans and German businesses closed. By 1932 about six million Germans were unemployed. Brüning\'s government cut spending and ruled by decree, so many people decided that democracy had failed. They turned to the Nazis, who promised "work and bread". The Nazi vote rose from 2.6% in 1928 to 37.3% in July 1932, which made them the largest party in the Reichstag.',
                'However, the Depression does not fully explain why Hitler became Chancellor in January 1933. In the November 1932 election the Nazi vote fell to 33.1%, and the party was short of money. Hitler did not win power at the ballot box. Instead, von Papen persuaded President Hindenburg to appoint Hitler as Chancellor, with Papen as Vice-Chancellor. They believed that they could control him because there were only three Nazis in the cabinet.',
                'Overall, the Depression was the main long-term reason, but the deal was the immediate one. Without the Depression, the Nazis would have stayed a small party and no one would have offered Hitler power. But in January 1933 it was the decision of Papen and Hindenburg that made him Chancellor, so the Depression was necessary but not enough on its own.',
              ],
              why: 'It explains the effect of the Depression with precise figures, then explains the political deal as a different reason. The conclusion compares long-term and short-term causes and explains which mattered most. That is a supported judgement (Level 5).',
            },
          ],
        },
      ],
    },
    {
      tag: 'B', short: 'Nazi Germany', paper: 'Paper 1 · Section B · Depth study B: Germany, 1918–45', title: 'Control and daily life in Nazi Germany',
      parts: [
        {
          k: '(a)', m: 4, scheme: 'a', q: 'Describe what happened during the Night of the Long Knives.',
          ms: {
            lead: 'One mark for each relevant point. Answers may include:',
            points: [
              'It began on <b>30 June 1934</b>.',
              'Hitler ordered the <b>SS</b> to arrest and kill leaders of the SA, including <b>Ernst Röhm</b>.',
              'Other opponents were also killed, such as the former Chancellor <b>von Schleicher</b> and <b>Gregor Strasser</b>.',
              'At least 85 people were killed. Some estimates are much higher.',
              'Hitler told the Reichstag that Röhm had been planning to seize power and that he had acted to save Germany.',
              'The <b>army</b> was pleased that the SA, its rival, had been weakened. When Hindenburg died in August 1934, soldiers swore an oath of loyalty to Hitler.',
            ],
          },
        },
        {
          k: '(b)', m: 6, scheme: 'b', q: 'Why did the Nazis want to control young people?',
          ms: {
            groups: [
              { h: 'Reasons that can be explained (Levels 3 and 4)', points: [
                '<b>The future of the Reich</b>: Hitler wanted the Nazi state to last a thousand years, so the next generation had to be loyal Nazis.',
                '<b>Easier to influence</b>: young people had not yet formed strong political views, so they could be taught Nazi ideas through schools and the Hitler Youth.',
                '<b>Future soldiers</b>: boys were trained in fitness, marching and shooting so that they would be ready to fight for Germany.',
                '<b>Future mothers</b>: girls in the League of German Maidens were prepared to become the wives and mothers of large "Aryan" families.',
                '<b>Weakening other influences</b>: the Nazis wanted loyalty to Hitler to come before loyalty to family, the Churches or other youth groups, which were banned or taken over.',
              ] },
              { h: 'Points that only identify a reason (Level 2)', points: ['To make them loyal.', 'To train boys as soldiers.', 'They were the future.'] },
            ],
          },
        },
        {
          k: '(c)', m: 10, scheme: 'c', q: '"Most people in Germany benefited from Nazi rule." How far do you agree with this statement? Explain your answer.',
          ms: {
            groups: [
              { h: 'Agree: benefits', tone: 'yes', points: [
                '<b>Jobs</b>: unemployment fell from about six million in 1933 to under half a million by 1938. Public works such as the autobahns, the Reich Labour Service and rearmament created work.',
                '<b>Leisure</b>: the Strength Through Joy organisation offered cheap holidays, concerts and sports, and the Beauty of Labour scheme improved conditions in factories.',
                '<b>Business</b>: large firms gained contracts for rearmament, and trade unions could no longer demand higher wages.',
                '<b>Order</b>: after the chaos of 1930–33, many Germans welcomed stability and the recovery of national pride.',
              ] },
              { h: 'Disagree: costs and losers', tone: 'no', points: [
                '<b>Workers lost rights</b>: trade unions were banned in May 1933 and replaced by the German Labour Front. Working hours increased and wages stayed low.',
                '<b>Hidden unemployment</b>: Jews and many married women were not counted, and the Reich Labour Service and conscription took young men out of the figures.',
                'The <b>Volkswagen</b> savings scheme took workers\' money, but no one received a car before the war.',
                '<b>Persecution</b>: Jews lost their citizenship under the Nuremberg Laws (1935) and were attacked during Kristallnacht (1938). Political opponents were sent to concentration camps.',
                '<b>Other groups</b> also suffered, such as disabled people, Roma and Sinti, gay men and Church members who opposed the regime.',
                '<b>Loss of freedom</b>: there was no free speech, free press or free elections for anyone.',
              ] },
              { h: 'A possible judgement', tone: 'judge', text: 'Many Germans who were not targeted by the regime saw real material gains, especially jobs after the Depression. However, they paid for this with their political freedom and their rights at work, and large groups were persecuted. Whether a person benefited depended on who they were.' },
            ],
          },
          answers: [
            {
              level: 'Level 2', marks: '3 marks',
              text: ['Some people benefited because unemployment fell and there were Strength Through Joy holidays. But Jews were persecuted and trade unions were banned. So some people benefited and some did not.'],
              why: 'It identifies relevant points on both sides but does not explain how each one helped or harmed people. The last sentence repeats the question, so it is not a judgement. It stays in Level 2.',
            },
            {
              level: 'Level 5', marks: '10 marks', strong: true,
              text: [
                'Many Germans did benefit from Nazi rule. In 1933 about six million people were unemployed, but by 1938 the figure was under half a million. Building the autobahns, the Reich Labour Service and rearmament all created jobs. For a family that had suffered in the Depression, a steady wage was a real improvement. Strength Through Joy also gave some workers cheap holidays that they could not have afforded before.',
                'However, these benefits had costs. Trade unions were banned in May 1933, so workers could not bargain for higher pay, and working hours rose. The unemployment figures were also misleading, because Jews and many married women were pushed out of work and were not counted. Everyone lost freedom of speech and the right to vote in free elections.',
                'Some groups did not benefit at all. Jews were stripped of their citizenship by the Nuremberg Laws in 1935, and during Kristallnacht in November 1938 synagogues, shops and homes were destroyed. Political opponents were sent to concentration camps such as Dachau.',
                'Overall, I partly agree. Most Germans who were accepted by the regime gained jobs and security after the Depression, so in material terms many benefited. But they lost their freedom and their rights at work, and large minorities were persecuted. The statement is only true for the people the Nazis accepted.',
              ],
              why: 'It explains benefits and costs with precise evidence and considers different groups. The conclusion says how far the statement is true and for whom, which is a supported judgement (Level 5).',
            },
          ],
        },
      ],
    },
  ],
};
