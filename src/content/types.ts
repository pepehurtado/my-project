export type Locale = "es" | "en";

export interface NavContent {
  profile: string;
  experience: string;
  work: string;
  stack: string;
  contact: string;
  cv: string;
  switchLabel: string;
  switchHref: string;
  switchCode: string;
}

/** Paleta acotada: el color clasifica, no decora. */
export type Accent =
  | "indigo"
  | "cyan"
  | "emerald"
  | "amber"
  | "rose"
  | "violet"
  | "sky"
  | "teal";

export interface HeroContent {
  availability: string;
  name: string;
  role: string;
  intro: string[];
  ctaCv: string;
  ctaContact: string;
}

export interface ProfileContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: { title: string; body: string }[];
}

export interface Capability {
  id: string;
  accent: Accent;
  title: string;
  body: string;
  stack: string[];
}

export interface WorkContent {
  eyebrow: string;
  title: string;
  intro: string;
  confidentiality: string;
  capabilities: Capability[];
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface StackContent {
  eyebrow: string;
  title: string;
  intro: string;
  groups: StackGroup[];
}

export interface ExperienceRole {
  company: string;
  title: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export interface ExperienceContent {
  eyebrow: string;
  title: string;
  roles: ExperienceRole[];
}

export interface SideProject {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image?: string;
}

export interface SideProjectsContent {
  eyebrow: string;
  title: string;
  intro: string;
  visit: string;
  shotsLabel: string;
  projects: SideProject[];
}

export interface CredentialsContent {
  eyebrow: string;
  title: string;
  educationLabel: string;
  education: { school: string; degree: string; location: string }[];
  certificationsLabel: string;
  certifications: string[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  body: string;
  emailLabel: string;
  phoneLabel: string;
  copyLabel: string;
  copiedLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  cvLabel: string;
}

/** Versión animada del portfolio: invitación y textos propios de esa vista. */
export interface InteractiveContent {
  trigger: string;
  title: string;
  body: string;
  confirm: string;
  cancel: string;
  /** Ruta de esta versión en el idioma actual. */
  href: string;
  /** Ruta de la versión clásica en el idioma actual. */
  backHref: string;
  backLabel: string;
  /** Etiquetas visibles solo dentro de la vista interactiva. */
  downloadCv: string;
  downloadDocs: string;
  copyEmail: string;
  copiedEmail: string;
  videoTitle: string;
  dock: {
    about: string;
    projects: string;
    experience: string;
    cv: string;
  };
}

export interface SiteContent {
  locale: Locale;
  /** CV en el idioma de la página. */
  cvPath: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
  };
  nav: NavContent;
  hero: HeroContent;
  profile: ProfileContent;
  work: WorkContent;
  stack: StackContent;
  experience: ExperienceContent;
  credentials: CredentialsContent;
  sideProjects: SideProjectsContent;
  contact: ContactContent;
  interactive: InteractiveContent;
  footer: { rights: string; builtWith: string };
  a11y: { toTop: string; menu: string; switchLanguage: string };
}

export const SITE_URL = "https://pepehurtado.vercel.app";
export const EMAIL = "pepeke2000@gmail.com";
export const PHONE = "+34 694 49 84 59";
export const PHONE_HREF = "+34694498459";
export const LINKEDIN = "https://www.linkedin.com/in/pepehurtado";
export const GITHUB = "https://github.com/pepehurtado";
export const FULL_NAME = "Pepe Hurtado García";

/** Rutas equivalentes por idioma, usadas al cambiar de idioma sin recargar. */
export const CLASSIC_PATHS: Record<Locale, string> = {
  es: "/",
  en: "/en",
};

export const INTERACTIVE_PATHS: Record<Locale, string> = {
  es: "/interactiva",
  en: "/en/interactive",
};

export const JOB_TITLE = "Tech Lead & Full-Stack Software Engineer";
