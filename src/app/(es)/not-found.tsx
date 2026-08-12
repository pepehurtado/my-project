import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada — 404",
  description: "La página que buscas no existe.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-indigo-300/80">
          Error 404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Esta página no existe
        </h1>
        <p className="mt-4 leading-relaxed text-neutral-400">
          El enlace puede estar roto o la página se ha movido.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            Volver al inicio
          </Link>
          <a
            href="/en"
            className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/35 hover:bg-white/[0.04]"
          >
            Read in English
          </a>
        </div>
      </div>
    </main>
  );
}
