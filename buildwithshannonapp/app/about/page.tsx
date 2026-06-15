import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/app/components/PageIntro';
import { aboutPreviewContent } from '@/app/data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Shannon Reed, a builder and teacher focused on systems thinking, strategy, and practical technical execution.',
};

const focusAreas = [
  'Structured brand positioning',
  'Systems thinking for creators and operators',
  'Technical implementation with clarity and intent',
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Builder, Teacher, and Systems-Minded Operator"
        description="Build With Shannon exists to give strategy, teaching, and technical execution a single home. This page expands the point of view behind the brand."
      />

      <section className="bg-brand-off-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <div className="rounded-[var(--radius-card)] border border-brand-soft-gray bg-gradient-to-br from-brand-soft-gray to-white min-h-[420px] flex items-center justify-center"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <span className="text-xs uppercase tracking-[0.22em] text-brand-charcoal/35">Portrait Placeholder</span>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl text-brand-charcoal tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {aboutPreviewContent.headline}
            </h2>
            <p className="text-base leading-relaxed text-brand-charcoal/75">
              {aboutPreviewContent.description}
            </p>
            <div className="grid gap-4">
              {focusAreas.map((area) => (
                <div key={area} className="rounded-[var(--radius-card)] border border-brand-soft-gray bg-white px-5 py-4" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <span className="text-sm font-medium text-brand-charcoal">{area}</span>
                </div>
              ))}
            </div>
            <Link
              href="/work-with-me"
              className="w-fit px-7 py-3 bg-brand-cta text-brand-charcoal text-sm font-semibold rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
