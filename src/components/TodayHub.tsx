import React, { useState } from 'react';
import {
  ArrowRight,
  BookmarkPlus,
  CheckCircle2,
  Clock,
  GraduationCap,
  Sparkles,
  Volume2,
  VolumeX,
  Zap
} from 'lucide-react';
import type {
  ActiveTab,
  CurriculumUnit,
  ParaphraseResult,
  TrackCategory,
  UserProgress
} from '../types/learning';
import { analyzeAndParaphrase } from '../utils/paraphraseEngine';
import { speakEnglish } from '../utils/speech';

interface TodayHubProps {
  units: CurriculumUnit[];
  selectedUnit: CurriculumUnit;
  progress: UserProgress;
  dueReviewCount: number;
  onStartSprint: (unit: CurriculumUnit) => void;
  onStartDeepClass: (unit: CurriculumUnit) => void;
  onNavigateTab: (tab: ActiveTab) => void;
  onToggleSilentMode: () => void;
  onSaveParaphraseToVault: (result: ParaphraseResult) => void;
}

const SAMPLE_CLINIC_INPUTS = [
  'Yesterday I had many works so I could not check your mail.',
  'My schedule is ambiguous tomorrow, please delay the meeting.',
  'I have a promise with my friend this evening.',
  '이번 사안에 대해 금요일까지 논의하고 공유드릴게요.'
];

