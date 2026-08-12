import type { CredentialsContent } from "../../../content/types";
import Reveal from "./Reveal";

export function Credentials({ content }: { content: CredentialsContent }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-14">
      <Reveal>
        <h3 className="border-b border-white/[0.08] pb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-300/80">
          {content.educationLabel}
        </h3>
        <ul className="mt-5 space-y-5">
          {content.education.map((item) => (
            <li key={item.school}>
              <p className="text-base font-medium text-white">{item.school}</p>
              <p className="mt-1 text-[15px] text-neutral-400">{item.degree}</p>
              <p className="mt-1 font-mono text-xs text-neutral-600">
                {item.location}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.06}>
        <h3 className="border-b border-white/[0.08] pb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-300/80">
          {content.certificationsLabel}
        </h3>
        <ul className="mt-5 space-y-3">
          {content.certifications.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[15px] leading-relaxed text-neutral-400"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-3 shrink-0 bg-white/20"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export default Credentials;
