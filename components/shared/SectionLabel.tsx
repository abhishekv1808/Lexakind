import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  /** Use a lighter divider on dark backgrounds */
  variant?: 'default' | 'dark';
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-2 mb-4', className)}>
      <div className="w-6 h-px bg-ora flex-shrink-0" />
      <span className="font-body text-[11px] font-medium tracking-[0.18em] uppercase text-ora">
        {children}
      </span>
    </div>
  );
}
