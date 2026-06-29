# CLAUDE.md — Lexakind Public Website
## Project: Lexakind Legal-Tech Platform — Phase 1 (Public Website)
## Stack: Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion · Shadcn/UI
## Prepared by: Abhishek / ITBIZone · Ref: ITB-2026-LXK-01
## Design Direction: Orange + Black — Regalis layout structure, fully custom palette

---

## 0. QUICK ORIENTATION

This is the ONLY source of truth. Read every section before writing a single line of code.
Do not invent patterns, colors, or structures not defined here.

**Phase 1 scope (this file):**
- Public marketing website — no auth, no portals
- Pages: Homepage, 12 Practice Area pages, About, Contact, Blog (static seed), Consultation CTA
- Design: Orange + Black, Regalis-inspired layout, Playfair Display + Inter typography
- SEO-first: Schema markup, ISR, sitemap, robots, 301 redirects from 168 old URLs

**Out of scope for Phase 1:**
- Client Portal / Advocate Portal / Admin Dashboard → Phase 2
- Payments (Razorpay) → Phase 3
- AI chatbot (Claude API) → Phase 4

---

## 1. DESIGN SYSTEM

### 1.1 Color Palette — Orange + Black

This is the ONLY palette. Do not introduce any other colors.

```css
/* globals.css — CSS custom properties */
:root {
  /* Core */
  --blk:    #0d0d0d;   /* primary black — nav bg, dark sections */
  --blk-2:  #141414;   /* slightly lighter black — trust bar, footer */
  --blk-3:  #1c1c1c;   /* card dark backgrounds, hero right panel */
  --blk-4:  #242424;   /* subtle borders on dark bg, hover states */

  /* Orange — the ONLY accent color */
  --ora:    #E8571A;   /* primary orange — CTAs, active states, accents */
  --ora-h:  #ff6b2b;   /* orange hover */
  --ora-d:  #c44a14;   /* orange pressed / dark variant */

  /* Light surfaces */
  --wht:    #ffffff;   /* pure white */
  --wht-2:  #f5f4f1;   /* off-white — alternating section backgrounds */
  --wht-3:  #e8e5e0;   /* borders on light bg, grid dividers */

  /* Text */
  --txt:    #0d0d0d;   /* primary text on light bg */
  --muted:  #888888;   /* secondary/descriptive text */
  --muted-2:#666666;   /* captions, meta */
  --txt-inv:#ffffff;   /* text on dark/orange bg */
}
```

**Tailwind config mapping:**

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blk:   '#0d0d0d',
        'blk-2':'#141414',
        'blk-3':'#1c1c1c',
        'blk-4':'#242424',
        ora:   '#E8571A',
        'ora-h':'#ff6b2b',
        'ora-d':'#c44a14',
        wht:   '#ffffff',
        'wht-2':'#f5f4f1',
        'wht-3':'#e8e5e0',
        muted: '#888888',
        'muted-2':'#666666',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '3px',   /* all buttons use 3px radius — not rounded-full, not rounded-lg */
        card:'4px',   /* cards use 4px */
      },
    },
  },
};

