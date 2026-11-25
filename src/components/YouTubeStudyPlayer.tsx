import { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Film,
  Link2,
  PlayCircle,
  Repeat,
  RotateCcw,
  RotateCw,
  Search,
  Sparkles,
  Video
} from 'lucide-react';
import { LEVEL_INFO_MAP, LEVEL_ORDER } from '../data/levels.ts';
import {
  ALL_CURATED_YOUTUBE_VIDEOS,
  extractYouTubeVideoId
} from '../data/youtubeLibrary.ts';
import type { LevelTier, YouTubeLessonVideo } from '../types/course.ts';

interface YouTubeStudyPlayerProps {
  dayNumber: number;
  recommendedVideo: YouTubeLessonVideo;
  learnerLevel: LevelTier;
  videoWatched: boolean;
  savedNote: string;
  onMarkVideoWatched: () => void;
  onSaveNote: (note: string) => void;
  onOpenDictionary: (word?: string) => void;
}

interface YTPlayerInstance {
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  getCurrentTime: () => number;
  setPlaybackRate: (rate: number) => void;
  playVideo: () => void;
  destroy: () => void;
}

interface YTNamespace {
  Player: new (
    element: HTMLIFrameElement,
    options: {
      events?: {
        onReady?: () => void;
      };
    }
  ) => YTPlayerInstance;
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let ytApiPromise: Promise<YTNamespace | null> | null = null;

function loadYouTubeIframeAPI(): Promise<YTNamespace | null> {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (ytApiPromise) return ytApiPromise;

  ytApiPromise = new Promise((resolve) => {
    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prevCallback?.();
      resolve(window.YT ?? null);
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      tag.onerror = () => resolve(null);
      document.head.appendChild(tag);
    }

    // Timeout fallback so it never hangs if offline
    window.setTimeout(() => resolve(window.YT ?? null), 4500);
  });

  return ytApiPromise;
}

