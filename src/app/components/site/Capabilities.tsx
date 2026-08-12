import type { WorkContent } from "../../../content/types";
import { ACCENTS } from "./accents";
import Reveal from "./Reveal";

export function Capabilities({ work }: { work: WorkContent }) {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        {work.capabilities.map((item, index) => {
          const accent = ACCENTS[item.accent];

          return (
            <Reveal key={item.id} delay={Math.min(index, 3) * 0.05}>
              <article
                className={`group h-full overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.015] transition-all duration-300 hover:border-white/[0.18] ${accent.glow}`}
              >
                <div className={`h-[2px] w-full ${accent.rule} opacity-70`} />

                <div className="p-6">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                    />
                    <span className="font-mono text-[11px] text-neutral-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={`mt-3 text-balance text-lg font-semibold tracking-tight ${accent.text}`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-pretty text-[15px] leading-relaxed text-neutral-400">
                    {item.body}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded border px-2 py-1 font-mono text-[11px] ${accent.chip}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <p className="mt-10 text-sm italic text-neutral-600">
          {work.confidentiality}
        </p>
      </Reveal>
    </div>
  );
}

export default Capabilities;
