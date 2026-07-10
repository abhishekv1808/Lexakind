import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Check,
  Clock,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { ContactForm } from '@/components/shared/ContactForm';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import { CTABanner } from '@/components/home/CTABanner';
import { PA_ICONS } from '@/lib/pa-icons';
import { SITE } from '@/lib/constants';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { PRACTICE_AREAS } from '@/lib/services-data';
import {
  SERVICE_CONTENT,
  getServiceContent,
  getServiceContentForPA,
} from '@/lib/service-content';

export const revalidate = 86400; // ISR — 24h
// Only services with enriched content get pages; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_CONTENT.map((s) => ({ slug: s.paSlug, service: s.slug }));
}

/** Find the base service entry (name + short description) in services-data. */
function findBaseService(paSlug: string, serviceSlug: string) {
  const pa = PRACTICE_AREAS.find((p) => p.slug === paSlug);
  if (!pa) return undefined;
  for (const group of pa.groups) {
    const svc = group.services.find((s) => s.slug === serviceSlug);
    if (svc) return { pa, group, svc };
  }
  return undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service } = await params;
  const content = getServiceContent(slug, service);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/practice-areas/${slug}/${service}` },
    openGraph: {
      type: 'website',
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;
  const content = getServiceContent(slug, service);
  const base = findBaseService(slug, service);
  if (!content || !base) notFound();

  const { pa, svc } = base;
  const Icon = PA_ICONS[pa.icon] ?? PA_ICONS.Briefcase;
  const path = `/practice-areas/${pa.slug}/${svc.slug}`;

  // Sibling services in this practice area that also have detail pages.
  const siblings = getServiceContentForPA(pa.slug).filter(
    (s) => s.slug !== svc.slug,
  );

  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: svc.name,
            slug: pa.slug,
            description: content.metaDescription,
            path,
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Practice Areas', url: '/practice-areas' },
            { name: pa.name, url: `/practice-areas/${pa.slug}` },
            { name: svc.name, url: path },
          ]),
          faqSchema(content.faqs),
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
            <Link
              href={`/practice-areas/${pa.slug}`}
              className="transition-colors hover:text-ora"
            >
              {pa.name}
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">{svc.name}</span>
          </nav>

          <div className="flex items-start gap-5">
            <span className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-[6px] bg-ora/10 text-ora sm:flex">
              <Icon size={26} />
            </span>
            <div>
              <SectionLabel>{pa.name}</SectionLabel>
              <h1 className="max-w-[760px] font-display text-[27px] font-medium leading-[1.15] tracking-tight text-white md:text-[48px] md:leading-[1.1]">
                {svc.name}
              </h1>
              <p className="mt-4 max-w-[600px] font-body text-[13px] font-normal leading-[1.7] text-[#adadb4] md:text-[16px]">
                {svc.description}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-[3px] bg-ora px-6 py-3.5 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h"
            >
              Get help with {svc.name}
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
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-2">
                {pa.name}
              </p>
              <ul className="space-y-0.5 border-l border-wht-3">
                <li>
                  <Link
                    href={`/practice-areas/${pa.slug}`}
                    className="-ml-px block border-l-2 border-transparent py-2 pl-4 font-body text-[13px] leading-snug text-muted transition-colors hover:text-blk"
                  >
                    All {pa.name} services
                  </Link>
                </li>
                {getServiceContentForPA(pa.slug).map((s) => {
                  const isActive = s.slug === svc.slug;
                  const sBase = findBaseService(pa.slug, s.slug);
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/practice-areas/${pa.slug}/${s.slug}`}
                        className={`-ml-px block border-l-2 py-2 pl-4 font-body text-[13px] leading-snug transition-colors ${
                          isActive
                            ? 'border-ora font-medium text-ora'
                            : 'border-transparent text-muted hover:text-blk'
                        }`}
                      >
                        {sBase?.svc.name ?? s.slug}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0">
            {/* Intro */}
            <RevealOnScroll>
              <div className="max-w-[680px] space-y-5">
                {content.intro.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="font-body text-[14px] md:text-[16px] font-light leading-[1.8] text-[#3f4148]"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Key facts strip */}
              <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] bg-wht-3 sm:grid-cols-3">
                {[
                  { icon: Clock, label: 'Typical timeline', value: content.timeline },
                  { icon: ShieldCheck, label: 'Handled by', value: 'Bar-verified specialist advocates' },
                  { icon: FileText, label: 'First consultation', value: 'Free — no obligation' },
                ].map((f) => (
                  <div key={f.label} className="bg-wht-2 p-5">
                    <f.icon size={18} className="text-ora" />
                    <p className="mt-3 font-body text-[11px] font-medium uppercase tracking-[0.12em] text-muted-2">
                      {f.label}
                    </p>
                    <p className="mt-1.5 font-body text-[13px] leading-relaxed text-blk">
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Process */}
            <div className="mt-16">
              <SectionLabel>How it works</SectionLabel>
              <h2 className="mb-8 max-w-[520px] font-display text-[26px] font-semibold leading-[1.15] tracking-tight md:text-[32px]">
                How does the {svc.name.toLowerCase()} process work?
              </h2>
              <ol className="space-y-0">
                {content.process.map((step, i) => (
                  <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                    {/* Connector line */}
                    {i < content.process.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[22px] top-[46px] bottom-0 w-px bg-wht-3"
                      />
                    )}
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[3px] bg-blk font-display text-[16px] font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-[16px] font-semibold leading-snug text-blk">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-[560px] font-body text-[13px] font-light leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Documents */}
            <div className="mt-16">
              <SectionLabel>What you’ll need</SectionLabel>
              <h2 className="mb-6 max-w-[520px] font-display text-[26px] font-semibold leading-[1.15] tracking-tight md:text-[32px]">
                What documents do you need for {svc.name.toLowerCase()}?
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {content.documents.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-3 rounded-[4px] border border-wht-3 bg-white p-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-ora/10 text-ora">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="font-body text-[13px] leading-relaxed text-[#3f4148]">
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-body text-[12px] font-light text-muted">
                Don’t have everything? Start anyway — we’ll tell you exactly
                what’s needed and help you procure missing documents.
              </p>
            </div>

            {/* FAQs */}
            <div className="mt-16">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mb-6 max-w-[480px] font-display text-[26px] font-semibold leading-[1.15] tracking-tight md:text-[32px]">
                {svc.name} — your questions answered
              </h2>
              <FaqAccordion faqs={content.faqs} />
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
                    Get help with {svc.name}
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

      {/* Related services */}
      {siblings.length > 0 && (
        <section className="bg-wht-2 px-5 py-16 md:px-12 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="mb-10 font-display text-[26px] font-semibold tracking-tight md:text-[30px]">
              Related {pa.name.toLowerCase()} services
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {siblings.slice(0, 3).map((s) => {
                const sBase = findBaseService(pa.slug, s.slug);
                if (!sBase) return null;
                return (
                  <Link
                    key={s.slug}
                    href={`/practice-areas/${pa.slug}/${s.slug}`}
                    className="group relative overflow-hidden rounded-[4px] border border-wht-3 bg-white p-6 transition-shadow hover:shadow-sm"
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-ora transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="flex items-start justify-between">
                      <Icon size={28} className="text-ora" strokeWidth={1.5} />
                      <ArrowUpRight
                        size={18}
                        className="-translate-x-1 text-ora opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-[17px] font-semibold leading-snug text-blk">
                      {sBase.svc.name}
                    </h3>
                    <p className="mt-2 font-body text-[13px] font-light leading-relaxed text-muted">
                      {sBase.svc.description}
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
