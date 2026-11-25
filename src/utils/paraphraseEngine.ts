import type { ParaphraseResult } from '../types/course.ts';

interface KonglishRule {
  pattern: RegExp;
  replacement: string;
  noteKo: string;
  casualUpgrade?: string;
  businessUpgrade?: string;
}

const KONGLISH_RULES: KonglishRule[] = [
  {
    pattern: /\bon my way to home\b/gi,
    replacement: 'on my way home',
    noteKo: "'home'은 그 자체에 방향('집으로') 의미가 포함된 부사이므로 앞에 전치사 'to'를 삭제해야 자연스럽습니다.",
    casualUpgrade: 'I swung by a cafe on my way home.',
    businessUpgrade: 'I briefly stopped by on my way back home.'
  },
  {
    pattern: /\bmany works\b/gi,
    replacement: 'a lot of work',
    noteKo: "'work(업무)'는 셀 수 없는 불가산 명사입니다. 'a lot of work' 또는 실무 숙어 'swamped with work'를 추천합니다.",
    casualUpgrade: 'I was totally swamped with work.',
    businessUpgrade: 'I had a heavy workload to wrap up.'
  },
  {
    pattern: /\bnight work\b/gi,
    replacement: 'working late',
    noteKo: "'night work'는 밤샘 야간 교대근무 어감입니다. 직장인이 퇴근 시간을 넘겨 하는 야근은 'work late / stay late'로 표현하세요.",
    casualUpgrade: 'I ended up working late last night.',
    businessUpgrade: 'I stayed past regular hours to finalize the deliverable.'
  },
  {
    pattern: /\bcheck (your |my |the )?mail\b/gi,
    replacement: 'check $1email',
    noteKo: "단독 'mail'은 우체통 종이 우편을 뜻하므로 전자우편은 반드시 'email'이라고 써야 정확합니다."
  },
  {
    pattern: /\bdiscuss about\b/gi,
    replacement: 'discuss',
    noteKo: "타동사 'discuss'에는 이미 '~에 대해 논의하다'라는 뜻이 있어 전치사 'about'을 쓰면 문법 오류가 됩니다."
  },
  {
    pattern: /\b(a )?promise with (my |a )?friend\b/gi,
    replacement: 'plans with a friend',
    noteKo: "'친구와 약속'을 'promise(맹세)'로 쓰면 어색합니다! 만남 선약은 복수형 'plans' 또는 격식체 'a prior commitment'를 씁니다.",
    casualUpgrade: "I already have plans with a friend tonight—rain check?",
    businessUpgrade: 'I have a prior commitment this evening.'
  },
  {
    pattern: /\bambiguous\b/gi,
    replacement: 'a bit tight',
    noteKo: "한국어 '일정이 애매하다'는 의미가 모호한 'ambiguous'가 아니라 시간 여유가 빠듯한 'tight on my end'로 표현합니다.",
    casualUpgrade: 'Tomorrow is kinda tight for me—can we do Thursday instead?',
    businessUpgrade: 'Tomorrow looks a bit tight on my end. Would Thursday afternoon work instead?'
  },
  {
    pattern: /\buntil (friday|monday|tuesday|wednesday|thursday|tomorrow|noon|eod)\b/gi,
    replacement: 'by $1',
    noteKo: "제출·마무리 완료 기한('~까지 완료')에는 지속 전치사 'until'이 아니라 데드라인 전치사 'by'를 써야 정확합니다."
  },
  {
    pattern: /\bended up to ([a-z]+)\b/gi,
    replacement: 'ended up $1ing',
    noteKo: "'end up' 뒤에는 to부정사가 올 수 없고 반드시 동명사(-ing)를 연결해야 합니다!"
  },
  {
    pattern: /\bdo healing\b|\bhealing time\b/gi,
    replacement: 'unwind and recharge',
    noteKo: "영어 'heal'은 부상·상처 치유를 뜻합니다. 일상적인 힐링·스트레스 해소는 'unwind', 'clear my head', 'recharge'를 쓰세요!",
    casualUpgrade: 'It really helped me unwind and clear my head.',
    businessUpgrade: 'It was a great opportunity to recharge my batteries.'
  },
  {
    pattern: /\bmore better\b/gi,
    replacement: 'much better',
    noteKo: "비교급 'better' 앞에는 'more' 대신 강조 부사 'much' 또는 구어체 'way'를 써서 'much better'로 표현합니다."
  }
];

