import type { ParaphraseResult } from '../types/learning.ts';

interface KonglishRule {
  pattern: RegExp;
  replacement: string;
  noteKo: string;
  casualUpgrade?: string;
  businessUpgrade?: string;
}

const KONGLISH_RULES: KonglishRule[] = [
  {
    pattern: /\bmany works\b/gi,
    replacement: 'a lot of work',
    noteKo: "'work(업무/일)'는 셀 수 없는 불가산 명사여서 'works'로 쓰면 공장이란 뜻이 됩니다. 'a lot of work' 또는 'a heavy workload'가 자연스럽습니다.",
    casualUpgrade: 'I was swamped with work.',
    businessUpgrade: 'I had a heavy workload to wrap up.'
  },
  {
    pattern: /\bcheck (your |my |the )?mail\b/gi,
    replacement: 'check $1email',
    noteKo: "영어에서 단독 'mail'은 우체통 실물 우편을 뜻합니다. 업무용 전자우편은 반드시 'email'이라고 표현해야 자연스럽습니다."
  },
  {
    pattern: /\bdiscuss about\b/gi,
    replacement: 'discuss',
    noteKo: "'discuss'에는 이미 '~에 대해 논의하다'라는 타동사 의미가 포함되어 있어 전치사 'about'을 붙이면 한국인이 가장 자주 범하는 문법 오류가 됩니다."
  },
  {
    pattern: /\bpromise with (my )?friend\b/gi,
    replacement: 'plans with my friend',
    noteKo: "한국어 '친구랑 약속 있어'를 'promise'로 직역하면 '맹세/서약'이 됩니다! 일상 만남 약속은 'plans'를 씁니다.",
    casualUpgrade: 'I already have plans with a friend tonight.',
    businessUpgrade: 'I have a prior commitment this evening.'
  },
  {
    pattern: /\beat medicine\b/gi,
    replacement: 'take medicine',
    noteKo: "약을 복용할 때는 'eat'이 아니라 'take medicine'을 사용합니다.",
    casualUpgrade: 'Did you take your medicine?',
    businessUpgrade: 'Please make sure to take your medication on time.'
  },
  {
    pattern: /\bschedule is ambiguous\b|\bambiguous schedule\b/gi,
    replacement: 'schedule is a bit tight',
    noteKo: "'일정이 애매하다'를 'ambiguous(의미가 모호한)'로 직역하면 어색합니다. 시간이 빠듯하거나 맞추기 어려울 땐 'tight' 또는 'tricky'를 씁니다.",
    casualUpgrade: 'My schedule is a bit tricky tomorrow — can we do Thursday?',
    businessUpgrade: 'Tomorrow looks a bit tight on my end. Would Thursday afternoon work instead?'
  },
  {
    pattern: /\buntil friday\b/gi,
    replacement: 'by Friday',
    noteKo: "마감 기한('금요일까지 제출')을 말할 때 'until(계속 지속)'이 아니라 완료 시점을 뜻하는 'by Friday'를 써야 정확합니다."
  },
  {
    pattern: /\bmore better\b/gi,
    replacement: 'much better',
    noteKo: "'better'는 이미 비교급이므로 'more' 대신 강조 부사 'much' 또는 'way'를 붙여 'much better'라고 표현합니다."
  }
];

