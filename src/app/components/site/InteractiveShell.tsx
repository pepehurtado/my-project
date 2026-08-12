"use client";

import { INTERACTIVE_PATHS } from "../../../content/types";
import type { Locale } from "../../../content/types";
import { VortexDemoSecond } from "../VortexView";
import ToTop from "./ToTop";
import { useLocaleSwitch } from "./useLocaleSwitch";

/**
 * Versión animada del portfolio. Cambia de idioma igual que la clásica:
 * sin recargar, intercambiando el contenido y sincronizando la URL.
 */
export function InteractiveShell({ initialLocale }: { initialLocale: Locale }) {
  const { locale, content, switchLocale } = useLocaleSwitch({
    initialLocale,
    paths: INTERACTIVE_PATHS,
    title: (c) => `${c.interactive.trigger} | Pepe Hurtado`,
  });

  const otherLocale: Locale = locale === "en" ? "es" : "en";

  return (
    <>
      <h1 className="sr-only">
        {content.hero.name} — {content.hero.role} · {content.interactive.trigger}
      </h1>

      <VortexDemoSecond key={locale} content={content} />

      {/* Controles flotantes: sólidos, porque sobre el fondo de partículas
          cualquier cosa translúcida se pierde. */}
      <a
        href={content.interactive.backHref}
        className="fixed bottom-24 left-6 z-[60] inline-flex h-14 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-neutral-950 shadow-xl shadow-black/60 ring-1 ring-black/10 transition-all duration-300 hover:bg-neutral-100 hover:shadow-2xl md:bottom-10"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M13 8H3" />
          <path d="M7 4L3 8l4 4" />
        </svg>
        {content.interactive.backLabel}
      </a>

      {/* href real para que los buscadores encuentren la otra versión;
          el clic cambia el idioma sin recargar. */}
      <a
        href={INTERACTIVE_PATHS[otherLocale]}
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey) return;
          event.preventDefault();
          switchLocale();
        }}
        aria-label={`${content.a11y.switchLanguage}: ${content.nav.switchLabel}`}
        title={content.nav.switchLabel}
        className="group fixed left-6 top-6 z-[60] inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 text-sm font-bold text-white shadow-xl shadow-indigo-950/60 ring-1 ring-white/25 transition-all duration-300 hover:from-indigo-400 hover:to-violet-400 hover:shadow-2xl hover:shadow-indigo-500/40"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 010 18a15 15 0 010-18z" />
        </svg>
        {content.nav.switchCode}
      </a>

      {/* Elevado para no chocar con el dock flotante centrado abajo */}
      <ToTop
        label={content.a11y.toTop}
        position="bottom-24 right-6 md:bottom-10"
      />
    </>
  );
}

export default InteractiveShell;
