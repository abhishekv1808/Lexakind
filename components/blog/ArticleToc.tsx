'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TocHeading {
  id: string;
  text: string;
}

/**
 * Sticky table of contents built from the article's H2 headings.
 * Highlights the section currently in view via IntersectionObserver.
 */
export function ArticleToc({ headings }: { headings: TocHeading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? '');

  useEffect(() => {
    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents">
      <p className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-2">
        In this article
      </p>
      <ul className="space-y-1 border-l border-wht-3">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                '-ml-px block border-l-2 py-1 pl-4 font-body text-[13px] leading-snug transition-colors',
                active === h.id
                  ? 'border-ora font-medium text-ora'
                  : 'border-transparent text-muted hover:text-blk',
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
