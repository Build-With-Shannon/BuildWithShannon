import { HeroContent } from './types';

export const heroContent: HeroContent = {
  lines: [
    {
      text: 'Shannon Reed.',
      style: 'bold',
    },
    {
      text: 'Building, Teaching & Creating',
      style: 'semibold',
    },
    {
      text: 'Smart Solutions with AI',
      style: 'thin',
    },
  ],
  buttons: [
    {
      label: 'Explore the Site',
      href: '#featured-work',
      variant: 'primary',
    },
    {
      label: 'Build With Shannon',
      href: '/work-with-me',
      variant: 'secondary',
    },
  ],
  imageUrl: '/images/hero-portrait.jpg', // Placeholder path
};
