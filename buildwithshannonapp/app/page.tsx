import HeroSection from '@/app/components/sections/HeroSection';
import IntroStrip from '@/app/components/sections/IntroStrip';
import FeaturedWorkSection from '@/app/components/sections/FeaturedWorkSection';
import LearnSection from '@/app/components/sections/LearnSection';
import WorkWithMeSection from '@/app/components/sections/WorkWithMeSection';
import ResourcesSection from '@/app/components/sections/ResourcesSection';
import AboutPreviewSection from '@/app/components/sections/AboutPreviewSection';
import FinalCTASection from '@/app/components/sections/FinalCTASection';
import Reveal from '@/app/components/motion/Reveal';
import {
  heroContent,
  featuredWorkContent,
  learnContent,
  workWithMeContent,
  resourcesContent,
  aboutPreviewContent,
  finalCTAContent,
} from '@/app/data';

export default function Home() {
  return (
    <>
      <Reveal>
        <HeroSection content={heroContent} />
      </Reveal>
      <IntroStrip />
      <Reveal delayMs={60}>
        <FeaturedWorkSection content={featuredWorkContent} />
      </Reveal>
      <Reveal delayMs={80}>
        <LearnSection content={learnContent} />
      </Reveal>
      <Reveal delayMs={90}>
        <WorkWithMeSection content={workWithMeContent} />
      </Reveal>
      <Reveal delayMs={100}>
        <ResourcesSection content={resourcesContent} />
      </Reveal>
      <Reveal delayMs={110}>
        <AboutPreviewSection content={aboutPreviewContent} />
      </Reveal>
      <Reveal delayMs={120}>
        <FinalCTASection content={finalCTAContent} />
      </Reveal>
    </>
  );
}
