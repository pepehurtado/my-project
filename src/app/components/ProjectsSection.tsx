"use client";

// Versión interactiva de los proyectos freelance.
// Los textos vienen de src/content/es.ts; aquí solo viven las galerías
// de capturas, que son propias de esta vista.
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import SparklesPreview from "./SparklesPreview";
import { GalleryModal } from "./GalleryModal";
import type { SideProject, SiteContent } from "../../content/types";

type GalleryImage = { title: string; src: string; hoverText?: string };

/** Capturas por proyecto, indexadas por su URL pública. */
const GALLERIES: Record<string, GalleryImage[]> = {
  "https://andreaperellopsicologia.vercel.app/": [
    { title: "Página Principal", src: "/images/andrea-psicologia.webp", hoverText: "Diseño elegante y profesional con llamadas a la acción claras" },
    { title: "Sobre Mí", src: "/images/andrea-sobremi.webp", hoverText: "Sección personal que conecta con los clientes potenciales" },
    { title: "Servicios", src: "/images/andrea-servicios.webp", hoverText: "Presentación clara y organizada de servicios con un diseño limpio y enfocado en la confianza." },
    { title: "Preguntas frecuentes", src: "/images/andrea-preguntas.webp", hoverText: "Sistema de blog para compartir artículos y recursos" },
    { title: "Contacto", src: "/images/andrea-contacto.webp", hoverText: "Integración con WhatsApp funcional" },
    { title: "Diseño adaptado", src: "/images/andrea-adaptado.webp", hoverText: "Adaptación a dispositivos móviles y tablets" },
  ],
  "https://tuposibleweb.vercel.app/restaurante/Tu-Bar/Calle-de-ejemplo/965-125-467/ChIJG3WZi-QXYg0R4Y1tbG-onuM/4.2/856": [
    { title: "Inicio", src: "/images/posible-inicio.webp", hoverText: "Diseño inmersivo con una interfaz limpia y moderna" },
    { title: "Paleta personalizable", src: "/images/posible-paleta.webp", hoverText: "Personalización completa de la paleta para adaptarse a la marca" },
    { title: "Menú digital", src: "/images/posible-menu.webp", hoverText: "Menús interactivos con navegación fluida y acceso directo a cada categoría" },
    { title: "Ubicación", src: "/images/posible-ubicacion.webp", hoverText: "Contacto y ubicación en un mapa interactivo" },
    { title: "Vista móvil", src: "/images/posible-adaptado.webp", hoverText: "Experiencia optimizada para dispositivos móviles" },
  ],
  "https://car-detailing-chi.vercel.app/": [
    { title: "Inicio", src: "/images/car-inicio.webp", hoverText: "Diseño de lujo, directo y enfocado a conversión" },
    { title: "Antes / Después", src: "/images/car-comparar.webp", hoverText: "Slider interactivo que muestra la calidad del trabajo" },
    { title: "Servicios", src: "/images/car-servicios.webp", hoverText: "Tarjetas claras y concisas en modo oscuro" },
    { title: "Contacto", src: "/images/car-formulario.webp", hoverText: "Formulario de presupuesto accesible y orientado a conversión" },
    { title: "Diseño responsivo", src: "/images/car-adaptado.webp", hoverText: "Interfaz adaptada a cualquier dispositivo" },
    { title: "Términos y chat", src: "/images/car-terminos.webp", hoverText: "Términos y condiciones para acceder al chat" },
  ],
};

export function ProjectsSection({ content: es }: { content: SiteContent }) {
  const [selected, setSelected] = useState<SideProject | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (project: SideProject) => {
    setSelected(project);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelected(null);
  };

  const gallery = selected ? GALLERIES[selected.url] ?? [] : [];

  return (
    <div className="w-full">
      <div style={{ height: "5rem" }}>
        <SparklesPreview texto={es.sideProjects.title} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-6 md:px-4">
        {es.sideProjects.projects.map((project) => {
          const shots = GALLERIES[project.url] ?? [];

          return (
            <CardContainer
              key={project.url}
              className="inter-var w-full max-w-sm mx-auto md:max-w-none"
            >
              <CardBody className="bg-violet-900/30 hover:bg-white/90 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.3] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 md:p-6 border hover:shadow-2xl hover:shadow-purple-500/[0.2] transition-all duration-500 hover:scale-[1.02]">
                <CardItem
                  translateZ="50"
                  className="text-white hover:text-neutral-800 mb-2 transition-colors duration-300 text-lg md:text-xl font-bold"
                >
                  {project.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-300 group-hover/card:text-neutral-600 text-sm max-w-sm mt-2 mb-3 md:mb-4 leading-relaxed transition-colors duration-300"
                >
                  {project.description}
                </CardItem>

                {project.image ? (
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className={`w-full mt-3 md:mt-4 overflow-hidden rounded-xl relative group ${
                      shots.length ? "cursor-pointer" : ""
                    }`}
                    onClick={(e: React.MouseEvent) => {
                      if (!shots.length) return;
                      e.stopPropagation();
                      openGallery(project);
                    }}
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      <div className="absolute -inset-[3px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-xl animate-spin-slow opacity-90" />

                      <div className="relative rounded-xl overflow-hidden bg-gray-900">
                        <Image
                          src={project.image}
                          height={1000}
                          width={1000}
                          className="h-48 md:h-60 w-full object-cover rounded-xl group-hover:scale-105 transition-all duration-500 relative z-10"
                          alt={project.title}
                        />

                        {shots.length ? (
                          <div className="absolute bottom-2 left-2 z-20">
                            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/20">
                              <span className="text-white text-xs font-medium">
                                {shots.length} {es.sideProjects.shotsLabel}
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </CardItem>
                ) : null}

                <div className="mt-4 md:mt-6">
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.tags.map((tag) => (
                      <CardItem
                        key={tag}
                        translateZ="30"
                        className="px-2 md:px-3 py-1 bg-purple-500/30 group-hover/card:bg-purple-100 rounded-full text-xs text-purple-200 group-hover/card:text-purple-700 font-medium transition-all duration-300"
                      >
                        {tag}
                      </CardItem>
                    ))}
                  </div>

                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-3 md:px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {es.sideProjects.visit}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>

      {selected ? (
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          projectTitle={selected.title}
          images={gallery}
        />
      ) : null}

      <div className="mt-20 w-full h-px bg-purple-500/30" />
    </div>
  );
}

export default ProjectsSection;
