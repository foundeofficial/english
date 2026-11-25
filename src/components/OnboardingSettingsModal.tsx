import { useState } from 'react';
import { CheckCircle2, Sparkles, VolumeX, X } from 'lucide-react';
import {
  LEVEL_INFO_MAP,
  LEVEL_ORDER,
  MASTERY_STAGE_MAP,
  MASTERY_STAGE_ORDER,
  PLACEMENT_DIAGNOSTIC_ITEMS,
  recommendPlacementFromScore
} from '../data/levels.ts';
import type { LearnerSettings, StudyPace } from '../types/course.ts';

interface OnboardingSettingsModalProps {
  isOpen: boolean;
  isFirstVisit: boolean;
  settings: LearnerSettings;
  onSave: (nextSettings: LearnerSettings, jumpToRecommended?: boolean) => void;
  onClose: () => void;
}

export function OnboardingSettingsModal({
  isOpen,
  isFirstVisit,
  settings,
  onSave,
  onClose
}: OnboardingSettingsModalProps) {
  const [draft, setDraft] = useState<LearnerSettings>(settings);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizResultNote, setQuizResultNote] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApplyQuiz = () => {
    let correct = 0;
    for (const q of PLACEMENT_DIAGNOSTIC_ITEMS) {
      const pickedIdx = quizAnswers[q.id];
      if (pickedIdx !== undefined && q.options[pickedIdx]?.isCorrect) {
        correct += 1;
      }
    }
    const { stage, levelTier } = recommendPlacementFromScore(correct);
    const stageMeta = MASTERY_STAGE_MAP[stage];
    const lvMeta = LEVEL_INFO_MAP[levelTier];
    setDraft((prev) => ({
      ...prev,
      currentStage: stage,
      levelTier
    }));
    setQuizResultNote(
      `8문항 정밀 진단 완료 (${correct}/8 정답) → [${stageMeta.badge}] · [${lvMeta.shortLabel}] 트랙이 자동 추천되었습니다!`
    );
    setShowQuiz(false);
  };

  const paceOptions: Array<{ id: StudyPace; title: string; desc: string }> = [
    {
      id: 'light',
      title: '가볍게 · 하루 10분',
      desc: '파닉스/기초 문장 1단원 + 출퇴근 단어 15개 + 7분 핵심 스프린트'
    },
    {
      id: 'standard',
      title: '표준 · 하루 25분',
      desc: '단계별 핵심 강의(파닉스·문법·독해·인강) + 실전 롤플레이 + 스프린트'
    },
    {
      id: 'intensive',
      title: '집중 · 하루 50분',
      desc: '전 영역 완전학습(인강·구문독해·에세이·롤플레이) + A4 단원평가 시험지까지 풀코스'
    }
  ];

  const activeStageMeta = MASTERY_STAGE_MAP[draft.currentStage ?? 'stage2'];

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="settings-modal-title">
      <div className="modal-panel modal-panel-wide">
        <div className="modal-header-row">
          <div>
            <span className="pill-tag pill-brand">유치원 파닉스 → 초등 → 중학 → 고등 수능 → 글로벌 C2 완전학습</span>
            <h2 id="settings-modal-title" style={{ marginTop: '10px', fontSize: '1.42rem' }}>
              {isFirstVisit
                ? '어디서부터 시작할까요? 내 단계(Stage 0~4)를 설정하세요'
                : '학습 단계(Stage 0~4) · CEFR 레벨 · 환경 설정'}
            </h2>
          </div>
          {!isFirstVisit && (
            <button
              id="close-settings-modal-btn"
              type="button"
              className="icon-close-btn"
              onClick={onClose}
              aria-label="설정 닫기"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="settings-section">
          <label htmlFor="learner-name-input" className="field-label">
            학습자 이름 (성장 성적표 · A4 학습지에 표기)
          </label>
          <input
            id="learner-name-input"
            type="text"
            className="input-clean"
            value={draft.learnerName}
            onChange={(e) => setDraft({ ...draft, learnerName: e.target.value })}
            placeholder="예: 김민준"
          />
        </div>

        {/* STEP 1: 5-STAGE ZERO-TO-MASTERY SELECTOR + 8-Q DIAGNOSTIC */}
        <div className="settings-section">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
            <span className="field-label">1. 시작 학습 단계 선택 (Stage 0 유치원 파닉스 ~ Stage 4 글로벌 C2)</span>
            <button
              id="toggle-mini-diagnostic-btn"
              type="button"
              className="text-action-btn"
              onClick={() => setShowQuiz((v) => !v)}
            >
              <Sparkles size={14} />
              <span>{showQuiz ? '진단 테스트 접기' : '1분 8문항 정밀 배치고사 (파닉스~고등·C2)'}</span>
            </button>
          </div>

          {quizResultNote && (
            <div className="feedback-banner ok" style={{ marginBottom: '12px' }}>
              <CheckCircle2 size={18} />
              <span>{quizResultNote}</span>
            </div>
          )}

          {showQuiz && (
            <div className="mini-quiz-box">
              <p style={{ fontWeight: 700, marginBottom: '12px', fontSize: '0.92rem' }}>
                유치원 파닉스부터 초등 어순, 중학 시제, 고등 수능 어법, C2 논설까지 8문항으로 정확한 시작 단계를 찾아드립니다.
              </p>
              {PLACEMENT_DIAGNOSTIC_ITEMS.map((q) => (
                <div key={q.id} className="mini-quiz-item">
                  <p className="mini-quiz-q">{q.questionKo}</p>
                  <div className="mini-quiz-opts">
                    {q.options.map((opt, idx) => (
                      <button
                        key={opt.label}
                        id={`diag-opt-${q.id}-${idx}`}
                        type="button"
                        className={`option-choice-btn ${quizAnswers[q.id] === idx ? 'selected' : ''}`}
                        onClick={() => setQuizAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                id="apply-mini-diagnostic-btn"
                type="button"
                className="btn-solid-brand"
                style={{ width: '100%', marginTop: '8px' }}
                disabled={Object.keys(quizAnswers).length < PLACEMENT_DIAGNOSTIC_ITEMS.length}
                onClick={handleApplyQuiz}
              >
                8문항 채점 후 내 맞춤 단계(Stage 0~4) 자동 추천받기
              </button>
            </div>
          )}

          <div className="stage-five-grid">
            {MASTERY_STAGE_ORDER.map((stKey) => {
              const st = MASTERY_STAGE_MAP[stKey];
              const isSelected = draft.currentStage === stKey;
              return (
                <button
                  key={stKey}
                  id={`select-stage-${stKey}`}
                  type="button"
                  className={`radio-card-btn ${isSelected ? 'active' : ''}`}
                  onClick={() =>
                    setDraft({
                      ...draft,
                      currentStage: stKey,
                      levelTier: st.recommendedLevelTier
                    })
                  }
                >
                  <div className="section-label-between" style={{ marginBottom: '4px', gap: '6px' }}>
                    <span className="radio-card-title">{st.badge}</span>
                    <span className="pill-tag pill-subtle" style={{ fontSize: '0.72rem' }}>
                      {st.cefrRange}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--brand)', marginBottom: '3px' }}>
                    {st.schoolAgeLabel}
                  </div>
                  <p className="radio-card-desc">{st.descKo}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: FINE-GRAINED CEFR LEVEL */}
        <div className="settings-section">
          <span className="field-label">2. 세부 문장 난이도 &amp; 듣기 속도 (CEFR Lv.1 ~ Lv.6)</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {LEVEL_ORDER.map((lv) => {
              const info = LEVEL_INFO_MAP[lv];
              return (
                <button
                  key={lv}
                  id={`select-level-${lv}`}
                  type="button"
                  className={`day-switch-chip ${draft.levelTier === lv ? 'active' : ''}`}
                  onClick={() => setDraft({ ...draft, levelTier: lv })}
                >
                  {info.shortLabel} ({info.defaultSpeechRate}x)
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 3: STUDY PACE */}
        <div className="settings-section">
          <span className="field-label">3. 하루 목표 학습량</span>
          <div className="choice-stack">
            {paceOptions.map((opt) => (
              <button
                key={opt.id}
                id={`select-pace-${opt.id}`}
                type="button"
                className={`radio-card-btn ${draft.studyPace === opt.id ? 'active' : ''}`}
                onClick={() => setDraft({ ...draft, studyPace: opt.id })}
              >
                <div className="radio-card-title">{opt.title}</div>
                <p className="radio-card-desc">{opt.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* STEP 4: ACCENT & LEARNING AIDS */}
        <div className="settings-section">
          <span className="field-label">4. 기본 원어민 억양 · 직독직해 &amp; 묵음 설정</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            {(
              [
                ['en-US', '🇺🇸 미국식 (US 표준)'],
                ['en-GB', '🇬🇧 영국식 (UK · BBC)'],
                ['en-AU', '🇦🇺 호주식 (AU)']
              ] as const
            ).map(([ac, label]) => (
              <button
                key={ac}
                id={`select-accent-${ac}`}
                type="button"
                className={`day-switch-chip ${draft.accent === ac ? 'active' : ''}`}
                onClick={() => setDraft({ ...draft, accent: ac })}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="toggle-list">
            <label className="toggle-row" htmlFor="toggle-slashes-checkbox">
              <div>
                <div style={{ fontWeight: 700 }}>S/V/O 의미 단위 끊어읽기(/) 표시</div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-sub)' }}>
                  시트콤 대본·영자 독해·고등 구문독해에서 영어 어순 덩어리 슬래시를 함께 표시합니다.
                </div>
              </div>
              <input
                id="toggle-slashes-checkbox"
                type="checkbox"
                checked={draft.showStructureSlashes}
                onChange={(e) => setDraft({ ...draft, showStructureSlashes: e.target.checked })}
              />
            </label>

            <label className="toggle-row" htmlFor="toggle-silent-checkbox">
              <div>
                <div style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <VolumeX size={15} /> 지하철 · 독서실 묵음 모드
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-sub)' }}>
                  마이크 발화 대신 눈과 손으로 어순 청크를 조립할 수 있게 전환합니다.
                </div>
              </div>
              <input
                id="toggle-silent-checkbox"
                type="checkbox"
                checked={draft.silentMode}
                onChange={(e) => setDraft({ ...draft, silentMode: e.target.checked })}
              />
            </label>
          </div>
        </div>

        <div className="settings-section">
          <label htmlFor="gemini-api-key-input" className="field-label">
            Google Gemini API Key (선택사항 · 실시간 AI 1:1 에세이·회화 첨삭 연동)
          </label>
          <input
            id="gemini-api-key-input"
            type="password"
            className="input-clean"
            value={draft.geminiApiKey ?? ''}
            onChange={(e) => setDraft({ ...draft, geminiApiKey: e.target.value })}
            placeholder="AIza... (미입력 시에도 내장 한국인 맞춤 첨삭·채점 엔진이 100% 작동합니다)"
          />
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '10px', flexWrap: 'wrap' }}>
          {!isFirstVisit && (
            <button id="cancel-settings-btn" type="button" className="btn-outline" onClick={onClose}>
              취소
            </button>
          )}
          <button
            id="save-learner-settings-btn"
            type="button"
            className="btn-solid-brand"
            onClick={() =>
              onSave(
                {
                  ...draft,
                  learnerName: draft.learnerName.trim() || '학습자'
                },
                isFirstVisit
              )
            }
          >
            {activeStageMeta.shortLabel} ({LEVEL_INFO_MAP[draft.levelTier].shortLabel}) 트랙 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
