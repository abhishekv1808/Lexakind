import Image from 'next/image';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { ConsultationTrigger } from '@/components/consultation/ConsultationTrigger';
import { SITE } from '@/lib/constants';

export function CTABanner() {
  return (
    <section className="relative min-h-[480px] overflow-hidden bg-blk md:min-h-[560px]">
      {/* Background image — Indian advocates in a law office, anchored right
          so the left stays clear for content. */}
      <Image
        src="/images/cta-advocates.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        priority
        className="object-cover object-[center_12%]"
      />

      {/* Left-to-right dark gradient for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #141416 0%, rgba(20,20,22,0.95) 30%, rgba(20,20,22,0.6) 50%, rgba(20,20,22,0.25) 70%, rgba(20,20,22,0.05) 100%)',
        }}
      />
      {/* Orange brand glow on the right */}
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full opacity-50"
        style={{
          background:
            'radial-gradient(circle, rgba(255,145,0,0.22), transparent 70%)',
        }}
      />
      {/* Thin orange top accent */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-ora via-ora/40 to-transparent" />

      {/* Content — left aligned */}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 md:px-12 md:py-20">
        <div className="max-w-[560px]">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-6 bg-ora" />
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-ora">
              Get started today
            </span>
          </div>

          <h2 className="font-display text-[30px] font-bold leading-[1.12] tracking-tight text-white md:text-[42px]">
            Need legal advice? Talk to a verified expert today.
          </h2>

          <p className="mt-4 max-w-[440px] font-body text-[15px] font-light leading-relaxed text-[#adadb4]">
            Your first consultation is free. Tell us about your matter and a
            bar-verified advocate will get back to you within 24 hours.
          </p>

          {/* Trust row */}
          <div className="mt-5 flex items-center gap-2 font-body text-[13px] text-white/70">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-ora text-ora" />
              ))}
            </span>
            <span>4.9 from 2,300+ verified clients</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ConsultationTrigger className="inline-flex items-center gap-2 rounded-[3px] bg-ora px-7 py-3.5 font-body text-[14px] font-semibold tracking-[0.02em] text-white transition-colors hover:bg-ora-h">
              Book a Consultation
              <ArrowRight size={16} />
            </ConsultationTrigger>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-[3px] border border-white/25 px-6 py-3.5 font-body text-[14px] font-medium tracking-[0.02em] text-white transition-colors hover:border-white"
            >
              <Phone size={15} />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
