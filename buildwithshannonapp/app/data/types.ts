/* ─────────────────────────────────────────────────────────────────────────── */
/* Content Type Definitions for Build With Shannon Homepage                    */
/* ─────────────────────────────────────────────────────────────────────────── */

export interface HeroContent {
  eyebrow?: string;
  lines: {
    text: string;
    style: 'bold' | 'semibold' | 'thin';
  }[];
  description?: string;
  buttons: {
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  }[];
  imageUrl?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  tag: string;
  description: string;
  imageUrl?: string;
  href: string;
}

export interface FeaturedWorkSection {
  eyebrow: string;
  headline: string;
  description: string;
  ctaButton: {
    label: string;
    href: string;
  };
  projects: FeaturedProject[];
}

export interface LearnCard {
  id: string;
  type: 'tutorial' | 'guide' | 'video';
  title: string;
  description: string;
  thumbnailUrl?: string;
  href: string;
}

export interface LearnSection {
  headline: string;
  description: string;
  cards: LearnCard[];
}

export interface ServiceBlock {
  id: string;
  title: string;
  description: string;
}

export interface WorkWithMeSection {
  headline: string;
  description: string;
  services: ServiceBlock[];
}

export interface ResourceCard {
  id: string;
  title: string;
  type: string;
  description: string;
  coverUrl?: string;
}

export interface ResourcesSection {
  headline: string;
  cards: ResourceCard[];
}

export interface AboutPreviewSection {
  headline: string;
  description: string;
  ctaButton: {
    label: string;
    href: string;
  };
  portraitUrl?: string;
}

export interface FinalCTASection {
  headline: string;
  description: string;
  buttons: {
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  }[];
}

export interface HomepageContent {
  hero: HeroContent;
  featuredWork: FeaturedWorkSection;
  learn: LearnSection;
  workWithMe: WorkWithMeSection;
  resources: ResourcesSection;
  aboutPreview: AboutPreviewSection;
  finalCTA: FinalCTASection;
}
