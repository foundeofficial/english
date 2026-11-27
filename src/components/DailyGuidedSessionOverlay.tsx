import { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Sparkles,
  Volume2,
  X
} from 'lucide-react';
import { MASTERY_STAGE_MAP } from '../data/levels.ts';
import type { MasteryStage } from '../types/academy.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import { speakEnglish } from '../utils/speech.ts';
import { isEquivalentEnglishAnswer } from '../utils/speechScoring.ts';

interface DailyGuidedSessionOverlayProps {
  stage: MasteryStage;
  sessionIndex: number;
  learnerName: string;
  onCompleteSession: (scorePct: number, earnedXp: number, missedCards: SpacedReviewCard[]) => void;
  onClose: () => void;
}

interface GuidedLessonPlan {
  stageTitleKo: string;
  warmupItems: Array<{ en: string; ko: string; tipKo: string }>;
  coreConcept: {
    badge: string;
    headlineKo: string;
    formulaEn: string;
    wrongVsRight: { wrong: string; right: string };
    intuitionKo: string;
  };
  outputTask: {
    promptKo: string;
    hintChips: string[];
    targetEn: string;
    acceptableAlts?: string[];
    explanationKo: string;
  };
  finalQuizzes: Array<{
    qKo: string;
    options: string[];
    answer: string;
    noteKo: string;
  }>;
}