export default config;
```

**Palette rules — enforce strictly:**
- Orange (`--ora`) is used for: CTA buttons, active nav links, section labels, stat numbers, icon hover states, card bottom-border reveals, link hover, footer brand letter, hero badge
- Black (`--blk`, `--blk-2`, `--blk-3`) is used for: navbar, hero, about section, stats bar, testimonials, footer
- White/off-white is used for: body sections (Why section, Practice Areas, Process, FAQ), card backgrounds
- `--wht-3` is the grid divider color between cards (1px background trick)
- **Never** introduce blue, green, gold, navy, purple, or any other color

### 1.2 Typography

```ts
// lib/fonts.ts
import { Playfair_Display, Inter } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});
```

**Type scale — use these classes exactly:**

| Role | Tailwind Classes |
|------|-----------------|
| Display / Hero H1 | `font-display text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.06] tracking-tight` |
| Section H2 | `font-display text-[34px] md:text-[42px] font-bold leading-[1.12] tracking-tight` |
| Card H3 | `font-display text-lg font-semibold leading-snug` |
| Card H3 small | `font-display text-base font-semibold leading-snug` |
| Section label/eyebrow | `font-body text-[11px] font-medium tracking-[0.18em] uppercase text-ora` |
| Body regular | `font-body text-sm font-light leading-relaxed text-muted` |
| Body medium | `font-body text-sm font-normal leading-relaxed` |
| Nav link | `font-body text-[13px] font-normal tracking-[0.02em]` |
| Button | `font-body text-[13px] font-medium tracking-[0.02em]` |
| Stat number | `font-display text-[46px] font-bold leading-none` |
| Stat number large | `font-display text-[52px] font-bold leading-none` |

**Typography rules:**
- `font-display` (Playfair Display) = H1, H2, H3 headings, stat numbers, logo, hero badge ONLY
- `font-body` (Inter) = everything else: nav, body text, buttons, labels, captions, footer
- Italic variant of Playfair Display is used sparingly in hero H1 for the key word only
- Font weight 300 (light) is used for descriptive body text and footer descriptions
- Font weight 600+ is for display headings only

### 1.3 Spacing System

All sections use consistent vertical padding. Never deviate:

```
Dark sections (hero, about, stats, testimonials, footer): py-[72px] px-12
Light sections (why, practice areas, process, FAQ):        py-20 px-12
Trust bar / CTA banner:                                    py-6 px-12
Mobile (< 768px):                                          py-12 px-5
```

### 1.4 Border Radius

```
Buttons:     rounded-[3px]    — sharp, professional
Cards:       rounded-[4px]    — barely rounded
Icon boxes:  rounded-[3px]
Avatar:      rounded-full
Input:       rounded-[3px]
```

**Never use:** `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full` on non-circular elements

### 1.5 Design Signature Elements

**Section label / eyebrow (used before every H2):**
```tsx
<div className="flex items-center gap-2 mb-4">
  <div className="w-6 h-px bg-ora" />
  <span className="font-body text-[11px] font-medium tracking-[0.18em] uppercase text-ora">
    {label}
  </span>
</div>
```

**Card grid divider trick (1px lines between cards, no borders on cards themselves):**
```tsx
<div className="grid grid-cols-3 gap-px bg-wht-3">
  {/* Each card has bg-white — gap-px + bg-wht-3 creates hairline dividers */}
  <div className="bg-white p-8">...</div>
</div>
```

**Orange bottom-border card reveal on hover:**
```tsx
<div className="relative group bg-white overflow-hidden">
  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-ora scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  {/* card content */}
</div>
```

**Icon box style:**
```tsx
<div className="w-12 h-12 bg-blk text-white flex items-center justify-center rounded-[3px] transition-colors duration-200 group-hover:bg-ora">
  <Icon size={20} />
</div>
```

---

## 2. LAYOUT ARCHITECTURE

### 2.1 Homepage Section Order

```
1.  <Header />          — sticky, transparent → black on scroll
2.  <HeroSection />     — dark, split left/right, parallax
3.  <TrustBar />        — dark, 4-column stats strip
4.  <WhySection />      — light (wht-2), 3 cards
5.  <AboutSection />    — dark, 2-column grid with tabs
6.  <PracticeAreas />   — white, 6-card grid (shows 6 of 12 + "see all")
7.  <StatsSection />    — dark, 4-column numbers
8.  <ProcessSection />  — light (wht-2), 3 steps horizontal
9.  <Testimonials />    — dark, 3 cards (first card is orange highlight)
10. <FAQSection />      — white, 2-column layout
11. <CTABanner />       — orange full-width
12. <Footer />          — dark
    <WhatsAppButton />  — floating, always visible
```

**Section background alternation:**
```
dark → dark → light → dark → white → dark → light → dark → white → orange → dark
```
Never break this alternation. It creates the visual rhythm.

### 2.2 Navbar

```tsx
// Behavior: transparent on hero → bg-blk/95 backdrop-blur after 80px scroll
// Height: 68px desktop, 60px mobile
// Logo: font-display font-bold text-[22px] text-white
//       "LEX" in white, "A" in text-ora, "KIND" in white
// Links: 5 items — Home, Practice Areas, About, Resources, Contact
// CTA: "Book Consultation" — bg-ora text-white rounded-[3px] px-5 py-2 text-[13px]
// Mobile: hamburger → full-screen dark overlay drawer
```

### 2.3 Hero Section

```
Layout:     flex, min-h-screen
Left (flex-1): dark bg, content
Right (w-[420px]): bg-blk-3, decorative panel

LEFT CONTENT:
  - Section label: "Welcome to Lexakind"
  - H1: "Legal Protection / With <em>Precision</em> / And Clarity"
        (italic Playfair on "Precision", text-ora)
  - Subtext: 15px, #aaa, font-weight 300, max-w-[400px]
  - Two CTAs: primary (bg-ora) + secondary (border border-white/20)

