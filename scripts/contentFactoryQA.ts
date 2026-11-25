import { COURSE_METADATA } from '../src/data/courseCatalog.ts';
import { FOUNDATION_UNITS } from '../src/data/foundationCourse.ts';
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
import { ROLEPLAY_SCENARIOS } from '../src/data/roleplayScenarios.ts';
import { ALL_CURATED_YOUTUBE_VIDEOS } from '../src/data/youtubeLibrary.ts';
import { validateWeekModule } from '../src/utils/courseQA.ts';

console.log('==================================================================');
console.log(' KoreBridge v4.0 Zero-to-Mastery Full Curriculum QA Verifier');
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

// Validate v4.0 Stage 0 (Phonics), Stage 1 (Elementary 10), Stage 2-3 (Visual Grammar & CSAT), Stage 0-4 (Roleplay)
const v4Errors: string[] = [];

if (PHONICS_ALPHABET.length !== 26) v4Errors.push(`Phonics alphabet count ${PHONICS_ALPHABET.length} !== 26`);
if (PHONICS_BLENDING_CVC.length < 12) v4Errors.push(`CVC blends count ${PHONICS_BLENDING_CVC.length} < 12`);
if (MAGIC_E_PAIRS.length < 10) v4Errors.push(`Magic-E count ${MAGIC_E_PAIRS.length} < 10`);
if (PHONICS_DIGRAPHS.length < 12) v4Errors.push(`Digraphs count ${PHONICS_DIGRAPHS.length} < 12`);
if (MINIMAL_PAIRS.length < 12) v4Errors.push(`Minimal pairs count ${MINIMAL_PAIRS.length} < 12`);
if (SIGHT_WORDS_60.length !== 60) v4Errors.push(`Sight words count ${SIGHT_WORDS_60.length} !== 60`);

if (FOUNDATION_UNITS.length !== 10) v4Errors.push(`Foundation units count ${FOUNDATION_UNITS.length} !== 10`);
let foundationSentences = 0;
let foundationPuzzles = 0;
for (const u of FOUNDATION_UNITS) {
  foundationSentences += u.sentences.length;
  foundationPuzzles += u.builderPuzzles.length;
  for (const pz of u.builderPuzzles) {
    const joined = pz.blocks.map((b) => b.text).join(' ').replace(/\s+([?.!,])/g, '$1').trim();
    if (joined.toLowerCase() !== pz.targetEn.trim().toLowerCase()) {
      v4Errors.push(`Foundation puzzle ${pz.id} mismatch: "${joined}" !== "${pz.targetEn}"`);
    }
  }
}

if (GRAMMAR_UNITS.length !== 20) v4Errors.push(`Grammar units count ${GRAMMAR_UNITS.length} !== 20`);
let grammarQuizCount = 0;
for (const g of GRAMMAR_UNITS) {
  grammarQuizCount += g.quiz.length;
  for (const q of g.quiz) {
    if (!q.options.includes(q.answer)) {
      v4Errors.push(`Grammar quiz ${q.id} answer not in options`);
    }
  }
}
if (TRANSFORMER_SENTENCES.length < 8) v4Errors.push(`Transformers count ${TRANSFORMER_SENTENCES.length} < 8`);
if (TENSE_MATRIX_12.length !== 12) v4Errors.push(`12-tense matrix count ${TENSE_MATRIX_12.length} !== 12`);

if (HIGH_SCHOOL_PASSAGES.length !== 10) v4Errors.push(`High school passages ${HIGH_SCHOOL_PASSAGES.length} !== 10`);
let csatQuizCount = 0;
let hsSentencesCount = 0;
for (const p of HIGH_SCHOOL_PASSAGES) {
  hsSentencesCount += p.sentences.length;
  csatQuizCount += p.questions.length;
  for (const q of p.questions) {
    if (!q.options.includes(q.answer)) {
      v4Errors.push(`CSAT question ${q.id} answer not in options`);
    }
  }
}
if (ACADEMIC_ESSAY_PROMPTS.length < 6) v4Errors.push(`Essay prompts ${ACADEMIC_ESSAY_PROMPTS.length} < 6`);

if (ROLEPLAY_SCENARIOS.length !== 12) v4Errors.push(`Roleplay scenarios ${ROLEPLAY_SCENARIOS.length} !== 12`);
let roleplayTurnsCount = 0;
for (const rp of ROLEPLAY_SCENARIOS) {
  roleplayTurnsCount += rp.turns.length;
  if (rp.turns.length < 5) v4Errors.push(`Roleplay ${rp.id} turns < 5`);
}

if (v4Errors.length > 0) {
  allPassed = false;
  console.error('\n--- v4.0 Curriculum QA Errors ---');
  for (const err of v4Errors) console.error(` -> ERROR: ${err}`);
}

const totalVerifiedYoutube =
  ALL_CURATED_YOUTUBE_VIDEOS.length +
  PHONICS_YOUTUBE_VIDEOS.length +
  GRAMMAR_YOUTUBE_VIDEOS.length +
  ACADEMIC_YOUTUBE_VIDEOS.length;

console.log('\n------------------------------------------------------------------');
console.log(` Stage 0 · Phonics A-Z / Blends / Magic-E / Digraphs / MP / Sight : ${PHONICS_ALPHABET.length} / ${PHONICS_BLENDING_CVC.length} / ${MAGIC_E_PAIRS.length} / ${PHONICS_DIGRAPHS.length} / ${MINIMAL_PAIRS.length} / ${SIGHT_WORDS_60.length}`);
console.log(` Stage 1 · Elementary Foundation Units / Sentences / Puzzles      : ${FOUNDATION_UNITS.length} units / ${foundationSentences} sents / ${foundationPuzzles} puzzles`);
console.log(` Stage 2-3 · Visual Grammar Units / Quiz / Transformers / Tenses  : ${GRAMMAR_UNITS.length} units / ${grammarQuizCount} quiz Qs / ${TRANSFORMER_SENTENCES.length}x7 / ${TENSE_MATRIX_12.length} tenses`);
console.log(` Stage 3 · High-School CSAT Passages / Sentences / Qs / Essays    : ${HIGH_SCHOOL_PASSAGES.length} passages / ${hsSentencesCount} X-Ray sents / ${csatQuizCount} CSAT Qs / ${ACADEMIC_ESSAY_PROMPTS.length} essays`);
console.log(` Stage 0-4 · Multi-Turn Roleplay Scenarios / Interactive Turns    : ${ROLEPLAY_SCENARIOS.length} scenarios / ${roleplayTurnsCount} turns`);
console.log(` 30-Day Core Track · Days / Vocab / Reading / Sprint / Exam+Twin  : ${ALL_30_DAY_MODULES.length} days / ${totalVocab} vocab / ${totalReadingQuiz} readQs / ${totalSprint} sprint / ${totalExam}+${totalTwins} exam`);
console.log(` Total Verified Live YouTube Educational Videos                   : ${totalVerifiedYoutube} videos`);
console.log('------------------------------------------------------------------');

if (!allPassed) {
  console.error('\nCurriculum QA failed! Fix the reported issues above.');
  process.exit(1);
}

console.log('\nKoreBridge v4.0 Zero-to-Mastery (Stage 0 Pre-A1 -> High-School CSAT -> C2) passed 100% QA verification!');
