import type { SiteContent } from "./types";

export const es: SiteContent = {
  locale: "es",
  cvPath: "/Pepe_Hurtado_CV_ES.pdf",

  meta: {
    title: "Pepe Hurtado — Tech Lead & Full-Stack Software Engineer",
    description:
      "Tech Lead e ingeniero full-stack con responsabilidad end-to-end sobre la entrega. Microservicios con Spring Boot, frontend en Angular, Docker y Kubernetes, migraciones de bases de datos e infraestructura, e IA en producción.",
    keywords: [
      "tech lead",
      "full stack software engineer",
      "Spring Boot",
      "Angular",
      "microservicios",
      "Kubernetes",
      "Docker",
      "migración de bases de datos",
      "IA en producción",
      "desarrollador Murcia",
      "remote software engineer Spain",
    ],
    ogLocale: "es_ES",
  },

  nav: {
    profile: "Perfil",
    experience: "Experiencia",
    work: "Proyectos",
    stack: "Stack",
    contact: "Contacto",
    cv: "CV",
    switchLabel: "Read in English",
    switchHref: "/en",
    switchCode: "EN",
  },

  hero: {
    availability: "Murcia, España · Abierto a remoto y reubicación",
    name: "Pepe Hurtado García",
    role: "Tech Lead & Full-Stack Software Engineer",
    intro: [
      "Diseño, desarrollo y llevo a producción sistemas distribuidos para sectores donde un fallo cuesta caro: sanidad, operativa portuaria y administración pública.",
      "Tengo responsabilidad end-to-end sobre la entrega. Eso significa tanto la arquitectura y los microservicios como sentarme con el cliente a tomar requisitos, repartir el trabajo del equipo y firmar el despliegue.",
    ],
    ctaCv: "Descargar CV",
    ctaContact: "Hablemos",
  },

  profile: {
    eyebrow: "Perfil",
    title: "Ingeniería de principio a fin, no solo la parte cómoda",
    paragraphs: [
      "Empecé como desarrollador tocando frontend en Angular y microservicios en Spring Boot. Cuando el desarrollador senior del proyecto se fue, asumí su parte técnica; cuando se fue el project manager, asumí también la relación con el cliente y la planificación. Desde entonces esa es mi forma de trabajar: soy el punto de contacto técnico del proyecto de arriba abajo.",
      "Lo que más he hecho es lo que menos se enseña en un portfolio: sustituir aplicaciones legacy obsoletas por sistemas nuevos con un dominio más complejo, migrar bases de datos enteras cuando la estructura y las relaciones cambian, y mover infraestructura de VPS a on-premise sin cortar el servicio.",
      "Trabajo con equipos pequeños a mi cargo, en contacto directo con cliente, y con la responsabilidad de que lo que sale a producción funcione y se pueda mantener.",
    ],
    highlights: [
      {
        title: "Responsabilidad técnica end-to-end",
        body: "Desde la toma de requisitos con el cliente hasta el pipeline de despliegue y la monitorización en producción.",
      },
      {
        title: "Sistemas distribuidos reales",
        body: "Múltiples microservicios comunicados entre sí, integraciones con APIs de terceros y orquestación sobre Kubernetes.",
      },
      {
        title: "Migraciones de alto riesgo",
        body: "Modelos de datos rediseñados y traspasos de infraestructura ejecutados sobre sistemas que ya estaban en uso.",
      },
      {
        title: "Liderazgo y cliente",
        body: "Reparto y priorización de tareas del equipo, reuniones de requisitos y definición de evolutivos y nuevos módulos.",
      },
    ],
  },

  work: {
    eyebrow: "Capacidades",
    title: "De qué me hago responsable",
    intro:
      "Cubro el ciclo completo de entrega: arquitectura y backend, frontend, datos, infraestructura y la relación con el cliente. Esto es lo que aporto en un equipo.",
    confidentiality:
      "Trabajo bajo acuerdos de confidencialidad, así que aquí no encontrarás nombres de cliente ni detalles de producto. En una conversación puedo entrar en el detalle técnico.",
    capabilities: [
      {
        id: "legacy",
        accent: "amber",
        title: "Modernización de sistemas heredados y migración de datos",
        body: "Asumo la responsabilidad técnica y de cliente en la modernización de plataformas legacy: rediseño del modelo de entidades, migración completa de la base de datos al nuevo esquema y puesta en marcha sin interrumpir la operativa en producción.",
        stack: [
          "Modelado relacional",
          "Migraciones de esquema",
          "SQL",
          "Python",
          "JPA / Hibernate",
        ],
      },
      {
        id: "backend",
        accent: "indigo",
        title: "Microservicios, APIs e integración de sistemas",
        body: "Diseño y desarrollo backends multi-servicio en Spring Boot: APIs REST configurables y escalables, microservicios interconectados e integración con APIs externas de terceros, documentadas y mantenibles.",
        stack: [
          "Java",
          "Spring Boot",
          "APIs REST",
          "OpenAPI",
          "Microservicios",
        ],
      },
      {
        id: "frontend",
        accent: "cyan",
        title: "Frontend y experiencia de usuario",
        body: "Desarrollo y mantengo interfaces completas en Angular con RxJS para estado reactivo: componentes reutilizables, formularios avanzados, gráficos y soporte multilenguaje, aplicando criterios de UX/UI.",
        stack: [
          "Angular",
          "RxJS",
          "TypeScript",
          "ApexCharts",
          "ngx-translate",
        ],
      },
      {
        id: "data",
        accent: "emerald",
        title: "Bases de datos y rendimiento",
        body: "Gestiono el ciclo de vida completo de bases de datos complejas: modelado, migraciones, optimización de consultas, integridad mediante triggers y procedimientos almacenados, y mejora del rendimiento de aplicaciones ya en producción.",
        stack: [
          "MariaDB / MySQL",
          "PostgreSQL",
          "Optimización de consultas",
          "Triggers",
          "Procedimientos almacenados",
        ],
      },
      {
        id: "devops",
        accent: "sky",
        title: "Infraestructura y DevOps",
        body: "Llevo el despliegue de principio a fin: pipelines CI/CD, orquestación de contenedores, migraciones de infraestructura de VPS a on-premise y mantenimiento de entornos de producción con monitorización de actividad.",
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
        title: "IA y automatización",
        body: "Llevo a producción soluciones de IA elegidas por su valor de negocio: modelos alojados en local, asistentes conversacionales sobre canales de mensajería y voz, y automatización de procesos de prueba y validación con RPA.",
        stack: [
          "LLM en local",
          "IA conversacional",
          "Reconocimiento de voz",
          "RPA",
        ],
      },
      {
        id: "security",
        accent: "rose",
        title: "Seguridad y control de acceso",
        body: "Implemento autenticación y autorización de extremo a extremo, con tokens en frontend y backend e integración con directorios corporativos para la gestión centralizada de usuarios y permisos.",
        stack: ["JWT", "OAuth2", "Spring Security", "LDAP"],
      },
      {
        id: "leadership",
        accent: "teal",
        title: "Liderazgo técnico y relación con cliente",
        body: "Actúo como referente técnico en varios proyectos simultáneos: toma de requisitos con cliente, traducción a especificaciones claras, planificación de roadmap y reparto de tareas del equipo de desarrollo.",
        stack: [
          "Toma de requisitos",
          "Roadmap",
          "Coordinación de equipo",
          "Metodologías ágiles",
        ],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Tecnologías con las que trabajo",
    intro:
      "Herramientas que he usado en proyectos reales en producción, no en tutoriales.",
    groups: [
      {
        title: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Arquitectura de microservicios",
          "APIs REST",
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
          "Fundamentos de UX/UI",
        ],
      },
      {
        title: "Datos",
        items: [
          "MariaDB / MySQL",
          "PostgreSQL",
          "Modelado relacional",
          "Migraciones de esquema",
          "Optimización de consultas",
          "Triggers y procedimientos almacenados",
        ],
      },
      {
        title: "Infraestructura y DevOps",
        items: [
          "Docker",
          "Kubernetes",
          "Nginx",
          "Jenkins",
          "GitLab CI/CD",
          "Git",
          "Linux",
          "Migraciones VPS → on-premise",
          "Monitorización de actividad",
        ],
      },
      {
        title: "IA y automatización",
        items: [
          "Modelos de IA on-premise",
          "Asistentes conversacionales",
          "Reconocimiento de voz",
          "Integración con WhatsApp y telefonía",
          "RPA",
        ],
      },
      {
        title: "Seguridad",
        items: ["JWT", "OAuth2", "LDAP", "Autenticación y autorización"],
      },
      {
        title: "Web y SEO",
        items: [
          "SEO técnico",
          "Sitemaps y metadatos estructurados",
          "Google Search Console",
          "Indexación",
          "Optimización de rendimiento web",
        ],
      },
      {
        title: "Liderazgo y gestión",
        items: [
          "Toma de requisitos con cliente",
          "Gestión de proyecto",
          "Coordinación de equipo",
          "Priorización de backlog",
          "Definición de evolutivos",
          "Metodologías ágiles",
        ],
      },
    ],
  },

  experience: {
    eyebrow: "Trayectoria",
    title: "Experiencia",
    roles: [
      {
        company: "AUNNA IT",
        title: "Technical Lead & Full-Stack Developer",
        period: "Mayo 2024 — Actualidad · Murcia",
        current: true,
        bullets: [
          "Actúo como referente técnico en varios proyectos de cliente simultáneos, con responsabilidad sobre arquitectura, entrega y relación con cliente de principio a fin.",
          "Modernización de sistemas heredados y migración de datos: asumí progresivamente la responsabilidad técnica y de cliente en modernizaciones de plataformas legacy, ejecutando migraciones completas de base de datos a esquemas y modelos de entidades rediseñados sin interrumpir la operativa en producción.",
          "Microservicios, APIs e integración de sistemas: diseño y desarrollo de backends multi-servicio en Spring Boot, integrando APIs externas de terceros y microservicios interconectados en plataformas cohesionadas y escalables.",
          "Infraestructura y DevOps: migraciones de VPS a on-premise, pipelines CI/CD con Jenkins y GitLab, orquestación de contenedores con Kubernetes y despliegues de producción sobre Docker y Nginx.",
          "IA y automatización: producto de IA conversacional sobre canales de mensajería y llamada de voz con un LLM local autoalojado y panel de estadísticas en tiempo real; evolución de un sistema de citas con reconocimiento de voz hacia un flujo basado en IA preservando toda la lógica existente; diseño de una solución RPA para automatizar pruebas y validación.",
          "Liderazgo de cliente y equipo: toma de requisitos y planificación de roadmap en varios proyectos a la vez, traduciendo necesidades de negocio en especificaciones técnicas claras y reparto de tareas para el equipo.",
          "Transversal a todos los proyectos: optimización continua de procesos, consultas de base de datos y rendimiento de las aplicaciones, e implementación de monitorización de actividad.",
        ],
      },
      {
        company: "Autónomo",
        title: "Freelance Software Engineer",
        period: "Febrero 2025 — Actualidad · Remoto",
        current: true,
        bullets: [
          "Diseño, desarrollo y despliego soluciones de software a medida de principio a fin para clientes, en paralelo a mi rol de Tech Lead en AUNNA IT.",
          "Webs y aplicaciones a medida —sistemas de reservas y citas, sitios con gestión de contenido, e-commerce— cubriendo frontend, backend y despliegue.",
          "Flujos de automatización que eliminan trabajo manual repetitivo al cliente, desde la gestión de citas y reseñas hasta procesos operativos del día a día.",
          "Responsable del SEO técnico de los proyectos: sitemaps, metadatos estructurados e indexación en Google para garantizar visibilidad desde el lanzamiento.",
          "Integro funcionalidades de IA elegidas por su valor real de negocio (búsqueda, matching, herramientas conversacionales), no como reclamo de marketing.",
        ],
      },
      {
        company: "SmartWay Studio S.L.",
        title: "Desarrollador Full-Stack",
        period: "Octubre 2023 — Febrero 2024 · Murcia",
        current: false,
        bullets: [
          "Implementé nuevas funcionalidades para una plataforma nacional de gran escala a partir de requisitos específicos de cliente.",
          "Desarrollé formularios reactivos con captura de firma digital e integración con base de datos.",
          "Implementé seguridad basada en JWT y nuevos endpoints de API.",
          "Coordiné y colaboré con el equipo de desarrollo.",
        ],
      },
    ],
  },

  credentials: {
    eyebrow: "Formación",
    title: "Estudios y certificaciones",
    educationLabel: "Educación",
    education: [
      {
        school: "Universidad de Murcia",
        degree: "Ingeniería Informática",
        location: "Murcia, España",
      },
    ],
    certificationsLabel: "Certificaciones y cursos",
    certifications: [
      "Curso de UX",
      "Udemy — Microservicios y APIs REST con Spring Boot, OAuth2 y Docker",
      "Udemy — Angular: de cero a experto",
    ],
  },

  sideProjects: {
    eyebrow: "Freelance",
    title: "Trabajo que puedo enseñar entero",
    intro:
      "Proyectos entregados como autónomo a cliente final, más algún proyecto personal. Aquí sí hay enlaces públicos y código abierto.",
    visit: "Ver sitio",
    shotsLabel: "capturas",
    projects: [
      {
        title: "Andrea Perelló · Psicología",
        description:
          "Sitio profesional para psicóloga colegiada, con reserva de citas, blog, contacto por WhatsApp y ubicación integrada.",
        url: "https://andreaperellopsicologia.vercel.app/",
        tags: ["Next.js", "Diseño a medida", "Blog", "Google Maps"],
        image: "/images/andrea-psicologia.webp",
      },
      {
        title: "Plataforma para restauración",
        description:
          "Web para restaurantes con menú digital, paleta de color personalizable por marca, reseñas y ubicación.",
        url: "https://tuposibleweb.vercel.app/restaurante/Tu-Bar/Calle-de-ejemplo/965-125-467/ChIJG3WZi-QXYg0R4Y1tbG-onuM/4.2/856",
        tags: ["Next.js", "Menús digitales", "Multi-tenant", "Reseñas"],
        image: "/images/posible-inicio.webp",
      },
      {
        title: "Car Detailing Premium",
        description:
          "Sitio comercial para servicios de detailing con galería antes/después, vídeos integrados y formulario de presupuesto.",
        url: "https://car-detailing-chi.vercel.app/",
        tags: ["Next.js", "Antes/Después", "Vídeo", "Conversión"],
        image: "/images/car-inicio.webp",
      },
      {
        title: "MusicStream",
        description:
          "Plataforma para artistas emergentes. Backend en Spring Boot con DTOs, filtros por query params, paginación y tests con JUnit y Mockito.",
        url: "https://github.com/pepehurtado/musicstream",
        tags: ["Spring Boot", "JPA", "JUnit", "Supabase"],
        image: "/images/musicstream.webp",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "¿Hablamos?",
    body:
      "Estoy abierto a posiciones de tech lead, backend o full-stack, en remoto o con reubicación. Escríbeme y te respondo.",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Descargar CV",
  },

  interactive: {
    trigger: "Ver versión interactiva",
    title: "¿Quieres ver la web interactiva?",
    body: "Es la versión animada de este portfolio: fondo de partículas, tarjetas 3D y efectos de scroll. El contenido es el mismo; cambia la puesta en escena. Consume más recursos que esta versión.",
    confirm: "Sí, llévame allí",
    cancel: "No, gracias",
    href: "/interactiva",
    backHref: "/",
    backLabel: "Volver a la versión clásica",
    downloadCv: "Descargar CV",
    downloadDocs: "Documentación MusicStream",
    copyEmail: "Copiar correo",
    copiedEmail: "¡Copiado!",
    videoTitle: "MusicStream — Aplicación para artistas emergentes",
    dock: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      cv: "CV",
    },
  },

  footer: {
    rights: "Pepe Hurtado. Todos los derechos reservados.",
    builtWith: "Hecho con Next.js y Tailwind CSS.",
  },

  a11y: {
    toTop: "Volver arriba",
    menu: "Abrir menú",
    switchLanguage: "Cambiar idioma",
  },
};

export default es;