RIGHT PANEL (bg-blk-3):
  - Orange badge block: "4,000+" / "Verified Lawyers" in Playfair Display
  - Service pill list with orange dot bullet
  - Orange 3px right stripe (absolute, right-0, full height)
  - Parallax: panel scrolls at 0.85x, pills at 0.7x

PARALLAX IMPLEMENTATION (Framer Motion):
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])   // left content
  const panelY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])  // right panel
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])      // fade out

HERO STAGGER ANIMATION (on mount):
  Each element: initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
  Delays: tag=0.1s, h1=0.25s, sub=0.45s, btns=0.6s, right-panel=0.5s
```

### 2.4 Trust Bar

```
bg-blk-2, border-t border-white/7
4 columns, flex, each: flex-1, px-7, border-r border-white/7
Numbers: font-display text-[28px] text-ora font-bold
Labels: text-[12px] text-muted font-light leading-snug

Stats: 50K+ | 25K+ | 30K+ | 1K+
```

### 2.5 Why Section

```
bg-wht-2
3-card grid with gap-px bg-wht-3 divider trick
Each card: bg-white p-9

Card structure:
  - Icon box (48×48, bg-blk, group-hover:bg-ora)
  - H3 (Playfair, 18px, font-semibold)
  - Description (text-sm, font-light, text-muted, leading-relaxed)
  - Arrow link (text-[12px] text-ora, hover arrow slides right)

Cards:
  1. Verified Advocate Network — ti-shield-check
  2. Transparent Pricing      — ti-receipt
  3. End-to-End Case Tracking — ti-chart-line
```

### 2.6 About Section

```
bg-blk
2-column grid: left (content) | right (stats + contact card)

