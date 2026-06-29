// Content beats timed to the Scale-Reveal frame sequence:
// Beat 1 = scales close-up phase  (frames 001–064)
// Beat 2 = camera pull-back phase (frames 065–128)
// Beat 3 = full statue phase      (frames 129–192)

export const TOTAL_FRAMES = 192;
export const SCROLL_MULTIPLIER = 6; // section height = (6 + 1) * 100vh = 700vh

export interface JusticeBeat {
  id: string;
  label: string;
  headline: string[];
  accent: string;
  body: string;
  scrollStart: number; // progress value where beat fades IN
  scrollEnd: number; // progress value where beat fades OUT
  frameStart: number; // which frame this beat starts at
  frameEnd: number; // which frame this beat ends at
  stats?: { num: string; label: string }[];
  cta?: boolean;
}

export const JUSTICE_BEATS: JusticeBeat[] = [
  {
    // Scales close-up — introduce the concept of justice
    id: 'foundation',
    label: 'Our Foundation',
    headline: ['The scales', 'never lie.'],
    accent: 'Neither do we.',
    body: 'Every case we take is measured against one standard — justice. Not convenience, not compromise. We represent you with complete honesty from day one.',
    scrollStart: 0.0,
    scrollEnd: 0.38,
    frameStart: 0,
    frameEnd: 63,
  },
  {
    // Face + sword visible — advocate appears
    id: 'approach',
    label: 'Our Approach',
    headline: ['Precision on', 'every'],
    accent: 'case.',
    body: 'We match you with the exact advocate your case demands — not the first available lawyer. Specialisation and experience both matter in law.',
    scrollStart: 0.32,
    scrollEnd: 0.7,
    frameStart: 64,
    frameEnd: 127,
    stats: [
      { num: '160+', label: 'Legal Services' },
      { num: '4,000+', label: 'Verified Advocates' },
      { num: '24hr', label: 'Case Assignment' },
    ],
  },
  {
    // Full statue revealed — complete power statement
    id: 'fighter',
    label: 'Lexakind',
    headline: ['Your case', 'deserves'],
    accent: 'a fighter.',
    body: "No hidden fees. No confusion. Just expert legal help within 24 hours — from verified advocates who know exactly what you're facing.",
    scrollStart: 0.65,
    scrollEnd: 1.0,
    frameStart: 128,
    frameEnd: 191,
    cta: true,
  },
];
