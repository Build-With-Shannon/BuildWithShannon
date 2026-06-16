import Link from 'next/link';
import { HeroContent } from '@/app/data/types';

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="dark-section min-h-[52vh] flex items-center md:min-h-[56vh]">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full py-10 md:py-14 pb-24 md:pb-28">
        <div className="motion-enter flex flex-col gap-6 max-w-5xl">

          {content.eyebrow && (
            <span className="eyebrow text-brand-primary">
              {content.eyebrow}
            </span>
          )}

          <h1 className="flex flex-col gap-1 leading-tight tracking-tight">
            {content.lines.map((line, i) => (
              <span
                key={i}
                className={`block ${
                  i === 0
                    ? 'text-4xl md:text-5xl font-bold text-white whitespace-nowrap'
                    : 'text-3xl md:text-4xl font-semibold text-white/60'
                }`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          {content.description && (
            <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-xl">
              {content.description}
            </p>
          )}

          <div className="motion-enter motion-delay-2 flex flex-wrap gap-4">
            {content.buttons.map((btn) =>
              btn.variant === 'primary' ? (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-7 py-3 bg-brand-cta text-brand-charcoal text-sm font-semibold rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
                >
                  {btn.label}
                </Link>
              ) : (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-7 py-3 bg-white/10 text-white text-sm font-semibold rounded-[var(--radius-btn)] border border-white/20 hover:bg-white/20 transition-colors"
                >
                  {btn.label}
                </Link>
              )
            )}
          </div>

        </div>
      </div>

      {/* Tagline band — diagonal off-white cut carved into the hero's bottom */}
      <div className="absolute inset-x-0 bottom-0 h-14" style={{ zIndex: 1 }}>
        <div
          className="absolute inset-0 bg-[#F4F3F9]"
          style={{ clipPath: 'polygon(52% 0%, 100% 0%, 100% 100%, 46% 100%)' }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="flex-none" style={{ width: '56%' }} />
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3D3B4F] whitespace-nowrap">
            Real builds.&nbsp;&nbsp;Real understanding.&nbsp;&nbsp;No black boxes.
          </p>
        </div>
      </div>
    </section>
  );
}