LEFT:
  - Section label + H2 in white
  - Tab switcher: Mission | Vision | Values
    Active tab: text-ora, border-b-2 border-ora
    Inactive: text-muted-2
  - Tab content paragraph: text-[13px] text-[#aaa] font-light leading-loose

RIGHT (bg-blk-3):
  - Two stat blocks: "160+" services, "2,300+" clients
    Each: Playfair Display, text-[48px], text-ora for number
  - Contact card (bg-white/4, border border-white/8, rounded-[4px]):
    3 rows: Phone | Hours | Email
    Each row: orange icon box + label + value
```

### 2.7 Practice Areas Grid

```
bg-white
Header: left-aligned section label + H2, right: "All practice areas →" link

6-card grid (of 12 total), gap-px bg-wht-3 divider trick (3×2 grid)
Each card:
  - Number: "01"–"06" in text-[13px] text-ora font-semibold opacity-70
  - Lucide icon: text-[26px] text-blk
  - H3: Playfair, text-[16px] font-semibold
  - Description: text-[12px] text-muted font-light leading-relaxed
  - Orange bottom-border reveal on hover
  - Arrow icon: hidden → slides in on hover (opacity-0 → opacity-100, translateX)

The 12 Practice Areas (full list):
  01 Corporate Law          — Briefcase
  02 Civil Litigation       — Scale
  03 Criminal Law           — Shield
  04 Family Law             — Heart
  05 Property Law           — Home
  06 Cyber Crime            — Wifi
  07 Consumer Protection    — ShoppingBag
  08 Intellectual Property  — Lightbulb
  09 Real Estate & RERA     — Building2
  10 NRI Legal Services     — Globe
  11 Labour & Employment    — Users
  12 Foreign Nationals      — Plane
```

### 2.8 Stats Bar

```
bg-blk
4-column grid, centered text (first column left-aligned)
border-r border-white/8 between columns

Numbers: font-display text-[48px] text-white font-bold
Orange: the + / % / K suffix character only (text-ora)
Labels: text-[12px] text-[#666] font-light

Stats: 50K+ consultations | 98% satisfied | 160+ services | 4K+ advocates

AnimatedCounter: count up on scroll into view using useInView + useSpring
```

### 2.9 Process Section

```
bg-wht-2
3 steps horizontal layout

Step number box: 56×56, bg-blk (step 1: bg-ora — active highlight), text-white
                 Playfair, 20px, font-bold, rounded-[3px]
Connecting line: absolute, top-[28px] left-[14%] right-[14%], h-px, bg-wht-3

H3: Playfair, 16px, font-semibold
Description: text-[12px] text-muted font-light

Steps:
  1. Submit Your Case (orange box — active)
  2. Advocate Assigned
  3. Resolution & Closure
```

### 2.10 Testimonials

```
bg-blk
3-card grid with gap-px bg-white/7 divider
First card: bg-ora (orange highlight card)
Other cards: bg-blk

Each card:
  - Large quotation mark: font-display text-[36px] opacity-40
  - Quote text: text-[13px] font-light leading-loose
  - Author row: avatar circle (initials) + name + role

First card (orange):
  - All text: white and white/85
  - Avatar: bg-white/20
```

### 2.11 FAQ Section

```
bg-white
2-column layout: left (1fr) | right (2fr)

LEFT:
  - Section label + H2 + description paragraph
  - "Ask a question" button: bg-ora, text-white

RIGHT:
  - Accordion list
  - Each item: border-b border-wht-3, py-5
  - Question: text-[14px] font-medium text-blk + orange "+" toggle (rotates 45° when open)
  - Answer: text-[13px] text-muted font-light, max-h-0 → max-h-[200px] transition

FAQs (5 items):
  1. What legal services does Lexakind provide?
  2. How quickly will I be assigned an advocate?
  3. Can I track the progress of my case?
  4. Do you handle NRI legal matters?
  5. How are consultation fees calculated?
```

### 2.12 CTA Banner

```
bg-ora
flex, justify-between, align-center, py-16 px-12

H2: font-display text-[34px] text-white font-bold max-w-[480px]
    "Need Legal Advice? Talk to a Verified Expert Today."

Two buttons:
  Primary:   bg-white text-ora font-semibold rounded-[3px]
  Secondary: border-2 border-white/40 text-white rounded-[3px]
```

### 2.13 Footer

```
bg-blk
4-column grid: brand+desc | Company links | Service links | Contact

Brand: "LEX" white + "A" orange + "KIND" white — Playfair Display

Column headings: text-[11px] tracking-[0.15em] uppercase text-ora font-medium
Links: text-[13px] text-[#666] font-light, hover:text-ora

Contact rows: icon + label + value
Bottom strip: border-t border-white/7 — copyright left, legal links right
```

### 2.14 WhatsApp Floating Button

```tsx
// Fixed bottom-right, z-50
// bg-[#25D366], w-12 h-12, rounded-full
// WhatsApp SVG icon in white
// Link: https://wa.me/918618888526?text=Hello%2C%20I%20need%20legal%20assistance.
// hover: scale-110 transition-transform
// On mobile: bottom-5 right-5
```

---

## 3. FILE STRUCTURE

```
lexakind/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx              ← Header + Footer + WhatsAppButton
│   │   ├── page.tsx                ← Homepage (all sections)
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── team/page.tsx
│   │   ├── practice-areas/
│   │   │   ├── page.tsx            ← All 12 PA listing
│   │   │   └── [slug]/page.tsx     ← Individual PA (ISR, revalidate: 86400)
│   │   ├── resources/
│   │   │   ├── blog/page.tsx
│   │   │   └── blog/[slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   └── consultation/page.tsx
│   ├── api/
│   │   └── contact/route.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   ├── error.tsx
│   └── layout.tsx                  ← Root layout: fonts, metadata, analytics
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── WhatsAppButton.tsx
│   ├── home/
│   │   ├── HeroSection.tsx         ← 'use client' — parallax
│   │   ├── TrustBar.tsx
│   │   ├── WhySection.tsx
│   │   ├── AboutSection.tsx        ← 'use client' — tabs
│   │   ├── PracticeAreasGrid.tsx
│   │   ├── StatsSection.tsx        ← 'use client' — counter animation
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx          ← 'use client' — accordion
│   │   ├── CTABanner.tsx
│   │   └── BlogPreview.tsx
│   ├── practice-areas/
│   │   ├── PAHero.tsx
│   │   ├── ServiceAccordion.tsx
│   │   └── RelatedAreas.tsx
│   ├── shared/
│   │   ├── SectionLabel.tsx        ← reusable eyebrow label
│   │   ├── AnimatedCounter.tsx     ← count-up on scroll
│   │   ├── RevealOnScroll.tsx      ← fade+slide wrapper
│   │   ├── ContactForm.tsx
│   │   └── SchemaMarkup.tsx        ← JSON-LD injection
│   └── ui/                         ← shadcn auto-generated
│
├── lib/
│   ├── fonts.ts                    ← Playfair + Inter exports
│   ├── constants.ts                ← site URLs, contact info, social links
│   ├── practice-areas.ts           ← all 12 PA data objects
│   ├── schema.ts                   ← JSON-LD generators
│   ├── redirects.ts                ← 168 WordPress → new URL mappings
│   └── utils.ts                    ← cn(), formatDate()
│
├── types/
│   ├── practice-area.ts
│   └── blog.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── practice-areas/
│   │   └── team/
│   └── og/
│
├── styles/
│   └── globals.css                 ← CSS vars + Tailwind base
│
├── CLAUDE.md                       ← this file
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. COMPONENT SPECS

### 4.1 SectionLabel

```tsx
// components/shared/SectionLabel.tsx
// Server component — no 'use client'

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${className ?? ''}`}>
      <div className="w-6 h-px bg-ora flex-shrink-0" />
      <span className="font-body text-[11px] font-medium tracking-[0.18em] uppercase text-ora">
        {children}
      </span>
    </div>
  );
}
```

### 4.2 RevealOnScroll

```tsx
// components/shared/RevealOnScroll.tsx
'use client';
import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

export function RevealOnScroll({ children, delay = 0, direction = 'up', className }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce || direction === 'none' ? 0 : direction === 'up' ? 28 : 0, x: reduce ? 0 : direction === 'left' ? -28 : direction === 'right' ? 28 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### 4.3 AnimatedCounter

```tsx
// components/shared/AnimatedCounter.tsx
'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = '', duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration, bounce: 0 });

  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);
  useEffect(() => spring.on('change', v => {
    if (ref.current) ref.current.textContent = `${Math.floor(v).toLocaleString('en-IN')}${suffix}`;
  }), [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
```

### 4.4 Header

```tsx
// components/layout/Header.tsx
'use client';
// Scroll behavior:
//   - Default: bg-transparent
//   - After 80px scroll: bg-blk/95 backdrop-blur-sm shadow-sm
// Use useMotionValueEvent from framer-motion for scroll tracking

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources/blog' },
  { label: 'Contact', href: '/contact' },
];

// Nav link hover: after:block after:h-px after:w-full after:bg-ora
//                 after:scale-x-0 hover:after:scale-x-100
//                 after:transition-transform after:duration-200 after:origin-left
// Active link: text-ora (use usePathname)
```

### 4.5 ContactForm

```tsx
// Zod schema:
const schema = z.object({
  name:         z.string().min(2),
  email:        z.string().email(),
  phone:        z.string().regex(/^[6-9]\d{9}$/),
  practiceArea: z.string().min(1),
  message:      z.string().min(20).max(1000),
});

// Submit to: POST /api/contact
// On success: react-hot-toast success toast
// On error: field-level error messages below each input

// Input styles:
// bg-wht-2 border border-wht-3 rounded-[3px] px-4 py-3 text-[14px] text-blk
// focus:outline-none focus:border-ora focus:ring-1 focus:ring-ora
// placeholder:text-muted font-light
```

---

## 5. ANIMATION SYSTEM

### 5.1 Philosophy

Three animation layers — nothing more:
1. **Mount** — hero elements stagger in on page load
2. **Scroll reveal** — sections fade+slide in when entering viewport (once only)
3. **Micro-interactions** — hover/tap on cards, buttons, nav links

**Never animate:** colors, backgrounds, font sizes, layout shifts
**Always animate with:** `transform` and `opacity` only (GPU-composited)
**Always respect:** `useReducedMotion()` — disable all motion if true

### 5.2 Hero Parallax

```tsx
// HeroSection.tsx
'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '20%']);
  const panelY   = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '10%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // Mount stagger: hero label → h1 → sub → buttons → right panel
  // Each: initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
  // Transition: duration 0.65, ease [0.22, 0.61, 0.36, 1]
  // Delays: 0.1, 0.25, 0.45, 0.6, 0.5
}
```

### 5.3 Card Hover

```tsx
// All practice area cards and why-cards use this pattern:
<motion.div
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.99 }}
  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
  className="group relative bg-white overflow-hidden cursor-pointer"
>
  {/* orange bottom reveal */}
  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-ora
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 origin-left" />
</motion.div>
```

### 5.4 Stagger Children

```tsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
};
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } }
};

<motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {cards.map(c => <motion.div key={c.slug} variants={item}>...</motion.div>)}
</motion.div>
```

---

## 6. PRACTICE AREA DATA

### 6.1 Data Structure

```ts
// lib/practice-areas.ts

export interface PracticeArea {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;                    // Lucide icon component name
  services: {
    title: string;
    description: string;
    items: string[];
  }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  relatedSlugs: string[];          // 3 related PA slugs for cross-linking
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'corporate-law',
    name: 'Corporate Law',
    shortName: 'Corporate',
    tagline: 'Legal backbone for your business',
    icon: 'Briefcase',
    services: [
      { title: 'Business Formation', description: '...', items: ['Pvt Ltd incorporation', 'LLP registration', 'Partnership deeds'] },
      { title: 'Agreements & Contracts', description: '...', items: ['Founder agreements', 'Shareholder agreements', 'NDAs', 'MOAs'] },
      // ...
    ],
    faqs: [{ q: '...', a: '...' }],
    relatedSlugs: ['civil-litigation', 'intellectual-property', 'labour-employment'],
    metaTitle: 'Corporate Law Services in Bengaluru | Lexakind',
    metaDescription: '...',
  },
  // ... remaining 11
];

export const PA_SLUGS = PRACTICE_AREAS.map(p => p.slug);
```

### 6.2 Practice Area Page Template

```tsx
// app/(public)/practice-areas/[slug]/page.tsx
export const revalidate = 86400; // ISR — 24 hours

export async function generateStaticParams() {
  return PA_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const pa = PRACTICE_AREAS.find(p => p.slug === params.slug);
  if (!pa) return {};
  return {
    title: pa.metaTitle,
    description: pa.metaDescription,
  };
}

// Page sections:
// 1. Page hero (dark): breadcrumb + PA name + tagline + CTA
// 2. Left sidebar: all 12 PA links (active = text-ora, border-l-2 border-ora)
// 3. Right main: description + services accordion + FAQs + process CTA
// 4. Related areas: 3 cards linking to related PAs
```

---

## 7. SEO

### 7.1 Root Metadata

```ts
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://www.lexakind.com'),
  title: {
    default: 'Lexakind — Trusted Legal Services in Bengaluru',
    template: '%s | Lexakind',
  },
  description: 'Lexakind connects you with 4,000+ verified lawyers across India. Expert legal help for property, family, criminal, corporate, cyber crime and 160+ services. Based in Bengaluru.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Lexakind',
  },
  robots: { index: true, follow: true },
};
```

### 7.2 Schema Generators

```ts
// lib/schema.ts

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'LocalBusiness'],
  name: 'Lexakind',
  url: 'https://www.lexakind.com',
  telephone: '+918618888526',
  email: 'lexakind1@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 15, UB City, Concorde Towers, 24, Vittal Mallya Rd',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 12.9716, longitude: 77.5946 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
  ],
  priceRange: '₹₹',
  areaServed: { '@type': 'Country', name: 'India' },
});

export const practiceAreaSchema = (pa: PracticeArea) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: pa.name,
  provider: { '@type': 'LegalService', name: 'Lexakind' },
  description: pa.metaDescription,
  url: `https://www.lexakind.com/practice-areas/${pa.slug}`,
  areaServed: { '@type': 'Country', name: 'India' },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ name, url }, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `https://www.lexakind.com${url}`,
  })),
});
```

### 7.3 Sitemap

```ts
// app/sitemap.ts
export default function sitemap() {
  const base = 'https://www.lexakind.com';
  const now = new Date().toISOString();
  const statics = ['', '/about', '/about/team', '/contact', '/consultation', '/resources/blog'].map(p => ({
    url: `${base}${p}`, lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1.0 : 0.8,
  }));
  const pas = PA_SLUGS.map(slug => ({
    url: `${base}/practice-areas/${slug}`, lastModified: now,
    changeFrequency: 'monthly' as const, priority: 0.9,
  }));
  return [...statics, ...pas];
}
```

### 7.4 Robots

```ts
// app/robots.ts
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin', '/dashboard', '/advocate', '/api/'] },
    ],
    sitemap: 'https://www.lexakind.com/sitemap.xml',
  };
}
```

---

## 8. ENVIRONMENT VARIABLES

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.lexakind.com
NEXT_PUBLIC_WHATSAPP=918618888526
NEXT_PUBLIC_PHONE=+918618888526
NEXT_PUBLIC_EMAIL=lexakind1@gmail.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact form
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM=noreply@lexakind.com
RESEND_TO=lexakind1@gmail.com

# ISR revalidation
REVALIDATION_SECRET=generate_a_random_string_here
```

