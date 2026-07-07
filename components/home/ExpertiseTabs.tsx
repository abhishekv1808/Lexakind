'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { PRACTICE_AREAS } from '@/lib/services-data';
import { PA_ICONS } from '@/lib/pa-icons';
import { cn } from '@/lib/utils';

// Featured subset for the explorer
const FEATURED = [
  'corporate-law',
  'family-law',
  'property-law',
  'criminal-law',
  'civil-litigation',
]
  .map((slug) => PRACTICE_AREAS.find((p) => p.slug === slug))
  .filter((p): p is (typeof PRACTICE_AREAS)[number] => Boolean(p));

export function ExpertiseTabs() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(FEATURED[0].slug);
  const area = FEATURED.find((a) => a.slug === active) ?? FEATURED[0];
  const Icon = PA_ICONS[area.icon] ?? PA_ICONS.Briefcase;

  // Top services across the area's groups (up to 6)
  const topServices = area.groups
    .flatMap((g) => g.services)
    .slice(0, 6);

  return (
    <section className="bg-white px-5 py-20 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <RevealHeader />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-wht-3 bg-wht-3 lg:grid-cols-[280px_1fr]">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Areas of expertise"
            className="flex gap-px overflow-x-auto bg-wht-3 lg:flex-col lg:overflow-visible"
          >
            {FEATURED.map((a) => {
              const TabIcon = PA_ICONS[a.icon] ?? PA_ICONS.Briefcase;
              const isActive = a.slug === active;
              return (
                <button
                  key={a.slug}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(a.slug)}
                  onMouseEnter={() => setActive(a.slug)}
                  className={cn(
                    'flex min-w-[180px] flex-1 items-center gap-3 px-6 py-5 text-left font-body text-[14px] font-medium transition-colors lg:min-w-0',
                    isActive
                      ? 'bg-blk text-white'
                      : 'bg-white text-blk hover:bg-wht-2',
                  )}
                >
                  <TabIcon
                    size={18}
                    className={isActive ? 'text-ora' : 'text-muted-2'}
                  />
                  {a.name}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="bg-white p-8 md:p-10" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, x: reduce ? 0 : 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduce ? 0 : -12 }}
                transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[4px] bg-ora/10 text-ora">
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3 className="font-display text-[24px] font-semibold leading-tight tracking-tight">
                      {area.name}
                    </h3>
                    <p className="mt-1 font-body text-[13px] font-light text-muted">
                      {area.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {topServices.map((s) => (
                    <div key={s.slug} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-ora/10 text-ora">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-body text-[13px] font-normal text-blk">
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-[3px] border border-wht-3 px-5 py-3 font-body text-[13px] font-medium text-blk transition-colors hover:border-ora hover:text-ora"
                >
                  Explore {area.name}
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <SectionLabel>Areas of expertise</SectionLabel>
        <h2 className="max-w-[520px] font-display text-[24px] font-semibold leading-[1.2] tracking-tight md:text-[38px] md:leading-[1.15]">
          Specialist counsel, whatever your matter
        </h2>
      </div>
      <Link
        href="/practice-areas"
        className="inline-flex flex-shrink-0 items-center gap-1.5 font-body text-[13px] font-medium text-ora"
      >
        View all practice areas
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
