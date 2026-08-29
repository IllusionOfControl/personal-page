export interface HeroData {
  name: string;
  role?: string;
  description: string;
  cv_url?: string;
}

export interface AboutData {
  paragraphs: string[];
}

export interface SkillTool {
  title: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  tools: SkillTool[];
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface ProjectItem {
  title: string;
  stack: string[];
  description: string;
  links: ProjectLinks;
}

export interface UsesSubsection {
  title: string;
  items: string[];
}

export interface UsesSection {
  title: string;
  subsections: UsesSubsection[];
}

export interface UsesData {
  title: string;
  description: string;
  note?: string;
  sections: UsesSection[];
}

export interface NowItem {
  title: string;
  desc: string;
}

export interface NowSubsection {
  title: string;
  items: NowItem[];
}

export interface NowSection {
  title: string;
  type: "focus" | "learning" | "github" | "playing" | string;
  subtitle?: string;
  subsections: NowSubsection[];
}

export interface NowData {
  title: string;
  description: string;
  last_updated: string;
  sections: NowSection[];
}

export interface LocationData {
  title: string;
  link: string;
}

export interface ContactsData {
  phone: string;
  email: string;
}

export interface SocialsData {
  telegram: string;
  telegram_link: string;
  instagram: string;
  instagram_link: string;
  github: string;
  github_link: string;
  linkedin: string;
  linkedin_link: string;
}

export interface PortfolioData {
  hero: HeroData;
  about?: AboutData;
  skills: SkillCategory[];
  projects: ProjectItem[];
  uses: UsesData;
  now: NowData;
  location: LocationData;
  contacts: ContactsData;
  socials: SocialsData;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  cover?: string | null;
}

export interface ArticleData extends ArticleMeta {
  content: string;
}
