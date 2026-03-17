import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/app/components/PageIntro';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a strategy, technical, or collaboration conversation with Build With Shannon.',
};

const inquiryTypes = [
  {
    title: 'Strategy Inquiry',
    description: 'For brand positioning, offer clarity, or systems planning.',
  },
  {
    title: 'Technical Build Support',
    description: 'For implementation help across platforms, workflows, and smart tools.',
  },
  {
    title: 'Teaching or Speaking',
    description: 'For workshops, collaborations, or educational sessions.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start the Right Conversation"
        description="Use this page as the starting point for working together, exploring a collaboration, or opening a project discussion."
      />

      <section className="bg-brand-off-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="grid gap-4">
            {inquiryTypes.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-card)] border border-brand-soft-gray bg-white px-6 py-6" style={{ boxShadow: 'var(--shadow-card)' }}>
                <h2 className="text-lg font-semibold text-brand-charcoal mb-2">{item.title}</h2>
                <p className="text-sm leading-relaxed text-brand-charcoal/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[var(--radius-card)] border border-brand-soft-gray bg-brand-charcoal px-7 py-8 text-white" style={{ boxShadow: 'var(--shadow-card)' }}>
            <span className="text-xs uppercase tracking-[0.22em] text-brand-violet">Next Step</span>
            <h2 className="text-2xl mt-4 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Let’s map the best way to work together.
            </h2>
            <p className="text-sm leading-relaxed text-white/65 mb-6">
              This page is the contact hub for the brand. If you want, the next pass can turn this into a full inquiry form or booking flow.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/work-with-me"
                className="px-6 py-3 bg-brand-primary text-white text-sm font-semibold rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
              >
                View Services
              </Link>
              <Link
                href="/resources"
                className="px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded-[var(--radius-btn)] hover:bg-white/10 transition-colors"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
