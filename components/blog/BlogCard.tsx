import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types/blog';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/resources/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-wht-3 bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blk/50 to-transparent" />
        <span className="absolute left-4 top-4 rounded-[3px] bg-ora px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 font-body text-[12px] text-muted-2">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readMinutes} min read
          </span>
        </div>
        <h3 className="mt-3 font-display text-[18px] font-semibold leading-snug tracking-tight text-blk transition-colors group-hover:text-ora">
          {post.title}
        </h3>
        <p className="mt-2.5 flex-1 font-body text-[13px] font-light leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-body text-[12px] font-medium text-ora">
          Read article
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
