import {
  BookOpenCheck,
  Flame,
  Home,
  Layers,
  PlayCircle,
  Search,
  SlidersHorizontal
} from 'lucide-react';
import { LEVEL_INFO_MAP } from '../data/levels.ts';
import type { LearnerSettings, MainRoute } from '../types/course.ts';

interface TopNavHeaderProps {
  activeRoute: MainRoute;
  onNavigate: (route: MainRoute) => void;
  streakDays: number;
  reviewDueCount: number;
  settings: LearnerSettings;
  onOpenSettings: () => void;
  onOpenDictionary: (word?: string) => void;
}

export function TopNavHeader({
  activeRoute,
  onNavigate,
  streakDays,
  reviewDueCount,
  settings,
  onOpenSettings,
  onOpenDictionary
}: TopNavHeaderProps) {
  const navItems: Array<{
    id: MainRoute;
    label: string;
    shortLabel: string;
    icon: typeof Home;
    badge?: number;
  }> = [
    { id: 'home', label: '30일 로드맵', shortLabel: '홈·30일', icon: Home },
    { id: 'lecture', label: '유튜브·인강', shortLabel: '영상·인강', icon: PlayCircle },
    { id: 'worksheet', label: '학습지·시험지', shortLabel: '시험지', icon: BookOpenCheck },
    {
      id: 'vocab-review',
      label: '단어·오답노트',
      shortLabel: '단어·복습',
      icon: Layers,
      badge: reviewDueCount > 0 ? reviewDueCount : undefined
    }
  ];

  const levelMeta = LEVEL_INFO_MAP[settings.levelTier];

  return (
    <>
      <header className="top-bar no-print">
        <div className="top-bar-inner">
          <button
            id="nav-brand-home-btn"
            type="button"
            className="brand-btn"
            onClick={() => onNavigate('home')}
          >
            <span className="brand-logo">KB</span>
            <span>
              <span className="brand-text-main">KoreBridge</span>
            </span>
          </button>

          <nav className="main-nav-tabs" aria-label="주요 학습 메뉴">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute === item.id;
              return (
                <button
                  key={item.id}
                  id={`top-nav-${item.id}`}
                  type="button"
                  className={`main-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="nav-count-pill">{item.badge}</span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="header-right-actions">
            <button
              id="open-dictionary-header-btn"
              type="button"
              className="dict-trigger-btn"
              onClick={() => onOpenDictionary('')}
              title="실시간 영한·영영 영어사전 열기 (단축키 /)"
            >
              <Search size={15} />
              <span>영한사전</span>
              <kbd className="kbd-hint">/</kbd>
            </button>

            <div className="streak-badge" title="연속 학습 스트릭">
              <Flame size={15} />
              <span>{streakDays}일</span>
            </div>

            <button
              id="open-learner-settings-btn"
              type="button"
              className="settings-trigger-btn"
              onClick={onOpenSettings}
              title="레벨(Lv.1~6) 및 학습 환경 변경"
            >
              <SlidersHorizontal size={15} />
              <span>{levelMeta.shortLabel}</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="mobile-tab-bar no-print" aria-label="모바일 하단 메뉴">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeRoute === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              type="button"
              className={`mobile-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <Icon size={19} />
              <span>{item.shortLabel}</span>
            </button>
          );
        })}
        <button
          id="mobile-nav-dictionary"
          type="button"
          className="mobile-tab-btn"
          onClick={() => onOpenDictionary('')}
        >
          <Search size={19} />
          <span>영한사전</span>
        </button>
      </nav>
    </>
  );
}
