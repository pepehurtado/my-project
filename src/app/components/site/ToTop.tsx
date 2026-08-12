"use client";

import { useEffect, useState } from "react";

export function ToTop({
  label,
  /** Posición; se sobrescribe cuando hay otro elemento fijo abajo. */
  position = "bottom-6 right-6",
}: {
  label: string;
  position?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label={label}
      title={label}
      className={`group fixed ${position} z-[55] flex h-14 items-center gap-0 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 pl-[15px] pr-[15px] text-white shadow-xl shadow-indigo-950/60 ring-1 ring-white/25 transition-all duration-300 hover:from-indigo-400 hover:to-violet-400 hover:shadow-2xl hover:shadow-indigo-500/40 md:hover:pl-5 md:hover:pr-6 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <path d="M8 13V3.5" />
        <path d="M3.5 8L8 3.5 12.5 8" />
      </svg>

      {/* La etiqueta solo se despliega en escritorio, al pasar el cursor */}
      <span className="hidden max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[12rem] group-hover:pl-2.5 group-hover:opacity-100 md:inline-block">
        {label}
      </span>
    </button>
  );
}

export default ToTop;
