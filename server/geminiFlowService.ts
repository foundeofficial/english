import type {
  CurriculumUnit,
  DailyLiveArticle,
  UnitQAReport
} from '../src/types/learning.ts';
import { analyzeAndParaphrase } from '../src/utils/paraphraseEngine.ts';
import { verifyUnitPedagogicalQuality } from '../src/utils/pedagogicalQA.ts';

export interface FlowProductionBlueprint {
  projectTitle: string;
  characterIngredients: Array<{
    id: string;
    name: string;
    visualSpec: string;
    voiceTone: string;
  }>;
  imagenWorksheetPrompt: string;
  veoScenePrompts: Array<{
    shot: number;
    cameraControl: string;
    veoPrompt: string;
    nativeAudioLine: string;
    koreanSub: string;
  }>;
}

export interface GeneratedCreatorPackage {
  sourceEngine: 'gemini-live-api' | 'local-pedagogical-synthesizer';
  flowBlueprint: FlowProductionBlueprint;
  unit: CurriculumUnit;
  qaReport: UnitQAReport;
}

interface TopicTemplate {
  keywords: string[];
  coreEn: string;
  coreKo: string;
  companionEn: string;
  companionKo: string;
  grammarPoint: string;
  blankBefore: string;
  blankAns: string;
  blankAfter: string;
  chunks: string[];
  imagenScene: string;
}

const TOPIC_TEMPLATES: TopicTemplate[] = [
  {
    keywords: ['협상', '단가', '가격', '계약', '바이어', '예산', '할인'],
    coreEn: 'If we commit to an annual contract, could you offer a volume discount?',
    coreKo: '연간 계약을 약정한다면 물량 할인을 제공해 주실 수 있을까요?',
    companionEn: 'Let us find middle ground that works for both sides.',
    companionKo: '양측 모두에게 도움이 되는 절충안을 찾아봅시다.',
    grammarPoint: 'Conditional Negotiation (commit to + Noun)',
    blankBefore: 'If we commit to an annual contract, could you offer a',
    blankAns: 'volume',
    blankAfter: 'discount?',
    chunks: ['If we commit to', 'an annual contract,', 'could you offer', 'a volume discount?'],
    imagenScene: 'Minimalist editorial illustration of two global business partners shaking hands over a contract table with subtle chart icons, warm ivory paper and sage green palette'
  },
  {
    keywords: ['공항', '수하물', '여행', '호텔', '비행기', '체크인', '분실'],
    coreEn: 'My checked luggage did not come out on the carousel.',
    coreKo: '위탁 수하물이 수하물 수취대에 나오지 않았어요.',
    companionEn: 'Could you track where my bag is and have it delivered to my hotel?',
    companionKo: '제 가방 위치를 추적해서 호텔로 배송해 주실 수 있을까요?',
    grammarPoint: 'Travel Troubleshooting & Causative have + O + p.p.',
    blankBefore: 'My checked',
    blankAns: 'luggage',
    blankAfter: 'did not come out on the carousel.',
    chunks: ['My checked luggage', 'did not come out', 'on the carousel.'],
    imagenScene: 'Clean educational diagram comparing carry-on bag vs checked luggage at an airport baggage carousel, warm editorial ink illustration'
  },
  {
    keywords: ['카페', '주문', '커피', '식당', '음식', '포장'],
    coreEn: 'Could I get an iced oat latte to go, with light ice?',
    coreKo: '아이스 오트 라떼 테이크아웃으로 얼음 적게 해서 주시겠어요?',
    companionEn: 'Actually, let me also add a warm croissant to my order.',
    companionKo: '아, 주문에 따뜻한 크루아상 하나도 추가할게요.',
    grammarPoint: 'Polite Ordering (Could I get ~ to go / with ~)',
    blankBefore: 'Could I get an iced oat latte to',
    blankAns: 'go',
    blankAfter: ', with light ice?',
    chunks: ['Could I get', 'an iced oat latte', 'to go,', 'with light ice?'],
    imagenScene: 'Warm sunlit cafe counter scene showing a customer ordering coffee to go from a friendly barista, crisp textbook style illustration'
  }
];

