import Link from 'next/link';
import { ShieldCheck, Receipt, LineChart, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

const CARDS = [
  {
    icon: ShieldCheck,
    title: 'Verified Advocate Network',
    description:
      'Every lawyer on Lexakind is background-checked and bar-verified, so you are always represented by genuine, qualified counsel.',
    href: '/about',
  },
  {
    icon: Receipt,
    title: 'Transparent Pricing',
    description:
      'No hidden fees, no surprises. Know exactly what your matter costs upfront with clear, itemised quotes before you commit.',
    href: '/consultation',
  },
  {
    icon: LineChart,
    title: 'End-to-End Case Tracking',
    description:
      'Follow your case from first consultation to final resolution with real-time status updates at every stage.',
    href: '/practice-areas',
  },
];

export function WhySection() {
  return (
    <section className="bg-wht-2 px-5 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <SectionLabel>Why Lexakind</SectionLabel>
          <h2 className="font-display text-[34px] md:text-[42px] font-bold leading-[1.12] tracking-tight max-w-[520px]">
            Built on trust, clarity and verified expertise
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-wht-3 rounded-[4px] overflow-hidden">
          {CARDS.map((card, i) => (
            <RevealOnScroll
              key={card.title}
              delay={i * 0.1}
              className="group relative bg-white p-9 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-ora scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-12 h-12 bg-blk text-white flex items-center justify-center rounded-[3px] transition-colors duration-200 group-hover:bg-ora">
                <card.icon size={20} />
              </div>

              <h3 className="mt-6 font-display text-lg font-semibold leading-snug">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-sm font-light leading-relaxed text-muted">
                {card.description}
              </p>

              <Link
                href={card.href}
                className="mt-5 inline-flex items-center gap-1.5 font-body text-[12px] font-medium text-ora group/link"
              >
                Learn more
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                />
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
