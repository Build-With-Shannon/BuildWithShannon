import { BookOpen, FileText, Youtube } from 'lucide-react';

export default function IntroStrip() {
  const items = [
    { label: 'Tutorials', icon: BookOpen },
    { label: 'Guides', icon: FileText },
    { label: 'YouTube', icon: Youtube },
  ];

  return (
    <section className="bg-brand-off-white border-y border-brand-soft-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left 40% */}
        <div className="md:w-[40%] flex flex-col gap-2">
          <span className="text-lg font-semibold text-brand-charcoal tracking-tight">
            Build with Shannon
          </span>
          <div className="h-px w-16 bg-brand-primary" />
        </div>

        {/* Right 60% */}
        <div className="md:w-[60%] flex flex-wrap gap-8 items-center">
          {items.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2 text-brand-charcoal">
              <Icon size={18} className="text-brand-primary" strokeWidth={1.75} />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
