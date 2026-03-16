import { ResourcesSection } from './types';

export const resourcesContent: ResourcesSection = {
  headline: 'Resources',
  cards: [
    {
      id: 'resource-1',
      title: 'The Systems Builder\'s Handbook',
      type: 'Guide',
      description: 'A comprehensive guide to designing and implementing systems that scale.',
      coverUrl: '/images/resource-1.jpg',
    },
    {
      id: 'resource-2',
      title: 'Brand Authority Template Kit',
      type: 'Template',
      description: 'Ready-to-use templates and frameworks for building your personal brand ecosystem.',
      coverUrl: '/images/resource-2.jpg',
    },
    {
      id: 'resource-3',
      title: 'AI Integration Playbook',
      type: 'Course',
      description: 'Learn how to integrate AI into your systems, content, and operations strategically.',
      coverUrl: '/images/resource-3.jpg',
    },
  ],
};
