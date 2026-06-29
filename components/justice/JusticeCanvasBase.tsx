'use client';

import { useEffect, useRef, useCallback } from 'react';
import { TOTAL_FRAMES } from '@/lib/justice-content';

// NOTE: files on disk are named with an underscore (frame_001.png),
// not a hyphen. Keep this in sync with public/frames/justice/.
const FRAME_PATH = (n: number) =>
  `/frames/justice/frame_${String(n).padStart(3, '0')}.png`;

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
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const allLoadedRef = useRef(false);

  // ── Draw frame (object-fit: cover) ─────────────────────────
  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const img = imagesRef.current[index];
      if (!canvas || !img?.complete || img.naturalWidth === 0) return;

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

  // ── Preload all 192 frames ─────────────────────────────────
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i + 1);

      img.onload = () => {
        loadedCount++;
        // Draw frame 0 the moment it loads — no blank canvas.
        if (i === 0) {
          imagesRef.current = images;
          drawFrame(0);
        }
        if (loadedCount === TOTAL_FRAMES) allLoadedRef.current = true;
      };

      img.onerror = () => {
        loadedCount++;
      };
      images[i] = img;
    }

    imagesRef.current = images;
  }, [drawFrame]);

  // ── Update canvas when progress changes ────────────────────
  useEffect(() => {
    const targetFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(progress * TOTAL_FRAMES),
    );
    if (targetFrame === currentFrameRef.current) return;
    currentFrameRef.current = targetFrame;

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

      drawFrame(currentFrameRef.current >= 0 ? currentFrameRef.current : 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [drawFrame]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
