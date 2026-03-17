interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-brand-off-white border-b border-brand-soft-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-3xl flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
            {eyebrow}
          </span>
          <h1
            className="text-4xl md:text-6xl text-brand-charcoal leading-[0.95] tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-brand-charcoal/70">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
