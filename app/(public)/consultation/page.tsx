import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  Clock,
  IndianRupee,
  Phone,
  CalendarCheck,
} from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { ConsultationWidget } from '@/components/consultation/ConsultationWidget';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Book a consultation with a verified Lexakind advocate. Choose your practice area and preferred time — transparent pricing and a free first call. Based in Bengaluru, serving all of India.',
  alternates: { canonical: '/consultation' },
};

const PERKS = [
  {
    icon: ShieldCheck,
    title: 'Verified advocates',
    body: 'Matched with a bar-verified specialist for your matter.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent pricing',
    body: 'Clear quotes upfront — your first call is free.',
  },
  {
    icon: Clock,
    title: 'Quick turnaround',
    body: 'Most clients are contacted within 24 hours.',
  },
  {
    icon: CalendarCheck,
    title: 'Flexible scheduling',
    body: 'Pick a slot that works for you, Mon–Sat.',
  },
];

export default function ConsultationPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Consultation', url: '/consultation' },
          ]),
        ]}
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
            <span className="text-white">Consultation</span>
          </nav>

          <SectionLabel>Book a consultation</SectionLabel>
          <h1 className="max-w-[680px] font-display text-[28px] font-medium leading-[1.15] tracking-tight text-white md:text-[52px] md:leading-[1.1]">
            Speak with a verified advocate
          </h1>
          <p className="mt-5 max-w-[560px] font-body text-[13px] font-normal leading-[1.7] text-[#adadb4] md:text-[16px]">
            Tell us about your matter and pick a time that suits you. Your first
            consultation is free — no obligation, no hidden fees.
          </p>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-white px-5 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — perks */}
          <div className="lg:col-span-2">
            <SectionLabel>Why book with us</SectionLabel>
            <h2 className="max-w-[340px] font-display text-[26px] font-semibold leading-snug tracking-tight md:text-[30px]">
              Legal help, made simple
            </h2>

            <ul className="mt-8 space-y-6">
              {PERKS.map((perk) => (
                <li key={perk.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[3px] bg-blk text-white">
                    <perk.icon size={18} />
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-semibold text-blk">
                      {perk.title}
                    </p>
                    <p className="mt-1 font-body text-[13px] font-light leading-relaxed text-muted">
                      {perk.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[4px] bg-wht-2 p-5">
              <p className="font-body text-[12px] uppercase tracking-[0.12em] text-muted-2">
                Prefer to call?
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-1.5 flex items-center gap-2 font-display text-[20px] font-semibold text-blk transition-colors hover:text-ora"
              >
                <Phone size={18} className="text-ora" />
                {SITE.phoneDisplay}
              </a>
              <p className="mt-2 font-body text-[12px] font-light text-muted">
                {SITE.hours}
              </p>
            </div>
          </div>

          {/* Right — widget */}
          <div className="lg:col-span-3">
            <ConsultationWidget />
          </div>
        </div>
      </section>
    </>
  );
}
