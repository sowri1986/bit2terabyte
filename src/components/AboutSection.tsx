
import React from 'react';
import { Shield, LineChart, Lock, Key, Code, AlertTriangle } from 'lucide-react';
import SectionTransition from './SectionTransition';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay = 0 }) => (
  <SectionTransition delay={delay} className="glass-card p-6 rounded-xl">
    <div className="flex items-start space-x-4">
      <div className="bg-primary/10 p-3 rounded-lg text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </SectionTransition>
);

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Security Strategy",
      description: "Developing comprehensive security strategies aligned with business objectives."
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Product Leadership",
      description: "Leading cross-functional teams to deliver secure, user-friendly products."
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Vulnerability Management",
      description: "Implementing robust systems to identify and mitigate security threats."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Secure Development",
      description: "Integrating security into the entire software development lifecycle."
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Threat Modeling",
      description: "Identifying potential threats and developing appropriate countermeasures."
    },
    {
      icon: <Key className="h-5 w-5" />,
      title: "Compliance & Governance",
      description: "Ensuring products meet regulatory requirements and industry standards."
    }
  ];

  return (
    <section id="about" className="section-container">
      <SectionTransition>
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My Background & Expertise</p>
        </div>
      </SectionTransition>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <SectionTransition delay={100}>
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4">Securing the digital landscape</h3>
            <p className="text-muted-foreground mb-4">
              With over a decade of experience at the intersection of product management and cybersecurity, 
              I've helped organizations build and scale secure products that protect sensitive data and digital infrastructure.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines deep technical knowledge with strategic business thinking, allowing me to bridge 
              the gap between security requirements and exceptional user experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-16 h-1 bg-primary mr-3"></div>
                <span className="font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-1 bg-primary mr-3"></div>
                <span className="font-medium">2 Patents</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-1 bg-primary mr-3"></div>
                <span className="font-medium">15+ Enterprise Products</span>
              </div>
            </div>
          </div>
        </SectionTransition>

        <SectionTransition delay={200} className="order-1 lg:order-2">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
        </SectionTransition>
      </div>

      <div className="mt-20">
        <SectionTransition>
          <h3 className="text-2xl font-semibold mb-8 text-center">Core Expertise</h3>
        </SectionTransition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={100 + index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
