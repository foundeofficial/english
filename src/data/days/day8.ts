import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day8Module: DayLessonModule = {
  dayNumber: 8,
  weekNumber: 2,
  cefrLevel: 'a2',
  isWeeklyReview: false,
  dayBadge: 'DAY 08 · 공항 체크인·환승·수하물',
  categoryLabel: '해외여행·출장 공항 트러블슈팅',
  title: '환승 시간 짧은데 짐은 바로 연결되나요?',
  subtitle: '좌석 지정과 수하물 위탁부터 촉박한 환승(layover), 게이트 변경, 지연·분실 수하물 대응까지 공항 전 과정을 침착하게 돌파하는 법',
  heroImage: 'assets/scene_airport_travel.jpg',
  secondaryImage: 'assets/visual_preposition_card.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 40,
  keyExpression: 'check in / layover / boarding gate',
  keySentenceByTier: {
    a1: 'I want to check in for my flight to Seattle.',
    a2: 'I have a short layover, so will my checked bag go straight to Seattle?',
    b1: 'Since I have a tight layover in San Francisco, will my luggage be checked all the way through?',
    b2: 'Could you confirm whether my baggage is tagged all the way through and which boarding gate my connecting flight uses?',
    c1: 'Given how tight my connecting flight is, could you seat me closer to the front so I can make it to the boarding gate in time?',
    c2: 'Considering the narrow transfer window and the incoming delay, would it be possible to rebook me on a later connection just in case?'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[8],
  readingPassage: {
    titleEn: 'Surviving a Tight Layover Without Losing Your Cool',
    titleKo: '촉박한 공항 환승도 당황하지 않고 통과하는 실전 노하우',
    genreBadge: '트래블 서바이벌 가이드 · Lv.2 초급',
    estimatedMin: 6,
    paragraphsEn: [
      'Even experienced flyers feel their heart rate climb when they see a seventy-minute layover on an international itinerary. The secret to a smooth transfer actually starts hours earlier at the check-in counter. Before you hand over your suitcase, always ask the agent whether your baggage will be checked all the way through to your final destination.',
      'Seat selection also matters more than most people realize during a tight connection. Politely asking for an aisle seat near the front of the cabin can save you ten crucial minutes when the plane lands. Once you step off the aircraft, check the departure monitors immediately—airports frequently switch the boarding gate at the last minute.',
      'If your first flight is delayed and you miss your connecting flight, do not panic. Walk straight to the airline transfer desk with your boarding pass ready and calmly ask to be rebooked on the next available flight. Staying polite and clear with airline staff almost always gets you a faster solution and sometimes even a meal voucher.'
    ],
    paragraphsSlash: [
      'Even experienced flyers / feel their heart rate climb / when they see a seventy-minute layover / on an international itinerary. / The secret to a smooth transfer / actually starts hours earlier / at the check-in counter. / Before you hand over your suitcase, / always ask the agent / whether your baggage will be checked all the way through / to your final destination.',
      'Seat selection also matters / more than most people realize / during a tight connection. / Politely asking for an aisle seat / near the front of the cabin / can save you ten crucial minutes / when the plane lands. / Once you step off the aircraft, / check the departure monitors immediately— / airports frequently switch the boarding gate / at the last minute.',
      'If your first flight is delayed / and you miss your connecting flight, / do not panic. / Walk straight to the airline transfer desk / with your boarding pass ready / and calmly ask to be rebooked / on the next available flight. / Staying polite and clear with airline staff / almost always gets you a faster solution / and sometimes even a meal voucher.'
    ],
    paragraphsKo: [
      '경험이 많은 여행자라도 국제선 일정표에 70분짜리 짧은 환승(layover)이 찍혀 있으면 심박수가 빨라지기 마련입니다. 매끄러운 환승의 비결은 사실 몇 시간 전 체크인 카운터에서부터 시작됩니다. 캐리어를 부치기 전에 수하물이 최종 목적지까지 자동으로 연결되는지(checked all the way through) 직원에게 꼭 확인하세요.',
      '환승 시간이 빠듯할 때는 좌석 선택도 생각보다 훨씬 중요합니다. 기내 앞쪽 통로석(aisle seat)을 정중히 요청해 두면 착륙 후 내릴 때 결정적인 10분을 아낄 수 있습니다. 비행기에서 내리자마자 출발 안내 전광판을 즉시 확인하세요—공항에서는 막판에 탑승구(boarding gate)가 바뀌는 일이 매우 잦습니다.',
      '만약 첫 항공편이 지연되어 연결편을 놓치더라도 당황하지 마세요. 탑승권을 손에 쥔 채 곧장 항공사 환승 데스크로 가서 다음 이용 가능한 항공편으로 재예약(rebook)을 침착하게 요청하면 됩니다. 항공사 직원에게 예의 바르고 명확하게 소통하면 대부분 더 빠른 해결책을 얻고, 때로는 식사 바우처까지 받을 수 있습니다.'
    ],
    keyExpressions: ['check-in counter', 'checked all the way through', 'tight connection', 'aisle seat', 'boarding gate', 'be rebooked'],
    comprehensionQuiz: [
      {
        id: 'd8-rq01',
        questionKo: '글에서 말하는 매끄러운 환승을 위해 체크인 카운터에서 가장 먼저 확인해야 할 사항은?',
        options: [
          '기내식 메뉴가 채식인지 여부',
          '수하물이 최종 목적지까지 자동 연결되는지 여부',
          '면세점이 몇 시에 문을 닫는지 여부',
          '목적지 호텔까지 택시 요금이 얼마인지 여부'
        ],
        answer: '수하물이 최종 목적지까지 자동 연결되는지 여부',
        explanationKo: '첫 문단 마지막 문장 "always ask the agent whether your baggage will be checked all the way through to your final destination"이 정답입니다.'
      },
      {
        id: 'd8-rq02',
        questionKo: '촉박한 환승(tight connection) 시 앞쪽 통로석(aisle seat)을 요청하면 어떤 장점이 있나요?',
        options: [
          '수하물 무게 제한을 10kg 늘려 준다',
          '착륙 후 비행기에서 내릴 때 결정적인 10분을 아낄 수 있다',
          '보안검색대를 통과하지 않아도 된다',
          '비즈니스 라운지를 무료로 이용할 수 있다'
        ],
        answer: '착륙 후 비행기에서 내릴 때 결정적인 10분을 아낄 수 있다',
        explanationKo: '둘째 문단 "can save you ten crucial minutes when the plane lands"가 근거입니다.'
      },
      {
        id: 'd8-rq03',
        questionKo: '첫 항공편 지연으로 연결편을 놓쳤을 때 본문이 권하는 대처법은?',
        options: [
          '공항 출구로 나가 새 티켓을 온라인으로 다시 결제한다',
          '탑승권을 들고 항공사 환승 데스크로 가서 침착하게 재예약(rebook)을 요청한다',
          '수하물 찾는 곳에서 다음 날까지 기다린다',
          '게이트가 바뀔 때까지 원래 탑승구 앞에 계속 앉아 있는다'
        ],
        answer: '탑승권을 들고 항공사 환승 데스크로 가서 침착하게 재예약(rebook)을 요청한다',
        explanationKo: '셋째 문단 "Walk straight to the airline transfer desk with your boarding pass ready and calmly ask to be rebooked"를 확인하세요.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd8-v01',
      word: 'check in',
      phonetic: '/tʃek ɪn/',
      pos: '구동사',
      cefr: 'a2',
      meaningKo: '탑승 수속을 하다, (수하물을) 위탁하다',
      meaningEn: 'register for a flight and drop off luggage at the airline counter',
      nuanceTipKo: '수속하다는 check in, 가방을 부치다는 check a bag(in 없이도 자주 씀)으로 구분해 쓰면 훨씬 자연스럽습니다.',
      exampleEn: "I'd like to check in for Flight KE023 to San Francisco.",
      exampleKo: '샌프란시스코행 KE023편 체크인하려고 합니다.'
    },
    {
      id: 'd8-v02',
      word: 'layover',
      phonetic: '/ˈleɪoʊvər/',
      pos: '명사',
      cefr: 'a2',
      meaningKo: '환승 대기 (시간), 경유 체류',
      meaningEn: 'a short stop between two connecting flights',
      nuanceTipKo: '미국 영어에서 환승 대기 시간은 transfer time보다 layover를 압도적으로 많이 씁니다 (영국식은 stopover).',
      exampleEn: 'We have a two-hour layover in Tokyo before flying to Seattle.',
      exampleKo: '시애틀로 가기 전에 도쿄에서 2시간 환승 대기가 있어요.'
    },
    {
      id: 'd8-v03',
      word: 'boarding gate',
      phonetic: '/ˈbɔːrdɪŋ ɡeɪt/',
      pos: '명사구',
      cefr: 'a2',
      meaningKo: '탑승구',
      meaningEn: 'the airport exit area where passengers board their plane',
      nuanceTipKo: '탑승구 앞 위치를 말할 때는 전치사 at을 씁니다 (at Boarding Gate B14).',
      exampleEn: 'Our boarding gate was just changed from B12 to C4.',
      exampleKo: '저희 탑승구가 방금 B12에서 C4로 변경되었어요.'
    },
    {
      id: 'd8-v04',
      word: 'connecting flight',
      phonetic: '/kəˈnektɪŋ flaɪt/',
      pos: '명사구',
      cefr: 'a2',
      meaningKo: '연결편, 환승 항공편',
      meaningEn: 'the next flight you take after landing at a transfer airport',
      nuanceTipKo: '연결편을 놓치다(miss my connecting flight), 연결편에 맞춰 타다(make my connecting flight)로 짝지어 외우세요.',
      exampleEn: 'Will I have enough time to make my connecting flight?',
      exampleKo: '연결편을 제시간에 탈 시간이 충분할까요?'
    },
    {
      id: 'd8-v05',
      word: 'carry-on',
      phonetic: '/ˈkæri ɑːn/',
      pos: '명사/형용사',
      cefr: 'a2',
      meaningKo: '기내 반입 수하물',
      meaningEn: 'a small bag you bring with you into the airplane cabin',
      nuanceTipKo: 'hand luggage보다 북미 공항에서는 "Just a carry-on today(오늘은 기내 수하물만 있어요)"가 훨씬 흔합니다.',
      exampleEn: "I'm not checking any bags—I only have this carry-on.",
      exampleKo: '부칠 짐은 없고 이 기내 수하물 하나만 있어요.'
    },
    {
      id: 'd8-v06',
      word: 'checked baggage',
      phonetic: '/tʃekt ˈbæɡɪdʒ/',
      pos: '명사구 (불가산)',
      cefr: 'a2',
      meaningKo: '위탁 수하물',
      meaningEn: 'suitcases handed over at check-in and stored in the cargo hold',
      nuanceTipKo: 'baggage와 luggage는 셀 수 없는 불가산 명사! 절대로 baggages나 luggages처럼 -s를 붙이지 마세요.',
      exampleEn: 'How many pieces of checked baggage are included in my ticket?',
      exampleKo: '제 항공권에 위탁 수하물이 몇 개까지 포함되나요?'
    },
    {
      id: 'd8-v07',
      word: 'aisle seat',
      phonetic: '/aɪl siːt/',
      pos: '명사구',
      cefr: 'a2',
      meaningKo: '통로 쪽 좌석',
      meaningEn: 'a seat next to the walkway on a plane or train',
      nuanceTipKo: '발음 함정 1위! s가 묵음이라 /에이슬/이 아니라 /아일(aɪl)/로 발음합니다. 반대는 window seat(창가석).',
      exampleEn: 'Could I have an aisle seat near the front if one is available?',
      exampleKo: '자리가 있다면 앞쪽 통로석으로 배정받을 수 있을까요?'
    },
    {
      id: 'd8-v08',
      word: 'boarding pass',
      phonetic: '/ˈbɔːrdɪŋ pæs/',
      pos: '명사구',
      cefr: 'a1',
      meaningKo: '탑승권',
      meaningEn: 'the paper or mobile document required to enter the airplane',
      nuanceTipKo: 'ticket은 결제한 항공권 전체, boarding pass는 체크인 후 게이트에서 스캔하는 탑승권입니다.',
      exampleEn: 'Please have your passport and boarding pass ready at security.',
      exampleKo: '보안검색대에서 여권과 탑승권을 미리 준비해 주세요.'
    },
    {
      id: 'd8-v09',
      word: 'checked all the way through',
      phonetic: '/tʃekt ɔːl ðə weɪ θruː/',
      pos: '수동 구문',
      cefr: 'b1',
      meaningKo: '(짐이) 최종 목적지까지 자동 연결 위탁된',
      meaningEn: 'transferred automatically between flights to the final airport',
      nuanceTipKo: '환승 공항에서 짐을 다시 찾아야 하는지 물어볼 때 가장 정확한 원어민 문장 구조입니다.',
      exampleEn: 'Will my suitcase be checked all the way through to Chicago?',
      exampleKo: '제 캐리어가 시카고까지 바로 연결되나요?'
    },
    {
      id: 'd8-v10',
      word: 'be delayed',
      phonetic: '/biː dɪˈleɪd/',
      pos: '수동태 구문',
      cefr: 'a2',
      meaningKo: '(항공편·기차가) 지연되다, 연착되다',
      meaningEn: 'made later than the originally scheduled time',
      nuanceTipKo: '비행기가 스스로 늦추는 게 아니라 지연되는 것이므로 항상 수동태(is delayed / has been delayed)를 씁니다.',
      exampleEn: 'Our flight has been delayed by forty-five minutes due to weather.',
      exampleKo: '기상 악화로 저희 항공편이 45분 지연되었습니다.'
    },
    {
      id: 'd8-v11',
      word: 'baggage claim',
      phonetic: '/ˈbæɡɪdʒ kleɪm/',
      pos: '명사구',
      cefr: 'a2',
      meaningKo: '수하물 찾는 곳',
      meaningEn: 'the airport area where passengers pick up checked suitcases',
      nuanceTipKo: '공항 도착 후 컨베이어 벨트 표지판에 항상 "Baggage Claim"이라고 적혀 있습니다.',
      exampleEn: 'My bag did not show up at baggage claim—where can I file a report?',
      exampleKo: '수하물 찾는 곳에서 제 가방이 안 나왔는데 어디서 신고할 수 있나요?'
    },
    {
      id: 'd8-v12',
      word: 'customs',
      phonetic: '/ˈkʌstəmz/',
      pos: '명사 (복수형)',
      cefr: 'b1',
      meaningKo: '세관 (심사)',
      meaningEn: 'the official checkpoint for inspecting goods entering a country',
      nuanceTipKo: '단수 custom은 "관습", 복수 customs가 "세관"입니다! go through customs(세관을 통과하다)로 외우세요.',
      exampleEn: 'Do I have to pick up my bag and go through customs in San Francisco?',
      exampleKo: '샌프란시스코에서 짐을 찾아서 세관을 통과해야 하나요?'
    },
    {
      id: 'd8-v13',
      word: 'overhead bin',
      phonetic: '/ˌoʊvərˈhed bɪn/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '기내 머리 위 수하물 선반',
      meaningEn: 'the storage compartment above airplane seats',
      nuanceTipKo: '기내에서 가방을 올릴 자리가 없을 때 승무원에게 "There is no room in the overhead bin"이라고 말할 수 있습니다.',
      exampleEn: 'Could you help me lift my carry-on into the overhead bin?',
      exampleKo: '기내 수하물을 머리 위 선반에 올리는 것 좀 도와주실 수 있나요?'
    },
    {
      id: 'd8-v14',
      word: 'tight connection',
      phonetic: '/taɪt kəˈnekʃən/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '시간이 촉박한 환승',
      meaningEn: 'a connecting flight with very little transfer time',
      nuanceTipKo: '승무원이나 보안검색 직원에게 "I have a tight connection"이라고 말하면 앞줄로 배려받을 때가 많습니다.',
      exampleEn: 'Excuse me, I have a tight connection—could I get off first?',
      exampleKo: '실례지만 환승 시간이 아주 촉박해서 먼저 내려도 될까요?'
    },
    {
      id: 'd8-v15',
      word: 'rebook',
      phonetic: '/ˌriːˈbʊk/',
      pos: '동사',
      cefr: 'b1',
      meaningKo: '(항공편·호텔을) 재예약하다, 다른 편으로 변경하다',
      meaningEn: 'book a new flight or reservation after a cancellation or delay',
      nuanceTipKo: '결항·지연으로 비행기를 놓쳤을 때 transfer desk에서 가장 먼저 꺼내야 할 핵심 동사입니다.',
      exampleEn: 'Could you rebook me on the next direct flight to Seattle?',
      exampleKo: '시애틀행 다음 직항편으로 다시 예약해 주실 수 있을까요?'
    }
  ],
  dialogue: [
    {
      id: 'd8-t01',
      speaker: 'Sarah',
      roleLabel: '항공사 체크인 직원',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'zoom-in',
      english: 'Good morning! May I see your passport and know your final destination today?',
      slashBroken: 'Good morning! / May I see your passport / and know your final destination today?',
      korean: '좋은 아침입니다! 여권을 보여 주시고 오늘 최종 목적지를 말씀해 주시겠어요?',
      keyHighlight: 'final destination',
      noteKo: '환승편이 있는 경우에도 체크인 직원은 경유지가 아닌 최종 목적지(final destination)를 먼저 묻습니다.'
    },
    {
      id: 'd8-t02',
      speaker: 'Minho',
      roleLabel: '출장객 (한국인)',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'pan-right',
      english: "Here's my passport. I'm flying to Seattle with a short layover in San Francisco.",
      slashBroken: "Here's my passport. / I'm flying to Seattle / with a short layover / in San Francisco.",
      korean: '여기 여권입니다. 샌프란시스코에서 짧은 환승을 거쳐 시애틀로 가고 있어요.',
      keyHighlight: 'with a short layover',
      noteKo: 'with a short/two-hour layover in [경유 도시] 패턴은 공항·입국심사 모두에서 쓸모가 많습니다.'
    },
    {
      id: 'd8-t03',
      speaker: 'Sarah',
      roleLabel: '항공사 체크인 직원',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'zoom-in',
      english: 'Got it. Are you checking any bags today, and do you prefer a window or an aisle seat?',
      slashBroken: 'Got it. / Are you checking any bags today, / and do you prefer / a window or an aisle seat?',
      korean: '알겠습니다. 오늘 부치실 수하물이 있으신가요? 그리고 창가석과 통로석 중 어느 쪽을 선호하세요?',
      keyHighlight: 'a window or an aisle seat',
      noteKo: 'aisle 발음(/아일/)을 정확히 귀에 익혀 두어야 직원의 질문을 1초 만에 알아들을 수 있습니다.'
    },
    {
      id: 'd8-t04',
      speaker: 'Minho',
      roleLabel: '출장객 (한국인)',
      voicePitch: 0.92,
      sceneImage: 'assets/visual_preposition_card.jpg',
      cameraMotion: 'pan-left',
      english: "I'm checking one suitcase and keeping this carry-on. An aisle seat near the front would be great since I have a tight connection.",
      slashBroken: "I'm checking one suitcase / and keeping this carry-on. / An aisle seat near the front would be great / since I have a tight connection.",
      korean: '캐리어 하나 부치고 이 기내 가방은 들고 탈게요. 환승 시간이 빠듯해서 앞쪽 통로석이면 좋겠습니다.',
      keyHighlight: 'since I have a tight connection',
      noteKo: '좌석 요청 뒤에 이유(since I have a tight connection)를 덧붙이면 직원이 훨씬 적극적으로 좋은 자리를 찾아 줍니다.'
    },
    {
      id: 'd8-t05',
      speaker: 'Sarah',
      roleLabel: '항공사 체크인 직원',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'zoom-in',
      english: 'I put you in 14C—an aisle seat toward the front. Please place your suitcase on the scale.',
      slashBroken: 'I put you in 14C— / an aisle seat toward the front. / Please place your suitcase / on the scale.',
      korean: '앞쪽 통로석인 14C로 배정해 드렸어요. 캐리어를 저울 위에 올려 주세요.',
      keyHighlight: 'on the scale',
      noteKo: '체크인 카운터에서 "place your bag on the scale"은 "가방을 무게 저울 위에 올려 주세요"라는 뜻입니다.'
    },
    {
      id: 'd8-t06',
      speaker: 'Minho',
      roleLabel: '출장객 (한국인)',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'pan-right',
      english: 'Thanks! Will my luggage be checked all the way through to Seattle, or do I need to claim it in San Francisco?',
      slashBroken: 'Thanks! / Will my luggage be checked all the way through / to Seattle, / or do I need to claim it / in San Francisco?',
      korean: '감사합니다! 제 수하물이 시애틀까지 바로 연결되나요, 아니면 샌프란시스코에서 찾아야 하나요?',
      keyHighlight: 'checked all the way through',
      noteKo: '미국 입국 환승처럼 첫 기착지에서 짐을 찾고 세관을 통과해야 하는 경우가 있어 꼭 물어봐야 하는 필수 질문입니다.'
    },
    {
      id: 'd8-t07',
      speaker: 'Sarah',
      roleLabel: '항공사 체크인 직원',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'zoom-in',
      english: "Because San Francisco is your first U.S. entry, you'll pick it up at baggage claim, clear customs, and drop it right back off before heading to Boarding Gate G6.",
      slashBroken: "Because San Francisco is your first U.S. entry, / you'll pick it up at baggage claim, / clear customs, / and drop it right back off / before heading to Boarding Gate G6.",
      korean: '샌프란시스코가 미국 첫 입국지이기 때문에, 수하물 찾는 곳에서 짐을 찾아 세관을 통과하신 뒤 바로 다시 맡기시고 G6 탑승구로 가시면 됩니다.',
      keyHighlight: 'clear customs',
      noteKo: 'clear customs(세관을 통과하다) + drop it right back off(바로 환승 수하물 벨트에 다시 내려놓다) 흐름이 실전 그대로입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 불가산 명사 함정 1위: luggage / baggage (절대 -s 금지!)',
      coreFormula: 'a piece of luggage / two checked bags (O) ↔ two luggages / a baggage (X)',
      wrongKonglish: 'I have two checked luggages and one carry-on baggages.',
      rightNative: 'I have two checked bags and one carry-on.',
      explanationKo:
        '한국어 "짐 두 개"를 그대로 옮겨 "two luggages"라고 말하는 실수가 공항에서 정말 잦습니다. luggage와 baggage는 총칭 개념의 불가산 명사이므로 복수형 -s나 부정관사 a를 붙이지 않습니다. 개수를 말할 때는 가장 간결하게 bags/suitcases를 쓰거나, 격식 있게 "two pieces of checked baggage"라고 표현하세요.',
      registerSpectrum: {
        casual: "I'm checking two bags and carrying this backpack on.",
        standard: 'I have two checked bags and one carry-on.',
        formal: 'I will be checking two pieces of luggage for this international flight.'
      }
    },
    {
      title: '원리 02 · 환승·지연 시 필수 수동태: be checked through & be delayed',
      coreFormula: 'Will my bag be checked all the way through? / My flight has been delayed.',
      wrongKonglish: 'Will my bag check all the way? My flight delayed one hour.',
      rightNative: 'Will my bag be checked all the way through? My flight has been delayed by an hour.',
      explanationKo:
        '가방이나 비행기는 행동을 "당하는" 대상입니다. 따라서 가방이 연결되는 것은 "be checked all the way through", 비행기가 지연된 것은 "is delayed / has been delayed", 내가 다른 편으로 재예약받는 것은 "be rebooked"처럼 반드시 수동태(be + p.p.)를 사용해야 의미가 정확해집니다.',
      registerSpectrum: {
        casual: 'Is my bag going straight through? My flight got delayed.',
        standard: 'Will my luggage be checked all the way through? My flight is delayed.',
        formal: 'Could you confirm whether my baggage has been tagged through, as my first leg was delayed?'
      }
    },
    {
      title: '원리 03 · 공항 전치사 3초 지도: at Gate ~ · through customs · on the next flight',
      coreFormula: 'at Boarding Gate B12 (지점) / through security & customs (통과) / on the next flight (탑승)',
      wrongKonglish: 'I am waiting in Gate B12 after passing customs and booking in the next flight.',
      rightNative: 'I am waiting at Gate B12 after going through customs and rebooking on the next flight.',
      explanationKo:
        '공항 표지판과 안내방송의 전치사는 이미지로 외우면 틀리지 않습니다. ① 탑승구·체크인 카운터 같은 정확한 지점은 at, ② 보안검색대·세관처럼 관문을 통과하는 동작은 through, ③ 항공편·기차에 올라타는 것은 on(on Flight 204 / on the next flight)을 씁니다.',
      registerSpectrum: {
        casual: "I'm through security and hanging out at Gate B12.",
        standard: 'Please meet me at Boarding Gate B12 after you go through customs.',
        formal: 'Passengers rebooked on the 4:30 PM departure should proceed directly to Gate B12.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd8-s01',
      drillType: 'chunk-build',
      promptKo: '시애틀행 항공편 체크인하려고 합니다.',
      promptEnHint: '정중한 의사 표현 I would like to check in for ~ 를 조립하세요.',
      targetEn: "I'd like to check in for my flight to Seattle.",
      chunks: ["I'd like to", 'check in', 'for my flight', 'to Seattle.'],
      explanationKo: 'check in for + 항공편명/목적지 비행편 형태로 사용합니다.'
    },
    {
      id: 'd8-s02',
      drillType: 'konglish-fix',
      promptKo: '"위탁 수하물 두 개가 있어요." — 불가산 명사 어법이 정확한 문장은?',
      promptEnHint: 'luggage/baggage에는 복수형 -s를 붙이지 않습니다.',
      targetEn: 'I have two checked bags to drop off.',
      wrongKonglishOption: 'I have two checked luggages to drop off.',
      explanationKo: 'luggage는 불가산 명사이므로 개수를 셀 때는 two bags 또는 two pieces of luggage라고 합니다.'
    },
    {
      id: 'd8-s03',
      drillType: 'active-blank',
      promptKo: '도쿄에서 두 시간 환승 대기가 있어요.',
      promptEnHint: '환승 대기 시간을 뜻하는 미국식 명사(7글자)를 넣으세요.',
      targetEn: 'I have a two-hour layover in Tokyo.',
      blankData: {
        before: 'I have a two-hour',
        answer: 'layover',
        after: 'in Tokyo.',
        firstLetterHint: 'l (7글자)'
      },
      explanationKo: 'a [시간]-hour layover in [도시] 패턴은 여행 영어에서 매우 자주 쓰입니다.'
    },
    {
      id: 'd8-s04',
      drillType: 'chunk-build',
      promptKo: '제 가방이 최종 목적지까지 바로 연결되나요?',
      promptEnHint: '수동태 Will my bag be checked ~ 로 시작하세요.',
      targetEn: 'Will my bag be checked all the way through?',
      chunks: ['Will my bag', 'be checked', 'all the way', 'through?'],
      explanationKo: '가방이 연결 위탁되는 것이므로 수동태 be checked all the way through를 씁니다.'
    },
    {
      id: 'd8-s05',
      drillType: 'konglish-fix',
      promptKo: '"저희 비행기가 날씨 때문에 40분 지연되었어요." — 정확한 수동태 문장은?',
      promptEnHint: '비행기가 지연 "당한" 것이므로 수동태를 고르세요.',
      targetEn: 'Our flight has been delayed by forty minutes.',
      wrongKonglishOption: 'Our flight delayed by forty minutes.',
      explanationKo: '항공편 지연은 능동태가 아니라 is delayed / has been delayed 수동태로 표현합니다.'
    },
    {
      id: 'd8-s06',
      drillType: 'active-blank',
      promptKo: '자리가 있다면 앞쪽 통로석으로 부탁드려요.',
      promptEnHint: '통로 쪽 좌석(2단어, 묵음 s 주의!)을 넣으세요.',
      targetEn: 'Could I have an aisle seat near the front?',
      blankData: {
        before: 'Could I have an',
        answer: 'aisle seat',
        after: 'near the front?',
        firstLetterHint: 'a____ s___ (2단어)'
      },
      explanationKo: 'aisle(/아일/)은 모음 발음으로 시작하므로 부정관사 an을 붙여 an aisle seat라고 합니다.'
    },
    {
      id: 'd8-s07',
      drillType: 'chunk-build',
      promptKo: '시애틀행 다음 이용 가능한 항공편으로 재예약해 주실 수 있나요?',
      promptEnHint: 'rebook me on + 항공편 구조를 조립하세요.',
      targetEn: 'Could you rebook me on the next available flight?',
      chunks: ['Could you', 'rebook me', 'on the next', 'available flight?'],
      explanationKo: '결항이나 환승 실패 시 transfer desk에서 바로 쓸 수 있는 핵심 문장입니다.'
    },
    {
      id: 'd8-s08',
      drillType: 'active-blank',
      promptKo: '수하물 찾는 곳에서 제 캐리어가 나오지 않았어요.',
      promptEnHint: '수하물 찾는 곳을 뜻하는 2단어 표현을 넣으세요.',
      targetEn: 'My suitcase did not show up at baggage claim.',
      blankData: {
        before: 'My suitcase did not show up at',
        answer: 'baggage claim',
        after: '.',
        firstLetterHint: 'b______ c____ (2단어)'
      },
      explanationKo: '공항 도착 후 짐이 나오는 구역은 baggage claim입니다.'
    },
    {
      id: 'd8-s09',
      drillType: 'konglish-fix',
      promptKo: '"세관을 통과한 뒤 B12 탑승구로 가세요." — 단어와 전치사가 정확한 문장은?',
      promptEnHint: '세관은 복수형 customs, 탑승구 지점은 전치사 at을 확인하세요.',
      targetEn: 'Go through customs and wait at Boarding Gate B12.',
      wrongKonglishOption: 'Go through custom and wait in Boarding Gate B12.',
      explanationKo: '세관은 반드시 복수형 customs를 쓰며(단수 custom은 관습), 탑승구 앞은 at을 씁니다.'
    },
    {
      id: 'd8-s10',
      drillType: 'chunk-build',
      promptKo: '부칠 짐은 없고 이 기내 수하물 하나만 있어요.',
      promptEnHint: 'I only have this carry-on 구조를 뒤에 연결하세요.',
      targetEn: "I'm not checking any bags, and I only have this carry-on.",
      chunks: ["I'm not checking", 'any bags,', 'and I only have', 'this carry-on.'],
      explanationKo: '수하물을 부치지 않고 기내 가방만 들고 탈 때 가장 자연스러운 답변입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd8-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '환승 대기 명사 layover',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "샌프란시스코에서 90분 환승 대기가 있다"를 완성하세요.',
      stimulusEn: 'We have a ninety-minute __________ in San Francisco.',
      answer: 'layover',
      acceptableAlt: ['stopover'],
      explanationKo: '항공편 사이의 환승 대기 시간은 layover라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "환승 시간이 아주 빠듯해서 먼저 내려도 될까요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Excuse me, I have a __________ __________—could I pass through?',
        answer: 'tight connection',
        explanationKo: '촉박한 환승은 tight connection이라고 표현합니다.'
      }
    },
    {
      id: 'd8-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '기내 수하물 carry-on',
      questionKo: '빈칸에 알맞은 표현(하이픈 포함)을 넣어 "저는 기내 수하물만 하나 있어요"를 완성하세요.',
      stimulusEn: 'I am not checking a suitcase; I only have one __________.',
      answer: 'carry-on',
      acceptableAlt: ['carry-on bag'],
      explanationKo: '기내에 직접 들고 타는 작은 가방은 carry-on입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "가방을 머리 위 선반에 올리는 것 좀 도와주시겠어요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Could you help me put this in the __________ __________?',
        answer: 'overhead bin',
        explanationKo: '기내 좌석 위 수하물 칸은 overhead bin입니다.'
      }
    },
    {
      id: 'd8-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '통로석 aisle seat',
      questionKo: '빈칸에 알맞은 단어(1단어, 묵음 s 주의)를 써서 "통로석을 선호합니다"를 완성하세요.',
      stimulusEn: 'I prefer an __________ seat so I can get up easily during the flight.',
      answer: 'aisle',
      explanationKo: '통로석은 aisle seat이며, 발음이 모음(/aɪl/)로 시작해 앞에 an이 붙습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "창가석으로 배정받을 수 있을까요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Is it possible to get a __________ __________?',
        answer: 'window seat',
        explanationKo: '창가석은 window seat입니다.'
      }
    },
    {
      id: 'd8-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '항공편 재예약 rebook',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "다음 항공편으로 재예약해 주실 수 있나요?"를 완성하세요.',
      stimulusEn: 'My first flight was delayed—could you __________ me on the next flight?',
      answer: 'rebook',
      explanationKo: '연결편을 놓쳤을 때 다른 비행기로 변경 예약하는 동사는 rebook입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "연결편을 제시간에 탈 수 있을까요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Will I be able to make my __________ __________?',
        answer: 'connecting flight',
        explanationKo: '환승해서 이어 타는 비행기는 connecting flight입니다.'
      }
    },
    {
      id: 'd8-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '수하물 찾기 & 세관',
      questionKo: '빈칸에 알맞은 명사(1단어, 복수형 주의)를 넣어 "세관을 통과해야 한다"를 완성하세요.',
      stimulusEn: 'After picking up your bag, follow the signs to go through __________.',
      answer: 'customs',
      explanationKo: '공항 세관은 반드시 복수형 customs를 씁니다 (custom은 관습).',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "수하물 찾는 곳이 어디인가요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Could you tell me where __________ __________ is?',
        answer: 'baggage claim',
        explanationKo: '위탁 수하물을 되찾는 구역은 baggage claim입니다.'
      }
    },
    {
      id: 'd8-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '불가산 명사 luggage/baggage',
      questionKo: '다음 중 수하물 관련 명사 어법이 가장 정확한 문장은?',
      stimulusEn: 'luggage와 baggage가 불가산 명사임을 기억하며 고르세요.',
      options: [
        'I have three heavy luggages to check in.',
        'One of my baggages did not arrive at Seattle.',
        'I have two checked bags and one carry-on.',
        'Could you help me carry a luggage?'
      ],
      answer: 'I have two checked bags and one carry-on.',
      explanationKo: 'luggage/baggage에는 a나 -s를 붙일 수 없으며, 개수를 셀 때는 bags나 pieces of luggage를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "위탁 수하물 두 개를 부치고 싶어요" 빈칸(1단어)을 채우세요.',
        stimulusEn: 'I would like to check two __________ of luggage.',
        answer: 'pieces',
        explanationKo: '불가산 명사 luggage의 개수를 격식 있게 셀 때는 pieces of luggage를 씁니다.'
      }
    },
    {
      id: 'd8-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '수하물 자동 연결 수동태',
      questionKo: '환승 시 짐이 최종 목적지까지 자동으로 넘어가는지 물을 때 어법상 올바른 문장은?',
      stimulusEn: '상황: 서울 출발 → 샌프란시스코 경유 → 시애틀 도착 체크인 중',
      options: [
        'Will my suitcase check all the way through to Seattle?',
        'Will my suitcase be checked all the way through to Seattle?',
        'Does my suitcase checking through to Seattle?',
        'Will my suitcase checked all the way to Seattle?'
      ],
      answer: 'Will my suitcase be checked all the way through to Seattle?',
      explanationKo: '조동사 Will 뒤에는 동사원형 be + 과거분사 checked가 와야 올바른 미래 수동태가 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 비행기가 1시간 지연되었어요" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'My flight __________ __________ by one hour.',
        answer: 'is delayed',
        explanationKo: 'is delayed(또는 was delayed)처럼 수동태 형태로 써야 자연스럽습니다.'
      }
    },
    {
      id: 'd8-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '공항 핵심 전치사',
      questionKo: '빈칸 (A)와 (B)에 들어갈 전치사가 바르게 짝지어진 것은?',
      stimulusEn: 'Once you get (A) ______ security, your flight boards (B) ______ Gate C8.',
      options: ['(A) into — (B) on', '(A) through — (B) at', '(A) over — (B) in', '(A) across — (B) to'],
      answer: '(A) through — (B) at',
      explanationKo: '보안검색대 통과는 get/go through security, 특정 탑승구 지점은 at Gate C8을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "다음 직항편으로 저를 재예약해 주실 수 있나요?" 빈칸 전치사(1단어)를 쓰세요.',
        stimulusEn: 'Could you rebook me __________ the next direct flight?',
        answer: 'on',
        explanationKo: '특정 항공편 탑승·예약은 전치사 on을 사용합니다.'
      }
    },
    {
      id: 'd8-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'boarding pass vs ticket 구별',
      questionKo: '보안검색대와 탑승구에서 여권과 함께 스캔하는 탑승권을 가리키는 가장 정확한 표현은?',
      stimulusEn: 'Please hold your passport and __________ flat against the scanner.',
      options: ['boarding pass', 'baggage claim', 'overhead bin', 'customs form'],
      answer: 'boarding pass',
      explanationKo: '체크인 후 발급받아 검색대와 게이트에서 스캔하는 문서는 boarding pass입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "탑승구가 B14로 바뀌었어요" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Our __________ __________ has changed to B14.',
        answer: 'boarding gate',
        explanationKo: '비행기를 타는 출구는 boarding gate입니다.'
      }
    },
    {
      id: 'd8-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '수하물 미도착 트러블슈팅',
      questionKo: '도착 공항 컨베이어 벨트에서 내 캐리어가 나오지 않았을 때 항공사 수하물 센터에 할 가장 적절한 말은?',
      stimulusEn: '상황: 벨트가 멈췄는데 내 위탁 수하물만 보이지 않는 상황',
      options: [
        'My checked bag did not show up at baggage claim. Can I file a missing bag report?',
        'My carry-on is very heavy, so keep the change.',
        'I want an aisle seat for my luggage.',
        'Please hold the suitcase on the side.'
      ],
      answer: 'My checked bag did not show up at baggage claim. Can I file a missing bag report?',
      explanationKo: 'did not show up(나타나지 않았다) + file a missing bag report(분실 수하물 신고서를 접수하다)가 정확한 대응입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 가방이 아직 안 나왔어요" 빈칸 동사구(2단어)를 채우세요.',
        stimulusEn: 'My bag still has not __________ __________ on the belt.',
        answer: 'shown up',
        explanationKo: 'has not 뒤이므로 show의 과거분사 shown up을 씁니다.'
      }
    },
    {
      id: 'd8-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '수하물 자동 연결 질문 배열',
      questionKo: '주어진 청크를 올바른 어순으로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ to Seattle? / Will my luggage / all the way through / be checked ]',
      answer: 'Will my luggage be checked all the way through to Seattle?',
      explanationKo: 'Will + 주어(my luggage) + be checked + all the way through + 목적지(to Seattle)? 순으로 조립합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 가방이 시카고까지 바로 연결되나요?"를 영작하세요.',
        stimulusEn: '힌트: Will my bag / be checked / all the way through / to Chicago?',
        answer: 'Will my bag be checked all the way through to Chicago?',
        explanationKo: '수동태 be checked all the way through 패턴을 그대로 활용합니다.'
      }
    },
    {
      id: 'd8-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '좌석 요청 + 환승 이유 연결',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ a tight connection. / Could I get / since I have / an aisle seat near the front ]',
      answer: 'Could I get an aisle seat near the front since I have a tight connection?',
      explanationKo: '[요청] Could I get an aisle seat near the front + [이유] since I have a tight connection? 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "자리가 있다면 통로석으로 부탁드려요"를 영작하세요.',
        stimulusEn: '힌트: Could I have / an aisle seat / if available?',
        answer: 'Could I have an aisle seat if available?',
        explanationKo: 'an aisle seat의 부정관사 an에 유의하세요.'
      }
    },
    {
      id: 'd8-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '연결편 재예약 요청 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 모두 활용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 다음 이용 가능한 항공편으로 저를 재예약해 주실 수 있을까요? (Could you / rebook me / on / the next available flight)',
      answer: 'Could you rebook me on the next available flight?',
      explanationKo: 'rebook [사람] on [항공편] 구조를 기억하면 결항·지연 시 막힘없이 대처할 수 있습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "내일 아침 직항편으로 재예약해 주실 수 있나요?"를 영작하세요.',
        stimulusEn: '힌트: Could you / rebook me / on / tomorrow morning’s direct flight?',
        answer: "Could you rebook me on tomorrow morning's direct flight?",
        explanationKo: 'rebook me on + 항공편 순서를 그대로 적용합니다.'
      }
    },
    {
      id: 'd8-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 문장의 어법 오류 2곳(불가산 명사, 수동태)을 바르게 고쳐 다시 쓰세요.',
      stimulusEn: '오류 문장: My flight delayed, and I have two checked luggages.',
      answer: 'My flight was delayed, and I have two checked bags.',
      acceptableAlt: ['My flight is delayed, and I have two checked bags.', 'My flight has been delayed, and I have two checked bags.'],
      explanationKo: '① delayed → was/is/has been delayed(수동태), ② two checked luggages → two checked bags(불가산 명사 교정)로 수정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 다음 오류 문장을 바르게 고쳐 쓰세요: I went through custom and waited in Gate B5.',
        stimulusEn: '세관 복수형과 탑승구 전치사 2곳을 교정하세요.',
        answer: 'I went through customs and waited at Gate B5.',
        explanationKo: 'customs(세관) + at Gate B5로 교정합니다.'
      }
    },
    {
      id: 'd8-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 한영 통문장 영작',
      questionKo: '다음 우리말을 오늘 배운 표현(layover, connecting flight) 중 하나를 활용해 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 제 연결편을 제시간에 탈 시간이 충분할까요? (힌트: Will I have / enough time / to make / my connecting flight?)',
      answer: 'Will I have enough time to make my connecting flight?',
      explanationKo: 'make + 교통편은 "~을 놓치지 않고 제시간에 타다"라는 핵심 동사 활용입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "도쿄에서 2시간 환승 대기가 있어요."를 영작하세요.',
        stimulusEn: '힌트: I have / a two-hour layover / in Tokyo.',
        answer: 'I have a two-hour layover in Tokyo.',
        explanationKo: '복합 형용사 two-hour는 단수 hour를 쓰는 점까지 챙기면 완벽합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn: 'Good morning! Welcome to the check-in counter. Where are you flying to today, and are you checking any bags?',
    openingQuestionKo: '좋은 아침입니다! 체크인 카운터에 오신 걸 환영합니다. 오늘 어디로 가시나요? 부치실 수하물이 있으신가요?',
    followUpQuestionEn: 'Sure, I can check that suitcase for you. Would you prefer a window or an aisle seat, and do you have any questions about your layover?',
    followUpQuestionKo: '네, 캐리어 위탁 도와드릴게요. 창가석과 통로석 중 어느 쪽이 좋으신가요? 환승 관련해서 궁금한 점도 있으신가요?',
    recommendedChunks: ['check in for ~', 'a short layover', 'an aisle seat', 'checked all the way through', 'boarding gate'],
    modelAnswerEn:
      "I'm flying to Seattle with a short layover in San Francisco, and I'm checking one suitcase. Could I get an aisle seat near the front, and will my luggage be checked all the way through?"
  }
};
