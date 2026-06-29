import type { BlogPost } from '@/types/blog';

const AUTHOR = {
  name: 'Lexakind Legal Team',
  role: 'Verified Advocates Network',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'property-legal-checklist-bengaluru',
    title: 'Buying property in Bengaluru: the legal checklist',
    excerpt:
      'Title verification, encumbrance certificates and the documents you must never skip before you sign.',
    category: 'Property Law',
    author: AUTHOR,
    date: '2026-06-18',
    readMinutes: 6,
    coverImage: '/images/blog/property-legal-checklist-bengaluru.png',
    relatedSlugs: ['rera-possession-delay', 'cheque-bounce-section-138'],
    content: [
      {
        type: 'p',
        text: 'Buying property is one of the largest financial decisions most people make — and in a fast-moving market like Bengaluru, the legal due diligence behind a purchase matters just as much as the price. A clear title and the right paperwork are what protect you long after the keys change hands.',
      },
      { type: 'h2', text: 'Start with the title' },
      {
        type: 'p',
        text: 'A title check confirms that the seller is the rightful owner and has the legal right to sell. Trace the chain of ownership for at least the last 30 years, and confirm that every transfer in that chain was valid and properly registered.',
      },
      { type: 'h2', text: 'Documents you should always verify' },
      {
        type: 'ul',
        items: [
          'Mother deed and the full chain of sale deeds',
          'Encumbrance Certificate (EC) for the last 13–30 years',
          'Khata certificate and latest property tax receipts',
          'Approved building plan and occupancy certificate',
          'RERA registration (for under-construction projects)',
        ],
      },
      {
        type: 'quote',
        text: 'An Encumbrance Certificate reveals whether a property carries any loans, liens or legal dues. Skipping it is the single most common — and costly — mistake buyers make.',
      },
      { type: 'h2', text: 'Before you sign' },
      {
        type: 'p',
        text: 'Have a property lawyer review the draft sale deed, confirm the EC is clear, and verify that the Khata is in the seller’s name. For apartments, check the builder’s approvals and the status of common-area handover. A short legal review now is far cheaper than litigation later.',
      },
    ],
  },
  {
    slug: 'mutual-consent-divorce-process',
    title: 'Mutual consent divorce in India: process & timelines',
    excerpt:
      'How the fast-track route works, what the two motions mean, and how long it really takes in practice.',
    category: 'Family Law',
    author: AUTHOR,
    date: '2026-06-10',
    readMinutes: 5,
    coverImage: '/images/blog/mutual-consent-divorce-process.png',
    relatedSlugs: ['founder-agreements-startups', 'property-legal-checklist-bengaluru'],
    content: [
      {
        type: 'p',
        text: 'When both spouses agree to part ways, a mutual consent divorce is usually the calmest, quickest and least expensive route. It avoids a contested trial and lets both parties decide the terms of their separation themselves.',
      },
      { type: 'h2', text: 'The two-motion process' },
      {
        type: 'p',
        text: 'Under Section 13B of the Hindu Marriage Act, a mutual consent divorce moves through two stages — the first motion, where the joint petition is filed and recorded, and the second motion, where the court grants the decree after a cooling-off period.',
      },
      {
        type: 'ul',
        items: [
          'First motion: joint petition filed; statements recorded',
          'Cooling-off period: typically six months (often waivable)',
          'Second motion: court confirms consent and grants the decree',
          'Settlement: alimony, custody and asset division are agreed upfront',
        ],
      },
      {
        type: 'quote',
        text: 'The Supreme Court has held that the six-month waiting period is directory, not mandatory — courts can waive it where the separation is genuine and settlement is final.',
      },
      { type: 'h2', text: 'How long does it take?' },
      {
        type: 'p',
        text: 'With a waiver, a mutual consent divorce can conclude in a few months; without one, expect roughly six to eighteen months. A well-drafted settlement agreement is what keeps the process smooth — get it reviewed before the first motion is filed.',
      },
    ],
  },
  {
    slug: 'founder-agreements-startups',
    title: 'Founder agreements every startup should have',
    excerpt:
      'From equity splits to vesting and exits — the agreements that protect your company before it grows.',
    category: 'Corporate Law',
    author: AUTHOR,
    date: '2026-05-28',
    readMinutes: 7,
    coverImage: '/images/blog/founder-agreements-startups.png',
    relatedSlugs: ['cheque-bounce-section-138', 'mutual-consent-divorce-process'],
    content: [
      {
        type: 'p',
        text: 'Most founder disputes are not about bad intentions — they are about assumptions that were never written down. Putting the right agreements in place early is the cheapest insurance a startup can buy.',
      },
      { type: 'h2', text: 'The founders’ agreement' },
      {
        type: 'p',
        text: 'This is the foundation. It records the equity split, roles and responsibilities, decision-making rights, and what happens if a founder leaves. Vesting schedules — usually four years with a one-year cliff — protect the company if someone exits early.',
      },
      { type: 'h2', text: 'Agreements to put in place' },
      {
        type: 'ul',
        items: [
          'Founders’ agreement with vesting and exit terms',
          'Shareholders’ agreement once you raise capital',
          'Employment and IP-assignment contracts for the team',
          'Non-disclosure agreements with partners and vendors',
          'Clear terms of use and a DPDP-compliant privacy policy',
        ],
      },
      {
        type: 'quote',
        text: 'Without an IP-assignment clause, the code, designs and content created by your team may not legally belong to the company — a red flag every investor checks during due diligence.',
      },
      { type: 'h2', text: 'Get it reviewed early' },
      {
        type: 'p',
        text: 'These documents are far easier to put in place when everyone is aligned than to negotiate during a dispute or a funding round. A corporate lawyer can tailor them to your cap table and growth plans in a single sitting.',
      },
    ],
  },
  {
    slug: 'cheque-bounce-section-138',
    title: 'Cheque bounce under Section 138: your legal options',
    excerpt:
      'What to do when a cheque is dishonoured — the notice, the timeline and how recovery actually works.',
    category: 'Recovery',
    author: AUTHOR,
    date: '2026-05-15',
    readMinutes: 5,
    coverImage: '/images/blog/cheque-bounce-section-138.png',
    relatedSlugs: ['founder-agreements-startups', 'rera-possession-delay'],
    content: [
      {
        type: 'p',
        text: 'A dishonoured cheque is more than an inconvenience — under Section 138 of the Negotiable Instruments Act, it is a criminal offence that gives you a clear legal route to recover your money.',
      },
      { type: 'h2', text: 'The timeline that matters' },
      {
        type: 'ul',
        items: [
          'Present the cheque within its validity (3 months)',
          'On dishonour, send a legal demand notice within 30 days',
          'The drawer has 15 days to pay after receiving the notice',
          'If unpaid, file a complaint within the next 30 days',
        ],
      },
      {
        type: 'quote',
        text: 'Miss the 30-day notice window and you may lose the right to file under Section 138 — the deadlines are strict, so act quickly once a cheque bounces.',
      },
      { type: 'h2', text: 'What you can recover' },
      {
        type: 'p',
        text: 'Courts can order the cheque amount along with compensation, and the offence carries a penalty of up to twice the cheque value or imprisonment. A lawyer can also pursue a parallel civil recovery suit to secure the underlying debt.',
      },
    ],
  },
  {
    slug: 'rera-possession-delay',
    title: 'Builder delaying possession? How RERA protects you',
    excerpt:
      'Your rights as a homebuyer when a project is late — refunds, interest and how to file a RERA complaint.',
    category: 'Real Estate',
    author: AUTHOR,
    date: '2026-05-02',
    readMinutes: 6,
    coverImage: '/images/blog/rera-possession-delay.png',
    relatedSlugs: ['property-legal-checklist-bengaluru', 'cheque-bounce-section-138'],
    content: [
      {
        type: 'p',
        text: 'Delayed possession is one of the most common grievances homebuyers face. The Real Estate (Regulation and Development) Act, 2016 — RERA — shifted the balance of power firmly towards buyers, with real remedies for delay.',
      },
      { type: 'h2', text: 'Your rights on delay' },
      {
        type: 'p',
        text: 'If the builder fails to hand over possession by the date promised in the agreement, you can either continue with the project and claim interest for every month of delay, or withdraw and demand a full refund with interest.',
      },
      {
        type: 'ul',
        items: [
          'Interest on delayed possession at the prescribed rate',
          'Full refund with interest if you choose to exit',
          'Compensation for misleading advertisements or deviations',
          'Action against unregistered or non-compliant projects',
        ],
      },
      {
        type: 'quote',
        text: 'RERA requires builders to deposit 70% of buyer funds in a dedicated account — a safeguard designed to stop diversion of money to other projects.',
      },
      { type: 'h2', text: 'Filing a complaint' },
      {
        type: 'p',
        text: 'Complaints are filed with the State RERA authority and are typically faster and cheaper than civil court. Keep your agreement, payment receipts and all communication ready — a real estate lawyer can draft and present the complaint to maximise your relief.',
      },
    ],
  },
];

export const BLOG_CATEGORIES = Array.from(
  new Set(BLOG_POSTS.map((p) => p.category)),
);

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, 3);
}
