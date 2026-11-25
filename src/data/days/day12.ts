import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day12Module: DayLessonModule = {
  dayNumber: 12,
  weekNumber: 2,
  cefrLevel: 'b1',
  isWeeklyReview: true,
  dayBadge: 'DAY 12 · WEEK 2 주간 종합 성취도 평가',
  categoryLabel: 'Week 2 총정리 리허설 & 20문항 실전 모의고사',
  title: 'Week 2 실전 통합 리허설 & 2주차 종합평가',
  subtitle: 'Day 07~11의 카페·공항·호텔·쇼핑·스몰토크 75개 표현과 핵심 문제 해결 구동사를 하나의 시애틀 출장 스토리와 20문항 종합평가로 완전 마스터',
  heroImage: 'assets/scene_riverside_walk.jpg',
  secondaryImage: 'assets/scene_airport_travel.jpg',
  estimatedSprintMin: 10,
  estimatedLectureMin: 45,
  keyExpression: 'Week 2 Complete Mastery: Travel × Shopping × Small Talk',
  keySentenceByTier: {
    a1: 'I checked in at the airport, got a latte, and met my friend.',
    a2: 'After my short layover, I checked into my hotel and caught up with an old friend.',
    b1: 'Even though my flight was delayed and I had to sort out a jacket exchange, everything worked out great in the end.',
    b2: 'Once I figured out how to get around downtown and sorted out a quick exchange with my receipt, I finally got to catch up with Rachel by the river.',
    c1: 'Despite a tight layover and a minor billing hiccup at a boutique, staying calm helped me sort everything out and extend my stay to catch up with old friends.',
    c2: 'What started as a nerve-racking trip with a delayed connecting flight ultimately turned out to be the most rewarding getaway once I figured out how to navigate every detour with poise.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[12],
  readingPassage: {
    titleEn: 'Four Days in Seattle: When Every Detour Works Out',
    titleKo: '시애틀 4일 출장기: 크고 작은 변수를 영어로 매끄럽게 풀어낸 기록',
    genreBadge: 'Week 2 통합 스토리 · Lv.3 중하급',
    estimatedMin: 7,
    paragraphsEn: [
      'Jinwoo used to dread solo business trips abroad, worried that a single unexpected snag would leave him speechless. On his four-day trip to Seattle, the test started right at the airport: his first flight was delayed, leaving him with a razor-thin layover. Instead of panicking, he asked politely for an aisle seat near the front and confirmed that his suitcase was checked all the way through—and he made his connecting flight with ten minutes to spare.',
      'Once he settled into his downtown hotel under his reservation name, he asked whether breakfast was complimentary and figured out how to get around by light rail. The next afternoon, he picked up a waterproof jacket on sale, only to notice a loose zipper back in his room. Armed with his original receipt, he walked back in calmly, explained the issue, and sorted out an exchange for a size up in under five minutes.',
      'Before flying home, Jinwoo extended his stay by one evening to catch up with Rachel, a former colleague who had moved to Seattle. They grabbed custom iced oat lattes—easy on the ice—and strolled along the waterfront as the air was getting crisp. Looking back, every hurdle turned out to be a chance to speak up, stay polite, and realize how smoothly real-world English works out when you have the right chunks ready.'
    ],
    paragraphsSlash: [
      'Jinwoo used to dread solo business trips abroad, / worried that a single unexpected snag / would leave him speechless. / On his four-day trip to Seattle, / the test started right at the airport: / his first flight was delayed, / leaving him with a razor-thin layover. / Instead of panicking, / he asked politely for an aisle seat near the front / and confirmed that his suitcase was checked all the way through— / and he made his connecting flight / with ten minutes to spare.',
      'Once he settled into his downtown hotel / under his reservation name, / he asked whether breakfast was complimentary / and figured out how to get around by light rail. / The next afternoon, / he picked up a waterproof jacket on sale, / only to notice a loose zipper back in his room. / Armed with his original receipt, / he walked back in calmly, / explained the issue, / and sorted out an exchange for a size up / in under five minutes.',
      'Before flying home, / Jinwoo extended his stay by one evening / to catch up with Rachel, / a former colleague who had moved to Seattle. / They grabbed custom iced oat lattes— / easy on the ice— / and strolled along the waterfront / as the air was getting crisp. / Looking back, / every hurdle turned out to be a chance / to speak up, stay polite, / and realize how smoothly real-world English works out / when you have the right chunks ready.'
    ],
    paragraphsKo: [
      '진우 씨는 예전엔 해외 단독 출장을 두려워했습니다. 예상치 못한 작은 변수 하나만 생겨도 말문이 턱 막힐까 걱정했기 때문입니다. 시애틀 4일 출장에서는 공항에서부터 시험이 시작되었습니다. 첫 비행기가 지연되면서 환승 대기(layover) 시간이 아슬아슬하게 줄어든 것입니다. 하지만 당황하는 대신 앞쪽 통로석을 정중히 요청하고 수하물이 최종 목적지까지 자동 연결되는지 확인한 덕분에, 10분의 여유를 두고 연결편을 무사히 탈 수 있었습니다.',
      '시내 호텔에 예약자명으로 체크인해 자리를 잡은(settled into) 뒤에는 조식이 무료 제공(complimentary)되는지 확인하고 경전철로 시내를 돌아다니는(get around) 방법을 파악했습니다(figured out). 다음 날 오후 할인 중인 방수 재킷을 샀다가 숙소에서 지퍼가 느슨한 걸 발견했지만, 원본 영수증을 챙겨 차분하게 매장으로 돌아가 상황을 설명하고 5분도 안 되어 한 치수 큰 새 제품으로 깔끔하게 교환을 해결했습니다(sorted out).',
      '귀국하기 전, 진우 씨는 시애틀로 이주한 옛 동료 레이철과 근황을 나누기 위해 숙박을 하루 저녁 연장했습니다. 두 사람은 얼음을 적게 넣은 아이스 오트 라떼를 주문해 들고, 공기가 점점 선선해지는 해변 산책로를 함께 걸었습니다. 돌이켜 보니 모든 돌발 상황은 오히려 당당히 말하고(speak up), 예의를 지키며, 준비된 영어 청크만 있으면 실전 영어가 얼마나 매끄럽게 풀리는지(works out) 깨닫는 기회가 되었습니다.'
    ],
    keyExpressions: ['figure out', 'sort out', 'work out', 'settle in', 'turn out', 'speak up'],
    comprehensionQuiz: [
      {
        id: 'd12-rq01',
        questionKo: '진우 씨가 첫 비행기 지연으로 촉박한 환승(layover)을 겪었을 때 취한 두 가지 대처 행동은?',
        options: [
          '항공권을 취소하고 다음 날 기차표를 예매했다',
          '앞쪽 통로석을 정중히 요청하고 수하물 자동 연결 여부를 확인했다',
          '세관에 분실 수하물 신고서를 먼저 작성했다',
          '공항 카페에서 식사 바우처를 요청한 뒤 대기했다'
        ],
        answer: '앞쪽 통로석을 정중히 요청하고 수하물 자동 연결 여부를 확인했다',
        explanationKo: '첫 문단 "asked politely for an aisle seat near the front and confirmed that his suitcase was checked all the way through"가 정답입니다.'
      },
      {
        id: 'd12-rq02',
        questionKo: '진우 씨가 방수 재킷에서 느슨한 지퍼를 발견했을 때 5분 만에 해결할 수 있었던 비결은?',
        options: [
          '매장 적립금을 포기하고 새 재킷을 하나 더 결제했다',
          '원본 영수증을 가지고 차분하게 돌아가 상황을 설명하고 한 치수 큰 제품으로 교환했다',
          '호텔 컨시어지에게 대신 매장에 가 달라고 부탁했다',
          '할인 상품이어서 수선만 무료로 받았다'
        ],
        answer: '원본 영수증을 가지고 차분하게 돌아가 상황을 설명하고 한 치수 큰 제품으로 교환했다',
        explanationKo: '둘째 문단 "Armed with his original receipt, he walked back in calmly, explained the issue, and sorted out an exchange for a size up"을 확인하세요.'
      },
      {
        id: 'd12-rq03',
        questionKo: '귀국 전 진우 씨가 호텔 숙박을 하루 저녁 연장한 이유는 무엇인가요?',
        options: [
          '연결 항공편이 기상 악화로 결항되었기 때문',
          '시애틀로 이주한 옛 동료 레이철과 만나 오랜만에 근황을 나누기 위해',
          '할인 행사 주말까지 기다려 선물을 더 사기 위해',
          '지연된 위탁 수하물이 호텔로 배송되길 기다리기 위해'
        ],
        answer: '시애틀로 이주한 옛 동료 레이철과 만나 오랜만에 근황을 나누기 위해',
        explanationKo: '셋째 문단 "extended his stay by one evening to catch up with Rachel, a former colleague"가 근거입니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd12-v01',
      word: 'figure out',
      phonetic: '/ˈfɪɡjər aʊt/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(고민·탐색 끝에) 알아내다, 파악하다, 해결책을 찾다',
      meaningEn: 'understand or find the answer to something after thinking or checking',
      nuanceTipKo: '단순히 아는 know보다, 낯선 공항·지하철 노선이나 문제를 스스로 파악해 냈다는 생동감이 담깁니다.',
      exampleEn: 'Once you figure out the subway map, getting around Seattle is super easy.',
      exampleKo: '지하철 노선도만 한번 파악하고 나면 시애틀 시내 이동은 정말 쉬워요.'
    },
    {
      id: 'd12-v02',
      word: 'sort out',
      phonetic: '/sɔːrt aʊt/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(꼬인 문제·오류·예약을) 깔끔하게 해결하다, 정리하다',
      meaningEn: 'resolve a problem, misunderstanding, or messy arrangement smoothly',
      nuanceTipKo: '호텔 예약 오류, 영수증 과다 청구, 항공권 재예약 등 트러블슈팅 상황에서 solve보다 훨씬 원어민답습니다.',
      exampleEn: 'The front desk sorted out the billing mistake in less than five minutes.',
      exampleKo: '프런트 데스크에서 5분도 안 걸려 결제 오류를 깔끔하게 해결해 줬어요.'
    },
    {
      id: 'd12-v03',
      word: 'work out',
      phonetic: '/wɜːrk aʊt/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(일이) 잘 풀리다, 해결되다 / 운동하다',
      meaningEn: 'turn out successfully; resolve well (also: exercise)',
      nuanceTipKo: '여행이나 일정이 꼬였을 때 "Don\'t worry, everything will work out!(걱정 마, 다 잘 풀릴 거야!)"로 자주 씁니다.',
      exampleEn: 'I was stressed about the tight layover, but everything worked out smoothly.',
      exampleKo: '촉박한 환승 때문에 긴장했는데 결국 모든 게 매끄럽게 잘 풀렸어요.'
    },
    {
      id: 'd12-v04',
      word: 'run into ~',
      phonetic: '/rʌn ˈɪntuː/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(지인을) 우연히 마주치다 / (문제에) 부딪히다',
      meaningEn: 'meet someone unexpectedly, or encounter an unplanned problem',
      nuanceTipKo: '사람(ran into an old friend)과 문제(ran into a small delay) 양쪽 모두에 쓰는 초고빈도 구동사입니다.',
      exampleEn: 'Guess who I ran into while grabbing coffee near the boarding gate?',
      exampleKo: '탑승구 근처에서 커피 사다가 누구랑 우연히 마주쳤는지 맞춰 봐!'
    },
    {
      id: 'd12-v05',
      word: 'settle in',
      phonetic: '/ˈsetl ɪn/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(호텔·새 장소에) 짐을 풀고 자리를 잡다, 안정을 찾다',
      meaningEn: 'get comfortable in a hotel room, new home, or seat',
      nuanceTipKo: '호텔 체크인 직후 "짐 풀고 좀 쉰 다음 만나자" 할 때 "Let me settle in first"라고 말하면 완벽합니다.',
      exampleEn: 'Give me twenty minutes to settle in at the hotel, then let us grab dinner.',
      exampleKo: '호텔에 짐 풀고 자리 잡을 시간 20분만 줘, 그러고 저녁 먹으러 가자.'
    },
    {
      id: 'd12-v06',
      word: 'turn out',
      phonetic: '/tɜːrn aʊt/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(결과적으로) ~인 것으로 드러나다, 결국 ~하게 되다',
      meaningEn: 'happen to be or end up in a particular way',
      nuanceTipKo: '예상과 다른 반전 결과를 말할 때 "It turned out to be amazing!(결과적으로 완전 좋았어!)"처럼 활용합니다.',
      exampleEn: 'The little cafe around the corner turned out to have the best espresso in town.',
      exampleKo: '모퉁이 돌면 있는 작은 카페가 알고 보니 동네 최고 에스프레소 맛집이었어.'
    },
    {
      id: 'd12-v07',
      word: 'speak up',
      phonetic: '/spiːk ʌp/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '목소리를 내어 당당히 말하다 / 더 크게 말하다',
      meaningEn: 'express your opinion or concern clearly instead of staying silent',
      nuanceTipKo: '부당한 과다 청구나 메뉴 오류를 참지 않고 정중히 말할 때 "I\'m glad I spoke up!"이라고 표현합니다.',
      exampleEn: "I'm really glad I spoke up about the loose zipper—they exchanged it right away.",
      exampleKo: '느슨한 지퍼에 대해 당당히 말하길 정말 잘했어—바로 교환해 주더라.'
    },
    {
      id: 'd12-v08',
      word: 'come across',
      phonetic: '/kʌm əˈkrɔːs/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(우연히 맛집·물건·정보를) 발견하다, 마주치다',
      meaningEn: 'find or discover something by chance while walking or browsing',
      nuanceTipKo: '여행 중 우연히 보석 같은 가게나 카페를 발견했을 때 find보다 훨씬 생생한 표현입니다.',
      exampleEn: 'We came across a cozy bookshop within walking distance of our hotel.',
      exampleKo: '호텔에서 도보 거리 안에서 아늑한 서점을 우연히 발견했어요.'
    },
    {
      id: 'd12-v09',
      word: 'hold on to ~',
      phonetic: '/hoʊld ɑːn tuː/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(영수증·탑승권 등을 버리지 않고) 잘 간직하다, 쥐고 있다',
      meaningEn: 'keep something safe so you do not lose it when needed later',
      nuanceTipKo: '영수증이나 수하물 태그를 잃어버리지 말고 챙기라고 조언할 때 "Hold on to your receipt!"가 1순위입니다.',
      exampleEn: 'Make sure you hold on to your receipt in case you need an exchange.',
      exampleKo: '교환해야 할 수도 있으니 영수증을 꼭 잘 간직해 두세요.'
    },
    {
      id: 'd12-v10',
      word: 'make it',
      phonetic: '/meɪk ɪt/',
      pos: '관용구',
      cefr: 'a2',
      meaningKo: '(비행기·약속에) 제시간에 도착하다, 해내다',
      meaningEn: 'succeed in arriving on time or accomplishing a difficult goal',
      nuanceTipKo: 'make it to the gate(게이트에 제시간에 도착하다), make it to dinner(저녁 약속에 참석하다)로 폭넓게 씁니다.',
      exampleEn: 'Even with the delay, I somehow made it to Boarding Gate C4 on time.',
      exampleKo: '지연이 있었는데도 어찌저찌 C4 탑승구에 제시간에 도착했어요.'
    },
    {
      id: 'd12-v11',
      word: 'check out',
      phonetic: '/tʃek aʊt/',
      pos: '구동사',
      cefr: 'a2',
      meaningKo: '호텔에서 퇴실하다 / (맛집·장소를) 한번 구경해 보다',
      meaningEn: 'leave and settle a hotel bill; also, visit or inspect an interesting place',
      nuanceTipKo: '호텔 퇴실(check out by 11 AM)뿐 아니라 "You should check out that cafe!(저 카페 꼭 가봐!)" 뜻으로도 매일 씁니다.',
      exampleEn: 'Before we check out of the hotel, let us check out the waterfront market.',
      exampleKo: '호텔 체크아웃하기 전에 해변 마켓 한번 구경해 보자.'
    },
    {
      id: 'd12-v12',
      word: 'get used to -ing',
      phonetic: '/ɡet juːst tuː/',
      pos: '구동사 구문',
      cefr: 'b1',
      meaningKo: '~에 점차 익숙해지다',
      meaningEn: 'gradually become comfortable with something new or unfamiliar',
      nuanceTipKo: 'look forward to -ing처럼 여기서도 to가 전치사! 뒤에 동명사(-ing)나 명사가 와야 합니다.',
      exampleEn: "I'm finally getting used to customizing my coffee orders in English.",
      exampleKo: '드디어 영어로 커피 옵션 커스텀 주문하는 데 점점 익숙해지고 있어요.'
    },
    {
      id: 'd12-v13',
      word: 'follow through',
      phonetic: '/ˈfɑːloʊ θruː/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(약속·계획을) 끝까지 실행에 옮기다',
      meaningEn: 'complete an action or promise you committed to doing',
      nuanceTipKo: '주간 복습·목표 달성이나 고객 서비스 약속 이행을 말할 때 신뢰감을 주는 고급 구동사입니다.',
      exampleEn: 'The hotel staff really followed through and delivered extra pillows right away.',
      exampleKo: '호텔 직원이 약속을 끝까지 잘 지켜서 추가 베개를 바로 갖다줬어요.'
    },
    {
      id: 'd12-v14',
      word: 'put off',
      phonetic: '/pʊt ɔːf/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(일정·계획을) 미루다, 연기하다',
      meaningEn: 'postpone or delay doing something until a later time',
      nuanceTipKo: '격식 동사 postpone 대신 회화에서는 put off를 압도적으로 많이 씁니다 (대명사 어순: put it off!).',
      exampleEn: "Let's not put off catching up again—let's pick a date next month.",
      exampleKo: '또 근황 나누는 거 미루지 말자—다음 달 날짜를 아예 잡아 두자.'
    },
    {
      id: 'd12-v15',
      word: 'end up -ing',
      phonetic: '/end ʌp/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(예상과 달리) 결국 ~하게 되다',
      meaningEn: 'finally reach a situation or decision you did not originally plan',
      nuanceTipKo: '여행 중 즉흥적인 일정 변경을 스토리텔링할 때 end up + 동명사(-ing) 패턴이 정말 생생합니다.',
      exampleEn: 'We meant to grab a quick coffee, but we ended up talking for three hours.',
      exampleKo: '잠깐 커피만 마시려 했는데 결국 세 시간이나 수다를 떨고 말았어.'
    }
  ],
  dialogue: [
    {
      id: 'd12-t01',
      speaker: 'Rachel',
      roleLabel: '시애틀 거주 옛 동료',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'zoom-in',
      english: "Jinwoo! It's been ages! I'm so glad you decided to extend your stay by one night so we could catch up.",
      slashBroken: "Jinwoo! / It's been ages! / I'm so glad / you decided to extend your stay by one night / so we could catch up.",
      korean: '진우야! 진짜 오랜만이야! 우리 근황 나눌 수 있게 숙박을 하룻밤 연장해 줘서 너무 기뻐.',
      keyHighlight: 'extend your stay by one night',
      noteKo: 'Day 9(extend your stay)와 Day 11(catch up)이 한 문장에 자연스럽게 결합되었습니다.'
    },
    {
      id: 'd12-t02',
      speaker: 'Jinwoo',
      roleLabel: '한국인 출장객',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'pan-right',
      english: "Me too! Honestly, this trip tested every survival skill I have. My first flight was delayed, so I had a super tight layover in San Francisco.",
      slashBroken: 'Me too! / Honestly, this trip tested / every survival skill I have. / My first flight was delayed, / so I had a super tight layover / in San Francisco.',
      korean: '나도! 솔직히 이번 출장은 내 생존 영어 실력을 총동원한 시험 같았어. 첫 비행기가 지연돼서 샌프란시스코 환승 시간이 엄청 빠듯했거든.',
      keyHighlight: 'a super tight layover',
      noteKo: 'Day 8의 수동태(was delayed)와 layover를 자연스러운 회상 스토리로 녹여 냈습니다.'
    },
    {
      id: 'd12-t03',
      speaker: 'Rachel',
      roleLabel: '시애틀 거주 옛 동료',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'zoom-in',
      english: 'No wonder you looked relieved when you texted me! Did your checked bag make it all the way through without getting lost?',
      slashBroken: 'No wonder you looked relieved / when you texted me! / Did your checked bag make it / all the way through / without getting lost?',
      korean: '어쩐지 문자 보낼 때 안도한 느낌이었더라! 위탁 수하물은 분실 없이 최종 목적지까지 무사히 연결됐어?',
      keyHighlight: 'No wonder',
      noteKo: 'Day 11의 공감 리액션(No wonder)과 Day 8의 수하물 연결(all the way through)이 절묘하게 이어집니다.'
    },
    {
      id: 'd12-t04',
      speaker: 'Jinwoo',
      roleLabel: '한국인 출장객',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-left',
      english: "Thankfully, yes! Everything worked out once I settled into the hotel—they even gave me a complimentary room upgrade. Oh, and yesterday I bought a rain jacket on sale, noticed a broken zipper, and sorted out an exchange for a size up with my receipt!",
      slashBroken: 'Thankfully, yes! / Everything worked out / once I settled into the hotel— / they even gave me a complimentary room upgrade. / Oh, and yesterday I bought a rain jacket on sale, / noticed a broken zipper, / and sorted out an exchange for a size up / with my receipt!',
      korean: '다행히 그랬어! 호텔에 짐 풀고 자리 잡으니까 모든 게 잘 풀리더라—무료 룸 업그레이드도 받았어. 아, 어제는 할인 중인 레인 재킷을 샀다가 지퍼 불량을 발견했는데, 영수증 챙겨 가서 한 치수 큰 걸로 교환도 깔끔히 해결했지!',
      keyHighlight: 'sorted out an exchange for a size up',
      noteKo: 'Day 9(complimentary upgrade), Day 10(on sale / receipt / exchange for a size up), Day 12(worked out / sorted out)의 총집합입니다!'
    },
    {
      id: 'd12-t05',
      speaker: 'Rachel',
      roleLabel: '시애틀 거주 옛 동료',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'zoom-in',
      english: "Look at you handling everything like a local! Speaking of which, let's grab a coffee right here—how do you take yours?",
      slashBroken: 'Look at you / handling everything like a local! / Speaking of which, / let us grab a coffee right here— / how do you take yours?',
      korean: '현지인처럼 척척 해결해 내는 것 좀 봐! 그 얘기가 나와서 말인데 바로 여기서 커피 한잔하자—너는 어떻게 마셔?',
      keyHighlight: 'how do you take yours?',
      noteKo: '"How do you take your coffee?"는 "커피에 우유·시럽·얼음 등 어떤 옵션을 넣어 드세요?"라는 원어민 단골 질문입니다.'
    },
    {
      id: 'd12-t06',
      speaker: 'Jinwoo',
      roleLabel: '한국인 출장객',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-right',
      english: "I'm getting used to ordering custom drinks now—I'll ask for an iced oat latte and tell them to go easy on the ice. Let's split the bill on dinner afterward too!",
      slashBroken: "I'm getting used to ordering custom drinks now— / I'll ask for an iced oat latte / and tell them to go easy on the ice. / Let's split the bill / on dinner afterward too!",
      korean: '이제 커스텀 음료 주문하는 데도 점점 익숙해지고 있어—아이스 오트 라떼 시키면서 얼음 적게 넣어 달라고 할래. 이따 저녁은 같이 나눠 내자!',
      keyHighlight: 'getting used to ordering',
      noteKo: 'get used to + 동명사(ordering) + Day 7의 go easy on the ice & split the bill을 매끄럽게 엮었습니다.'
    },
    {
      id: 'd12-t07',
      speaker: 'Rachel',
      roleLabel: '시애틀 거주 옛 동료',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'zoom-in',
      english: "Deal! It's getting chilly by the water, so let's grab our lattes to go and walk toward Pike Place. I'm really looking forward to hearing what you've been into back in Seoul!",
      slashBroken: "Deal! / It's getting chilly by the water, / so let's grab our lattes to go / and walk toward Pike Place. / I'm really looking forward to hearing / what you've been into back in Seoul!",
      korean: '좋아! 물가가 점점 쌀쌀해지니까 라떼 포장해서 파이크 플레이스 쪽으로 걸어가자. 서울에서 요즘 네가 뭐에 빠져 지내는지 들을 생각에 너무 기대된다!',
      keyHighlight: 'looking forward to hearing',
      noteKo: "It's getting chilly(변화) + to go(포장) + looking forward to hearing(전치사 to + 동명사) + what you've been into(취미)로 Week 2를 완벽히 총정리했습니다."
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · Week 2 상황별 정중 요청 마스터 지도 (카페 → 공항 → 호텔 → 쇼핑)',
      coreFormula: '카페: Could I get ~? / 공항: Will my bag be ~? / 호텔: Would it be possible to ~? / 쇼핑: I was hoping to ~',
      wrongKonglish: 'Give me coffee. Check my bag. Give me room upgrade. Change this jacket.',
      rightNative: 'Could I get a latte? Will my bag be checked through? Would it be possible to extend my stay? I was hoping to exchange this jacket.',
      explanationKo:
        'Week 2의 핵심 공통 원리는 "단도직입적 명령문(Give me / Change)"을 버리고, 상황의 난이도에 따라 정중 쿠션 강도를 조절하는 것입니다. 가벼운 카페 주문은 Could I get ~?, 사실 확인이 필요한 공항은 Will my ~ be p.p.?, 추가 배려가 필요한 호텔·교환은 Would it be possible to ~? / I was hoping to ~를 쓰면 전 세계 어디서나 대우가 달라집니다.',
      registerSpectrum: {
        casual: 'Can I get an oat latte, easy on the ice?',
        standard: 'Could I exchange this jacket for a size up? I have the receipt here.',
        formal: 'Would it be possible to extend my stay by one night at the same rate?'
      }
    },
    {
      title: '원리 02 · Week 2 한국인 4대 어법 함정 최종 점검',
      coreFormula: '① 불가산 luggage(s X) ② 대명사 try it on ③ 간접의문문 where the stop is ④ 전치사 to + -ing (look forward to / get used to)',
      wrongKonglish: 'I have two luggages. Can I try on it? Tell me where is the station. I look forward to meet you.',
      rightNative: 'I have two bags. Can I try it on? Could you tell me where the station is? I look forward to meeting you.',
      explanationKo:
        '2주차 20문항 종합평가에서 가장 변별력이 높은 4가지 어법 핵심입니다. ① luggage/baggage에는 복수 -s 금지, ② 타동사+부사 구동사의 대명사 목적어(it/them)는 반드시 가운데 삽입, ③ 간접의문문은 [의문사 + 주어 + 동사] 평서문 어순, ④ look forward to와 get used to 뒤에는 원형이 아닌 동명사(-ing)를 씁니다.',
      registerSpectrum: {
        casual: "I'm getting used to ordering in English—can I try this on?",
        standard: 'Could you tell me where baggage claim is? I am looking forward to seeing you.',
        formal: 'Could you confirm whether my two pieces of luggage will be checked through to Seattle?'
      }
    },
    {
      title: '원리 03 · 문제 해결 & 스몰토크 만능 구동사 콤보',
      coreFormula: 'figure out (파악하다) · sort out (해결하다) · work out (잘 풀리다) · turn out (~로 드러나다) · end up -ing (결국 ~하다)',
      wrongKonglish: 'I understood the subway, solved the receipt mistake, and finally everything became good.',
      rightNative: 'I figured out the subway, sorted out the receipt mistake, and everything worked out great in the end.',
      explanationKo:
        '교과서식 단어(understand, solve, become good) 대신 원어민이 일상과 여행 후기에서 매일 쓰는 5대 스토리텔링 구동사를 입에 붙여 두면 B1 이상의 유창성이 단번에 살아납니다. 문제 파악(figure out) → 처리(sort out) → 원만한 해결(work out) → 반전 결과(turn out / end up -ing) 흐름으로 여행이나 하루 일과를 3문장으로 요약해 보세요.',
      registerSpectrum: {
        casual: "Don't stress—we'll figure it out and it'll all work out!",
        standard: 'I sorted out the exchange quickly, and the trip turned out to be awesome.',
        formal: 'Once we figured out the cause of the billing discrepancy, the issue was sorted out promptly.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd12-s01',
      drillType: 'chunk-build',
      promptKo: '[Day 7 복습] 아이스 오트 라떼 한 잔 주시고, 얼음은 조금만 넣어 주세요.',
      promptEnHint: 'Could I get ~ 과 go easy on ~ 을 연결하세요.',
      targetEn: 'Could I get an iced oat latte and go easy on the ice?',
      chunks: ['Could I get', 'an iced oat latte', 'and go easy', 'on the ice?'],
      explanationKo: '부드러운 카페 주문 오프닝과 양 조절 커스텀 표현의 핵심 조합입니다.'
    },
    {
      id: 'd12-s02',
      drillType: 'konglish-fix',
      promptKo: '[Day 8 복습] "위탁 수하물이 두 개 있고 비행기가 지연됐어요." — 어법이 정확한 문장은?',
      promptEnHint: '불가산 명사 luggage 오류와 수동태 delayed 오류를 모두 피하세요.',
      targetEn: 'I have two checked bags, and my flight has been delayed.',
      wrongKonglishOption: 'I have two checked luggages, and my flight delayed.',
      explanationKo: 'two checked bags(불가산 명사 교정) + has been delayed(수동태)가 정답입니다.'
    },
    {
      id: 'd12-s03',
      drillType: 'active-blank',
      promptKo: '[Day 9 복습] 숙박을 하룻밤 연장하고 무료 조식이 포함되는지 확인하고 싶어요.',
      promptEnHint: '호텔에서 "무료 제공되는"을 뜻하는 형용사(13글자)를 넣으세요.',
      targetEn: 'I would like to extend my stay and check if breakfast is complimentary.',
      blankData: {
        before: 'I would like to extend my stay and check if breakfast is',
        answer: 'complimentary',
        after: '.',
        firstLetterHint: 'c (13글자, i 철자 주의)'
      },
      explanationKo: 'extend my stay와 complimentary는 호텔 영어의 핵심 짝꿍입니다.'
    },
    {
      id: 'd12-s04',
      drillType: 'konglish-fix',
      promptKo: '[Day 10 복습] "이 재킷 세일 중인가요? 피팅룸에서 입어봐도 될까요?"',
      promptEnHint: 'on sale(할인 중)과 try it on(대명사 가운데 어순)을 확인하세요.',
      targetEn: 'Is this jacket on sale? Could I try it on?',
      wrongKonglishOption: 'Is this jacket for sale? Could I try on it?',
      explanationKo: '할인 중은 on sale, 대명사 목적어 어순은 try it on이 정확합니다.'
    },
    {
      id: 'd12-s05',
      drillType: 'active-blank',
      promptKo: '[Day 11 복습] 이번 토요일에 다 같이 만나 근황 나눌 생각에 정말 기대돼요.',
      promptEnHint: 'look forward to 뒤에 올 동명사 형태(2단어)를 넣으세요.',
      targetEn: "I'm really looking forward to catching up with everyone on Saturday.",
      blankData: {
        before: "I'm really looking forward to",
        answer: 'catching up',
        after: 'with everyone on Saturday.',
        firstLetterHint: 'c_______ u_ (동명사 2단어)'
      },
      explanationKo: 'look forward to 뒤에는 반드시 동명사 catching up이 와야 합니다.'
    },
    {
      id: 'd12-s06',
      drillType: 'chunk-build',
      promptKo: '[Day 12 핵심] 영수증 결제 오류를 5분 만에 깔끔하게 해결했어요.',
      promptEnHint: '꼬인 문제를 해결하다는 구동사 sort out(과거형)을 사용하세요.',
      targetEn: 'They sorted out the billing mistake in five minutes.',
      chunks: ['They sorted out', 'the billing mistake', 'in', 'five minutes.'],
      explanationKo: 'sort out은 예약·결제·교환 등의 트러블을 매끄럽게 처리할 때 쓰는 핵심 구동사입니다.'
    },
    {
      id: 'd12-s07',
      drillType: 'active-blank',
      promptKo: '[Day 12 핵심] 교환할 수도 있으니 영수증을 꼭 잘 간직해 두세요.',
      promptEnHint: '"버리지 않고 잘 간직하다" 구동사(3단어)를 채우세요.',
      targetEn: 'Make sure you hold on to your receipt in case you need an exchange.',
      blankData: {
        before: 'Make sure you',
        answer: 'hold on to',
        after: 'your receipt in case you need an exchange.',
        firstLetterHint: 'h___ o_ t_ (3단어)'
      },
      explanationKo: 'hold on to ~는 영수증·탑승권·수하물 표 등을 잃어버리지 말고 챙기라고 할 때 자주 씁니다.'
    },
    {
      id: 'd12-s08',
      drillType: 'konglish-fix',
      promptKo: '[Day 12 어법] "이제 영어로 커피 커스텀 주문하는 데 점점 익숙해지고 있어요."',
      promptEnHint: 'get used to 뒤의 동사 형태(전치사 to + 동명사!)를 확인하세요.',
      targetEn: "I'm getting used to ordering custom drinks in English.",
      wrongKonglishOption: "I'm getting used to order custom drinks in English.",
      explanationKo: 'get used to의 to 역시 전치사이므로 반드시 동명사 ordering이 와야 합니다.'
    },
    {
      id: 'd12-s09',
      drillType: 'chunk-build',
      promptKo: '[Day 9 복습] 박물관에 가려면 어느 역에서 내려야 하는지 알려 주시겠어요?',
      promptEnHint: '간접의문문 평서문 어순(which stop I should get off at)을 조립하세요.',
      targetEn: 'Could you tell me which stop I should get off at for the museum?',
      chunks: ['Could you tell me', 'which stop', 'I should get off at', 'for the museum?'],
      explanationKo: '간접의문문에서는 주어(I)가 조동사(should) 앞에 위치합니다.'
    },
    {
      id: 'd12-s10',
      drillType: 'chunk-build',
      promptKo: '[Day 12 통합] 촉박한 환승 때문에 긴장했지만 결국 모든 게 잘 풀렸어요.',
      promptEnHint: '잘 풀리다 구동사 worked out을 뒤에 연결하세요.',
      targetEn: 'I was nervous about the tight layover, but everything worked out.',
      chunks: ['I was nervous about', 'the tight layover,', 'but everything', 'worked out.'],
      explanationKo: 'tight layover(Day 8)와 worked out(Day 12)을 결합한 실전 여행 회고 문장입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd12-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 7] 카페 커스텀 go easy on',
      questionKo: '빈칸에 알맞은 3단어를 써서 "시럽을 조금만 넣어 주세요"를 완성하세요.',
      stimulusEn: 'Could you __________ __________ __________ the syrup in my iced latte?',
      answer: 'go easy on',
      explanationKo: '특정 재료를 적당히/적게 넣어 달라는 요청은 go easy on ~입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "드레싱은 따로 담아 주세요" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'Could I have the dressing __________ __________ __________, please?',
        answer: 'on the side',
        explanationKo: '별도 용기에 따로 달라는 표현은 on the side입니다.'
      }
    },
    {
      id: 'd12-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 7] 메뉴 변경 & 분할 결제',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "식사 후에 계산서를 나눠도 될까요?"를 완성하세요.',
      stimulusEn: 'When we are done, could we __________ the bill between two cards?',
      answer: 'split',
      acceptableAlt: ['divide'],
      explanationKo: '계산서를 나누어 결제하는 것은 split the bill입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "감자튀김을 신선한 과일로 바꿀 수 있을까요?" 빈칸(2단어, 공백 구분)을 쓰세요.',
        stimulusEn: 'Could I __________ the fries __________ fresh fruit?',
        answer: 'swap for',
        explanationKo: 'swap A for B는 기존 항목(A)을 새 항목(B)으로 대체하는 공식입니다.'
      }
    },
    {
      id: 'd12-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 8] 환승 대기 & 통로석',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "샌프란시스코에서 75분 환승 대기가 있다"를 완성하세요.',
      stimulusEn: 'I have a seventy-five-minute __________ in San Francisco.',
      answer: 'layover',
      acceptableAlt: ['stopover'],
      explanationKo: '항공편 사이의 경유·환승 대기 시간은 layover입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "앞쪽 통로석으로 배정받을 수 있을까요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Could I get an __________ __________ near the front?',
        answer: 'aisle seat',
        explanationKo: '통로석은 aisle seat(묵음 s, /아일/)입니다.'
      }
    },
    {
      id: 'd12-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 9] 호텔 숙박 연장 & 무료 서비스',
      questionKo: '빈칸에 알맞은 3단어를 써서 "숙박을 하룻밤 연장할 수 있을까요?"를 완성하세요.',
      stimulusEn: 'Would it be possible to __________ __________ __________ by one night?',
      answer: 'extend my stay',
      explanationKo: '호텔 체류 연장은 extend my stay by + 기간으로 표현합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "박물관이 호텔에서 걸어서 갈 수 있는 거리인가요?" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'Is the museum __________ __________ __________ from the hotel?',
        answer: 'within walking distance',
        explanationKo: '도보로 갈 수 있는 거리는 within walking distance입니다.'
      }
    },
    {
      id: 'd12-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 10] 영수증 & 교환/환불',
      questionKo: '빈칸에 알맞은 명사(1단어, 묵음 p 포함)를 넣어 "원본 영수증을 가지고 왔습니다"를 완성하세요.',
      stimulusEn: 'I brought my original __________ to exchange this jacket for a large.',
      answer: 'receipt',
      explanationKo: '영수증은 receipt(r-e-c-e-i-p-t)로 철자하며 p는 발음하지 않습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "라지 사이즈가 품절이라면 전액 환불받을 수 있나요?" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'If large is __________ __________ __________, could I get a full refund?',
        answer: 'out of stock',
        explanationKo: '품절은 out of stock입니다.'
      }
    },
    {
      id: 'd12-e06',
      number: 6,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 11] 스몰토크 취미 & 변화',
      questionKo: '빈칸에 알맞은 2단어를 써서 "요즘 저녁 러닝에 푹 빠져 있다"를 완성하세요.',
      stimulusEn: "I've been __________ __________ evening running lately.",
      answer: 'really into',
      acceptableAlt: ['super into', 'totally into'],
      explanationKo: '취미에 푹 빠져 있다는 표현은 be really into ~입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "저녁에 물가가 점점 쌀쌀해지고 있네" 빈칸(1단어, -ing형)을 채우세요.',
        stimulusEn: "It's __________ chilly by the water—let's grab a hot latte.",
        answer: 'getting',
        explanationKo: '실시간 날씨·상태 변화는 be getting + 형용사로 표현합니다.'
      }
    },
    {
      id: 'd12-e07',
      number: 7,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 12] 문제 해결 구동사 sort out / figure out',
      questionKo: '빈칸에 알맞은 구동사(2단어, 과거형)를 넣어 "매장에서 5분 만에 교환 문제를 깔끔히 해결했다"를 완성하세요.',
      stimulusEn: 'We __________ __________ the exchange at the boutique in five minutes.',
      answer: 'sorted out',
      explanationKo: '오류나 꼬인 문제를 매끄럽게 해결하다는 sort out(과거형 sorted out)입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "지하철 노선을 파악하고 나니 시내 이동이 쉬웠다" 빈칸(2단어, 과거형)을 채우세요.',
        stimulusEn: 'Once I __________ __________ the subway lines, getting around was easy.',
        answer: 'figured out',
        explanationKo: '탐색 끝에 알아내고 파악하다는 figure out입니다.'
      }
    },
    {
      id: 'd12-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 7] 식당 주문 & 커스텀 매너',
      questionKo: '해외 브런치 식당에서 메뉴를 커스텀 주문할 때 가장 자연스럽고 예의 바른 문장은?',
      stimulusEn: 'Give me / Dutch pay / delete 같은 콩글리시를 피하세요.',
      options: [
        'Give me chicken salad, delete walnuts, and separate sauce.',
        "I'll have the chicken salad—could you hold the walnuts and put the dressing on the side?",
        'You bring me salad without walnuts, and let us do Dutch pay.',
        'I want to swap fresh fruit for fries because I want the fries.'
      ],
      answer: "I'll have the chicken salad—could you hold the walnuts and put the dressing on the side?",
      explanationKo: "I'll have ~ + hold the ~ + on the side가 가장 정확한 현지 주문 조합입니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "남은 파스타 싸 갈 포장 용기 하나 주시겠어요?" 빈칸(하이픈 포함 2단어)을 채우세요.',
        stimulusEn: 'Could I get a __________ __________ for the rest of my pasta?',
        answer: 'to-go box',
        explanationKo: '남은 음식 포장 용기는 to-go box입니다.'
      }
    },
    {
      id: 'd12-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 8] 불가산 명사 & 수동태 통합',
      questionKo: '공항 체크인 상황에서 어법상 완벽한 문장을 고르세요.',
      stimulusEn: '불가산 명사 luggage/baggage와 수동태 be checked / be delayed를 동시에 확인하세요.',
      options: [
        'My flight delayed, so will my two luggages check all the way through?',
        'My flight has been delayed—will my luggage be checked all the way through?',
        'My flight is delaying, and I have one checked baggages.',
        'My flight was delayed, so I will wait in Boarding Gate B14.'
      ],
      answer: 'My flight has been delayed—will my luggage be checked all the way through?',
      explanationKo: '항공편 지연(has been delayed), 불가산 단수(my luggage), 수하물 자동 연결 수동태(be checked all the way through)가 모두 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "다음 직항편으로 저를 재예약해 주실 수 있나요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Could you __________ me __________ the next direct flight?',
        answer: 'rebook on',
        explanationKo: 'rebook [사람] on [항공편] 구조를 기억하세요.'
      }
    },
    {
      id: 'd12-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 9] 간접의문문 어순 & complimentary',
      questionKo: '호텔 프런트 데스크에서 조식 무료 여부와 지하철역 위치를 묻는 문장 중 어법이 가장 정확한 것은?',
      stimulusEn: '간접의문문 평서문 어순과 철자 complimentary를 확인하세요.',
      options: [
        'Is breakfast complementary, and could you tell me where is the subway station?',
        'Is breakfast complimentary, and could you tell me where the subway station is?',
        'I reserved by the name Kim—do you know what time does breakfast start?',
        'Get out of Bus 147 and get in the subway at Monroe Street.'
      ],
      answer: 'Is breakfast complimentary, and could you tell me where the subway station is?',
      explanationKo: '무료 제공은 complimentary(i), 간접의문문은 where + 주어(the subway station) + 동사(is) 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "김진우 이름으로 예약되어 있습니다" 빈칸 전치사(1단어)를 쓰세요.',
        stimulusEn: 'I have a three-night reservation __________ the name Jinwoo Kim.',
        answer: 'under',
        explanationKo: '예약자명 앞에는 항상 전치사 under를 씁니다.'
      }
    },
    {
      id: 'd12-e11',
      number: 11,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 10] 쇼핑 대명사 어순 & 정중 컴플레인',
      questionKo: '다음 중 해외 매장에서 어법과 어조가 모두 자연스러운 문장은?',
      stimulusEn: 'try it on 어순, on sale, 수동태 overcharged를 점검하세요.',
      options: [
        'Is this jacket for sale? Can I try on it right now?',
        'You overcharged me ten dollars! Give me full refund without receipt!',
        'I noticed this zipper is defective, and I brought the receipt—could I exchange it for a size up?',
        'I want to change this coat to a medium or take store credit.'
      ],
      answer: 'I noticed this zipper is defective, and I brought the receipt—could I exchange it for a size up?',
      explanationKo: '차분한 관찰(I noticed) + 불량(defective) + 영수증(receipt) + 교환 공식(exchange A for B)이 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 신발 신어봐도 될까요?" 빈칸(3단어)을 바른 어순으로 채우세요.',
        stimulusEn: 'Do you have these in size 9? Could I __________ __________ __________?',
        answer: 'try them on',
        explanationKo: '대명사 them은 반드시 try와 on 가운데에 넣습니다.'
      }
    },
    {
      id: 'd12-e12',
      number: 12,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 11] 전치사 to + 동명사(-ing)',
      questionKo: '빈칸 (A)와 (B)에 들어갈 동사 형태가 바르게 짝지어진 것은?',
      stimulusEn: "I'm finally getting used to (A) ______ in English, and I'm really looking forward to (B) ______ up with Rachel.",
      options: [
        '(A) order — (B) catch',
        '(A) ordering — (B) catching',
        '(A) ordered — (B) caught',
        '(A) order — (B) catching'
      ],
      answer: '(A) ordering — (B) catching',
      explanationKo: 'get used to와 look forward to의 to는 둘 다 전치사이므로 뒤에 동명사(-ing)인 ordering과 catching이 옵니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이번 일요일에는 밀린 잠을 좀 보충해야겠어" 빈칸(1단어)을 채우세요.',
        stimulusEn: 'I need to catch up __________ sleep this Sunday.',
        answer: 'on',
        explanationKo: '사람은 catch up with, 밀린 잠·일은 catch up on을 씁니다.'
      }
    },
    {
      id: 'd12-e13',
      number: 13,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 12] 핵심 구동사 뉘앙스 구별',
      questionKo: '다음 문맥에 들어갈 구동사가 순서대로 가장 자연스럽게 짝지어진 것은?',
      stimulusEn: 'We (A) ______ a tiny roastery near the river, and it (B) ______ to have the best oat latte in Seattle.',
      options: [
        '(A) came across — (B) turned out',
        '(A) put off — (B) held on to',
        '(A) spoke up — (B) checked out',
        '(A) sorted out — (B) ran into'
      ],
      answer: '(A) came across — (B) turned out',
      explanationKo: '우연히 발견하다는 come across(came across), 결과적으로 ~임이 드러나다는 turn out(turned out)입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "잠깐 커피만 마시려 했는데 결국 세 시간이나 수다를 떨었어" 빈칸(2단어, 과거형)을 채우세요.',
        stimulusEn: 'We meant to grab a quick coffee, but we __________ __________ talking for three hours.',
        answer: 'ended up',
        explanationKo: '예상과 달리 결국 ~하게 되다는 end up + -ing입니다.'
      }
    },
    {
      id: 'd12-e14',
      number: 14,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 11–12] 스몰토크 리액션 & 구동사',
      questionKo: '친구가 "내일 아침에 해변 따라 같이 5km 뛰고 브런치 먹을래?"라고 제안했을 때, 기분 좋게 승낙하며 기대감을 표현한 대답은?',
      stimulusEn: '자연스러운 원어민 리액션과 정확한 문법을 고르세요.',
      options: [
        "Count me in! I'm really looking forward to hanging out tomorrow.",
        "I'm just browsing! Please keep the change tomorrow.",
        'Put it off! I look forward to play with you tomorrow.',
        'Hold the brunch! My flight is out of stock tomorrow.'
      ],
      answer: "Count me in! I'm really looking forward to hanging out tomorrow.",
      explanationKo: 'Count me in!(나도 끼워줘!) + looking forward to hanging out(동명사 + 성인 사교 표현)이 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 얘기가 나와서 말인데, 새로 생긴 서점 가봤어?" 빈칸 구동사(2단어)를 채우세요.',
        stimulusEn: 'Speaking of which, did you __________ __________ that new bookshop?',
        answer: 'check out',
        explanationKo: '새로운 장소나 맛집을 한번 구경해 보다는 check out입니다.'
      }
    },
    {
      id: 'd12-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 7] 카페 커스텀 + 포장 영작',
      questionKo: '주어진 청크를 올바른 어순으로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ on the ice. / an iced oat latte / Could I get / to go, / and go easy ]',
      answer: 'Could I get an iced oat latte to go, and go easy on the ice?',
      acceptableAlt: ['Could I get an iced oat latte to go and go easy on the ice?'],
      explanationKo: 'Could I get [메뉴] to go + and go easy on [재료]? 순으로 자연스럽게 주문합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "드레싱은 따로 담아 주시고 양파는 빼 주세요"를 영작하세요.',
        stimulusEn: '힌트: Could you / hold the onions / and put the dressing / on the side?',
        answer: 'Could you hold the onions and put the dressing on the side?',
        explanationKo: 'hold the ~와 put ~ on the side를 and로 자연스럽게 연결합니다.'
      }
    },
    {
      id: 'd12-e16',
      number: 16,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 8] 환승 수하물 확인 영작',
      questionKo: '주어진 청크를 올바르게 배열하여 공항 필수 질문을 완성하세요.',
      stimulusEn: '[ to Seattle? / be checked / Will my luggage / all the way through ]',
      answer: 'Will my luggage be checked all the way through to Seattle?',
      explanationKo: 'Will + 주어(my luggage) + be checked all the way through + 목적지(to Seattle)?',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "환승 시간이 빠듯해서 앞쪽 통로석으로 부탁드려요"를 영작하세요.',
        stimulusEn: '힌트: Since I have / a tight connection, / could I get / an aisle seat near the front?',
        answer: 'Since I have a tight connection, could I get an aisle seat near the front?',
        explanationKo: '이유절(Since I have a tight connection,)을 먼저 제시하면 정중한 설득력이 올라갑니다.'
      }
    },
    {
      id: 'd12-e17',
      number: 17,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 9] 호텔 연장 & 간접의문문 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 모두 사용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 시내를 돌아다니는 가장 편한 방법이 무엇인지 알려 주시겠어요? (Could you tell me / what / the easiest way / to get around downtown / is)',
      answer: 'Could you tell me what the easiest way to get around downtown is?',
      explanationKo: '간접의문문 어순: Could you tell me + what + 주어(the easiest way to get around downtown) + 동사(is)?',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "숙박을 하룻밤 연장할 수 있을까요?"를 영작하세요.',
        stimulusEn: '힌트: Would it be possible / to extend my stay / by one night?',
        answer: 'Would it be possible to extend my stay by one night?',
        explanationKo: 'extend my stay by + 기간 구조를 유지합니다.'
      }
    },
    {
      id: 'd12-e18',
      number: 18,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 10] 정중한 교환·환불 컴플레인',
      questionKo: '우리말 뜻에 맞게 주어진 표현을 모두 활용해 문장을 완성하세요.',
      stimulusEn: '우리말: 지퍼에 불량이 있는 걸 발견했는데, 한 치수 큰 걸로 교환할 수 있을까요? (I noticed / the zipper is defective— / could I exchange it / for a size up)',
      answer: 'I noticed the zipper is defective—could I exchange it for a size up?',
      acceptableAlt: ['I noticed the zipper is defective, could I exchange it for a size up?'],
      explanationKo: '차분한 사실 관찰(I noticed ~) 뒤에 exchange it for a size up을 이어 붙입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제가 5달러 더 청구된 것 같은데 확인해 주실 수 있나요?"를 영작하세요.',
        stimulusEn: '힌트: I think / I was overcharged five dollars— / could you look into it?',
        answer: 'I think I was overcharged five dollars—could you look into it?',
        explanationKo: '수동태 overcharged와 look into it의 조합을 익혀 두세요.'
      }
    },
    {
      id: 'd12-e19',
      number: 19,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Week 2 종합] 3대 어법 오류 교정',
      questionKo: '다음 문장의 어법 오류 3곳(불가산 명사, 대명사 어순, 동명사)을 모두 고쳐 올바른 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: I dropped my luggages, tried on it, and now I look forward to see you.',
      answer: 'I dropped my bags, tried it on, and now I look forward to seeing you.',
      acceptableAlt: [
        'I dropped my luggage, tried it on, and now I look forward to seeing you.',
        'I dropped off my luggage, tried it on, and now I look forward to seeing you.'
      ],
      explanationKo: '① luggages → bags(또는 luggage), ② tried on it → tried it on, ③ look forward to see → look forward to seeing으로 3곳 모두 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 다음 오류 문장의 2곳을 고쳐 쓰세요: Tell me where is the gate, and I am getting used to travel alone.',
        stimulusEn: '간접의문문 어순과 get used to 뒤 동사 형태를 교정하세요.',
        answer: 'Tell me where the gate is, and I am getting used to traveling alone.',
        explanationKo: 'where the gate is(평서문 어순) + getting used to traveling(동명사)이 정답입니다.'
      }
    },
    {
      id: 'd12-e20',
      number: 20,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 12 피날레] Week 2 통합 통문장 영작',
      questionKo: '다음 우리말을 오늘 배운 구동사(hold on to, work out) 중 하나를 활용해 자연스러운 영어로 영작하세요.',
      stimulusEn: '우리말: 처음엔 환승 때문에 긴장했지만 결국 모든 게 매끄럽게 잘 풀렸어요. (힌트: I was nervous about the layover at first, / but everything / worked out smoothly / in the end.)',
      answer: 'I was nervous about the layover at first, but everything worked out smoothly in the end.',
      acceptableAlt: ['I was nervous about the layover at first, but everything worked out smoothly.'],
      explanationKo: '과거의 긴장감(I was nervous about ~)과 긍정적 결말(everything worked out smoothly in the end)을 대조해 완성도 높은 회고 문장을 만듭니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "교환해야 할 수도 있으니 영수증을 꼭 잘 간직해 두세요."를 영작하세요.',
        stimulusEn: '힌트: Make sure you / hold on to your receipt / in case you need an exchange.',
        answer: 'Make sure you hold on to your receipt in case you need an exchange.',
        explanationKo: 'Make sure you + hold on to ~ + in case ~는 실전 조언의 황금 구조입니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn: "Welcome back from your trip! I heard you ran into a few small hiccups along the way—how did everything work out at the airport and the hotel?",
    openingQuestionKo: '여행 잘 다녀오셨어요! 중간에 작은 변수들이 몇 개 있었다고 들었는데, 공항이랑 호텔에서는 다 어떻게 잘 풀리셨나요?',
    followUpQuestionEn: "Nice job sorting all of that out! What was your favorite moment of the trip—any great cafe orders, shopping finds, or catching up with friends?",
    followUpQuestionKo: '정말 멋지게 다 해결하셨네요! 여행 중 가장 기억에 남았던 순간은 뭐였나요? 멋진 카페 주문이나 쇼핑, 친구와의 만남 중에 들려주세요!',
    recommendedChunks: ['tight layover', 'complimentary', 'sorted out an exchange', 'go easy on ~', 'everything worked out'],
    modelAnswerEn:
      'At first I was nervous because my flight was delayed and I had a tight layover, but everything worked out smoothly! Once I settled into the hotel, I even got a complimentary upgrade, sorted out a quick jacket exchange with my receipt, and caught up with an old friend over iced oat lattes.'
  }
};
