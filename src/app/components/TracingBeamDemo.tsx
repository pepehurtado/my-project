// Bloque central de la versión interactiva: capacidades, experiencia,
// formación y stack. Todo el texto viene de src/content/es.ts, igual que
// la versión clásica, para que no existan dos verdades.
//
// El fondo de partículas hace ilegible el texto largo, así que cada
// bloque de lectura va sobre un panel casi opaco.
import React from "react";
import { TracingBeam } from "../components/ui/tracing-beam";
import MeteorsDemo from "../components/MeteorsDemo";
import type { SiteContent } from "../../content/types";

const headingClass =
  "text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-left";

const pillClass =
  "inline-block bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white rounded-full text-sm w-fit px-4 py-1 shadow-lg mt-2 mb-6";

/** Panel legible sobre el fondo animado. */
function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#07080B]/92 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl md:p-9 ${className}`}
    >
      {children}
    </div>
  );
}

export function TracingBeamDemo({ content: es }: { content: SiteContent }) {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-6xl mx-auto antialiased pt-4 relative space-y-12">
        {/* 1 · Capacidades */}
        <section>
          <Panel className="mb-8">
            <h2 className={headingClass}>{es.work.title}</h2>
            <p className="text-neutral-300 mt-4 max-w-3xl">{es.work.intro}</p>
            <p className="text-neutral-500 italic text-sm mt-4">
              {es.work.confidentiality}
            </p>
          </Panel>

          <div className="flex flex-wrap -mx-2">
            {es.work.capabilities.map((capability) => (
              <div key={capability.id} className="w-full md:w-1/2 px-5 mb-5 flex">
                <MeteorsDemo
                  titulo={capability.title}
                  descripcion={capability.body}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 2 · Experiencia y formación */}
        <Panel>
          <h2 className={headingClass}>{es.experience.title}</h2>

          {es.experience.roles.map((role) => (
            <div key={`${role.company}-${role.period}`} className="mt-10 first:mt-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                {role.company}
              </h3>
              <p className="text-purple-300 mt-1">{role.title}</p>
              <span className={pillClass}>{role.period}</span>

              <ul className="space-y-3">
                {role.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-neutral-300 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-3 shrink-0 bg-pink-400/70"
                    />
                    <span className="text-[15px]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className={`${headingClass} mt-16`}>{es.credentials.title}</h2>

          <div className="grid gap-8 md:grid-cols-2 mt-8">
            <div>
              <h3 className="text-white font-semibold mb-3">
                {es.credentials.educationLabel}
              </h3>
              {es.credentials.education.map((item) => (
                <div key={item.school} className="text-neutral-300">
                  <p className="font-medium text-white">{item.school}</p>
                  <p className="text-[15px]">{item.degree}</p>
                  <p className="text-sm text-neutral-500">{item.location}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">
                {es.credentials.certificationsLabel}
              </h3>
              <ul className="space-y-2">
                {es.credentials.certifications.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-neutral-300 text-[15px]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-3 shrink-0 bg-purple-400/70"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Panel>

        {/* 3 · Stack */}
        <Panel>
          <h2 className={headingClass}>{es.stack.title}</h2>
          <p className="text-neutral-300 mt-4 max-w-3xl mb-8">
            {es.stack.intro}
          </p>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {es.stack.groups.map((group) => (
              <div key={group.title}>
                <h3 className="border-b border-white/10 pb-2 font-semibold text-purple-300">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-purple-400/25 bg-purple-500/10 px-2.5 py-1 text-[13px] text-purple-100/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </TracingBeam>
  );
}

export default TracingBeamDemo;
