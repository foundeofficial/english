import type { ParaphraseResult } from '../types/course.ts';

interface KonglishRule {
  pattern: RegExp;
  replacement: string;
  noteKo: string;
  casualUpgrade?: string;
  businessUpgrade?: string;
}

/**
 * 35+ High-frequency Korean-to-English Konglish & grammar diagnosis rules
 * spanning Weeks 1–5 (A1 daily life -> B2 global office -> C2 negotiation & rhetoric).
 */
const KONGLISH_RULES: KonglishRule[] = [
  // Week 1: Daily movement, schedules, deadlines, unwinding
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
    pattern: /\bmention about\b/gi,
    replacement: 'mention',
    noteKo: "'mention'도 타동사이므로 뒤에 'about'을 붙이지 않고 바로 목적어를 연결합니다."
  },
  {
    pattern: /\bapproach to\b/gi,
    replacement: 'approach',
    noteKo: "동사 'approach'는 전치사 'to' 없이 바로 대상(approach the issue)을 취하는 타동사입니다."
  },
  {
    pattern: /\bexplain me\b/gi,
    replacement: 'explain to me',
    noteKo: "'explain'은 4형식으로 쓸 수 없습니다! 반드시 'explain [내용] to [사람]' 또는 'explain to me'로 쓰세요."
  },
  {
    pattern: /\b(a )?promise with (my |a )?friend\b/gi,
    replacement: 'plans with a friend',
    noteKo: "'친구와 약속'을 'promise(맹세)'로 쓰면 어색합니다! 만남 선약은 복수형 'plans' 또는 격식체 'a prior commitment'를 씁니다.",
    casualUpgrade: 'I already have plans with a friend tonight—rain check?',
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
  },

  // Week 2: Cafe, Airport, Hotel, Shopping, Small Talk
  {
    pattern: /\btake out\b/gi,
    replacement: 'to go',
    noteKo: "북미 카페·식당에서 포장 주문은 'take out'보다 'to go'가 훨씬 자연스럽습니다 (e.g. 'Iced latte to go, please').",
    casualUpgrade: 'Can I get an iced oat latte to go, easy on the ice?',
    businessUpgrade: 'Could I have that to go, please? And light ice if possible.'
  },
  {
    pattern: /\bice americano\b|\bice latte\b/gi,
    replacement: 'iced latte',
    noteKo: "차갑게 식힌 음료는 명사 ice가 아니라 과거분사 형용사 'iced'를 써서 'iced Americano / iced latte'라고 합니다."
  },
  {
    pattern: /\bfree breakfast\b/gi,
    replacement: 'complimentary breakfast',
    noteKo: "호텔·항공사에서 무료로 제공되는 서비스는 'free'보다 정중한 'complimentary'를 쓰면 훨씬 세련됩니다."
  },
  {
    pattern: /\bchange (this |it )?to a bigger size\b/gi,
    replacement: 'exchange $1for a larger size',
    noteKo: "매장에서 사이즈 교환은 'change' 대신 'exchange A for B' 구문을 씁니다!",
    casualUpgrade: 'Hey, could I exchange this for a size up?',
    businessUpgrade: 'Would it be possible to exchange this item for a larger size? I have the receipt.'
  },
  {
    pattern: /\bwear it once\b|\btry wearing\b/gi,
    replacement: 'try it on',
    noteKo: "매장에서 옷을 입어볼 때는 'wear'가 아니라 구동사 'try it on'을 써야 정확합니다."
  },
  {
    pattern: /\bgo to abroad\b/gi,
    replacement: 'go abroad',
    noteKo: "'abroad(해외로)'는 home처럼 부사이므로 앞에 전치사 'to'를 붙이지 않습니다."
  },
  {
    pattern: /\bget stress\b|\breceive stress\b/gi,
    replacement: 'feel stressed out',
    noteKo: "'스트레스 받다'는 직역 'get/receive stress' 대신 'be/feel stressed out' 또는 'feel overwhelmed'를 사용합니다."
  },

  // Week 3: Video calls, Emails, Bottlenecks, Meetings, Feedback
  {
    pattern: /\byour voice is cut\b|\byour voice is cutting\b|\bsound is broken\b/gi,
    replacement: "you're breaking up a bit",
    noteKo: "화상회의 중 음성이 끊길 때는 'voice is cut' 대신 원어민 필수 표현 'You're breaking up a bit'을 쓰세요!",
    casualUpgrade: "Hey, you're breaking up a bit—could you repeat that?",
    businessUpgrade: "I'm sorry to interrupt, but your audio is breaking up slightly. Could you repeat the last point?"
  },
  {
    pattern: /\bplease refer to the attached\b|\bsee attached file\b/gi,
    replacement: 'please find the report attached',
    noteKo: "비즈니스 이메일 첨부 안내는 'Please find ~ attached' 또는 간결한 'I've attached ~ for your review'가 표준입니다."
  },
  {
    pattern: /\bwrap up it\b|\bpush back it\b|\bfigure out it\b|\bput off it\b/gi,
    replacement: 'wrap it up',
    noteKo: "대명사 목적어(it/them)는 반드시 동사와 부사 사이(wrap it up / push it back / figure it out)에 넣어야 합니다!"
  },
  {
    pattern: /\bi disagree with you\b/gi,
    replacement: "I see where you're coming from, though I have a slightly different take",
    noteKo: "회의에서 'I disagree'는 너무 직설적으로 들립니다. 먼저 상대 입장을 인정(see where you're coming from)한 뒤 완곡하게 반론하세요.",
    casualUpgrade: "I totally get your point, though I'm leaning toward another option.",
    businessUpgrade: "I see where you're coming from; however, I'd like to offer an alternative perspective."
  },
  {
    pattern: /\bi cannot do it because i am busy\b|\bi am too busy to help\b/gi,
    replacement: "I'm at capacity right now, so I won't be able to take this on until next week",
    noteKo: "직장에서 거절할 때 'I'm too busy'보다 'I'm at capacity / stretched thin' + 가능한 대안 시점을 함께 말하면 신뢰를 지킵니다."
  },
  {
    pattern: /\bconfirm (me |this )?please\b/gi,
    replacement: 'please let me know if this looks good',
    noteKo: "'확인 부탁드립니다'를 'confirm please'로 직역하면 명령조로 들립니다. 'Could you take a quick look / let me know if this works?'가 자연스럽습니다."
  },

  // Week 4–5: Presentations, Negotiation, Conditionals, Interviews, C1–C2 Rhetoric
  {
    pattern: /\bi will explain about\b/gi,
    replacement: "I'll walk you through",
    noteKo: "발표에서 'explain about'은 문법 오류입니다. 청중을 안내하는 원어민 PT 표현 'walk you through ~'를 쓰세요!",
    casualUpgrade: "Let me quickly walk you through the key numbers.",
    businessUpgrade: "Today, I'd like to walk you through our Q3 performance and key takeaways."
  },
  {
    pattern: /\bif i would have\b|\bif we would know\b/gi,
    replacement: 'if we had known',
    noteKo: "가정법 if절 안에는 조동사 would를 쓰지 않습니다! 과거 사실 반대는 'If + had p.p., ... would have p.p.'(또는 도치 'Had we known')가 정확합니다."
  },
  {
    pattern: /\balthough (.+), but\b/gi,
    replacement: 'Although $1,',
    noteKo: "영어에서는 접속사 'Although/Though'와 'but'을 한 문장에 절대 함께 쓰지 않습니다! 둘 중 하나만 선택하세요."
  },
  {
    pattern: /\bbecause (.+), so\b/gi,
    replacement: 'Because $1,',
    noteKo: "'Because'와 'so'를 한 문장에 겹쳐 쓰는 것은 한국인의 최다 실수입니다! 둘 중 하나만 남기세요."
  },
  {
    pattern: /\bvery unique\b/gi,
    replacement: 'truly unique',
    noteKo: "'unique(유일무이한)'는 절대 형용사이므로 'very' 대신 'truly / genuinely / remarkably unique'로 수식하는 것이 고급 표현입니다."
  },
  {
    pattern: /\bgive (me )?a discount\b/gi,
    replacement: 'meet us halfway on pricing',
    noteKo: "비즈니스 협상에서 'give me a discount'는 너무 단선적입니다. 'Is there any wiggle room on pricing?' 또는 'meet us halfway'가 훨씬 설득력 있습니다."
  },
  {
    pattern: /\bin my opinion, i think\b/gi,
    replacement: 'From my perspective,',
    noteKo: "'In my opinion'과 'I think'은 의미 중복입니다. 'From my perspective' 또는 'My take is that ~'로 깔끔하게 정리하세요."
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
    keywords: ['산책', '힐링', '머리', '스트레스', '피로', '번아웃'],
    grammarFix: 'My go-to way to unwind is going for a walk because it helps me clear my head.',
    noteKo: '콩글리시 healing 대신 unwind와 clear my head를 쓰면 원어민 감각이 200% 살아납니다.',
    casualNative: 'Nothing beats an evening walk by the river to take a breather and clear my head!',
    businessNative: 'Setting healthy boundaries and taking evening walks helps me recharge and maintain a sustainable pace.'
  },
  {
    keywords: ['주문', '얼음', '소스', '포장', '메뉴'],
    grammarFix: 'Could I get an iced oat latte to go, and please go easy on the ice?',
    noteKo: '포장은 to go, 양을 적게 해 달라는 요청은 go easy on ~ 패턴을 씁니다.',
    casualNative: 'Can I grab an iced latte to go? Light ice, please!',
    businessNative: 'Could I have an iced latte to go, with light ice and the syrup on the side?'
  },
  {
    keywords: ['공항', '비행기', '환승', '수하물', '창가', '체크인'],
    grammarFix: 'My layover is quite short—will my checked luggage go straight through to my final destination?',
    noteKo: '환승 대기는 layover, 위탁 수하물 자동 연결은 checked through / go straight through로 표현합니다.',
    casualNative: "I've got a tight layover—do I need to pick up my bag or does it go straight through?",
    businessNative: 'Given my tight connection, could you confirm whether my baggage is checked through to the final destination?'
  },
  {
    keywords: ['호텔', '체크아웃', '조식', '연장', '방'],
    grammarFix: 'Would it be possible to extend my stay by one night and request a late check-out?',
    noteKo: '정중한 요청은 Would it be possible to ~?, 무료 혜택은 complimentary를 사용하세요.',
    casualNative: 'Hey, any chance I could get a late check-out tomorrow? Also, is breakfast included?',
    businessNative: 'Would it be possible to extend my reservation by one night, and is breakfast complimentary with this room?'
  },
  {
    keywords: ['교환', '환불', '사이즈', '입어', '영수증', '쇼핑'],
    grammarFix: 'Could I try this on, and if it does not fit, exchange it for a larger size?',
    noteKo: '입어보기는 try on, 사이즈 교환은 exchange A for B가 핵심 패턴입니다.',
    casualNative: 'Mind if I try this on? Do you have it one size up just in case?',
    businessNative: 'I have the gift receipt here—would I be able to exchange this for a medium instead?'
  },
  {
    keywords: ['화상', '화면', '끊기', '음성', '마이크', '줌'],
    grammarFix: "Can everyone see my screen? Sorry, you're breaking up a bit—could you repeat that?",
    noteKo: '화상회의 끊김은 breaking up, 화면 확인은 Can everyone see my screen?이 원어민 표준입니다.',
    casualNative: "Hey, you're breaking up a little—mind saying that last part again?",
    businessNative: 'Apologies for the interruption, your audio is cutting in and out. Could you kindly repeat that last point?'
  },
  {
    keywords: ['이메일', '첨부', '회신', '팔로업', '리마인드'],
    grammarFix: "I've attached the updated proposal for your review—please let me know your thoughts by Thursday.",
    noteKo: '이메일 팔로업은 circle back / touch base, 첨부 안내는 I’ve attached ~ for your review가 깔끔합니다.',
    casualNative: 'Just circling back on the draft I attached earlier—let me know if anything looks off!',
    businessNative: 'Please find the revised proposal attached. I would appreciate your feedback at your earliest convenience.'
  },
  {
    keywords: ['병목', '지연', '우선순위', '보고', '진행'],
    grammarFix: "We're largely on track, but we hit a bottleneck in QA and may need to push the deadline back by two days.",
    noteKo: '순조로운 진행은 on track, 정체는 bottleneck, 일정 연기는 push back으로 보고하세요.',
    casualNative: "Things are moving along, except we hit a snag in QA so we might need to bump the date back.",
    businessNative: 'While most workstreams remain on track, a QA bottleneck requires us to realign priorities and adjust the timeline by 48 hours.'
  },
  {
    keywords: ['반론', '동의', '끼어들', '회의', '의견'],
    grammarFix: "May I jump in here? I see where you're coming from, and I'd love to build on that with one caveat.",
    noteKo: '발언권 얻기(May I jump in?) → 공감(see where you’re coming from) → 의견 보태기(build on that) 3단계입니다.',
    casualNative: 'Can I jump in for a sec? I totally get that, though what if we tried a lighter rollout first?',
    businessNative: "To build on your point, I fully appreciate the rationale; however, we should also weigh the implementation cost."
  },
  {
    keywords: ['발표', '프레젠테이션', '차트', '요약', '데이터'],
    grammarFix: "Today I'll walk you through our key metrics—the main takeaway is a 24% jump in retention.",
    noteKo: '발표 안내는 walk you through, 핵심 요약은 key takeaway / bottom line을 활용하세요.',
    casualNative: "Let me quickly walk you through the highlights—bottom line, retention jumped 24%!",
    businessNative: "I will walk you through our Q3 findings; the key takeaway is that our onboarding overhaul drove a 24% lift in retention."
  },
  {
    keywords: ['협상', '네고', '가격', '할인', '양보', '절충'],
    grammarFix: 'Is there any wiggle room on pricing? If you can meet us halfway, we can commit to an annual contract.',
    noteKo: '협상 여지는 wiggle room, 상호 양보는 meet halfway, 조건부 제안은 If you can ~, we can ~ 구조입니다.',
    casualNative: 'Any chance you can meet us halfway on the price if we sign for a full year?',
    businessNative: 'Provided there is some flexibility on unit pricing, we are prepared to commit to a multi-year partnership.'
  },
  {
    keywords: ['가정', '미리', '알았더라면', '리스크', '위기', '비상'],
    grammarFix: 'Had we anticipated the traffic spike earlier, we would have activated our contingency plan immediately.',
    noteKo: 'C1 고급 도치 가정법 "Had we + p.p., we would have + p.p."를 활용하면 위기 회고 보고가 프로답게 들립니다.',
    casualNative: "If we'd known traffic would spike like that, we would've rolled out the backup plan right away.",
    businessNative: 'Had we foreseen the surge in demand, we would have triggered our contingency protocol ahead of launch.'
  },
  {
    keywords: ['면접', '인터뷰', '성과', '이직', '강점', '프로젝트'],
    grammarFix: 'I spearheaded a cross-functional initiative that cut onboarding drop-off by 32% within two quarters.',
    noteKo: '영어 면접 STAR 답변에서는 spearheaded(주도했다), cross-functional(유관부서 협업), 수치 성과가 핵심입니다.',
    casualNative: 'I led a cross-team project that trimmed onboarding drop-off by almost a third in six months.',
    businessNative: 'I spearheaded a cross-functional redesign that delivered a measurable 32% reduction in onboarding attrition.'
  },
  {
    keywords: ['AI', '자동화', '일자리', '토론', '찬반', '양날'],
    grammarFix: 'While automation boosts productivity, it is a double-edged sword that makes continuous upskilling essential.',
    noteKo: '양보절(While ~)로 균형을 잡고 double-edged sword(양날의 검)로 입체적인 C1 논증을 구성했습니다.',
    casualNative: "AI definitely speeds things up, but it's a double-edged sword—we all have to keep upskilling.",
    businessNative: 'Although AI-driven automation yields substantial efficiency gains, it remains a double-edged sword necessitating proactive workforce reskilling.'
  },
  {
    keywords: ['공감', '설득', '경청', '문화', '뉘앙스'],
    grammarFix: 'By practicing tactical empathy and reframing the concern, we can turn pushback into constructive alignment.',
    noteKo: '전술적 공감(tactical empathy)과 프레임 전환(reframing)을 결합한 C2 설득 표현입니다.',
    casualNative: 'Once people actually feel heard, it is way easier to reframe the issue and get on the same page.',
    businessNative: 'Leading with tactical empathy and thoughtfully reframing competing priorities turns resistance into durable alignment.'
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
      grammarFix: 'Let me walk you through how I usually handle that situation.',
      tutorExplanationKo:
        '한국어로 먼저 아이디어를 잡으셨군요! 아래 원어민 뼈대 문장을 소리 내어 읽은 뒤, 핵심 단어 1~2개만 영어로 바꿔 다시 입력해보세요.',
      casualNative: 'Honestly, what works best for me is taking it step by step and staying flexible.',
      businessNative:
        'From my perspective, staying proactive and keeping all stakeholders in the loop makes all the difference.'
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
    } else if (wordCount >= 14) {
      notes.push(
        '복문 전개와 어휘 선택이 아주 훌륭합니다! 원어민 자연 리듬을 살리기 위해 아래 캐주얼·비즈니스 격식 버전도 소리 내어 비교해 보세요.'
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
    businessNative:
      customBusiness ||
      (dayNumber >= 19
        ? `From a strategic standpoint, ${lowered}.`
        : `Just to keep you in the loop, ${lowered}.`)
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
