
import React, { useRef, useEffect, useState } from 'react';
import Section from './ui/Section';
import { Camera, CheckCircle2, Upload, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const steps = [
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Register",
      description: "Students and staff register their face in the system with a quick and secure process."
    },
    {
      icon: <UserCircle className="w-10 h-10" />,
      title: "Identify",
      description: "When entering campus, the system identifies individuals through facial recognition."
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Verify",
      description: "The system verifies identity against the database and grants appropriate access."
    },
    {
      icon: <Upload className="w-10 h-10" />,
      title: "Track",
      description: "Entry and exit data is securely logged for security and analytical purposes."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Section id="how-it-works" color="primary">
      <div className="space-y-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title opacity-0 animate-fade-in">How It Works</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
            SecureCampus streamlines campus security with a simple, effective process.
            Here's how our system works to keep your campus safe.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Progress Line (desktop) */}
          <div className="hidden md:flex flex-col items-center relative pt-10">
            <div className="absolute top-10 bottom-10 w-0.5 bg-gray-200">
              <div 
                className="w-0.5 bg-primary transition-all duration-500 ease-in-out"
                style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 mb-24 transition-colors duration-300",
                  index <= activeStep ? "bg-primary text-white" : "bg-gray-200 text-gray-400"
                )}
              >
                {index + 1}
              </div>
            ))}
          </div>
          
          {/* Steps */}
          <div className="flex-1 space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepsRef.current[index] = el}
                className={cn(
                  "flex flex-col md:flex-row md:items-start gap-6 p-6 glass-card rounded-xl transition-all duration-300",
                  index === activeStep ? "md:scale-105 shadow-md" : "opacity-80"
                )}
              >
                {/* Step number (mobile) */}
                <div className="md:hidden flex items-center gap-3">
                  <div 
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                      index <= activeStep ? "bg-primary text-white" : "bg-gray-200 text-gray-400"
                    )}
                  >
                    {index + 1}
                  </div>
                  <div className="h-0.5 flex-grow bg-gray-200">
                    <div 
                      className="h-0.5 bg-primary transition-all duration-500 ease-in-out"
                      style={{ width: index <= activeStep ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>
                
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
