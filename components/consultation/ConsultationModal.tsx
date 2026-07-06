'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { ConsultationWidget } from '@/components/consultation/ConsultationWidget';

interface OpenOptions {
  /** Practice-area slug to preselect. */
  practiceArea?: string;
}

interface ConsultationModalContextValue {
  openConsultation: (options?: OpenOptions) => void;
  closeConsultation: () => void;
}

const ConsultationModalContext =
  createContext<ConsultationModalContextValue | null>(null);

/**
 * Opens the multi-step consultation booking widget in a modal from anywhere
 * in the tree. Mount <ConsultationModalProvider> once (in the public layout);
 * call useConsultationModal().openConsultation() from any client component,
 * or drop a <ConsultationTrigger> into a server component.
 */
export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) {
    throw new Error(
      'useConsultationModal must be used within a <ConsultationModalProvider>',
    );
  }
  return ctx;
}

export function ConsultationModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [practiceArea, setPracticeArea] = useState('');

  const openConsultation = useCallback((options?: OpenOptions) => {
    setPracticeArea(options?.practiceArea ?? '');
    setOpen(true);
  }, []);

  const closeConsultation = useCallback(() => setOpen(false), []);

  // Lock scroll + ESC to close while open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <ConsultationModalContext.Provider
      value={{ openConsultation, closeConsultation }}
    >
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeConsultation}
            className="fixed inset-0 z-[400] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm md:items-center"
            role="dialog"
            aria-modal="true"
            aria-label="Book a consultation"
          >
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto w-full max-w-[640px]"
            >
              <button
                onClick={closeConsultation}
                aria-label="Close"
                className="absolute -top-3 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blk shadow-md transition-colors hover:bg-wht-2 md:-right-3 md:-top-3"
              >
                <X size={16} />
              </button>
              {/* Remount the widget per open so preselection + step reset apply. */}
              <ConsultationWidget
                key={open ? `${practiceArea || 'none'}` : 'closed'}
                defaultPracticeArea={practiceArea}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ConsultationModalContext.Provider>
  );
}