---

## 9. CODING RULES

### 9.1 Always

```tsx
// ✅ Server components by default — add 'use client' ONLY when needed
//    (useState, useEffect, useRef, Framer Motion, event handlers)

// ✅ next/image for ALL images
import Image from 'next/image';
<Image src="..." alt="descriptive text" width={800} height={600} />
<Image src="..." alt="" fill className="object-cover" priority /> // hero images

// ✅ next/link for ALL internal navigation
import Link from 'next/link';
<Link href="/practice-areas">Explore</Link>

// ✅ cn() utility for conditional classes
import { cn } from '@/lib/utils';
className={cn('base-classes', condition && 'conditional-class')}

// ✅ Explicit TypeScript types — no `any`
// ✅ Zod validation on ALL forms and API routes
// ✅ Loading states on all async operations
// ✅ Error boundaries where appropriate
```

### 9.2 Never

```tsx
// ❌ Never <img> — always <Image>
// ❌ Never <a href> for internal links — always <Link href>
// ❌ Never hardcode colors — use Tailwind tokens from palette
// ❌ Never use any TypeScript type
// ❌ Never fetch data client-side that can be server-fetched
// ❌ Never use Array.index as React key in dynamic lists
// ❌ Never use rounded-lg / rounded-xl on cards or buttons
// ❌ Never introduce colors outside the defined palette
// ❌ Never use !important in CSS
// ❌ Never commit .env.local
```

