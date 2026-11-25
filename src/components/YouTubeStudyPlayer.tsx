import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Film,
  Link2,
  PlayCircle,
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

function formatSeconds(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
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

  // Library drawer / Custom YouTube URL importer
  const [showLibrary, setShowLibrary] = useState(false);
  const [levelFilter, setLevelFilter] = useState<'all' | LevelTier>('all');
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [customUrlError, setCustomUrlError] = useState<string | null>(null);

  const handleJumpTimestamp = (sec: number) => {
    setStartSec(sec);
    setEmbedNonce((n) => n + 1);
  };

  const handleSelectLibraryVideo = (vid: YouTubeLessonVideo) => {
    setActiveVideo(vid);
    setStartSec(0);
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
        '직접 가져온 영어 유튜브 영상을 KoreBridge 스튜디오에서 재생하며 우측 필기장과 실시간 영한사전으로 함께 공부하세요.',
      chapters: [
        { labelKo: '처음부터 재생 (00:00)', startSec: 0, focusExpression: 'Active Listening' },
        { labelKo: '1분 구간부터 (01:00)', startSec: 60, focusExpression: 'Shadowing Practice' },
        { labelKo: '3분 구간부터 (03:00)', startSec: 180, focusExpression: 'Key Expressions' }
      ],
      studyMissionKo: [
        '들리는 핵심 문장을 3개 이상 아래 노트에 받아적어 보세요.',
        '모르는 단어는 우측 [영한사전 열기] 버튼으로 바로 검색해 내 단어장에 저장하세요.'
      ]
    });
    setStartSec(0);
    setEmbedNonce((n) => n + 1);
    setCustomUrlInput('');
  };

  const embedUrl = `https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?start=${startSec}&rel=0&modestbranding=1`;

  const filteredLibrary = ALL_CURATED_YOUTUBE_VIDEOS.filter((v) =>
    levelFilter === 'all' ? true : v.levelTier === levelFilter
  );

  return (
    <section className="yt-studio-wrapper" aria-label="유튜브 실전 영어 영상 강의">
      <div className="lecture-two-col">
        {/* LEFT: REAL EMBEDDED YOUTUBE PLAYER + CHAPTERS */}
        <div className="yt-player-card">
          <div className="yt-iframe-box">
            <iframe
              key={`${activeVideo.videoId}-${startSec}-${embedNonce}`}
              src={embedUrl}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

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
                href={`https://www.youtube.com/watch?v=${activeVideo.videoId}&t=${startSec}s`}
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
                  <Clock size={15} /> 핵심 구간 점프 (클릭 시 해당 시점으로 이동)
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

        {/* RIGHT: ACTIVE STUDY MISSION + SIDE-BY-SIDE NOTES + DICTIONARY */}
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
                style={{ flex: 1, fontSize: '0.86rem', padding: '9px 12px' }}
                onClick={() => onOpenDictionary('')}
              >
                <Search size={15} /> 모르는 단어 영한사전 검색
              </button>
              <button
                id="yt-toggle-library-btn"
                type="button"
                className="btn-solid-coral"
                style={{ flex: 1, fontSize: '0.86rem', padding: '9px 12px' }}
                onClick={() => setShowLibrary((v) => !v)}
              >
                <Film size={15} /> {showLibrary ? '영상 라이브러리 닫기' : '레벨별 40편 영상관 열기'}
              </button>
            </div>
          </div>

          {/* SIDE-BY-SIDE VIDEO STUDY NOTE */}
          <div className="script-panel-card">
            <div className="section-label-between" style={{ marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.05rem' }}>
                Day {String(dayNumber).padStart(2, '0')} 영상 필기 &amp; 표현 받아쓰기
              </h3>
              <button
                id="yt-save-note-btn"
                type="button"
                className="btn-outline"
                style={{ padding: '6px 12px', fontSize: '0.82rem' }}
                onClick={() => {
                  onSaveNote(noteDraft);
                  setNoteSavedToast(true);
                  window.setTimeout(() => setNoteSavedToast(false), 2000);
                }}
              >
                필기 저장
              </button>
            </div>
            <textarea
              id="yt-note-textarea"
              className="note-textarea"
              rows={5}
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              placeholder="영상을 보며 귀에 꽂힌 원어민 문장, 쉐도잉할 타임스탬프, 헷갈리는 발음을 자유롭게 적어 두세요..."
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
              공부하고 싶은 미드·TED·영어 강의 유튜브 링크를 붙여넣으면 여기서 바로 재생하며 필기할 수 있습니다.
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
