import Link from 'next/link';
import {
  Briefcase,
  Scale,
  Shield,
  Heart,
  Home,
  Wifi,
  ShoppingBag,
  Lightbulb,
  Building2,
  Globe,
  Users,
  Plane,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PRACTICE_AREAS } from '@/lib/practice-areas';

const ICON_MAP: Record<string, LucideIcon> = {
  Briefcase,
  Scale,
  Shield,
  Heart,
  Home,
  Wifi,
  ShoppingBag,
  Lightbulb,
  Building2,
  Globe,
  Users,
  Plane,
};

export function PracticeAreasGrid() {
  const areas = PRACTICE_AREAS.slice(0, 6);

  return (
    <section className="bg-white px-5 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <SectionLabel>Practice Areas</SectionLabel>
            <h2 className="font-display text-[26px] leading-[1.18] md:text-[42px] font-bold md:leading-[1.12] tracking-tight max-w-[480px]">
              Expert counsel across every area of law
            </h2>
          </div>
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-ora group flex-shrink-0"
          >
            All practice areas
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-wht-3 rounded-[4px] overflow-hidden">
          {areas.map((area, i) => {
            const Icon = ICON_MAP[area.icon] ?? Briefcase;
            return (
              <RevealOnScroll
                key={area.slug}
                delay={(i % 3) * 0.08}
                className="group relative bg-white p-8 overflow-hidden"
              >
                <Link href={`/practice-areas/${area.slug}`} className="block">
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-ora scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-start justify-between">
                    <span className="font-body text-[13px] text-ora font-semibold opacity-70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-ora opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </div>

                  <Icon size={26} className="mt-6 text-blk" strokeWidth={1.5} />

                  <h3 className="mt-4 font-display text-base font-semibold leading-snug">
                    {area.name}
                  </h3>
                  <p className="mt-2 font-body text-[12px] text-muted font-light leading-relaxed">
                    {area.description}
                  </p>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
