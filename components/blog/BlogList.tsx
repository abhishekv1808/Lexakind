'use client';

import { useMemo, useState } from 'react';
import { BlogCard } from './BlogCard';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/types/blog';

interface Props {
  posts: BlogPost[];
  categories: string[];
}

export function BlogList({ posts, categories }: Props) {
  const [active, setActive] = useState<string>('All');

  const filtered = useMemo(
    () =>
      active === 'All' ? posts : posts.filter((p) => p.category === active),
    [active, posts],
  );

  const tabs = ['All', ...categories];

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {tabs.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-[3px] border px-4 py-2 font-body text-[13px] font-medium transition-colors',
              active === cat
                ? 'border-ora bg-ora text-white'
                : 'border-wht-3 text-blk hover:border-ora/40',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center font-body text-[14px] text-muted">
          No articles in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
