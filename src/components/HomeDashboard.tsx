import { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  BookOpenCheck,
  CheckCircle2,
  Circle,
  FileEdit,
  Headphones,
  Layers,
  Mic,
  Play,
  PlayCircle,
  Search,
  Sparkles,
  Video,
  Volume2,
  Zap
} from 'lucide-react';
import {
  COURSE_CATALOG,
  COURSE_METADATA,
  WEEK_THEMES
} from '../data/courseCatalog.ts';
import {
  LEVEL_INFO_MAP,
  LEVEL_ORDER,
  MASTERY_STAGE_MAP,
  MASTERY_STAGE_ORDER
} from '../data/levels.ts';
import type { MasteryStage } from '../types/academy.ts';
import type {
  AppPersistState,
  DayLessonModule,
  LevelTier,
  MainRoute
} from '../types/course.ts';
import { computeDailyQuests } from '../utils/achievements.ts';
import { speakEnglish } from '../utils/speech.ts';
import type { AcademySubTab } from './GrammarAndHighSchoolHub.tsx';
import { InteractiveText } from './InteractiveText.tsx';
import type { VocabTab } from './VocabAndReviewBook.tsx';
import type { VaultView } from './VocabMasterVaultPanel.tsx';

interface HomeDashboardProps {
  state: AppPersistState;
  currentModule: DayLessonModule;
  onSelectDay: (dayNumber: number) => void;
  onSelectStage: (stage: MasteryStage) => void;
  onStartSprint: () => void;
  onStartGuidedSession: () => void;
  onOpenOmnisearch: () => void;
  onNavigate: (
    route: MainRoute,
    opts?: {
      lectureTab?: 'youtube' | 'roleplay' | 'storybook';
      roleplaySub?: 'roleplay' | 'speaking' | 'pattern-gym';
      gymMode?: 'cloze-elo' | 'pattern-reflex';
      worksheetTab?: 'concept' | 'exam' | 'mock-exam';
      academyTab?: AcademySubTab;
      csatSub?: 'xray' | 'killer';
      vocabTab?: VocabTab;
      vaultView?: VaultView;
    }
  ) => void;
  onOpenDictionary: (word?: string) => void;
}

const STAGE_DAILY_STEPS: Record<
  MasteryStage,
  Array<{ stepNum: string; title: string; desc: string; route: MainRoute; lectureTab?: 'youtube' | 'roleplay' }>
