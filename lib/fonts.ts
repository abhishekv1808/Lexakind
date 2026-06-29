import { Outfit, DM_Sans } from 'next/font/google';

// Display / headings — geometric sans (matches the reference headline)
export const displayFont = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Body — neutral grotesque
export const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
  display: 'swap',
});
