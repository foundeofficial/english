import { BookOpenCheck, Flame, Home, Layers, PlayCircle, SlidersHorizontal } from 'lucide-react';
import type { LearnerSettings, MainRoute } from '../types/course.ts';

interface TopNavHeaderProps {
  activeRoute: MainRoute;
  onNavigate: (route: MainRoute) => void;
  streakDays: number;
  reviewDueCount: number;
  settings: LearnerSettings;
  onOpenSettings: () => void;
}

const LEVEL_LABELS: Record<LearnerSettings['levelTier'], string> = {
  basic: 'Lv.1 기초 코어',
  standard: 'Lv.2 실전 표준',
  advanced: 'Lv.3 비즈니스 심화'
};

export function TopNavHeader({
  activeRoute,
  onNavigate,
  streakDays,
  reviewDueCount,
  settings,
  onOpenSettings
}: TopNavHeaderProps) {
  const navItems: Array<{
    id: MainRoute;
    label: string;
    shortLabel: string;
    icon: typeof Home;
    badge?: number;
  }> = [
    { id: 'home', label: '오늘의 학습', shortLabel: '홈·로드맵', icon: Home },
    { id: 'lecture', label: '인강 & 1:1 과외', shortLabel: '인강·과외', icon: PlayCircle },
    { id: 'worksheet', label: '학습지 & 시험지', shortLabel: '시험지', icon: BookOpenCheck },
    {
      id: 'vocab-review',
      label: '단어장 & 오답노트',
      shortLabel: '단어·복습',
      icon: Layers,
      badge: reviewDueCount > 0 ? reviewDueCount : undefined
    }
  ];

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
            <div className="streak-badge" title="연속 학습 스트릭">
              <Flame size={15} />
              <span>{streakDays}일 연속</span>
            </div>

            <button
              id="open-learner-settings-btn"
              type="button"
              className="settings-trigger-btn"
              onClick={onOpenSettings}
            >
              <SlidersHorizontal size={15} />
              <span>{LEVEL_LABELS[settings.levelTier]}</span>
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
      </nav>
    </>
  );
}
