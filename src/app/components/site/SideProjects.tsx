import Image from "next/image";
import type { SideProjectsContent } from "../../../content/types";
import Reveal from "./Reveal";

export function SideProjects({ content }: { content: SideProjectsContent }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {content.projects.map((project, index) => (
        <Reveal key={project.url} delay={Math.min(index, 3) * 0.05}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.015] transition-colors hover:border-white/[0.18]"
          >
            {project.image ? (
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06] bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top opacity-80 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
              </div>
            ) : null}

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-medium text-white">
                  {project.title}
                </h3>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-neutral-600 transition-colors group-hover:text-indigo-300"
                >
                  <path d="M5 11L11 5" />
                  <path d="M6 5h5v5" />
                </svg>
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/[0.08] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export default SideProjects;
