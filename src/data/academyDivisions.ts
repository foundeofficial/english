import type {
  AcademyDivisionId,
  CurriculumUnit,
  LearnerPersonaPreset,
  VocabItem
} from '../types/learning.ts';

export const ACADEMY_DIVISIONS: Array<{
  id: AcademyDivisionId;
  nameKo: string;
  targetRange: string;
  summaryKo: string;
  recommendedUnitId: string;
}> = [
  {
    id: 'foundation',
    nameKo: '기초 파운데이션 학부 (영포자·왕초보 재시작)',
    targetRange: 'K-Lv.1 ~ Lv.3 (Pre-A1 ~ A2)',
    summaryKo: '강세·연음 발음 원리부터 be동사/일반동사 핵심 뼈대, 생존 필수 어휘 800개를 구몬식으로 차근차근 완성',
    recommendedUnitId: 'unit-foundation-starter'
  },
  {
    id: 'school-csat',
    nameKo: '중·고교 내신 & 수능 1등급 입시 학부',
    targetRange: 'K-Lv.4 ~ Lv.8 (A2+ ~ B2)',
    summaryKo: '학교 내신 조건부 서술형 영작, 수능 어법 밑줄 오류 판별, 킬러 빈칸 추론 구문 독해를 정통 학원식으로 집중 훈련',
    recommendedUnitId: 'unit-school-csat-master'
  },
  {
    id: 'career-opic',
    nameKo: '대학생·취준생 오픽·토스·면접 학부',
    targetRange: 'K-Lv.5 ~ Lv.9 (B1 ~ B2+)',
    summaryKo: '단답형 습관을 깨는 PREP 3문장 자동 확장 공식과 돌발 꼬리질문 1:1 디펜스 첨삭',
    recommendedUnitId: 'day-unit-49'
  },
  {
    id: 'global-biz',
    nameKo: '직장인 글로벌 비즈니스 & 시사 학부',
    targetRange: 'K-Lv.6 ~ Lv.12 (B1+ ~ C1)',
    summaryKo: '실무 이메일·화상회의 완곡어법, 단가/일정 협상, 데일리 글로벌 트렌드 아티클 브리핑',
    recommendedUnitId: 'day-unit-24'
  }
];

export const LEARNER_PERSONA_PRESETS: LearnerPersonaPreset[] = [
  {
    id: 'persona-worker',
    nameKo: '김민준 (31세 · IT 프로덕트 매니저)',
    roleLabel: '직장인 실무반 · 읽기는 중상급이나 말문이 막히는 유형',
    division: 'global-biz',
    radar: { vocabulary: 7, grammar: 6, listening: 6, speaking: 4, writing: 5 },
    calibration: {
      baseKLevel: 6,
      difficultyOffset: 0,
      pedagogyStyle: 'inductive-speaking',
      dailyCapacity: 10,
      koreanScaffold: 'balanced'
    }
  },
  {
    id: 'persona-student',
    nameKo: '이서연 (18세 · 고2 내신·수능 준비생)',
    roleLabel: '내신·수능 입시반 · 정확한 구문 분석과 서술형 만점이 목표',
    division: 'school-csat',
    radar: { vocabulary: 6, grammar: 5, listening: 7, speaking: 4, writing: 4 },
    calibration: {
      baseKLevel: 5,
      difficultyOffset: 1,
      pedagogyStyle: 'deductive-grammar',
      dailyCapacity: 20,
      koreanScaffold: 'high'
    }
  },
  {
    id: 'persona-beginner',
    nameKo: '박지훈 (42세 · 왕초보 영어 재시작)',
    roleLabel: '기초 파운데이션반 · 하루 5문장씩 천천히 자신감 회복',
    division: 'foundation',
    radar: { vocabulary: 2, grammar: 2, listening: 3, speaking: 2, writing: 2 },
    calibration: {
      baseKLevel: 2,
      difficultyOffset: -1,
      pedagogyStyle: 'deductive-grammar',
      dailyCapacity: 5,
      koreanScaffold: 'high'
    }
  }
];

