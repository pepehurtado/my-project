import type { Accent } from "../../../content/types";

interface AccentClasses {
  /** Texto del título de sección o etiqueta. */
  text: string;
  /** Borde superior de la tarjeta. */
  rule: string;
  /** Fondo de los chips de tecnología. */
  chip: string;
  /** Punto indicador. */
  dot: string;
  /** Resplandor de fondo al pasar el cursor. */
  glow: string;
}

/**
 * Clases completas y estáticas: Tailwind no puede resolver nombres
 * construidos en tiempo de ejecución, así que nada de interpolar.
 */
export const ACCENTS: Record<Accent, AccentClasses> = {
  indigo: {
    text: "text-indigo-300",
    rule: "bg-indigo-400",
    chip: "border-indigo-400/25 bg-indigo-400/10 text-indigo-200/90",
    dot: "bg-indigo-400",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(129,140,248,0.45)]",
  },
  cyan: {
    text: "text-cyan-300",
    rule: "bg-cyan-400",
    chip: "border-cyan-400/25 bg-cyan-400/10 text-cyan-200/90",
    dot: "bg-cyan-400",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.45)]",
  },
  emerald: {
    text: "text-emerald-300",
    rule: "bg-emerald-400",
    chip: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200/90",
    dot: "bg-emerald-400",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.45)]",
  },
  amber: {
    text: "text-amber-300",
    rule: "bg-amber-400",
    chip: "border-amber-400/25 bg-amber-400/10 text-amber-200/90",
    dot: "bg-amber-400",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(251,191,36,0.45)]",
  },
  rose: {
    text: "text-rose-300",
    rule: "bg-rose-400",
    chip: "border-rose-400/25 bg-rose-400/10 text-rose-200/90",
    dot: "bg-rose-400",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(251,113,133,0.45)]",
  },
  violet: {
    text: "text-violet-300",
    rule: "bg-violet-400",
    chip: "border-violet-400/25 bg-violet-400/10 text-violet-200/90",
    dot: "bg-violet-400",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(167,139,250,0.45)]",
  },
  sky: {
    text: "text-sky-300",
    rule: "bg-sky-400",
    chip: "border-sky-400/25 bg-sky-400/10 text-sky-200/90",
    dot: "bg-sky-400",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.45)]",
  },
  teal: {
    text: "text-teal-300",
    rule: "bg-teal-400",
    chip: "border-teal-400/25 bg-teal-400/10 text-teal-200/90",
    dot: "bg-teal-400",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(45,212,191,0.45)]",
  },
};

/** Orden de rotación para secciones que no declaran acento propio. */
export const ACCENT_CYCLE: Accent[] = [
  "indigo",
  "cyan",
  "emerald",
  "amber",
  "violet",
  "sky",
  "rose",
  "teal",
];
