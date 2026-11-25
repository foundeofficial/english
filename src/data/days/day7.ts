import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day7Module: DayLessonModule = {
  dayNumber: 7,
  weekNumber: 2,
  cefrLevel: 'a2',
  isWeeklyReview: false,
  dayBadge: 'DAY 07 · 카페·식당 주문 & 커스텀',
  categoryLabel: '생존 여행·일상 외식 필수 패턴',
  title: '얼음은 적게, 소스는 따로 주세요',
  subtitle: '직설적인 "Give me~"를 벗어나 음료·식사 커스텀 요청, 알레르기 안내, 결제까지 현지인처럼 매끄럽게 주문하는 법',
  heroImage: 'assets/scene_cafe_detour.jpg',
  secondaryImage: 'assets/scene_restaurant_chat.jpg',
  estimatedSprintMin: 7,
  estimatedLectureMin: 38,
  keyExpression: 'go easy on ~ / on the side / grab a bite',
  keySentenceByTier: {
    a1: 'Can I get an iced latte with less ice, please?',
    a2: 'Could I get an iced oat latte, and please go easy on the ice?',
    b1: 'Could I grab an iced oat latte and have the salad dressing on the side?',
    b2: 'Would it be possible to swap the regular milk for oat milk and hold the onions in my sandwich?',
    c1: 'Since I have a mild dairy sensitivity, could we substitute oat milk and keep the dressing on the side?',
    c2: 'If it is not too much trouble, I would love to sub in oat milk for the latte and have the vinaigrette served on the side.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[7],
  readingPassage: {
    titleEn: 'Ordering Like a Regular at Any Cafe or Bistro',
    titleKo: '어느 해외 카페·비스트로에서도 단골처럼 주문하는 기술',
    genreBadge: '실전 여행 에세이 · Lv.2 초급',
    estimatedMin: 6,
    paragraphsEn: [
      'Many travelers freeze up the moment a barista smiles and asks, "What can I get started for you?" In English-speaking countries, customizing your drink or meal is completely normal, not a nuisance. Instead of pointing silently at the menu board, starting with a soft opener like "Could I get..." immediately sets a warm, natural tone.',
      'Once you name your main item, adding small adjustments takes only two or three words. You can ask them to go easy on the ice, swap regular milk for oat milk, or hold the cilantro if you dislike a certain herb. At sit-down bistros, asking for sauces on the side lets you control the flavor without sending a dish back to the kitchen.',
      'Wrapping up a meal is just as straightforward when you know the local rhythm. If you cannot finish your plate, simply ask your server for a to-go box. And when you grab a bite with friends or colleagues, saying "Could we split the bill?" saves everyone from awkward math at the table.'
    ],
    paragraphsSlash: [
      'Many travelers freeze up / the moment a barista smiles and asks, / "What can I get started for you?" / In English-speaking countries, / customizing your drink or meal is completely normal, / not a nuisance. / Instead of pointing silently at the menu board, / starting with a soft opener like "Could I get..." / immediately sets a warm, natural tone.',
      'Once you name your main item, / adding small adjustments / takes only two or three words. / You can ask them to go easy on the ice, / swap regular milk for oat milk, / or hold the cilantro / if you dislike a certain herb. / At sit-down bistros, / asking for sauces on the side / lets you control the flavor / without sending a dish back to the kitchen.',
      'Wrapping up a meal is just as straightforward / when you know the local rhythm. / If you cannot finish your plate, / simply ask your server for a to-go box. / And when you grab a bite / with friends or colleagues, / saying "Could we split the bill?" / saves everyone from awkward math at the table.'
    ],
    paragraphsKo: [
      '많은 여행자가 바리스타가 미소 지으며 "무엇부터 주문 도와드릴까요?"라고 묻는 순간 그대로 얼어붙곤 합니다. 영어권 국가에서는 음료나 음식을 내 취향대로 커스터마이징하는 것이 귀찮은 요구가 아니라 아주 자연스러운 일상입니다. 메뉴판을 말없이 가리키는 대신 "Could I get..."처럼 부드러운 첫마디로 시작하기만 해도 훨씬 따뜻하고 자연스러운 분위기가 만들어집니다.',
      '메인 메뉴를 말한 뒤에는 두세 단어만 덧붙여 원하는 옵션을 쉽게 조절할 수 있습니다. 얼음을 적게 넣어 달라고 하거나(go easy on the ice), 일반 우유를 오트밀크로 바꾸고(swap regular milk for oat milk), 싫어하는 고수는 빼 달라고(hold the cilantro) 말하면 됩니다. 일반 레스토랑에서는 소스를 따로 달라(on the side)고 요청하면 음식을 주방에 다시 돌려보낼 필요 없이 직접 간을 맞출 수 있습니다.',
      '식사를 마무리할 때도 현지 표현 리듬만 알면 아주 간단합니다. 음식이 남았다면 서버에게 포장 용기(to-go box)를 부탁하세요. 친구나 동료와 가볍게 식사한 뒤에는 "Could we split the bill?"이라고 말하면 테이블에서 어색하게 계산기를 두드릴 필요가 없습니다.'
    ],
    keyExpressions: ['Could I get ~?', 'go easy on ~', 'swap A for B', 'hold the ~', 'on the side', 'split the bill'],
    comprehensionQuiz: [
      {
        id: 'd7-rq01',
        questionKo: '글에 따르면, 영어권 카페나 식당에서 메뉴 옵션을 세부 요청(커스터마이징)하는 것은 어떻게 받아들여지나요?',
        options: [
          '직원을 번거롭게 하는 무례한 행동으로 여겨진다',
          '귀찮은 요구가 아니라 완전히 자연스러운 일상이다',
          '단골 VIP 고객에게만 허용되는 서비스다',
          '추가 요금을 낼 때만 말할 수 있다'
        ],
        answer: '귀찮은 요구가 아니라 완전히 자연스러운 일상이다',
        explanationKo: '첫 문단 "customizing your drink or meal is completely normal, not a nuisance"가 정답 근거입니다.'
      },
      {
        id: 'd7-rq02',
        questionKo: '식당에서 특정 재료(예: 고수)를 빼 달라고 요청할 때 본문에서 소개한 원어민 표현은?',
        options: ['keep the cilantro', 'swap the cilantro', 'hold the cilantro', 'split the cilantro'],
        answer: 'hold the cilantro',
        explanationKo: '둘째 문단에서 싫어하는 재료를 빼 달라고 할 때 "hold the cilantro"를 사용한다고 설명합니다.'
      },
      {
        id: 'd7-rq03',
        questionKo: '식사 후 음식이 남았을 때 서버에게 요청하는 포장 용기의 현지 표현은?',
        options: ['a take-out bag', 'a to-go box', 'a side plate', 'a menu board'],
        answer: 'a to-go box',
        explanationKo: '셋째 문단 "simply ask your server for a to-go box"에서 확인할 수 있습니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd7-v01',
      word: 'go easy on ~',
      phonetic: '/ɡoʊ ˈiːzi ɑːn/',
      pos: '구동사 구문',
      cefr: 'a2',
      meaningKo: '~을 적당히(적게) 넣다, 과하지 않게 하다',
      meaningEn: 'use only a small amount of an ingredient',
      nuanceTipKo: '얼음, 시럽, 소금, 매운 소스 등을 "조금만 넣어주세요" 할 때 less ~보다 훨씬 원어민스러운 핵심 표현입니다.',
      exampleEn: 'Could you go easy on the ice in my iced tea?',
      exampleKo: '아이스티에 얼음은 조금만 넣어 주실 수 있나요?'
    },
    {
      id: 'd7-v02',
      word: 'on the side',
      phonetic: '/ɑːn ðə saɪd/',
      pos: '전치사구',
      cefr: 'a2',
      meaningKo: '(소스·반찬을) 따로 담아, 별도로 곁들여서',
      meaningEn: 'served in a separate small dish rather than mixed in',
      nuanceTipKo: '샐러드 드레싱, 스테이크 소스, 피클 등을 뿌리지 말고 따로 달라고 할 때 쓰는 1순위 표현입니다.',
      exampleEn: 'Can I have the Caesar dressing on the side, please?',
      exampleKo: '시저 드레싱은 따로 담아 주실 수 있나요?'
    },
    {
      id: 'd7-v03',
      word: 'grab a bite',
      phonetic: '/ɡræb ə baɪt/',
      pos: '관용구',
      cefr: 'a2',
      meaningKo: '간단히 요기하다, 가볍게 한 끼 먹다',
      meaningEn: 'get something quick and casual to eat',
      nuanceTipKo: '부담 없이 "잠깐 뭐 좀 먹자"고 제안할 때 have a meal보다 훨씬 친근하고 자연스럽습니다.',
      exampleEn: 'We have thirty minutes—want to grab a bite across the street?',
      exampleKo: '30분 남았는데 길 건너에서 간단히 뭐 좀 먹을래?'
    },
    {
      id: 'd7-v04',
      word: 'Could I get ~?',
      phonetic: '/kʊd aɪ ɡet/',
      pos: '실전 구문',
      cefr: 'a1',
      meaningKo: '~ 하나 주시겠어요? (~로 주문할게요)',
      meaningEn: 'a polite, everyday way to order food or drinks',
      nuanceTipKo: '직설적인 "Give me ~" 대신 미국·캐나다 카페와 식당에서 가장 보편적으로 쓰이는 부드러운 주문 오프닝입니다.',
      exampleEn: 'Hi, could I get a medium iced Americano to go?',
      exampleKo: '안녕하세요, 미디엄 사이즈 아이스 아메리카노 포장 주문할 수 있을까요?'
    },
    {
      id: 'd7-v05',
      word: 'swap A for B',
      phonetic: '/swɑːp eɪ fɔːr biː/',
      pos: '동사 구문',
      cefr: 'b1',
      meaningKo: 'A를 B로 바꾸다(대체하다)',
      meaningEn: 'replace item A with item B',
      nuanceTipKo: '전치사 순서에 주의! 버리는 원래 재료(A)가 먼저 오고, 새로 원하는 재료(B)가 for 뒤에 옵니다.',
      exampleEn: 'Can I swap the fries for a small house salad?',
      exampleKo: '감자튀김을 작은 하우스 샐러드로 바꿀 수 있을까요?'
    },
    {
      id: 'd7-v06',
      word: 'hold the ~',
      phonetic: '/hoʊld ðə/',
      pos: '실전 구문',
      cefr: 'b1',
      meaningKo: '~는 빼주세요 (넣지 말아 주세요)',
      meaningEn: 'leave out a specific ingredient from a dish',
      nuanceTipKo: '"Without ~"도 좋지만, 버거·샌드위치 주문 끝에 ", and hold the onions"라고 붙이면 현지인 느낌이 확 살아납니다.',
      exampleEn: "I'll have the turkey club sandwich, and please hold the mayo.",
      exampleKo: '터키 클럽 샌드위치로 할게요, 그리고 마요네즈는 빼주세요.'
    },
    {
      id: 'd7-v07',
      word: 'dietary restriction',
      phonetic: '/ˈdaɪəteri rɪˈstrɪkʃən/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '식단 제한 (알레르기·채식·종교적 식이 조건)',
      meaningEn: 'a limit on what someone can eat due to health, allergy, or belief',
      nuanceTipKo: '고급 식당 서버가 주문 전 "Any allergies or dietary restrictions?"라고 자주 물어봅니다.',
      exampleEn: 'Do any of your guests have dietary restrictions we should know about?',
      exampleKo: '일행분 중에 저희가 알아두어야 할 알레르기나 식단 제한이 있으신가요?'
    },
    {
      id: 'd7-v08',
      word: 'dairy-free',
      phonetic: '/ˈderi friː/',
      pos: '형용사',
      cefr: 'a2',
      meaningKo: '유제품이 들어 있지 않은',
      meaningEn: 'containing no milk or milk-based ingredients',
      nuanceTipKo: '유당불내증이 있거나 우유·치즈·버터를 피할 때 nut-free, gluten-free와 함께 꼭 알아두어야 할 표현입니다.',
      exampleEn: 'Do you have any dairy-free milk options like oat or almond milk?',
      exampleKo: '오트밀크나 아몬드밀크 같은 비유제품 우유 옵션이 있나요?'
    },
    {
      id: 'd7-v09',
      word: 'decaf',
      phonetic: '/ˈdiːkæf/',
      pos: '명사/형용사',
      cefr: 'a2',
      meaningKo: '디카페인 (커피)',
      meaningEn: 'decaffeinated coffee with almost no caffeine',
      nuanceTipKo: 'decaffeinated를 끝까지 말하지 않고 원어민은 거의 100% 짧은 decaf로 말합니다.',
      exampleEn: 'Could you make that latte decaf? I cannot sleep if I drink caffeine late.',
      exampleKo: '그 라떼 디카페인으로 만들어 주실 수 있나요? 늦게 카페인을 마시면 잠을 못 자서요.'
    },
    {
      id: 'd7-v10',
      word: 'what do you recommend?',
      phonetic: '/wʌt duː juː ˌrekəˈmend/',
      pos: '실전 구문',
      cefr: 'a2',
      meaningKo: '어떤 메뉴를 추천하시나요?',
      meaningEn: 'asking the server or barista for their best menu suggestion',
      nuanceTipKo: '메뉴판이 낯설 때 서버와 스몰토크를 열면서 실패 없는 시그니처 메뉴를 고르는 최고 질문입니다.',
      exampleEn: "It's my first time here—what do you recommend for brunch?",
      exampleKo: '여기 처음 와 보는데 브런치 메뉴로 어떤 걸 추천하시나요?'
    },
    {
      id: 'd7-v11',
      word: 'split the bill',
      phonetic: '/splɪt ðə bɪl/',
      pos: '동사구',
      cefr: 'a2',
      meaningKo: '계산서를 나누다, 더치페이하다',
      meaningEn: 'divide the total cost of a meal among the people eating',
      nuanceTipKo: '콩글리시 "Dutch pay"는 영어권에서 거의 쓰지 않습니다! "split the bill" 또는 "separate checks"를 쓰세요.',
      exampleEn: 'Would it be okay if we split the bill between two cards?',
      exampleKo: '카드 두 장으로 나누어 결제해도 괜찮을까요?'
    },
    {
      id: 'd7-v12',
      word: 'to-go box',
      phonetic: '/tə ˈɡoʊ bɑːks/',
      pos: '명사구',
      cefr: 'a2',
      meaningKo: '남은 음식 포장 용기',
      meaningEn: 'a container used to take leftover restaurant food home',
      nuanceTipKo: '"Can I get a to-go box?" 한마디면 미국·캐나다 어디서든 남은 음식을 깔끔하게 싸 갈 수 있습니다.',
      exampleEn: 'This pasta is huge—could I get a to-go box for the rest?',
      exampleKo: '파스타 양이 정말 많네요—남은 건 포장 용기에 담아 갈 수 있을까요?'
    },
    {
      id: 'd7-v13',
      word: 'refill',
      phonetic: '/ˈriːfɪl/',
      pos: '명사/동사',
      cefr: 'a2',
      meaningKo: '리필, 다시 채워 주기',
      meaningEn: 'another serving of a drink in the same cup or glass',
      nuanceTipKo: '미국 식당의 드립 커피나 탄산음료는 무료 리필(free refills)인 경우가 많아 자주 묻게 됩니다.',
      exampleEn: 'Excuse me, could I get a quick refill on my iced tea?',
      exampleKo: '실례지만 아이스티 리필 한 번만 받을 수 있을까요?'
    },
    {
      id: 'd7-v14',
      word: 'waitlist',
      phonetic: '/ˈweɪtlɪst/',
      pos: '명사',
      cefr: 'b1',
      meaningKo: '대기 명단 (웨이팅 리스트)',
      meaningEn: 'a list of guests waiting for an available table',
      nuanceTipKo: '인기 맛집에서 "대기 명단에 이름 올릴게요"는 "Can I put my name on the waitlist?"라고 합니다.',
      exampleEn: 'There is a twenty-minute wait—would you like to get on the waitlist?',
      exampleKo: '20분 정도 대기가 있는데 대기 명단에 올려 드릴까요?'
    },
    {
      id: 'd7-v15',
      word: 'keep the change',
      phonetic: '/kiːp ðə tʃeɪndʒ/',
      pos: '관용구',
      cefr: 'a2',
      meaningKo: '잔돈은 가지세요 (팁으로 두세요)',
      meaningEn: 'tell a server or driver to keep the leftover cash as a tip',
      nuanceTipKo: '현금 결제 시 팁을 따로 계산하지 않고 잔돈을 자연스럽게 팁으로 남길 때 쓰는 매너 표현입니다.',
      exampleEn: "Here's twenty dollars—please keep the change.",
      exampleKo: '여기 20달러요—잔돈은 팁으로 가지세요.'
    }
  ],
  dialogue: [
    {
      id: 'd7-t01',
      speaker: 'Leo',
      roleLabel: '비스트로 서버',
      voicePitch: 0.94,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'zoom-in',
      english: 'Welcome in! What can I get started for you two this morning?',
      slashBroken: 'Welcome in! / What can I get started / for you two / this morning?',
      korean: '어서 오세요! 오늘 아침 두 분 무엇부터 주문 도와드릴까요?',
      keyHighlight: 'What can I get started for you',
      noteKo: '미국 카페·식당에서 "What do you want?" 대신 가장 자주 들리는 친절한 첫 인사입니다.'
    },
    {
      id: 'd7-t02',
      speaker: 'Jiyeon',
      roleLabel: '여행객 (한국인)',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-right',
      english: 'Hi! Could I get an iced oat latte, and could you go easy on the ice?',
      slashBroken: 'Hi! / Could I get an iced oat latte, / and could you go easy on the ice?',
      korean: '안녕하세요! 아이스 오트 라떼 한 잔 주시겠어요? 그리고 얼음은 조금만 넣어 주실 수 있나요?',
      keyHighlight: 'go easy on the ice',
      noteKo: 'Could I get ~로 부드럽게 주문을 열고, go easy on ~으로 양 조절 요청을 자연스럽게 이어 붙입니다.'
    },
    {
      id: 'd7-t03',
      speaker: 'Leo',
      roleLabel: '비스트로 서버',
      voicePitch: 0.94,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'zoom-in',
      english: 'Sure thing—light ice on the oat latte. Are you ready to grab a bite as well?',
      slashBroken: 'Sure thing— / light ice on the oat latte. / Are you ready / to grab a bite as well?',
      korean: '물론이죠—오트 라떼 얼음 적게 해 드릴게요. 식사도 함께 주문하실 준비되셨나요?',
      keyHighlight: 'grab a bite',
      noteKo: '바리스타나 서버가 "light ice(얼음 적게)"로 주문을 복창해 주는 실제 현장 리듬을 익혀 두세요.'
    },
    {
      id: 'd7-t04',
      speaker: 'Hannah',
      roleLabel: '현지 친구',
      voicePitch: 1.04,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'pan-left',
      english: "Yes! I'll have the avocado toast, and could I swap the side potatoes for fresh fruit?",
      slashBroken: "Yes! / I'll have the avocado toast, / and could I swap the side potatoes / for fresh fruit?",
      korean: '네! 저는 아보카도 토스트로 할게요, 그리고 사이드 감자를 신선한 과일로 바꿀 수 있을까요?',
      keyHighlight: 'swap the side potatoes for fresh fruit',
      noteKo: 'swap A for B는 메뉴판 기본 사이드(A)를 다른 옵션(B)으로 변경할 때 가장 명쾌한 공식입니다.'
    },
    {
      id: 'd7-t05',
      speaker: 'Jiyeon',
      roleLabel: '여행객 (한국인)',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english: "I'd love the grilled chicken salad, please—hold the walnuts and put the dressing on the side.",
      slashBroken: "I'd love the grilled chicken salad, please— / hold the walnuts / and put the dressing on the side.",
      korean: '저는 그릴드 치킨 샐러드로 부탁드려요—호두는 빼주시고 드레싱은 따로 담아 주세요.',
      keyHighlight: 'on the side',
      noteKo: 'hold the walnuts(호두 빼주세요) + dressing on the side(드레싱 따로)를 한 호흡에 연결했습니다.'
    },
    {
      id: 'd7-t06',
      speaker: 'Leo',
      roleLabel: '비스트로 서버',
      voicePitch: 0.94,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'pan-right',
      english: 'Got it! Is the walnut request a nut allergy or just a preference? I want to make sure the kitchen knows.',
      slashBroken: 'Got it! / Is the walnut request a nut allergy / or just a preference? / I want to make sure / the kitchen knows.',
      korean: '알겠습니다! 호두를 빼 달라고 하신 건 견과류 알레르기 때문인가요, 아니면 그냥 취향인가요? 주방에 정확히 전달하려고요.',
      keyHighlight: 'a nut allergy or just a preference',
      noteKo: '해외 식당에서는 교차 오염 방지를 위해 allergy(알레르기)인지 preference(단순 취향)인지 꼭 되묻습니다.'
    },
    {
      id: 'd7-t07',
      speaker: 'Jiyeon',
      roleLabel: '여행객 (한국인)',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english: "Just a preference, thanks for checking! Also, when we're done, could we split the bill?",
      slashBroken: "Just a preference, / thanks for checking! / Also, when we're done, / could we split the bill?",
      korean: '그냥 취향이에요, 세심하게 확인해 주셔서 감사해요! 그리고 식사 마치면 계산서 따로 나눌 수 있을까요?',
      keyHighlight: 'split the bill',
      noteKo: '확인해 준 서버에게 "thanks for checking!" 한마디를 얹으면 매너 점수가 확 올라갑니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 무례한 "Give me~" 탈출: 원어민 주문 3단 쿠션',
      coreFormula: 'Could I get [메뉴]? / I’ll have [메뉴], please. / Can I do [메뉴]?',
      wrongKonglish: 'Give me one iced latte. And I want avocado toast.',
      rightNative: "Could I get an iced latte? And I'll have the avocado toast, please.",
      explanationKo:
        '한국어 "라떼 하나 주세요"를 직역해 "Give me ~"라고 말하면 영어권에서는 명령조로 들려 상당히 무례하게 느껴집니다. 카페 카운터에서는 "Could I get ~?" 또는 캐주얼하게 "Can I do ~?", 식당 테이블에서는 "I\'ll have ~"를 입에 붙이세요. 뒤에 "please"만 가볍게 얹어 주면 완벽한 매너 주문이 됩니다.',
      registerSpectrum: {
        casual: 'Can I do an iced latte with oat milk, please?',
        standard: "Could I get an iced oat latte, and I'll have the chicken salad.",
        formal: 'May I please have the seasonal soup to start, followed by the salmon?'
      }
    },
    {
      title: '원리 02 · 커스텀 요청 3종 세트: go easy on · hold the · on the side',
      coreFormula: 'go easy on [재료](적게) / hold the [재료](빼고) / [소스] on the side(따로)',
      wrongKonglish: 'Please put ice very little, delete onions, and separate sauce.',
      rightNative: 'Please go easy on the ice, hold the onions, and put the sauce on the side.',
      explanationKo:
        '재료 조절을 할 때 delete(컴퓨터 파일 삭제)나 separate(분리하다)를 쓰면 어색한 콩글리시가 됩니다. ① 양을 줄일 땐 go easy on ~, ② 아예 뺄 땐 hold the ~ (또는 no ~), ③ 따로 담을 땐 on the side — 이 3개 블록만 조합하면 어떤 브런치·카페 메뉴도 자유자재로 커스텀할 수 있습니다.',
      registerSpectrum: {
        casual: 'Light ice, no onions, dressing on the side, thanks!',
        standard: 'Could you go easy on the ice and put the dressing on the side?',
        formal: 'If possible, could the kitchen prepare it without onions and serve the sauce on the side?'
      }
    },
    {
      title: '원리 03 · 식당 결제 & 포장 문화: split the bill · to-go box',
      coreFormula: 'Could we split the bill? (더치페이) / Could I get a to-go box? (남은 음식 포장)',
      wrongKonglish: "Let's do Dutch pay. And please wrap the rest for take-out.",
      rightNative: 'Could we split the bill? And could I get a to-go box for the rest?',
      explanationKo:
        '"Dutch pay"는 원어민이 거의 쓰지 않는 표현입니다. 인원수대로 나누거나 먹은 만큼 따로 계산할 때는 "Could we split the bill?" 또는 "Could we get separate checks?"라고 말하세요. 또 식당에서 먹다 남은 음식을 싸 갈 때는 "wrap it" 대신 용기를 달라는 의미로 "Could I get a to-go box?"라고 하는 것이 표준입니다.',
      registerSpectrum: {
        casual: 'Can we split this two ways? Also, can I grab a box?',
        standard: 'Could we split the bill, please? And could I get a to-go box?',
        formal: 'Would you mind bringing separate checks and a takeaway container for this dish?'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd7-s01',
      drillType: 'chunk-build',
      promptKo: '아이스 오트 라떼 한 잔 주시겠어요? 얼음은 조금만 넣어 주세요.',
      promptEnHint: '부드러운 주문 오프닝 Could I get ~ 과 go easy on ~ 을 연결하세요.',
      targetEn: 'Could I get an iced oat latte and go easy on the ice?',
      chunks: ['Could I get', 'an iced oat latte', 'and go easy', 'on the ice?'],
      explanationKo: 'Could I get ~으로 주문을 열고, go easy on the ice로 얼음 양을 부드럽게 줄여 요청합니다.'
    },
    {
      id: 'd7-s02',
      drillType: 'konglish-fix',
      promptKo: '"아이스 아메리카노 한 잔 주세요." — 현지 카페에서 가장 자연스러운 표현은?',
      promptEnHint: '명령조 Give me를 피하고 원어민 주문 쿠션을 고르세요.',
      targetEn: 'Could I get an iced Americano, please?',
      wrongKonglishOption: 'Give me one iced Americano, please.',
      explanationKo: '영어권 매장에서는 Give me 대신 Could I get ~? 또는 I\'ll have ~를 사용합니다.'
    },
    {
      id: 'd7-s03',
      drillType: 'active-blank',
      promptKo: '샐러드 드레싱은 따로 담아 주실 수 있나요?',
      promptEnHint: '"따로 담아서"를 뜻하는 3단어 전치사구를 채우세요.',
      targetEn: 'Can I have the dressing on the side?',
      blankData: {
        before: 'Can I have the dressing',
        answer: 'on the side',
        after: '?',
        firstLetterHint: 'o_ t__ s___ (3단어)'
      },
      explanationKo: '소스나 드레싱을 별도 종지에 따로 달라고 할 때는 on the side를 씁니다.'
    },
    {
      id: 'd7-s04',
      drillType: 'chunk-build',
      promptKo: '감자튀김을 작은 샐러드로 바꿀 수 있을까요?',
      promptEnHint: 'swap A(원래 메뉴) for B(바꿀 메뉴) 어순에 주의하세요.',
      targetEn: 'Could I swap the fries for a small salad?',
      chunks: ['Could I', 'swap the fries', 'for a', 'small salad?'],
      explanationKo: 'swap A for B에서 A는 기존 사이드(the fries), B는 원하는 새 메뉴(a small salad)입니다.'
    },
    {
      id: 'd7-s05',
      drillType: 'konglish-fix',
      promptKo: '"우리 계산서 따로 나눠서 결제해도 될까요?" — 자연스러운 표현은?',
      promptEnHint: '콩글리시 Dutch pay를 피하고 정확한 동사구를 고르세요.',
      targetEn: 'Could we split the bill, please?',
      wrongKonglishOption: 'Could we do Dutch pay, please?',
      explanationKo: '계산서를 나눌 때는 split the bill 또는 separate checks를 사용합니다.'
    },
    {
      id: 'd7-s06',
      drillType: 'active-blank',
      promptKo: '샌드위치에서 양파는 빼 주세요.',
      promptEnHint: '특정 재료를 빼 달라는 원어민 동사(1단어)를 넣으세요.',
      targetEn: "I'll have the club sandwich, and please hold the onions.",
      blankData: {
        before: "I'll have the club sandwich, and please",
        answer: 'hold',
        after: 'the onions.',
        firstLetterHint: 'h (4글자)'
      },
      explanationKo: 'hold the ~는 식당 주문에서 "~는 넣지 말고 빼 주세요"라는 실전 핵심 표현입니다.'
    },
    {
      id: 'd7-s07',
      drillType: 'chunk-build',
      promptKo: '영화 보기 전에 길 건너에서 간단히 뭐 좀 먹을래?',
      promptEnHint: '가볍게 요기하다 grab a bite를 활용하세요.',
      targetEn: 'Want to grab a bite across the street before the movie?',
      chunks: ['Want to', 'grab a bite', 'across the street', 'before the movie?'],
      explanationKo: 'grab a bite는 부담 없이 간단히 한 끼 먹자고 제안할 때 가장 많이 씁니다.'
    },
    {
      id: 'd7-s08',
      drillType: 'active-blank',
      promptKo: '남은 파스타 싸 갈 포장 용기 하나 주실 수 있을까요?',
      promptEnHint: '남은 음식 포장 용기를 뜻하는 2단어 표현(하이픈 포함)을 넣으세요.',
      targetEn: 'Could I get a to-go box for the rest of my pasta?',
      blankData: {
        before: 'Could I get a',
        answer: 'to-go box',
        after: 'for the rest of my pasta?',
        firstLetterHint: 't_-g_ b__ (하이픈 포함)'
      },
      explanationKo: '미국·캐나다 식당에서 남은 음식 포장 용기는 to-go box라고 요청합니다.'
    },
    {
      id: 'd7-s09',
      drillType: 'konglish-fix',
      promptKo: '"오트밀크 같은 비유제품 우유 옵션이 있나요?" — 정확한 문장은?',
      promptEnHint: '유제품이 없는(dairy-free) 스펠링과 문장 구조를 확인하세요.',
      targetEn: 'Do you have any dairy-free milk options?',
      wrongKonglishOption: 'Do you have any diary-free milk options?',
      explanationKo: 'dairy(유제품)와 diary(일기장)는 한국인이 자주 헷갈리는 철자 함정입니다!'
    },
    {
      id: 'd7-s10',
      drillType: 'chunk-build',
      promptKo: '여기 처음인데 브런치로 어떤 메뉴를 추천하시나요?',
      promptEnHint: '추천 질문 what do you recommend를 뒤에 연결하세요.',
      targetEn: "It's my first time here, so what do you recommend for brunch?",
      chunks: ["It's my first time", 'here, so', 'what do you recommend', 'for brunch?'],
      explanationKo: '처음 방문한 매장에서는 서버에게 가볍게 추천을 물어보면 실패 확률이 크게 줄어듭니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd7-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '양 조절 구동사 go easy on',
      questionKo: '빈칸에 알맞은 3단어를 써서 "시럽을 조금만 넣어 주세요"라는 요청을 완성하세요.',
      stimulusEn: 'Could you __________ __________ __________ the vanilla syrup, please?',
      answer: 'go easy on',
      explanationKo: '재료를 과하지 않게 적당히 넣어 달라고 할 때 go easy on ~을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "얼음을 적게 넣어 주실 수 있나요?"가 되도록 빈칸(3단어)을 채우세요.',
        stimulusEn: 'Can you __________ __________ __________ the ice?',
        answer: 'go easy on',
        explanationKo: 'Can you 뒤에도 동사원형 go easy on이 그대로 들어갑니다.'
      }
    },
    {
      id: 'd7-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '별도 제공 전치사구 on the side',
      questionKo: '빈칸에 알맞은 3단어를 써서 "소스는 따로 담아 주세요"를 완성하세요.',
      stimulusEn: 'Could I have the spicy sauce __________ __________ __________, please?',
      answer: 'on the side',
      explanationKo: '음식에 뿌리지 않고 따로 제공해 달라는 표현은 on the side입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "드레싱은 따로 주세요"가 되도록 빈칸(3단어)을 채우세요.',
        stimulusEn: 'Please put the dressing __________ __________ __________.',
        answer: 'on the side',
        explanationKo: 'put [소스] on the side 패턴도 매우 자연스럽습니다.'
      }
    },
    {
      id: 'd7-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '메뉴 변경 swap A for B',
      questionKo: '빈칸에 알맞은 동사(1단어)를 써서 "감자튀김을 샐러드로 바꿀 수 있을까요?"를 완성하세요.',
      stimulusEn: 'Could I __________ the fries for a side salad?',
      answer: 'swap',
      acceptableAlt: ['substitute', 'sub'],
      explanationKo: 'swap A for B는 기존 구성(A)을 다른 메뉴(B)로 맞바꿀 때 쓰는 실전 동사입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "일반 우유를 오트밀크로 바꿔 주실 수 있나요?" 빈칸 전치사(1단어)를 쓰세요.',
        stimulusEn: 'Can I swap regular milk __________ oat milk?',
        answer: 'for',
        explanationKo: 'swap A for B의 짝꿍 전치사는 for입니다.'
      }
    },
    {
      id: 'd7-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '재료 제외 hold the ~',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "버거에서 피클은 빼 주세요"를 완성하세요.',
      stimulusEn: "I'll take the cheeseburger, and please __________ the pickles.",
      answer: 'hold',
      explanationKo: '식당에서 특정 재료를 빼 달라고 할 때 hold the + 재료명을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "샐러드에서 호두는 빼 주세요" 빈칸(1단어)을 채우세요.',
        stimulusEn: 'I would like the chicken salad—please __________ the walnuts.',
        answer: 'hold',
        explanationKo: 'please hold the ~는 정중하면서도 간결한 제외 요청입니다.'
      }
    },
    {
      id: 'd7-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '식당 결제 split the bill',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "계산서를 따로 나눌 수 있을까요?"를 완성하세요.',
      stimulusEn: 'Excuse me, could we __________ the bill?',
      answer: 'split',
      acceptableAlt: ['divide'],
      explanationKo: '더치페이/분할 결제는 split the bill이 원어민 표준 연어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "우리 간단히 뭐 좀 먹을래?"가 되도록 빈칸(1단어)을 채우세요.',
        stimulusEn: 'Do you want to __________ a quick bite before the train?',
        answer: 'grab',
        explanationKo: '간단히 요기하다는 grab a bite 연어를 사용합니다.'
      }
    },
    {
      id: 'd7-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '공손한 주문 오프닝',
      questionKo: '해외 카페 카운터에서 음료를 주문할 때 가장 정중하고 자연스러운 문장은?',
      stimulusEn: '상황: 바리스타가 "What can I get started for you?"라고 물었을 때',
      options: [
        'Give me one decaf latte quickly.',
        'Could I get a decaf iced latte to go, please?',
        'I demand a decaf iced latte for take-out.',
        'You make me a decaf iced latte.'
      ],
      answer: 'Could I get a decaf iced latte to go, please?',
      explanationKo: 'Give me / demand는 무례하게 들리며, Could I get ~ to go, please?가 가장 자연스러운 현지 주문 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "디카페인 라떼 한 잔 주시겠어요?" 빈칸(3단어)을 채우세요.',
        stimulusEn: '__________ __________ __________ a decaf latte, please?',
        answer: 'Could I get',
        explanationKo: 'Could I get ~?는 카페와 식당 어디서나 통하는 만능 주문 패턴입니다.'
      }
    },
    {
      id: 'd7-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'swap A for B 방향성',
      questionKo: '"기본 감자튀김 대신 과일을 먹고 싶다"는 뜻이 정확히 전달되는 문장은?',
      stimulusEn: '주의: swap A for B에서 A는 빼는 원래 항목, B는 새로 받고 싶은 항목입니다.',
      options: [
        'Could I swap fresh fruit for the fries?',
        'Could I swap the fries for fresh fruit?',
        'Could I swap the fries to fresh fruit?',
        'Could I swap out fresh fruit with fries?'
      ],
      answer: 'Could I swap the fries for fresh fruit?',
      explanationKo: 'swap A(원래 메뉴: the fries) for B(원하는 메뉴: fresh fruit) 순서와 전치사 for를 정확히 지켜야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "일반 우유를 아몬드밀크로 바꾸고 싶어요" 빈칸(2단어)을 순서대로 쓰세요.',
        stimulusEn: 'I would like to __________ regular milk __________ almond milk.',
        answer: 'swap for',
        explanationKo: 'swap [기존 재료] for [새 재료] 공식을 기억하세요.'
      }
    },
    {
      id: 'd7-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '알레르기 vs 취향 확인',
      questionKo: '식당 서버가 "Is that an allergy or just a preference?"라고 물었을 때 알맞은 대답은?',
      stimulusEn: '상황: 견과류 알레르기는 없지만 단순히 호두 맛을 좋아하지 않는 경우',
      options: [
        "It's just a preference, thanks for asking!",
        "Yes, I have a serious dietary restriction.",
        "Please split the bill for the walnuts.",
        "I want to put my name on the waitlist."
      ],
      answer: "It's just a preference, thanks for asking!",
      explanationKo: '알레르기가 아닌 단순 기호라면 "It\'s just a preference, thanks for asking!"이라고 답해 주방을 안심시켜 줍니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "저는 견과류 알레르기가 있어요"가 되도록 빈칸(1단어)을 채우세요.',
        stimulusEn: 'I have a nut __________, so please leave out any peanuts.',
        answer: 'allergy',
        explanationKo: '알레르기는 have a(n) ~ allergy로 정확히 알립니다.'
      }
    },
    {
      id: 'd7-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '혼동 어휘 dairy vs diary',
      questionKo: '빈칸에 들어갈 유제품 제한 표현으로 철자와 뜻이 모두 정확한 것은?',
      stimulusEn: 'My friend is lactose intolerant, so she always orders __________ coffee drinks.',
      options: ['diary-free', 'dairy-free', 'daily-free', 'dearly-free'],
      answer: 'dairy-free',
      explanationKo: 'dairy(유제품)는 a가 먼저, i가 나중입니다. diary는 일기장, daily는 매일의 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "글루텐이 들어 있지 않은 빵이 있나요?" 빈칸(하이픈 포함)을 채우세요.',
        stimulusEn: 'Do you have any __________ bread options?',
        answer: 'gluten-free',
        explanationKo: '[재료]-free 형식으로 특정 성분이 없는 메뉴를 물을 수 있습니다.'
      }
    },
    {
      id: 'd7-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '남은 음식 포장 & 대기 명단',
      questionKo: '인기 브런치 카페에 자리가 없을 때 대기 명단에 이름을 올려 달라고 하는 가장 자연스러운 표현은?',
      stimulusEn: '상황: 직원이 "20분 정도 대기하셔야 합니다"라고 안내한 직후',
      options: [
        'Can I put my name on the waitlist?',
        'Can I get a to-go box for the table?',
        'Can I keep the change for twenty minutes?',
        'Can I refill my seat, please?'
      ],
      answer: 'Can I put my name on the waitlist?',
      explanationKo: 'put one\'s name on the waitlist는 식당 대기 명단에 이름을 올릴 때 쓰는 핵심 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "잔돈은 가지세요"를 완성하도록 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Here is twenty dollars—please __________ __________ change.',
        answer: 'keep the',
        explanationKo: 'keep the change는 현금 결제 후 잔돈을 팁으로 남길 때 쓰는 관용구입니다.'
      }
    },
    {
      id: 'd7-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '커스텀 카페 주문 배열',
      questionKo: '주어진 청크를 올바른 어순으로 배열하여 완전한 문장을 작성하세요.',
      stimulusEn: '[ on the ice? / an iced latte / Could I get / and go easy ]',
      answer: 'Could I get an iced latte and go easy on the ice?',
      explanationKo: '[주문] Could I get an iced latte + [접속사+커스텀] and go easy on the ice? 순으로 조립합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "소금은 조금만 넣어 주실 수 있나요?"를 통문장으로 영작하세요.',
        stimulusEn: '힌트: Could you / go easy on / the salt?',
        answer: 'Could you go easy on the salt?',
        explanationKo: 'Could you go easy on + 명사? 어순을 유지합니다.'
      }
    },
    {
      id: 'd7-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '소스 별도 + 재료 제외 영작',
      questionKo: '주어진 청크를 올바르게 배열하여 샐러드 주문 문장을 완성하세요.',
      stimulusEn: '[ on the side. / the chicken salad / I would like / with the dressing ]',
      answer: 'I would like the chicken salad with the dressing on the side.',
      acceptableAlt: ["I'd like the chicken salad with the dressing on the side."],
      explanationKo: 'I would like [메뉴] + with [소스] on the side 어순으로 깔끔하게 한 문장을 만듭니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "소스 따로 담아 주실 수 있나요?"를 영작하세요.',
        stimulusEn: '힌트: Can I have / the sauce / on the side?',
        answer: 'Can I have the sauce on the side?',
        explanationKo: 'Can I have [재료] on the side?는 식당에서 가장 자주 쓰이는 짧은 요청문입니다.'
      }
    },
    {
      id: 'd7-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'swap A for B 통문장',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 모두 사용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 감자튀김을 신선한 과일로 바꿀 수 있을까요? (Could I / swap / the fries / for / fresh fruit)',
      answer: 'Could I swap the fries for fresh fruit?',
      explanationKo: 'Could I swap [기존 메뉴] for [새 메뉴]? 구조를 정확히 지킵니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "일반 우유를 오트밀크로 바꿀 수 있을까요?" 영작하세요.',
        stimulusEn: '힌트: Could I / swap / regular milk / for / oat milk?',
        answer: 'Could I swap regular milk for oat milk?',
        explanationKo: 'regular milk가 for 앞에, oat milk가 for 뒤에 옵니다.'
      }
    },
    {
      id: 'd7-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장의 부자연스러운 표현 2곳을 고쳐 원어민 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Give me a box for take-out, and let us do Dutch pay.',
      answer: 'Could I get a to-go box, and could we split the bill?',
      acceptableAlt: ['Can I get a to-go box, and can we split the bill?'],
      explanationKo: '① Give me a box for take-out → Could I get a to-go box, ② do Dutch pay → split the bill로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 다음 오류 문장을 바르게 고쳐 쓰세요: Give me coffee and delete the syrup.',
        stimulusEn: 'Could I get과 hold the를 사용해 자연스럽게 교정하세요.',
        answer: 'Could I get a coffee and hold the syrup?',
        explanationKo: '명령조 Give me는 Could I get으로, 어색한 delete는 hold the로 고칩니다.'
      }
    },
    {
      id: 'd7-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 한영 통문장 영작',
      questionKo: '다음 우리말을 오늘 배운 핵심 표현(grab a bite)을 넣어 영작하세요.',
      stimulusEn: '우리말: 회의 시작 전에 아래층에서 간단히 뭐 좀 먹을래요? (힌트: Want to / grab a bite / downstairs / before the meeting?)',
      answer: 'Want to grab a bite downstairs before the meeting?',
      acceptableAlt: ['Do you want to grab a bite downstairs before the meeting?'],
      explanationKo: 'Want to grab a bite + 장소(downstairs) + 시간(before the meeting) 순으로 연결합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "여기 처음인데 어떤 메뉴를 추천하시나요?"를 영작하세요.',
        stimulusEn: "힌트: It's my first time here. / What do you recommend?",
        answer: "It's my first time here. What do you recommend?",
        explanationKo: '짧은 배경 설명 뒤에 What do you recommend?를 붙이면 자연스러운 대화가 열립니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn: "Welcome in! What can I get started for you today—any coffee or something to eat?",
    openingQuestionKo: '어서 오세요! 오늘 음료나 식사 중에 무엇부터 주문 도와드릴까요?',
    followUpQuestionEn: 'Got it! Would you like to customize anything—like less ice, dairy-free milk, or sauces on the side?',
    followUpQuestionKo: '알겠습니다! 얼음 적게, 비유제품 우유, 혹은 소스 따로 담기처럼 따로 요청하실 옵션이 있으신가요?',
    recommendedChunks: ['Could I get ~?', 'go easy on ~', 'on the side', 'swap A for B', 'split the bill'],
    modelAnswerEn:
      "Hi! Could I get an iced oat latte and go easy on the ice? I'll also have the grilled chicken salad, and could you put the dressing on the side?"
  }
};
