'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface Props {
  open: boolean;
  onClose: () => void;
  onOpenServices?: () => void;
}

export function MobileMenu({ open, onClose, onOpenServices }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          data-lenis-prevent
          className="fixed inset-0 z-[210] overflow-y-auto bg-blk md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between h-[60px] px-5 border-b border-white/10">
            <span className="font-display font-bold text-[22px] text-white">
              LEX<span className="text-ora">A</span>KIND
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-white p-2 -mr-2"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-5 pt-8">
            {NAV_LINKS.map((link, i) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              const isServices =
                link.href === '/practice-areas' && onOpenServices;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  {isServices ? (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenServices();
                      }}
                      className="flex w-full items-center justify-between py-4 font-display text-2xl font-semibold border-b border-white/10 text-white transition-colors hover:text-ora"
                    >
                      {link.label}
                      <ChevronRight size={22} className="text-muted-2" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'block py-4 font-display text-2xl font-semibold border-b border-white/10 transition-colors',
                        active ? 'text-ora' : 'text-white hover:text-ora',
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}

            <Link
              href="/consultation"
              onClick={onClose}
              className="mt-8 inline-flex items-center justify-center bg-ora text-white font-body text-[14px] font-medium tracking-[0.02em] px-6 py-3.5 rounded-[3px] hover:bg-ora-h transition-colors"
            >
              Book Consultation
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
