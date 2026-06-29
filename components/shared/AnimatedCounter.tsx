'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
  /** Override number formatting (default: en-IN with thousands separators). */
  format?: (n: number) => string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 1800,
  format,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(
    () =>
      spring.on('change', (v) => {
        if (ref.current) {
          const fmt = format ?? ((n: number) => n.toLocaleString('en-IN'));
          ref.current.textContent = `${fmt(Math.floor(v))}${suffix}`;
        }
      }),
    [spring, suffix, format],
  );

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}
