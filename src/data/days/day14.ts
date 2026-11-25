import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day14Module: DayLessonModule = {
  dayNumber: 14,
  weekNumber: 3,
  cefrLevel: 'b1',
  dayBadge: 'DAY 14 · 영문 이메일 구조 & 회신 요청',
  categoryLabel: 'Week 3 오피스 실무 · 영문 이메일 & 협업 팔로업',
  title: '첨부 파일 확인 부탁드립니다',
  subtitle: '콩글리시 직역 이메일에서 벗어나, 미국 오피스 표준 구조로 첨부 안내·리마인드·회신 요청을 간결하고 세련되게 쓰는 법',
  heroImage: 'assets/office_sitcom_scene.jpg',
  secondaryImage: 'assets/scene_video_call.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 40,
  keyExpression: "Please find the deck attached, and I'll circle back by Friday.",
  keySentenceByTier: {
    a1: 'I attached the file. Please check it and reply to me.',
    a2: 'Please check the attached file and let me know what you think.',
    b1: "I've attached the updated proposal for your review—please let me know your thoughts by Thursday.",
    b2: "Per our conversation, please find the Q4 deck attached, and I'll circle back with final numbers by EOD Friday.",
    c1: "I'm reaching out to touch base on the attached contract; I've CC'd legal to keep everyone in the loop and would appreciate your sign-off at your earliest convenience.",
    c2: "Following up on yesterday's sync, I've attached the revised scope along with a quick heads-up on timeline risks—do let me know if any adjustments are needed before we lock in the launch."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[14],
  readingPassage: {
    titleEn: 'Subject: Q4 Launch Deck & Quick Follow-Up',
    titleKo: '[실무 이메일 사례] 4분기 런칭 덱 첨부 및 정중한 회신 팔로업',
    genreBadge: '실무 이메일 스레드 · Lv.3',
    estimatedMin: 5,
    paragraphsEn: [
      'Hi Marcus, I hope your week is off to a smooth start. Per our conversation yesterday, I have attached the revised Q4 campaign deck along with the media budget breakdown. I also CC\'d Hannah from finance on this thread to keep her in the loop on the updated spend.',
      'Just a quick heads-up: our agency needs final approval on the creative assets by Thursday afternoon to hold our ad slots. If you could look over slides four through seven and sign off on the copy at your earliest convenience, we will stay right on schedule.',
      'I know you have a busy week ahead, so I will circle back tomorrow morning as a gentle reminder if I haven\'t heard from you. In the meantime, feel free to reach out on Slack if you would like to touch base on any details before I am out of office on Friday.'
    ],
    paragraphsSlash: [
      'Hi Marcus, / I hope your week is off to a smooth start. / Per our conversation yesterday, / I have attached the revised Q4 campaign deck / along with the media budget breakdown. / I also CC\'d Hannah from finance on this thread / to keep her in the loop / on the updated spend.',
      'Just a quick heads-up: / our agency needs final approval / on the creative assets by Thursday afternoon / to hold our ad slots. / If you could look over slides four through seven / and sign off on the copy / at your earliest convenience, / we will stay right on schedule.',
      'I know you have a busy week ahead, / so I will circle back tomorrow morning / as a gentle reminder / if I haven\'t heard from you. / In the meantime, / feel free to reach out on Slack / if you would like to touch base on any details / before I am out of office on Friday.'
    ],
    paragraphsKo: [
      '안녕하세요 마커스, 이번 주 순조롭게 시작하셨길 바랍니다. 어제 나눈 대화에 따라 수정된 4분기 캠페인 자료와 매체 예산 세부 내역을 첨부해 드립니다. 변경된 지출 내역을 함께 공유받으실 수 있도록 재무팀의 한나 님도 이 이메일 스레드 참조(CC)에 넣었습니다.',
      '미리 한 가지 귀띔드리자면, 광고 구좌를 확보하기 위해 에이전시에서 목요일 오후까지 크리에이티브 시안 최종 승인이 필요합니다. 편하신 가장 빠른 시간에 4~7번 슬라이드를 검토하시고 카피를 최종 승인해 주시면 일정대로 정확히 진행할 수 있습니다.',
      '이번 주 많이 바쁘신 줄 알기에 회신이 없으시면 내일 오전에 정중한 리마인드로 다시 연락드리겠습니다. 그사이에 제가 금요일 부재중(휴가)에 들어가기 전 세부 사항을 간단히 논의하고 싶으시다면 언제든 슬랙으로 편하게 연락 주세요.'
    ],
    keyExpressions: [
      'per our conversation',
      'attach / as attached',
      'keep ~ in the loop',
      'a quick heads-up',
      'sign off on',
      'circle back / touch base'
    ],
    comprehensionQuiz: [
      {
        id: 'd14-rq01',
        questionKo: '발신자가 재무팀의 한나(Hannah) 님을 참조(CC)에 넣은 이유는 무엇인가요?',
        options: [
          '크리에이티브 카피를 직접 수정해 달라고 요청하기 위해',
          '변경된 예산 지출 내역을 계속 공유받도록 하기 위해(keep her in the loop)',
          '금요일에 대신 휴가 업무를 인계받기 위해',
          '에이전시 담당자 연락처를 물어보기 위해'
        ],
        answer: '변경된 예산 지출 내역을 계속 공유받도록 하기 위해(keep her in the loop)',
        explanationKo: '첫째 문단 "to keep her in the loop on the updated spend"가 정확한 이유입니다.'
      },
      {
        id: 'd14-rq02',
        questionKo: '에이전시가 목요일 오후까지 최종 승인을 필요로 하는 이유는 무엇인가요?',
        options: [
          '광고 구좌(ad slots)를 확보·유지하기 위해',
          '재무 감사가 목요일에 시작되기 때문에',
          '마커스가 금요일에 출장을 떠나기 때문에',
          '예산안을 처음부터 다시 작성해야 하기 때문에'
        ],
        answer: '광고 구좌(ad slots)를 확보·유지하기 위해',
        explanationKo: '둘째 문단 "needs final approval on the creative assets by Thursday afternoon to hold our ad slots"를 확인하세요.'
      },
      {
        id: 'd14-rq03',
        questionKo: '본문에서 "어제 나눈 대화에 따라(말씀드린 대로)"를 격식 있게 표현한 문구는?',
        options: [
          'As a gentle reminder',
          'At your earliest convenience',
          'Per our conversation yesterday',
          'In the meantime'
        ],
        answer: 'Per our conversation yesterday',
        explanationKo: 'Per our conversation / Per our call은 이전 논의를 깔끔하게 연결하는 영문 이메일 핵심 표현입니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd14-v01',
      word: 'attach',
      phonetic: '/əˈtætʃ/',
      pos: '동사',
      cefr: 'b1',
      meaningKo: '(이메일에 파일을) 첨부하다',
      meaningEn: 'include a document or file with an email',
      nuanceTipKo: '능동형 "I\'ve attached the file" 또는 수동/형용사형 "Please find the file attached" 둘 다 이메일 필수 패턴입니다.',
      exampleEn: "I've attached the signed contract for your records.",
      exampleKo: '보관하실 수 있도록 서명된 계약서를 첨부해 드렸습니다.'
    },
    {
      id: 'd14-v02',
      word: 'as attached',
      phonetic: '/æz əˈtætʃt/',
      pos: '관용 구문',
      cefr: 'b1',
      meaningKo: '첨부된 바와 같이, 첨부 파일처럼',
      meaningEn: 'as shown in the file included with this email',
      nuanceTipKo: '표나 문서를 언급하며 "첨부 파일과 같이 정리했습니다"라고 쓸 때 "as attached" 또는 "in the attached file"을 활용합니다.',
      exampleEn: 'Please review the updated schedule as attached and confirm your slot.',
      exampleKo: '첨부된 바와 같이 수정된 일정을 확인하시고 가능 시간을 확정해 주세요.'
    },
    {
      id: 'd14-v03',
      word: 'touch base',
      phonetic: '/tʌtʃ beɪs/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '(진행 상황 확인·안부를 위해) 가볍게 연락하다',
      meaningEn: 'make brief contact with someone to check in or align on updates',
      nuanceTipKo: '야구 주자가 베이스를 살짝 밟고 지나가듯, 무겁지 않게 근황이나 업무 진행을 짧게 확인하려 연락할 때 씁니다. (touch base with [사람] on [안건])',
      exampleEn: 'Just wanted to touch base with you on the Q4 budget proposal.',
      exampleKo: '4분기 예산안 건으로 진행 상황 가볍게 여쭤보려고 연락드렸습니다.'
    },
    {
      id: 'd14-v04',
      word: 'circle back',
      phonetic: '/ˈsɜːrkl bæk/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(검토·확인 후) 다시 회신하다, 추후 재논의하다',
      meaningEn: 'return to a person or topic later after checking details',
      nuanceTipKo: '지금 당장 확답하기 어려울 때 "I\'ll check with the team and circle back by tomorrow"라고 하면 신뢰감이 배가 됩니다.',
      exampleEn: "Let me confirm with legal and circle back to you by 3 PM.",
      exampleKo: '법무팀에 확인한 뒤 오후 3시까지 다시 회신드리겠습니다.'
    },
    {
      id: 'd14-v05',
      word: 'follow up on',
      phonetic: '/ˈfɑːloʊ ʌp ɑːn/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '~에 대해 후속 확인하다, 리마인드 메일을 보내다',
      meaningEn: 'check on the status of something previously sent or discussed',
      nuanceTipKo: '답장이 안 온 상대에게 "Why didn\'t you reply?" 대신 "Just following up on my email from Tuesday"라고 쓰면 세련된 재촉이 됩니다.',
      exampleEn: "I'm writing to follow up on the invoice I sent last Monday.",
      exampleKo: '지난주 월요일에 보내드린 인보이스 건을 후속 확인차 연락드립니다.'
    },
    {
      id: 'd14-v06',
      word: 'give ~ a heads-up',
      phonetic: '/ɡɪv ə ˈhedz ʌp/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '~에게 미리 귀띔하다, 사전 공지하다',
      meaningEn: 'warn or inform someone in advance about something upcoming',
      nuanceTipKo: '일정 변경, 휴가, 급한 승인 요청 등을 미리 알려줄 때 "Just a quick heads-up:"으로 시작하면 배려심 있는 프로로 보입니다.',
      exampleEn: 'Just wanted to give you a heads-up that the server maintenance starts at 8 PM.',
      exampleKo: '오후 8시에 서버 점검이 시작된다는 점 미리 귀띔드리려고요.'
    },
    {
      id: 'd14-v07',
      word: 'at your earliest convenience',
      phonetic: '/æt jʊr ˈɜːrliɪst kənˈviːniəns/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '편하신 가장 빠른 시간에 (정중한 회신 요청)',
      meaningEn: 'as soon as you reasonably can, without being pushy',
      nuanceTipKo: '"ASAP"는 상사나 클라이언트에게 무례하게 들릴 수 있습니다! 격식 있는 영문 이메일에서는 "at your earliest convenience"가 정답입니다.',
      exampleEn: 'Could you please review and return the signed form at your earliest convenience?',
      exampleKo: '편하신 가장 빠른 시간에 양식을 검토해 서명 후 회신해 주실 수 있을까요?'
    },
    {
      id: 'd14-v08',
      word: 'keep ~ in the loop',
      phonetic: '/kiːp ɪn ðə luːp/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '~에게 계속 진행 상황을 공유하다, 소통 고리에 포함시키다',
      meaningEn: 'continue to inform someone about developments in a project',
      nuanceTipKo: 'CC에 팀장이나 협업 부서를 추가할 때 이유를 밝히는 최고의 표현입니다. 반대말은 out of the loop(정보에서 소외된)입니다.',
      exampleEn: "I've added our designer to the thread to keep her in the loop.",
      exampleKo: '디자이너님께도 계속 진행 상황을 공유드리려고 스레드에 추가했습니다.'
    },
    {
      id: 'd14-v09',
      word: 'cc (someone) on',
      phonetic: '/ˌsiːˈsiː ɑːn/',
      pos: '동사 구문',
      cefr: 'b1',
      meaningKo: '~를 이메일 참조(CC)에 넣다',
      meaningEn: 'include someone as a carbon copy recipient on an email thread',
      nuanceTipKo: '전치사는 in이 아니라 on을 씁니다! "I\'ve CC\'d David on this email(thread)" 형태로 정확히 기억하세요.',
      exampleEn: "I've CC'd our account manager on this email so she can assist with billing.",
      exampleKo: '결제 지원을 도와드릴 수 있도록 담당 어카운트 매니저를 이 메일 참조에 넣었습니다.'
    },
    {
      id: 'd14-v10',
      word: 'reach out',
      phonetic: '/riːtʃ aʊt/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(문의·협업·도움을 위해) 연락하다',
      meaningEn: 'contact someone to ask a question, offer help, or initiate a conversation',
      nuanceTipKo: 'contact보다 따뜻하고 협업 친화적인 표현이며, 사람 앞에는 반드시 전치사 to(reach out to you)를 붙입니다.',
      exampleEn: 'Please feel free to reach out if you have any questions about the report.',
      exampleKo: '보고서와 관련해 궁금한 점이 있으시면 언제든 편하게 연락 주세요.'
    },
    {
      id: 'd14-v11',
      word: 'get back to',
      phonetic: '/ɡet bæk tuː/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(확인 후) ~에게 다시 답장·연락하다',
      meaningEn: 'reply to someone once you have the needed information',
      nuanceTipKo: '이메일 마무리 문장 "I\'ll get back to you by tomorrow afternoon"은 circle back과 함께 가장 자주 쓰이는 회신 약속입니다.',
      exampleEn: "Thank you for your patience—I'll get back to you with an update by noon.",
      exampleKo: '기다려 주셔서 감사합니다. 정오까지 업데이트 내용으로 회신드리겠습니다.'
    },
    {
      id: 'd14-v12',
      word: 'per our conversation',
      phonetic: '/pɜːr ˈaʊər ˌkɑːnvərˈseɪʃn/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '앞서 나눈 대화에 따라, 말씀드린 대로',
      meaningEn: 'as agreed or mentioned in our earlier discussion',
      nuanceTipKo: '전화나 미팅 직후 후속 자료를 보낼 때 첫 문장을 "Per our conversation," 또는 "As discussed,"로 시작하면 프로페셔널합니다.',
      exampleEn: 'Per our conversation earlier, here is the revised onboarding checklist.',
      exampleKo: '앞서 나눈 대화대로 수정된 온보딩 체크리스트를 보내드립니다.'
    },
    {
      id: 'd14-v13',
      word: 'a gentle reminder',
      phonetic: '/ə ˈdʒentl rɪˈmaɪndər/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '정중한 리마인드, 부드러운 재안내',
      meaningEn: 'a polite follow-up message prompting someone to take action',
      nuanceTipKo: '마감이 다가오는데 회신이 없을 때 공격적으로 들리지 않게 쿠션을 깔아주는 이메일 치트키입니다.',
      exampleEn: 'Just sending a gentle reminder that feedback is due by 5 PM today.',
      exampleKo: '오늘 오후 5시가 피드백 마감이라는 점을 정중히 다시 안내드립니다.'
    },
    {
      id: 'd14-v14',
      word: 'sign off on',
      phonetic: '/saɪn ɔːf ɑːn/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '~을 최종 승인하다, 결재하다',
      meaningEn: 'give official approval to a plan, budget, or document',
      nuanceTipKo: 'confirm보다 명확하게 "최종 의사결정권자의 승인(OK)"을 요청할 때 전치사 on과 함께 씁니다.',
      exampleEn: 'Once the client signs off on the wireframe, development can begin.',
      exampleKo: '클라이언트가 와이어프레임을 최종 승인하면 바로 개발에 착수할 수 있습니다.'
    },
    {
      id: 'd14-v15',
      word: 'out of office (OOO)',
      phonetic: '/aʊt əv ˈɔːfɪs/',
      pos: '전치사구',
      cefr: 'b1',
      meaningKo: '부재중 (휴가·외근·출장 등으로 자리를 비운 상태)',
      meaningEn: 'away from work on vacation, leave, or business travel',
      nuanceTipKo: '자동 회신 메일이나 사전 공지에서 "I\'ll be out of office from Thursday to Friday"라고 쓰며 슬랙에서는 OOO로 줄여 씁니다.',
      exampleEn: 'Just a heads-up that I will be out of office next Monday with limited access to email.',
      exampleKo: '다음 주 월요일에 부재중이라 이메일 확인이 어렵다는 점 미리 안내드립니다.'
    }
  ],
  dialogue: [
    {
      id: 'd14-t01',
      speaker: 'Minseo',
      roleLabel: '마케팅 매니저',
      voicePitch: 1.07,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: "Hey Daniel, do you have two minutes? Could you look over this client email before I hit send?",
      slashBroken: 'Hey Daniel, / do you have two minutes? / Could you look over this client email / before I hit send?',
      korean: '다니엘, 2분만 시간 괜찮아? 발송 버튼 누르기 전에 이 클라이언트 이메일 한 번만 봐줄래?',
      keyHighlight: 'before I hit send',
      noteKo: '이메일 전송 버튼을 누르다는 "click the send button"보다 "hit send"가 훨씬 원어민답습니다.'
    },
    {
      id: 'd14-t02',
      speaker: 'Daniel',
      roleLabel: '시니어 카피라이터',
      voicePitch: 0.93,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: 'Sure thing! Hmm, right here you wrote "Please reply ASAP." For a new client, that might sound a bit pushy.',
      slashBroken: 'Sure thing! / Hmm, right here you wrote "Please reply ASAP." / For a new client, / that might sound a bit pushy.',
      korean: '물론이지! 음, 여기 "ASAP로 답장해 주세요"라고 썼네. 신규 클라이언트한테는 좀 재촉하는 느낌으로 들릴 수 있어.',
      keyHighlight: 'sound a bit pushy',
      noteKo: 'ASAP는 급박한 내부 장애 대응 외에는 무례하거나 압박(pushy)처럼 느껴질 수 있어 주의해야 합니다.'
    },
    {
      id: 'd14-t03',
      speaker: 'Minseo',
      roleLabel: '마케팅 매니저',
      voicePitch: 1.07,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: 'Good catch! Should I change it to "at your earliest convenience" or give them a specific deadline?',
      slashBroken: 'Good catch! / Should I change it to "at your earliest convenience" / or give them a specific deadline?',
      korean: '잘 짚어줬어! "편하신 가장 빠른 시간에"로 바꾸는 게 좋을까, 아니면 구체적인 마감일을 적어주는 게 나을까?',
      keyHighlight: 'at your earliest convenience',
      noteKo: '상대가 실수나 포인트를 잘 찾아냈을 때 "Good catch!"라고 칭찬하는 표현도 오피스 필수입니다.'
    },
    {
      id: 'd14-t04',
      speaker: 'Daniel',
      roleLabel: '시니어 카피라이터',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: 'Try combining both: "Please find the proposal attached, and let us know if you can sign off on it by Thursday."',
      slashBroken: 'Try combining both: / "Please find the proposal attached, / and let us know / if you can sign off on it by Thursday."',
      korean: '둘 다 섞어 봐. "제안서를 첨부해 드리오니, 목요일까지 최종 승인 가능하신지 알려주세요"처럼 부드럽지만 명확하게.',
      keyHighlight: 'Please find the proposal attached',
      noteKo: '구체적인 날짜(by Thursday)를 정중한 조건절(if you can ~)로 감싸면 부담은 줄고 회신율은 높아집니다.'
    },
    {
      id: 'd14-t05',
      speaker: 'Minseo',
      roleLabel: '마케팅 매니저',
      voicePitch: 1.07,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: "That reads way smoother! Also, I CC'd our finance lead on this thread to keep him in the loop.",
      slashBroken: "That reads way smoother! / Also, I CC'd our finance lead on this thread / to keep him in the loop.",
      korean: '훨씬 매끄럽게 읽힌다! 그리고 재무 리드님도 계속 진행 상황을 아시도록 이 스레드 참조에 넣었어.',
      keyHighlight: "CC'd our finance lead on this thread",
      noteKo: '글이 자연스럽게 읽힌다고 할 때 "That reads smooth(er)"처럼 read를 자동사로 쓰는 표현도 아주 고급스럽습니다.'
    },
    {
      id: 'd14-t06',
      speaker: 'Daniel',
      roleLabel: '시니어 카피라이터',
      voicePitch: 0.93,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: "Smart move. One last thing—add a quick heads-up that you'll be out of office on Friday, so they know who to reach out to.",
      slashBroken: "Smart move. / One last thing— / add a quick heads-up / that you'll be out of office on Friday, / so they know who to reach out to.",
      korean: '잘했어. 마지막으로 하나만 더—금요일에 네가 부재중이라는 점 미리 귀띔해 두면 누구에게 연락해야 할지 알 수 있잖아.',
      keyHighlight: 'add a quick heads-up',
      noteKo: '휴가·출장 전에는 out of office 일정과 대체 연락처(reach out to)를 미리 안내하는 것이 글로벌 에티켓입니다.'
    },
    {
      id: 'd14-t07',
      speaker: 'Minseo',
      roleLabel: '마케팅 매니저',
      voicePitch: 1.07,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: "Done! I'll hit send now and circle back with them tomorrow afternoon if I don't hear back.",
      slashBroken: "Done! / I'll hit send now / and circle back with them tomorrow afternoon / if I don't hear back.",
      korean: '수정 완료! 지금 바로 보내고 답장 안 오면 내일 오후에 다시 팔로업할게.',
      keyHighlight: 'circle back with them',
      noteKo: 'hear back(회신을 받다)과 circle back(다시 연락·회신하다)이 한 문장에서 완벽하게 호흡을 맞춥니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 첨부 파일 안내 3단계 공식: attach 동사 vs. attached 과거분사',
      coreFormula: "I've attached [파일] / Please find [파일] attached / Please see the attached [파일]",
      wrongKonglish: 'I attach file in this mail. Please check the attach.',
      rightNative: "I've attached the updated deck for your review. Please find the budget sheet attached as well.",
      explanationKo:
        'attach는 동사이므로 명사처럼 "the attach"라고 쓰면 안 되며, 이메일을 발송하는 시점에는 이미 첨부가 완료된 상태이므로 현재완료("I\'ve attached ~") 또는 목적격보어 과거분사("Please find [파일] attached")가 표준입니다. "첨부 파일" 명사는 attachment입니다.',
      registerSpectrum: {
        casual: "Here's the deck—I attached it below!",
        standard: "I've attached the updated proposal for your review.",
        formal: 'Please find the finalized agreement attached for your signature.'
      }
    },
    {
      title: '원리 02 · 미묘한 이메일 팔로업 3대장: follow up on vs. circle back vs. touch base',
      coreFormula: '미회신 재확인 = follow up on / 확인 후 재회신 약속 = circle back / 가벼운 근황·점검 = touch base',
      wrongKonglish: "Why didn't you answer my mail? Please reply fast.",
      rightNative: 'Just following up on my email from Tuesday—please let me know your thoughts when you get a chance.',
      explanationKo:
        '세 표현 모두 "다시 연락하다"로 번역되지만 쓰임이 분명히 다릅니다. ① follow up on은 보낸 메일·요청의 후속 결과를 물을 때, ② circle back은 내가 먼저 알아본 뒤 다시 돌아와 답할 때(또는 추후 재논의), ③ touch base는 안부 겸 진행 상황을 가볍게 맞출 때 씁니다.',
      registerSpectrum: {
        casual: 'Hey, just checking in on that file from Tuesday!',
        standard: "Just following up on my earlier email—let me know if you've had a chance to review it.",
        formal: 'I am writing to follow up on my previous message regarding the Q4 contract and would appreciate an update at your earliest convenience.'
      }
    },
    {
      title: '원리 03 · 이메일 전치사 함정 완전 정복: reach out to / CC on / sign off on',
      coreFormula: 'reach out to [사람] / CC [사람] on [메일/스레드] / sign off on [문서/안건]',
      wrongKonglish: 'I reached you to ask about the contract and CCed Jason in this email.',
      rightNative: "I'm reaching out to you regarding the contract, and I've CC'd Jason on this thread.",
      explanationKo:
        'reach는 타동사라 바로 사람이 오지만("reach you by phone"), 구동사 reach out은 반드시 전치사 to가 필요합니다. 또한 참조에 넣을 때는 in이 아니라 on("CC Jason on this email"), 최종 승인할 때도 반드시 on("sign off on the draft")이 짝을 이룹니다.',
      registerSpectrum: {
        casual: "Reaching out about the contract—I CC'd Jason on this too.",
        standard: "I'm reaching out regarding the contract, and I've CC'd Jason on this email.",
        formal: 'I am reaching out to request your sign-off on the revised agreement; I have copied Jason on this thread for visibility.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd14-s01',
      drillType: 'chunk-build',
      promptKo: '검토하실 수 있도록 수정된 제안서를 첨부해 드렸습니다.',
      promptEnHint: "I've attached + for your review 청크를 조립하세요.",
      targetEn: "I've attached the revised proposal for your review.",
      chunks: ["I've attached", 'the revised proposal', 'for your review.'],
      explanationKo: '현재완료 "I\'ve attached"와 목적 표현 "for your review"는 영문 이메일 최빈출 조합입니다.'
    },
    {
      id: 'd14-s02',
      drillType: 'konglish-fix',
      promptKo: '"제이슨 님을 이 이메일 스레드 참조(CC)에 넣었습니다."',
      promptEnHint: 'CC 뒤에 쓰이는 정확한 전치사를 확인하세요.',
      targetEn: "I've CC'd Jason on this thread.",
      wrongKonglishOption: "I've CC'd Jason in this thread.",
      explanationKo: '이메일 참조(CC)에는 전치사 in이 아니라 on(on this email / on this thread)을 씁니다.'
    },
    {
      id: 'd14-s03',
      drillType: 'chunk-build',
      promptKo: '팀과 확인해 본 뒤 금요일까지 다시 회신드리겠습니다.',
      promptEnHint: 'check with the team + circle back by Friday를 연결하세요.',
      targetEn: "I'll check with the team and circle back by Friday.",
      chunks: ["I'll check with", 'the team', 'and circle back', 'by Friday.'],
      explanationKo: '확인 후 재회신 약속에는 circle back by [시점]을 씁니다.'
    },
    {
      id: 'd14-s04',
      drillType: 'active-blank',
      promptKo: '지난주에 보낸 인보이스 건을 후속 확인차 연락드립니다.',
      promptEnHint: '~에 대해 후속 확인하다: follow __ on (2글자)',
      targetEn: "I'm writing to follow up on the invoice.",
      blankData: {
        before: "I'm writing to follow",
        answer: 'up',
        after: 'on the invoice.',
        firstLetterHint: 'u_ (2글자)'
      },
      explanationKo: 'follow up on + [이전 안건/메일] 구조입니다.'
    },
    {
      id: 'd14-s05',
      drillType: 'active-blank',
      promptKo: '편하신 가장 빠른 시간에 검토해 주시면 감사하겠습니다.',
      promptEnHint: 'at your earliest ___________ (11글자)',
      targetEn: 'Please review it at your earliest convenience.',
      blankData: {
        before: 'Please review it at your earliest',
        answer: 'convenience',
        after: '.',
        firstLetterHint: 'c__________ (11글자)'
      },
      explanationKo: 'ASAP 대신 정중하게 빠른 회신을 요청할 때 at your earliest convenience를 씁니다.'
    },
    {
      id: 'd14-s06',
      drillType: 'konglish-fix',
      promptKo: '"재무팀에도 계속 진행 상황을 공유하기 위해 참조에 넣었습니다."',
      promptEnHint: '"계속 상황을 공유하다"의 원어민 관용구를 고르세요.',
      targetEn: 'I added finance to keep them in the loop.',
      wrongKonglishOption: 'I added finance to share them in the circle.',
      explanationKo: '소통 고리에 계속 포함시켜 진행 상황을 공유하다는 keep ~ in the loop입니다.'
    },
    {
      id: 'd14-s07',
      drillType: 'chunk-build',
      promptKo: '어제 나눈 대화에 따라 최종 보고서를 첨부해 드립니다.',
      promptEnHint: 'Per our conversation + Please find ~ attached 패턴을 조립하세요.',
      targetEn: 'Per our conversation, please find the final report attached.',
      chunks: ['Per our conversation,', 'please find', 'the final report', 'attached.'],
      explanationKo: '격식 있는 비즈니스 이메일의 교과서적인 첫 문장 공식입니다.'
    },
    {
      id: 'd14-s08',
      drillType: 'active-blank',
      promptKo: '4분기 예산안 건으로 가볍게 진행 상황 여쭤보려 연락드렸어요.',
      promptEnHint: '가볍게 연락해 맞추다: touch ____ (4글자)',
      targetEn: 'I wanted to touch base on the Q4 budget.',
      blankData: {
        before: 'I wanted to touch',
        answer: 'base',
        after: 'on the Q4 budget.',
        firstLetterHint: 'b___ (4글자)'
      },
      explanationKo: 'touch base (with 사람 / on 안건)은 가벼운 중간 점검 연락에 최적입니다.'
    },
    {
      id: 'd14-s09',
      drillType: 'konglish-fix',
      promptKo: '"금요일에 제가 부재중이라는 점 미리 귀띔드리려고요."',
      promptEnHint: '사전 공지(heads-up) + 부재중(out of office) 조합을 고르세요.',
      targetEn: "Just a quick heads-up that I'll be out of office on Friday.",
      wrongKonglishOption: "Just a quick alarm that I'll be empty in office on Friday.",
      explanationKo: '미리 알려주는 귀띔은 heads-up, 휴가·외근 부재중은 out of office입니다.'
    },
    {
      id: 'd14-s10',
      drillType: 'chunk-build',
      promptKo: '궁금한 점이 있으시면 언제든 편하게 연락 주세요.',
      promptEnHint: 'Please feel free to + reach out 패턴을 조립하세요.',
      targetEn: 'Please feel free to reach out with any questions.',
      chunks: ['Please feel free to', 'reach out', 'with any', 'questions.'],
      explanationKo: '이메일 끝인사로 가장 따뜻하고 매너 있는 마무리 문장입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd14-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '첨부 안내 Please find ~ attached',
      questionKo: '빈칸에 알맞은 과거분사(1단어)를 넣어 "수정된 예산안을 첨부해 드립니다"를 완성하세요.',
      stimulusEn: 'Please find the revised budget __________.',
      answer: 'attached',
      explanationKo: 'Please find [목적어] attached는 격식 있는 영문 이메일의 정석 첨부 문구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "첨부된 바와 같이 일정을 확인해 주세요" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Please confirm the timeline __________ __________.',
        answer: 'as attached',
        explanationKo: '첨부된 바와 같이는 as attached라고 씁니다.'
      }
    },
    {
      id: 'd14-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '추후 회신 circle back',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 넣어 "내일 오후까지 다시 회신드리겠습니다"를 완성하세요.',
      stimulusEn: "Let me double-check with engineering and __________ __________ to you tomorrow.",
      answer: 'circle back',
      acceptableAlt: ['get back'],
      explanationKo: '내부 확인 후 다시 회신하겠다는 뜻으로 circle back(또는 get back)을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "지난주 회의 건으로 가볍게 연락드렸습니다" 빈칸 관용구(2단어)를 채우세요.',
        stimulusEn: 'Just wanted to __________ __________ regarding last week’s meeting.',
        answer: 'touch base',
        explanationKo: '가벼운 진행 점검 연락은 touch base입니다.'
      }
    },
    {
      id: 'd14-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '사전 공지 heads-up',
      questionKo: '빈칸에 하이픈(-) 포함 명사(1단어)를 넣어 "일정 변경에 대해 미리 귀띔드리고 싶었어요"를 완성하세요.',
      stimulusEn: 'I wanted to give you a quick __________ about the schedule change.',
      answer: 'heads-up',
      explanationKo: '사전 공지·귀띔을 뜻하는 명사는 하이픈을 써서 heads-up이라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "금요일에 휴가로 부재중입니다" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'I will be __________ __________ __________ this Friday.',
        answer: 'out of office',
        explanationKo: '부재중 상태는 out of office(약어 OOO)라고 표현합니다.'
      }
    },
    {
      id: 'd14-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '진행 공유 in the loop',
      questionKo: '빈칸에 관용구(3단어)를 넣어 "팀장님께 계속 진행 상황을 공유드리려 참조에 넣었습니다"를 완성하세요.',
      stimulusEn: "I CC'd our director to keep him __________ __________ __________.",
      answer: 'in the loop',
      explanationKo: 'keep [사람] in the loop은 협업 정보 공유를 유지한다는 오피스 필수 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "마감이 내일이라는 점을 정중히 다시 안내드립니다" 빈칸(2단어: g_____ r_______)을 채우세요.',
        stimulusEn: 'Just a __________ __________ that the draft is due tomorrow.',
        answer: 'gentle reminder',
        explanationKo: '부드러운 재안내는 a gentle reminder입니다.'
      }
    },
    {
      id: 'd14-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '최종 승인 sign off on',
      questionKo: '빈칸에 3단어 구동사를 넣어 "클라이언트가 카피를 최종 승인하면 바로 게시하겠습니다"를 완성하세요.',
      stimulusEn: 'Once the client __________ __________ __________ the copy, we will publish it.',
      answer: 'signs off on',
      explanationKo: '3인칭 단수 주어 the client에 맞춰 signs off on을 써야 어법까지 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "화요일에 보낸 견적서 건을 후속 확인차 연락드립니다" 빈칸(3단어)을 채우세요.',
        stimulusEn: "I'm writing to __________ __________ __________ the quote I sent Tuesday.",
        answer: 'follow up on',
        explanationKo: '후속 확인은 follow up on + 명사입니다.'
      }
    },
    {
      id: 'd14-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'ASAP 대체 격식 표현',
      questionKo: '외부 클라이언트에게 부담을 주지 않으면서도 빠른 회신을 요청할 때 가장 적절한 문장은?',
      stimulusEn: '비즈니스 격식 톤에 가장 잘 맞는 표현을 고르세요.',
      options: [
        'Please answer me very fast ASAP.',
        'Please review and respond at your earliest convenience.',
        'I demand your reply immediately today.',
        'Reply me quickly when you finish reading.'
      ],
      answer: 'Please review and respond at your earliest convenience.',
      explanationKo: 'at your earliest convenience는 외부 파트너·상사에게 빠른 회신을 요청하는 가장 세련된 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "앞서 나눈 대화에 따라"를 뜻하는 이메일 오프닝 3단어(P__ o__ c___________)를 쓰세요.',
        stimulusEn: '__________ __________ __________, I have updated the deck.',
        answer: 'Per our conversation',
        explanationKo: 'Per our conversation은 직전 논의를 깔끔하게 이어주는 표현입니다.'
      }
    },
    {
      id: 'd14-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '첨부 파일 문법 오류 판별',
      questionKo: '다음 중 영문 이메일에서 첨부 파일을 안내하는 문장으로 어법상 가장 자연스러운 것은?',
      stimulusEn: '동사 attach와 형용사 attached의 쓰임을 확인하세요.',
      options: [
        'Please check the attach in this mail.',
        "I've attached the Q4 roadmap for your review.",
        'I am attaching to you the file inside.',
        'Please find attaching the Q4 roadmap.'
      ],
      answer: "I've attached the Q4 roadmap for your review.",
      explanationKo: 'attach는 명사가 아니며, 이미 파일을 첨부한 상태이므로 현재완료 "I\'ve attached ~"가 가장 자연스럽습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "첨부 파일"을 뜻하는 명사(1단어)를 빈칸에 쓰세요.',
        stimulusEn: 'Let me know if you have trouble opening the __________.',
        answer: 'attachment',
        explanationKo: '첨부 파일 자체를 가리키는 명사는 attachment입니다.'
      }
    },
    {
      id: 'd14-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'reach out & CC 전치사 호응',
      questionKo: '다음 빈칸 (A), (B)에 들어갈 전치사가 바르게 짝지어진 것은?',
      stimulusEn: "Please feel free to reach out (A) me directly—I've also CC'd Maya (B) this thread.",
      options: [
        '(A) to — (B) on',
        '(A) at — (B) in',
        '(A) for — (B) to',
        '(A) with — (B) at'
      ],
      answer: '(A) to — (B) on',
      explanationKo: 'reach out to [사람], CC [사람] on [메일/스레드]가 정확한 전치사 호응입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "정오까지 업데이트 내용으로 회신드릴게요" 빈칸 구동사(3단어)를 채우세요.',
        stimulusEn: "I'll __________ __________ __________ you with an update by noon.",
        answer: 'get back to',
        explanationKo: 'get back to [사람]은 확인 후 답장하겠다는 필수 표현입니다.'
      }
    },
    {
      id: 'd14-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'circle back vs follow up 구분',
      questionKo: '고객이 물어본 기술 스펙을 개발팀에 확인한 뒤 "오후에 다시 회신드리겠습니다"라고 답할 때 가장 알맞은 표현은?',
      stimulusEn: '내가 확인 후 다시 돌아와 답하는 상황입니다.',
      options: [
        "I'll check with engineering and circle back this afternoon.",
        "I'll sign off on engineering this afternoon.",
        "I'll be out of office to engineering this afternoon.",
        "I'll CC engineering as a gentle reminder."
      ],
      answer: "I'll check with engineering and circle back this afternoon.",
      explanationKo: '정보를 확인한 뒤 다시 회신하겠다는 뉘앙스는 circle back이 정확히 전달합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 이메일 전송 버튼을 누르다: hit ____ (1단어)',
        stimulusEn: 'Always double-check the attachment before you hit __________.',
        answer: 'send',
        explanationKo: '이메일을 발송할 때 hit send라는 표현을 자주 씁니다.'
      }
    },
    {
      id: 'd14-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '회신 재촉 톤 조절',
      questionKo: '3일 전 보낸 이메일에 답장이 없을 때, 상대방 기분을 상하지 않게 보내는 팔로업 첫 문장으로 가장 적절한 것은?',
      stimulusEn: '공손하고 전문적인 팔로업 톤을 선택하세요.',
      options: [
        'Why are you ignoring my email from three days ago?',
        'Just following up on my email from Monday—any updates on your end?',
        'You forgot to reply me, so do it now.',
        'I am angry because there is no response yet.'
      ],
      answer: 'Just following up on my email from Monday—any updates on your end?',
      explanationKo: '"Just following up on ~"으로 부드럽게 시작하고 "any updates on your end?"로 공을 넘기는 것이 표준입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "궁금한 점 있으시면 언제든 편하게 연락 주세요" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'Please __________ __________ __________ reach out if you have any questions.',
        answer: 'feel free to',
        explanationKo: 'Please feel free to + 동사원형은 부담 없이 행동하라는 정중한 권유 표현입니다.'
      }
    },
    {
      id: 'd14-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '첨부 안내 격식문 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 격식 있는 첨부 안내 문장을 완성하세요.',
      stimulusEn: '[ attached / the updated report / Per our conversation, / please find ]',
      answer: 'Per our conversation, please find the updated report attached.',
      explanationKo: 'Per our conversation, + please find [명사] attached. 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "검토하실 수 있도록 계약서를 첨부해 드렸습니다." (I’ve attached / the contract / for your review.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "I've attached the contract for your review.",
        explanationKo: '현재완료 I\'ve attached + 목적어 + for your review 구조입니다.'
      }
    },
    {
      id: 'd14-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '팔로업 + 회신 요청 배열',
      questionKo: '주어진 청크를 배열하여 정중한 후속 확인 문장을 작성하세요.',
      stimulusEn: '[ on / Just / from Tuesday. / my email / following up ]',
      answer: 'Just following up on my email from Tuesday.',
      explanationKo: 'Just following up on + [이전 메일/안건]은 매일 쓰는 팔로업 오프닝입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "금요일까지 다시 회신드리겠습니다." (I’ll circle back / with you / by Friday.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "I'll circle back with you by Friday.",
        explanationKo: 'circle back with(또는 to) [사람] by [기한] 패턴입니다.'
      }
    },
    {
      id: 'd14-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'CC 및 소통 공유 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용해 자연스러운 이메일 문장을 완성하세요.',
      stimulusEn: '우리말: 한나 님께 계속 진행 상황을 공유드리려고 이 스레드 참조에 넣었습니다. (I’ve CC’d / Hannah / on this thread / to keep her / in the loop.)',
      answer: "I've CC'd Hannah on this thread to keep her in the loop.",
      explanationKo: 'CC [사람] on [스레드] + to keep [사람] in the loop 완벽한 조합입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "다음 주 월요일에 부재중이라는 점 미리 귀띔드려요." (Just a quick heads-up / that I’ll be / out of office / next Monday.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Just a quick heads-up that I'll be out of office next Monday.",
        explanationKo: 'Just a quick heads-up that ~ 절로 사전 공지를 매끄럽게 전달합니다.'
      }
    },
    {
      id: 'd14-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장을 오늘 배운 표현(at your earliest convenience, sign off on)으로 고쳐 쓰세요.',
      stimulusEn: '오류 문장: Please confirm the draft ASAP.',
      answer: 'Please sign off on the draft at your earliest convenience.',
      acceptableAlt: [
        'Could you please sign off on the draft at your earliest convenience?',
        'Please review and sign off on the draft at your earliest convenience.'
      ],
      explanationKo: 'ASAP를 at your earliest convenience로, confirm을 최종 승인 의미의 sign off on으로 다듬었습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: I reached you about the budget. → reach out to를 써서 9단어로 고치세요.',
        stimulusEn: '힌트: I am reaching ~.',
        answer: 'I am reaching out to you about the budget.',
        explanationKo: 'reach out 뒤에는 반드시 전치사 to가 필요합니다. (축약형 I\'m reaching out to you about the budget.도 동일)'
      }
    },
    {
      id: 'd14-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 통문장 영작',
      questionKo: '다음 우리말을 영어로 자연스럽게 작성하세요.',
      stimulusEn: '우리말: 프로젝트 일정 건으로 가볍게 진행 상황 여쭤보려고 연락드렸습니다. (힌트: I wanted to / touch base / on the project timeline.)',
      answer: 'I wanted to touch base on the project timeline.',
      acceptableAlt: ['Just wanted to touch base on the project timeline.'],
      explanationKo: 'I wanted to touch base on [안건]은 부담 없이 대화를 여는 원어민 비즈니스 치트키입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "궁금한 점이 있으시면 언제든 편하게 연락 주세요." (Please feel free to / reach out / if you have any questions.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Please feel free to reach out if you have any questions.',
        explanationKo: '영문 이메일 엔딩의 정석 문장입니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Hi! Thanks for sending over the Q4 draft earlier. I haven't had a chance to review it yet—when do you need my sign-off, and should I copy anyone else on my reply?",
    openingQuestionKo:
      '안녕하세요! 아까 4분기 초안 보내주셔서 감사해요. 아직 검토를 못 했는데 언제까지 최종 승인이 필요하신가요? 회신할 때 참조에 넣어야 할 분이 있나요? (목요일까지 승인 요청 + 재무팀 CC 요청 + 금요일 부재중 귀띔을 영어로 답해보세요!)',
    followUpQuestionEn:
      "Got it! I'll look it over tomorrow morning and circle back before Thursday noon, keeping finance in the loop. Have a great long weekend!",
    followUpQuestionKo:
      '알겠습니다! 내일 오전에 검토하고 재무팀 참조 포함해서 목요일 정오 전까지 회신드릴게요. 좋은 연휴 보내세요!',
    recommendedChunks: [
      'at your earliest convenience',
      'sign off on it by Thursday',
      'CC finance on the thread',
      'keep them in the loop',
      'a quick heads-up that I will be out of office'
    ],
    modelAnswerEn:
      "No rush at all, though it would be great if you could sign off on it by Thursday afternoon at your earliest convenience. Please CC our finance lead on the thread to keep him in the loop—and just a quick heads-up, I'll be out of office on Friday."
  }
};
