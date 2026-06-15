import Link from 'next/link';
import { LearnSection as LearnContent } from '@/app/data/types';

const typeLabel: Record<string, string> = {
  tutorial: 'Tutorial',
  guide: 'Guide',
  video: 'Video',
};

interface LearnSectionProps {
  content: LearnContent;
}

export default function LearnSection({ content }: LearnSectionProps) {
  return (
    <section className="bg-brand-off-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="motion-enter mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight mb-4">
            {content.headline}
          </h2>
          <p className="text-base text-brand-charcoal/70 max-w-xl leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="motion-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group bg-white rounded-[var(--radius-card)] border border-brand-soft-gray overflow-hidden hover:border-brand-primary transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              {/* Thumbnail */}
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${card.thumbnailUrl ?? '/images/learn1.png'})`,
                }}
              >
                <div className="h-full w-full bg-brand-charcoal/10" />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                  {typeLabel[card.type] ?? card.type}
                </span>
                <h3 className="text-base font-semibold text-brand-charcoal leading-snug group-hover:text-brand-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
