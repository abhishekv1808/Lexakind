import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

const STEPS = [
  {
    title: 'Submit Your Case',
    description:
      'Tell us about your legal matter in a few minutes. Share details securely and get matched to the right expertise.',
    active: true,
  },
  {
    title: 'Advocate Assigned',
    description:
      'A verified advocate specialising in your area reviews your case and reaches out with a clear plan and quote.',
    active: false,
  },
  {
    title: 'Resolution & Closure',
    description:
      'Track progress at every stage through to resolution, with transparent updates until your matter is closed.',
    active: false,
  },
];

export function ProcessSection() {
  return (
    <section className="bg-wht-2 px-5 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-display text-[34px] md:text-[42px] font-bold leading-[1.12] tracking-tight max-w-[480px]">
            Three simple steps to resolution
          </h2>
        </RevealOnScroll>

        <div className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[28px] left-[14%] right-[14%] h-px bg-wht-3" />

          {STEPS.map((step, i) => (
            <RevealOnScroll
              key={step.title}
              delay={i * 0.12}
              className="relative"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-[3px] font-display text-[20px] font-bold text-white ${
                  step.active ? 'bg-ora' : 'bg-blk'
                }`}
              >
                {i + 1}
              </div>
              <h3 className="mt-6 font-display text-base font-semibold leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-[12px] text-muted font-light leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
