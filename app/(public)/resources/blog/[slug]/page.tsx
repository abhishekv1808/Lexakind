import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';
import { PostBody } from '@/components/blog/PostBody';
import { CTABanner } from '@/components/home/CTABanner';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPosts,
  BLOG_SLUGS,
} from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export const revalidate = 86400; // ISR — 24h

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related =
    getRelatedPosts(post).length > 0
      ? getRelatedPosts(post)
      : getAllPosts()
          .filter((p) => p.slug !== post.slug)
          .slice(0, 3);

  const initials = post.author.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema({
            title: post.title,
            excerpt: post.excerpt,
            slug: post.slug,
            date: post.date,
            author: post.author.name,
            image: post.coverImage,
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources/blog' },
            { name: post.title, url: `/resources/blog/${post.slug}` },
          ]),
        ]}
      />

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
            className="mb-6 flex flex-wrap items-center gap-1.5 font-body text-[12px] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-ora">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link
              href="/resources/blog"
              className="transition-colors hover:text-ora"
            >
              Resources
            </Link>
            <ChevronRight size={13} />
            <span className="line-clamp-1 text-white">{post.category}</span>
          </nav>

          <span className="inline-block rounded-[3px] bg-ora px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
            {post.category}
          </span>
          <h1 className="mt-5 font-display text-[30px] font-medium leading-[1.15] tracking-tight text-white md:text-[44px]">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-[13px] text-[#adadb4]">
            <span className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ora text-[11px] font-medium text-white">
                {initials}
              </span>
              {post.author.name}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="bg-white px-5 md:px-12">
        <div className="mx-auto -mt-2 w-full max-w-[860px]">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[6px]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="860px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white px-5 py-12 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-[760px]">
          <PostBody blocks={post.content} />

          {/* Disclaimer */}
          <p className="mt-12 rounded-[4px] border border-wht-3 bg-wht-2 p-5 font-body text-[12px] font-light leading-relaxed text-muted">
            This article is for general information only and does not constitute
            legal advice. For guidance on your specific situation, please{' '}
            <Link href="/consultation" className="text-ora hover:underline">
              book a consultation
            </Link>{' '}
            with a verified advocate.
          </p>

          {/* Author box */}
          <div className="mt-8 flex items-center gap-4 rounded-[4px] bg-blk p-6">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ora font-display text-[16px] font-semibold text-white">
              {initials}
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold text-white">
                {post.author.name}
              </p>
              <p className="mt-0.5 font-body text-[12px] font-light text-muted">
                {post.author.role}
              </p>
            </div>
          </div>

          <Link
            href="/resources/blog"
            className="mt-8 inline-flex items-center gap-2 font-body text-[13px] font-medium text-ora"
          >
            <ArrowLeft size={15} />
            Back to all articles
          </Link>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-wht-2 px-5 py-16 md:px-12 md:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="mb-10 font-display text-[26px] font-semibold tracking-tight md:text-[30px]">
              Related articles
            </h2>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
