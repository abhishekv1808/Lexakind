'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = '', duration = 1800 }: Props) {
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
          ref.current.textContent = `${Math.floor(v).toLocaleString('en-IN')}${suffix}`;
        }
      }),
    [spring, suffix],
  );

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}
