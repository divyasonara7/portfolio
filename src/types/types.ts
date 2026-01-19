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
  type: string;
  platform: string;
  description: string;
  link?: string;
  topics: string[];
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