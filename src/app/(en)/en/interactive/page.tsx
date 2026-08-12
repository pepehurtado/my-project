import type { Metadata } from "next";
import InteractiveShell from "../../../components/site/InteractiveShell";

export const metadata: Metadata = {
  title: "Interactive version",
  description:
    "Animated version of Pepe Hurtado's portfolio, with a particle background, 3D cards and scroll effects.",
  alternates: {
    canonical: "/en/interactive",
    languages: {
      es: "/interactiva",
      en: "/en/interactive",
    },
  },
  // Alternative presentation of the same content: it must not compete
  // with the main page in search results.
  robots: { index: false, follow: true },
};

export default function InteractivePageEn() {
  return (
    <main>
      <InteractiveShell initialLocale="en" />
    </main>
  );
}
