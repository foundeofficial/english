import type { SpeakingPromptItem } from '../types/v6.ts';

export const SPEAKING_PROMPTS_16: SpeakingPromptItem[] = [
  /* =========================================================================
   * Stage 1 · 초등 수행평가 스피킹 (A1, prep 15s / speak 45s) — sp-01 ~ sp-04
   * ========================================================================= */
  {
    id: 'sp-01',
    stage: 'stage1',
    categoryBadge: '초등 수행평가 스피킹',
    cefrBadge: 'A1',
    titleKo: '내가 가장 좋아하는 취미 (My Favorite Hobby)',
    promptEn:
      'Tell me about your favorite hobby. What do you like to do in your free time, and why do you enjoy it?',
    promptKo:
      '가장 좋아하는 취미에 대해 말해 보세요. 여가 시간에 무엇을 하는 것을 좋아하고, 왜 그 활동을 즐기나요?',
    prepSec: 15,
    speakSec: 45,
    outlineStepsKo: [
      '① 핵심 결론: 내가 가장 좋아하는 취미가 무엇이고 언제 즐기는지 한 문장으로 밝히기',
      '② 이유·구체적 예시: 그 취미가 좋은 이유와 최근에 만든 작품·경험을 구체적으로 말하기',
      '③ 마무리 한 마디: 취미를 함께 나누는 즐거움과 앞으로의 작은 목표로 끝맺기',
    ],
    keyExpressions: [
      'favorite hobby',
      'in my free time',
      'at least twice a week',
      'feel relaxed',
      'share it with',
    ],
    modelAnswerEn:
      'My favorite hobby is drawing cute animals in my free time. I usually sit at my desk and draw with colored pencils at least twice a week. I love this hobby because it helps me feel relaxed after a busy school day. Last weekend, I drew a tiny puppy wearing a yellow hat, and my little sister loved it. When I finish a nice picture, I always share it with my family and friends. I hope to draw my own storybook someday.',
    modelAnswerKo:
      '제가 가장 좋아하는 취미는 여가 시간에 귀여운 동물을 그리는 것입니다. 저는 보통 책상에 앉아 일주일에 적어도 두 번은 색연필로 그림을 그립니다. 바쁜 학교 하루를 마친 뒤 마음을 편안하게 해 주기 때문에 이 취미를 정말 좋아합니다. 지난 주말에는 노란 모자를 쓴 작은 강아지를 그렸는데 여동생이 무척 좋아했습니다. 멋진 그림을 완성하면 저는 언제나 가족과 친구들에게 보여 줍니다. 언젠가는 저만의 동화책을 그려 보고 싶습니다.',
  },
  {
    id: 'sp-02',
    stage: 'stage1',
    categoryBadge: '초등 수행평가 스피킹',
    cefrBadge: 'A1',
    titleKo: '나의 가장 친한 친구 소개하기 (My Best Friend)',
    promptEn:
      'Introduce your best friend. What is your friend like, and what do you usually do together?',
    promptKo:
      '가장 친한 친구를 소개해 보세요. 그 친구는 어떤 성격이고, 보통 함께 무엇을 하나요?',
    prepSec: 15,
    speakSec: 45,
    outlineStepsKo: [
      '① 핵심 결론: 가장 친한 친구의 이름과 어떻게 알게 되었는지 먼저 소개하기',
      '② 이유·구체적 예시: 친구의 좋은 성격과 방과 후에 자주 함께하는 활동 들려주기',
      '③ 마무리 한 마디: 친구에게 고마운 마음과 오래 친하게 지내고 싶은 다짐으로 마무리하기',
    ],
    keyExpressions: [
      'best friend',
      'kind and funny',
      'makes me laugh',
      'hang out together',
      'so lucky to have',
    ],
    modelAnswerEn:
      'I want to introduce my best friend, Jiho. We are in the same class at school, and we met two years ago. Jiho is very kind and funny. Whenever I feel sad or worried, he tells silly jokes and makes me laugh right away. After school, we like to hang out together at the park and ride our bikes. Sometimes we eat sweet snacks and talk about soccer. I feel so lucky to have such a wonderful friend like Jiho, and I want to stay close forever.',
    modelAnswerKo:
      '제 가장 친한 친구 지호를 소개하고 싶습니다. 우리는 학교에서 같은 반이고 2년 전에 처음 만났습니다. 지호는 정말 다정하고 재미있는 친구입니다. 제가 슬프거나 걱정이 될 때마다 엉뚱한 농담을 해서 금세 저를 웃게 만들어 줍니다. 방과 후에는 공원에서 함께 어울리며 자전거를 타는 것을 좋아합니다. 가끔 달콤한 간식을 먹으면서 축구 이야기도 나눕니다. 지호처럼 멋진 친구가 있어서 정말 행운이라고 느끼며, 앞으로도 영원히 친하게 지내고 싶습니다.',
  },
  {
    id: 'sp-03',
    stage: 'stage1',
    categoryBadge: '초등 수행평가 스피킹',
    cefrBadge: 'A1',
    titleKo: '나의 장래 희망과 이유 (My Dream Job)',
    promptEn:
      'What is your dream job when you grow up? Explain why you want that job and how you are preparing for it.',
    promptKo:
      '크면 어떤 직업을 갖고 싶나요? 그 직업을 원하는 이유와 지금 어떻게 준비하고 있는지 말해 보세요.',
    prepSec: 15,
    speakSec: 45,
    outlineStepsKo: [
      '① 핵심 결론: 어른이 되었을 때 이루고 싶은 장래 희망을 또렷하게 말하기',
      '② 이유·구체적 예시: 그 직업을 꿈꾸게 된 계기와 지금 실천하는 작은 노력 설명하기',
      '③ 마무리 한 마디: 꿈을 이루기 위한 다짐으로 힘차게 끝맺기',
    ],
    keyExpressions: [
      'dream job',
      'when I grow up',
      'take care of',
      'work hard',
      'make my dream come true',
    ],
    modelAnswerEn:
      "My dream job is to become an animal doctor when I grow up. I really love dogs, cats, and even small birds. I want to take care of sick animals and help them feel strong and healthy again. Last year, a kind vet helped my grandmother's puppy, and I thought that was so cool. Right now, I read many animal books and study science carefully at school. I will keep learning and work hard every day to make my dream come true.",
    modelAnswerKo:
      '제 장래 희망은 커서 동물 의사가 되는 것입니다. 저는 강아지와 고양이, 그리고 작은 새들까지 정말 좋아합니다. 아픈 동물들을 돌보며 다시 튼튼하고 건강해지도록 돕고 싶습니다. 작년에 친절한 수의사 선생님께서 할머니 댁 강아지를 치료해 주셨는데 정말 멋져 보였습니다. 지금 저는 동물 책을 많이 읽고 학교에서 과학 공부도 열심히 하고 있습니다. 제 꿈을 이루기 위해 매일 꾸준히 배우고 노력하겠습니다.',
  },
  {
    id: 'sp-04',
    stage: 'stage1',
    categoryBadge: '초등 수행평가 스피킹',
    cefrBadge: 'A1',
    titleKo: '즐거운 주말 보내기 (My Favorite Weekend Activity)',
    promptEn:
      'How do you like to spend your weekend? Describe your favorite weekend activity and who you do it with.',
    promptKo:
      '주말을 어떻게 보내는 것을 좋아하나요? 가장 좋아하는 주말 활동과 누구와 함께하는지 설명해 보세요.',
    prepSec: 15,
    speakSec: 45,
    outlineStepsKo: [
      '① 핵심 결론: 주말에 가장 기다려지는 활동과 함께하는 사람을 먼저 소개하기',
      '② 이유·구체적 예시: 준비하는 음식과 야외에서 즐기는 구체적인 놀이 장면 묘사하기',
      '③ 마무리 한 마디: 그 시간이 새 한 주를 시작할 에너지를 준다는 소감으로 마무리하기',
    ],
    keyExpressions: [
      'look forward to',
      'on weekends',
      'go on a picnic',
      'fresh air',
      'full of energy',
    ],
    modelAnswerEn:
      'I always look forward to Saturday mornings on weekends. My favorite weekend activity is to go on a picnic with my family near the river. My mom packs warm sandwiches and sweet strawberries, and my dad brings a big blue mat. After lunch, we play badminton and enjoy the cool fresh air together. Sometimes we even watch cute ducks swimming in the water. Spending sunny weekends outdoors makes me happy and full of energy for the new school week.',
    modelAnswerKo:
      '저는 주말 토요일 아침을 언제나 손꼽아 기다립니다. 제가 가장 좋아하는 주말 활동은 가족과 함께 강가로 소풍을 가는 것입니다. 엄마는 따뜻한 샌드위치와 달콤한 딸기를 싸 주시고, 아빠는 커다란 파란 돗자리를 챙겨 오십니다. 점심을 먹은 뒤에는 함께 배드민턴을 치며 시원하고 상쾌한 공기를 마십니다. 가끔 물에서 헤엄치는 귀여운 오리들도 구경합니다. 햇살 좋은 주말을 야외에서 보내고 나면 행복해지고 새로운 한 주를 위한 에너지가 가득 충전됩니다.',
  },

  /* =========================================================================
   * Stage 2 · 중학 수행평가 & OPIc 입문 (A2–B1, prep 15s / speak 60s) — sp-05 ~ sp-08
   * ========================================================================= */
  {
    id: 'sp-05',
    stage: 'stage2',
    categoryBadge: '중학 수행평가 · OPIc 입문',
    cefrBadge: 'A2–B1',
    titleKo: '내가 사는 동네 소개하기 (My Neighborhood)',
    promptEn:
      'Tell me about the neighborhood where you live. What does it look like, what facilities are nearby, and what do you like most about it?',
    promptKo:
      '지금 살고 있는 동네를 소개해 주세요. 동네 분위기는 어떤지, 주변에 어떤 시설이 있는지, 그리고 가장 마음에 드는 점은 무엇인지 말해 보세요.',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 내가 사는 동네의 위치와 전반적인 분위기를 한 문장으로 소개하기',
      '② 이유·구체적 예시: 걸어서 갈 수 있는 편의시설·교통과 내가 가장 아끼는 장소 묘사하기',
      '③ 마무리 한 마디: 이 동네가 살기 좋은 이유를 정리하며 애정을 담아 마무리하기',
    ],
    keyExpressions: [
      'quiet and peaceful',
      'within walking distance',
      'convenient to get around',
      'my favorite spot',
      'a great place to live',
    ],
    modelAnswerEn:
      "I live in a quiet and peaceful neighborhood on the outskirts of the city, and I really love it here. Even though it isn't crowded, almost everything I need is within walking distance. There are several cozy bakeries, a public library, and two small grocery stores right near my apartment. Also, the subway station is only five minutes away, so it's super convenient to get around Seoul. My favorite spot in the area is the green walking trail along the stream. Every evening, neighbors jog, walk their dogs, and chat happily there. Because the streets are clean and everyone feels friendly and safe, I truly think my neighborhood is a great place to live.",
    modelAnswerKo:
      '저는 도시 외곽의 조용하고 평화로운 동네에 살고 있는데 이곳이 정말 마음에 듭니다. 번잡하지 않으면서도 필요한 시설이 대부분 걸어서 갈 수 있는 거리에 있습니다. 아파트 바로 근처에 아늑한 빵집 여러 곳과 공공 도서관, 작은 마트 두 곳이 자리하고 있습니다. 또 지하철역도 걸어서 5분 거리라 서울 곳곳을 이동하기에 매우 편리합니다. 동네에서 제가 가장 좋아하는 곳은 개천을 따라 이어진 푸른 산책로입니다. 매일 저녁 이웃들이 조깅을 하거나 반려견을 산책시키며 즐겁게 이야기를 나눕니다. 거리가 깨끗하고 모두가 친절하며 안전하게 느껴져서 우리 동네가 정말 살기 좋은 곳이라고 생각합니다.',
  },
  {
    id: 'sp-06',
    stage: 'stage2',
    categoryBadge: '중학 수행평가 · OPIc 입문',
    cefrBadge: 'A2–B1',
    titleKo: '가장 기억에 남는 여행 (A Memorable Trip)',
    promptEn:
      'Talk about one of the most memorable trips you have ever taken. Where did you go, what did you do there, and why do you still remember it so clearly?',
    promptKo:
      '지금까지 다녀온 여행 중 가장 기억에 남는 여행을 이야기해 주세요. 어디에 갔고, 무엇을 했으며, 왜 아직도 생생하게 기억에 남나요?',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 가장 기억에 남는 여행지와 누구와 언제 다녀왔는지 소개하기',
      '② 이유·구체적 예시: 여행 중 본 인상적인 풍경과 현지 음식·체험 에피소드 풀어내기',
      '③ 마무리 한 마디: 그 여행이 남긴 소중한 추억과 재방문 희망으로 끝맺기',
    ],
    keyExpressions: [
      'one of the most memorable',
      'escape from',
      'breathtaking view',
      'local food',
      'unforgettable memories',
    ],
    modelAnswerEn:
      "One of the most memorable trips I've ever taken was a three-day family vacation to Jeju Island last autumn. We wanted to escape from our busy daily schedule and spend some quality time together. On the second morning, we woke up early and climbed Seongsan Ilchulbong to watch the sunrise. When we reached the top, the orange sky over the blue ocean was a truly breathtaking view. Later that afternoon, we rode bicycles along the coast and tried delicious local food like grilled fish and sweet tangerines. Even though we got a little tired from walking all day, we laughed constantly. That trip gave me unforgettable memories, and I definitely want to visit Jeju again someday.",
    modelAnswerKo:
      '제가 다녀온 여행 중 가장 기억에 남는 것은 지난가을 가족과 함께 떠난 2박 3일 제주도 여행입니다. 바쁜 일상에서 벗어나 함께 알찬 시간을 보내고 싶어 떠난 여행이었습니다. 둘째 날 아침에는 일찍 일어나 일출을 보려고 성산일출봉에 올랐습니다. 정상에 닿았을 때 푸른 바다 위로 펼쳐진 주황빛 하늘은 정말 숨이 멎을 듯한 장관이었습니다. 그날 오후에는 해안 도로를 따라 자전거를 타고 생선구이와 달콤한 귤 같은 맛있는 현지 음식을 맛보았습니다. 하루 종일 걸어서 조금 피곤했지만 웃음이 끊이지 않았습니다. 그 여행은 제게 잊지 못할 추억을 남겨 주었고, 언젠가 꼭 제주도를 다시 찾고 싶습니다.',
  },
  {
    id: 'sp-07',
    stage: 'stage2',
    categoryBadge: '중학 수행평가 · OPIc 입문',
    cefrBadge: 'A2–B1',
    titleKo: '나의 하루 일과와 습관 (My Daily Routine)',
    promptEn:
      'Describe your typical daily routine on weekdays. What habits help you stay organized and make the most of your day?',
    promptKo:
      '평일 하루 일과를 설명해 주세요. 하루를 체계적으로 보내고 알차게 활용하는 데 도움이 되는 나만의 습관은 무엇인가요?',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 평일 아침 기상 시간과 하루를 여는 나만의 작은 습관 소개하기',
      '② 이유·구체적 예시: 방과 후 할 일 목록 작성과 저녁 휴식 루틴을 시간 순서로 말하기',
      '③ 마무리 한 마디: 규칙적인 습관이 하루의 집중력과 마음의 여유에 주는 효과 정리하기',
    ],
    keyExpressions: [
      'on weekdays',
      'start my day',
      'make a to-do list',
      'stick to a schedule',
      'wind down',
    ],
    modelAnswerEn:
      'On weekdays, I usually wake up around seven in the morning and try to follow a steady routine. I like to start my day with a glass of warm water and ten minutes of light stretching so I feel awake before school. After classes finish, I take a short break and then make a to-do list for my homework and English review. Writing everything down helps me stick to a schedule instead of wasting time on my phone. In the evening, I eat dinner with my family and go for a quick walk around the block. Before bed, I read a few pages of a novel to wind down. Having these simple daily habits keeps me calm and productive.',
    modelAnswerKo:
      '평일에 저는 보통 아침 7시쯤 일어나 일정한 일과를 지키려고 노력합니다. 등교 전에 정신이 맑아지도록 따뜻한 물 한 잔과 10분간의 가벼운 스트레칭으로 하루를 시작합니다. 수업이 끝나면 짧게 쉰 뒤 숙제와 영어 복습을 위한 할 일 목록을 작성합니다. 해야 할 일을 적어 두면 휴대폰으로 시간을 낭비하지 않고 계획을 지키는 데 큰 도움이 됩니다. 저녁에는 가족과 식사하고 동네 한 바퀴를 가볍게 산책합니다. 잠자리에 들기 전에는 긴장을 풀기 위해 소설책을 몇 페이지 읽습니다. 이런 소소한 일상 습관 덕분에 하루를 차분하고 알차게 보낼 수 있습니다.',
  },
  {
    id: 'sp-08',
    stage: 'stage2',
    categoryBadge: '중학 수행평가 · OPIc 입문',
    cefrBadge: 'A2–B1',
    titleKo: '내가 자주 가는 카페와 좋아하는 음식 (My Favorite Cafe & Food)',
    promptEn:
      'Tell me about a cafe or restaurant you visit often. What kind of atmosphere does it have, and what food or drink do you usually order there?',
    promptKo:
      '자주 가는 카페나 음식점을 소개해 주세요. 어떤 분위기를 가지고 있고, 그곳에서 보통 어떤 음식이나 음료를 주문하나요?',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 자주 찾는 단골 카페의 위치와 가장 매력적인 분위기 소개하기',
      '② 이유·구체적 예시: 즐겨 시키는 메뉴의 맛과 그곳에서 친구와 보내는 시간 묘사하기',
      '③ 마무리 한 마디: 주변 사람들에게 추천하고 싶은 이유를 담아 깔끔하게 마무리하기',
    ],
    keyExpressions: [
      'regular customer',
      'cozy atmosphere',
      'treat myself',
      'freshly baked',
      'highly recommend',
    ],
    modelAnswerEn:
      "There is a small neighborhood cafe near my school called Sunny Bean, and I've become a regular customer there over the past year. What I love most is its cozy atmosphere, with warm wooden tables, soft jazz music, and plenty of sunlight coming through the big windows. Whenever I finish a tough exam, I like to treat myself to an iced chocolate and a freshly baked butter croissant. The croissant is crispy on the outside, soft inside, and smells amazing the moment you walk through the door. I often sit by the window with my friends to review notes or just catch up on our week. If you ever visit my area, I highly recommend stopping by for a relaxing break.",
    modelAnswerKo:
      '학교 근처에 서니 빈이라는 작은 동네 카페가 있는데, 지난 1년 사이에 그곳 단골손님이 되었습니다. 제가 가장 좋아하는 점은 따뜻한 원목 테이블과 잔잔한 재즈 음악, 큰 창으로 들어오는 햇살이 어우러진 아늑한 분위기입니다. 어려운 시험을 끝낼 때마다 아이스 초콜릿과 갓 구운 버터 크루아상으로 제게 작은 보상을 해 주곤 합니다. 크루아상은 겉은 바삭하고 속은 부드러우며 문을 열고 들어서는 순간 고소한 향이 정말 끝내줍니다. 저는 친구들과 창가에 앉아 필기를 복습하거나 한 주간 밀린 이야기를 나누곤 합니다. 저희 동네에 오실 일이 있다면 편안히 쉬어 가기에 이곳을 강력히 추천합니다.',
  },

  /* =========================================================================
   * Stage 3 · 고등 수행평가 · 영어 면접 · TOEFL (B2, prep 15s / speak 60s) — sp-09 ~ sp-12
   * ========================================================================= */
  {
    id: 'sp-09',
    stage: 'stage3',
    categoryBadge: '고등 수행평가 · 면접 · TOEFL',
    cefrBadge: 'B2',
    titleKo: '온라인 수업 vs 대면 수업 장단점 (Online vs. In-Person Classes)',
    promptEn:
      'Some students prefer online classes, while others prefer traditional in-person classes. Which learning format do you think is more effective, and why? Support your opinion with specific reasons.',
    promptKo:
      '온라인 수업을 선호하는 학생도 있고 전통적인 대면 수업을 선호하는 학생도 있습니다. 어떤 학습 방식이 더 효과적이라고 생각하나요? 구체적인 이유를 들어 자신의 의견을 말해 보세요.',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 온라인 수업의 장점을 인정하되 대면 수업이 더 효과적이라는 입장을 분명히 밝히기',
      '② 이유·구체적 예시: 높은 집중력과 즉각적인 피드백·상호작용을 실제 수업 경험으로 뒷받침하기',
      '③ 마무리 한 마디: 온라인 자료는 보조 수단으로, 대면 수업은 핵심 성장의 장으로 정리하기',
    ],
    keyExpressions: [
      'offer flexibility',
      'in-person classes',
      'stay focused',
      'immediate feedback',
      'meaningful interaction',
    ],
    modelAnswerEn:
      'While online lessons certainly offer flexibility and save commuting time, I firmly believe that in-person classes are far more effective for deep learning. First, being physically present in a classroom makes it much easier to stay focused. At home, phone notifications and a comfortable environment constantly pull our attention away from the screen. Second, face-to-face classrooms allow immediate feedback and spontaneous discussion. Last semester, when I struggled with a tricky math concept, my teacher noticed my confused expression right away and explained it using a simple diagram on the board. That kind of meaningful interaction with teachers and classmates is hard to replicate through a webcam. Therefore, although online resources are useful for review, in-person classes remain essential for genuine academic growth.',
    modelAnswerKo:
      '온라인 수업이 분명 유연성을 제공하고 통학 시간을 줄여 주기는 하지만, 저는 깊이 있는 학습에는 대면 수업이 훨씬 더 효과적이라고 확신합니다. 첫째, 교실에 직접 앉아 있으면 집중력을 유지하기가 훨씬 쉽습니다. 집에서는 휴대폰 알림과 편안한 환경이 끊임없이 화면에서 주의를 분산시킵니다. 둘째, 대면 교실에서는 즉각적인 피드백과 자연스러운 토론이 가능합니다. 지난 학기에 까다로운 수학 개념으로 애를 먹을 때 선생님께서 제 혼란스러운 표정을 바로 알아채시고 칠판에 간단한 도표를 그려 설명해 주셨습니다. 선생님·급우들과 나누는 이런 의미 있는 상호작용은 웹캠으로는 재현하기 어렵습니다. 따라서 온라인 자료가 복습에 유용하더라도 진정한 학업 성장을 위해서는 대면 수업이 여전히 필수적입니다.',
  },
  {
    id: 'sp-10',
    stage: 'stage3',
    categoryBadge: '고등 수행평가 · 면접 · TOEFL',
    cefrBadge: 'B2',
    titleKo: '일상에서 실천하는 환경 보호 (Protecting the Environment Daily)',
    promptEn:
      'Many people worry about climate change, yet feel their daily actions are too small to matter. What practical habits can students practice every day to protect the environment, and why do they count?',
    promptKo:
      '많은 사람들이 기후 변화를 걱정하면서도 개인의 작은 실천이 큰 의미가 없을까 봐 망설입니다. 학생들이 일상에서 실천할 수 있는 현실적인 환경 보호 습관은 무엇이며, 왜 중요할까요?',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 학생들의 작은 친환경 습관이 모이면 실질적인 변화를 만든다는 입장 제시하기',
      '② 이유·구체적 예시: 텀블러 사용·분리배출·대중교통 이용 등 직접 실천하는 구체적 행동 들기',
      '③ 마무리 한 마디: 개인의 실천이 소비 흐름과 주변의 환경 의식을 바꾼다는 점으로 마무리하기',
    ],
    keyExpressions: [
      'make a real difference',
      'single-use plastics',
      'reusable tumbler',
      'reduce waste',
      'raises awareness',
    ],
    modelAnswerEn:
      "I believe small everyday habits can make a real difference when millions of students practice them consistently. Personally, I try to cut down on single-use plastics by carrying a reusable tumbler to school and refusing unnecessary plastic bags at convenience stores. At home, I carefully sort recyclables and unplug electronics that aren't in use to save electricity. On top of that, taking public transportation or walking short distances instead of getting a car ride helps reduce both emissions and traffic. Critics sometimes argue that individual efforts barely reduce waste compared to big industries, yet our daily choices shape consumer demand. More importantly, visible action raises awareness among friends and family, inspiring a broader culture of environmental responsibility.",
    modelAnswerKo:
      '저는 수백만 명의 학생들이 매일 작은 습관을 꾸준히 실천하면 분명 실질적인 변화를 만들 수 있다고 믿습니다. 개인적으로 저는 학교에 다회용 텀블러를 들고 다니고 편의점에서 불필요한 비닐봉지를 거절함으로써 일회용 플라스틱을 줄이려 노력합니다. 집에서는 재활용품을 꼼꼼히 분리배출하고 전기를 아끼기 위해 쓰지 않는 가전제품의 플러그를 뽑아 둡니다. 게다가 차를 얻어 타는 대신 대중교통을 이용하거나 가까운 거리를 걸으면 탄소 배출과 교통 혼잡을 함께 줄일 수 있습니다. 일각에서는 거대 산업에 비해 개인의 노력이 쓰레기를 거의 줄이지 못한다고 말하지만, 우리의 일상적인 선택이 곧 소비자 수요를 바꿉니다. 무엇보다 눈에 보이는 실천은 친구와 가족의 인식을 높여 더 넓은 환경 책임 문화를 이끌어 냅니다.',
  },
  {
    id: 'sp-11',
    stage: 'stage3',
    categoryBadge: '고등 수행평가 · 면접 · TOEFL',
    cefrBadge: 'B2',
    titleKo: '내 생각을 바꿔놓은 책이나 영화 (A Book or Film That Changed Me)',
    promptEn:
      'Describe a book or film that significantly changed the way you see yourself or the world. What was its core message, and how has it influenced your attitude?',
    promptKo:
      '자기 자신이나 세상을 바라보는 시각을 크게 바꿔 놓은 책이나 영화를 소개해 주세요. 핵심 메시지는 무엇이었고, 본인의 태도에 어떤 영향을 주었나요?',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 내 관점을 바꾼 책이나 영화 제목과 어떤 상황에서 보게 되었는지 밝히기',
      '② 이유·구체적 예시: 작품의 핵심 메시지와 그 덕분에 도전하게 된 내 실제 행동 변화 말하기',
      '③ 마무리 한 마디: 실패를 성장의 일부로 받아들이게 된 지속적인 교훈으로 끝맺기',
    ],
    keyExpressions: [
      'shifted my perspective',
      'turned out to be',
      'step outside my comfort zone',
      'embrace failure',
      'lasting impact',
    ],
    modelAnswerEn:
      "A film that genuinely shifted my perspective is The Secret Life of Walter Mitty. I watched it during a stressful exam period when I felt trapped in a repetitive routine, and it turned out to be exactly the inspiration I needed. The movie follows an ordinary man who stops merely daydreaming and embarks on a bold journey across the globe. Its message hit me hard: waiting for the perfect moment only keeps us stuck in fear. After watching it, I decided to step outside my comfort zone by joining my school's English debate club, even though I was nervous about speaking in public. It taught me to embrace failure as part of growth, and that lesson has had a lasting impact on my confidence.",
    modelAnswerKo:
      '제 시각을 진정으로 바꿔 놓은 영화는 《월터의 상상은 현실이 된다》입니다. 반복적인 일상에 갇힌 듯 답답하던 시험 기간에 이 영화를 보았는데, 딱 저에게 필요했던 영감이 되어 주었습니다. 영화는 그저 공상만 하던 평범한 남자가 전 세계를 누비는 과감한 여정에 나서는 이야기를 담고 있습니다. 완벽한 순간만 기다리다가는 두려움 속에 머물 뿐이라는 메시지가 제 마음을 강하게 울렸습니다. 영화를 본 뒤 대중 앞에서 말하는 것이 떨렸지만 익숙한 안전지대를 벗어나 학교 영어 토론 동아리에 가입하기로 결심했습니다. 실패를 성장의 일부로 받아들이는 법을 배웠고, 그 교훈은 제 자신감에 오래도록 깊은 영향을 주고 있습니다.',
  },
  {
    id: 'sp-12',
    stage: 'stage3',
    categoryBadge: '고등 수행평가 · 면접 · TOEFL',
    cefrBadge: 'B2',
    titleKo: '학업 스트레스와 휴식의 균형 (Balancing Study and Rest)',
    promptEn:
      'High school students often sacrifice sleep and rest to earn better grades. Do you think scheduled rest actually improves academic performance? Explain your view with examples.',
    promptKo:
      '고등학생들은 더 좋은 성적을 위해 잠과 휴식을 포기하는 경우가 많습니다. 계획적인 휴식이 실제로 학업 성취도를 높여 준다고 생각하나요? 예시를 들어 설명해 보세요.',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 잠과 휴식을 줄이는 공부보다 계획적인 균형이 성적을 높인다는 주장 밝히기',
      '② 이유·구체적 예시: 밤샘 공부의 실패 경험과 50분 집중·10분 휴식 및 충분한 수면의 효과 비교하기',
      '③ 마무리 한 마디: 현명한 휴식은 게으름이 아니라 지속 가능한 성장의 토대임을 강조하며 마무리하기',
    ],
    keyExpressions: [
      'academic burnout',
      'strike a balance',
      'long-term memory',
      'recharge my mind',
      'sustainable progress',
    ],
    modelAnswerEn:
      "Many students assume that studying late into the night guarantees top scores, yet ignoring rest quickly leads to academic burnout. From my own experience, learning to strike a balance between intense focus and intentional breaks actually boosts my grades. Last year, whenever I pulled all-nighters before midterms, I stared at my textbooks for hours without absorbing anything. Once I switched to fifty-minute study blocks followed by ten-minute walks and seven hours of sleep, my concentration sharpened dramatically. Science also confirms that adequate sleep helps the brain transfer new information into long-term memory. Taking short breaks to listen to music or stretch lets me recharge my mind instead of feeling guilty. Ultimately, smart rest isn't laziness—it's the foundation of sustainable progress.",
    modelAnswerKo:
      '많은 학생들이 밤늦게까지 공부하면 높은 점수가 보장된다고 여기지만, 휴식을 무시하면 금세 학업 번아웃에 빠지게 됩니다. 제 경험상 깊은 집중과 의도적인 휴식 사이의 균형을 잡는 법을 배웠을 때 오히려 성적이 올랐습니다. 작년에 중간고사를 앞두고 밤을 새울 때마다 몇 시간씩 교과서만 들여다보고도 머리에 남는 것이 없었습니다. 50분 공부 후 10분 산책과 하루 7시간 수면 패턴으로 바꾸자 집중력이 눈에 띄게 또렷해졌습니다. 과학적으로도 충분한 수면이 새 정보를 장기 기억으로 옮기는 데 도움이 된다고 합니다. 죄책감을 느끼기보다 짧게 음악을 듣거나 스트레칭하며 마음을 재충전하는 편이 훨씬 효과적입니다. 결국 현명한 휴식은 게으름이 아니라 지속 가능한 성장의 토대입니다.',
  },

  /* =========================================================================
   * Stage 4 · 글로벌 OPIc AL · 비즈니스 스피킹 (C1, prep 15s / speak 60s) — sp-13 ~ sp-16
   * ========================================================================= */
  {
    id: 'sp-13',
    stage: 'stage4',
    categoryBadge: '글로벌 OPIc AL · 비즈니스',
    cefrBadge: 'C1',
    titleKo: '예상치 못한 위기·문제 해결 경험 (Handling an Unexpected Problem)',
    promptEn:
      'Describe a time when an unexpected problem disrupted an important project or plan. How did you respond under pressure, and what lesson did you take away from the experience?',
    promptKo:
      '중요한 프로젝트나 계획 중에 예상치 못한 문제가 발생했던 경험을 말해 주세요. 압박 속에서 어떻게 대처했고, 그 경험을 통해 무엇을 배웠나요?',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 중요한 발표 직전에 발생한 돌발 위기 상황을 핵심만 간결하게 제시하기',
      '② 이유·구체적 예시: 침착함을 유지하고 대안을 빠르게 실행해 고객 신뢰를 얻은 과정 설명하기',
      '③ 마무리 한 마디: 그 위기를 통해 체득한 사전 대비와 투명한 소통 원칙으로 마무리하기',
    ],
    keyExpressions: [
      'at the last minute',
      'stay composed',
      'came up with a backup plan',
      'turned a crisis into',
      'prepare for contingencies',
    ],
    modelAnswerEn:
      "One of the most stressful challenges I've faced happened right before a major client presentation when our live demo crashed at the last minute. With barely twenty minutes left, the whole team panicked because our slides relied heavily on that interactive prototype. Instead of pointing fingers, I took a deep breath to stay composed and quickly assessed what still worked. Together with our engineer, I came up with a backup plan: we captured clean screenshots of key workflows and reorganized our narrative around measurable business outcomes. During the meeting, I openly acknowledged the technical hiccup and walked the client smoothly through the visuals. Surprisingly, our calm transparency impressed them, and we turned a crisis into a stronger partnership. Since then, I always prepare for contingencies well ahead of time.",
    modelAnswerKo:
      '제가 겪은 가장 긴박한 난관 중 하나는 중요한 고객사 발표를 코앞에 두고 라이브 데모가 마지막 순간에 멈춰 버린 일이었습니다. 발표까지 겨우 20분 남짓 남은 상황에서 슬라이드가 그 시연 프로토타입에 크게 의존하고 있었기에 팀 전체가 당황했습니다. 서로 탓하기보다 저는 깊게 숨을 들이쉬며 침착함을 유지하고, 여전히 정상 작동하는 요소를 빠르게 파악했습니다. 엔지니어와 함께 곧장 대안을 마련해 핵심 화면을 깔끔하게 캡처하고, 측정 가능한 비즈니스 성과를 중심으로 발표 흐름을 재구성했습니다. 회의에서는 기술적 장애를 솔직히 인정한 뒤 시각 자료로 매끄럽게 설명을 이어 갔습니다. 놀랍게도 침착하고 투명한 대처가 고객에게 깊은 인상을 남겼고, 우리는 위기를 더 단단한 파트너십의 계기로 바꾸었습니다. 그 이후로 저는 언제나 돌발 상황에 대비한 예비 계획을 미리 준비합니다.',
  },
  {
    id: 'sp-14',
    stage: 'stage4',
    categoryBadge: '글로벌 OPIc AL · 비즈니스',
    cefrBadge: 'C1',
    titleKo: '재택근무와 팀 협업 생산성 (Remote Work & Team Productivity)',
    promptEn:
      "Remote and hybrid work models have reshaped modern offices. How can organizations maintain high productivity and genuine team cohesion when colleagues aren't sitting in the same room?",
    promptKo:
      '재택·하이브리드 근무가 현대의 일하는 방식을 바꾸어 놓았습니다. 동료들이 같은 공간에 있지 않을 때 조직이 높은 생산성과 진정한 팀 결속력을 유지하려면 어떻게 해야 할까요?',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 재택·하이브리드 생산성은 근무 장소보다 소통 문화와 기준의 명확성에 달려 있음을 선언하기',
      '② 이유·구체적 예시: 비동기 문서화·성과 중심 평가·심리적 안전감을 지키는 정기 교류 방안 제시하기',
      '③ 마무리 한 마디: 자율성과 체계적인 소통이 결합될 때 전통적 사무실 이상의 성과가 남을 강조하기',
    ],
    keyExpressions: [
      'hybrid work',
      'asynchronous communication',
      'clear expectations',
      'measure outcomes',
      'psychological safety',
    ],
    modelAnswerEn:
      "The debate around remote and hybrid work often focuses on location, but real productivity depends far more on culture and clarity than on office desks. In distributed teams, endless video calls quickly drain energy, so leaders should prioritize asynchronous communication through concise shared documents and transparent timelines. Equally important is setting clear expectations early and choosing to measure outcomes rather than hours spent online. That shift eliminates micromanagement and lets employees work during their peak focus hours. At the same time, informal hallway chats disappear remotely, which means teams must intentionally build psychological safety through regular check-ins and occasional in-person workshops. When organizations pair autonomy with structured communication, remote teams don't just match traditional office output—they often outperform it.",
    modelAnswerKo:
      '재택근무와 하이브리드 근무에 관한 논의는 흔히 장소에 초점을 맞추지만, 진정한 생산성은 사무실 책상보다 조직 문화와 기준의 명확성에 훨씬 더 크게 좌우됩니다. 분산된 팀에서는 끝없는 화상 회의가 에너지를 빠르게 소진하므로, 리더는 간결한 공유 문서와 투명한 일정을 바탕으로 비동기 소통을 우선시해야 합니다. 이에 못지않게 초기에 명확한 기대치를 설정하고 온라인 접속 시간이 아니라 실제 성과를 측정하는 태도가 중요합니다. 이러한 전환은 세세한 간섭을 줄이고 구성원이 각자 가장 집중이 잘되는 시간에 몰입하도록 돕습니다. 동시에 복도에서의 가벼운 대화가 사라지는 만큼 정기 체크인과 간헐적 대면 워크숍을 통해 의도적으로 심리적 안전감을 구축해야 합니다. 조직이 자율성과 체계적 소통을 결합한다면 원격 팀은 기존 사무실 성과를 따라잡는 것을 넘어 종종 뛰어넘습니다.',
  },
  {
    id: 'sp-15',
    stage: 'stage4',
    categoryBadge: '글로벌 OPIc AL · 비즈니스',
    cefrBadge: 'C1',
    titleKo: '좋은 리더의 가장 중요한 자질 (What Makes a Great Leader)',
    promptEn:
      "In today's fast-changing workplace, what do you consider the single most important quality of an effective leader? Explain why it matters with a concrete example.",
    promptKo:
      '빠르게 변화하는 현대 사회와 직장에서 훌륭한 리더가 갖춰야 할 가장 중요한 자질은 무엇이라고 생각하나요? 구체적인 예시와 함께 그 이유를 설명해 보세요.',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: 수많은 리더십 역량 중 공감과 적극적 경청이 가장 결정적이라는 견해 밝히기',
      '② 이유·구체적 예시: 주니어 구성원의 목소리를 먼저 들었던 상사의 사례와 그로 인한 팀의 주인의식 설명하기',
      '③ 마무리 한 마디: 권위가 아닌 공감이 구성원의 잠재력을 최대로 이끌어 낸다는 메시지로 마무리하기',
    ],
    keyExpressions: [
      'active listening',
      'above all else',
      'build genuine trust',
      'take ownership',
      'brings out the best in',
    ],
    modelAnswerEn:
      "While technical expertise and strategic vision are certainly valuable, I believe empathy paired with active listening is, above all else, the defining quality of a great leader. In a rapidly changing environment, no single executive holds every answer. Leaders who genuinely listen to frontline perspectives uncover hidden risks early and build genuine trust across their teams. For example, a former manager of mine always invited junior members to speak first during project reviews before sharing his own view. Because everyone felt heard and respected, teammates weren't afraid to flag problems honestly and take ownership of creative solutions. Authority alone can force short-term compliance, yet empathetic leadership inspires lasting commitment and consistently brings out the best in people.",
    modelAnswerKo:
      '전문 지식과 전략적 비전도 물론 중요하지만, 저는 무엇보다 공감을 바탕으로 한 적극적 경청이 훌륭한 리더를 결정짓는 핵심 자질이라고 믿습니다. 빠르게 변하는 환경에서는 어느 한 명의 경영진이 모든 해답을 쥘 수 없습니다. 현장의 시각에 진심으로 귀 기울이는 리더는 숨은 위험을 조기에 발견하고 팀 전반에 깊은 신뢰를 쌓습니다. 예를 들어 예전 상사 한 분은 프로젝트 리뷰 때마다 자신의 의견을 말하기 전에 항상 주니어 구성원들이 먼저 발언하도록 권했습니다. 모두가 존중받고 있다는 느낌을 받자 팀원들은 문제를 솔직하게 제기하고 창의적 해결책에 스스로 주인의식을 갖게 되었습니다. 권위만으로는 단기적인 복종밖에 얻지 못하지만, 공감하는 리더십은 오래가는 헌신을 이끌어 내고 언제나 사람들의 최고 역량을 끌어냅니다.',
  },
  {
    id: 'sp-16',
    stage: 'stage4',
    categoryBadge: '글로벌 OPIc AL · 비즈니스',
    cefrBadge: 'C1',
    titleKo: '생성형 AI가 바꿀 미래의 일자리 (How AI Will Shape Future Careers)',
    promptEn:
      'Generative AI is transforming industries at an unprecedented pace. How do you expect AI to reshape future careers, and what human skills will become most valuable?',
    promptKo:
      '생성형 AI가 전례 없는 속도로 산업 전반을 바꾸고 있습니다. AI가 미래의 일자리를 어떻게 재편할 것으로 보며, 앞으로 가장 가치 있는 인간 고유의 역량은 무엇일까요?',
    prepSec: 15,
    speakSec: 60,
    outlineStepsKo: [
      '① 핵심 결론: AI가 인간을 일방적으로 대체하기보다 일의 방식을 재설계하는 촉매제가 될 것임을 밝히기',
      '② 이유·구체적 예시: 반복 업무 자동화 이후 더욱 중요해질 비판적 판단력·윤리적 책임·감성 지능 예시 들기',
      '③ 마무리 한 마디: AI 활용 역량과 평생 학습을 결합한 인재가 미래 혁신을 이끌 것이라는 전망으로 끝맺기',
    ],
    keyExpressions: [
      'at an unprecedented pace',
      'routine tasks',
      'critical judgment',
      'emotional intelligence',
      'lifelong learning',
    ],
    modelAnswerEn:
      "Generative AI is reshaping the global workforce at an unprecedented pace, yet I view it less as a wholesale replacement for humans and more as a powerful catalyst redefining how we work. Over the next decade, algorithms will rapidly automate routine tasks such as drafting boilerplate reports, summarizing data, and writing standard code. As execution becomes faster and cheaper, the competitive edge will shift sharply toward uniquely human strengths: critical judgment, ethical accountability, and emotional intelligence. For instance, AI can generate ten marketing strategies in seconds, but deciding which message truly resonates with customers—and aligns with a company's values—still requires nuanced human insight. Ultimately, professionals who combine domain expertise with AI fluency and embrace lifelong learning won't be replaced by AI; they will lead the next era of innovation.",
    modelAnswerKo:
      '생성형 AI가 전례 없는 속도로 글로벌 노동 시장을 재편하고 있지만, 저는 이를 인간의 전면적인 대체라기보다 우리가 일하는 방식을 새롭게 정의하는 강력한 촉매제로 봅니다. 향후 10년간 알고리즘은 정형화된 보고서 초안 작성, 데이터 요약, 표준 코드 생성 같은 반복 업무를 빠르게 자동화할 것입니다. 실행 속도가 빨라지고 비용이 낮아질수록 경쟁력의 중심은 비판적 판단력, 윤리적 책임감, 감성 지능 같은 인간 고유의 강점으로 뚜렷하게 이동할 것입니다. 예를 들어 AI가 몇 초 만에 열 가지 마케팅 전략을 내놓을 수는 있어도, 어떤 메시지가 고객의 마음을 울리고 기업의 가치와 맞닿아 있는지 결정하는 일에는 여전히 섬세한 인간적 통찰이 필요합니다. 결국 분야별 전문성에 AI 활용 역량을 결합하고 평생 학습을 받아들이는 전문가들은 AI에 대체되는 것이 아니라 다음 혁신의 시대를 이끌게 될 것입니다.',
  },
];
