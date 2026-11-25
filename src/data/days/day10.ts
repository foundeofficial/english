import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day10Module: DayLessonModule = {
  dayNumber: 10,
  weekNumber: 2,
  cefrLevel: 'b1',
  isWeeklyReview: false,
  dayBadge: 'DAY 10 · 쇼핑·교환·환불 & 정중한 컴플레인',
  categoryLabel: '해외 매장 쇼핑 & 문제 해결 B1',
  title: '입어봐도 될까요? 한 치수 큰 걸로 교환하고 싶어요',
  subtitle: '피팅룸·재고 문의부터 영수증(묵음 p)·전액 환불·제품 하자 대응까지 감정 상하지 않고 원하는 해결책을 얻어내는 정중한 컴플레인 전략',
  heroImage: 'assets/scene_restaurant_chat.jpg',
  secondaryImage: 'assets/scene_cafe_detour.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 40,
  keyExpression: 'try it on / exchange / receipt / refund',
  keySentenceByTier: {
    a1: 'Can I try it on? I want a bigger size.',
    a2: 'Could I try this jacket on? Do you have it in a size up?',
    b1: 'I bought this yesterday and brought the receipt—could I exchange it for a larger size or get a refund?',
    b2: 'I noticed a loose button when I got home, so I was hoping to exchange this for a new one if it is in stock.',
    c1: 'Since this item turned out to be slightly defective and I still have the original receipt, would it be possible to process a full refund?',
    c2: 'Although I really like the fit, I realized I was overcharged at checkout and noticed a minor flaw in the stitching—could someone look into issuing an exchange or refund?'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[10],
  readingPassage: {
    titleEn: 'How Polite Framing Gets Faster Exchanges and Refunds',
    titleKo: '화내지 않고도 해외 매장에서 교환·환불을 빠르게 받아내는 대화법',
    genreBadge: '실전 소비 커뮤니케이션 · Lv.3 중하급',
    estimatedMin: 6,
    paragraphsEn: [
      'Shopping abroad is exciting until you get back to your hotel and realize a jacket feels tight across the shoulders—or worse, has a tiny tear near the pocket. Many travelers hesitate to walk back into the store because they worry their English will sound either too timid or too confrontational.',
      'The easiest way to sound confident yet polite is to lead with a calm observation rather than an accusation. Saying "I noticed a loose button on this jacket, and I have the receipt here" immediately puts the sales associate on your side. From there, clearly state whether you would like to exchange it for a size up or request a full refund.',
      'Before paying at checkout, always ask one quick question about the return policy, especially for items on sale. Some boutiques only offer store credit on discounted pieces, while others happily refund your card within thirty days. If you are buying a souvenir for someone else, asking for a gift receipt lets them exchange it without seeing the price.'
    ],
    paragraphsSlash: [
      'Shopping abroad is exciting / until you get back to your hotel / and realize a jacket feels tight across the shoulders— / or worse, has a tiny tear near the pocket. / Many travelers hesitate to walk back into the store / because they worry their English will sound / either too timid or too confrontational.',
      'The easiest way to sound confident yet polite / is to lead with a calm observation / rather than an accusation. / Saying "I noticed a loose button on this jacket, / and I have the receipt here" / immediately puts the sales associate on your side. / From there, clearly state / whether you would like to exchange it for a size up / or request a full refund.',
      'Before paying at checkout, / always ask one quick question / about the return policy, / especially for items on sale. / Some boutiques only offer store credit / on discounted pieces, / while others happily refund your card / within thirty days. / If you are buying a souvenir for someone else, / asking for a gift receipt / lets them exchange it / without seeing the price.'
    ],
    paragraphsKo: [
      '해외 쇼핑은 호텔에 돌아와 재킷 어깨가 좁다는 걸 깨닫기 전까지는 즐겁습니다—더 심하게는 주머니 옆이 살짝 뜯어져 있는 경우도 있죠. 많은 여행자가 자신의 영어가 너무 소심하거나 반대로 공격적으로 들릴까 봐 매장에 다시 들어가길 망설입니다.',
      '당당하면서도 예의 바르게 말하는 가장 쉬운 방법은 비난이 아니라 차분한 사실 관찰로 말문을 여는 것입니다. "이 재킷 단추가 느슨한 걸 발견했는데, 여기 영수증도 가지고 있어요"라고 말하면 매장 직원이 즉시 내 편이 되어 줍니다. 그다음 한 치수 큰 걸로 교환(exchange it for a size up)하고 싶은지, 전액 환불(full refund)을 원하는지 명확하게 밝히세요.',
      '계산대에서 결제하기 전에는 특히 할인 상품(on sale)의 반품 규정(return policy)을 짧게 한 번 확인하는 습관이 좋습니다. 어떤 부티크는 할인 품목에 매장 적립금(store credit)만 제공하는 반면, 어떤 매장은 30일 이내에 카드 환불을 흔쾌히 해 줍니다. 누군가에게 줄 선물을 산다면 선물용 교환 영수증(gift receipt)을 요청해 가격 노출 없이 교환할 수 있게 챙기세요.'
    ],
    keyExpressions: ['I noticed ~', 'have the receipt', 'exchange it for a size up', 'full refund', 'return policy', 'store credit'],
    comprehensionQuiz: [
      {
        id: 'd10-rq01',
        questionKo: '본문에서 제품 하자를 알릴 때 매장 직원을 내 편으로 만드는 가장 좋은 첫마디 전략은?',
        options: [
          '매니저를 당장 불러 달라고 강하게 요구하기',
          '비난 대신 차분한 사실 관찰("I noticed ~")로 말문을 열기',
          '영수증 없이 말로만 구매 날짜를 설명하기',
          '다른 매장 가격과 비교하며 할인을 요구하기'
        ],
        answer: '비난 대신 차분한 사실 관찰("I noticed ~")로 말문을 열기',
        explanationKo: '둘째 문단 "lead with a calm observation rather than an accusation"이 핵심 전략입니다.'
      },
      {
        id: 'd10-rq02',
        questionKo: '할인 상품(items on sale)을 결제하기 전 반품 규정을 꼭 확인해야 하는 이유로 본문이 언급한 것은?',
        options: [
          '할인 상품은 피팅룸에서 입어볼 수 없기 때문',
          '일부 매장은 할인 품목에 카드 환불 대신 매장 적립금(store credit)만 제공하기 때문',
          '할인 상품은 영수증을 발급해 주지 않기 때문',
          '할인 상품은 해외 카드로 결제할 수 없기 때문'
        ],
        answer: '일부 매장은 할인 품목에 카드 환불 대신 매장 적립금(store credit)만 제공하기 때문',
        explanationKo: '셋째 문단 "Some boutiques only offer store credit on discounted pieces"가 정답 근거입니다.'
      },
      {
        id: 'd10-rq03',
        questionKo: '다른 사람에게 줄 선물을 살 때 gift receipt를 요청하면 어떤 장점이 있나요?',
        options: [
          '추가 10% 선물 할인을 자동으로 적용받는다',
          '받는 사람이 가격을 보지 않고도 제품을 교환할 수 있다',
          '공항에서 세금 환급을 두 배로 받을 수 있다',
          '무료 해외 국제 배송을 신청할 수 있다'
        ],
        answer: '받는 사람이 가격을 보지 않고도 제품을 교환할 수 있다',
        explanationKo: '셋째 문단 마지막 문장 "lets them exchange it without seeing the price"를 확인하세요.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd10-v01',
      word: 'try it on',
      phonetic: '/traɪ ɪt ɑːn/',
      pos: '구동사',
      cefr: 'a2',
      meaningKo: '(옷·신발을) 입어보다, 신어보다',
      meaningEn: 'put on clothing or shoes briefly to check the fit',
      nuanceTipKo: '목적어가 대명사 it/them일 때는 반드시 가운데에 넣습니다! try it on / try them on (절대 try on it 불가).',
      exampleEn: 'Excuse me, where is the fitting room? I would like to try this on.',
      exampleKo: '실례지만 피팅룸이 어디인가요? 이거 입어보고 싶어서요.'
    },
    {
      id: 'd10-v02',
      word: 'exchange A for B',
      phonetic: '/ɪksˈtʃeɪndʒ eɪ fɔːr biː/',
      pos: '동사 구문',
      cefr: 'b1',
      meaningKo: 'A를 B로 교환하다',
      meaningEn: 'return an item and receive a different size, color, or product instead',
      nuanceTipKo: 'change 대신 매장 교환은 반드시 exchange를 쓰며, 전치사 for와 짝을 이룹니다.',
      exampleEn: 'Could I exchange this medium sweater for a large?',
      exampleKo: '이 미디엄 사이즈 스웨터를 라지로 교환할 수 있을까요?'
    },
    {
      id: 'd10-v03',
      word: 'receipt',
      phonetic: '/rɪˈsiːt/',
      pos: '명사',
      cefr: 'a2',
      meaningKo: '영수증',
      meaningEn: 'a printed or digital record showing proof of purchase',
      nuanceTipKo: '발음 함정 1위! 철자 p는 완전히 묵음이라 /리시프트/가 아니라 /리시트(rɪˈsiːt)/로 발음합니다.',
      exampleEn: 'I still have the original receipt—can I return this unopened item?',
      exampleKo: '원본 영수증을 아직 가지고 있는데 이 미개봉 상품 반품할 수 있을까요?'
    },
    {
      id: 'd10-v04',
      word: 'full refund',
      phonetic: '/fʊl ˈriːfʌnd/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '전액 환불',
      meaningEn: 'returning the entire amount paid back to the customer',
      nuanceTipKo: 'get a full refund(전액 환불받다), issue/process a refund(환불을 처리하다) 연어로 기억하세요.',
      exampleEn: 'Since the zipper is broken, could I get a full refund to my card?',
      exampleKo: '지퍼가 고장 나 있어서 카드로 전액 환불받을 수 있을까요?'
    },
    {
      id: 'd10-v05',
      word: 'fitting room',
      phonetic: '/ˈfɪtɪŋ ruːm/',
      pos: '명사구',
      cefr: 'a2',
      meaningKo: '탈의실, 피팅룸',
      meaningEn: 'a small private area in a store for trying on clothes',
      nuanceTipKo: '미국에서는 fitting room 또는 dressing room을 씁니다 (changing room은 수영장·헬스장 탈의실 느낌).',
      exampleEn: 'The fitting rooms are right in the back on your left.',
      exampleKo: '피팅룸은 매장 안쪽 왼쪽에 바로 있습니다.'
    },
    {
      id: 'd10-v06',
      word: 'a size up / down',
      phonetic: '/ə saɪz ʌp daʊn/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '한 치수 큰 것 / 한 치수 작은 것',
      meaningEn: 'one size larger or one size smaller than the current item',
      nuanceTipKo: '"bigger size"보다 "Do you have this in a size up?"이라고 하면 훨씬 원어민답게 들립니다!',
      exampleEn: 'This fits a little snug—could I try a size up?',
      exampleKo: '이건 살짝 끼는데 한 치수 큰 걸로 입어볼 수 있을까요?'
    },
    {
      id: 'd10-v07',
      word: 'out of stock',
      phonetic: '/aʊt əv stɑːk/',
      pos: '전치사구',
      cefr: 'b1',
      meaningKo: '품절된, 재고가 없는',
      meaningEn: 'temporarily unavailable to buy because all units are sold',
      nuanceTipKo: '반대는 in stock(재고가 있는)! 직원이 "Let me check if we have it in stock in the back"이라고 자주 말합니다.',
      exampleEn: 'Unfortunately, the navy color is currently out of stock in large.',
      exampleKo: '아쉽게도 네이비 색상 라지 사이즈는 현재 품절입니다.'
    },
    {
      id: 'd10-v08',
      word: 'store credit',
      phonetic: '/stɔːr ˈkredɪt/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '매장 적립금 (현금 환불 대신 매장에서 쓰는 크레딧)',
      meaningEn: 'a voucher or balance usable only at the same store instead of a cash refund',
      nuanceTipKo: '영수증이 없거나 할인 상품 반품 시 현금 환불 대신 store credit으로만 처리해 주는 해외 매장이 많습니다.',
      exampleEn: 'Without a receipt, we can only offer store credit for the current price.',
      exampleKo: '영수증이 없으시면 현재 판매가 기준 매장 적립금으로만 도와드릴 수 있습니다.'
    },
    {
      id: 'd10-v09',
      word: 'defective',
      phonetic: '/dɪˈfektɪv/',
      pos: '형용사',
      cefr: 'b1',
      meaningKo: '결함이 있는, 불량인',
      meaningEn: 'having a fault or flaw that prevents normal use',
      nuanceTipKo: '제품 자체의 제조 결함(불량품)을 침착하고 정확하게 지적할 때 broken보다 훨씬 격식 있는 단어입니다.',
      exampleEn: 'This charger seems to be defective—it stops charging after a minute.',
      exampleKo: '이 충전기가 불량인 것 같아요—1분 지나면 충전이 끊기네요.'
    },
    {
      id: 'd10-v10',
      word: 'return policy',
      phonetic: '/rɪˈtɜːrn ˈpɑːləsi/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '반품·환불 규정',
      meaningEn: 'a store’s rules regarding returning or exchanging purchased items',
      nuanceTipKo: '결제 전 "What is your return policy on sale items?" 한 마디면 억울한 환불 거부를 미리 막을 수 있습니다.',
      exampleEn: 'Could you tell me what your return policy is for sale items?',
      exampleKo: '할인 상품의 반품 규정이 어떻게 되는지 알려 주시겠어요?'
    },
    {
      id: 'd10-v11',
      word: 'just browsing',
      phonetic: '/dʒʌst ˈbraʊzɪŋ/',
      pos: '실전 구문',
      cefr: 'a2',
      meaningKo: '그냥 둘러보는 중이에요',
      meaningEn: 'looking around a store casually without needing immediate help',
      nuanceTipKo: '직원이 "Can I help you find anything?"라고 다가올 때 가장 친절하고 자연스러운 대답은 "I\'m just browsing, thanks!"입니다.',
      exampleEn: "I'm just browsing right now, thanks—I'll let you know if I need help.",
      exampleKo: '지금은 그냥 둘러보는 중이에요, 감사합니다—도움 필요하면 말씀드릴게요.'
    },
    {
      id: 'd10-v12',
      word: 'on sale',
      phonetic: '/ɑːn seɪl/',
      pos: '전치사구',
      cefr: 'a2',
      meaningKo: '할인 판매 중인',
      meaningEn: 'available to buy at a reduced price',
      nuanceTipKo: '주의! for sale은 "(집·차 등이) 매물로 나와 있는", on sale은 "(매장에서) 세일·할인 중인" 뜻입니다.',
      exampleEn: 'Are these linen jackets on sale this weekend?',
      exampleKo: '이 린넨 재킷들은 이번 주말에 할인 행사 중인가요?'
    },
    {
      id: 'd10-v13',
      word: 'gift receipt',
      phonetic: '/ɡɪft rɪˈsiːt/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '선물용 교환 영수증 (가격 미표기)',
      meaningEn: 'a special receipt without prices shown so a recipient can exchange a gift',
      nuanceTipKo: '해외 매장에서 선물을 살 때 "Could I get a gift receipt for this?"라고 꼭 챙기세요.',
      exampleEn: 'This is a birthday gift—could you include a gift receipt, please?',
      exampleKo: '생일 선물인데 선물용 교환 영수증도 같이 넣어 주시겠어요?'
    },
    {
      id: 'd10-v14',
      word: 'overcharge',
      phonetic: '/ˌoʊvərˈtʃɑːrdʒ/',
      pos: '동사',
      cefr: 'b2',
      meaningKo: '과다 청구하다, 요금을 더 받다',
      meaningEn: 'charge someone more money than the correct or advertised price',
      nuanceTipKo: '직원을 공격하지 않으려면 수동태로 "I think I was overcharged by ten dollars"처럼 부드럽게 말하세요.',
      exampleEn: 'Excuse me, I think I was overcharged—this tag says forty dollars, not fifty.',
      exampleKo: '실례지만 금액이 더 청구된 것 같아요—가격표엔 50달러가 아니라 40달러라고 적혀 있네요.'
    },
    {
      id: 'd10-v15',
      word: 'look into it',
      phonetic: '/lʊk ˈɪntuː ɪt/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '그 문제를 확인해 보다, 살펴보다',
      meaningEn: 'investigate or check a problem carefully',
      nuanceTipKo: '컴플레인을 제기할 때 "Could you look into this for me?"라고 하면 감정 싸움 없이 프로답게 해결을 요청할 수 있습니다.',
      exampleEn: "Let me look into it right away and fix the charge on your receipt.",
      exampleKo: '제가 바로 확인해 보고 영수증 청구 금액을 수정해 드리겠습니다.'
    }
  ],
  dialogue: [
    {
      id: 'd10-t01',
      speaker: 'Maya',
      roleLabel: '매장 직원',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english: 'Hi there! Welcome back—how can I help you today?',
      slashBroken: 'Hi there! / Welcome back— / how can I help you today?',
      korean: '안녕하세요! 다시 찾아주셨네요—오늘 어떤 도움이 필요하신가요?',
      keyHighlight: 'how can I help you',
      noteKo: '매장 반품·교환 카운터에서 가장 먼저 듣게 되는 인사입니다. 침착하게 목적부터 말하세요.'
    },
    {
      id: 'd10-t02',
      speaker: 'Taehyun',
      roleLabel: '쇼핑객 (한국인)',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'pan-right',
      english: 'Hi! I bought this linen jacket yesterday, and I noticed two small things—the sleeves feel a bit snug, and one button is loose. I brought my receipt.',
      slashBroken: 'Hi! / I bought this linen jacket yesterday, / and I noticed two small things— / the sleeves feel a bit snug, / and one button is loose. / I brought my receipt.',
      korean: '안녕하세요! 어제 이 린넨 재킷을 샀는데 두 가지 작은 점이 눈에 띄어서요—소매가 살짝 끼고 단추 하나가 느슨해요. 영수증 가지고 왔습니다.',
      keyHighlight: 'I noticed',
      noteKo: '비난 대신 "I noticed ~"로 객관적 사실을 먼저 전달하고, 영수증(/rɪˈsiːt/)을 함께 제시하는 완벽한 오프닝입니다.'
    },
    {
      id: 'd10-t03',
      speaker: 'Maya',
      roleLabel: '매장 직원',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english: 'Oh, I am so sorry about the loose button! Let me check if we have a size up in stock so you can try it on.',
      slashBroken: 'Oh, I am so sorry / about the loose button! / Let me check / if we have a size up in stock / so you can try it on.',
      korean: '어머, 단추가 느슨했다니 정말 죄송해요! 입어보실 수 있도록 한 치수 큰 사이즈 재고가 있는지 확인해 볼게요.',
      keyHighlight: 'a size up in stock',
      noteKo: 'a size up(한 치수 큰 것) + in stock(재고가 있는) + try it on(입어보다)이 자연스럽게 이어집니다.'
    },
    {
      id: 'd10-t04',
      speaker: 'Taehyun',
      roleLabel: '쇼핑객 (한국인)',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-left',
      english: "Thanks, I really appreciate it! And if large happens to be out of stock, would it be possible to get a full refund instead?",
      slashBroken: 'Thanks, I really appreciate it! / And if large happens to be out of stock, / would it be possible / to get a full refund instead?',
      korean: '감사합니다, 정말 고마워요! 만약 라지 사이즈가 품절이라면 대신 전액 환불을 받을 수 있을까요?',
      keyHighlight: 'get a full refund',
      noteKo: '플랜 A(교환)와 플랜 B(전액 환불)를 공손한 조건절(if ~ happens to be out of stock)로 미리 조율했습니다.'
    },
    {
      id: 'd10-t05',
      speaker: 'Maya',
      roleLabel: '매장 직원',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english: 'Of course! Since you have the original receipt and the jacket is slightly defective, we can easily refund your card—no store credit required. Good news, though: we do have one large left in the back!',
      slashBroken: 'Of course! / Since you have the original receipt / and the jacket is slightly defective, / we can easily refund your card— / no store credit required. / Good news, though: / we do have one large left in the back!',
      korean: '물론이죠! 원본 영수증이 있으시고 제품에 약간의 하자도 있어서 매장 적립금이 아니라 바로 카드 환불해 드릴 수 있어요. 그런데 좋은 소식이네요: 창고에 라지 사이즈가 딱 하나 남아 있어요!',
      keyHighlight: 'slightly defective',
      noteKo: 'in the back은 매장 뒤편 창고를 뜻하며, 직원이 강조를 위해 "we do have~"라고 강조 조동사 do를 썼습니다.'
    },
    {
      id: 'd10-t06',
      speaker: 'Taehyun',
      roleLabel: '쇼핑객 (한국인)',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-right',
      english: "Awesome! Let me try it on in the fitting room quickly. Oh, and by the way, I think I was overcharged five dollars on the scarf yesterday—could you look into it?",
      slashBroken: 'Awesome! / Let me try it on / in the fitting room quickly. / Oh, and by the way, / I think I was overcharged five dollars / on the scarf yesterday— / could you look into it?',
      korean: '최고네요! 피팅룸에서 잠깐 입어볼게요. 아, 그리고 어제 스카프에 5달러가 더 청구된 것 같은데 한 번 확인해 주실 수 있나요?',
      keyHighlight: 'I think I was overcharged',
      noteKo: '"You overcharged me!(당신이 바가지 씌웠어!)" 대신 수동태 "I think I was overcharged"를 쓰면 훨씬 세련됩니다.'
    },
    {
      id: 'd10-t07',
      speaker: 'Maya',
      roleLabel: '매장 직원',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english: "You're right—the weekend sale discount didn't scan properly! I'll exchange the jacket for the large and refund that five-dollar difference right now.",
      slashBroken: "You're right— / the weekend sale discount didn't scan properly! / I'll exchange the jacket for the large / and refund that five-dollar difference right now.",
      korean: '말씀이 맞네요—주말 세일 할인이 제대로 스캔되지 않았어요! 재킷은 라지로 교환해 드리고 차액 5달러는 지금 바로 환불해 드릴게요.',
      keyHighlight: 'exchange the jacket for the large',
      noteKo: '차분하고 정중한 컴플레인이 할인 누락 환불과 새 제품 교환을 모두 끌어낸 모범 결말입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 대명사 어순 완벽 정복: try it on · take it back · put it on',
      coreFormula: 'try [the jacket] on / try on [the jacket] (둘 다 O) ↔ try [it/them] on (가운데만 O!)',
      wrongKonglish: 'This jacket looks nice. Can I try on it? And those shoes—can I try on them?',
      rightNative: 'This jacket looks nice. Can I try it on? And those shoes—can I try them on?',
      explanationKo:
        'Day 1의 pick it up / drop it off에 이어 쇼핑에서도 가장 많이 틀리는 문법이 바로 [타동사 + 부사] 구동사의 대명사 어순입니다. 일반 명사(this jacket)는 뒤에도, 가운데에도 놓을 수 있지만, 대명사(it, them)가 오는 순간 무조건 동사와 부사 한가운데(try it on, take them back)에 끼워 넣어야 합니다.',
      registerSpectrum: {
        casual: 'Mind if I try this on? These boots too—I wanna try them on.',
        standard: 'Could I try it on in the fitting room?',
        formal: 'Would it be alright if I tried these garments on before deciding?'
      }
    },
    {
      title: '원리 02 · 상대를 내 편으로 만드는 정중한 컴플레인 3단 공식',
      coreFormula: '① I noticed that [사실] → ② I was hoping to [희망] → ③ Would it be possible to [요청]?',
      wrongKonglish: 'You gave me a broken jacket and you overcharged me! Give me money back now!',
      rightNative: 'I noticed a loose button and I think I was overcharged—would it be possible to look into a refund?',
      explanationKo:
        '직설적으로 "You made a mistake / Give me a refund"라고 말하면 직원이 방어적이 되어 규정만 따지게 됩니다. 대신 ① 주어 I로 관찰을 전달하고(I noticed ~), ② 과거진행형 쿠션(I was hoping to ~)이나 수동태(I think I was overcharged)로 비난을 없앤 뒤, ③ 해결 옵션을 명확히 제안하면 서비스 해결 속도가 확 달라집니다.',
      registerSpectrum: {
        casual: "Hey, looks like this zipper's stuck—any chance I can swap it out?",
        standard: 'I noticed the zipper is defective, so I was hoping to exchange it for a new one.',
        formal: 'I appear to have been overcharged on this receipt; could you kindly look into adjusting the balance?'
      }
    },
    {
      title: '원리 03 · 쇼핑 필수 어휘 4대 함정: exchange vs refund · on sale vs for sale',
      coreFormula: 'exchange A for B (교환) / full refund (전액 환불) / store credit (적립금) / on sale (할인 중)',
      wrongKonglish: 'Is this shirt for sale? I want to change it to a large or take my money.',
      rightNative: 'Is this shirt on sale? I would like to exchange it for a large or get a full refund.',
      explanationKo:
        '① 매장 상품 교환은 change가 아니라 exchange A for B, ② 돈으로 돌려받는 것은 refund, ③ 매장 내에서만 쓸 수 있는 포인트는 store credit입니다. ④ 또한 매장에서 "이거 세일 중인가요?"를 "Is this for sale?"이라고 물으면 "이거 파는 물건인가요(디스플레이용 말고)?"라는 엉뚱한 뜻이 되므로 반드시 on sale을 써야 합니다!',
      registerSpectrum: {
        casual: 'Is this on sale? Can I swap it for a large or get a refund?',
        standard: 'Are these sweaters on sale? Could I exchange this for a large?',
        formal: 'Could you confirm whether discounted items are eligible for a full refund or store credit only?'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd10-s01',
      drillType: 'konglish-fix',
      promptKo: '"이 재킷 입어봐도 될까요?" — 대명사 어순이 문법적으로 올바른 문장은?',
      promptEnHint: '구동사 try on에서 대명사 it의 위치를 확인하세요.',
      targetEn: 'Could I try it on in the fitting room?',
      wrongKonglishOption: 'Could I try on it in the fitting room?',
      explanationKo: '대명사 it은 반드시 구동사 한가운데(try it on)에 와야 합니다.'
    },
    {
      id: 'd10-s02',
      drillType: 'chunk-build',
      promptKo: '이 미디엄 사이즈를 한 치수 큰 걸로 교환할 수 있을까요?',
      promptEnHint: 'exchange A for B 와 a size up을 연결하세요.',
      targetEn: 'Could I exchange this medium for a size up?',
      chunks: ['Could I', 'exchange this medium', 'for', 'a size up?'],
      explanationKo: 'exchange A for B에 a size up(한 치수 큰 것)을 결합한 실전 문장입니다.'
    },
    {
      id: 'd10-s03',
      drillType: 'active-blank',
      promptKo: '원본 영수증을 아직 가지고 있어요.',
      promptEnHint: '영수증을 뜻하는 명사(7글자, 묵음 p 주의!)를 넣으세요.',
      targetEn: 'I still have the original receipt right here.',
      blankData: {
        before: 'I still have the original',
        answer: 'receipt',
        after: 'right here.',
        firstLetterHint: 'r (7글자, 묵음 p)'
      },
      explanationKo: 'receipt는 r-e-c-e-i-p-t로 쓰고 /rɪˈsiːt/로 발음합니다.'
    },
    {
      id: 'd10-s04',
      drillType: 'konglish-fix',
      promptKo: '"이 스웨터들 이번 주말에 할인 행사 중인가요?" — 정확한 전치사 표현은?',
      promptEnHint: '"할인 판매 중인"은 for sale이 아니라 on sale입니다.',
      targetEn: 'Are these sweaters on sale this weekend?',
      wrongKonglishOption: 'Are these sweaters for sale this weekend?',
      explanationKo: 'on sale은 "세일(할인) 중인", for sale은 "판매용 매물로 나온"이라는 뜻입니다.'
    },
    {
      id: 'd10-s05',
      drillType: 'active-blank',
      promptKo: '아쉽게도 라지 사이즈는 현재 품절입니다.',
      promptEnHint: '"품절된, 재고가 없는" 3단어 표현을 넣으세요.',
      targetEn: 'Unfortunately, the large size is currently out of stock.',
      blankData: {
        before: 'Unfortunately, the large size is currently',
        answer: 'out of stock',
        after: '.',
        firstLetterHint: 'o__ o_ s____ (3단어)'
      },
      explanationKo: 'out of stock(품절)과 in stock(재고 있음)을 짝지어 기억하세요.'
    },
    {
      id: 'd10-s06',
      drillType: 'chunk-build',
      promptKo: '지퍼에 불량이 있어서 전액 환불을 받고 싶습니다.',
      promptEnHint: 'defective와 a full refund를 연결하세요.',
      targetEn: 'Since the zipper is defective, could I get a full refund?',
      chunks: ['Since the zipper', 'is defective,', 'could I get', 'a full refund?'],
      explanationKo: '불량 사유를 차분히 설명하고 get a full refund로 원하는 해결책을 명확히 제시합니다.'
    },
    {
      id: 'd10-s07',
      drillType: 'active-blank',
      promptKo: '지금은 그냥 둘러보는 중이에요, 감사합니다.',
      promptEnHint: '직원이 다가올 때 "그냥 둘러보는 중"을 뜻하는 2단어 표현을 채우세요.',
      targetEn: "I'm just browsing right now, thanks!",
      blankData: {
        before: "I'm",
        answer: 'just browsing',
        after: 'right now, thanks!',
        firstLetterHint: 'j___ b_______ (2단어)'
      },
      explanationKo: "I'm just browsing, thanks!는 해외 매장에서 매일 쓰는 필수 생존 멘트입니다."
    },
    {
      id: 'd10-s08',
      drillType: 'chunk-build',
      promptKo: '어제 스카프에 5달러가 더 청구된 것 같아요.',
      promptEnHint: '수동태 I think I was overcharged ~ 를 조립하세요.',
      targetEn: 'I think I was overcharged five dollars on this scarf.',
      chunks: ['I think', 'I was overcharged', 'five dollars', 'on this scarf.'],
      explanationKo: 'You overcharged me! 대신 수동태 I think I was overcharged를 쓰면 훨씬 부드럽고 프로답습니다.'
    },
    {
      id: 'd10-s09',
      drillType: 'konglish-fix',
      promptKo: '"이거 생일 선물인데 선물용 영수증(가격 미표기) 챙겨 주실 수 있나요?"',
      promptEnHint: '선물용 교환 영수증을 뜻하는 정확한 명사구를 고르세요.',
      targetEn: 'Could I get a gift receipt for this?',
      wrongKonglishOption: 'Could I get a price-delete paper for this?',
      explanationKo: '가격이 보이지 않게 처리된 교환용 영수증은 gift receipt라고 합니다.'
    },
    {
      id: 'd10-s10',
      drillType: 'chunk-build',
      promptKo: '할인 상품의 반품 규정이 어떻게 되나요?',
      promptEnHint: 'return policy와 on sale items를 연결하세요.',
      targetEn: "What's your return policy on sale items?",
      chunks: ["What's your", 'return policy', 'on', 'sale items?'],
      explanationKo: '결제 전 할인 상품 반품 규정을 확인할 때 가장 간결하고 정확한 질문입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd10-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '교환 구문 exchange A for B',
      questionKo: '빈칸에 알맞은 동사(1단어)와 전치사(1단어)를 써서 "이 셔츠를 한 치수 작은 걸로 교환하고 싶다"를 완성하세요.',
      stimulusEn: 'I would like to __________ this shirt __________ a size down. (2단어를 공백 구분)',
      answer: 'exchange for',
      explanationKo: '매장 교환은 exchange [기존 물건] for [바꿀 물건] 구조를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 신발 한 치수 큰 걸로 있나요?" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'Do you have these shoes in __________ __________ __________?',
        answer: 'a size up',
        explanationKo: '한 치수 큰 것은 a size up, 작은 것은 a size down입니다.'
      }
    },
    {
      id: 'd10-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '영수증 receipt 스펠링',
      questionKo: '빈칸에 알맞은 명사(1단어, 묵음 p 포함)를 써서 "여기 원본 영수증이 있습니다"를 완성하세요.',
      stimulusEn: 'Here is my original __________ from yesterday.',
      answer: 'receipt',
      explanationKo: '영수증은 receipt(r-e-c-e-i-p-t)로 철자합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "선물용 교환 영수증도 주실 수 있나요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Could you also include a __________ __________?',
        answer: 'gift receipt',
        explanationKo: '가격이 표시되지 않는 선물 교환 영수증은 gift receipt입니다.'
      }
    },
    {
      id: 'd10-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '전액 환불 full refund',
      questionKo: '빈칸에 알맞은 2단어를 써서 "카드로 전액 환불받을 수 있을까요?"를 완성하세요.',
      stimulusEn: 'Would it be possible to get a __________ __________ back to my card?',
      answer: 'full refund',
      explanationKo: '전액 환불은 full refund, 매장 적립금은 store credit이라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "할인 품목은 매장 적립금으로만 반품이 됩니다" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Discounted items are eligible for __________ __________ only.',
        answer: 'store credit',
        explanationKo: '현금·카드 환불 대신 해당 매장에서만 쓸 수 있는 적립금은 store credit입니다.'
      }
    },
    {
      id: 'd10-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '재고 확인 out of stock',
      questionKo: '빈칸에 알맞은 3단어를 써서 "네이비 색상은 현재 품절이다"를 완성하세요.',
      stimulusEn: 'Sorry, the navy jacket is currently __________ __________ __________.',
      answer: 'out of stock',
      explanationKo: '품절은 out of stock, 재고 보유는 in stock입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "창고에 라지 사이즈 재고가 있는지 확인해 볼게요" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Let me check if we have a large __________ __________ in the back.',
        answer: 'in stock',
        explanationKo: '재고가 있다는 뜻은 in stock입니다.'
      }
    },
    {
      id: 'd10-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '문제 확인 구동사 look into',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 써서 "결제 금액 오류를 확인해 주실 수 있나요?"를 완성하세요.',
      stimulusEn: 'I think I was overcharged—could you __________ __________ it for me?',
      answer: 'look into',
      explanationKo: '문제 원인을 살펴보고 확인하다는 look into입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 제품이 불량인 것 같아요" 빈칸 형용사(1단어)를 채우세요.',
        stimulusEn: 'I noticed this charger is __________—it will not turn on.',
        answer: 'defective',
        explanationKo: '제조 결함·불량을 뜻하는 정확한 형용사는 defective입니다.'
      }
    },
    {
      id: 'd10-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '구동사 대명사 어순',
      questionKo: '다음 중 구동사 try on의 어순이 문법적으로 **틀린** 문장은?',
      stimulusEn: '대명사 목적어(it/them)가 올 때의 어순 규칙을 적용하세요.',
      options: [
        'Can I try this linen jacket on?',
        'Can I try on this linen jacket?',
        'Can I try it on in the fitting room?',
        'Can I try on them in the fitting room?'
      ],
      answer: 'Can I try on them in the fitting room?',
      explanationKo: 'them은 대명사이므로 반드시 try와 on 사이에 넣어 "try them on"이라고 해야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 신발 신어봐도 될까요?"에서 (try / on / them)을 바르게 배열하세요(3단어).',
        stimulusEn: 'Could I __________ __________ __________?',
        answer: 'try them on',
        explanationKo: '대명사 them은 try와 on 한가운데 위치합니다.'
      }
    },
    {
      id: 'd10-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'on sale vs for sale 구별',
      questionKo: '옷가게에서 "이 코트 지금 할인 중인가요?"라고 묻고 싶을 때 가장 정확한 문장은?',
      stimulusEn: 'on sale과 for sale의 의미 차이에 유의하세요.',
      options: [
        'Is this coat for sale right now?',
        'Is this coat on sale right now?',
        'Is this coat in sale right now?',
        'Is this coat at sale right now?'
      ],
      answer: 'Is this coat on sale right now?',
      explanationKo: '할인 판매 중은 on sale입니다. for sale은 "판매 매물로 나와 있다(비매품이 아니다)"는 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "할인 상품의 반품 규정이 어떻게 되나요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'What is your __________ __________ on sale items?',
        answer: 'return policy',
        explanationKo: '반품·교환 규정은 return policy입니다.'
      }
    },
    {
      id: 'd10-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '정중한 컴플레인 어조',
      questionKo: '영수증에서 10달러가 과다 청구된 사실을 발견했을 때, 직원의 협조를 가장 잘 이끌어 내는 말은?',
      stimulusEn: '비난을 피하고 차분한 사실 전달과 수동태를 활용한 문장을 고르세요.',
      options: [
        'You stole ten dollars from me! Fix it right now!',
        'Excuse me, I think I was overcharged by ten dollars—could you look into it?',
        'I am just browsing my receipt, keep the change.',
        'Could I try the ten dollars on in the fitting room?'
      ],
      answer: 'Excuse me, I think I was overcharged by ten dollars—could you look into it?',
      explanationKo: '수동태 "I think I was overcharged"로 상대를 공격하지 않으면서도 문제를 명확히 짚고 확인(look into it)을 요청하는 것이 정석입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제가 5달러 더 청구된 것 같아요" 빈칸(1단어, 과거분사)을 채우세요.',
        stimulusEn: 'I think I was __________ by five dollars on this scarf.',
        answer: 'overcharged',
        explanationKo: '수동태 be + overcharged를 사용합니다.'
      }
    },
    {
      id: 'd10-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '매장 직원 응대 표현',
      questionKo: '매장에 들어서자 직원이 "Hi! Let me know if you are looking for anything specific."라고 말했을 때, 편하게 혼자 구경하고 싶을 때의 가장 자연스러운 대답은?',
      stimulusEn: '부담 없이 정중하게 혼자 둘러보겠다고 답하세요.',
      options: [
        "No, don't bother me.",
        "I'm just browsing right now, thanks!",
        'I want a full refund right now, thanks!',
        'Yes, it is out of stock, thanks!'
      ],
      answer: "I'm just browsing right now, thanks!",
      explanationKo: "I'm just browsing, thanks!는 거절의 딱딱함 없이 혼자 편히 구경하고 싶다는 뜻을 전하는 만능 표현입니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "피팅룸이 어디에 있는지 알려 주시겠어요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Could you tell me where the __________ __________ is?',
        answer: 'fitting room',
        explanationKo: '매장 탈의실은 fitting room(또는 dressing room)입니다.'
      }
    },
    {
      id: 'd10-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '정중한 희망 쿠션 I was hoping to',
      questionKo: '빈칸에 들어갈 표현으로, 교환 요청을 가장 부드럽고 세련되게 만들어 주는 것은?',
      stimulusEn: 'I noticed the sleeve is a bit tight, so ____________________ exchange it for a larger size.',
      options: ['I order you to', 'I was hoping to', 'I must force you to', 'I was browsing to'],
      answer: 'I was hoping to',
      explanationKo: '과거진행형 I was hoping to ~는 현재의 바람을 한 단계 낮춰 정중하게 전달하는 원어민 핵심 쿠션입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 재킷 단추가 느슨한 걸 발견했어요" 빈칸 동사(1단어, 과거형)를 쓰세요.',
        stimulusEn: 'I __________ a loose button on this jacket when I got home.',
        answer: 'noticed',
        explanationKo: '컴플레인을 부드럽게 여는 사실 관찰 동사는 noticed입니다.'
      }
    },
    {
      id: 'd10-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '사이즈 교환 요청 배열',
      questionKo: '주어진 청크를 올바른 어순으로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ for a size up? / this jacket / Could I / exchange ]',
      answer: 'Could I exchange this jacket for a size up?',
      explanationKo: 'Could I + exchange + [기존 물건] + for + [원하는 사이즈]? 순으로 배열합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 스웨터를 라지로 교환할 수 있을까요?"를 영작하세요.',
        stimulusEn: '힌트: Could I / exchange / this sweater / for a large?',
        answer: 'Could I exchange this sweater for a large?',
        explanationKo: 'exchange A for B 공식을 그대로 적용합니다.'
      }
    },
    {
      id: 'd10-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '조건부 환불 요청 배열',
      questionKo: '주어진 청크를 올바르게 배열하여 완전한 문장을 완성하세요.',
      stimulusEn: '[ get a full refund? / is out of stock, / If large / could I ]',
      answer: 'If large is out of stock, could I get a full refund?',
      explanationKo: '조건절(If large is out of stock,) 뒤에 정중한 질문(could I get a full refund?)을 이어 붙입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "원본 영수증을 가지고 있는데 전액 환불받을 수 있을까요?"를 영작하세요.',
        stimulusEn: '힌트: I have the original receipt. / Could I / get a full refund?',
        answer: 'I have the original receipt. Could I get a full refund?',
        explanationKo: '영수증 보유 사실을 먼저 밝힌 뒤 환불을 요청하면 매끄럽습니다.'
      }
    },
    {
      id: 'd10-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '과다 청구 정중 컴플레인 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 모두 활용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 제가 10달러 더 청구된 것 같은데 확인해 주실 수 있나요? (I think / I was overcharged / ten dollars— / could you / look into it)',
      answer: 'I think I was overcharged ten dollars—could you look into it?',
      acceptableAlt: ['I think I was overcharged ten dollars, could you look into it?', 'I think I was overcharged by ten dollars—could you look into it?'],
      explanationKo: '수동태 overcharged와 확인 요청 look into it을 자연스럽게 결합합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 문제 좀 확인해 주실 수 있나요?"를 영작하세요.',
        stimulusEn: '힌트: Could you / look into / this issue / for me?',
        answer: 'Could you look into this issue for me?',
        explanationKo: 'look into + 명사(this issue) 구조를 활용합니다.'
      }
    },
    {
      id: 'd10-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '쇼핑 어법 오류 교정 서술형',
      questionKo: '다음 문장의 어법·어휘 오류 2곳을 고쳐 자연스러운 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Is this jacket for sale? Can I try on it?',
      answer: 'Is this jacket on sale? Can I try it on?',
      explanationKo: '① 할인 중은 for sale → on sale, ② 대명사 목적어 어순은 try on it → try it on으로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 다음 오류 문장을 바르게 고쳐 쓰세요: I want to change this coat to a large.',
        stimulusEn: '매장 교환 동사와 짝꿍 전치사를 교정하세요.',
        answer: 'I want to exchange this coat for a large.',
        explanationKo: 'change ~ to 대신 exchange ~ for를 사용합니다.'
      }
    },
    {
      id: 'd10-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 한영 통문장 영작',
      questionKo: '다음 우리말을 오늘 배운 표현(return policy, gift receipt) 중 하나를 활용해 영작하세요.',
      stimulusEn: '우리말: 이거 생일 선물인데 선물용 교환 영수증 챙겨 주실 수 있나요? (힌트: This is a birthday gift. / Could I get / a gift receipt?)',
      answer: 'This is a birthday gift. Could I get a gift receipt?',
      acceptableAlt: ['This is a birthday gift—could I get a gift receipt?', 'This is a birthday gift. Could I get a gift receipt, please?'],
      explanationKo: '배경 설명(This is a birthday gift) 뒤에 Could I get a gift receipt?를 붙여 자연스럽게 요청합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "할인 상품의 반품 규정이 어떻게 되나요?"를 영작하세요.',
        stimulusEn: '힌트: What is / your return policy / on sale items?',
        answer: 'What is your return policy on sale items?',
        explanationKo: 'What is your return policy on ~? 패턴을 그대로 씁니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn: 'Hi there! Welcome to customer service. Are you looking to make an exchange or a return today?',
    openingQuestionKo: '안녕하세요! 고객 서비스 카운터입니다. 오늘 교환이나 반품 도와드릴까요?',
    followUpQuestionEn: 'I see—do you have the original receipt with you, and would you prefer to exchange it for another size or get a refund?',
    followUpQuestionKo: '그렇군요—원본 영수증을 가지고 계신가요? 다른 사이즈로 교환하시길 원하세요, 아니면 환불을 원하시나요?',
    recommendedChunks: ['I noticed ~', 'original receipt', 'exchange it for a size up', 'out of stock', 'full refund'],
    modelAnswerEn:
      'Hi! I bought this jacket yesterday, and I noticed the sleeves feel a bit tight and one button is loose. I have the original receipt here—could I exchange it for a size up, or get a full refund if it is out of stock?'
  }
};
