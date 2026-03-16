import Link from 'next/link';
import { FeaturedWorkSection as FeaturedWorkContent } from '@/app/data/types';

interface FeaturedWorkSectionProps {
  content: FeaturedWorkContent;
}

export default function FeaturedWorkSection({ content }: FeaturedWorkSectionProps) {
  return (
    <section id="featured-work" className="bg-brand-off-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            {content.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight leading-tight">
            {content.headline}
          </h2>
          <p className="text-base text-brand-charcoal/70 leading-relaxed max-w-sm">
            {content.description}
          </p>
          <Link
            href={content.ctaButton.href}
            className="w-fit px-7 py-3 bg-brand-primary text-white text-sm font-semibold rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
          >
            {content.ctaButton.label}
          </Link>
        </div>

        {/* Right — project cards */}
        <div className="flex flex-col gap-6">
          {content.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[var(--radius-card)] border border-brand-soft-gray overflow-hidden"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-brand-soft-gray to-brand-off-white flex items-center justify-center">
                <span className="text-xs text-brand-charcoal/30 uppercase tracking-wider font-medium">
                  Project Image
                </span>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                  {project.tag}
                </span>
                <h3 className="text-lg font-semibold text-brand-charcoal leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="w-fit text-sm font-semibold text-brand-primary hover:text-brand-violet transition-colors mt-1"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
