
import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { MailIcon, MessageSquare, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  return (
    <Section id="contact" color="primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="section-title opacity-0 animate-fade-in">Get in Touch</h2>
            <p className="section-subtitle opacity-0 animate-fade-in animation-delay-100">
              Have questions about SecureCampus? We're here to help.
              Reach out to our team for support, demos, or more information.
            </p>
            
            <div className="space-y-4 mt-8 opacity-0 animate-fade-in animation-delay-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MailIcon className="w-5 h-5" />
                </div>
                <span>info@securecampus.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span>Live Chat (9am-5pm EST)</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8 shadow-sm opacity-0 animate-fade-in animation-delay-300">
            <form className="space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium">
                  Name
                  <input 
                    type="text" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 bg-white/50 border"
                    placeholder="Your name"
                  />
                </label>
                
                <label className="block text-sm font-medium">
                  Email
                  <input 
                    type="email" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 bg-white/50 border"
                    placeholder="Your email"
                  />
                </label>
                
                <label className="block text-sm font-medium">
                  Message
                  <textarea 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 bg-white/50 border"
                    rows={5}
                    placeholder="How can we help you?"
                  ></textarea>
                </label>
              </div>
              
              <Button className="w-full" size="lg">
                Send Message
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and 
                <a href="#" className="text-primary hover:underline"> Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
