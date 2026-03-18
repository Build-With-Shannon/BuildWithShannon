import { FeaturedWorkSection } from './types';

export const featuredWorkContent: FeaturedWorkSection = {
  eyebrow: 'Featured Work',
  headline: 'My Latest Systems.',
  description: 'A system that turns scattered AI conversations into a private, searchable intelligence system you can actually use.',
  ctaButton: {
    label: 'Work With Me',
    href: '/work-with-me',
  },
  projects: [
    {
      id: 'project-1',
      title: 'Personal AI System',
      tag: 'Systems',
      description: 'A structured approach to building content systems that leverage AI for clarity, consistency, and scale.',
      imageUrl: '/images/personal-ai-system.jpg',
      href: '/systems',
    },
    {
      id: 'project-2',
      title: 'Brand Authority Operating System',
      tag: 'Systems',
      description: 'A complete playbook for building a personal brand that positions you as a credible expert and attracts ideal clients.',
      imageUrl: '/images/image.png',
      href: '/systems',
    },
  ],
};
