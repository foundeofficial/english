import { CONNECTED_SPEECH_RULES } from '../src/data/connectedSpeechCourse.ts';
import { COURSE_METADATA } from '../src/data/courseCatalog.ts';
import { FOUNDATION_UNITS } from '../src/data/foundationCourse.ts';
import { GRADED_STORYBOOKS } from '../src/data/gradedStorybooks.ts';
import {
  GRAMMAR_UNITS,
  GRAMMAR_YOUTUBE_VIDEOS,
  TENSE_MATRIX_12,
  TRANSFORMER_SENTENCES
} from '../src/data/grammarMasterBook.ts';
import {
  ACADEMIC_ESSAY_PROMPTS,
  ACADEMIC_YOUTUBE_VIDEOS,
  HIGH_SCHOOL_PASSAGES
} from '../src/data/highSchoolPassages.ts';
import { MOCK_EXAM_PAPERS } from '../src/data/mockExamBank.ts';
import { ALL_30_DAY_MODULES } from '../src/data/monthMasterCourse.ts';
import {
  MAGIC_E_PAIRS,
  MINIMAL_PAIRS,
  PHONICS_ALPHABET,
  PHONICS_BLENDING_CVC,
  PHONICS_DIGRAPHS,
  PHONICS_YOUTUBE_VIDEOS,
  SIGHT_WORDS_60
} from '../src/data/phonicsCourse.ts';
import { CSAT_INSERTION_10, CSAT_ORDERING_10 } from '../src/data/csatKillerDrills.ts';
import { PATTERN_REFLEX_20 } from '../src/data/patternReflexDrills.ts';
import { ROLEPLAY_SCENARIOS } from '../src/data/roleplayScenarios.ts';
import { SPEAKING_PROMPTS_16 } from '../src/data/speakingPrompts.ts';
import { CONFUSABLE_PAIRS_50, IRREGULAR_VERBS_80 } from '../src/data/verbAndConfusableBank.ts';
import { ETYMOLOGY_ROOTS_20, THEMATIC_VOCAB_VAULT } from '../src/data/vocabMasterVault.ts';
import { CONDITIONAL_WRITING_30, ERROR_CORRECTION_30 } from '../src/data/writingClinicData.ts';
import { ALL_CURATED_YOUTUBE_VIDEOS } from '../src/data/youtubeLibrary.ts';
import { validateWeekModule } from '../src/utils/courseQA.ts';

console.log('==================================================================');
console.log(' KoreBridge v7.0 Transcendence Full Curriculum QA Verifier');
console.log(` Track: ${COURSE_METADATA.trackTitle}`);
console.log('==================================================================\n');

let allPassed = true;
let totalVocab = 0;
let totalDialogue = 0;
let totalReadingQuiz = 0;
let totalSprint = 0;
let totalExam = 0;
let totalTwins = 0;

const seenDays = new Set<number>();
const seenVocabIds = new Set<string>();
const seenExamIds = new Set<string>();

if (ALL_30_DAY_MODULES.length !== 30) {
  console.error(`ERROR: Expected 30 day modules, found ${ALL_30_DAY_MODULES.length}`);
  allPassed = false;
}

