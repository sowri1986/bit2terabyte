import React, { useEffect } from 'react';
import { Shield, BookOpen, Code } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTransition from '@/components/SectionTransition';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background/50 dark:from-primary/10 dark:to-background/50 z-10"></div>
            <div className="bg-grid-pattern absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <SectionTransition>
              <div className="text-center max-w-4xl mx-auto">
                <img
                  src="/b2t.png"
                  alt="Bit2Terabyte"
                  className="mx-auto h-20 md:h-24 lg:h-28 mb-8 object-contain"
                />
                <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
                  A specialized hub dedicated to showcasing cutting-edge cybersecurity solutions, interactive demos, and high-impact educational resources.
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionTransition>
              <div className="glass-card p-8 rounded-xl">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                  Bit2Terabyte is a specialized hub dedicated to showcasing cutting-edge cybersecurity solutions, interactive demos, and high-impact educational resources.</p>
              </div>
            </SectionTransition>
          </div>
        </section>

        {/* The Vision */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionTransition delay={100}>
              <div className="text-center mb-8">
                <h2 className="section-title">The Vision</h2>
              </div>
            </SectionTransition>
            <SectionTransition delay={200}>
              <div className="glass-card p-8 rounded-xl">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  In an era where digital infrastructure is the backbone of the global economy, security cannot be an afterthought. Bit2Terabyte was created to demonstrate how strategic product management, fused with deep technical mastery, can transform complex security challenges into resilient, business-enabling solutions.
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        {/* What You Will Find Here */}
        <section className="section-container">
          <SectionTransition>
            <div className="text-center mb-12">
              <h2 className="section-title">What You Will Find Here</h2>
              <p className="section-subtitle">More Than a Portfolio</p>
            </div>
          </SectionTransition>

          <div className="max-w-5xl mx-auto">
            <SectionTransition delay={100}>
              <div className="glass-card p-8 rounded-xl mb-6">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-center">
                  Bit2Terabyte is more than a portfolio; it is a resource for professionals and organizations seeking to stay ahead of the threat landscape:
                </p>
              </div>
            </SectionTransition>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cybersecurity Solutions */}
              <SectionTransition delay={200}>
                <div className="glass-card p-6 rounded-xl h-full">
                  <div className="bg-primary/10 p-4 rounded-lg text-primary w-fit mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cybersecurity Solutions</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Deep dives into architecting secure, scalable, and resilient cloud and telco infrastructure.
                  </p>
                </div>
              </SectionTransition>

              {/* Interactive Demos */}
              <SectionTransition delay={300}>
                <div className="glass-card p-6 rounded-xl h-full">
                  <div className="bg-primary/10 p-4 rounded-lg text-primary w-fit mb-4">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Interactive Demos</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Real-world applications of security automation, AI-driven risk scoring, and PKI-based device security.
                  </p>
                </div>
              </SectionTransition>

              {/* Learning Resources */}
              <SectionTransition delay={400}>
                <div className="glass-card p-6 rounded-xl h-full">
                  <div className="bg-primary/10 p-4 rounded-lg text-primary w-fit mb-4">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Learning Resources</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Educational content designed to simplify complex regulatory requirements like GDPR and DORA, translating them into actionable engineering and product roadmaps.
                  </p>
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bit2Terabyte. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;

