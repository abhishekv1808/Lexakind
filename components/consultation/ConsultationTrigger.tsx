'use client';

import { useConsultationModal } from '@/components/consultation/ConsultationModal';

/**
 * Button that opens the consultation booking modal. Drop it into any component
 * (including server components) instead of a <Link href="/consultation">.
 */
export function ConsultationTrigger({
  children,
  className,
  practiceArea,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  /** Practice-area slug to preselect in the widget. */
  practiceArea?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
  const { openConsultation } = useConsultationModal();
  return (
    <button
      type="button"
      onClick={() => openConsultation({ practiceArea })}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}
