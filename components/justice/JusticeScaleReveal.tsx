'use client';

import { useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { JusticeCanvasBase } from './JusticeCanvasBase';
import { JUSTICE_BEATS, SCROLL_MULTIPLIER } from '@/lib/justice-content';

// ── Animation helpers ─────────────────────────────────────────
const FADE = 0.07; // 7% of scroll = crossfade window

function getBeatOpacity(progress: number, start: number, end: number): number {
  if (progress <= start || progress >= end) return 0;
  if (progress < start + FADE) return (progress - start) / FADE;
  if (progress > end - FADE) return (end - progress) / FADE;
  return 1;
}

function getBeatTranslateY(
  progress: number,
  start: number,
  end: number,
): number {
  if (progress <= start) return 28;
  if (progress < start + FADE) return 28 - ((progress - start) / FADE) * 28;
  if (progress > end - FADE) return ((progress - (end - FADE)) / FADE) * 28;
  return 0;
}

// Warm glow under the scales during the close-up; fades as the camera pulls back.
function getScalesGlow(progress: number): number {
  return Math.max(0, 1 - progress * 4);
}

// One-line brand statements that float through the empty central space
// as the user scrolls — independent of the beat cards on the left.
// `top`/`left` keep them in the dark band between the card and the statue.
const STATEMENTS: {
  lead: string;
  accent: string;
  top: string;
  left: string;
  start: number;
  end: number;
}[] = [
  { lead: '4,000+ advocates,', accent: 'one standard.', top: '38%', left: '14%', start: 0.02, end: 0.22 },
  { lead: 'Transparent pricing,', accent: 'no surprises.', top: '38%', left: '14%', start: 0.2, end: 0.4 },
  { lead: '160+ legal services,', accent: 'one platform.', top: '38%', left: '14%', start: 0.38, end: 0.58 },
  { lead: 'Pan-India reach,', accent: 'personal care.', top: '38%', left: '14%', start: 0.56, end: 0.76 },
  { lead: 'Matched to an advocate', accent: 'within 24 hours.', top: '38%', left: '14%', start: 0.74, end: 0.98 },
];

export function JusticeScaleReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const progress = useScrollProgress(containerRef);

  const activeBeatIndex = useMemo(() => {
    for (let i = JUSTICE_BEATS.length - 1; i >= 0; i--) {
      if (progress >= JUSTICE_BEATS[i].scrollStart - 0.02) return i;
    }
    return 0;
  }, [progress]);

  const scalesGlow = getScalesGlow(progress);

  // ── Reduced motion fallback ───────────────────────────────
  if (shouldReduce) {
    return (
      <section className="relative h-screen overflow-hidden bg-blk">
        <Image
          src="/frames/justice/frame_192.png"
          alt="Lady Justice — Lexakind"
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(22,22,24,0.97) 0%, rgba(22,22,24,0.88) 32%, rgba(22,22,24,0.45) 60%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-12 max-md:px-5">
          <div className="mb-5 flex items-center gap-2">
            <div className="h-px w-6 bg-ora" />
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-ora">
              Lexakind
            </span>
          </div>
          <h2 className="font-display text-5xl font-bold leading-[1.06] tracking-tight text-white">
            Your case deserves
            <br />
            <span className="italic text-ora">a fighter.</span>
          </h2>
          <Link
            href="/consultation"
            className="mt-8 inline-block w-fit rounded-[3px] bg-ora px-8 py-3.5 font-body text-[13px] font-medium text-white transition-colors duration-200 hover:bg-ora-h"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    );
  }

  // ── Main render ────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      style={{ height: `${(SCROLL_MULTIPLIER + 1) * 100}vh` }}
      className="relative"
    >
      {/* STICKY VIEWPORT — pinned while the user scrolls the outer div */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-blk">
        {/* Full-bleed canvas */}
        <JusticeCanvasBase
          progress={progress}
          className="absolute inset-0 h-full w-full"
          objectPosition="right"
        />

        {/* Left dark zone — keeps the overlaid text readable */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(22,22,24,0.97) 0%, rgba(22,22,24,0.92) 20%, rgba(22,22,24,0.70) 36%, rgba(22,22,24,0.30) 52%, rgba(22,22,24,0.08) 70%, transparent 100%)',
          }}
        />

        {/* Top blend — section above flows in */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28"
          style={{
            background: 'linear-gradient(to bottom, #161618, transparent)',
          }}
        />

        {/* Bottom blend — section below flows in */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{ background: 'linear-gradient(to top, #161618, transparent)' }}
        />

        {/* Outer vignette — cinematic edge darkening */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 85% 85% at 70% 50%, transparent 45%, rgba(22,22,24,0.25) 70%, rgba(22,22,24,0.65) 100%)',
          }}
        />

        {/* Scales glow — warm light during the close-up phase */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: '15%',
            bottom: '20%',
            width: '280px',
            height: '180px',
            background:
              'radial-gradient(ellipse, rgba(255,145,0,0.12), transparent 70%)',
            opacity: scalesGlow,
          }}
        />

        {/* Large decorative beat number */}
        <div
          className="pointer-events-none absolute bottom-8 right-8 select-none font-display text-[180px] font-black leading-none max-md:hidden md:text-[220px]"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,145,0,0.06)',
          }}
        >
          0{activeBeatIndex + 1}
        </div>

        {/* Floating one-line statements — fill the central negative space */}
        <div className="pointer-events-none absolute inset-0 max-md:hidden">
          {STATEMENTS.map((s, i) => {
            const op = getBeatOpacity(progress, s.start, s.end);
            const dy = getBeatTranslateY(progress, s.start, s.end);
            return (
              <div
                key={i}
                className="absolute w-[560px]"
                style={{
                  left: s.left,
                  top: s.top,
                  opacity: op,
                  transform: `translateY(${dy}px)`,
                }}
              >
                <div className="mb-4 h-px w-10 bg-ora" />
                <p
                  className="font-display font-semibold leading-[1.12] tracking-tight text-white/90"
                  style={{ fontSize: 'clamp(34px, 4vw, 58px)' }}
                >
                  {s.lead}{' '}
                  <span className="italic text-ora">{s.accent}</span>
                </p>
              </div>
            );
          })}
        </div>

        {/* Right-edge scroll progress */}
        <div className="pointer-events-none absolute right-5 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2.5 max-md:hidden">
          <div className="relative h-20 w-px overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute left-0 top-0 w-full rounded-full bg-ora"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            {JUSTICE_BEATS.map((beat) => (
              <div
                key={beat.id}
                className="h-1 w-1 rounded-full transition-colors duration-300"
                style={{
                  background:
                    progress >= beat.scrollStart
                      ? '#ff9100'
                      : 'rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </div>

          <span
            className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#3a3a3a]"
            style={{ writingMode: 'vertical-rl' }}
          >
            scroll
          </span>
        </div>

        {/* Scroll hint — visible only at section entry */}
        <div
          className="pointer-events-none absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - progress * 10) }}
        >
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#555]">
            scroll to reveal
          </span>
          <div
            className="h-7 w-px rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #ff9100, transparent)',
            }}
          />
        </div>

        {/* Phase label — top right, changes per phase */}
        <div className="pointer-events-none absolute right-14 top-8 text-right max-md:hidden">
          {JUSTICE_BEATS.map((beat) => {
            const op = getBeatOpacity(
              progress,
              beat.scrollStart,
              beat.scrollEnd,
            );
            return (
              <div
                key={beat.id}
                className="absolute right-0 top-0"
                style={{ opacity: op }}
              >
                <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-[#3a3a3a]">
                  Phase
                </div>
                <div className="font-display text-[11px] font-medium tracking-wide text-[#555]">
                  {beat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
