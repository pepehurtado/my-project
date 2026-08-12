import type { StackContent } from "../../../content/types";
import { ACCENTS, ACCENT_CYCLE } from "./accents";
import Reveal from "./Reveal";

export function StackGrid({ stack }: { stack: StackContent }) {
  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {stack.groups.map((group, index) => {
        // Cada grupo hereda un color de la rotación: agrupa visualmente
        // sin necesidad de leer los encabezados.
        const accent = ACCENTS[ACCENT_CYCLE[index % ACCENT_CYCLE.length]];

        return (
          <Reveal key={group.title} delay={Math.min(index, 3) * 0.05}>
            <div>
              <h3
                className={`flex items-center gap-2 border-b border-white/[0.08] pb-3 font-mono text-[11px] uppercase tracking-[0.16em] ${accent.text}`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                />
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded border px-2 py-1 text-[13px] transition-colors ${accent.chip}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default StackGrid;
