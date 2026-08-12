import type { Metadata } from "next";
import type { SiteContent } from "./types";
import { SITE_URL } from "./types";

/**
 * Metadatos compartidos entre las dos raíces de idioma.
 * `hreflang` cruzado para que Google sirva la versión correcta por región.
 */
export function buildMetadata(content: SiteContent): Metadata {
  const path = content.locale === "en" ? "/en" : "/";
  const ogImage = "/images/imagenperfilpepe.webp";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: content.meta.title,
      template: "%s | Pepe Hurtado",
    },
    description: content.meta.description,
    keywords: content.meta.keywords,
    authors: [{ name: "Pepe Hurtado", url: SITE_URL }],
    creator: "Pepe Hurtado",
    publisher: "Pepe Hurtado",
    alternates: {
      canonical: path,
      languages: {
        es: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "profile",
      siteName: "Pepe Hurtado",
      title: content.meta.title,
      description: content.meta.description,
      url: path,
      locale: content.meta.ogLocale,
      alternateLocale: content.locale === "en" ? "es_ES" : "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Pepe Hurtado — Senior Full Stack Developer & Technical Lead",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/images/favico.webp",
    },
  };
}
