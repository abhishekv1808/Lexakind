'use client';

import { useEffect, useRef, useCallback } from 'react';
import { TOTAL_FRAMES } from '@/lib/justice-content';

// Two pre-generated WebP sets (see scripts/generate-frame-sets.mjs):
//   desktop/ 1280w ~24KB/frame (192 frames ≈ 4.6MB)
//   mobile/   750w ~13KB/frame (every 2nd frame ≈ 1.25MB)
// Source JPGs remain in /frames/justice/ as a rollback path only.
const FRAME_PATH = (variant: 'desktop' | 'mobile', n: number) =>
  `/frames/justice/${variant}/frame_${String(n).padStart(3, '0')}.webp`;

interface NetworkInformationLike {
  saveData?: boolean;
  effectiveType?: string;
}

interface JusticeCanvasBaseProps {
  progress: number;
  className?: string;
  // 'right' = show the right portion of the image (statue sits on the right)
  objectPosition?: 'center' | 'right' | 'left';
}

export function JusticeCanvasBase({
  progress,
  className = '',
  objectPosition = 'right',
}: JusticeCanvasBaseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | undefined)[]>([]);
  const currentFrameRef = useRef(-1);
  const desiredFrameRef = useRef(0);
  // Frame stride: 1 = every frame (desktop), 2 = mobile, 4 = Save-Data/2G.
  const stepRef = useRef(1);
  const variantRef = useRef<'desktop' | 'mobile'>('desktop');
  const preloadStartedRef = useRef(false);

  // ── Draw frame (object-fit: cover) ─────────────────────────
  // Snaps the requested index to the loading stride, then falls back to the
  // nearest decoded frame so scrubbing never blanks the canvas mid-load.
  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const step = stepRef.current;
      const images = imagesRef.current;
      const clamp = (n: number) =>
        Math.max(0, Math.min(TOTAL_FRAMES - 1, n));
      const ready = (i: number) =>
        !!images[i]?.complete && images[i]!.naturalWidth > 0;

      let idx = clamp(Math.round(index / step) * step);
      if (!ready(idx)) {
        let found = -1;
        for (let d = step; d < TOTAL_FRAMES; d += step) {
          if (idx - d >= 0 && ready(idx - d)) {
            found = idx - d;
            break;
          }
          if (idx + d < TOTAL_FRAMES && ready(idx + d)) {
            found = idx + d;
            break;
          }
        }
        if (found === -1) return; // nothing decoded yet
        idx = found;
      }
      const img = images[idx]!;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const canvasAR = cw / ch;
      const imgAR = iw / ih;
      let sx = 0,
        sy = 0,
        sw = iw,
        sh = ih;

      if (imgAR > canvasAR) {
        // Image wider — crop horizontally
        sw = ih * canvasAR;
        sx =
          objectPosition === 'right'
            ? iw - sw // show the right side (statue)
            : objectPosition === 'left'
              ? 0
              : (iw - sw) / 2;
      } else {
        // Image taller — crop top/bottom
        sh = iw / canvasAR;
        sy = (ih - sh) / 2;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    },
    [objectPosition],
  );

  const loadFrame = useCallback(
    (i: number) => {
      if (imagesRef.current[i]) return;
      const img = new Image();
      img.decoding = 'async';
      img.src = FRAME_PATH(variantRef.current, i + 1);
      img.onload = () => {
        // If this is the frame the scroll position currently wants, paint it.
        const step = stepRef.current;
        const wanted = Math.round(desiredFrameRef.current / step) * step;
        if (wanted === i || currentFrameRef.current === -1) {
          requestAnimationFrame(() => drawFrame(desiredFrameRef.current));
        }
      };
      imagesRef.current[i] = img;
    },
    [drawFrame],
  );

  // ── Init: pick variant/stride, eager-load only frame 1, and defer the
  //    full sequence until the section approaches the viewport ────────────
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const conn = (navigator as { connection?: NetworkInformationLike })
      .connection;
    const constrained =
      conn?.saveData === true || /(^|-)2g$/.test(conn?.effectiveType ?? '');

    // Variant/stride are locked in at first load; a mid-session resize keeps
    // the initially chosen set (acceptable trade-off vs. re-downloading).
    variantRef.current = isMobile ? 'mobile' : 'desktop';
    stepRef.current = constrained ? 4 : isMobile ? 2 : 1;

    // One ~13-25KB image so the canvas paints immediately when reached.
    loadFrame(0);

    const startPreload = () => {
      if (preloadStartedRef.current) return;
      preloadStartedRef.current = true;
      for (let i = 0; i < TOTAL_FRAMES; i += stepRef.current) {
        loadFrame(i);
      }
    };

    const canvas = canvasRef.current;
    if (!canvas || typeof IntersectionObserver === 'undefined') {
      startPreload();
      return;
    }

    // Begin fetching when the section is within 1.5 viewports of entering.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          startPreload();
          io.disconnect();
        }
      },
      { rootMargin: '150% 0px 150% 0px' },
    );
    io.observe(canvas);
    return () => io.disconnect();
  }, [loadFrame]);

  // ── Update canvas when progress changes ────────────────────
  useEffect(() => {
    const targetFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(progress * TOTAL_FRAMES),
    );
    desiredFrameRef.current = targetFrame;

    const step = stepRef.current;
    const snapped = Math.round(targetFrame / step) * step;
    if (snapped === currentFrameRef.current) return;
    currentFrameRef.current = snapped;

    requestAnimationFrame(() => drawFrame(targetFrame));
  }, [progress, drawFrame]);

  // ── Resize — Retina / HiDPI support ────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w === 0 || h === 0) return;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }

      drawFrame(
        currentFrameRef.current >= 0 ? desiredFrameRef.current : 0,
      );
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [drawFrame]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
