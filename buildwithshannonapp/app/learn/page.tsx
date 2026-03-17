import type { Metadata } from 'next';
import PageIntro from '@/app/components/PageIntro';
import LearnSection from '@/app/components/sections/LearnSection';
import { learnContent } from '@/app/data';

export const metadata: Metadata = {
  title: 'Learn',
  description:
    'Explore tutorials, guides, and videos that make systems, AI, and implementation clearer and easier to apply.',
};

export default function LearnPage() {
  return (
    <>
      <PageIntro
        eyebrow="Learn"
        title="Clear Teaching for Smart Builders"
        description="Tutorials, guides, and videos designed to make systems, AI, and strategic thinking easier to understand and apply."
      />
      <LearnSection content={learnContent} />
    </>
  );
}
