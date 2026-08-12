import type { SiteContent } from "../../../content/types";
import { GITHUB, LINKEDIN } from "../../../content/types";

export function SiteFooter({
  content,
  onSwitchLocale,
}: {
  content: SiteContent;
  onSwitchLocale: () => void;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {content.footer.rights}
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sky-300"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-violet-300"
          >
            GitHub
          </a>
          <a
            href={content.interactive.href}
            className="transition-colors hover:text-cyan-300"
          >
            {content.interactive.trigger}
          </a>
          <a
            href={content.nav.switchHref}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey) return;
              event.preventDefault();
              onSwitchLocale();
            }}
            className="transition-colors hover:text-indigo-300"
          >
            {content.nav.switchLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
