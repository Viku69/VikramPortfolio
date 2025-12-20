// Portfolio Data Types
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Education {
  id: number;
  degree: string;
  specialization: string;
  institute: string;
  duration: string;
  marks: string;
  status: 'Pursuing' | 'Completed';
  color: string;
  icon: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  achievements: string[];
  technologies: string[];
  color?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  features: string[];
  color: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Skills {
  programmingLanguages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
  cloudDevOps: Skill[];
  tools: string[];
  practices: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  publication?: string;
  platforms?: string;
  year: string;
  link?: string;
  icon: string;
}

export interface Position {
  id: number;
  title: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  icon: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  achievements: Achievement[];
  positions: Position[];
}

// Component Props Types
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface ExpCardProps {
  Role: string;
  ImageComponent?: React.ReactNode;
  company: string;
  location: string;
  duration: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  achievements: string[];
  technologies: string[];
}

export interface SectionHeaderProps {
  title: string;
  description?: string;
  delay?: number;
}

export interface SkillCardProps {
  skill: Skill;
  index: number;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Route Types
export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  label: string;
  id: string;
}

