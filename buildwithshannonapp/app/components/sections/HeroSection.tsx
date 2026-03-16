import Link from 'next/link';
import { HeroContent } from '@/app/data/types';

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0718 0%, #0e0b1f 40%, #1a1035 70%, #120d2a 100%)' }}
    >
      {/* Ambient light streaks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-full h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, #B7A6F8, transparent)' }} />
        <div className="absolute top-[55%] left-0 w-full h-px opacity-5"
          style={{ background: 'linear-gradient(90deg, transparent, #6C3EF4, transparent)' }} />
        <div className="absolute bottom-1/3 left-0 w-2/3 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, #B7A6F8, transparent)' }} />
        {/* Glow blob */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #6C3EF4, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — text block */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1 leading-none">
            {content.lines.map((line, i) => (
              <span
                key={i}
                className={`text-white block leading-tight tracking-tight ${
                  line.style === 'bold'
                    ? 'text-5xl md:text-7xl font-bold'
                    : line.style === 'semibold'
                    ? 'text-5xl md:text-7xl font-semibold'
                    : 'text-5xl md:text-7xl font-light'
                }`}
              >
                {line.text}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {content.buttons.map((btn) =>
              btn.variant === 'primary' ? (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-7 py-3 bg-brand-primary text-white text-sm font-semibold rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
                >
                  {btn.label}
                </Link>
              ) : (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-7 py-3 bg-white/10 text-white text-sm font-semibold rounded-[var(--radius-btn)] border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  {btn.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right — portrait */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative w-80 h-[480px] md:w-96 md:h-[560px] rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #1f1545 0%, #2d1f6e 50%, #1a1035 100%)', boxShadow: '0 0 80px rgba(108,62,244,0.25)' }}
          >
            {/* Placeholder for portrait */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #6C3EF4, #B7A6F8)' }} />
                <p className="text-brand-violet text-sm font-medium tracking-wider uppercase">Portrait</p>
              </div>
            </div>
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #0e0b1f, transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
