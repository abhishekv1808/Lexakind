'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { Menu, Phone, Scale, ChevronDown } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';
import { MegaMenu } from './MegaMenu';
import { MobileServicesMenu } from './MobileServicesMenu';

const SERVICES_HREF = '/practice-areas';

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activePA, setActivePA] = useState('corporate-law');

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 80);
  });

  // Close the mega menu on route change.
  useEffect(() => {
    setMegaOpen(false);
  }, [pathname]);

  // ESC closes the mega menu.
  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [megaOpen]);

  // Hover-to-open with a small close delay so the cursor can travel
  // from the nav link down into the panel without it snapping shut.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMega = () => {
    cancelClose();
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };
  useEffect(() => () => cancelClose(), []);

  const solid = scrolled || megaOpen;

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-[200] transition-colors duration-300',
          solid ? 'bg-blk/95 backdrop-blur-sm shadow-sm' : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-[64px] w-full max-w-6xl items-center justify-between px-5 md:h-[76px] md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-ora text-white">
              <Scale size={19} />
            </span>
            <span className="font-display font-bold text-[24px] text-white tracking-[0.04em]">
              LEXAKIND
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {NAV_LINKS.map((link) => {
              const isServices = link.href === SERVICES_HREF;
              const active = isServices
                ? megaOpen || pathname.startsWith(SERVICES_HREF)
                : link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              if (isServices) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleClose}
                    onFocus={openMega}
                    onClick={() => setMegaOpen(false)}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    className={cn(
                      'flex items-center gap-1 font-body text-[15px] font-medium tracking-[0.01em] transition-colors',
                      active ? 'text-ora' : 'text-white hover:text-ora',
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        'transition-transform duration-200',
                        megaOpen && 'rotate-180',
                      )}
                    />
                  </Link>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-body text-[15px] font-medium tracking-[0.01em] transition-colors',
                    active ? 'text-ora' : 'text-white hover:text-ora',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Need help + menu toggle */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden sm:flex items-center gap-2.5 group"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-white">
                <Phone size={18} />
              </span>
              <span className="leading-tight">
                <span className="block font-body text-[12px] font-normal text-white/55">
                  Need Help?
                </span>
                <span className="block font-body text-[15px] font-semibold text-white">
                  {SITE.phoneDisplay}
                </span>
              </span>
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="text-white p-2 -mr-2 hover:text-ora transition-colors"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <MegaMenu
              activeSlug={activePA}
              onActiveChange={setActivePA}
              onClose={() => setMegaOpen(false)}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Overlay behind mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setMegaOpen(false)}
            onMouseEnter={scheduleClose}
            className="fixed inset-0 top-[76px] z-[150] hidden bg-black/30 md:block"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenServices={() => setServicesOpen(true)}
      />
      <MobileServicesMenu
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />
    </>
  );
}
