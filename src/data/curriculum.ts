import type { CurriculumUnit, DiagnosticQuestion, ReviewItem } from '../types/learning.ts';

export const CURRICULUM_UNITS: CurriculumUnit[] = [
  {
    id: 'unit-order-switch',
    level: 'Lv.2 A1+',
    kLevelNum: 3,
    category: 'daily-order',
    categoryLabel: '일상·어순 혁신',
    title: '한국어 어순을 버려라: [주어+동사] 1초 발사와 전치사 청크 확장',
    subtitle: '머릿속에서 끝까지 영작하느라 4초씩 침묵하는 습관을 깨는 직해직설 훈련',
    keySentence: 'I ended up working late at the office yesterday.',
    sprintMinutes: 7,
    deepClassMinutes: 40,
    instructorName: '서지안 대표강사 (한영 통번역 석사)',
    visualAssetPath: '/assets/visual_preposition_card.jpg',
    flowSitcomTitle: 'EP 01. 퇴근길 카페에서의 우연한 만남 (Google Flow Multi-Shot)',
    flowSitcomShots: [
      {
        shotNumber: 1,
        cameraSpec: 'Medium Two-Shot · Warm Sunset Cafe Window (Veo + Ingredients Ref #Chloe)',
        character: 'Chloe',
        dialogueEn: 'Hey Marcus! I meant to go straight home, but I stopped by to grab a coffee.',
        dialogueKo: '안녕 마커스! 원래 바로 집에 가려 했는데, 커피 한 잔 사러 잠깐 들렀어요.'
      },
      {
        shotNumber: 2,
        cameraSpec: 'Over-the-Shoulder Shot · Soft Depth of Field (Ref #Marcus)',
        character: 'Marcus',
        dialogueEn: 'Same here! I ended up staying late at the office because of the client deck.',
        dialogueKo: '저도요! 클라이언트 발표 자료 때문에 결국 사무실에서 늦게까지 남게 됐거든요.'
      },
      {
        shotNumber: 3,
        cameraSpec: 'Close-Up Reaction · Ambient Cafe Audio Sync',
        character: 'Chloe',
        dialogueEn: 'Do you have any plans tonight, or do you want to grab a quick bite?',
        dialogueKo: '오늘 저녁에 따로 약속 있으세요, 아니면 간단히 뭐 좀 드실래요?'
      }
    ],
    nuanceCard: {
      expression: 'end up -ing / stop by',
      koreanMeaning: '(계획과 달리) 결국 ~하게 되다 / 가는 길에 잠깐 들르다',
      englishDefinition: 'To reach a final state or action that was not originally planned; to make a brief visit on your way somewhere.',
      structuralFormula: '[Subject + ended up + V-ing] / [Place Phrase] / [Time Phrase]',
      konglishTrap: '❌ Finally I worked late. ("Finally"는 간절히 기다리던 좋은 결과에 쓰므로 야근에 쓰면 "드디어 야근했다!"라는 어색한 뜻이 됩니다)',
      nativeNuance: '예상치 못한 흐름으로 결론이 났을 때 원어민이 입에 달고 사는 표현입니다. 뒤에 동사원형이 아니라 반드시 -ing를 붙입니다.',
      casualExample: 'We ended up grabbing tacos at midnight.',
      politeExample: 'We ended up revising the entire proposal before the client call.',
      levelVariants: {
        easy: 'I ended up working late yesterday.',
        standard: 'I ended up working late at the office yesterday.',
        challenge: 'Although I meant to leave on time, I ended up working late at the office to wrap up an urgent deliverable.'
      }
    },
    sprintQuestions: [
      {
        id: 'u1-q1',
        type: 'chunk-order',
        koreanPrompt: '어제 사무실에서 결국 늦게까지 야근하게 됐어요.',
        englishPromptHint: 'Express an unplanned late night at work using "ended up -ing".',
        koreanChunksGuide: ['결국 ~하게 됐어요', '늦게까지 일하다', '사무실에서', '어제'],
        targetEnglish: 'I ended up working late at the office yesterday.',
        chunks: ['I ended up', 'working late', 'at the office', 'yesterday.'],
        nuanceExplanation: '영어는 무조건 [누가 + 결론 동사(I ended up working late)]를 먼저 던진 뒤 [장소(at the office)] → [시간(yesterday)] 순으로 꼬리를 붙입니다.'
      },
      {
        id: 'u1-q2',
        type: 'fill-blank',
        koreanPrompt: '오늘 저녁에 친구랑 약속이 있어요. (콩글리시 promise 주의!)',
        englishPromptHint: 'Fill in the natural plural noun for social arrangements tonight.',
        koreanChunksGuide: ['나는 가지고 있어요', '만남 약속들을', '친구와 함께', '오늘 저녁에'],
        targetEnglish: 'I have plans with a friend tonight.',
        blankSentence: {
          before: 'I have',
          answer: 'plans',
          after: 'with a friend tonight.',
          hint: 'p _ _ _ s (맹세가 아닌 일상 만남 약속, 복수형)'
        },
        nuanceExplanation: "'약속=promise'로 직역하면 맹세·서약이 됩니다! 친구·지인과의 선약은 항상 복수형 'plans'를 씁니다."
      },
      {
        id: 'u1-q3',
        type: 'speak-prompt',
        koreanPrompt: '집에 가는 길에 커피 한 잔 사러 잠깐 들렀어요.',
        englishPromptHint: 'Say you made a brief visit to get coffee while heading home.',
        koreanChunksGuide: ['나는 잠깐 들렀어요', '커피 한 잔 사러', '집에 가는 길에'],
        targetEnglish: 'I stopped by to grab a coffee on my way home.',
        chunks: ['I stopped by', 'to grab a coffee', 'on my way home.'],
        acceptableKeywords: ['stopped by', 'coffee', 'way home'],
        nuanceExplanation: "'잠깐 들르다'는 'stop by', 가볍게 음료를 사다/마시다는 'grab a coffee'가 훨씬 자연스럽습니다."
      }
    ],
    lectureChapters: [
      {
        id: 'u1-ch1',
        timestamp: '00:00 ~ 12:00',
        durationMin: 12,
        title: 'Chapter 1. 한국인이 3초 이상 침묵하는 진짜 이유: 어순의 거울 법칙',
        boardFormula: '[주어 + 핵심 동사] ➔ [목적어/보어] ➔ [장소 전치사구] ➔ [시간 부사구]',
        koreanMisconception: '"어제 강남역 카페에서 동기랑 수다 떨었어" → "Yesterday... Gangnam...?" 하다가 동사를 못 찾고 멈춤.',
        nativeMindset: '카메라 줌아웃 구조! 주인공과 행동("I chatted")을 1초 만에 먼저 찍고, 누구랑 → 어디서 → 언제 순서로 배경을 넓혀갑니다.',
        exampleEn: 'I caught up with an old friend at a cozy cafe yesterday.',
        exampleKo: '어제 아늑한 카페에서 오랜 친구와 밀린 이야기를 나눴어요.',
        instructorScript: '회화에서 입이 안 떨어지는 건 단어를 몰라서가 아닙니다. 머릿속에서 한국어 첫 단어인 "어제", "회사에서"부터 영어로 바꾸려다 보니 정작 가장 중요한 동사가 맨 뒤에 밀려버리는 거죠. 오늘부터 1초 안에 "I + 동사"부터 입 밖으로 발사하세요!'
      },
      {
        id: 'u1-ch2',
        timestamp: '12:00 ~ 25:00',
        durationMin: 13,
        title: 'Chapter 2. "결국 ~하게 됐어" — finally vs end up -ing 완벽 해부',
        boardFormula: 'I meant to [원래 의도], but I ended up [예상 밖 결론 -ing]',
        koreanMisconception: '"원래 일찍 자려 했는데 결국 택시 탔어"를 "Finally I took a taxi"라고 직역함.',
        nativeMindset: 'Finally는 간절히 바라던 결과에 쓰고, 계획과 다르게 흘러간 모든 일상 결론에는 "ended up -ing"를 씁니다.',
        exampleEn: 'I meant to go to bed early, but I ended up watching YouTube until 2 AM.',
        exampleKo: '일찍 자려고 했는데, 결국 새벽 2시까지 유튜브를 보게 됐어요.',
        instructorScript: '"I meant to A, but I ended up B-ing" 공식 하나만 체화하면 일상 스몰토크 에피소드의 80%를 막힘없이 구사할 수 있습니다.'
      }
    ],
    dictationItems: [
      {
        id: 'u1-d1',
        speaker: 'Chloe (NY Designer)',
        fullAudioText: 'I meant to cook dinner at home, but I ended up ordering takeout.',
        beforeBlank: 'I meant to cook dinner at home, but I',
        answer: 'ended up',
        afterBlank: 'ordering takeout.',
        koreanTranslation: '집에서 저녁을 해 먹으려 했는데, 결국 배달 음식을 시키게 됐어요.',
        listeningTip: "'ended up'은 연음되어 [엔디덥]처럼 한 단어처럼 들립니다."
      },
      {
        id: 'u1-d2',
        speaker: 'Marcus (Product Lead)',
        fullAudioText: 'Do you have any plans with your family this weekend?',
        beforeBlank: 'Do you have any',
        answer: 'plans',
        afterBlank: 'with your family this weekend?',
        koreanTranslation: '이번 주말에 가족들과 약속(계획) 있으신가요?',
        listeningTip: '일상적인 만남 약속은 항상 복수형 plans로 소리 납니다.'
      }
    ],
    workbookWritingPrompt: {
      situationKo: '어제 퇴근 후 또는 지난 주말에 "원래 하려던 계획과 다르게 결국 하게 된 일"을 [I meant to ~, but I ended up -ing ~] 구조로 2문장 이상 영작해보세요.',
      guidePoints: [
        '1문장: I meant to + 동사원형 (원래 의도했던 일)',
        '2문장: but I ended up + 동사-ing + 장소/시간 청크',
        '콩글리시 주의: 야근은 many works 대신 work late 사용'
      ],
      modelParagraphEn: 'I meant to hit the gym right after work yesterday, but I ended up working late at the office because of an urgent client request.'
    },
    examQuestions: [
      {
        id: 'u1-ex1',
        number: 1,
        questionType: 'multiple-choice',
        grammarTag: '동명사 관용표현 (end up -ing)',
        promptKo: '다음 빈칸에 어법과 문맥상 가장 알맞은 형태를 고르시오.',
        promptEn: 'We meant to take the subway, but we ended up _______ a cab because of the heavy rain.',
        options: ['take', 'taking', 'to take', 'taken'],
        correctAnswer: 'taking',
        explanationKo: "'end up' 뒤에는 동작의 결과를 나타내는 동명사(-ing)가 와야 하므로 'taking'이 유일한 정답입니다.",
        twinVariant: {
          promptKo: '[쌍둥이 변형] 다음 빈칸에 들어갈 정확한 어형을 고르시오: "집에서 쉬려 했지만 결국 영화를 보러 가게 됐다."',
          promptEn: 'I meant to stay home, but I ended up (watch) a movie with my sister.',
          correctAnswer: 'watching',
          explanationKo: 'end up 뒤에는 동사원형 watch가 아닌 동명사 watching을 써야 합니다.'
        }
      },
      {
        id: 'u1-ex2',
        number: 2,
        questionType: 'multiple-choice',
        grammarTag: '한국인 빈출 콩글리시 구분 (plans vs promise)',
        promptKo: '"오늘 저녁에 대학 동기와 약속이 있어요."를 가장 자연스럽게 영작한 문장은?',
        promptEn: 'Choose the most natural English sentence for a casual evening meetup.',
        options: [
          'I have plans with a college friend tonight.',
          'I have a promise with a college friend tonight.',
          'Tonight my friend promise is with me.',
          'Finally I promised with a friend tonight.'
        ],
        correctAnswer: 'I have plans with a college friend tonight.',
        explanationKo: "사람과의 일상적인 만남 약속은 'promise(서약/맹세)'가 아닌 복수형 'plans'를 사용합니다.",
        twinVariant: {
          promptKo: '[쌍둥이 변형] 빈칸에 알맞은 명사를 쓰시오: "이번 금요일 밤에 이미 선약이 있어요."',
          promptEn: 'Sorry, I already have _______ this Friday night.',
          correctAnswer: 'plans',
          explanationKo: "'선약이 있다' 역시 'already have plans'로 표현합니다."
        }
      },
      {
        id: 'u1-ex3',
        number: 3,
        questionType: 'sentence-rewrite',
        grammarTag: '서술형 어순 배열 영작',
        promptKo: '[조건부 서술형] 주어진 단어를 모두 사용하여 "퇴근길에 약국에 잠깐 들렀어요."를 완성하시오. (stopped by / on my way home / the pharmacy / I)',
        promptEn: 'Arrange into a complete sentence: (stopped by / on my way home / the pharmacy / I)',
        correctAnswer: 'I stopped by the pharmacy on my way home.',
        explanationKo: '[주어+동사(I stopped by)] + [목적지(the pharmacy)] + [시간·경로 부사구(on my way home)] 순으로 배열합니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 영작하시오: "출근길에 베이커리에 잠깐 들렀어요." (stopped by / on my way to work / the bakery / I)',
          promptEn: 'Write the complete English sentence.',
          correctAnswer: 'I stopped by the bakery on my way to work.',
          explanationKo: "'출근길에'는 'on my way to work'를 문장 맨 뒤에 배치합니다."
        }
      }
    ],
    tutorTurns: [
      {
        id: 'u1-t1',
        tutorQuestionEn: 'Hi there! How was your yesterday? Did everything go as planned, or did you end up doing something unexpected?',
        tutorQuestionKo: '안녕하세요! 어제 하루는 계획대로 흘러갔나요, 아니면 예상치 못하게 결국 하게 된 일이 있었나요?',
        followUpProbeEn: 'Oh, interesting! Who were you with, and how did you feel about that?',
        expansionHints: ['I meant to ..., but I ended up ...', 'at the office / at home', 'because I had a lot of work'],
        sampleModelAnswer: 'I meant to rest early at home, but I ended up working late because I had a lot of work to finish.'
      }
    ]
  },
  {
    id: 'unit-business-schedule',
    level: 'Lv.5 B1',
    kLevelNum: 6,
    category: 'business',
    categoryLabel: '비즈니스 실무',
    title: '"일정이 좀 애매하네요" — 직역을 멈추고 세련되게 거절·조율하는 실무 영어',
    subtitle: '무례하게 들리지 않으면서 내 업무 바운더리를 지키는 글로벌 협업 필수 완곡어법',
    keySentence: 'Tomorrow looks a bit tight on my end. Would Thursday work instead?',
    sprintMinutes: 7,
    deepClassMinutes: 45,
    instructorName: '케빈 박 강사 (전 실리콘밸리 PM)',
    visualAssetPath: '/assets/office_sitcom_scene.jpg',
    flowSitcomTitle: 'EP 02. 뉴욕 오피스 긴급 캘린더 조율 (Google Flow Multi-Shot)',
    flowSitcomShots: [
      {
        shotNumber: 1,
        cameraSpec: 'Wide Desk Shot · Sunlight Office Skyline (Veo + Scene Builder)',
        character: 'Marcus',
        dialogueEn: 'Hey Chloe, do you have 30 minutes at 2 PM today to review the Q4 launch timeline?',
        dialogueKo: '클로이, 오늘 오후 2시에 4분기 런칭 일정 검토할 시간 30분 정도 괜찮으세요?'
      },
      {
        shotNumber: 2,
        cameraSpec: 'Medium Close-Up · Laptop Calendar Screen Focus',
        character: 'Chloe',
        dialogueEn: "2 PM today looks a bit tight on my end — I'm tied up with client revisions.",
        dialogueKo: '오늘 2시는 제 쪽 일정이 조금 빠듯하네요. 클라이언트 수정 건에 묶여 있어서요.'
      },
      {
        shotNumber: 3,
        cameraSpec: 'Two-Shot Warm Nod · Natural Office Ambience',
        character: 'Chloe',
        dialogueEn: "Would tomorrow at 11 AM work for you instead? I'll send the draft by 5 PM today.",
        dialogueKo: '대신 내일 오전 11시는 괜찮으실까요? 초안은 오늘 오후 5시까지 보내드릴게요.'
      }
    ],
    nuanceCard: {
      expression: 'tight on my end / push back',
      koreanMeaning: '제 쪽 일정이 좀 빠듯하네요(애매하네요) / 일정을 뒤로 미루다',
      englishDefinition: 'Having very little free time on your schedule; to move a scheduled meeting to a later time.',
      structuralFormula: '[Time + looks a bit tight + on my end.] + [Would + Alternative + work instead?]',
      konglishTrap: '❌ My schedule is ambiguous, so please delay the meeting. ("ambiguous"는 의미가 모호하다는 뜻이고 명령조 delay는 무례하게 들립니다)',
      nativeNuance: '"on my end(제 쪽에서는)"와 대안 시간("Would Thursday work instead?")을 세트로 제시하는 것이 글로벌 매너입니다.',
      casualExample: 'Tomorrow is a bit tight — can we push our sync to Thursday?',
      politeExample: 'Tomorrow looks quite tight on my end. Would it be possible to push our meeting back to Thursday afternoon?',
      levelVariants: {
        easy: 'Tomorrow is tight for me. Is Thursday okay?',
        standard: 'Tomorrow looks a bit tight on my end. Would Thursday work instead?',
        challenge: 'Unfortunately, tomorrow afternoon looks quite tight on my calendar due to a prior deliverable. Would it be possible to push our sync back to Thursday?'
      }
    },
    sprintQuestions: [
      {
        id: 'u2-q1',
        type: 'chunk-order',
        koreanPrompt: '내일은 제 쪽 일정이 조금 빠듯해(애매해) 보입니다.',
        englishPromptHint: 'Politely state that your calendar has very little room tomorrow.',
        koreanChunksGuide: ['내일은 ~해 보입니다', '조금 빠듯한', '제 쪽에서는'],
        targetEnglish: 'Tomorrow looks a bit tight on my end.',
        chunks: ['Tomorrow looks', 'a bit tight', 'on my end.'],
        nuanceExplanation: '주어를 사람(I) 대신 시간(Tomorrow)으로 두어 "Tomorrow looks a bit tight on my end"라고 하면 훨씬 프로페셔널합니다.'
      },
      {
        id: 'u2-q2',
        type: 'fill-blank',
        koreanPrompt: '금요일까지 최종 보고서를 보내드리겠습니다. (마감 전치사 주의!)',
        englishPromptHint: 'Choose the preposition for a completion deadline.',
        koreanChunksGuide: ['보내드리겠습니다', '최종 보고서를', '금요일(마감 시점)까지'],
        targetEnglish: 'I will send over the final report by Friday.',
        blankSentence: {
          before: 'I will send over the final report',
          answer: 'by',
          after: 'Friday.',
          hint: '완료 마감 기한을 나타내는 2글자 전치사 (until 아님!)'
        },
        nuanceExplanation: "'금요일까지 제출/완료'는 'by Friday', '금요일까지 계속 휴가'처럼 상태 지속은 'until Friday'를 씁니다."
      },
      {
        id: 'u2-q3',
        type: 'speak-prompt',
        koreanPrompt: '대신 목요일 오후는 괜찮으실까요?',
        englishPromptHint: 'Propose Thursday afternoon as an alternative slot using "work".',
        koreanChunksGuide: ['목요일 오후가 괜찮을까요', '그 대신에'],
        targetEnglish: 'Would Thursday afternoon work for you instead?',
        chunks: ['Would Thursday afternoon', 'work for you', 'instead?'],
        acceptableKeywords: ['thursday', 'work', 'instead'],
        nuanceExplanation: '일정을 맞출 때 원어민이 가장 사랑하는 동사는 "work"입니다!'
      }
    ],
    lectureChapters: [
      {
        id: 'u2-ch1',
        timestamp: '00:00 ~ 20:00',
        durationMin: 20,
        title: 'Chapter 1. 일정 거절·변경의 황금 3단계 공식 (사유 - 완화 - 대안)',
        boardFormula: '1. Tied up with [사유] + 2. Tight on my end + 3. Would [대안] work instead?',
        koreanMisconception: '"I am busy, please check mail"처럼 직역하여 차갑고 일방적인 통보처럼 들림.',
        nativeMindset: '조동사(Would/Could)와 완곡 부사(a bit)가 영어의 존댓말입니다. 거절과 동시에 대안 슬롯을 제시하세요.',
        exampleEn: "I'm tied up with a release today, so could we push our sync back to tomorrow at 2 PM?",
        exampleKo: '오늘 배포 건으로 손이 묶여 있어서요, 미팅을 내일 오후 2시로 미뤄도 괜찮을까요?',
        instructorScript: '"I\'m tied up with ~"는 다른 급한 일에 묶여 있어 물리적으로 어렵다는 뉘앙스를 주어 상대방이 기분 좋게 배려해 줍니다.'
      },
      {
        id: 'u2-ch2',
        timestamp: '20:00 ~ 45:00',
        durationMin: 25,
        title: 'Chapter 2. 실수 제로 마감 전치사 (by vs until) & keep ~ in the loop',
        boardFormula: 'by [완료 데드라인] / until [상태 지속] / keep [사람] in the loop (공유하다)',
        koreanMisconception: '금요일까지 파일 줄게 = until Friday로 오용하여 의미 혼선 발생.',
        nativeMindset: '데드라인은 점(by), 휴가·회의 시간은 선(until)으로 엄격히 구분합니다.',
        exampleEn: "I'll wrap up the draft by Wednesday and keep the team in the loop.",
        exampleKo: '수요일까지 초안을 마무리하고 팀원들에게 진행 상황을 계속 공유하겠습니다.',
        instructorScript: '"참조 걸어둘게요 / 공유드릴게요"는 "keep you in the loop" 하나로 완벽히 해결됩니다.'
      }
    ],
    dictationItems: [
      {
        id: 'u2-d1',
        speaker: 'Chloe (PM)',
        fullAudioText: 'Wednesday morning looks a bit tight on my end.',
        beforeBlank: 'Wednesday morning looks a bit',
        answer: 'tight',
        afterBlank: 'on my end.',
        koreanTranslation: '수요일 오전은 제 쪽 일정이 조금 빠듯해 보입니다.',
        listeningTip: "'tight on my end' 연음 리듬을 들어보세요."
      },
      {
        id: 'u2-d2',
        speaker: 'Marcus (Lead)',
        fullAudioText: 'Please keep me in the loop if anything changes.',
        beforeBlank: 'Please keep me in the',
        answer: 'loop',
        afterBlank: 'if anything changes.',
        koreanTranslation: '변동 사항이 생기면 저에게도 계속 공유해 주세요.',
        listeningTip: '고리(loop) 안에 나를 넣어달라 = 진행 상황을 공유해 달라는 핵심 관용구입니다.'
      }
    ],
    workbookWritingPrompt: {
      situationKo: '해외 파트너가 오늘 오후 3시에 화상 미팅을 요청했지만 마감 때문에 내일 오전 11시로 미루고 싶은 상황입니다. 2~3문장으로 작성해보세요.',
      guidePoints: [
        '사유/완화: 3 PM today looks a bit tight on my end / tied up with ~',
        '대안 제안: Would tomorrow at 11 AM work for you instead?'
      ],
      modelParagraphEn: 'Thanks for reaching out! Unfortunately, 3 PM today looks a bit tight on my end as I am tied up with an urgent deadline. Would tomorrow at 11 AM work for you instead?'
    },
    examQuestions: [
      {
        id: 'u2-ex1',
        number: 1,
        questionType: 'multiple-choice',
        grammarTag: '마감 시점 전치사 (by vs until)',
        promptKo: '"수요일 오후 5시까지 수정된 계약서를 제출해 주시기 바랍니다."의 빈칸에 알맞은 것은?',
        promptEn: 'Please submit the revised contract _______ 5 PM on Wednesday.',
        options: ['by', 'until', 'for', 'during'],
        correctAnswer: 'by',
        explanationKo: '제출 완료 데드라인(기한)을 나타낼 때는 전치사 by를 사용합니다. until은 상태의 계속을 뜻합니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 빈칸에 알맞은 전치사를 쓰시오: "월요일 아침까지 예산안을 마무리하겠습니다."',
          promptEn: 'I will finalize the budget proposal _______ Monday morning.',
          correctAnswer: 'by',
          explanationKo: '마무리(finalize) 완료 시점이므로 by가 정답입니다.'
        }
      },
      {
        id: 'u2-ex2',
        number: 2,
        questionType: 'multiple-choice',
        grammarTag: '타동사 어법 (discuss)',
        promptKo: '다음 중 어법상 올바르고 비즈니스 미팅에서 가장 자연스러운 문장은?',
        promptEn: 'Select the grammatically accurate business expression.',
        options: [
          'Could we push our kickoff meeting back to Friday?',
          'Let us discuss about the budget in detail.',
          'My schedule is very ambiguous tomorrow afternoon.',
          'Yesterday I had many works to finish.'
        ],
        correctAnswer: 'Could we push our kickoff meeting back to Friday?',
        explanationKo: 'discuss about(X -> discuss), ambiguous schedule(X -> tight), many works(X -> a lot of work)는 모두 대표적인 콩글리시·문법 오류입니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 밑줄 친 오류를 바르게 고쳐 쓰시오: "We need to discuss about the new timeline."',
          promptEn: 'Rewrite the sentence accurately without the redundant preposition.',
          correctAnswer: 'We need to discuss the new timeline.',
          explanationKo: '타동사 discuss는 전치사 about 없이 바로 목적어를 취합니다.'
        }
      },
      {
        id: 'u2-ex3',
        number: 3,
        questionType: 'sentence-rewrite',
        grammarTag: '실무 대안 일정 제안',
        promptKo: '[조건부 서술형] 주어진 단어를 배열하여 "대신 금요일 오전이 괜찮으실까요?"를 완성하시오. (Friday morning / instead / Would / work for you)',
        promptEn: 'Arrange into a polite question: (Friday morning / instead / Would / work for you)',
        correctAnswer: 'Would Friday morning work for you instead?',
        explanationKo: '[Would + 대안 시간 + work for you + instead?] 공식을 그대로 적용합니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 영작하시오: "대신 내일 오후 3시가 괜찮으실까요?" (3 PM tomorrow / instead / Would / work for you)',
          promptEn: 'Write the polite question.',
          correctAnswer: 'Would 3 PM tomorrow work for you instead?',
          explanationKo: 'Would + 시간 + work for you instead? 어순입니다.'
        }
      }
    ],
    tutorTurns: [
      {
        id: 'u2-t1',
        tutorQuestionEn: 'Hey! Do you have 30 minutes at 4 PM today to discuss the Q4 roadmap?',
        tutorQuestionKo: '안녕하세요! 오늘 오후 4시에 4분기 로드맵 논의를 위해 30분 시간 괜찮으실까요?',
        followUpProbeEn: 'No problem at all! By when can you send over the initial draft before we meet?',
        expansionHints: ['4 PM looks a bit tight on my end', 'Would tomorrow afternoon work instead?', 'I will send it over by Friday'],
        sampleModelAnswer: '4 PM today looks a bit tight on my end. Would tomorrow at 2 PM work for you instead?'
      }
    ]
  },
  {
    id: 'unit-opic-prep',
    level: 'Lv.6 B1+',
    kLevelNum: 7,
    category: 'opic-speaking',
    categoryLabel: '오픽·면접 3문장',
    title: '단답형 탈출 PREP 공식: 내 생각과 경험을 3문장으로 막힘없이 이어 말하기',
    subtitle: '"Yes, I like coffee"에서 멈추는 초급 회화를 오픽 AL·영어면접 수준으로 끌어올리는 구조화',
    keySentence: 'What I love most about working remotely is that it saves commuting time.',
    sprintMinutes: 8,
    deepClassMinutes: 45,
    instructorName: '제나 킴 강사 (오픽·인터뷰 코치)',
    visualAssetPath: '/assets/visual_preposition_card.jpg',
    flowSitcomTitle: 'EP 03. 실전 영어 인터뷰 & 스몰토크 확장 (Google Flow Multi-Shot)',
    flowSitcomShots: [
      {
        shotNumber: 1,
        cameraSpec: 'Clean Studio Interview Shot · Natural Eye Contact',
        character: 'Interviewer',
        dialogueEn: 'How do you usually recharge after a demanding project week?',
        dialogueKo: '고된 프로젝트 주간을 보낸 뒤에는 주로 어떻게 재충전하시나요?'
      },
      {
        shotNumber: 2,
        cameraSpec: 'Medium Shot · Relaxed Hand Gesture',
        character: 'Candidate',
        dialogueEn: 'I usually go for an evening run. What I love most about it is that it helps me clear my head.',
        dialogueKo: '주로 저녁 러닝을 합니다. 가장 좋아하는 점은 복잡한 머리를 맑게 비워준다는 거예요.'
      }
    ],
    nuanceCard: {
      expression: 'What I love most about X is that ~',
      koreanMeaning: 'X에 대해 제가 가장 좋아하는 점은 바로 ~라는 것입니다',
      englishDefinition: 'A cleft-like sentence starter used to highlight the primary reason you enjoy or value something.',
      structuralFormula: '[What I love most about X] + [is that + Subject + Verb]',
      konglishTrap: '❌ My best point of remote work is save time. ("best point"는 어색한 콩글리시이며 is 뒤에 동사원형을 바로 쓸 수 없습니다)',
      nativeNuance: '"I like X" 대신 "What I love most about X is that 주어+동사"로 열면 면접관의 집중도가 단번에 올라갑니다.',
      casualExample: 'What I love most about this cafe is its peaceful vibe.',
      politeExample: 'What I appreciate most about our team culture is that everyone shares candid feedback.',
      levelVariants: {
        easy: 'I love remote work because it saves time.',
        standard: 'What I love most about remote work is that it saves commuting time.',
        challenge: 'What I appreciate most about a hybrid work arrangement is that it eliminates two hours of daily commuting, allowing deeper focus.'
      }
    },
    sprintQuestions: [
      {
        id: 'u3-q1',
        type: 'chunk-order',
        koreanPrompt: '재택근무에서 제가 가장 좋아하는 점은 출퇴근 시간을 아껴준다는 거예요.',
        englishPromptHint: 'Highlight the best advantage of remote work using a What-clause.',
        koreanChunksGuide: ['제가 가장 좋아하는 점은', '재택근무에 대해', '~라는 것입니다', '출퇴근 시간을 아껴준다는 것'],
        targetEnglish: 'What I love most about remote work is that it saves commuting time.',
        chunks: ['What I love most', 'about remote work', 'is that', 'it saves commuting time.'],
        nuanceExplanation: '오픽·토스·면접 만능 오프닝 패턴인 [What I love most about X is that S+V] 구조입니다.'
      },
      {
        id: 'u3-q2',
        type: 'fill-blank',
        koreanPrompt: '밤에 산책하면 복잡한 머리를 식히는 데 큰 도움이 됩니다.',
        englishPromptHint: 'Complete the idiom meaning "to refresh your mind and stop worrying".',
        koreanChunksGuide: ['밤에 걷는 것은', '도와줍니다', '내 머리를 맑게 식히도록'],
        targetEnglish: 'Walking at night helps me clear my head.',
        blankSentence: {
          before: 'Walking at night helps me',
          answer: 'clear',
          after: 'my head.',
          hint: 'c _ _ _ r (머리를 비우고 맑게 하다)'
        },
        nuanceExplanation: '취미·운동·산책 주제에서 만능 치트키로 쓰이는 표현 clear my head입니다.'
      }
    ],
    lectureChapters: [
      {
        id: 'u3-ch1',
        timestamp: '00:00 ~ 25:00',
        durationMin: 25,
        title: 'Chapter 1. 단답형 처방전: 3문장 자동 확장 PREP 프레임워크',
        boardFormula: 'P (한 줄 결론) ➔ R (What I love most is ~) ➔ E (For instance, last weekend I ~)',
        koreanMisconception: '질문을 받으면 일반론 1문장만 말하고 할 말이 끊겨 침묵함.',
        nativeMindset: '세 번째 문장에 "For instance, just last weekend I ~"로 구체적인 과거 일화 한 줄을 얹으면 AL급 답변이 됩니다.',
        exampleEn: 'Taking a walk after lunch really helps me clear my head and stay focused.',
        exampleKo: '점심 식사 후 산책을 하면 머리가 맑아지고 집중력을 유지하는 데 큰 도움이 됩니다.',
        instructorScript: '오픽 IH와 AL을 가르는 결정적 한 문장은 바로 "구체적 과거 경험 예시"입니다!'
      }
    ],
    dictationItems: [
      {
        id: 'u3-d1',
        speaker: 'Candidate',
        fullAudioText: 'Running at night helps me clear my head after a hectic day.',
        beforeBlank: 'Running at night helps me',
        answer: 'clear',
        afterBlank: 'my head after a hectic day.',
        koreanTranslation: '밤에 달리기를 하면 정신없이 바쁜 하루 끝에 머리를 식히는 데 도움이 됩니다.',
        listeningTip: 'hectic day(정신없이 바쁜 하루) 표현도 함께 익혀두세요.'
      }
    ],
    workbookWritingPrompt: {
      situationKo: '평소 스트레스를 풀기 위해 즐겨 하는 루틴을 PREP 3문장 공식(결론 - What I love most 이유 - 지난주 예시)으로 작성해보세요.',
      guidePoints: [
        '1문장(Point): I usually enjoy ~',
        '2문장(Reason): What I love most about it is that ~',
        '3문장(Example): For instance, last weekend I ~'
      ],
      modelParagraphEn: 'Whenever I feel overwhelmed, I enjoy going for a late-night walk. What I love most about it is that it helps me clear my head. For instance, last Sunday I walked along the Han River while listening to jazz.'
    },
    examQuestions: [
      {
        id: 'u3-ex1',
        number: 1,
        questionType: 'multiple-choice',
        grammarTag: '관계대명사 What 명사절 주어',
        promptKo: '"제가 이 동네에서 가장 좋아하는 점은 공원이 가깝다는 것입니다."의 빈칸에 알맞은 것은?',
        promptEn: '_______ I love most about this neighborhood is that the park is nearby.',
        options: ['What', 'That', 'Which', 'How'],
        correctAnswer: 'What',
        explanationKo: '선행사를 포함하여 "~하는 것"이라는 명사절 주어를 이끄는 관계대명사는 What입니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 빈칸을 채우시오: "제가 우리 팀에서 가장 존중하는 점은 솔직한 소통입니다."',
          promptEn: '_______ I appreciate most about our team is open communication.',
          correctAnswer: 'What',
          explanationKo: '불완전한 절(I appreciate most)을 이끌어 주어 역할을 하는 What을 씁니다.'
        }
      },
      {
        id: 'u3-ex2',
        number: 2,
        questionType: 'multiple-choice',
        grammarTag: '준사역동사 help 어법',
        promptKo: '다음 빈칸에 들어갈 수 없는 형태를 고르시오.',
        promptEn: 'Exercising in the morning helps me _______ energized all day.',
        options: ['staying', 'stay', 'to stay', 'feel'],
        correctAnswer: 'staying',
        explanationKo: 'help + 목적어 뒤에는 동사원형(stay/feel) 또는 to부정사(to stay)가 오며, -ing(staying) 형태는 올 수 없습니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 괄호 안의 동사를 올바른 형태로 쓰시오: "Meditation helps me (clear) my head."',
          promptEn: 'Write the accurate verb form.',
          correctAnswer: 'clear',
          explanationKo: 'help + 목적어 + 동사원형(clear) 구조입니다.'
        }
      },
      {
        id: 'u3-ex3',
        number: 3,
        questionType: 'sentence-rewrite',
        grammarTag: 'What 강조 구문 영작',
        promptKo: '[조건부 서술형] 주어진 어구를 배열하여 문장을 완성하시오. (is that / What I love most / it is quiet / about this library)',
        promptEn: 'Arrange: (is that / What I love most / it is quiet / about this library)',
        correctAnswer: 'What I love most about this library is that it is quiet.',
        explanationKo: '[What I love most about 대상] 주어부 뒤에 [is that + 절]을 연결합니다.',
        twinVariant: {
          promptKo: '[쌍둥이 변형] 배열하시오: (is that / What I love most / everyone is friendly / about my gym)',
          promptEn: 'Write the complete sentence.',
          correctAnswer: 'What I love most about my gym is that everyone is friendly.',
          explanationKo: '동일한 What I love most about X is that S+V 구조입니다.'
        }
      }
    ],
    tutorTurns: [
      {
        id: 'u3-t1',
        tutorQuestionEn: 'How do you usually unwind and recharge after a busy week? Try speaking in 3 sentences!',
        tutorQuestionKo: '바쁜 한 주를 보낸 뒤 주로 어떻게 재충전하시나요? 3문장으로 이어 답해보세요!',
        followUpProbeEn: 'Love that! Can you share a specific memory from the last time you did that?',
        expansionHints: ['What I love most about ... is that', 'It helps me clear my head', 'For instance, last weekend I ...'],
        sampleModelAnswer: 'I usually unwind by visiting quiet bookshops. What I love most about it is that it helps me clear my head. Just last Sunday, I read a great novel for two hours.'
      }
    ]
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'cat-vocab',
    skill: 'vocabulary',
    difficultyKLevel: 6,
    questionKo: '[어휘·콜로케이션] 해외 동료가 "Tomorrow afternoon looks pretty tight on my end."라고 보냈을 때 정확한 뜻은?',
    options: [
      { label: '내일 오후 제 쪽 일정이 꽉 차서 시간 내기 빠듯하다는 완곡한 표현', isCorrect: true, feedback: '정확합니다! tight on my end는 일정 여유가 없음을 정중히 알리는 실무 핵심 표현입니다.' },
      { label: '내일 오후 미팅 준비를 아주 타이트하고 엄격하게 해오라는 지시', isCorrect: false, feedback: '여기서 tight는 스케줄이 빠듯하다는 뜻입니다.' },
      { label: '내일 오후까지 계약을 최종 종료하겠다는 통보', isCorrect: false, feedback: 'on my end는 "제 쪽 사정상"이라는 의미입니다.' }
    ]
  },
  {
    id: 'cat-grammar',
    skill: 'grammar',
    difficultyKLevel: 5,
    questionKo: '[문장구조·전치사] "금요일까지 최종 견적서를 보내드리겠습니다."에 어법상 정확한 문장은?',
    options: [
      { label: 'I will send over the final quote by Friday.', isCorrect: true, feedback: '완벽합니다! 제출·완료 데드라인 시점은 전치사 by를 사용합니다.' },
      { label: 'I will send over the final quote until Friday.', isCorrect: false, feedback: 'until은 동작이나 상태의 지속을 나타내므로 완료 마감 기한에는 by를 써야 합니다.' },
      { label: 'I will discuss about the quote until Friday.', isCorrect: false, feedback: 'discuss 뒤에 about은 불필요하며 마감 기한 전치사는 by입니다.' }
    ]
  },
  {
    id: 'cat-listening',
    skill: 'listening',
    difficultyKLevel: 6,
    questionKo: '[문맥·구동사 추론] "I meant to hit the sack early, but I ended up binge-watching a series."의 화자 상황은?',
    options: [
      { label: '일찍 자려고 했으나 결국 드라마를 몰아보느라 늦게까지 깨어 있었다', isCorrect: true, feedback: '정답! hit the sack(잠자리에 들다)과 ended up -ing(결국 ~하게 되다)를 정확히 이해하셨습니다.' },
      { label: '일찍 운동하러 가려다가 결국 서점에서 시리즈 책을 샀다', isCorrect: false, feedback: 'hit the sack은 잠자리에 든다는 관용표현입니다.' },
      { label: '드라마를 다 본 덕분에 마침내 일찍 잠들 수 있었다', isCorrect: false, feedback: 'meant to(원래 의도)와 but I ended up(예상 밖 결과)의 대조 구조를 확인하세요.' }
    ]
  },
  {
    id: 'cat-speaking',
    skill: 'speaking',
    difficultyKLevel: 4,
    questionKo: '[1초 발화 순발력] "오늘 저녁에 친구랑 약속 있어요"를 콩글리시 없이 1초 만에 말할 때 올바른 문장은?',
    options: [
      { label: 'I have plans with a friend tonight.', isCorrect: true, feedback: '최고입니다! 일상적인 만남 약속은 promise가 아니라 복수형 plans를 씁니다.' },
      { label: 'I have a promise with my friend this evening.', isCorrect: false, feedback: 'promise는 맹세·서약입니다! 만남 약속은 plans를 써주세요.' },
      { label: 'Tonight with friend appointment is exist.', isCorrect: false, feedback: '영어는 무조건 [I + have + plans] 주어·동사 뼈대부터 출발해야 합니다.' }
    ]
  },
  {
    id: 'cat-writing',
    skill: 'writing',
    difficultyKLevel: 7,
    questionKo: '[서술형 작문·완곡어법] "어제 일이 많아서 메일 확인이 늦었습니다. 목요일로 미뤄도 될까요?"에 가장 자연스러운 비즈니스 영작은?',
    options: [
      { label: 'Apologies for the delay — I was tied up with work yesterday. Would it be possible to push our meeting back to Thursday?', isCorrect: true, feedback: '완벽한 C1/B2급 비즈니스 작문입니다! 불가산 명사 work, 구동사 tied up with, 완곡어법 push ~ back이 정확합니다.' },
      { label: 'Yesterday I had many works so I could not check your mail. Delay to Thursday please.', isCorrect: false, feedback: 'many works(X), mail(X -> email), 명령조 Delay(X) 등 대표적 직역 오류가 포함되어 있습니다.' },
      { label: 'My schedule was ambiguous yesterday, so let us discuss about it Thursday.', isCorrect: false, feedback: 'ambiguous 오용 및 discuss about 문법 오류가 있습니다.' }
    ]
  }
];

