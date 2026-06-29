'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X, Check, Scale, PhoneCall } from 'lucide-react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'lx_exit_shown';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
});
type FormValues = z.infer<typeof schema>;

const BENEFITS = [
  'Free 15-minute call with a verified advocate',
  'Honest, upfront guidance — no obligation',
  'We call you back within 24 hours',
];

export function ExitIntentModal() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  // Arm exit-intent detection (desktop only, once per session).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (window.innerWidth < 768) return; // no reliable exit-intent on touch

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 4000);

    const onMouseOut = (e: MouseEvent) => {
      if (armed && !e.relatedTarget && e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, '1');
        cleanup();
      }
    };
    const cleanup = () => {
      window.clearTimeout(armTimer);
      document.removeEventListener('mouseout', onMouseOut);
    };
    document.addEventListener('mouseout', onMouseOut);
    return cleanup;
  }, []);

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

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'exit-intent-popup' }),
      });
      if (!res.ok) throw new Error();
      toast.success("Thanks! We'll call you back shortly.");
      setDone(true);
      setTimeout(() => setOpen(false), 2200);
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[400] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Free consultation offer"
        >
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-[760px] overflow-hidden rounded-[6px] bg-white shadow-2xl md:grid-cols-2"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-white transition-colors hover:bg-black/30 md:text-white"
            >
              <X size={16} />
            </button>

            {/* Left — offer panel */}
            <div className="relative hidden flex-col justify-between bg-blk p-8 md:flex">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(100% 80% at 20% 0%, #2a2a30 0%, #161618 70%)',
                }}
              />
              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-ora text-white">
                  <Scale size={22} />
                </span>
                <h3 className="mt-6 font-display text-[26px] font-semibold leading-tight text-white">
                  Wait — your first call is on us
                </h3>
                <p className="mt-3 font-body text-[13px] font-light leading-relaxed text-[#adadb4]">
                  Before you go, grab a free consultation with a verified
                  Lexakind advocate.
                </p>
              </div>
              <ul className="relative mt-6 space-y-2.5">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-ora/20 text-ora">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="font-body text-[12px] font-light text-white/80">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form / success */}
            <div className="p-8">
              {done ? (
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ora/10 text-ora">
                    <Check size={26} />
                  </div>
                  <h4 className="mt-5 font-display text-[20px] font-semibold">
                    You&apos;re all set!
                  </h4>
                  <p className="mt-2 font-body text-[13px] font-light text-muted">
                    Our team will call you back shortly.
                  </p>
                </div>
              ) : (
                <>
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-ora">
                    Free consultation
                  </p>
                  <h4 className="mt-2 font-display text-[22px] font-semibold leading-snug tracking-tight">
                    Get a call back
                  </h4>
                  <p className="mt-1.5 font-body text-[13px] font-light text-muted">
                    Leave your details — we&apos;ll do the rest.
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="mt-5 space-y-3"
                  >
                    <div>
                      <input
                        placeholder="Your name"
                        className={cn(
                          'w-full rounded-[3px] border bg-wht-2 px-4 py-3 font-body text-[14px] font-light text-blk placeholder:text-muted focus:border-ora focus:outline-none focus:ring-1 focus:ring-ora',
                          errors.name ? 'border-[#e5484d]' : 'border-wht-3',
                        )}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[12px] text-[#e5484d]">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        inputMode="numeric"
                        placeholder="Phone number"
                        className={cn(
                          'w-full rounded-[3px] border bg-wht-2 px-4 py-3 font-body text-[14px] font-light text-blk placeholder:text-muted focus:border-ora focus:outline-none focus:ring-1 focus:ring-ora',
                          errors.phone ? 'border-[#e5484d]' : 'border-wht-3',
                        )}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[12px] text-[#e5484d]">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-ora px-5 py-3.5 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <PhoneCall size={15} />
                      {isSubmitting ? 'Sending…' : 'Claim my free consultation'}
                    </button>
                    <p className="text-center font-body text-[11px] font-light text-muted-2">
                      No spam. Your details stay confidential.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
