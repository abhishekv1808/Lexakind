export interface PracticeArea {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Lucide icon component name */
  icon: string;
  relatedSlugs: string[];
}
