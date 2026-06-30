export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string };

export interface BlogAuthor {
  name: string;
  role: string;
  /** Matches an advocate id in lib/team.ts for deep-linking + E-E-A-T. */
  id?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: BlogAuthor;
  /** ISO date string */
  date: string;
  readMinutes: number;
  coverImage: string;
  content: BlogBlock[];
  relatedSlugs: string[];
}