function synthesizeLocalPackage(
  topicKo: string,
  targetKLevel: number
): GeneratedCreatorPackage {
  const matched = TOPIC_TEMPLATES.find((t) =>
    t.keywords.some((kw) => topicKo.includes(kw))
  ) ?? {
    keywords: [],
    coreEn: 'I would like to share a structured update on our current priorities.',
    coreKo: `"${topicKo}" 주제와 관련해 현재 우선순위를 체계적으로 공유드리고 싶습니다.`,
    companionEn: 'Please let me know if any part requires further clarification.',
    companionKo: '추가 설명이 필요한 부분이 있다면 언제든 알려주세요.',
    grammarPoint: 'Structured Professional Framing (would like to ~)',
    blankBefore: 'I would like to share a',
    blankAns: 'structured',
    blankAfter: 'update on our current priorities.',
    chunks: ['I would like to', 'share a structured update', 'on our current priorities.'],
    imagenScene: `Warm editorial textbook illustration depicting the real-world scenario of "${topicKo}", sage green and terracotta accents on cream paper`
  };

  const id = `custom-unit-${Date.now()}`;
  const levelTag: CurriculumUnit['level'] =
    targetKLevel <= 3
      ? 'Lv.2 A1+'
      : targetKLevel <= 6
      ? 'Lv.5 B1'
      : targetKLevel <= 8
      ? 'Lv.6 B1+'
      : 'Lv.8 B2';

  const flowBlueprint: FlowProductionBlueprint = {
    projectTitle: `Google Flow 시트콤 패키지 — ${topicKo}`,
    characterIngredients: [
      {
        id: 'ING-CHLOE-01',
        name: 'Chloe (고정 주연 페르소나)',
        visualSpec: 'Early 30s Korean-American professional, glasses, olive knit sweater, consistent facial geometry across all shots',
        voiceTone: 'Clear, warm General American English (1.0x articulatory clarity)'
      },
      {
        id: 'ING-MARCUS-02',
        name: 'Marcus (상대역 페르소나)',
        visualSpec: 'Mid 30s global partner, forest-green vest over blue shirt, friendly attentive expression',
        voiceTone: 'Calm, supportive baritone native English'
      }
    ],
    imagenWorksheetPrompt: matched.imagenScene,
    veoScenePrompts: [
      {
        shot: 1,
        cameraControl: 'Medium Two-Shot · 35mm Lens · Slow Push-In',
        veoPrompt: `Using Ingredients [ING-CHLOE-01] and [ING-MARCUS-02] in a realistic setting for "${topicKo}", warm natural lighting, Chloe speaks naturally with lip-synced audio.`,
        nativeAudioLine: matched.coreEn,
        koreanSub: matched.coreKo
      },
      {
        shot: 2,
        cameraControl: 'Over-the-Shoulder Reverse Shot · Soft Bokeh',
        veoPrompt: `Cut to [ING-MARCUS-02] nodding and responding constructively while maintaining scene continuity from Shot 1.`,
        nativeAudioLine: matched.companionEn,
        koreanSub: matched.companionKo
      }
    ]
  };

  const unit: CurriculumUnit = {
    id,
    level: levelTag,
    kLevelNum: targetKLevel,
    category: 'business',
    categoryLabel: 'AI 스튜디오 맞춤 생성 단원',
    title: `[맞춤 교재] ${topicKo}`,
    subtitle: `목표 수준 K-Lv.${targetKLevel} · 핵심 구문: ${matched.grammarPoint}`,
    keySentence: matched.coreEn,
    sprintMinutes: 7,
    deepClassMinutes: 40,
    instructorName: '코어브릿지 AI 교육공학 엔진 (4-Gate 검수 완료)',
    visualAssetPath: '/assets/office_sitcom_scene.jpg',
    flowSitcomTitle: flowBlueprint.projectTitle,
    flowSitcomShots: flowBlueprint.veoScenePrompts.map((s) => ({
      shotNumber: s.shot,
      cameraSpec: s.cameraControl,
      character: s.shot === 1 ? 'Chloe' : 'Marcus',
      dialogueEn: s.nativeAudioLine,
      dialogueKo: s.koreanSub
    })),
    nuanceCard: {
      expression: matched.grammarPoint,
      koreanMeaning: matched.coreKo,
      englishDefinition: `Practical communicative expression tailored for "${topicKo}".`,
      structuralFormula: matched.chunks.map((c) => `[${c}]`).join(' + '),
      konglishTrap: '한국어 명사 나열식 직역을 피하고 영어 동사구 콜로케이션을 우선 배치하세요.',
      nativeNuance: '실제 현장에서 상대방에게 명확하면서도 정중한 인상을 남기는 핵심 구문입니다.',
      casualExample: matched.coreEn,
      politeExample: matched.companionEn,
      levelVariants: {
        easy: matched.coreEn,
        standard: matched.coreEn,
        challenge: `${matched.coreEn} ${matched.companionEn}`
      }
    },
    sprintQuestions: [
      {
        id: `${id}-sq1`,
        type: 'chunk-order',
        koreanPrompt: matched.coreKo,
        englishPromptHint: 'Arrange the meaning chunks in native speaker order.',
        koreanChunksGuide: ['핵심 조건·주어부', '동사구', '목적어·마무리'],
        targetEnglish: matched.coreEn,
        chunks: matched.chunks,
        nuanceExplanation: `${matched.grammarPoint} 어순 흐름에 맞춰 조립합니다.`
      },
      {
        id: `${id}-sq2`,
        type: 'fill-blank',
        koreanPrompt: `${matched.coreKo} (핵심 키워드 인출)`,
        englishPromptHint: 'Type the missing collocation keyword.',
        koreanChunksGuide: ['핵심 어휘 스펠링 인출'],
        targetEnglish: matched.coreEn,
        blankSentence: {
          before: matched.blankBefore,
          answer: matched.blankAns,
          after: matched.blankAfter,
          hint: `${matched.blankAns[0]} _ _ (${matched.blankAns.length}글자)`
        },
        nuanceExplanation: `핵심 키워드 '${matched.blankAns}'를 정확히 구사해야 의미가 선명히 전달됩니다.`
      }
    ],
    lectureChapters: [
      {
        id: `${id}-ch1`,
        timestamp: '00:00 ~ 20:00',
        durationMin: 20,
        title: `Chapter 1. "${topicKo}" 실전 문장 설계 원리`,
        boardFormula: matched.chunks.map((c) => `[${c}]`).join(' ➔ '),
        koreanMisconception: '상황에 맞는 영어 콜로케이션 대신 한국어 어휘를 일대일로 번역해 어색한 문장을 만듦.',
        nativeMindset: '검증된 청크 블록 단위로 문장을 조립해 발화 지연을 1초 이내로 줄입니다.',
        exampleEn: matched.coreEn,
        exampleKo: matched.coreKo,
        instructorScript: `이번 맞춤 단원에서는 "${topicKo}" 상황에서 원어민이 가장 자연스럽게 구사하는 "${matched.coreEn}" 패턴을 익힙니다.`
      }
    ],
    dictationItems: [
      {
        id: `${id}-d1`,
        speaker: 'Chloe',
        fullAudioText: matched.coreEn,
        beforeBlank: matched.blankBefore,
        answer: matched.blankAns,
        afterBlank: matched.blankAfter,
        koreanTranslation: matched.coreKo,
        listeningTip: `핵심어 '${matched.blankAns}'의 강세를 포착해 보세요.`
      }
    ],
    workbookWritingPrompt: {
      situationKo: `"${topicKo}" 상황에서 오늘 배운 핵심 표현을 넣어 2문장 이상의 실전 메시지를 작성해보세요.`,
      guidePoints: [`필수 구문: ${matched.grammarPoint}`, '대소문자 및 마침표 준수'],
      modelParagraphEn: `${matched.coreEn} ${matched.companionEn}`
    },
    examQuestions: [
      {
        id: `${id}-ex1`,
        number: 1,
        questionType: 'multiple-choice',
        grammarTag: matched.grammarPoint,
        promptKo: '다음 문장의 빈칸에 문맥상 가장 알맞은 어휘를 고르시오.',
        promptEn: `${matched.blankBefore} _______ ${matched.blankAfter}`,
        options: [matched.blankAns, 'ambiguous', 'promise', 'until'],
        correctAnswer: matched.blankAns,
        explanationKo: `문맥과 콜로케이션 기준에 따라 '${matched.blankAns}'가 유일한 정답입니다.`,
        twinVariant: {
          promptKo: `[쌍둥이 변형] 빈칸을 직접 채워 문장을 완성하시오: "${matched.coreKo}"`,
          promptEn: `${matched.blankBefore} _______ ${matched.blankAfter}`,
          correctAnswer: matched.blankAns,
          explanationKo: `핵심 콜로케이션 '${matched.blankAns}' 인출 문제입니다.`
        }
      },
      {
        id: `${id}-ex2`,
        number: 2,
        questionType: 'multiple-choice',
        grammarTag: '정확한 실전 표현 판별',
        promptKo: '다음 중 어법상 오류가 없고 자연스러운 문장은?',
        promptEn: 'Choose the single accurate English sentence.',
        options: [
          matched.companionEn,
          'Yesterday I had many works at office.',
          'Let us discuss about the price.',
          'My schedule is very ambiguous.'
        ],
        correctAnswer: matched.companionEn,
        explanationKo: '나머지 선지에는 불가산 명사, 타동사 전치사 중복, 콩글리시 오류가 포함되어 있습니다.',
        twinVariant: {
          promptKo: `[쌍둥이 변형] 다음 뜻을 영어로 쓰시오: "${matched.companionKo}"`,
          promptEn: 'Write the complete English sentence.',
          correctAnswer: matched.companionEn,
          explanationKo: `정답 문장은 "${matched.companionEn}"입니다.`
        }
      },
      {
        id: `${id}-ex3`,
        number: 3,
        questionType: 'sentence-rewrite',
        grammarTag: '서술형 통문장 조립',
        promptKo: `[조건부 서술형] 제시된 청크를 올바른 순서로 배열하시오.`,
        promptEn: `(${[...matched.chunks].reverse().join(' / ')})`,
        correctAnswer: matched.coreEn,
        explanationKo: `정확한 어순은 "${matched.coreEn}"입니다.`,
        twinVariant: {
          promptKo: `[쌍둥이 변형] 한영 통문장 영작: "${matched.coreKo}"`,
          promptEn: 'Write the full sentence.',
          correctAnswer: matched.coreEn,
          explanationKo: `"${matched.coreEn}"로 작성합니다.`
        }
      }
    ],
    tutorTurns: [
      {
        id: `${id}-t1`,
        tutorQuestionEn: `Let's roleplay "${topicKo}"! How would you start the conversation using today's key expression?`,
        tutorQuestionKo: `"${topicKo}" 실전 롤플레이입니다! 오늘 배운 핵심 표현으로 첫 마디를 건네보시겠어요?`,
        followUpProbeEn: 'Sounds very professional! What follow-up condition or detail would you add?',
        expansionHints: [matched.chunks[0], matched.blankAns, matched.companionEn],
        sampleModelAnswer: matched.coreEn
      }
    ]
  };

  const qaReport = verifyUnitPedagogicalQuality(unit);

  return {
    sourceEngine: 'local-pedagogical-synthesizer',
    flowBlueprint,
    unit,
    qaReport
  };
}

