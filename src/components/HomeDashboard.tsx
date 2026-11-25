import {
  Award,
  BookOpenCheck,
  CheckCircle2,
  Circle,
  Layers,
  PlayCircle,
  Volume2,
  Zap
} from 'lucide-react';
import { COURSE_METADATA, WEEK1_MODULES } from '../data/week1MasterCourse.ts';
import type {
  AppPersistState,
  DayLessonModule,
  MainRoute
} from '../types/course.ts';
import { speakEnglish } from '../utils/speech.ts';

interface HomeDashboardProps {
  state: AppPersistState;
  currentModule: DayLessonModule;
  onSelectDay: (dayNumber: number) => void;
  onStartSprint: () => void;
  onNavigate: (route: MainRoute) => void;
}

const PACE_RECOMMENDATION: Record<AppPersistState['settings']['studyPace'], string> = {
  light: '가볍게 7분 코스 추천: [7분 집중 스프린트]로 오늘의 핵심 문장 10개만 빠르게 입에 붙여보세요.',
  standard: '표준 20분 코스 추천: [시네마틱 인강] 시청 후 [7분 집중 스프린트]로 어순을 체화하세요.',
  intensive: '집중 45분 코스 추천: [인강 & 1:1 과외] → [7분 스프린트] → [15문항 단원평가 시험지] 순서로 완주하세요.'
};

