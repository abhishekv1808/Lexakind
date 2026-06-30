import type { Metadata } from 'next';
import { LegalDoc } from '@/components/legal/LegalDoc';
import { LEGAL_DOCS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Lexakind collects, uses and protects your personal information, in line with India’s DPDP Act, 2023.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <LegalDoc doc={LEGAL_DOCS.privacy} />;
}
