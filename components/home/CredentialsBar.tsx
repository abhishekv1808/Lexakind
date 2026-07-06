import { ShieldCheck, Globe, Scale, IndianRupee, Clock, Star } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

const CREDENTIALS = [
  {
    icon: ShieldCheck,
    title: 'Bar-Verified Advocates',
    caption: 'Every lawyer is background-checked and bar-registered.',
  },
  {
    icon: Globe,
    title: 'Pan-India Network',
    caption: '4,000+ advocates across every major court.',
  },
  {
    icon: Scale,
    title: '160+ Legal Services',
    caption: 'One platform for every legal need.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent Pricing',
    caption: 'Clear, itemised quotes — no hidden fees.',
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    caption: 'Matched to the right advocate within a day.',
  },
];

export function CredentialsBar() {
  return (
    <section className="bg-white px-5 md:px-12 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="flex flex-col items-center text-center">
          <SectionLabel className="justify-center">Trusted &amp; verified</SectionLabel>
          <h2 className="font-display text-[28px] md:text-[38px] font-bold leading-[1.14] tracking-tight max-w-[560px]">
            Credentials clients can count on
          </h2>

          {/* Rating line */}
          <div className="mt-5 flex items-center gap-2.5 font-body text-[13px] text-muted-2">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="fill-ora text-ora" />
              ))}
            </span>
            <span>
              <span className="font-semibold text-blk">4.9 / 5</span> from 2,300+
              verified clients
            </span>
          </div>
        </RevealOnScroll>

        {/* Credential strip — hairline dividers via gap-px trick */}
        <div className="mt-12 grid grid-cols-2 gap-px rounded-[4px] bg-wht-3 overflow-hidden sm:grid-cols-3 lg:grid-cols-5">
          {CREDENTIALS.map((c, i) => (
            <RevealOnScroll
              key={c.title}
              delay={i * 0.08}
              className="group flex flex-col items-center bg-white px-5 py-9 text-center last:max-sm:col-span-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[3px] bg-blk text-white transition-colors duration-200 group-hover:bg-ora">
                <c.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 font-body text-[12px] font-light leading-relaxed text-muted">
                {c.caption}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
