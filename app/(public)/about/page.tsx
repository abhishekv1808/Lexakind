import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Eye,
  Gem,
  ShieldCheck,
  IndianRupee,
  LineChart,
  Globe,
  Lock,
  Scale,
  Building2,
  Users,
  Briefcase,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { CTABanner } from '@/components/home/CTABanner';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { TOTAL_SERVICES, PRACTICE_AREAS } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Lexakind connects you with 4,000+ verified advocates across India — transparent pricing, end-to-end case tracking, and expert legal help across 190+ services. Learn about our mission, values and approach.',
  alternates: { canonical: '/about' },
};

const FACTS = [
  { icon: Building2, label: 'Headquartered in', value: 'Bengaluru' },
  { icon: Users, label: 'Verified advocates', value: '4,000+' },
  { icon: Briefcase, label: 'Legal services', value: `${TOTAL_SERVICES}+` },
  { icon: Globe, label: 'Coverage', value: 'Pan-India' },
];

const MVV = [
  {
    icon: Target,
    title: 'Our Mission',
    body: 'To make quality legal help accessible, transparent and stress-free for every Indian — connecting people with verified advocates who treat each case with the diligence it deserves.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: "To become India's most trusted legal platform, where finding the right lawyer is as simple and reliable as it should be — backed by technology and genuine human expertise.",
  },
  {
    icon: Gem,
    title: 'Our Values',
    body: 'Integrity in every interaction, clarity in every quote, and accountability at every stage. We measure success by the outcomes and peace of mind we deliver to our clients.',
  },
];

const STATS = [
  { value: 50, suffix: 'K+', label: 'Consultations delivered' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
  { value: TOTAL_SERVICES, suffix: '+', label: 'Legal services' },
  { value: 4, suffix: 'K+', label: 'Verified advocates' },
];

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: 'Verified advocate network',
    body: 'Every lawyer is background-checked and bar-verified, so you are always represented by genuine, qualified counsel.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent pricing',
    body: 'Clear, itemised quotes before any work begins. No hidden fees, no surprises — ever.',
  },
  {
    icon: LineChart,
    title: 'End-to-end case tracking',
    body: 'Follow your matter from first consultation to final resolution with real-time status updates.',
  },
  {
    icon: Globe,
    title: 'Pan-India reach',
    body: 'Whether you are in Bengaluru or abroad, our advocates handle matters across every Indian jurisdiction.',
  },
  {
    icon: Lock,
    title: 'Confidential & secure',
    body: 'Your details and documents are handled with strict confidentiality and care at every step.',
  },
  {
    icon: Scale,
    title: 'Specialist expertise',
    body: `${TOTAL_SERVICES}+ services across ${PRACTICE_AREAS.length} practice areas, each handled by advocates who specialise in that field.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
          ]),
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
            className="mb-6 flex items-center gap-1.5 font-body text-[12px] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-ora">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">About</span>
          </nav>

          <SectionLabel>About Lexakind</SectionLabel>
          <h1 className="max-w-[760px] font-display text-[34px] font-medium leading-[1.1] tracking-tight text-white md:text-[52px]">
            A modern legal partner, grounded in trust
          </h1>
          <p className="mt-5 max-w-[600px] font-body text-[15px] font-normal leading-[1.7] text-[#adadb4] md:text-[16px]">
            Lexakind was built on a simple belief: legal help should be
            accessible, transparent and genuinely on your side. We connect
            individuals and businesses with verified advocates across India —
            and stay with you from first question to final resolution.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-5 py-20 md:px-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="max-w-[460px] font-display text-[30px] font-semibold leading-[1.15] tracking-tight md:text-[38px]">
              Bridging the gap between people and the law
            </h2>
            <div className="mt-6 space-y-4 font-body text-[14px] font-light leading-relaxed text-muted">
              <p>
                For too many people, the legal system feels intimidating,
                opaque and expensive. Finding the right lawyer is hard; knowing
                whether you can trust them is harder still. Lexakind exists to
                change that.
              </p>
              <p>
                We have built a platform that pairs you with verified,
                specialist advocates — and wraps the whole experience in
                transparent pricing and real-time case tracking. From property
                disputes and family matters to corporate counsel and criminal
                defence, the right expertise is always within reach.
              </p>
              <p>
                Headquartered in Bengaluru and serving clients across India and
                abroad, our mission is to make trustworthy legal help the
                default, not the exception.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} direction="right">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] bg-wht-3">
              {FACTS.map((fact) => (
                <div key={fact.label} className="bg-wht-2 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-blk text-white">
                    <fact.icon size={19} />
                  </div>
                  <p className="mt-5 font-display text-[26px] font-bold leading-none text-blk">
                    {fact.value}
                  </p>
                  <p className="mt-2 font-body text-[12px] font-light text-muted-2">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-wht-2 px-5 py-20 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <SectionLabel>What drives us</SectionLabel>
            <h2 className="max-w-[520px] font-display text-[30px] font-semibold leading-[1.15] tracking-tight md:text-[38px]">
              Mission, vision and the values we hold
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] bg-wht-3 md:grid-cols-3">
            {MVV.map((item, i) => (
              <RevealOnScroll
                key={item.title}
                delay={i * 0.1}
                className="group relative overflow-hidden bg-white p-9"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-ora transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-[3px] bg-blk text-white transition-colors duration-200 group-hover:bg-ora">
                  <item.icon size={21} />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[13px] font-light leading-relaxed text-muted">
                  {item.body}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-blk px-5 py-[72px] md:px-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-2 py-6 text-center first:text-left md:px-8 md:py-0 ${
                i < STATS.length - 1 ? 'lg:border-r lg:border-white/8' : ''
              }`}
            >
              <p className="font-display text-[40px] font-bold leading-none text-white md:text-[48px]">
                <AnimatedCounter value={stat.value} />
                <span className="text-ora">{stat.suffix}</span>
              </p>
              <p className="mt-3 font-body text-[12px] font-light text-[#777]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What sets us apart */}
      <section className="bg-white px-5 py-20 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <SectionLabel>Why Lexakind</SectionLabel>
            <h2 className="max-w-[480px] font-display text-[30px] font-semibold leading-[1.15] tracking-tight md:text-[38px]">
              What sets us apart
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] bg-wht-3 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item, i) => (
              <RevealOnScroll
                key={item.title}
                delay={(i % 3) * 0.08}
                className="group relative overflow-hidden bg-white p-8"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-ora transition-transform duration-300 group-hover:scale-x-100" />
                <item.icon size={26} className="text-ora" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-base font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[12px] font-light leading-relaxed text-muted">
                  {item.body}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Practice areas teaser */}
      <section className="bg-wht-2 px-5 py-16 md:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-[24px] font-semibold leading-snug tracking-tight md:text-[28px]">
              {TOTAL_SERVICES}+ services across {PRACTICE_AREAS.length} practice
              areas
            </h2>
            <p className="mt-2 font-body text-[14px] font-light text-muted">
              From everyday paperwork to complex litigation — find the right
              legal help.
            </p>
          </div>
          <Link
            href="/practice-areas"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-[3px] bg-ora px-6 py-3.5 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h"
          >
            Explore practice areas
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