const KOREAN_PRESETS: Array<{
  keywords: string[];
  grammarFix: string;
  noteKo: string;
  casualNative: string;
  businessNative: string;
}> = [
  {
    keywords: ['퇴근', '들렀', '들러', '카페', '커피'],
    grammarFix: 'I stopped by a cafe on my way home to grab a coffee.',
    noteKo: '[주어+구동사] "I stopped by ~"를 먼저 던지고, 무전치사 부사구 "on my way home"을 뒤에 붙이면 완벽합니다.',
    casualNative: 'I swung by a cafe on my way home to grab an iced latte.',
    businessNative: 'I briefly stopped by on my way back from the office.'
  },
  {
    keywords: ['야근', '일찍', '결국', '급한'],
    grammarFix: 'I meant to leave on time, but something urgent came up and I ended up working late.',
    noteKo: '원래 의도(meant to V)와 예상 밖 결말(ended up V-ing) 대조 공식을 활용했습니다.',
    casualNative: 'I was gonna head out at six, but I got swamped and ended up staying late.',
    businessNative: 'I originally planned to wrap up at six, but an urgent client matter came up.'
  },
  {
    keywords: ['애매', '일정', '미루', '목요일', '금요일'],
    grammarFix: 'Tomorrow looks a bit tight on my end. Would Thursday afternoon work instead?',
    noteKo: "'일정이 애매하다'는 'tight on my end'로 쿠션을 깔고, 'Would ~ work instead?'로 대안을 역제안하세요.",
    casualNative: 'Tomorrow is a bit crazy for me—mind if we push it back to Thursday?',
    businessNative: 'My calendar is quite packed tomorrow. Could we reschedule our sync for Thursday afternoon?'
  },
  {
    keywords: ['마무리', '공유', '마감', '확인'],
    grammarFix: "I'll wrap up the first draft by Friday and keep you in the loop.",
    noteKo: '완료 데드라인 전치사 by와 진행 공유 숙어 keep you in the loop의 조합입니다.',
    casualNative: "I'll get this wrapped up by Friday and keep you posted!",
    businessNative: 'We are on track to finalize the deliverable by EOD Friday, and I will keep everyone in the loop.'
  },
  {
    keywords: ['산책', '힐링', '머리', '스트레스', '피로'],
    grammarFix: 'My go-to way to unwind is going for a walk because it clears my head.',
    noteKo: '콩글리시 healing 대신 unwind와 clear my head를 쓰면 원어민 감각이 200% 살아납니다.',
    casualNative: 'Nothing beats an evening walk by the river to clear my head!',
    businessNative: 'I make a habit of taking evening walks to unwind and recharge after a hectic day.'
  }
];

