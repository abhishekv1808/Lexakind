'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Scale,
  MapPin,
  Briefcase,
  ArrowUpRight,
  MousePointerClick,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { TEAM } from '@/lib/team';
import { cn } from '@/lib/utils';

export function TeamSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-wht-2 px-5 py-20 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="max-w-[520px] font-display text-[30px] font-semibold leading-[1.15] tracking-tight md:text-[38px]">
              Meet the advocates behind Lexakind
            </h2>
          </div>
          <p className="hidden items-center gap-2 font-body text-[12px] font-medium uppercase tracking-[0.14em] text-muted-2 md:flex">
            <MousePointerClick size={14} className="text-ora" />
            Hover to explore
          </p>
        </RevealOnScroll>

        {/* Expanding panels (desktop) → stacked cards (mobile) */}
        <RevealOnScroll
          delay={0.1}
          className="mt-12 flex flex-col gap-3 md:h-[460px] md:flex-row md:gap-2.5"
        >
          {TEAM.map((adv, i) => {
            const isActive = i === active;
            return (
              <div
                key={adv.id}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  'group relative h-[360px] overflow-hidden rounded-[6px] bg-blk text-left transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] md:h-auto',
                  isActive ? 'md:flex-[3.4]' : 'md:flex-[1]',
                )}
              >
                {/* Portrait or monogram fallback */}
                {adv.image ? (
                  <Image
                    src={adv.image}
                    alt={adv.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blk-3 via-blk to-[#0e0e10]">
                    <Scale
                      size={120}
                      className="absolute -right-4 top-6 text-white/[0.04]"
                      strokeWidth={1}
                    />
                    <span className="absolute bottom-24 right-5 font-display text-[110px] font-bold leading-none text-white/[0.06] md:bottom-28">
                      {adv.initials}
                    </span>
                  </div>
                )}

                {/* Readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Active accent bar */}
                <div
                  className={cn(
                    'absolute inset-x-0 top-0 h-0.5 origin-left bg-ora transition-transform duration-500',
                    isActive ? 'scale-x-100' : 'scale-x-0',
                  )}
                />

                {/* Index + collapsed vertical name (desktop, collapsed only) */}
                <div
                  className={cn(
                    'absolute inset-0 hidden flex-col items-center justify-between py-6 transition-opacity duration-300 md:flex',
                    isActive ? 'pointer-events-none opacity-0' : 'opacity-100',
                  )}
                >
                  <span className="font-mono text-[11px] tracking-widest text-white/40">
                    0{i + 1}
                  </span>
                  <span
                    className="font-display text-[15px] font-semibold tracking-wide text-white/90"
                    style={{ writingMode: 'vertical-rl', rotate: '180deg' }}
                  >
                    {adv.name.replace('Adv. ', '')}
                  </span>
                  <span className="h-8 w-px bg-white/20" />
                </div>

                {/* Expanded details (active on desktop; always shown on mobile) */}
                <div
                  className={cn(
                    'absolute inset-x-0 bottom-0 p-6 transition-all duration-500 md:p-7',
                    'max-md:translate-y-0 max-md:opacity-100',
                    isActive
                      ? 'md:translate-y-0 md:opacity-100'
                      : 'md:pointer-events-none md:translate-y-4 md:opacity-0',
                  )}
                >
                  <p className="mb-2 font-body text-[11px] font-medium uppercase tracking-[0.16em] text-ora">
                    {adv.role}
                  </p>
                  <h3 className="font-display text-[24px] font-semibold leading-tight tracking-tight text-white">
                    {adv.name}
                  </h3>

                  {/* Meta row */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-body text-[12px] text-white/70">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={13} className="text-ora" />
                      {adv.experience}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Scale size={13} className="text-ora" />
                      {adv.cases}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-ora" />
                      {adv.location}
                    </span>
                  </div>

                  {/* Specialties */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {adv.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-[3px] border border-white/12 bg-white/[0.06] px-2.5 py-1 font-body text-[11px] font-light text-white/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 max-w-[460px] font-body text-[13px] font-light leading-relaxed text-white/65">
                    {adv.bio}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link
                      href="/consultation"
                      className="inline-flex items-center gap-1.5 rounded-[3px] bg-ora px-5 py-2.5 font-body text-[13px] font-medium text-white transition-colors hover:bg-ora-h"
                    >
                      Book a consultation
                      <ArrowUpRight size={14} />
                    </Link>
                    <span className="font-body text-[12px] font-light text-white/45">
                      Speaks {adv.languages.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
