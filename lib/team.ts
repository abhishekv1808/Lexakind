export interface Advocate {
  id: string;
  name: string;
  /** Headline role, e.g. "Senior Partner — Criminal Defence" */
  role: string;
  specialties: string[];
  experience: string;
  cases: string;
  location: string;
  languages: string[];
  bio: string;
  initials: string;
  /** Optional portrait. Drop a file in /public/images/team and set the path. */
  image?: string;
}

export const TEAM: Advocate[] = [
  {
    id: 'ananya-rao',
    name: 'Adv. Ananya Rao',
    role: 'Senior Partner — Criminal Defence',
    specialties: ['Bail & Anticipatory Bail', 'White-Collar Crime', 'Trial Advocacy'],
    experience: '18+ years',
    cases: '1,200+ cases',
    location: 'Bengaluru',
    languages: ['English', 'Kannada', 'Hindi'],
    bio: 'A formidable trial advocate known for meticulous case preparation and a calm courtroom presence. Ananya leads our criminal defence practice and has secured bail and acquittals in some of the city’s most complex matters.',
    initials: 'AR',
  },
  {
    id: 'vikram-shenoy',
    name: 'Adv. Vikram Shenoy',
    role: 'Partner — Corporate & Commercial',
    specialties: ['M&A', 'Contracts & Governance', 'Startup Advisory'],
    experience: '15+ years',
    cases: '900+ engagements',
    location: 'Bengaluru',
    languages: ['English', 'Konkani', 'Hindi'],
    bio: 'Vikram advises founders, boards and investors through incorporations, fundraises and exits. He turns dense commercial risk into clear, commercial decisions — and has closed transactions across India and abroad.',
    initials: 'VS',
  },
  {
    id: 'priya-nair',
    name: 'Adv. Priya Nair',
    role: 'Partner — Family & Matrimonial',
    specialties: ['Mutual Divorce', 'Child Custody', 'Maintenance'],
    experience: '12+ years',
    cases: '750+ families',
    location: 'Bengaluru',
    languages: ['English', 'Malayalam', 'Tamil'],
    bio: 'Priya brings empathy and precision to the most personal disputes. She is known for resolving matrimonial matters with discretion — favouring settlement where possible, and fighting hard where it counts.',
    initials: 'PN',
  },
  {
    id: 'rohan-mehta',
    name: 'Adv. Rohan Mehta',
    role: 'Partner — Real Estate & RERA',
    specialties: ['RERA Complaints', 'Title Due Diligence', 'Builder Disputes'],
    experience: '14+ years',
    cases: '1,000+ matters',
    location: 'Bengaluru',
    languages: ['English', 'Hindi', 'Gujarati'],
    bio: 'Rohan protects homebuyers and developers alike — from possession-delay claims before RERA to airtight title verification. His diligence has saved clients from costly property disputes before they begin.',
    initials: 'RM',
  },
  {
    id: 'imran-khan',
    name: 'Adv. Imran Khan',
    role: 'Senior Associate — Civil Litigation',
    specialties: ['Recovery Suits', 'Injunctions', 'Cheque Bounce (S.138)'],
    experience: '16+ years',
    cases: '1,100+ cases',
    location: 'Bengaluru',
    languages: ['English', 'Urdu', 'Hindi'],
    bio: 'Imran is a relentless civil litigator with a sharp eye for procedure. He recovers what is owed to clients through suits, injunctions and Section 138 actions, and rarely lets a matter drift.',
    initials: 'IK',
  },
];
