export interface Service {
  name: string;
  slug: string;
  description: string;
}

export interface ServiceGroup {
  groupName: string;
  services: Service[];
}

export interface PracticeArea {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  color?: string;
  groups: ServiceGroup[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-law',
    slug: 'corporate-law',
    name: 'Corporate Law',
    shortDesc: 'Business formation, agreements & compliance',
    icon: 'Briefcase',
    groups: [
      {
        groupName: 'Agreements',
        services: [
          { name: 'Founder Agreement', slug: 'founder-agreement', description: 'Legal framework between co-founders' },
          { name: 'Shareholder Agreement', slug: 'shareholder-agreement', description: 'Rights and obligations of shareholders' },
          { name: 'Licensing Agreement', slug: 'licensing-agreement', description: 'IP and software licensing contracts' },
          { name: 'Franchise Agreement', slug: 'franchise-agreement', description: 'Franchise rights and obligations' },
          { name: 'Letter of Intent', slug: 'letter-of-intent', description: 'Pre-contract intent documentation' },
          { name: 'Memorandum of Association', slug: 'memorandum-of-association', description: 'Company charter document' },
          { name: 'Non-Disclosure Agreement', slug: 'non-disclosure-agreement', description: 'Confidentiality protection' },
          { name: 'Privacy Policy Drafting', slug: 'privacy-policy', description: 'DPDP-compliant privacy policies' },
          { name: 'Amendment Agreement', slug: 'amendment-agreement', description: 'Modifying existing contracts' },
          { name: 'Transfer Agreement', slug: 'transfer-agreement', description: 'Asset and business transfer deeds' },
          { name: 'Assignment Agreement', slug: 'assignment-agreement', description: 'Rights assignment documentation' },
          { name: 'Exchange Deed', slug: 'exchange-deed', description: 'Property exchange documentation' },
        ],
      },
      {
        groupName: 'Registration',
        services: [
          { name: 'Private Limited Company', slug: 'pvt-ltd-incorporation', description: 'End-to-end Pvt Ltd formation' },
          { name: 'LLP Registration', slug: 'llp-registration', description: 'Limited Liability Partnership setup' },
          { name: 'Partnership Firm', slug: 'partnership-firm', description: 'Partnership deed and registration' },
          { name: 'Software License Registration', slug: 'software-license', description: 'Tech product licensing' },
          { name: 'Indian Subsidiary', slug: 'indian-subsidiary', description: 'Foreign company Indian arm setup' },
          { name: 'Outsourcing Agreement', slug: 'outsourcing-agreement', description: 'BPO and IT outsourcing contracts' },
          { name: 'Terms of Use Drafting', slug: 'terms-of-use', description: 'Platform T&C for digital products' },
        ],
      },
      {
        groupName: 'Dispute Resolution',
        services: [
          { name: 'Arbitration', slug: 'arbitration', description: 'Out-of-court business dispute resolution' },
        ],
      },
    ],
  },
  {
    id: 'consultation',
    slug: 'consultation',
    name: 'Consultation Services',
    shortDesc: 'Direct legal advice across all areas',
    icon: 'MessageSquare',
    groups: [
      {
        groupName: 'Consult',
        services: [
          { name: 'General Legal Consultation', slug: 'general-consultation', description: 'Expert legal advice on any matter' },
          { name: 'Property Consultation', slug: 'property-consultation', description: 'Guidance on property legal matters' },
          { name: 'FSSAI Advisory', slug: 'fssai-advisory', description: 'Food business license and compliance' },
          { name: 'Traffic Challan Advice', slug: 'traffic-challan', description: 'Motor vehicle challan dispute guidance' },
          { name: 'Legal Notice Drafting', slug: 'legal-notice', description: 'Formal legal notice preparation' },
          { name: 'Easement Act Advisory', slug: 'easement-act', description: 'Right of way and easement rights' },
          { name: 'EdTech Legal Advisory', slug: 'edtech-legal', description: 'Legal compliance for education platforms' },
          { name: 'HealthTech Legal Advisory', slug: 'healthtech-legal', description: 'Healthcare digital product compliance' },
          { name: 'Startup Legal Package', slug: 'startup-legal', description: 'Complete legal setup for startups' },
          { name: 'Business Legal Advisory', slug: 'business-advisory', description: 'Ongoing business legal guidance' },
        ],
      },
      {
        groupName: 'Documentation',
        services: [
          { name: 'Document Review', slug: 'document-review', description: 'Legal review of contracts and deeds' },
          { name: 'Term Sheet Review', slug: 'term-sheet-review', description: 'Investor term sheet analysis' },
          { name: 'Birth Certificate', slug: 'birth-certificate', description: 'Birth certificate legal assistance' },
          { name: 'Death Certificate', slug: 'death-certificate', description: 'Death certificate documentation' },
          { name: 'Name Change', slug: 'name-change', description: 'Legal name change process' },
          { name: 'MODT Documentation', slug: 'modt', description: 'Memorandum of Deposit of Title Deed' },
        ],
      },
    ],
  },
  {
    id: 'family-law',
    slug: 'family-law',
    name: 'Family Law',
    shortDesc: 'Matrimonial, divorce, custody & family matters',
    icon: 'Heart',
    groups: [
      {
        groupName: 'Matrimonial',
        services: [
          { name: 'Hindu Divorce', slug: 'hindu-divorce', description: 'Divorce under Hindu Marriage Act' },
          { name: 'Muslim Divorce', slug: 'muslim-divorce', description: 'Talaq and Muslim personal law divorce' },
          { name: 'Parsi Divorce', slug: 'parsi-divorce', description: 'Divorce under Parsi Marriage Act' },
          { name: 'Christian Divorce', slug: 'christian-divorce', description: 'Divorce under Indian Divorce Act' },
          { name: 'Mutual Consent Divorce', slug: 'mutual-consent-divorce', description: 'Fast-track mutual divorce process' },
          { name: 'Court Marriage', slug: 'court-marriage', description: 'Special Marriage Act registration' },
          { name: 'Alimony & Maintenance', slug: 'alimony-maintenance', description: 'Spousal support claims' },
          { name: 'Marriage Certificate', slug: 'marriage-certificate', description: 'Official marriage registration' },
          { name: 'Marriage Registration', slug: 'marriage-registration', description: 'Legal registration of marriage' },
        ],
      },
      {
        groupName: 'Family Matters',
        services: [
          { name: 'Dowry Cases', slug: 'dowry-cases', description: 'Dowry harassment and IPC 498A defence' },
          { name: 'Child Custody', slug: 'child-custody', description: 'Custody and visitation rights' },
          { name: 'Domestic Violence', slug: 'domestic-violence', description: 'Protection orders and DV Act cases' },
          { name: 'Adoption', slug: 'adoption', description: 'Legal adoption process and documentation' },
          { name: 'Child Maintenance', slug: 'child-maintenance', description: 'Financial support for children' },
          { name: 'Parent Maintenance', slug: 'parent-maintenance', description: 'Senior citizen maintenance rights' },
        ],
      },
      {
        groupName: 'NRI Matrimonial',
        services: [
          { name: 'NRI Marriage Registration', slug: 'nri-marriage-registration', description: 'Marriage registration for NRIs' },
          { name: 'NRI Marital Discord', slug: 'nri-marital-discord', description: 'NRI spouse dispute resolution' },
          { name: 'NRI Desertion Cases', slug: 'nri-desertion', description: 'Abandoned spouse legal relief' },
          { name: 'NRI Dowry Cases', slug: 'nri-dowry', description: 'Cross-border dowry case handling' },
          { name: 'NRI Child Custody', slug: 'nri-child-custody', description: 'International custody disputes' },
        ],
      },
    ],
  },
  {
    id: 'criminal-law',
    slug: 'criminal-law',
    name: 'Criminal Law',
    shortDesc: 'Defence, bail & criminal case representation',
    icon: 'Shield',
    groups: [
      {
        groupName: 'Criminal Defence',
        services: [
          { name: 'Juvenile Crime Cases', slug: 'juvenile-crime', description: 'Legal aid for juvenile offenders' },
          { name: 'Cyber Crime Defence', slug: 'cyber-crime-defence', description: 'IT Act offence representation' },
          { name: 'Motor Accident Cases', slug: 'motor-accident', description: 'Road accident criminal defence' },
          { name: 'Police Law Cases', slug: 'police-law', description: 'Cases involving police conduct' },
          { name: 'Extortion Cases', slug: 'extortion', description: 'Extortion and blackmail defence' },
          { name: 'Anticipatory Bail', slug: 'anticipatory-bail', description: 'Pre-arrest bail applications' },
          { name: 'FIR Quashing', slug: 'fir-quashing', description: 'High Court FIR quashing petitions' },
          { name: 'MMDR Act Cases', slug: 'mmdr-act', description: 'Mines and Minerals Act defence' },
          { name: 'Medical Negligence', slug: 'medical-negligence', description: 'Doctor and hospital negligence cases' },
          { name: 'Murder Cases', slug: 'murder-cases', description: 'IPC 302 representation' },
          { name: 'Assault Cases', slug: 'assault-cases', description: 'Physical assault legal defence' },
        ],
      },
      {
        groupName: 'Bail Services',
        services: [
          { name: 'Regular Bail', slug: 'regular-bail', description: 'Post-arrest bail applications' },
          { name: 'Interim Bail', slug: 'interim-bail', description: 'Temporary bail for urgent matters' },
          { name: 'Bail Appeal', slug: 'bail-appeal', description: 'Bail rejection appeal in High Court' },
          { name: 'Vehicle Release', slug: 'vehicle-release', description: 'Seized vehicle and goods release' },
        ],
      },
      {
        groupName: 'Criminal Acts',
        services: [
          { name: 'Excise Act Cases', slug: 'excise-act', description: 'Liquor and excise law defence' },
          { name: 'Arms Act Cases', slug: 'arms-act', description: 'Weapons and firearms act cases' },
          { name: 'Goonda Act Cases', slug: 'goonda-act', description: 'Externment and Goonda Act defence' },
          { name: 'COFEPOSA Cases', slug: 'cofeposa', description: 'Foreign exchange conservation act' },
          { name: 'KCOCA Cases', slug: 'kcoca', description: 'Karnataka organised crime act defence' },
          { name: 'Chit Fund Cases', slug: 'chit-fund', description: 'Chit fund fraud and dispute cases' },
          { name: 'Money Laundering', slug: 'money-laundering', description: 'PMLA cases and ED investigations' },
          { name: 'Corruption Cases', slug: 'corruption-prevention', description: 'Prevention of Corruption Act defence' },
          { name: 'Wildlife Act Cases', slug: 'wildlife-act', description: 'Wildlife Protection Act cases' },
          { name: 'Death by Negligence', slug: 'death-by-negligence', description: 'IPC 304A negligence cases' },
          { name: 'Drug Cases (NDPS)', slug: 'ndps-cases', description: 'Narcotics and drug law defence' },
        ],
      },
    ],
  },
  {
    id: 'civil-litigation',
    slug: 'civil-litigation',
    name: 'Civil Litigation',
    shortDesc: 'Court cases, disputes & civil remedies',
    icon: 'Scale',
    groups: [
      {
        groupName: 'Litigation',
        services: [
          { name: 'Civil Court Litigation', slug: 'civil-court-litigation', description: 'Civil court case representation' },
          { name: 'Injunction Suits', slug: 'injunction-suits', description: 'Temporary and permanent injunctions' },
          { name: 'T.I. Suits', slug: 'ti-suits', description: 'Title and possession suits' },
          { name: 'Declaration Suits', slug: 'declaration-suits', description: 'Legal declaration of rights' },
          { name: 'Cancellation Suits', slug: 'cancellation-suits', description: 'Deed and document cancellation' },
          { name: 'Eviction Cases', slug: 'eviction-cases', description: 'Tenant eviction proceedings' },
          { name: 'DRT Cases', slug: 'drt-cases', description: 'Debt Recovery Tribunal proceedings' },
        ],
      },
      {
        groupName: 'Civil Disputes',
        services: [
          { name: 'Illegal Possession', slug: 'illegal-possession', description: 'Unlawful property possession cases' },
          { name: 'Tenant Disputes', slug: 'tenant-disputes', description: 'Landlord-tenant conflict resolution' },
          { name: 'Environmental Law', slug: 'environmental-law', description: 'Environmental violation and NGT cases' },
          { name: 'Land Acquisition', slug: 'land-acquisition', description: 'Government acquisition disputes' },
          { name: 'Khata Issues', slug: 'khata-issues', description: 'BBMP Khata transfer and disputes' },
          { name: 'KIAD Act Cases', slug: 'kiad-act', description: 'Industrial area development disputes' },
          { name: 'Defamation Cases', slug: 'defamation', description: 'Civil and criminal defamation suits' },
          { name: 'Notary Services', slug: 'notary', description: 'Document notarisation and attestation' },
        ],
      },
      {
        groupName: 'Revenue Courts',
        services: [
          { name: 'DC Appeal', slug: 'dc-appeal', description: 'Deputy Commissioner court appeals' },
          { name: 'AC Appeal', slug: 'ac-appeal', description: 'Assistant Commissioner appeals' },
          { name: 'Tehsildaar Proceedings', slug: 'tehsildaar', description: 'Tehsil court representation' },
        ],
      },
    ],
  },
  {
    id: 'property-law',
    slug: 'property-law',
    name: 'Property Law',
    shortDesc: 'Property verification, disputes & documentation',
    icon: 'Home',
    groups: [
      {
        groupName: 'Property Verification',
        services: [
          { name: 'Title Check', slug: 'title-check', description: 'Complete property title verification' },
          { name: 'Property Report', slug: 'property-report', description: 'Detailed legal status report' },
          { name: 'Property Paper Verification', slug: 'property-paper-verification', description: 'Document authenticity check' },
          { name: 'Encumbrance Certificate', slug: 'encumbrance-certificate', description: 'Liability and lien verification' },
          { name: 'Will Drafting', slug: 'will-drafting', description: 'Legal Will preparation and registration' },
          { name: 'Gift Deed', slug: 'gift-deed', description: 'Property gift deed drafting' },
          { name: 'Succession Certificate', slug: 'succession-certificate', description: 'Legal heir succession documents' },
        ],
      },
      {
        groupName: 'Legal Drafting',
        services: [
          { name: 'Joint Venture Agreement', slug: 'joint-venture', description: 'JV partnership documentation' },
          { name: 'Rent Agreement', slug: 'rent-agreement', description: '11-month and long-term rent deeds' },
          { name: 'Lease Deed', slug: 'lease-deed', description: 'Commercial and residential leases' },
          { name: 'Partnership Deed', slug: 'partnership-deed', description: 'Business partnership documentation' },
          { name: 'Sale Deed', slug: 'sale-deed', description: 'Property sale transaction deed' },
          { name: 'Discharge Deed', slug: 'discharge-deed', description: 'Loan discharge documentation' },
        ],
      },
    ],
  },
  {
    id: 'real-estate-rera',
    slug: 'real-estate-rera',
    name: 'Real Estate & RERA',
    shortDesc: 'RERA complaints, builder disputes & NRI property',
    icon: 'Building2',
    groups: [
      {
        groupName: 'RERA Cases',
        services: [
          { name: 'Possession Delay Complaint', slug: 'possession-delay', description: 'Builder delay RERA complaint' },
          { name: 'Project Revocation', slug: 'project-revocation', description: 'Stalled project relief under RERA' },
          { name: 'Misleading Advertisement', slug: 'misleading-advertisement', description: 'False builder promise cases' },
          { name: 'Bye Law Violation', slug: 'bye-law-violation', description: 'Building regulation violation cases' },
          { name: 'Illegal Construction', slug: 'illegal-construction', description: 'Unauthorised structure complaints' },
          { name: 'Carpet Area Dispute', slug: 'carpet-area-dispute', description: 'Super built-up vs carpet area fraud' },
        ],
      },
      {
        groupName: 'Real Estate Issues',
        services: [
          { name: 'Illegal Possession (RE)', slug: 're-illegal-possession', description: 'Real estate encroachment cases' },
          { name: 'Verification Delay', slug: 'verification-delay', description: 'Document verification disputes' },
          { name: 'Partition Suit', slug: 'partition-suit', description: 'Property partition among co-owners' },
          { name: 'NRI Land Disputes', slug: 'nri-land-disputes', description: 'NRI property dispute resolution' },
          { name: 'Property Succession', slug: 'property-succession', description: 'Inheritance and succession disputes' },
        ],
      },
      {
        groupName: 'Money Recovery',
        services: [
          { name: 'Cheque Bounce (Section 138)', slug: 'cheque-bounce', description: 'NI Act Section 138 cases' },
          { name: 'Debt Collection', slug: 'debt-collection', description: 'Legal recovery of outstanding dues' },
          { name: 'Insurance Claim', slug: 'insurance-claim', description: 'Disputed insurance settlement' },
          { name: 'Financial Market Disputes', slug: 'financial-markets', description: 'SEBI and stock market disputes' },
          { name: 'Commercial Court Cases', slug: 'commercial-court', description: 'Fast-track commercial dispute resolution' },
        ],
      },
      {
        groupName: 'Verified Properties',
        services: [
          { name: 'Verified Flats', slug: 'verified-flats', description: 'Legally verified apartments' },
          { name: 'Verified Plots & Sites', slug: 'verified-plots', description: 'Clear-title plot listings' },
          { name: 'Verified Villas', slug: 'verified-villas', description: 'Verified villa properties' },
          { name: 'Verified Farmlands', slug: 'verified-farmlands', description: 'Agricultural land with clear title' },
          { name: 'Independent Buildings', slug: 'verified-buildings', description: 'Standalone building verifications' },
        ],
      },
    ],
  },
  {
    id: 'cyber-crime',
    slug: 'cyber-crime',
    name: 'Cyber Crime',
    shortDesc: 'Online fraud, data theft & digital harassment',
    icon: 'Wifi',
    groups: [
      {
        groupName: 'Cyber Offences',
        services: [
          { name: 'Cyber Bullying', slug: 'cyber-bullying', description: 'Online harassment and threats' },
          { name: 'Data Theft', slug: 'data-theft', description: 'Unauthorized data access cases' },
          { name: 'Social Media Fraud', slug: 'social-media-fraud', description: 'Fake profiles and identity theft' },
          { name: 'E-commerce Fraud', slug: 'ecommerce-fraud', description: 'Online shopping scam cases' },
          { name: 'Mobile & Electronic Crimes', slug: 'mobile-crimes', description: 'Device and app-based cybercrimes' },
        ],
      },
    ],
  },
  {
    id: 'consumer-protection',
    slug: 'consumer-protection',
    name: 'Consumer Protection',
    shortDesc: 'Consumer complaints, fraud & online scams',
    icon: 'ShoppingBag',
    groups: [
      {
        groupName: 'Social Fraud',
        services: [
          { name: 'Consumer Forum Complaint', slug: 'consumer-complaint', description: 'NCDRC/state forum complaints' },
          { name: 'Refund Scams', slug: 'refund-scams', description: 'Fake refund and return fraud' },
          { name: 'Fake Job Fraud', slug: 'fake-job-fraud', description: 'Employment scam legal action' },
          { name: 'Matrimonial Fraud', slug: 'matrimonial-fraud', description: 'Marriage-related cheating cases' },
          { name: 'Lottery Scams', slug: 'lottery-scams', description: 'Prize and lottery fraud cases' },
          { name: 'Auto Service Fraud', slug: 'auto-service-fraud', description: 'Vehicle repair overcharging' },
          { name: 'Hospital Negligence', slug: 'hospital-negligence', description: 'Medical consumer complaints' },
          { name: 'Hotel & Restaurant Fraud', slug: 'hotel-fraud', description: 'Hospitality service complaints' },
          { name: 'Medical Tourism Fraud', slug: 'medical-tourism-fraud', description: 'Healthcare tourism scam cases' },
          { name: 'Spa & Wellness Fraud', slug: 'spa-fraud', description: 'Beauty and wellness service cheating' },
          { name: 'Sale Fraud', slug: 'sale-fraud', description: 'Defective product and sale fraud' },
          { name: 'Telecom Complaints', slug: 'telecom-complaints', description: 'Mobile and internet service disputes' },
          { name: 'Transport Complaints', slug: 'transport-complaints', description: 'Logistics and transport fraud' },
        ],
      },
      {
        groupName: 'Money Fraud',
        services: [
          { name: 'Bank Fraud', slug: 'bank-fraud', description: 'Banking institution fraud cases' },
          { name: 'Internet Banking Fraud', slug: 'internet-banking-fraud', description: 'Online transaction fraud recovery' },
          { name: 'Fake Loan Apps', slug: 'fake-loan-apps', description: 'Predatory digital lending fraud' },
          { name: 'Wrongful Transactions', slug: 'wrongful-transactions', description: 'Unauthorised bank transaction cases' },
          { name: 'EMI Scam', slug: 'emi-scam', description: 'Fraudulent EMI scheme cases' },
          { name: 'Credit Card Fraud', slug: 'credit-card-fraud', description: 'Credit card misuse and fraud' },
        ],
      },
    ],
  },
  {
    id: 'intellectual-property',
    slug: 'intellectual-property',
    name: 'Intellectual Property',
    shortDesc: 'Trademarks, patents, copyright & design',
    icon: 'Lightbulb',
    groups: [
      {
        groupName: 'Trademark & IPR',
        services: [
          { name: 'Trademark Objection Reply', slug: 'trademark-objection', description: 'TM examination report response' },
          { name: 'Trademark Renewal', slug: 'trademark-renewal', description: 'TM registration renewal process' },
          { name: 'Trademark Infringement', slug: 'trademark-infringement', description: 'TM violation cases and injunctions' },
          { name: 'Patent Filing', slug: 'patent-filing', description: 'Invention patent application' },
          { name: 'Industrial Design', slug: 'industrial-design', description: 'Design registration and protection' },
          { name: 'Copyright Registration', slug: 'copyright-registration', description: 'Creative work copyright filing' },
        ],
      },
      {
        groupName: 'GST Services',
        services: [
          { name: 'GST Registration', slug: 'gst-registration', description: 'New GST number application' },
          { name: 'GST Return Filing', slug: 'gst-filing', description: 'Monthly and annual return filing' },
          { name: 'GST Modification', slug: 'gst-modification', description: 'GST profile amendment' },
          { name: 'GST Cancellation', slug: 'gst-cancellation', description: 'GST registration surrender' },
        ],
      },
    ],
  },
  {
    id: 'nri-legal-services',
    slug: 'nri-legal-services',
    name: 'NRI Legal Services',
    shortDesc: 'Property, court cases & legal aid for NRIs',
    icon: 'Globe',
    groups: [
      {
        groupName: 'NRI Property',
        services: [
          { name: 'NRI Estate Planning', slug: 'nri-estate-planning', description: 'Will and estate planning for NRIs' },
          { name: 'NRI Property Dispute', slug: 'nri-property-dispute', description: 'Property cases from abroad' },
          { name: 'Special Power of Attorney', slug: 'nri-spa', description: 'SPA drafting and registration' },
          { name: 'NRI Court Cases', slug: 'nri-court-cases', description: 'Indian court representation for NRIs' },
          { name: 'NRI Consumer Cases', slug: 'nri-consumer-cases', description: 'Consumer forum NRI complaints' },
          { name: 'Document Attestation', slug: 'document-attestation', description: 'Solicitor attestation for NRI docs' },
        ],
      },
    ],
  },
  {
    id: 'labour-employment',
    slug: 'labour-employment',
    name: 'Labour & Employment',
    shortDesc: 'Workplace rights, compliance & employment law',
    icon: 'Users',
    groups: [
      {
        groupName: 'Labour Law',
        services: [
          { name: 'Minimum Wages Compliance', slug: 'minimum-wages', description: 'Minimum Wages Act compliance' },
          { name: 'Payment of Wages Act', slug: 'payment-of-wages', description: 'Timely wage payment compliance' },
          { name: 'ESI Compliance', slug: 'esi-compliance', description: 'Employee State Insurance registration' },
          { name: 'Bonus Act Compliance', slug: 'bonus-act', description: 'Payment of Bonus Act advisory' },
          { name: 'EPF Compliance', slug: 'epf-compliance', description: 'Provident fund registration and filings' },
          { name: 'POSH Compliance', slug: 'posh-compliance', description: 'Sexual harassment policy and ICC setup' },
          { name: 'Shop & Establishment Act', slug: 'shop-establishment', description: 'Commercial establishment registration' },
          { name: 'Maternity Benefit Act', slug: 'maternity-benefit', description: 'Maternity leave policy compliance' },
          { name: 'Wrongful Termination', slug: 'wrongful-termination', description: 'Illegal dismissal legal action' },
          { name: 'Employment Contract Drafting', slug: 'employment-contract', description: 'Offer letters and employment deeds' },
          { name: 'Gratuity Disputes', slug: 'gratuity-disputes', description: 'Gratuity claim and non-payment cases' },
          { name: 'Industrial Disputes', slug: 'industrial-disputes', description: 'Labour court and tribunal cases' },
          { name: 'Contract Labour Compliance', slug: 'contract-labour', description: 'Contract labour regulation advisory' },
        ],
      },
    ],
  },
  {
    id: 'foreign-nationals',
    slug: 'foreign-nationals',
    name: 'Foreign Nationals',
    shortDesc: 'Visa, immigration & legal aid for foreigners in India',
    icon: 'Plane',
    groups: [
      {
        groupName: 'Foreign Nationals Law',
        services: [
          { name: 'Customs Act Cases', slug: 'customs-act', description: 'Import/export and customs violation' },
          { name: 'Foreigners Act Cases', slug: 'foreigners-act', description: 'Overstay and visa violation defence' },
          { name: 'NDPS Act Defence', slug: 'ndps-defence', description: 'Drug cases for foreign nationals' },
          { name: 'Economic Offences', slug: 'economic-offences', description: 'Financial crime defence in India' },
          { name: 'Visa Issues', slug: 'visa-issues', description: 'Visa extension and correction matters' },
          { name: 'Court Cases (Foreigners)', slug: 'foreigner-court-cases', description: 'Indian court representation for foreigners' },
          { name: 'Immigration Advisory', slug: 'immigration-advisory', description: 'Entry, stay and exit compliance' },
        ],
      },
    ],
  },
];

/** Total service count across all practice areas */
export const TOTAL_SERVICES = PRACTICE_AREAS.reduce(
  (sum, pa) => sum + pa.groups.reduce((g, grp) => g + grp.services.length, 0),
  0,
);