const STAGE_GUIDED_PLANS: Record<MasteryStage, GuidedLessonPlan> = {
  stage0: {
    stageTitleKo: 'Stage 0 · 유치원 파닉스 15분 집중 코스',
    warmupItems: [
      { en: 'apple', ko: '사과 (/æ/)', tipKo: '입을 위아래로 크게 벌리며 짧고 힘있게 "애!"' },
      { en: 'fish', ko: '물고기 (/f/)', tipKo: '윗니로 아랫입술 안쪽을 살짝 대고 바람만 "프~"' },
      { en: 'cape', ko: '망토 (Magic-E /eɪ/)', tipKo: '끝에 e가 붙어 a가 길게 "에이" 소리로 변신!' }
    ],
    coreConcept: {
      badge: '오늘의 파닉스 핵심 원리',
      headlineKo: '끝에 Magic-E가 붙으면 앞 모음이 알파벳 이름을 불러요!',
      formulaEn: 'cap (/æ/ 모자)  +  e   →   cape (/eɪ/ 망토)',
      wrongVsRight: { wrong: 'cap과 cape를 둘 다 "캡"으로 읽기', right: 'cap(캡) vs cape(케이프) 구분하기!' },
      intuitionKo: '맨 끝의 e는 자기 소리를 안 내는 대신, 앞 모음에게 힘을 주어 길게 자기 이름(A→에이, I→아이, O→오우)을 말하게 합니다.'
    },
    outputTask: {
      promptKo: '파닉스 규칙으로 "나는 빨간 모자를 좋아해요." 문장을 완성해 보세요!',
      hintChips: ['I', 'like', 'the', 'red', 'cap.'],
      targetEn: 'I like the red cap.',
      acceptableAlts: ['I like a red cap'],
      explanationKo: '영어는 항상 [주어(I) → 동사(like) → 대상(the red cap)] 순서로 말합니다!'
    },
    finalQuizzes: [
      {
        qKo: 'Q1. "kit(도구함)" 끝에 Magic-E가 붙은 "kite(연)"의 모음 소리는?',
        options: ['짧은 /ɪ/ (이)', '긴 /aɪ/ (아이)', '짧은 /æ/ (애)'],
        answer: '긴 /aɪ/ (아이)',
        noteKo: 'Magic-E 규칙으로 i가 알파벳 이름 소리 /aɪ/(아이)로 길어집니다!'
      },
      {
        qKo: 'Q2. 윗니로 아랫입술을 가볍게 대고 바람을 내는 F 발음 단어는?',
        options: ['fan (선풍기)', 'pan (프라이팬)', 'van (승합차)'],
        answer: 'fan (선풍기)',
        noteKo: 'pan은 두 입술을 붙이고, van은 목청이 울리며, fan은 목청 울림 없이 바람만 뺍니다.'
      },
      {
        qKo: 'Q3. "sh" 이중자음이 만드는 소리("쉬~")가 들어간 단어는?',
        options: ['ship (배)', 'cat (고양이)', 'dog (강아지)'],
        answer: 'ship (배)',
        noteKo: 's와 h가 만나면 조용히 하라는 "쉬~(/ʃ/)" 소리가 납니다.'
      }
    ]
  },
  stage1: {
    stageTitleKo: 'Stage 1 · 초등 기초 어순 15분 집중 코스',
    warmupItems: [
      { en: 'I am a student.', ko: '나는 학생입니다.', tipKo: 'be동사는 앞뒤를 연결하는 "=" 기호!' },
      { en: 'She plays soccer.', ko: '그녀는 축구를 합니다.', tipKo: 'He/She/It 뒤 일반동사에는 꼭 -s 붙이기!' },
      { en: 'There is a book on the desk.', ko: '책상 위에 책이 한 권 있어요.', tipKo: '존재를 말할 땐 There is ~로 시작!' }
    ],
    coreConcept: {
      badge: '오늘의 초등 어순 핵심',
      headlineKo: '일반동사 부정문은 not 혼자 못 써요 — don’t / doesn’t 출동!',
      formulaEn: 'She  +  doesn’t  +  like (동사원형)  +  carrots.',
      wrongVsRight: { wrong: 'She not likes carrots. / She doesn’t likes carrots.', right: "She doesn't like carrots." },
      intuitionKo: '3인칭 단수 -s는 조동사 doesn’t가 대신 챙겨갔기 때문에, 뒤의 본동사 like는 반드시 깨끗한 원형으로 돌아옵니다!'
    },
    outputTask: {
      promptKo: '"그녀는 매일 아침 커피를 마시지 않는다."를 영작해 보세요!',
      hintChips: ['She', "doesn't", 'drink', 'coffee', 'every morning.'],
      targetEn: "She doesn't drink coffee every morning.",
      acceptableAlts: ['She does not drink coffee every morning.'],
      explanationKo: '주어(She) + doesn’t + 동사원형(drink) + 목적어(coffee) + 시간(every morning)!'
    },
    finalQuizzes: [
      {
        qKo: 'Q1. "그는 영어를 잘 말하니?" 의문문으로 바른 것은?',
        options: ['Does he speaks English well?', 'Does he speak English well?', 'Is he speak English well?'],
        answer: 'Does he speak English well?',
        noteKo: 'Does가 앞에 나오면 본동사는 반드시 원형(speak)을 씁니다.'
      },
      {
        qKo: 'Q2. "나는 어제 공원에 갔다." 과거형으로 바른 것은?',
        options: ['I goed to the park yesterday.', 'I went to the park yesterday.', 'I go to the park yesterday.'],
        answer: 'I went to the park yesterday.',
        noteKo: 'go는 대표적인 불규칙 동사(go – went – gone)입니다.'
      },
      {
        qKo: 'Q3. "고양이가 침대 아래에 있다." 알맞은 전치사는?',
        options: ['The cat is under the bed.', 'The cat is on the bed.', 'The cat is between the bed.'],
        answer: 'The cat is under the bed.',
        noteKo: '~의 바로 아래는 under를 사용합니다.'
      }
    ]
  },
  stage2: {
    stageTitleKo: 'Stage 2 · 중학 핵심 문법·회화 15분 집중 코스',
    warmupItems: [
      { en: 'check it out', ko: '한번 확인해 봐 (연음: 체키다웃)', tipKo: '자음+모음 연음과 T 약화(Flap-T)를 한 덩어리로!' },
      { en: 'I have lived here for five years.', ko: '나는 여기서 5년째 살고 있다.', tipKo: '과거에 시작해 현재까지 이어지는 현재완료 계속 용법!' },
      { en: 'I stopped by a cafe on my way home.', ko: '퇴근길에 카페에 잠깐 들렀어요.', tipKo: 'home은 부사이므로 to home이 아닌 그냥 home!' }
    ],
    coreConcept: {
      badge: '오늘의 중학·회화 핵심 원리',
      headlineKo: '감정 분사는 "유발하면 -ing, 느끼면 -ed"!',
      formulaEn: 'The movie was exciting. (유발)   vs   I was excited. (느낌)',
      wrongVsRight: { wrong: 'I am boring today. (나는 남을 지루하게 만드는 사람)', right: 'I am bored today. (내가 지루함을 느끼는 상태)' },
      intuitionKo: '사람 주어라고 무조건 -ed가 아니라, "그 감정을 일으키는지(-ing) 당해서 느끼는지(-ed)"로 판단하세요!'
    },
    outputTask: {
      promptKo: '"그 결과에 모두가 매우 놀랐다."를 영작해 보세요!',
      hintChips: ['Everyone', 'was', 'very', 'surprised', 'at the result.'],
      targetEn: 'Everyone was very surprised at the result.',
      acceptableAlts: ['Everyone was surprised at the result', 'Everyone was very surprised by the result'],
      explanationKo: 'Everyone은 단수 취급(was)이며, 놀람을 느꼈으므로 과거분사 surprised를 씁니다.'
    },
    finalQuizzes: [
      {
        qKo: 'Q1. 다음 중 현재완료와 함께 쓸 수 없는 명백한 과거 시간 표현은?',
        options: ['since 2022', 'for three years', 'yesterday'],
        answer: 'yesterday',
        noteKo: 'yesterday, last year, ago 같은 과거 시점 부사는 단순 과거시제와만 함께 씁니다.'
      },
      {
        qKo: 'Q2. "그녀는 영어 공부하는 것을 즐긴다." 알맞은 형태는?',
        options: ['She enjoys to study English.', 'She enjoys studying English.', 'She enjoys study English.'],
        answer: 'She enjoys studying English.',
        noteKo: 'enjoy, finish, mind, avoid 뒤에는 동명사(-ing)만 목적어로 옵니다.'
      },
      {
        qKo: 'Q3. "내가 어제 산 그 책" — 관계대명사가 바른 것은?',
        options: ['the book which I bought yesterday', 'the book who I bought yesterday', 'the book what I bought yesterday'],
        answer: 'the book which I bought yesterday',
        noteKo: '선행사가 사물(the book)일 때는 which 또는 that을 사용합니다.'
      }
    ]
  },
  stage3: {
    stageTitleKo: 'Stage 3 · 고등 내신·수능 1등급 15분 집중 코스',
    warmupItems: [
      { en: 'affect vs. effect', ko: '영향을 미치다(동사) vs 결과·효과(명사)', tipKo: 'A(Action=동사 affect) vs E(End result=명사 effect)!' },
      { en: 'Had we known earlier, we would have acted.', ko: '더 일찍 알았더라면 행동했을 텐데.', tipKo: '가정법 과거완료 If 생략 도치 — 수능·고등 서술형 최빈출!' },
      { en: 'Seen from space, the Earth looks fragile.', ko: '우주에서 보았을 때 지구는 연약해 보인다.', tipKo: '주절 주어(the Earth)가 "보여지는" 수동 관계이므로 p.p. Seen!' }
    ],
    coreConcept: {
      badge: '오늘의 고등·수능 킬러 공식',
      headlineKo: '부정어(Never / Not only / Little)가 문두로 나가면 의문문 어순으로 도치!',
      formulaEn: 'Not only  +  did (조동사)  +  she (주어)  +  win (동사원형),  but also ...',
      wrongVsRight: { wrong: 'Not only she won the prize, but she also inspired others.', right: 'Not only did she win the prize, but she also inspired others.' },
      intuitionKo: '강조하고 싶은 부정어를 문장 맨 앞에 던지는 순간, 영어는 "지금 강조 중!"이라는 신호로 조동사를 주어 앞으로 꺼냅니다.'
    },
    outputTask: {
      promptKo: '[조건: Not only 도치 사용] "그는 시험에 합격했을 뿐만 아니라 장학금도 받았다."를 영작해 보세요!',
      hintChips: ['Not only', 'did he pass', 'the exam,', 'but he also', 'won a scholarship.'],
      targetEn: 'Not only did he pass the exam, but he also won a scholarship.',
      acceptableAlts: ['Not only did he pass the exam, but he also got a scholarship.'],
      explanationKo: 'Not only 뒤 일반동사 과거형(passed)은 조동사 did를 주어 앞으로 꺼내 "did he pass"로 도치합니다.'
    },
    finalQuizzes: [
      {
        qKo: 'Q1. 빈칸에 알맞은 분사구문은? "_____ in a hurry, the report contained several errors."',
        options: ['Writing', 'Written', 'Having written'],
        answer: 'Written',
        noteKo: '주절 주어 the report는 "쓰여진" 대상(수동)이므로 과거분사 Written이 정답입니다.'
      },
      {
        qKo: 'Q2. 다음 중 어법상 틀린 문장은?',
        options: [
          'The news that he won surprised everyone.',
          'What matters most is consistent effort.',
          'I found that hard to solve the equation alone.'
        ],
        answer: 'I found that hard to solve the equation alone.',
        noteKo: '가목적어는 that이 아니라 반드시 it을 씁니다(found it hard to solve).'
      },
      {
        qKo: 'Q3. "그녀는 새로운 환경에 빠르게 적응했다." 알맞은 혼동 어휘는?',
        options: ['adapted to', 'adopted to', 'adepted to'],
        answer: 'adapted to',
        noteKo: 'adapt(적응하다, a=adjust) vs adopt(입양·채택하다, o=option)!'
      }
    ]
  },
  stage4: {
    stageTitleKo: 'Stage 4 · 글로벌 오피스·C2 15분 집중 코스',
    warmupItems: [
      { en: 'keep someone in the loop', ko: '진행 상황을 계속 공유하다', tipKo: '글로벌 협업 이메일·슬랙 최빈출 원어민 관용 표현!' },
      { en: 'double-edged sword', ko: '양날의 검 (장단점이 공존)', tipKo: '임원 보고·TED 논증에서 균형 잡힌 시각 제시할 때 탁월!' },
      { en: 'Would Thursday work on your end?', ko: '그쪽 일정상 목요일 괜찮으실까요?', tipKo: '"Is Thursday possible?"보다 훨씬 세련된 원어민 조율!' }
    ],
    coreConcept: {
      badge: '오늘의 C1–C2 설득·조율 공식',
      headlineKo: '직설적 반박 대신 "인정(While) + 본론 + 대안 제시"로 프로페셔널하게!',
      formulaEn: 'While + [상대 의견 인정],  [리스크/제약]  —  what if we [구체적 대안]?',
      wrongVsRight: { wrong: 'Your schedule is impossible. We cannot finish until Friday.', right: "While I understand the urgency, Friday looks tight on our end—what if we deliver the core scope first?" },
      intuitionKo: '글로벌 리더의 영어는 문법보다 "완충 장치(Hedging) + 해결책 중심(Solution-oriented)" 프레이밍에서 격이 갈립니다.'
    },
    outputTask: {
      promptKo: '"금요일 퇴근 전까지 마무리해서 계속 진행 상황 공유드리겠습니다."를 원어민 실무 영어로 써보세요!',
      hintChips: ["I'll", 'wrap it up', 'by EOD Friday', 'and keep you', 'in the loop.'],
      targetEn: "I'll wrap it up by EOD Friday and keep you in the loop.",
      acceptableAlts: ['I will wrap it up by Friday and keep you in the loop.'],
      explanationKo: '기한(마감)은 until이 아니라 by를 쓰며, 대명사 목적어(it)는 구동사 가운데(wrap it up)에 넣습니다!'
    },
    finalQuizzes: [
      {
        qKo: 'Q1. "금요일까지(마감 완료) 제출하겠습니다." 전치사가 바른 것은?',
        options: ['by Friday', 'until Friday', 'during Friday'],
        answer: 'by Friday',
        noteKo: '완료 마감 시점은 by, 상태의 지속은 until을 사용합니다.'
      },
      {
        qKo: 'Q2. 대명사 목적어 위치가 올바른 원어민 구동사 표현은?',
        options: ['figure out it', 'figure it out', 'bring up it'],
        answer: 'figure it out',
        noteKo: '타동사+부사 구동사에서 대명사(it/them)는 반드시 동사와 부사 사이에 위치합니다.'
      },
      {
        qKo: 'Q3. 상사에게 완곡하게 일정 변경을 제안하는 가장 세련된 표현은?',
        options: [
          'Change the meeting to Thursday.',
          'Would you be open to moving our sync to Thursday?',
          'Is Thursday possible for your promise?'
        ],
        answer: 'Would you be open to moving our sync to Thursday?',
        noteKo: '"Would you be open to -ing?"는 글로벌 오피스에서 가장 호감도 높은 완곡 제안 패턴입니다.'
      }
    ]
  }
};

