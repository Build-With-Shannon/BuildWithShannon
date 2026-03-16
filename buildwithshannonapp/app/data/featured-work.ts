import { FeaturedWorkSection } from './types';

export const featuredWorkContent: FeaturedWorkSection = {
  eyebrow: 'Featured Work',
  headline: 'My Latest Systems.',
  description: 'A curated collection of the systems and solutions I have built and am currently teaching.',
  ctaButton: {
    label: 'Work With Me',
    href: '/work-with-me',
  },
  projects: [
    {
      id: 'project-1',
      title: 'AI-Powered Content Strategy Framework',
      tag: 'Systems',
      description: 'A structured approach to building content systems that leverage AI for clarity, consistency, and scale.',
      imageUrl: '/images/project-1.jpg',
      href: '/systems/ai-content-strategy',
    },
    {
      id: 'project-2',
      title: 'Brand Authority Operating System',
      tag: 'Systems',
      description: 'A complete playbook for building a personal brand that positions you as a credible expert and attracts ideal clients.',
      imageUrl: '/images/project-2.jpg',
      href: '/systems/brand-authority',
    },
  ],
};