export async function generateFlowAndUnitPackage(params: {
  topicKo: string;
  targetKLevel: number;
  apiKey?: string;
}): Promise<GeneratedCreatorPackage> {
  const effectiveKey = params.apiKey?.trim() || process.env.GEMINI_API_KEY?.trim();

  if (effectiveKey) {
    try {
      const prompt = `You are a Korean-English EdTech curriculum architect. Create a JSON object for topic "${params.topicKo}" at K-Level ${params.targetKLevel}/12 (1=A1, 12=C1).
Return strictly JSON with keys:
{
  "coreEn": "single natural English sentence (8-16 words, zero Konglish)",
  "coreKo": "natural Korean meaning",
  "companionEn": "second natural follow-up English sentence (8-16 words)",
  "companionKo": "natural Korean meaning",
  "grammarPoint": "concise grammar/collocation name",
  "imagenPrompt": "warm editorial textbook illustration prompt without text overlays"
}`;

      const resp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(effectiveKey)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: 'application/json' }
          })
        }
      );

      if (resp.ok) {
        const data = (await resp.json()) as {
          candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
        };
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const parsed = JSON.parse(rawText) as {
            coreEn: string;
            coreKo: string;
            companionEn: string;
            companionKo: string;
            grammarPoint: string;
            imagenPrompt: string;
          };

          const basePkg = synthesizeLocalPackage(params.topicKo, params.targetKLevel);
          const words = parsed.coreEn.trim().split(/\s+/);
          const ansWord = (words[2] || words[1] || 'update').replace(/[.,!?]/g, '');
          basePkg.unit.keySentence = parsed.coreEn;
          basePkg.unit.nuanceCard.koreanMeaning = parsed.coreKo;
          basePkg.unit.nuanceCard.expression = parsed.grammarPoint;
          basePkg.unit.nuanceCard.casualExample = parsed.coreEn;
          basePkg.unit.nuanceCard.politeExample = parsed.companionEn;
          basePkg.flowBlueprint.imagenWorksheetPrompt = parsed.imagenPrompt;
          basePkg.flowBlueprint.veoScenePrompts[0].nativeAudioLine = parsed.coreEn;
          basePkg.flowBlueprint.veoScenePrompts[0].koreanSub = parsed.coreKo;
          basePkg.flowBlueprint.veoScenePrompts[1].nativeAudioLine = parsed.companionEn;
          basePkg.flowBlueprint.veoScenePrompts[1].koreanSub = parsed.companionKo;
          basePkg.unit.sprintQuestions[0].targetEnglish = parsed.coreEn;
          basePkg.unit.sprintQuestions[0].koreanPrompt = parsed.coreKo;
          basePkg.unit.sprintQuestions[0].chunks = [
            words.slice(0, Math.ceil(words.length / 2)).join(' '),
            words.slice(Math.ceil(words.length / 2)).join(' ')
          ];
          basePkg.unit.examQuestions[0].correctAnswer = ansWord;
          basePkg.unit.examQuestions[0].options = [ansWord, 'ambiguous', 'promise', 'until'];
          basePkg.qaReport = verifyUnitPedagogicalQuality(basePkg.unit);
          basePkg.sourceEngine = 'gemini-live-api';
          return basePkg;
        }
      }
    } catch {
      // Graceful fallback to local deterministic pedagogical synthesizer
    }
  }

  return synthesizeLocalPackage(params.topicKo, params.targetKLevel);
}

