import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import type {
  DailyCapacity,
  DifficultyOffset,
  KoreanScaffold,
  LearnerCalibration,
  PedagogyStyle
} from '../types/learning';

interface CalibrationBarProps {
  calibration: LearnerCalibration;
  onChange: (next: Partial<LearnerCalibration>) => void;
}

export const CalibrationBar: React.FC<CalibrationBarProps> = ({
  calibration,
  onChange
}) => {
  const effectiveLevel = Math.min(
    12,
    Math.max(1, calibration.baseKLevel + calibration.difficultyOffset)
  );

  return (
    <section
      className="calibration-bar no-print"
      aria-label="내 수준 및 학습능력 실시간 조절 패널"
    >
      <div className="calibration-bar-top">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span className="tag tag-forest">
            <SlidersHorizontal size={13} /> 내 수준 × 학습능력 맞춤 이퀄라이저
          </span>
          <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>
            현재 적용 레벨: K-Lv.{effectiveLevel} / 12
          </span>
          <span style={{ fontSize: '0.79rem', color: 'var(--ink-muted)' }}>
            (조절 즉시 지문 어휘 난이도·문장 구조 해설·일일 학습량에 반영됩니다)
          </span>
        </div>
      </div>

      <div className="calibration-controls-grid">
        {/* 1. Difficulty Offset */}
        <div className="calib-group">
          <span className="calib-label">1. 체감 난이도 조절</span>
          <div className="calib-seg">
            {(
              [
                { val: -1 as DifficultyOffset, text: '쉽게 (-1)' },
                { val: 0 as DifficultyOffset, text: '적정 수준' },
                { val: 1 as DifficultyOffset, text: '도전 (+1)' }
              ]
            ).map((opt) => (
              <button
                key={opt.val}
                id={`calib-diff-${opt.val}`}
                type="button"
                className={`calib-seg-btn ${calibration.difficultyOffset === opt.val ? 'active' : ''}`}
                onClick={() => onChange({ difficultyOffset: opt.val })}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Pedagogical Style */}
        <div className="calib-group">
          <span className="calib-label">2. 선호 학습 방식</span>
          <div className="calib-seg">
            {(
              [
                { val: 'deductive-grammar' as PedagogyStyle, text: '학원 원리·구문파' },
                { val: 'inductive-speaking' as PedagogyStyle, text: '실전 상황·회화파' }
              ]
            ).map((opt) => (
              <button
                key={opt.val}
                id={`calib-style-${opt.val}`}
                type="button"
                className={`calib-seg-btn ${calibration.pedagogyStyle === opt.val ? 'active' : ''}`}
                onClick={() => onChange({ pedagogyStyle: opt.val })}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Daily Learning Capacity */}
        <div className="calib-group">
          <span className="calib-label">3. 하루 소화 용량</span>
          <div className="calib-seg">
            {(
              [
                { val: 5 as DailyCapacity, text: '5문장 가볍게' },
                { val: 10 as DailyCapacity, text: '10문장 표준' },
                { val: 20 as DailyCapacity, text: '20문장 스파르타' }
              ]
            ).map((opt) => (
              <button
                key={opt.val}
                id={`calib-cap-${opt.val}`}
                type="button"
                className={`calib-seg-btn ${calibration.dailyCapacity === opt.val ? 'active' : ''}`}
                onClick={() => onChange({ dailyCapacity: opt.val })}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Korean Scaffolding Ratio */}
        <div className="calib-group">
          <span className="calib-label">4. 한국어 해설 개입도</span>
          <div className="calib-seg">
            {(
              [
                { val: 'high' as KoreanScaffold, text: '친절한 한영' },
                { val: 'balanced' as KoreanScaffold, text: '균형 보조' },
                { val: 'immersion' as KoreanScaffold, text: '100% 영어몰입' }
              ]
            ).map((opt) => (
              <button
                key={opt.val}
                id={`calib-ko-${opt.val}`}
                type="button"
                className={`calib-seg-btn ${calibration.koreanScaffold === opt.val ? 'active' : ''}`}
                onClick={() => onChange({ koreanScaffold: opt.val })}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
