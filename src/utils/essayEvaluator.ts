/**
 * KoreBridge Academic & High-School Essay 4-Axis Rubric Evaluator
 * Works 100% deterministically in-browser + supports optional Gemini 2.5 Flash deep critique.
 */

export interface EssayAxisScore {
  key: 'structure' | 'coherence' | 'vocabulary' | 'grammar';
  labelKo: string;
  score: number; // 0..25
  maxScore: 25;
  commentKo: string;
}

export interface EssayEvaluationResult {
  totalScore: number; // 0..100
  bandLabel: string;
  wordCount: number;
  sentenceCount: number;
  paragraphCount: number;
  usedTargetVocab: string[];
  usedConnectors: string[];
  axes: EssayAxisScore[];
  strengthsKo: string[];
  improvementsKo: string[];
  aiDeepFeedbackKo?: string;
}

const ACADEMIC_CONNECTORS = [
  'furthermore',
  'moreover',
  'in addition',
  'however',
  'nevertheless',
  'nonetheless',
  'on the other hand',
  'in contrast',
  'whereas',
  'although',
  'even though',
  'therefore',
  'consequently',
  'as a result',
  'thus',
  'for example',
  'for instance',
  'to illustrate',
  'in conclusion',
  'ultimately',
  'to summarize',
  'first of all',
  'secondly',
  'finally',
  'because',
  'since'
];

const HIGH_LEVEL_ACADEMIC_WORDS = new Set([
  'significant',
  'significantly',
  'crucial',
  'essential',
  'fundamental',
  'perspective',
  'consequence',
  'consequences',
  'evidence',
  'foster',
  'enhance',
  'undermine',
  'erode',
  'sustainable',
  'cognitive',
  'resilience',
  'critical',
  'analytical',
  'autonomy',
  'efficiency',
  'empathy',
  'diversity',
  'innovation',
  'responsibility',
  'regulation',
  'collaborative',
  'comprehensive',
  'inevitable',
  'substantial',
  'beneficial',
  'detrimental',
  'paradox',
  'incentive',
  'policy',
  'literacy',
  'algorithm',
  'algorithmic',
  'meaningful',
  'cultivate',
  'prioritize',
  'balance',
  'balanced',
  'ultimately',
  'demonstrate',
  'illustrate',
  'acknowledge',
  'address',
  'mitigate',
  'implement',
  'evaluate'
]);

const KONGLISH_ESSAY_RULES: Array<{ pattern: RegExp; tipKo: string }> = [
  {
    pattern: /\b(although|though|even though)\b[^.!?]{3,90}\bbut\b/i,
    tipKo: '접속사 중복 오류: "Although ~, but ..."처럼 although와 but을 함께 쓰지 말고 하나만 남기세요.'
  },
  {
    pattern: /\bbecause\b[^.!?]{3,90}\bso\b/i,
    tipKo: '접속사 중복 오류: "Because ~, so ..."에서 because와 so는 한 문장에 함께 쓸 수 없습니다.'
  },
  {
    pattern: /\bdiscuss about\b/i,
    tipKo: '타동사 오류: "discuss about" 대신 전치사 없이 "discuss + 목적어"로 쓰세요.'
  },
  {
    pattern: /\balmost people\b/i,
    tipKo: '한정사 오류: "almost people"은 콩글리시입니다. "most people" 또는 "almost all people"로 교정하세요.'
  },
  {
    pattern: /\bvery many\b/i,
    tipKo: '어색한 수식: "very many" 대신 "a large number of" 또는 "numerous"를 사용하면 학술적 톤이 올라갑니다.'
  },
  {
    pattern: /\bmore (better|easier|harder|faster|bigger|stronger)\b/i,
    tipKo: '이중 비교급 오류: "more better/easier" 대신 "much better/easier"로 고치세요.'
  },
  {
    pattern: /\bmake (a )?stress\b/i,
    tipKo: '동사 연어 오류: "make stress" 대신 "cause stress" 또는 "create unnecessary stress"가 자연스럽습니다.'
  },
  {
    pattern: /\bhave a good effect\b/i,
    tipKo: '고급 표현 제안: "have a good effect" 대신 "have a positive impact on"을 써보세요.'
  }
];

