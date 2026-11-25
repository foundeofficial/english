import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  GraduationCap,
  Printer,
  RotateCcw,
  SlidersHorizontal,
  Users,
  Zap
} from 'lucide-react';
import {
  ACADEMY_DIVISIONS,
  LEARNER_PERSONA_PRESETS
} from '../data/academyDivisions';
import type {
  AcademyDivisionId,
  CurriculumUnit,
  DiagnosticQuestion,
  FiveSkillRadar,
  LearnerCalibration,
  LearnerPersonaPreset,
  UserProgress
} from '../types/learning';

interface AcademicReportCardViewProps {
  progress: UserProgress;
  questions: DiagnosticQuestion[];
  units: CurriculumUnit[];
  onSwitchPersona: (preset: LearnerPersonaPreset) => void;
  onChangeDivision: (div: AcademyDivisionId) => void;
  onSaveDiagnosis: (radar: FiveSkillRadar, recommendedBaseKLevel: number) => void;
  onUpdateCalibration: (next: Partial<LearnerCalibration>) => void;
  onStartUnitMode: (unit: CurriculumUnit, mode: 'sprint' | 'deep-class') => void;
}

const SKILL_LABELS: Record<keyof FiveSkillRadar, string> = {
  vocabulary: '어휘 · 콜로케이션 (Vocabulary)',
  grammar: '문장구조 · 어법 (Grammar)',
  listening: '청해 · 연음 추론 (Listening)',
  speaking: '1초 발화 순발력 (Speaking)',
  writing: '서술형 작문 · 완곡어법 (Writing)'
};

function scoreToLetterGrade(kLv: number): string {
  if (kLv >= 10) return 'A+ (Master)';
  if (kLv >= 8) return 'A0 (Advanced)';
  if (kLv >= 6) return 'B+ (Upper-Int)';
  if (kLv >= 4) return 'B0 (Intermediate)';
  return 'C+ (Foundation)';
}

