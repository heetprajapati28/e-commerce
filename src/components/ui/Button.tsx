import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  className = '',
  variant = 'outline',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  ...props
}: ButtonProps) {
  
  // Base styling for the pill-shape button
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-secondary font-bold uppercase tracking-[0.1em] transition-colors focus:outline-none';
  
  // Color variants using your globals.css tokens
  const variants = {
    primary: 'bg-brand-dark text-white dark:bg-brand-light dark:text-brand-dark hover:opacity-90',
    outline: 'border border-brand-gray/30 text-brand-dark dark:text-brand-light hover:border-brand-dark dark:hover:border-brand-light',
    ghost: 'text-brand-dark dark:text-brand-light hover:bg-brand-gray/10 dark:hover:bg-brand-light/10',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 shadow-sm',
  };

  // Size variations
  const sizes = {
    sm: 'px-5 py-2 text-[10px]',
    md: 'px-7 py-2.5 text-[11px]',
    lg: 'px-10 py-3.5 text-[13px]',
    icon: 'p-3',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
    </button>
  );
}
