import { SectionLabel } from '@/components/shared/SectionLabel';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { cn } from '@/lib/utils';

const TESTIMONIALS = [
  {
    quote:
      'Lexakind made a stressful property dispute genuinely manageable. The advocate was sharp, responsive, and the pricing was clear from day one.',
    name: 'Rohit Menon',
    role: 'Property owner, Bengaluru',
    highlight: true,
  },
  {
    quote:
      'As an NRI, I was anxious about handling an inheritance matter remotely. The case tracking kept me informed at every step. Highly recommended.',
    name: 'Anita Desai',
    role: 'NRI client, Dubai',
    highlight: false,
  },
  {
    quote:
      'We used Lexakind for our startup incorporation and founder agreements. Professional, fast, and they actually explained things in plain language.',
    name: 'Karan Shah',
    role: 'Founder, FinTech startup',
    highlight: false,
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="bg-blk px-5 md:px-12 py-[72px]">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-display text-[34px] md:text-[42px] font-bold leading-[1.12] tracking-tight text-white max-w-[480px]">
            Trusted by clients across India
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/7 rounded-[4px] overflow-hidden">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll
              key={t.name}
              delay={i * 0.1}
              className={cn('p-8 md:p-9', t.highlight ? 'bg-ora' : 'bg-blk')}
            >
              <p
                className={cn(
                  'font-display text-[36px] leading-none opacity-40',
                  t.highlight ? 'text-white' : 'text-ora',
                )}
              >
                &ldquo;
              </p>
              <p
                className={cn(
                  'mt-3 font-body text-[13px] font-light leading-loose',
                  t.highlight ? 'text-white/90' : 'text-[#cfcfcf]',
                )}
              >
                {t.quote}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-body text-[13px] font-medium',
                    t.highlight
                      ? 'bg-white/20 text-white'
                      : 'bg-ora/15 text-ora',
                  )}
                >
                  {initials(t.name)}
                </div>
                <div>
                  <p
                    className={cn(
                      'font-body text-[14px] font-medium',
                      t.highlight ? 'text-white' : 'text-white',
                    )}
                  >
                    {t.name}
                  </p>
                  <p
                    className={cn(
                      'font-body text-[12px] font-light',
                      t.highlight ? 'text-white/70' : 'text-muted',
                    )}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
