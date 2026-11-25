import { useState } from 'react';
import {
  Award,
  BookOpen,
  BookOpenCheck,
  CheckCircle2,
  Circle,
  Layers,
  PlayCircle,
  Search,
  Volume2,
  Video,
  Zap
} from 'lucide-react';
import {
  COURSE_CATALOG,
  COURSE_METADATA,
  WEEK_THEMES
} from '../data/courseCatalog.ts';
import { LEVEL_INFO_MAP, LEVEL_ORDER } from '../data/levels.ts';
import type {
  AppPersistState,
  DayLessonModule,
  LevelTier,
  MainRoute
} from '../types/course.ts';
import { speakEnglish } from '../utils/speech.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface HomeDashboardProps {
  state: AppPersistState;
  currentModule: DayLessonModule;
  onSelectDay: (dayNumber: number) => void;
  onStartSprint: () => void;
  onNavigate: (route: MainRoute) => void;
  onOpenDictionary: (word?: string) => void;
}

const PACE_RECOMMENDATION: Record<AppPersistState['settings']['studyPace'], string> = {
  light: '가볍게 10분 코스: [7분 집중 스프린트] + [핵심 단어 15개]로 매일 부담 없이 감각을 유지하세요.',
  standard: '표준 25분 코스: [유튜브 인강] + [시트콤·독해] 시청 후 [7분 스프린트]로 어순을 체화하세요.',
  intensive: '집중 50분 코스: [유튜브·시트콤·독해·1:1과외] → [스프린트] → [15~20문항 A4 시험지] 풀코스를 완주하세요.'
};

export function HomeDashboard({
  state,
  currentModule,
  onSelectDay,
  onStartSprint,
  onNavigate,
  onOpenDictionary
}: HomeDashboardProps) {
  const [selectedWeekTab, setSelectedWeekTab] = useState<'all' | 1 | 2 | 3 | 4 | 5>(
    currentModule.weekNumber
  );
  const [levelFilter, setLevelFilter] = useState<'all' | LevelTier>('all');
  const [quickDictInput, setQuickDictInput] = useState('');

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

  const examScores = Object.values(state.dayRecords)
    .map((r) => r.examScore)
    .filter((s): s is number => s !== null);
  const avgExamScore =
    examScores.length > 0
      ? Math.round(examScores.reduce((acc, v) => acc + v, 0) / examScores.length)
      : null;

  const completedDaysCount = Object.values(state.dayRecords).filter(
    (r) => r.sprintCompleted || r.lectureCompleted || r.examScore !== null
  ).length;
  const monthlyProgressPct = Math.round((completedDaysCount / COURSE_METADATA.totalDays) * 100);
  const unmasteredReviewCount = state.reviewDeck.filter((c) => !c.mastered).length;

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

  return (
    <main className="page-wrap">
      {/* TOP INTRO + STATS + DAILY GOAL BAR */}
      <div className="track-intro-row">
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span className="pill-tag pill-brand">{COURSE_METADATA.trackTitle}</span>
            <span className="pill-tag pill-amber">유튜브 A–B 반복 · 쉐도잉 · 딕테이션 · 영한사전</span>
          </div>
          <p style={{ marginTop: '8px', color: 'var(--text-sub)', fontSize: '0.94rem' }}>
            <strong>{state.settings.learnerName}</strong> 님 ({learnerLevelMeta.shortLabel}) ·{' '}
            {PACE_RECOMMENDATION[state.settings.studyPace]}
          </p>
        </div>

        <div className="summary-stat-strip">
          <div className="mini-stat-chip">
            <span className="mini-stat-label">30일 완주율</span>
            <strong>
              {completedDaysCount} / 30일 ({monthlyProgressPct}%)
            </strong>
          </div>
          <div className="mini-stat-chip">
            <span className="mini-stat-label">암기 단어</span>
            <strong>
              {state.masteredVocabIds.length} / {COURSE_METADATA.totalVocabCount}
            </strong>
          </div>
          <div className="mini-stat-chip">
            <span className="mini-stat-label">평균 단원평가</span>
            <strong>{avgExamScore !== null ? `${avgExamScore}점` : '응시 전'}</strong>
          </div>
          <div className="mini-stat-chip">
            <span className="mini-stat-label">사전 저장 · 복습</span>
            <strong>
              {state.savedDictionaryWords.length} · {unmasteredReviewCount}
            </strong>
          </div>
        </div>
      </div>

      {/* DAILY ACTIVE STUDY GOAL BAR */}
      <div className="daily-goal-strip">
        <div className="daily-goal-text">
          <strong>오늘의 집중 학습 목표</strong>
          <span>
            {todayStudyMin}분 / {targetDailyMin}분 ({dailyGoalPct}%)
          </span>
        </div>
        <div className="daily-goal-track">
          <div className="daily-goal-fill" style={{ width: `${Math.max(4, dailyGoalPct)}%` }} />
        </div>
        <button
          id="home-open-report-btn"
          type="button"
          className="text-action-btn"
          style={{ whiteSpace: 'nowrap' }}
          onClick={() => onNavigate('report')}
        >
          성장 리포트 &amp; 취약점 클리닉 →
        </button>
      </div>

      {/* QUICK LIVE ENGLISH-KOREAN DICTIONARY BAR */}
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
            placeholder="궁금한 영어 단어나 한국어 뜻을 바로 검색하세요 (예: detour, bottleneck, 협상, 마감) — 무료 실시간 API 연동"
          />
        </div>
        <button id="home-quick-dict-submit" type="submit" className="btn-solid-brand" style={{ padding: '10px 18px', fontSize: '0.9rem' }}>
          영한사전 검색
        </button>
      </form>

      {/* HERO CARD FOR SELECTED DAY */}
      <section className="today-hero-card" aria-label="오늘의 핵심 레슨">
        <div className="today-hero-content">
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span className="pill-tag pill-coral">{currentModule.dayBadge}</span>
              <span className="pill-tag pill-brand">{dayLevelMeta.shortLabel}</span>
              <span className="pill-tag pill-subtle">{currentModule.categoryLabel}</span>
            </div>

            <h1 className="today-hero-title">{currentModule.title}</h1>
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
              onClick={() => onNavigate('lecture')}
            >
              <PlayCircle size={18} />
              <span>유튜브 · 시트콤 · 독해 5교시 ({currentModule.estimatedLectureMin}분)</span>
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
              <span>단어 15개 &amp; 오답노트</span>
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
                : '1개월(30일) 전체 커리큘럼 로드맵 · Day 01 ~ Day 30'}
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', marginTop: '4px' }}>
              {activeWeekInfo
                ? activeWeekInfo.subtitleKo
                : '입문(Lv.1 A1)부터 마스터(Lv.6 C2)까지 총 30일, 450단어, 30편 영자독해, 40편 유튜브 강의, 950 시험·쌍둥이 문항이 수록되어 있습니다.'}
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
