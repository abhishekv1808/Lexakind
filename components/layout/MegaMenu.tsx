'use client';

import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PRACTICE_AREAS, TOTAL_SERVICES } from '@/lib/services-data';
import { PA_ICONS } from '@/lib/pa-icons';
import { cn } from '@/lib/utils';

interface Props {
  activeSlug: string;
  onActiveChange: (slug: string) => void;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function MegaMenu({
  activeSlug,
  onActiveChange,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const reduce = useReducedMotion();
  const active =
    PRACTICE_AREAS.find((pa) => pa.slug === activeSlug) ?? PRACTICE_AREAS[0];
  const ActiveIcon = PA_ICONS[active.icon] ?? PA_ICONS.Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduce ? 0 : -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 right-0 top-full z-[200] hidden md:block"
    >
      <nav
        aria-label="Legal services menu"
        className="border-t border-white/[0.06] bg-blk-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        <div className="mx-auto flex w-full max-w-6xl">
          {/* Left sidebar — practice area tabs */}
          <ul
            role="tablist"
            aria-orientation="vertical"
            className="w-[260px] flex-shrink-0 border-r border-white/[0.06] bg-blk py-5"
          >
            {PRACTICE_AREAS.map((pa) => {
              const Icon = PA_ICONS[pa.icon] ?? PA_ICONS.Briefcase;
              const isActive = pa.slug === active.slug;
              return (
                <li key={pa.id} role="presentation">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`mega-panel-${pa.id}`}
                    id={`mega-tab-${pa.id}`}
                    onMouseEnter={() => onActiveChange(pa.slug)}
                    onFocus={() => onActiveChange(pa.slug)}
                    onClick={() => onActiveChange(pa.slug)}
                    className={cn(
                      'flex w-full items-center gap-3 px-6 py-3 text-left font-body text-[13px] transition-all duration-150',
                      isActive
                        ? 'border-l-2 border-ora bg-ora/10 text-ora'
                        : 'border-l-2 border-transparent text-muted hover:bg-white/[0.04] hover:text-white',
                    )}
                  >
                    <Icon size={16} className={isActive ? 'text-ora' : 'text-muted-2'} />
                    {pa.name}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right panel — services for the active PA */}
          <div className="min-w-0 flex-1">
            <div
              role="tabpanel"
              id={`mega-panel-${active.id}`}
              aria-labelledby={`mega-tab-${active.id}`}
              data-lenis-prevent
              className="mega-scroll max-h-[calc(100vh-160px)] overflow-y-auto px-9 py-7"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: reduce ? 0 : 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduce ? 0 : -8 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                  {/* PA header */}
                  <div className="mb-5 flex items-start gap-3.5 border-b border-white/[0.06] pb-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[4px] bg-ora/10 text-ora">
                      <ActiveIcon size={21} />
                    </span>
                    <div>
                      <h3 className="font-display text-[22px] font-semibold text-white">
                        {active.name}
                      </h3>
                      <p className="mt-1 font-body text-[13px] font-light text-muted">
                        {active.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Groups grid */}
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-x-6 gap-y-7">
                    {active.groups.map((group) => (
                      <div key={group.groupName}>
                        <p className="mb-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-ora">
                          {group.groupName}
                        </p>
                        <ul className="space-y-0.5">
                          {group.services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/practice-areas/${active.slug}#${service.slug}`}
                                onClick={onClose}
                                className="group/svc -mx-2 flex items-start gap-2 rounded-[3px] px-2 py-1.5 transition-colors hover:bg-white/[0.04]"
                              >
                                <ChevronRight
                                  size={13}
                                  className="mt-[3px] flex-shrink-0 text-muted-2 transition-all duration-150 group-hover/svc:translate-x-0.5 group-hover/svc:text-ora"
                                />
                                <span className="min-w-0">
                                  <span className="block font-body text-[13px] font-light text-[#aaa] transition-colors group-hover/svc:text-white">
                                    {service.name}
                                  </span>
                                  <span className="mt-0.5 block font-body text-[11px] leading-snug text-[#666]">
                                    {service.description}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom CTA bar */}
            <div className="flex items-center justify-between border-t border-white/[0.06] bg-black/30 px-9 py-3">
              <span className="font-body text-[13px] text-muted-2">
                Can&apos;t find what you need?
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/practice-areas"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 rounded-[3px] border border-ora/40 px-4 py-2 font-body text-[13px] font-medium text-ora transition-colors hover:bg-ora/10"
                >
                  View all {TOTAL_SERVICES}+ services
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/consultation"
                  onClick={onClose}
                  className="inline-flex items-center rounded-[3px] bg-ora px-4 py-2 font-body text-[13px] font-medium text-white transition-colors hover:bg-ora-h"
                >
                  Book free consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
