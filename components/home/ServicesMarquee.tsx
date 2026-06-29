import { PRACTICE_AREAS } from '@/lib/services-data';

// Service labels that scroll across the ticker.
const ITEMS = PRACTICE_AREAS.map((pa) => pa.name);

/**
 * Auto-scrolling horizontal ticker of the services we provide.
 * Pure CSS marquee (no client JS): the list is rendered twice and the track
 * translates -50%, so the loop is seamless. Pauses on hover; the global
 * prefers-reduced-motion rule in globals.css freezes it for reduced motion.
 */
export function ServicesMarquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-label="Services we provide"
      className="group relative overflow-hidden border-y border-white/10 bg-blk-2 py-3.5"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-blk-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-blk-2 to-transparent" />

      <div className="animate-marquee flex w-max items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-white/80">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="mx-6 inline-block h-1.5 w-1.5 rotate-45 bg-ora"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
