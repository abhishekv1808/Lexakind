'use client';

import { useState } from 'react';
import { ReactLenis } from 'lenis/react';

/**
 * Global smooth-scroll provider (Lenis).
 * Mounted at the root so the whole site shares one momentum scroll.
 * Respects prefers-reduced-motion by disabling wheel smoothing (native scroll).
 * Renders no extra DOM in `root` mode, so it is SSR-safe and won't shift layout.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: !reduced,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
