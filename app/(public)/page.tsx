import { HeroSection } from '@/components/home/HeroSection';
import { ServicesMarquee } from '@/components/home/ServicesMarquee';
import { TrustBar } from '@/components/home/TrustBar';
import { WhySection } from '@/components/home/WhySection';
import { JusticeScaleReveal } from '@/components/justice/JusticeScaleReveal';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { PracticeAreasGrid } from '@/components/home/PracticeAreasGrid';
import { StatsSection } from '@/components/home/StatsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ExpertiseTabs } from '@/components/home/ExpertiseTabs';
import { TeamSection } from '@/components/home/TeamSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { Insights } from '@/components/home/Insights';
import { CTABanner } from '@/components/home/CTABanner';
import type { Metadata } from 'next';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        schema={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
      />
      <HeroSection />
      <TrustBar />
      <WhySection />
      <JusticeScaleReveal />
      <AboutSection />
      <WhyChooseUs />
      <ServicesMarquee />
      <PracticeAreasGrid />
      <StatsSection />
      <ProcessSection />
      <ExpertiseTabs />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <Insights />
      <CTABanner />
    </>
  );
}