export function evaluateAcademicEssay(
  essayText: string,
  targetVocab: string[]
): EssayEvaluationResult {
  const trimmed = essayText.trim();
  const paragraphs = trimmed
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  const words = trimmed
    .toLowerCase()
    .replace(/[^a-z'\s-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const sentences = trimmed
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 2);

  const wordCount = words.length;
  const sentenceCount = sentences.length;
  const paragraphCount = paragraphs.length;
  const lowerFull = trimmed.toLowerCase();

  // 1. Structure & Length (0..25)
  let structureScore = 6;
  if (wordCount >= 120) structureScore = 22;
  else if (wordCount >= 80) structureScore = 18;
  else if (wordCount >= 45) structureScore = 13;
  else if (wordCount >= 20) structureScore = 9;

  if (paragraphCount >= 3) structureScore = Math.min(25, structureScore + 3);
  else if (paragraphCount === 2) structureScore = Math.min(25, structureScore + 1);

  if (sentenceCount < 3) structureScore = Math.min(structureScore, 11);

  // 2. Coherence & Connectors (0..25)
  const usedConnectors = ACADEMIC_CONNECTORS.filter((conn) =>
    new RegExp(`\\b${conn.replace(/\s+/g, '\\s+')}\\b`, 'i').test(lowerFull)
  );
  const coherenceScore = Math.min(
    25,
    8 + usedConnectors.length * 4 + (paragraphCount >= 3 ? 3 : 0)
  );

  // 3. Vocabulary Diversity & Target Academic Words (0..25)
  const uniqueWords = new Set(words);
  const ttr = wordCount > 0 ? uniqueWords.size / wordCount : 0;
  const usedTargetVocab = targetVocab.filter((tv) => {
    const stem = tv.toLowerCase().split(/\s+/)[0].replace(/[^a-z]/g, '');
    return stem.length >= 3 && lowerFull.includes(stem);
  });
  const academicWordHits = [...uniqueWords].filter((w) => HIGH_LEVEL_ACADEMIC_WORDS.has(w)).length;
  let vocabScore = 7;
  vocabScore += Math.min(8, usedTargetVocab.length * 2.5);
  vocabScore += Math.min(6, academicWordHits * 1.5);
  vocabScore += ttr >= 0.55 && wordCount >= 40 ? 4 : ttr >= 0.45 ? 2 : 0;
  vocabScore = Math.min(25, Math.round(vocabScore));

  // 4. Grammar, Punctuation & Konglish Check (0..25)
  let grammarScore = wordCount >= 25 ? 22 : 14;
  const improvementsKo: string[] = [];

  for (const rule of KONGLISH_ESSAY_RULES) {
    if (rule.pattern.test(trimmed)) {
      grammarScore = Math.max(8, grammarScore - 4);
      improvementsKo.push(rule.tipKo);
    }
  }

  const uncapitalizedSentences = sentences.filter((s) => /^[a-z]/.test(s)).length;
  if (uncapitalizedSentences > 0) {
    grammarScore = Math.max(10, grammarScore - 3);
    improvementsKo.push(
      `문장 첫 글자 대문자 점검: ${uncapitalizedSentences}개 문장이 소문자로 시작했습니다. 모든 영어 문장은 대문자로 시작하세요.`
    );
  }

  if (wordCount > 15 && !/[.!?]$/.test(trimmed)) {
    grammarScore = Math.max(10, grammarScore - 2);
    improvementsKo.push('마지막 문장 끝에 마침표(.)를 붙여 문장을 완결하세요.');
  }

  if (/\bi\b/.test(trimmed)) {
    grammarScore = Math.max(10, grammarScore - 3);
    improvementsKo.push('1인칭 대명사 "i"는 문장 중간에서도 반드시 대문자 "I"로 표기해야 합니다.');
  }

  const totalScore = Math.min(100, structureScore + coherenceScore + vocabScore + grammarScore);

  let bandLabel = 'Band C · 기초 구성 단계';
  if (totalScore >= 88) bandLabel = 'Band S · 수능 1등급 / TOEFL High';
  else if (totalScore >= 76) bandLabel = 'Band A · 고등 상위권 아카데믹';
  else if (totalScore >= 62) bandLabel = 'Band B · 중상급 탄탄한 에세이';

  const strengthsKo: string[] = [];
  if (paragraphCount >= 3) {
    strengthsKo.push(`서론–본론–결론 ${paragraphCount}문단 구조가 명확하게 나뉘어 가독성이 높습니다.`);
  }
  if (usedConnectors.length >= 2) {
    strengthsKo.push(
      `학술 연결어(${usedConnectors.slice(0, 4).join(', ')})를 활용해 문장 간 논리 흐름을 잘 살렸습니다.`
    );
  }
  if (usedTargetVocab.length >= 2) {
    strengthsKo.push(
      `주제 핵심 어휘(${usedTargetVocab.slice(0, 4).join(', ')})를 문맥 속에 자연스럽게 녹여냈습니다.`
    );
  }
  if (wordCount >= 90) {
    strengthsKo.push(`총 ${wordCount}단어로 고등·대학 논술형 답안에 충분한 전개 분량을 확보했습니다.`);
  }
  if (strengthsKo.length === 0) {
    strengthsKo.push('핵심 주장을 영어로 직접 써 내려간 첫 시도가 훌륭합니다! 문단을 3개로 늘려 발전시켜 보세요.');
  }

  if (wordCount < 80) {
    improvementsKo.push(
      `현재 ${wordCount}단어입니다. 본론에 구체적 예시(For instance, ...)를 2문장 더 추가해 90~140단어를 목표로 해보세요.`
    );
  }
  if (usedConnectors.length < 2) {
    improvementsKo.push(
      '논리 연결어 칩(Furthermore, However, Consequently 등)을 클릭해 문단 전환을 또렷하게 만들어 보세요.'
    );
  }
  if (usedTargetVocab.length < 2 && targetVocab.length > 0) {
    improvementsKo.push(
      `추천 핵심 어휘 중 ${targetVocab.slice(0, 3).join(', ')} 같은 단어를 본문에 2개 이상 넣으면 어휘 점수가 크게 올라갑니다.`
    );
  }

  return {
    totalScore,
    bandLabel,
    wordCount,
    sentenceCount,
    paragraphCount,
    usedTargetVocab,
    usedConnectors,
    axes: [
      {
        key: 'structure',
        labelKo: '구조 · 분량 (Structure)',
        score: structureScore,
        maxScore: 25,
        commentKo: `${paragraphCount}문단 · ${sentenceCount}문장 · ${wordCount}단어`
      },
      {
        key: 'coherence',
        labelKo: '논리 연결성 (Coherence)',
        score: coherenceScore,
        maxScore: 25,
        commentKo: `연결어 ${usedConnectors.length}개 활용`
      },
      {
        key: 'vocabulary',
        labelKo: '어휘 다양성 (Lexical)',
        score: vocabScore,
        maxScore: 25,
        commentKo: `핵심어 ${usedTargetVocab.length}개 · 고급어 ${academicWordHits}개`
      },
      {
        key: 'grammar',
        labelKo: '문법 · 정확도 (Grammar)',
        score: grammarScore,
        maxScore: 25,
        commentKo: improvementsKo.length === 0 ? '콩글리시 오류 없음' : '맞춤 교정 제안 확인'
      }
    ],
    strengthsKo,
    improvementsKo
  };
}

export async function requestGeminiEssayCritique(
  apiKey: string,
  promptEn: string,
  essayText: string
): Promise<string | null> {
  const cleanKey = apiKey.trim();
  if (!cleanKey || essayText.trim().length < 20) return null;

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(cleanKey)}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `You are an elite Korean CSAT & TOEFL English writing tutor.
Prompt: "${promptEn}"
Student essay:
"""
${essayText}
"""
Respond concisely in Korean (under 180 words) with:
1. 가장 잘 쓴 문장 1개 칭찬
2. 가장 시급한 문법/표현 교정 2곳 (원문 -> 원어민 교정문)
3. 수능/토플 최상위권으로 끌어올리는 업그레이드 문장 1개`
              }
            ]
          }
        ]
      })
    });
    if (!response.ok) return null;
    const data = (await response.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? null;
  } catch {
    return null;
  }
}
