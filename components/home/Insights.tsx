import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllPosts } from '@/lib/blog';

export function Insights() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-wht-2 px-5 py-20 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Legal insights</SectionLabel>
            <h2 className="max-w-[480px] font-display text-[24px] font-semibold leading-[1.2] tracking-tight md:text-[38px] md:leading-[1.15]">
              Guidance from our legal experts
            </h2>
          </div>
          <Link
            href="/resources/blog"
            className="inline-flex flex-shrink-0 items-center gap-1.5 font-body text-[13px] font-medium text-ora"
          >
            View all articles
            <ArrowRight size={14} />
          </Link>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
          {posts.map((post, i) => (
            <RevealOnScroll key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
