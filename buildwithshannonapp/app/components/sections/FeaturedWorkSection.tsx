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
        <div className="motion-enter flex flex-col gap-6">
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
        <div className="motion-stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
          {content.projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative h-56 rounded-[var(--radius-card)] border border-brand-soft-gray overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              {/* Image placeholder */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `url(${project.imageUrl ?? '/images/image.png'})`,
                }}
              >
                <div className="absolute inset-0 bg-brand-charcoal/20" />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-charcoal/90 to-transparent" />
              <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white leading-snug">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