export const DIVISION_SPECIAL_UNITS: CurriculumUnit[] = [
  {
    id: 'unit-foundation-starter',
    level: 'Lv.1 Pre-A1',
    kLevelNum: 2,
    category: 'foundation',
    categoryLabel: '기초 파운데이션 · 왕초보 탈출',
    title: '[기초 1강] be동사(상태) vs 일반동사(동작) 절대 헷갈리지 않는 1초 공식',
    subtitle: '"I am agree(X)" 같은 왕초보 실수를 첫날 바로 끝내는 영어 문장 2대 기둥',
    keySentence: 'I completely agree with your idea today.',
    sprintMinutes: 6,
    deepClassMinutes: 35,
    instructorName: '한소라 기초전담 원장 (파닉스·입문 15년)',
    visualAssetPath: '/assets/visual_preposition_card.jpg',
    flowSitcomTitle: 'Google Flow 기초 시트콤 · 첫인사와 공감 표현하기',
    flowSitcomShots: [
      {
        shotNumber: 1,
        cameraSpec: 'Warm Classroom Close-Up · Slow Articulate Speech (0.85x)',
        character: 'Chloe',
        dialogueEn: 'Are you tired after the long trip today?',
        dialogueKo: '오늘 긴 여행 끝에 피곤하신가요? (상태 = Are you ~?)'
      },
      {
        shotNumber: 2,
        cameraSpec: 'Friendly Smile Two-Shot',
        character: 'Marcus',
        dialogueEn: 'I am a little tired, and I completely agree with your plan to rest.',
        dialogueKo: '조금 피곤해요. 쉬자는 계획에 전적으로 동의합니다! (동작/의견 = I agree)'
      }
    ],
    nuanceCard: {
      expression: 'I am [상태 형용사] vs I [일반동사]',
      koreanMeaning: '나는 ~한 상태다(am/are/is) vs 나는 ~하다(일반동사 바로 사용)',
      englishDefinition: 'Use "be" before adjectives/nouns for states, and use action/mental verbs directly without "am/are/is".',
      structuralFormula: '[I + am + happy/tired] vs [I + agree / work / like] (am 중복 금지!)',
      konglishTrap: '❌ I am agree with you. ("동의하다 agree"는 이미 동사이므로 앞에 am을 붙이면 동사가 2개 충돌합니다!)',
      nativeNuance: '형용사(tired, busy, late) 앞에는 반드시 be동사를 챙기고, 동사(agree, understand, need) 앞에는 주어 뒤 바로 동사를 뱉으세요.',
      casualExample: 'I totally agree with you.',
      politeExample: 'I completely agree with your suggestion for the project.',
      levelVariants: {
        easy: 'I agree with you.',
        standard: 'I completely agree with your idea today.',
        challenge: 'I am slightly tired today, and I completely agree with your proposal to rest early.'
      }
    },
    sprintQuestions: [
      {
        id: 'fd-q1',
        type: 'chunk-order',
        koreanPrompt: '오늘 당신의 아이디어에 전적으로 동의합니다. (am 붙이지 않기 주의!)',
        englishPromptHint: 'Use the verb "agree" directly after the subject.',
        koreanChunksGuide: ['나는 전적으로 동의합니다', '당신의 아이디어에', '오늘'],
        targetEnglish: 'I completely agree with your idea today.',
        chunks: ['I completely agree', 'with your idea', 'today.'],
        nuanceExplanation: 'agree는 일반동사이므로 I am agree가 아니라 [I completely agree]로 바로 출발합니다.'
      },
      {
        id: 'fd-q2',
        type: 'fill-blank',
        koreanPrompt: '그 제안에 동의하시나요? (일반동사 의문문 조동사!)',
        englishPromptHint: 'Choose Do or Are before "you agree".',
        koreanChunksGuide: ['~하시나요(Do)', '당신은 동의하다', '그 제안에'],
        targetEnglish: 'Do you agree with the suggestion?',
        blankSentence: {
          before: '',
          answer: 'Do',
          after: 'you agree with the suggestion?',
          hint: 'D _ (일반동사 agree의 의문문을 여는 조동사, Are 아님!)'
        },
        nuanceExplanation: '일반동사(agree, like, have)로 질문할 때는 Are you~가 아니라 Do you~로 문을 엽니다.'
      }
    ],
    lectureChapters: [
      {
        id: 'fd-ch1',
        timestamp: '00:00 ~ 18:00',
        durationMin: 18,
        title: 'Chapter 1. 왕초보가 가장 많이 틀리는 "be동사 만능주의" 깨기',
        boardFormula: '형용사(busy/late/ready) ➔ I am busy! | 동사(agree/work/go) ➔ I agree!',
        koreanMisconception: '한국어 "바쁘다"와 "동의한다"가 둘 다 "-다"로 끝나서 둘 다 am을 붙이거나 둘 다 빼버림.',
        nativeMindset: '영어 단어 뜻을 외울 때 "~한(형용사)"인지 "~하다(동사)"인지만 구분해도 기초 문법의 절반이 끝납니다.',
        exampleEn: 'I am ready now, and I agree with your plan.',
        exampleKo: '저는 지금 준비됐고(상태), 당신의 계획에 동의합니다(동작).',
        instructorScript: '여러분! "준비됐다"의 ready는 "준비된"이라는 형용사라 I am ready가 맞지만, agree는 그 자체로 "동의하다"라는 동사입니다. 그래서 I agree! 두 단어면 끝납니다.'
      }
    ],
    dictationItems: [
      {
        id: 'fd-d1',
        speaker: 'Slow Native Coach',
        fullAudioText: 'I completely agree with your idea today.',
        beforeBlank: 'I completely',
        answer: 'agree',
        afterBlank: 'with your idea today.',
        koreanTranslation: '오늘 당신의 아이디어에 전적으로 동의합니다.',
        listeningTip: 'agree의 두 번째 음절 [어-그리!]에 강세를 두어 발음합니다.'
      }
    ],
    workbookWritingPrompt: {
      situationKo: '"저는 지금 준비됐어요(ready). 그리고 당신의 계획에 동의합니다(agree)." 두 문장을 be동사와 일반동사를 정확히 구분해 영작해보세요.',
      guidePoints: ['1문장: I am ready now. (형용사 ready)', '2문장: I agree with your plan. (일반동사 agree)'],
      modelParagraphEn: 'I am ready now. And I completely agree with your plan.'
    },
    examQuestions: [
      {
        id: 'fd-ex1',
        number: 1,
        questionType: 'multiple-choice',
        grammarTag: 'be동사 vs 일반동사 구분',
        promptKo: '다음 중 어법상 올바른 문장을 고르시오.',
        promptEn: 'Choose the grammatically correct sentence.',
        options: [
          'I completely agree with your opinion.',
          'I am agree with your opinion.',
          'Are you agree with my idea?',
          'She is work at a bank.'
        ],
        correctAnswer: 'I completely agree with your opinion.',
        explanationKo: '일반동사 agree나 work 앞에는 be동사(am/are/is)를 함께 쓸 수 없습니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 틀린 부분을 바르게 고쳐 문장 전체를 다시 쓰시오: "I am agree with you."',
          promptEn: 'Rewrite accurately without the extra verb.',
          correctAnswer: 'I agree with you.',
          explanationKo: '불필요한 am을 삭제하여 "I agree with you."로 고칩니다.'
        }
      },
      {
        id: 'fd-ex2',
        number: 2,
        questionType: 'multiple-choice',
        grammarTag: '일반동사 의문문',
        promptKo: '"당신은 아침마다 커피를 마시나요?"의 빈칸에 알맞은 말은?',
        promptEn: '_______ you drink coffee every morning?',
        options: ['Do', 'Are', 'Is', 'Have'],
        correctAnswer: 'Do',
        explanationKo: '일반동사 drink의 현재형 의문문이므로 주어 you 앞에 Do를 씁니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 빈칸에 알맞은 조동사를 쓰시오: "_______ you have time right now?"',
          promptEn: 'Fill in the blank.',
          correctAnswer: 'Do',
          explanationKo: '일반동사 have(시간이 있다)의 의문문이므로 Do를 씁니다.'
        }
      },
      {
        id: 'fd-ex3',
        number: 3,
        questionType: 'sentence-rewrite',
        grammarTag: '기초 어순 배열',
        promptKo: '[서술형] 배열하여 문장을 완성하시오. (with your idea / I / agree / today)',
        promptEn: 'Arrange: (with your idea / I / agree / today)',
        correctAnswer: 'I agree with your idea today.',
        explanationKo: '[주어 I + 동사 agree + 전치사구 with your idea + 시간 today] 순서입니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 영작하시오: "저는 당신의 계획에 동의합니다." (agree / with your plan / I)',
          promptEn: 'Write the complete sentence.',
          correctAnswer: 'I agree with your plan.',
          explanationKo: 'I agree with your plan. 어순입니다.'
        }
      }
    ],
    tutorTurns: [
      {
        id: 'fd-t1',
        tutorQuestionEn: 'Hello! Are you ready for our short practice today? Do you prefer morning study or evening study?',
        tutorQuestionKo: '안녕하세요! 오늘 짧은 연습 준비되셨나요? 아침 공부와 저녁 공부 중 어느 쪽을 선호하시나요?',
        followUpProbeEn: 'Nice! Why do you prefer studying at that time?',
        expansionHints: ['I am ready!', 'I prefer ...', 'because it is quiet'],
        sampleModelAnswer: 'I am ready! I prefer evening study because my house is quiet at night.'
      }
    ]
  },
  {
    id: 'unit-school-csat-master',
    level: 'Lv.7 B2-',
    kLevelNum: 7,
    category: 'school-csat',
    categoryLabel: '중·고교 내신 서술형 & 수능 1등급',
    title: '[내신·수능 킬러] 도치 구문(Not only ~ / Rarely ~) & 조건부 서술형 영작 만점 전략',
    subtitle: '학교 내신 서술형 감점 1순위 "부정어구 도치"와 수능 29번 어법 수일치를 한 번에 잡는 특강',
    keySentence: 'Not only did the experiment succeed, but it also revealed a new pattern.',
    sprintMinutes: 8,
    deepClassMinutes: 50,
    instructorName: '정우성 입시대표강사 (대치 고등내신·수능 전문)',
    visualAssetPath: '/assets/office_sitcom_scene.jpg',
    flowSitcomTitle: 'Google Flow 아카데믹 브리핑 · 과학 저널 발표 현장의 강조 구문',
    flowSitcomShots: [
      {
        shotNumber: 1,
        cameraSpec: 'University Lecture Hall Podium · Crisp Academic English',
        character: 'Chloe',
        dialogueEn: 'Not only did the experiment succeed, but it also revealed a new pattern.',
        dialogueKo: '그 실험은 성공했을 뿐만 아니라, 새로운 패턴까지 밝혀냈습니다.'
      },
      {
        shotNumber: 2,
        cameraSpec: 'Audience Q&A Medium Shot',
        character: 'Marcus',
        dialogueEn: 'Rarely do researchers observe such a clear correlation on the first trial.',
        dialogueKo: '연구자들이 첫 시도에서 이토록 뚜렷한 상관관계를 관찰하는 일은 드뭅니다.'
      }
    ],
    nuanceCard: {
      expression: 'Not only + [조동사 + 주어 + 본동사원형] ~',
      koreanMeaning: '~했을 뿐만 아니라 (문두 부정·제한어구 강조 도치)',
      englishDefinition: 'Inversion of auxiliary verb and subject when a negative or restrictive adverbial phrase is fronted for emphasis.',
      structuralFormula: '[Not only / Rarely / Little] + [did/do/does/can + S + V원형] ~',
      konglishTrap: '❌ Not only the experiment succeeded... (내신 서술형 최다 감점! Not only가 문장 맨 앞에 오면 반드시 의문문 어순 [did + 주어 + 동사원형]으로 도치해야 합니다)',
      nativeNuance: '글쓰기·발표·수능 독해 지문에서 필자가 핵심 주장을 강하게 부각할 때 등장하는 1순위 시그널 구문입니다.',
      casualExample: 'Not only did we win the match, but we also broke the school record.',
      politeExample: 'Not only did the experiment succeed, but it also revealed a new pattern.',
      levelVariants: {
        easy: 'The experiment succeeded and showed a new pattern.',
        standard: 'Not only did the experiment succeed, but it also revealed a new pattern.',
        challenge: 'Rarely do researchers encounter a dataset that not only validates prior theories but also opens an entirely new line of inquiry.'
      }
    },
    sprintQuestions: [
      {
        id: 'csat-q1',
        type: 'chunk-order',
        koreanPrompt: '[내신 서술형] 그 실험은 성공했을 뿐만 아니라 새로운 패턴도 밝혀냈다. (Not only 도치 주의!)',
        englishPromptHint: 'Invert auxiliary "did" and the subject after fronted "Not only".',
        koreanChunksGuide: ['Not only + 조동사 did', '주어 + 동사원형 succeed,', 'but it also + 과거동사', '목적어'],
        targetEnglish: 'Not only did the experiment succeed, but it also revealed a new pattern.',
        chunks: ['Not only did', 'the experiment succeed,', 'but it also revealed', 'a new pattern.'],
        nuanceExplanation: '앞절은 Not only 때문에 [did + 주어 + 동사원형(succeed)]으로 도치되고, 뒷절(but it also revealed)은 정상 어순과 과거시제를 유지합니다!'
      },
      {
        id: 'csat-q2',
        type: 'fill-blank',
        koreanPrompt: '[수능 어법] 연구자들이 첫 시도에서 그런 결과를 보는 일은 드물다. (Rarely 도치)',
        englishPromptHint: 'Provide the plural auxiliary verb after fronted "Rarely".',
        koreanChunksGuide: ['부정어 Rarely', '일반동사 도치 조동사', '복수주어 researchers + 동사원형'],
        targetEnglish: 'Rarely do researchers observe such clear results on the first trial.',
        blankSentence: {
          before: 'Rarely',
          answer: 'do',
          after: 'researchers observe such clear results on the first trial.',
          hint: 'd _ (복수 주어 researchers와 일반동사 observe의 도치를 만드는 조동사, are 아님!)'
        },
        nuanceExplanation: '수능 어법 단골 함정! 본동사가 일반동사(observe)이므로 be동사(are)가 아니라 조동사 do를 써야 합니다.'
      }
    ],
    lectureChapters: [
      {
        id: 'csat-ch1',
        timestamp: '00:00 ~ 25:00',
        durationMin: 25,
        title: 'Chapter 1. 학교 내신 서술형 100% 출제 공식: 부정어구 도치 3초 판별법',
        boardFormula: '부정어(Never / Rarely / Little / Not only) 문두 이동 ➔ [의문문 어순]으로 뒤집어라!',
        koreanMisconception: '주어와 동사 자리를 그냥 바꾸면 되는 줄 알아서 일반동사를 직접 앞으로 빼버림 (❌ Rarely observe researchers).',
        nativeMindset: '영어에서 일반동사는 직접 앞으로 나가지 않고 대신 조동사(do/does/did)를 앞으로 내보낸 뒤 본인은 동사원형으로 남습니다!',
        exampleEn: 'Little did she realize that small habit would change her career.',
        exampleKo: '그녀는 그 작은 습관이 자신의 커리어를 바꿀 줄 거의 깨닫지 못했다.',
        instructorScript: '고등 내신 서술형 채점 기준표에서 가장 배점이 큰 구간입니다! 첫째, 부정어가 맨 앞에 왔는가? 둘째, 일반동사일 때 did/do/does를 꺼내고 본동사를 반드시 "동사원형"으로 바꿨는가? 이 두 가지만 체크하면 부분 감점 없이 만점입니다!'
      }
    ],
    dictationItems: [
      {
        id: 'csat-d1',
        speaker: 'Academic Narrator',
        fullAudioText: 'Not only did the experiment succeed, but it also revealed a new pattern.',
        beforeBlank: 'Not only',
        answer: 'did',
        afterBlank: 'the experiment succeed, but it also revealed a new pattern.',
        koreanTranslation: '그 실험은 성공했을 뿐만 아니라 새로운 패턴도 밝혀냈다.',
        listeningTip: '강조를 위해 문두에 나온 Not only did 구간에 강한 악센트가 실립니다.'
      }
    ],
    workbookWritingPrompt: {
      situationKo: '[학교 내신 조건부 서술형 실전] 다음 문장을 "Not only"로 시작하는 강조 도치 구문으로 전환해 쓰시오: "The new policy reduced waste, and it also saved energy."',
      guidePoints: [
        '조건 1: Not only로 문장을 시작할 것',
        '조건 2: 과거 일반동사 reduced를 did + 주어 + 동사원형(reduce)으로 도치할 것',
        '조건 3: 뒷절은 but it also saved energy로 연결할 것'
      ],
      modelParagraphEn: 'Not only did the new policy reduce waste, but it also saved energy.'
    },
    examQuestions: [
      {
        id: 'csat-ex1',
        number: 1,
        questionType: 'multiple-choice',
        grammarTag: '수능 29번 어법 · 부정어 도치 조동사',
        promptKo: '다음 문장의 빈칸에 어법상 알맞은 형태를 고르시오.',
        promptEn: 'Not only _______ the student solve the complex equation, but he also explained the proof clearly.',
        options: ['did', 'was', 'had', 'were'],
        correctAnswer: 'did',
        explanationKo: '뒤에 주어(the student)와 동사원형(solve)이 이어지므로 과거 시제 일반동사 도치 조동사 did가 정답입니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 어법상 틀린 단어를 올바른 한 단어로 고쳐 쓰시오: "Rarely are scientists agree on a brand-new hypothesis immediately." (틀린 단어 → 바른 단어 중 바른 단어만 입력)',
          promptEn: 'Replace "are" with the correct auxiliary verb.',
          correctAnswer: 'do',
          explanationKo: '일반동사 원형 agree가 뒤에 오므로 be동사 are가 아니라 조동사 do를 써야 합니다.'
        }
      },
      {
        id: 'csat-ex2',
        number: 2,
        questionType: 'multiple-choice',
        grammarTag: '도치 후 동사원형 복원',
        promptKo: '다음 중 어법상 오류가 없는 문장을 고르시오.',
        promptEn: 'Identify the single grammatically impeccable sentence.',
        options: [
          'Little did they expect such an enthusiastic response from the audience.',
          'Little did they expected such an enthusiastic response.',
          'Not only the team won the championship, but they set a record.',
          'Rarely she complains about her heavy workload.'
        ],
        correctAnswer: 'Little did they expect such an enthusiastic response from the audience.',
        explanationKo: '조동사 did가 앞으로 도치되었으므로 본동사는 원형 expect를 써야 하며, Not only/Rarely가 절 문두에 오면 반드시 도치가 일어나야 합니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 괄호 안의 동사를 어법에 맞게 쓰시오: "Not only did the campaign boost sales, but it also (attract) younger customers."',
          promptEn: 'Pay attention to the tense in the second clause (no inversion in the "but" clause!).',
          correctAnswer: 'attracted',
          explanationKo: '도치는 Not only가 속한 앞절에만 일어나므로 뒷절(but it also ~)은 과거시제 attracted를 그대로 씁니다!'
        }
      },
      {
        id: 'csat-ex3',
        number: 3,
        questionType: 'sentence-rewrite',
        grammarTag: '고등 내신 서술형 조건 영작',
        promptKo: '[내신 서술형 6점] "Not only"로 시작하여 주어진 어구를 올바르게 배열하시오. (reduce costs / did the system / Not only)',
        promptEn: 'Arrange the fronted clause: (reduce costs / did the system / Not only)',
        correctAnswer: 'Not only did the system reduce costs',
        explanationKo: '[Not only + 조동사 did + 주어 the system + 동사원형 reduce costs] 어순입니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] "Little"로 시작하여 영작하시오: "그들은 그 사실을 거의 알지 못했다." (know / did they / Little / the truth)',
          promptEn: 'Write the complete inverted sentence.',
          correctAnswer: 'Little did they know the truth.',
          explanationKo: 'Little + did + 주어(they) + 동사원형(know) + 목적어(the truth). 어순입니다.'
        }
      }
    ],
    tutorTurns: [
      {
        id: 'csat-t1',
        tutorQuestionEn: 'Let us test your inversion mastery! Try starting a sentence with "Not only did I..." to describe two things you accomplished recently.',
        tutorQuestionKo: '부정어 도치 체화 시간입니다! "Not only did I..."로 문장을 시작해서 최근 해낸 두 가지 일을 말해보시겠어요?',
        followUpProbeEn: 'Impressive grammar control! Remember to keep the verb right after "did I" in its base form. Want to add one more sentence?',
        expansionHints: ['Not only did I finish ...', 'but I also ...', 'Rarely do I ...'],
        sampleModelAnswer: 'Not only did I finish my math assignment early, but I also reviewed twenty English vocabulary words.'
      }
    ]
  }
];

