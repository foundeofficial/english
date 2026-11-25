import React, { useState } from 'react';
import {
  CheckCircle2,
  Eye,
  FileText,
  Layers,
  RotateCcw,
  Sparkles,
  Volume2
} from 'lucide-react';
import type { CurriculumUnit, SpacedStage, UserProgress } from '../types/learning';
import { speakEnglish } from '../utils/speech';

interface ReviewVaultViewProps {
  units: CurriculumUnit[];
  progress: UserProgress;
  onAdvanceStage: (itemId: string, remembered: boolean) => void;
}

const NEXT_STAGE_MAP: Record<SpacedStage, SpacedStage> = {
  'D+1': 'D+3',
  'D+3': 'D+7',
  'D+7': 'D+14',
  'D+14': 'Mastered',
  Mastered: 'Mastered'
};

export const ReviewVaultView: React.FC<ReviewVaultViewProps> = ({
  units,
  progress,
  onAdvanceStage
}) => {
  const [stageFilter, setStageFilter] = useState<'due' | 'all' | SpacedStage>('due');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const filteredItems = progress.reviewVault.filter((item) => {
    if (stageFilter === 'due') return item.dueToday && item.stage !== 'Mastered';
    if (stageFilter === 'all') return true;
    return item.stage === stageFilter;
  });

  const dueCount = progress.reviewVault.filter(
    (i) => i.dueToday && i.stage !== 'Mastered'
  ).length;

  const noteEntries = Object.entries(progress.lectureNotes).filter(
    ([, content]) => content.trim().length > 0
  );

  return (
    <div>
      <section className="hero-intro">
        <div>
          <h1>에빙하우스 망각곡선 복습장 &amp; 과외 노트</h1>
          <p className="hero-desc">
            5~10분 스프린트에서 틀렸거나 30~60분 과외에서 첨삭받은 문장들이 기억이 희미해질 주기(<strong>D+1 → D+3 → D+7 → D+14</strong>)마다 자동으로 소환됩니다.
          </p>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stat-tile">
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>오늘 복습 대기</span>
          <div className="stat-value" style={{ color: 'var(--accent-warm)' }}>{dueCount}문장</div>
        </div>
        <div className="stat-tile">
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>총 보관 문장</span>
          <div className="stat-value">{progress.reviewVault.length}문장</div>
        </div>
        <div className="stat-tile">
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>장기 기억 졸업</span>
          <div className="stat-value">
            {progress.reviewVault.filter((i) => i.stage === 'Mastered').length}문장
          </div>
        </div>
        <div className="stat-tile">
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>누적 3단 첨삭 기록</span>
          <div className="stat-value">{progress.paraphraseHistory.length}건</div>
        </div>
      </div>

      {/* Spaced Repetition Flash Recall Cards */}
      <section style={{ marginBottom: '38px' }}>
        <div className="section-header">
          <h2 className="section-title">
            <Layers size={18} style={{ verticalAlign: 'text-bottom', marginRight: '6px' }} />
            망각곡선 인출(Active Recall) 카드
          </h2>
          <div className="filter-pills">
            {[
              { id: 'due', label: `오늘 복습 (${dueCount})` },
              { id: 'all', label: '전체 보기' },
              { id: 'D+1', label: 'D+1' },
              { id: 'D+3', label: 'D+3' },
              { id: 'D+7', label: 'D+7' },
              { id: 'Mastered', label: '졸업 완료' }
            ].map((f) => (
              <button
                key={f.id}
                id={`vault-filter-${f.id}`}
                type="button"
                className={`filter-pill ${stageFilter === f.id ? 'active' : ''}`}
                onClick={() => setStageFilter(f.id as typeof stageFilter)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="side-panel-card" style={{ textAlign: 'center', padding: '36px 20px' }}>
            <Sparkles size={24} color="var(--accent-primary)" />
            <h3 style={{ marginTop: '8px' }}>오늘 예정된 망각곡선 복습을 모두 마쳤습니다!</h3>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
              전체 보기를 눌러 보관된 문장을 확인하거나 새로운 스프린트·정규 수업을 진행해보세요.
            </p>
          </div>
        ) : (
          <div className="unit-list">
            {filteredItems.map((item) => {
              const isRevealed = Boolean(revealedIds[item.id]);
              return (
                <article key={item.id} className="side-panel-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span className="tag tag-warm">주기: {item.stage}</span>
                      <span className="tag tag-neutral">
                        출처:{' '}
                        {item.sourceMode === 'sprint'
                          ? '5~10분 스프린트'
                          : item.sourceMode === 'deep-tutor'
                          ? '30~60분 과외실'
                          : item.sourceMode === 'exam-clinic'
                          ? '단원평가 오답 클리닉'
                          : item.sourceMode === 'handwriting-ocr'
                          ? '종이 학습지 손글씨 채점'
                          : item.sourceMode === 'vocab-quiz'
                          ? '보카 등원 쪽지시험'
                          : '즉석 첨삭 클리닉'}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '1.12rem', fontWeight: 750, marginTop: '12px' }}>
                    Q. “{item.koreanPrompt}”
                  </p>

                  {!isRevealed ? (
                    <div style={{ marginTop: '14px' }}>
                      <button
                        id={`reveal-vault-card-${item.id}`}
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() =>
                          setRevealedIds((prev) => ({ ...prev, [item.id]: true }))
                        }
                      >
                        <Eye size={15} /> 입으로 먼저 말해본 뒤 정답 확인하기
                      </button>
                    </div>
                  ) : (
                    <div
                      style={{
                        marginTop: '14px',
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-canvas)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <p style={{ fontFamily: 'var(--font-en-display)', fontSize: '1.06rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                          {item.targetEnglish}
                        </p>
                        <button
                          id={`vault-audio-${item.id}`}
                          type="button"
                          className="btn btn-ghost btn-sm"
                          onClick={() => speakEnglish(item.targetEnglish, 0.95)}
                        >
                          <Volume2 size={15} /> 발음 듣기
                        </button>
                      </div>
                      <p style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)', marginTop: '6px' }}>
                        {item.explanationKo}
                      </p>

                      {item.stage !== 'Mastered' && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '12px' }}>
                          <button
                            id={`vault-retry-${item.id}`}
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => onAdvanceStage(item.id, false)}
                          >
                            <RotateCcw size={14} /> 조금 막혔어요 (D+1 재복습)
                          </button>
                          <button
                            id={`vault-pass-${item.id}`}
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => onAdvanceStage(item.id, true)}
                          >
                            <CheckCircle2 size={14} /> 1초 만에 나왔어요 ({NEXT_STAGE_MAP[item.stage]} 승급)
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Saved Lecture Notes from 30-60m Deep Classes */}
      <section>
        <div className="section-header">
          <h2 className="section-title">
            <FileText size={18} style={{ verticalAlign: 'text-bottom', marginRight: '6px' }} />
            정규 인강 수강 필기 노트 모아보기
          </h2>
        </div>

        {noteEntries.length === 0 ? (
          <div className="side-panel-card" style={{ color: 'var(--ink-secondary)', fontSize: '0.91rem' }}>
            아직 작성된 수강 필기 노트가 없습니다. <strong>30~60분 인강·과외실 &gt; 1교시</strong>에서 강의를 들으며 칠판 공식을 스크랩하거나 메모를 남겨보세요!
          </div>
        ) : (
          <div className="unit-list">
            {noteEntries.map(([unitId, content]) => {
              const matchedUnit = units.find((u) => u.id === unitId);
              return (
                <article key={unitId} className="side-panel-card">
                  <span className="tag tag-forest">{matchedUnit?.level ?? '수강 노트'}</span>
                  <h3 style={{ fontSize: '1.05rem', marginTop: '6px', marginBottom: '10px' }}>
                    {matchedUnit?.title ?? unitId}
                  </h3>
                  <pre
                    style={{
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.89rem',
                      background: 'var(--bg-canvas)',
                      padding: '14px',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--ink-primary)'
                    }}
                  >
                    {content}
                  </pre>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
