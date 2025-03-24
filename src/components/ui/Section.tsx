
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  color?: 'light' | 'dark' | 'primary';
  containerClassName?: string;
}

const Section = ({ 
  id, 
  className, 
  children, 
  color = 'light',
  containerClassName
}: SectionProps) => {
  const colorVariants = {
    light: "bg-background text-foreground",
    dark: "bg-slate-900 text-white",
    primary: "bg-primary/5 text-foreground",
  };
  
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24 w-full overflow-hidden",
        colorVariants[color],
        className
      )}
    >
      <div className={cn("container mx-auto px-6 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
