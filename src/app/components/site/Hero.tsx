import Image from "next/image";
import type { HeroContent, InteractiveContent } from "../../../content/types";
import InteractiveInvite from "./InteractiveInvite";
import Reveal from "./Reveal";

export function Hero({
  hero,
  cvPath,
  interactive,
}: {
  hero: HeroContent;
  cvPath: string;
  interactive: InteractiveContent;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Rejilla tenue de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Dos focos de color en lugar de uno: da profundidad sin recargar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-0 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[8%] h-[360px] w-[460px] translate-x-1/3 -translate-y-1/2 rounded-full bg-cyan-500/12 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="relative inline-block rounded-full bg-gradient-to-tr from-indigo-400 to-cyan-400 p-[1.5px]">
              <Image
                src="/images/imagenperfilpepe.webp"
                alt={hero.name}
                width={112}
                height={112}
                priority
                className="block h-14 w-14 rounded-full object-cover"
              />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 text-xs text-emerald-200/90">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {hero.availability}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-9 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-3 bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-lg font-medium text-transparent sm:text-xl md:text-2xl">
            {hero.role}
          </p>
          <span
            aria-hidden="true"
            className="mt-6 block h-px w-28 bg-gradient-to-r from-indigo-400 via-violet-400 to-transparent"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 max-w-2xl space-y-4">
            {hero.intro.map((paragraph, i) => (
              <p
                key={i}
                className="text-pretty leading-relaxed text-neutral-400 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 2v8" />
                <path d="M4.5 7l3.5 3.5L11.5 7" />
                <path d="M2.5 13h11" />
              </svg>
              {hero.ctaCv}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-indigo-400/50 hover:bg-indigo-400/[0.07]"
            >
              {hero.ctaContact}
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10" />
                <path d="M9 4l4 4-4 4" />
              </svg>
            </a>

            <InteractiveInvite content={interactive} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
