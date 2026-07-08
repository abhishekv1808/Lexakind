import Image from 'next/image';
import Link from 'next/link';
import { Quote, Check, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { ConsultationTrigger } from '@/components/consultation/ConsultationTrigger';

const PRINCIPLES = [
  'Clarity before paperwork — clients should always know where they stand',
  'Verified counsel only — trust is checked, never assumed',
  'Fees you see upfront — no surprises, ever',
];

export function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-blk px-5 py-16 md:px-12 md:py-[88px]">
      {/* Soft radial lift behind the content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 100% at 15% 20%, #232327 0%, #161618 60%)',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20">
        {/* Portrait */}
        <RevealOnScroll direction="left" className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
          {/* Offset accent frame */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-full w-full rounded-[6px] border border-ora/35"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-blk-3">
            <Image
              src="/images/team/Lexakind-founder.jpeg"
              alt="Mr. Anbu Kumar — Founder of Lexakind"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-top"
            />
            {/* Bottom scrim + name plate */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pt-16">
              <div className="flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="font-display text-[19px] font-semibold leading-tight text-white">
                    Mr. Anbu Kumar
                  </p>
                  <p className="mt-0.5 font-body text-[11px] font-medium uppercase tracking-[0.16em] text-ora">
                    Founder, Lexakind
                  </p>
                </div>
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[4px] bg-ora text-white">
                  <Quote size={18} />
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Content */}
        <div>
          <RevealOnScroll>
            <SectionLabel>From the Founder</SectionLabel>
            <h2 className="max-w-[520px] font-display text-[26px] font-bold leading-[1.18] tracking-tight text-white md:text-[40px] md:leading-[1.12]">
              The conviction behind Lexakind
            </h2>
          </RevealOnScroll>

          {/* Pull quote */}
          <RevealOnScroll delay={0.1}>
            <blockquote className="mt-7 border-l-2 border-ora pl-5 md:pl-6">
              <p className="font-display text-[18px] font-medium leading-[1.5] text-white/90 md:text-[22px]">
                &ldquo;Justice should never depend on who you know. It should
                depend on being heard —{' '}
                <span className="italic text-ora">
                  clearly, honestly, and on time.
                </span>
                &rdquo;
              </p>
            </blockquote>
          </RevealOnScroll>

          {/* Vision */}
          <RevealOnScroll delay={0.15}>
            <div className="mt-6 max-w-[560px] space-y-4 font-body text-[13px] font-light leading-[1.75] text-[#adadb4] md:text-[14px]">
              <p>
                Anbu Kumar founded Lexakind after a simple observation: for
                most people, finding a lawyer is guesswork — unverified
                referrals, unclear fees, and silence after the first call. The
                law protects everyone, but access to it rarely feels that way.
              </p>
              <p>
                Lexakind is his answer — a platform where every advocate is
                verified, every quote is transparent, and every case can be
                followed from the first consultation to the final order. Not
                just legal service, but legal confidence.
              </p>
            </div>
          </RevealOnScroll>

          {/* Principles */}
          <RevealOnScroll delay={0.2}>
            <ul className="mt-6 space-y-2.5">
              {PRINCIPLES.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-ora/20 text-ora">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="font-body text-[12px] font-light text-white/75 md:text-[13px]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          {/* Signature row + CTAs */}
          <RevealOnScroll delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/10 pt-7">
              <div>
                <p className="font-display text-[22px] font-semibold italic tracking-tight text-white">
                  Anbu Kumar
                </p>
                <p className="mt-0.5 font-body text-[11px] font-light uppercase tracking-[0.14em] text-muted">
                  Founder &amp; Managing Director
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <ConsultationTrigger className="inline-flex items-center gap-2 rounded-[3px] bg-ora px-5 py-2.5 font-body text-[13px] font-medium text-white transition-colors hover:bg-ora-h">
                  Book a consultation
                </ConsultationTrigger>
                <Link
                  href="/about/team"
                  className="group inline-flex items-center gap-1.5 rounded-[3px] border border-white/20 px-5 py-2.5 font-body text-[13px] font-medium text-white transition-colors hover:border-ora hover:text-ora"
                >
                  Meet the team
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
