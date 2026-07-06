import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Check,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { ContactForm } from '@/components/shared/ContactForm';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import { CTABanner } from '@/components/home/CTABanner';
import { PA_ICONS } from '@/lib/pa-icons';
import { SITE } from '@/lib/constants';
import {
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/schema';
import { PRACTICE_AREAS as PA_SERVICES } from '@/lib/services-data';
import { PRACTICE_AREAS as PA_META } from '@/lib/practice-areas';
import { hasServicePage } from '@/lib/service-content';

export const revalidate = 86400; // ISR — 24h

export function generateStaticParams() {
  return PA_SERVICES.map((pa) => ({ slug: pa.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pa = PA_SERVICES.find((p) => p.slug === slug);
  if (!pa) return {};
  const meta = PA_META.find((p) => p.slug === slug);
  const description = meta?.description ?? pa.shortDesc;
  return {
    title: `${pa.name} Services in Bengaluru`,
    description,
    alternates: { canonical: `/practice-areas/${pa.slug}` },
    openGraph: {
      type: 'website',
      title: `${pa.name} | Lexakind`,
      description,
    },
  };
}

function serviceCount(pa: (typeof PA_SERVICES)[number]) {
  return pa.groups.reduce((sum, g) => sum + g.services.length, 0);
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pa = PA_SERVICES.find((p) => p.slug === slug);
  if (!pa) notFound();

  const meta = PA_META.find((p) => p.slug === slug);
  const description = meta?.description ?? pa.shortDesc;
  const tagline = meta?.tagline ?? pa.shortDesc;
  const Icon = PA_ICONS[pa.icon] ?? PA_ICONS.Briefcase;
  const count = serviceCount(pa);

  // Tailored-but-generic FAQs (also emitted as FAQ schema for rich results).
  const faqs = [
    {
      q: `How do I get started with a ${pa.name} matter?`,
      a: `Share a few details about your matter and we'll match you with a verified ${pa.name.toLowerCase()} advocate — usually within 24 hours. Your first consultation is free, with no obligation.`,
    },
    {
      q: `How are ${pa.name} fees calculated?`,
      a: `Fees are transparent and shared upfront. After reviewing your matter, your advocate provides a clear, itemised quote before any work begins — no hidden charges.`,
    },
    {
      q: `Can I track the progress of my case?`,
      a: `Yes. Every matter comes with end-to-end tracking, giving you real-time status updates from the first consultation through to final resolution.`,
    },
    {
      q: `Do you handle ${pa.name} matters across India?`,
      a: `Yes. Headquartered in Bengaluru, our network of verified advocates handles ${pa.name.toLowerCase()} matters across every Indian jurisdiction, including remotely for NRIs.`,
    },
  ];

  // Related areas — from metadata where available, else the next few areas.
  const relatedSlugs =
    meta?.relatedSlugs ??
    PA_SERVICES.filter((p) => p.slug !== pa.slug)
      .slice(0, 3)
      .map((p) => p.slug);
  const related = relatedSlugs
    .map((s) => PA_SERVICES.find((p) => p.slug === s))
    .filter((p): p is (typeof PA_SERVICES)[number] => Boolean(p))
    .slice(0, 3);

  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({ name: pa.name, slug: pa.slug, description }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Practice Areas', url: '/practice-areas' },
            { name: pa.name, url: `/practice-areas/${pa.slug}` },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
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
            className="mb-6 flex flex-wrap items-center gap-1.5 font-body text-[12px] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-ora">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link
              href="/practice-areas"
              className="transition-colors hover:text-ora"
            >
              Practice Areas
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">{pa.name}</span>
          </nav>

          <div className="flex items-start gap-5">
            <span className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-[6px] bg-ora/10 text-ora sm:flex">
              <Icon size={26} />
            </span>
            <div>
              <SectionLabel>Practice Area</SectionLabel>
              <h1 className="max-w-[720px] font-display text-[34px] font-medium leading-[1.1] tracking-tight text-white md:text-[52px]">
                {pa.name}
              </h1>
              <p className="mt-4 max-w-[600px] font-body text-[15px] font-normal leading-[1.7] text-[#adadb4] md:text-[16px]">
                {tagline}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-[3px] bg-ora px-6 py-3.5 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h"
            >
              Get help with {pa.shortDesc ? pa.name : 'this'}
              <ArrowRight size={15} />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-[3px] border border-white/20 px-6 py-3.5 font-body text-[14px] font-medium text-white transition-colors hover:border-ora hover:text-ora"
            >
              <Phone size={15} />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white px-5 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          {/* Sidebar — all practice areas */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-2">
                Practice Areas
              </p>
              <ul className="space-y-0.5 border-l border-wht-3">
                {PA_SERVICES.map((p) => {
                  const isActive = p.slug === pa.slug;
                  return (
                    <li key={p.id}>
                      <Link
                        href={`/practice-areas/${p.slug}`}
                        className={`-ml-px block border-l-2 py-2 pl-4 font-body text-[13px] leading-snug transition-colors ${
                          isActive
                            ? 'border-ora font-medium text-ora'
                            : 'border-transparent text-muted hover:text-blk'
                        }`}
                      >
                        {p.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0">
            {/* Intro + stats */}
            <RevealOnScroll>
              <p className="max-w-[680px] font-body text-[16px] font-light leading-[1.8] text-[#3f4148]">
                {description}
              </p>
              <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-[4px] bg-wht-3">
                {[
                  { num: `${count}`, label: 'Specialist services' },
                  { num: '4,000+', label: 'Verified advocates' },
                  { num: '24hr', label: 'Case assignment' },
                ].map((s) => (
                  <div key={s.label} className="bg-wht-2 p-5 text-center">
                    <p className="font-display text-[24px] font-bold leading-none text-ora">
                      {s.num}
                    </p>
                    <p className="mt-1.5 font-body text-[11px] font-light text-muted-2">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Services by group */}
            <div className="mt-14 space-y-12">
              {pa.groups.map((group) => (
                <div key={group.groupName}>
                  <div className="mb-5 flex items-center gap-3">
                    <h2 className="font-display text-[22px] font-semibold tracking-tight text-blk md:text-[26px]">
                      {group.groupName}
                    </h2>
                    <span className="rounded-[3px] bg-wht-2 px-2.5 py-1 font-body text-[11px] font-medium text-muted-2">
                      {group.services.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {group.services.map((service) => {
                      // Services with enriched content get their own page;
                      // the rest anchor to the enquiry form below.
                      const detailHref = hasServicePage(pa.slug, service.slug)
                        ? `/practice-areas/${pa.slug}/${service.slug}`
                        : null;
                      return (
                        <div
                          key={service.slug}
                          id={service.slug}
                          className="group relative scroll-mt-28 overflow-hidden rounded-[4px] border border-wht-3 bg-white p-5 transition-shadow hover:shadow-sm"
                        >
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-ora transition-transform duration-300 group-hover:scale-x-100" />
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-display text-[15px] font-semibold leading-snug text-blk">
                              {detailHref ? (
                                <Link
                                  href={detailHref}
                                  className="transition-colors hover:text-ora"
                                >
                                  {service.name}
                                </Link>
                              ) : (
                                service.name
                              )}
                            </h3>
                            <Link
                              href={detailHref ?? '#enquire'}
                              aria-label={
                                detailHref
                                  ? `Learn more about ${service.name}`
                                  : `Enquire about ${service.name}`
                              }
                              className="mt-0.5 flex-shrink-0 text-muted-2 transition-colors hover:text-ora"
                            >
                              <ArrowUpRight size={16} />
                            </Link>
                          </div>
                          <p className="mt-1.5 font-body text-[12px] font-light leading-relaxed text-muted">
                            {service.description}
                          </p>
                          {detailHref && (
                            <Link
                              href={detailHref}
                              className="mt-3 inline-flex items-center gap-1.5 font-body text-[12px] font-medium text-ora"
                            >
                              Process, documents &amp; FAQs
                              <ArrowUpRight size={12} />
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="mt-16">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mb-6 max-w-[440px] font-display text-[26px] font-semibold leading-[1.15] tracking-tight md:text-[32px]">
                {pa.name} — your questions answered
              </h2>
              <FaqAccordion faqs={faqs} />
            </div>

            {/* Lead form */}
            <div
              id="enquire"
              className="mt-16 scroll-mt-28 rounded-[6px] border border-wht-3 bg-wht-2 p-6 md:p-9"
            >
              <div className="mb-6 flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ora/10 text-ora">
                  <Check size={18} />
                </span>
                <div>
                  <h2 className="font-display text-[22px] font-semibold tracking-tight">
                    Get help with {pa.name}
                  </h2>
                  <p className="mt-1 font-body text-[13px] font-light text-muted">
                    Tell us about your matter — a verified advocate will respond
                    within 24 hours. Your first consultation is free.
                  </p>
                </div>
              </div>
              <ContactForm defaultPracticeArea={pa.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Related areas */}
      {related.length > 0 && (
        <section className="bg-wht-2 px-5 py-16 md:px-12 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="mb-10 font-display text-[26px] font-semibold tracking-tight md:text-[30px]">
              Related practice areas
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((r) => {
                const RIcon = PA_ICONS[r.icon] ?? PA_ICONS.Briefcase;
                return (
                  <Link
                    key={r.id}
                    href={`/practice-areas/${r.slug}`}
                    className="group relative overflow-hidden rounded-[4px] border border-wht-3 bg-white p-6 transition-shadow hover:shadow-sm"
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-ora transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="flex items-start justify-between">
                      <RIcon size={28} className="text-ora" strokeWidth={1.5} />
                      <ArrowUpRight
                        size={18}
                        className="-translate-x-1 text-ora opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-[17px] font-semibold leading-snug text-blk">
                      {r.name}
                    </h3>
                    <p className="mt-2 font-body text-[13px] font-light leading-relaxed text-muted">
                      {r.shortDesc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