export const AcademicReportCardView: React.FC<AcademicReportCardViewProps> = ({
  progress,
  questions,
  units,
  onSwitchPersona,
  onChangeDivision,
  onSaveDiagnosis,
  onUpdateCalibration,
  onStartUnitMode
}) => {
  const [testingMode, setTestingMode] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [answers, setAnswers] = useState<
    Array<{ skill: keyof FiveSkillRadar; baseDiff: number; correct: boolean }>
  >([]);

  const currentQ = questions[stepIndex];

  const avgExamScore =
    progress.examHistory.length > 0
      ? Math.round(
          progress.examHistory.reduce((s, e) => s + e.scorePercent, 0) /
            progress.examHistory.length
        )
      : 88;

  const currentDivInfo =
    ACADEMY_DIVISIONS.find((d) => d.id === progress.division) ?? ACADEMY_DIVISIONS[0];
  const recommendedUnit =
    units.find((u) => u.id === currentDivInfo.recommendedUnitId) ?? units[0];

  const handleNextDiag = () => {
    if (selectedOpt === null || !currentQ) return;
    const isCorrect = currentQ.options[selectedOpt]?.isCorrect ?? false;
    const updated = [
      ...answers,
      {
        skill: currentQ.skill,
        baseDiff: currentQ.difficultyKLevel,
        correct: isCorrect
      }
    ];
    setAnswers(updated);
    setSelectedOpt(null);

    if (stepIndex + 1 < questions.length) {
      setStepIndex((i) => i + 1);
    } else {
      const nextRadar: FiveSkillRadar = { ...progress.skillRadar };
      for (const item of updated) {
        nextRadar[item.skill] = item.correct
          ? Math.min(11, item.baseDiff + 2)
          : Math.max(2, item.baseDiff - 2);
      }
      const avg = Math.round(
        (nextRadar.vocabulary +
          nextRadar.grammar +
          nextRadar.listening +
          nextRadar.speaking +
          nextRadar.writing) /
          5
      );
      onSaveDiagnosis(nextRadar, avg);
      setTestingMode(false);
      setStepIndex(0);
      setAnswers([]);
    }
  };

  return (
    <div>
      <section className="hero-intro no-print">
        <div>
          <h1>종합 학업성취도 성적표(생활통지표) &amp; 학생별 맞춤 반 배정</h1>
          <p className="hero-desc">
            사람마다 다른 수준과 학습능력을 반영하기 위해 <strong>학습자 프로필 전환, 4대 정규 학부 변경, 5대 역량 CAT 진단, 90일 출석 잔디 및 공식 성적표</strong>를 통합 관리합니다.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            id="start-cat-retest-btn"
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setTestingMode((v) => !v)}
          >
            <RotateCcw size={14} /> {testingMode ? '성적표로 돌아가기' : '5대 역량 CAT 정밀 진단 응시'}
          </button>
          <button
            id="print-report-card-btn"
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => window.print()}
          >
            <Printer size={14} /> 공식 성적표 인쇄 / PDF
          </button>
        </div>
      </section>

      {/* Multi-Learner Persona Switcher (Test how different learners experience the app!) */}
      <section className="side-panel-card no-print" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <Users size={16} color="var(--accent-primary)" />
          <strong style={{ fontSize: '0.95rem' }}>
            학습자 유형별 프리셋 전환 테스트 (클릭 즉시 해당 학습자의 수준·학부·이퀄라이저가 전체 적용됩니다)
          </strong>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
          {LEARNER_PERSONA_PRESETS.map((preset) => {
            const active = progress.activePersonaId === preset.id;
            return (
              <button
                key={preset.id}
                id={`persona-switch-${preset.id}`}
                type="button"
                onClick={() => onSwitchPersona(preset)}
                style={{
                  textAlign: 'left',
                  padding: '13px 15px',
                  borderRadius: 'var(--radius-md)',
                  border: `1.5px solid ${active ? 'var(--accent-primary)' : 'var(--border-default)'}`,
                  background: active ? 'var(--accent-primary-soft)' : 'var(--bg-canvas)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.92rem' }}>{preset.nameKo}</strong>
                  <span className="tag tag-forest">K-Lv.{preset.calibration.baseKLevel}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--ink-secondary)', marginTop: '4px' }}>
                  {preset.roleLabel}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Interactive CAT Testing Mode */}
      {testingMode && currentQ && (
        <section className="sprint-stage-card" style={{ maxWidth: '760px', margin: '0 auto 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span className="tag tag-forest">
              측정 영역: {SKILL_LABELS[currentQ.skill]} (문항 난이도 K-Lv.{currentQ.difficultyKLevel})
            </span>
            <span className="mono-duration">
              {stepIndex + 1} / {questions.length}
            </span>
          </div>

          <h2 style={{ fontSize: '1.18rem', marginBottom: '16px' }}>{currentQ.questionKo}</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {currentQ.options.map((opt, idx) => {
              const isPicked = selectedOpt === idx;
              let bg = 'var(--bg-canvas)';
              if (selectedOpt !== null) {
                if (opt.isCorrect) bg = 'var(--status-success-soft)';
                else if (isPicked) bg = 'var(--status-error-soft)';
              }
              return (
                <button
                  key={idx}
                  id={`cat-opt-${idx}`}
                  type="button"
                  onClick={() => selectedOpt === null && setSelectedOpt(idx)}
                  style={{
                    textAlign: 'left',
                    padding: '13px 15px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-default)',
                    background: bg,
                    fontWeight: 600,
                    fontSize: '0.92rem'
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {selectedOpt !== null && (
            <div className="nuance-tip-box" style={{ marginTop: '14px', background: 'var(--bg-subtle)' }}>
              <strong>해설:</strong> {currentQ.options[selectedOpt]?.feedback}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button id="cat-next-btn" type="button" className="btn btn-primary btn-sm" onClick={handleNextDiag}>
                  다음 문항 →
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Official Academic Report Card & Division Selector */}
      {!testingMode && (
        <>
          <div className="print-only-header">
            <div style={{ borderBottom: '2px solid #000', paddingBottom: '8px', marginBottom: '16px' }}>
              <strong>코어브릿지 AI 어학원 · 정식 학업성취도 생활통지표 (Official Academic Report Card)</strong>
              <div>수강생: {progress.learnerName} | 소속 학부: {currentDivInfo.nameKo}</div>
            </div>
          </div>

          <div className="stats-strip">
            <div className="stat-tile">
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>수강생 / 배정 레벨</span>
              <div className="stat-value" style={{ fontSize: '1.22rem', marginTop: '8px' }}>
                {progress.learnerName.split(' ')[0]} · K-Lv.{progress.calibration.baseKLevel}
              </div>
            </div>
            <div className="stat-tile">
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>90일 정규 학기 출석률</span>
              <div className="stat-value">
                {progress.completedSemesterDays.length} / 90일
              </div>
            </div>
            <div className="stat-tile">
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>단원평가 평균 성취도</span>
              <div className="stat-value" style={{ color: 'var(--accent-primary)' }}>
                {avgExamScore}점
              </div>
            </div>
            <div className="stat-tile">
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>보카 쪽지시험 최고점</span>
              <div className="stat-value" style={{ color: 'var(--accent-warm)' }}>
                {progress.vocabQuizBestScore}점
              </div>
            </div>
          </div>

          <div className="studio-split-layout">
            {/* Left: 5-Skill Grades & Manual Level Override */}
            <section className="side-panel-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="tag tag-forest">
                  <Award size={14} /> 5대 영역 성취 등급표
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>K-CEFR 12단계 기준</span>
              </div>

              <div className="level-bar-group" style={{ marginTop: '10px' }}>
                {(Object.keys(SKILL_LABELS) as Array<keyof FiveSkillRadar>).map((key) => {
                  const lv = progress.skillRadar[key];
                  const isOut = key === 'speaking' || key === 'writing';
                  return (
                    <div key={key}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', fontWeight: 700, marginBottom: '4px' }}>
                        <span>{SKILL_LABELS[key]}</span>
                        <span style={{ color: isOut ? 'var(--accent-warm)' : 'var(--accent-primary)' }}>
                          K-Lv.{lv} · {scoreToLetterGrade(lv)}
                        </span>
                      </div>
                      <div className="level-meter-track">
                        <div
                          className="level-meter-fill"
                          style={{
                            width: `${Math.round((lv / 12) * 100)}%`,
                            background: isOut ? 'var(--accent-warm)' : 'var(--accent-primary)'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="paraphrase-doc-card no-print" style={{ marginTop: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.88rem' }}>
                    <SlidersHorizontal size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    내 기본 반 레벨 수동 조정 (K-Lv.1 ~ 12)
                  </strong>
                  <span className="tag tag-forest">K-Lv.{progress.calibration.baseKLevel}</span>
                </div>
                <input
                  id="report-manual-klevel"
                  type="range"
                  min={1}
                  max={12}
                  value={progress.calibration.baseKLevel}
                  onChange={(e) =>
                    onUpdateCalibration({ baseKLevel: Number(e.target.value) })
                  }
                  style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
                />
              </div>

              {/* 90-Day Attendance Grass Heatmap */}
              <div style={{ marginTop: '20px' }}>
                <strong style={{ fontSize: '0.88rem', display: 'block', marginBottom: '8px' }}>
                  1학기(90일) 일일 학습 출석부
                </strong>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(15, 1fr)',
                    gap: '4px'
                  }}
                >
                  {Array.from({ length: 90 }, (_, i) => i + 1).map((d) => {
                    const attended = progress.completedSemesterDays.includes(d);
                    return (
                      <div
                        key={d}
                        title={`Day ${d} ${attended ? '출석 완료' : '미이수'}`}
                        style={{
                          height: '18px',
                          borderRadius: '4px',
                          background: attended ? 'var(--accent-primary)' : 'var(--bg-muted)',
                          color: attended ? '#fff' : 'var(--ink-muted)',
                          fontSize: '0.62rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {d}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Right: 4 School Divisions & Homeroom Teacher Prescription */}
            <aside className="side-panel-card">
              <span className="tag tag-amber">4대 정규 학부 (School Divisions)</span>
              <h3 style={{ fontSize: '1.12rem', marginTop: '6px', marginBottom: '12px' }}>
                내 학습 목적에 맞는 소속 학부 선택
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '18px' }}>
                {ACADEMY_DIVISIONS.map((div) => {
                  const isSelected = progress.division === div.id;
                  return (
                    <button
                      key={div.id}
                      id={`select-division-${div.id}`}
                      type="button"
                      onClick={() => onChangeDivision(div.id)}
                      style={{
                        textAlign: 'left',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        border: `1.5px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                        background: isSelected ? 'var(--accent-primary-soft)' : 'var(--bg-canvas)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ fontSize: '0.9rem' }}>{div.nameKo}</strong>
                        {isSelected && <CheckCircle2 size={15} color="var(--accent-primary)" />}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--accent-primary)', fontWeight: 650, marginTop: '2px' }}>
                        {div.targetRange}
                      </div>
                      <p style={{ fontSize: '0.81rem', color: 'var(--ink-secondary)', marginTop: '3px' }}>
                        {div.summaryKo}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="paraphrase-doc-card">
                <span className="tier-label">AI 담임 교사 종합 처방 코멘트</span>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                  현재 <strong>{progress.learnerName}</strong> 님은{' '}
                  <strong>{currentDivInfo.nameKo}</strong> 커리큘럼(하루 목표 {progress.calibration.dailyCapacity}문장)에 배정되어 있습니다. 대표 필수 단원인{' '}
                  <strong>{recommendedUnit.title}</strong>부터 바로 시작해 보세요!
                </p>
                <div className="no-print" style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                  <button
                    id="report-launch-sprint"
                    type="button"
                    className="btn btn-warm btn-sm"
                    onClick={() => onStartUnitMode(recommendedUnit, 'sprint')}
                  >
                    <Zap size={14} /> 학부 대표 스프린트
                  </button>
                  <button
                    id="report-launch-deep"
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onStartUnitMode(recommendedUnit, 'deep-class')}
                  >
                    <GraduationCap size={14} /> 학부 대표 인강·과외
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  );
};
