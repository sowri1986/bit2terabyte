
import React from 'react';
import { ArrowDown, Lock, Shield, ShieldCheck } from 'lucide-react';
import SectionTransition from './SectionTransition';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background/50 dark:from-primary/10 dark:to-background/50 z-10"></div>
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <SectionTransition>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              <span>Trust, Security & Privacy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Securing the digital future through
              <span className="text-primary block mt-2">innovative products</span>
            </h1>
            
            <p className="text-lg text-foreground/80 mb-8 mx-auto max-w-2xl text-balance">
              I help organizations build and scale secure products that protect data, 
              privacy, and digital infrastructure in an increasingly complex threat landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium transition-all hover:bg-secondary/80"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </SectionTransition>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>

      {/* Background accent elements */}
      <div className="hidden md:block absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/4 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
