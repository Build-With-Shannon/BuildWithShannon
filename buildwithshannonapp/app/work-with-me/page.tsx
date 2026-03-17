import type { Metadata } from 'next';
import PageIntro from '@/app/components/PageIntro';
import WorkWithMeSection from '@/app/components/sections/WorkWithMeSection';
import { workWithMeContent } from '@/app/data';

export const metadata: Metadata = {
  title: 'Work With Me',
  description:
    'Work with Shannon on strategy, systems architecture, and technical guidance designed for builders and operators.',
};

export default function WorkWithMePage() {
  return (
    <>
      <PageIntro
        eyebrow="Work With Me"
        title="Strategy, Systems, and Technical Guidance"
        description="For founders, creators, and operators who need clear thinking, intentional systems, and practical execution support."
      />
      <WorkWithMeSection content={workWithMeContent} />
    </>
  );
}
