import { useState } from 'react';
import { CheckCircle2, Sparkles, VolumeX, X } from 'lucide-react';
import {
  MINI_DIAGNOSTIC_ITEMS,
  recommendTierFromScore
} from '../data/week1MasterCourse.ts';
import type { LearnerSettings, LevelTier, StudyPace } from '../types/course.ts';

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
    for (const q of MINI_DIAGNOSTIC_ITEMS) {
      const pickedIdx = quizAnswers[q.id];
      if (pickedIdx !== undefined && q.options[pickedIdx]?.isCorrect) {
        correct += 1;
      }
    }
    const recommended = recommendTierFromScore(correct);
    setDraft((prev) => ({ ...prev, levelTier: recommended }));
    const labelMap: Record<LevelTier, string> = {
      basic: 'Lv.1 기초 코어 (핵심 단문 뼈대부터 탄탄히)',
      standard: 'Lv.2 실전 표준 (일상·오피스 구동사 밸런스)',
      advanced: 'Lv.3 비즈니스 심화 (글로벌 실무 & 정교한 뉘앙스)'
    };
    setQuizResultNote(`진단 결과 3문항 중 ${correct}문항 정답! → [${labelMap[recommended]}] 레벨로 맞춤 설정되었습니다.`);
    setShowQuiz(false);
  };

  const levelOptions: Array<{ id: LevelTier; title: string; desc: string }> = [
    {
      id: 'basic',
      title: 'Lv.1 기초 코어',
      desc: '길고 복잡한 문장 대신 [주어+동사] 핵심 단문부터 입에서 바로 나오게 훈련합니다.'
    },
    {
      id: 'standard',
      title: 'Lv.2 실전 표준 (추천)',
      desc: '원어민 구동사와 전치사 감각을 익혀 일상 스몰토크와 직장 대화를 자연스럽게 구사합니다.'
    },
    {
      id: 'advanced',
      title: 'Lv.3 비즈니스 심화',
      desc: '글로벌 화상회의·이메일에 바로 쓰는 완곡한 조율과 3문장 확장 표현까지 마스터합니다.'
    }
  ];

  const paceOptions: Array<{ id: StudyPace; title: string; desc: string }> = [
    {
      id: 'light',
      title: '가볍게 · 하루 7분',
      desc: '출퇴근길 데일리 어순 스프린트와 핵심 단어 위주로 부담 없이 루틴을 만듭니다.'
    },
    {
      id: 'standard',
      title: '표준 · 하루 20분',
      desc: '시트콤 인강 + 7분 스프린트 + 핵심 오답 복습까지 균형 있게 학습합니다.'
    },
    {
      id: 'intensive',
      title: '집중 · 하루 45분',
      desc: '원리 인강 + 1:1 AI 과외 + 15문항 단원평가 시험지까지 학원·과외처럼 완벽 완주합니다.'
    }
  ];

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="settings-modal-title">
      <div className="modal-panel">
        <div className="modal-header-row">
          <div>
            <span className="pill-tag pill-brand">개인 맞춤형 학습 캘리브레이션</span>
            <h2 id="settings-modal-title" style={{ marginTop: '10px', fontSize: '1.45rem' }}>
              {isFirstVisit ? '나에게 딱 맞는 영어 레벨과 페이스를 설정하세요' : '내 레벨 · 학습 환경 설정'}
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
          <div className="section-label-between">
            <span className="field-label">1. 내 영어 문장 레벨 선택</span>
            <button
              id="toggle-mini-diagnostic-btn"
              type="button"
              className="text-action-btn"
              onClick={() => setShowQuiz((v) => !v)}
            >
              <Sparkles size={14} />
              <span>{showQuiz ? '진단 접기' : '30초 미니 레벨 테스트 해보기'}</span>
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
                한국인이 가장 자주 헷갈리는 실전 문장 3문항을 골라보세요.
              </p>
              {MINI_DIAGNOSTIC_ITEMS.map((q) => (
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
                disabled={Object.keys(quizAnswers).length < MINI_DIAGNOSTIC_ITEMS.length}
                onClick={handleApplyQuiz}
              >
                진단 결과로 내 레벨 자동 추천받기
              </button>
            </div>
          )}

          <div className="choice-stack">
            {levelOptions.map((opt) => (
              <button
                key={opt.id}
                id={`select-level-${opt.id}`}
                type="button"
                className={`radio-card-btn ${draft.levelTier === opt.id ? 'active' : ''}`}
                onClick={() => setDraft({ ...draft, levelTier: opt.id })}
              >
                <div className="radio-card-title">{opt.title}</div>
                <p className="radio-card-desc">{opt.desc}</p>
              </button>
            ))}
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
          <span className="field-label">3. 직독직해 & 출퇴근 보조 설정</span>
          <div className="toggle-list">
            <label className="toggle-row" htmlFor="toggle-slashes-checkbox">
              <div>
                <div style={{ fontWeight: 700 }}>S/V/O 의미 단위 끊어읽기(/) 표시</div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-sub)' }}>
                  인강 대본과 개념서에서 영어 어순 덩어리 슬래시를 함께 표시합니다.
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

        <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
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
            맞춤 커리큘럼 적용하기
          </button>
        </div>
      </div>
    </div>
  );
}
