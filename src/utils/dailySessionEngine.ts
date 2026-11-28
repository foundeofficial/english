import { CONNECTED_SPEECH_RULES } from '../data/connectedSpeechCourse.ts';
import { FOUNDATION_UNITS } from '../data/foundationCourse.ts';
import { GRAMMAR_UNITS } from '../data/grammarMasterBook.ts';
import { HIGH_SCHOOL_PASSAGES } from '../data/highSchoolPassages.ts';
import {
  MAGIC_E_PAIRS,
  MINIMAL_PAIRS,
  PHONICS_ALPHABET,
  PHONICS_BLENDING_CVC,
  PHONICS_DIGRAPHS,
  SIGHT_WORDS_60
} from '../data/phonicsCourse.ts';
import { SPEAKING_PROMPTS_16 } from '../data/speakingPrompts.ts';
import { CONFUSABLE_PAIRS_50, IRREGULAR_VERBS_80 } from '../data/verbAndConfusableBank.ts';
import { ETYMOLOGY_ROOTS_20, THEMATIC_VOCAB_VAULT } from '../data/vocabMasterVault.ts';
import { CONDITIONAL_WRITING_30 } from '../data/writingClinicData.ts';
import type { MasteryStage } from '../types/academy.ts';
import type { AppPersistState } from '../types/course.ts';

export interface DynamicGuidedLessonPlan {
  sessionNumber: number;
  stageTitleKo: string;
  sessionThemeKo: string;
  srsReviewSpotlight: Array<{
    promptKo: string;
    targetEn: string;
    noteKo: string;
  }>;
  warmupItems: Array<{ en: string; ko: string; tipKo: string }>;
  coreConcept: {
    badge: string;
    headlineKo: string;
    formulaEn: string;
    wrongVsRight: { wrong: string; right: string };
    intuitionKo: string;
  };
  outputTask: {
    promptKo: string;
    hintChips: string[];
    targetEn: string;
    acceptableAlts?: string[];
    explanationKo: string;
  };
  finalQuizzes: Array<{
    qKo: string;
    stimulusEn?: string;
    options: string[];
    answer: string;
    noteKo: string;
  }>;
}

function pickAt<T>(arr: readonly T[], idx: number): T {
  return arr[((idx % arr.length) + arr.length) % arr.length];
}

function uniqueStrings(list: string[]): string[] {
  return Array.from(new Set(list));
}

/**
 * Generates a fresh, non-repeating 15-minute daily guided class tailored to the
 * learner's exact stage, session counter, and active SM-2 review deck.
 */