for (const mod of ALL_30_DAY_MODULES) {
  const res = validateWeekModule(mod);
  totalVocab += res.vocabCount;
  totalDialogue += res.dialogueTurns;
  totalReadingQuiz += res.readingQuizCount;
  totalSprint += res.sprintCount;
  totalExam += res.examCount;
  totalTwins += res.twinCount;

  if (seenDays.has(mod.dayNumber)) {
    res.issues.push(`Duplicate dayNumber ${mod.dayNumber}`);
    res.passed = false;
  }
  seenDays.add(mod.dayNumber);

  for (const v of mod.vocabList) {
    if (seenVocabIds.has(v.id)) {
      res.issues.push(`Duplicate vocab ID ${v.id}`);
      res.passed = false;
    }
    seenVocabIds.add(v.id);
  }
  for (const e of mod.worksheetExam) {
    if (seenExamIds.has(e.id)) {
      res.issues.push(`Duplicate exam ID ${e.id}`);
      res.passed = false;
    }
    seenExamIds.add(e.id);
  }

  const badge = res.passed ? 'PASS' : 'FAIL';
  console.log(
    `[${badge}] W${res.weekNumber} Day ${String(res.dayNumber).padStart(2, '0')} (${res.cefrLevel.toUpperCase()}) | Vocab:${res.vocabCount} | Dial:${res.dialogueTurns} | ReadQ:${res.readingQuizCount} | Sprint:${res.sprintCount} | Exam:${res.examCount}+${res.twinCount} | YT:${res.youtubeVideoId}`
  );

  if (!res.passed) {
    allPassed = false;
    for (const issue of res.issues) {
      console.error(`   -> ERROR: ${issue}`);
    }
  }
}

const errors: string[] = [];

// Stage 0 & 1 QA
if (PHONICS_ALPHABET.length !== 26) errors.push(`Phonics alphabet ${PHONICS_ALPHABET.length} !== 26`);
if (PHONICS_BLENDING_CVC.length < 12) errors.push(`CVC blends ${PHONICS_BLENDING_CVC.length} < 12`);
if (MAGIC_E_PAIRS.length < 10) errors.push(`Magic-E ${MAGIC_E_PAIRS.length} < 10`);
if (PHONICS_DIGRAPHS.length < 12) errors.push(`Digraphs ${PHONICS_DIGRAPHS.length} < 12`);
if (MINIMAL_PAIRS.length < 12) errors.push(`Minimal pairs ${MINIMAL_PAIRS.length} < 12`);
if (SIGHT_WORDS_60.length !== 60) errors.push(`Sight words ${SIGHT_WORDS_60.length} !== 60`);
if (CONNECTED_SPEECH_RULES.length < 16) errors.push(`Connected speech ${CONNECTED_SPEECH_RULES.length} < 16`);

if (FOUNDATION_UNITS.length !== 10) errors.push(`Foundation units ${FOUNDATION_UNITS.length} !== 10`);
let foundationSentences = 0;
let foundationPuzzles = 0;
for (const u of FOUNDATION_UNITS) {
  foundationSentences += u.sentences.length;
  foundationPuzzles += u.builderPuzzles.length;
  for (const pz of u.builderPuzzles) {
    const joined = pz.blocks.map((b) => b.text).join(' ').replace(/\s+([?.!,])/g, '$1').trim();
    if (joined.toLowerCase() !== pz.targetEn.trim().toLowerCase()) {
      errors.push(`Foundation puzzle ${pz.id} mismatch: "${joined}" !== "${pz.targetEn}"`);
    }
  }
}

// Stage 2-3 Grammar & High-School CSAT QA
if (GRAMMAR_UNITS.length !== 20) errors.push(`Grammar units ${GRAMMAR_UNITS.length} !== 20`);
let grammarQuizCount = 0;
for (const g of GRAMMAR_UNITS) {
  grammarQuizCount += g.quiz.length;
  for (const q of g.quiz) {
    if (!q.options.includes(q.answer)) errors.push(`Grammar quiz ${q.id} answer not in options`);
  }
}
if (TRANSFORMER_SENTENCES.length < 8) errors.push(`Transformers ${TRANSFORMER_SENTENCES.length} < 8`);
if (TENSE_MATRIX_12.length !== 12) errors.push(`12-tense matrix ${TENSE_MATRIX_12.length} !== 12`);

