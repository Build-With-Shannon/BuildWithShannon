import Link from 'next/link';
import { Target, Layers, Code2, GraduationCap } from 'lucide-react';
import { WorkWithMeSection as WorkWithMeContent } from '@/app/data/types';

interface WorkWithMeSectionProps {
  content: WorkWithMeContent;
}

const serviceIcons = [
  <Target size={20} />,
  <Layers size={20} />,
  <Code2 size={20} />,
  <GraduationCap size={20} />,
];

export default function WorkWithMeSection({ content }: WorkWithMeSectionProps) {
  return (
    <section className="dark-section py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — positioning copy */}
        <div className="motion-enter flex flex-col gap-6">
          <span className="eyebrow text-brand-violet">
            Work With Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {content.headline}
          </h2>
          <p className="text-base text-white/60 leading-relaxed max-w-sm">
            {content.description}
          </p>
          <Link
            href="/work-with-me"
            className="w-fit px-7 py-3 bg-brand-cta text-brand-charcoal text-sm font-semibold rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </Link>
        </div>

        {/* Right — service blocks */}
        <div className="motion-stagger flex flex-col gap-4">
          {content.services.map((service, i) => (
            <div
              key={service.id}
              className="p-6 rounded-[var(--radius-card)] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 flex gap-4 items-start"
            >
              <div className="mt-0.5 shrink-0 text-brand-primary">
                {serviceIcons[i] ?? <Target size={20} />}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
