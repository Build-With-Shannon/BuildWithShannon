import Link from 'next/link';
import { AboutPreviewSection as AboutPreviewContent } from '@/app/data/types';

interface AboutPreviewSectionProps {
  content: AboutPreviewContent;
}

export default function AboutPreviewSection({ content }: AboutPreviewSectionProps) {
  return (
    <section className="bg-brand-soft-gray/20 py-24 border-y border-brand-soft-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — portrait */}
        <div className="flex justify-center md:justify-start">
          <div
            className="w-72 h-80 rounded-[var(--radius-card)] bg-gradient-to-br from-brand-soft-gray to-brand-off-white border border-brand-soft-gray flex items-center justify-center"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <span className="text-xs text-brand-charcoal/30 uppercase tracking-wider font-medium">
              Portrait
            </span>
          </div>
        </div>

        {/* Right — bio + CTA */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-brand-charcoal tracking-tight">
            {content.headline}
          </h2>
          <p className="text-base text-brand-charcoal/70 leading-relaxed">
            {content.description}
          </p>
          <Link
            href={content.ctaButton.href}
            className="w-fit px-7 py-3 border-2 border-brand-primary text-brand-primary text-sm font-semibold rounded-[var(--radius-btn)] hover:bg-brand-primary hover:text-white transition-colors"
          >
            {content.ctaButton.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
