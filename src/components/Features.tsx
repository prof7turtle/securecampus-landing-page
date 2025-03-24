
import React from 'react';
import Section from './ui/Section';
import { ClipboardList, Search, Shield, Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom FaceSmiley icon since FaceIcon doesn't exist in lucide-react
const FaceSmiley = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 8a3.5 3.5 0 0 1-7 0" />
    <path d="M17 16.88A7.97 7.97 0 0 1 12 20c-1.99 0-3.81-.73-5.2-1.94" />
  </svg>
);

const Features = () => {
  const mainFeatures = [
    {
      icon: <FaceSmiley className="w-12 h-12 text-primary" />,
      title: "Facial Recognition for Students",
      description: "Students can verify their identity without ID cards, using secure facial recognition to gain access to campus facilities."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Visitor Entry Management",
      description: "Digitize visitor logs with face capture, making check-ins faster and creating searchable records of all campus visitors."
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Lost & Found Portal",
      description: "Students can check reported lost items online, making the recovery process faster and more efficient."
    }
  ];

  const additionalFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Real-time Alerts",
      description: "Instant notifications for security events"
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-primary" />,
      title: "Automated Reports",
      description: "Generate security analytics and insights"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Access Control",
      description: "Fine-grained permission management"
    }
  ];

  return (
    <Section id="features">
      <div className="space-y-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title opacity-0 animate-fade-in">Key Features</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
            SecureCampus combines cutting-edge technology with user-friendly interfaces 
            to create a comprehensive security system for your campus.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "feature-card flex flex-col items-center text-center p-8",
                "opacity-0 animate-fade-in",
                index === 0 ? "animation-delay-200" : 
                index === 1 ? "animation-delay-300" : 
                "animation-delay-400"
              )}
            >
              <div className="mb-5 p-3 rounded-full bg-primary/10">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 opacity-0 animate-fade-in animation-delay-500">
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 p-2 rounded-full bg-primary/10 h-fit">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