> = {
  stage0: [
    {
      stepNum: 'STEP 1',
      title: 'A–Z 음가 보드 & 매직-E 소리 합치기',
      desc: '오늘의 알파벳 3글자 입모양과 CVC/Magic-E 규칙을 소리 내어 익히세요.',
      route: 'foundation'
    },
    {
      stepNum: 'STEP 2',
      title: 'R/L · F/V 한국인 발음 귀트임 게임',
      desc: '미니멀 페어 듣기 퀴즈와 사이트워드 60개로 영어 귀를 엽니다.',
      route: 'foundation'
    },
    {
      stepNum: 'STEP 3',
      title: '유치원·초등 첫인사 프리토킹 롤플레이',
      desc: '새 친구와 인사하고 좋아하는 것을 영어로 주고받아 보세요.',
      route: 'lecture',
      lectureTab: 'roleplay'
    }
  ],
  stage1: [
    {
      stepNum: 'STEP 1',
      title: '초등 필수 10강 어순 블록 조립 (F01~F10)',
      desc: '한국어 어순을 영어 [주어+동사+목적어] 블록으로 뒤집는 훈련을 하세요.',
      route: 'foundation'
    },
    {
      stepNum: 'STEP 2',
      title: '초등 핵심 영문법 (G01~G05) & 문장변환기',
      desc: 'be동사·일반동사의 평서문/부정문/의문문 변화를 눈으로 확인하세요.',
      route: 'academy'
    },
    {
      stepNum: 'STEP 3',
      title: '아이스크림 주문 · 길 묻기 5턴 롤플레이',
      desc: '배운 기초 문장을 원어민 파트너와 실제 대화로 써먹어 보세요.',
      route: 'lecture',
      lectureTab: 'roleplay'
    }
  ],
  stage2: [
    {
      stepNum: 'STEP 1',
      title: '12시제 타임라인 & 중학 영문법 (G06~G12)',
      desc: '현재완료·수동태·to부정사를 시각 공식과 4문항 드릴로 정복하세요.',
      route: 'academy'
    },
    {
      stepNum: 'STEP 2',
      title: '유튜브 A–B 반복 · 시트콤 쉐도잉 · 딕테이션',
      desc: 'Day 01~12 실전 영상과 마이크 발음 피드백으로 원어민 리듬을 익히세요.',
      route: 'lecture',
      lectureTab: 'youtube'
    },
    {
      stepNum: 'STEP 3',
      title: '카페 · 공항 · 식당 여행 5턴 롤플레이 & 복습',
      desc: '실전 상황 대화 후 SM-2 플래시카드로 장기 기억을 고정하세요.',
      route: 'lecture',
      lectureTab: 'roleplay'
    }
  ],
  stage3: [
    {
      stepNum: 'STEP 1',
      title: '고등·수능 킬러 문법 (G13~G20) 정복',
      desc: '관계사·분사구문·가정법 도치·동격 that을 비주얼 블록으로 끝내세요.',
      route: 'academy'
    },
    {
      stepNum: 'STEP 2',
      title: '수능 구문독해 X-Ray & 30문항 실전 풀이',
      desc: 'S/V/O/M 구문 컬러 해부로 고난도 아카데믹 지문을 직독직해하세요.',
      route: 'academy'
    },
    {
      stepNum: 'STEP 3',
      title: '4축 루브릭 에세이 첨삭 & 영어 찬반 토론',
      desc: '서론·본론·결론 에세이를 자동 채점받고 고등 토론 롤플레이에 도전하세요.',
      route: 'lecture',
      lectureTab: 'roleplay'
    }
  ],
  stage4: [
    {
      stepNum: 'STEP 1',
      title: 'Day 13~30 글로벌 오피스 · BBC/TED 시사 인강',
      desc: '미국·영국·호주 억양 쉐도잉과 블라인드 딕테이션으로 원어민 청취력을 완성하세요.',
      route: 'lecture',
      lectureTab: 'youtube'
    },
    {
      stepNum: 'STEP 2',
      title: '협상 · 클레임 대응 · 임원 Q&A 5턴 롤플레이',
      desc: '실무 현장에서 바로 통하는 완곡한 설득·반론 표현을 훈련하세요.',
      route: 'lecture',
      lectureTab: 'roleplay'
    },
    {
      stepNum: 'STEP 3',
      title: 'A4 실전 단원평가 & 아카데믹 에세이 포트폴리오',
      desc: '950문항 쌍둥이 오답 클리닉과 1등급 에세이로 완벽 마스터를 증명하세요.',
      route: 'worksheet'
    }
  ]
};

