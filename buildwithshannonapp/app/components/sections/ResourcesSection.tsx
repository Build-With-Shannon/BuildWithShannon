import { ResourcesSection as ResourcesContent } from '@/app/data/types';

interface ResourcesSectionProps {
  content: ResourcesContent;
}

export default function ResourcesSection({ content }: ResourcesSectionProps) {
  return (
    <section className="bg-brand-off-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
            {content.headline}
          </h2>
          <div className="mt-3 h-px w-12 bg-brand-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[var(--radius-card)] border border-brand-soft-gray overflow-hidden"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              {/* Cover placeholder */}
              <div className="h-48 bg-gradient-to-br from-brand-primary/10 to-brand-violet/10 flex items-center justify-center">
                <span className="text-xs text-brand-charcoal/30 uppercase tracking-wider font-medium">
                  Cover Image
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                  {card.type}
                </span>
                <h3 className="text-base font-semibold text-brand-charcoal leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
