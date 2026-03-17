import type { Metadata } from 'next';
import PageIntro from '@/app/components/PageIntro';
import ResourcesSection from '@/app/components/sections/ResourcesSection';
import { resourcesContent } from '@/app/data';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Access practical tools, templates, and teaching assets to build with more clarity, structure, and speed.',
};

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resources"
        title="Tools, Templates, and Teaching Assets"
        description="A growing library of practical resources designed to help you build with more clarity, structure, and speed."
      />
      <ResourcesSection content={resourcesContent} />
    </>
  );
}
