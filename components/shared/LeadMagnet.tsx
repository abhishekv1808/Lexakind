'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { FileText, Download, Check, ArrowRight } from 'lucide-react';
import { HoneypotField } from '@/components/shared/HoneypotField';
import { trackLead } from '@/lib/analytics';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  website: z.string().optional(), // honeypot
});
type FormValues = z.infer<typeof schema>;

const GUIDE = {
  title: 'Property Buying Legal Checklist',
  blurb:
    'The exact documents to verify, the searches to run, and the traps to avoid — before you pay an advance.',
  file: '/guides/property-buying-legal-checklist.pdf',
  bullets: [
    'Title & 30-year ownership chain checks',
    'Encumbrance Certificate & Khata essentials',
    'RERA and approval verification steps',
    'A pre-registration checklist',
  ],
};

export function LeadMagnet() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'lead-magnet:property-checklist' }),
      });
      if (!res.ok) throw new Error();
      trackLead('lead_magnet', { guide: GUIDE.title });
      // Kick off the download immediately.
      const a = document.createElement('a');
      a.href = GUIDE.file;
      a.download = '';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-blk px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 overflow-hidden rounded-[8px] border border-white/10 bg-blk-3 p-8 md:grid-cols-2 md:gap-14 md:p-12">
        {/* Pitch */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-[3px] bg-ora/10 px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-ora">
            <FileText size={14} /> Free guide
          </div>
          <h2 className="mt-5 font-display text-[28px] font-semibold leading-tight tracking-tight text-white md:text-[34px]">
            {GUIDE.title}
          </h2>
          <p className="mt-3 max-w-[420px] font-body text-[14px] font-light leading-relaxed text-[#adadb4]">
            {GUIDE.blurb}
          </p>
          <ul className="mt-5 space-y-2.5">
            {GUIDE.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-ora/20 text-ora">
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className="font-body text-[13px] font-light text-white/80">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form / success */}
        <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-6 md:p-7">
          {isSubmitSuccessful ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ora/15 text-ora">
                <Download size={26} />
              </div>
              <h3 className="mt-5 font-display text-[20px] font-semibold text-white">
                Your guide is downloading
              </h3>
              <p className="mt-2 font-body text-[13px] font-light text-white/60">
                If it didn&apos;t start automatically, use the button below.
              </p>
              <a
                href={GUIDE.file}
                download
                className="mt-5 inline-flex items-center gap-2 rounded-[3px] bg-ora px-6 py-3 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h"
              >
                <Download size={15} /> Download the PDF
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative space-y-3">
              <HoneypotField register={register('website')} />
              <p className="font-body text-[13px] font-light text-white/70">
                Tell us where to send it — and we&apos;ll have an advocate ready
                if you need one.
              </p>
              <div>
                <input
                  placeholder="Your name"
                  className={cn(
                    'w-full rounded-[3px] border bg-white/[0.04] px-4 py-3 font-body text-[14px] font-light text-white placeholder:text-white/40 focus:border-ora focus:outline-none focus:ring-1 focus:ring-ora',
                    errors.name ? 'border-[#e5484d]' : 'border-white/12',
                  )}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-[12px] text-[#e5484d]">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  inputMode="numeric"
                  placeholder="Phone number"
                  className={cn(
                    'w-full rounded-[3px] border bg-white/[0.04] px-4 py-3 font-body text-[14px] font-light text-white placeholder:text-white/40 focus:border-ora focus:outline-none focus:ring-1 focus:ring-ora',
                    errors.phone ? 'border-[#e5484d]' : 'border-white/12',
                  )}
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className="mt-1 text-[12px] text-[#e5484d]">{errors.phone.message}</p>
                )}
              </div>
              <input
                type="email"
                placeholder="Email (optional)"
                className="w-full rounded-[3px] border border-white/12 bg-white/[0.04] px-4 py-3 font-body text-[14px] font-light text-white placeholder:text-white/40 focus:border-ora focus:outline-none focus:ring-1 focus:ring-ora"
                {...register('email')}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-ora px-5 py-3.5 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Preparing…' : 'Get the free guide'}
                {!isSubmitting && <ArrowRight size={15} />}
              </button>
              <p className="text-center font-body text-[11px] font-light text-white/40">
                No spam. Your details stay confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
