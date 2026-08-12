// Versión interactiva del encabezado.
// El texto sale del mismo contenido que la versión clásica para que
// las dos vistas no puedan desincronizarse.
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highligth";
import type { SiteContent } from "../../content/types";

export function HeroHighlightDemo({ content }: { content: SiteContent }) {
  const { hero } = content;
  return (
    <HeroHighlight>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="max-w-4xl text-center mx-auto md:mt-0"
        style={{ marginTop: "-60px" }}
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
          <Highlight className="text-black dark:text-white md:text-base lg:text-4xl">
            {hero.role}
          </Highlight>
        </h2>

        <p className="mt-6 text-sm text-emerald-300 md:text-base">
          {hero.availability}
        </p>

        {hero.intro.map((paragraph, index) => (
          <p
            key={index}
            className="text-white text-sm md:text-base lg:text-lg max-w-md md:max-w-3xl mt-6 text-center mx-auto px-12 md:px-8 lg:px-6"
          >
            {paragraph}
          </p>
        ))}
      </motion.div>
    </HeroHighlight>
  );
}

export default HeroHighlightDemo;
