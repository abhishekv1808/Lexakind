import type { Metadata } from 'next';
import { displayFont, bodyFont } from '@/lib/fonts';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lexakind.com'),
  title: {
    default: 'Lexakind — Trusted Legal Services in Bengaluru',
    template: '%s | Lexakind',
  },
  description:
    'Lexakind connects you with 4,000+ verified lawyers across India. Expert legal help for property, family, criminal, corporate, cyber crime and 160+ services. Based in Bengaluru.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Lexakind',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        {/*
          Hero video preload — UNCOMMENT once /public/videos/hero-lawyer.mp4 exists.
          (Left disabled to avoid a 404 request on every page load until then.)

          <link rel="preload" href="/videos/hero-lawyer.mp4" as="video" type="video/mp4" />
        */}
      </head>
      <body className="font-body antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
