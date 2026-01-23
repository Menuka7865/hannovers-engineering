import React from 'react';
import { motion } from 'framer-motion'; // Actually, we will simulate Framer Motion with standard React/Tailwind classes for simplicity in this format if dependency issues arise, but I will use standard standard props for passing styles. 
// Note: Since I cannot easily install Framer Motion in the output without a package.json, I will use Tailwind's transition classes and simple keyframes defined in index.html.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const baseStyle = "rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-blue-700 border border-transparent",
    outline: "bg-transparent border-2 border-industrial-accent text-industrial-accent hover:bg-industrial-accent hover:text-white dark:border-cyan-500 dark:text-cyan-400 dark:hover:bg-cyan-950",
    ghost: "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-xl overflow-hidden transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export const SectionHeader: React.FC<{ title: string; subtitle: string; centered?: boolean }> = ({ title, subtitle, centered }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h3 className="text-industrial-highlight font-bold uppercase tracking-wider text-sm mb-2">{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-industrial-accent rounded-full"></span>
    </h2>
  </div>
);
