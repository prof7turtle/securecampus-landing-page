
import React from 'react';
import Section from './ui/Section';
import { FileText, KeyRound, UserX } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const challenges = [
    {
      icon: <KeyRound className="w-6 h-6 text-red-500" />,
      title: "ID Card Dependency",
      description: "Students often forget or lose their ID cards, creating access issues and security vulnerabilities."
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-500" />,
      title: "Manual Visitor Logs",
      description: "Paper-based visitor management is inefficient, error-prone, and difficult to search or analyze."
    },
    {
      icon: <UserX className="w-6 h-6 text-amber-500" />,
      title: "Verification Challenges",
      description: "Security staff struggle to manually verify identities accurately and efficiently during busy periods."
    }
  ];

  return (
    <Section id="about" color="primary">
      <div className="space-y-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title opacity-0 animate-fade-in">Rethinking Campus Security</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
            Traditional campus security relies heavily on physical ID cards and manual processes. 
            SecureCampus brings automation and intelligence to create a seamless, secure experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold opacity-0 animate-fade-in">
              The Problems We Solve
            </h3>
            
            <div className="space-y-6">
              {challenges.map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex gap-4 p-5 glass-card rounded-xl transition-all duration-300 hover:shadow-md",
                    "opacity-0 animate-slide-in-right",
                    index === 0 ? "animation-delay-200" : 
                    index === 1 ? "animation-delay-300" : 
                    "animation-delay-400"
                  )}
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 opacity-0 animate-fade-in animation-delay-200">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Campus Security Challenges" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Our Solution</h3>
                <p className="text-white/90 max-w-md">
                  SecureCampus automates identity verification and visitor tracking using advanced facial recognition, 
                  eliminating the need for physical IDs and paper logs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
