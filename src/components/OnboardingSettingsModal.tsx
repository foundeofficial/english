import { useState } from 'react';
import { CheckCircle2, Sparkles, VolumeX, X } from 'lucide-react';
import {
  LEVEL_INFO_MAP,
  LEVEL_ORDER,
  PLACEMENT_DIAGNOSTIC_ITEMS,
  recommendLevelFromScore
} from '../data/levels.ts';
import type { LearnerSettings, StudyPace } from '../types/course.ts';

interface OnboardingSettingsModalProps {
  isOpen: boolean;
  isFirstVisit: boolean;
  settings: LearnerSettings;
  onSave: (nextSettings: LearnerSettings) => void;
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
    const recommended = recommendLevelFromScore(correct);
    const meta = LEVEL_INFO_MAP[recommended];
    setDraft((prev) => ({ ...prev, levelTier: recommended }));
    setQuizResultNote(
      `6단계 CEFR 진단 완료 (${correct}/6 정답) → [${meta.titleKo}] 레벨로 맞춤 설정되었습니다! (추천 시작: Day ${String(meta.recommendedStartDay).padStart(2, '0')})`
    );
    setShowQuiz(false);
  };

  const paceOptions: Array<{ id: StudyPace; title: string; desc: string }> = [
    {
      id: 'light',
      title: '가볍게 · 하루 10분',
      desc: '출퇴근길 7분 어순 스프린트 + 핵심 단어 15개 + 유튜브 짧은 반복 훈련'
    },
    {
      id: 'standard',
      title: '표준 · 하루 25분',
      desc: '유튜브 실전 인강 + 시트콤 대화 쉐도잉 + 7분 스프린트 + 영자 독해 1지문'
    },
    {
      id: 'intensive',
      title: '집중 · 하루 50분',
      desc: '유튜브·시트콤·칠판·독해 4교시 완주 + 1:1 AI 과외 + 15~20문항 A4 단원평가 시험지까지 풀코스'
    }
  ];

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="settings-modal-title">
      <div className="modal-panel modal-panel-wide">
        <div className="modal-header-row">
          <div>
            <span className="pill-tag pill-brand">CEFR 6단계 개인 맞춤형 학습 캘리브레이션</span>
            <h2 id="settings-modal-title" style={{ marginTop: '10px', fontSize: '1.45rem' }}>
              {isFirstVisit
                ? '내 영어 실력(Lv.1~6)과 하루 학습 페이스를 설정하세요'
                : '내 레벨(Lv.1~6) · 학습 환경 설정'}
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
            학습자 이름 (성적표 · 학습지에 표기)
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

        <div className="settings-section">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
            <span className="field-label">1. 내 영어 레벨 선택 (CEFR A1 입문 ~ C2 마스터 · 6단계)</span>
            <button
              id="toggle-mini-diagnostic-btn"
              type="button"
              className="text-action-btn"
              onClick={() => setShowQuiz((v) => !v)}
            >
              <Sparkles size={14} />
              <span>{showQuiz ? '레벨 테스트 접기' : '1분 정밀 6단계 레벨 테스트 해보기'}</span>
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
                A1 입문부터 C2 마스터까지 단계별 6문항을 풀어보면 내 정확한 레벨을 추천해 드립니다.
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
                6문항 채점 후 내 CEFR 레벨 자동 추천받기
              </button>
            </div>
          )}

          <div className="level-six-grid">
            {LEVEL_ORDER.map((lv) => {
              const info = LEVEL_INFO_MAP[lv];
              return (
                <button
                  key={lv}
                  id={`select-level-${lv}`}
                  type="button"
                  className={`radio-card-btn ${draft.levelTier === lv ? 'active' : ''}`}
                  onClick={() => setDraft({ ...draft, levelTier: lv })}
                >
                  <div className="section-label-between" style={{ marginBottom: '4px' }}>
                    <span className="radio-card-title">{info.shortLabel}</span>
                    <span className="pill-tag pill-subtle" style={{ fontSize: '0.72rem' }}>
                      기본 {info.defaultSpeechRate}x
                    </span>
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--brand)', marginBottom: '3px' }}>
                    {info.taglineKo}
                  </div>
                  <p className="radio-card-desc">{info.descKo}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="settings-section">
          <span className="field-label">2. 하루 목표 학습량 (학습 능력 · 시간 여유)</span>
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

        <div className="settings-section">
          <span className="field-label">3. 직독직해 &amp; 출퇴근 보조 설정</span>
          <div className="toggle-list">
            <label className="toggle-row" htmlFor="toggle-slashes-checkbox">
              <div>
                <div style={{ fontWeight: 700 }}>S/V/O 의미 단위 끊어읽기(/) 표시</div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-sub)' }}>
                  시트콤 대본과 영자 독해 지문에서 영어 어순 덩어리 슬래시를 함께 표시합니다.
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
            Google Gemini API Key (선택사항 · 실시간 AI 1:1 첨삭 연동)
          </label>
          <input
            id="gemini-api-key-input"
            type="password"
            className="input-clean"
            value={draft.geminiApiKey ?? ''}
            onChange={(e) => setDraft({ ...draft, geminiApiKey: e.target.value })}
            placeholder="AIza... (미입력 시에도 내장 한영 첨삭 엔진이 100% 작동합니다)"
          />
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
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
              onSave({
                ...draft,
                learnerName: draft.learnerName.trim() || '학습자'
              })
            }
          >
            {LEVEL_INFO_MAP[draft.levelTier].shortLabel} 맞춤 커리큘럼 적용하기
          </button>
        </div>
      </div>
    </div>
  );
}
