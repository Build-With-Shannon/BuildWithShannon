import Link from 'next/link';
import { AboutPreviewSection as AboutPreviewContent } from '@/app/data/types';

interface AboutPreviewSectionProps {
  content: AboutPreviewContent;
}

export default function AboutPreviewSection({ content }: AboutPreviewSectionProps) {
  return (
    <section className="bg-brand-off-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — portrait */}
        <div className="motion-enter flex justify-center md:justify-start">
          <div
            className="dark-section w-72 h-80 rounded-[var(--radius-card)] border border-white/10 flex items-center justify-center"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <span
              className="text-white select-none"
              style={{ fontSize: '7rem', fontFamily: 'var(--font-heading)', fontWeight: 800, opacity: 0.18, lineHeight: 1 }}
            >
              SR
            </span>
          </div>
        </div>

        {/* Right — bio + CTA */}
        <div className="motion-enter motion-delay-1 flex flex-col gap-6">
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