export function analyzeLocalParaphrase(rawInput: string, dayNumber: number): ParaphraseResult {
  const trimmed = rawInput.trim();
  const id = `para-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const createdAt = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

  if (/[가-힣]/.test(trimmed)) {
    const matched = KOREAN_PRESETS.find((p) => p.keywords.some((kw) => trimmed.includes(kw)));
    if (matched) {
      return {
        id,
        createdAt,
        dayNumber,
        originalInput: trimmed,
        grammarFix: matched.grammarFix,
        tutorExplanationKo: matched.noteKo,
        casualNative: matched.casualNative,
        businessNative: matched.businessNative
      };
    }

    return {
      id,
      createdAt,
      dayNumber,
      originalInput: trimmed,
      grammarFix: 'Let me share how I usually handle that situation.',
      tutorExplanationKo:
        '한국어로 먼저 아이디어를 잡으셨군요! 아래 원어민 뼈대 문장을 소리 내어 읽은 뒤, 핵심 단어 1~2개만 영어로 바꿔 다시 입력해보세요.',
      casualNative: "Honestly, what works best for me is taking it step by step.",
      businessNative: "From my perspective, staying proactive and keeping the team in the loop makes all the difference."
    };
  }

  let fixed = trimmed;
  const notes: string[] = [];
  let customCasual = '';
  let customBusiness = '';

  for (const rule of KONGLISH_RULES) {
    if (rule.pattern.test(fixed)) {
      fixed = fixed.replace(rule.pattern, rule.replacement);
      notes.push(rule.noteKo);
      if (rule.casualUpgrade) customCasual = rule.casualUpgrade;
      if (rule.businessUpgrade) customBusiness = rule.businessUpgrade;
    }
  }

  if (fixed.length > 0) {
    fixed = fixed.charAt(0).toUpperCase() + fixed.slice(1);
    if (!/[.!?]$/.test(fixed)) fixed += '.';
  }

  const wordCount = trimmed.split(/\s+/).filter(Boolean).length;
  if (notes.length === 0) {
    if (wordCount <= 6) {
      notes.push(
        '문법 어순이 깔끔합니다! 여기서 단답형으로 멈추지 않고 "because ~" 또는 "for instance ~"로 이유·예시를 한 문장만 더 붙이면 전달력이 2배 올라갑니다.'
      );
    } else {
      notes.push(
        '주어·동사 뼈대와 구문 연결이 매우 안정적입니다! 상황에 맞춰 아래 캐주얼 표현과 비즈니스 격식 표현도 함께 입에 붙여보세요.'
      );
    }
  }

  const cleanCore = fixed.replace(/[.!?]+$/, '');
  const lowered = cleanCore.charAt(0).toLowerCase() + cleanCore.slice(1);

  return {
    id,
    createdAt,
    dayNumber,
    originalInput: trimmed,
    grammarFix: fixed,
    tutorExplanationKo: notes.join(' '),
    casualNative: customCasual || `Honestly, ${lowered}, and it worked out pretty well!`,
    businessNative: customBusiness || `Just to keep you in the loop, ${lowered}.`
  };
}

export async function analyzeWithOptionalGemini(
  rawInput: string,
  dayNumber: number,
  contextQuestionEn: string,
  geminiApiKey?: string
): Promise<ParaphraseResult> {
  if (!geminiApiKey || geminiApiKey.trim().length < 15) {
    return analyzeLocalParaphrase(rawInput, dayNumber);
  }

  try {
    const prompt = `당신은 한국인 성인 학습자를 전담 코칭하는 북미 원어민 영어 튜터(링글/스픽 수석 코치 스타일)입니다.
튜터 질문: "${contextQuestionEn}"
학습자 답변: "${rawInput}"

반드시 아래 JSON 스키마로만 응답하세요:
{
  "grammarFix": "학습자 의도를 살리되 문법·콩글리시를 자연스럽게 고친 표준 영어 문장",
  "tutorExplanationKo": "칭찬 한마디 + 핵심 교정 포인트(전치사/구동사/어순) 한국어 해설 2문장",
  "casualNative": "친한 동료·친구에게 쓰는 생생한 캐주얼 원어민 표현",
  "businessNative": "글로벌 오피스·미팅에서 신뢰감을 주는 정중한 비즈니스 표현"
}`;

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(
        geminiApiKey.trim()
      )}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json', temperature: 0.35 }
        })
      }
    );

    if (!resp.ok) {
      return analyzeLocalParaphrase(rawInput, dayNumber);
    }

    const data = (await resp.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    const rawJson = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawJson) return analyzeLocalParaphrase(rawInput, dayNumber);

    const parsed = JSON.parse(rawJson) as {
      grammarFix?: string;
      tutorExplanationKo?: string;
      casualNative?: string;
      businessNative?: string;
    };

    if (!parsed.grammarFix || !parsed.casualNative || !parsed.businessNative) {
      return analyzeLocalParaphrase(rawInput, dayNumber);
    }

    return {
      id: `para-${Date.now()}`,
      createdAt: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      dayNumber,
      originalInput: rawInput.trim(),
      grammarFix: parsed.grammarFix,
      tutorExplanationKo: parsed.tutorExplanationKo || '원어민 뉘앙스에 맞춰 3단계로 다듬었습니다.',
      casualNative: parsed.casualNative,
      businessNative: parsed.businessNative
    };
  } catch {
    return analyzeLocalParaphrase(rawInput, dayNumber);
  }
}
