import { HeroContent } from './types';

export const heroContent: HeroContent = {
  eyebrow: 'Build With Shannon',
  lines: [
    {
      text: 'You should be guiding the AI.',
      style: 'bold',
    },
    {
      text: 'Not the other way around.',
      style: 'semibold',
    },
  ],
  description:
    'I teach business owners how to use AI tools correctly — so you ship things you actually understand and can maintain.',
  buttons: [
    {
      label: "Let's Build",
      href: '/work-with-me',
      variant: 'primary',
    },
    {
      label: 'See the Work',
      href: '#featured-work',
      variant: 'secondary',
    },
  ],
};
