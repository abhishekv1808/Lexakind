'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    q: 'What legal services does Lexakind provide?',
    a: 'Lexakind covers 160+ legal services across 12 practice areas including corporate, civil, criminal, family, property, cyber crime, consumer protection, intellectual property, RERA, NRI services, labour and immigration matters.',
  },
  {
    q: 'How quickly will I be assigned an advocate?',
    a: 'Most clients are matched with a suitable verified advocate within 24 hours of submitting their case. For urgent matters such as bail, we prioritise same-day connections.',
  },
  {
    q: 'Can I track the progress of my case?',
    a: 'Yes. Every case on Lexakind comes with end-to-end tracking, giving you real-time status updates from the first consultation through to final resolution.',
  },
  {
    q: 'Do you handle NRI legal matters?',
    a: 'Absolutely. We have dedicated NRI legal services covering property management, inheritance, power of attorney and dispute resolution, all manageable remotely from anywhere in the world.',
  },
  {
    q: 'How are consultation fees calculated?',
    a: 'Fees are transparent and shared upfront. After reviewing your matter, your advocate provides a clear, itemised quote before any work begins — no hidden charges.',
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-5 md:px-12 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        {/* LEFT */}
        <div className="lg:col-span-1">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-[34px] md:text-[42px] font-bold leading-[1.12] tracking-tight">
            Questions, answered
          </h2>
          <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted max-w-[320px]">
            Everything you need to know about working with Lexakind. Can&apos;t
            find what you&apos;re looking for? Reach out directly.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center bg-ora text-white font-body text-[13px] font-medium tracking-[0.02em] px-5 py-3 rounded-[3px] hover:bg-ora-h transition-colors"
          >
            Ask a question
          </Link>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="border-b border-wht-3">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex items-center justify-between w-full py-5 text-left gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-body text-[14px] font-medium text-blk">
                    {faq.q}
                  </span>
                  <Plus
                    size={18}
                    className={cn(
                      'text-ora flex-shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 font-body text-[13px] text-muted font-light leading-relaxed max-w-[560px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
