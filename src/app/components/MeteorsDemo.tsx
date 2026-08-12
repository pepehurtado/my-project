import React from "react";
import { Meteors } from "../components/ui/meteors";

interface CardProps {
  titulo: string;
  descripcion: string;
  /** Nombre de archivo en /images, sin extensión. Opcional. */
  image?: string;
}

export function MeteorsDemo(props: CardProps) {
  return (
    <div className="w-full relative max-w-xl h-full">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-center">
        <div
          className="border px-6 py-3 rounded-lg mb-4 border-gray-500 text-gray-300 flex items-center"
          style={{ cursor: "default" }}
        >
          {props.image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`/images/${props.image}.webp`}
              alt=""
              className="mw-10 h-10 mr-3"
            />
          ) : null}
          <h3 className="font-bold text-lg text-white relative z-50 text-balance">
            {props.titulo}
          </h3>
        </div>
        <p
          className="text-sm text-white mb-4 relative z-50"
          style={{ textAlign: "center", fontWeight: 500, fontSize: "0.95rem" }}
        >
          {props.descripcion}
        </p>
        <Meteors number={20} />
      </div>
    </div>
  );
}

export default MeteorsDemo;
