'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ShieldCheck,
  BadgeIndianRupee,
  Activity,
  Lock,
  Plus,
  ArrowRight,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { cn } from '@/lib/utils';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Verified, specialist advocates',
    body: 'Every advocate is bar-verified and matched to your specific matter — so you are always represented by genuine, qualified counsel.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Transparent, upfront pricing',
    body: 'Clear, itemised quotes before any work begins. No hidden fees, no surprises — just honest pricing you can plan around.',
  },
  {
    icon: Activity,
    title: 'End-to-end case tracking',
    body: 'Follow your matter from first consultation to final resolution with real-time status updates at every stage.',
  },
  {
    icon: Lock,
    title: 'Confidential & secure',
    body: 'Your details and documents are handled with strict confidentiality and care, at every single step of the journey.',
  },
];

export function WhyChooseUs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-wht-2 px-5 py-20 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <div className="relative">
          {/* decorative orange frame */}
          <div className="absolute -bottom-4 -left-4 -z-0 hidden h-full w-full rounded-[6px] border-2 border-ora/30 lg:block" />
          <div className="relative z-10 overflow-hidden rounded-[6px]">
            <Image
              src="/images/home/why-choose.png"
              alt="Lexakind legal team supporting a client"
              width={1000}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 560px"
              unoptimized
              className="h-[360px] w-full object-cover md:h-[460px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blk/70 via-transparent to-transparent" />
          </div>

          {/* floating stat card */}
          <div className="absolute bottom-5 right-5 z-20 rounded-[4px] bg-blk/90 px-6 py-5 shadow-lg backdrop-blur-sm md:-right-6">
            <p className="font-display text-[36px] font-bold leading-none text-ora">
              <AnimatedCounter value={98} suffix="%" />
            </p>
            <p className="mt-1.5 font-body text-[12px] font-light text-white/70">
              Client satisfaction rate
            </p>
          </div>
        </div>

        {/* Content side */}
        <div>
          <SectionLabel>Why choose us</SectionLabel>
          <h2 className="max-w-[440px] font-display text-[30px] font-semibold leading-[1.15] tracking-tight md:text-[38px]">
            The clarity and care your case deserves
          </h2>
          <p className="mt-4 max-w-[460px] font-body text-[14px] font-light leading-relaxed text-muted">
            We combine a verified advocate network with technology and a
            people-first approach — so quality legal help feels accessible, not
            intimidating.
          </p>

          {/* Accordion */}
          <div className="mt-8 divide-y divide-wht-3 border-y border-wht-3">
            {REASONS.map((r, i) => {
              const isOpen = open === i;
              return (
                <div key={r.title}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 py-4 text-left"
                  >
                    <span
                      className={cn(
                        'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[3px] transition-colors',
                        isOpen ? 'bg-ora text-white' : 'bg-blk text-white',
                      )}
                    >
                      <r.icon size={18} />
                    </span>
                    <span className="flex-1 font-display text-[16px] font-semibold text-blk">
                      {r.title}
                    </span>
                    <Plus
                      size={18}
                      className={cn(
                        'flex-shrink-0 text-ora transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 pl-14 font-body text-[13px] font-light leading-relaxed text-muted">
                          {r.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-ora px-6 py-3.5 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h"
          >
            More about Lexakind
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
