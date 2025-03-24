
import React from 'react';
import Section from './ui/Section';
import { Lock, Server, ShieldCheck, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Data Encryption",
      description: "All sensitive data is encrypted using industry-standard protocols both at rest and in transit."
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Secure Storage",
      description: "Biometric templates are stored as encrypted data patterns, not actual images of faces."
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Compliance",
      description: "Our system is built to comply with data protection and privacy regulations."
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Transparency",
      description: "Users can access their data and understand how it's being used at any time."
    }
  ];

  return (
    <Section id="security">
      <div className="space-y-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title opacity-0 animate-fade-in">Security & Privacy</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
            We take the security and privacy of your data seriously. 
            Our system is designed with protection at its core.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 space-y-6">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "flex gap-4 p-5 glass-card rounded-xl transition-all duration-300 hover:shadow-md",
                  "opacity-0 animate-slide-in-right",
                  index === 0 ? "animation-delay-200" : 
                  index === 1 ? "animation-delay-300" : 
                  index === 2 ? "animation-delay-400" :
                  "animation-delay-500"
                )}
              >
                <div className="p-2 rounded-full bg-primary/10 text-primary h-fit">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-1 md:order-2 flex items-center justify-center opacity-0 animate-fade-in animation-delay-200">
            <div className="relative max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Security and Privacy" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-2xl"></div>
              
              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl shadow-lg p-4 max-w-[180px] animate-float animation-delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium">GDPR Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Security;
