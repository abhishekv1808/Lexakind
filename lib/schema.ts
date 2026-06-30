import { SITE } from '@/lib/constants';

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon.png`,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.line,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: { '@type': 'Country', name: 'India' },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
});

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'LocalBusiness'],
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.line,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: 12.9716, longitude: 77.5946 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00',
    },
  ],
  priceRange: '₹₹',
  areaServed: { '@type': 'Country', name: 'India' },
});

export const serviceSchema = (pa: {
  name: string;
  slug: string;
  description: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: pa.name,
  name: pa.name,
  description: pa.description,
  url: `${SITE.url}/practice-areas/${pa.slug}`,
  provider: { '@type': 'LegalService', name: SITE.name, url: SITE.url },
  areaServed: { '@type': 'Country', name: 'India' },
});

export const itemListSchema = (
  items: { name: string; url: string }[],
  name: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map(({ name, url }, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    url: `${SITE.url}${url}`,
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ name, url }, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${SITE.url}${url}`,
  })),
});

export const articleSchema = (post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  authorRole?: string;
  authorUrl?: string;
  image: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: `${SITE.url}${post.image}`,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    '@type': 'Person',
    name: post.author,
    ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
    ...(post.authorUrl ? { url: post.authorUrl } : {}),
    worksFor: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE.url}/resources/blog/${post.slug}`,
  },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