if (HIGH_SCHOOL_PASSAGES.length !== 15) errors.push(`High school passages ${HIGH_SCHOOL_PASSAGES.length} !== 15`);
let csatQuizCount = 0;
let hsSentencesCount = 0;
for (const p of HIGH_SCHOOL_PASSAGES) {
  hsSentencesCount += p.sentences.length;
  csatQuizCount += p.questions.length;
  for (const s of p.sentences) {
    const joined = s.segments.map((seg) => seg.text).join(' ');
    if (joined !== s.english) errors.push(`HS sentence ${s.id} segment join mismatch`);
  }
  for (const q of p.questions) {
    if (!q.options.includes(q.answer)) errors.push(`CSAT question ${q.id} answer not in options`);
  }
}
if (ACADEMIC_ESSAY_PROMPTS.length < 6) errors.push(`Essay prompts ${ACADEMIC_ESSAY_PROMPTS.length} < 6`);

// Roleplay QA
if (ROLEPLAY_SCENARIOS.length !== 12) errors.push(`Roleplay scenarios ${ROLEPLAY_SCENARIOS.length} !== 12`);
let roleplayTurnsCount = 0;
for (const rp of ROLEPLAY_SCENARIOS) {
  roleplayTurnsCount += rp.turns.length;
  if (rp.turns.length < 5) errors.push(`Roleplay ${rp.id} turns < 5`);
}

// v5.0 Storybooks QA
if (GRADED_STORYBOOKS.length !== 12) errors.push(`Graded storybooks ${GRADED_STORYBOOKS.length} !== 12`);
let storybookChapters = 0;
let storybookSentences = 0;
let storybookQuizzes = 0;
for (const sb of GRADED_STORYBOOKS) {
  storybookChapters += sb.chapters.length;
  for (const ch of sb.chapters) storybookSentences += ch.sentences.length;
  storybookQuizzes += sb.quiz.length;
  for (const q of sb.quiz) {
    if (!q.options.includes(q.answer)) errors.push(`Storybook quiz ${q.id} answer not in options`);
  }
}

// v5.0 Mock Exams QA
if (MOCK_EXAM_PAPERS.length !== 4) errors.push(`Mock exams ${MOCK_EXAM_PAPERS.length} !== 4`);
let mockQuestionsCount = 0;
let mockListeningCount = 0;
for (const paper of MOCK_EXAM_PAPERS) {
  mockQuestionsCount += paper.questions.length;
  for (const q of paper.questions) {
    if (q.listeningDialogue && q.listeningDialogue.length > 0) mockListeningCount += 1;
    if (!q.options.includes(q.answer)) errors.push(`Mock exam ${paper.id} ${q.id} answer not in options`);
  }
}

// v5.0 Vocab Vault & Etymology QA
if (THEMATIC_VOCAB_VAULT.length !== 240) errors.push(`Vocab vault ${THEMATIC_VOCAB_VAULT.length} !== 240`);
if (ETYMOLOGY_ROOTS_20.length !== 20) errors.push(`Etymology roots ${ETYMOLOGY_ROOTS_20.length} !== 20`);
const totalDerivatives = ETYMOLOGY_ROOTS_20.reduce((sum, r) => sum + r.derivatives.length, 0);

// v6.0 School Writing Clinic, Irregular Verbs, Confusable Pairs & 1-Min Speaking QA
if (CONDITIONAL_WRITING_30.length !== 30) {
  errors.push(`Conditional writing ${CONDITIONAL_WRITING_30.length} !== 30`);
}
if (ERROR_CORRECTION_30.length !== 30) {
  errors.push(`Error correction ${ERROR_CORRECTION_30.length} !== 30`);
}
for (const ec of ERROR_CORRECTION_30) {
  const errSegs = ec.segments.filter((s) => s.isError);
  if (errSegs.length !== 1) {
    errors.push(`Error correction ${ec.id} must have strictly 1 isError segment, got ${errSegs.length}`);
  } else if (!errSegs[0].text.includes(ec.wrongText)) {
    errors.push(`Error correction ${ec.id} wrongText "${ec.wrongText}" not found in error segment "${errSegs[0].text}"`);
  }
}

