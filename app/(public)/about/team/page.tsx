import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Scale,
  Briefcase,
  MapPin,
  Languages,
  ArrowUpRight,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { CTABanner } from '@/components/home/CTABanner';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import { breadcrumbSchema } from '@/lib/schema';
import { TEAM } from '@/lib/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the verified advocates behind Lexakind — specialists across criminal, corporate, family, real estate and civil litigation, based in Bengaluru.',
  alternates: { canonical: '/about/team' },
};

export default function TeamPage() {
  return (
    <>
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
          { name: 'Team', url: '/about/team' },
        ])}
      />
      {/* Header */}
      <section className="relative overflow-hidden bg-blk px-5 pb-16 pt-[140px] md:px-12 md:pb-20 md:pt-[168px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(90% 120% at 80% 0%, #232327 0%, #161618 60%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 font-body text-[12px] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-ora">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link href="/about" className="transition-colors hover:text-ora">
              About
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">Team</span>
          </nav>

          <SectionLabel>Our Team</SectionLabel>
          <h1 className="max-w-[680px] font-display text-[28px] font-medium leading-[1.15] tracking-tight text-white md:text-[52px] md:leading-[1.1]">
            The advocates behind Lexakind
          </h1>
          <p className="mt-5 max-w-[560px] font-body text-[13px] font-normal leading-[1.7] text-[#adadb4] md:text-[16px]">
            Specialists across every major practice area — each bar-verified,
            experienced, and matched to the matters they know best.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-white px-5 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {TEAM.map((adv) => (
            <article
              key={adv.id}
              id={adv.id}
              className="flex scroll-mt-28 flex-col overflow-hidden rounded-[6px] border border-wht-3 bg-white sm:flex-row"
            >
              {/* Portrait / monogram */}
              <div className="relative h-[220px] w-full flex-shrink-0 bg-blk sm:h-auto sm:w-[180px]">
                {adv.image ? (
                  <Image
                    src={adv.image}
                    alt={adv.name}
                    fill
                    sizes="180px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blk-3 via-blk to-[#0e0e10]">
                    <Scale
                      size={90}
                      className="absolute -right-3 top-4 text-white/[0.05]"
                      strokeWidth={1}
                    />
                    <span className="font-display text-[56px] font-bold text-white/15">
                      {adv.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col p-6">
                <p className="font-body text-[11px] font-medium uppercase tracking-[0.14em] text-ora">
                  {adv.role}
                </p>
                <h2 className="mt-1.5 font-display text-[20px] font-semibold tracking-tight text-blk">
                  {adv.name}
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-body text-[12px] text-muted-2">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={13} className="text-ora" />
                    {adv.experience}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Scale size={13} className="text-ora" />
                    {adv.cases}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-ora" />
                    {adv.location}
                  </span>
                </div>

                <p className="mt-3 font-body text-[13px] font-light leading-relaxed text-muted">
                  {adv.bio}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {adv.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-[3px] border border-wht-3 bg-wht-2 px-2.5 py-1 font-body text-[11px] font-light text-muted-2"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-wht-3 pt-4 font-body text-[12px] font-light text-muted-2">
                  <Languages size={13} className="text-ora" />
                  {adv.languages.join(' · ')}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 w-full max-w-6xl">
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 rounded-[3px] bg-ora px-6 py-3.5 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h"
          >
            Book a consultation
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