export function DailyGuidedSessionOverlay({
  stage,
  sessionIndex,
  learnerName,
  onCompleteSession,
  onClose
}: DailyGuidedSessionOverlayProps) {
  const plan = STAGE_GUIDED_PLANS[stage] ?? STAGE_GUIDED_PLANS.stage2;
  const stageMeta = MASTERY_STAGE_MAP[stage];

  const [phase, setPhase] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [outputInput, setOutputInput] = useState('');
  const [outputChecked, setOutputChecked] = useState<null | boolean>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizGraded, setQuizGraded] = useState(false);

  const progressPct = phase === 5 ? 100 : (phase / 4) * 100;

  const handleCheckOutput = () => {
    const ok = isEquivalentEnglishAnswer(
      outputInput,
      plan.outputTask.targetEn,
      plan.outputTask.acceptableAlts
    );
    setOutputChecked(ok);
    speakEnglish(plan.outputTask.targetEn, 0.94);
  };

  const handleFinishSession = () => {
    const today = new Date().toISOString().slice(0, 10);
    let correct = outputChecked ? 1 : 0;
    const total = 1 + plan.finalQuizzes.length;
    const missed: SpacedReviewCard[] = [];

    if (!outputChecked) {
      missed.push({
        id: `guided-out-${stage}-${sessionIndex + 1}`,
        promptKo: plan.outputTask.promptKo,
        targetEn: plan.outputTask.targetEn,
        noteKo: plan.outputTask.explanationKo,
        sourceLabel: `15분 자동수업 · ${stageMeta.shortLabel}`,
        intervalDays: 1,
        dueDate: today,
        reviewCount: 0,
        mastered: false
      });
    }

    plan.finalQuizzes.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answer) {
        correct += 1;
      } else {
        missed.push({
          id: `guided-q-${stage}-${idx}-${sessionIndex + 1}`,
          promptKo: q.qKo,
          targetEn: `정답: ${q.answer}`,
          noteKo: q.noteKo,
          sourceLabel: `15분 자동수업 · ${stageMeta.shortLabel}`,
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        });
      }
    });

    const scorePct = Math.round((correct / total) * 100);
    setQuizGraded(true);
    setPhase(5);
    onCompleteSession(scorePct, 120, missed);
  };

  return (
    <div className="modal-backdrop guided-overlay-backdrop" role="dialog" aria-modal="true" aria-label="오늘의 15분 자동 완전학습 세션">
      <div className="modal-panel modal-panel-wide guided-session-panel">
        {/* TOP PROGRESS BAR */}
        <div className="section-label-between" style={{ gap: '12px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="pill-tag pill-brand">{plan.stageTitleKo}</span>
            <span style={{ fontSize: '0.84rem', fontWeight: 750, color: 'var(--text-sub)' }}>
              {phase <= 4 ? `단계 ${phase} / 4` : '완주 완료!'}
            </span>
          </div>
          <button
            id="close-guided-session-btn"
            type="button"
            className="icon-close-btn"
            onClick={onClose}
            aria-label="세션 닫기"
          >
            <X size={20} />
          </button>
        </div>

        <div className="skill-bar-track" style={{ height: '8px', marginBottom: '22px' }}>
          <div className="skill-bar-fill" style={{ width: `${progressPct}%` }} />
        </div>

        {/* PHASE 1: 2-MIN WARMUP */}
        {phase === 1 && (
          <div className="stack-md">
            <div>
              <span className="pill-tag pill-amber">Phase 1 · 2분 귀트임 워밍업</span>
              <h2 style={{ fontSize: '1.38rem', marginTop: '8px' }}>
                오늘의 핵심 소리·표현 3개를 귀로 먼저 열어보세요
              </h2>
            </div>

            <div className="stack-sm">
              {plan.warmupItems.map((item, i) => (
                <div key={i} className="foundation-sentence-row">
                  <div className="foundation-sentence-num">0{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ fontFamily: 'var(--font-en)', fontSize: '1.14rem' }}>
                      {item.en}
                    </strong>
                    <div style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '0.9rem' }}>
                      {item.ko}
                    </div>
                    <small style={{ color: 'var(--text-sub)' }}>💡 {item.tipKo}</small>
                  </div>
                  <button
                    type="button"
                    className="btn-outline"
                    style={{ padding: '7px 13px', fontSize: '0.84rem' }}
                    onClick={() => speakEnglish(item.en, 0.9)}
                  >
                    <Volume2 size={14} /> 듣기
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                id="guided-next-phase-2"
                type="button"
                className="btn-solid-brand"
                onClick={() => setPhase(2)}
              >
                Phase 2 · 핵심 원리 배우기 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* PHASE 2: CORE INTUITION */}
        {phase === 2 && (
          <div className="stack-md">
            <div>
              <span className="pill-tag pill-coral">{plan.coreConcept.badge}</span>
              <h2 style={{ fontSize: '1.38rem', marginTop: '8px' }}>
                {plan.coreConcept.headlineKo}
              </h2>
            </div>

            <div className="grammar-formula-pill" style={{ textAlign: 'center', fontSize: '1.04rem', padding: '14px' }}>
              {plan.coreConcept.formulaEn}
            </div>

            <div className="trap-vs-insight-grid">
              <div className="trap-card-box">
                <strong style={{ color: 'var(--danger)' }}>❌ 흔한 한국인 실수</strong>
                <p style={{ marginTop: '6px', fontFamily: 'var(--font-en)', fontWeight: 650 }}>
                  {plan.coreConcept.wrongVsRight.wrong}
                </p>
              </div>
              <div className="insight-card-box" style={{ background: 'var(--ok-soft)', borderColor: 'var(--ok)' }}>
                <strong style={{ color: 'var(--ok)' }}>⭕ 원어민·1등급 정답</strong>
                <p style={{ marginTop: '6px', fontFamily: 'var(--font-en)', fontWeight: 750 }}>
                  {plan.coreConcept.wrongVsRight.right}
                </p>
              </div>
            </div>

            <div className="coach-callout-box">
              <strong>🧠 쏙쏙 이해되는 원리 직관</strong>
              <p style={{ marginTop: '4px' }}>{plan.coreConcept.intuitionKo}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <button type="button" className="btn-outline" onClick={() => setPhase(1)}>
                ← 이전
              </button>
              <button
                id="guided-next-phase-3"
                type="button"
                className="btn-solid-brand"
                onClick={() => setPhase(3)}
              >
                Phase 3 · 직접 문장 만들기 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* PHASE 3: ACTIVE OUTPUT */}
        {phase === 3 && (
          <div className="stack-md">
            <div>
              <span className="pill-tag pill-brand">Phase 3 · 실전 출력 훈련</span>
              <h2 style={{ fontSize: '1.32rem', marginTop: '8px' }}>{plan.outputTask.promptKo}</h2>
            </div>

            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--text-sub)' }}>
                힌트 칩을 순서대로 클릭하거나 직접 영어로 타이핑해 보세요:
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                {plan.outputTask.hintChips.map((chip, i) => (
                  <button
                    key={i}
                    id={`guided-chip-${i}`}
                    type="button"
                    className="day-switch-chip"
                    onClick={() =>
                      setOutputInput((prev) => `${prev ? `${prev} ` : ''}${chip}`)
                    }
                  >
                    + {chip}
                  </button>
                ))}
              </div>
            </div>

            <input
              id="guided-output-input"
              type="text"
              className="input-clean"
              value={outputInput}
              onChange={(e) => {
                setOutputInput(e.target.value);
                setOutputChecked(null);
              }}
              placeholder="영어 문장을 완성하세요..."
            />

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                id="guided-check-output-btn"
                type="button"
                className="btn-solid-coral"
                disabled={!outputInput.trim()}
                onClick={handleCheckOutput}
              >
                <Sparkles size={15} /> 내 문장 채점 &amp; 발음 듣기
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  setOutputInput('');
                  setOutputChecked(null);
                }}
              >
                지우기
              </button>
            </div>

            {outputChecked !== null && (
              <div className={`feedback-banner ${outputChecked ? 'ok' : 'warn'}`}>
                <div>
                  <strong>
                    {outputChecked
                      ? '✓ 완벽합니다! 바로 원어민 어순이 나왔어요!'
                      : `정답 비교: ${plan.outputTask.targetEn}`}
                  </strong>
                  <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>{plan.outputTask.explanationKo}</p>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <button type="button" className="btn-outline" onClick={() => setPhase(2)}>
                ← 이전
              </button>
              <button
                id="guided-next-phase-4"
                type="button"
                className="btn-solid-brand"
                onClick={() => setPhase(4)}
              >
                Phase 4 · 최종 3문항 확인 퀴즈 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* PHASE 4: FINAL 3-QUESTION MASTERY CHECK */}
        {phase === 4 && (
          <div className="stack-md">
            <div>
              <span className="pill-tag pill-coral">Phase 4 · 3문항 최종 확인</span>
              <h2 style={{ fontSize: '1.32rem', marginTop: '8px' }}>
                방금 배운 핵심 개념을 3문항으로 완벽하게 굳히세요!
              </h2>
            </div>

            {plan.finalQuizzes.map((q, qIdx) => (
              <div key={qIdx} className="quiz-card-clean">
                <p style={{ fontWeight: 750, marginBottom: '10px' }}>{q.qKo}</p>
                <div className="choice-stack">
                  {q.options.map((opt, oIdx) => (
                    <button
                      key={opt}
                      id={`guided-q-${qIdx}-${oIdx}`}
                      type="button"
                      className={`option-choice-btn ${quizAnswers[qIdx] === opt ? 'selected' : ''}`}
                      onClick={() =>
                        setQuizAnswers((prev) => ({ ...prev, [qIdx]: opt }))
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <button type="button" className="btn-outline" onClick={() => setPhase(3)}>
                ← 이전
              </button>
              <button
                id="guided-complete-session-btn"
                type="button"
                className="btn-solid-brand"
                disabled={Object.keys(quizAnswers).length < plan.finalQuizzes.length}
                onClick={handleFinishSession}
              >
                <CheckCircle2 size={16} /> 오늘의 15분 수업 완료 &amp; +120 XP 받기!
              </button>
            </div>
          </div>
        )}

        {/* PHASE 5: COMPLETION CELEBRATION */}
        {phase === 5 && quizGraded && (
          <div style={{ textAlign: 'center', padding: '18px 8px' }}>
            <Award size={44} style={{ color: 'var(--brand)', marginBottom: '10px' }} />
            <span className="pill-tag pill-coral">+120 XP 획득 · 오늘의 집중 수업 완주!</span>
            <h2 style={{ fontSize: '1.65rem', marginTop: '10px' }}>
              {learnerName} 님, 오늘의 15분 자동 수업을 완벽하게 끝냈습니다!
            </h2>
            <p style={{ color: 'var(--text-sub)', marginTop: '8px' }}>
              틀린 문항이 있다면 SM-2 오답 복습함에 자동 등록되었으며, 연속 학습 스트릭과 XP가 즉시 반영되었습니다.
            </p>
            <button
              id="guided-done-close-btn"
              type="button"
              className="btn-solid-brand"
              style={{ marginTop: '20px', padding: '12px 28px' }}
              onClick={onClose}
            >
              로드맵으로 돌아가기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
