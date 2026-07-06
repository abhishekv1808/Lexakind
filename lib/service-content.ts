// Enriched content for individual service pages (phase 1 — top services by
// search demand). A service gets its own page at
// /practice-areas/[paSlug]/[slug] ONLY if it has an entry here; all other
// services remain anchor cards on their practice-area page.
//
// Content rules: India-specific, accurate but hedged ("typically", "varies
// by state"), no fee amounts promised, and references the post-2024 codes
// (BNS/BNSS) where relevant.

export interface ServiceContent {
  /** Must match the service slug in lib/services-data.ts */
  slug: string;
  /** Must match the parent practice-area slug in lib/services-data.ts */
  paSlug: string;
  metaTitle: string;
  metaDescription: string;
  /** 2 short paragraphs shown as the page intro */
  intro: string[];
  /** How it works with Lexakind — 4–5 numbered steps */
  process: { title: string; description: string }[];
  /** Documents typically required */
  documents: string[];
  /** Typical duration, always hedged */
  timeline: string;
  faqs: { q: string; a: string }[];
}

export const SERVICE_CONTENT: ServiceContent[] = [
  // ── Corporate Law ──────────────────────────────────────────
  {
    slug: 'pvt-ltd-incorporation',
    paSlug: 'corporate-law',
    metaTitle: 'Private Limited Company Registration — Process, Documents & Timeline',
    metaDescription:
      'Register a Private Limited Company in India with end-to-end legal support: name approval, SPICe+ filing, DIN, PAN/TAN and incorporation certificate. First consultation free.',
    intro: [
      'A Private Limited Company is the most trusted structure for startups and growing businesses in India — it limits your personal liability, makes fundraising possible, and gives your business a credible legal identity. Incorporation is done through the MCA’s SPICe+ process, which bundles name approval, DIN, PAN, TAN and more into a single filing.',
      'Lexakind’s corporate advocates and company secretaries handle the entire process — from choosing a compliant name and drafting your MOA and AOA to filing SPICe+ and receiving your Certificate of Incorporation — so you can focus on the business, not the paperwork.',
    ],
    process: [
      { title: 'Free consultation', description: 'We understand your business, shareholding plan and advise on the right structure.' },
      { title: 'Name reservation', description: 'We run availability and trademark checks, then reserve your company name via SPICe+ Part A.' },
      { title: 'Documentation', description: 'We draft the MOA, AOA and declarations, and obtain digital signatures (DSC) for directors.' },
      { title: 'SPICe+ filing', description: 'We file the integrated incorporation form with the Registrar of Companies.' },
      { title: 'Incorporation kit', description: 'You receive the Certificate of Incorporation, PAN, TAN and post-incorporation compliance checklist.' },
    ],
    documents: [
      'PAN and Aadhaar of all directors and shareholders',
      'Passport-size photographs of directors',
      'Address proof of directors (bank statement / utility bill)',
      'Registered office proof (rent agreement or ownership deed)',
      'NOC from the property owner',
      'Proposed company name options and business activity details',
    ],
    timeline: 'Typically 7–14 working days from document submission, subject to MCA processing.',
    faqs: [
      {
        q: 'How many directors and shareholders do I need?',
        a: 'A Private Limited Company needs a minimum of 2 directors and 2 shareholders (they can be the same people), with at least one director resident in India. The maximum is 200 shareholders.',
      },
      {
        q: 'Is there a minimum capital requirement?',
        a: 'No. The Companies Act no longer prescribes a minimum paid-up capital — you can start with any amount, though ₹10,000–₹1,00,000 is common for new companies.',
      },
      {
        q: 'What compliance follows incorporation?',
        a: 'Key post-incorporation steps include opening a company bank account, appointing an auditor within 30 days, filing the commencement-of-business declaration (INC-20A), and annual ROC filings. We provide a full compliance calendar.',
      },
    ],
  },
  {
    slug: 'llp-registration',
    paSlug: 'corporate-law',
    metaTitle: 'LLP Registration in India — Process, Documents & Timeline',
    metaDescription:
      'Register a Limited Liability Partnership with expert help: name reservation, FiLLiP filing, LLP agreement drafting and registration. Transparent pricing, free first consultation.',
    intro: [
      'A Limited Liability Partnership (LLP) combines the flexibility of a partnership with the protection of limited liability — partners are not personally liable for the firm’s debts or another partner’s misconduct. It suits professional firms, family businesses and services companies that want low compliance overhead.',
      'Lexakind manages LLP registration end to end: name reservation, FiLLiP incorporation filing with the MCA, and drafting a robust LLP Agreement that clearly sets out capital, profit sharing and exit terms — the document most DIY registrations get wrong.',
    ],
    process: [
      { title: 'Free consultation', description: 'We assess whether an LLP is the right structure for your goals and partner mix.' },
      { title: 'DSC & name reservation', description: 'We obtain digital signatures for designated partners and reserve the LLP name (RUN-LLP).' },
      { title: 'FiLLiP filing', description: 'We file the incorporation form with the Registrar and obtain the Certificate of Incorporation.' },
      { title: 'LLP Agreement', description: 'We draft and stamp your LLP Agreement and file Form 3 within the statutory 30-day window.' },
      { title: 'Handover', description: 'You receive the incorporation certificate, LLPIN, PAN/TAN and a compliance checklist.' },
    ],
    documents: [
      'PAN and Aadhaar of all partners',
      'Address proof of partners (bank statement / utility bill)',
      'Passport-size photographs',
      'Registered office proof and owner NOC',
      'Proposed name options and business activity details',
    ],
    timeline: 'Typically 10–15 working days including LLP Agreement filing.',
    faqs: [
      {
        q: 'LLP or Private Limited — which should I choose?',
        a: 'Choose an LLP for lower compliance cost and flexible internal management; choose a Private Limited Company if you plan to raise equity funding or issue ESOPs, since investors rarely fund LLPs. We advise on this in your free consultation.',
      },
      {
        q: 'What is the minimum number of partners?',
        a: 'An LLP needs at least 2 designated partners, with at least one resident in India. There is no upper limit on partners and no minimum capital requirement.',
      },
      {
        q: 'What annual compliance does an LLP have?',
        a: 'LLPs file Form 11 (annual return) by 30 May and Form 8 (statement of accounts) by 30 October each year, plus income-tax returns. Audit applies only above turnover/contribution thresholds.',
      },
    ],
  },
  {
    slug: 'non-disclosure-agreement',
    paSlug: 'corporate-law',
    metaTitle: 'NDA Drafting & Review — Protect Confidential Business Information',
    metaDescription:
      'Get a watertight Non-Disclosure Agreement drafted or reviewed by corporate advocates — mutual or one-way NDAs for employees, vendors, investors and partners.',
    intro: [
      'A Non-Disclosure Agreement (NDA) is the first line of defence for your business ideas, client lists, financials and technology. A well-drafted NDA defines exactly what is confidential, how it may be used, and what happens if it leaks — a generic template usually does none of these precisely enough to be enforced.',
      'Lexakind’s corporate advocates draft and review one-way and mutual NDAs tailored to your situation — employee, vendor, investor or partnership discussions — with enforceable remedies including injunctions and damages under Indian contract law.',
    ],
    process: [
      { title: 'Free consultation', description: 'We understand what you’re protecting, from whom, and for how long.' },
      { title: 'Drafting', description: 'A tailored NDA draft — definitions, permitted use, term, remedies and jurisdiction — typically within 2–3 working days.' },
      { title: 'Review round', description: 'We refine the draft based on your feedback and the counterparty’s comments.' },
      { title: 'Execution support', description: 'Guidance on stamping and signing so the agreement is properly enforceable.' },
    ],
    documents: [
      'Names and details of both parties',
      'Description of the confidential information involved',
      'Purpose of the disclosure (deal, employment, vendor engagement)',
      'Intended term of confidentiality',
    ],
    timeline: 'First draft typically within 2–3 working days.',
    faqs: [
      {
        q: 'Are NDAs enforceable in India?',
        a: 'Yes. NDAs are enforceable as contracts under the Indian Contract Act, 1872. Courts can grant injunctions to stop misuse and award damages for breach — provided the NDA is specific about what is confidential and reasonable in scope.',
      },
      {
        q: 'Do I need a mutual or one-way NDA?',
        a: 'Use a one-way NDA when only you are sharing sensitive information (e.g. with an employee or vendor), and a mutual NDA when both sides exchange it (e.g. partnership or M&A discussions). We recommend the right form in your consultation.',
      },
      {
        q: 'Does an NDA need to be stamped or notarised?',
        a: 'An NDA does not need registration, but paying applicable stamp duty (which varies by state) strengthens its evidentiary value in court. Notarisation is optional. We guide you on both.',
      },
    ],
  },
  {
    slug: 'founder-agreement',
    paSlug: 'corporate-law',
    metaTitle: 'Founder Agreement Drafting — Equity, Vesting & Exit Terms',
    metaDescription:
      'Protect your startup with a founders’ agreement covering equity split, vesting, roles, IP assignment and exit terms — drafted by startup-focused corporate advocates.',
    intro: [
      'Most startup disputes are not with competitors — they are between co-founders. A Founder Agreement settles the hard questions early: who owns how much, what happens when someone leaves, who controls key decisions, and who owns the IP. Signing one while relations are good is the cheapest insurance a startup can buy.',
      'Lexakind drafts founder agreements covering equity split and vesting schedules, roles and responsibilities, IP assignment to the company, non-compete terms, deadlock resolution and exit mechanics — aligned with how Indian investors expect these documents to read at diligence.',
    ],
    process: [
      { title: 'Free consultation', description: 'We map your founding team, equity intentions and concerns.' },
      { title: 'Term sheet', description: 'We circulate a plain-language summary of key terms so all founders align before drafting.' },
      { title: 'Drafting', description: 'A complete founder agreement draft, typically within 3–5 working days.' },
      { title: 'Review & signing', description: 'We walk every founder through the terms, incorporate feedback and support execution.' },
    ],
    documents: [
      'Founder details (PAN, address)',
      'Proposed equity split and capital contributions',
      'Roles and responsibilities of each founder',
      'Company details (or incorporation plans)',
      'Any prior understanding or MOU between founders',
    ],
    timeline: 'First draft typically within 3–5 working days.',
    faqs: [
      {
        q: 'What is founder vesting and do we need it?',
        a: 'Vesting means founders earn their equity over time (commonly 4 years with a 1-year cliff). It protects the company if a founder exits early — without it, a departed co-founder keeps their full stake. Investors almost always require it.',
      },
      {
        q: 'Should we sign this before or after incorporation?',
        a: 'Ideally before or immediately after incorporation. Pre-incorporation, it binds the founders personally; post-incorporation, key terms are mirrored in the company’s Articles and a shareholders’ agreement.',
      },
      {
        q: 'What happens if a co-founder leaves or underperforms?',
        a: 'The agreement defines good-leaver and bad-leaver scenarios — what vested and unvested equity they keep, buy-back rights, and non-compete obligations. This is precisely the clause that prevents litigation later.',
      },
    ],
  },

  // ── Consultation / Documentation ───────────────────────────
  {
    slug: 'legal-notice',
    paSlug: 'consultation',
    metaTitle: 'Legal Notice Drafting & Reply — Send or Respond Through an Advocate',
    metaDescription:
      'Send a formal legal notice or reply to one through a verified advocate — recovery of money, cheque bounce, property, employment and matrimonial matters. Drafted in 2–3 days.',
    intro: [
      'A legal notice is a formal warning sent through an advocate before initiating court proceedings — and in many matters (like cheque bounce under Section 138 of the NI Act) it is a mandatory first step. A well-drafted notice often resolves the dispute itself, because it shows the other side you are prepared to litigate.',
      'Lexakind advocates draft and dispatch legal notices for money recovery, cheque bounce, property disputes, employment issues, matrimonial matters and consumer grievances — and draft precise, liability-aware replies when you are on the receiving end.',
    ],
    process: [
      { title: 'Free consultation', description: 'An advocate reviews your matter, evidence and the outcome you want.' },
      { title: 'Drafting', description: 'The notice is drafted with the correct legal grounds, demands and statutory deadlines.' },
      { title: 'Your approval', description: 'You review the draft; we refine it until you are satisfied.' },
      { title: 'Dispatch & proof', description: 'The notice is sent on advocate letterhead via registered post/courier, with acknowledgment preserved as evidence.' },
      { title: 'Next steps', description: 'If there’s no compliance, we advise you on filing the appropriate case.' },
    ],
    documents: [
      'Brief written summary of the dispute',
      'Supporting documents (agreement, invoices, cheque, messages)',
      'Name and address of the opposite party',
      'Any earlier correspondence on the issue',
    ],
    timeline: 'Notice typically drafted and dispatched within 2–3 working days.',
    faqs: [
      {
        q: 'Is a legal notice mandatory before filing a case?',
        a: 'In some matters, yes — a cheque-bounce complaint under Section 138 NI Act requires a demand notice within 30 days of the cheque return, and suits against the government require notice under Section 80 CPC. In most other civil matters it is not mandatory but strongly advisable.',
      },
      {
        q: 'What happens if the other party ignores the notice?',
        a: 'Ignoring a notice has no direct penalty, but it strengthens your case — the court sees you attempted resolution. After the deadline in the notice lapses, you can proceed to file the appropriate case, and we guide you on that.',
      },
      {
        q: 'I received a legal notice. Should I reply?',
        a: 'Yes, almost always — silence can be read against you, and a well-drafted reply can neutralise weak claims early. Never reply informally yourself; an advocate ensures you don’t admit liability inadvertently.',
      },
    ],
  },
  {
    slug: 'name-change',
    paSlug: 'consultation',
    metaTitle: 'Legal Name Change in India — Affidavit, Newspaper & Gazette Process',
    metaDescription:
      'Change your name legally with complete support: affidavit drafting, newspaper publication and Gazette of India notification — for marriage, numerology, spelling or personal choice.',
    intro: [
      'A legal name change in India follows a three-step process: a sworn affidavit before a notary or magistrate, publication in newspapers, and notification in the Gazette of India (or state gazette). Only after gazette publication is the new name accepted for passports, PAN, Aadhaar and educational records.',
      'Whether the change is due to marriage, divorce, numerology, a spelling correction or personal choice, Lexakind handles the entire chain — affidavit drafting, newspaper advertisements in the prescribed format, and the gazette application — so nothing gets rejected for a technicality.',
    ],
    process: [
      { title: 'Free consultation', description: 'We confirm the requirements for your specific case (marriage, correction, minor’s name, etc.).' },
      { title: 'Affidavit', description: 'We draft and notarise your name-change affidavit.' },
      { title: 'Newspaper publication', description: 'We publish the change in one English and one regional-language newspaper, as required.' },
      { title: 'Gazette notification', description: 'We prepare and submit the application to the Department of Publication for Gazette of India publication.' },
      { title: 'Record updates', description: 'We guide you on updating PAN, Aadhaar, passport and other records with the gazette copy.' },
    ],
    documents: [
      'Aadhaar and PAN',
      'Passport-size photographs',
      'Proof of present name (birth certificate / 10th certificate)',
      'Marriage certificate or divorce decree (if applicable)',
      'Address proof',
    ],
    timeline: 'Affidavit and newspaper steps within about a week; gazette publication typically takes 4–8 weeks thereafter.',
    faqs: [
      {
        q: 'Is gazette publication compulsory?',
        a: 'For most official records — passport, educational certificates, government employment — yes, the gazette notification is treated as conclusive proof of name change. For minor spelling alignments, some authorities accept an affidavit alone, but the gazette route is the safe standard.',
      },
      {
        q: 'Can I change my child’s name?',
        a: 'Yes. A parent or guardian executes the affidavit on the minor’s behalf and the same newspaper-plus-gazette process follows. Both parents’ consent is generally expected.',
      },
      {
        q: 'Does a name change after marriage require this full process?',
        a: 'A marriage certificate is often sufficient to add a spouse’s surname on records like passports. But for a complete or non-standard change, the affidavit–newspaper–gazette route is required. We advise which applies in your consultation.',
      },
    ],
  },

  // ── Family Law ─────────────────────────────────────────────
  {
    slug: 'mutual-consent-divorce',
    paSlug: 'family-law',
    metaTitle: 'Mutual Consent Divorce — Process, Timeline & Documents',
    metaDescription:
      'File a mutual consent divorce with experienced family advocates — joint petition, settlement terms, both motions and decree. The fastest, most amicable route to divorce in India.',
    intro: [
      'Mutual consent divorce under Section 13B of the Hindu Marriage Act (and parallel provisions in other personal laws) is the fastest and least adversarial way to end a marriage — both spouses jointly petition the court after agreeing on alimony, child custody and division of assets.',
      'Lexakind’s family advocates draft the joint petition and settlement terms, represent you at both motions, and move to waive the six-month cooling-off period where the Supreme Court’s guidelines permit — keeping a difficult process as short and dignified as possible.',
    ],
    process: [
      { title: 'Free consultation', description: 'We understand your situation and confirm the eligibility conditions (one year of separation).' },
      { title: 'Settlement terms', description: 'We help both spouses record agreed terms on maintenance, custody and assets.' },
      { title: 'First motion', description: 'The joint petition is filed and statements are recorded before the family court.' },
      { title: 'Cooling-off period', description: 'The statutory 6-month window applies — courts can waive it in deserving cases.' },
      { title: 'Second motion & decree', description: 'Final statements are recorded and the court grants the divorce decree.' },
    ],
    documents: [
      'Marriage certificate or proof of marriage',
      'Address proof of both spouses',
      'Photographs of the marriage',
      'Proof of one year of separate living',
      'Details of children, income and assets (for settlement terms)',
    ],
    timeline: 'Typically 6–18 months; can be shorter where the court waives the cooling-off period.',
    faqs: [
      {
        q: 'Can the 6-month waiting period be waived?',
        a: 'Yes. Following Amardeep Singh v. Harveen Kaur (2017), courts may waive the cooling-off period where the marriage has irretrievably broken down, all disputes are settled, and there is no chance of reconciliation. We apply for waiver wherever the facts support it.',
      },
      {
        q: 'What if my spouse withdraws consent midway?',
        a: 'Consent must subsist until the decree — either spouse can withdraw before the second motion, and the petition then fails. In that event we advise you on a contested divorce and interim protections.',
      },
      {
        q: 'Do both spouses need to appear in court?',
        a: 'Generally yes, at both motions. Courts increasingly permit appearance through video conferencing, and in limited cases through a power-of-attorney holder — especially relevant for NRI spouses. We arrange this where possible.',
      },
    ],
  },
  {
    slug: 'court-marriage',
    paSlug: 'family-law',
    metaTitle: 'Court Marriage — Special Marriage Act Procedure & Documents',
    metaDescription:
      'Complete court-marriage support under the Special Marriage Act: notice of intended marriage, 30-day period, solemnisation and marriage certificate — for all religions and inter-faith couples.',
    intro: [
      'Court marriage under the Special Marriage Act, 1954 lets any two adults marry irrespective of religion or caste, without religious ceremonies. The process runs through the Marriage Officer: a notice of intended marriage, a 30-day objection window, and solemnisation before witnesses — ending with a marriage certificate that is valid worldwide.',
      'Lexakind advocates prepare your notice and declarations, handle any objections during the 30-day period, arrange witnesses if needed, and stay present through solemnisation — particularly valuable for inter-faith and inter-caste couples who want the process handled discreetly and correctly.',
    ],
    process: [
      { title: 'Free consultation', description: 'We verify eligibility (age, capacity, jurisdiction) and plan the timeline.' },
      { title: 'Notice of intended marriage', description: 'Filed with the Marriage Officer of the district where either party has resided for 30 days.' },
      { title: '30-day notice period', description: 'The notice is displayed publicly; we respond to any objections raised.' },
      { title: 'Solemnisation', description: 'Both parties and three witnesses sign declarations before the Marriage Officer.' },
      { title: 'Marriage certificate', description: 'The certificate is issued — conclusive proof of a legally valid marriage.' },
    ],
    documents: [
      'Age proof of both parties (birth certificate / 10th certificate)',
      'Address proof and residence proof of 30 days in the district',
      'Passport-size photographs',
      'Divorce decree or death certificate of former spouse (if previously married)',
      'Three witnesses with ID and address proof',
    ],
    timeline: 'A minimum of about 30–45 days from filing the notice, owing to the statutory objection window.',
    faqs: [
      {
        q: 'What is the minimum age for court marriage?',
        a: 'The groom must be 21 and the bride 18 under the Special Marriage Act. Both parties must be mentally capable of consent and not within prohibited degrees of relationship (unless custom permits).',
      },
      {
        q: 'Do our parents need to consent?',
        a: 'No. Parental consent is not legally required for adults marrying under the Special Marriage Act. If you apprehend interference or threats, we can also advise on police protection through the High Court.',
      },
      {
        q: 'Can NRIs or foreign nationals have a court marriage in India?',
        a: 'Yes, provided one party has resided in the district for 30 days before giving notice. Foreign nationals typically also need a no-objection certificate from their embassy. We handle these additional requirements.',
      },
    ],
  },
  {
    slug: 'child-custody',
    paSlug: 'family-law',
    metaTitle: 'Child Custody Lawyer — Custody, Visitation & Guardianship',
    metaDescription:
      'Fight for your child’s best interests with experienced custody advocates — physical, joint and legal custody, visitation rights and guardianship petitions across Indian family courts.',
    intro: [
      'Indian courts decide custody on one principle above all: the welfare of the child — not the parents’ rights. Custody may be physical (the child lives with you), joint (shared arrangements), or legal (decision-making authority), and orders can be revisited as circumstances change.',
      'Lexakind’s family advocates represent parents and guardians in custody and visitation proceedings under the Guardians and Wards Act and personal laws — building the strongest picture of stability, schooling, care and financial support, while keeping the process as low-conflict as possible for the child.',
    ],
    process: [
      { title: 'Free consultation', description: 'We assess your situation, the child’s circumstances and realistic outcomes.' },
      { title: 'Strategy & mediation', description: 'Where possible we negotiate a parenting plan — courts favour agreed arrangements.' },
      { title: 'Petition filing', description: 'We file the custody/guardianship petition with supporting evidence in the family court.' },
      { title: 'Interim orders', description: 'We seek interim custody or visitation so contact isn’t lost during proceedings.' },
      { title: 'Final orders', description: 'The court decides based on the child’s welfare; we ensure orders are practical and enforceable.' },
    ],
    documents: [
      'Child’s birth certificate',
      'Marriage certificate / divorce decree (if applicable)',
      'Proof of income and residence',
      'School records and details of the child’s routine',
      'Any evidence relevant to the child’s welfare',
    ],
    timeline: 'Interim orders can come within weeks; final custody decisions typically take several months to a year or more.',
    faqs: [
      {
        q: 'Does the mother always get custody?',
        a: 'No — there is no automatic rule. Courts generally favour the mother for children of tender years (typically under 5), but the deciding test is always the child’s welfare: stability, care, education and emotional bonds. Fathers regularly obtain custody or substantial shared parenting.',
      },
      {
        q: 'Will the court consider my child’s preference?',
        a: 'Yes. Courts routinely interact with children who are old enough to form an intelligent preference (usually 9+) and give their wishes weight — though preference alone doesn’t decide the outcome.',
      },
      {
        q: 'Can custody orders be changed later?',
        a: 'Yes. Custody orders are never final in the way property decrees are — either parent can seek modification if circumstances materially change, such as relocation, remarriage or concerns about the child’s welfare.',
      },
    ],
  },
  {
    slug: 'domestic-violence',
    paSlug: 'family-law',
    metaTitle: 'Domestic Violence Case Lawyer — Protection Orders & DV Act Relief',
    metaDescription:
      'Immediate legal protection under the Domestic Violence Act — protection orders, residence orders, monetary relief and custody. Confidential consultation with experienced advocates.',
    intro: [
      'The Protection of Women from Domestic Violence Act, 2005 provides fast civil remedies against physical, emotional, sexual and economic abuse — protection orders, the right to reside in the shared household, monetary relief and interim custody — without needing a criminal trial first.',
      'Lexakind advocates handle DV matters with urgency and discretion: filing the application before the Magistrate, securing interim protection and residence orders quickly, and coordinating parallel remedies (maintenance, custody, criminal complaints) where needed. We also defend those falsely implicated in DV proceedings.',
    ],
    process: [
      { title: 'Confidential consultation', description: 'We listen, assess immediate safety concerns and map every available remedy.' },
      { title: 'Application filing', description: 'A DV application is filed before the Magistrate, with a Domestic Incident Report where applicable.' },
      { title: 'Interim orders', description: 'We press for immediate protection, residence and monetary orders — often within the first hearings.' },
      { title: 'Evidence & hearing', description: 'We present evidence and witness testimony to convert interim relief into final orders.' },
      { title: 'Enforcement', description: 'Breach of a protection order is a criminal offence — we act immediately on violations.' },
    ],
    documents: [
      'Details of incidents (dates, description, any pattern)',
      'Medical records or photographs of injuries, if any',
      'Messages, emails or recordings evidencing abuse or threats',
      'Marriage/relationship proof and shared household details',
      'Details of the respondent’s income (for monetary relief)',
    ],
    timeline: 'Interim protection orders can be obtained within days to a few weeks; final orders take longer depending on evidence.',
    faqs: [
      {
        q: 'Who can file under the Domestic Violence Act?',
        a: 'Any woman in a domestic relationship — wife, live-in partner, mother, sister or daughter — against an adult male respondent (and, in most contexts, his relatives). The relationship need not be a marriage.',
      },
      {
        q: 'Can I be ordered out of my own home?',
        a: 'The Act protects a woman’s right to reside in the shared household regardless of ownership. Courts can restrain the respondent from dispossessing her, and in appropriate cases direct alternative accommodation.',
      },
      {
        q: 'Is domestic violence a criminal offence?',
        a: 'The DV Act itself provides civil remedies, but breach of a protection order is criminally punishable. Related conduct may also constitute offences under the Bharatiya Nyaya Sanhita (like cruelty by a husband or his relatives), which can proceed in parallel.',
      },
    ],
  },
  {
    slug: 'alimony-maintenance',
    paSlug: 'family-law',
    metaTitle: 'Alimony & Maintenance Lawyer — Claim or Contest Spousal Support',
    metaDescription:
      'Claim or contest alimony and maintenance with expert family advocates — interim maintenance, permanent alimony and child support under the HMA, BNSS and personal laws.',
    intro: [
      'Maintenance ensures a spouse (and children) are not left without financial support during or after matrimonial proceedings. Claims can be made under Section 144 of the BNSS (the successor to Section 125 CrPC), the Hindu Marriage Act, the Hindu Adoption & Maintenance Act, or the applicable personal law — each with different scope and strategy.',
      'Lexakind advocates handle both sides: securing fair interim and permanent maintenance for dependants, and defending against inflated claims — with courts now guided by the Supreme Court’s Rajnesh v. Neha framework requiring both parties to disclose assets and income on affidavit.',
    ],
    process: [
      { title: 'Free consultation', description: 'We evaluate income, needs, conduct and the best statutory route for your claim or defence.' },
      { title: 'Asset & income affidavits', description: 'We prepare the mandatory disclosure affidavits that now anchor every maintenance case.' },
      { title: 'Interim maintenance', description: 'We move quickly for interim support so proceedings don’t become a war of attrition.' },
      { title: 'Evidence & arguments', description: 'Earning capacity, lifestyle and obligations are proven with documents, not assertions.' },
      { title: 'Final order & enforcement', description: 'We obtain the final order and enforce arrears through warrants where payments stop.' },
    ],
    documents: [
      'Marriage proof and details of children',
      'Your income proof (salary slips, ITRs, bank statements)',
      'Whatever is known of the spouse’s income, assets and lifestyle',
      'Monthly expense details',
      'Any existing court orders between the parties',
    ],
    timeline: 'Interim maintenance orders typically within 2–6 months; final determinations run with the main proceedings.',
    faqs: [
      {
        q: 'How much maintenance will the court award?',
        a: 'There is no fixed formula. Courts weigh the income and assets of both parties, the standard of living during marriage, dependants, and earning capacity. As a broad judicial trend, spousal maintenance often falls around a quarter to a third of the paying spouse’s net income, adjusted for circumstances.',
      },
      {
        q: 'Can a working wife claim maintenance?',
        a: 'Yes. Employment does not bar a claim — the test is whether her income sustains a standard of living comparable to the marriage. Conversely, a deliberately underemployed spouse can have income imputed to them.',
      },
      {
        q: 'Can husbands claim maintenance?',
        a: 'Under the Hindu Marriage Act, yes — either spouse may claim maintenance and alimony. Under Section 144 BNSS the remedy is available to wives, children and parents.',
      },
    ],
  },
  {
    slug: 'marriage-registration',
    paSlug: 'family-law',
    metaTitle: 'Marriage Registration — Get Your Marriage Certificate',
    metaDescription:
      'Register your marriage and obtain the official certificate under the Hindu Marriage Act or Special Marriage Act — document prep, appointment booking and registrar representation.',
    intro: [
      'A marriage certificate is the conclusive legal proof of your marriage — required for spouse visas, passports, bank nominations, insurance claims and property rights. Registration is done under the Hindu Marriage Act (for religiously solemnised Hindu marriages) or the Special Marriage Act, through the local Sub-Registrar or Marriage Officer.',
      'Lexakind manages the entire registration: correct application under the right Act, document preparation, appointment scheduling, and presence at the registrar’s office with witnesses — including delayed registrations for marriages solemnised years ago and registrations needed urgently for visa timelines.',
    ],
    process: [
      { title: 'Free consultation', description: 'We identify the correct Act and registrar jurisdiction for your case.' },
      { title: 'Documentation', description: 'We compile and verify the application, proofs, photographs and witness details.' },
      { title: 'Appointment', description: 'We book the registrar appointment and prepare both spouses for the verification.' },
      { title: 'Verification & signing', description: 'Both spouses and witnesses appear; the registrar verifies and records the marriage.' },
      { title: 'Certificate', description: 'The marriage certificate is issued — we also assist with copies and corrections.' },
    ],
    documents: [
      'Wedding invitation card or temple/priest certificate (for HMA registration)',
      'Age proof of both spouses',
      'Address proof of both spouses',
      'Passport-size and marriage photographs',
      'Aadhaar of both spouses and witnesses',
    ],
    timeline: 'Under the Hindu Marriage Act, often completed within 1–3 weeks; Special Marriage Act registrations involve a 30-day notice period.',
    faqs: [
      {
        q: 'Is marriage registration compulsory?',
        a: 'The Supreme Court has directed that all marriages be registered, and several states have made it mandatory. Practically, an unregistered marriage creates difficulties with visas, succession and insurance — registration is always advisable.',
      },
      {
        q: 'Can we register a marriage that happened years ago?',
        a: 'Yes. Delayed registration is permitted with proof of the marriage (photographs, invitation, priest certificate) — some states levy a small condonation fee. We regularly handle registrations for marriages solemnised decades earlier.',
      },
      {
        q: 'What if my spouse is abroad and we need the certificate?',
        a: 'Most registrars require both spouses present at least once. Some jurisdictions permit appearance through a power-of-attorney holder for limited purposes. We advise on the practical route based on your registrar’s office.',
      },
    ],
  },

  // ── Criminal Law ───────────────────────────────────────────
  {
    slug: 'anticipatory-bail',
    paSlug: 'criminal-law',
    metaTitle: 'Anticipatory Bail Lawyer — Pre-Arrest Bail Applications',
    metaDescription:
      'Facing arrest threat? File anticipatory bail under Section 482 BNSS with experienced criminal advocates in Sessions Court and High Court — urgent same-week filings.',
    intro: [
      'Anticipatory bail — now under Section 482 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) — protects you from arrest when you apprehend being implicated in a non-bailable offence. Granted before arrest, it directs that if you are taken into custody, you must be released on bail immediately.',
      'Timing is everything in these matters. Lexakind’s criminal advocates move urgently: assessing the FIR or complaint, drafting the application with the right protective grounds, and appearing before the Sessions Court or High Court — often within days — while advising you on interim protection and cooperation with the investigation.',
    ],
    process: [
      { title: 'Urgent consultation', description: 'We assess the FIR/complaint, the offence alleged and your actual arrest risk.' },
      { title: 'Application drafting', description: 'Grounds are drafted carefully — false implication, no custodial need, roots in society, cooperation.' },
      { title: 'Filing & mention', description: 'Filed before the Sessions Court (or High Court), with urgent mentioning where arrest is imminent.' },
      { title: 'Hearing', description: 'We argue the application against the prosecution’s objections; interim protection is sought pending decision.' },
      { title: 'Compliance', description: 'If granted, we ensure you meet the bail conditions so protection is never jeopardised.' },
    ],
    documents: [
      'Copy of the FIR or complaint (if available)',
      'Any summons or notice received from police',
      'Your ID and address proof',
      'Documents supporting your defence or showing false implication',
    ],
    timeline: 'Applications are typically heard within days to a couple of weeks; interim protection can come sooner in urgent cases.',
    faqs: [
      {
        q: 'When should I apply for anticipatory bail?',
        a: 'As soon as you have credible reason to believe you may be arrested — an FIR naming you, a police notice, or a complaint being pursued. Applying early gives the court time to consider the matter before any arrest attempt.',
      },
      {
        q: 'What conditions come with anticipatory bail?',
        a: 'Courts commonly require you to join the investigation when called, not leave India without permission, not influence witnesses, and sometimes to surrender your passport. Breach can get the bail cancelled, so we brief you thoroughly.',
      },
      {
        q: 'What if anticipatory bail is rejected?',
        a: 'A rejection by the Sessions Court can be renewed before the High Court, and thereafter the Supreme Court. Depending on the stage, regular bail after arrest may also be the pragmatic route — we plan the fallback strategy in advance.',
      },
    ],
  },
  {
    slug: 'regular-bail',
    paSlug: 'criminal-law',
    metaTitle: 'Regular Bail Lawyer — Post-Arrest Bail Applications',
    metaDescription:
      'Get a loved one released fast — regular bail applications under Section 483 BNSS before Magistrate, Sessions and High Courts, with urgent drafting and hearing representation.',
    intro: [
      'When someone is arrested and in judicial custody, a regular bail application is the legal route to their release pending trial. Bail is the rule and jail the exception — but securing it in practice depends on how well the application addresses the offence alleged, the stage of investigation and the accused’s circumstances.',
      'Lexakind’s criminal advocates act fast: obtaining case papers, drafting the bail application the same day where needed, and arguing it before the appropriate court — Magistrate, Sessions or High Court — with a clear strategy for sureties and compliance so release isn’t delayed after the order.',
    ],
    process: [
      { title: 'Urgent consultation', description: 'We gather arrest details, the offences alleged and the custody status.' },
      { title: 'Case papers', description: 'We obtain the FIR, remand papers and case diary status to target the application correctly.' },
      { title: 'Drafting & filing', description: 'The bail application is drafted with grounds specific to the offence and the accused.' },
      { title: 'Hearing', description: 'We argue the bail plea, counter prosecution objections and press for reasonable conditions.' },
      { title: 'Release formalities', description: 'We arrange surety documentation and complete bail bonds so release happens without delay.' },
    ],
    documents: [
      'FIR number and police station details',
      'Arrest memo / remand order details (if available)',
      'ID and address proof of the accused and proposed sureties',
      'Surety documents (property papers / bank details, as required)',
    ],
    timeline: 'Bail applications are typically listed within days; release usually follows within 1–3 days of a grant, after bond formalities.',
    faqs: [
      {
        q: 'How is regular bail different from anticipatory bail?',
        a: 'Anticipatory bail is sought before arrest to prevent custody; regular bail is sought after arrest to secure release from custody. The considerations overlap — nature of offence, evidence, flight risk — but the urgency and forum strategy differ.',
      },
      {
        q: 'What is default bail?',
        a: 'If the police fail to file the chargesheet within the statutory period (60 or 90 days depending on the offence), the accused earns an indefeasible right to bail under Section 187 BNSS. We track these timelines from day one — it is often the fastest route out.',
      },
      {
        q: 'Who can stand as surety?',
        a: 'Any adult with identity, address and means — commonly a family member with property documents or stable income proof. The court fixes the bond amount; we prepare sureties in advance so no time is lost after the order.',
      },
    ],
  },
  {
    slug: 'fir-quashing',
    paSlug: 'criminal-law',
    metaTitle: 'FIR Quashing — High Court Petitions Under Section 528 BNSS',
    metaDescription:
      'Quash false or vexatious FIRs in the High Court under Section 528 BNSS — matrimonial disputes, business disputes given criminal colour, and compromise-based quashing.',
    intro: [
      'A false or legally untenable FIR doesn’t have to run its full course to trial. The High Court’s inherent powers — now under Section 528 of the BNSS (successor to Section 482 CrPC) — allow criminal proceedings to be quashed where the allegations, even taken at face value, disclose no offence, are manifestly malicious, or where parties have genuinely settled.',
      'Lexakind advocates prepare quashing petitions that meet the exacting standards set by the Supreme Court in Bhajan Lal and its successors: dissecting the FIR against the ingredients of each offence, documenting mala fides, and — in matrimonial and commercial matters — presenting settlements in the form courts accept.',
    ],
    process: [
      { title: 'Case evaluation', description: 'We analyse the FIR against the legal ingredients of every offence alleged.' },
      { title: 'Strategy', description: 'Quashing on merits, on settlement, or partial quashing — we choose the strongest footing.' },
      { title: 'Petition drafting', description: 'A comprehensive petition with grounds, precedents and annexures is prepared.' },
      { title: 'High Court hearing', description: 'We argue the petition; interim stay of investigation/proceedings is sought where warranted.' },
      { title: 'Outcome', description: 'If quashed, all proceedings end; if partly allowed, we defend what remains.' },
    ],
    documents: [
      'Copy of the FIR and chargesheet (if filed)',
      'Documents showing innocence or the civil nature of the dispute',
      'Settlement/compromise deed (for settlement-based quashing)',
      'Any related civil or matrimonial proceedings between the parties',
    ],
    timeline: 'Typically 3–12 months in the High Court; interim protection can be obtained much earlier.',
    faqs: [
      {
        q: 'On what grounds can an FIR be quashed?',
        a: 'Principally: the allegations do not disclose any offence; the FIR is absurd or inherently improbable; the proceedings are manifestly mala fide or vengeful; the dispute is essentially civil dressed as criminal; or the parties have settled in offences that are personal in nature.',
      },
      {
        q: 'Can an FIR be quashed after the chargesheet is filed?',
        a: 'Yes. The High Court’s power extends to any stage — FIR, chargesheet, even pending trial — though the scrutiny gets stricter as the case progresses. The chargesheet material is then also examined.',
      },
      {
        q: 'Can serious offences be quashed on compromise?',
        a: 'Offences with a predominantly private character (matrimonial, commercial) are regularly quashed on genuine settlement. Heinous offences like murder or rape are generally not, even if the parties settle. We advise honestly on where your case falls.',
      },
    ],
  },

  // ── Civil Litigation ───────────────────────────────────────
  {
    slug: 'eviction-cases',
    paSlug: 'civil-litigation',
    metaTitle: 'Tenant Eviction Lawyer — Evict Defaulting or Overstaying Tenants',
    metaDescription:
      'Evict defaulting or overstaying tenants lawfully — termination notice, eviction petition and execution, handled by advocates who know the rent laws that apply to your property.',
    intro: [
      'Evicting a tenant in India must follow due process — self-help measures like changing locks or cutting utilities are illegal and can expose the owner to criminal liability. The lawful route runs through a valid termination notice and an eviction petition on recognised grounds: default in rent, expiry of term, bona fide personal requirement, subletting, or misuse of premises.',
      'Lexakind advocates handle evictions end to end — serving legally precise quit notices, filing before the right forum (rent court or civil court, depending on your state’s rent law and the tenancy), pressing for time-bound proceedings, and executing the decree with court bailiffs where tenants still refuse to vacate.',
    ],
    process: [
      { title: 'Free consultation', description: 'We review the tenancy documents and identify the strongest ground for eviction.' },
      { title: 'Termination notice', description: 'A legally valid quit notice is served — the foundation the entire case rests on.' },
      { title: 'Eviction petition', description: 'If the tenant doesn’t vacate, we file before the appropriate rent court/civil court.' },
      { title: 'Proceedings', description: 'We press for expeditious hearing, interim directions on rent deposits, and resist delay tactics.' },
      { title: 'Execution', description: 'After the decree, we complete execution — with court-appointed bailiffs if necessary.' },
    ],
    documents: [
      'Rent/lease agreement (registered or unregistered)',
      'Rent payment records and default details',
      'Property ownership documents',
      'Prior notices or correspondence with the tenant',
      'Electricity/utility bills for the premises',
    ],
    timeline: 'Varies widely — uncontested matters can conclude in months; contested evictions typically take 1–3 years. Interim rent-deposit orders protect you meanwhile.',
    faqs: [
      {
        q: 'Can I evict a tenant without going to court?',
        a: 'Only if the tenant vacates voluntarily after notice. Forcible eviction — locks, utilities, intimidation — is unlawful regardless of how strong your case is, and can result in police complaints against you. The court route protects you.',
      },
      {
        q: 'My tenant hasn’t paid rent for months. What’s the fastest remedy?',
        a: 'Default in rent is the most reliable eviction ground. Alongside eviction we seek orders directing the tenant to deposit arrears and ongoing rent in court — failure to comply often ends the tenant’s defence itself.',
      },
      {
        q: 'Does an unregistered rent agreement hurt my case?',
        a: 'It complicates but rarely defeats it — courts admit unregistered agreements for collateral purposes, and rent receipts, bank transfers and utility records establish the tenancy. We build the evidence around what you have.',
      },
    ],
  },

  // ── Property Law ───────────────────────────────────────────
  {
    slug: 'title-check',
    paSlug: 'property-law',
    metaTitle: 'Property Title Check — Verify Before You Buy',
    metaDescription:
      'Complete property title verification before you buy — 30-year ownership chain, encumbrance certificate, khata, approvals and litigation checks with a clear legal opinion.',
    intro: [
      'Most property frauds succeed because buyers verify too little, too late. A professional title check traces the ownership chain (typically 30 years), examines the encumbrance certificate for hidden loans and charges, verifies khata and tax records, confirms layout and building approvals, and searches for pending litigation — before you pay a rupee of advance.',
      'Lexakind’s property advocates produce a written legal opinion: what the documents show, what is missing, the specific risks, and whether to proceed, renegotiate or walk away. For Bengaluru properties we also verify BBMP/BDA records, RERA registration and conversion status where applicable.',
    ],
    process: [
      { title: 'Document collection', description: 'You share the seller’s document set; we list anything missing that must be demanded.' },
      { title: 'Chain of title review', description: 'We trace ownership over the prior decades for gaps, defects or suspect transfers.' },
      { title: 'Encumbrance & records search', description: 'EC, khata, tax, survey and approval records are verified with the authorities.' },
      { title: 'Litigation check', description: 'We search court and tribunal records for disputes touching the property.' },
      { title: 'Legal opinion', description: 'A written opinion with a clear go / no-go recommendation and conditions to be met.' },
    ],
    documents: [
      'Sale deed(s) of the current and previous owners (mother deed chain)',
      'Encumbrance certificate (we can also procure it)',
      'Khata certificate and extract / property tax receipts',
      'Approved plan, conversion order and layout approvals (as applicable)',
      'RERA registration details for under-construction property',
    ],
    timeline: 'Standard title reports typically within 5–10 working days of receiving documents.',
    faqs: [
      {
        q: 'Why do I need a lawyer when the bank will verify anyway?',
        a: 'Bank verification protects the bank’s mortgage interest, not your ownership — banks routinely fund properties with defects that later become the buyer’s problem. An independent title opinion is your protection, not the lender’s.',
      },
      {
        q: 'What is an encumbrance certificate and why does it matter?',
        a: 'The EC lists registered transactions on the property — sales, mortgages, gifts, court attachments — over a chosen period. A “nil” EC over a long window is a strong (though not conclusive) indicator that the property is free of registered charges.',
      },
      {
        q: 'How far back should the title be traced?',
        a: 'Convention is at least 30 years, aligned with the limitation framework for recovery claims. For inherited or agricultural-origin land we often go further, since partition and succession gaps are the most common source of later disputes.',
      },
    ],
  },
  {
    slug: 'sale-deed',
    paSlug: 'property-law',
    metaTitle: 'Sale Deed Drafting & Registration — Property Transfer Done Right',
    metaDescription:
      'Sale deed drafting, stamp duty guidance and sub-registrar registration support — the conveyance document that actually transfers ownership, drafted by property advocates.',
    intro: [
      'The sale deed is the document that legally transfers ownership — and errors in it follow the property forever. Wrong schedules, missed easements, inadequate indemnities or defective execution create disputes that surface years later, usually when you try to sell. Registration before the Sub-Registrar with correct stamp duty is mandatory for validity.',
      'Lexakind advocates draft sale deeds with precise property schedules, complete recitals of the title chain, proper representations and indemnities from the seller, and clear apportionment of taxes and dues — then support you through stamping, execution and registration at the Sub-Registrar’s office.',
    ],
    process: [
      { title: 'Consultation & title review', description: 'We confirm the title is clear before drafting anything (a title check is strongly advised).' },
      { title: 'Drafting', description: 'The sale deed is drafted with accurate schedules, consideration terms and protections.' },
      { title: 'Stamp duty & fees', description: 'We compute stamp duty and registration fees for your state and property value.' },
      { title: 'Registration', description: 'We coordinate execution and registration before the Sub-Registrar with witnesses.' },
      { title: 'Post-registration', description: 'Guidance on khata transfer, mutation and tax records in the buyer’s name.' },
    ],
    documents: [
      'Previous title deeds (mother deed chain)',
      'Encumbrance certificate and khata/tax records',
      'ID and PAN of buyer and seller (PAN mandatory above ₹10 lakh)',
      'Sanctioned plan / occupancy certificate for built property',
      'Loan clearance / release deed if the property was mortgaged',
    ],
    timeline: 'Drafting typically 2–4 working days; registration is same-day once stamp duty is paid and an appointment is available.',
    faqs: [
      {
        q: 'What is the difference between a sale agreement and a sale deed?',
        a: 'The agreement to sell records the promise and terms of a future transfer; the sale deed executes the transfer itself. Ownership passes only on the registered sale deed — never rely on an agreement, possession letter or GPA as a substitute.',
      },
      {
        q: 'Who pays the stamp duty and how much is it?',
        a: 'By convention the buyer pays. Rates vary by state — in Karnataka, stamp duty is around 5% for higher-value properties plus registration fee of about 1%, with concessional slabs for lower values. We compute the exact amount for your transaction.',
      },
      {
        q: 'Is buying through a GPA (power of attorney) safe?',
        a: 'No. The Supreme Court (Suraj Lamp, 2011) held that GPA “sales” do not convey title. If the seller holds only a GPA, we examine whether a proper conveyance from the true owner is possible — otherwise we advise against the purchase.',
      },
    ],
  },

  {
    slug: 'rent-agreement',
    paSlug: 'property-law',
    metaTitle: 'Rent Agreement Drafting — 11-Month & Registered Lease Deeds',
    metaDescription:
      'Get a legally sound rent agreement drafted — 11-month agreements, registered long-term leases, commercial rentals — with clauses that actually protect owners and tenants.',
    intro: [
      'A rent agreement decides who wins every future dispute — over deposits, maintenance, lock-in periods, eviction and rent escalation. Template agreements copied off the internet routinely omit the clauses that matter, and agreements for terms above 11 months are legally required to be registered to be fully admissible.',
      'Lexakind drafts residential and commercial rent agreements tailored to your situation — deposit and deduction terms, lock-in and exit clauses, escalation, repair obligations and termination mechanics — and handles stamping, e-stamping and registration where the term requires it.',
    ],
    process: [
      { title: 'Consultation', description: 'We capture your terms — rent, deposit, term, lock-in, escalation, usage.' },
      { title: 'Drafting', description: 'A tailored agreement draft, typically within 1–2 working days.' },
      { title: 'Review', description: 'Both parties’ feedback is incorporated; contentious clauses are balanced fairly.' },
      { title: 'Stamping & execution', description: 'E-stamping at the correct value and signing guidance for both parties.' },
      { title: 'Registration', description: 'For terms above 11 months, we complete registration at the Sub-Registrar’s office.' },
    ],
    documents: [
      'ID and address proof of owner and tenant',
      'Property ownership proof (khata / tax receipt / sale deed)',
      'Agreed commercial terms (rent, deposit, term, lock-in)',
      'Two witnesses with ID for execution/registration',
    ],
    timeline: 'Draft within 1–2 working days; registration (if applicable) subject to Sub-Registrar appointment.',
    faqs: [
      {
        q: 'Why are most rent agreements made for 11 months?',
        a: 'Leases of 12 months or more must be registered under the Registration Act, which adds stamp duty and procedure. An 11-month licence/tenancy avoids mandatory registration — convenient, but for valuable properties or long relationships a registered lease gives both sides stronger protection.',
      },
      {
        q: 'Can the owner deduct anything from my security deposit?',
        a: 'Only what the agreement permits — typically unpaid rent, utility dues and damage beyond normal wear and tear. A well-drafted deposit clause with a documented handover condition report prevents the most common tenancy dispute in India.',
      },
      {
        q: 'What is a lock-in period?',
        a: 'A period during which neither side may terminate — if the tenant leaves early they remain liable for the lock-in rent, and if the owner evicts without cause they compensate similarly. Courts generally enforce reasonable lock-ins, so the clause must be drafted deliberately.',
      },
    ],
  },
  {
    slug: 'gift-deed',
    paSlug: 'property-law',
    metaTitle: 'Gift Deed Drafting & Registration — Transfer Property to Family',
    metaDescription:
      'Gift property to family members legally — gift deed drafting, concessional stamp duty for blood relatives, and registration support from experienced property advocates.',
    intro: [
      'A gift deed transfers property voluntarily and without consideration — the standard route for passing property to children, spouses or parents during your lifetime. Unlike a Will, a registered gift deed takes effect immediately and is very difficult to challenge later; unlike a sale, most states levy heavily concessional stamp duty for gifts to close family.',
      'Lexakind advocates draft gift deeds that hold up: clear property schedules, unambiguous acceptance by the donee, appropriate life-interest or possession reservations where the donor wants safeguards, and full registration support — because an unregistered gift of immovable property is void in law.',
    ],
    process: [
      { title: 'Consultation', description: 'We understand the family arrangement and advise on gift vs Will vs settlement.' },
      { title: 'Drafting', description: 'The gift deed is drafted with schedules, acceptance and any reservations you need.' },
      { title: 'Stamp duty', description: 'We compute the (usually concessional) stamp duty for family gifts in your state.' },
      { title: 'Registration', description: 'Donor and donee execute the deed before the Sub-Registrar with witnesses.' },
      { title: 'Mutation', description: 'We guide the donee through khata/mutation transfer into their name.' },
    ],
    documents: [
      'Title deed of the property being gifted',
      'Encumbrance certificate and tax/khata records',
      'ID and PAN of donor and donee',
      'Proof of relationship (for concessional stamp duty)',
      'Two witnesses with ID',
    ],
    timeline: 'Drafting within 2–3 working days; registration is typically same-day at the Sub-Registrar’s office.',
    faqs: [
      {
        q: 'Can a gift deed be cancelled after registration?',
        a: 'Generally no — a validly executed and accepted gift is irrevocable, except on grounds like fraud, coercion or a revocation condition written into the deed itself. Senior citizens also have a statutory remedy to reclaim property gifted on condition of maintenance that the donee fails to honour.',
      },
      {
        q: 'Is there tax on gifted property?',
        a: 'Gifts to specified relatives (spouse, children, siblings, parents and others in the defined list) are exempt from income tax in the donee’s hands regardless of value. Gifts to non-relatives above ₹50,000 in value are taxable as the recipient’s income. Stamp duty applies either way.',
      },
      {
        q: 'Gift deed or Will — which is better for passing property to my children?',
        a: 'A gift transfers ownership now and cannot easily be undone; a Will operates only on death and can be changed anytime. The right choice depends on your need for control, family dynamics and tax/stamp costs — we walk you through it in consultation.',
      },
    ],
  },
  {
    slug: 'will-drafting',
    paSlug: 'property-law',
    metaTitle: 'Will Drafting & Registration — Secure Your Family’s Future',
    metaDescription:
      'Draft a legally sound Will covering all assets, executors and guardianship — with optional registration. Prevent succession disputes with clear, advocate-drafted testament.',
    intro: [
      'A Will is the simplest instrument to ensure your assets pass exactly as you intend — and the absence of one is the single biggest cause of family property litigation in India. A valid Will needs testamentary capacity, clear disposition, the testator’s signature and attestation by two witnesses; registration is optional but adds a strong layer of authenticity.',
      'Lexakind advocates draft Wills that anticipate challenge: precise asset schedules, executor appointments, guardianship for minor children, alternate beneficiaries, and a doctor’s fitness certificate where age or illness might later be raised — with discreet handling and optional registration at the Sub-Registrar.',
    ],
    process: [
      { title: 'Confidential consultation', description: 'We map your assets, family situation and intentions.' },
      { title: 'Drafting', description: 'The Will is drafted in clear language with a complete asset schedule and contingencies.' },
      { title: 'Review', description: 'You review privately; we refine until it says exactly what you intend.' },
      { title: 'Execution', description: 'Signing is done before two attesting witnesses in the legally required manner.' },
      { title: 'Registration (optional)', description: 'We register the Will at the Sub-Registrar’s office if you choose — recommended.' },
    ],
    documents: [
      'List of assets (property documents, accounts, investments, lockers)',
      'Details of beneficiaries and their relationships',
      'ID proof of the testator',
      'Details of proposed executor and witnesses',
      'Medical fitness certificate (recommended for senior testators)',
    ],
    timeline: 'Draft typically within 3–5 working days; registration subject to Sub-Registrar appointment.',
    faqs: [
      {
        q: 'Is a registered Will stronger than an unregistered one?',
        a: 'Both are equally valid in law, but registration creates official proof of execution and date, making allegations of forgery or tampering much harder. For estates likely to be contested, we recommend registration.',
      },
      {
        q: 'Can I change my Will later?',
        a: 'Yes — a Will is revocable during your lifetime. You can execute a codicil for small changes or a fresh Will that expressly revokes earlier ones. The latest valid Will prevails.',
      },
      {
        q: 'What happens if someone dies without a Will?',
        a: 'The estate devolves by intestate succession — under the Hindu Succession Act or the personal law applicable — among legal heirs in fixed shares, regardless of the deceased’s wishes. This is precisely where family disputes and years of litigation begin.',
      },
    ],
  },
  {
    slug: 'succession-certificate',
    paSlug: 'property-law',
    metaTitle: 'Succession Certificate — Claim a Deceased Relative’s Assets',
    metaDescription:
      'Obtain a succession certificate from the district court to claim a deceased family member’s bank accounts, shares and securities — complete petition and court representation.',
    intro: [
      'When a family member dies without a Will, banks, depositories and companies typically require a succession certificate before releasing debts and securities — bank balances, fixed deposits, shares, mutual funds. Issued by the district court under the Indian Succession Act, it certifies who is entitled to collect the deceased’s movable assets.',
      'Lexakind advocates prepare and file the succession petition, publish the statutory citation, respond to objections, and follow the matter through to certificate issuance — and where a legal heir certificate or letters of administration are the better instrument for your situation, we tell you upfront.',
    ],
    process: [
      { title: 'Consultation', description: 'We confirm the right instrument (succession certificate, legal heir certificate, probate).' },
      { title: 'Petition filing', description: 'The petition is filed in the district court with heir details and asset particulars.' },
      { title: 'Citation & notice', description: 'The court issues newspaper citation inviting objections from any claimants.' },
      { title: 'Hearing', description: 'Evidence of relationship and entitlement is led; objections, if any, are contested.' },
      { title: 'Certificate', description: 'The certificate is issued on payment of court fee; assets can then be claimed.' },
    ],
    documents: [
      'Death certificate of the deceased',
      'Proof of relationship of all legal heirs (birth/marriage certificates, Aadhaar)',
      'Details of the assets claimed (account numbers, folio/demat details)',
      'Family tree / genealogy details',
      'No-objection from other heirs, where available',
    ],
    timeline: 'Typically 4–8 months in uncontested matters, owing to the mandatory citation period; contested matters take longer.',
    faqs: [
      {
        q: 'Succession certificate vs legal heir certificate — what’s the difference?',
        a: 'A legal heir certificate (from the revenue authority) identifies heirs for purposes like pension, terminal benefits and property mutation. A succession certificate (from the court) is what financial institutions require to release debts and securities. Many families need both; we advise based on the assets involved.',
      },
      {
        q: 'Is a succession certificate needed if there is a nominee?',
        a: 'A nominee can usually receive the funds, but in law the nominee holds them in trust for the legal heirs — nomination does not override succession. Where heirs and nominees differ, a succession certificate settles entitlement.',
      },
      {
        q: 'What court fee is payable?',
        a: 'Court fee is levied as a percentage of the value of assets covered, varying by state (commonly around 2–3%, subject to caps). We structure the petition to cover exactly what is needed.',
      },
    ],
  },

  // ── Real Estate & RERA ─────────────────────────────────────
  {
    slug: 'possession-delay',
    paSlug: 'real-estate-rera',
    metaTitle: 'RERA Possession Delay Complaint — Refund or Interest from Builders',
    metaDescription:
      'Builder delayed your flat? File a RERA complaint for refund with interest or delay compensation under Section 18 — drafting, filing and hearings handled end to end.',
    intro: [
      'If your builder has missed the possession date promised in the agreement, Section 18 of the RERA Act gives you a real remedy: exit the project with a full refund plus prescribed interest, or stay and claim interest for every month of delay. RERA authorities decide these complaints far faster than civil courts, and their orders are enforceable as decrees.',
      'Lexakind advocates handle RERA complaints end to end — computing your refund or delay-interest claim precisely, drafting and filing the complaint with the state RERA authority, appearing at hearings, and pursuing execution if the builder doesn’t comply with the order.',
    ],
    process: [
      { title: 'Free consultation', description: 'We review your agreement, payment record and the promised possession date.' },
      { title: 'Claim computation', description: 'Refund with interest, or delay compensation — we quantify both so you choose well.' },
      { title: 'Complaint filing', description: 'The complaint is drafted and filed with the state RERA authority with all evidence.' },
      { title: 'Hearings', description: 'We represent you before the Authority/Adjudicating Officer through to the order.' },
      { title: 'Execution', description: 'If the builder still doesn’t pay, we enforce the order through execution proceedings.' },
    ],
    documents: [
      'Builder-buyer agreement / sale agreement',
      'Payment receipts and loan disbursement records',
      'Allotment letter and correspondence with the builder',
      'Project’s RERA registration details',
      'Any possession-date extensions or builder communications',
    ],
    timeline: 'RERA authorities are mandated to decide complaints expeditiously — orders commonly come within 6–12 months.',
    faqs: [
      {
        q: 'Should I take a refund or wait for possession with interest?',
        a: 'It depends on the project’s realistic completion prospects, how much you’ve paid, and current market prices. Refund with interest exits a doomed project; delay interest suits projects that will complete. We give you a candid, numbers-based recommendation.',
      },
      {
        q: 'Can I file against a project that is not RERA-registered?',
        a: 'Yes — if the project ought to have been registered, the failure itself is a violation, and the authority can act. Parallel remedies before the consumer commission may also be considered; we choose the forum that best fits your facts.',
      },
      {
        q: 'What interest rate does RERA award?',
        a: 'The rate is prescribed by each state’s rules — typically the SBI highest MCLR plus around 2%. It applies both to refunds and to monthly delay compensation, computed from the promised possession date.',
      },
    ],
  },
  {
    slug: 'partition-suit',
    paSlug: 'real-estate-rera',
    metaTitle: 'Partition Suit Lawyer — Divide Family & Co-Owned Property',
    metaDescription:
      'Claim your rightful share in family or co-owned property — partition suits, preliminary and final decrees, and negotiated family settlements handled by property litigators.',
    intro: [
      'When co-owners of property — typically family members after a death in the family — cannot agree on division, a partition suit is the legal remedy. Every co-owner has an inherent right to seek partition; the court first declares each sharer’s entitlement (preliminary decree) and then physically divides the property or orders sale and distribution (final decree).',
      'Lexakind’s property litigators handle partition matters strategically: exploring registered family settlements first (faster and cheaper than trial), and where suit is unavoidable, establishing shares with revenue records and succession law — including daughters’ equal coparcenary rights confirmed in Vineeta Sharma (2020).',
    ],
    process: [
      { title: 'Consultation', description: 'We map the family tree, the property set and each claimant’s legal share.' },
      { title: 'Settlement attempt', description: 'Where feasible, we negotiate and register a family settlement — often the best outcome.' },
      { title: 'Suit filing', description: 'The partition suit is filed with all co-owners impleaded and shares pleaded precisely.' },
      { title: 'Preliminary decree', description: 'The court declares the share of each co-owner after trial.' },
      { title: 'Final decree & division', description: 'Property is divided by metes and bounds (via court commissioner) or sold and proceeds shared.' },
    ],
    documents: [
      'Title documents of the property/properties',
      'Death certificates and legal-heir details (for inherited property)',
      'Family tree with supporting records',
      'Revenue records (khata, RTC, mutation entries)',
      'Any prior partition deed, Will or settlement in the family',
    ],
    timeline: 'Negotiated settlements can conclude in weeks; contested partition suits commonly run 2–5 years — interim protection orders safeguard your share meanwhile.',
    faqs: [
      {
        q: 'Do daughters have an equal share in ancestral property?',
        a: 'Yes. After the 2005 amendment to the Hindu Succession Act — and the Supreme Court’s Vineeta Sharma ruling (2020) — daughters are coparceners by birth with rights equal to sons, regardless of when the father died.',
      },
      {
        q: 'Can one co-owner sell their share without partition?',
        a: 'A co-owner can transfer their undivided share, but the buyer steps into the same position — needing partition to enjoy a specific portion. A sale by one co-owner of the entire property without others’ consent does not bind their shares.',
      },
      {
        q: 'What if the property cannot be physically divided?',
        a: 'Where division by metes and bounds is impractical (a single flat, a small site), the court can order sale — by auction among the co-owners or openly — and distribute proceeds by share. Co-owners usually get preference to buy out others.',
      },
    ],
  },

  {
    slug: 'cheque-bounce',
    paSlug: 'real-estate-rera',
    metaTitle: 'Cheque Bounce Case — Section 138 NI Act Notice & Complaint',
    metaDescription:
      'Cheque dishonoured? Act within 30 days — statutory demand notice and Section 138 NI Act complaint drafted and pursued by advocates. Strict timelines, handled end to end.',
    intro: [
      'A bounced cheque is a criminal offence under Section 138 of the Negotiable Instruments Act — but the remedy runs on unforgiving timelines: a written demand notice within 30 days of the cheque return memo, a 15-day window for the drawer to pay, and a complaint within one month thereafter. Miss a deadline and the criminal remedy is lost.',
      'Lexakind advocates manage the entire Section 138 chain — statutory notice drafted and dispatched correctly, complaint filed in the right jurisdiction, and representation through trial, including interim compensation under Section 143A. We also defend those facing 138 complaints, where technical defences are often decisive.',
    ],
    process: [
      { title: 'Urgent consultation', description: 'We verify the cheque, return memo and dates — the timeline clock is already running.' },
      { title: 'Statutory notice', description: 'The demand notice is drafted and dispatched within the 30-day window, with proof preserved.' },
      { title: 'Complaint filing', description: 'If unpaid after 15 days, the complaint is filed before the Magistrate within one month.' },
      { title: 'Trial', description: 'We conduct the case — summons, evidence, cross-examination — and press for interim compensation.' },
      { title: 'Recovery', description: 'On conviction, courts can order fine up to twice the cheque amount as compensation, plus imprisonment.' },
    ],
    documents: [
      'Original bounced cheque',
      'Cheque return memo from the bank',
      'Proof of the underlying debt or liability (invoice, loan record, agreement)',
      'Your bank account details and ID',
    ],
    timeline: 'Notice and complaint fit within the statutory ~75-day window; trials typically run 1–2 years, with interim compensation available earlier.',
    faqs: [
      {
        q: 'What are the exact deadlines in a cheque bounce case?',
        a: 'Demand notice within 30 days of receiving the return memo; the drawer then has 15 days to pay; if he doesn’t, the complaint must be filed within 1 month of that period ending. Courts can condone complaint delay only for sufficient cause — never rely on it.',
      },
      {
        q: 'What punishment does Section 138 carry?',
        a: 'Imprisonment up to two years, or fine up to twice the cheque amount, or both. In practice courts focus on compensating the payee — and the pressure of criminal process is what typically produces settlement.',
      },
      {
        q: 'What is interim compensation?',
        a: 'Under Section 143A, the trial court may direct the accused to pay up to 20% of the cheque amount as interim compensation while the case is pending — recoverable relief long before the trial concludes. We seek it in every deserving case.',
      },
    ],
  },

  // ── Intellectual Property & GST ────────────────────────────
  {
    slug: 'trademark-objection',
    paSlug: 'intellectual-property',
    metaTitle: 'Trademark Objection Reply — Respond to Examination Reports',
    metaDescription:
      'Received a trademark objection? File a strong reply to the examination report within 30 days — Section 9 and 11 objections argued by IP advocates, hearings included.',
    intro: [
      'A trademark objection is not a rejection — it is the Registry’s examination report raising concerns, typically under Section 9 (descriptiveness/distinctiveness) or Section 11 (similarity with existing marks). A well-argued reply, filed within the 30-day window, resolves most objections; ignoring the deadline abandons your application.',
      'Lexakind’s IP advocates draft replies that engage the objection head-on — evidence of distinctiveness and use, dissimilarity analysis against cited marks, supporting precedents — and represent you at show-cause hearings if the matter proceeds, keeping your brand’s registration on track.',
    ],
    process: [
      { title: 'Report analysis', description: 'We study the examination report and the exact grounds of objection.' },
      { title: 'Evidence gathering', description: 'Proof of use, sales, advertising and distinctiveness is compiled where relevant.' },
      { title: 'Reply drafting', description: 'A reasoned reply with legal argument and precedent is drafted and reviewed with you.' },
      { title: 'Filing', description: 'The reply is filed within the 30-day statutory window.' },
      { title: 'Hearing (if listed)', description: 'If the examiner isn’t satisfied, we appear at the show-cause hearing and argue the mark.' },
    ],
    documents: [
      'Trademark examination report',
      'Trademark application details',
      'Proof of use of the mark (invoices, ads, website, packaging)',
      'Business registration details',
    ],
    timeline: 'Reply filed within the 30-day window; the Registry’s decision or hearing listing typically follows within 3–12 months.',
    faqs: [
      {
        q: 'What happens if I miss the 30-day reply deadline?',
        a: 'The application is treated as abandoned. A fresh application means losing your priority date — costly if competitors are watching. If your deadline is near, treat it as urgent; we can typically draft and file within days.',
      },
      {
        q: 'My mark is objected for similarity with an existing mark. Is it over?',
        a: 'Not at all. Section 11 objections are regularly overcome by demonstrating differences in the marks, goods/services, trade channels and consumer base — or by obtaining consent from the cited proprietor. Each cited mark is analysed individually.',
      },
      {
        q: 'Can I keep using my brand while the objection is pending?',
        a: 'Yes — using the ™ symbol. Registration (®) comes only after acceptance and registration, but use during prosecution actually strengthens your distinctiveness evidence.',
      },
    ],
  },
  {
    slug: 'gst-registration',
    paSlug: 'intellectual-property',
    metaTitle: 'GST Registration — Get Your GSTIN Quickly & Correctly',
    metaDescription:
      'GST registration handled end to end — applicability advice, document prep, portal filing and clarification replies, so your GSTIN arrives without rejection cycles.',
    intro: [
      'GST registration is mandatory once turnover crosses the threshold (₹40 lakh for goods, ₹20 lakh for services in most states, lower in special-category states) — and immediately for inter-state suppliers, e-commerce sellers and several other categories. Errors in the application are the main cause of rejections and weeks of delay.',
      'Lexakind handles registration end to end: confirming applicability and the right registration type (regular, composition, casual), preparing documents to the portal’s exacting standards, filing the application, and responding to any clarification notices — so your GSTIN arrives without rejection cycles.',
    ],
    process: [
      { title: 'Applicability check', description: 'We confirm whether and which GST registration you need.' },
      { title: 'Documentation', description: 'Business, promoter and premises documents are prepared in the accepted formats.' },
      { title: 'Application filing', description: 'The application is filed on the GST portal with Aadhaar authentication.' },
      { title: 'Clarifications', description: 'We respond to any officer queries or notices seeking clarification.' },
      { title: 'GSTIN issued', description: 'You receive your GSTIN and certificate, plus guidance on invoicing and first returns.' },
    ],
    documents: [
      'PAN of the business and promoters',
      'Aadhaar of proprietor/partners/directors',
      'Business registration proof (incorporation certificate / partnership deed)',
      'Principal place of business proof (rent agreement + owner NOC / ownership deed)',
      'Bank account proof (statement / cancelled cheque)',
      'Photographs and DSC (for companies/LLPs)',
    ],
    timeline: 'GSTIN typically issued within 3–10 working days, depending on Aadhaar authentication and officer verification.',
    faqs: [
      {
        q: 'Do I need GST registration below the turnover threshold?',
        a: 'Sometimes, yes — inter-state supply of goods, selling through e-commerce operators, and certain reverse-charge situations trigger mandatory registration regardless of turnover. Voluntary registration can also make sense to pass input credit to business customers.',
      },
      {
        q: 'What is the composition scheme?',
        a: 'Small businesses (goods up to ₹1.5 crore turnover; services up to ₹50 lakh) can pay a low flat tax with minimal compliance — but cannot collect GST or claim input credit, and cannot supply inter-state. We advise whether it suits your model.',
      },
      {
        q: 'What follows registration?',
        a: 'GST-compliant invoicing, monthly/quarterly returns (GSTR-1, GSTR-3B), and annual returns as applicable. Non-filing attracts late fees and eventually cancellation — we set you up with the compliance calendar from day one.',
      },
    ],
  },

  // ── Consumer Protection ────────────────────────────────────
  {
    slug: 'consumer-complaint',
    paSlug: 'consumer-protection',
    metaTitle: 'Consumer Forum Complaint — File Against Defective Goods & Services',
    metaDescription:
      'File a consumer complaint for defective products, deficient services or unfair trade practices — district, state or national commission, with refund and compensation claims.',
    intro: [
      'The Consumer Protection Act, 2019 gives you a fast, low-cost forum against defective goods, deficient services and unfair trade practices — with power to order refunds, replacement, compensation and even punitive damages. Complaints go to the District Commission (claims up to ₹50 lakh), State Commission or National Commission based on value, and can be filed where you reside.',
      'Lexakind advocates draft complaints that succeed: the deficiency framed precisely, loss quantified and evidenced, and the right opposite parties impleaded (seller, manufacturer, service provider, platform). We appear through the proceedings and in appeals, and also handle e-commerce and insurance-claim disputes, which dominate today’s consumer dockets.',
    ],
    process: [
      { title: 'Free consultation', description: 'We assess the deficiency, your loss and the realistic compensation range.' },
      { title: 'Notice to opposite party', description: 'A demand notice often produces settlement without litigation — we try it first.' },
      { title: 'Complaint filing', description: 'The complaint is filed (including via the e-Daakhil portal) with all evidence annexed.' },
      { title: 'Proceedings', description: 'We handle the opposite party’s reply, evidence and arguments through to the order.' },
      { title: 'Execution / appeal', description: 'We enforce awards — non-compliance is punishable — or advise on appeal if needed.' },
    ],
    documents: [
      'Invoice / proof of purchase or service payment',
      'Warranty card, brochure or advertisement relied upon',
      'Correspondence and complaints made to the seller/provider',
      'Evidence of the defect or deficiency (photos, reports, expert opinion)',
      'Proof of loss suffered (bills, medical records, etc.)',
    ],
    timeline: 'The Act envisages disposal within 3–5 months; in practice most matters conclude within 6 months to 2 years depending on the forum’s docket.',
    faqs: [
      {
        q: 'Is there a time limit for filing a consumer complaint?',
        a: 'Yes — two years from the date the cause of action arose. Commissions can condone delay for sufficient cause, but never plan around it; if your two years are close to lapsing, act immediately.',
      },
      {
        q: 'Do I need a lawyer for consumer forum?',
        a: 'You may appear in person, but opposite parties — insurers, builders, e-commerce companies — invariably come with counsel. Professional drafting of the complaint and quantification of compensation materially changes outcomes.',
      },
      {
        q: 'Can I file against an e-commerce platform for a seller’s fraud?',
        a: 'Yes. The E-Commerce Rules under the 2019 Act place duties on marketplaces, and platforms are routinely held liable alongside sellers for deficiencies and unfair practices in transactions they facilitate.',
      },
    ],
  },

  // ── Labour & Employment ────────────────────────────────────
  {
    slug: 'wrongful-termination',
    paSlug: 'labour-employment',
    metaTitle: 'Wrongful Termination Lawyer — Challenge Illegal Dismissal',
    metaDescription:
      'Terminated unfairly? Challenge illegal dismissal, recover dues and notice pay, or negotiate severance — employment advocates for employees and employers.',
    intro: [
      'Not every termination is lawful. Dismissal without the notice or pay your contract promises, retrenchment without statutory compliance, termination that masks retaliation or discrimination, or forced resignation — each gives rise to legal remedies, which differ sharply depending on whether you qualify as a “workman” under industrial law or are governed purely by your employment contract.',
      'Lexakind’s employment advocates act for both employees and employers: assessing the termination against your contract and statute, recovering unpaid salary, notice pay, gratuity and leave encashment, negotiating severance and exit terms, and litigating before labour courts or civil courts where negotiation fails.',
    ],
    process: [
      { title: 'Free consultation', description: 'We review your contract, the termination communication and the real reason behind it.' },
      { title: 'Claim assessment', description: 'Dues are computed — notice pay, salary, gratuity, bonus, leave encashment, damages.' },
      { title: 'Demand & negotiation', description: 'A legal notice and negotiation often secures settlement without litigation.' },
      { title: 'Proceedings', description: 'Where needed, we file before the labour court/tribunal or civil court as your status dictates.' },
      { title: 'Recovery', description: 'We pursue the matter through award/decree and execution until you are actually paid.' },
    ],
    documents: [
      'Employment contract / offer letter',
      'Termination letter or communication',
      'Salary slips and bank statements',
      'Appraisals and any correspondence around the termination',
      'Company policies / HR handbook, if available',
    ],
    timeline: 'Negotiated settlements often conclude within weeks; labour court and civil proceedings typically take 1–3 years.',
    faqs: [
      {
        q: 'Can a private company fire me without notice?',
        a: 'Only if your contract validly permits termination with pay in lieu of notice, and the termination isn’t otherwise unlawful. Summary dismissal without notice, pay or due inquiry is challengeable — and for “workmen”, retrenchment requires statutory notice and compensation.',
      },
      {
        q: 'What can I actually recover in a wrongful termination case?',
        a: 'Depending on your status: unpaid salary and dues, notice pay, gratuity, leave encashment, bonus — and for workmen, potentially reinstatement with back wages. Purely contractual employees typically recover damages measured by the notice period and dues.',
      },
      {
        q: 'I was forced to resign. Do I have a case?',
        a: 'A resignation extracted under threat or coercion can be treated as termination in disguise. Evidence matters — emails, messages, witness accounts of the pressure applied. Preserve everything and take advice before signing any settlement or release.',
      },
    ],
  },

  // ── NRI Legal Services ─────────────────────────────────────
  {
    slug: 'nri-spa',
    paSlug: 'nri-legal-services',
    metaTitle: 'Special Power of Attorney for NRIs — Draft, Attest & Register',
    metaDescription:
      'Execute a Special Power of Attorney from abroad — drafting, embassy attestation or apostille, and adjudication in India, so your representative can act legally on your behalf.',
    intro: [
      'For an NRI, a Special Power of Attorney (SPA) is the practical key to getting things done in India without flying down — selling or managing property, registering documents, operating bank matters or pursuing litigation through a trusted representative. But an SPA executed abroad is valid in India only if attested and stamped through the correct chain.',
      'Lexakind drafts SPAs limited precisely to the powers you intend (never a risky general POA), guides you through notarisation and Indian embassy attestation or apostille in your country, and completes adjudication/stamping in India within the statutory window — so the document is actually accepted by registrars, banks and courts.',
    ],
    process: [
      { title: 'Consultation', description: 'We define exactly what your attorney should be empowered to do — no more, no less.' },
      { title: 'Drafting', description: 'The SPA is drafted to Indian registration standards and sent to you abroad.' },
      { title: 'Execution abroad', description: 'You sign before a notary and get Indian embassy/consulate attestation or apostille.' },
      { title: 'Adjudication in India', description: 'The SPA is stamped/adjudicated with the district authority within 3 months of receipt in India.' },
      { title: 'Use', description: 'Your attorney can now act — we support registration, bank and court formalities where needed.' },
    ],
    documents: [
      'Passport and visa/residence proof of the NRI executant',
      'ID and address proof of the attorney (agent) in India',
      'Details of the property/matter the SPA covers',
      'Passport-size photographs of both parties',
      'Two witnesses at execution',
    ],
    timeline: 'Drafting within 2–3 working days; the full cycle including attestation abroad and adjudication in India typically takes 3–6 weeks.',
    faqs: [
      {
        q: 'Is a power of attorney executed abroad valid in India?',
        a: 'Yes, if properly executed: notarised locally and either attested by the Indian embassy/consulate or apostilled (for Hague Convention countries), then stamped/adjudicated in India within three months of its arrival. Documents skipping any step get rejected at the Sub-Registrar.',
      },
      {
        q: 'Can my attorney sell my property using the SPA?',
        a: 'Only if the SPA specifically authorises sale of that identified property. For sales, many states insist on a registered POA — and after Suraj Lamp, a POA is a means of representation, not a substitute for a registered sale deed. We structure it correctly for your state.',
      },
      {
        q: 'Special or General Power of Attorney — which should I give?',
        a: 'Almost always a Special POA. A GPA hands sweeping control and is a known vehicle of NRI property fraud. An SPA limited to defined acts, a defined property and ideally a defined time window protects you while getting the job done.',
      },
    ],
  },
];

/** Look up enriched content for a service within a practice area. */
export function getServiceContent(
  paSlug: string,
  serviceSlug: string,
): ServiceContent | undefined {
  return SERVICE_CONTENT.find(
    (s) => s.paSlug === paSlug && s.slug === serviceSlug,
  );
}

/** All enriched services under one practice area. */
export function getServiceContentForPA(paSlug: string): ServiceContent[] {
  return SERVICE_CONTENT.filter((s) => s.paSlug === paSlug);
}

/** True if a service has its own detail page. */
export function hasServicePage(paSlug: string, serviceSlug: string): boolean {
  return SERVICE_CONTENT.some(
    (s) => s.paSlug === paSlug && s.slug === serviceSlug,
  );
}
