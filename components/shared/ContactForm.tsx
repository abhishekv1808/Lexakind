'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { ChevronDown, Send } from 'lucide-react';
import { PRACTICE_AREAS } from '@/lib/practice-areas';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  practiceArea: z.string().min(1, 'Please select a practice area'),
  message: z
    .string()
    .min(20, 'Please add a little more detail (min 20 characters)')
    .max(1000, 'Message is too long (max 1000 characters)'),
});

type FormValues = z.infer<typeof schema>;

const inputBase =
  'w-full bg-wht-2 border rounded-[3px] px-4 py-3 text-[14px] text-blk font-light placeholder:text-muted focus:outline-none focus:border-ora focus:ring-1 focus:ring-ora transition-colors';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-[12px] text-[#e5484d]">{message}</p>;
}

export function ContactForm({
  defaultPracticeArea = '',
}: {
  defaultPracticeArea?: string;
} = {}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { practiceArea: defaultPracticeArea },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      toast.success("Thank you! We'll get back to you shortly.");
      reset();
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-1.5 text-[13px] font-medium text-blk"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            className={cn(inputBase, errors.name ? 'border-[#e5484d]' : 'border-wht-3')}
            {...register('name')}
          />
          <FieldError message={errors.name?.message} />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block mb-1.5 text-[13px] font-medium text-blk"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            placeholder="9876543210"
            className={cn(inputBase, errors.phone ? 'border-[#e5484d]' : 'border-wht-3')}
            {...register('phone')}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-1.5 text-[13px] font-medium text-blk"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            className={cn(inputBase, errors.email ? 'border-[#e5484d]' : 'border-wht-3')}
            {...register('email')}
          />
          <FieldError message={errors.email?.message} />
        </div>

        {/* Practice area */}
        <div>
          <label
            htmlFor="practiceArea"
            className="block mb-1.5 text-[13px] font-medium text-blk"
          >
            Practice Area
          </label>
          <div className="relative">
            <select
              id="practiceArea"
              className={cn(
                inputBase,
                'appearance-none pr-10 cursor-pointer',
                errors.practiceArea ? 'border-[#e5484d]' : 'border-wht-3',
              )}
              {...register('practiceArea')}
            >
              <option value="" disabled>
                Select a practice area
              </option>
              {PRACTICE_AREAS.map((pa) => (
                <option key={pa.slug} value={pa.name}>
                  {pa.name}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
          <FieldError message={errors.practiceArea?.message} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block mb-1.5 text-[13px] font-medium text-blk"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Briefly describe your legal matter…"
          className={cn(
            inputBase,
            'resize-none',
            errors.message ? 'border-[#e5484d]' : 'border-wht-3',
          )}
          {...register('message')}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-ora text-white font-body text-[14px] font-medium tracking-[0.02em] px-7 py-3.5 rounded-[3px] hover:bg-ora-h transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
        {!isSubmitting && <Send size={15} />}
      </button>
    </form>
  );
}
