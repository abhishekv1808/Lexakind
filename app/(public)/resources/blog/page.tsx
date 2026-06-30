import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { BlogList } from '@/components/blog/BlogList';
import { LeadMagnet } from '@/components/shared/LeadMagnet';
import { getAllPosts, BLOG_CATEGORIES } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Legal Insights & Resources',
  description:
    'Practical legal guidance from Lexakind — property, family, corporate, recovery and real-estate insights to help you make confident decisions.',
  alternates: { canonical: '/resources/blog' },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-blk px-5 pb-16 pt-[140px] md:px-12 md:pb-20 md:pt-[168px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(90% 120% at 80% 0%, #232327 0%, #161618 60%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 font-body text-[12px] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-ora">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">Resources</span>
          </nav>

          <SectionLabel>Legal insights</SectionLabel>
          <h1 className="max-w-[680px] font-display text-[34px] font-medium leading-[1.1] tracking-tight text-white md:text-[52px]">
            Guidance from our legal experts
          </h1>
          <p className="mt-5 max-w-[560px] font-body text-[15px] font-normal leading-[1.7] text-[#adadb4] md:text-[16px]">
            Plain-language articles on the legal questions that matter most —
            written by our network of verified advocates.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-white px-5 pt-16 md:px-12 md:pt-20">
          <div className="mx-auto w-full max-w-6xl">
            <Link
              href={`/resources/blog/${featured.slug}`}
              className="group grid grid-cols-1 overflow-hidden rounded-[6px] border border-wht-3 bg-white lg:grid-cols-2"
            >
              <div className="relative h-[240px] overflow-hidden lg:h-auto">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 576px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-[3px] bg-ora px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-ora">
                  Featured
                </span>
                <h2 className="mt-3 font-display text-[26px] font-semibold leading-tight tracking-tight md:text-[32px]">
                  {featured.title}
                </h2>
                <p className="mt-3 font-body text-[14px] font-light leading-relaxed text-muted">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 font-body text-[12px] text-muted-2">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={13} />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {featured.readMinutes} min read
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-body text-[13px] font-medium text-ora">
                  Read article
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* List */}
      <section className="bg-white px-5 py-16 md:px-12 md:py-20">
        <BlogList posts={rest} categories={BLOG_CATEGORIES} />
      </section>

      {/* Gated lead magnet */}
      <LeadMagnet />
    </>
  );
}
