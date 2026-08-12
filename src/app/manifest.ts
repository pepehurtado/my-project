import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pepe Hurtado — Tech Lead & Full-Stack Software Engineer",
    short_name: "Pepe Hurtado",
    description:
      "Portfolio de Pepe Hurtado García: Tech Lead e ingeniero full-stack.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090C",
    theme_color: "#08090C",
    icons: [
      {
        src: "/images/favico.webp",
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}
