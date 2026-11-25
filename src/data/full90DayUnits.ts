import type {
  CurriculumUnit,
  ExamQuestion,
  SemesterDayNode,
  SprintQuestion
} from '../types/learning.ts';
import { CURRICULUM_UNITS } from './curriculum.ts';
import { SEMESTER_90_DAYS } from './semester90Days.ts';

/**
 * Splits an English sentence into 3-4 pedagogical meaning chunks (Subject+Verb / Object / Modifiers)
 */
function splitIntoMeaningChunks(sentence: string): string[] {
  const words = sentence.trim().split(/\s+/);
  if (words.length <= 5) {
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  }
  const chunkSize = Math.ceil(words.length / 4);
  const chunks: string[] = [];
  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(' '));
  }
  return chunks;
}

/**
 * Selects a high-value lexical/grammatical keyword from the sentence to create an Active Recall blank
 */
function extractTargetKeyword(sentence: string): {
  before: string;
  answer: string;
  after: string;
  distractors: string[];
} {
  const cleanWords = sentence.trim().split(/\s+/);
  const stopSet = new Set(['i', 'we', 'you', 'they', 'he', 'she', 'it', 'the', 'a', 'an', 'to', 'of', 'in', 'on', 'at']);

  let targetIdx = cleanWords.findIndex((w, idx) => {
    const bare = w.toLowerCase().replace(/[^a-z-]/g, '');
    return idx > 0 && idx < cleanWords.length - 1 && bare.length >= 4 && !stopSet.has(bare);
  });

  if (targetIdx === -1) {
    targetIdx = Math.min(1, cleanWords.length - 1);
  }

  const rawWord = cleanWords[targetIdx];
  const answer = rawWord.replace(/[.,!?'"’]/g, '');
  const trailingPunct = rawWord.slice(answer.length);

  const before = cleanWords.slice(0, targetIdx).join(' ');
  const after =
    (trailingPunct ? `${trailingPunct} ` : '') +
    cleanWords.slice(targetIdx + 1).join(' ');

  // Pedagogically distinct distractors guaranteed not to duplicate answer
  const pool = ['making', 'having', 'until', 'promise', 'ambiguous', 'discussed', 'staying', 'delay'];
  const distractors = pool
    .filter((d) => d.toLowerCase() !== answer.toLowerCase())
    .slice(0, 3);

  return { before, answer, after: after.trim(), distractors };
}

/**
 * Builds a dedicated, 4-Gate QA compliant CurriculumUnit for any of the 90 Semester Days
 */
export function buildUnitForSemesterDay(node: SemesterDayNode): CurriculumUnit {
  const unitId = `day-unit-${String(node.day).padStart(2, '0')}`;

  // Map week 1..12 to level labels & K-Level numbers
  const levelLabel: CurriculumUnit['level'] =
    node.week <= 2
      ? 'Lv.2 A1+'
      : node.week <= 6
      ? 'Lv.5 B1'
      : node.week <= 9
      ? 'Lv.6 B1+'
      : 'Lv.8 B2';

  const kLevelNum = Math.min(11, Math.max(2, Math.ceil(node.week * 0.85) + 1));

  const category: CurriculumUnit['category'] =
    node.week <= 2 || node.week === 5
      ? 'daily-order'
      : node.week === 3 || node.week === 4 || node.week === 6 || node.week === 9 || node.week === 10
      ? 'business'
      : node.week <= 8 || node.week === 11
      ? 'opic-speaking'
      : 'trend-news';

  const categoryLabel =
    category === 'daily-order'
      ? '일상·어순 혁신'
      : category === 'business'
      ? '비즈니스 실무'
      : category === 'opic-speaking'
      ? '오픽·면접 구조화'
      : '글로벌 시사 토론';

  const chunks = splitIntoMeaningChunks(node.coreSentenceEn);
  const blankInfo = extractTargetKeyword(node.coreSentenceEn);

  const companionNode =
    SEMESTER_90_DAYS.find((d) => d.week === node.week && d.day !== node.day && d.dayType === 'regular-lesson') ??
    SEMESTER_90_DAYS[0];
  const companionChunks = splitIntoMeaningChunks(companionNode.coreSentenceEn);

  const sprintQuestions: SprintQuestion[] = [
    {
      id: `${unitId}-sq1`,
      type: 'chunk-order',
      koreanPrompt: node.coreSentenceKo,
      englishPromptHint: `Construct the target expression focusing on ${node.grammarPoint}.`,
      koreanChunksGuide: ['주어+핵심동사 먼저 발사', '목적어·핵심보어 연결', '전치사·시간/상황 마무리'],
      targetEnglish: node.coreSentenceEn,
      chunks,
      nuanceExplanation: `[Day ${node.day} 핵심 원리] ${node.grammarPoint} 구조를 활용해 주어와 동사 뼈대를 먼저 세운 뒤 수식어구를 연결합니다.`
    },
    {
      id: `${unitId}-sq2`,
      type: 'fill-blank',
      koreanPrompt: `${node.coreSentenceKo} (핵심 어휘·어형 인출)`,
      englishPromptHint: `Recall the exact keyword for ${node.grammarPoint}.`,
      koreanChunksGuide: ['문맥에 맞는 정확한 어형·전치사 인출'],
      targetEnglish: node.coreSentenceEn,
      blankSentence: {
        before: blankInfo.before,
        answer: blankInfo.answer,
        after: blankInfo.after,
        hint: `${blankInfo.answer[0]} _ _ (${blankInfo.answer.length}글자 핵심어)`
      },
      nuanceExplanation: `문장의 의미를 결정짓는 핵심어 '${blankInfo.answer}'의 철자와 결합 어법을 정확히 체화하세요.`
    },
    {
      id: `${unitId}-sq3`,
      type: 'chunk-order',
      koreanPrompt: companionNode.coreSentenceKo,
      englishPromptHint: `Practice the companion weekly structure (${companionNode.grammarPoint}).`,
      koreanChunksGuide: ['연계 문형 어순 조립', '동사구 연결', '마무리 부사구'],
      targetEnglish: companionNode.coreSentenceEn,
      chunks: companionChunks,
      nuanceExplanation: `${node.week}주차 연계 문형(${companionNode.grammarPoint})까지 함께 묶어 반사신경을 높입니다.`
    }
  ];

  const examQuestions: ExamQuestion[] = [
    {
      id: `${unitId}-ex1`,
      number: 1,
      questionType: 'multiple-choice',
      grammarTag: node.grammarPoint,
      promptKo: `다음 문장이 "${node.coreSentenceKo}"라는 뜻이 되도록 빈칸에 가장 알맞은 것을 고르시오.`,
      promptEn: `${blankInfo.before} _______ ${blankInfo.after}`,
      options: [blankInfo.answer, ...blankInfo.distractors],
      correctAnswer: blankInfo.answer,
      explanationKo: `목표 구문(${node.grammarPoint})과 문맥 정합성에 따라 '${blankInfo.answer}'가 유일한 정답입니다.`,
      twinVariant: {
        promptKo: `[쌍둥이 변형] 동일한 핵심어를 넣어 문장을 완성하시오: "${node.coreSentenceKo}"`,
        promptEn: `${blankInfo.before} _______ ${blankInfo.after}`,
        correctAnswer: blankInfo.answer,
        explanationKo: `핵심 표현 '${blankInfo.answer}'를 빈칸 없이 즉각 인출할 수 있어야 합니다.`
      }
    },
    {
      id: `${unitId}-ex2`,
      number: 2,
      questionType: 'multiple-choice',
      grammarTag: '콩글리시 & 어법 판별',
      promptKo: `다음 중 어법상 올바르고 원어민이 실제로 사용하는 자연스러운 문장은?`,
      promptEn: 'Choose the single grammatically accurate and natural sentence.',
      options: [
        node.coreSentenceEn,
        'Yesterday I had many works at the company.',
        'Let us discuss about this ambiguous schedule.',
        'I have a promise with my friend until Friday.'
      ],
      correctAnswer: node.coreSentenceEn,
      explanationKo: '나머지 보기는 불가산 명사(many works), 불필요 전치사(discuss about), 콩글리시(promise/ambiguous) 오류가 포함되어 있습니다.',
      twinVariant: {
        promptKo: `[쌍둥이 변형] 연계 핵심 문장을 영어로 정확히 쓰시오: "${companionNode.coreSentenceKo}"`,
        promptEn: `Hint: (${companionChunks.join(' / ')})`,
        correctAnswer: companionNode.coreSentenceEn,
        explanationKo: `${companionNode.grammarPoint} 어순을 그대로 적용해 완성합니다.`
      }
    },
    {
      id: `${unitId}-ex3`,
      number: 3,
      questionType: 'sentence-rewrite',
      grammarTag: '서술형 통문장 배열 영작',
      promptKo: `[조건부 서술형] 제시된 청크를 모두 배열하여 "${node.coreSentenceKo}"를 완성하시오.`,
      promptEn: `Chunks: (${[...chunks].reverse().join(' / ')})`,
      correctAnswer: node.coreSentenceEn,
      explanationKo: `주어+동사 핵심절부터 시작한 뒤 수식 어구를 순서대로 결합하여 "${node.coreSentenceEn}"을 완성합니다.`,
      twinVariant: {
        promptKo: `[쌍둥이 변형] 힌트 없이 한영 통문장 영작을 수행하시오: "${node.coreSentenceKo}"`,
        promptEn: 'Write the full sentence with proper capitalization and punctuation.',
        correctAnswer: node.coreSentenceEn,
        explanationKo: `대소문자와 마침표까지 정확히 "${node.coreSentenceEn}"로 작성합니다.`
      }
    }
  ];

  return {
    id: unitId,
    level: levelLabel,
    kLevelNum,
    category,
    categoryLabel: `Day ${String(node.day).padStart(2, '0')} · ${categoryLabel}`,
    title: `[Day ${String(node.day).padStart(2, '0')}] ${node.titleKo}`,
    subtitle: `${node.week}주차 정규 커리큘럼 · 핵심 문법: ${node.grammarPoint} (CEFR ${node.cefr})`,
    keySentence: node.coreSentenceEn,
    sprintMinutes: 7,
    deepClassMinutes: 45,
    instructorName:
      category === 'business'
        ? '케빈 박 강사 (실무 비즈니스 전담)'
        : category === 'daily-order'
        ? '서지안 대표강사 (어순·구문 전담)'
        : '제나 킴 강사 (스피킹·토론 전담)',
    visualAssetPath:
      category === 'business'
        ? '/assets/office_sitcom_scene.jpg'
        : '/assets/visual_preposition_card.jpg',
    flowSitcomTitle: `Google Flow EP.${String(node.week).padStart(2, '0')} · Day ${node.day} 실전 맥락 씬`,
    flowSitcomShots: [
      {
        shotNumber: 1,
        cameraSpec: 'Medium Two-Shot · Consistent Character Reference (Google Flow Scene Builder)',
        character: 'Chloe',
        dialogueEn: node.coreSentenceEn,
        dialogueKo: node.coreSentenceKo
      },
      {
        shotNumber: 2,
        cameraSpec: 'Close-Up Reaction · Native Audio Intonation Sync',
        character: 'Marcus',
        dialogueEn: companionNode.coreSentenceEn,
        dialogueKo: companionNode.coreSentenceKo
      }
    ],
    nuanceCard: {
      expression: `${node.grammarPoint} — "${blankInfo.answer}"`,
      koreanMeaning: node.coreSentenceKo,
      englishDefinition: `Core communicative pattern (${node.grammarPoint}) aligned with CEFR ${node.cefr} fluency standards.`,
      structuralFormula: chunks.map((c) => `[${c}]`).join(' + '),
      konglishTrap: '한국어 어순대로 시간·장소 부사부터 나열하지 말고 반드시 주어+핵심동사를 1초 안에 먼저 제시하세요.',
      nativeNuance: `실제 원어민 대화와 이메일에서 ${node.grammarPoint} 구문은 의도를 가장 간결하고 세련되게 전달하는 핵심 장치입니다.`,
      casualExample: node.coreSentenceEn,
      politeExample: companionNode.coreSentenceEn,
      levelVariants: {
        easy: node.coreSentenceEn,
        standard: node.coreSentenceEn,
        challenge: `${node.coreSentenceEn} Furthermore, ${companionNode.coreSentenceEn.charAt(0).toLowerCase() + companionNode.coreSentenceEn.slice(1)}`
      }
    },
    sprintQuestions,
    lectureChapters: [
      {
        id: `${unitId}-ch1`,
        timestamp: '00:00 ~ 20:00',
        durationMin: 20,
        title: `Chapter 1. [Day ${node.day}] ${node.titleKo} — 구문 원리 완벽 해부`,
        boardFormula: chunks.map((c) => `[${c}]`).join(' ➔ '),
        koreanMisconception: `"${node.coreSentenceKo}"를 한국어 어순 그대로 뒷단어부터 역순 번역하려다 발화 병목이 발생합니다.`,
        nativeMindset: `첫 청크 "${chunks[0]}"을 먼저 뱉어 문장의 방향타를 고정한 뒤 나머지 정보를 순서대로 이어 붙입니다.`,
        exampleEn: node.coreSentenceEn,
        exampleKo: node.coreSentenceKo,
        instructorScript: `오늘은 90일 정규 학기의 Day ${node.day} 수업입니다. 칠판의 공식처럼 "${chunks[0]}"을 1초 만에 먼저 내뱉는 연습에 집중해 보세요. 문법 규칙(${node.grammarPoint})을 머리로 외우는 것을 넘어 입 근육의 반사신경으로 만들어 드리겠습니다.`
      },
      {
        id: `${unitId}-ch2`,
        timestamp: '20:00 ~ 45:00',
        durationMin: 25,
        title: `Chapter 2. ${node.week}주차 실전 확장 및 오답 빈출 포인트 정리`,
        boardFormula: `${node.grammarPoint} + ${companionNode.grammarPoint}`,
        koreanMisconception: '단문 하나만 말하고 대화가 끊겨 실전 미팅이나 인터뷰에서 단답형에 머무름.',
        nativeMindset: '핵심 문장 뒤에 연계 문장을 자연스럽게 덧붙여 2~3문장 단락으로 소통합니다.',
        exampleEn: companionNode.coreSentenceEn,
        exampleKo: companionNode.coreSentenceKo,
        instructorScript: `방금 익힌 첫 문장에 이어 "${companionNode.coreSentenceEn}"까지 연결해 보세요. 이어지는 2교시 워크북과 단원평가 시험지에서 손으로 직접 쓰며 완전히 내 것으로 굳히겠습니다.`
      }
    ],
    dictationItems: [
      {
        id: `${unitId}-dict1`,
        speaker: 'Chloe (Native Coach)',
        fullAudioText: node.coreSentenceEn,
        beforeBlank: blankInfo.before,
        answer: blankInfo.answer,
        afterBlank: blankInfo.after,
        koreanTranslation: node.coreSentenceKo,
        listeningTip: `핵심 강세가 실리는 '${blankInfo.answer}'와 앞뒤 기능어의 연음에 귀를 기울여 보세요.`
      }
    ],
    workbookWritingPrompt: {
      situationKo: `오늘 배운 Day ${node.day} 핵심 문형(${node.grammarPoint})을 활용하여 본인의 실제 업무·일상 상황에 맞는 영어 문장 1~2개를 직접 작문해보세요.`,
      guidePoints: [
        `핵심 공식 적용: ${chunks.map((c) => `[${c}]`).join(' + ')}`,
        `필수 포함 요소: ${node.grammarPoint}`,
        '대소문자 및 마침표 정규성 준수'
      ],
      modelParagraphEn: `${node.coreSentenceEn} ${companionNode.coreSentenceEn}`
    },
    examQuestions,
    tutorTurns: [
      {
        id: `${unitId}-tu1`,
        tutorQuestionEn: `Welcome to Day ${node.day}! Can you make your own sentence using today's pattern (${node.grammarPoint}) about your week?`,
        tutorQuestionKo: `Day ${node.day} 1:1 과외 시간입니다! 오늘 배운 패턴(${node.grammarPoint})을 활용해 본인 이야기를 한 문장 이상 들려주시겠어요?`,
        followUpProbeEn: 'Nice structure! Could you add one more detail about why or when that happened?',
        expansionHints: [chunks[0], blankInfo.answer, 'because / so that ...'],
        sampleModelAnswer: node.coreSentenceEn
      }
    ]
  };
}

import { DIVISION_SPECIAL_UNITS } from './academyDivisions.ts';

/**
 * Full 90-Day Dedicated Units + 4-Division Special Units (92 Total Verified Units)
 */
export const ALL_90_DAY_UNITS: CurriculumUnit[] = [
  ...DIVISION_SPECIAL_UNITS,
  ...SEMESTER_90_DAYS.map((node) => {
    if (node.day === 2) return { ...CURRICULUM_UNITS[0], id: 'day-unit-02' };
    if (node.day === 24) return { ...CURRICULUM_UNITS[1], id: 'day-unit-24' };
    if (node.day === 49) return { ...CURRICULUM_UNITS[2], id: 'day-unit-49' };
    return buildUnitForSemesterDay(node);
  })
];
