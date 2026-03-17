import { LearnSection } from './types';

export const learnContent: LearnSection = {
  headline: 'Learn With Shannon',
  description: 'Free and paid resources to help you build systems, teach clearly, and create with intention.',
  cards: [
    {
      id: 'learn-1',
      type: 'tutorial',
      title: 'Building Your First AI-Powered System',
      description: 'A step-by-step guide to designing and implementing your first smart solution.',
      thumbnailUrl: '/images/learn1.png',
      href: '/learn',
    },
    {
      id: 'learn-2',
      type: 'guide',
      title: 'Personal Brand Positioning Guide',
      description: 'Learn how to position yourself as a builder, teacher, and operator in your field.',
      thumbnailUrl: '/images/learn2.png',
      href: '/learn',
    },
    {
      id: 'learn-3',
      type: 'video',
      title: 'Structured Thinking for Clear Communication',
      description: 'Watch how to break down complex ideas into teachable, memorable frameworks.',
      thumbnailUrl: '/images/learn3.png',
      href: '/learn',
    },
  ],
};