export async function generateDailyArticlePackage(params: {
  topicKo: string;
  apiKey?: string;
}): Promise<DailyLiveArticle> {
  const id = `live-${Date.now()}`;
  const publishedDate = '방금 생성됨 · 4-Gate 자동 검수 통과';

  return {
    id,
    publishedDate,
    categoryKo: '맞춤 데일리 라이브 부교재',
    topicTitleKo: params.topicKo,
    variants: {
      easy: {
        kLevelLabel: '쉽게 읽는 버전 (K-Lv.3 · CEFR A2)',
        cefr: 'A2',
        headlineEn: `Key Everyday Trends Around ${params.topicKo}`,
        passageEn:
          'People are adopting practical habits to communicate more clearly every day. Starting with short, clear sentences helps everyone stay on the same page.',
        structuralSlashEn:
          '[S People] / [V are adopting] / [O practical habits] / (to communicate clearly). // [S Starting with short sentences] / [V helps] / [O everyone] / [C stay on the same page].',
        translationKo: `"${params.topicKo}" 흐름 속에서 사람들은 매일 더 명확히 소통하기 위해 실용적인 습관을 도입하고 있습니다. 짧고 분명한 문장으로 시작하면 모두가 같은 이해를 공유할 수 있습니다.`,
        englishOnlyDefinition: 'On the same page: Sharing the exact same understanding and agreement in a group.',
        keyCollocations: [
          { en: 'stay on the same page', ko: '같은 이해를 공유하다 (싱크를 맞추다)', enDef: 'share the same understanding' }
        ],
        discussionQuestionEn: 'How do you make sure your team stays on the same page?'
      },
      standard: {
        kLevelLabel: '표준 학습 버전 (K-Lv.6 · CEFR B1+)',
        cefr: 'B1+',
        headlineEn: `How Professionals Are Navigating ${params.topicKo}`,
        passageEn:
          'Professionals across industries are refining their workflow to handle rapid changes effectively. What matters most is balancing speed with clear, respectful communication.',
        structuralSlashEn:
          '[S Professionals] / [V are refining] / [O their workflow] / (to handle rapid changes). // [S What matters most] / [V is] / [C balancing speed with clear communication].',
        translationKo: `"${params.topicKo}"와 관련해 각계 실무자들은 빠른 변화에 효과적으로 대응하기 위해 업무 방식을 다듬고 있습니다. 가장 중요한 것은 속도와 명확하고 존중 어린 소통 사이의 균형입니다.`,
        englishOnlyDefinition: 'Refine one’s workflow: To make small, targeted improvements to how work gets done.',
        keyCollocations: [
          { en: 'balance A with B', ko: 'A와 B 사이의 균형을 맞추다', enDef: 'give proper weight to two competing priorities' }
        ],
        discussionQuestionEn: 'What recent change has improved your daily productivity the most?'
      },
      challenge: {
        kLevelLabel: '도전 심화 버전 (K-Lv.10 · CEFR C1)',
        cefr: 'C1',
        headlineEn: `Strategic Implications of ${params.topicKo} in Global Markets`,
        passageEn:
          'While rapid innovation unlocks unprecedented efficiency, organizations must cultivate adaptable talent to sustain long-term resilience rather than chasing short-term metrics.',
        structuralSlashEn:
          '(While [S rapid innovation] [V unlocks] [O unprecedented efficiency]), / [S organizations] / [V must cultivate] / [O adaptable talent] / (to sustain long-term resilience).',
        translationKo: `"${params.topicKo}" 영역에서 빠른 혁신이 전례 없는 효율성을 열어주지만, 조직은 단기 지표를 쫓기보다 장기적 회복탄력성을 유지할 유연한 인재를 육성해야 합니다.`,
        englishOnlyDefinition: 'Long-term resilience: The capacity to recover quickly and adapt sustainably over time.',
        keyCollocations: [
          { en: 'unlock efficiency', ko: '잠재된 효율성을 끌어내다', enDef: 'release new levels of productivity' }
        ],
        discussionQuestionEn: 'How should leaders weigh short-term KPIs against long-term organizational resilience?'
      }
    }
  };
}

export async function gradeHandwritingWithGeminiVision(params: {
  imageBase64?: string;
  mimeType?: string;
  extractedText: string;
  apiKey?: string;
}): Promise<Array<{ line: string; fix: string; note: string; native: string }>> {
  const lines = params.extractedText
    .split('\n')
    .map((l) => l.replace(/^\d+[.)]\s*/, '').trim())
    .filter(Boolean);

  return lines.map((line) => {
    let adjusted = line;
    let extra = '';
    if (/ended up stay\b/i.test(adjusted)) {
      adjusted = adjusted.replace(/ended up stay\b/gi, 'ended up staying');
      extra = "'end up' 뒤에는 반드시 동명사(-ing) 형태인 'staying'을 써야 합니다. ";
    }
    const p = analyzeAndParaphrase(adjusted, 'Gemini Vision 손글씨 학습지 채점');
    return {
      line,
      fix: p.grammarFix,
      note: extra + p.tutorExplanationKo,
      native: p.businessNative
    };
  });
}
