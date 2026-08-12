"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { InteractiveContent } from "../../../content/types";

export function InteractiveInvite({
  content,
  className,
}: {
  content: InteractiveContent;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const confirmRef = useRef<HTMLAnchorElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    // Bloquea el scroll de fondo mientras el diálogo está abierto.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    confirmRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`group inline-flex items-center gap-2 rounded-md border border-white/12 bg-gradient-to-r from-indigo-500/10 to-cyan-400/10 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-all duration-300 hover:border-cyan-400/40 hover:from-indigo-500/20 hover:to-cyan-400/20 hover:text-white ${
          className ?? ""
        }`}
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
          className="text-cyan-300 transition-transform duration-300 group-hover:rotate-90"
        >
          <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M12.6 3.4l-1.4 1.4M4.8 11.2l-1.4 1.4" />
        </svg>
        {content.trigger}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="interactive-title"
          aria-describedby="interactive-body"
          className="fixed inset-0 z-[60] flex items-center justify-center p-5"
        >
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={close}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/12 bg-[#0A0B0F] shadow-2xl shadow-black/60">
            <div className="h-[2px] w-full bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400" />

            <div className="p-6 md:p-7">
              <h2
                id="interactive-title"
                className="text-balance text-xl font-semibold tracking-tight text-white"
              >
                {content.title}
              </h2>

              <p
                id="interactive-body"
                className="mt-3 text-pretty text-[15px] leading-relaxed text-neutral-400"
              >
                {content.body}
              </p>

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-md border border-white/12 px-4 py-2.5 text-sm text-neutral-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  {content.cancel}
                </button>

                <a
                  ref={confirmRef}
                  href={content.href}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  {content.confirm}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10" />
                    <path d="M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default InteractiveInvite;