export const CORE_VOCAB_DECK: VocabItem[] = [
  {
    id: 'voc-1',
    word: 'agree',
    phonetic: '/əˈɡriː/',
    partOfSpeech: '동사 (v.)',
    meaningKo: '동의하다, 의견이 일치하다',
    englishDef: 'to have the same opinion as someone else',
    confusingPairTip: '주의: 형용사가 아닌 동사이므로 "I am agree(X)"가 아니라 "I agree(O)"로 씁니다.',
    exampleEn: 'I completely agree with your idea today.',
    exampleKo: '오늘 당신의 아이디어에 전적으로 동의합니다.',
    division: 'foundation',
    kLevel: 2
  },
  {
    id: 'voc-2',
    word: 'stop by',
    phonetic: '/stɑːp baɪ/',
    partOfSpeech: '구동사 (phr.v.)',
    meaningKo: '(가는 길에) 잠깐 들르다',
    englishDef: 'to make a short visit somewhere while going to another place',
    confusingPairTip: 'visit는 목적을 갖고 정식 방문하는 어감, stop by / drop by는 오가는 길에 가볍게 들르는 어감입니다.',
    exampleEn: 'I stopped by the bakery on my way home.',
    exampleKo: '집에 가는 길에 빵집에 잠깐 들렀어요.',
    division: 'foundation',
    kLevel: 3
  },
  {
    id: 'voc-3',
    word: 'correlation',
    phonetic: '/ˌkɔːrəˈleɪʃn/',
    partOfSpeech: '명사 (n.)',
    meaningKo: '상관관계, 연관성',
    englishDef: 'a mutual connection between two or more facts or variables',
    confusingPairTip: '수능 빈칸 1순위 어휘! causation(인과관계)과 대조되는 개념으로 자주 출제됩니다.',
    exampleEn: 'Researchers observed a clear correlation between sleep and memory.',
    exampleKo: '연구자들은 수면과 기억력 사이의 뚜렷한 상관관계를 관찰했다.',
    division: 'school-csat',
    kLevel: 7
  },
  {
    id: 'voc-4',
    word: 'reluctant',
    phonetic: '/rɪˈlʌktənt/',
    partOfSpeech: '형용사 (adj.)',
    meaningKo: '꺼리는, 주저하는, 마지못해 하는',
    englishDef: 'hesitating and unwilling to do something',
    confusingPairTip: '반의어 willing(기꺼이 하는)과 세트로 내신·수능 어휘 추론에 단골 출제됩니다.',
    exampleEn: 'Many users were initially reluctant to share personal data.',
    exampleKo: '많은 사용자들이 처음에는 개인 데이터 공유를 꺼렸다.',
    division: 'school-csat',
    kLevel: 6
  },
  {
    id: 'voc-5',
    word: 'clear one’s head',
    phonetic: '/klɪr wʌnz hed/',
    partOfSpeech: '관용구 (idiom)',
    meaningKo: '복잡한 머리를 식히다, 생각을 비우다',
    englishDef: 'to relax and free your mind from worries or stress',
    confusingPairTip: '오픽 산책·운동·카페·여행 주제에서 만능 이유 문장으로 활용 가능합니다.',
    exampleEn: 'Walking along the river helps me clear my head.',
    exampleKo: '강변을 따라 걸으면 복잡한 머리를 식히는 데 도움이 됩니다.',
    division: 'career-opic',
    kLevel: 6
  },
  {
    id: 'voc-6',
    word: 'hectic',
    phonetic: '/ˈhektɪk/',
    partOfSpeech: '형용사 (adj.)',
    meaningKo: '정신없이 바쁜, 눈코 뜰 새 없는',
    englishDef: 'very busy and filled with frantic activity',
    confusingPairTip: '단순한 busy보다 일정이 몰아쳐 정신없이 바쁜 하루(a hectic week/day)를 생생히 표현합니다.',
    exampleEn: 'I had a hectic week wrapping up two projects.',
    exampleKo: '프로젝트 두 건을 마무리하느라 눈코 뜰 새 없는 한 주를 보냈어요.',
    division: 'career-opic',
    kLevel: 6
  },
  {
    id: 'voc-7',
    word: 'push back',
    phonetic: '/pʊʃ bæk/',
    partOfSpeech: '구동사 (phr.v.)',
    meaningKo: '(일정·회의 시간을) 뒤로 미루다, 연기하다',
    englishDef: 'to move a scheduled meeting or deadline to a later time',
    confusingPairTip: '반대로 일정을 앞당기다는 "move up"을 사용합니다. delay보다 협업 친화적인 표현입니다.',
    exampleEn: 'Could we push our kickoff call back to Thursday?',
    exampleKo: '킥오프 미팅을 목요일로 미룰 수 있을까요?',
    division: 'global-biz',
    kLevel: 6
  },
  {
    id: 'voc-8',
    word: 'bandwidth',
    phonetic: '/ˈbændwɪdθ/',
    partOfSpeech: '명사 (n.)',
    meaningKo: '(업무·정신적) 여력, 가용 시간',
    englishDef: 'the mental or schedule capacity required to deal with a task',
    confusingPairTip: '"Do you have bandwidth to take this on?" = 이 업무를 맡아줄 여력이 되시나요?',
    exampleEn: 'Automating reports freed up bandwidth for strategic planning.',
    exampleKo: '보고서 자동화 덕분에 전략 기획을 위한 업무 여력이 확보되었습니다.',
    division: 'global-biz',
    kLevel: 8
  }
];
