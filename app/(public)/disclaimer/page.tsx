import type { Metadata } from 'next';
import { LegalDoc } from '@/components/legal/LegalDoc';
import { LEGAL_DOCS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Bar Council of India disclaimer and important legal notices for the Lexakind website.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return <LegalDoc doc={LEGAL_DOCS.disclaimer} />;
}
