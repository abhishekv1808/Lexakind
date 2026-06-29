'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, Mail } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';

const TABS = {
  Mission: 'To make quality legal help accessible, transparent and stress-free for every Indian — connecting people with verified advocates who treat each case with the diligence it deserves.',
  Vision: 'To become India\'s most trusted legal platform, where finding the right lawyer is as simple and reliable as it should be, backed by technology and genuine human expertise.',
  Values: 'Integrity in every interaction, clarity in every quote, and accountability at every stage. We measure success by the outcomes and peace of mind we deliver to our clients.',
};

const CONTACT_ROWS = [
  { icon: Phone, label: 'Call us', value: SITE.phoneDisplay },
  { icon: Clock, label: 'Working hours', value: SITE.hours },
  { icon: Mail, label: 'Email us', value: SITE.email },
];

type TabKey = keyof typeof TABS;

export function AboutSection() {
  const [active, setActive] = useState<TabKey>('Mission');

  return (
    <section className="bg-blk px-5 md:px-12 py-[72px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT */}
        <div>
          <SectionLabel>About Lexakind</SectionLabel>
          <h2 className="font-display text-[34px] md:text-[42px] font-bold leading-[1.12] tracking-tight text-white max-w-[440px]">
            A modern legal partner, grounded in trust
          </h2>

          {/* Tabs */}
          <div className="mt-8 flex gap-8 border-b border-white/10">
            {(Object.keys(TABS) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={cn(
                  'pb-3 font-body text-[14px] font-medium transition-colors -mb-px border-b-2',
                  active === tab
                    ? 'text-ora border-ora'
                    : 'text-muted-2 border-transparent hover:text-white',
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-body text-[13px] text-[#aaa] font-light leading-loose max-w-[460px]"
              >
                {TABS[active]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-blk-3 rounded-[4px] p-8 md:p-10">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-display text-[48px] text-ora font-bold leading-none">
                160+
              </p>
              <p className="mt-2 font-body text-[13px] text-muted font-light">
                Legal services offered
              </p>
            </div>
            <div>
              <p className="font-display text-[48px] text-ora font-bold leading-none">
                4,000+
              </p>
              <p className="mt-2 font-body text-[13px] text-muted font-light">
                Clients represented
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/4 border border-white/8 rounded-[4px] divide-y divide-white/8">
            {CONTACT_ROWS.map((row) => (
              <div key={row.label} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 bg-ora flex items-center justify-center rounded-[3px] flex-shrink-0">
                  <row.icon size={17} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.12em] text-muted-2">
                    {row.label}
                  </p>
                  <p className="font-body text-[14px] text-white font-light">
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
