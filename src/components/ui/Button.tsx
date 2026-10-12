import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const variantClasses = {
    primary:
      'bg-brand-600 hover:bg-brand-700 text-white shadow-sm focus-visible:ring-brand-500 active:bg-brand-800',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white shadow-sm focus-visible:ring-slate-700 active:bg-slate-950',
    outline:
      'border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-400',
    ghost:
      'text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400',
    emerald:
      'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm focus-visible:ring-emerald-500 active:bg-emerald-800',
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
