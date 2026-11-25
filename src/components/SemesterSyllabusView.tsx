import React, { useMemo, useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  FileSpreadsheet,
  Film,
  GraduationCap,
  Newspaper,
  ShieldCheck,
  Volume2,
  Zap
} from 'lucide-react';
import type {
  CurriculumUnit,
  DailyLiveArticle,
  LearnerCalibration,
  SemesterDayNode
} from '../types/learning';
import { verifyUnitPedagogicalQuality } from '../utils/pedagogicalQA';
import { speakEnglish } from '../utils/speech';

interface SemesterSyllabusViewProps {
  days: SemesterDayNode[];
  dailyArticles: DailyLiveArticle[];
  units: CurriculumUnit[];
  calibration: LearnerCalibration;
  completedDays: number[];
  onToggleDayComplete: (dayNum: number) => void;
  onLaunchUnitMode: (unit: CurriculumUnit, mode: 'sprint' | 'deep-class' | 'workbook') => void;
  onGenerateDailyTopic: (topicKo: string) => Promise<void>;
}

export const SemesterSyllabusView: React.FC<SemesterSyllabusViewProps> = ({
  days,
  dailyArticles,
  units,
  calibration,
  completedDays,
  onToggleDayComplete,
  onLaunchUnitMode,
  onGenerateDailyTopic
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [selectedArticleIdx, setSelectedArticleIdx] = useState<number>(0);
  const [showQAModal, setShowQAModal] = useState<boolean>(false);
  const [newLiveTopic, setNewLiveTopic] = useState<string>('');
  const [isCreatingLive, setIsCreatingLive] = useState<boolean>(false);

  const weekDays = useMemo(
    () => days.filter((d) => d.week === selectedWeek),
    [days, selectedWeek]
  );

  const qaReports = useMemo(
    () => units.map((u) => verifyUnitPedagogicalQuality(u)),
    [units]
  );

  const passedUnitsCount = qaReports.filter((r) => r.verified).length;
  const averageQAScore = (
    qaReports.reduce((acc, r) => acc + r.overallScore, 0) /
    Math.max(1, qaReports.length)
  ).toFixed(1);

  const activeArticle = dailyArticles[selectedArticleIdx] ?? dailyArticles[0];
  const variantKey =
    calibration.difficultyOffset === -1
      ? 'easy'
      : calibration.difficultyOffset === 1
      ? 'challenge'
      : 'standard';
  const liveVariant = activeArticle.variants[variantKey];

  const isImmersion = calibration.koreanScaffold === 'immersion';
  const isGrammarStyle = calibration.pedagogyStyle === 'deductive-grammar';

  const handleCreateLiveSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLiveTopic.trim()) return;
    setIsCreatingLive(true);
    await onGenerateDailyTopic(newLiveTopic.trim());
    setSelectedArticleIdx(0);
    setNewLiveTopic('');
    setIsCreatingLive(false);
  };

  return (
    <div>
      <section className="hero-intro">
        <div>
          <h1>90일(1학기) 정규 학사 진도표 &amp; 데일리 라이브 부교재</h1>
          <p className="hero-desc">
            학교·어학원처럼 체계적인 <strong>12주(90일 전 일차 독립 수업·학습지·시험지)</strong>와 매일 새벽 내 난이도에 맞춰 리라이팅되는{' '}
            <strong>데일리 라이브 뉴스</strong>가 함께 돌아갑니다.
          </p>
        </div>

        <button
          id="open-qa-report-btn"
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => setShowQAModal((v) => !v)}
        >
          <ShieldCheck size={16} color="var(--status-success)" />
          <span>
            4-Gate 검수 완료: {passedUnitsCount}/{qaReports.length} 단원 ({averageQAScore}%)
          </span>
        </button>
      </section>

      {/* Optional 4-Gate Pedagogical QA Verification Drawer */}
      {showQAModal && (
        <section
          className="side-panel-card"
          style={{ marginBottom: '26px', borderColor: 'var(--accent-primary)' }}
          aria-label="커리큘럼 4단계 정확도 검수 현황"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div>
              <span className="tag tag-forest">Zero-Hallucination Pedagogical QA</span>
              <h2 style={{ fontSize: '1.12rem', marginTop: '4px' }}>
                전체 {qaReports.length}개 단원 전수 4-Gate 무결성 검증 리포트 (통과 {passedUnitsCount}건 · 평균 {averageQAScore}%)
              </h2>
            </div>
            <button
              id="close-qa-report-btn"
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setShowQAModal(false)}
            >
              닫기
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '12px' }}>
            {qaReports.slice(0, 6).map((rep) => (
              <div key={rep.unitId} className="paraphrase-doc-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.9rem' }}>{rep.unitTitle.slice(0, 28)}...</strong>
                  <span className="tag tag-forest">✓ {rep.overallScore}%</span>
                </div>
                {rep.gates.map((g, idx) => (
                  <div key={idx} style={{ fontSize: '0.79rem', color: 'var(--ink-secondary)' }}>
                    <strong>{g.passed ? '⭕' : '❗'} {g.gateName}:</strong> {g.detail}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Daily Live Multi-Level Rewritten Edition */}
      <section className="side-panel-card" style={{ marginBottom: '32px' }}>
        <div className="section-header" style={{ marginBottom: '12px' }}>
          <div>
            <span className="tag tag-warm">
              <Newspaper size={13} /> {activeArticle.publishedDate}
            </span>
            <h2 className="section-title" style={{ marginTop: '6px' }}>
              오늘의 데일리 라이브 부교재 — {liveVariant.kLevelLabel}
            </h2>
          </div>

          <div className="filter-pills">
            {dailyArticles.slice(0, 5).map((art, idx) => (
              <button
                key={art.id}
                id={`select-live-article-${idx}`}
                type="button"
                className={`filter-pill ${selectedArticleIdx === idx ? 'active' : ''}`}
                onClick={() => setSelectedArticleIdx(idx)}
              >
                토픽 #{idx + 1}: {art.topicTitleKo.slice(0, 14)}...
              </button>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleCreateLiveSubmit}
          style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}
        >
          <input
            id="new-daily-live-topic-input"
            type="text"
            className="text-input"
            style={{ flex: 1, minWidth: '230px' }}
            value={newLiveTopic}
            onChange={(e) => setNewLiveTopic(e.target.value)}
            placeholder="오늘 새로 읽고 싶은 시사·업무·일상 주제를 입력하면 3단계 레벨 지문으로 즉시 발행됩니다..."
          />
          <button
            id="create-daily-live-btn"
            type="submit"
            className="btn btn-secondary btn-sm"
            disabled={isCreatingLive || !newLiveTopic.trim()}
          >
            {isCreatingLive ? '발행 중...' : '+ 오늘의 멀티레벨 부교재 발행'}
          </button>
        </form>

        <div
          style={{
            padding: '20px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-canvas)',
            border: '1px solid var(--border-default)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <h3 style={{ fontFamily: 'var(--font-en-display)', fontSize: '1.18rem', fontWeight: 800 }}>
              {liveVariant.headlineEn}
            </h3>
            <button
              id="live-article-listen-btn"
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => speakEnglish(liveVariant.passageEn, 0.96)}
            >
              <Volume2 size={15} /> 원어민 브리핑 듣기
            </button>
          </div>

          <p
            style={{
              fontFamily: isGrammarStyle ? 'var(--font-mono)' : 'var(--font-serif-en)',
              fontSize: isGrammarStyle ? '0.93rem' : '1.08rem',
              lineHeight: 1.75,
              marginTop: '12px',
              color: 'var(--ink-primary)'
            }}
          >
            {isGrammarStyle ? liveVariant.structuralSlashEn : liveVariant.passageEn}
          </p>

          {!isImmersion ? (
            <p style={{ fontSize: '0.89rem', color: 'var(--ink-secondary)', marginTop: '10px' }}>
              <strong>한글 직독 해설:</strong> {liveVariant.translationKo}
            </p>
          ) : (
            <p style={{ fontSize: '0.89rem', color: 'var(--accent-primary)', marginTop: '10px' }}>
              <strong>English Immersion Note:</strong> {liveVariant.englishOnlyDefinition}
            </p>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '14px' }}>
            {liveVariant.keyCollocations.map((col, idx) => (
              <span key={idx} className="chunk-guide-item" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                <strong>{col.en}</strong> : {isImmersion ? col.enDef : col.ko}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day (12-Week) Full Semester Syllabus Explorer */}
      <section aria-labelledby="semester-90-heading">
        <div className="section-header">
          <div>
            <h2 id="semester-90-heading" className="section-title">
              <CalendarDays size={19} style={{ verticalAlign: 'text-bottom', marginRight: '6px' }} />
              초기 3개월(90일 · 12주) 정규 시드 커리큘럼 전수 진도표
            </h2>
            <p style={{ fontSize: '0.87rem', color: 'var(--ink-secondary)', marginTop: '2px' }}>
              어느 일차(Day 01 ~ Day 90)를 선택하든 해당 날짜의 고유 수업·구몬 학습지·단원평가 시험지가 열립니다.
            </p>
          </div>
          <span className="tag tag-forest">
            이수 완료: {completedDays.length} / 90 Days
          </span>
        </div>

        {/* 12 Weeks Selector */}
        <div className="filter-pills" style={{ marginBottom: '18px' }}>
          {Array.from({ length: 12 }, (_, idx) => idx + 1).map((wk) => (
            <button
              key={wk}
              id={`syllabus-week-btn-${wk}`}
              type="button"
              className={`filter-pill ${selectedWeek === wk ? 'active' : ''}`}
              onClick={() => setSelectedWeek(wk)}
            >
              {wk}주차
            </button>
          ))}
        </div>

        <div className="unit-list">
          {weekDays.map((node) => {
            const isDone = completedDays.includes(node.day);
            const dedicatedId = `day-unit-${String(node.day).padStart(2, '0')}`;
            const targetUnit =
              units.find((u) => u.id === dedicatedId) ??
              units.find((u) => u.id === node.linkedUnitId) ??
              units[0];

            return (
              <article key={node.day} className="unit-row-card">
                <div className="unit-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="mono-duration" style={{ fontWeight: 800, color: 'var(--accent-primary)' }}>
                      DAY {String(node.day).padStart(2, '0')}
                    </span>
                    <span className="tag tag-neutral">CEFR {node.cefr}</span>
                    {node.dayType === 'regular-lesson' && (
                      <span className="tag tag-forest">정규 진도</span>
                    )}
                    {node.dayType === 'weekly-exam' && (
                      <span className="tag tag-warm">주간 단원평가</span>
                    )}
                    {node.dayType === 'flow-sitcom' && (
                      <span className="tag tag-amber">
                        <Film size={12} /> Google Flow 시트콤
                      </span>
                    )}
                    {node.dayType === 'monthly-mock' && (
                      <span className="tag tag-warm">월말·종합 평가</span>
                    )}
                    <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>
                      ✓ QA {node.qaAccuracyScore}%
                    </span>
                  </div>

                  <h3 className="unit-title">{node.titleKo}</h3>
                  <p className="unit-Key-expr">“{node.coreSentenceEn}”</p>
                  {!isImmersion && (
                    <p style={{ fontSize: '0.84rem', color: 'var(--ink-secondary)', marginTop: '2px' }}>
                      {node.coreSentenceKo} · 핵심 문법: <strong>{node.grammarPoint}</strong>
                    </p>
                  )}
                </div>

                <div className="unit-actions">
                  <button
                    id={`day-toggle-done-${node.day}`}
                    type="button"
                    className={`btn btn-sm ${isDone ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => onToggleDayComplete(node.day)}
                  >
                    <CheckCircle2 size={14} />
                    <span>{isDone ? '출석 완료' : '출석 체크'}</span>
                  </button>

                  {node.dayType === 'weekly-exam' || node.dayType === 'monthly-mock' ? (
                    <button
                      id={`day-open-exam-${node.day}`}
                      type="button"
                      className="btn btn-warm btn-sm"
                      onClick={() => onLaunchUnitMode(targetUnit, 'workbook')}
                    >
                      <FileSpreadsheet size={14} /> 시험지·학습지 열기
                    </button>
                  ) : (
                    <>
                      <button
                        id={`day-open-sprint-${node.day}`}
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => onLaunchUnitMode(targetUnit, 'sprint')}
                      >
                        <Zap size={14} color="var(--accent-warm)" /> 스프린트
                      </button>
                      <button
                        id={`day-open-deep-${node.day}`}
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => onLaunchUnitMode(targetUnit, 'deep-class')}
                      >
                        <GraduationCap size={14} /> 인강·과외
                      </button>
                      <button
                        id={`day-open-sheet-${node.day}`}
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => onLaunchUnitMode(targetUnit, 'workbook')}
                      >
                        <FileSpreadsheet size={14} /> 학습지
                      </button>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
