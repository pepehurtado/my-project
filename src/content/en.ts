import type { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  cvPath: "/Pepe_Hurtado_CV_EN.pdf",

  meta: {
    title: "Pepe Hurtado — Tech Lead & Full-Stack Software Engineer",
    description:
      "Tech Lead and full-stack engineer who owns delivery end to end. Spring Boot microservices, Angular front-ends, Docker and Kubernetes, database and infrastructure migrations, and AI shipped to production.",
    keywords: [
      "tech lead",
      "full stack software engineer",
      "Spring Boot",
      "Angular",
      "microservices",
      "Kubernetes",
      "Docker",
      "database migration",
      "AI in production",
      "remote software engineer",
      "software engineer Spain",
    ],
    ogLocale: "en_US",
  },

  nav: {
    profile: "Profile",
    experience: "Experience",
    work: "Work",
    stack: "Stack",
    contact: "Contact",
    cv: "Résumé",
    switchLabel: "Leer en español",
    switchHref: "/",
    switchCode: "ES",
  },

  hero: {
    availability: "Murcia, Spain · Open to remote and relocation",
    name: "Pepe Hurtado García",
    role: "Tech Lead & Full-Stack Software Engineer",
    intro: [
      "I design, build and ship distributed systems for domains where failure is expensive: healthcare, port operations and public administration.",
      "I own delivery end to end. That means the architecture and the microservices, but also sitting down with the client to gather requirements, distributing work across the team and signing off the deployment.",
    ],
    ctaCv: "Download résumé",
    ctaContact: "Get in touch",
  },

  profile: {
    eyebrow: "Profile",
    title: "Engineering end to end, not just the comfortable part",
    paragraphs: [
      "I started as a developer working on Angular frontends and Spring Boot microservices. When the project's senior developer left, I took over his technical scope; when the project manager left, I took over the client relationship and the planning too. That has been my way of working ever since: I am the technical point of contact for the project, top to bottom.",
      "Most of what I do is the part portfolios rarely show: replacing obsolete legacy applications with new systems on a more complex domain, migrating entire databases when the structure and the relationships change, and moving infrastructure from VPS to on-premise without taking the service down.",
      "I work with small teams reporting to me, in direct contact with the client, and with the responsibility that whatever reaches production works and stays maintainable.",
    ],
    highlights: [
      {
        title: "End-to-end technical ownership",
        body: "From requirements gathering with the client through to the deployment pipeline and production monitoring.",
      },
      {
        title: "Real distributed systems",
        body: "Multiple microservices talking to each other, third-party API integrations and orchestration on Kubernetes.",
      },
      {
        title: "High-risk migrations",
        body: "Redesigned data models and infrastructure moves executed against systems already in active use.",
      },
      {
        title: "Leadership and client work",
        body: "Distributing and prioritising team work, running requirements meetings and scoping new modules.",
      },
    ],
  },

  work: {
    eyebrow: "Capabilities",
    title: "What I take ownership of",
    intro:
      "I cover the full delivery cycle: architecture and backend, frontend, data, infrastructure and the client relationship. This is what I bring to a team.",
    confidentiality:
      "I work under confidentiality agreements, so you won't find client names or product details here. Happy to go into the technical detail in a conversation.",
    capabilities: [
      {
        id: "legacy",
        accent: "amber",
        title: "Legacy modernisation and data migration",
        body: "I take technical and client ownership of legacy platform modernisations: redesigning the entity model, migrating the full database to the new schema and going live without disrupting production operations.",
        stack: [
          "Relational modelling",
          "Schema migrations",
          "SQL",
          "Python",
          "JPA / Hibernate",
        ],
      },
      {
        id: "backend",
        accent: "indigo",
        title: "Microservices, APIs and systems integration",
        body: "I design and build multi-service Spring Boot backends: configurable, scalable REST APIs, interconnected microservices and integration with external third-party APIs, documented and maintainable.",
        stack: ["Java", "Spring Boot", "REST APIs", "OpenAPI", "Microservices"],
      },
      {
        id: "frontend",
        accent: "cyan",
        title: "Frontend and user experience",
        body: "I build and maintain complete Angular front-ends with RxJS for reactive state: reusable components, advanced forms, charts and multi-language support, applying UX/UI principles throughout.",
        stack: ["Angular", "RxJS", "TypeScript", "ApexCharts", "ngx-translate"],
      },
      {
        id: "data",
        accent: "emerald",
        title: "Databases and performance",
        body: "I own the full lifecycle of complex databases: modelling, migrations, query optimisation, integrity through triggers and stored procedures, and performance tuning of applications already in production.",
        stack: [
          "MariaDB / MySQL",
          "PostgreSQL",
          "Query optimisation",
          "Triggers",
          "Stored procedures",
        ],
      },
      {
        id: "devops",
        accent: "sky",
        title: "Infrastructure and DevOps",
        body: "I handle deployment end to end: CI/CD pipelines, container orchestration, VPS to on-premise infrastructure migrations and maintenance of production environments with activity monitoring.",
        stack: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "GitLab CI/CD",
          "Nginx",
          "Linux",
        ],
      },
      {
        id: "ai",
        accent: "violet",
        title: "AI and automation",
        body: "I ship AI solutions chosen for real business value: self-hosted local models, conversational assistants across messaging and voice channels, and RPA automation of testing and validation processes.",
        stack: [
          "Local LLM",
          "Conversational AI",
          "Speech recognition",
          "RPA",
        ],
      },
      {
        id: "security",
        accent: "rose",
        title: "Security and access control",
        body: "I implement end-to-end authentication and authorisation, with tokens across frontend and backend and integration with corporate directories for centralised user and permission management.",
        stack: ["JWT", "OAuth2", "Spring Security", "LDAP"],
      },
      {
        id: "leadership",
        accent: "teal",
        title: "Technical leadership and client work",
        body: "I act as technical lead across several concurrent projects: gathering client requirements, translating them into clear specifications, planning the roadmap and distributing work across the development team.",
        stack: [
          "Requirements gathering",
          "Roadmap",
          "Team coordination",
          "Agile delivery",
        ],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Technologies I work with",
    intro: "Tools I have used on real projects in production, not in tutorials.",
    groups: [
      {
        title: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Microservice architecture",
          "REST APIs",
          "JPA / Hibernate",
          "OpenAPI / Springdoc",
          "Python",
          ".NET Core",
          "Django",
          "Testing (JUnit, Mockito)",
        ],
      },
      {
        title: "Frontend",
        items: [
          "Angular",
          "RxJS",
          "TypeScript",
          "React",
          "Next.js",
          "Vue.js",
          "Tailwind CSS",
          "ApexCharts / amCharts",
          "ngx-translate (i18n)",
          "UX/UI fundamentals",
        ],
      },
      {
        title: "Data",
        items: [
          "MariaDB / MySQL",
          "PostgreSQL",
          "Relational modelling",
          "Schema migrations",
          "Query optimisation",
          "Triggers and stored procedures",
        ],
      },
      {
        title: "Infrastructure and DevOps",
        items: [
          "Docker",
          "Kubernetes",
          "Nginx",
          "Jenkins",
          "GitLab CI/CD",
          "Git",
          "Linux",
          "VPS → on-premise migrations",
          "Activity monitoring",
        ],
      },
      {
        title: "AI and automation",
        items: [
          "On-premise AI models",
          "Conversational assistants",
          "Speech recognition",
          "WhatsApp and telephony integration",
          "RPA",
        ],
      },
      {
        title: "Security",
        items: ["JWT", "OAuth2", "LDAP", "Authentication and authorisation"],
      },
      {
        title: "Web and SEO",
        items: [
          "Technical SEO",
          "Sitemaps and structured metadata",
          "Google Search Console",
          "Site indexing",
          "Web performance optimisation",
        ],
      },
      {
        title: "Leadership and delivery",
        items: [
          "Client requirements gathering",
          "Project management",
          "Team coordination",
          "Backlog prioritisation",
          "Scoping enhancements",
          "Agile delivery",
        ],
      },
    ],
  },

  experience: {
    eyebrow: "Track record",
    title: "Experience",
    roles: [
      {
        company: "AUNNA IT",
        title: "Technical Lead & Full-Stack Developer",
        period: "May 2024 — Present · Murcia",
        current: true,
        bullets: [
          "Act as technical lead across several concurrent client engagements, owning architecture, delivery and the client relationship end to end.",
          "Legacy modernisation and data migration: progressively took over technical and client ownership on legacy platform modernisations, executing full database migrations to redesigned schemas and entity models without disrupting live operations.",
          "Microservices, APIs and systems integration: designed and built multi-service Spring Boot backends, integrating external third-party APIs and interconnected microservices into cohesive, scalable platforms.",
          "Infrastructure and DevOps: led VPS to on-premise migrations, built and maintained CI/CD pipelines with Jenkins and GitLab, managed container orchestration with Kubernetes, and kept Docker/Nginx production deployments running.",
          "AI and automation: delivered a conversational AI product across messaging and voice-call channels with a self-hosted local LLM and a real-time statistics dashboard; led the evolution of a voice-recognition scheduling system to an AI-based flow while preserving all existing logic; designed an RPA solution to automate testing and validation.",
          "Client and team leadership: own client-facing requirements gathering and roadmap planning across multiple concurrent engagements, translating business needs into clear technical specifications and task breakdowns for the team.",
          "Across all engagements: consistently optimised processes, database queries and application performance, and implemented activity monitoring.",
        ],
      },
      {
        company: "Self-Employed",
        title: "Freelance Software Engineer",
        period: "February 2025 — Present · Remote",
        current: true,
        bullets: [
          "Design, build and deploy custom software solutions end to end for independent business clients, in parallel with my Tech Lead role at AUNNA IT.",
          "Deliver bespoke websites and web applications — booking and scheduling systems, content-managed sites, e-commerce — covering front-end, back-end and deployment.",
          "Design automation workflows that remove repetitive manual work for clients, from appointment and review management to day-to-day operations.",
          "Own technical SEO for client projects — sitemaps, structured metadata and Google indexing — to ensure visibility from launch.",
          "Select and integrate AI features chosen for real business value (search, matching, conversational tools) rather than as a marketing add-on.",
        ],
      },
      {
        company: "SmartWay Studio S.L.",
        title: "Full-Stack Developer",
        period: "October 2023 — February 2024 · Murcia",
        current: false,
        bullets: [
          "Delivered new features for a large-scale national platform based on specific client requirements.",
          "Built reactive forms with digital-signature capture and database integration.",
          "Implemented JWT-based security and new API endpoints.",
          "Collaborated closely and effectively with the development team.",
        ],
      },
    ],
  },

  credentials: {
    eyebrow: "Education",
    title: "Studies and certifications",
    educationLabel: "Education",
    education: [
      {
        school: "University of Murcia",
        degree: "Degree in Computer Engineering",
        location: "Murcia, Spain",
      },
    ],
    certificationsLabel: "Certifications and courses",
    certifications: [
      "UX Design course",
      "Udemy — Microservices & REST APIs with Spring Boot, OAuth2 and Docker",
      "Udemy — Angular: From Zero to Expert",
    ],
  },

  sideProjects: {
    eyebrow: "Freelance",
    title: "Work I can show in full",
    intro:
      "Projects delivered as a freelancer to end clients, plus a personal project. These have public links and open source code.",
    visit: "Visit site",
    shotsLabel: "screenshots",
    projects: [
      {
        title: "Andrea Perelló · Psychology",
        description:
          "Professional site for a licensed psychologist, with appointment booking, a blog, WhatsApp contact and embedded location.",
        url: "https://andreaperellopsicologia.vercel.app/",
        tags: ["Next.js", "Bespoke design", "Blog", "Google Maps"],
        image: "/images/andrea-psicologia.webp",
      },
      {
        title: "Restaurant platform",
        description:
          "Restaurant website with a digital menu, brand-configurable colour palette, reviews and location.",
        url: "https://tuposibleweb.vercel.app/restaurante/Tu-Bar/Calle-de-ejemplo/965-125-467/ChIJG3WZi-QXYg0R4Y1tbG-onuM/4.2/856",
        tags: ["Next.js", "Digital menus", "Multi-tenant", "Reviews"],
        image: "/images/posible-inicio.webp",
      },
      {
        title: "Car Detailing Premium",
        description:
          "Commercial site for detailing services with a before/after gallery, embedded video and a quote form.",
        url: "https://car-detailing-chi.vercel.app/",
        tags: ["Next.js", "Before/After", "Video", "Conversion"],
        image: "/images/car-inicio.webp",
      },
      {
        title: "MusicStream",
        description:
          "Platform for emerging artists. Spring Boot backend with DTOs, query-param filtering, pagination and tests with JUnit and Mockito.",
        url: "https://github.com/pepehurtado/musicstream",
        tags: ["Spring Boot", "JPA", "JUnit", "Supabase"],
        image: "/images/musicstream.webp",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    body:
      "I'm open to tech lead, backend or full-stack roles, remote or with relocation. Drop me a line and I'll get back to you.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Download résumé",
  },

  interactive: {
    trigger: "See the interactive version",
    title: "Want to see the interactive site?",
    body: "It's the animated version of this portfolio: particle background, 3D cards and scroll effects. Same content, different staging. It's heavier on resources than this version.",
    confirm: "Yes, take me there",
    cancel: "No, thanks",
    href: "/en/interactive",
    backHref: "/en",
    backLabel: "Back to the classic version",
    downloadCv: "Download résumé",
    downloadDocs: "MusicStream documentation",
    copyEmail: "Copy email",
    copiedEmail: "Copied!",
    videoTitle: "MusicStream — App for emerging artists",
    dock: {
      about: "About me",
      projects: "Projects",
      experience: "Experience",
      cv: "Résumé",
    },
  },

  footer: {
    rights: "Pepe Hurtado. All rights reserved.",
    builtWith: "Built with Next.js and Tailwind CSS.",
  },

  a11y: {
    toTop: "Back to top",
    menu: "Open menu",
    switchLanguage: "Switch language",
  },
};

export default en;
