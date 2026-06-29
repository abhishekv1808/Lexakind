import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { WhySection } from '@/components/home/WhySection';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { PracticeAreasGrid } from '@/components/home/PracticeAreasGrid';
import { StatsSection } from '@/components/home/StatsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ExpertiseTabs } from '@/components/home/ExpertiseTabs';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { Insights } from '@/components/home/Insights';
import { CTABanner } from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhySection />
      <AboutSection />
      <WhyChooseUs />
      <PracticeAreasGrid />
      <StatsSection />
      <ProcessSection />
      <ExpertiseTabs />
      <TestimonialsSection />
      <FAQSection />
      <Insights />
      <CTABanner />
    </>
  );
}