export function HomeDashboard({
  state,
  currentModule,
  onSelectDay,
  onSelectStage,
  onStartSprint,
  onStartGuidedSession,
  onOpenOmnisearch,
  onNavigate,
  onOpenDictionary
}: HomeDashboardProps) {
  const [selectedWeekTab, setSelectedWeekTab] = useState<'all' | 1 | 2 | 3 | 4 | 5>(
    currentModule.weekNumber
  );
  const [levelFilter, setLevelFilter] = useState<'all' | LevelTier>('all');
  const [quickDictInput, setQuickDictInput] = useState('');

  const activeStage: MasteryStage = state.settings.currentStage ?? 'stage2';
  const activeStageMeta = MASTERY_STAGE_MAP[activeStage];

  const dayRec = state.dayRecords[currentModule.dayNumber] ?? {
    sprintCompleted: false,
    lectureCompleted: false,
    videoWatched: false,
    readingCompleted: false,
    examScore: null,
    vocabMasteredCount: 0
  };

  const dayVocabMastered = currentModule.vocabList.filter((v) =>
    state.masteredVocabIds.includes(v.id)
  ).length;

  const learnerLevelMeta = LEVEL_INFO_MAP[state.settings.levelTier];
  const dayLevelMeta = LEVEL_INFO_MAP[currentModule.cefrLevel];
  const targetKeySentence = currentModule.keySentenceByTier[state.settings.levelTier];

  // Real progress percentages across the 5 Zero-to-Mastery stages
  const stage0Pct = Math.min(
    100,
    Math.round(((state.phonicsMasteredIds.length + Math.min(10, state.minimalPairBestStreak * 2)) / 86) * 100)
  );
  const stage1Pct = Math.min(
    100,
    Math.round((state.foundationCompletedIds.length / 10) * 100)
  );
  const stage2DaysDone = Object.entries(state.dayRecords).filter(
    ([d, r]) => Number(d) <= 12 && (r.sprintCompleted || r.lectureCompleted || r.examScore !== null)
  ).length;
  const stage2GrammarDone = state.grammarMasteredIds.filter((id) => {
    const n = Number(id.replace('g', ''));
    return n >= 1 && n <= 12;
  }).length;
  const stage2Pct = Math.min(
    100,
    Math.round(((stage2DaysDone + stage2GrammarDone) / 24) * 100)
  );
  const stage3GrammarDone = state.grammarMasteredIds.filter((id) => {
    const n = Number(id.replace('g', ''));
    return n >= 13 && n <= 20;
  }).length;
  const stage3PassagesDone = Object.keys(state.highSchoolPassageScores ?? {}).length;
  const stage3Pct = Math.min(
    100,
    Math.round(((stage3GrammarDone + stage3PassagesDone + Math.min(4, state.savedEssays.length)) / 22) * 100)
  );
  const stage4DaysDone = Object.entries(state.dayRecords).filter(
    ([d, r]) => Number(d) >= 13 && (r.sprintCompleted || r.lectureCompleted || r.examScore !== null)
  ).length;
  const stage4Pct = Math.min(
    100,
    Math.round(((stage4DaysDone + state.completedRoleplayIds.length) / 30) * 100)
  );

  const stageProgressMap: Record<MasteryStage, number> = {
    stage0: stage0Pct,
    stage1: stage1Pct,
    stage2: stage2Pct,
    stage3: stage3Pct,
    stage4: stage4Pct
  };

  const visibleDays = COURSE_CATALOG.filter((d) => {
    const matchWeek = selectedWeekTab === 'all' ? true : d.weekNumber === selectedWeekTab;
    const matchLevel = levelFilter === 'all' ? true : d.cefrLevel === levelFilter;
    return matchWeek && matchLevel;
  });

  const activeWeekInfo =
    selectedWeekTab === 'all'
      ? null
      : WEEK_THEMES.find((w) => w.weekNumber === selectedWeekTab) ?? WEEK_THEMES[0];

  const [todayKey] = useState(() => new Date().toISOString().slice(0, 10));
  const todayStudyMin = state.studyMinutesByDate?.[todayKey] ?? 0;
  const targetDailyMin =
    state.settings.studyPace === 'light'
      ? 10
      : state.settings.studyPace === 'intensive'
        ? 50
        : 25;
  const dailyGoalPct = Math.min(100, Math.round((todayStudyMin / targetDailyMin) * 100));

  const xpLevel = Math.floor((state.xpPoints ?? 0) / 250) + 1;
  const guidedDoneCount = state.guidedSessionsCompleted ?? 0;
  const writingSolvedCount = state.writingClinicSolvedIds?.length ?? 0;
  const speakingCount = state.speakingAttempts?.length ?? 0;
  const totalVocabLearned =
    state.masteredVocabIds.length + (state.masteredVaultWordIds?.length ?? 0);

  return (
    <main className="page-wrap">
      {/* =======================================================
          v6.0 FLAGSHIP DAILY COMMAND HERO (1-CLICK ZERO-FRICTION START)
         ======================================================= */}
      <section className="command-hero-card" aria-label="오늘의 15분 자동 완전학습 커맨드 센터">
        <div className="command-hero-left">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span className="pill-tag pill-brand">{activeStageMeta.badge} · {learnerLevelMeta.shortLabel}</span>
            <span className="pill-tag pill-amber">Lv.{xpLevel} · {state.xpPoints ?? 0} XP</span>
            <span className="pill-tag pill-subtle">🔥 연속 {state.streakDays}일 · 자동수업 {guidedDoneCount}회</span>
          </div>

          <h1 className="command-hero-title">
            {state.settings.learnerName} 님, 오늘은 고민 없이
            <br />
            15분 자동 완전학습으로 바로 시작하세요
          </h1>

          <p className="command-hero-sub">
            현재 단계(<strong>{activeStageMeta.shortLabel}</strong>)에 맞춰{' '}
            <strong>① 워밍업 발음 → ② 핵심 공식 → ③ 직접 영작 출력 → ④ 3문항 점검</strong>까지
            버튼 한 번으로 끊김 없이 완주합니다.
          </p>

          <div className="command-hero-actions">
            <button
              id="home-start-guided-session-btn"
              type="button"
              className="btn-solid-brand command-primary-cta"
              onClick={onStartGuidedSession}
            >
              <Play size={18} />
              <span>오늘의 15분 자동 수업 시작하기 (+120 XP)</span>
            </button>

            <button
              id="home-open-report-btn"
              type="button"
              className="btn-outline"
              onClick={() => onNavigate('report')}
            >
              성적표 · 12배지 · 기기 동기화 →
            </button>
          </div>
        </div>

        <div className="command-hero-right">
          <div className="command-goal-row">
            <div>
              <strong style={{ fontSize: '0.88rem', color: 'var(--text-strong)' }}>
                오늘의 집중 학습 목표
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)', marginLeft: '8px' }}>
                {todayStudyMin}분 / {targetDailyMin}분 ({dailyGoalPct}%)
              </span>
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: 750, color: 'var(--brand)' }}>
              {dailyGoalPct >= 100 ? '목표 달성 ✓' : `${Math.max(0, targetDailyMin - todayStudyMin)}분 남음`}
            </span>
          </div>
          <div className="daily-goal-track" style={{ marginTop: '6px', marginBottom: '12px' }}>
            <div className="daily-goal-fill" style={{ width: `${Math.max(4, dailyGoalPct)}%` }} />
          </div>

          <div className="command-quests-list" aria-label="오늘의 데일리 퀘스트">
            {computeDailyQuests(state).map((q) => (
              <button
                key={q.id}
                type="button"
                className={`command-quest-row ${q.done ? 'done' : ''}`}
                onClick={() =>
                  onNavigate(q.targetRoute, {
                    lectureTab: q.lectureTab,
                    worksheetTab: q.targetRoute === 'worksheet' ? 'mock-exam' : undefined
                  })
                }
              >
                {q.done ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                <span style={{ flex: 1, textAlign: 'left' }}>{q.titleKo}</span>
                <strong style={{ fontSize: '0.75rem', color: q.done ? 'var(--ok)' : 'var(--brand)' }}>
                  {q.done ? '완료 ✓' : `+${q.rewardXp} XP`}
                </strong>
              </button>
            ))}
          </div>

          <div className="command-mini-kpis">
            <div>
              <span>어휘력 ELO</span>
              <strong style={{ color: 'var(--brand)', fontFamily: 'var(--font-mono)' }}>
                {(state.vocabEloRating ?? 1000).toLocaleString()}
              </strong>
            </div>
            <div>
              <span>문법·내신·킬러</span>
              <strong>{state.grammarMasteredIds.length}/20 · {writingSolvedCount + (state.csatKillerSolvedIds?.length ?? 0)}/80</strong>
            </div>
            <div>
              <span>스피킹·반사패턴</span>
              <strong>{state.completedRoleplayIds.length + speakingCount} · {state.patternReflexMasteredIds?.length ?? 0}/20</strong>
            </div>
            <div>
              <span>누적 어휘</span>
              <strong>{totalVocabLearned}/{COURSE_METADATA.totalVocabCount + 240}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LIVE ENGLISH-KOREAN DICTIONARY + CURRICULUM OMNISEARCH BAR */}
      <form
        className="home-quick-dict-bar"
        onSubmit={(e) => {
          e.preventDefault();
          onOpenDictionary(quickDictInput.trim());
          setQuickDictInput('');
        }}
      >
        <div className="home-quick-dict-left">
          <Search size={18} style={{ color: 'var(--brand)', flexShrink: 0 }} />
          <input
            id="home-quick-dict-input"
            type="text"
            className="home-quick-dict-input"
            value={quickDictInput}
            onChange={(e) => setQuickDictInput(e.target.value)}
            placeholder="영어 단어·한국어 뜻 실시간 검색 (예: phonics, resilience, 협상) — Ctrl+K로 전체 커리큘럼 통합검색"
          />
        </div>
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0, flexWrap: 'wrap' }}>
          <button
            id="home-open-omnisearch-btn"
            type="button"
            className="btn-outline"
            style={{ padding: '10px 14px', fontSize: '0.86rem' }}
            onClick={onOpenOmnisearch}
          >
            전체 커리큘럼 ⌘K
          </button>
          <button id="home-quick-dict-submit" type="submit" className="btn-solid-brand" style={{ padding: '10px 18px', fontSize: '0.9rem' }}>
            영한사전 검색
          </button>
        </div>
      </form>

      {/* =======================================================
          ZERO-TO-MASTERY 5-STAGE LADDER + v7.0 POWER LAB SHORTCUTS
         ======================================================= */}
      <section className="zero-to-mastery-section" aria-labelledby="z2m-heading">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
          <div>
            <span className="pill-tag pill-coral">Zero-to-Mastery 5단계 완전정복 로드맵</span>
            <h2 id="z2m-heading" style={{ fontSize: 'clamp(1.38rem, 2.3vw, 1.78rem)', marginTop: '6px' }}>
              유치원 파닉스부터 중·고등 내신 서술형·수능 1등급·글로벌 C2까지
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              id="home-quick-elo-gym-btn"
              type="button"
              className="btn-solid-coral"
              style={{ padding: '8px 13px', fontSize: '0.84rem' }}
              onClick={() => onNavigate('lecture', { lectureTab: 'roleplay', roleplaySub: 'pattern-gym', gymMode: 'cloze-elo' })}
            >
              <Zap size={15} /> ELO 빈칸·2초 반사훈련
            </button>
            <button
              id="home-quick-csat-killer-btn"
              type="button"
              className="btn-outline"
              style={{ padding: '8px 13px', fontSize: '0.84rem' }}
              onClick={() => onNavigate('academy', { academyTab: 'csat-reading', csatSub: 'killer' })}
            >
              <Sparkles size={15} /> 수능 킬러 순서·삽입 20
            </button>
            <button
              id="home-quick-writing-clinic-btn"
              type="button"
              className="btn-outline"
              style={{ padding: '8px 13px', fontSize: '0.84rem' }}
              onClick={() => onNavigate('academy', { academyTab: 'writing-clinic' })}
            >
              <FileEdit size={15} /> 내신 서술형·오류 60
            </button>
            <button
              id="home-quick-speaking-1min-btn"
              type="button"
              className="btn-outline"
              style={{ padding: '8px 13px', fontSize: '0.84rem' }}
              onClick={() => onNavigate('lecture', { lectureTab: 'roleplay', roleplaySub: 'speaking' })}
            >
              <Mic size={15} /> 1분 스피킹 16주제
            </button>
            <button
              id="home-quick-irregular-btn"
              type="button"
              className="btn-outline"
              style={{ padding: '8px 13px', fontSize: '0.84rem' }}
              onClick={() => onNavigate('vocab-review', { vocabTab: 'vault', vaultView: 'irregular-confusable' })}
            >
              <Layers size={15} /> 불규칙80·혼동50
            </button>
            <button
              id="home-quick-storybook-btn"
              type="button"
              className="btn-outline"
              style={{ padding: '8px 13px', fontSize: '0.84rem' }}
              onClick={() => onNavigate('lecture', { lectureTab: 'storybook' })}
            >
              <BookOpen size={15} /> 원서 12권
            </button>
            <button
              id="home-quick-mock-btn"
              type="button"
              className="btn-outline"
              style={{ padding: '8px 13px', fontSize: '0.84rem' }}
              onClick={() => onNavigate('worksheet', { worksheetTab: 'mock-exam' })}
            >
              <Headphones size={15} /> 실전 모의고사
            </button>
          </div>
        </div>

        {/* 5 STAGE CARDS */}
        <div className="stage-ladder-grid">
          {MASTERY_STAGE_ORDER.map((stKey) => {
            const st = MASTERY_STAGE_MAP[stKey];
            const pct = stageProgressMap[stKey];
            const isCurrent = stKey === activeStage;
            return (
              <div
                key={stKey}
                id={`stage-ladder-card-${stKey}`}
                className={`stage-ladder-card ${isCurrent ? 'current' : ''}`}
              >
                <div className="section-label-between" style={{ gap: '6px' }}>
                  <span className={`pill-tag pill-${st.pillTone}`} style={{ fontSize: '0.73rem' }}>
                    Stage {st.stageNum}
                  </span>
                  <span style={{ fontSize: '0.76rem', fontWeight: 750, color: 'var(--text-muted)' }}>
                    {st.cefrRange}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.02rem', marginTop: '8px' }}>
                  {st.shortLabel.replace(`Stage ${st.stageNum} `, '')}
                </h2>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-sub)', marginTop: '4px', lineHeight: 1.48 }}>
                  {st.titleKo}
                </p>

                <div style={{ marginTop: '12px' }}>
                  <div className="section-label-between" style={{ fontSize: '0.76rem', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--text-sub)' }}>달성률</span>
                    <strong style={{ color: 'var(--brand)' }}>{pct}%</strong>
                  </div>
                  <div className="skill-bar-track" style={{ height: '6px' }}>
                    <div className="skill-bar-fill" style={{ width: `${Math.max(4, pct)}%` }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
                  <button
                    type="button"
                    className={isCurrent ? 'btn-solid-brand' : 'btn-outline'}
                    style={{ flex: 1, padding: '7px 10px', fontSize: '0.8rem' }}
                    onClick={() => {
                      onSelectStage(stKey);
                      if (stKey === 'stage2' || stKey === 'stage4') {
                        onSelectDay(st.recommendedStartDay);
                      }
                      onNavigate(st.recommendedRoute);
                    }}
                  >
                    {isCurrent ? '이어서 학습 →' : '이 단계 열기'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* TODAY'S 1-2-3 GUIDED ROUTINE FOR ACTIVE STAGE */}
        <div className="surface-card guided-routine-card" style={{ marginTop: '16px' }}>
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            <div>
              <span className="pill-tag pill-brand">오늘의 1–2–3 추천 루틴 · {activeStageMeta.badge}</span>
              <h2 style={{ fontSize: '1.16rem', marginTop: '6px' }}>
                고민 없이 아래 3단계를 순서대로 따라오면 실력이 쏙쏙 쌓입니다
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {MASTERY_STAGE_ORDER.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`day-switch-chip ${s === activeStage ? 'active' : ''}`}
                  onClick={() => onSelectStage(s)}
                >
                  S{MASTERY_STAGE_MAP[s].stageNum}
                </button>
              ))}
            </div>
          </div>

          <div className="guided-steps-grid">
            {STAGE_DAILY_STEPS[activeStage].map((step) => (
              <button
                key={step.stepNum}
                type="button"
                className="guided-step-tile"
                onClick={() => onNavigate(step.route, { lectureTab: step.lectureTab })}
              >
                <span className="guided-step-badge">{step.stepNum}</span>
                <strong style={{ fontSize: '0.96rem', marginTop: '6px', display: 'block' }}>
                  {step.title}
                </strong>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-sub)', marginTop: '4px', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
                <span className="guided-step-cta">
                  바로 시작 <ArrowRight size={13} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* HERO CARD FOR SELECTED 30-DAY LESSON */}
      <section className="today-hero-card" aria-label="오늘의 핵심 30일 레슨" style={{ marginTop: '28px' }}>
        <div className="today-hero-content">
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span className="pill-tag pill-coral">{currentModule.dayBadge}</span>
              <span className="pill-tag pill-brand">{dayLevelMeta.shortLabel}</span>
              <span className="pill-tag pill-subtle">{currentModule.categoryLabel}</span>
            </div>

            <h2 className="today-hero-title">{currentModule.title}</h2>
            <p style={{ marginTop: '10px', color: 'var(--text-body)', fontSize: '1.01rem' }}>
              {currentModule.subtitle}
            </p>
          </div>

          <div className="today-key-sentence-box">
            <div className="section-label-between" style={{ marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--brand)' }}>
                내 레벨({learnerLevelMeta.shortLabel}) 맞춤 대표 문장 · 단어 클릭 시 영한사전 열림
              </span>
              <button
                id="hero-listen-key-sentence-btn"
                type="button"
                className="inline-audio-btn"
                onClick={() => speakEnglish(targetKeySentence, learnerLevelMeta.defaultSpeechRate)}
              >
                <Volume2 size={15} />
                <span>발음 듣기 ({learnerLevelMeta.defaultSpeechRate}x)</span>
              </button>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-en)',
                fontSize: '1.15rem',
                fontWeight: 750,
                color: 'var(--text-strong)'
              }}
            >
              “
              <InteractiveText text={targetKeySentence} onLookupWord={onOpenDictionary} />
              ”
            </p>
          </div>

          {/* 5-PART DEEP STUDY CHECKLIST */}
          <div className="hero-checklist-row">
            <span className={`check-pill ${dayRec.videoWatched ? 'done' : ''}`}>
              {dayRec.videoWatched ? <CheckCircle2 size={15} /> : <Video size={15} />}
              유튜브 실전 인강
            </span>
            <span className={`check-pill ${dayRec.readingCompleted ? 'done' : ''}`}>
              {dayRec.readingCompleted ? <CheckCircle2 size={15} /> : <BookOpen size={15} />}
              영자 독해 · 3문항
            </span>
            <span className={`check-pill ${dayVocabMastered >= 10 ? 'done' : ''}`}>
              {dayVocabMastered >= 10 ? <CheckCircle2 size={15} /> : <Circle size={15} />}
              단어 ({dayVocabMastered}/{currentModule.vocabList.length})
            </span>
            <span className={`check-pill ${dayRec.sprintCompleted ? 'done' : ''}`}>
              {dayRec.sprintCompleted ? <CheckCircle2 size={15} /> : <Circle size={15} />}
              10문항 스프린트
            </span>
            <span className={`check-pill ${dayRec.examScore !== null ? 'done' : ''}`}>
              {dayRec.examScore !== null ? <CheckCircle2 size={15} /> : <Circle size={15} />}
              시험지 {dayRec.examScore !== null ? `(${dayRec.examScore}점)` : `(${currentModule.worksheetExam.length}문항)`}
            </span>
          </div>

          <div className="hero-cta-group">
            <button
              id="launch-lecture-primary-btn"
              type="button"
              className="btn-solid-brand"
              onClick={() => onNavigate('lecture', { lectureTab: 'youtube' })}
            >
              <PlayCircle size={18} />
              <span>유튜브 · 시트콤 · 독해 · 롤플레이 6교시 ({currentModule.estimatedLectureMin}분)</span>
            </button>

            <button
              id="launch-sprint-primary-btn"
              type="button"
              className="btn-solid-coral"
              onClick={onStartSprint}
            >
              <Zap size={18} />
              <span>{currentModule.estimatedSprintMin}분 집중 스프린트</span>
            </button>

            <button
              id="quick-open-exam-btn"
              type="button"
              className="btn-outline"
              onClick={() => onNavigate('worksheet')}
            >
              <BookOpenCheck size={17} />
              <span>A4 학습지 · 시험지 ({currentModule.worksheetExam.length}문항)</span>
            </button>

            <button
              id="quick-open-vocab-btn"
              type="button"
              className="btn-outline"
              onClick={() => onNavigate('vocab-review')}
            >
              <Layers size={17} />
              <span>단어 15개 &amp; SM-2 복습</span>
            </button>
          </div>
        </div>

        <div className="today-hero-visual">
          <img src={currentModule.heroImage} alt={currentModule.title} />
          <div className="hero-visual-caption">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
              <span className="pill-tag pill-amber">핵심 패턴 · {currentModule.keyExpression}</span>
            </div>
            <p style={{ marginTop: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.92)' }}>
              🎬 추천 유튜브 강의: {currentModule.youtubeVideo.title} ({currentModule.youtubeVideo.channel})
            </p>
          </div>
        </div>
      </section>

      {/* 30-DAY MONTHLY ROADMAP (WEEK 1-5 + LEVEL 1-6 FILTER) */}
      <section aria-labelledby="monthly-roadmap-heading">
        <div className="section-label-between" style={{ marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 id="monthly-roadmap-heading" style={{ fontSize: '1.42rem' }}>
              {activeWeekInfo
                ? activeWeekInfo.titleKo
                : '30일 실전 회화·비즈니스·시사 마스터 트랙 · Day 01 ~ Day 30'}
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', marginTop: '4px' }}>
              {activeWeekInfo
                ? activeWeekInfo.subtitleKo
                : '일상·여행 회화(A1–B1)부터 글로벌 오피스·협상·BBC/TED 시사(B2–C2)까지 30일, 450단어, 52편 검증 유튜브, 950 시험 문항이 수록되어 있습니다.'}
            </p>
          </div>

          <button
            id="jump-recommended-level-day-btn"
            type="button"
            className="btn-outline"
            style={{ fontSize: '0.86rem', padding: '8px 14px' }}
            onClick={() => {
              const targetDay = learnerLevelMeta.recommendedStartDay;
              onSelectDay(targetDay);
              const meta = COURSE_CATALOG.find((d) => d.dayNumber === targetDay);
              if (meta) setSelectedWeekTab(meta.weekNumber);
              setLevelFilter('all');
            }}
          >
            내 레벨({learnerLevelMeta.shortLabel}) 추천 시작점(Day {String(learnerLevelMeta.recommendedStartDay).padStart(2, '0')}) 이동
          </button>
        </div>

        {/* WEEK 1..5 SELECTOR BAR */}
        <div className="roadmap-filter-box">
          <div className="week-tabs-strip" role="tablist" aria-label="주차별 커리큘럼 탭">
            {WEEK_THEMES.map((w) => (
              <button
                key={w.weekNumber}
                id={`roadmap-week-tab-${w.weekNumber}`}
                type="button"
                role="tab"
                aria-selected={selectedWeekTab === w.weekNumber}
                className={`week-tab-pill ${selectedWeekTab === w.weekNumber ? 'active' : ''}`}
                onClick={() => {
                  setSelectedWeekTab(w.weekNumber);
                  setLevelFilter('all');
                }}
              >
                <span>Week {w.weekNumber}</span>
                <small>
                  {w.shortLabel} · {w.cefrRange.split(' ')[0]}
                </small>
              </button>
            ))}
            <button
              id="roadmap-week-tab-all"
              type="button"
              role="tab"
              aria-selected={selectedWeekTab === 'all'}
              className={`week-tab-pill ${selectedWeekTab === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedWeekTab('all')}
            >
              <span>전체 30일</span>
              <small>Day 01–30</small>
            </button>
          </div>

          {/* CEFR LEVEL 1..6 FILTER */}
          <div className="level-filter-strip" aria-label="레벨별 필터">
            <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--text-sub)' }}>
              레벨 필터:
            </span>
            <button
              type="button"
              className={`day-switch-chip ${levelFilter === 'all' ? 'active' : ''}`}
              onClick={() => setLevelFilter('all')}
            >
              전체 레벨
            </button>
            {LEVEL_ORDER.map((lv) => (
              <button
                key={lv}
                id={`roadmap-level-filter-${lv}`}
                type="button"
                className={`day-switch-chip ${levelFilter === lv ? 'active' : ''}`}
                onClick={() => {
                  setLevelFilter(lv);
                  setSelectedWeekTab('all');
                }}
              >
                {LEVEL_INFO_MAP[lv].shortLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="day-roadmap-grid">
          {visibleDays.map((meta) => {
            const rec = state.dayRecords[meta.dayNumber];
            const isSelected = meta.dayNumber === currentModule.dayNumber;
            const lvInfo = LEVEL_INFO_MAP[meta.cefrLevel];

            return (
              <button
                key={meta.dayNumber}
                id={`select-day-card-${meta.dayNumber}`}
                type="button"
                className={`day-card ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  onSelectDay(meta.dayNumber);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div style={{ position: 'relative', width: '100%' }}>
                  <img
                    src={meta.heroImage}
                    alt={meta.title}
                    className="day-card-thumb"
                    loading="lazy"
                  />
                  <span className="card-corner-level">{lvInfo.shortLabel}</span>
                  {rec?.examScore !== null && rec?.examScore !== undefined && (
                    <span className="card-corner-score">
                      <Award size={13} /> 시험 {rec.examScore}점
                    </span>
                  )}
                </div>

                <div className="day-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <span className={`pill-tag ${meta.isWeeklyReview ? 'pill-amber' : 'pill-brand'}`}>
                      Day {String(meta.dayNumber).padStart(2, '0')}
                      {meta.isWeeklyReview ? (meta.dayNumber === 30 ? ' · 파이널 졸업고사' : ' · 주간 종합평가') : ''}
                    </span>
                    {isSelected && (
                      <span style={{ fontSize: '0.78rem', fontWeight: 750, color: 'var(--brand)' }}>
                        현재 학습 중
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{meta.title}</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>
                    {meta.subtitle}
                  </p>

                  <div className="day-card-meta-footer">
                    <span>🎬 유튜브</span>
                    <span>·</span>
                    <span>독해</span>
                    <span>·</span>
                    <span>단어 {meta.vocabCount}</span>
                    <span>·</span>
                    <span>시험 {meta.examCount}문항</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
