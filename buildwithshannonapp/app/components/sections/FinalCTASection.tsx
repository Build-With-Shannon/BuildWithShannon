import Link from 'next/link';
import { FinalCTASection as FinalCTAContent } from '@/app/data/types';

interface FinalCTASectionProps {
  content: FinalCTAContent;
}

export default function FinalCTASection({ content }: FinalCTASectionProps) {
  return (
    <section
      className="py-28 text-center"
      style={{ background: 'linear-gradient(135deg, #0a0718 0%, #1a1035 100%)' }}
    >
      <div className="motion-enter max-w-3xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Decorative line */}
        <div className="h-px w-12 bg-brand-violet" />

        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {content.headline}
        </h2>
        <p className="text-base text-white/60 leading-relaxed max-w-xl">
          {content.description}
        </p>

        <div className="motion-stagger flex flex-wrap gap-4 justify-center">
          {content.buttons.map((btn) =>
            btn.variant === 'primary' ? (
              <Link
                key={btn.label}
                href={btn.href}
                className="px-8 py-3 bg-brand-primary text-white text-sm font-semibold rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
              >
                {btn.label}
              </Link>
            ) : (
              <Link
                key={btn.label}
                href={btn.href}
                className="px-8 py-3 bg-white/10 text-white text-sm font-semibold rounded-[var(--radius-btn)] border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                {btn.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
