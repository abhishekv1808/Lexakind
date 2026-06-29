'use client';

import { AnimatedCounter } from '@/components/shared/AnimatedCounter';

const STATS = [
  { value: 50, suffix: 'K+', label: 'Consultations delivered' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
  { value: 160, suffix: '+', label: 'Legal services' },
  { value: 4, suffix: 'K+', label: 'Verified advocates' },
];

export function StatsSection() {
  return (
    <section className="bg-blk px-5 md:px-12 py-[72px]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 md:px-8 py-6 md:py-0 text-center first:text-left ${
              i < STATS.length - 1 ? 'lg:border-r lg:border-white/8' : ''
            }`}
          >
            <p className="font-display text-[40px] md:text-[48px] text-white font-bold leading-none">
              <AnimatedCounter value={stat.value} />
              <span className="text-ora">{stat.suffix}</span>
            </p>
            <p className="mt-3 font-body text-[12px] text-[#666] font-light">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