### 9.3 Package Rules

```json
// ✅ Install these
{
  "framer-motion": "^11.x",
  "lucide-react": "latest",
  "react-hook-form": "^7.x",
  "@hookform/resolvers": "latest",
  "zod": "^3.x",
  "resend": "^3.x",
  "react-hot-toast": "^2.x"
}

// ❌ Never install
// jQuery, Bootstrap, Material UI, Chakra UI
// moment.js (use date-fns or Intl)
// axios (use fetch)
// lodash (use native JS)
```

---

## 10. ACCESSIBILITY

```
✅ All interactive elements: focus-visible:ring-2 focus-visible:ring-ora focus-visible:ring-offset-2
✅ Skip link: <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
✅ All images: descriptive alt text (empty alt="" only for decorative)
✅ Icon-only buttons: aria-label="..."
✅ Color contrast: WCAG AA minimum (white on orange passes, white on #141414 passes)
✅ Mobile menu: focus trap when open, restore focus when closed
✅ Accordion: aria-expanded, aria-controls on trigger; role="region" on panel
✅ useReducedMotion(): disable all framer-motion animations if true
```

---

## 11. PERFORMANCE

```
✅ Hero images: priority prop on <Image> (forces preload)
✅ All below-fold images: loading="lazy" (default in next/image)
✅ Fonts: only next/font/google — never <link> to Google Fonts directly
✅'use client' boundary: keep as narrow as possible
   → Wrap only the animated/interactive part, keep page shell as server component
✅ ISR: revalidate = 86400 on all practice area and blog pages
✅ Target: Lighthouse Performance > 85, CLS < 0.1, LCP < 2.5s
✅ No library > 50KB gzipped in client bundle (check with @next/bundle-analyzer)
```

