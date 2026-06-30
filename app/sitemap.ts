import type { MetadataRoute } from 'next';
import { PRACTICE_AREAS } from '@/lib/services-data';
import { getAllPosts } from '@/lib/blog';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lexakind.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: {
    path: string;
    priority: number;
    freq: MetadataRoute.Sitemap[number]['changeFrequency'];
  }[] = [
    { path: '', priority: 1.0, freq: 'weekly' },
    { path: '/practice-areas', priority: 0.9, freq: 'weekly' },
    { path: '/consultation', priority: 0.9, freq: 'monthly' },
    { path: '/about', priority: 0.8, freq: 'monthly' },
    { path: '/contact', priority: 0.8, freq: 'monthly' },
    { path: '/resources/blog', priority: 0.8, freq: 'weekly' },
    { path: '/about/team', priority: 0.6, freq: 'monthly' },
    { path: '/privacy', priority: 0.3, freq: 'yearly' },
    { path: '/terms', priority: 0.3, freq: 'yearly' },
    { path: '/disclaimer', priority: 0.3, freq: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = statics.map((s) => ({
    url: `${BASE}${s.path}`,
    lastModified: now,
    changeFrequency: s.freq,
    priority: s.priority,
  }));

  const practiceAreas: MetadataRoute.Sitemap = PRACTICE_AREAS.map((pa) => ({
    url: `${BASE}/practice-areas/${pa.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...practiceAreas, ...posts];
}
