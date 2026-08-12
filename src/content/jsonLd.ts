import type { SiteContent } from "./types";
import {
  EMAIL,
  FULL_NAME,
  GITHUB,
  JOB_TITLE,
  LINKEDIN,
  PHONE,
  SITE_URL,
} from "./types";

/** Datos estructurados de Person, uno por versión de idioma. */
export function buildJsonLd(content: SiteContent) {
  const skills = Array.from(
    new Set(content.stack.groups.flatMap((group) => group.items))
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FULL_NAME,
    alternateName: "Pepe Hurtado",
    jobTitle: JOB_TITLE,
    description: content.meta.description,
    email: `mailto:${EMAIL}`,
    telephone: PHONE,
    url: content.locale === "en" ? `${SITE_URL}/en` : SITE_URL,
    image: `${SITE_URL}/images/imagenperfilpepe.webp`,
    sameAs: [LINKEDIN, GITHUB],
    knowsLanguage: ["es", "en"],
    knowsAbout: skills,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murcia",
      addressCountry: "ES",
    },
    worksFor: {
      "@type": "Organization",
      name: "AUNNA IT",
    },
    alumniOf: content.credentials.education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.school,
    })),
  };
}
