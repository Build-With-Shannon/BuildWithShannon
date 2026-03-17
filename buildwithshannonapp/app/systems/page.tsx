import type { Metadata } from 'next';
import PageIntro from '@/app/components/PageIntro';
import FeaturedWorkSection from '@/app/components/sections/FeaturedWorkSection';
import { featuredWorkContent } from '@/app/data';

export const metadata: Metadata = {
  title: 'Systems',
  description:
    'See practical system frameworks and implementation principles that support real execution and long-term scale.',
};

const principles = [
  'Structure before scale',
  'Clear inputs, outputs, and ownership',
  'Systems that support teaching and trust',
];

export default function SystemsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Systems"
        title="Real Systems, Not Surface-Level Ideas"
        description="This page houses the frameworks, operating systems, and implementation thinking behind the Build With Shannon brand."
      />

      <section className="bg-brand-charcoal py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((principle) => (
            <div key={principle} className="rounded-[var(--radius-card)] border border-white/10 bg-white/5 px-5 py-5 text-white/80 text-sm">
              {principle}
            </div>
          ))}
        </div>
      </section>

      <FeaturedWorkSection content={featuredWorkContent} />
    </>
  );
}
