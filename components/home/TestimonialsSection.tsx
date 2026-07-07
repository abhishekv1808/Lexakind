'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  matter: string;
  rating: number;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Lexakind made a stressful property dispute genuinely manageable. The advocate was sharp, responsive, and the pricing was clear from day one. I always knew where my case stood.',
    name: 'Rohit Menon',
    role: 'Property owner, Bengaluru',
    matter: 'Property dispute',
    rating: 5,
    image: '/images/testimonials/rohit-menon.png',
  },
  {
    quote:
      'As an NRI, I was anxious about handling an inheritance matter remotely. The case tracking kept me informed at every step and I never had to chase anyone for an update. Highly recommended.',
    name: 'Anita Desai',
    role: 'NRI client, Dubai',
    matter: 'Inheritance (NRI)',
    rating: 5,
    image: '/images/testimonials/anita-desai.png',
  },
  {
    quote:
      'We used Lexakind for our startup incorporation and founder agreements. Professional, fast, and they actually explained the fine print in plain language. It felt like having an in-house counsel.',
    name: 'Karan Shah',
    role: 'Founder, FinTech startup',
    matter: 'Startup incorporation',
    rating: 5,
    image: '/images/testimonials/karan-shah.png',
  },
  {
    quote:
      'My builder delayed possession by two years. Lexakind filed a RERA complaint and won me interest for every month of delay. Their command of the law was genuinely reassuring.',
    name: 'Sneha Reddy',
    role: 'Homebuyer, Bengaluru',
    matter: 'RERA possession delay',
    rating: 5,
    image: '/images/testimonials/sneha-reddy.png',
  },
  {
    quote:
      'A dishonoured cheque had me worried about ever recovering my money. The team moved quickly on the Section 138 notice and the full amount was recovered. Clear, calm and effective.',
    name: 'Imtiaz Ali',
    role: 'Business owner, Bengaluru',
    matter: 'Cheque bounce recovery',
    rating: 5,
    image: '/images/testimonials/imtiaz-ali.png',
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Stars({ count, className }: { count: number; className?: string }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < count ? 'fill-ora text-ora' : 'fill-white/10 text-white/10'}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance, pausing while the user is interacting with the section.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % TESTIMONIALS.length),
      5500,
    );
    return () => clearInterval(id);
  }, [paused]);

  const current = TESTIMONIALS[active];

  return (
    <section
      className="relative overflow-hidden bg-blk px-5 py-[88px] md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient orange glow */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(255,145,0,0.10), transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="max-w-[480px] font-display text-[24px] font-semibold leading-[1.2] tracking-tight text-white md:text-[38px] md:leading-[1.15]">
              Trusted by clients across India
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-[6px] border border-white/10 bg-white/[0.03] px-5 py-3.5">
            <p className="font-display text-[28px] md:text-[34px] font-bold leading-none text-ora">
              4.9
            </p>
            <div>
              <Stars count={5} />
              <p className="mt-1 font-body text-[12px] font-light text-white/55">
                from 2,300+ verified clients
              </p>
            </div>
          </div>
        </div>

        {/* Showcase */}
        <div className="mt-12 grid grid-cols-1 gap-2.5 lg:grid-cols-[1.6fr_1fr]">
          {/* Featured quote */}
          <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-blk-3 p-8 md:p-11">
            <Quote
              size={120}
              className="pointer-events-none absolute -right-3 -top-3 text-white/[0.04]"
              strokeWidth={1}
            />
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-ora via-ora/40 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -14 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Stars count={current.rating} />
                <blockquote className="mt-5 font-display text-[21px] font-medium leading-[1.5] tracking-tight text-white md:text-[26px]">
                  “{current.quote}”
                </blockquote>

                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-ora/50">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-display text-[16px] font-semibold text-white">
                      {current.name}
                    </p>
                    <p className="font-body text-[13px] font-light text-white/55">
                      {current.role}
                    </p>
                  </div>
                  <span className="ml-auto hidden rounded-[3px] border border-ora/30 bg-ora/10 px-3 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.1em] text-ora sm:block">
                    {current.matter}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selectable client list */}
          <div className="flex flex-col gap-2.5">
            {TESTIMONIALS.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    'group flex flex-1 items-center gap-3.5 rounded-[6px] border px-4 py-3 text-left transition-colors duration-200',
                    isActive
                      ? 'border-ora/40 bg-ora/[0.08]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]',
                  )}
                >
                  <div
                    className={cn(
                      'relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full transition-all',
                      isActive
                        ? 'ring-2 ring-ora/60'
                        : 'ring-1 ring-white/15',
                    )}
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        'block truncate font-display text-[14px] font-semibold transition-colors',
                        isActive ? 'text-white' : 'text-white/80',
                      )}
                    >
                      {t.name}
                    </span>
                    <span className="block truncate font-body text-[12px] font-light text-white/45">
                      {t.matter}
                    </span>
                  </span>
                  <span
                    className={cn(
                      'h-6 w-0.5 flex-shrink-0 rounded-full transition-colors',
                      isActive ? 'bg-ora' : 'bg-transparent',
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
