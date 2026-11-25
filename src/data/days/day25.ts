import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day25Module: DayLessonModule = {
  dayNumber: 25,
  weekNumber: 5,
  cefrLevel: 'c1',
  dayBadge: 'DAY 25 · BBC 시사 토론 & AI 찬반 논증',
  categoryLabel: 'C1 고급 시사 토론 · 자동화·일자리 균형 논증',
  title: 'AI와 미래 일자리: BBC 스타일 시사 토론과 찬반 논증',
  subtitle:
    '단순 찬반("Good / Bad")을 넘어 양보절(While ~), 양날의 검(double-edged sword), 업스킬링(upskill)으로 입체적 시사 의견을 전개하는 법',
  heroImage: 'assets/scene_media_podcast.jpg',
  secondaryImage: 'assets/scene_boardroom_pitch.jpg',
  estimatedSprintMin: 9,
  estimatedLectureMin: 45,
  keyExpression:
    'While automation streamlines routine work, it remains a double-edged sword unless workers continuously upskill.',
  keySentenceByTier: {
    a1: 'AI helps us work faster, so we need to learn new skills.',
    a2: 'AI makes boring tasks easier, but many workers worry about losing their jobs.',
    b1: 'Automation saves a lot of time, yet it can also replace jobs if people do not learn new skills.',
    b2: 'While automation can boost productivity, it is a double-edged sword that requires employees to upskill.',
    c1: 'While automation undeniably streamlines routine work, it remains a double-edged sword unless companies invest in helping staff continuously upskill.',
    c2: 'Far from rendering human talent obsolete overnight, generative AI is reshaping the labor market—yet capturing its upside without widening inequality demands deliberate, lifelong upskilling.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[25],
  readingPassage: {
    titleEn: 'Will AI Replace Us—or Redefine What Makes Work Meaningful?',
    titleKo: 'AI는 우리를 대체할 것인가, 아니면 일의 의미를 재정의할 것인가?',
    genreBadge: 'BBC 스타일 시사 칼럼 · Future of Work',
    estimatedMin: 6,
    paragraphsEn: [
      'Across boardrooms and newsrooms alike, artificial intelligence is routinely hailed as either an unprecedented engine of prosperity or an existential threat to white-collar livelihoods. Yet labor economists increasingly argue that this binary framing misses the point. Rather than wiping out entire professions overnight, automation tends to unbundle jobs into discrete tasks—streamlining repetitive data entry, drafting, and scheduling while leaving judgment, empathy, and strategic trade-offs firmly in human hands.',
      'On the flip side, dismissing public anxiety as mere technophobia would be shortsighted. History shows that technological disruption rarely distributes its rewards evenly; productivity gains can easily come at the expense of entry-level workers whose traditional training grounds are automated away. If junior analysts no longer spend their first two years synthesizing reports, organizations must ask how the next generation of senior leaders will develop sound judgment.',
      'Ultimately, striking a balance between innovation and job security hinges less on the algorithms themselves than on institutional choices. Forward-looking employers are shifting from reactive layoffs toward continuous upskilling—pairing human-centric skills with AI literacy so technology augments rather than replaces staff. In that sense, AI is less a verdict on human obsolescence than a stress test of our collective adaptability.'
    ],
    paragraphsSlash: [
      'Across boardrooms and newsrooms alike, / artificial intelligence is routinely hailed / as either an unprecedented engine of prosperity / or an existential threat to white-collar livelihoods. / Yet labor economists increasingly argue / that this binary framing misses the point. / Rather than wiping out entire professions overnight, / automation tends to unbundle jobs into discrete tasks— / streamlining repetitive data entry, drafting, and scheduling / while leaving judgment, empathy, and strategic trade-offs / firmly in human hands.',
      'On the flip side, / dismissing public anxiety as mere technophobia / would be shortsighted. / History shows / that technological disruption rarely distributes its rewards evenly; / productivity gains can easily come / at the expense of entry-level workers / whose traditional training grounds are automated away. / If junior analysts no longer spend their first two years synthesizing reports, / organizations must ask / how the next generation of senior leaders will develop sound judgment.',
      'Ultimately, / striking a balance between innovation and job security / hinges less on the algorithms themselves / than on institutional choices. / Forward-looking employers are shifting / from reactive layoffs toward continuous upskilling— / pairing human-centric skills with AI literacy / so technology augments rather than replaces staff. / In that sense, / AI is less a verdict on human obsolescence / than a stress test of our collective adaptability.'
    ],
    paragraphsKo: [
      '이사회실과 뉴스룸을 막론하고 인공지능은 흔히 전례 없는 번영의 엔진이거나 화이트칼라 생계에 대한 실존적 위협 둘 중 하나로 일컬어집니다. 그러나 노동경제학자들은 이러한 이분법적 프레이밍이 핵심을 놓치고 있다고 점점 더 강조합니다. 자동화는 하룻밤 사이에 직업군 전체를 없애기보다는 직무를 개별 과업으로 해체하는 경향이 있습니다. 반복적인 데이터 입력·초안 작성·일정 관리는 간소화하는 반면, 판단력·공감·전략적 절충은 확고히 인간의 몫으로 남겨두는 것입니다.',
      '반면 대중의 불안을 단순한 기술 공포증으로 치부하는 것 역시 근시안적일 것입니다. 역사가 보여주듯 기술적 격변은 그 보상을 고르게 분배하는 경우가 드뭅니다. 생산성 향상은 전통적인 수련의 장이 자동화로 사라져 버린 신입 사원들을 희생양 삼아 쉽게 달성될 수 있습니다. 만약 주니어 애널리스트들이 더 이상 첫 2년간 보고서를 종합하는 훈련을 거치지 못한다면, 조직은 다음 세대 시니어 리더들이 어떻게 건전한 판단력을 기를 것인지 자문해야 합니다.',
      '궁극적으로 혁신과 고용 안정 사이의 균형을 맞추는 일은 알고리즘 자체보다 제도적 선택에 달려 있습니다. 선견지명이 있는 고용주들은 사후적 감원에서 지속적인 업스킬링으로 방향을 전환하고 있습니다. 기술이 직원을 대체하기보다 역량을 증강하도록 인간 중심 역량과 AI 리터러시를 결합하는 것입니다. 그런 의미에서 AI는 인간의 도태를 선언하는 판결이라기보다, 우리의 집단적 적응력을 시험하는 스트레스 테스트에 가깝습니다.'
    ],
    keyExpressions: [
      'unbundle jobs into discrete tasks (직무를 개별 과업으로 해체하다)',
      'streamline repetitive work (반복 업무를 간소화·효율화하다)',
      'at the expense of entry-level workers (신입 사원들을 희생하면서)',
      'strike a balance between A and B (A와 B 사이의 균형을 맞추다)',
      'augment rather than replace (대체하기보다 역량을 증강하다)',
      'less A than B (A라기보다는 오히려 B)'
    ],
    comprehensionQuiz: [
      {
        id: 'd25-rq01',
        questionKo: '1문단에서 노동경제학자들이 AI에 대한 이분법적 시각(완전한 번영 vs 일자리 소멸)을 비판하는 핵심 이유는?',
        options: [
          'AI 기술의 발전 속도가 예상보다 훨씬 느려졌기 때문에',
          '자동화가 직업 전체를 없애기보다 직무를 세부 과업 단위로 나누어 변화시키기 때문에',
          '화이트칼라 직종은 자동화의 영향을 거의 받지 않기 때문에',
          '기업들이 비용 문제로 AI 도입을 전면 중단하고 있기 때문에'
        ],
        answer: '자동화가 직업 전체를 없애기보다 직무를 세부 과업 단위로 나누어 변화시키기 때문에',
        explanationKo:
          '1문단의 "Rather than wiping out entire professions overnight, automation tends to unbundle jobs into discrete tasks"가 정답의 직접적인 근거입니다.'
      },
      {
        id: 'd25-rq02',
        questionKo: '2문단이 지적하는 자동화의 숨은 리스크(특히 신입 인력 관점)로 가장 정확한 것은?',
        options: [
          '신입 사원들이 기존 시니어보다 연봉을 더 많이 요구하게 된다',
          '초급 반복 업무가 사라지면서 미래 리더가 판단력을 기를 전통적 수련 과정이 약화될 수 있다',
          '대중의 기술 공포증 때문에 신입 채용 자체가 법적으로 금지된다',
          '생산성이 떨어져 모든 기업의 보고서 품질이 급격히 하락한다'
        ],
        answer: '초급 반복 업무가 사라지면서 미래 리더가 판단력을 기를 전통적 수련 과정이 약화될 수 있다',
        explanationKo:
          '2문단 후반부에서 주니어가 보고서 종합 같은 전통적 훈련 기회(traditional training grounds)를 잃으면 차세대 리더의 판단력 육성이 과제가 된다고 지적합니다.'
      },
      {
        id: 'd25-rq03',
        questionKo: '3문단의 결론을 가장 정확하게 요약한 문장은?',
        options: [
          '알고리즘 개발을 규제해야만 고용 안정을 지킬 수 있다',
          '미래 일자리의 향방은 기술 자체보다 업스킬링과 인간 중심의 제도적 선택에 달려 있다',
          'AI 시대에는 인간 중심의 공감 능력보다 코딩 기술만이 유일하게 살아남는다',
          '선도 기업들은 선제적 감원을 통해 조직의 적응력을 증명하고 있다'
        ],
        answer: '미래 일자리의 향방은 기술 자체보다 업스킬링과 인간 중심의 제도적 선택에 달려 있다',
        explanationKo:
          '"hinges less on the algorithms themselves than on institutional choices" 및 지속적 upskilling과 augmentation 강조와 일치합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd25-v01',
      word: 'automation',
      phonetic: '/ˌɔːtəˈmeɪʃən/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '자동화 (인간의 반복 노동을 기계·소프트웨어로 대체하는 과정)',
      meaningEn: 'the use of technology and software to perform tasks with minimal human intervention',
      nuanceTipKo: '단순 기계화(mechanization)와 달리 AI·소프트웨어 기반의 지능형 업무 자동화까지 아우르는 시사 핵심어입니다.',
      exampleEn: 'Automation has dramatically shortened the time needed to audit financial records.',
      exampleKo: '자동화는 재무 기록 감사에 필요한 시간을 획기적으로 단축했습니다.'
    },
    {
      id: 'd25-v02',
      word: 'upskill',
      phonetic: '/ˈʌpskɪl/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '직무 역량을 고도화하다, 새 기술을 익혀 업그레이드하다',
      meaningEn: 'to learn or teach employees new, higher-level skills to stay competitive',
      nuanceTipKo: '완전히 다른 직종으로 전환하는 reskill과 구별해 보세요. upskill은 현재 직무 위에 AI·데이터 등 상위 역량을 얹는 뉘앙스입니다.',
      exampleEn: 'Companies that help employees upskill tend to see far stronger retention.',
      exampleKo: '직원들의 역량 고도화를 지원하는 기업은 훨씬 높은 인재 유지율을 보입니다.'
    },
    {
      id: 'd25-v03',
      word: 'double-edged sword',
      phonetic: '/ˌdʌbl edʒd ˈsɔːrd/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '양날의 검 (큰 장점과 동시에 심각한 부작용을 지닌 것)',
      meaningEn: 'something that brings both clear benefits and serious drawbacks',
      nuanceTipKo: 'IELTS·토플·시사 면접에서 찬반 균형 시각을 드러내는 최고의 1티어 관용구입니다. 관사 a를 붙여 "prove a double-edged sword"로 자주 씁니다.',
      exampleEn: 'Generative AI is a double-edged sword: it speeds up research yet amplifies misinformation.',
      exampleKo: '생성형 AI는 양날의 검입니다. 리서치를 가속화하지만 동시에 오정보도 증폭시키니까요.'
    },
    {
      id: 'd25-v04',
      word: 'disrupt',
      phonetic: '/dɪsˈrʌpt/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(기존 산업 질서를) 파괴적으로 혁신하다, 크게 뒤흔들다',
      meaningEn: 'to radically change or interrupt an established industry or traditional model',
      nuanceTipKo: '일상에서는 "방해하다"이지만 비즈니스·테크 시사에서는 기존 판도를 완전히 재편하는 "파괴적 혁신을 일으키다"로 쓰입니다.',
      exampleEn: 'Streaming platforms disrupted the entire entertainment distribution model within a decade.',
      exampleKo: '스트리밍 플랫폼은 10년 만에 엔터테인먼트 유통 모델 전체를 뒤흔들어 놓았습니다.'
    },
    {
      id: 'd25-v05',
      word: 'augment',
      phonetic: '/ɔːɡˈment/',
      pos: '동사',
      cefr: 'c2',
      meaningKo: '(인간의 능력·가치를) 증강하다, 한층 보강하다',
      meaningEn: 'to enhance or amplify existing capabilities rather than replacing them',
      nuanceTipKo: 'AI 토론에서 replace(대체하다)와 대조되는 핵심 동사! "AI should augment human creativity, not replace it."처럼 쌍으로 외우세요.',
      exampleEn: 'Diagnostic algorithms are designed to augment doctors’ judgment, not override it.',
      exampleKo: '진단 알고리즘은 의사의 판단을 대체하는 것이 아니라 증강하도록 설계되었습니다.'
    },
    {
      id: 'd25-v06',
      word: 'obsolete',
      phonetic: '/ˌɑːbsəˈliːt/',
      pos: '형용사',
      cefr: 'c1',
      meaningKo: '구식이 된, 시대에 뒤처져 쓸모없어진',
      meaningEn: 'outdated and no longer used because something newer exists',
      nuanceTipKo: 'render ~ obsolete (~을 쓸모없게 만들다) 또는 become obsolete (도태되다) 연어로 매우 자주 등장합니다.',
      exampleEn: 'Rapid software updates can render hard-won technical certifications obsolete in years.',
      exampleKo: '빠른 소프트웨어 변화로 애써 딴 기술 자격증이 몇 년 만에 구식이 될 수 있습니다.'
    },
    {
      id: 'd25-v07',
      word: 'streamline',
      phonetic: '/ˈstriːmlaɪn/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(복잡한 절차·업무를) 간소화하다, 효율적으로 다듬다',
      meaningEn: 'to make a process or system simpler, smoother, and more efficient',
      nuanceTipKo: '유선형(streamline)으로 공기 저항을 줄이듯 불필요한 단계를 걷어내 효율을 높인다는 비즈니스·시사 필수 동사입니다.',
      exampleEn: 'Automating invoice approvals helped us streamline our monthly closing process.',
      exampleKo: '송장 승인을 자동화한 덕분에 월말 마감 절차를 크게 간소화할 수 있었습니다.'
    },
    {
      id: 'd25-v08',
      word: 'displacement',
      phonetic: '/dɪsˈpleɪsmənt/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '(일자리·인력의) 대체·이탈, 자리 상실',
      meaningEn: 'the forced shift or loss of jobs caused by economic or technological change',
      nuanceTipKo: 'job loss보다 객관적이고 경제학적인 톤의 단어입니다. job displacement / workforce displacement 형태로 쓰세요.',
      exampleEn: 'Policymakers are debating how to cushion the shock of AI-driven job displacement.',
      exampleKo: '정책 입안자들은 AI로 촉발된 일자리 대체 충격을 어떻게 완화할지 논의 중입니다.'
    },
    {
      id: 'd25-v09',
      word: 'adaptability',
      phonetic: '/əˌdæptəˈbɪləti/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '적응력, 변화에 유연하게 대응하는 역량',
      meaningEn: 'the capacity to adjust swiftly and effectively to new conditions',
      nuanceTipKo: '미래 인재상을 논할 때 flexibility보다 한 단계 높은 전략적·생존적 유연성을 나타내는 C1 명사입니다.',
      exampleEn: 'In volatile markets, adaptability often outweighs static domain knowledge.',
      exampleKo: '변동성이 큰 시장에서는 정적인 전공 지식보다 적응력이 더 큰 힘을 발휘하곤 합니다.'
    },
    {
      id: 'd25-v10',
      word: 'safeguard',
      phonetic: '/ˈseɪfɡɑːrd/',
      pos: '동사/명사',
      cefr: 'c1',
      meaningKo: '(권익·일자리·데이터를) 안전하게 보호하다; 안전장치',
      meaningEn: 'to protect from harm or loss; a measure designed to prevent abuse',
      nuanceTipKo: '단순 protect보다 제도적·정책적 안전망을 구축해 지켜낸다는 시사·거버넌스 뉘앙스가 강합니다.',
      exampleEn: 'Clear ethical safeguards are essential before deploying AI in hiring decisions.',
      exampleKo: '채용 결정에 AI를 도입하기 전에 명확한 윤리적 안전장치가 필수적입니다.'
    },
    {
      id: 'd25-v11',
      word: 'on the flip side',
      phonetic: '/ɑːn ðə ˈflɪp saɪd/',
      pos: '연결부사구',
      cefr: 'c1',
      meaningKo: '반면에, 동전의 뒷면을 보면 (대조적 측면 전환)',
      meaningEn: 'looking at the opposite or less obvious aspect of the same issue',
      nuanceTipKo: '교과서적인 On the other hand 대신 BBC 팟캐스트·패널 토론에서 원어민이 입에 달고 사는 세련된 전환어입니다.',
      exampleEn: 'Remote tools widen the talent pool; on the flip side, they can blur work-life boundaries.',
      exampleKo: '원격 도구는 인재 풀을 넓혀주지만, 반면에 일과 삶의 경계를 흐릴 수 있습니다.'
    },
    {
      id: 'd25-v12',
      word: 'far-reaching',
      phonetic: '/ˌfɑːr ˈriːtʃɪŋ/',
      pos: '형용사',
      cefr: 'c1',
      meaningKo: '광범위한, 지대한 파급력을 미치는',
      meaningEn: 'having wide-ranging and long-lasting effects or implications',
      nuanceTipKo: 'big impact 대신 far-reaching implications / far-reaching consequences를 쓰면 단번에 C1 논설 품격이 살아납니다.',
      exampleEn: 'Generative models will have far-reaching implications for education and copyright law.',
      exampleKo: '생성형 모델은 교육과 저작권법에 지대한 파급력을 미칠 것입니다.'
    },
    {
      id: 'd25-v13',
      word: 'human-centric',
      phonetic: '/ˌhjuːmən ˈsentrɪk/',
      pos: '형용사',
      cefr: 'c2',
      meaningKo: '인간 중심의 (기술보다 사람의 가치·판단을 우선하는)',
      meaningEn: 'designed around human needs, ethics, and wellbeing first',
      nuanceTipKo: 'AI 윤리·UX·경영 전략 토론에서 기술 만능주의와 대조되는 핵심 키워드입니다.',
      exampleEn: 'A human-centric AI strategy keeps people accountable for final decisions.',
      exampleKo: '인간 중심의 AI 전략은 최종 의사결정의 책임을 사람에게 남겨둡니다.'
    },
    {
      id: 'd25-v14',
      word: 'at the expense of',
      phonetic: '/æt ði ɪkˈspens əv/',
      pos: '전치사구',
      cefr: 'c1',
      meaningKo: '~을 희생하면서까지, ~에 손해를 끼치며',
      meaningEn: 'in a way that harms or sacrifices something else',
      nuanceTipKo: '찬반 토론에서 "효율성 때문에 신뢰/안전을 희생하다" 같은 트레이드오프를 정확히 짚어주는 C1 필수 연결구입니다.',
      exampleEn: 'We should not chase short-term efficiency at the expense of workforce trust.',
      exampleKo: '구성원의 신뢰를 희생하면서까지 단기 효율성만 쫓아서는 안 됩니다.'
    },
    {
      id: 'd25-v15',
      word: 'strike a balance',
      phonetic: '/straɪk ə ˈbæləns/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(상충하는 두 가치 사이의) 균형을 잡다, 절충점을 찾다',
      meaningEn: 'to find a sensible middle ground between two competing priorities',
      nuanceTipKo: 'make a balance는 어색한 콩글리시! 원어민은 반드시 strike a balance between A and B를 씁니다.',
      exampleEn: 'Regulators must strike a balance between fostering innovation and safeguarding workers.',
      exampleKo: '규제 당국은 혁신 촉진과 근로자 보호 사이에서 균형을 잡아야 합니다.'
    }
  ],
  dialogue: [
    {
      id: 'd25-t01',
      speaker: 'Eleanor',
      roleLabel: 'BBC 스타일 시사 팟캐스트 진행자',
      voicePitch: 1.05,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'zoom-in',
      english:
        'Welcome back to Work Reimagined. Today we are tackling a question on everyone’s mind: is AI automation an engine of growth, or a looming threat to white-collar careers?',
      slashBroken:
        'Welcome back / to Work Reimagined. / Today we are tackling a question / on everyone’s mind: / is AI automation an engine of growth, / or a looming threat to white-collar careers?',
      korean:
        '워크 리이매진드에 돌아오신 것을 환영합니다. 오늘은 모두가 궁금해하는 질문을 다뤄보려 합니다. AI 자동화는 성장의 엔진일까요, 아니면 화이트칼라 경력에 드리운 위협일까요?',
      keyHighlight: 'tackling a question ~ an engine of growth, or a looming threat',
      noteKo: '시사 패널 오프닝에서 핵심 대립 구도를 선명하게 제시하는 BBC식 프레이밍입니다. looming threat(임박한 위협)도 함께 익히세요.'
    },
    {
      id: 'd25-t02',
      speaker: 'Jisoo',
      roleLabel: '글로벌 AI 전략 디렉터',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english:
        'From an industry standpoint, I see AI less as a job killer and more as a force multiplier. When it streamlines tedious reporting, teams finally gain the bandwidth for creative problem-solving.',
      slashBroken:
        'From an industry standpoint, / I see AI less as a job killer / and more as a force multiplier. / When it streamlines tedious reporting, / teams finally gain the bandwidth / for creative problem-solving.',
      korean:
        '산업계 관점에서 저는 AI를 일자리 파괴자라기보다 역량 증폭기로 봅니다. 지루한 보고서 작성을 간소화해 주면 팀은 비로소 창의적 문제 해결에 쓸 여력을 얻게 되거든요.',
      keyHighlight: 'less as A and more as B ~ streamlines tedious reporting',
      noteKo: 'less as A and more as B 구문으로 극단적 부정을 피하면서 세련되게 프레임을 재정의합니다.'
    },
    {
      id: 'd25-t03',
      speaker: 'Dr. Chen',
      roleLabel: '노동경제학자',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-left',
      english:
        'I grant that productivity gains are real, Jisoo. On the flip side, automation is a double-edged sword—those efficiencies often come at the expense of junior roles where people learn the ropes.',
      slashBroken:
        'I grant / that productivity gains are real, Jisoo. / On the flip side, / automation is a double-edged sword— / those efficiencies often come / at the expense of junior roles / where people learn the ropes.',
      korean:
        '생산성 향상이 실재한다는 점은 인정합니다, 지수 씨. 하지만 반대로 자동화는 양날의 검이에요. 그런 효율성은 흔히 신입들이 실무를 익히는 주니어 직무를 희생시키며 나오곤 하죠.',
      keyHighlight: 'I grant that ~ On the flip side ~ at the expense of',
      noteKo: 'I grant that ~(인정하지만)으로 상대 논점을 먼저 수용한 뒤 On the flip side로 반론을 펴는 품격 있는 C1 토론 화법입니다.'
    },
    {
      id: 'd25-t04',
      speaker: 'Eleanor',
      roleLabel: 'BBC 스타일 시사 팟캐스트 진행자',
      voicePitch: 1.05,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'zoom-in',
      english:
        'That raises a crucial concern. If entry-level tasks become obsolete, how do we prevent widespread job displacement over the next five years?',
      slashBroken:
        'That raises a crucial concern. / If entry-level tasks become obsolete, / how do we prevent / widespread job displacement / over the next five years?',
      korean:
        '정말 중요한 우려를 제기해 주셨네요. 신입급 업무가 구식이 되어 사라진다면, 향후 5년간 광범위한 일자리 대체를 어떻게 막을 수 있을까요?',
      keyHighlight: 'become obsolete ~ widespread job displacement',
      noteKo: '앞 발언을 요약해 다음 논점으로 연결하는 진행자의 "That raises a crucial concern." 표현은 회의·토론 사회에서도 유용합니다.'
    },
    {
      id: 'd25-t05',
      speaker: 'Jisoo',
      roleLabel: '글로벌 AI 전략 디렉터',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english:
        'The answer has to be continuous upskilling. Rather than treating staff as replaceable, forward-looking companies are redesigning roles so AI augments human judgment rather than overriding it.',
      slashBroken:
        'The answer has to be / continuous upskilling. / Rather than treating staff as replaceable, / forward-looking companies are redesigning roles / so AI augments human judgment / rather than overriding it.',
      korean:
        '해답은 지속적인 업스킬링이어야 합니다. 직원을 대체 가능한 부품으로 취급하기보다, 선도 기업들은 AI가 인간의 판단을 덮어쓰는 대신 증강하도록 직무를 재설계하고 있습니다.',
      keyHighlight: 'continuous upskilling ~ augments human judgment',
      noteKo: 'Rather than + 동명사(-ing)로 대조적 대안을 명쾌하게 강조했습니다.'
    },
    {
      id: 'd25-t06',
      speaker: 'Dr. Chen',
      roleLabel: '노동경제학자',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-left',
      english:
        'Agreed—provided that upskilling isn’t left solely to individuals. We need strong public-private safeguards to strike a genuine balance between innovation and social stability.',
      slashBroken:
        'Agreed— / provided that upskilling isn’t left solely to individuals. / We need strong public-private safeguards / to strike a genuine balance / between innovation and social stability.',
      korean:
        '동의합니다—단, 업스킬링의 책임이 개인에게만 떠넘겨지지 않는다는 전제하에요. 혁신과 사회적 안정 사이의 진정한 균형을 잡으려면 탄탄한 민관 안전장치가 필요합니다.',
      keyHighlight: 'provided that ~ strike a genuine balance',
      noteKo: 'Agreed—provided that ~(~라는 조건하에 동의합니다)는 고급 토론에서 조건부 합의를 이끌어내는 명품 표현입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 단선적 찬반 탈출: 양보-대조 프레임 (While / Albeit / Provided that)',
      coreFormula: 'While + [인정할 장점/사실], + [핵심 주장 또는 단서] / Agreed, provided that + [전제 조건]',
      wrongKonglish: 'AI is very good for speed. But AI is bad because people lose jobs.',
      rightNative:
        'While AI accelerates routine workflows, it poses serious displacement risks unless organizations invest in upskilling.',
      explanationKo:
        '한국인 학습자들이 시사 토론에서 점수가 깎이는 가장 큰 이유는 "A is good. But B is bad."처럼 단문으로 끊어 말하기 때문입니다. 문장 앞머리에 While(~이긴 하지만)이나 Much as(아무리 ~하더라도)로 상대 진영의 타당한 근거를 먼저 인정한 뒤 주절에 내 핵심 주장을 얹으면, 청자는 즉시 논리적이고 균형 잡힌 C1 화자로 인식합니다.',
      registerSpectrum: {
        casual: 'Sure, AI saves tons of time, though it can definitely hurt entry-level hiring.',
        standard: 'While AI saves time on routine work, it can also narrow entry-level job opportunities.',
        formal:
          'While automation yields undeniable efficiency gains, those dividends risk coming at the expense of early-career talent.'
      }
    },
    {
      title: '원리 02 · 프레임 재정의 명품 구문: less A than B / not so much A as B',
      coreFormula: 'X is less [기존 통념 A] than [본질적 해석 B] / X is not so much A as B',
      wrongKonglish: 'AI is not job killer, it is more like a tool for helping humans.',
      rightNative:
        'AI is less a verdict on human obsolescence than a stress test of our collective adaptability.',
      explanationKo:
        'BBC 칼럼과 이코노미스트 사설에서 가장 사랑받는 수사 구조입니다. "A가 아니라 B다"라고 단칼에 부정(not A but B)하면 공격적으로 들릴 수 있지만, "less A than B(A라기보다는 오히려 B에 가깝다)"를 쓰면 상대의 우려를 부드럽게 수용하면서도 논점의 프레임을 내가 원하는 방향으로 완벽히 전환할 수 있습니다.',
      registerSpectrum: {
        casual: "Honestly, it's less about losing jobs and more about how our roles change.",
        standard: 'The real challenge is not so much the technology itself as how we adapt to it.',
        formal:
          'Long-term competitiveness hinges less on algorithmic speed than on human-centric governance.'
      }
    },
    {
      title: '원리 03 · 시사 필수 연어 교정: make a balance(X) → strike a balance(O) & at the expense of',
      coreFormula: 'strike a balance between A and B / come at the expense of N / render N obsolete',
      wrongKonglish: 'We must make a balance between speed and safety, not sacrificing worker trust.',
      rightNative:
        'We must strike a balance between innovation and worker protection, rather than chasing speed at the expense of trust.',
      explanationKo:
        'C1 레벨의 변별력은 어려운 단어 나열이 아니라 원어민이 고정적으로 짝지어 쓰는 동사-명사 연어(collocation)에서 나옵니다. balance는 strike와, obsolete는 render와, 희생의 대가는 at the expense of와 결합한다는 점을 덩어리째 암기하세요.',
      registerSpectrum: {
        casual: 'We need to find the right middle ground without burning out the team.',
        standard: 'Leaders have to strike a balance between growth and employee well-being.',
        formal:
          'Unchecked automation must not pursue marginal efficiency at the expense of institutional resilience.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd25-s01',
      drillType: 'chunk-build',
      promptKo: '자동화는 반복 업무를 간소화하지만, 지속적인 업스킬링 없이는 양날의 검으로 남습니다.',
      promptEnHint: 'While 양보절로 시작해 double-edged sword와 unless절을 연결하세요.',
      targetEn:
        'While automation streamlines routine work, it remains a double-edged sword unless workers upskill.',
      chunks: [
        'While automation streamlines routine work,',
        'it remains a double-edged sword',
        'unless workers',
        'upskill.'
      ],
      explanationKo: 'While(~하지만) + streamline(간소화하다) + double-edged sword + unless(~하지 않으면)의 C1 완벽 조합입니다.'
    },
    {
      id: 'd25-s02',
      drillType: 'konglish-fix',
      promptKo: '"혁신과 고용 안정 사이에서 균형을 잡아야 합니다." — 자연스러운 원어민 연어는?',
      promptEnHint: 'make a balance 콩글리시를 피하세요!',
      targetEn: 'We must strike a balance between innovation and job security.',
      wrongKonglishOption: 'We must make a balance between innovation and job security.',
      explanationKo: '영어에서 균형을 잡다는 make a balance가 아니라 strike a balance between A and B입니다.'
    },
    {
      id: 'd25-s03',
      drillType: 'active-blank',
      promptKo: '단기 효율성이 직원들의 신뢰를 희생시키면서 나와서는 안 됩니다.',
      promptEnHint: '~을 희생하면서: at the _______ of',
      targetEn: 'Short-term efficiency must not come at the expense of employee trust.',
      blankData: {
        before: 'Short-term efficiency must not come at the',
        answer: 'expense',
        after: 'of employee trust.',
        firstLetterHint: 'e______ (7글자)'
      },
      explanationKo: 'at the expense of ~ 는 트레이드오프를 지적할 때 가장 정확한 C1 전치사구입니다.'
    },
    {
      id: 'd25-s04',
      drillType: 'chunk-build',
      promptKo: 'AI는 인간의 판단을 대체하기보다 증강하도록 설계되어야 합니다.',
      promptEnHint: 'augment rather than replace 대조 구문을 조립하세요.',
      targetEn: 'AI should be designed to augment human judgment rather than replace it.',
      chunks: [
        'AI should be designed',
        'to augment human judgment',
        'rather than',
        'replace it.'
      ],
      explanationKo: 'augment(증강하다)와 replace(대체하다)를 rather than으로 선명하게 대비시켰습니다.'
    },
    {
      id: 'd25-s05',
      drillType: 'active-blank',
      promptKo: '반면에, 대중의 불안을 단순한 기술 공포증으로 치부하는 것은 근시안적일 것입니다.',
      promptEnHint: '동전의 뒷면 / 반면에: On the ____ side',
      targetEn: 'On the flip side, dismissing public anxiety would be shortsighted.',
      blankData: {
        before: 'On the',
        answer: 'flip',
        after: 'side, dismissing public anxiety would be shortsighted.',
        firstLetterHint: 'f___ (4글자)'
      },
      explanationKo: 'On the flip side는 구어와 BBC 스타일 토론 모두에서 쓰이는 세련된 대조 전환구입니다.'
    },
    {
      id: 'd25-s06',
      drillType: 'konglish-fix',
      promptKo: '"빠른 기술 변화가 구식 업무 방식을 쓸모없게 만들 수 있다." — 자연스러운 표현은?',
      promptEnHint: 'make ~ useless보다 격식 있는 C1 연어를 고르세요.',
      targetEn: 'Rapid technological change can render outdated workflows obsolete.',
      wrongKonglishOption: 'Rapid technological change can do outdated workflows to be useless.',
      explanationKo: 'render + 목적어 + obsolete (~을 구식·무용지물로 만들다)는 시사·비즈니스 고급 필수 연어입니다.'
    },
    {
      id: 'd25-s07',
      drillType: 'chunk-build',
      promptKo: '생성형 AI는 교육과 노동 시장에 지대한 파급력을 미칠 것입니다.',
      promptEnHint: 'far-reaching implications 연어를 활용하세요.',
      targetEn: 'Generative AI will have far-reaching implications for education and the labor market.',
      chunks: [
        'Generative AI will have',
        'far-reaching implications',
        'for education',
        'and the labor market.'
      ],
      explanationKo: 'have far-reaching implications for ~ (~에 광범위한 영향을 미치다)를 덩어리째 익혀두세요.'
    },
    {
      id: 'd25-s08',
      drillType: 'active-blank',
      promptKo: '선도 기업들은 감원 대신 직원들이 역량을 고도화하도록 돕고 있습니다.',
      promptEnHint: '새 기술을 익혀 직무 역량을 높이다 (u로 시작하는 동사)',
      targetEn: 'Forward-looking firms help employees upskill instead of laying them off.',
      blankData: {
        before: 'Forward-looking firms help employees',
        answer: 'upskill',
        after: 'instead of laying them off.',
        firstLetterHint: 'u______ (7글자)'
      },
      explanationKo: 'upskill은 현대 노동시장과 HR 담론에서 빠지지 않는 핵심 동사입니다.'
    },
    {
      id: 'd25-s09',
      drillType: 'chunk-build',
      promptKo: '업스킬링이 개인에게만 맡겨지지 않는다는 전제하에 동의합니다.',
      promptEnHint: '조건부 합의 표현 provided that을 넣어 조립하세요.',
      targetEn: 'I agree, provided that upskilling is not left solely to individuals.',
      chunks: ['I agree,', 'provided that upskilling', 'is not left', 'solely to individuals.'],
      explanationKo: 'provided that(~라는 조건하에)을 쓰면 무조건적 동의가 아닌 정교한 조건부 합의를 표현할 수 있습니다.'
    },
    {
      id: 'd25-s10',
      drillType: 'active-blank',
      promptKo: '채용 결정에 AI를 도입하기 전에 명확한 윤리적 안전장치가 필요합니다.',
      promptEnHint: '보호 조치, 안전장치 (s로 시작하는 복수 명사)',
      targetEn: 'Clear ethical safeguards are essential before deploying AI in hiring.',
      blankData: {
        before: 'Clear ethical',
        answer: 'safeguards',
        after: 'are essential before deploying AI in hiring.',
        firstLetterHint: 's_________ (10글자)'
      },
      explanationKo: 'safeguard는 동사(보호하다)와 명사(안전장치)로 모두 쓰이는 정책·윤리 핵심어입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd25-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '연어 strike a balance',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "혁신과 고용 안정 사이의 균형을 맞추다"를 완성하세요.',
      stimulusEn: 'Policymakers must __________ a balance between rapid innovation and job security.',
      answer: 'strike',
      explanationKo: '균형을 맞추다는 make가 아니라 strike a balance between A and B로 표현합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "단기 이익을 위해 장기 신뢰를 희생하다"가 되도록 빈칸(1단어)을 채우세요.',
        stimulusEn: 'Never pursue quick profits at the __________ of long-term trust.',
        answer: 'expense',
        explanationKo: 'at the expense of ~ (~을 희생하면서) 구문입니다.'
      }
    },
    {
      id: 'd25-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '핵심 동사 streamline',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "AI가 반복적인 보고 절차를 간소화한다"를 완성하세요.',
      stimulusEn: 'Modern analytics tools can __________ repetitive monthly reporting workflows.',
      answer: 'streamline',
      explanationKo: '복잡한 절차를 불필요한 저항 없이 매끄럽게 간소화한다는 뜻의 streamline이 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "인간의 판단을 대체하기보다 증강하다"가 되도록 a로 시작하는 동사(1단어)를 쓰세요.',
        stimulusEn: 'Ideally, automation should __________ human creativity rather than replace it.',
        answer: 'augment',
        explanationKo: '기존 역량을 강화·증강한다는 C2 동사 augment입니다.'
      }
    },
    {
      id: 'd25-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '형용사 obsolete',
      questionKo: '빈칸에 알맞은 형용사(1단어)를 넣어 "오래된 업무 방식을 구식으로 만들어 버리다"를 완성하세요.',
      stimulusEn: 'New digital platforms can quickly render traditional filing systems __________.',
      answer: 'obsolete',
      explanationKo: 'render + 목적어 + obsolete는 "쓸모없는 구식으로 만들다"라는 고급 연어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "광범위한 파급력을 미치는 영향"이 되도록 하이픈 포함 형용사(1단어)를 쓰세요.',
        stimulusEn: 'This policy shift will have __________ consequences across the tech sector.',
        answer: 'far-reaching',
        explanationKo: 'far-reaching consequences/implications는 시사 칼럼 단골 연어입니다.'
      }
    },
    {
      id: 'd25-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '관용구 double-edged sword',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "생성형 AI는 양날의 검이다"를 완성하세요.',
      stimulusEn: 'For media outlets, generative AI has proven to be a double-edged __________.',
      answer: 'sword',
      explanationKo: 'a double-edged sword는 이점과 위험을 동시에 지닌 사안을 비유하는 핵심 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "반면에"를 뜻하는 BBC 토론 전환구 On the ____ side에서 빈칸(1단어)을 쓰세요.',
        stimulusEn: 'On the __________ side, remote hiring dramatically widens access to global talent.',
        answer: 'flip',
        explanationKo: 'On the flip side는 동전의 반대 면을 비추듯 대조 관점으로 전환합니다.'
      }
    },
    {
      id: 'd25-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '핵심 동사 upskill',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "직원들이 새 기술을 익혀 역량을 고도화하도록 투자하다"를 완성하세요.',
      stimulusEn: 'Forward-thinking leaders budget annually to help their teams __________.',
      answer: 'upskill',
      explanationKo: '기존 직무 역량을 최신 기술에 맞게 끌어올리는 동사는 upskill입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "기술적 일자리 대체(이탈)"를 뜻하는 d로 시작하는 명사(1단어)를 채우세요.',
        stimulusEn: 'Governments must prepare retraining programs to cushion AI-driven job __________.',
        answer: 'displacement',
        explanationKo: 'job displacement는 산업 구조 변화로 인한 인력 대체를 뜻합니다.'
      }
    },
    {
      id: 'd25-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '양보절 논증 구조',
      questionKo: '다음 문장의 빈칸에 들어가 균형 잡힌 양보-대조 논리를 완성하는 가장 자연스러운 접속사는?',
      stimulusEn:
        '__________ automation boosts short-term output, it cannot substitute for nuanced human empathy.',
      options: ['While', 'Because', 'Unless', 'Therefore'],
      answer: 'While',
      explanationKo: '앞 절의 장점(생산성 향상)을 인정하면서도 주절의 한계(인간 공감 대체 불가)를 대조하므로 양보 접속사 While이 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "~라는 조건하에"를 뜻하는 조건부 합의 접속사구(2단어, p_______ t___)를 쓰세요.',
        stimulusEn: 'We support the rollout, __________ __________ strict data safeguards remain in place.',
        answer: 'provided that',
        explanationKo: 'provided that은 격식 있는 토론·협상에서 전제 조건을 명시합니다.'
      }
    },
    {
      id: 'd25-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'less A than B 구문',
      questionKo: '"AI는 일자리 파괴자라기보다는 오히려 적응력의 시험대에 가깝다"를 가장 세련되게 표현한 문장은?',
      stimulusEn: '프레임 재정의 구문(less A than B)의 정확한 어순을 고르세요.',
      options: [
        'AI is less a job killer than a test of adaptability.',
        'AI is fewer a job killer as a test of adaptability.',
        'AI is little a job killer more than a test of adaptability.',
        'AI is not less a job killer but a test of adaptability.'
      ],
      answer: 'AI is less a job killer than a test of adaptability.',
      explanationKo: 'less A than B는 "A라기보다 오히려 B"라는 C1–C2 핵심 논설 구문입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 같은 의미의 "not so much A _____ B"에서 빈칸(1단어)을 채우세요.',
        stimulusEn: 'The issue is not so much the algorithm itself __________ how managers deploy it.',
        answer: 'as',
        explanationKo: 'not so much A as B는 less A than B와 호환되는 필수 대조 구문입니다.'
      }
    },
    {
      id: 'd25-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '시사 연어 정확도',
      questionKo: '다음 중 원어민 시사·비즈니스 문체에서 어색한 콩글리시 연어가 포함된 문장은?',
      stimulusEn: '동사와 목적어의 자연스러운 결합(collocation)을 확인하세요.',
      options: [
        'We need clear ethical safeguards before scaling automated hiring.',
        'The platform disrupted traditional retail supply chains overnight.',
        'Governments should make a balance between privacy and AI research.',
        'Continuous upskilling keeps mid-career professionals competitive.'
      ],
      answer: 'Governments should make a balance between privacy and AI research.',
      explanationKo: 'make a balance는 어색한 직역이며 strike a balance (또는 find a balance)가 올바른 원어민 연어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "기존 산업 질서를 파괴적으로 혁신하다"를 뜻하는 d로 시작하는 동사 과거형(1단어)을 쓰세요.',
        stimulusEn: 'Ride-hailing apps fundamentally __________ urban transportation models.',
        answer: 'disrupted',
        explanationKo: 'disrupt는 산업 판도를 바꾼다는 핵심 동사입니다.'
      }
    },
    {
      id: 'd25-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Rather than 병렬 구조',
      questionKo: '다음 빈칸에 들어갈 어법상 가장 올바른 형태는?',
      stimulusEn:
        'Forward-looking companies are retraining employees rather than __________ them with algorithms.',
      options: ['replacing', 'replaced', 'to replace', 'replace'],
      answer: 'replacing',
      explanationKo: '앞의 진행형/동명사 흐름(are retraining)과 병렬을 이루어 rather than replacing이 가장 자연스럽고 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 문장 맨 앞에 오는 "Rather than + 동명사" 구문에서 괄호 안 treat를 알맞게 변형하세요.',
        stimulusEn: 'Rather than __________ (treat) AI as a threat, our team uses it as a copilot.',
        answer: 'treating',
        explanationKo: '전치사적으로 쓰인 Rather than 뒤에는 동명사 treating이 옵니다.'
      }
    },
    {
      id: 'd25-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '토론 양보 표현 뉘앙스',
      questionKo: '패널 토론에서 상대의 근거를 정중히 인정한 뒤 반론을 시작할 때 가장 격조 높은 오프닝은?',
      stimulusEn: 'C1 시사 패널 토론 상황에 맞는 표현을 고르세요.',
      options: [
        'I grant that automation boosts efficiency; on the flip side, it narrows entry-level learning.',
        'Your opinion is completely wrong because juniors will have no job.',
        'I admit yes, however your thinking is very short eye.',
        'Even you are right, AI makes big problem to everyone.'
      ],
      answer: 'I grant that automation boosts efficiency; on the flip side, it narrows entry-level learning.',
      explanationKo: 'I grant that ~(인정하지만) + on the flip side(반면)의 조합은 격조 높은 BBC·TED 스타일 토론 화법입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "인간 중심의 AI 전략"이 되도록 빈칸(1단어, 하이픈 포함)을 채우세요.',
        stimulusEn: 'We are committed to building a __________ AI framework.',
        answer: 'human-centric',
        explanationKo: '인간 중심의 가치 설계를 뜻하는 human-centric입니다.'
      }
    },
    {
      id: 'd25-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'While 양보절 어순 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 균형 잡힌 시사 논증 문장을 완성하세요.',
      stimulusEn: '[ a double-edged sword. / While automation / it remains / streamlines routine tasks, ]',
      answer: 'While automation streamlines routine tasks, it remains a double-edged sword.',
      explanationKo: '[양보절] While automation streamlines routine tasks, + [주절] it remains a double-edged sword.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "원격 근무는 유연성을 높여주지만, 팀 결속력을 약화시킬 수 있다." (While remote work / boosts flexibility, / it can weaken / team cohesion.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'While remote work boosts flexibility, it can weaken team cohesion.',
        explanationKo: 'While 양보절로 장점을 먼저 인정한 뒤 리스크를 제시하는 구조를 복습합니다.'
      }
    },
    {
      id: 'd25-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'at the expense of 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 트레이드오프 경고 문장을 완성하세요.',
      stimulusEn: '[ entry-level workers. / Productivity gains / at the expense of / should not come ]',
      answer: 'Productivity gains should not come at the expense of entry-level workers.',
      explanationKo: '주어(Productivity gains) + 조동사 부정(should not come) + at the expense of + 대상 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "혁신이 개인정보 보호를 희생시키며 와서는 안 된다." (Innovation / should not come / at the expense of / data privacy.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Innovation should not come at the expense of data privacy.',
        explanationKo: 'come at the expense of N 구문으로 깔끔하게 영작합니다.'
      }
    },
    {
      id: 'd25-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'less A than B 통문장 영작',
      questionKo: '우리말 뜻에 맞게 less A than B 구문을 사용하여 영작하세요.',
      stimulusEn:
        '우리말: 성공은 알고리즘 자체보다 우리의 적응력에 더 달려 있습니다.\n(힌트: Success hinges / less on algorithms / than on / our adaptability.)',
      answer: 'Success hinges less on algorithms than on our adaptability.',
      acceptableAlt: ['Success depends less on algorithms than on our adaptability.'],
      explanationKo: 'hinge on(~에 달려 있다)과 less A than B를 결합하면 BBC 사설 수준의 유려한 문장이 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 변화는 위협이라기보다 기회다." (This shift is / less a threat / than an opportunity.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'This shift is less a threat than an opportunity.',
        explanationKo: 'less + 명사구 A + than + 명사구 B 구조입니다.'
      }
    },
    {
      id: 'd25-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 연어 교정 서술형',
      questionKo: '다음 문장의 어색한 표현 2곳(make a balance, do upskilling)을 고쳐 자연스러운 C1 문장으로 쓰세요.',
      stimulusEn: '오류 문장: Companies must make a balance between speed and safety while helping staff do upskilling.',
      answer: 'Companies must strike a balance between speed and safety while helping staff upskill.',
      acceptableAlt: [
        'Companies must find a balance between speed and safety while helping staff upskill.'
      ],
      explanationKo: 'make a balance → strike a balance, do upskilling → 동사 원형 upskill(help + 목적어 + 동사원형)로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Automation can make old skills to useless. (render ~ obsolete 활용)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Automation can render old skills obsolete.',
        explanationKo: 'render + 목적어 + 형용사(obsolete) 5형식 구조입니다.'
      }
    },
    {
      id: 'd25-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '조건부 합의 & 대안 제시 영작',
      questionKo: '다음 우리말을 augment와 rather than을 활용하여 완성하세요.',
      stimulusEn:
        '우리말: 우리는 AI가 인간의 판단을 대체하기보다 증강하도록 직무를 재설계해야 합니다.\n(힌트: We must redesign roles / so AI augments / human judgment / rather than replacing it.)',
      answer: 'We must redesign roles so AI augments human judgment rather than replacing it.',
      acceptableAlt: [
        'We must redesign roles so that AI augments human judgment rather than replacing it.',
        'We must redesign roles so AI augments human judgment rather than replaces it.'
      ],
      explanationKo: 'so (that) 목적절과 augment ~ rather than replacing it 대조 구조를 결합한 C1 모범 답안입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "안전장치가 마련된다는 전제하에 AI 도입을 지지한다." (I support AI adoption, / provided that / safeguards are in place.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I support AI adoption, provided that safeguards are in place.',
        explanationKo: 'provided that 조건절로 논리적 전제를 명확히 붙입니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      'In your field or industry, do you view AI automation more as an opportunity to streamline work, or as a double-edged sword that threatens jobs? Give a balanced C1-level take.',
    openingQuestionKo:
      '여러분의 직무나 관심 분야에서 AI 자동화는 업무를 간소화할 기회라고 보시나요, 아니면 일자리를 위협하는 양날의 검이라고 보시나요? 찬반의 균형을 살려 C1 수준으로 답해보세요.',
    followUpQuestionEn:
      'That is a nuanced perspective. What concrete upskilling habits or institutional safeguards do you think are needed so AI augments humans rather than displacing them?',
    followUpQuestionKo:
      '균형 잡힌 시각이네요! AI가 사람을 대체하기보다 역량을 증강하도록 만들려면 어떤 구체적인 업스킬링 습관이나 제도적 안전장치가 필요하다고 보시나요?',
    recommendedChunks: [
      'While automation streamlines ~,',
      'a double-edged sword',
      'on the flip side',
      'at the expense of',
      'augment rather than replace',
      'strike a balance between A and B'
    ],
    modelAnswerEn:
      'While AI automation undeniably streamlines repetitive analysis in my field, I see it as a double-edged sword. On the flip side, if firms chase efficiency at the expense of junior training roles, we risk losing the next generation of experts. To strike a healthy balance, companies need to invest in continuous upskilling so technology augments human judgment rather than rendering it obsolete.'
  }
};
