/**
 * Studio-grade zero-dependency Web Audio API harmonic sound effects engine.
 * Synthesizes warm marimba/kalimba chimes, ascending combo notes, gentle miss
 * feedback, and completion fanfares while respecting global silentMode.
 */

let sharedCtx: AudioContext | null = null;
let globalMuted = false;

export function setSoundFxMuted(muted: boolean): void {
  globalMuted = muted;
}

function getAudioCtx(): AudioContext | null {
  if (globalMuted || typeof window === 'undefined') return null;
  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  try {
    if (!sharedCtx) sharedCtx = new Ctor();
    if (sharedCtx.state === 'suspended') {
      void sharedCtx.resume().catch(() => {});
    }
    return sharedCtx;
  } catch {
    return null;
  }
}

function playTone(
  ctx: AudioContext,
  freq: number,
  startOffsetSec: number,
  durationSec: number,
  peakGain: number,
  type: OscillatorType = 'sine'
): void {
  const now = ctx.currentTime + startOffsetSec;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(peakGain, now + 0.014);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + durationSec + 0.02);
}

/** Crisp warm marimba 2-note chime for correct answers */
export function playCorrectChime(): void {
  const ctx = getAudioCtx();
  if (!ctx) return;
  playTone(ctx, 587.33, 0, 0.16, 0.12, 'triangle'); // D5
  playTone(ctx, 880.0, 0.08, 0.28, 0.14, 'sine'); // A5
}

/** Ascending pentatonic chime that rises with consecutive streak combo */
export function playComboChime(combo: number): void {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const scale = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66];
  const idx = Math.min(scale.length - 1, Math.max(0, combo - 1));
  const root = scale[idx];
  playTone(ctx, root, 0, 0.15, 0.11, 'triangle');
  playTone(ctx, root * 1.25, 0.07, 0.24, 0.13, 'sine');
}

/** Soft encouraging wooden bump on miss (never harsh buzzer) */
export function playSoftMiss(): void {
  const ctx = getAudioCtx();
  if (!ctx) return;
  playTone(ctx, 260, 0, 0.12, 0.09, 'triangle');
  playTone(ctx, 205, 0.09, 0.18, 0.08, 'sine');
}

/** Uplifting 4-note major-9th completion fanfare */
export function playFanfare(): void {
  const ctx = getAudioCtx();
  if (!ctx) return;
  playTone(ctx, 523.25, 0, 0.22, 0.11, 'triangle'); // C5
  playTone(ctx, 659.25, 0.1, 0.24, 0.11, 'triangle'); // E5
  playTone(ctx, 783.99, 0.2, 0.28, 0.12, 'sine'); // G5
  playTone(ctx, 1046.5, 0.3, 0.55, 0.15, 'sine'); // C6
  playTone(ctx, 1174.66, 0.34, 0.45, 0.06, 'sine'); // D6 sparkle
}

/** Subtle crisp click/tick for reflex countdown or phonics tile tap */
export function playTick(pitchHz = 740): void {
  const ctx = getAudioCtx();
  if (!ctx) return;
  playTone(ctx, pitchHz, 0, 0.055, 0.06, 'sine');
}
