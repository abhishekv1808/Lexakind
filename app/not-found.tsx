import Link from 'next/link';
import { Scale, ArrowRight, Home, Search, Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

const LINKS = [
  { label: 'Homepage', href: '/', icon: Home },
  { label: 'Practice Areas', href: '/practice-areas', icon: Search },
  { label: 'Book a consultation', href: '/consultation', icon: ArrowRight },
  { label: 'Contact us', href: '/contact', icon: Phone },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-blk px-5 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 80% at 50% 0%, #232327 0%, #161618 60%)',
        }}
      />
      <div className="relative">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2.5"
          aria-label="Lexakind home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-ora text-white">
            <Scale size={19} />
          </span>
          <span className="font-display text-[24px] font-bold tracking-[0.04em] text-white">
            LEXAKIND
          </span>
        </Link>

        <p className="font-display text-[88px] font-bold leading-none text-ora md:text-[120px]">
          404
        </p>
        <h1 className="mt-4 font-display text-[26px] font-semibold tracking-tight text-white md:text-[32px]">
          This page couldn&apos;t be found
        </h1>
        <p className="mx-auto mt-3 max-w-[420px] font-body text-[14px] font-light leading-relaxed text-[#adadb4]">
          The page may have moved or no longer exists. Here are some helpful
          places to continue.
        </p>

        <div className="mx-auto mt-9 grid max-w-[440px] grid-cols-1 gap-2.5 sm:grid-cols-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center gap-3 rounded-[4px] border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition-colors hover:border-ora/40 hover:bg-white/[0.06]"
            >
              <l.icon size={16} className="text-ora" />
              <span className="font-body text-[14px] font-medium text-white">
                {l.label}
              </span>
              <ArrowRight
                size={14}
                className="ml-auto text-muted-2 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>

        <p className="mt-8 font-body text-[13px] font-light text-muted">
          Or call us at{' '}
          <a href={`tel:${SITE.phone}`} className="text-ora hover:underline">
            {SITE.phoneDisplay}
          </a>
        </p>
      </div>
    </main>
  );
}