export const INITIAL_REVIEW_ITEMS: ReviewItem[] = [
  {
    id: 'rev-init-1',
    koreanPrompt: '내일은 제 쪽 일정이 조금 빠듯해(애매해) 보입니다.',
    targetEnglish: 'Tomorrow looks a bit tight on my end.',
    explanationKo: "'일정이 애매하다'는 ambiguous가 아닌 tight on my end를 사용합니다.",
    sourceMode: 'deep-tutor',
    stage: 'D+1',
    dueToday: true
  },
  {
    id: 'rev-init-2',
    koreanPrompt: '일찍 자려고 했는데 결국 늦게까지 일하게 됐어요.',
    targetEnglish: 'I meant to sleep early, but I ended up working late.',
    explanationKo: '의도(meant to)와 예상 밖의 결론(ended up -ing) 연결 패턴입니다.',
    sourceMode: 'sprint',
    stage: 'D+3',
    dueToday: true
  },
  {
    id: 'rev-init-3',
    koreanPrompt: '금요일까지 최종 초안을 마무리해서 공유드리겠습니다.',
    targetEnglish: 'I will wrap up the final draft by Friday and keep you in the loop.',
    explanationKo: '마감 시점 전치사 by Friday와 진행 상황 공유 keep you in the loop 조합입니다.',
    sourceMode: 'exam-clinic',
    stage: 'D+7',
    dueToday: false
  }
];
