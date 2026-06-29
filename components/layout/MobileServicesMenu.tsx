'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { PRACTICE_AREAS, type PracticeArea } from '@/lib/services-data';
import { PA_ICONS } from '@/lib/pa-icons';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileServicesMenu({ open, onClose }: Props) {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<PracticeArea | null>(null);

  // Lock scroll while open; reset to level 1 when closed.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) setSelected(null);
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const slide = (dir: 1 | -1) => ({
    initial: { x: reduce ? 0 : `${dir * 100}%` },
    animate: { x: 0 },
    exit: { x: reduce ? 0 : `${dir * 100}%` },
    transition: { duration: 0.28, ease: [0.22, 0.61, 0.36, 1] as const },
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          data-lenis-prevent
          className="fixed inset-0 z-[300] flex flex-col bg-blk md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Our services"
        >
          {/* Header */}
          <div className="flex h-[60px] flex-shrink-0 items-center justify-between border-b border-white/10 px-5">
            <span className="font-display text-[18px] font-semibold text-white">
              Our Services
            </span>
            <button
              onClick={onClose}
              aria-label="Close services menu"
              className="-mr-2 p-2 text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Sliding panels */}
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence initial={false} mode="popLayout">
              {!selected ? (
                /* LEVEL 1 — practice areas */
                <motion.ul
                  key="level-1"
                  {...slide(-1)}
                  className="absolute inset-0 overflow-y-auto"
                >
                  {PRACTICE_AREAS.map((pa) => {
                    const Icon = PA_ICONS[pa.icon] ?? PA_ICONS.Briefcase;
                    return (
                      <li key={pa.id} className="border-b border-white/[0.06]">
                        <button
                          onClick={() => setSelected(pa)}
                          className="flex min-h-[56px] w-full items-center gap-3.5 px-5 py-3 text-left"
                        >
                          <Icon size={20} className="flex-shrink-0 text-ora" />
                          <span className="flex-1 font-body text-[15px] text-white">
                            {pa.name}
                          </span>
                          <ChevronRight size={18} className="text-muted-2" />
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              ) : (
                /* LEVEL 2 — services for selected PA */
                <motion.div
                  key="level-2"
                  {...slide(1)}
                  className="absolute inset-0 overflow-y-auto"
                >
                  <button
                    onClick={() => setSelected(null)}
                    className="flex min-h-[48px] w-full items-center gap-2 border-b border-white/10 px-5 font-body text-[13px] font-medium text-muted"
                  >
                    <ChevronLeft size={16} />
                    Practice Areas
                  </button>

                  <div className="px-5 py-5">
                    <h3 className="font-display text-[20px] font-semibold text-white">
                      {selected.name}
                    </h3>
                    <p className="mt-1 font-body text-[13px] font-light text-muted">
                      {selected.shortDesc}
                    </p>
                  </div>

                  {selected.groups.map((group) => (
                    <div key={group.groupName} className="px-5 pb-2">
                      <p className="mb-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-ora">
                        {group.groupName}
                      </p>
                      <ul>
                        {group.services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/practice-areas/${selected.slug}#${service.slug}`}
                              onClick={onClose}
                              className="flex min-h-[44px] items-center border-b border-white/[0.04] font-body text-[14px] font-light text-[#bbb] transition-colors active:text-ora"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="px-5 py-6">
                    <Link
                      href={`/practice-areas/${selected.slug}`}
                      onClick={onClose}
                      className="inline-flex w-full items-center justify-center rounded-[3px] bg-ora px-5 py-3.5 font-body text-[14px] font-medium text-white"
                    >
                      View all {selected.name} services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
