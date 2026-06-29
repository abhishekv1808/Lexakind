'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Returns scroll progress (0–1) through a pinned (tall + sticky) container.
 * 0 = top of the container just reached the viewport top
 * 1 = the container has been fully scrolled past
 */
export function useScrollProgress<T extends HTMLElement>(
  containerRef: React.RefObject<T | null>,
) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  const calculate = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) {
      setProgress(0);
      return;
    }
    const scrolled = -rect.top;
    const p = Math.max(0, Math.min(1, scrolled / total));
    setProgress(p);
  }, [containerRef]);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(calculate);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    calculate();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [calculate]);

  return progress;
}
