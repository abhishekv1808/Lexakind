'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Check,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  CalendarCheck,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { PRACTICE_AREAS } from '@/lib/services-data';
import { PA_ICONS } from '@/lib/pa-icons';
import { HoneypotField } from '@/components/shared/HoneypotField';
import { trackLead } from '@/lib/analytics';
import { cn } from '@/lib/utils';

const schema = z.object({
  practiceArea: z.string().min(1, 'Please choose a practice area'),
  date: z.string().min(1, 'Please pick a date'),
  timeSlot: z.string().min(1, 'Please pick a time slot'),
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().max(500, 'Message is too long').optional(),
  website: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const STEPS = ['Service', 'Schedule', 'Details', 'Confirm'] as const;
const TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
];

const inputBase =
  'w-full bg-wht-2 border rounded-[3px] px-4 py-3 text-[14px] text-blk font-light placeholder:text-muted focus:outline-none focus:border-ora focus:ring-1 focus:ring-ora transition-colors';

/** Next available booking days (skips Sundays). */
function getDays(count = 7) {
  const days: Date[] = [];
  const d = new Date();
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0) days.push(new Date(d));
  }
  return days;
}

const DAYS = getDays(7);

function fmtDayLabel(d: Date) {
  return {
    weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }),
    day: d.getDate(),
    month: d.toLocaleDateString('en-IN', { month: 'short' }),
  };
}

function toISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function ConsultationWidget() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: { practiceArea: '', date: '', timeSlot: '', message: '' },
  });

  const values = watch();

  const stepFields: (keyof FormValues)[][] = [
    ['practiceArea'],
    ['date', 'timeSlot'],
    ['name', 'phone', 'email'],
    [],
  ];

  const next = async () => {
    const ok = await trigger(stepFields[step]);
    if (ok) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      trackLead('consultation', {
        practice_area: data.practiceArea,
        value: 1,
      });
      toast.success('Booking request received!');
      setDone(true);
    } catch {
      toast.error('Something went wrong. Please try again or call us.');
    }
  };

  /* ---- success state ---- */
  if (done) {
    const pa = PRACTICE_AREAS.find((p) => p.slug === values.practiceArea);
    return (
      <div className="rounded-[6px] border border-wht-3 bg-white p-8 text-center md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ora/10 text-ora">
          <CalendarCheck size={30} />
        </div>
        <h3 className="mt-6 font-display text-[24px] font-semibold tracking-tight">
          Your request is in!
        </h3>
        <p className="mx-auto mt-3 max-w-[400px] font-body text-[14px] font-light leading-relaxed text-muted">
          Thanks {values.name?.split(' ')[0]}. We&apos;ve received your booking
          for <span className="text-blk">{pa?.name}</span> on{' '}
          <span className="text-blk">
            {values.date} at {values.timeSlot}
          </span>
          . Our team will call you shortly to confirm.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[6px] border border-wht-3 bg-white p-6 md:p-8">
      {/* Progress */}
      <div className="mb-8 flex items-center">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-full font-body text-[13px] font-semibold transition-colors',
                  i < step
                    ? 'bg-ora text-white'
                    : i === step
                      ? 'bg-blk text-white'
                      : 'bg-wht-2 text-muted-2',
                )}
              >
                {i < step ? <Check size={16} /> : i + 1}
              </div>
              <span
                className={cn(
                  'mt-2 hidden font-body text-[11px] font-medium sm:block',
                  i === step ? 'text-blk' : 'text-muted-2',
                )}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  'mx-2 h-px flex-1 transition-colors',
                  i < step ? 'bg-ora' : 'bg-wht-3',
                )}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
        <HoneypotField register={register('website')} />
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {/* STEP 0 — practice area */}
            {step === 0 && (
              <div>
                <StepTitle
                  title="What do you need help with?"
                  sub="Choose the area closest to your matter."
                />
                <div className="grid max-h-[320px] grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
                  {PRACTICE_AREAS.map((pa) => {
                    const Icon = PA_ICONS[pa.icon] ?? PA_ICONS.Briefcase;
                    const selected = values.practiceArea === pa.slug;
                    return (
                      <button
                        key={pa.slug}
                        type="button"
                        onClick={() =>
                          setValue('practiceArea', pa.slug, {
                            shouldValidate: true,
                          })
                        }
                        className={cn(
                          'flex items-center gap-3 rounded-[3px] border px-4 py-3 text-left transition-colors',
                          selected
                            ? 'border-ora bg-ora/5'
                            : 'border-wht-3 hover:border-ora/40',
                        )}
                      >
                        <Icon
                          size={18}
                          className={selected ? 'text-ora' : 'text-muted-2'}
                        />
                        <span className="font-body text-[13px] font-medium text-blk">
                          {pa.name}
                        </span>
                        {selected && (
                          <Check size={15} className="ml-auto text-ora" />
                        )}
                      </button>
                    );
                  })}
                </div>
                <FieldError message={errors.practiceArea?.message} />
              </div>
            )}

            {/* STEP 1 — schedule */}
            {step === 1 && (
              <div>
                <StepTitle
                  title="Pick a date & time"
                  sub="Choose your preferred consultation slot."
                />
                <p className="mb-2 flex items-center gap-2 font-body text-[12px] font-medium text-muted-2">
                  <CalendarDays size={14} /> Preferred date
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {DAYS.map((d) => {
                    const iso = toISO(d);
                    const f = fmtDayLabel(d);
                    const selected = values.date === iso;
                    return (
                      <button
                        key={iso}
                        type="button"
                        onClick={() =>
                          setValue('date', iso, { shouldValidate: true })
                        }
                        className={cn(
                          'flex min-w-[64px] flex-col items-center rounded-[3px] border px-3 py-2.5 transition-colors',
                          selected
                            ? 'border-ora bg-ora text-white'
                            : 'border-wht-3 text-blk hover:border-ora/40',
                        )}
                      >
                        <span className="font-body text-[11px] uppercase opacity-80">
                          {f.weekday}
                        </span>
                        <span className="font-display text-[18px] font-bold leading-tight">
                          {f.day}
                        </span>
                        <span className="font-body text-[10px] uppercase opacity-80">
                          {f.month}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <FieldError message={errors.date?.message} />

                <p className="mb-2 mt-5 flex items-center gap-2 font-body text-[12px] font-medium text-muted-2">
                  <Clock size={14} /> Preferred time
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((t) => {
                    const selected = values.timeSlot === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() =>
                          setValue('timeSlot', t, { shouldValidate: true })
                        }
                        className={cn(
                          'rounded-[3px] border py-2.5 font-body text-[13px] font-medium transition-colors',
                          selected
                            ? 'border-ora bg-ora/5 text-ora'
                            : 'border-wht-3 text-blk hover:border-ora/40',
                        )}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
                <FieldError message={errors.timeSlot?.message} />
              </div>
            )}

            {/* STEP 2 — details */}
            {step === 2 && (
              <div className="space-y-4">
                <StepTitle
                  title="Your details"
                  sub="So our team can reach you to confirm."
                />
                <div>
                  <input
                    placeholder="Full name"
                    className={cn(
                      inputBase,
                      errors.name ? 'border-[#e5484d]' : 'border-wht-3',
                    )}
                    {...register('name')}
                  />
                  <FieldError message={errors.name?.message} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      inputMode="numeric"
                      placeholder="Phone number"
                      className={cn(
                        inputBase,
                        errors.phone ? 'border-[#e5484d]' : 'border-wht-3',
                      )}
                      {...register('phone')}
                    />
                    <FieldError message={errors.phone?.message} />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className={cn(
                        inputBase,
                        errors.email ? 'border-[#e5484d]' : 'border-wht-3',
                      )}
                      {...register('email')}
                    />
                    <FieldError message={errors.email?.message} />
                  </div>
                </div>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your matter (optional)"
                  className={cn(inputBase, 'resize-none border-wht-3')}
                  {...register('message')}
                />
              </div>
            )}

            {/* STEP 3 — confirm */}
            {step === 3 && (
              <div>
                <StepTitle
                  title="Review & confirm"
                  sub="Check your details before submitting."
                />
                <dl className="divide-y divide-wht-3 rounded-[4px] border border-wht-3">
                  {[
                    {
                      k: 'Service',
                      v:
                        PRACTICE_AREAS.find(
                          (p) => p.slug === getValues('practiceArea'),
                        )?.name ?? '—',
                    },
                    { k: 'Date', v: getValues('date') },
                    { k: 'Time', v: getValues('timeSlot') },
                    { k: 'Name', v: getValues('name') },
                    { k: 'Phone', v: getValues('phone') },
                    { k: 'Email', v: getValues('email') },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <dt className="font-body text-[12px] uppercase tracking-[0.1em] text-muted-2">
                        {row.k}
                      </dt>
                      <dd className="font-body text-[14px] font-medium text-blk">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-muted transition-colors hover:text-blk"
            >
              <ArrowLeft size={15} /> Back
            </button>
          ) : (
            <span />
          )}

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-[3px] bg-ora px-6 py-3 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h"
            >
              Continue <ArrowRight size={15} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-[3px] bg-ora px-6 py-3 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting…' : 'Confirm booking'}
              {!isSubmitting && <Check size={15} />}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function StepTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-5">
      <h3 className="font-display text-[20px] font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-1 font-body text-[13px] font-light text-muted">{sub}</p>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-[12px] text-[#e5484d]">{message}</p>;
}
