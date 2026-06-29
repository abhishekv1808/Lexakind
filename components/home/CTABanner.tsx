import Link from 'next/link';
import { SITE } from '@/lib/constants';

export function CTABanner() {
  return (
    <section className="bg-ora px-5 md:px-12 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <h2 className="font-display text-[28px] md:text-[34px] text-white font-bold leading-[1.15] max-w-[480px]">
          Need Legal Advice? Talk to a Verified Expert Today.
        </h2>

        <div className="flex flex-wrap gap-3 flex-shrink-0">
          <Link
            href="/consultation"
            className="inline-flex items-center bg-white text-ora font-body text-[13px] font-semibold tracking-[0.02em] px-6 py-3.5 rounded-[3px] hover:bg-white/90 transition-colors"
          >
            Book a Consultation
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center border-2 border-white/40 text-white font-body text-[13px] font-medium tracking-[0.02em] px-6 py-3.5 rounded-[3px] hover:border-white transition-colors"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
