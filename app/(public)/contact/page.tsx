import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { ContactForm } from '@/components/shared/ContactForm';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE, WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Lexakind for trusted legal help. Call, email, or send us your enquiry and a verified advocate will respond shortly. Based in Bengaluru, serving all of India.',
  alternates: { canonical: '/contact' },
};

const INFO = [
  {
    icon: Phone,
    label: 'Call us',
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
  },
  {
    icon: Mail,
    label: 'Email us',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: `${SITE.address.line}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`,
    href: 'https://www.google.com/maps?q=UB+City+Concorde+Towers+Bengaluru',
  },
  {
    icon: Clock,
    label: 'Working hours',
    value: SITE.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ]),
        ]}
      />

      {/* Page header */}
      <section className="relative bg-blk px-5 md:px-12 pt-[140px] pb-16 md:pt-[168px] md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(90% 120% at 80% 0%, #232327 0%, #161618 60%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 mb-6 font-body text-[12px] text-muted"
          >
            <Link href="/" className="hover:text-ora transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">Contact</span>
          </nav>

          <SectionLabel>Get in touch</SectionLabel>
          <h1 className="font-display text-[28px] leading-[1.15] md:text-[52px] font-medium md:leading-[1.1] tracking-tight text-white max-w-[640px]">
            Let&apos;s talk about your legal needs
          </h1>
          <p className="mt-5 max-w-[540px] font-body text-[13px] md:text-[16px] font-normal leading-[1.7] text-[#adadb4]">
            Whether you need a consultation, have a question, or want to get
            started — our team is ready to help. Reach out and a verified
            advocate will respond shortly.
          </p>
        </div>
      </section>

      {/* Info + form */}
      <section className="bg-white px-5 md:px-12 py-20">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — contact info */}
          <div className="lg:col-span-2">
            <SectionLabel>Contact information</SectionLabel>
            <h2 className="font-display text-[26px] md:text-[30px] font-semibold leading-snug tracking-tight max-w-[360px]">
              Reach us through any channel
            </h2>

            <ul className="mt-8 space-y-6">
              {INFO.map((item) => {
                const content = (
                  <>
                    <div className="w-11 h-11 bg-blk text-white flex items-center justify-center rounded-[3px] flex-shrink-0 transition-colors duration-200 group-hover:bg-ora">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="font-body text-[11px] uppercase tracking-[0.14em] text-muted-2">
                        {item.label}
                      </p>
                      <p className="mt-1 font-body text-[14px] text-blk font-normal leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-start gap-4"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 border border-wht-3 text-blk font-body text-[13px] font-medium px-5 py-3 rounded-[3px] hover:border-ora hover:text-ora transition-colors"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — form card */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-wht-3 rounded-[4px] p-7 md:p-9 shadow-sm">
              <h2 className="font-display text-[22px] font-semibold leading-snug tracking-tight">
                Send us a message
              </h2>
              <p className="mt-2 mb-7 font-body text-[13px] text-muted font-light">
                Fill in the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-wht-2">
        <iframe
          title="Lexakind office location"
          src="https://www.google.com/maps?q=UB+City+Concorde+Towers+Vittal+Mallya+Road+Bengaluru&output=embed"
          className="w-full h-[360px] md:h-[420px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
