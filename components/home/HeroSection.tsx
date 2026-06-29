'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

/** Bottom service strip (full-width row, like the reference) */
const SERVICES = [
  'Contract Case Handling',
  'Strategic Legal Advisory',
  'Tailored Legal Solutions',
  'Court-Prepared Documentation',
];

/** Overlapping client avatars — initials placeholders until photos are added */
const CLIENTS = [
  { initials: 'RM', tone: 'bg-[#3a3a40]' },
  { initials: 'AD', tone: 'bg-[#4a4a52]' },
  { initials: 'KS', tone: 'bg-ora' },
];

const ease = [0.22, 0.61, 0.36, 1] as const;

// Hero media assets. Drop the optimized clip at /public/videos/hero-lawyer.mp4.
// Until it exists, the poster (your existing cut-out) shows — so the hero looks
// identical to now and degrades gracefully.
const POSTER = '/images/hero-advocate.png';
const VIDEO_MP4 = '/videos/hero-lawyer.mp4';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Subtle scroll-zoom on the media — scaling never reveals edges (unlike translate).
  const mediaScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [1, 1.08],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ['0%', '0%'] : ['0%', '14%'],
  );
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mount = (delay: number) => ({
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.65, delay, ease },
  });

  // Track viewport so we can skip the video on mobile (bandwidth) and show the poster.
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Render video only on desktop with motion allowed; otherwise the static poster.
  const showVideo = !reduce && !isMobile;

  // Play once on mount, then freeze on the last frame.
  useEffect(() => {
    if (!showVideo) return;
    const video = videoRef.current;
    if (!video) return;

    try {
      video.currentTime = 0;
    } catch {
      /* ignore — metadata may not be ready yet */
    }

    const handleEnded = () => {
      if (isFinite(video.duration) && video.duration > 0) {
        video.currentTime = Math.max(0, video.duration - 0.05);
      }
      video.pause();
    };

    // Autoplay may be blocked until metadata loads or by policy — catch silently.
    video.play().catch(() => {});

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [showVideo]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[700px] flex-col overflow-hidden md:min-h-[760px] lg:min-h-[820px]"
    >
      {/* Dark background — subtle radial lift behind the figure */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(115% 90% at 50% 14%, #2a2a30 0%, #1a1a1e 46%, #101012 100%)',
        }}
      />

      {/* Foreground media — fills the whole hero (cover).
          Video plays once and freezes; falls back to the poster image. */}
      <motion.div
        style={{ scale: mediaScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease }}
        className="pointer-events-none absolute inset-0"
      >
        {showVideo ? (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            poster={POSTER}
            aria-hidden="true"
            className="h-full w-full object-cover object-[50%_10%]"
          >
            <source src={VIDEO_MP4} type="video/mp4" />
            {/* Optional: <source src="/videos/hero-lawyer.webm" type="video/webm" /> */}
          </video>
        ) : (
          <Image
            src={POSTER}
            alt="Lexakind verified legal counsel"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_10%]"
          />
        )}
      </motion.div>

      {/* Legibility gradients */}
      {/* Left fade — darkens the content side so the heading stays readable,
          but clears quickly so the subject stays bright and sharp */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #0e0e10 0%, rgba(14,14,16,0.78) 22%, rgba(14,14,16,0.3) 46%, transparent 70%)',
        }}
      />
      {/* Bottom fade — blends into the trust bar below */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0e0e10] to-transparent" />
      {/* Top fade — keeps the transparent navbar legible */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0e0e10]/40 to-transparent" />

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 flex flex-1 flex-col px-5 pt-[92px] md:px-12 md:pt-[108px]"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
          {/* Main overlay block — pinned to the bottom-left, clients badge to the right */}
          <div className="flex flex-1 items-end pb-8">
            <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              {/* Bottom-left content */}
              <div className="max-w-[720px]">
                <motion.div {...mount(0.1)}>
                  <span className="inline-flex items-center rounded-[4px] bg-white/10 px-4 py-2 font-body text-[14px] font-medium tracking-[0.01em] text-white backdrop-blur-sm">
                    Welcome to Lexakind
                  </span>
                </motion.div>

                <motion.h1
                  {...mount(0.25)}
                  className="mt-6 font-display text-[34px] font-medium leading-[1.15] tracking-tight text-white md:text-[46px] lg:text-[56px]"
                >
                  Transforming Equity With
                  <br />
                  Precision And Clarity
                </motion.h1>

                <motion.p
                  {...mount(0.45)}
                  className="mt-6 max-w-[660px] font-body text-[16px] font-normal leading-[1.7] text-[#adadb4]"
                >
                  We provide trusted legal representation with a strategic
                  approach, delivering clear guidance, strong advocacy, and
                  reliable solutions for individuals and businesses seeking
                  justice, protection, and long-term legal confidence.
                </motion.p>
              </div>

              {/* Satisfied clients badge */}
              <motion.div
                {...mount(0.6)}
                className="flex items-center gap-4 lg:pb-1.5"
              >
                <div className="text-left lg:text-right">
                  <p className="font-display text-[32px] font-bold leading-none text-white">
                    4000+
                  </p>
                  <p className="mt-1 font-body text-[14px] font-normal text-[#adadb4]">
                    Satisfied Clients
                  </p>
                </div>
                <div className="flex -space-x-3">
                  {CLIENTS.map((c) => (
                    <div
                      key={c.initials}
                      className={`flex h-11 w-11 items-center justify-center rounded-full ring-2 ring-white/25 ${c.tone} font-body text-[12px] font-medium text-white`}
                    >
                      {c.initials}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Full-width service strip */}
          <motion.div
            {...mount(0.75)}
            className="grid grid-cols-2 gap-y-5 py-7 md:grid-cols-4"
          >
            {SERVICES.map((service) => (
              <span
                key={service}
                className="font-body text-[16px] font-semibold text-white md:text-[17px]"
              >
                {service}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
