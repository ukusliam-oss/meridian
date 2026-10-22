// Subject page: the hero is static HTML; everything below it is rendered from the data file.
import { boot, subnav, $, reduced, gsap, icons } from './core.js';
import { examAnatomy, topicMap, technique, commandWords, flashcards, quiz, examplesTracker } from './ui.js';
import { heroArt } from './visuals.js';
import { practice } from './practice.js';

const id = document.body.dataset.subject;
const [{ default: d }, { default: pr }] = await Promise.all([import(`./data/${id}.js`), import(`./data/practice-${id}.js`)]);
const NEXT = { history: ['economics', 'Economics', 'econ', '0455'], economics: ['geography', 'Geography', 'geo', '0460'], geography: ['history', 'History', 'hist', '0470'] };

const head = (eyebrow, h, lede) => `<header class="section-head section-head--split">
  <div style="display:grid;gap:20px"><p class="eyebrow">${eyebrow}</p><h2 class="h2" data-split>${h}</h2></div>
  <p class="lede" data-reveal>${lede}</p></header>`;
const section = (sid, eyebrow, h, lede, cls = '') => `<section class="section ${cls}" id="${sid}"><div class="wrap">${head(eyebrow, h, lede)}<div data-mount="${sid}"></div></div></section>`;

const links = [['exam', 'Assessment'], ['topics', 'Content'], ...(d.examples ? [['examples', 'Examples']] : []), ['lab', d.lab.nav || 'Interactive'], ['technique', 'Exam technique'], ['practice', 'Practice'], ['words', 'Command words'], ['cards', 'Flashcards'], ['quiz', 'Quiz']];
const [nid, nname, ncolor, ncode] = NEXT[id];

$('#content').insertAdjacentHTML('beforeend', `
  <nav class="subnav" aria-label="On this page"><div class="wrap"><div class="seg">${links.map(([h, l]) => `<a href="#${h}">${l}</a>`).join('')}</div></div></nav>
  ${section('exam', 'Assessment overview', d.examHead, d.examLede)}
  ${section('topics', 'Subject content', d.topicsHead, d.topicsLede)}
  ${d.examples ? section('examples', 'Detailed specific examples', d.examplesHead, d.examplesLede) : ''}
  ${section('lab', 'Interactive', d.lab.head, d.lab.lede)}
  ${section('technique', 'How to answer questions', d.techHead, d.techLede)}
  ${section('practice', 'Written practice', pr.head, pr.lede)}
  ${section('words', 'Key skills', d.wordsHead, d.wordsLede)}
  ${section('cards', 'Flashcards', 'Key terms', `${d.cards.length} key terms. Try to recall the definition before you turn the card over. Swipe right if you know it and left if you are still learning it. Your progress is saved on this device.`)}
  ${section('quiz', 'Practice questions', 'Quick quiz', 'Ten multiple-choice questions on this subject. Each answer comes with an explanation. A new set of questions is chosen each time.')}
  <section class="section section--tight"><div class="wrap">
    <a class="card next" href="${nid}.html" data-spot data-reveal style="--accent:var(--${ncolor})">
      <div style="display:grid;gap:14px"><p class="eyebrow">Next subject: ${ncode}</p><h2 class="h1">${nname}</h2></div>
      <span class="next__arrow" aria-hidden="true">${icons.arrow}</span>
    </a></div></section>`);

const m = k => $(`[data-mount="${k}"]`);
examAnatomy(m('exam'), d);
topicMap(m('topics'), d);
if (d.examples) examplesTracker(m('examples'), d.examples, d.id);
technique(m('technique'), d.technique);
practice(m('practice'), pr);
commandWords(m('words'), d.words);
flashcards(m('cards'), d.cards, d.id);
quiz(m('quiz'), d.quiz.map(q => ({ ...q })), { title: `${d.name} ${d.code}` });
const lab = await import(`./labs/${d.lab.kind}.js`);
lab.mount(m('lab'), d.lab);

heroArt($('[data-art]'), id, d);
boot();
subnav($('.subnav'));
if (!reduced) gsap.from('.s-hero .lede, .s-hero__stats > div, .s-hero .eyebrow, .s-hero__code', { y: 24, opacity: 0, duration: 1.2, stagger: 0.08, delay: 0.25 });