export const TodayHub: React.FC<TodayHubProps> = ({
  units,
  selectedUnit,
  progress,
  dueReviewCount,
  onStartSprint,
  onStartDeepClass,
  onNavigateTab,
  onToggleSilentMode,
  onSaveParaphraseToVault
}) => {
  const [category, setCategory] = useState<TrackCategory>('all');
  const [clinicText, setClinicText] = useState(SAMPLE_CLINIC_INPUTS[0]);
  const [clinicResult, setClinicResult] = useState<ParaphraseResult | null>(() =>
    analyzeAndParaphrase(SAMPLE_CLINIC_INPUTS[0], '즉석 콩글리시 첨삭 클리닉')
  );
  const [savedBanner, setSavedBanner] = useState(false);

  const filteredUnits =
    category === 'all' ? units : units.filter((u) => u.category === category);

  const handleRunClinic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clinicText.trim()) return;
    const res = analyzeAndParaphrase(clinicText, '즉석 콩글리시 첨삭 클리닉');
    setClinicResult(res);
    setSavedBanner(false);
  };

  const handleBookmarkClinic = () => {
    if (!clinicResult) return;
    onSaveParaphraseToVault(clinicResult);
    setSavedBanner(true);
  };

  return (
    <div>
      {/* Editorial Intro */}
      <section className="hero-intro">
        <div>
          <h1>머릿속 한국어를 원어민의 영어로 바꾸는 투트랙 스튜디오</h1>
          <p className="hero-desc">
            출퇴근길엔 <strong>5~10분 데일리 스프린트</strong>로 어순 반사신경과 스트릭을 지키고, 책상 앞에서는{' '}
            <strong>30~60분 정규 원리 인강과 1:1 과외 첨삭</strong>으로 문장의 깊이를 완성하세요.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            id="hub-toggle-silent-btn"
            type="button"
            className={`mode-switch-pill ${progress.silentCommuteMode ? 'silent-active' : ''}`}
            onClick={onToggleSilentMode}
          >
            {progress.silentCommuteMode ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>{progress.silentCommuteMode ? '지하철 묵음 모드 켜짐' : '스피킹 발화 모드 켜짐'}</span>
          </button>
          <button
            id="hub-open-vocab-btn"
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onNavigateTab('vocab-quiz')}
          >
            보카 가림판 · 쪽지시험
          </button>
          <button
            id="hub-open-workbook-btn"
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onNavigateTab('workbook')}
          >
            인쇄용 학습지 · 단원평가
          </button>
          <button
            id="hub-open-report-btn"
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onNavigateTab('report-card')}
          >
            {`성적표 · 반 변경 (${progress.learnerName.split(' ')[0]} K-Lv.${progress.calibration.baseKLevel})`}
          </button>
        </div>
      </section>

      {/* Dual-Track Launchers: 5~10m Sprint vs 30~60m Deep Lecture & Tutoring */}
      <section className="dual-mode-grid" aria-label="학습 방식 선택">
        {/* Track 1: 5-10 min Sprint */}
        <article className="mode-launcher-card">
          <div>
            <div className="mode-time-meta">
              <span className="tag tag-warm">
                <Zap size={13} /> Track 1 · 마이크로 러닝 (듀오링고·스픽·말해보카형)
              </span>
              <span className="mono-duration">5 ~ 10 MIN / DAY</span>
            </div>
            <h2 className="mode-card-title">데일리 어순·스피킹 스프린트</h2>
            <p className="mode-card-summary">
              자투리 시간에 가볍게 접속해 한국어-영어 어순 청크를 1초 만에 조합하고 핵심 빈칸을 뚫는 고밀도 습관 과정입니다. 말하기 힘든 지하철에선 묵음 모드로 완주할 수 있습니다.
            </p>
          </div>

          <div className="step-flow-inline">
            <span><strong>1단계</strong> 1분 뉘앙스 온도계</span>
            <span>→</span>
            <span><strong>2단계</strong> 어순 청크·빈칸 순발력 드릴</span>
            <span>→</span>
            <span><strong>3단계</strong> 오답 클리어 &amp; 스트릭 달성</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.84rem', color: 'var(--ink-muted)' }}>
              오늘 스프린트 누적: <strong>{progress.sprintMinutesToday}분</strong> · 복습 대기 <strong>{dueReviewCount}건</strong>
            </span>
            <button
              id="launch-daily-sprint-btn"
              type="button"
              className="btn btn-warm"
              onClick={() => onStartSprint(selectedUnit)}
            >
              <Zap size={16} />
              <span>{selectedUnit.sprintMinutes}분 스프린트 바로 시작</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </article>

        {/* Track 2: 30-60 min Lecture & 1:1 Tutoring */}
        <article className="mode-launcher-card deep-card">
          <div>
            <div className="mode-time-meta">
              <span className="tag tag-forest">
                <GraduationCap size={13} /> Track 2 · 집중 정규 수업 (인강·과외·링글형)
              </span>
              <span className="mono-duration">30 ~ 60 MIN / CLASS</span>
            </div>
            <h2 className="mode-card-title">정규 원리 인강 &amp; 1:1 전담 과외실</h2>
            <p className="mode-card-summary">
              단순 퀴즈만으로는 채워지지 않는 근본 문장 원리 인강을 듣고, 리스닝 딕테이션·영작 워크북 실습 후 전담 과외 모드로 3단 패러프레이징 첨삭까지 받는 심화 클래스입니다.
            </p>
          </div>

          <div className="step-flow-inline">
            <span><strong>1교시</strong> 칠판 원리 인강 &amp; 필기</span>
            <span>→</span>
            <span><strong>2교시</strong> 딕테이션·영작 워크북</span>
            <span>→</span>
            <span><strong>3교시</strong> 1:1 과외 &amp; 3단 패러프레이징</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.84rem', color: 'var(--ink-muted)' }}>
              오늘 집중 수업 누적: <strong>{progress.deepMinutesToday}분</strong> · 강사: {selectedUnit.instructorName.split(' ')[0]}
            </span>
            <button
              id="launch-deep-class-btn"
              type="button"
              className="btn btn-primary"
              onClick={() => onStartDeepClass(selectedUnit)}
            >
              <GraduationCap size={16} />
              <span>{selectedUnit.deepClassMinutes}분 정규 수업 입장</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </article>
      </section>

      {/* Curriculum Units List (Choose either 7m Sprint or 45m Lecture per unit) */}
      <section aria-labelledby="curriculum-list-heading">
        <div className="section-header">
          <div>
            <h2 id="curriculum-list-heading" className="section-title">
              전 학부 대표 커리큘럼 (왕초보 기초 · 내신/수능 · 오픽 · 비즈니스)
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', marginTop: '3px' }}>
              모든 단원은 바쁜 날을 위한 <strong>5~10분 스프린트</strong>와 깊게 공부하는 날을 위한 <strong>30~60분 인강·과외·학습지</strong>로 모두 수강할 수 있습니다.
            </p>
          </div>

          <div className="filter-pills" role="tablist" aria-label="커리큘럼 트랙 필터">
            {[
              { id: 'all', label: '전체 과정' },
              { id: 'foundation', label: '왕초보 기초' },
              { id: 'school-csat', label: '내신·수능 1등급' },
              { id: 'daily-order', label: '일상·어순 혁신' },
              { id: 'business', label: '비즈니스 실무' },
              { id: 'opic-speaking', label: '오픽·면접 3문장' }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`filter-track-${tab.id}`}
                type="button"
                className={`filter-pill ${category === tab.id ? 'active' : ''}`}
                onClick={() => setCategory(tab.id as TrackCategory)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="unit-list">
          {filteredUnits.map((unit) => {
            const sprintDone = progress.completedSprintIds.includes(unit.id);
            const deepDone = progress.completedDeepIds.includes(unit.id);

            return (
              <article key={unit.id} className="unit-row-card">
                <div className="unit-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="tag tag-forest">{unit.level}</span>
                    <span className="tag tag-neutral">{unit.categoryLabel}</span>
                    <span style={{ fontSize: '0.79rem', color: 'var(--ink-muted)' }}>
                      담당: {unit.instructorName}
                    </span>
                    {sprintDone && (
                      <span className="tag tag-warm">
                        <CheckCircle2 size={12} /> 스프린트 완료
                      </span>
                    )}
                    {deepDone && (
                      <span className="tag tag-forest">
                        <CheckCircle2 size={12} /> 정규수업 수료
                      </span>
                    )}
                  </div>
                  <h3 className="unit-title">{unit.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', marginBottom: '6px' }}>
                    {unit.subtitle}
                  </p>
                  <p className="unit-Key-expr">“{unit.keySentence}”</p>
                </div>

                <div className="unit-actions">
                  <button
                    id={`unit-sprint-btn-${unit.id}`}
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => onStartSprint(unit)}
                  >
                    <Zap size={14} color="var(--accent-warm)" />
                    <span>{unit.sprintMinutes}분 스프린트</span>
                  </button>
                  <button
                    id={`unit-deep-btn-${unit.id}`}
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onStartDeepClass(unit)}
                  >
                    <Clock size={14} />
                    <span>{unit.deepClassMinutes}분 인강·과외</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Instant 1-Minute Konglish & Ringle-style Paraphrasing Clinic */}
      <section className="instant-clinic-box" aria-labelledby="instant-clinic-heading">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <div>
            <span className="tag tag-amber">1분 즉석 과외 첨삭 도구</span>
            <h2 id="instant-clinic-heading" className="section-title" style={{ marginTop: '6px' }}>
              콩글리시 &amp; 링글식 3단 패러프레이징 체커
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', marginTop: '2px' }}>
              내가 쓴 영어 문장이나 말하고 싶은 한국어 상황을 입력하면 문법·콩글리시 교정과 원어민 실전 표현(일상용/비즈니스용)으로 즉시 다듬어 드립니다.
            </p>
          </div>
        </div>

        <div className="hint-chips-row" style={{ marginTop: '12px' }}>
          {SAMPLE_CLINIC_INPUTS.map((sample, idx) => (
            <button
              key={idx}
              id={`sample-clinic-chip-${idx}`}
              type="button"
              className="hint-chip"
              onClick={() => {
                setClinicText(sample);
                setClinicResult(analyzeAndParaphrase(sample, '즉석 콩글리시 첨삭 클리닉'));
                setSavedBanner(false);
              }}
            >
              예시: “{sample.length > 36 ? `${sample.slice(0, 36)}...` : sample}”
            </button>
          ))}
        </div>

        <form className="clinic-input-row" onSubmit={handleRunClinic}>
          <input
            id="instant-clinic-input"
            type="text"
            className="text-input"
            value={clinicText}
            onChange={(e) => setClinicText(e.target.value)}
            placeholder="예: Yesterday I had many works so I could not check your mail."
            aria-label="첨삭받을 영어 또는 한국어 문장 입력"
          />
          <button id="instant-clinic-submit" type="submit" className="btn btn-primary" style={{ flexShrink: 0 }}>
            <Sparkles size={16} />
            <span>3단 교정 받기</span>
          </button>
        </form>

        {clinicResult && (
          <div className="paraphrase-doc-card" style={{ marginTop: '18px' }}>
            <div className="tier-row">
              <span className="tier-label">1. 내가 입력한 표현 (My Draft)</span>
              <p className="tier-mine">{clinicResult.originalInput}</p>
            </div>
            <div className="tier-row">
              <span className="tier-label">2. 문법 · 콩글리시 과외 교정 (Grammar &amp; Konglish Fix)</span>
              <p className="tier-fix">{clinicResult.grammarFix}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', marginTop: '3px' }}>
                💡 <strong>과외 코멘트:</strong> {clinicResult.tutorExplanationKo}
              </p>
            </div>
            <div className="tier-row">
              <span className="tier-label">3. 원어민 실전 패러프레이징 업그레이드 (Native Upgrade)</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                  <span>
                    <span className="tag tag-neutral" style={{ marginRight: '8px' }}>Casual 일상</span>
                    <span className="tier-native">{clinicResult.casualNative}</span>
                  </span>
                  <button
                    id="clinic-listen-casual"
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={() => speakEnglish(clinicResult.casualNative, 0.95)}
                  >
                    <Volume2 size={15} /> 발음 듣기
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                  <span>
                    <span className="tag tag-forest" style={{ marginRight: '8px' }}>Business 격식</span>
                    <span className="tier-native">{clinicResult.businessNative}</span>
                  </span>
                  <button
                    id="clinic-listen-business"
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={() => speakEnglish(clinicResult.businessNative, 0.95)}
                  >
                    <Volume2 size={15} /> 발음 듣기
                  </button>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
              <button
                id="clinic-save-vault-btn"
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleBookmarkClinic}
                disabled={savedBanner}
              >
                <BookmarkPlus size={15} />
                <span>{savedBanner ? '망각곡선 복습장에 저장됨 (D+1)' : '망각곡선 복습장에 추가하기'}</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
