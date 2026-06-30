export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDocument {
  slug: 'privacy' | 'terms' | 'disclaimer';
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}

const UPDATED = '2026-06-01';

export const LEGAL_DOCS: Record<LegalDocument['slug'], LegalDocument> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    updated: UPDATED,
    intro:
      'This Privacy Policy explains how Lexakind collects, uses and protects your personal information when you use our website and services, in line with the Digital Personal Data Protection Act, 2023 (DPDP Act).',
    sections: [
      {
        heading: 'Information we collect',
        body: [
          'We collect information you provide directly — such as your name, phone number, email address, the practice area you select and any details you share in an enquiry or consultation request.',
          'We also collect limited technical data automatically, such as your device type, browser and pages visited, to improve our website and services.',
        ],
      },
      {
        heading: 'How we use your information',
        body: [
          'To respond to your enquiries, schedule consultations and connect you with a suitable verified advocate.',
          'To send you service-related communication, and (only with your consent) occasional updates.',
          'To maintain, secure and improve our website, and to comply with applicable laws.',
        ],
      },
      {
        heading: 'Sharing your information',
        body: [
          'We share your details only with the advocate handling your matter and with trusted service providers (for example, email delivery) who process data on our behalf under appropriate safeguards.',
          'We do not sell your personal data. We may disclose information where required by law or to protect our legal rights.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Under the DPDP Act you have the right to access, correct and erase your personal data, to withdraw consent, and to grievance redressal.',
          'To exercise any of these rights, contact us using the details below.',
        ],
      },
      {
        heading: 'Data retention & security',
        body: [
          'We retain personal data only for as long as necessary for the purposes described here or as required by law, and we apply reasonable technical and organisational measures to protect it.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          'For any privacy questions or to exercise your rights, email us at lexakind1@gmail.com or call +91 86188 88526.',
        ],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Terms of Service',
    updated: UPDATED,
    intro:
      'These Terms of Service govern your use of the Lexakind website. By accessing or using the site, you agree to these terms.',
    sections: [
      {
        heading: 'Use of the website',
        body: [
          'The Lexakind website provides information about our legal services and lets you submit enquiries and consultation requests. You agree to use it only for lawful purposes and to provide accurate information.',
        ],
      },
      {
        heading: 'No attorney–client relationship',
        body: [
          'Submitting an enquiry or using this website does not, by itself, create an attorney–client relationship. Such a relationship is formed only after a formal engagement is agreed in writing.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'All content on this website — including text, graphics, logos and design — is the property of Lexakind or its licensors and may not be reproduced without permission.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'The website and its content are provided “as is”. To the fullest extent permitted by law, Lexakind is not liable for any loss arising from your use of, or reliance on, the website.',
        ],
      },
      {
        heading: 'Governing law',
        body: [
          'These terms are governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.',
        ],
      },
    ],
  },
  disclaimer: {
    slug: 'disclaimer',
    title: 'Disclaimer',
    updated: UPDATED,
    intro:
      'This disclaimer applies to all information made available on the Lexakind website.',
    sections: [
      {
        heading: 'Bar Council of India rules',
        body: [
          'As per the rules of the Bar Council of India, advocates and law firms are not permitted to solicit work or advertise. By using this website you acknowledge that you are seeking information about Lexakind of your own accord and that there has been no advertisement, solicitation or inducement.',
        ],
      },
      {
        heading: 'Not legal advice',
        body: [
          'The information on this website is provided for general informational purposes only and does not constitute legal advice. You should not act, or refrain from acting, on the basis of any content here without seeking advice tailored to your specific circumstances from a qualified advocate.',
        ],
      },
      {
        heading: 'No liability',
        body: [
          'Lexakind disclaims all liability for any consequences arising from reliance on information published on this website. Transmission, receipt or use of the website does not create an attorney–client relationship.',
        ],
      },
    ],
  },
};