if (IRREGULAR_VERBS_80.length !== 80) {
  errors.push(`Irregular verbs ${IRREGULAR_VERBS_80.length} !== 80`);
}
const seenVerbBases = new Set<string>();
for (const v of IRREGULAR_VERBS_80) {
  const b = v.base.toLowerCase();
  if (seenVerbBases.has(b)) errors.push(`Duplicate irregular verb base "${v.base}"`);
  seenVerbBases.add(b);
}

if (CONFUSABLE_PAIRS_50.length !== 50) {
  errors.push(`Confusable pairs ${CONFUSABLE_PAIRS_50.length} !== 50`);
}
for (const cp of CONFUSABLE_PAIRS_50) {
  if (cp.quizAnswer !== cp.wordA && cp.quizAnswer !== cp.wordB) {
    errors.push(`Confusable pair ${cp.id} quizAnswer "${cp.quizAnswer}" !== wordA/wordB`);
  }
  if (!cp.quizSentence.includes('_____')) {
    errors.push(`Confusable pair ${cp.id} quizSentence missing blank _____`);
  }
}

if (SPEAKING_PROMPTS_16.length !== 16) {
  errors.push(`Speaking prompts ${SPEAKING_PROMPTS_16.length} !== 16`);
}

// v7.0 Pattern Reflex 20x6=120 & CSAT Killer 20 QA
if (PATTERN_REFLEX_20.length !== 20) {
  errors.push(`Pattern reflex sets ${PATTERN_REFLEX_20.length} !== 20`);
}
let totalPatternVariations = 0;
for (const set of PATTERN_REFLEX_20) {
  totalPatternVariations += set.variations.length;
  if (set.variations.length !== 6) {
    errors.push(`Pattern set ${set.id} variations ${set.variations.length} !== 6`);
  }
  for (const v of set.variations) {
    const joined = v.chunkBlocks.join(' ').replace(/\s+([?.!,])/g, '$1').trim();
    if (joined.toLowerCase() !== v.targetEn.trim().toLowerCase()) {
      errors.push(`Pattern ${v.id} chunk join mismatch: "${joined}" !== "${v.targetEn}"`);
    }
  }
}

if (CSAT_ORDERING_10.length !== 10) {
  errors.push(`CSAT ordering ${CSAT_ORDERING_10.length} !== 10`);
}
for (const ord of CSAT_ORDERING_10) {
  if ([...ord.correctOrder].sort().join('') !== 'ABC') {
    errors.push(`CSAT ordering ${ord.id} invalid order ${ord.correctOrder.join('-')}`);
  }
  const combined = `${ord.givenBoxEn} ${ord.paragraphs.A.textEn} ${ord.paragraphs.B.textEn} ${ord.paragraphs.C.textEn}`.toLowerCase();
  for (const clue of ord.clues) {
    if (!combined.includes(clue.phrase.toLowerCase())) {
      errors.push(`CSAT ordering ${ord.id} clue "${clue.phrase}" not found in English text`);
    }
  }
}

if (CSAT_INSERTION_10.length !== 10) {
  errors.push(`CSAT insertion ${CSAT_INSERTION_10.length} !== 10`);
}
for (const ins of CSAT_INSERTION_10) {
  if (ins.segmentsEn.length !== 6 || ins.segmentsEn.some((s) => !s.trim())) {
    errors.push(`CSAT insertion ${ins.id} must have 6 non-empty segments`);
  }
  const combined = `${ins.targetSentenceEn} ${ins.segmentsEn.join(' ')}`.toLowerCase();
  for (const clue of ins.clues) {
    if (!combined.includes(clue.phrase.toLowerCase())) {
      errors.push(`CSAT insertion ${ins.id} clue "${clue.phrase}" not found in English text`);
    }
  }
}

