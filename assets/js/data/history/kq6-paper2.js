// Paper 2 practice set for KQ6, the Option B prescribed topic for June 2027.
// Shape follows the published 0470/21 Paper 2 mark schemes (June 2024 and June 2025): five parts on up to seven
// sources, (a) 7, (b) 8, (c) 8, (d) 8, (e) 9 = 40 marks, AO1 and AO3. Level descriptors are paraphrased from those
// mark schemes; the question wording, indicative content and example answers are our own.
// All six sources are public domain (see `references`), so they are printed in full as extracts.
// Status: draft (sources checked 2026-10-23, not yet teacher-reviewed).

export default {
  id: 'kq6-paper2',
  tag: 'KQ6',
  paper: 'Paper 2 · Option B · Document questions',
  title: 'Hungary, 1956: how secure was Soviet control?',
  topic: 'How secure was the USSR\'s control over Eastern Europe, 1948–c.1989?',
  time: 105,
  marks: 40,
  status: 'draft',

  how: 'Read the background and all six sources first (about 10 minutes). Then answer every part. Allow about 2 minutes per mark. Open the mark scheme for each part only after you have written or planned your answer. Nothing here is saved.',

  source: `<p><b>Structure and marks.</b> The 2027–2028 syllabus says that Paper 2 lasts 1 hour 45 minutes, is worth 40 marks, has five parts and uses up to seven sources on one prescribed topic. It tests AO1 and AO3. It does not give the marks for each part. The 7, 8, 8, 8 and 9 marks used here follow the published 0470/21 Paper 2 mark schemes for June 2024 and June 2025.</p>
<p><b>Level descriptors</b> are paraphrased from those mark schemes. The bands for a question type are not identical in every series, so each part names the series it follows.</p>
<p><b>Sources.</b> All six sources are public-domain documents: four US government records, a speech by a US president and an official Soviet government statement. Real papers usually also include a cartoon; this set has none because we could not find a public-domain cartoon on Hungary in 1956.</p>
<p><b>Questions, indicative content and example answers</b> are our own. They were not written by Cambridge. Use your teacher's marking as the final guide.</p>`,

  background: `<p>In October 1956 students and workers in Hungary rose against communist rule and Soviet control. Imre Nagy became prime minister. On 30 October he ended one-party rule. The same day the Soviet government said it was ready to discuss the presence of its troops in Hungary.</p>
<p>On 1 November, as new Soviet forces entered the country, Nagy's government announced that Hungary would leave the Warsaw Pact and become neutral. On 4 November Soviet forces attacked Budapest. Within a week the rising had been crushed, and János Kádár led a new government with Soviet backing. The West condemned the invasion but did not intervene.</p>
<p>How secure was Soviet control over Hungary in 1956?</p>`,

  sources: [
    {
      id: 'A',
      intro: 'From a declaration by the Soviet government, 30 October 1956. It was published in the Soviet newspaper <i>Pravda</i> the next day.',
      text: [
        'United by the common ideal of building a socialist society and the principles of proletarian internationalism, the countries of the great commonwealth of socialist nations can build their relations only on the principle of full equality, respect of territorial integrity, state independence and sovereignty, and noninterference in one another\'s domestic affairs.',
        'It is known that, in accordance with the Warsaw Treaty and with government agreements, Soviet units are stationed in the Hungarian and the Rumanian Republics.',
        'The Soviet Government and all the Soviet people deeply regret that the development of events in Hungary has led to bloodshed. On the request of the Hungarian People\'s Government the Soviet Government consented to the entry into Budapest of the Soviet Army units to assist the Hungarian People\'s Army and the Hungarian authorities to establish order in the town. Believing that the further presence of Soviet Army units in Hungary can serve as a cause for even greater deterioration of the situation, the Soviet Government has given instructions to its military command to withdraw the Soviet Army units from Budapest as soon as this is recognized as necessary by the Hungarian Government. At the same time, the Soviet Government is ready to enter into relevant negotiations with the Government of the Hungarian People\'s Republic and other participants of the Warsaw Treaty on the question of the presence of Soviet troops on the territory of Hungary.',
        'The Soviet Government expresses confidence that the peoples of the socialist countries will not permit foreign and internal reactionary forces to undermine the basis of the people\'s democratic regimes, won and consolidated by the heroic struggle and toil of the workers, peasants, and intelligentsia of each country.',
      ],
      ref: 'soviet-decl-1956',
    },
    {
      id: 'B',
      intro: 'From a message sent by President Eisenhower to the Soviet Prime Minister, Nikolai Bulganin, on 4 November 1956.',
      text: [
        'I have noted with profound distress the reports which have reached me today from Hungary.',
        'The Declaration of the Soviet Government of October 30, 1956, which restated the policy of non-intervention in internal affairs of other states, was generally understood as promising the early withdrawal of Soviet forces from Hungary. This pronouncement was regarded by the United States Government and myself as an act of high statesmanship. It was followed by the express request of the Hungarian Government for the withdrawal of Soviet forces.',
        'Consequently, we have been inexpressibly shocked by the apparent reversal of this policy. It is especially shocking that this renewed application of force against the Hungarian Government and people took place while negotiations were going on between your representatives and those of [the] Hungarian Government for the withdrawal of Soviet forces.',
        'I urge in the name of humanity and in the cause of peace that the Soviet Union take action to withdraw Soviet forces from Hungary immediately and to permit the Hungarian people to enjoy and exercise the human rights and fundamental freedoms affirmed for all peoples in the United Nations Charter.',
      ],
      ref: 'frus-xxv-166',
    },
    {
      id: 'C',
      intro: 'From a radio and television broadcast to the American people by President Eisenhower, 31 October 1956. Some punctuation has been changed.',
      text: [
        'In Eastern Europe there is the dawning of a new day. It has not been short or easy in coming.',
        'After World War II, the Soviet Union used military force to impose on the nations of Eastern Europe, governments of Soviet choice, servants of Moscow.',
        'It has been consistent United States policy, without regard to political party, to seek to end this situation. We could not, of course, carry out this policy by resort to force. Such force would have been contrary both to the best interests of the Eastern European peoples and to the abiding principles of the United Nations. But we did help to keep alive the hope of these peoples for freedom.',
        'The United States has made clear its readiness to assist economically the new and independent governments of these countries.',
        'We have also, with respect to the Soviet Union, sought clearly to remove any false fears that we would look upon new governments in these Eastern European countries as potential military allies. We have no such ulterior purpose. We see these peoples as friends, and we wish simply that they be friends who are free.',
      ],
      ref: 'eisenhower-1956-10-31',
    },
    {
      id: 'D',
      intro: 'From the official record of a meeting of the US National Security Council in Washington at 9 a.m. on 1 November 1956. Allen Dulles, the Director of the CIA, is reporting on Hungary.',
      text: [
        'The Director of Central Intelligence said that he had a few remarks to make on the situation in Hungary. In a sense, what had occurred there was a miracle. Events had belied all our past views that a popular revolt in the face of modern weapons was an utter impossibility. Nevertheless, the impossible had happened, and because of the power of public opinion, armed force could not effectively be used. Approximately 80% of the Hungarian Army had defected to the rebels and provided the rebels with arms. Soviet troops themselves had had no stomach for shooting down Hungarians, except in Budapest.',
        'Mr. Dulles then commented that the Soviet statement of October 30, on Soviet relations with the satellite states, was one of the most important statements to come out of the USSR in the last decade.',
      ],
      ref: 'frus-xxv-152',
    },
    {
      id: 'E',
      intro: 'From a teletype conversation between the US Legation (embassy) in Budapest and the State Department in Washington, early on 4 November 1956. The messages were sent by the Legation staff, including the US Minister, Edward Wailes. Times are Budapest times. Tildy was a minister in Nagy\'s government.',
      text: [
        'It appears the Russian artillery and mortar has begun falling on outskirts of Budapest at 0500 local time.',
        'Interesting to note that firing in suburbs started at exactly 0500 local time. Guns are heavy caliber … Local broadcasts are reporting it. Either Nagy or Tildy have advised people to take to cellars as the city is being occupied.',
        'Tildy secretary has just phoned to say Russians attacking in all Hungary. He requested [reported?] us that the Hungarian Govt is asking for US for our aid.',
        'Broadcast at 0545 reputedly Nagy stated Russians advancing on city and presently engaged with Hungarian Army.',
      ],
      ref: 'frus-xxv-162',
    },
    {
      id: 'F',
      intro: 'From the record of a meeting at the White House between President Eisenhower and the leaders of both parties in Congress, 9 November 1956. The record summarises what Eisenhower and Allen Dulles, Director of the CIA, said.',
      text: [
        'The President wanted to note particularly that Hungarian developments have served throughout most of the world to convict the Soviet of brutal imperialism. This was the opposite of the old situation when neutral nations would never view Russia as being guilty of either colonialism or imperialism, and when Russia would never be disbelieved and we would never be believed. Further, the Hungarian situation warns us again that the Soviet is capable of changing its face almost instantly.',
        'Mr. Dulles stressed the ruthlessness and brutality of Soviet repression, citing the language of Soviet directives over radio communications. He concluded that Russia had lost a satellite and gained a conquered province, that in the outside world the myth of sweet reasonableness of communism has been destroyed with a resultant denunciation of it by former Party members and that the Soviets now realize that satellite armies are not at all trustworthy.',
      ],
      ref: 'frus-xxv-177',
    },
  ],

  parts: [
    // ── (a) ───────────────────────────────────────────────────────────────
    {
      k: '(a)', m: 7, sources: ['A', 'B'],
      q: 'Study Sources A and B. How far do these two sources agree? Explain your answer using details of the sources.',
      scheme: {
        follows: '0470/21 June 2025, Question 2(a)',
        levels: [
          { l: 5, m: '7', d: 'Compares the big messages of the two sources, and supports the comparison. An overall judgement, not just one more point of agreement or disagreement.' },
          { l: 4, m: '5–6', d: 'Compares agreements and disagreements, with details from both sources.' },
          { l: 3, m: '3–4', d: 'Compares agreements or disagreements, with details from both sources.' },
          { l: 2, m: '2', d: 'Uses information that is in one source but not the other, or compares only who wrote them or what they are about.' },
          { l: 1, m: '1', d: 'Tries to compare the sources but makes no valid comparison.' },
          { l: 0, m: '0', d: 'No creditable response.' },
        ],
        groups: [
          { h: 'Agreements include', tone: 'yes', points: [
            'Both say the presence of Soviet troops in Hungary was making the situation worse (A: it "can serve as a cause for even greater deterioration"; B quotes the same idea).',
            'Both refer to talks about withdrawing Soviet troops (A: "ready to enter into relevant negotiations"; B: "negotiations were going on").',
            'Both treat the wishes of the Hungarian government as important (A: troops entered "on the request" of the Hungarian government and will leave Budapest when it says so; B: the Hungarian government asked for withdrawal).',
            'Both refer to the principle of non-interference in other states\' affairs (A states it; B says the declaration "restated" it).',
          ] },
          { h: 'Disagreements include', tone: 'no', points: [
            'A says Soviet troops were there to help the Hungarian authorities "establish order"; B says force was used "against the Hungarian Government and people".',
            'A promises withdrawal from Budapest and talks; B says the USSR has reversed this policy.',
            'A blames "foreign and internal reactionary forces"; B blames the USSR.',
            'A presents the USSR as respecting sovereignty; B asks the USSR to let Hungarians enjoy the "human rights and fundamental freedoms" of the UN Charter, implying they are being denied.',
          ] },
          { h: 'Big message (Level 5)', tone: 'judge', text: 'They disagree overall. A presents the USSR as a fair partner that respects Hungary\'s sovereignty and is ready to pull its troops back. B, written after the invasion, says the USSR has broken that promise and is crushing Hungary by force. B uses A\'s own words to show the reversal.' },
        ],
        tip: 'Use the word "both" for agreements and "whereas" for disagreements, with a short quotation from each source every time. Finish with one sentence on the overall message.',
      },
      answers: [
        {
          level: 'Level 3', marks: '4 marks',
          text: [
            'Sources A and B disagree. In Source A the Soviet government says it will withdraw its army units from Budapest and is "ready to enter into relevant negotiations" about Soviet troops in Hungary. But in Source B Eisenhower says there has been a "renewed application of force against the Hungarian Government and people".',
            'They also disagree about why Soviet troops were in Hungary. Source A says they came into Budapest "on the request of the Hungarian People\'s Government", whereas Source B says the Hungarian government made an "express request" for Soviet forces to leave.',
          ],
          why: 'Two supported disagreements, each using details from both sources. There are no agreements, so it stays in Level 3.',
        },
        {
          level: 'Level 5', marks: '7 marks', strong: true,
          text: [
            'The sources agree on some details. Both say that Soviet troops in Hungary were making things worse: Source A says their presence "can serve as a cause for even greater deterioration of the situation", and Source B refers to this same declaration. Both also mention talks about withdrawing Soviet troops. Source A says the USSR is "ready to enter into relevant negotiations", and Source B says "negotiations were going on" when force was used.',
            'However, they disagree about what the USSR was doing. Source A says Soviet troops were there to help the Hungarian authorities "establish order", whereas Source B says force was used "against the Hungarian Government and people". Source A blames "reactionary forces" for the trouble, whereas Source B blames the USSR for an "apparent reversal" of its policy.',
            'Overall they disagree. Source A presents the USSR as a partner that respects Hungary\'s sovereignty and will pull its troops back. Source B says the USSR has broken that promise and is crushing Hungary by force. Source B even uses Source A\'s own words to show how far Soviet policy changed in five days.',
          ],
          why: 'Agreements and disagreements are both supported (Level 4). The last paragraph compares the big messages and supports that comparison, which is Level 5.',
        },
      ],
    },

    // ── (b) ───────────────────────────────────────────────────────────────
    {
      k: '(b)', m: 8, sources: ['C'],
      q: 'Study Source C. Why did Eisenhower make this broadcast on 31 October 1956? Explain your answer using details of the source and your knowledge.',
      scheme: {
        follows: '0470/21 June 2025, Question 2(d) (a "Why did … say this?" question)',
        levels: [
          { l: 5, m: '8', d: 'Explains Eisenhower\'s purpose in the right context: to reassure the Soviet leaders that the USA would not use force or seek new allies, so that Soviet troops could leave Hungary without fear, at the moment of the Soviet declaration of 30 October. Answers may add the Suez Crisis and the election campaign.' },
          { l: 4, m: '6–7', d: 'Explains the big message of the source as a reason: the USA welcomes freedom in Eastern Europe but will not use force or treat the new governments as military allies. Must be explained, not just copied.' },
          { l: 3, m: '5', d: 'Explains the specific context as a reason: the Hungarian Rising, Nagy\'s government and the Soviet declaration of 30 October.' },
          { l: 2, m: '2–4', d: 'Explains valid sub-messages (for example, the USSR imposed governments after the war; the USA will give economic help), or general context, or a purpose without the specific context.' },
          { l: 1, m: '1', d: 'Describes the source, or gives reasons that do not explain why it was said at this time.' },
          { l: 0, m: '0', d: 'No creditable response.' },
        ],
        groups: [
          { h: 'Big message', points: [
            'The USA welcomes the move towards freedom in Eastern Europe ("the dawning of a new day") but will not use force to achieve it.',
            'The USA will not treat new governments in Eastern Europe as "potential military allies": it is not trying to pull them into NATO.',
          ] },
          { h: 'Context at 31 October', points: [
            'The Hungarian Rising seemed to be succeeding: Nagy was prime minister, and Soviet troops were leaving Budapest.',
            'On 30 October the Soviet government offered to discuss the presence of its troops in Hungary. Eisenhower refers to it: "Only yesterday the Soviet Union issued an important statement".',
            'Israel had attacked Egypt on 29 October, and Britain and France were joining in. The Western alliance was divided over Suez.',
            'Eisenhower was in the final days of an election campaign. He opened the broadcast by saying the issues had "no connection whatsoever with matters of partisanship".',
            'Some Radio Free Europe broadcasts had encouraged Hungarians to expect Western help.',
          ] },
          { h: 'Purpose (Level 5)', tone: 'judge', text: 'To reassure Moscow that a free Hungary would not become a Western ally, so that the USSR could withdraw its troops without fearing a threat to its security. At the same time, to reassure American voters, during Suez and the election campaign, that the USA would not be drawn into war in Europe.' },
        ],
        tip: 'A "why did he say this?" question wants purpose: what effect did he want, on whom, and why at that moment? Say who the audience was.',
      },
      answers: [
        {
          level: 'Level 3', marks: '5 marks',
          text: [
            'Eisenhower made this broadcast because of what was happening in Hungary. On 23 October there was a rising in Budapest, and Imre Nagy became prime minister. By 31 October Soviet troops were leaving Budapest, and on 30 October the Soviet government had said it was ready to negotiate about its troops in Hungary. Eisenhower says "Only yesterday the Soviet Union issued an important statement", so he was reacting to this news and telling Americans about it.',
          ],
          why: 'It explains the specific context as the reason for the broadcast (Level 3), but it does not explain the message of the source or Eisenhower\'s purpose.',
        },
        {
          level: 'Level 5', marks: '8 marks', strong: true,
          text: [
            'The main message of Source C is that the USA welcomes the new freedom in Eastern Europe but will not use force to bring it about. Eisenhower says "We could not, of course, carry out this policy by resort to force", and that the USA would not look on new governments in Eastern Europe "as potential military allies".',
            'He said this on 31 October because it was a key moment. The day before, the Soviet government had said it was ready to discuss withdrawing its troops from Hungary, and Soviet troops were leaving Budapest. Eisenhower wanted to reassure the Soviet leaders that a free Hungary would not join NATO. If Moscow did not fear losing Hungary to the West, it would be more likely to withdraw its troops for good.',
            'He was also speaking to Americans. Israel had attacked Egypt on 29 October, and Britain and France were joining in, so the West was divided. It was also the last week of the election campaign. By saying the USA would not use force, Eisenhower showed voters that he would keep the country out of war in both Europe and the Middle East.',
          ],
          why: 'It explains the big message and then Eisenhower\'s purpose, linked to the exact context of 30–31 October. That is Level 5.',
        },
      ],
    },

    // ── (c) ───────────────────────────────────────────────────────────────
    {
      k: '(c)', m: 8, sources: ['D', 'E'],
      q: 'Study Sources D and E. Does Source D make Source E surprising? Explain your answer using details of the sources and your knowledge.',
      scheme: {
        follows: '0470/21 June 2025, Question 1(c) (the same "surprising" question type)',
        levels: [
          { l: 5, m: '8', d: 'Not surprising: compares the messages of the two sources and evaluates at least one of them, using purpose, cross-reference or contextual knowledge to explain why there is no reason to be surprised.' },
          { l: 4, m: '7', d: 'Uses contextual knowledge to explain why E is or is not surprising, but does not compare it with D.' },
          { l: 3, m: '3–6', d: 'Compares the messages of the two sources to decide whether E is surprising.' },
          { l: 2, m: '2', d: 'Compares the sources but does not say whether E is surprising, or says what is or is not surprising in E without a valid explanation.' },
          { l: 1, m: '1', d: 'Makes assertions based only on who wrote the sources, or compares surface details.' },
          { l: 0, m: '0', d: 'No creditable response.' },
        ],
        groups: [
          { h: 'Why E seems surprising after D', tone: 'yes', points: [
            'D says that "armed force could not effectively be used" in Hungary; E shows a full Soviet attack "in all Hungary" three days later.',
            'D says about 80% of the Hungarian army had joined the rebels and that Soviet troops had "no stomach" for shooting Hungarians; E describes heavy guns firing on Budapest at exactly 5 a.m., a planned operation.',
            'D calls the Soviet declaration of 30 October one of the most important Soviet statements in a decade, suggesting a real change of policy; E shows the old policy of force.',
          ] },
          { h: 'Why E is not surprising (evaluation and context)', tone: 'no', points: [
            'D was spoken at 9 a.m. in Washington on 1 November. Dulles did not know that on 31 October the Soviet Presidium had already decided to crush the rising.',
            'On 1 November new Soviet units were crossing the Hungarian border, and Hungary announced that it was leaving the Warsaw Pact. Moscow would not accept the loss of a member of the Pact.',
            'The Suez Crisis divided the West and gave the USSR cover, and Eisenhower had said the USA would not use force.',
            'American intelligence had not predicted the crises in Poland, Hungary or Suez, so D\'s optimism is weak evidence.',
            'The USSR had used force before, in East Germany in 1953.',
          ] },
        ],
        tip: 'The top level needs three things: compare D and E, decide, and test D by its date, its author\'s knowledge or what you know happened.',
      },
      answers: [
        {
          level: 'Level 3', marks: '5 marks',
          text: [
            'Source D does make Source E surprising. In Source D, Dulles says that in Hungary "armed force could not effectively be used" and that 80% of the Hungarian army had joined the rebels. He thinks the Soviet statement of 30 October was very important, so it sounds as if the USSR was going to change its policy and leave Hungary alone.',
            'But in Source E, only three days later, "Russians attacking in all Hungary", and Soviet artillery is falling on Budapest. So the USSR did use force after all, even though Dulles said it could not. That makes Source E surprising.',
          ],
          why: 'It compares the messages of D and E and reaches a decision (Level 3). It does not evaluate either source, so it cannot reach Level 5.',
        },
        {
          level: 'Level 5', marks: '8 marks', strong: true,
          text: [
            'At first Source D makes Source E look surprising. Dulles says that "armed force could not effectively be used" in Hungary and that Soviet troops "had no stomach for shooting down Hungarians". Yet Source E reports that "Russians [are] attacking in all Hungary" and that heavy guns opened fire on Budapest at exactly 5 a.m., which sounds like a carefully planned attack.',
            'However, I am not surprised by Source E once I test Source D. Dulles was speaking at 9 a.m. in Washington on 1 November, and he did not know what was happening in Moscow. The Soviet leaders had already decided on 31 October to crush the rising. On 1 November new Soviet units were crossing the border, and Nagy announced that Hungary would leave the Warsaw Pact, which the USSR could never accept. Dulles was also wrong to think the West could rely on the declaration of 30 October: it was only a promise, made while the USSR decided what to do.',
            'The USSR had also used force against the East German rising in 1953, and the Suez Crisis meant the West was divided. So Source E is not surprising: Source D was based on poor information and hope, while E shows what Soviet policy had always been when control was threatened.',
          ],
          why: 'It compares the messages, then evaluates D using its date, the author\'s limited knowledge and contextual knowledge, and concludes that E is not surprising. That is Level 5.',
        },
      ],
    },

    // ── (d) ───────────────────────────────────────────────────────────────
    {
      k: '(d)', m: 8, sources: ['F'],
      q: 'Study Source F. How useful is Source F to a historian studying the results of the Hungarian Rising? Explain your answer using details of the source and your knowledge.',
      scheme: {
        follows: '0470/21 June 2024, Question 2(d) (a "How useful…?" question)',
        levels: [
          { l: 6, m: '8', d: 'Uses the source as evidence of how Eisenhower and Dulles wanted the results to be seen: as a moral and propaganda defeat for the USSR that justified the US decision not to intervene.' },
          { l: 5, m: '6–7', d: 'Evaluates the source by explaining its purpose. The content must be used to explain the purpose.' },
          { l: 4, m: '4–5', d: 'Uses cross-reference to other sources or contextual knowledge to check the claims in Source F.' },
          { l: 3, m: '3', d: 'Says it is not useful because of who produced it (for example, US leaders would be biased against the USSR), with some explanation.' },
          { l: 2, m: '2', d: 'Useful for its information, accepting the details without testing them. The details must be named.' },
          { l: 1, m: '1', d: 'Undeveloped comments on provenance, does not address "useful", or unsupported assertions.' },
          { l: 0, m: '0', d: 'No creditable response.' },
        ],
        groups: [
          { h: 'Claims that can be checked', points: [
            '"Gained a conquered province": the rising was crushed by 11 November and Kádár governed with Soviet backing. Communist rule in Hungary lasted until 1989.',
            '"Satellite armies are not at all trustworthy": Source D says about 80% of the Hungarian army had joined the rebels.',
            '"Brutal imperialism": the UN General Assembly met in emergency session on Hungary on 4 November, and about 200,000 Hungarians fled.',
            '"Changing its face almost instantly": compare the Soviet declaration of 30 October (Source A) with the invasion five days later (Source E).',
          ] },
          { h: 'Provenance and purpose', points: [
            'A summary record, not a word-for-word transcript, of a private meeting with the leaders of both parties in Congress.',
            'Eisenhower had just been re-elected, on 6 November. Hungary and Suez had come in the final days of the campaign.',
            'The USA had decided not to help Hungary by force. Presenting the crisis as a moral defeat for the USSR made that decision look sensible to Congress.',
            'Dulles led the CIA, which ran Radio Free Europe and had not predicted the crisis. He had reasons to stress Soviet brutality rather than American mistakes.',
          ] },
          { h: 'Level 6 judgement', tone: 'judge', text: 'Source F is useful as evidence of how US leaders interpreted the rising and wanted Congress to see it: as a propaganda victory for the West and a moral defeat for the USSR. Its claims about Soviet control are partly supported by other evidence, but it says little about the results for Hungarians themselves.' },
        ],
        tip: '"Useful" answers should test the content (is it accurate?) and then use the provenance (what does it show about the people who produced it?).',
      },
      answers: [
        {
          level: 'Level 4', marks: '5 marks',
          text: [
            'Source F is useful because its claims can be checked and many of them are accurate. Dulles says the USSR "gained a conquered province". This is true, because the Soviet army crushed the rising by 11 November and János Kádár became leader with Soviet backing. He also says that "satellite armies are not at all trustworthy". Source D supports this, because it says about 80% of the Hungarian army had joined the rebels.',
            'However, it may not be useful about everything, because Eisenhower says the USSR has been convicted of "brutal imperialism" throughout most of the world, which is an opinion.',
          ],
          why: 'It uses contextual knowledge and cross-reference to test the claims (Level 4). It does not explain the purpose of the speakers.',
        },
        {
          level: 'Level 6', marks: '8 marks', strong: true,
          text: [
            'Source F is partly useful for its information. Dulles says the USSR "gained a conquered province", and this was true: the rising was crushed by 11 November and Kádár ruled with Soviet backing. His claim that satellite armies were "not at all trustworthy" is supported by Source D, which says about 80% of the Hungarian army had joined the rebels.',
            'But the source is most useful as evidence of how American leaders wanted the results to be seen. This is a record of a private meeting with the leaders of both parties in Congress, just after Eisenhower\'s re-election. The USA had decided not to help Hungary, even though some Radio Free Europe broadcasts had raised hopes of Western support. So Eisenhower and Dulles stress the gains for the West: the USSR has been convicted of "brutal imperialism" and "the myth of sweet reasonableness of communism has been destroyed". They present the crisis as a propaganda victory, which made the decision not to intervene look wise.',
            'So Source F is useful to a historian, but mainly as evidence of the US government\'s view of the results. It tells us much less about the results for Hungary itself, such as the people killed, the refugees and the reprisals.',
          ],
          why: 'It tests the content, then uses the content and provenance to explain how the speakers wanted the results to be understood, and why. That is Level 6.',
        },
      ],
    },

    // ── (e) ───────────────────────────────────────────────────────────────
    {
      k: '(e)', m: 9, sources: ['A', 'B', 'C', 'D', 'E', 'F'],
      q: 'Study all the sources. How far do these sources provide convincing evidence that Soviet control over Hungary was secure in 1956? Use the sources to explain your answer.',
      scheme: {
        follows: '0470/21 June 2024 and June 2025, Question 2(e)',
        rule: 'Each source used must be identified by its letter, its provenance or a quotation, and the answer must explain how its content supports or does not support the statement.',
        levels: [
          { l: 4, m: '6–9', d: 'Uses the sources to support and to reject the statement. More sources, used well on both sides, earn more marks within the level (our guidance; the published schemes give the band only).' },
          { l: 3, m: '3–5', d: 'Uses the sources to support or to reject the statement.' },
          { l: 2, m: '2', d: 'Uses the sources but does not use them to test the statement.' },
          { l: 1, m: '1', d: 'Writes about the topic but makes no use of the sources.' },
          { l: 0, m: '0', d: 'No creditable response.' },
        ],
        groups: [
          { h: 'Supporting: A, B, C, E, F', tone: 'yes', points: [
            'A: Soviet troops are stationed in Hungary under the Warsaw Treaty, and Moscow is confident the people "will not permit" reactionary forces to undermine communist rule.',
            'B: the USSR used force while talks were going on, and the USA could only "urge" it to withdraw. Nothing stopped Moscow.',
            'C: the USA "could not … carry out this policy by resort to force", so the West would not challenge Soviet control.',
            'E: Soviet forces were "attacking in all Hungary". The USSR could crush the rising when it chose, and the Hungarian government could only ask the USA for help.',
            'F: the USSR "gained a conquered province".',
          ] },
          { h: 'Not supporting: A, B, C, D, E, F', tone: 'no', points: [
            'A: the USSR admits there has been bloodshed and offers to negotiate the presence of its troops. A secure power would not need to.',
            'B: the Hungarian government itself had asked for Soviet forces to leave. Control depended on force against a communist-led government.',
            'C: Eisenhower sees "the dawning of a new day"; Moscow had imposed "servants of Moscow" by force, not consent.',
            'D: about 80% of the Hungarian army defected, and force "could not effectively be used". A Soviet satellite\'s own army could not be relied on.',
            'E: the Hungarian government was asking the USA for aid. Hungary\'s own rulers had turned against Moscow.',
            'F: Russia "had lost a satellite"; satellite armies were "not at all trustworthy".',
          ] },
          { h: 'Judging how convincing the sources are', tone: 'judge', text: 'Strong answers note that five of the six sources are American, and that D and F come from a CIA Director whose information was poor (D) and who had reasons to stress Soviet brutality (F). The most convincing evidence that control was secure is what happened (E); the most convincing evidence that it was not is that Hungary\'s army and government turned against Moscow (D and E).' },
        ],
        tip: 'Plan two lists before you write: sources that support the statement and sources that do not. A single source can appear in both lists. Name every source you use.',
      },
      answers: [
        {
          level: 'Level 3', marks: '5 marks',
          text: [
            'The sources give convincing evidence that Soviet control over Hungary was secure. Source E shows that "Russians [were] attacking in all Hungary" on 4 November, so the USSR could crush the rising whenever it decided to. Source C shows that the West would not stop it, because Eisenhower says the USA "could not … carry out this policy by resort to force". Source F says the USSR "gained a conquered province", which shows that it was back in control after the invasion.',
          ],
          why: 'Three sources are used, each with a quotation and an explanation, but only to support the statement. That is Level 3.',
        },
        {
          level: 'Level 4', marks: '9 marks', strong: true,
          text: [
            'Some sources suggest that Soviet control was secure. Source E shows Soviet forces "attacking in all Hungary" at 5 a.m. on 4 November, which shows the USSR could use overwhelming force whenever it chose. Source C shows that the West would not stop it, because Eisenhower said the USA "could not … carry out this policy by resort to force". Source B supports this: Eisenhower could only "urge" the USSR to withdraw. Source F concludes that the USSR "gained a conquered province".',
            'However, other sources suggest control was far from secure. Source D says about 80% of the Hungarian army had "defected to the rebels", so the USSR could not rely on its satellite\'s own forces. Source E shows that the Hungarian government was "asking for US for our aid": Hungary\'s own communist-led rulers had turned against Moscow. Source A shows that on 30 October the USSR was ready to negotiate the presence of its troops, which a confident power would not have done. Source F also admits Russia "had lost a satellite".',
            'The sources that support the statement are convincing about the short term: the invasion worked and the West did nothing. But the sources against it are more convincing about how secure control really was. Five of the six sources are American, and D and F come from a CIA Director who had poor information and reasons to stress Soviet brutality. Even so, D and E agree that Hungary\'s army and government had turned against Moscow. So the sources show that Soviet control was secure only because of force, not because Hungarians accepted it.',
          ],
          why: 'It uses six sources on both sides, each identified and explained, and judges how convincing they are. That is the top of Level 4.',
        },
      ],
    },
  ],

  // Every source: who made it, where the text comes from, and its copyright status.
  references: {
    'soviet-decl-1956': {
      title: 'Declaration of the Soviet Government on friendship and cooperation with other socialist states, 30 October 1956',
      author: 'Government of the USSR', publisher: 'Department of State Bulletin 35, no. 907 (12 November 1956), pp. 745–747; online in the Internet Modern History Sourcebook, Fordham University', year: 1956,
      url: 'https://sourcebooks.web.fordham.edu/mod/1956soviet-coop1.asp',
      copyright: 'Public domain. An official Soviet government statement (official documents of state bodies are not protected: Civil Code of the Russian Federation, Article 1259(6)); the English text was printed in a US government publication. Our assessment, not legal advice.',
    },
    'frus-xxv-166': {
      title: 'FRUS 1955–1957, Vol. XXV, Document 166: Telegram from the Department of State to the Embassy in the Soviet Union, 4 November 1956 (Eisenhower to Bulganin)',
      author: 'US Department of State', publisher: 'US Government Printing Office', year: 1990,
      url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d166',
      copyright: 'Public domain (work of the US government, 17 U.S.C. §105).',
    },
    'eisenhower-1956-10-31': {
      title: 'Radio and television report to the American people on the developments in Eastern Europe and the Middle East, 31 October 1956',
      author: 'Dwight D. Eisenhower', publisher: 'The American Presidency Project, UC Santa Barbara', year: 1956,
      url: 'https://www.presidency.ucsb.edu/node/233787',
      copyright: 'Public domain (made by the President in his official capacity, 17 U.S.C. §105).',
    },
    'frus-xxv-152': {
      title: 'FRUS 1955–1957, Vol. XXV, Document 152: Memorandum of discussion at the 302d meeting of the National Security Council, 1 November 1956',
      author: 'National Security Council', publisher: 'US Government Printing Office', year: 1990,
      url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d152',
      copyright: 'Public domain (work of the US government, 17 U.S.C. §105).',
    },
    'frus-xxv-162': {
      title: 'FRUS 1955–1957, Vol. XXV, Document 162: Transcript of a teletype conversation between the Legation in Hungary and the Department of State, 3–4 November 1956',
      author: 'US Legation, Budapest, and US Department of State', publisher: 'US Government Printing Office', year: 1990,
      url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d162',
      copyright: 'Public domain (work of the US government, 17 U.S.C. §105).',
    },
    'frus-xxv-177': {
      title: 'FRUS 1955–1957, Vol. XXV, Document 177: Editorial Note, quoting the record of the bipartisan legislative leaders meeting, 9 November 1956 (Eisenhower Library, Whitman File)',
      author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990,
      url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d177',
      copyright: 'Public domain (work of the US government, 17 U.S.C. §105).',
    },
    // Used in the mark scheme and example answers only.
    'malin-1956-10-31': {
      title: 'Working notes from the session of the CPSU CC Presidium on 31 October 1956',
      author: 'V.N. Malin; translated by Mark Kramer', publisher: 'Wilson Center Digital Archive (University of Maryland mirror)', year: 1996,
      url: 'https://digitalarchive.umd.edu/document/working-notes-session-cpsu-cc-presidium-31-october-1956',
      copyright: 'Translation in copyright (Cold War International History Project). Paraphrased here; not quoted.',
    },
    'andropov-1956-11-01': {
      title: 'Andropov report, 1 November 1956',
      author: 'Yuri Andropov; translation from The Hungarian Quarterly 34 (1993)', publisher: 'Wilson Center Digital Archive (University of Maryland mirror)', year: 1993,
      url: 'https://digitalarchive.umd.edu/document/andropov-report-1-november-1956',
      copyright: 'Translation in copyright. Paraphrased here; not quoted.',
    },
    'frus-xxv-155': {
      title: 'FRUS 1955–1957, Vol. XXV, Document 155: Editorial Note (Acting Secretary\'s staff meeting, 2 November 1956: "intelligence failure")',
      author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990,
      url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d155',
      copyright: 'Public domain (work of the US government, 17 U.S.C. §105).',
    },
    'oh-suez': {
      title: 'The Suez Crisis, 1956 (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.',
      url: 'https://history.state.gov/milestones/1953-1960/suez',
      copyright: 'Public domain (work of the US government).',
    },
    'oh-1953': {
      title: 'The East German Uprising, 1953 (Milestones)', author: 'Office of the Historian', publisher: 'US Department of State', year: 'n.d.',
      url: 'https://history.state.gov/milestones/1953-1960/east-german-uprising',
      copyright: 'Public domain (work of the US government).',
    },
    'nsa-hungary-1956': {
      title: 'The 1956 Hungarian Revolution: A History in Documents (Electronic Briefing Book No. 76)', author: 'Malcolm Byrne (ed.)', publisher: 'National Security Archive', year: 2002,
      url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB76/',
      copyright: 'In copyright. Used for facts only (Radio Free Europe broadcasts; timing of the invasion).',
    },
    'brit-hungary': {
      title: 'Hungarian Revolution', author: 'The Editors of Encyclopaedia Britannica', publisher: 'Encyclopaedia Britannica', year: 2026,
      url: 'https://www.britannica.com/event/Hungarian-Revolution-1956',
      copyright: 'In copyright. Used for facts only (dates, casualty and refugee estimates).',
    },
    'frus-xxv-167': {
      title: 'FRUS 1955–1957, Vol. XXV, Document 167: Editorial Note (UN General Assembly emergency session, 4 November 1956)',
      author: 'Office of the Historian', publisher: 'US Government Printing Office', year: 1990,
      url: 'https://history.state.gov/historicaldocuments/frus1955-57v25/d167',
      copyright: 'Public domain (work of the US government, 17 U.S.C. §105).',
    },
    'miller-ike': {
      title: 'Dwight D. Eisenhower: key events', author: 'Miller Center of Public Affairs', publisher: 'University of Virginia', year: 'n.d.',
      url: 'https://millercenter.org/president/dwight-d-eisenhower/key-events',
      copyright: 'In copyright. Used for one fact: Eisenhower was re-elected on 6 November 1956.',
    },
    'ikelib-1956': {
      title: '1956 election campaign', author: 'Dwight D. Eisenhower Presidential Library', publisher: 'National Archives and Records Administration', year: 'n.d.',
      url: 'https://www.eisenhowerlibrary.gov/eisenhowers-presidential-years/1956-election-campaign',
      copyright: 'Public domain (work of the US government). Used for the election context in parts (b) and (d).',
    },
    'ms-0470-21-2025': {
      title: 'Cambridge IGCSE History 0470/21 Paper 2 Document Questions, mark scheme, May/June 2025', author: 'Cambridge University Press & Assessment', publisher: 'Cambridge University Press & Assessment', year: 2025,
      url: 'https://pmt.physicsandmathstutor.com/download/History/GCSE/Past-Papers/CIE/Paper-2/MS/June%202025%20(v1)%20MS.pdf',
      copyright: 'In copyright. Level descriptors paraphrased; mark bands reported as facts.',
    },
    'ms-0470-21-2024': {
      title: 'Cambridge IGCSE History 0470/21 Paper 2 Document Questions, mark scheme, May/June 2024', author: 'Cambridge University Press & Assessment', publisher: 'Cambridge University Press & Assessment', year: 2024,
      url: 'https://pmt.physicsandmathstutor.com/download/History/GCSE/Past-Papers/CIE/Paper-2/MS/June%202024%20(v1)%20MS.pdf',
      copyright: 'In copyright. Level descriptors paraphrased; mark bands reported as facts.',
    },
    'cie-syllabus': {
      title: 'Cambridge IGCSE History 0470: syllabus for examination in 2027 and 2028 (version 1)', author: 'Cambridge University Press & Assessment', publisher: 'Cambridge University Press & Assessment', year: 2024,
      url: 'https://www.cambridgeinternational.org/Images/721327-2027-2028-syllabus.pdf',
      copyright: 'In copyright. Paper structure reported as facts.',
    },
  },
};
