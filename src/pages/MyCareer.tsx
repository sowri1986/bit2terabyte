import React, { useState, useEffect } from 'react';
import { Award, Building2, Globe, Shield, TrendingUp, FileText, Search, Filter, Cloud, Lock, Network, Star, Lightbulb, Users, Mic, Gauge, Scale, PenTool } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTransition from '@/components/SectionTransition';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';

const MyCareer: React.FC = () => {
  const [patentSearch, setPatentSearch] = useState('');
  const [patentFilter, setPatentFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      metric: '$200 Million+',
      label: 'Annual Revenue Generated',
      description: 'Hyperforce EU Operating Zone expansion',
      icon: TrendingUp,
    },
    {
      metric: '6.75% Faster',
      label: 'MTTR Improvement',
      description: 'Security vulnerability remediation',
      icon: Shield,
    },
    {
      metric: '7.9 Million Units',
      label: 'Market Entry Success',
      description: 'Nokia Lightspan products in Japan',
      icon: Globe,
    },
    {
      metric: '70,000+ Devices',
      label: 'Enterprise PKI Solution',
      description: 'Corporate identity security',
      icon: Building2,
    },
    {
      metric: '50% Reduction',
      label: 'Human Toil Reduction',
      description: 'AI-driven security operations',
      icon: Award,
    },
  ];

  const patents = [
    {
      id: 'US 11,837,223 B2',
      focus: 'AI & Natural Language Processing',
      impact: 'Simplifies management of large-scale Software Defined Networks',
      region: 'US',
    },
    {
      id: 'EP 19150012.3',
      focus: 'Hardware Anti-Theft',
      impact: 'Novel software-based mechanism to prevent capital loss of field equipment',
      region: 'EU',
    },
    {
      id: 'EP 18164205.9',
      focus: 'AI Content Creation',
      impact: 'Automated generation of digital content from textual sources',
      region: 'EU',
    },
    {
      id: 'IN 1506/DEL/2013',
      focus: 'Network Stability',
      impact: 'Improving reliability and state management of DHCP sessions',
      region: 'IN',
    },
  ];

  const filteredPatents = patents.filter((patent) => {
    const matchesSearch =
      patent.id.toLowerCase().includes(patentSearch.toLowerCase()) ||
      patent.focus.toLowerCase().includes(patentSearch.toLowerCase()) ||
      patent.impact.toLowerCase().includes(patentSearch.toLowerCase());
    const matchesFilter = patentFilter === 'all' || patent.region === patentFilter;
    return matchesSearch && matchesFilter;
  });

  const honors = [
    {
      title: 'Distinguished Member of Technical Staff (DMTS)',
      organization: 'Nokia Bell Labs',
      description: 'A lifetime title awarded to only ~140 individuals out of a global R&D pool of 40,000 engineers',
    },
    {
      title: 'UK Global Talent Endorsement',
      organization: 'UK Government',
      description: 'Recognized by the UK government as a leader in the digital technology sector',
    },
    {
      title: 'Quality Champion',
      organization: 'Nokia',
      description: 'Recognized for proactively reducing software defects and improving production standards',
    },
  ];

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
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">
                  {/* Photo Section */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                        <img
                          src="/sowrirajan-photo.jpg"
                          alt="Sowrirajan Padmanabhan"
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content Section */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                      Sowrirajan Padmanabhan
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                      A Leader in Cybersecurity & Platform Innovation
                    </h2>
                    <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto lg:mx-0">
                      Seasoned product leader with 15+ years architecting and securing foundational telecommunications and cloud infrastructure, driving security strategy, compliance, and innovation for multi-million dollar global business lines.
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Cybersecurity Expert
                      </span>
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Product Leader
                      </span>
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        DMTS at Nokia Bell Labs
                      </span>
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Patent Holder
                      </span>
                    </div>
                  </div>
                </div>

                {/* High-Stakes Trust Bar */}
                <div className="glass-card p-6 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Represented technical interests at national level</p>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="font-semibold text-lg mb-1">UK National Cyber Security Centre</div>
                      <div className="text-sm text-muted-foreground">NCSC</div>
                    </div>
                    <div className="h-8 w-px bg-border"></div>
                    <div className="text-center">
                      <div className="font-semibold text-lg mb-1">Department of Telecommunications</div>
                      <div className="text-sm text-muted-foreground">Government of India</div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionTransition>
          </div>
        </section>

        {/* Career Infographic */}
        <section className="section-container">
          <div className="max-w-7xl mx-auto">
            <SectionTransition>
              <div className="text-center mb-12">
                <h2 className="section-title">Career Overview</h2>
                <p className="section-subtitle">A Comprehensive View of Leadership & Innovation</p>
              </div>
            </SectionTransition>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Left: Career Trajectory & Key Roles */}
              <SectionTransition delay={100}>
                <div className="glass-card p-6 rounded-xl h-full">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3">
                      <Building2 className="h-5 w-5" />
                    </div>
                    Career Trajectory & Key Roles
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Cloud className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Director, Product Management - Salesforce</h4>
                          <p className="text-sm text-muted-foreground">
                            Leads security data fabric platform, managing globally distributed DevOps teams and shipping AI security agents that reduce analysis toil by 30%.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Lock className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Senior Product Manager - Salesforce</h4>
                          <p className="text-sm text-muted-foreground">
                            Drove PKI strategy, achieving over $0.5M/month in cloud cost savings and securing over 70,000 corporate devices.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Network className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Product Manager & DMTS - Nokia</h4>
                          <p className="text-sm text-muted-foreground">
                            Managed security and privacy for the €800M Broadband Networks business, shipping GDPR compliance features and launching products in new markets like Japan.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Star className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Distinguished Member of Technical Staff (DMTS) - Nokia Bell Labs</h4>
                          <p className="text-sm text-muted-foreground">
                            Lifetime recognition for sustained, outstanding technical contributions, selected from ~40,000 engineers globally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionTransition>

              {/* Top Right: Innovation & Intellectual Property */}
              <SectionTransition delay={200}>
                <div className="glass-card p-6 rounded-xl h-full">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    Innovation & Intellectual Property
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Granted U.S. Patent for AI in Network Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Sole inventor of U.S. Patent US11837223B2 using Natural Language Processing to securely manage large-scale Software Defined Networks (SDNs).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Inventor on 5+ Patent Families</h4>
                          <p className="text-sm text-muted-foreground">
                            Named as sole or joint inventor on multiple patent families filed by Nokia and Alcatel-Lucent, covering areas like anti-theft for network equipment.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Star className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Quality Champion Award - Alcatel-Lucent</h4>
                          <p className="text-sm text-muted-foreground">
                            Recognized for proactively updating code guidelines which reduced defects, prevented faults in production, and improved customer satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionTransition>

              {/* Bottom Left: Industry Influence & Standards Contribution */}
              <SectionTransition delay={300}>
                <div className="glass-card p-6 rounded-xl h-full">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3">
                      <Globe className="h-5 w-5" />
                    </div>
                    Industry Influence & Standards Contribution
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <PenTool className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Editor for Cloud Security Alliance (CSA)</h4>
                          <p className="text-sm text-muted-foreground">
                            Contributed expertise by reviewing/editing exam items for the industry's first Certificate of Competence in Zero Trust (CCZT).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Project Stream Leader at Broadband Forum</h4>
                          <p className="text-sm text-muted-foreground">
                            Led development, review, and publication of global telecommunication standards, including TR-383 (Common YANG Modules for Access Networks).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Mic className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">YANG Advisor & Conference Speaker</h4>
                          <p className="text-sm text-muted-foreground">
                            Served as formal peer reviewer for new network management data models and was a featured speaker on 5G security at a Broadband Forum international meeting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionTransition>

              {/* Bottom Right: High-Impact Cybersecurity Achievements */}
              <SectionTransition delay={400}>
                <div className="glass-card p-6 rounded-xl h-full">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3">
                      <Shield className="h-5 w-5" />
                    </div>
                    High-Impact Cybersecurity Achievements
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Enabled DoD IL4 & IL5 Security Authorization</h4>
                          <p className="text-sm text-muted-foreground">
                            Managed PKI services critical for Salesforce Government Cloud platform to receive Provisional Authority-To-Operate (ATO) from U.S. Department of Defense.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Defended Product Security to National Governments</h4>
                          <p className="text-sm text-muted-foreground">
                            Represented Nokia in high-stakes discussions, successfully defending product security features to the UK's NCSC and the Government of India.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Gauge className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">75% Improvement in Vulnerability Remediation Time</h4>
                          <p className="text-sm text-muted-foreground">
                            Drove a 75% improvement in Mean Time to Remediate security vulnerabilities by providing actionable findings to product teams at Salesforce.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                          <Scale className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Engineered Lawful Interception & GDPR Compliance</h4>
                          <p className="text-sm text-muted-foreground">
                            Designed and implemented secure role-based access controls for Lawful Interception features and shipped GDPR-compliant capabilities across three Nokia product lines.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>

        {/* Impact by the Numbers */}
        <section className="section-container">
          <SectionTransition>
            <div className="text-center mb-12">
              <h2 className="section-title">Impact by the Numbers</h2>
              <p className="section-subtitle">Quantifiable Achievements</p>
            </div>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <SectionTransition key={index} delay={100 + index * 50}>
                  <div className="glass-card p-6 rounded-xl h-full">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary w-fit mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold mb-2 text-primary">{achievement.metric}</div>
                    <div className="font-semibold mb-2">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                </SectionTransition>
              );
            })}
          </div>
        </section>

        {/* Core Experience Sections */}
        <section className="section-container">
          <SectionTransition>
            <div className="text-center mb-12">
              <h2 className="section-title">Core Experience</h2>
              <p className="section-subtitle">Leadership Across Enterprise SaaS & Telecommunications</p>
            </div>
          </SectionTransition>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Salesforce Experience */}
            <SectionTransition delay={100}>
              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Leadership in Enterprise SaaS</h3>
                    <p className="text-primary font-medium mb-4">Salesforce</p>
                    <p className="text-muted-foreground mb-6">
                      Focus: Security Automation, Data Sovereignty, and Government Authorization
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">PKI Solutions for DoD Compliance</h4>
                    <p className="text-muted-foreground">
                      Led the PKI solutions required for DoD Impact Level 4 and 5 (IL4/IL5) Provisional Authority to Operate for Salesforce Government Cloud
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Operational Excellence</h4>
                    <p className="text-muted-foreground">
                      Drove operational excellence by reducing cloud costs by $0.5M per month through anomaly detection and optimization
                    </p>
                  </div>
                </div>
              </div>
            </SectionTransition>

            {/* Nokia Experience */}
            <SectionTransition delay={200}>
              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Leadership in Global Telecommunications</h3>
                    <p className="text-primary font-medium mb-4">Nokia / Alcatel-Lucent</p>
                    <p className="text-muted-foreground mb-6">
                      Focus: Critical Infrastructure Security and Regulatory Compliance
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Broadband Networks Security</h4>
                    <p className="text-muted-foreground">
                      Managed security and privacy for the €800 million Broadband Networks business unit, ensuring GDPR compliance across three product lines
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Lawful Interception Compliance</h4>
                    <p className="text-muted-foreground">
                      Designed secure management interfaces for Lawful Interception, ensuring compliance with national security regulations
                    </p>
                  </div>
                </div>
              </div>
            </SectionTransition>
          </div>
        </section>

        {/* Intellectual Property & Innovation */}
        <section className="section-container">
          <SectionTransition>
            <div className="text-center mb-12">
              <h2 className="section-title">Intellectual Property & Innovation</h2>
              <p className="section-subtitle">Patents Demonstrating Technical Depth</p>
            </div>
          </SectionTransition>

          <div className="max-w-5xl mx-auto">
            {/* Search and Filter */}
            <SectionTransition delay={100}>
              <div className="glass-card p-6 rounded-xl mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search patents..."
                      value={patentSearch}
                      onChange={(e) => setPatentSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <select
                      value={patentFilter}
                      onChange={(e) => setPatentFilter(e.target.value)}
                      className="w-full h-10 px-10 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="all">All Regions</option>
                      <option value="US">United States</option>
                      <option value="EU">European Union</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                </div>
              </div>
            </SectionTransition>

            {/* Patents Table */}
            <SectionTransition delay={200}>
              <div className="glass-card rounded-xl overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patent / Application</TableHead>
                      <TableHead>Focus Area</TableHead>
                      <TableHead>Strategic Impact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPatents.length > 0 ? (
                      filteredPatents.map((patent, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{patent.id}</TableCell>
                          <TableCell>{patent.focus}</TableCell>
                          <TableCell className="text-muted-foreground">{patent.impact}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                          No patents found matching your search criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </SectionTransition>
          </div>
        </section>

        {/* Industry Influence & Standards */}
        <section className="section-container">
          <SectionTransition>
            <div className="text-center mb-12">
              <h2 className="section-title">Industry Influence & Standards</h2>
              <p className="section-subtitle">Global Leadership Beyond the Office</p>
            </div>
          </SectionTransition>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <SectionTransition delay={100}>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="bg-primary/10 p-3 rounded-lg text-primary w-fit mx-auto mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Broadband Forum</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Project Stream Leader and YANG Advisor
                </p>
                <p className="text-xs text-muted-foreground">
                  Shaping how next-gen networks are managed globally
                </p>
              </div>
            </SectionTransition>

            <SectionTransition delay={200}>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="bg-primary/10 p-3 rounded-lg text-primary w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Cloud Security Alliance</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Exam Item Reviewer and Editor for CCZT
                </p>
                <p className="text-xs text-muted-foreground">
                  Certificate of Competence in Zero Trust
                </p>
              </div>
            </SectionTransition>

            <SectionTransition delay={300}>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="bg-primary/10 p-3 rounded-lg text-primary w-fit mx-auto mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Thought Leadership</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Selected speaker at international forums
                </p>
                <p className="text-xs text-muted-foreground">
                  Milan, Italy: 5G security and privacy challenges
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        {/* Distinguished Honors */}
        <section className="section-container">
          <SectionTransition>
            <div className="text-center mb-12">
              <h2 className="section-title">Distinguished Honors</h2>
              <p className="section-subtitle">Third-Party Validation of Excellence</p>
            </div>
          </SectionTransition>

          <div className="max-w-4xl mx-auto space-y-6">
            {honors.map((honor, index) => (
              <SectionTransition key={index} delay={100 + index * 100}>
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 flex-shrink-0">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{honor.title}</h3>
                      <p className="text-primary font-medium mb-2">{honor.organization}</p>
                      <p className="text-muted-foreground text-sm">{honor.description}</p>
                    </div>
                  </div>
                </div>
              </SectionTransition>
            ))}
          </div>
        </section>

        {/* Professional Summary */}
        <section className="section-container">
          <SectionTransition>
            <div className="text-center mb-12">
              <h2 className="section-title">Professional Summary</h2>
              <p className="section-subtitle">A Comprehensive Career Overview</p>
            </div>
          </SectionTransition>

          <SectionTransition delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 rounded-xl text-left space-y-4">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Sowrirajan Padmanabhan is a seasoned product leader with over 15 years of experience architecting and securing the foundational infrastructure that underpins the global digital economy. His career is defined by a rare and potent combination of expertise: deep mastery of mission-critical telecommunications at Nokia, fused with leadership in enterprise-scale SaaS platforms at Salesforce.
                </p>
                
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  At Salesforce, Sowrirajan has been a primary driver of strategic growth and operational resilience. He played a pivotal role in the Hyperforce EMEA expansion by enabling data sovereignty for regulated sectors. His mastery of Public Key Infrastructure (PKI) was instrumental in securing Salesforce Government Cloud, achieving DoD Impact Level 4 and 5 authorizations. Furthermore, he pioneered AI-driven security operations that reduced human toil by 50% and improved vulnerability remediation velocity by 75%.
                </p>
                
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Prior to his work in SaaS, Sowrirajan spent a decade at Nokia, where he was honored as a Distinguished Member of Technical Staff (DMTS) at Nokia Bell Labs—a lifetime recognition awarded to a select group of approximately 140 individuals from a global pool of 40,000 engineers. His contributions include launching broadband services for 9 million units in Japan and reducing network setup costs for operators by 25% through innovative zero-touch provisioning.
                </p>
                
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  A recognized industry authority, Sowrirajan has led global standards development as a Project Stream Leader at the Broadband Forum and contributed to the industry's first Zero Trust certification with the Cloud Security Alliance. His technical mastery is further validated by five patent families and his role in high-stakes engagements with national agencies, including the UK's NCSC and India's Department of Telecommunications.
                </p>
              </div>
            </div>
          </SectionTransition>
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

export default MyCareer;

