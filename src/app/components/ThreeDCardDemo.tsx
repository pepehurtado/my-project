import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import SparklesPreview from "./SparklesPreview";

export function ThreeDCardDemo({ name }: { name: string }) {
  return (
    <div className="sm:mt-10">
      <SparklesPreview texto={name} />
      <CardContainer className="inter-var -mt-32">
        <CardBody className="bg-gray-850 dark:bg-black hover:bg-violet-950 dark:hover:bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] w-72 sm:w-80 h-auto rounded-xl p-4 border">
          <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-2">
            <Image
              src="/images/imagenperfilpepe.webp"
              height="1000"
              width="1000"
              className="h-320 w-full object-cover rounded-xl group-hover/card:shadow-xl -mt-20"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mt-3 space-x-2">
{/*             <CardItem
              translateZ={20}
              translateX={0}
              as="button"
              className="px-3 py-1 rounded-xl hover:bg-gray-400 bg-white dark:bg-black dark:text-black text-black text-sm font-semibold"
            >
              <a
                href="https://github.com/pepehurtado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/GITHUBLOGO.webp"
                  alt="GitHub Logo"
                  width={40}
                  height={40}
                />
              </a>
            </CardItem> */}
            <CardItem
              translateZ={20}
              translateX={0}
              as="button"
              className="px-3 py-1 rounded-xl bg-white hover:bg-blue-400 dark:bg-black dark:text-black text-black text-sm font-semibold"
            >
              <a
                href="https://www.linkedin.com/in/pepehurtado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/LINKEDINLOGO.webp"
                  alt="LinkedIn Logo"
                  width={40}
                  height={40}
                />
              </a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default ThreeDCardDemo;
