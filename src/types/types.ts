export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface BlogPost {
  title: string;
  platform: string;
  url: string;
  summary: string;
}

export interface Session {
  title: string;
  type: 'Workshop' | 'Tech Talk' | 'Demo' | 'Training';
  platform: string;
  description: string;
  link?: string;
  slidesUrl?: string;
  topics: string[];
  impact?: string;
  icon?: 'code' | 'workflow' | 'robot' | 'presentation';
}

export interface Innovation {
  title: string;
  category: 'AI Workflow' | 'Automation' | 'Open Source' | 'Research';
  description: string;
  impact: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  icon: 'robot' | 'workflow' | 'sparkles' | 'github';
}

export interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  linkType?: 'demo' | 'repo';
}

export enum TradeOffFactor {
  TIME = 'Time to Market',
  COST = 'Cost Efficiency',
  CONTROL = 'Control/Maintenance',
  CUSTOMIZATION = 'Customizability',
  SCALABILITY = 'Scalability'
}

export interface TradeOffDataPoint {
  subject: string;
  ExistingSolution: number;
  CustomSystem: number;
  fullMark: number;
}