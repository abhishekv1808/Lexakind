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
  // ══ PHASE 2 ═════════════════════════════════════════════════
  // ── Family Law (phase 2) ───────────────────────────────────
  {
    slug: 'hindu-divorce',
    paSlug: 'family-law',
    metaTitle: 'Contested Divorce Under the Hindu Marriage Act — Grounds & Process',
    metaDescription:
      'File or defend a contested divorce under the Hindu Marriage Act — cruelty, desertion, adultery and other Section 13 grounds, with interim maintenance and custody protection.',
    intro: [
      'When one spouse does not consent to ending the marriage, divorce under the Hindu Marriage Act proceeds on the grounds set out in Section 13 — cruelty (physical or mental), desertion for two years, adultery, conversion, unsoundness of mind, and others. Unlike a mutual consent divorce, a contested divorce is a full trial: pleadings, evidence, cross-examination and judgment, with interim orders on maintenance and custody protecting you while the case runs.',
      'Lexakind’s family advocates handle contested divorces on both sides — building the evidentiary record that cruelty and desertion cases turn on, securing interim maintenance and custody orders early, and keeping settlement channels open throughout, because many contested matters convert to mutual consent once positions are realistically assessed.',
    ],
    process: [
      { title: 'Free consultation', description: 'We assess your facts against the Section 13 grounds and advise the strongest footing.' },
      { title: 'Petition & interim reliefs', description: 'The divorce petition is filed with applications for interim maintenance and custody where needed.' },
      { title: 'Response & mediation', description: 'Courts refer most matrimonial disputes to mediation — we represent you through it.' },
      { title: 'Evidence & trial', description: 'Examination and cross-examination of witnesses; documents, messages and records are proved.' },
      { title: 'Judgment & decree', description: 'The court grants or refuses the decree; we advise on appeal or settlement at every stage.' },
    ],
    documents: [
      'Marriage certificate or proof of marriage',
      'Evidence supporting the ground pleaded (medical records, messages, witness details)',
      'Details of children, income and assets',
      'Any police complaints or prior proceedings between the parties',
      'Address proof of both spouses',
    ],
    timeline: 'Contested divorces typically run 2–5 years; interim maintenance and custody orders come much earlier.',
    faqs: [
      {
        q: 'What counts as cruelty for divorce?',
        a: 'Cruelty includes both physical violence and sustained mental cruelty — humiliation, false criminal complaints, denial of conjugal life, persistent abusive conduct. Courts assess the cumulative effect of conduct, not isolated incidents, so a documented pattern matters more than any single event.',
      },
      {
        q: 'Can divorce be granted if my spouse simply refuses to appear?',
        a: 'Yes. If the respondent is duly served and stays away, the court can proceed ex parte and grant the decree on your evidence. An ex parte decree can later be challenged, so proper service and a complete evidentiary record are essential.',
      },
      {
        q: 'Will I have to pay or receive maintenance during the case?',
        a: 'Either spouse can seek interim maintenance and litigation expenses under Section 24 HMA while the case is pending. The court weighs both parties’ incomes and needs — we prepare the asset-income affidavits that now decide these applications.',
      },
    ],
  },
  {
    slug: 'dowry-cases',
    paSlug: 'family-law',
    metaTitle: 'Dowry Harassment Cases — Complaint & Defence (BNS 85/86)',
    metaDescription:
      'File or defend dowry harassment and cruelty cases under BNS Sections 85–86 (formerly IPC 498A) and the Dowry Prohibition Act — urgent, discreet representation on both sides.',
    intro: [
      'Cruelty by a husband or his relatives — including dowry-related harassment — is a criminal offence under Sections 85 and 86 of the Bharatiya Nyaya Sanhita (the successor to IPC 498A), alongside the Dowry Prohibition Act, 1961. These cases move fast and carry arrest risk, so early legal strategy matters enormously — whether you are the complainant seeking protection or a family member facing implication.',
      'Lexakind advocates act on both sides: for complainants, we coordinate the criminal complaint with parallel civil remedies (Domestic Violence Act protection, maintenance, stridhan recovery); for the accused, we move quickly on anticipatory bail for the family, contest vague omnibus allegations, and pursue quashing where the complaint is retaliatory or settlement is reached.',
    ],
    process: [
      { title: 'Urgent consultation', description: 'We assess the complaint or FIR, the parties involved and immediate arrest risk.' },
      { title: 'Protective steps', description: 'Complainants: complaint drafting and safety measures. Accused: anticipatory bail for named family members.' },
      { title: 'Investigation stage', description: 'We manage police statements, evidence submission and cooperation on the right terms.' },
      { title: 'Trial or resolution', description: 'Matters proceed to trial, or — where genuine — settlement and quashing before the High Court.' },
      { title: 'Parallel remedies', description: 'Maintenance, stridhan recovery, DV Act and matrimonial proceedings are coordinated, not scattered.' },
    ],
    documents: [
      'Copy of the FIR or complaint (if registered)',
      'Marriage and dowry-related evidence (lists, receipts, messages)',
      'Details of all family members named or involved',
      'Any prior complaints or proceedings between the families',
      'Medical records where injuries are alleged',
    ],
    timeline: 'Anticipatory bail and protective orders within days to weeks; trials typically run 2–4 years unless settled and quashed earlier.',
    faqs: [
      {
        q: 'Can police arrest immediately in a dowry case?',
        a: 'Not automatically. Following Arnesh Kumar v. State of Bihar, police must justify arrest against a checklist for offences punishable up to seven years, and courts penalise mechanical arrests. Anticipatory bail applications for the husband’s family remain the prudent immediate step.',
      },
      {
        q: 'What is stridhan and can it be recovered?',
        a: 'Stridhan is the woman’s absolute property — jewellery, gifts and articles received before, during and after marriage. It is recoverable regardless of how the marriage ends, through criminal breach-of-trust proceedings and civil recovery. Keep whatever lists, photos and receipts exist.',
      },
      {
        q: 'Can a dowry case be settled and closed?',
        a: 'The offence is not compoundable in the ordinary course, but where parties reach a genuine overall settlement (often alongside divorce terms), High Courts routinely quash proceedings in matrimonial matters. We structure settlements so the quashing petition succeeds.',
      },
    ],
  },
  {
    slug: 'adoption',
    paSlug: 'family-law',
    metaTitle: 'Legal Adoption in India — HAMA & CARA/JJ Act Process',
    metaDescription:
      'Adopt legally in India — Hindu Adoptions and Maintenance Act deeds or CARA registration under the JJ Act, with complete documentation, court and agency support.',
    intro: [
      'Adoption in India runs on two parallel tracks. Hindus, Buddhists, Jains and Sikhs can adopt under the Hindu Adoptions and Maintenance Act, 1956 — a private adoption completed by a registered adoption deed with the biological parents’ consent. Everyone else, and anyone adopting through an institution, proceeds under the Juvenile Justice Act through CARA (the Central Adoption Resource Authority), with home studies, registration on the CARINGS portal and a court or district-magistrate order.',
      'Lexakind advocates guide families through whichever route applies — verifying capacity and consent requirements, drafting and registering HAMA adoption deeds, assembling CARA documentation, and completing the follow-up steps (birth-certificate updates, inheritance implications) that make the adoption legally complete.',
    ],
    process: [
      { title: 'Consultation', description: 'We confirm the applicable law, eligibility and the correct route for your family.' },
      { title: 'Documentation', description: 'Consents, capacity proofs and (for CARA) home-study and portal registration are prepared.' },
      { title: 'Deed or order', description: 'HAMA: adoption deed executed and registered. JJ Act: adoption order from the competent authority.' },
      { title: 'Ceremonial & legal completion', description: 'Giving-and-taking requirements and registration formalities are properly evidenced.' },
      { title: 'Post-adoption', description: 'Birth certificate updates and succession guidance for the child’s full legal integration.' },
    ],
    documents: [
      'ID, address and marriage proof of adoptive parents',
      'Consent of biological parents/guardian (HAMA route)',
      'Income and health documentation (CARA route)',
      'Child’s birth records where available',
      'Photographs of the adoption ceremony (HAMA)',
    ],
    timeline: 'HAMA deed adoptions can complete within weeks; CARA institutional adoptions typically take 1–2 years depending on referral waitlists.',
    faqs: [
      {
        q: 'Who can adopt under HAMA?',
        a: 'Any Hindu adult of sound mind with the capacity to adopt — married couples adopt jointly with both spouses’ consent, and single men and women can adopt subject to age-gap rules (at least 21 years between the adopter and a child of the opposite sex).',
      },
      {
        q: 'Is a registered adoption deed mandatory?',
        a: 'For HAMA adoptions, the ceremony of giving and taking is what effects the adoption, but a registered deed creates a statutory presumption of validity that is invaluable when inheritance or identity is later questioned. We always recommend registration.',
      },
      {
        q: 'What rights does an adopted child have?',
        a: 'From the date of adoption, the child is the child of the adoptive parents for all purposes — including inheritance — and ties with the birth family are legally severed (except prohibited-marriage degrees). The child’s existing vested property remains theirs.',
      },
    ],
  },
  {
    slug: 'child-maintenance',
    paSlug: 'family-law',
    metaTitle: 'Child Maintenance Claims — Secure Your Child’s Financial Support',
    metaDescription:
      'Claim or contest child maintenance under Section 144 BNSS and personal laws — education, medical and living costs, interim orders and enforcement of unpaid maintenance.',
    intro: [
      'Both parents are legally bound to maintain their minor children — regardless of who has custody and regardless of the parents’ marital status. Claims are made under Section 144 of the BNSS (the successor to Section 125 CrPC), the Hindu Adoptions and Maintenance Act, or within matrimonial proceedings, and cover living costs, education, and medical needs at a standard matching the paying parent’s means.',
      'Lexakind advocates secure realistic, enforceable child maintenance: quantifying actual costs with school fees and expense records, proving the paying parent’s true income where salaries are understated, obtaining interim orders early, and enforcing arrears through warrants when payments stop — the stage where many self-represented claims fail.',
    ],
    process: [
      { title: 'Free consultation', description: 'We assess the child’s needs, both parents’ finances and the best statutory route.' },
      { title: 'Application & affidavits', description: 'The claim is filed with the income-asset disclosure affidavits courts now require.' },
      { title: 'Interim maintenance', description: 'We press for interim support so the child isn’t squeezed while the case runs.' },
      { title: 'Evidence', description: 'School, medical and lifestyle expenses are proved; hidden income is exposed.' },
      { title: 'Final order & enforcement', description: 'Arrears are recovered through execution — including warrants — when orders are ignored.' },
    ],
    documents: [
      'Child’s birth certificate',
      'School fee receipts and expense records',
      'Your income proof and expense details',
      'Whatever is known of the other parent’s income, employer and assets',
      'Any existing court orders between the parents',
    ],
    timeline: 'Interim orders typically within 2–6 months; enforcement of defaults can move faster once an order exists.',
    faqs: [
      {
        q: 'Until what age is child maintenance payable?',
        a: 'Under Section 144 BNSS, until the child attains majority (18) — and beyond that for a child unable to maintain themselves due to disability. Under Hindu law, an unmarried daughter can claim maintenance including marriage expenses even after 18.',
      },
      {
        q: 'The father says he has no income. What then?',
        a: 'Courts impute earning capacity to able-bodied parents — “no income” rarely defeats a claim. We use employer records, bank statements, lifestyle evidence and business registrations to establish real means, and courts can order maintenance based on capacity to earn.',
      },
      {
        q: 'What happens if maintenance isn’t paid?',
        a: 'Unpaid maintenance is recoverable as arrears through execution — courts can issue recovery warrants and even sentence a wilful defaulter to imprisonment for each month of default. Enforcement is a right, not a renegotiation.',
      },
    ],
  },

  // ── Criminal Law (phase 2) ─────────────────────────────────
  {
    slug: 'medical-negligence',
    paSlug: 'criminal-law',
    metaTitle: 'Medical Negligence Cases — Compensation & Accountability',
    metaDescription:
      'Hold doctors and hospitals accountable for medical negligence — consumer commission compensation claims and criminal proceedings, built on expert medical opinion.',
    intro: [
      'Medical negligence arises when a doctor or hospital fails the standard of care a reasonably competent professional would meet, causing injury or death. The law gives patients parallel remedies: compensation claims before consumer commissions (hospitals are service providers under the Consumer Protection Act), civil damages suits, and — in cases of gross negligence — criminal proceedings under Section 106 of the BNS. Since Jacob Mathew, courts require credible expert medical opinion before criminal process issues, so how a case is built matters as much as what happened.',
      'Lexakind advocates handle medical negligence end to end: obtaining and analysing complete medical records, securing independent expert opinions, quantifying compensation (treatment costs, lost income, future care), and running the consumer commission or court proceedings — while advising honestly when an outcome, however tragic, is not legally negligence.',
    ],
    process: [
      { title: 'Case evaluation', description: 'We review records and facts to assess whether the standard of care was breached.' },
      { title: 'Records & expert opinion', description: 'Complete medical records are obtained; independent specialist opinion is secured.' },
      { title: 'Forum selection', description: 'Consumer commission, civil suit or criminal complaint — chosen by evidence and objective.' },
      { title: 'Proceedings', description: 'We conduct the matter through evidence, expert testimony and arguments.' },
      { title: 'Compensation & compliance', description: 'Awards are executed; non-compliance is pursued through enforcement.' },
    ],
    documents: [
      'Complete medical records, prescriptions and discharge summaries',
      'Bills and payment receipts for treatment',
      'Death certificate / disability assessment (as applicable)',
      'Correspondence or complaints already made to the hospital',
      'Details of income loss caused by the injury',
    ],
    timeline: 'Consumer commission matters typically run 1–3 years; interim expert-opinion stages move within months.',
    faqs: [
      {
        q: 'A treatment failed — is that automatically negligence?',
        a: 'No. Medicine involves inherent risk, and an adverse outcome alone is not negligence. The test is whether the doctor acted as a reasonably competent professional would — wrong choice among accepted practices is not negligence, but treatment no reasonable professional would give is.',
      },
      {
        q: 'How much compensation can be claimed?',
        a: 'Compensation covers treatment expenses, income lost, future care costs and, in death cases, dependency loss computed on established multiplier principles. Indian commissions have awarded substantial sums in proven cases — realistic quantification with documents is what separates strong claims.',
      },
      {
        q: 'Is there a time limit for filing?',
        a: 'Consumer complaints must be filed within two years of the cause of action — generally when the negligence and injury became known. Courts can condone delay for sufficient cause, but act promptly: records access and expert review themselves take time.',
      },
    ],
  },
  {
    slug: 'motor-accident',
    paSlug: 'criminal-law',
    metaTitle: 'Motor Accident Claims (MACT) — Compensation for Accident Victims',
    metaDescription:
      'Claim full compensation for road accident injury or death before the Motor Accidents Claims Tribunal — no-fault and fault claims, insurer negotiations, and criminal defence.',
    intro: [
      'Road accident victims and their families are entitled to compensation from the vehicle owner and insurer through the Motor Accidents Claims Tribunal (MACT) — for death, injury, disability, treatment costs and income loss, computed on structured principles the Supreme Court has standardised. Claims under Section 166 of the Motor Vehicles Act pursue full fault-based compensation, while Section 164 provides fixed no-fault amounts without proving negligence.',
      'Lexakind advocates handle both sides of the accident: MACT claims for victims — assembling police records, medical evidence and income proof, and countering insurers’ routine undervaluation — and criminal defence for drivers facing rash-and-negligent-driving charges under Section 106 BNS, where the criminal and compensation proceedings must be managed together.',
    ],
    process: [
      { title: 'Free consultation', description: 'We assess the accident record, injuries and realistic compensation value.' },
      { title: 'Evidence assembly', description: 'FIR, mechanical inspection, medical records, disability certificate and income proof are compiled.' },
      { title: 'Claim filing', description: 'The MACT claim is filed against owner and insurer with full quantification.' },
      { title: 'Hearing & negotiation', description: 'We contest insurer defences and negotiate settlement where the offer is genuinely fair.' },
      { title: 'Award & recovery', description: 'The award is executed with interest; appeals are advised where awards are inadequate.' },
    ],
    documents: [
      'FIR and police final report',
      'Medical records, bills and disability certificate',
      'Income proof of the injured/deceased (salary slips, ITR)',
      'Vehicle and insurance details of the offending vehicle',
      'Legal-heir details in death cases',
    ],
    timeline: 'MACT claims typically conclude in 1–3 years; interim compensation and no-fault amounts can come earlier.',
    faqs: [
      {
        q: 'What if the accident was partly my fault?',
        a: 'Compensation is reduced proportionately for contributory negligence, not denied. And where fault can’t be fully established, the no-fault route under Section 164 guarantees fixed compensation regardless — we choose the framing that maximises recovery on your facts.',
      },
      {
        q: 'The insurer is offering a settlement. Should I take it?',
        a: 'Not before it is independently valued. Insurers systematically undervalue future income loss, disability impact and attendant care. We compute the claim on the Supreme Court’s structured formula (including future prospects) before any offer is accepted.',
      },
      {
        q: 'Is there a deadline for MACT claims?',
        a: 'The 2019 amendments introduced a six-month limitation for claim petitions, though tribunals retain discretion in genuine cases. File promptly — evidence like the mechanical report and witness accounts also degrades with time.',
      },
    ],
  },
  {
    slug: 'bail-appeal',
    paSlug: 'criminal-law',
    metaTitle: 'Bail Rejection Appeal — Take Your Bail Plea to the Higher Court',
    metaDescription:
      'Bail rejected? Renew the application before the Sessions Court, High Court or Supreme Court with a stronger, rejection-aware strategy — urgent filings for persons in custody.',
    intro: [
      'A rejected bail application is not the end of the road. Bail pleas can be renewed before the same court on changed circumstances, and pursued up the ladder — Magistrate to Sessions Court to High Court to the Supreme Court — with each forum exercising fresh discretion. What changes outcomes is a rejection-aware strategy: understanding exactly why bail was refused and rebuilding the application to answer it, rather than repeating the same plea louder.',
      'Lexakind’s criminal advocates handle bail appeals and renewals with urgency: obtaining the rejection order and case diary position, curing the specific concerns (flight risk, witness tampering, investigation stage), timing the renewal to milestones like chargesheet filing, and appearing before the High Court — where a person in custody deserves the fastest competent route out.',
    ],
    process: [
      { title: 'Urgent review', description: 'We study the rejection order to identify exactly what persuaded the court to refuse.' },
      { title: 'Strategy', description: 'Renewal on changed circumstances vs escalation to the higher forum — chosen deliberately.' },
      { title: 'Stronger application', description: 'The fresh plea addresses each recorded concern with conditions, undertakings and sureties.' },
      { title: 'Hearing', description: 'We argue before the Sessions Court/High Court, pressing custody-period and parity grounds.' },
      { title: 'Release', description: 'On grant, bond formalities are completed the same day wherever possible.' },
    ],
    documents: [
      'Copy of the bail rejection order(s)',
      'FIR and chargesheet (if filed)',
      'Custody certificate / period of detention details',
      'Details of co-accused granted bail (parity ground)',
      'Medical or family circumstances supporting release',
    ],
    timeline: 'High Court bail applications are typically listed within days to a few weeks; urgent mentioning is available for deserving cases.',
    faqs: [
      {
        q: 'How soon can bail be re-applied after rejection?',
        a: 'Immediately before a higher forum — no waiting period applies to moving the Sessions Court or High Court. Before the same court, a fresh application needs changed circumstances: chargesheet filed, prolonged custody, co-accused released, or new facts.',
      },
      {
        q: 'Does chargesheet filing help a fresh bail plea?',
        a: 'Significantly. Once investigation completes, the main objection — interference with the probe — falls away, and continued detention becomes harder to justify. A renewal timed to the chargesheet is often the highest-probability moment.',
      },
      {
        q: 'What is the parity ground?',
        a: 'If co-accused with a similar role have been granted bail, the same treatment can be claimed. Courts examine whether your role is genuinely comparable — we build the comparison precisely from the chargesheet allegations.',
      },
    ],
  },

  // ── Civil Litigation (phase 2) ─────────────────────────────
  {
    slug: 'civil-court-litigation',
    paSlug: 'civil-litigation',
    metaTitle: 'Civil Court Litigation — Suits, Defence & Recovery',
    metaDescription:
      'Full-service civil litigation — money recovery, property, contract and declaration suits conducted through pleadings, evidence, judgment and execution.',
    intro: [
      'Civil litigation is how private rights are enforced — recovering money owed, protecting property, enforcing or unwinding contracts, and obtaining declarations of rights. A civil suit runs through defined stages under the Code of Civil Procedure: pleadings, framing of issues, evidence, arguments, judgment, and then execution — the stage where a decree is converted into actual money or possession, and where unrepresented litigants most often stall.',
      'Lexakind’s civil litigators handle suits from pre-litigation notice to execution: drafting pleadings that survive scrutiny, securing interim protection so the subject matter isn’t frustrated mid-suit, conducting evidence and cross-examination, and pursuing execution relentlessly — because a decree without recovery is only paper. Where commercial value justifies it, we route disputes through the faster Commercial Courts track.',
    ],
    process: [
      { title: 'Case assessment', description: 'We evaluate the claim or defence, limitation position and realistic outcomes.' },
      { title: 'Notice & pleadings', description: 'Legal notice where useful; plaint or written statement drafted with precision.' },
      { title: 'Interim reliefs', description: 'Injunctions, attachment or deposit orders protect the subject matter during trial.' },
      { title: 'Evidence & arguments', description: 'Documents are proved, witnesses examined and the matter argued to judgment.' },
      { title: 'Execution', description: 'The decree is enforced — attachment, sale, arrest in appropriate cases — until you actually recover.' },
    ],
    documents: [
      'Agreements, invoices or documents underlying the dispute',
      'Correspondence and notices exchanged',
      'Proof of payments made or received',
      'Property documents (for property suits)',
      'Details of the opposite party and their assets (for recovery)',
    ],
    timeline: 'Civil suits typically run 2–5 years depending on the court and contest; interim orders come within weeks to months.',
    faqs: [
      {
        q: 'Is there a time limit for filing a civil suit?',
        a: 'Yes — the Limitation Act prescribes periods for every claim type: three years for most money and contract claims, twelve for possession based on title. Limitation is fatal and rarely condonable in suits, so get the position checked immediately.',
      },
      {
        q: 'What is the difference between a civil and commercial suit?',
        a: 'Commercial disputes above ₹3 lakh can proceed before Commercial Courts under a stricter, faster regime — mandatory pre-institution mediation, tight timelines for written statements, and summary judgment powers. For business claims it is usually the better track.',
      },
      {
        q: 'I have a decree but the other side won’t pay. What now?',
        a: 'Execution proceedings: the court can attach and sell the judgment-debtor’s property, order salary attachment, and in cases of wilful refusal despite means, order detention. Asset tracing is the practical key — we pursue it as part of execution.',
      },
    ],
  },
  {
    slug: 'injunction-suits',
    paSlug: 'civil-litigation',
    metaTitle: 'Injunction Suits — Stop Illegal Action Before Harm Is Done',
    metaDescription:
      'Obtain temporary and permanent injunctions to stop illegal construction, dispossession, breach of contract or misuse of property — urgent same-week filings.',
    intro: [
      'An injunction is the law’s emergency brake — a court order stopping someone from doing harm that money can’t later fix: dispossessing you from property, demolishing or constructing illegally, breaching confidentiality, or alienating disputed assets. Temporary injunctions under Order 39 CPC preserve the position while a suit runs; permanent injunctions under the Specific Relief Act settle the right finally after trial.',
      'Injunction practice is won at the first hearing, so speed and drafting quality decide outcomes. Lexakind’s litigators move fast: preparing the suit and injunction application together, establishing the three classical requirements — prima facie case, irreparable harm and balance of convenience — with documents rather than adjectives, and defending against ex parte orders obtained behind your back.',
    ],
    process: [
      { title: 'Urgent assessment', description: 'We evaluate the threat, your documents and the realistic scope of restraint.' },
      { title: 'Suit & application', description: 'The suit and Order 39 application are drafted and filed together, with urgency motions.' },
      { title: 'Interim hearing', description: 'We press for immediate ad-interim protection, ex parte where delay would defeat the purpose.' },
      { title: 'Contest', description: 'The opposite side’s objections are met; interim orders are confirmed or vacated after hearing.' },
      { title: 'Trial to permanence', description: 'The matter proceeds to trial for a permanent injunction where needed.' },
    ],
    documents: [
      'Title or contract documents establishing your right',
      'Photographs/evidence of the threatened or ongoing act',
      'Correspondence, notices and any police complaints',
      'Survey records and sketches (property matters)',
      'Proof of possession (utility bills, tax receipts)',
    ],
    timeline: 'Ad-interim orders can issue on the first hearing — within days of filing in urgent cases; confirmation hearings follow over weeks.',
    faqs: [
      {
        q: 'How fast can I get an injunction?',
        a: 'In genuinely urgent cases, an ad-interim injunction can be granted on the day of filing, even without notice to the other side (ex parte) where prior notice would defeat the purpose. Courts require full, honest disclosure for ex parte orders — concealment gets them vacated with costs.',
      },
      {
        q: 'What must I prove to get a temporary injunction?',
        a: 'Three things together: a prima facie case (a serious triable right), irreparable injury (harm money cannot adequately compensate), and balance of convenience (you lose more if refused than they lose if granted). Documentary groundwork on each is what wins the motion.',
      },
      {
        q: 'What happens if someone violates an injunction?',
        a: 'Violation is punishable — under Order 39 Rule 2A the court can attach the violator’s property and order detention in civil prison, apart from contempt jurisdiction. Prompt violation applications with evidence keep an order meaningful.',
      },
    ],
  },

  {
    slug: 'tenant-disputes',
    paSlug: 'civil-litigation',
    metaTitle: 'Landlord-Tenant Disputes — Deposits, Eviction Defence & Rent Issues',
    metaDescription:
      'Resolve landlord-tenant conflicts — security deposit recovery, illegal eviction defence, rent disputes and lock-in disagreements, for tenants and owners alike.',
    intro: [
      'Most tenancy disputes cluster around a few flashpoints: security deposits withheld without justification, threats of illegal eviction (lock-outs, utility disconnection), rent escalation and lock-in disagreements, and premises handed back in contested condition. The rights on each depend on the rent agreement’s terms, the state’s rent legislation, and general law — a lock-out without court process is unlawful no matter what the agreement says.',
      'Lexakind advocates act for tenants and owners: recovering withheld deposits through notice and, where needed, summary proceedings; defending tenants against strong-arm eviction with police complaints and injunctions; and advising owners on the lawful route to possession — because self-help remedies expose landlords to criminal liability that dwarfs the rent at stake.',
    ],
    process: [
      { title: 'Free consultation', description: 'We review the agreement and the dispute, and map each side’s actual legal position.' },
      { title: 'Legal notice', description: 'A precise demand or reply notice resolves a large share of deposit and rent disputes.' },
      { title: 'Urgent protection', description: 'For lock-outs or utility cut-offs: police complaint plus injunction to restore the position.' },
      { title: 'Proceedings', description: 'Recovery suit, rent-court petition or defence — conducted through to order.' },
      { title: 'Closure', description: 'Settlements are documented and possession handovers recorded to prevent round two.' },
    ],
    documents: [
      'Rent/lease agreement',
      'Rent payment records and deposit proof',
      'Photos/videos of the premises condition and any lock-out',
      'Correspondence with the other side',
      'Utility bills evidencing occupation',
    ],
    timeline: 'Notice-stage resolutions within weeks; contested deposit recoveries and tenancy proceedings typically run months to a couple of years.',
    faqs: [
      {
        q: 'My landlord won’t return my security deposit. What can I do?',
        a: 'Demand it by legal notice with the agreement’s deduction clause quoted — most landlords pay at this stage. If not, a recovery suit (or commercial-track summary suit for larger amounts) follows, and courts award interest for wrongful retention. Preserve the handover photos and communications.',
      },
      {
        q: 'Can my landlord change the locks or cut electricity to force me out?',
        a: 'No. Eviction requires court process — lock-outs, utility disconnection and intimidation are illegal and ground both police complaints and mandatory injunctions to restore possession. Document everything and act immediately; delay weakens urgent relief.',
      },
      {
        q: 'The tenant left the flat damaged. Can I deduct from the deposit?',
        a: 'Yes, for damage beyond normal wear and tear — but be able to prove it: dated photographs at handover and vacation, repair invoices, and ideally a signed condition report. Unilateral, undocumented deductions are how landlords lose deposit litigation.',
      },
    ],
  },
  {
    slug: 'khata-issues',
    paSlug: 'civil-litigation',
    metaTitle: 'Khata Transfer & Issues in Bengaluru — A/B Khata, e-Khata & Corrections',
    metaDescription:
      'Fix khata problems in Bengaluru — khata transfer after purchase or inheritance, A-khata vs B-khata guidance, e-khata registration and correction of BBMP records.',
    intro: [
      'The khata is Bengaluru’s municipal ownership record — the BBMP account that determines property tax billing and is demanded for sale, loans, and building plan approvals. Khata problems are among the most common property headaches in the city: transfers pending years after purchase or inheritance, properties stuck with a “B-khata” that limits approvals and financing, name and measurement errors, and the ongoing mandatory transition to e-khata, without which registrations now stall.',
      'Lexakind handles khata matters end to end: transfers after sale, inheritance or gift; bifurcation and amalgamation; correction of errors in BBMP records; e-khata registration; and honest guidance on B-khata properties — what a B-khata actually means for your plans, and when conversion to A-khata is realistically available (betterment charges, DC conversion and layout status all matter).',
    ],
    process: [
      { title: 'Consultation', description: 'We review your documents and the current khata status in BBMP records.' },
      { title: 'Documentation', description: 'The application with sale deed, EC, tax receipts and sketches is prepared correctly first time.' },
      { title: 'Filing & follow-up', description: 'Filed online/at the BBMP office; we track and respond to objections and endorsements.' },
      { title: 'Verification', description: 'Revenue inspector verification is attended and clarified where needed.' },
      { title: 'Certificate & e-khata', description: 'You receive the khata certificate/extract and completed e-khata registration.' },
    ],
    documents: [
      'Registered sale deed / gift deed / inheritance documents',
      'Latest encumbrance certificate',
      'Up-to-date property tax paid receipts',
      'Previous khata certificate and extract',
      'Aadhaar and photographs of the owner',
    ],
    timeline: 'Straightforward transfers typically complete in 4–10 weeks; corrections and B-khata conversions vary with the property’s regularisation status.',
    faqs: [
      {
        q: 'What is the difference between A-khata and B-khata?',
        a: 'A-khata properties are fully compliant in BBMP’s records — eligible for building plan sanctions, trade licences and bank loans. B-khata is a separate register for properties with compliance gaps (unauthorised layouts, DC-conversion issues, unpaid betterment charges); they can be held and sold, but face financing and approval hurdles.',
      },
      {
        q: 'Can a B-khata be converted to A-khata?',
        a: 'Often, yes — where the underlying defect is curable: paying betterment charges, DC conversion of the land, or the layout falling within a regularisation scheme. We assess the specific defect first; conversion is a document-driven process, not a fee-driven one.',
      },
      {
        q: 'Is khata proof of ownership?',
        a: 'No — the khata is a tax/administrative record, not title. Ownership flows from the registered deed. But a khata in your name is practically indispensable: registrars, banks and BBMP all demand it, which is why transfers shouldn’t be left pending after purchase.',
      },
    ],
  },

  // ── Property Law (phase 2) ─────────────────────────────────
  {
    slug: 'encumbrance-certificate',
    paSlug: 'property-law',
    metaTitle: 'Encumbrance Certificate (EC) — Obtain & Interpret Before You Transact',
    metaDescription:
      'Get your encumbrance certificate quickly via Kaveri Online (Karnataka) with legal reading of every entry — mortgages, charges and transactions that affect your property.',
    intro: [
      'The encumbrance certificate (EC) is the registration department’s statement of every registered transaction touching a property over a chosen period — sales, mortgages, gifts, release deeds, court attachments. It is demanded by every serious buyer, every lender, and most government processes, and in Karnataka is issued through the Kaveri Online Services portal (Form 15 listing transactions, or Form 16 certifying nil encumbrance).',
      'Lexakind both procures ECs — correctly, for the right survey number/property description and the right period, which is where self-service applications go wrong — and, more importantly, reads them legally: identifying subsisting mortgages that need release deeds, spotting gaps between the EC and the title chain, and flagging entries (attachments, agreements) that change a transaction’s risk entirely.',
    ],
    process: [
      { title: 'Property details', description: 'We verify the exact property description and registration district before applying.' },
      { title: 'Application', description: 'The EC application is filed on Kaveri Online for the full period you need (typically 15–30+ years).' },
      { title: 'Procurement', description: 'We follow up until the certificate issues, resolving description mismatches if raised.' },
      { title: 'Legal reading', description: 'Every entry is analysed against the title documents — not just handed over.' },
      { title: 'Action plan', description: 'Where charges subsist, we advise the releases or closures required before you transact.' },
    ],
    documents: [
      'Property schedule / sale deed copy (for the correct description)',
      'Survey number and village/registration district details',
      'Owner name and period for which the EC is needed',
      'Your ID for the application',
    ],
    timeline: 'Karnataka digital ECs typically issue within a few days to two weeks, depending on the office and period requested.',
    faqs: [
      {
        q: 'What does a “nil” EC mean — is the property definitely clean?',
        a: 'A nil EC (Form 16) means no registered transactions in the period searched — strong evidence, but not a guarantee. Unregistered agreements, pending litigation, tax dues and mortgages by deposit of title deeds in another jurisdiction won’t appear. An EC is one pillar of due diligence, not the whole building.',
      },
      {
        q: 'How many years of EC should I get before buying?',
        a: 'Convention is at least 15 years for bank purposes and 30 years for proper legal due diligence — matching the period over which title should be traced. For inherited or converted land, longer searches are often justified.',
      },
      {
        q: 'The EC shows an old mortgage that was repaid. Is that a problem?',
        a: 'Yes, until formally discharged. A repaid loan whose release deed was never registered remains a subsisting charge on paper — buyers and banks will insist on a registered release/discharge from the lender before proceeding. We handle exactly these closures.',
      },
    ],
  },
  {
    slug: 'lease-deed',
    paSlug: 'property-law',
    metaTitle: 'Lease Deed Drafting & Registration — Commercial & Long-Term Leases',
    metaDescription:
      'Commercial and long-term lease deeds drafted and registered — rent, lock-in, escalation, fit-out and exit clauses that protect you for the full term.',
    intro: [
      'A lease deed governs a long-term letting — offices, retail spaces, industrial premises, and residential terms beyond 11 months — and unlike casual rent agreements, leases of a year or more must be registered to be enforceable as leases at all. Commercial leases carry real money across long terms, which is why their clauses deserve engineering: escalation, lock-in and exit, fit-out and reinstatement, maintenance and outgoings, subletting and assignment.',
      'Lexakind drafts and registers lease deeds for landlords and tenants: balancing lock-in against exit flexibility, capping escalation, defining maintenance and repair boundaries precisely, protecting security deposits, and handling stamping and Sub-Registrar registration — including the Karnataka stamp duty computations that surprise first-time lessors.',
    ],
    process: [
      { title: 'Term sheet', description: 'Commercial terms — rent, deposit, term, lock-in, escalation — are settled in plain language first.' },
      { title: 'Drafting', description: 'The lease deed is drafted with the operational clauses that prevent later disputes.' },
      { title: 'Negotiation', description: 'We negotiate revisions with the other side’s counsel to a balanced final form.' },
      { title: 'Stamping', description: 'Stamp duty is computed on rent, premium and term as your state prescribes.' },
      { title: 'Registration', description: 'Execution and registration at the Sub-Registrar completes an enforceable lease.' },
    ],
    documents: [
      'Ownership documents of the premises',
      'ID and PAN of lessor and lessee (entity documents for companies)',
      'Agreed commercial terms',
      'Premises plan/schedule',
      'Two witnesses for execution',
    ],
    timeline: 'Drafting within 3–5 working days; registration subject to stamping and Sub-Registrar scheduling.',
    faqs: [
      {
        q: 'Is registration of a lease compulsory?',
        a: 'For terms of one year or more, yes — an unregistered lease of that length is not admissible to prove the lease terms, leaving both sides on statutory month-to-month footing. For serious commercial lettings, registration is non-negotiable protection.',
      },
      {
        q: 'What is a leave-and-licence versus a lease?',
        a: 'A lease transfers an interest in the property; a licence is bare permission to use it. The label doesn’t decide — the rights granted do. The choice affects eviction difficulty, stamp duty and the applicable law, so it should be a decision, not an accident of template.',
      },
      {
        q: 'Who bears the stamp duty and registration costs?',
        a: 'By convention the lessee, but it is fully negotiable and should be written down. Duty in Karnataka scales with term and rent (with different slabs for short terms vs long leases), so structure — term length, premium vs rent — has real cost consequences we can model for you.',
      },
    ],
  },
  {
    slug: 'partnership-deed',
    paSlug: 'property-law',
    metaTitle: 'Partnership Deed Drafting & Firm Registration',
    metaDescription:
      'Partnership deeds drafted for clarity on capital, profit sharing, duties and exit — with registration of the firm under the Partnership Act for full enforceability.',
    intro: [
      'A partnership deed is the constitution of a partnership firm — capital contributions, profit and loss sharing, drawing rights, duties, admission and retirement of partners, and what happens on dispute, death or dissolution. The Partnership Act, 1932 fills gaps with defaults most partners wouldn’t choose (equal profit sharing regardless of capital, for one), so an unwritten or template deed quietly rewrites your business terms.',
      'Lexakind drafts partnership deeds that anticipate the real flashpoints — valuation on exit, non-compete after retirement, deadlock resolution, authority limits on binding the firm — and completes registration with the Registrar of Firms, without which the firm cannot sue its own debtors or enforce contractual claims in court, a limitation many firms discover only at the worst moment.',
    ],
    process: [
      { title: 'Consultation', description: 'We map partners, capital, roles and the sharing arrangement you actually intend.' },
      { title: 'Drafting', description: 'The deed is drafted with exit, valuation, dispute and authority clauses — not just percentages.' },
      { title: 'Execution & stamping', description: 'The deed is stamped as per state law and signed by all partners.' },
      { title: 'Firm registration', description: 'Application to the Registrar of Firms with the deed and prescribed forms.' },
      { title: 'Post-registration', description: 'PAN, bank account and GST guidance to make the firm operational.' },
    ],
    documents: [
      'ID, PAN and address proof of all partners',
      'Business address proof (rent agreement/ownership + NOC)',
      'Agreed capital and profit-sharing terms',
      'Proposed firm name options',
      'Photographs of partners',
    ],
    timeline: 'Deed drafting within 2–4 working days; Registrar of Firms registration typically takes a few weeks depending on the state office.',
    faqs: [
      {
        q: 'Is registering a partnership firm mandatory?',
        a: 'Registration is optional in most states — but an unregistered firm cannot file suits to enforce its contracts or claims against third parties, and partners cannot sue the firm or each other on the deed. For any firm doing real business, registration is cheap insurance.',
      },
      {
        q: 'What happens if we have no written deed?',
        a: 'The Partnership Act’s defaults govern: equal profit sharing irrespective of capital or effort, no remuneration or interest on capital, and dissolution triggered by any partner’s death or notice. Few partners actually want these — write the deed you mean.',
      },
      {
        q: 'Partnership firm or LLP — which should we choose?',
        a: 'An LLP gives limited liability and a separate legal identity at the cost of MCA compliance; a partnership firm is lighter and simpler but leaves partners personally liable. For professional practices and businesses with real exposure, the LLP is usually worth it — we advise on your specifics in consultation.',
      },
    ],
  },

  // ── Real Estate & RERA / Money Recovery (phase 2) ──────────
  {
    slug: 'debt-collection',
    paSlug: 'real-estate-rera',
    metaTitle: 'Debt Recovery & Collection — Recover Outstanding Dues Legally',
    metaDescription:
      'Recover unpaid invoices, loans and dues through legal notice, summary suits, commercial courts, NI Act proceedings and insolvency pressure — strategy matched to the debtor.',
    intro: [
      'Unpaid invoices and loans rarely resolve on reminders alone — they resolve when the debtor’s cost of not paying exceeds the cost of paying. Indian law offers a graded arsenal: the advocate’s demand notice, summary suits under Order 37 CPC (where defences need court permission), the fast-tracked Commercial Courts regime, cheque-bounce prosecution under Section 138 NI Act where instruments exist, MSME Samadhaan for registered small enterprises, and insolvency proceedings whose real power is leverage.',
      'Lexakind builds the recovery route around the debtor, not a template: solvency and asset position first, then the instrument mix that maximises pressure per rupee of cost — often a Section 138 prosecution running alongside a civil claim. We litigate through decree and, critically, execution: attachment, garnishee orders on the debtor’s receivables, and asset tracing until money actually moves.',
    ],
    process: [
      { title: 'Debt assessment', description: 'Documentation, limitation and the debtor’s capacity to pay are evaluated upfront.' },
      { title: 'Demand notice', description: 'A precise advocate’s notice — a large share of commercial dues settle here.' },
      { title: 'Instrument selection', description: 'Summary suit, commercial suit, 138 NI Act, MSME or IBC route — chosen for leverage.' },
      { title: 'Proceedings', description: 'The claim is litigated with interim attachment sought where assets may vanish.' },
      { title: 'Execution', description: 'Decrees are enforced against property, bank accounts and receivables until recovery.' },
    ],
    documents: [
      'Invoices, agreements or loan documents',
      'Ledger/statement of account showing the outstanding',
      'Delivery challans / proof of work done',
      'Cheques and return memos (if any)',
      'Correspondence acknowledging the debt',
    ],
    timeline: 'Notice-stage settlements within weeks; summary and commercial suits typically 1–3 years; execution timelines depend on asset visibility.',
    faqs: [
      {
        q: 'Is there a time limit to recover a debt?',
        a: 'Generally three years from when the debt fell due — extendable by written acknowledgment or part-payment, which restarts limitation. An emailed acknowledgment or a small payment can revive a claim, so share the full correspondence history when we assess your case.',
      },
      {
        q: 'What is a summary suit and when does it apply?',
        a: 'For claims based on written contracts, invoices or negotiable instruments, Order 37 CPC reverses the burden: the defendant must seek the court’s leave to defend, and absent a credible defence you get a decree without full trial. It is the fastest pure-civil recovery track.',
      },
      {
        q: 'The debtor company simply ignores everything. What creates real pressure?',
        a: 'An insolvency demand under the IBC concentrates minds: an operational-creditor notice threatening CIRP puts the company’s control at stake, and many disputes settle within the statutory window. It must be used honestly — genuine pre-existing disputes defeat it — which is where strategy matters.',
      },
    ],
  },
  {
    slug: 'insurance-claim',
    paSlug: 'real-estate-rera',
    metaTitle: 'Insurance Claim Rejection — Challenge Wrongful Repudiation',
    metaDescription:
      'Wrongly rejected life, health, motor or property insurance claim? Challenge repudiation through the insurer’s ombudsman and consumer commissions — with interest and compensation.',
    intro: [
      'Insurers reject claims on familiar grounds — “pre-existing disease”, “suppression of material facts”, delayed intimation, policy exclusions read at their widest. Many of these repudiations do not survive legal scrutiny: courts and consumer commissions have repeatedly held that exclusions must be proved by the insurer, ambiguity reads against the drafter, and technical delays don’t defeat genuine claims. A rejection letter is a position, not a verdict.',
      'Lexakind advocates challenge wrongful repudiation across life, health, motor and property policies: dismantling the stated ground against the policy wording and medical record, escalating through the insurer’s grievance cell and the Insurance Ombudsman (Bima Bharosa) where it is fast and free, and litigating before consumer commissions for the claim amount with interest and compensation for the harassment of wrongful denial.',
    ],
    process: [
      { title: 'Repudiation review', description: 'The rejection letter, policy wording and claim file are analysed for legal weakness.' },
      { title: 'Representation', description: 'A reasoned challenge is lodged with the insurer’s grievance redressal cell.' },
      { title: 'Ombudsman', description: 'For claims within its limits, the Insurance Ombudsman route — fast, free, binding on the insurer.' },
      { title: 'Consumer commission', description: 'Where needed, a deficiency-of-service complaint claiming the amount, interest and compensation.' },
      { title: 'Recovery', description: 'Awards are enforced; insurers’ appeals are defended through to payment.' },
    ],
    documents: [
      'Policy document and schedule',
      'Claim form and rejection/repudiation letter',
      'Medical records / surveyor report / FIR (as per claim type)',
      'Premium payment history',
      'Correspondence with the insurer and TPA',
    ],
    timeline: 'Ombudsman complaints typically decide within months; consumer commission matters run 1–2 years — both award interest for the delay.',
    faqs: [
      {
        q: 'My health claim was rejected for “pre-existing disease”. Is that final?',
        a: 'Rarely. The insurer must prove you actually knew of and suppressed the condition — vague assertions or conditions diagnosed only after the policy don’t qualify, and after the policy’s PED waiting period the exclusion itself expires. These are among the most frequently overturned repudiations.',
      },
      {
        q: 'What is the Insurance Ombudsman and should I use it?',
        a: 'A free statutory grievance forum for policyholders, deciding complaints up to ₹50 lakh — typically within months, and awards bind the insurer. For claims within its ceiling it is usually the right first escalation; court remedies stay available if the outcome disappoints.',
      },
      {
        q: 'Can I get more than the claim amount?',
        a: 'Yes — consumer commissions routinely award interest from the date the claim ought to have been paid, plus compensation for deficiency of service and litigation costs. Wrongful repudiation is treated as a service deficiency, not a mere contract disagreement.',
      },
    ],
  },

  // ── Corporate Law (phase 2) ────────────────────────────────
  {
    slug: 'arbitration',
    paSlug: 'corporate-law',
    metaTitle: 'Arbitration — Resolve Business Disputes Outside Court',
    metaDescription:
      'Arbitration under the Arbitration & Conciliation Act — notice to award and enforcement, interim court protection, and challenge/defence of arbitral awards.',
    intro: [
      'Arbitration is the default dispute route in modern commercial contracts — a private tribunal, chosen by the parties, decides the dispute and issues an award enforceable like a court decree. Done well, it is faster and more confidential than litigation; the Arbitration & Conciliation Act, 1996 (with its pro-enforcement amendments) limits court interference to narrow grounds, and Section 9 lets parties obtain urgent interim protection from courts even before the tribunal is formed.',
      'Lexakind advocates handle the full arbitration lifecycle: invoking arbitration correctly (a defective notice can haunt the case), appointing arbitrators through agreement or the court, securing Section 9 interim measures over assets and bank guarantees, conducting proceedings through pleadings, evidence and hearings, and then the stage clients underestimate — enforcing the award, or challenging one under Section 34’s tight grounds and timelines.',
    ],
    process: [
      { title: 'Clause & dispute review', description: 'The arbitration clause, seat and limitation position are assessed first.' },
      { title: 'Invocation', description: 'A legally precise notice of arbitration is issued; appointment is completed by consent or court.' },
      { title: 'Interim protection', description: 'Section 9/17 measures preserve assets, guarantees and the subject matter.' },
      { title: 'Proceedings', description: 'Statements of claim and defence, evidence and hearings — conducted to award.' },
      { title: 'Award enforcement', description: 'The award is executed as a decree, or challenges under Section 34 are pursued/defended.' },
    ],
    documents: [
      'Contract containing the arbitration clause',
      'Dispute correspondence and notices',
      'Invoices, records and documents underlying the claim',
      'Details of amounts claimed and interest terms',
      'Any prior court proceedings between the parties',
    ],
    timeline: 'The Act targets awards within 12 months of pleadings (extendable); Section 9 interim relief can come within days when urgent.',
    faqs: [
      {
        q: 'Our contract has an arbitration clause. Can I still go to court?',
        a: 'Only in limited ways. A suit on the dispute itself will be referred to arbitration under Section 8, but courts remain available for interim protection (Section 9), arbitrator appointment (Section 11), and award challenges — the clause channels the merits, it doesn’t abolish the courts.',
      },
      {
        q: 'Can an arbitral award be appealed?',
        a: 'There is no appeal on merits. An award can only be set aside under Section 34 on narrow grounds — invalid agreement, lack of notice, matters beyond the reference, or conflict with public policy — and only within three months (plus a capped 30-day grace). The window is unforgiving; move immediately.',
      },
      {
        q: 'Is arbitration actually cheaper than court?',
        a: 'For substantial commercial disputes, usually — you pay tribunal fees but save years of docket delay, and enforcement is as strong. For small-value claims, tribunal costs can outweigh the benefit; we tell you honestly which side of that line your dispute falls.',
      },
    ],
  },
  {
    slug: 'partnership-firm',
    paSlug: 'corporate-law',
    metaTitle: 'Partnership Firm Registration — Deed to Registrar of Firms',
    metaDescription:
      'Start a partnership firm properly — deed drafting, stamping, Registrar of Firms registration, PAN and bank setup, with clear guidance on partner rights and liability.',
    intro: [
      'A partnership firm remains the fastest, lightest structure for two or more people doing business together — no MCA compliance, complete internal flexibility, and profits taxed once in the firm. Its trade-offs are unlimited personal liability and the crucial detail many founders miss: an unregistered firm cannot sue to enforce its contracts, so registration with the Registrar of Firms is practically essential even though the Act calls it optional.',
      'Lexakind sets partnership firms up properly: a deed drafted around your actual arrangement (capital, profit sharing, drawings, duties, exit and valuation), stamping and execution, registration with the state Registrar of Firms, and the operational tail — PAN, bank account, GST and licence guidance — so the firm is legally sound and ready to trade, not just named.',
    ],
    process: [
      { title: 'Consultation', description: 'Structure check first: partnership vs LLP vs company for your liability and tax position.' },
      { title: 'Deed drafting', description: 'The partnership deed is drafted with exit, valuation and authority clauses that matter later.' },
      { title: 'Stamping & execution', description: 'The deed is stamped per state law and signed by all partners with witnesses.' },
      { title: 'Registration', description: 'Filing with the Registrar of Firms with the prescribed forms and fees.' },
      { title: 'Operational setup', description: 'PAN, bank account opening support and GST registration where applicable.' },
    ],
    documents: [
      'ID, PAN and address proof of all partners',
      'Registered office proof and owner NOC',
      'Proposed firm name and business activity',
      'Agreed capital contributions and sharing ratios',
      'Photographs of partners',
    ],
    timeline: 'Deed and execution within a week; Registrar of Firms registration typically follows within a few weeks depending on the office.',
    faqs: [
      {
        q: 'How many partners can a firm have?',
        a: 'Between 2 and 50 partners (the Companies Act rules cap associations above 50). All partners must be competent to contract; a minor can be admitted only to the benefits of partnership, not as a full partner.',
      },
      {
        q: 'Am I liable for my partner’s actions?',
        a: 'Yes — jointly and severally, for acts done in the ordinary course of the firm’s business. This is the structure’s core risk: a partner’s bad contract binds you personally. Authority-limit clauses in the deed manage this internally, and the LLP structure eliminates it externally.',
      },
      {
        q: 'Can the deed be changed later?',
        a: 'Yes — by a supplementary deed executed by all partners, with the change notified to the Registrar where registered particulars (partners, name, place) are affected. Admissions, retirements and ratio changes are routine amendments we document properly.',
      },
    ],
  },
  {
    slug: 'privacy-policy',
    paSlug: 'corporate-law',
    metaTitle: 'Privacy Policy Drafting — DPDP Act 2023 Compliant',
    metaDescription:
      'Privacy policies drafted for the DPDP Act, 2023 — lawful consent notices, data-principal rights, grievance mechanisms and cross-border terms for Indian websites and apps.',
    intro: [
      'India’s Digital Personal Data Protection Act, 2023 has turned the privacy policy from webpage furniture into a compliance document. Businesses processing personal data must give notice of what is collected and why, obtain valid consent, honour data-principal rights (access, correction, erasure, grievance), and face penalties that scale to ₹250 crore for serious breaches. A policy copied from a US template — built for CCPA, silent on DPDP — documents non-compliance rather than preventing it.',
      'Lexakind drafts privacy policies and the surrounding apparatus around your actual data flows: what your website, app or CRM really collects, consent and notice language matching DPDP requirements, retention and deletion commitments you can honour, grievance-officer mechanics, and coordinated terms of use and cookie notices — for startups, e-commerce, healthtech and edtech platforms with their sector overlays.',
    ],
    process: [
      { title: 'Data mapping', description: 'We inventory what personal data you collect, why, where it goes and how long it stays.' },
      { title: 'Gap review', description: 'Current policies and consent flows are checked against DPDP obligations.' },
      { title: 'Drafting', description: 'The privacy policy, consent notices and grievance mechanism are drafted to fit your flows.' },
      { title: 'Implementation guidance', description: 'Consent capture, cookie banners and rights-request handling are specified practically.' },
      { title: 'Review cadence', description: 'Updates as rules under the Act notify and as your product changes.' },
    ],
    documents: [
      'Description of your product/website and data collected',
      'Current privacy policy and terms (if any)',
      'Third-party tools and processors used (analytics, payment, CRM)',
      'Whether you process children’s data or sensitive categories',
      'Cross-border data transfer details',
    ],
    timeline: 'First draft typically within 4–6 working days after the data-mapping call.',
    faqs: [
      {
        q: 'Does the DPDP Act apply to my small business?',
        a: 'If you process digital personal data of individuals in India, yes — the Act does not carve out small businesses generally, though obligations scale with role and notified rules may calibrate some duties. Practically, any website or app collecting names, contacts or payment data is in scope.',
      },
      {
        q: 'What makes consent valid under the DPDP Act?',
        a: 'It must be free, specific, informed, unconditional and unambiguous, given through clear affirmative action, preceded by a notice stating the personal data and purpose — and as easy to withdraw as it was to give. Pre-ticked boxes and bundled consents fail this standard.',
      },
      {
        q: 'Do I need a grievance officer?',
        a: 'Data fiduciaries must publish the means for a data principal to raise grievances and respond within prescribed timelines; intermediary rules separately require a grievance officer for platforms. We set up the mechanism and the response workflow, not just the webpage paragraph.',
      },
    ],
  },

  {
    slug: 'terms-of-use',
    paSlug: 'corporate-law',
    metaTitle: 'Terms of Use / Terms & Conditions Drafting for Websites & Apps',
    metaDescription:
      'Enforceable terms of use for websites, apps and platforms — liability limits, IT Act intermediary protection, refund and dispute terms drafted for Indian law.',
    intro: [
      'Terms of use are the contract between your platform and every user — governing accounts, acceptable use, payments and refunds, intellectual property, liability limits and dispute resolution. Done properly under Indian law, they also do heavier lifting: platforms hosting user content need terms aligned with the IT Act’s intermediary rules to preserve safe-harbour protection, and consumer-facing terms must survive the Consumer Protection Act’s unfair-contract scrutiny.',
      'Lexakind drafts terms that hold up when tested: enforceable acceptance mechanics (browse-wrap rarely survives; click-wrap does), refund and cancellation clauses that match what your operations actually do, grievance-officer provisions where the intermediary rules demand them, and liability frameworks calibrated to Indian courts — coordinated with your privacy policy so the two documents don’t contradict each other.',
    ],
    process: [
      { title: 'Product walkthrough', description: 'We understand your user flows, monetisation and risk points.' },
      { title: 'Drafting', description: 'Terms drafted for your actual product — not adapted from a foreign template.' },
      { title: 'Compliance overlay', description: 'IT Act intermediary, consumer-law and sector requirements are built in.' },
      { title: 'Acceptance mechanics', description: 'We specify how consent is captured so the terms actually bind users.' },
      { title: 'Maintenance', description: 'Updates as your product, pricing or the rules change.' },
    ],
    documents: [
      'Description of the platform and user journeys',
      'Pricing, refund and cancellation practices',
      'Current terms (if any) and privacy policy',
      'Whether users post content or transact with each other',
      'Payment gateway and third-party integrations',
    ],
    timeline: 'First draft typically within 4–6 working days.',
    faqs: [
      {
        q: 'Are online terms actually enforceable in India?',
        a: 'Yes — electronic contracts are valid under the IT Act and Contract Act, but enforceability turns on acceptance mechanics. A clear click-wrap (“I agree” before use/purchase) binds users; terms buried in a footer link that no one must ever see may not. How you present the terms matters as much as their text.',
      },
      {
        q: 'What is safe harbour and do my terms affect it?',
        a: 'Intermediaries hosting third-party content get conditional immunity under Section 79 IT Act — conditional on due diligence, including publishing rules-compliant terms, user obligations and grievance mechanisms. Defective terms are one of the fastest ways platforms forfeit that protection.',
      },
      {
        q: 'Can I cap my liability to users?',
        a: 'Within limits. Reasonable limitation clauses are generally enforceable in B2B contexts; against consumers, sweeping exclusions risk being struck down as unfair terms under the Consumer Protection Act. We calibrate caps that give real protection without inviting invalidation.',
      },
    ],
  },
  {
    slug: 'indian-subsidiary',
    paSlug: 'corporate-law',
    metaTitle: 'Indian Subsidiary Setup for Foreign Companies — FDI & Incorporation',
    metaDescription:
      'Set up your wholly-owned Indian subsidiary — FDI route checks, incorporation with foreign shareholders, FEMA reporting (FC-GPR) and post-setup compliance.',
    intro: [
      'For most foreign companies, a wholly-owned private limited subsidiary is the cleanest way to operate in India — full control, limited liability, and access to the market on the automatic FDI route for most sectors. The setup weaves company law and exchange control together: incorporation with foreign shareholders (apostilled documents, resident-director requirement), capital infusion through banking channels, and FEMA reporting — the FC-GPR filing after share allotment that foreign parents most often miss.',
      'Lexakind manages the full establishment: sectoral FDI-route confirmation, name and structure planning, incorporation via SPICe+ with properly legalised foreign documents, the resident director requirement, bank account and capital remittance coordination, RBI/FEMA reporting through the AD bank, and the post-setup registrations (GST, IEC, professional tax) that make the subsidiary operational.',
    ],
    process: [
      { title: 'Structuring call', description: 'Sector FDI check, shareholding design and the resident-director plan.' },
      { title: 'Documentation', description: 'Parent-company documents apostilled/legalised; Indian filings prepared.' },
      { title: 'Incorporation', description: 'SPICe+ filing through to the Certificate of Incorporation, PAN and TAN.' },
      { title: 'Capital & FEMA', description: 'Share subscription remitted via banking channels; FC-GPR reported on time.' },
      { title: 'Operational registrations', description: 'Bank account, GST, IEC and state registrations as your business needs.' },
    ],
    documents: [
      'Parent company charter documents (apostilled/notarised)',
      'Board resolution authorising the Indian subsidiary',
      'Passport/ID of foreign directors and authorised signatories',
      'Details of the resident Indian director',
      'Registered office proof in India with NOC',
    ],
    timeline: 'Incorporation typically 3–6 weeks including document legalisation; FEMA reporting deadlines run within 30 days of allotment.',
    faqs: [
      {
        q: 'Do we need an Indian partner or shareholder?',
        a: 'In most sectors, no — 100% foreign ownership is allowed under the automatic route. You do need at least one director resident in India (182+ days), who need not hold shares; nominee arrangements can satisfy the two-shareholder requirement while the parent retains full beneficial ownership.',
      },
      {
        q: 'What is FC-GPR and why does it matter?',
        a: 'The RBI filing (via the AD bank on the FIRMS portal) reporting share allotment to a foreign investor, due within 30 days of allotment. Missing it triggers late-submission fees and compounding exposure — it is the single most common compliance failure in foreign-owned setups.',
      },
      {
        q: 'Subsidiary, branch office or liaison office — which should we choose?',
        a: 'A subsidiary can conduct full business with limited liability and is the default choice. Branch and liaison offices need RBI approval and carry activity restrictions — a liaison office cannot earn revenue at all. Unless your activity is narrowly representational, the subsidiary usually wins.',
      },
    ],
  },

  // ── IP & GST (phase 2) ─────────────────────────────────────
  {
    slug: 'gst-filing',
    paSlug: 'intellectual-property',
    metaTitle: 'GST Return Filing — Monthly, Quarterly & Annual Compliance',
    metaDescription:
      'Accurate, on-time GST return filing — GSTR-1, GSTR-3B, QRMP, annual returns and ITC reconciliation, with notice handling and registration protection.',
    intro: [
      'GST compliance is a rhythm, not an event: outward supplies in GSTR-1, tax payment through GSTR-3B (monthly, or quarterly under QRMP for smaller taxpayers), and the annual return (GSTR-9) — with input tax credit hanging on reconciliation against GSTR-2B, where suppliers’ lapses become your working-capital problem. Miss the rhythm and consequences compound: late fees, 18% interest, blocked e-way bills and eventually registration cancellation.',
      'Lexakind manages GST filing as an ongoing engagement: monthly data review and ITC reconciliation before filing (not after notices), correct rate and classification treatment, QRMP optimisation for eligible businesses, annual return preparation, and the legal layer most accountants can’t provide — responding to mismatch notices, defending ITC claims, and reviving cancelled registrations.',
    ],
    process: [
      { title: 'Onboarding review', description: 'Registration status, pending returns and past mismatches are assessed.' },
      { title: 'Monthly cycle', description: 'Sales and purchase data reconciled with GSTR-2B before each filing.' },
      { title: 'Filing', description: 'GSTR-1 and GSTR-3B (or QRMP equivalents) filed accurately and on time.' },
      { title: 'Annual return', description: 'GSTR-9/9C prepared with full-year reconciliation.' },
      { title: 'Notice handling', description: 'Departmental notices, ITC disputes and cancellation threats are answered legally.' },
    ],
    documents: [
      'GST login credentials',
      'Sales and purchase registers/invoices for the period',
      'Previous returns filed (for onboarding)',
      'Bank statements for reconciliation where needed',
      'Any notices received from the department',
    ],
    timeline: 'Ongoing monthly/quarterly cycle; overdue-return regularisation is typically completed within the first fortnight of onboarding.',
    faqs: [
      {
        q: 'What happens if I miss GST return deadlines?',
        a: 'Late fees accrue per day per return plus 18% annual interest on unpaid tax; continued default blocks e-way bill generation and, after six months of non-filing, invites registration cancellation. Buyers also lose confidence — your defaults surface in their GSTR-2B.',
      },
      {
        q: 'Why is my input tax credit less than the GST I actually paid?',
        a: 'Because ITC is capped to what suppliers have reported: credit appears only when the supplier files GSTR-1 and it reflects in your GSTR-2B. Supplier follow-up and reconciliation before filing — not after a mismatch notice — is how credit is protected.',
      },
      {
        q: 'My GST registration was cancelled for non-filing. Can it be restored?',
        a: 'Yes — by filing the pending returns with dues and applying for revocation within the prescribed window (extensions and amnesty schemes have periodically applied). Beyond the window, appellate or writ remedies exist. Move quickly; business without registration means invoicing illegally.',
      },
    ],
  },
  {
    slug: 'trademark-renewal',
    paSlug: 'intellectual-property',
    metaTitle: 'Trademark Renewal — Keep Your Registration Alive',
    metaDescription:
      'Renew your trademark every 10 years — on-time renewals, grace-period filings with surcharge, and restoration of removed marks, with docketing so you never miss again.',
    intro: [
      'A trademark registration lasts ten years and is renewable indefinitely — brands like century-old marks survive purely on disciplined renewal. Miss the deadline and the consequences escalate: a six-month grace period with surcharge, then removal from the register, after which restoration is discretionary and the field opens for opportunistic squatters to apply for your own brand.',
      'Lexakind handles renewals at every stage of that escalation: straightforward TM-R filings ahead of expiry, grace-period renewals with surcharge, and restoration applications for removed marks with the explanations the Registry expects. Every renewal we file goes into a docketing system with multi-year reminders — because the real cause of lapsed marks is nobody watching the calendar.',
    ],
    process: [
      { title: 'Status check', description: 'The mark’s register status, expiry date and any pending issues are verified.' },
      { title: 'Renewal filing', description: 'TM-R is filed with the correct fee — ahead of expiry, or with surcharge in grace.' },
      { title: 'Restoration (if lapsed)', description: 'For removed marks, restoration with renewal is applied for within the window.' },
      { title: 'Registry follow-up', description: 'We track the application to the renewed certificate.' },
      { title: 'Docketing', description: 'The next deadline is calendared with reminders — renewal becomes automatic.' },
    ],
    documents: [
      'Trademark registration number and certificate',
      'Applicant/proprietor details (and any name changes since registration)',
      'Power of attorney (TM-48)',
      'Assignment documents if ownership changed',
    ],
    timeline: 'Renewal filings complete in days; Registry processing of certificates typically takes a few weeks to months.',
    faqs: [
      {
        q: 'When can I renew — how early, how late?',
        a: 'Renewal can be filed up to one year before expiry, and late renewal up to six months after expiry with surcharge. After that the mark is removed, and only restoration (within one year of removal) can revive it — each stage costs more and risks more than the last.',
      },
      {
        q: 'What actually happens if my mark is removed?',
        a: 'You lose the statutory presumptions and remedies of registration, infringement actions weaken to passing-off claims, and third parties can apply for identical marks. Restoration is possible within a year of removal but discretionary — prevention is dramatically cheaper.',
      },
      {
        q: 'We bought a business with its trademarks. Who renews?',
        a: 'The recorded proprietor. If assignments were never recorded with the Registry (extremely common in acquisitions), recordal should be completed alongside renewal so the register, the renewal and your enforcement rights all align. We handle both together.',
      },
    ],
  },
  {
    slug: 'trademark-infringement',
    paSlug: 'intellectual-property',
    metaTitle: 'Trademark Infringement — Stop Copycats & Defend Your Brand',
    metaDescription:
      'Enforce your trademark against infringers — cease-and-desist, infringement suits with urgent injunctions, marketplace takedowns and domain disputes. Defence briefs too.',
    intro: [
      'When a competitor adopts your mark or something deceptively similar, the law gives registered proprietors sharp tools: infringement actions under Section 29 of the Trade Marks Act with urgent injunctions, damages or accounts of profits, and even ex parte seizure orders in strong cases — while unregistered brands with reputation can still sue in passing off. Online, the fight extends to marketplace listings, lookalike domains and impostor social accounts.',
      'Lexakind enforces brands at the speed infringement demands: cease-and-desist notices that resolve a majority of matters, infringement suits with interim injunction motions filed in days, coordinated Amazon/Flipkart takedowns, INDRP/UDRP domain complaints, and — on the other side — defending businesses accused of infringement, where overlap is often more arguable than the plaintiff’s notice pretends.',
    ],
    process: [
      { title: 'Infringement assessment', description: 'Marks, goods and evidence are compared; the strength of action is candidly rated.' },
      { title: 'Evidence preservation', description: 'Purchases, listings, packaging and web captures are documented before they vanish.' },
      { title: 'Cease & desist', description: 'A firm notice with defined demands — most matters end here.' },
      { title: 'Suit & injunction', description: 'Where defiance continues: infringement/passing-off suit with urgent interim relief.' },
      { title: 'Parallel takedowns', description: 'Marketplace, domain and social-platform complaints run alongside the legal action.' },
    ],
    documents: [
      'Trademark registration certificate (or evidence of use/reputation)',
      'Samples/screenshots of the infringing use',
      'Purchase invoices of the infringing product where possible',
      'Sales and advertising figures evidencing your goodwill',
      'Details of the infringer (name, address, platforms)',
    ],
    timeline: 'Notices go out within days; interim injunctions in strong cases can issue within weeks of filing.',
    faqs: [
      {
        q: 'The other mark isn’t identical to mine. Is it still infringement?',
        a: 'It can be — the test is deceptive similarity and likelihood of confusion, judged by overall impression, phonetics and the goods’ trade channels, through the eyes of an average consumer with imperfect recollection. Side-by-side dissection is exactly what courts refuse to do.',
      },
      {
        q: 'My brand isn’t registered. Am I defenceless?',
        a: 'No — passing off protects unregistered marks with established goodwill: you prove reputation, misrepresentation and damage. It is harder work evidentially than infringement, which is precisely why registration is worth completing in parallel with any enforcement.',
      },
      {
        q: 'Can I get counterfeit listings off Amazon and Flipkart quickly?',
        a: 'Yes — marketplaces run IP-complaint programmes (e.g. brand-registry tools) that delist on documented complaints, often within days. Takedowns treat symptoms though; repeat infringers need the legal action that makes recidivism expensive.',
      },
    ],
  },
  {
    slug: 'patent-filing',
    paSlug: 'intellectual-property',
    metaTitle: 'Patent Filing in India — Protect Your Invention',
    metaDescription:
      'Patent your invention — patentability search, provisional and complete specifications, examination responses and grant, with startup/MSME fee benefits and expedited routes.',
    intro: [
      'A patent gives you twenty years of exclusive rights over an invention — the power to stop others from making, using or selling it — in exchange for public disclosure. Getting there is a drafting discipline as much as a legal process: a patentability search first, a provisional application to lock your priority date while development continues, then the complete specification whose claims define exactly what you own, followed by examination and the office-action responses where most applications are won or lost.',
      'Lexakind manages Indian patent prosecution end to end: prior-art searching with honest advice on patentability (including India’s Section 3 exclusions that matter for software and methods), specification drafting with defensible claim scope, startup/small-entity fee benefits and expedited examination where eligible, FER responses and hearings through to grant — and guidance on international protection windows via the Paris Convention and PCT.',
    ],
    process: [
      { title: 'Patentability search', description: 'Prior art is searched and the invention’s novelty candidly assessed.' },
      { title: 'Provisional filing', description: 'A provisional specification secures your priority date fast (12-month window).' },
      { title: 'Complete specification', description: 'Full drafting with claims engineered for scope that survives examination.' },
      { title: 'Examination & FER', description: 'Examination is requested; objections are answered within the strict 6-month window.' },
      { title: 'Hearing & grant', description: 'Hearings attended where posted; the application is prosecuted to grant.' },
    ],
    documents: [
      'Detailed invention disclosure (what it is, how it works, what is new)',
      'Drawings, diagrams or prototypes where available',
      'Inventor and applicant details',
      'Startup India / MSME certificate (for fee benefits)',
      'Any prior publications or disclosures of the invention',
    ],
    timeline: 'Filing within 1–2 weeks of disclosure; grants typically take 2–4 years (much faster with expedited examination for eligible applicants).',
    faqs: [
      {
        q: 'Can software be patented in India?',
        a: 'A computer programme “per se” is excluded under Section 3(k), but inventions demonstrating a technical effect or contribution — often in combination with hardware or solving a technical problem — have been granted. Framing is decisive; this is a drafting problem before it is a legal one.',
      },
      {
        q: 'I demonstrated my invention publicly before filing. Is patenting over?',
        a: 'Public disclosure before filing generally destroys novelty — with narrow grace exceptions (notified exhibitions, certain publications within 12 months). Stop further disclosure and file a provisional immediately; the exact facts of what was shown determine what survives.',
      },
      {
        q: 'What do startups get in the patent process?',
        a: 'Recognised startups pay small-entity fees (an ~80% reduction), qualify for expedited examination — which can compress grant timelines dramatically — and can access the SIPP scheme’s facilitator support. We structure filings to capture every benefit you qualify for.',
      },
    ],
  },

  // ── Labour & Employment (phase 2) ──────────────────────────
  {
    slug: 'employment-contract',
    paSlug: 'labour-employment',
    metaTitle: 'Employment Contract Drafting — Offer Letters to Executive Agreements',
    metaDescription:
      'Employment contracts, offer letters and HR policy suites drafted for Indian law — probation, notice, confidentiality, IP assignment and enforceable exit terms.',
    intro: [
      'The employment contract is where every future HR dispute is decided in advance — probation and confirmation, notice and termination mechanics, confidentiality and IP assignment, moonlighting, and post-exit restraints. Indian law adds traps for template users: blanket non-competes after employment are void under Section 27 of the Contract Act, “workman” status changes what termination clauses can lawfully do, and state Shops & Establishments Acts overlay their own minimums.',
      'Lexakind drafts employment documentation that actually works in India: offer letters and appointment contracts calibrated by role, executive agreements with enforceable protections (garden leave, non-solicitation, clawbacks — the instruments that survive where non-competes fail), consultant agreements that don’t accidentally create employment, and the policy suite — POSH, leave, disciplinary — that contracts assume exists.',
    ],
    process: [
      { title: 'Role & risk mapping', description: 'Workforce mix, sensitive roles and existing documents are reviewed.' },
      { title: 'Drafting', description: 'Contracts and letters drafted by role tier — staff, managerial, executive, consultant.' },
      { title: 'Statutory overlay', description: 'S&E Act, gratuity, maternity and POSH obligations are built into the terms.' },
      { title: 'Protective clauses', description: 'Confidentiality, IP assignment and lawful post-exit restraints are engineered.' },
      { title: 'Rollout', description: 'Execution guidance for new hires and lawful migration of existing staff to new terms.' },
    ],
    documents: [
      'Current offer/appointment templates (if any)',
      'Role descriptions and compensation structures',
      'Company policies in force',
      'State(s) of employment (for local law overlay)',
      'Specific concerns (poaching, confidentiality incidents, exits)',
    ],
    timeline: 'Standard contract suite typically within a week; executive agreements 3–5 working days.',
    faqs: [
      {
        q: 'Are non-compete clauses enforceable in India?',
        a: 'During employment, yes. After employment ends, courts void them as restraints of trade under Section 27 — regardless of how reasonable they look. Protection instead comes from enforceable tools: confidentiality covenants, non-solicitation of clients and employees, garden leave and IP assignment. We build with what works.',
      },
      {
        q: 'Can we put employees on probation indefinitely?',
        a: 'No — probation must be a defined period (extensions documented), and “deemed confirmation” risks arise where employees continue long past stated probation without action. Clean probation clauses with explicit confirmation mechanics prevent disputes about status at exit.',
      },
      {
        q: 'Do consultants need different contracts from employees?',
        a: 'Fundamentally different — and mislabeling is expensive. A “consultant” working like an employee (fixed hours, supervision, exclusivity) can be held an employee with PF/gratuity liability trailing behind. Genuine independent-contractor terms, deliverable-based and non-exclusive, are what keep the classification honest.',
      },
    ],
  },
  {
    slug: 'posh-compliance',
    paSlug: 'labour-employment',
    metaTitle: 'POSH Compliance — IC Setup, Policy & Annual Reporting',
    metaDescription:
      'Complete POSH Act compliance — Internal Committee constitution with external member, policy drafting, employee training, inquiry support and annual reports.',
    intro: [
      'The POSH Act, 2013 makes every workplace with ten or more employees responsible for preventing and redressing sexual harassment — a properly constituted Internal Committee (with the mandatory external member), a compliant policy, employee awareness and IC training, and annual reporting to the district officer. Non-compliance carries fines and, on repetition, licence consequences — and courts and clients increasingly treat POSH status as a basic governance check.',
      'Lexakind delivers POSH compliance as a working system, not a framed poster: IC constitution with a qualified external member (we serve where appropriate), policy drafted for your actual workplace including remote and field staff, training that survives scrutiny, and — when a complaint arrives — inquiry guidance that follows the Act’s strict procedure and timelines, because a defective inquiry is how employers convert one problem into two.',
    ],
    process: [
      { title: 'Compliance audit', description: 'Current IC, policy and reporting status are checked against the Act.' },
      { title: 'IC constitution', description: 'The committee is constituted correctly — presiding officer, members, external member.' },
      { title: 'Policy & display', description: 'The POSH policy is drafted and statutory display/communication completed.' },
      { title: 'Training', description: 'Employee awareness and dedicated IC inquiry-skills sessions.' },
      { title: 'Ongoing support', description: 'Annual reports, complaint-inquiry guidance and IC reconstitution as terms expire.' },
    ],
    documents: [
      'Employee count and office locations',
      'Current POSH policy and IC order (if any)',
      'HR policy handbook',
      'Details of proposed IC members',
      'Prior complaints/inquiries, if any (privileged review)',
    ],
    timeline: 'Full compliance setup typically within 2–3 weeks; inquiry support timelines follow the Act’s 90-day inquiry mandate.',
    faqs: [
      {
        q: 'Who must be on the Internal Committee?',
        a: 'A senior woman employee as presiding officer, at least two employee members with relevant experience or social-work/legal knowledge, and one external member from an NGO or association familiar with sexual-harassment issues (or a person with legal expertise). At least half the IC must be women.',
      },
      {
        q: 'We have fewer than 10 employees. Does POSH still apply?',
        a: 'The IC requirement doesn’t, but the workplace is not exempt from the law — complaints go to the district-level Local Committee, and the employer’s duty to provide a safe workplace stands. A policy and awareness communication remain best practice even below threshold.',
      },
      {
        q: 'What are the timelines once a complaint is filed?',
        a: 'Complaint within 3 months of the incident (extendable), inquiry completed within 90 days, report in 10 days thereafter, and employer action on recommendations within 60 days. Interim reliefs — transfer, leave — are available during inquiry. Deadlines are where untrained ICs most often fail.',
      },
    ],
  },
  {
    slug: 'gratuity-disputes',
    paSlug: 'labour-employment',
    metaTitle: 'Gratuity Claims & Disputes — Recover What 5 Years Earned',
    metaDescription:
      'Unpaid or short-paid gratuity? Claims before the Controlling Authority under the Payment of Gratuity Act — computation, forfeiture challenges and interest recovery.',
    intro: [
      'Gratuity is earned, not gifted: after five years of continuous service, the Payment of Gratuity Act entitles you to 15 days’ wages for every completed year (last-drawn salary × 15/26 × years), payable within 30 days of leaving — with interest for delay. Employers dispute it through familiar routes: contesting the five-year count, computing on artificially low “basic” wages, or invoking forfeiture clauses beyond what the Act actually permits.',
      'Lexakind advocates recover gratuity through the Act’s dedicated machinery — the Controlling Authority — which is faster and cheaper than civil courts: precise computation with the service and salary record, challenges to unlawful forfeiture (permitted only for specified misconduct, and mostly only to the extent of damage caused), and interest claims that make delay expensive for the employer. We also advise employers on lawful gratuity administration and genuine forfeiture cases.',
    ],
    process: [
      { title: 'Entitlement check', description: 'Service continuity, wage base and the correct gratuity amount are computed.' },
      { title: 'Demand', description: 'Form I claim and a legal notice to the employer — many disputes end here.' },
      { title: 'Controlling Authority', description: 'Application under the Act; we conduct the proceedings through evidence.' },
      { title: 'Order & interest', description: 'Direction for payment with interest for the delay period.' },
      { title: 'Recovery', description: 'Non-compliance is pursued through recovery proceedings — as arrears of land revenue.' },
    ],
    documents: [
      'Appointment letter and relieving/resignation letter',
      'Salary slips (especially last drawn)',
      'Form 16 / PF statements evidencing service period',
      'Any gratuity computation or rejection given by the employer',
      'Correspondence demanding payment',
    ],
    timeline: 'Controlling Authority matters typically conclude within months to about a year — far faster than civil suits.',
    faqs: [
      {
        q: 'Is 4 years 240 days enough to qualify for gratuity?',
        a: 'Judicially, yes in most cases — 240 working days in the fifth year has been treated as a completed year of continuous service by several High Courts. Employers still contest it, but the position favours employees; your attendance and service record decides it.',
      },
      {
        q: 'Can my employer forfeit gratuity for misconduct?',
        a: 'Only narrowly: forfeiture to the extent of damage requires termination for an act causing that damage; total forfeiture needs termination for riotous conduct, violence or an offence involving moral turpitude in employment — proved after due process. Resignation-stage “forfeitures” without any of this are unlawful.',
      },
      {
        q: 'Is there a limit on gratuity, and is it taxable?',
        a: 'The Act caps gratuity at ₹20 lakh (employers can pay more contractually). For covered employees, gratuity is income-tax exempt up to the statutory limit computed per the formula — the exemption tracks the Act’s ceiling.',
      },
    ],
  },

  // ── Cyber Crime (phase 2 — first dedicated pages) ──────────
  {
    slug: 'cyber-bullying',
    paSlug: 'cyber-crime',
    metaTitle: 'Cyber Bullying & Online Harassment — Legal Action That Works',
    metaDescription:
      'Stop online harassment, stalking, morphing and threats — cyber cell complaints, content takedowns and prosecution under the BNS and IT Act, handled with discretion.',
    intro: [
      'Online harassment is criminal, not merely unpleasant: stalking and threatening messages, fake and impersonation profiles, morphed or private images circulated without consent, and sustained abuse are punishable under the Bharatiya Nyaya Sanhita and the IT Act (including Section 66E voyeurism and Section 67 obscenity provisions). Victims have parallel tracks — criminal prosecution, urgent platform takedowns, and the national cybercrime portal (cybercrime.gov.in / helpline 1930) — that work best run together.',
      'Lexakind handles these matters with urgency and discretion: evidence preservation first (screenshots with URLs, message exports — before the harasser deletes), cyber cell and portal complaints drafted with the correct legal provisions so they’re acted on rather than parked, takedown demands to platforms under the intermediary rules, and follow-through on investigation — including unmasking anonymous accounts through lawful disclosure routes.',
    ],
    process: [
      { title: 'Confidential consultation', description: 'We assess the harassment, the platforms involved and immediate safety.' },
      { title: 'Evidence preservation', description: 'Content, URLs, profiles and metadata are captured evidentially before deletion.' },
      { title: 'Complaint filing', description: 'Cybercrime portal and cyber cell complaints with precise legal framing.' },
      { title: 'Takedowns', description: 'Platform notices under the IT Rules for removal of content and fake profiles.' },
      { title: 'Prosecution follow-through', description: 'We pursue the investigation, identification of anonymous actors and trial.' },
    ],
    documents: [
      'Screenshots of the abusive content with URLs and dates',
      'Profile links/handles of the harasser',
      'Your ID proof',
      'Any prior complaints made (police or platform)',
      'Downloaded copies/exports of messages where possible',
    ],
    timeline: 'Complaints and takedown notices go out within days; platform removals often follow in days, investigations over weeks to months.',
    faqs: [
      {
        q: 'The account harassing me is anonymous. Can anything be done?',
        a: 'Yes. Platforms hold registration data, IPs and device identifiers, which police can obtain through lawful requisitions once an FIR/complaint is registered — anonymity online is thinner than harassers believe. Precise complaints that make those demands explicit get acted on faster.',
      },
      {
        q: 'Someone is circulating my morphed/private images. What is the fastest remedy?',
        a: 'Three moves in parallel: immediate platform takedown (intermediaries must act on such content within tight timelines under the IT Rules), a cybercrime complaint under the specific IT Act/BNS provisions, and preservation of every copy and URL for prosecution. Speed matters most in the first hours — call before content spreads.',
      },
      {
        q: 'Will filing a complaint make my situation public?',
        a: 'These matters can be handled discreetly — cyber cells deal with them routinely, identity-protection practices apply in sensitive cases, and in-camera proceedings are available where matters reach court. Fear of exposure is the harasser’s main leverage; the process is designed to remove it.',
      },
    ],
  },
  {
    slug: 'ecommerce-fraud',
    paSlug: 'cyber-crime',
    metaTitle: 'Online Shopping & E-commerce Fraud — Recover Your Money',
    metaDescription:
      'Cheated on an online purchase or fake shopping site? Recover money via 1930/cybercrime complaints, chargebacks, and consumer commission action against sellers and platforms.',
    intro: [
      'E-commerce fraud runs a spectrum — fake shopping websites that take payment and vanish, marketplace sellers shipping counterfeits or bricks, deposit-taking “suppliers” on social media, and refund scams that harvest card details. Recovery depends on speed and stacking remedies: the 1930 cyber helpline can freeze fraudulent beneficiary accounts if invoked within hours, banks run chargeback mechanisms for card/UPI disputes, and the Consumer Protection (E-Commerce) Rules make genuine marketplaces answerable for what they facilitate.',
      'Lexakind moves on all tracks at once: immediate 1930/cybercrime-portal reporting to trigger account freezing, bank chargeback and dispute escalation with the documentation banks actually accept, cybercrime complaints against the operators, and consumer-commission proceedings against sellers and platforms — the route that adds compensation for the harassment to the refund itself.',
    ],
    process: [
      { title: 'Rapid response', description: 'Transaction details are compiled and 1930/portal reporting done immediately.' },
      { title: 'Bank escalation', description: 'Chargeback/dispute is raised with your bank with a legally framed record.' },
      { title: 'Cybercrime complaint', description: 'A complete complaint against the fraudulent operator with money-trail details.' },
      { title: 'Consumer action', description: 'Commission proceedings against the seller/platform for refund plus compensation.' },
      { title: 'Follow-through', description: 'Frozen-amount release (lien marking) and investigation follow-up to recovery.' },
    ],
    documents: [
      'Payment proof (transaction IDs, bank/UPI statements)',
      'Order details, website/seller links and communications',
      'Screenshots of the listing/site and promises made',
      'Delivery records or proof of non-delivery/wrong item',
      'Your bank account and ID details for complaints',
    ],
    timeline: 'The freezing window is hours-to-days — act immediately; chargebacks resolve in weeks, consumer proceedings over months.',
    faqs: [
      {
        q: 'I paid a fake website. Is the money gone?',
        a: 'Not necessarily — if reported fast. The 1930 helpline/cybercrime portal can have the beneficiary account frozen while funds remain in it; recovery odds drop sharply as money is layered onward. Report first, then build the fuller complaint — the sequence matters.',
      },
      {
        q: 'The marketplace says the seller is responsible, not them. True?',
        a: 'Only partly. Under the E-Commerce Rules, marketplaces owe duties — seller verification, grievance mechanisms, accurate information — and commissions have held platforms liable alongside sellers where those duties failed. “Blame the seller” is a negotiating position, not the law.',
      },
      {
        q: 'What can I claim beyond my refund?',
        a: 'Before consumer commissions: compensation for deficiency and harassment, litigation costs, and interest. Fraud cases additionally support criminal prosecution — which itself concentrates settlement pressure. The stack is why legal handling recovers more than portal complaints alone.',
      },
    ],
  },

  // ── Consumer Protection (phase 2) ──────────────────────────
  {
    slug: 'internet-banking-fraud',
    paSlug: 'consumer-protection',
    metaTitle: 'Internet Banking & UPI Fraud — Zero-Liability Recovery',
    metaDescription:
      'Money stolen through UPI, net-banking or card fraud? RBI zero-liability protection, 1930 freezing, bank ombudsman escalation and consumer claims — time is critical.',
    intro: [
      'Unauthorised electronic transactions — phishing, SIM-swap, remote-access-app scams, UPI trickery — are governed by an RBI framework customers rarely know: report within three working days and your liability for third-party fraud is zero; the bank must reverse the amount (shadow credit) within 10 working days. Delay shifts liability to you in slabs, which is exactly why fraudsters keep victims talking. The 1930 helpline adds the second weapon: freezing the money in the beneficiary account before it disperses.',
      'Lexakind runs the recovery protocol at full speed: immediate 1930/portal reporting and bank fraud-marking, the written zero-liability demand citing the RBI Master Direction most branch staff haven’t read, escalation to the Banking Ombudsman (RB-IOS) when banks stall or wrongly blame the customer, and consumer-commission proceedings where negligence — like ignoring red-flag transactions — deserves compensation beyond restitution.',
    ],
    process: [
      { title: 'Immediate reporting', description: '1930/cybercrime portal + bank fraud-marking within the liability window.' },
      { title: 'Zero-liability demand', description: 'A written claim invoking the RBI framework with the transaction record.' },
      { title: 'Freeze & trace', description: 'Beneficiary-account freezing and money-trail follow-up with police.' },
      { title: 'Ombudsman escalation', description: 'RB-IOS complaint where the bank denies or delays beyond timelines.' },
      { title: 'Consumer claim', description: 'Commission proceedings for restitution with interest and compensation.' },
    ],
    documents: [
      'Bank/UPI statements showing the fraudulent transactions',
      'SMS/email alerts received',
      'Complaint acknowledgments (bank, 1930, portal)',
      'Communication that induced the fraud (calls, messages, links)',
      'Your ID and account details',
    ],
    timeline: 'Report within 3 working days for zero liability; bank resolution timelines run in days, Ombudsman in weeks-to-months.',
    faqs: [
      {
        q: 'The bank says I shared my OTP so it’s my fault. Is that the end?',
        a: 'No. Banks must prove customer negligence, not assert it — and deception-induced disclosure is treated differently from negligence in a growing body of Ombudsman and commission decisions, especially where banks ignored red flags (new payee, unusual pattern, rapid drains). The RBI framework puts the burden on the bank.',
      },
      {
        q: 'What exactly should I do in the first hour?',
        a: 'Call 1930 and report on cybercrime.gov.in (this triggers freezing), call your bank’s fraud line to block the channel and mark the dispute, and preserve everything — SMS alerts, the fraudulent call/message, screenshots. Then the formal written complaints follow. The first hour decides recoverability more than anything after.',
      },
      {
        q: 'The stolen money went to another bank’s account. Can it come back?',
        a: 'If frozen in time, yes — amounts held under lien in beneficiary accounts are returned through a court/police-supervised process. This is precisely why instant 1930 reporting matters: recovery is a race between the freeze and the fraudster’s withdrawal.',
      },
    ],
  },

  // ── Foreign Nationals (phase 2 — first dedicated page) ─────
  {
    slug: 'visa-issues',
    paSlug: 'foreign-nationals',
    metaTitle: 'Visa Extension & Overstay Issues in India — FRRO Legal Support',
    metaDescription:
      'Visa extension, conversion and overstay regularisation through e-FRRO — exit permits, penalty handling and representation for foreign nationals in India.',
    intro: [
      'Visa problems in India escalate quietly: an extension application drifting past expiry, an overstay discovered at the airport, a visa category that no longer matches what you actually do here. Everything runs through the e-FRRO system — extensions, conversions (where permitted), registration, exit permits — and an overstay, even an accidental one, now carries structured financial penalties and, in serious cases, prosecution under the Foreigners framework and future entry bans.',
      'Lexakind represents foreign nationals before the FRRO across these situations: extension and conversion applications built to approve rather than bounce, overstay regularisation with exit permits and penalty handling, registration compliance, and urgent intervention where departure is imminent or proceedings threatened — with the documentation discipline that FRRO matters reward and the legal escalation they occasionally need.',
    ],
    process: [
      { title: 'Status review', description: 'Your visa category, validity, registration and any overstay exposure are assessed.' },
      { title: 'Strategy', description: 'Extension, conversion, or exit-permit route — chosen against the rules for your category.' },
      { title: 'e-FRRO application', description: 'The application with complete supporting documents, framed to approve first pass.' },
      { title: 'Follow-up & appearance', description: 'FRRO queries and interviews are handled with representation.' },
      { title: 'Resolution', description: 'Grant, regularisation or clean exit — with future-entry implications minimised.' },
    ],
    documents: [
      'Passport with visa pages and entry stamps',
      'Current visa and FRRO registration (if issued)',
      'Purpose documentation (employment contract, admission letter, business proof)',
      'Address proof in India (C-Form/lease)',
      'Photographs and prior extension approvals if any',
    ],
    timeline: 'e-FRRO applications typically decide within 1–4 weeks; overstay and exit-permit cases vary with the period and cause of overstay.',
    faqs: [
      {
        q: 'I overstayed my visa unintentionally. How bad is it?',
        a: 'It is fixable but not ignorable. Short overstays with genuine causes (medical, flight issues) are typically regularised via exit permit with graded financial penalties; longer or unexplained overstays risk prosecution and entry bans. Approach the FRRO through counsel before the overstay is discovered at emigration — the posture changes everything.',
      },
      {
        q: 'Can I change my visa type without leaving India?',
        a: 'Only in limited notified cases (for example, certain conversions to entry/dependent categories or medical grounds). Most category changes — like tourist to employment — require exiting and applying afresh from your home country. We confirm what your specific combination allows before you rely on it.',
      },
      {
        q: 'Do I need FRRO registration?',
        a: 'Depends on visa type and duration — most long-term visas (employment, student, research) require registration within 14 days of arrival; many nationalities and short stays are exempt. Missing a required registration is itself a violation, and it compounds any later issue, so it’s the first thing we verify.',
      },
    ],
  },

  // ── NRI Legal Services (phase 2) ───────────────────────────
  {
    slug: 'nri-property-dispute',
    paSlug: 'nri-legal-services',
    metaTitle: 'NRI Property Disputes — Fight Encroachment & Fraud From Abroad',
    metaDescription:
      'Resolve Indian property disputes without flying down — illegal possession, family disputes, builder fraud and title issues handled via SPA, with video-conference appearances.',
    intro: [
      'NRI property is targeted precisely because the owner is far away: relatives “managing” property who stop acknowledging ownership, tenants who become occupants, forged transfer documents, encroachment on vacant plots, and builders who treat overseas buyers as interest-free lenders. Distance also breeds the costliest myth — that fighting back requires relocating to India. It doesn’t: a well-drafted Special Power of Attorney, video-conference appearances that Indian courts now routinely permit, and local counsel who report properly cover almost everything.',
      'Lexakind runs NRI property disputes end to end from wherever you live: urgent protection first (injunctions against alienation, police complaints on forgery, caveats at the Sub-Registrar), then the substantive fight — possession suits, partition, cancellation of forged deeds, RERA claims against builders — through an SPA executed at your consulate, with structured updates so you are never chasing your own case.',
    ],
    process: [
      { title: 'Remote consultation', description: 'Documents are reviewed over a call scheduled to your timezone.' },
      { title: 'SPA setup', description: 'A narrowly-drafted SPA is prepared and guided through consular attestation.' },
      { title: 'Urgent protection', description: 'Injunctions, caveats and police complaints stop further damage immediately.' },
      { title: 'Substantive proceedings', description: 'The possession/partition/cancellation case is fought through your attorney-holder.' },
      { title: 'Reporting & resolution', description: 'Scheduled written updates through to decree, execution or settlement.' },
    ],
    documents: [
      'Title documents (sale deed/inheritance papers) — copies suffice to start',
      'Encumbrance certificate and tax receipts if available',
      'Details and evidence of the encroachment/fraud',
      'Passport and overseas address proof',
      'Details of a trusted attorney-holder in India (or we advise alternatives)',
    ],
    timeline: 'Protective orders within weeks of engagement; substantive property litigation runs 2–5 years — without requiring your presence in India.',
    faqs: [
      {
        q: 'Do I have to come to India for my case?',
        a: 'Rarely. Filing, hearings and most steps proceed through your SPA holder and counsel; courts increasingly permit evidence by video conferencing for overseas parties. At most, some matters need one strategic visit — we tell you in advance if and when.',
      },
      {
        q: 'A relative claims my father orally gifted them the property. Can they?',
        a: 'No — immovable property transfers require registered instruments; oral gifts of such property are invalid (limited Muslim-law exceptions aside). Possession under an oral claim doesn’t become ownership easily either. Your registered title documents and the EC will usually settle whose claim is real.',
      },
      {
        q: 'How do I safely manage the property after the dispute ends?',
        a: 'Close the loopholes that invited the dispute: mutation and khata in your name, a registered lease (not informal arrangements) for any occupant, periodic EC checks to catch fraudulent registrations early, and a limited SPA — never a general one — for ongoing management. We set this up as the case concludes.',
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
