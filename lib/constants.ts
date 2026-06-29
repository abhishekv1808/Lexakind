export const SITE = {
  name: 'Lexakind',
  url: 'https://www.lexakind.com',
  description:
    'Lexakind connects you with 4,000+ verified lawyers across India. Expert legal help for property, family, criminal, corporate, cyber crime and 160+ services.',
  phone: '+918618888526',
  phoneDisplay: '+91 86188 88526',
  email: 'lexakind1@gmail.com',
  whatsapp: '918618888526',
  whatsappMessage: 'Hello%2C%20I%20need%20legal%20assistance.',
  address: {
    line: 'Level 15, UB City, Concorde Towers, 24, Vittal Mallya Rd',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560001',
    country: 'IN',
  },
  hours: 'Mon–Fri 8AM–5PM · Sat 8AM–1PM',
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}?text=${SITE.whatsappMessage}`;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about/team' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Resources', href: '/resources/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Corporate Law', href: '/practice-areas/corporate-law' },
    { label: 'Civil Litigation', href: '/practice-areas/civil-litigation' },
    { label: 'Criminal Law', href: '/practice-areas/criminal-law' },
    { label: 'Family Law', href: '/practice-areas/family-law' },
    { label: 'Property Law', href: '/practice-areas/property-law' },
    { label: 'Cyber Crime', href: '/practice-areas/cyber-crime' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
} as const;
