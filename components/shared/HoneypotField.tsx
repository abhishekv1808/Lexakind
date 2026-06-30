import type { UseFormRegisterReturn } from 'react-hook-form';

/**
 * Visually-hidden honeypot input. Real users never see or fill it;
 * bots that fill every field trip it so the API can drop the submission.
 * Hidden off-screen (not display:none) so naive bots still "see" it.
 */
export function HoneypotField({
  register,
}: {
  register: UseFormRegisterReturn;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden"
    >
      <label>Website</label>
      <input type="text" tabIndex={-1} autoComplete="off" {...register} />
    </div>
  );
}