function formatSeconds(sec: number): string {
  const safe = Math.max(0, Math.floor(sec));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function YouTubeStudyPlayer({
  dayNumber,
  recommendedVideo,
  learnerLevel,
  videoWatched,
  savedNote,
  onMarkVideoWatched,
  onSaveNote,
  onOpenDictionary
}: YouTubeStudyPlayerProps) {
  const [activeVideo, setActiveVideo] = useState<YouTubeLessonVideo>(recommendedVideo);
  const [startSec, setStartSec] = useState(0);
  const [embedNonce, setEmbedNonce] = useState(0);
  const [checkedMissions, setCheckedMissions] = useState<Record<number, boolean>>({});
  const [noteDraft, setNoteDraft] = useState(savedNote);
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  // Pro Shadowing Player states (YouTube IFrame API)
  const [apiReady, setApiReady] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [loopA, setLoopA] = useState<number | null>(null);
  const [loopB, setLoopB] = useState<number | null>(null);

  // Library drawer / Custom YouTube URL importer
  const [showLibrary, setShowLibrary] = useState(false);
  const [levelFilter, setLevelFilter] = useState<'all' | LevelTier>('all');
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [customUrlError, setCustomUrlError] = useState<string | null>(null);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const loopARef = useRef<number | null>(null);
  const loopBRef = useRef<number | null>(null);

  useEffect(() => {
    loopARef.current = loopA;
    loopBRef.current = loopB;
  }, [loopA, loopB]);

  // Attach YouTube IFrame API controller to the rendered iframe
  useEffect(() => {
    let cancelled = false;
    let pollTimer: number | null = null;

    void loadYouTubeIframeAPI().then((YT) => {
      if (cancelled || !YT?.Player || !iframeRef.current) return;
      try {
        playerRef.current = new YT.Player(iframeRef.current, {
          events: {
            onReady: () => {
              if (cancelled) return;
              setApiReady(true);
              pollTimer = window.setInterval(() => {
                const p = playerRef.current;
                if (!p) return;
                try {
                  const t = p.getCurrentTime();
                  if (typeof t === 'number' && !Number.isNaN(t)) {
                    setCurrentTimeSec(t);
                    const a = loopARef.current;
                    const b = loopBRef.current;
                    if (a !== null && b !== null && b > a + 1 && t >= b) {
                      p.seekTo(a, true);
                    }
                  }
                } catch {
                  // Ignore transient YT postMessage errors
                }
              }, 450);
            }
          }
        });
      } catch {
        // Fallback to standard iframe mode seamlessly
      }
    });

    return () => {
      cancelled = true;
      if (pollTimer !== null) window.clearInterval(pollTimer);
      playerRef.current = null;
      setApiReady(false);
    };
  }, [activeVideo.videoId, embedNonce]);

  const handleJumpTimestamp = (sec: number) => {
    const clamped = Math.max(0, Math.floor(sec));
    if (apiReady && playerRef.current) {
      setStartSec(clamped);
      try {
        playerRef.current.seekTo(clamped, true);
        playerRef.current.playVideo();
        setCurrentTimeSec(clamped);
        return;
      } catch {
        // Fall back to iframe src reload
      }
    }
    if (clamped !== startSec) {
      setStartSec(clamped);
      setEmbedNonce((n) => n + 1);
    }
  };

  const handleNudgeSeconds = (delta: number) => {
    const base = apiReady ? currentTimeSec : startSec;
    handleJumpTimestamp(base + delta);
  };

  const handleChangeSpeed = (spd: number) => {
    setPlaybackRate(spd);
    if (apiReady && playerRef.current) {
      try {
        playerRef.current.setPlaybackRate(spd);
      } catch {
        // Ignore if player not yet started
      }
    }
  };

  const handleSetLoopA = () => {
    const t = Math.floor(apiReady ? currentTimeSec : startSec);
    setLoopA(t);
    if (loopB !== null && loopB <= t + 1) {
      setLoopB(null);
    }
  };

  const handleSetLoopB = () => {
    const t = Math.floor(apiReady ? currentTimeSec : startSec);
    const startPoint = loopA ?? Math.max(0, t - 6);
    if (loopA === null) setLoopA(startPoint);
    const endPoint = Math.max(startPoint + 2, t);
    setLoopB(endPoint);
    handleJumpTimestamp(startPoint);
  };

  const handleInsertTimestampToNote = () => {
    const stamp = `[${formatSeconds(apiReady ? currentTimeSec : startSec)}] `;
    setNoteDraft((prev) => (prev ? `${prev}\n${stamp}` : stamp));
  };

  const handleSelectLibraryVideo = (vid: YouTubeLessonVideo) => {
    setActiveVideo(vid);
    setStartSec(0);
    setCurrentTimeSec(0);
    setLoopA(null);
    setLoopB(null);
    setEmbedNonce((n) => n + 1);
    setCheckedMissions({});
    setShowLibrary(false);
  };

  const handleLoadCustomUrl = () => {
    const id = extractYouTubeVideoId(customUrlInput);
    if (!id) {
      setCustomUrlError('올바른 유튜브 링크(youtube.com/watch?v=... 또는 youtu.be/...)를 입력해 주세요.');
      return;
    }
    setCustomUrlError(null);
    setActiveVideo({
      videoId: id,
      title: '직접 불러온 유튜브 영어 학습 영상',
      channel: 'Custom YouTube Study',
      levelTier: learnerLevel,
      categoryKo: '내 맞춤 유튜브 스터디',
      durationLabel: '사용자 지정 영상',
      koreanSummary:
        '직접 가져온 영어 유튜브 영상을 KoreBridge 스튜디오에서 A–B 구간 반복과 배속 조절, 실시간 영한사전으로 함께 공부하세요.',
      chapters: [
        { labelKo: '처음부터 재생 (00:00)', startSec: 0, focusExpression: 'Active Listening' },
        { labelKo: '1분 구간부터 (01:00)', startSec: 60, focusExpression: 'Shadowing Practice' },
        { labelKo: '3분 구간부터 (03:00)', startSec: 180, focusExpression: 'Key Expressions' }
      ],
      studyMissionKo: [
        '잘 안 들리는 문장에 A–B 구간 반복을 걸어 5회 이상 따라 말해보세요.',
        '모르는 단어는 우측 [영한사전 열기] 버튼으로 바로 검색해 내 단어장에 저장하세요.'
      ]
    });
    setStartSec(0);
    setLoopA(null);
    setLoopB(null);
    setEmbedNonce((n) => n + 1);
    setCustomUrlInput('');
  };

  const originParam =
    typeof window !== 'undefined' && window.location.origin.startsWith('http')
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : '';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?start=${startSec}&rel=0&modestbranding=1&enablejsapi=1${originParam}`;

  const filteredLibrary = ALL_CURATED_YOUTUBE_VIDEOS.filter((v) =>
    levelFilter === 'all' ? true : v.levelTier === levelFilter
  );

  const isLoopActive = loopA !== null && loopB !== null;

  return (
    <section className="yt-studio-wrapper" aria-label="유튜브 실전 영어 영상 강의">
      <div className="lecture-two-col">
        {/* LEFT: REAL EMBEDDED YOUTUBE PLAYER + PRO SHADOWING CONTROLS */}
        <div className="yt-player-card">
          <div className="yt-iframe-box">
            <iframe
              ref={iframeRef}
              key={`${activeVideo.videoId}-${embedNonce}`}
              src={embedUrl}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* PRO SHADOWING & A-B LOOP CONTROL BAR */}
          <div className="yt-pro-toolbar" role="region" aria-label="유튜브 구간 반복 및 배속 컨트롤">
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                id="yt-rewind-5s-btn"
                type="button"
                className="cinema-ctrl-btn"
                onClick={() => handleNudgeSeconds(-5)}
                title="5초 뒤로"
              >
                <RotateCcw size={14} /> -5초
              </button>
              <button
                id="yt-forward-5s-btn"
                type="button"
                className="cinema-ctrl-btn"
                onClick={() => handleNudgeSeconds(5)}
                title="5초 앞으로"
              >
                <RotateCw size={14} /> +5초
              </button>

              <span className="yt-live-clock" title="현재 재생 시점">
                {formatSeconds(apiReady ? currentTimeSec : startSec)}
              </span>

              <button
                id="yt-set-loop-a-btn"
                type="button"
                className={`cinema-ctrl-btn ${loopA !== null ? 'active' : ''}`}
                onClick={handleSetLoopA}
                title="구간 반복 시작점(A) 지정"
              >
                <Repeat size={13} /> A {loopA !== null ? formatSeconds(loopA) : '시작'}
              </button>
              <button
                id="yt-set-loop-b-btn"
                type="button"
                className={`cinema-ctrl-btn ${loopB !== null ? 'active' : ''}`}
                onClick={handleSetLoopB}
                title="구간 반복 끝점(B) 지정 후 자동 반복"
              >
                B {loopB !== null ? formatSeconds(loopB) : '끝'}
              </button>
              {(loopA !== null || loopB !== null) && (
                <button
                  id="yt-clear-loop-btn"
                  type="button"
                  className="cinema-ctrl-btn"
                  onClick={() => {
                    setLoopA(null);
                    setLoopB(null);
                  }}
                >
                  반복 해제
                </button>
              )}
            </div>

            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center' }}>
              {[0.75, 0.9, 1.0, 1.25].map((spd) => (
                <button
                  key={spd}
                  type="button"
                  className={`cinema-ctrl-btn ${Math.abs(playbackRate - spd) < 0.03 ? 'active' : ''}`}
                  onClick={() => handleChangeSpeed(spd)}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>

          {isLoopActive && (
            <div className="yt-loop-banner">
              🔁 A–B 쉐도잉 구간 반복 작동 중: <strong>{formatSeconds(loopA)}</strong> ~{' '}
              <strong>{formatSeconds(loopB)}</strong> (원어민 억양을 그대로 따라 말해보세요!)
            </div>
          )}

          <div className="yt-video-meta-body">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span className="pill-tag pill-coral">
                  <Video size={13} /> {LEVEL_INFO_MAP[activeVideo.levelTier].shortLabel}
                </span>
                <span className="pill-tag pill-subtle">{activeVideo.categoryKo}</span>
                <span className="pill-tag pill-amber">{activeVideo.channel}</span>
              </div>

              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.videoId}&t=${Math.floor(apiReady ? currentTimeSec : startSec)}s`}
                target="_blank"
                rel="noreferrer"
                className="text-action-btn"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink size={14} /> YouTube에서 열기
              </a>
            </div>

            <h2 style={{ fontSize: '1.26rem', marginTop: '12px' }}>{activeVideo.title}</h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.94rem', marginTop: '8px' }}>
              {activeVideo.koreanSummary}
            </p>

            {/* CHAPTER TIMESTAMP JUMP BAR */}
            <div className="yt-chapters-section">
              <div className="section-label-between" style={{ marginBottom: '10px' }}>
                <span style={{ fontWeight: 750, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={15} /> 핵심 구간 점프 (클릭 시 끊김 없이 해당 시점으로 이동)
                </span>
                {activeVideo.videoId !== recommendedVideo.videoId && (
                  <button
                    type="button"
                    className="text-action-btn"
                    onClick={() => handleSelectLibraryVideo(recommendedVideo)}
                  >
                    Day {String(dayNumber).padStart(2, '0')} 기본 추천 영상으로 복귀
                  </button>
                )}
              </div>

              <div className="yt-chapters-grid">
                {activeVideo.chapters.map((ch) => (
                  <button
                    key={`${ch.startSec}-${ch.labelKo}`}
                    type="button"
                    className={`yt-chapter-btn ${startSec === ch.startSec ? 'active' : ''}`}
                    onClick={() => handleJumpTimestamp(ch.startSec)}
                  >
                    <div className="yt-chapter-top">
                      <span className="yt-time-pill">{formatSeconds(ch.startSec)}</span>
                      <span className="yt-chapter-label">{ch.labelKo}</span>
                    </div>
                    <span className="yt-chapter-focus">{ch.focusExpression}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: ACTIVE STUDY MISSION + TIMESTAMP NOTES + DICTIONARY */}
        <div className="yt-sidebar-stack">
          <div className="script-panel-card">
            <div className="section-label-between" style={{ marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.08rem', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Sparkles size={17} style={{ color: 'var(--brand)' }} /> 영상 학습 미션 체크리스트
              </h3>
              <button
                id="yt-mark-watched-btn"
                type="button"
                className={videoWatched ? 'btn-outline' : 'btn-solid-brand'}
                style={{ padding: '7px 12px', fontSize: '0.82rem' }}
                onClick={onMarkVideoWatched}
              >
                <CheckCircle2 size={15} />
                <span>{videoWatched ? '시청 완료됨' : '시청 완료 체크'}</span>
              </button>
            </div>

            <div className="yt-mission-list">
              {activeVideo.studyMissionKo.map((mission, idx) => (
                <label key={idx} className={`yt-mission-item ${checkedMissions[idx] ? 'done' : ''}`}>
                  <input
                    type="checkbox"
                    checked={Boolean(checkedMissions[idx])}
                    onChange={() =>
                      setCheckedMissions((prev) => ({ ...prev, [idx]: !prev[idx] }))
                    }
                  />
                  <span>{mission}</span>
                </label>
              ))}
            </div>

            <div style={{ marginTop: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                id="yt-open-dict-btn"
                type="button"
                className="btn-outline"
                style={{ flex: 1, fontSize: '0.85rem', padding: '9px 10px', whiteSpace: 'nowrap' }}
                onClick={() => onOpenDictionary('')}
              >
                <Search size={15} /> 영한사전 검색
              </button>
              <button
                id="yt-toggle-library-btn"
                type="button"
                className="btn-solid-coral"
                style={{ flex: 1, fontSize: '0.85rem', padding: '9px 10px', whiteSpace: 'nowrap' }}
                onClick={() => setShowLibrary((v) => !v)}
              >
                <Film size={15} /> {showLibrary ? '영상관 닫기' : '40편 영상관 열기'}
              </button>
            </div>
          </div>

          {/* SIDE-BY-SIDE TIMESTAMP VIDEO NOTE */}
          <div className="script-panel-card">
            <div className="section-label-between" style={{ marginBottom: '8px', gap: '6px', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.03rem' }}>
                Day {String(dayNumber).padStart(2, '0')} 타임스탬프 필기장
              </h3>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  id="yt-insert-timestamp-btn"
                  type="button"
                  className="inline-audio-btn"
                  onClick={handleInsertTimestampToNote}
                >
                  + [{formatSeconds(apiReady ? currentTimeSec : startSec)}] 삽입
                </button>
                <button
                  id="yt-save-note-btn"
                  type="button"
                  className="btn-outline"
                  style={{ padding: '5px 11px', fontSize: '0.8rem' }}
                  onClick={() => {
                    onSaveNote(noteDraft);
                    setNoteSavedToast(true);
                    window.setTimeout(() => setNoteSavedToast(false), 2000);
                  }}
                >
                  필기 저장
                </button>
              </div>
            </div>
            <textarea
              id="yt-note-textarea"
              className="note-textarea"
              rows={5}
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              placeholder="영상을 보며 귀에 꽂힌 원어민 문장, [01:20] 타임스탬프와 핵심 표현을 자유롭게 받아적어 두세요..."
            />
            {noteSavedToast && (
              <p style={{ fontSize: '0.82rem', color: 'var(--ok)', marginTop: '6px', fontWeight: 700 }}>
                ✓ Day {String(dayNumber).padStart(2, '0')} 강의 필기가 안전하게 저장되었습니다.
              </p>
            )}
          </div>

          {/* CUSTOM YOUTUBE URL IMPORTER */}
          <div className="script-panel-card">
            <h3 style={{ fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Link2 size={15} /> 내 유튜브 영어 영상 직접 불러오기
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginTop: '4px' }}>
              공부하고 싶은 미드·TED·영어 강의 유튜브 링크를 붙여넣으면 A–B 구간 반복과 필기장으로 바로 공부할 수 있습니다.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              <input
                id="custom-youtube-url-input"
                type="text"
                className="input-clean"
                style={{ padding: '9px 12px', fontSize: '0.86rem' }}
                value={customUrlInput}
                onChange={(e) => setCustomUrlInput(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
              />
              <button
                id="load-custom-youtube-btn"
                type="button"
                className="btn-solid-brand"
                style={{ padding: '9px 14px', fontSize: '0.84rem', whiteSpace: 'nowrap' }}
                onClick={handleLoadCustomUrl}
              >
                불러오기
              </button>
            </div>
            {customUrlError && (
              <p style={{ fontSize: '0.82rem', color: 'var(--danger)', marginTop: '6px' }}>
                {customUrlError}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* CURATED 40-VIDEO LEVEL-FILTERABLE YOUTUBE LIBRARY */}
      {showLibrary && (
        <div className="yt-library-panel">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <span className="pill-tag pill-brand">검증된 무료 유튜브 영어 강의 40편</span>
              <h3 style={{ fontSize: '1.22rem', marginTop: '6px' }}>
                레벨별(Lv.1 입문 ~ Lv.6 마스터) 추천 교육 영상 라이브러리
              </h3>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`day-switch-chip ${levelFilter === 'all' ? 'active' : ''}`}
                onClick={() => setLevelFilter('all')}
              >
                전체 ({ALL_CURATED_YOUTUBE_VIDEOS.length})
              </button>
              {LEVEL_ORDER.map((lv) => (
                <button
                  key={lv}
                  type="button"
                  className={`day-switch-chip ${levelFilter === lv ? 'active' : ''}`}
                  onClick={() => setLevelFilter(lv)}
                >
                  {LEVEL_INFO_MAP[lv].shortLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="yt-library-grid">
            {filteredLibrary.map((vid) => {
              const isCurrent = vid.videoId === activeVideo.videoId;
              return (
                <button
                  key={vid.videoId}
                  type="button"
                  className={`yt-lib-card ${isCurrent ? 'active' : ''}`}
                  onClick={() => handleSelectLibraryVideo(vid)}
                >
                  <div className="yt-lib-thumb-wrap">
                    <img
                      src={`https://i.ytimg.com/vi/${vid.videoId}/hqdefault.jpg`}
                      alt={vid.title}
                      loading="lazy"
                    />
                    <span className="yt-lib-level-badge">
                      {LEVEL_INFO_MAP[vid.levelTier].shortLabel}
                    </span>
                    <span className="yt-lib-play-icon">
                      <PlayCircle size={26} />
                    </span>
                  </div>
                  <div className="yt-lib-body">
                    <span className="yt-lib-channel">{vid.channel}</span>
                    <strong className="yt-lib-title">{vid.title}</strong>
                    <span className="yt-lib-cat">{vid.categoryKo}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
