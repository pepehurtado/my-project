"use client";

import { useCallback, useEffect, useState } from "react";
import { en } from "../../../content/en";
import { es } from "../../../content/es";
import type { Locale, SiteContent } from "../../../content/types";

export const CONTENT: Record<Locale, SiteContent> = { es, en };

interface Options {
  initialLocale: Locale;
  /** Ruta equivalente de esta vista en cada idioma. */
  paths: Record<Locale, string>;
  /** Título del documento por idioma. Por defecto, el de los metadatos. */
  title?: (content: SiteContent) => string;
}

/**
 * Cambia el idioma sin recargar: intercambia el contenido en memoria y
 * sincroniza URL, atributo lang y título del documento. Las dos rutas
 * siguen existiendo en el servidor, así que los buscadores y los enlaces
 * directos siguen funcionando.
 */
export function useLocaleSwitch({ initialLocale, paths, title }: Options) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const apply = useCallback(
    (next: Locale) => {
      setLocale(next);
      document.documentElement.lang = next;
      const content = CONTENT[next];
      document.title = title ? title(content) : content.meta.title;
    },
    [title]
  );

  const switchLocale = useCallback(() => {
    const next: Locale = locale === "en" ? "es" : "en";
    window.history.pushState({ locale: next }, "", paths[next]);
    apply(next);
  }, [locale, paths, apply]);

  useEffect(() => {
    // El botón atrás del navegador debe devolver el idioma anterior.
    const onPopState = () => {
      const path = window.location.pathname;
      const next: Locale = path === paths.en || path.startsWith(`${paths.en}/`)
        ? "en"
        : "es";
      apply(next);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [paths, apply]);

  return { locale, content: CONTENT[locale], switchLocale };
}
