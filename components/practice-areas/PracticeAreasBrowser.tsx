'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { PRACTICE_AREAS } from '@/lib/services-data';
import { PA_ICONS } from '@/lib/pa-icons';

function serviceCount(groups: (typeof PRACTICE_AREAS)[number]['groups']) {
  return groups.reduce((sum, g) => sum + g.services.length, 0);
}

export function PracticeAreasBrowser() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return PRACTICE_AREAS;
    return PRACTICE_AREAS.filter(
      (pa) =>
        pa.name.toLowerCase().includes(q) ||
        pa.shortDesc.toLowerCase().includes(q) ||
        pa.groups.some((g) =>
          g.services.some((s) => s.name.toLowerCase().includes(q)),
        ),
    );
  }, [q]);

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Search */}
      <div className="relative mb-10 max-w-[460px]">
        <Search
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search legal services…"
          aria-label="Search legal services"
          className="w-full rounded-[3px] border border-wht-3 bg-wht-2 py-3 pl-11 pr-10 font-body text-[14px] text-blk font-light placeholder:text-muted focus:border-ora focus:outline-none focus:ring-1 focus:ring-ora"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ora transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center font-body text-[14px] text-muted">
          No practice areas match &ldquo;{query}&rdquo;. Try a different term.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((pa) => {
            const Icon = PA_ICONS[pa.icon] ?? PA_ICONS.Briefcase;
            const count = serviceCount(pa.groups);
            return (
              <Link
                key={pa.id}
                href={`/practice-areas/${pa.slug}`}
                className="group relative overflow-hidden rounded-[4px] border border-wht-3 bg-white p-6 transition-shadow hover:shadow-sm"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-ora transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start justify-between">
                  <Icon size={32} className="text-ora" strokeWidth={1.5} />
                  <ArrowUpRight
                    size={18}
                    className="-translate-x-1 text-ora opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>

                <h2 className="mt-5 font-display text-[18px] font-semibold leading-snug text-blk">
                  {pa.name}
                </h2>
                <p className="mt-2 font-body text-[13px] font-light leading-relaxed text-muted">
                  {pa.shortDesc}
                </p>

                <span className="mt-4 inline-block rounded-[3px] bg-wht-2 px-2.5 py-1 font-body text-[11px] font-medium text-muted-2">
                  {count} {count === 1 ? 'service' : 'services'}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
