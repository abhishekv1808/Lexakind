'use client';

import { Phone, CalendarCheck } from 'lucide-react';
import { SITE, WHATSAPP_LINK } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';
import { useConsultationModal } from '@/components/consultation/ConsultationModal';

/**
 * Thumb-reach conversion bar for mobile. Fixed to the bottom of the
 * viewport, hidden on desktop (where the floating WhatsApp button + nav CTA
 * cover the same intents).
 */
export function MobileCTABar() {
  const { openConsultation } = useConsultationModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-blk/95 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-3 gap-px">
        <a
          href={`tel:${SITE.phone}`}
          onClick={() => trackEvent('click_call', { source: 'mobile_cta_bar' })}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white active:bg-white/5"
        >
          <Phone size={18} className="text-ora" />
          <span className="font-body text-[11px] font-medium">Call</span>
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent('click_whatsapp', { source: 'mobile_cta_bar' })
          }
          className="flex flex-col items-center justify-center gap-1 border-x border-white/10 py-2.5 text-white active:bg-white/5"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.035z" />
          </svg>
          <span className="font-body text-[11px] font-medium">WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => {
            trackEvent('click_book', { source: 'mobile_cta_bar' });
            openConsultation();
          }}
          className="flex flex-col items-center justify-center gap-1 bg-ora py-2.5 text-white active:bg-ora-h"
        >
          <CalendarCheck size={18} />
          <span className="font-body text-[11px] font-semibold">Book</span>
        </button>
      </div>
    </div>
  );
}