export function buildAdaptiveDailySession(
  state: AppPersistState,
  stage: MasteryStage,
  sessionIndex: number
): DynamicGuidedLessonPlan {
  const sessionNumber = sessionIndex + 1;
  const dueSrs = state.reviewDeck
    .filter((c) => !c.mastered)
    .slice(0, 2)
    .map((c) => ({
      promptKo: c.promptKo,
      targetEn: c.targetEn,
      noteKo: c.noteKo
    }));

  // ------------------------------------------------------------------
  // STAGE 0: Kindergarten / Phonics (Cycles across 26 letters, CVC, Magic-E, Digraphs, Minimal Pairs, 60 Sight Words)
  // ------------------------------------------------------------------
  if (stage === 'stage0') {
    const letter = pickAt(PHONICS_ALPHABET, sessionIndex * 2);
    const letter2 = pickAt(PHONICS_ALPHABET, sessionIndex * 2 + 1);
    const cvc = pickAt(PHONICS_BLENDING_CVC, sessionIndex);
    const magic = pickAt(MAGIC_E_PAIRS, sessionIndex);
    const digraph = pickAt(PHONICS_DIGRAPHS, sessionIndex);
    const mp = pickAt(MINIMAL_PAIRS, sessionIndex);
    const sight = pickAt(SIGHT_WORDS_60, sessionIndex * 2);
    const sightAlt1 = pickAt(SIGHT_WORDS_60, sessionIndex * 2 + 7);
    const sightAlt2 = pickAt(SIGHT_WORDS_60, sessionIndex * 2 + 13);

    const ex1 = letter.exampleWords[0];
    const ex2 = letter2.exampleWords[0];

    return {
      sessionNumber,
      stageTitleKo: `Stage 0 · 유치원 파닉스 Day ${sessionNumber} 집중 코스`,
      sessionThemeKo: `알파벳 ${letter.letter}/${letter2.letter} + ${cvc.word} 블렌딩 + Magic-E (${magic.shortWord}→${magic.longWord})`,
      srsReviewSpotlight: dueSrs,
      warmupItems: [
        {
          en: ex1.word,
          ko: `${ex1.emoji} ${ex1.meaningKo} (${letter.letter}: ${letter.ipa})`,
          tipKo: letter.mouthTipKo
        },
        {
          en: ex2.word,
          ko: `${ex2.emoji} ${ex2.meaningKo} (${letter2.letter}: ${letter2.ipa})`,
          tipKo: letter2.mouthTipKo
        },
        {
          en: cvc.word,
          ko: `${cvc.emoji} ${cvc.meaningKo} (${cvc.parts.join(' + ')} → ${cvc.ipa})`,
          tipKo: `세 소리를 끊어 읽은 뒤 한 호흡으로 합쳐 "${cvc.word}"라고 발음해 보세요!`
        }
      ],
      coreConcept: {
        badge: `오늘의 파닉스 핵심 · Magic-E & 이중자음 (${digraph.pattern})`,
        headlineKo: `"${magic.shortWord}" 끝에 e가 붙으면 "${magic.longWord}"로 길게 변신!`,
        formulaEn: `${magic.shortWord} (${magic.shortIpa})  +  e  →  ${magic.longWord} (${magic.longIpa})`,
        wrongVsRight: {
          wrong: `${mp.wordA}(${mp.meaningAKo})와 ${mp.wordB}(${mp.meaningBKo})를 똑같이 발음하기`,
          right: `${mp.contrastLabel}: ${mp.wordA}(${mp.ipaA}) vs ${mp.wordB}(${mp.ipaB})`
        },
        intuitionKo: `${magic.tipKo} 또한 "${digraph.pattern}"(${digraph.ipa})는 ${digraph.mouthTipKo}`
      },
      outputTask: {
        promptKo: `오늘의 파닉스 문장 "${cvc.sampleSentenceKo}"를 영어로 완성하고 소리 내어 읽어 보세요!`,
        hintChips: cvc.sampleSentenceEn.split(' '),
        targetEn: cvc.sampleSentenceEn,
        explanationKo: `핵심 단어 "${cvc.word}(${cvc.meaningKo})"가 문장 속에서 자연스럽게 들릴 때까지 원어민과 내 목소리를 비교해 보세요!`
      },
      finalQuizzes: [
        {
          qKo: `Q1. "${magic.shortWord}(${magic.shortMeaningKo})" 끝에 Magic-E가 붙은 "${magic.longWord}"의 뜻은?`,
          options: uniqueStrings([magic.longMeaningKo, magic.shortMeaningKo, ex1.meaningKo]),
          answer: magic.longMeaningKo,
          noteKo: magic.tipKo
        },
        {
          qKo: `Q2. "${digraph.pattern}" 소리(${digraph.soundCueKo})가 들어간 영어 단어는?`,
          options: uniqueStrings([digraph.words[0].word, ex1.word, ex2.word]),
          answer: digraph.words[0].word,
          noteKo: `"${digraph.words[0].word}"(${digraph.words[0].meaningKo})에 ${digraph.pattern} 패턴이 들어 있습니다.`
        },
        {
          qKo: `Q3. 필수 사이트워드 "${sight.word}"의 바른 뜻은?`,
          stimulusEn: sight.sentenceEn,
          options: uniqueStrings([sight.meaningKo, sightAlt1.meaningKo, sightAlt2.meaningKo]),
          answer: sight.meaningKo,
          noteKo: `${sight.sentenceEn} (${sight.sentenceKo})`
        }
      ]
    };
  }

  // ------------------------------------------------------------------
  // STAGE 1: Elementary 10 Foundation Units + Elementary Grammar G01..G05
  // ------------------------------------------------------------------
  if (stage === 'stage1') {
    const unit = pickAt(FOUNDATION_UNITS, sessionIndex);
    const puzzle = pickAt(unit.builderPuzzles, Math.floor(sessionIndex / FOUNDATION_UNITS.length));
    const elemGrammars = GRAMMAR_UNITS.filter((g) => g.schoolStage === 'elementary');
    const gUnit = pickAt(elemGrammars, sessionIndex);
    const sents = unit.sentences.slice(0, 3);
    const gQuiz1 = pickAt(gUnit.quiz, sessionIndex);
    const gQuiz2 = pickAt(gUnit.quiz, sessionIndex + 1);
    const verb = pickAt(IRREGULAR_VERBS_80, sessionIndex);
    const verbAlt1 = pickAt(IRREGULAR_VERBS_80, sessionIndex + 5);
    const verbAlt2 = pickAt(IRREGULAR_VERBS_80, sessionIndex + 11);

    return {
      sessionNumber,
      stageTitleKo: `Stage 1 · 초등 기초 어순 Day ${sessionNumber} 코스`,
      sessionThemeKo: `${unit.badge} ${unit.titleKo} + ${gUnit.titleKo}`,
      srsReviewSpotlight: dueSrs,
      warmupItems: sents.map((s) => ({
        en: s.english,
        ko: s.naturalKo,
        tipKo: `영어 어순 직역: ${s.literalOrderKo}`
      })),
      coreConcept: {
        badge: `${unit.badge} 핵심 영어 어순 공식`,
        headlineKo: `${unit.titleKo} — ${unit.subtitleKo}`,
        formulaEn: unit.corePatternEn,
        wrongVsRight: {
          wrong: `한국어 어순 그대로 말하기: ${unit.koreanOrderDemo.join(' ')}`,
          right: `영어 뼈대 어순: ${unit.englishOrderDemo.map((b) => b.text).join(' ')}`
        },
        intuitionKo: unit.koreanBridgeTip
      },
      outputTask: {
        promptKo: `"${puzzle.promptKo}"를 영어 어순으로 직접 만들어 보세요!`,
        hintChips: puzzle.blocks.map((b) => b.text),
        targetEn: puzzle.targetEn,
        explanationKo: puzzle.explanationKo
      },
      finalQuizzes: [
        {
          qKo: `Q1. ${gQuiz1.questionKo}`,
          stimulusEn: gQuiz1.stimulusEn,
          options: gQuiz1.options,
          answer: gQuiz1.answer,
          noteKo: gQuiz1.explanationKo
        },
        {
          qKo: `Q2. ${gQuiz2.questionKo}`,
          stimulusEn: gQuiz2.stimulusEn,
          options: gQuiz2.options,
          answer: gQuiz2.answer,
          noteKo: gQuiz2.explanationKo
        },
        {
          qKo: `Q3. 불규칙 동사 "${verb.base}(${verb.meaningKo})"의 과거형은?`,
          options: uniqueStrings([verb.past, `${verb.base}ed`, verbAlt1.past, verbAlt2.past]).slice(0, 3),
          answer: verb.past,
          noteKo: `${verb.base} – ${verb.past} – ${verb.pp} · ${verb.memoryTipKo}`
        }
      ]
    };
  }

  // ------------------------------------------------------------------
  // STAGE 2: Middle School Grammar G06..G12 + Connected Speech + Middle Writing Clinic + Irregular/Confusable
  // ------------------------------------------------------------------
  if (stage === 'stage2') {
    const midGrammars = GRAMMAR_UNITS.filter((g) => g.schoolStage === 'middle');
    const gUnit = pickAt(midGrammars, sessionIndex);
    const conn = pickAt(CONNECTED_SPEECH_RULES, sessionIndex);
    const midWritings = CONDITIONAL_WRITING_30.filter((w) => w.schoolLevel === 'middle');
    const writing = pickAt(midWritings, sessionIndex);
    const conf = pickAt(CONFUSABLE_PAIRS_50.filter((c) => c.tier === 'middle'), sessionIndex);
    const verb = pickAt(IRREGULAR_VERBS_80, sessionIndex + 10);
    const gQuiz1 = pickAt(gUnit.quiz, sessionIndex);
    const gQuiz2 = pickAt(gUnit.quiz, sessionIndex + 1);

    return {
      sessionNumber,
      stageTitleKo: `Stage 2 · 중학 핵심·내신 Day ${sessionNumber} 코스`,
      sessionThemeKo: `${gUnit.titleKo} + 연음(${conn.writtenEn}) + 내신 조건영작`,
      srsReviewSpotlight: dueSrs,
      warmupItems: [
        {
          en: conn.exampleSentenceEn,
          ko: `${conn.exampleSentenceKo} (원어민 소리: ${conn.koreanPronunciationGuide})`,
          tipKo: `${conn.writtenEn} → ${conn.nativeSoundEn} · ${conn.ruleTipKo}`
        },
        {
          en: gUnit.examples[0].en,
          ko: gUnit.examples[0].ko,
          tipKo: `핵심 포인트: ${gUnit.examples[0].highlight}`
        },
        {
          en: verb.exampleEn,
          ko: `${verb.exampleKo} (${verb.base}–${verb.past}–${verb.pp})`,
          tipKo: verb.memoryTipKo
        }
      ],
      coreConcept: {
        badge: `${gUnit.stageLabelKo} · ${gUnit.titleKo}`,
        headlineKo: gUnit.subtitleKo,
        formulaEn: gUnit.coreFormula,
        wrongVsRight: {
          wrong: `한국인 단골 함정: ${gUnit.koreanTrapKo}`,
          right: `원어민 직관: ${gUnit.nativeInsightKo}`
        },
        intuitionKo: gUnit.nativeInsightKo
      },
      outputTask: {
        promptKo: `[${writing.gradeBadge} 서술형] "${writing.koreanPrompt}" (조건: ${writing.conditionsKo[0]})`,
        hintChips: writing.givenWords,
        targetEn: writing.answerEn,
        acceptableAlts: writing.acceptableAlts,
        explanationKo: writing.explanationKo
      },
      finalQuizzes: [
        {
          qKo: `Q1. ${gQuiz1.questionKo}`,
          stimulusEn: gQuiz1.stimulusEn,
          options: gQuiz1.options,
          answer: gQuiz1.answer,
          noteKo: gQuiz1.explanationKo
        },
        {
          qKo: `Q2. [혼동 어휘] 빈칸에 알맞은 단어는? (${conf.quizMeaningKo})`,
          stimulusEn: conf.quizSentence,
          options: [conf.wordA, conf.wordB],
          answer: conf.quizAnswer,
          noteKo: conf.contrastTipKo
        },
        {
          qKo: `Q3. ${gQuiz2.questionKo}`,
          stimulusEn: gQuiz2.stimulusEn,
          options: gQuiz2.options,
          answer: gQuiz2.answer,
          noteKo: gQuiz2.explanationKo
        }
      ]
    };
  }

  // ------------------------------------------------------------------
  // STAGE 3: High-School CSAT Killer Grammar G13..G20 + CSAT Passages + High Writing Clinic + High Confusables
  // ------------------------------------------------------------------
  if (stage === 'stage3') {
    const highGrammars = GRAMMAR_UNITS.filter((g) => g.schoolStage === 'high');
    const gUnit = pickAt(highGrammars, sessionIndex);
    const passage = pickAt(HIGH_SCHOOL_PASSAGES, sessionIndex);
    const highWritings = CONDITIONAL_WRITING_30.filter((w) => w.schoolLevel === 'high');
    const writing = pickAt(highWritings, sessionIndex);
    const conf = pickAt(CONFUSABLE_PAIRS_50.filter((c) => c.tier === 'high-csat'), sessionIndex);
    const csatQ = pickAt(passage.questions, sessionIndex);
    const gQuiz = pickAt(gUnit.quiz, sessionIndex);

    return {
      sessionNumber,
      stageTitleKo: `Stage 3 · 고등 내신·수능 1등급 Day ${sessionNumber} 코스`,
      sessionThemeKo: `${gUnit.titleKo} + 수능 독해 #${passage.number} + 고등 조건영작`,
      srsReviewSpotlight: dueSrs,
      warmupItems: [
        {
          en: passage.sentences[0].english,
          ko: passage.sentences[0].korean,
          tipKo: `직독직해 끊어 읽기: ${passage.sentences[0].slashBroken}`
        },
        {
          en: gUnit.examples[0].en,
          ko: gUnit.examples[0].ko,
          tipKo: `핵심 구문: ${gUnit.examples[0].highlight}`
        },
        {
          en: passage.sentences[1]?.english ?? gUnit.examples[1].en,
          ko: passage.sentences[1]?.korean ?? gUnit.examples[1].ko,
          tipKo: passage.syntaxNotes[0]?.explanationKo ?? gUnit.nativeInsightKo
        }
      ],
      coreConcept: {
        badge: `고등·수능 킬러 문법 · ${gUnit.titleKo}`,
        headlineKo: gUnit.subtitleKo,
        formulaEn: gUnit.coreFormula,
        wrongVsRight: {
          wrong: `내신·수능 감점 함정: ${gUnit.koreanTrapKo}`,
          right: `1등급 직관 공식: ${gUnit.nativeInsightKo}`
        },
        intuitionKo: gUnit.nativeInsightKo
      },
      outputTask: {
        promptKo: `[${writing.gradeBadge} 서술형] "${writing.koreanPrompt}" (조건: ${writing.conditionsKo[0]})`,
        hintChips: writing.givenWords,
        targetEn: writing.answerEn,
        acceptableAlts: writing.acceptableAlts,
        explanationKo: writing.explanationKo
      },
      finalQuizzes: [
        {
          qKo: `Q1. [고등 어법] ${gQuiz.questionKo}`,
          stimulusEn: gQuiz.stimulusEn,
          options: gQuiz.options,
          answer: gQuiz.answer,
          noteKo: gQuiz.explanationKo
        },
        {
          qKo: `Q2. [수능 혼동 어휘] (${conf.quizMeaningKo})`,
          stimulusEn: conf.quizSentence,
          options: [conf.wordA, conf.wordB],
          answer: conf.quizAnswer,
          noteKo: conf.contrastTipKo
        },
        {
          qKo: `Q3. [수능 독해 #${passage.number} · ${csatQ.questionType}] ${csatQ.questionKo}`,
          stimulusEn: csatQ.stimulusBox ?? passage.titleEn,
          options: csatQ.options,
          answer: csatQ.answer,
          noteKo: csatQ.explanationKo
        }
      ]
    };
  }

  // ------------------------------------------------------------------
  // STAGE 4: Global C1-C2 Executive / Academic Mastery (Etymology 20 + C1 Speaking 16 + Idioms + High CSAT)
  // ------------------------------------------------------------------
  const rootCard = pickAt(ETYMOLOGY_ROOTS_20, sessionIndex);
  const idioms = THEMATIC_VOCAB_VAULT.filter((w) => w.pack === 'phrasal-idiom' || w.pack === 'high-csat');
  const idiom1 = pickAt(idioms, sessionIndex * 2);
  const idiom2 = pickAt(idioms, sessionIndex * 2 + 1);
  const speaking = pickAt(SPEAKING_PROMPTS_16.slice(8), sessionIndex);
  const writing = pickAt(CONDITIONAL_WRITING_30.slice(15), sessionIndex);
  const conf = pickAt(CONFUSABLE_PAIRS_50.slice(20), sessionIndex);
  const passage = pickAt(HIGH_SCHOOL_PASSAGES, sessionIndex + 3);
  const csatQ = pickAt(passage.questions, sessionIndex);

  return {
    sessionNumber,
    stageTitleKo: `Stage 4 · 글로벌 C1–C2 마스터 Day ${sessionNumber} 코스`,
    sessionThemeKo: `어근 "${rootCard.root}" + 고급 구동사/연어 + 임원급 스피킹`,
    srsReviewSpotlight: dueSrs,
    warmupItems: [
      {
        en: idiom1.exampleEn,
        ko: `${idiom1.exampleKo} (${idiom1.word}: ${idiom1.meaningKo})`,
        tipKo: idiom1.nuanceTipKo
      },
      {
        en: idiom2.exampleEn,
        ko: `${idiom2.exampleKo} (${idiom2.word}: ${idiom2.meaningKo})`,
        tipKo: idiom2.nuanceTipKo
      },
      {
        en: rootCard.derivatives[0].exampleEn,
        ko: `${rootCard.derivatives[0].word} (${rootCard.derivatives[0].breakdown} = ${rootCard.derivatives[0].meaningKo})`,
        tipKo: rootCard.visualStoryKo
      }
    ],
    coreConcept: {
      badge: `어원 확장 엔진 · ${rootCard.originType} "${rootCard.root}"`,
      headlineKo: `"${rootCard.root}" = ${rootCard.coreMeaningKo} (1개 어근으로 ${rootCard.derivatives.length}개 고급 어휘 확장)`,
      formulaEn: rootCard.derivatives.map((d) => `${d.word}(${d.meaningKo})`).join(' · '),
      wrongVsRight: {
        wrong: `단순 동사 반복 대신 맥락에 맞는 고급 표현 쓰기`,
        right: `핵심 토론 표현: ${speaking.keyExpressions.slice(0, 3).join(' / ')}`
      },
      intuitionKo: rootCard.visualStoryKo
    },
    outputTask: {
      promptKo: `[C1 고급 구문 작문] "${writing.koreanPrompt}" (조건: ${writing.conditionsKo[0]})`,
      hintChips: writing.givenWords,
      targetEn: writing.answerEn,
      acceptableAlts: writing.acceptableAlts,
      explanationKo: writing.explanationKo
    },
    finalQuizzes: [
      {
        qKo: `Q1. 어근 "${rootCard.root}"에서 파생된 "${rootCard.derivatives[1]?.word ?? rootCard.derivatives[0].word}"의 뜻은?`,
        options: uniqueStrings([
          rootCard.derivatives[1]?.meaningKo ?? rootCard.derivatives[0].meaningKo,
          idiom1.meaningKo,
          idiom2.meaningKo
        ]),
        answer: rootCard.derivatives[1]?.meaningKo ?? rootCard.derivatives[0].meaningKo,
        noteKo: `${rootCard.derivatives[1]?.breakdown ?? rootCard.derivatives[0].breakdown} — ${rootCard.visualStoryKo}`
      },
      {
        qKo: `Q2. [C1 정밀 어휘 구분] (${conf.quizMeaningKo})`,
        stimulusEn: conf.quizSentence,
        options: [conf.wordA, conf.wordB],
        answer: conf.quizAnswer,
        noteKo: conf.contrastTipKo
      },
      {
        qKo: `Q3. [아카데믹 추론 · ${csatQ.questionType}] ${csatQ.questionKo}`,
        stimulusEn: csatQ.stimulusBox ?? passage.titleEn,
        options: csatQ.options,
        answer: csatQ.answer,
        noteKo: csatQ.explanationKo
      }
    ]
  };
}
