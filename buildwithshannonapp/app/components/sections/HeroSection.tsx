import Link from 'next/link';
import { HeroContent } from '@/app/data/types';

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[72vh] flex items-center overflow-hidden md:min-h-[76vh]"
      style={{
        backgroundImage:
          "url('/images/herobgimg.jpg'), linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full py-12 md:py-14">
        <div className="motion-enter flex flex-col gap-6 md:gap-7">
          <div className="flex flex-col gap-1 leading-none">
            {content.lines.map((line, i) => (
              <span
                key={i}
                className={`text-white block leading-tight tracking-tight ${
                  line.style === 'bold'
                    ? 'text-4xl md:text-6xl font-bold'
                    : line.style === 'semibold'
                    ? 'text-4xl md:text-6xl font-semibold'
                    : 'text-4xl md:text-6xl font-light'
                }`}
              >
                {line.text}
              </span>
            ))}
          </div>

          <div className="motion-enter motion-delay-2 flex flex-wrap gap-4">
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
      </div>
    </section>
  );
}