---

## 12. CONTACT API ROUTE

```ts
// app/api/contact/route.ts
import { Resend } from 'resend';
import { z } from 'zod';
import { PRACTICE_AREAS } from '@/lib/practice-areas';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name:         z.string().min(2),
  email:        z.string().email(),
  phone:        z.string().regex(/^[6-9]\d{9}$/),
  practiceArea: z.string().min(1),
  message:      z.string().min(20).max(1000),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = schema.safeParse(body);
  if (!result.success) return Response.json({ error: result.error.flatten() }, { status: 400 });

  const { name, email, phone, practiceArea, message } = result.data;
  await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to:   process.env.RESEND_TO!,
    subject: `[Lexakind Enquiry] ${practiceArea} — ${name}`,
    html: `<h2>New Enquiry</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Area:</b> ${practiceArea}</p><p><b>Message:</b> ${message}</p>`,
  });
  return Response.json({ success: true });
}
```

---

## 13. FIRST RUN COMMANDS

```bash
# 1. Scaffold
npx create-next-app@latest lexakind \
  --typescript --tailwind --eslint --app \
  --src-dir=false --import-alias="@/*"

cd lexakind

# 2. Core deps
npm install framer-motion lucide-react \
  react-hook-form @hookform/resolvers zod \
  resend react-hot-toast

# 3. Shadcn UI
npx shadcn@latest init
# Style: New York | Base color: Neutral | CSS variables: yes

# 4. Shadcn components
npx shadcn@latest add button input textarea \
  accordion dialog sheet badge separator

# 5. Folder structure
mkdir -p \
  app/\(public\)/about/team \
  app/\(public\)/practice-areas/\[slug\] \
  app/\(public\)/resources/blog/\[slug\] \
  app/\(public\)/contact \
  app/\(public\)/consultation \
  app/api/contact \
  components/layout \
  components/home \
  components/practice-areas \
  components/shared \
  lib types \
  public/images/hero \
  public/images/practice-areas \
  public/images/team \
  public/og \
  styles

# 6. Create .env.local from Section 8
# 7. Drop this CLAUDE.md into project root
# 8. npm run dev
```

---

