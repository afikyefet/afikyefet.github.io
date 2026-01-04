import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, subtitle, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="container-max">
        <div className="mb-12 sm:mb-14">
          <div className="kicker mb-3">Overview</div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
              <span className="text-gradient animate-shimmer">{title}</span>
            </h2>
            {subtitle && <p className="text-base sm:text-lg text-white/65 max-w-2xl">{subtitle}</p>}
          </div>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
};

