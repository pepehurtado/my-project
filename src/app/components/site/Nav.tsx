"use client";

import { useEffect, useRef, useState } from "react";
import type { NavContent } from "../../../content/types";

interface NavProps {
  nav: NavContent;
  homeHref: string;
  cvPath: string;
  switchLanguageLabel: string;
  onSwitchLocale: () => void;
}

export function Nav({
  nav,
  homeHref,
  cvPath,
  switchLanguageLabel,
  onSwitchLocale,
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setScrolled(y > 12);

      // Cerca del principio la cabecera siempre está visible. Más abajo,
      // se esconde al bajar y vuelve en cuanto el usuario sube un poco.
      if (y < 120) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
        setOpen(false);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#profile", label: nav.profile },
    { href: "#work", label: nav.work },
    { href: "#stack", label: nav.stack },
    { href: "#experience", label: nav.experience },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-[transform,background-color,border-color] duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#08090C]/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      {/* Filo de color que aparece al hacer scroll */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href={homeHref}
          className="font-mono text-sm tracking-tight text-white transition-colors hover:text-indigo-300"
        >
          pepe<span className="text-cyan-400">.</span>hurtado
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* href real para que los buscadores encuentren la otra versión,
              pero el clic cambia el idioma sin recargar. */}
          <a
            href={nav.switchHref}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey) return;
              event.preventDefault();
              onSwitchLocale();
            }}
            aria-label={`${switchLanguageLabel}: ${nav.switchLabel}`}
            title={nav.switchLabel}
            className="rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-[11px] tracking-wider text-neutral-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
          >
            {nav.switchCode}
          </a>

          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-white px-3 py-1.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 sm:block"
          >
            {nav.cv}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="rounded-md border border-white/10 p-2 text-neutral-300 transition-colors hover:border-white/25 hover:text-white md:hidden"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M3 3l10 10" />
                  <path d="M13 3L3 13" />
                </>
              ) : (
                <>
                  <path d="M2 5h12" />
                  <path d="M2 11h12" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/[0.08] bg-[#08090C]/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.05] py-3 text-sm text-neutral-300 transition-colors last:border-0 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export default Nav;
