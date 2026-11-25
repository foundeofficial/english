import { useEffect, useRef, useState } from 'react';
import {
  Headphones,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Square
} from 'lucide-react';
import type {
  AccentPreference,
  SavedDictionaryWord,
  SpacedReviewCard,
  VocabEntry
} from '../types/course.ts';
import {
  ACCENT_LABELS,
  speakEnglish,
  speakKorean,
  stopSpeaking
} from '../utils/speech.ts';

interface CommuteAudioPlayerProps {
  dayNumber: number;
  vocabList: VocabEntry[];
  savedDictionaryWords: SavedDictionaryWord[];
  reviewDeck: SpacedReviewCard[];
  defaultAccent: AccentPreference;
}

interface CommuteTrackItem {
  id: string;
  enMain: string;
  koMeaning: string;
  enExample: string;
  tag: string;
}

type DeckSource = 'day-vocab' | 'my-dict' | 'review-deck';

export function CommuteAudioPlayer({
  dayNumber,
  vocabList,
  savedDictionaryWords,
  reviewDeck,
  defaultAccent
}: CommuteAudioPlayerProps) {
  const [source, setSource] = useState<DeckSource>('day-vocab');
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [stageLabel, setStageLabel] = useState('대기 중');
  const [repeatCount, setRepeatCount] = useState<1 | 2 | 3>(2);
  const [speed, setSpeed] = useState<0.85 | 0.96 | 1.1>(0.96);
  const [accent, setAccent] = useState<AccentPreference>(defaultAccent);
  const [readKorean, setReadKorean] = useState(true);
  const [readExample, setReadExample] = useState(true);

  const playingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const tracks: CommuteTrackItem[] =
    source === 'day-vocab'
      ? vocabList.map((v) => ({
          id: v.id,
          enMain: v.word.replace(/~/g, ''),
          koMeaning: v.meaningKo,
          enExample: v.exampleEn,
          tag: `Day ${String(dayNumber).padStart(2, '0')} · ${v.pos}`
        }))
      : source === 'my-dict'
        ? savedDictionaryWords.map((w) => ({
            id: w.id,
            enMain: w.word,
            koMeaning: w.meaningKo,
            enExample: w.exampleEn,
            tag: `내 사전 · ${w.pos}`
          }))
        : reviewDeck
            .filter((c) => !c.mastered)
            .map((c) => ({
              id: c.id,
              enMain: c.targetEn,
              koMeaning: c.promptKo,
              enExample: '',
              tag: `D+${c.intervalDays} 복습 · ${c.sourceLabel}`
            }));

  const safeIdx = tracks.length > 0 ? Math.min(trackIdx, tracks.length - 1) : 0;
  const activeItem = tracks[safeIdx];

  const stopAll = () => {
    playingRef.current = false;
    setIsPlaying(false);
    setStageLabel('일시정지됨');
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    stopSpeaking();
  };

  useEffect(() => {
    return () => {
      playingRef.current = false;
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      stopSpeaking();
    };
  }, []);

  const scheduleNextStep = (fn: () => void, delayMs: number) => {
    timerRef.current = window.setTimeout(() => {
      if (!playingRef.current) return;
      fn();
    }, delayMs);
  };

  const playTrackSequence = (index: number) => {
    if (!playingRef.current || tracks.length === 0) return;
    const wrapped = index % tracks.length;
    setTrackIdx(wrapped);
    const item = tracks[wrapped];

    const speakMainLoop = (repLeft: number) => {
      if (!playingRef.current) return;
      setStageLabel(`원어민 발음 듣기 (${repeatCount - repLeft + 1}/${repeatCount}회)`);
      speakEnglish(
        item.enMain,
        speed,
        () => {
          if (!playingRef.current) return;
          setStageLabel('따라 말하기 텀 (Shadowing Pause)...');
          scheduleNextStep(() => {
            if (repLeft > 1) {
              speakMainLoop(repLeft - 1);
            } else if (readKorean) {
              setStageLabel('한국어 뜻 안내');
              speakKorean(item.koMeaning, 1.05, () => {
                if (!playingRef.current) return;
                if (readExample && item.enExample) {
                  scheduleNextStep(() => {
                    setStageLabel('실전 예문 청취');
                    speakEnglish(
                      item.enExample,
                      speed,
                      () => {
                        scheduleNextStep(() => playTrackSequence(wrapped + 1), 1300);
                      },
                      1.0,
                      accent
                    );
                  }, 450);
                } else {
                  scheduleNextStep(() => playTrackSequence(wrapped + 1), 1100);
                }
              });
            } else if (readExample && item.enExample) {
              setStageLabel('실전 예문 청취');
              speakEnglish(
                item.enExample,
                speed,
                () => {
                  scheduleNextStep(() => playTrackSequence(wrapped + 1), 1300);
                },
                1.0,
                accent
              );
            } else {
              scheduleNextStep(() => playTrackSequence(wrapped + 1), 1100);
            }
          }, 1150);
        },
        1.0,
        accent
      );
    };

    speakMainLoop(repeatCount);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopAll();
      return;
    }
    if (tracks.length === 0) return;
    playingRef.current = true;
    setIsPlaying(true);
    playTrackSequence(safeIdx);
  };

  const handleStep = (delta: number) => {
    if (tracks.length === 0) return;
    const nextIdx = (safeIdx + delta + tracks.length) % tracks.length;
    setTrackIdx(nextIdx);
    if (isPlaying) {
      stopSpeaking();
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      playTrackSequence(nextIdx);
    }
  };

  return (
    <section className="commute-audio-card" aria-label="출퇴근 귀트임 자동재생 플레이어">
      <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
        <div>
          <span className="pill-tag pill-amber">
            <Headphones size={13} /> 출퇴근 · 운동 중 핸즈프리 귀트임 모드
          </span>
          <h2 style={{ fontSize: '1.3rem', marginTop: '8px' }}>
            화면 안 보고 귀로만 무한 반복하는 자동재생 암기 플레이어
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginTop: '4px' }}>
            원어민 영어 → 따라 말하기 텀 → 한국어 뜻 → 실전 예문 순서로 자동 순환합니다.
          </p>
        </div>

        {/* SOURCE SWITCHER */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {(
            [
              ['day-vocab', `Day ${String(dayNumber).padStart(2, '0')} 단어 (${vocabList.length})`],
              ['my-dict', `내 사전 단어 (${savedDictionaryWords.length})`],
              ['review-deck', `오답 복습함 (${reviewDeck.filter((c) => !c.mastered).length})`]
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`day-switch-chip ${source === id ? 'active' : ''}`}
              onClick={() => {
                stopAll();
                setSource(id);
                setTrackIdx(0);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {tracks.length === 0 ? (
        <div className="empty-state-box">
          선택한 보관함에 아직 재생할 항목이 없습니다. Day 단어장이나 영한사전에서 단어를 저장해 보세요!
        </div>
      ) : (
        <>
          <div className="commute-stage-box">
            <div className="section-label-between" style={{ marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
              <span className="pill-tag pill-brand">{activeItem.tag}</span>
              <span className="commute-stage-pill">
                {isPlaying ? `🔊 ${stageLabel}` : `트랙 ${safeIdx + 1} / ${tracks.length}`}
              </span>
            </div>

            <p className="commute-en-main">{activeItem.enMain}</p>
            <p className="commute-ko-main">{activeItem.koMeaning}</p>
            {activeItem.enExample && (
              <p className="commute-en-example">예문: “{activeItem.enExample}”</p>
            )}

            <div className="commute-controls-row">
              <button
                type="button"
                className="btn-outline"
                onClick={() => handleStep(-1)}
                aria-label="이전 항목"
              >
                <SkipBack size={17} />
              </button>

              <button
                id="commute-play-toggle-btn"
                type="button"
                className="btn-solid-coral"
                style={{ minWidth: '170px' }}
                onClick={handleTogglePlay}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                <span>{isPlaying ? '일시정지' : '자동재생 시작'}</span>
              </button>

              {isPlaying && (
                <button
                  type="button"
                  className="btn-outline"
                  onClick={stopAll}
                  aria-label="정지"
                >
                  <Square size={15} />
                </button>
              )}

              <button
                type="button"
                className="btn-outline"
                onClick={() => handleStep(1)}
                aria-label="다음 항목"
              >
                <SkipForward size={17} />
              </button>
            </div>
          </div>

          {/* PLAYBACK OPTIONS BAR */}
          <div className="commute-options-grid">
            <div className="commute-opt-group">
              <span>영어 반복</span>
              <div style={{ display: 'flex', gap: '5px' }}>
                {([1, 2, 3] as const).map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`day-switch-chip ${repeatCount === n ? 'active' : ''}`}
                    onClick={() => setRepeatCount(n)}
                  >
                    {n}회
                  </button>
                ))}
              </div>
            </div>

            <div className="commute-opt-group">
              <span>속도</span>
              <div style={{ display: 'flex', gap: '5px' }}>
                {([0.85, 0.96, 1.1] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`day-switch-chip ${speed === s ? 'active' : ''}`}
                    onClick={() => setSpeed(s)}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            <div className="commute-opt-group">
              <span>억양</span>
              <div style={{ display: 'flex', gap: '5px' }}>
                {(['en-US', 'en-GB', 'en-AU'] as AccentPreference[]).map((ac) => (
                  <button
                    key={ac}
                    type="button"
                    className={`day-switch-chip ${accent === ac ? 'active' : ''}`}
                    onClick={() => setAccent(ac)}
                  >
                    {ACCENT_LABELS[ac].split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="commute-opt-group">
              <span>구성</span>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className={`day-switch-chip ${readKorean ? 'active' : ''}`}
                  onClick={() => setReadKorean((v) => !v)}
                >
                  한국어 뜻 {readKorean ? 'ON' : 'OFF'}
                </button>
                <button
                  type="button"
                  className={`day-switch-chip ${readExample ? 'active' : ''}`}
                  onClick={() => setReadExample((v) => !v)}
                >
                  예문 읽기 {readExample ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
