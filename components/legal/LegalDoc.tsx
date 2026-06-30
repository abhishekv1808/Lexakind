import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { LegalDocument } from '@/lib/legal';

export function LegalDoc({ doc }: { doc: LegalDocument }) {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-blk px-5 pb-12 pt-[140px] md:px-12 md:pb-14 md:pt-[160px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(90% 120% at 80% 0%, #232327 0%, #161618 60%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-[760px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 font-body text-[12px] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-ora">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">{doc.title}</span>
          </nav>
          <h1 className="font-display text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[44px]">
            {doc.title}
          </h1>
          <p className="mt-4 font-body text-[15px] font-light leading-[1.7] text-[#adadb4]">
            {doc.intro}
          </p>
          <p className="mt-4 font-body text-[12px] text-muted-2">
            Last updated {formatDate(doc.updated)}
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white px-5 py-14 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-[760px] space-y-8">
          {doc.sections.map((section, i) => (
            <section key={section.heading}>
              <h2 className="font-display text-[20px] font-semibold tracking-tight text-blk">
                <span className="mr-2 text-ora">{i + 1}.</span>
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((p, j) => (
                  <p
                    key={j}
                    className="font-body text-[15px] font-light leading-[1.8] text-[#3f4148]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <p className="mt-10 rounded-[4px] border border-wht-3 bg-wht-2 p-5 font-body text-[12px] font-light leading-relaxed text-muted">
            This document is provided as a general template and should be
            reviewed and adapted by a qualified advocate before relying on it.
          </p>
        </div>
      </article>
    </>
  );
}