if (errors.length > 0) {
  allPassed = false;
  console.error('\n--- v4/v5/v6/v7 Curriculum QA Errors ---');
  for (const err of errors) console.error(` -> ERROR: ${err}`);
}

const totalVerifiedYoutube =
  ALL_CURATED_YOUTUBE_VIDEOS.length +
  PHONICS_YOUTUBE_VIDEOS.length +
  GRAMMAR_YOUTUBE_VIDEOS.length +
  ACADEMIC_YOUTUBE_VIDEOS.length;

console.log('\n------------------------------------------------------------------');
console.log(` Stage 0 · Phonics A-Z / Blends / Magic-E / Digraphs / MP / Sight / Connected : ${PHONICS_ALPHABET.length}/${PHONICS_BLENDING_CVC.length}/${MAGIC_E_PAIRS.length}/${PHONICS_DIGRAPHS.length}/${MINIMAL_PAIRS.length}/${SIGHT_WORDS_60.length}/${CONNECTED_SPEECH_RULES.length}`);
console.log(` Stage 1 · Elementary Foundation Units / Sentences / Puzzles                  : ${FOUNDATION_UNITS.length} units / ${foundationSentences} sents / ${foundationPuzzles} puzzles`);
console.log(` Stage 2-3 · Visual Grammar Units / Quiz / Transformers / Tenses              : ${GRAMMAR_UNITS.length} units / ${grammarQuizCount} quiz Qs / ${TRANSFORMER_SENTENCES.length}x7 / ${TENSE_MATRIX_12.length} tenses`);
console.log(` Stage 2-3 · School Writing Clinic (Conditional + Spot & Fix Error)           : ${CONDITIONAL_WRITING_30.length} writing + ${ERROR_CORRECTION_30.length} error-fix`);
console.log(` Stage 3 · High-School CSAT Passages + CSAT 36-39 Killer Ordering/Insertion   : ${HIGH_SCHOOL_PASSAGES.length} passages (${csatQuizCount} Qs) + ${CSAT_ORDERING_10.length} ordering + ${CSAT_INSERTION_10.length} insertion`);
console.log(` Stage 0-4 · Graded Storybooks / Chapters / Synced Sents / Quizzes            : ${GRADED_STORYBOOKS.length} books / ${storybookChapters} chs / ${storybookSentences} sents / ${storybookQuizzes} Qs`);
console.log(` Stage 0-4 · Roleplay + 1-Min Speaking + 2-Sec Pattern Reflex Drills          : ${ROLEPLAY_SCENARIOS.length} roleplays + ${SPEAKING_PROMPTS_16.length} speaking + ${PATTERN_REFLEX_20.length} patterns (${totalPatternVariations} drills)`);
console.log(` Stage 1-4 · Timed Mock Exams / Total Qs / Multi-Voice Listening Qs           : ${MOCK_EXAM_PAPERS.length} exams / ${mockQuestionsCount} Qs (${mockListeningCount} audio)`);
console.log(` Vocab Mastery · 30-Day + Sight + Vault + Etymology + Verbs + Confusables     : ${totalVocab} + ${SIGHT_WORDS_60.length} + ${THEMATIC_VOCAB_VAULT.length} + ${totalDerivatives} + ${IRREGULAR_VERBS_80.length} verbs + ${CONFUSABLE_PAIRS_50.length} pairs`);
console.log(` 30-Day Core Track · Days / Reading Qs / Sprints / Worksheet+Twin             : ${ALL_30_DAY_MODULES.length} days / ${totalReadingQuiz} readQs / ${totalSprint} sprints / ${totalExam}+${totalTwins}`);
console.log(` Total Verified Live YouTube Educational Videos                               : ${totalVerifiedYoutube} videos`);
console.log('------------------------------------------------------------------');

if (!allPassed) {
  console.error('\nCurriculum QA failed! Fix the reported issues above.');
  process.exit(1);
}

console.log('\nKoreBridge v7.0 Transcendence passed 100% QA verification!');
