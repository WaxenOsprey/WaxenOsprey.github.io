export interface Project {
  id: string;
  name: string;
  technologies: readonly string[];
  summary: string;
}

export interface Experience {
  id: string;
  title: string;
  start: string;
  end: string;
  company: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  items: readonly string[];
}

// Content will be expanded as individual project case studies are developed.
export const featuredProjects: readonly Project[] = [
  {
    id: 'posterity',
    name: 'Posterity',
    technologies: ['C#', '.NET', 'Angular', 'PostgreSQL'],
    summary: 'A gaming media platform with a Clean Architecture backend and Angular frontend.',
  },
  {
    id: 'overloader',
    name: 'OverLoader',
    technologies: ['C#', '.NET', 'Garmin', 'PostgreSQL'],
    summary: 'A strength-training tracker integrating Garmin workout data and progressive overload recommendations.',
  },
];

export const experience: readonly Experience[] = [
  {
    id: 'development',
    title: 'Software Development & QA',
    start: 'Mar 2025',
    end: 'Present',
    company: 'The Craneware Group',
    summary: 'Developing and modernising healthcare applications with C# and .NET, supported by experience in automated testing.',
  },
  {
    id: 'implementation',
    title: 'Scripting & Integration',
    start: 'Nov 2024',
    end: 'Mar 2025',
    company: 'The Craneware Group',
    summary: 'Building and supporting scripting solutions and integrations for healthcare customers.',
  },
  {
    id: 'support',
    title: 'Technical Support',
    start: 'Oct 2023',
    end: 'Nov 2024',
    company: 'The Craneware Group',
    summary: 'Investigating software issues and collaborating with engineering teams.',
  },
];

export const skillGroups: readonly SkillGroup[] = [
  { category: 'Backend', items: ['C#', '.NET', 'REST APIs'] },
  { category: 'Frontend', items: ['Angular', 'React', 'TypeScript'] },
  { category: 'Data', items: ['PostgreSQL', 'SQL', 'Cosmos DB'] },
  { category: 'Testing & Delivery', items: ['NUnit', 'Git', 'Azure'] },
];
