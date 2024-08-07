"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Image from "next/image";

interface CardProps {
  foto: string;
  imagenUrl: string;
  titulo: string;
  link: string;
  vinculo: string;
  descripcion: string;
  lenguaje: string[];
}

// Define a mapping of languages to colors
const languageColors: { [key: string]: string } = {
  "VUE": "bg-green-800",
  "NET CORE": "bg-purple-800",
  "ANGULAR": "bg-red-800",
  "SPRING BOOT" : "bg-green-900"
};

export function AnimatedPin(props: CardProps) {
  const [hydrated, setHydrated] = useState(false);

  // Ensure client-side-only code runs after hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Avoid rendering content until hydration
  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-full w-full p-4">
      <a
        href={props.vinculo}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <PinContainer title={props.link} href={props.vinculo}>
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[24rem] lg:w-[32rem]">
            <h3 className="font-bold text-base text-slate-100">
              {props.titulo}
            </h3>
            <div className="text-base font-normal mt-2">
              <span className="text-slate-500">{props.descripcion}</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 relative">
              <Image
//Ponemos en src  /images + la variable props.foto para que se muestre la imagen que le pasamos por props
                src={`/images/${props.foto}.webp`}
                alt="Descripción de la imagen"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {props.lenguaje.map((lang, index) => (
              <li
                key={index}
                className={`rounded-full pl-1 pr-1 py-1 text-white flex items-center space-x-2 text-xs font-bold dark:bg-zinc-800 ${languageColors[lang] || 'bg-gray-500'}`}
              >
                <Image
                  src={`/images/${lang}.webp`}
                  alt={lang}
                  height={24}
                  width={24}
                  className="inline-block"
                />
                <span>{lang}</span>
              </li>
            ))}
          </div>
        </PinContainer>
      </a>
    </div>
  );
}

export default AnimatedPin;
