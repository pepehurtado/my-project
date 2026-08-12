"use client";

import { useState } from "react";
import type { ContactContent } from "../../../content/types";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  PHONE,
  PHONE_HREF,
} from "../../../content/types";

export function Contact({
  contact,
  cvPath,
}: {
  contact: ContactContent;
  cvPath: string;
}) {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const copy = async (value: string, key: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 2200);
    } catch {
      window.location.href =
        key === "email" ? `mailto:${EMAIL}` : `tel:${PHONE_HREF}`;
    }
  };

  const externalLinks = [
    { href: LINKEDIN, label: contact.linkedinLabel, accent: "hover:border-sky-400/50 hover:text-sky-200" },
    { href: GITHUB, label: contact.githubLabel, accent: "hover:border-violet-400/50 hover:text-violet-200" },
    { href: cvPath, label: contact.cvLabel, accent: "hover:border-emerald-400/50 hover:text-emerald-200" },
  ];

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="max-w-xl text-pretty leading-relaxed text-neutral-400">
          {contact.body}
        </p>

        <dl className="mt-8 space-y-5">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-600">
              {contact.emailLabel}
            </dt>
            <dd className="mt-1.5 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="font-mono text-lg text-white underline decoration-indigo-400/50 underline-offset-[6px] transition-colors hover:decoration-cyan-400 md:text-xl"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={() => copy(EMAIL, "email")}
                className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-neutral-400 transition-colors hover:border-indigo-400/50 hover:text-indigo-200"
              >
                {copied === "email" ? contact.copiedLabel : contact.copyLabel}
              </button>
            </dd>
          </div>

          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-600">
              {contact.phoneLabel}
            </dt>
            <dd className="mt-1.5 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE_HREF}`}
                className="font-mono text-lg text-white underline decoration-cyan-400/50 underline-offset-[6px] transition-colors hover:decoration-indigo-400 md:text-xl"
              >
                {PHONE}
              </a>
              <button
                type="button"
                onClick={() => copy(PHONE_HREF, "phone")}
                className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-neutral-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-200"
              >
                {copied === "phone" ? contact.copiedLabel : contact.copyLabel}
              </button>
            </dd>
          </div>
        </dl>
      </div>

      <ul className="flex flex-wrap gap-3">
        {externalLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-sm text-white transition-colors ${link.accent}`}
            >
              {link.label}
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="opacity-60"
              >
                <path d="M5 11L11 5" />
                <path d="M6 5h5v5" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