const KOREAN_PRESETS: Array<{
  keywords: string[];
  originalProxy: string;
  grammarFix: string;
  noteKo: string;
  casualNative: string;
  businessNative: string;
}> = [
  {
    keywords: ['애매', '일정', '미루', '연기'],
    originalProxy: 'My schedule is ambiguous today, so can we delay the meeting?',
    grammarFix: 'My schedule is a bit tight today, so could we reschedule the meeting?',
    noteKo: "'일정이 애매하다'는 'tight/tricky'로, 회의를 미루자는 표현은 'delay'보다 상호 조율 어감인 'reschedule / push back'이 훨씬 세련됩니다.",
    casualNative: 'Today is a bit crazy for me — mind if we push our chat to tomorrow?',
    businessNative: 'Today looks quite tight on my calendar. Would it be possible to reschedule our meeting for tomorrow?'
  },
  {
    keywords: ['야근', '바빠', '메일', '이메일', '확인'],
    originalProxy: 'Yesterday I had many works so I could not check your mail.',
    grammarFix: "Yesterday I had a lot of work, so I couldn't check your email.",
    noteKo: "불가산 명사 'work'와 전자우편 'email' 교정 포인트! 실무에서는 'I was tied up with ~'을 쓰면 원어민처럼 들립니다.",
    casualNative: 'Sorry! I was totally swamped yesterday and missed your email.',
    businessNative: 'Apologies for the late reply — I was tied up with an urgent deliverable yesterday and just saw your email.'
  },
  {
    keywords: ['약속', '저녁', '친구'],
    originalProxy: 'I have a promise with my friend this evening.',
    grammarFix: 'I have plans with a friend this evening.',
    noteKo: "만남 약속은 'promise'가 아니라 복수형 'plans' 또는 비즈니스 상황에선 'a prior commitment'를 사용합니다.",
    casualNative: "I've got plans with a friend tonight. Rain check?",
    businessNative: 'I have a prior commitment this evening, but I would love to join next time.'
  }
];

export function analyzeAndParaphrase(
  rawInput: string,
  unitTitle = '즉석 1:1 첨삭 클리닉',
  latencySec?: number
): ParaphraseResult {
  const trimmed = rawInput.trim();
  const id = `para-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const createdAt = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

  // Check if user typed Korean keywords directly
  const hasKorean = /[가-힣]/.test(trimmed);
  if (hasKorean) {
    const matchedPreset = KOREAN_PRESETS.find((preset) => preset.keywords.some((kw) => trimmed.includes(kw)));
    if (matchedPreset) {
      return {
        id,
        createdAt,
        unitTitle,
        originalInput: `${trimmed} (직역 주의: "${matchedPreset.originalProxy}")`,
        grammarFix: matchedPreset.grammarFix,
        tutorExplanationKo: matchedPreset.noteKo,
        casualNative: matchedPreset.casualNative,
        businessNative: matchedPreset.businessNative,
        latencySec
      };
    }

    return {
      id,
      createdAt,
      unitTitle,
      originalInput: trimmed,
      grammarFix: `Let me share my thoughts on "${trimmed}".`,
      tutorExplanationKo:
        '한국어로 먼저 떠올리셨군요! 완벽한 문법을 고민하기보다 [주어 + 핵심 동사]부터 영어로 먼저 던진 뒤 이유(because ~)를 붙여보세요.',
      casualNative: "Here's how I see it — let me walk you through what happened.",
      businessNative: "I'd like to briefly walk you through the current situation and next steps.",
      latencySec
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

  // Capitalize first letter and ensure ending punctuation
  if (fixed.length > 0) {
    fixed = fixed.charAt(0).toUpperCase() + fixed.slice(1);
    if (!/[.!?]$/.test(fixed)) fixed += '.';
  }

  const wordCount = trimmed.split(/\s+/).filter(Boolean).length;
  if (notes.length === 0) {
    if (wordCount <= 5) {
      notes.push(
        '문법적으로 깔끔한 단문입니다! 다만 실전 회화·오픽·미팅에서는 단답형으로 끝내지 않고 "because ~" 또는 "for example ~"로 한 문장만 더 이어주면 전달력이 2배 높아집니다.'
      );
    } else {
      notes.push(
        '주어와 동사 어순 뼈대가 안정적입니다! 여기서 동사구(구동사)와 완곡한 연결어를 한 스푼 더하면 훨씬 원어민다운 세련된 표현이 완성됩니다.'
      );
    }
  }

  const cleanCore = fixed.replace(/[.!?]+$/, '');
  const casualNative =
    customCasual ||
    (wordCount <= 6
      ? `${cleanCore} — honestly, it makes a huge difference.`
      : `Honestly, ${cleanCore.charAt(0).toLowerCase() + cleanCore.slice(1)}, which worked out pretty well.`);

  const businessNative =
    customBusiness ||
    `From my perspective, ${cleanCore.charAt(0).toLowerCase() + cleanCore.slice(1)}, so I wanted to keep you in the loop.`;

  return {
    id,
    createdAt,
    unitTitle,
    originalInput: trimmed,
    grammarFix: fixed,
    tutorExplanationKo: notes.join(' '),
    casualNative,
    businessNative,
    latencySec
  };
}
