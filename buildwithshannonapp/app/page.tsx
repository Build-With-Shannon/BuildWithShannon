import HeroSection from '@/app/components/sections/HeroSection';
import IntroStrip from '@/app/components/sections/IntroStrip';
import FeaturedWorkSection from '@/app/components/sections/FeaturedWorkSection';
import LearnSection from '@/app/components/sections/LearnSection';
import WorkWithMeSection from '@/app/components/sections/WorkWithMeSection';
import ResourcesSection from '@/app/components/sections/ResourcesSection';
import AboutPreviewSection from '@/app/components/sections/AboutPreviewSection';
import FinalCTASection from '@/app/components/sections/FinalCTASection';
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
      <HeroSection content={heroContent} />
      <IntroStrip />
      <FeaturedWorkSection content={featuredWorkContent} />
      <LearnSection content={learnContent} />
      <WorkWithMeSection content={workWithMeContent} />
      <ResourcesSection content={resourcesContent} />
      <AboutPreviewSection content={aboutPreviewContent} />
      <FinalCTASection content={finalCTAContent} />
    </>
  );
}
