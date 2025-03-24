
import React from 'react';
import { cn } from "@/lib/utils";
import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

// This is now a wrapper around the shadcn Button to avoid conflicts
const CustomButton = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  className,
  ...props 
}: CustomButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 button-highlight",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 button-highlight",
    outline: "border border-border bg-transparent hover:bg-secondary/50",
    ghost: "bg-transparent hover:bg-secondary/50",
  };
  
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
export { buttonVariants };
