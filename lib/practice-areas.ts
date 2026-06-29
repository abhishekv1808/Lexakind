import type { PracticeArea } from '@/types/practice-area';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'corporate-law',
    name: 'Corporate Law',
    shortName: 'Corporate',
    tagline: 'Legal backbone for your business',
    description:
      'Incorporation, contracts, compliance and governance — end-to-end legal support for startups and established companies.',
    icon: 'Briefcase',
    relatedSlugs: ['civil-litigation', 'intellectual-property', 'labour-employment'],
  },
  {
    slug: 'civil-litigation',
    name: 'Civil Litigation',
    shortName: 'Civil',
    tagline: 'Resolving disputes with precision',
    description:
      'Representation in civil disputes, recovery suits, injunctions and appeals across trial and appellate courts.',
    icon: 'Scale',
    relatedSlugs: ['corporate-law', 'property-law', 'consumer-protection'],
  },
  {
    slug: 'criminal-law',
    name: 'Criminal Law',
    shortName: 'Criminal',
    tagline: 'Defending your rights and liberty',
    description:
      'Bail, trial defence, anticipatory bail and white-collar matters handled by experienced criminal advocates.',
    icon: 'Shield',
    relatedSlugs: ['cyber-crime', 'civil-litigation', 'family-law'],
  },
  {
    slug: 'family-law',
    name: 'Family Law',
    shortName: 'Family',
    tagline: 'Compassionate counsel for families',
    description:
      'Divorce, custody, maintenance, adoption and matrimonial disputes resolved with discretion and care.',
    icon: 'Heart',
    relatedSlugs: ['property-law', 'civil-litigation', 'nri-legal-services'],
  },
  {
    slug: 'property-law',
    name: 'Property Law',
    shortName: 'Property',
    tagline: 'Secure your property interests',
    description:
      'Title verification, sale deeds, partition, tenancy and property dispute resolution across India.',
    icon: 'Home',
    relatedSlugs: ['real-estate-rera', 'civil-litigation', 'nri-legal-services'],
  },
  {
    slug: 'cyber-crime',
    name: 'Cyber Crime',
    shortName: 'Cyber',
    tagline: 'Justice in the digital age',
    description:
      'Online fraud, data theft, defamation and harassment — swift legal action for cyber offences.',
    icon: 'Wifi',
    relatedSlugs: ['criminal-law', 'intellectual-property', 'consumer-protection'],
  },
  {
    slug: 'consumer-protection',
    name: 'Consumer Protection',
    shortName: 'Consumer',
    tagline: 'Standing up for the consumer',
    description:
      'Deficiency of service, unfair trade practices and product liability claims before consumer forums.',
    icon: 'ShoppingBag',
    relatedSlugs: ['civil-litigation', 'corporate-law', 'cyber-crime'],
  },
  {
    slug: 'intellectual-property',
    name: 'Intellectual Property',
    shortName: 'IP',
    tagline: 'Protecting what you create',
    description:
      'Trademark, copyright and patent registration, licensing and infringement enforcement.',
    icon: 'Lightbulb',
    relatedSlugs: ['corporate-law', 'cyber-crime', 'civil-litigation'],
  },
  {
    slug: 'real-estate-rera',
    name: 'Real Estate & RERA',
    shortName: 'RERA',
    tagline: 'Confident real estate decisions',
    description:
      'RERA complaints, builder disputes, due diligence and registration for buyers and developers.',
    icon: 'Building2',
    relatedSlugs: ['property-law', 'consumer-protection', 'civil-litigation'],
  },
  {
    slug: 'nri-legal-services',
    name: 'NRI Legal Services',
    shortName: 'NRI',
    tagline: 'Legal support across borders',
    description:
      'Power of attorney, property management, inheritance and dispute handling for non-resident Indians.',
    icon: 'Globe',
    relatedSlugs: ['property-law', 'family-law', 'foreign-nationals'],
  },
  {
    slug: 'labour-employment',
    name: 'Labour & Employment',
    shortName: 'Labour',
    tagline: 'Fair workplaces, clear contracts',
    description:
      'Employment contracts, wrongful termination, POSH compliance and industrial dispute resolution.',
    icon: 'Users',
    relatedSlugs: ['corporate-law', 'civil-litigation', 'consumer-protection'],
  },
  {
    slug: 'foreign-nationals',
    name: 'Foreign Nationals',
    shortName: 'Foreign',
    tagline: 'Navigating Indian law abroad',
    description:
      'Visa, FRRO, immigration and legal representation for foreign nationals living or investing in India.',
    icon: 'Plane',
    relatedSlugs: ['nri-legal-services', 'corporate-law', 'property-law'],
  },
];

export const PA_SLUGS = PRACTICE_AREAS.map((p) => p.slug);