export function HomeDashboard({
  state,
  currentModule,
  onSelectDay,
  onStartSprint,
  onNavigate
}: HomeDashboardProps) {
  const dayRec = state.dayRecords[currentModule.dayNumber] ?? {
    sprintCompleted: false,
    lectureCompleted: false,
    examScore: null,
    vocabMasteredCount: 0
  };

  const dayVocabMastered = currentModule.vocabList.filter((v) =>
    state.masteredVocabIds.includes(v.id)
  ).length;

  const targetKeySentence = currentModule.keySentenceByTier[state.settings.levelTier];

  const examScores = Object.values(state.dayRecords)
    .map((r) => r.examScore)
    .filter((s): s is number => s !== null);
  const avgExamScore =
    examScores.length > 0
      ? Math.round(examScores.reduce((acc, v) => acc + v, 0) / examScores.length)
      : null;

  const unmasteredReviewCount = state.reviewDeck.filter((c) => !c.mastered).length;

  return (
    <main className="page-wrap">
      <div className="track-intro-row">
        <div>
          <span className="pill-tag pill-brand">{COURSE_METADATA.trackTitle}</span>
          <p style={{ marginTop: '8px', color: 'var(--text-sub)', fontSize: '0.94rem' }}>
            { state.settings.learnerName } 님 · {PACE_RECOMMENDATION[state.settings.studyPace]}
          </p>
        </div>
        <div className="summary-stat-strip">
          <div className="mini-stat-chip">
            <span className="mini-stat-label">암기 단어</span>
            <strong>{state.masteredVocabIds.length} / {COURSE_METADATA.totalVocabCount}</strong>
          </div>
          <div className="mini-stat-chip">
            <span className="mini-stat-label">누적 발화</span>
            <strong>{state.totalSentencesSpoken}문장</strong>
          </div>
          <div className="mini-stat-chip">
            <span className="mini-stat-label">평균 단원평가</span>
            <strong>{avgExamScore !== null ? `${avgExamScore}점` : '응시 전'}</strong>
          </div>
          <div className="mini-stat-chip">
            <span className="mini-stat-label">복습 대기</span>
            <strong>{unmasteredReviewCount}개</strong>
          </div>
        </div>
      </div>

      {/* HERO CARD FOR SELECTED DAY */}
      <section className="today-hero-card" aria-label="오늘의 핵심 레슨">
        <div className="today-hero-content">
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span className="pill-tag pill-coral">{currentModule.dayBadge}</span>
              <span className="pill-tag pill-subtle">{currentModule.categoryLabel}</span>
            </div>

            <h1 className="today-hero-title">{currentModule.title}</h1>
            <p style={{ marginTop: '10px', color: 'var(--text-body)', fontSize: '1.02rem' }}>
              {currentModule.subtitle}
            </p>
          </div>

          <div className="today-key-sentence-box">
            <div className="section-label-between" style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--brand)' }}>
                내 레벨({state.settings.levelTier.toUpperCase()}) 맞춤 대표 문장
              </span>
              <button
                id="hero-listen-key-sentence-btn"
                type="button"
                className="inline-audio-btn"
                onClick={() => speakEnglish(targetKeySentence, 0.96)}
              >
                <Volume2 size={15} />
                <span>원어민 발음 듣기</span>
              </button>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-en)',
                fontSize: '1.16rem',
                fontWeight: 750,
                color: 'var(--text-strong)'
              }}
            >
              “{targetKeySentence}”
            </p>
          </div>

          <div className="hero-checklist-row">
            <span className={`check-pill ${dayVocabMastered >= 10 ? 'done' : ''}`}>
              {dayVocabMastered >= 10 ? <CheckCircle2 size={15} /> : <Circle size={15} />}
              필수 단어 ({dayVocabMastered}/{currentModule.vocabList.length})
            </span>
            <span className={`check-pill ${dayRec.lectureCompleted ? 'done' : ''}`}>
              {dayRec.lectureCompleted ? <CheckCircle2 size={15} /> : <Circle size={15} />}
              시트콤 인강 · 과외
            </span>
            <span className={`check-pill ${dayRec.sprintCompleted ? 'done' : ''}`}>
              {dayRec.sprintCompleted ? <CheckCircle2 size={15} /> : <Circle size={15} />}
              10문항 스피킹 스프린트
            </span>
            <span className={`check-pill ${dayRec.examScore !== null ? 'done' : ''}`}>
              {dayRec.examScore !== null ? <CheckCircle2 size={15} /> : <Circle size={15} />}
              단원평가 시험지 {dayRec.examScore !== null ? `(${dayRec.examScore}점)` : `(${currentModule.worksheetExam.length}문항)`}
            </span>
          </div>

          <div className="hero-cta-group">
            <button
              id="launch-sprint-primary-btn"
              type="button"
              className="btn-solid-coral"
              onClick={onStartSprint}
            >
              <Zap size={18} />
              <span>{currentModule.estimatedSprintMin}분 집중 스프린트 시작</span>
            </button>

            <button
              id="launch-lecture-primary-btn"
              type="button"
              className="btn-solid-brand"
              onClick={() => onNavigate('lecture')}
            >
              <PlayCircle size={18} />
              <span>시네마틱 인강 &amp; 1:1 과외 ({currentModule.estimatedLectureMin}분)</span>
            </button>

            <button
              id="quick-open-exam-btn"
              type="button"
              className="btn-outline"
              onClick={() => onNavigate('worksheet')}
            >
              <BookOpenCheck size={17} />
              <span>학습지 · 시험지 ({currentModule.worksheetExam.length}문항)</span>
            </button>

            <button
              id="quick-open-vocab-btn"
              type="button"
              className="btn-outline"
              onClick={() => onNavigate('vocab-review')}
            >
              <Layers size={17} />
              <span>필수 단어 15개 암기장</span>
            </button>
          </div>
        </div>

        <div className="today-hero-visual">
          <img
            src={currentModule.heroImage}
            alt={currentModule.title}
          />
          <div className="hero-visual-caption">
            <span className="pill-tag pill-amber">핵심 패턴 · {currentModule.keyExpression}</span>
            <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>
              실제 북미 오피스 · 일상 시트콤 장면과 6~7턴 풀 대화 스크립트로 문맥을 체화합니다.
            </p>
          </div>
        </div>
      </section>

      {/* WEEK 1 CURRICULUM ROADMAP */}
      <section aria-labelledby="week1-roadmap-heading">
        <div className="section-label-between" style={{ marginBottom: '18px' }}>
          <div>
            <h2 id="week1-roadmap-heading" style={{ fontSize: '1.38rem' }}>
              {COURSE_METADATA.weekTitle}
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', marginTop: '4px' }}>
              원하는 Day 카드를 선택하면 상단 학습 스튜디오와 인강·시험지·단어장이 즉시 해당 단원으로 전환됩니다.
            </p>
          </div>
        </div>

        <div className="day-roadmap-grid">
          {WEEK1_MODULES.map((mod) => {
            const rec = state.dayRecords[mod.dayNumber];
            const isSelected = mod.dayNumber === currentModule.dayNumber;
            const vocabDone = mod.vocabList.filter((v) =>
              state.masteredVocabIds.includes(v.id)
            ).length;

            return (
              <button
                key={mod.dayNumber}
                id={`select-day-card-${mod.dayNumber}`}
                type="button"
                className={`day-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectDay(mod.dayNumber)}
              >
                <div style={{ position: 'relative', width: '100%' }}>
                  <img
                    src={mod.heroImage}
                    alt={mod.title}
                    className="day-card-thumb"
                  />
                  {rec?.examScore !== null && rec?.examScore !== undefined && (
                    <span className="card-corner-score">
                      <Award size={13} /> 시험 {rec.examScore}점
                    </span>
                  )}
                </div>

                <div className="day-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <span className={`pill-tag ${mod.dayNumber === 6 ? 'pill-amber' : 'pill-brand'}`}>
                      {mod.dayBadge}
                    </span>
                    {isSelected && (
                      <span style={{ fontSize: '0.78rem', fontWeight: 750, color: 'var(--brand)' }}>
                        현재 선택됨
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.14rem', fontWeight: 800 }}>{mod.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>
                    {mod.subtitle}
                  </p>

                  <div className="day-card-meta-footer">
                    <span>단어 {vocabDone}/{mod.vocabList.length}</span>
                    <span>·</span>
                    <span>스프린트 {rec?.sprintCompleted ? '완료' : `${mod.sprintDrills.length}문항`}</span>
                    <span>·</span>
                    <span>시험지 {mod.worksheetExam.length}문항</span>
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
