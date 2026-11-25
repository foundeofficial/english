import { useState } from 'react';
import {
  Award,
  CheckCircle2,
  MessageSquare,
  Mic,
  RotateCcw,
  Send,
  Sparkles,
  Volume2
} from 'lucide-react';
import { ROLEPLAY_SCENARIOS } from '../data/roleplayScenarios.ts';
import type { MasteryStage } from '../types/academy.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import { evaluateSpeechOrDictation } from '../utils/speechScoring.ts';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition
} from '../utils/speech.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface RealTalkRoleplayStudioProps {
  completedRoleplayIds: string[];
  onCompleteRoleplay: (scenarioId: string, spokenTurns: number) => void;
  onAddReviewCard: (card: SpacedReviewCard) => void;
  onOpenDictionary: (word?: string) => void;
}

interface CompletedTurnLog {
  turnId: string;
  partnerEn: string;
  partnerKo: string;
  userReply: string;
  score: number;
  nativeRecastEn: string;
  recastTipKo: string;
}

export function RealTalkRoleplayStudio({
  completedRoleplayIds,
  onCompleteRoleplay,
  onAddReviewCard,
  onOpenDictionary
}: RealTalkRoleplayStudioProps) {
  const [stageFilter, setStageFilter] = useState<'all' | 'kids' | MasteryStage>('all');
  const [activeScenarioId, setActiveScenarioId] = useState(ROLEPLAY_SCENARIOS[0]?.id ?? 'rp01');
  const [turnIndex, setTurnIndex] = useState(0);
  const [inputText, setInputText] = useState('');
  const [showPartnerKo, setShowPartnerKo] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [micNote, setMicNote] = useState<string | null>(null);
  const [turnLogs, setTurnLogs] = useState<CompletedTurnLog[]>([]);
  const [savedUpgradeIds, setSavedUpgradeIds] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const visibleScenarios = ROLEPLAY_SCENARIOS.filter((s) => {
    if (stageFilter === 'all') return true;
    if (stageFilter === 'kids') return s.stage === 'stage0' || s.stage === 'stage1';
    return s.stage === stageFilter;
  });

  const scenario =
    ROLEPLAY_SCENARIOS.find((s) => s.id === activeScenarioId) ?? ROLEPLAY_SCENARIOS[0];
  const currentTurn = scenario?.turns[turnIndex];

  const handleSelectScenario = (id: string) => {
    const picked = ROLEPLAY_SCENARIOS.find((s) => s.id === id);
    setActiveScenarioId(id);
    setTurnIndex(0);
    setInputText('');
    setTurnLogs([]);
    setFinished(false);
    setMicNote(null);
    if (picked?.turns[0]) {
      speakEnglish(picked.turns[0].partnerLineEn, 0.94);
    }
  };

  const evaluateUserReply = (reply: string) => {
    if (!currentTurn) return 0;
    const clean = reply.trim();
    if (!clean) return 0;
    const lower = clean.toLowerCase();
    const keywordHits = currentTurn.targetKeywords.filter((kw) => lower.includes(kw)).length;
    const keywordScore = Math.min(50, Math.round((keywordHits / Math.max(1, Math.min(3, currentTurn.targetKeywords.length))) * 50));
    const speechCmp = evaluateSpeechOrDictation(clean, currentTurn.nativeRecastEn).accuracyPct;
    const lengthBonus = clean.split(/\s+/).length >= 4 ? 15 : 8;
    return Math.min(100, Math.max(62, Math.round(keywordScore + speechCmp * 0.45 + lengthBonus)));
  };

  const handleSubmitTurn = () => {
    if (!currentTurn || !inputText.trim()) return;
    const reply = inputText.trim();
    const score = evaluateUserReply(reply);

    const nextLog: CompletedTurnLog = {
      turnId: currentTurn.id,
      partnerEn: currentTurn.partnerLineEn,
      partnerKo: currentTurn.partnerLineKo,
      userReply: reply,
      score,
      nativeRecastEn: currentTurn.nativeRecastEn,
      recastTipKo: currentTurn.recastTipKo
    };

    const nextLogs = [...turnLogs, nextLog];
    setTurnLogs(nextLogs);
    setInputText('');
    setMicNote(null);

    if (turnIndex + 1 < scenario.turns.length) {
      const nextIdx = turnIndex + 1;
      setTurnIndex(nextIdx);
      speakEnglish(scenario.turns[nextIdx].partnerLineEn, 0.94);
    } else {
      setFinished(true);
      onCompleteRoleplay(scenario.id, scenario.turns.length);
    }
  };

  const handleVoiceReply = () => {
    if (!isSpeechRecognitionSupported()) {
      setMicNote('음성 인식을 지원하지 않는 브라우저입니다. 아래 입력창이나 힌트 칩을 활용해 답변해 보세요.');
      return;
    }
    setIsListening(true);
    setMicNote('마이크로 영어로 자연스럽게 대답해 보세요...');
    startSpeechRecognition(
      (transcript) => {
        setIsListening(false);
        setInputText(transcript);
        setMicNote(`🎤 인식됨: "${transcript}" — 확인 후 [답변 보내기]를 눌러주세요!`);
      },
      (err) => {
        setIsListening(false);
        setMicNote(err);
      }
    );
  };

  const handleSaveUpgrade = (log: CompletedTurnLog) => {
    const today = new Date().toISOString().slice(0, 10);
    onAddReviewCard({
      id: `rp-card-${log.turnId}-${Date.now()}`,
      promptKo: log.partnerKo,
      targetEn: log.nativeRecastEn,
      noteKo: log.recastTipKo,
      sourceLabel: `실전 롤플레이 · ${scenario.titleKo}`,
      intervalDays: 1,
      dueDate: today,
      reviewCount: 0,
      mastered: false
    });
    setSavedUpgradeIds((prev) => ({ ...prev, [log.turnId]: true }));
  };

  const avgScore =
    turnLogs.length > 0
      ? Math.round(turnLogs.reduce((acc, t) => acc + t.score, 0) / turnLogs.length)
      : 0;

  return (
    <section className="stack-lg" aria-label="실전 멀티턴 프리토킹 롤플레이">
      {/* SCENARIO SELECTOR */}
      <div className="surface-card">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
          <div>
            <span className="pill-tag pill-coral">유치원·초등 → 여행 → 고등 면접·토론 → 글로벌 오피스 12편</span>
            <h2 style={{ fontSize: '1.35rem', marginTop: '6px' }}>
              실전 5턴 프리토킹 AI 롤플레이 스튜디오 (완주 {completedRoleplayIds.length}/{ROLEPLAY_SCENARIOS.length})
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {(
              [
                ['all', '전체 12편'],
                ['kids', '유치원·초등'],
                ['stage2', '중학·여행'],
                ['stage3', '고등·면접·토론'],
                ['stage4', '글로벌 오피스']
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                id={`roleplay-filter-${key}`}
                type="button"
                className={`day-switch-chip ${stageFilter === key ? 'active' : ''}`}
                onClick={() => setStageFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="roleplay-scenario-grid">
          {visibleScenarios.map((sc) => {
            const isSelected = sc.id === scenario.id;
            const isDone = completedRoleplayIds.includes(sc.id);
            return (
              <button
                key={sc.id}
                id={`roleplay-card-${sc.id}`}
                type="button"
                className={`roleplay-select-card ${isSelected ? 'active' : ''}`}
                onClick={() => handleSelectScenario(sc.id)}
              >
                <div className="roleplay-thumb-wrap">
                  <img src={sc.coverImage} alt={sc.titleKo} loading="lazy" />
                  <span className="card-corner-level">{sc.difficultyBadge}</span>
                  {isDone && (
                    <span className="card-corner-score">
                      <CheckCircle2 size={12} /> 완주
                    </span>
                  )}
                </div>
                <div style={{ padding: '12px', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 750, color: 'var(--brand)' }}>
                    {sc.stageLabelKo}
                  </span>
                  <strong style={{ display: 'block', fontSize: '0.96rem', marginTop: '3px' }}>
                    {sc.titleKo}
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>
                    상대역: {sc.partnerName} ({sc.partnerRoleKo})
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* LIVE MULTI-TURN CONVERSATION ARENA */}
      {scenario && (
        <div className="surface-card roleplay-arena-card">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
            <div>
              <span className="pill-tag pill-brand">
                {scenario.stageLabelKo} · {scenario.partnerName} ({scenario.partnerRoleKo})
              </span>
              <h3 style={{ fontSize: '1.28rem', marginTop: '6px' }}>{scenario.titleKo}</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.88rem', marginTop: '2px' }}>
                배경: {scenario.settingKo}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                type="button"
                className="btn-outline"
                style={{ padding: '7px 12px', fontSize: '0.82rem' }}
                onClick={() => setShowPartnerKo((v) => !v)}
              >
                한글 자막 {showPartnerKo ? 'ON' : 'OFF'}
              </button>
              <button
                type="button"
                className="btn-outline"
                style={{ padding: '7px 12px', fontSize: '0.82rem' }}
                onClick={() => handleSelectScenario(scenario.id)}
              >
                <RotateCcw size={14} /> 처음부터
              </button>
            </div>
          </div>

          {/* COMPLETED TURNS HISTORY */}
          <div className="roleplay-chat-feed">
            {turnLogs.map((log, i) => (
              <div key={log.turnId} className="roleplay-turn-pair">
                <div className="chat-bubble partner">
                  <div className="chat-speaker-meta">
                    <strong>{scenario.partnerName}</strong> · Turn {i + 1}
                  </div>
                  <p style={{ fontFamily: 'var(--font-en)', fontWeight: 650 }}>
                    <InteractiveText text={log.partnerEn} onLookupWord={onOpenDictionary} />
                  </p>
                  {showPartnerKo && (
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-sub)', marginTop: '3px' }}>
                      {log.partnerKo}
                    </p>
                  )}
                </div>

                <div className="chat-bubble user">
                  <div className="section-label-between">
                    <span className="chat-speaker-meta">나 (My Reply)</span>
                    <span className="pill-tag pill-brand" style={{ fontSize: '0.72rem' }}>
                      소통 점수 {log.score}점
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-en)', fontWeight: 700, marginTop: '4px' }}>
                    {log.userReply}
                  </p>
                  <div className="recast-mini-box">
                    <div className="section-label-between" style={{ gap: '8px', flexWrap: 'wrap' }}>
                      <strong style={{ color: 'var(--brand)', fontSize: '0.8rem' }}>
                        ✨ 원어민 업그레이드 표현
                      </strong>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button
                          type="button"
                          className="inline-audio-btn"
                          onClick={() => speakEnglish(log.nativeRecastEn, 0.94)}
                        >
                          <Volume2 size={12} /> 듣기
                        </button>
                        <button
                          type="button"
                          className="inline-audio-btn"
                          disabled={Boolean(savedUpgradeIds[log.turnId])}
                          onClick={() => handleSaveUpgrade(log)}
                        >
                          {savedUpgradeIds[log.turnId] ? '✓ 저장됨' : '+ 복습함'}
                        </button>
                      </div>
                    </div>
                    <p style={{ fontFamily: 'var(--font-en)', fontWeight: 750, fontSize: '0.94rem', marginTop: '4px' }}>
                      “<InteractiveText text={log.nativeRecastEn} onLookupWord={onOpenDictionary} />”
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginTop: '2px' }}>
                      💡 {log.recastTipKo}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* ACTIVE PARTNER TURN */}
            {!finished && currentTurn && (
              <div className="chat-bubble partner active-turn">
                <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
                  <div className="chat-speaker-meta">
                    <MessageSquare size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    <strong>{scenario.partnerName}</strong> · Turn {turnIndex + 1} / {scenario.turns.length} ·{' '}
                    <span style={{ color: 'var(--coral)' }}>({currentTurn.partnerMoodKo})</span>
                  </div>
                  <button
                    type="button"
                    className="inline-audio-btn"
                    onClick={() => speakEnglish(currentTurn.partnerLineEn, 0.92)}
                  >
                    <Volume2 size={14} /> 대사 다시 듣기
                  </button>
                </div>
                <p style={{ fontFamily: 'var(--font-en)', fontSize: '1.14rem', fontWeight: 750, marginTop: '8px' }}>
                  “<InteractiveText text={currentTurn.partnerLineEn} onLookupWord={onOpenDictionary} />”
                </p>
                {showPartnerKo && (
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', marginTop: '4px' }}>
                    {currentTurn.partnerLineKo}
                  </p>
                )}

                <div className="mission-prompt-strip" style={{ marginTop: '12px' }}>
                  <strong>🎯 이번 턴 미션:</strong> {currentTurn.learnerMissionKo}
                </div>

                {/* 3 GRADED HINT CHIPS */}
                <div style={{ marginTop: '12px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 750, color: 'var(--text-sub)' }}>
                    막힐 때 클릭해 바로 적용하는 3단계 힌트 칩:
                  </span>
                  <div className="roleplay-hint-grid" style={{ marginTop: '8px' }}>
                    {currentTurn.hintChips.map((chip, idx) => (
                      <button
                        key={idx}
                        id={`roleplay-hint-${idx}`}
                        type="button"
                        className="roleplay-hint-btn"
                        onClick={() => {
                          setInputText(chip.textEn);
                          speakEnglish(chip.textEn, 0.94);
                        }}
                      >
                        <span className="pill-tag pill-subtle" style={{ fontSize: '0.7rem' }}>
                          {chip.tierLabel}
                        </span>
                        <strong style={{ fontFamily: 'var(--font-en)', display: 'block', marginTop: '4px' }}>
                          {chip.textEn}
                        </strong>
                        <small style={{ color: 'var(--text-sub)' }}>{chip.meaningKo}</small>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* REPLY INPUT OR COMPLETION SCORECARD */}
          {!finished && currentTurn ? (
            <div className="roleplay-composer" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  id="roleplay-reply-input"
                  type="text"
                  className="input-clean"
                  style={{ flex: 1, minWidth: '240px' }}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSubmitTurn();
                    }
                  }}
                  placeholder="영어로 직접 말하거나 타이핑하세요 (또는 위 힌트 칩 클릭)"
                />
                <button
                  id="roleplay-mic-btn"
                  type="button"
                  className={`btn-outline ${isListening ? 'mic-pulse' : ''}`}
                  onClick={handleVoiceReply}
                >
                  <Mic size={16} /> {isListening ? '듣는 중...' : '말하기'}
                </button>
                <button
                  id="roleplay-send-btn"
                  type="button"
                  className="btn-solid-brand"
                  disabled={!inputText.trim()}
                  onClick={handleSubmitTurn}
                >
                  <Send size={15} /> 답변 보내기
                </button>
              </div>
              {micNote && (
                <p style={{ fontSize: '0.84rem', color: 'var(--brand)', marginTop: '8px', fontWeight: 650 }}>
                  {micNote}
                </p>
              )}
            </div>
          ) : (
            <div className="roleplay-complete-banner" style={{ marginTop: '18px' }}>
              <Award size={28} style={{ color: 'var(--brand)', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <span className="pill-tag pill-brand">5턴 실전 회화 롤플레이 완주! (+80 XP)</span>
                <h4 style={{ fontSize: '1.22rem', marginTop: '6px' }}>
                  평균 의사소통 점수: {avgScore}점 · 총 {turnLogs.length}턴 완벽 대응!
                </h4>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '4px' }}>
                  위 대화 기록에서 마음에 드는 원어민 업그레이드 표현의 [+ 복습함]을 눌러 장기 기억으로 고정해 보세요.
                </p>
              </div>
              <button
                type="button"
                className="btn-solid-coral"
                onClick={() => {
                  const nextIdx =
                    (ROLEPLAY_SCENARIOS.findIndex((s) => s.id === scenario.id) + 1) %
                    ROLEPLAY_SCENARIOS.length;
                  handleSelectScenario(ROLEPLAY_SCENARIOS[nextIdx].id);
                }}
              >
                <Sparkles size={16} /> 다음 시나리오 도전 →
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
