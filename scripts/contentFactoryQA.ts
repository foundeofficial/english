import { COURSE_METADATA, WEEK1_MODULES } from '../src/data/week1MasterCourse.ts';
import { validateWeekModule } from '../src/utils/courseQA.ts';

console.log('==========================================================');
console.log(' KoreBridge Commercial Curriculum & Exam QA Verifier');
console.log(` Track: ${COURSE_METADATA.trackTitle}`);
console.log('==========================================================\n');

let allPassed = true;
let totalVocab = 0;
let totalDialogue = 0;
let totalSprint = 0;
let totalExam = 0;
let totalTwins = 0;

for (const mod of WEEK1_MODULES) {
  const res = validateWeekModule(mod);
  totalVocab += res.vocabCount;
  totalDialogue += res.dialogueTurns;
  totalSprint += res.sprintCount;
  totalExam += res.examCount;
  totalTwins += res.twinCount;

  const badge = res.passed ? 'PASS' : 'FAIL';
  console.log(
    `[${badge}] Day 0${res.dayNumber} | Vocab: ${res.vocabCount} | Dialogue: ${res.dialogueTurns} turns | Sprint: ${res.sprintCount} | Exam: ${res.examCount} (+${res.twinCount} Twin Clinic) | ${res.title}`
  );

  if (!res.passed) {
    allPassed = false;
    for (const issue of res.issues) {
      console.error(`   -> ERROR: ${issue}`);
    }
  }
}

console.log('\n----------------------------------------------------------');
console.log(` Total Curated Vocabulary & Collocations : ${totalVocab}`);
console.log(` Total Sitcom Dialogue Turns             : ${totalDialogue}`);
console.log(` Total Active Sprint Drills              : ${totalSprint}`);
console.log(` Total Authentic Worksheet & Exam Items  : ${totalExam}`);
console.log(` Total Twin Mistake Clinic Variants      : ${totalTwins}`);
console.log('----------------------------------------------------------');

if (!allPassed) {
  console.error('\nCurriculum QA failed! Fix the reported issues above.');
  process.exit(1);
}

console.log('\nAll 6 Week-1 commercial modules passed 100% QA verification!');
