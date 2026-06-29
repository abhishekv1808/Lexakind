import type { Metadata } from 'next';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { PracticeAreasBrowser } from '@/components/practice-areas/PracticeAreasBrowser';
import { TOTAL_SERVICES, PRACTICE_AREAS } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'All Legal Services',
  description: `Explore ${TOTAL_SERVICES}+ legal services across ${PRACTICE_AREAS.length} practice areas — corporate, family, criminal, property, RERA, cyber crime, consumer, IP, NRI, labour and more. Find the right legal help with Lexakind.`,
  alternates: { canonical: '/practice-areas' },
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blk px-5 pb-16 pt-[140px] md:px-12 md:pb-20 md:pt-[168px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(90% 120% at 80% 0%, #232327 0%, #161618 60%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <SectionLabel>Practice Areas</SectionLabel>
          <h1 className="max-w-[640px] font-display text-[34px] font-medium leading-[1.1] tracking-tight text-white md:text-[52px]">
            All Legal Services
          </h1>
          <p className="mt-5 max-w-[540px] font-body text-[15px] font-normal leading-[1.7] text-[#adadb4] md:text-[16px]">
            {TOTAL_SERVICES}+ services across {PRACTICE_AREAS.length} practice
            areas. Find the right legal help, fast.
          </p>
        </div>
      </section>

      {/* Browser */}
      <section className="bg-white px-5 py-16 md:px-12 md:py-20">
        <PracticeAreasBrowser />
      </section>
    </>
  );
}
