import type { Metadata } from "next";
import InteractiveShell from "../../components/site/InteractiveShell";

export const metadata: Metadata = {
  title: "Versión interactiva",
  description:
    "Versión animada del portfolio de Pepe Hurtado, con fondo de partículas, tarjetas 3D y efectos de scroll.",
  alternates: {
    canonical: "/interactiva",
    languages: {
      es: "/interactiva",
      en: "/en/interactive",
    },
  },
  // Es una presentación alternativa del mismo contenido: no debe competir
  // con la página principal en los buscadores.
  robots: { index: false, follow: true },
};

export default function InteractivePageEs() {
  return (
    <main>
      <InteractiveShell initialLocale="es" />
    </main>
  );
}
