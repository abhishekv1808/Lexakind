'use client';

import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { PRACTICE_AREAS, TOTAL_SERVICES } from '@/lib/services-data';
import { PA_ICONS } from '@/lib/pa-icons';
import { hasServicePage } from '@/lib/service-content';
import { cn } from '@/lib/utils';

interface Props {
  activeSlug: string;
  onActiveChange: (slug: string) => void;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

/** Show at most this many services per group; the rest collapse to "+N more". */
const GROUP_CAP = 7;

function serviceCount(pa: (typeof PRACTICE_AREAS)[number]) {
  return pa.groups.reduce((sum, g) => sum + g.services.length, 0);
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
      // pt-2 keeps the hover bridge between the nav link and the panel alive.
      className="absolute left-0 right-0 top-full z-[200] hidden px-5 pt-2 md:block lg:px-12"
    >
      <nav
        aria-label="Legal services menu"
        className="mx-auto w-full max-w-7xl overflow-hidden rounded-[8px] border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
        style={{
          background:
            'radial-gradient(120% 140% at 85% 0%, #1d1d21 0%, #131315 55%)',
        }}
      >
        <div className="flex">
          {/* Left sidebar — practice area tabs */}
          <ul
            role="tablist"
            aria-orientation="vertical"
            className="w-[264px] flex-shrink-0 border-r border-white/[0.06] bg-black/25 py-4"
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
                      'group/tab flex w-full items-center gap-3 border-l-2 px-5 py-2.5 text-left font-body text-[13px] transition-colors duration-150',
                      isActive
                        ? 'border-ora bg-gradient-to-r from-ora/[0.14] to-transparent text-white'
                        : 'border-transparent text-muted hover:bg-white/[0.03] hover:text-white',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-[3px] transition-colors duration-150',
                        isActive
                          ? 'bg-ora text-white'
                          : 'bg-white/[0.05] text-muted-2 group-hover/tab:text-white',
                      )}
                    >
                      <Icon size={14} />
                    </span>
                    <span className="min-w-0 flex-1 truncate">{pa.name}</span>
                    <span
                      className={cn(
                        'font-mono text-[10px] tabular-nums transition-colors',
                        isActive ? 'text-ora' : 'text-[#555]',
                      )}
                    >
                      {serviceCount(pa)}
                    </span>
                    <ChevronRight
                      size={13}
                      className={cn(
                        'flex-shrink-0 transition-all duration-150',
                        isActive
                          ? 'translate-x-0 text-ora opacity-100'
                          : '-translate-x-1 opacity-0',
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right panel — services for the active PA */}
          <div className="flex min-w-0 flex-1 flex-col">
            <div
              role="tabpanel"
              id={`mega-panel-${active.id}`}
              aria-labelledby={`mega-tab-${active.id}`}
              data-lenis-prevent
              className="mega-scroll max-h-[min(560px,calc(100vh-200px))] flex-1 overflow-y-auto px-8 py-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: reduce ? 0 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduce ? 0 : -10 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                >
                  {/* PA header */}
                  <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[4px] bg-ora/10 text-ora">
                        <ActiveIcon size={21} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="truncate font-display text-[20px] font-semibold leading-tight text-white">
                          {active.name}
                        </h3>
                        <p className="mt-0.5 truncate font-body text-[12px] font-light text-muted">
                          {active.shortDesc}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/practice-areas/${active.slug}`}
                      onClick={onClose}
                      className="group/explore inline-flex flex-shrink-0 items-center gap-1.5 rounded-[3px] border border-white/15 px-4 py-2 font-body text-[12px] font-medium text-white transition-colors hover:border-ora hover:text-ora"
                    >
                      Explore {active.name}
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-150 group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  {/* Groups grid — single-line links, capped per group */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6 xl:grid-cols-3">
                    {active.groups.map((group) => {
                      const visible = group.services.slice(0, GROUP_CAP);
                      const hidden = group.services.length - visible.length;
                      return (
                        <div key={group.groupName} className="min-w-0">
                          <p className="mb-2.5 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-ora">
                            {group.groupName}
                            <span className="h-px flex-1 bg-white/[0.07]" />
                          </p>
                          <ul className="space-y-px">
                            {visible.map((service) => {
                              const detail = hasServicePage(
                                active.slug,
                                service.slug,
                              );
                              return (
                                <li key={service.slug}>
                                  <Link
                                    href={
                                      detail
                                        ? `/practice-areas/${active.slug}/${service.slug}`
                                        : `/practice-areas/${active.slug}#${service.slug}`
                                    }
                                    onClick={onClose}
                                    title={service.description}
                                    className="group/svc -mx-2 flex items-center gap-2 rounded-[3px] px-2 py-[7px] transition-colors hover:bg-white/[0.05]"
                                  >
                                    <span
                                      className={cn(
                                        'h-1 w-1 flex-shrink-0 rounded-full transition-colors',
                                        detail
                                          ? 'bg-ora'
                                          : 'bg-[#4a4a4e] group-hover/svc:bg-ora',
                                      )}
                                    />
                                    <span className="min-w-0 truncate font-body text-[13px] font-light text-[#b4b4ba] transition-colors group-hover/svc:text-white">
                                      {service.name}
                                    </span>
                                    <ArrowUpRight
                                      size={12}
                                      className="ml-auto flex-shrink-0 -translate-x-1 text-ora opacity-0 transition-all duration-150 group-hover/svc:translate-x-0 group-hover/svc:opacity-100"
                                    />
                                  </Link>
                                </li>
                              );
                            })}
                            {hidden > 0 && (
                              <li>
                                <Link
                                  href={`/practice-areas/${active.slug}`}
                                  onClick={onClose}
                                  className="-mx-2 flex items-center gap-2 rounded-[3px] px-2 py-[7px] font-body text-[12px] font-medium text-ora/80 transition-colors hover:bg-white/[0.05] hover:text-ora"
                                >
                                  <span className="h-1 w-1 flex-shrink-0" />+
                                  {hidden} more {group.groupName.toLowerCase()}{' '}
                                  services
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom CTA bar */}
            <div className="flex items-center justify-between gap-4 border-t border-white/[0.06] bg-black/30 px-8 py-3">
              <span className="hidden font-body text-[12px] text-muted-2 lg:block">
                <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-ora align-middle" />
                Free first consultation · matched with an advocate within 24
                hours
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/practice-areas"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 rounded-[3px] border border-ora/40 px-4 py-2 font-body text-[12px] font-medium text-ora transition-colors hover:bg-ora/10"
                >
                  View all {TOTAL_SERVICES}+ services
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/consultation"
                  onClick={onClose}
                  className="inline-flex items-center rounded-[3px] bg-ora px-4 py-2 font-body text-[12px] font-medium text-white transition-colors hover:bg-ora-h"
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
