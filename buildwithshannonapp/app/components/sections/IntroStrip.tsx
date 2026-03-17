import { Playfair_Display } from 'next/font/google';
import { BookOpen, FileText, Youtube } from 'lucide-react';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function IntroStrip() {
  return (
    <section className="bg-brand-off-white border-y border-brand-soft-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">
        <div className="motion-enter mx-auto flex w-full flex-col items-center justify-center gap-3 md:w-full md:flex-row md:flex-wrap md:gap-4 lg:gap-5 xl:w-fit xl:flex-nowrap xl:gap-6">
          {/* Build with Shannon + Decorative Line */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <span
              className={`${playfairDisplay.className} whitespace-nowrap text-3xl font-semibold leading-none tracking-[0.01em] text-brand-charcoal md:text-4xl`}
            >
              Build <span className="italic">with</span> Shannon
            </span>
            <div className="hidden h-0.5 w-24 md:w-32 rounded-full bg-brand-primary opacity-70 xl:block"></div>
          </div>

          {/* Tutorials | Guides | YouTube */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-6 lg:gap-7 xl:flex-nowrap xl:gap-8 flex-shrink-0">
            {/* Tutorials */}
            <div className="flex items-center gap-2 text-brand-charcoal">
              <BookOpen size={20} className="text-brand-primary/85 shrink-0" strokeWidth={1.8} />
              <span className="text-xl md:text-2xl font-medium whitespace-nowrap">
                Tutorials
              </span>
            </div>

            {/* Separator */}
            <div className="hidden h-6 w-px bg-brand-soft-gray/60 xl:block"></div>

            {/* Guides */}
            <div className="flex items-center gap-2 text-brand-charcoal">
              <FileText size={20} className="text-brand-primary/85 shrink-0" strokeWidth={1.8} />
              <span className="text-xl md:text-2xl font-medium whitespace-nowrap">
                Guides
              </span>
            </div>

            {/* Separator */}
            <div className="hidden h-6 w-px bg-brand-soft-gray/60 xl:block"></div>

            {/* YouTube */}
            <div className="flex items-center gap-2 text-brand-charcoal">
              <Youtube size={20} className="text-brand-primary/85 shrink-0" strokeWidth={1.8} />
              <span className="text-xl md:text-2xl font-medium whitespace-nowrap">
                YouTube
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
