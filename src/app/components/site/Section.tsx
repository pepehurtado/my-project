import type { ReactNode } from "react";
import type { Accent } from "../../../content/types";
import { ACCENTS } from "./accents";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Color identificativo de la sección. */
  accent?: Accent;
  /** Sin borde superior para la primera sección tras el hero. */
  seamless?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  accent = "indigo",
  seamless = false,
}: SectionProps) {
  const tone = ACCENTS[accent];
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${
        seamless ? "" : "border-t border-white/[0.06]"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <p
            className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] ${tone.text}`}
          >
            <span
              aria-hidden="true"
              className={`h-px w-6 ${tone.rule} opacity-70`}
            />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-neutral-400">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}

export default Section;
