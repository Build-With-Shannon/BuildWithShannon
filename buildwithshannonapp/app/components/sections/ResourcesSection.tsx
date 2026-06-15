import React from 'react';
import { BookOpen, FileText, PlayCircle } from 'lucide-react';
import { ResourcesSection as ResourcesContent } from '@/app/data/types';

interface ResourcesSectionProps {
  content: ResourcesContent;
}

const typeConfig: Record<string, { icon: React.ReactNode; bg: string; iconColor: string }> = {
  Guide:    { icon: <BookOpen size={28} />,    bg: 'bg-brand-primary/10',  iconColor: 'text-brand-primary' },
  Template: { icon: <FileText size={28} />,    bg: 'bg-brand-violet/10',   iconColor: 'text-brand-violet' },
  Course:   { icon: <PlayCircle size={28} />,  bg: 'bg-brand-cta/10',      iconColor: 'text-brand-cta' },
};

export default function ResourcesSection({ content }: ResourcesSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="motion-enter mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
            {content.headline}
          </h2>
          <div className="mt-3 h-px w-12 bg-brand-primary" />
        </div>

        <div className="motion-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[var(--radius-card)] border border-brand-soft-gray overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              {/* Icon cover */}
              {(() => {
                const cfg = typeConfig[card.type] ?? typeConfig['Guide'];
                return (
                  <div className={`h-40 ${cfg.bg} flex items-center justify-center`}>
                    <span className={cfg.iconColor}>{cfg.icon}</span>
                  </div>
                );
              })()}
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
