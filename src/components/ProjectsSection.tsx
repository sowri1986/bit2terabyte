
import React, { useState } from 'react';
import { ExternalLink, Github, Shield, Lock, Server, Database, FileText } from 'lucide-react';
import SectionTransition from './SectionTransition';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  icon: React.ReactNode;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Security Dashboard",
    description: "A comprehensive dashboard for monitoring security threats and vulnerabilities across enterprise networks.",
    tags: ["React", "TypeScript", "Security Analytics"],
    image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    icon: <Shield className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 2,
    title: "Zero Trust Access Manager",
    description: "An access management solution that implements zero trust principles for secure resource access.",
    tags: ["Go", "React", "Identity Management"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2668&q=80",
    icon: <Lock className="h-5 w-5" />,
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Secure Data Pipeline",
    description: "A data pipeline framework with end-to-end encryption and robust access controls.",
    tags: ["Python", "Kubernetes", "Data Security"],
    image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    icon: <Database className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 4,
    title: "Cloud Security Posture Manager",
    description: "A tool to assess and improve security posture across multi-cloud environments.",
    tags: ["AWS", "Azure", "Cloud Security"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    icon: <Server className="h-5 w-5" />,
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "PDF Manager",
    description: "A simple and intuitive tool to merge multiple PDF files into one. Upload, arrange, and merge your PDFs seamlessly.",
    tags: ["React", "TypeScript", "PDF Tools"],
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    icon: <FileText className="h-5 w-5" />,
    link: "/pdf-manager"
  }
];

const ProjectsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container">
      <SectionTransition>
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Recent Security Solutions</p>
        </div>
      </SectionTransition>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <SectionTransition key={project.id} delay={100 + index * 100} className="h-full">
            <div
              className={cn(
                "group relative overflow-hidden rounded-xl transition-all duration-300 h-full",
                hoveredIndex === index ? "shadow-lg shadow-primary/10" : ""
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden aspect-video rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3">
                    {project.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target={project.link === '/pdf-manager' ? '_blank' : undefined}
                      rel={project.link === '/pdf-manager' ? 'noopener noreferrer' : undefined}
                      className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="h-4 w-4 mr-1" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SectionTransition>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
