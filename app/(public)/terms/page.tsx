import type { Metadata } from 'next';
import { LegalDoc } from '@/components/legal/LegalDoc';
import { LEGAL_DOCS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing your use of the Lexakind website and services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <LegalDoc doc={LEGAL_DOCS.terms} />;
}
