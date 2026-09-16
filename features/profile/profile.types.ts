export interface Profile {
  id: number;
  name: string;
  role: string;
  summary: string;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  skills: Skill[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  description: string;
  technologies: Technology[];
  highlights: ExperienceHighlight[];
}

export interface ExperienceHighlight {
  id: number;
  text: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
}

export interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  technologies: Technology[];
  highlights: ProjectHighlight[];
}

export interface ProjectHighlight {
  id: number;
  text: string;
}

export interface Technology {
  id: number;
  name: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
}
