import Link from 'next/link';
import { Phone, Mail, MapPin, Scale, ArrowUpRight } from 'lucide-react';
import { SITE, FOOTER_LINKS, WHATSAPP_LINK } from '@/lib/constants';

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h4 className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
        {children}
      </h4>
      <div className="mt-2.5 h-px w-7 bg-ora" />
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-body text-[13px] font-light text-[#8a8d93] transition-colors hover:text-white"
    >
      <span className="h-px w-0 bg-ora transition-all duration-200 group-hover:w-3" />
      {label}
    </Link>
  );
}

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: '#',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'Facebook',
    href: '#',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'X',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

const CONTACT = [
  {
    icon: MapPin,
    href: 'https://www.google.com/maps?q=UB+City+Concorde+Towers+Bengaluru',
    value: `${SITE.address.line}, ${SITE.address.city} ${SITE.address.postalCode}`,
  },
  { icon: Phone, href: `tel:${SITE.phone}`, value: SITE.phoneDisplay },
  { icon: Mail, href: `mailto:${SITE.email}`, value: SITE.email },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-ora bg-blk text-white">
      {/* Main */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-12 pt-16 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-ora text-white">
                <Scale size={19} />
              </span>
              <span className="font-display text-[24px] font-bold tracking-[0.04em] text-white">
                LEXAKIND
              </span>
            </Link>
            <p className="mt-5 max-w-[300px] font-body text-[13px] font-light leading-relaxed text-[#8a8d93]">
              Connecting you with 4,000+ verified advocates across India —
              transparent pricing, end-to-end case tracking, and counsel you can
              trust, headquartered in Bengaluru.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-white/12 text-[#8a8d93] transition-colors hover:border-ora hover:bg-ora/10 hover:text-ora"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <ColumnHeading>Company</ColumnHeading>
            <ul className="space-y-3.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3">
            <ColumnHeading>Practice Areas</ColumnHeading>
            <ul className="space-y-3.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <ColumnHeading>Get in touch</ColumnHeading>
            <ul className="space-y-4">
              {CONTACT.map((row) => (
                <li key={row.value}>
                  <a
                    href={row.href}
                    target={row.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      row.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[3px] bg-blk-3 text-ora transition-colors group-hover:bg-ora group-hover:text-white">
                      <row.icon size={15} />
                    </span>
                    <span className="font-body text-[13px] font-light leading-relaxed text-[#8a8d93] transition-colors group-hover:text-white">
                      {row.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <Link
              href="/consultation"
              className="mt-6 inline-flex items-center gap-1.5 rounded-[3px] bg-ora px-4 py-2.5 font-body text-[13px] font-medium text-white transition-colors hover:bg-ora-h"
            >
              Book a consultation
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 md:flex-row md:px-12">
          <p className="font-body text-[12px] font-light text-[#6b6e74]">
            © {new Date().getFullYear()} Lexakind. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[12px] font-light text-[#6b6e74] transition-colors hover:text-ora"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bar Council disclaimer */}
        <div className="border-t border-white/[0.05]">
          <p className="mx-auto w-full max-w-6xl px-5 py-4 text-center font-body text-[11px] font-light leading-relaxed text-[#5a5d63] md:px-12">
            Disclaimer: As per the rules of the Bar Council of India, law firms
            are not permitted to solicit work or advertise. The information on
            this website is for general informational purposes only and does not
            constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
