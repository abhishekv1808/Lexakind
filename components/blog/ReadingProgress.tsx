'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Thin progress bar that fills as the reader scrolls through the target
 * article element. Fixed to the very top of the viewport.
 */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const update = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = document.getElementById(targetId);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elTop = rect.top + window.scrollY;
        const denom = el.offsetHeight - window.innerHeight;
        const p = denom > 0 ? (window.scrollY - elTop) / denom : 0;
        setProgress(Math.max(0, Math.min(1, p)));
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      cancelAnimationFrame(rafRef.current);
    };
  }, [targetId]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[210] h-[3px] bg-transparent"
    >
      <div
        className="h-full origin-left bg-ora"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
