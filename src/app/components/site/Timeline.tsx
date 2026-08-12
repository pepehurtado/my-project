import type { ExperienceContent } from "../../../content/types";
import Reveal from "./Reveal";

export function Timeline({ experience }: { experience: ExperienceContent }) {
  return (
    <div className="relative">
      {/* Línea vertical continua */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-indigo-400/70 via-violet-400/30 to-transparent"
      />

      <div className="space-y-12">
        {experience.roles.map((role, index) => (
          <Reveal key={role.company} delay={index * 0.06}>
            <div className="relative pl-8">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 ${
                  role.current
                    ? "border-indigo-400 bg-indigo-400/40 shadow-[0_0_12px_rgba(129,140,248,0.6)]"
                    : "border-white/25 bg-[#08090C]"
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {role.company}
                </h3>
                <span className="font-mono text-xs text-neutral-500">
                  {role.period}
                </span>
              </div>

              <p className="mt-1 text-[15px] text-indigo-300/90">{role.title}</p>

              <ul className="mt-5 space-y-2.5">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-pretty leading-relaxed text-neutral-400"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-3 shrink-0 bg-white/20"
                    />
                    <span className="text-[15px]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
