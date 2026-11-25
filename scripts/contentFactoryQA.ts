import { COURSE_METADATA } from '../src/data/courseCatalog.ts';
import { ALL_30_DAY_MODULES } from '../src/data/monthMasterCourse.ts';
import { ALL_CURATED_YOUTUBE_VIDEOS } from '../src/data/youtubeLibrary.ts';
import { validateWeekModule } from '../src/utils/courseQA.ts';

console.log('==================================================================');
console.log(' KoreBridge v2 Commercial 30-Day Curriculum & Exam QA Verifier');
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
    `[${badge}] W${res.weekNumber} Day ${String(res.dayNumber).padStart(2, '0')} (${res.cefrLevel.toUpperCase()}) | Vocab:${res.vocabCount} | Dial:${res.dialogueTurns} | ReadQ:${res.readingQuizCount} | Sprint:${res.sprintCount} | Exam:${res.examCount}+${res.twinCount} | YT:${res.youtubeVideoId} | ${res.title}`
  );

  if (!res.passed) {
    allPassed = false;
    for (const issue of res.issues) {
      console.error(`   -> ERROR: ${issue}`);
    }
  }
}

console.log('\n------------------------------------------------------------------');
console.log(` Total Days Verified                     : ${ALL_30_DAY_MODULES.length} / 30`);
console.log(` Total Curated Vocabulary & Collocations : ${totalVocab}`);
console.log(` Total Curated YouTube Educational Videos: ${ALL_CURATED_YOUTUBE_VIDEOS.length}`);
console.log(` Total Reading Passages & Quiz Items     : ${ALL_30_DAY_MODULES.length} articles (${totalReadingQuiz} quiz Qs)`);
console.log(` Total Sitcom Dialogue Turns             : ${totalDialogue}`);
console.log(` Total Active Sprint Drills              : ${totalSprint}`);
console.log(` Total Authentic Worksheet & Exam Items  : ${totalExam}`);
console.log(` Total Twin Mistake Clinic Variants      : ${totalTwins}`);
console.log('------------------------------------------------------------------');

if (!allPassed) {
  console.error('\nCurriculum QA failed! Fix the reported issues above.');
  process.exit(1);
}

console.log('\nAll 30 days (Weeks 1-5, CEFR A1-C2) passed 100% QA verification!');