## 14. BUILD ORDER

Build in this exact sequence — each step depends on the one before:

```
Step 1 → tailwind.config.ts + styles/globals.css + lib/fonts.ts
         (design tokens, CSS vars, font setup)

Step 2 → lib/constants.ts + lib/utils.ts + types/
         (site-wide data, cn() helper, TypeScript types)

Step 3 → lib/practice-areas.ts
         (all 12 PA data objects — needed by sitemap + pages)

Step 4 → lib/schema.ts
         (SEO JSON-LD generators)

Step 5 → components/shared/SectionLabel.tsx
         components/shared/RevealOnScroll.tsx
         components/shared/AnimatedCounter.tsx
         (building blocks used by all sections)

Step 6 → components/layout/Header.tsx
         components/layout/Footer.tsx
         components/layout/WhatsAppButton.tsx
         app/(public)/layout.tsx
         (shell that wraps every page)

Step 7 → All home/ section components (in homepage section order)
         app/(public)/page.tsx (assemble all sections)

Step 8 → app/(public)/practice-areas/[slug]/page.tsx
         components/practice-areas/

Step 9 → app/(public)/about/page.tsx
         app/(public)/contact/page.tsx
         app/api/contact/route.ts

Step 10 → app/(public)/resources/blog/page.tsx (static seed)

Step 11 → app/sitemap.ts + app/robots.ts + app/not-found.tsx

Step 12 → lib/redirects.ts (all 168 old WordPress → new URL)
          next.config.ts (add redirects)
```

---

## 15. STATUS TRACKER

| Item | Status | Notes |
|------|--------|-------|
| Design system (tokens, fonts) | 🔴 Not started | Do first |
| Header + Footer | 🔴 Not started | Do second |
| Homepage — Hero | 🔴 Not started | Parallax, mount animation |
| Homepage — Trust bar | 🔴 Not started | |
| Homepage — Why section | 🔴 Not started | |
| Homepage — About tabs | 🔴 Not started | |
| Homepage — Practice areas | 🔴 Not started | |
| Homepage — Stats | 🔴 Not started | Animated counters |
| Homepage — Process | 🔴 Not started | |
| Homepage — Testimonials | 🔴 Not started | |
| Homepage — FAQ accordion | 🔴 Not started | |
| Homepage — CTA banner | 🔴 Not started | |
| Practice area page template | 🔴 Not started | ISR |
| All 12 PA data objects | 🔴 Not started | |
| About page | 🔴 Not started | Needs client content |
| Contact page + API | 🔴 Not started | Needs Resend key |
| Blog (static seed) | 🔴 Not started | 3–5 seed posts |
| SEO — sitemap + robots | 🔴 Not started | |
| SEO — schema markup | 🔴 Not started | |
| 301 redirects (168 URLs) | 🔴 Not started | |
| WhatsApp floating button | 🔴 Not started | |
| Mobile responsiveness QA | 🔴 Not started | |
| Performance audit | 🔴 Not started | Lighthouse |

---

## 16. QUALITY CHECKLIST (before marking any task done)

```
CODE
[ ] No `any` TypeScript types
[ ] No console.log statements
[ ] All images use next/image with alt text
[ ] All internal links use next/link
[ ] All forms have Zod validation + field error display
[ ] API routes return correct HTTP status codes

DESIGN
[ ] Only orange (#E8571A) used as accent — no other colors introduced
[ ] Playfair Display used only for headings and stat numbers
[ ] Inter used for all body text, nav, buttons, labels
[ ] Border radius: 3px on buttons, 4px on cards — never rounded-lg+
[ ] Section padding consistent (72px vertical on dark, 80px on light)
[ ] Section background alternation maintained
[ ] Mobile responsive: 375px, 768px, 1280px, 1440px breakpoints tested

ANIMATION
[ ] useReducedMotion() respected everywhere
[ ] All whileInView has once: true
[ ] Only transform + opacity animated (no color, layout, size)
[ ] No animation on initial page paint (always delay > 0)

SEO
[ ] Each page has unique title + meta description
[ ] JSON-LD schema on: homepage, each PA page, contact, blog posts
[ ] sitemap.ts includes all public pages
[ ] robots.ts excludes /admin /dashboard /advocate /api
[ ] All images have alt text

PERFORMANCE
[ ] Hero image uses priority prop
[ ] Lighthouse Performance > 85 (test in incognito)
[ ] No render-blocking resources
[ ] Client components kept to minimum necessary
```

---

*Last updated: June 2026 | Abhishek / ITBIZone | Lexakind Phase 1*
*Do not share outside the development team.*