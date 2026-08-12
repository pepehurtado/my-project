"use client";
import React, { useState } from "react";
import { Vortex } from "../components/ui/vortex";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import HeroHighlightDemo from "./HeroHighligth";
import TracingBeamDemo from "./TracingBeamDemo";
import { Button } from "../components/ui/moving-border";
import YouTubeVideo from "./YouTubeVideo";
import ProjectsSection from "./ProjectsSection";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconUser,
  IconBriefcase,
  IconDownload,
  IconCode,
  IconPhone,
} from "@tabler/icons-react";
import { EMAIL, GITHUB, LINKEDIN, PHONE, PHONE_HREF } from "../../content/types";
import type { SiteContent } from "../../content/types";

export function VortexDemoSecond({ content }: { content: SiteContent }) {
  const [copied, setCopied] = useState(false);
  const emailAddress = EMAIL;

  const links = [
    {
      title: content.interactive.dock.about,
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: content.interactive.dock.projects,
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#proyectos",
    },
    {
      title: content.interactive.dock.experience,
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experiencia",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: GITHUB,
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: LINKEDIN,
    },
    {
      title: content.interactive.dock.cv,
      icon: (
        <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: content.cvPath,
    },
    {
      title: PHONE,
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `tel:${PHONE_HREF}`,
    },
    {
      title: emailAddress,
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `mailto:${emailAddress}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const downloadFile = async (path: string) => {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(path);

      const link = document.createElement("a");
      link.href = path;
      link.download = path.split("/").pop() ?? "download";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Si la descarga programática falla, abrir el PDF sirve igual.
      window.open(path, "_blank", "noopener");
    }
  };

  return (
    <div className="min-h-screen items-center scrollbar">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col items-center justify-center px-2 md:px-6 py-4 mt:0 pt-0 md:pt-0"
      >
        <div id="about" className="flex flex-col md:flex-row items-center justify-center gap-4">
          <ThreeDCardDemo name={content.hero.name} />
          <div className="flex flex-col items-center md:items-center">
            <HeroHighlightDemo content={content} />

            <div className="flex flex-col sm:flex-row items-center justify-center mx-auto gap-6 mt-6 sm:mt-8">
              <Button
                style={{ borderRadius: "3rem" }}
                className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(75,25,250,0.5)] hover:transition transform duration-300 ease-in-out hover:scale-105 flex items-center gap-2 px-4 py-2"
                onClick={() => downloadFile(content.cvPath)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                {content.interactive.downloadCv}
              </Button>

              <Button
                style={{ borderRadius: "3rem" }}
                className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(120,25,250,0.5)] hover:transition transform duration-300 ease-in-out hover:scale-105 flex items-center gap-2 px-4 py-2"
                onClick={() => downloadFile("/Presentacion_TFG_Pepe_Hurtado.pdf")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m3 0H4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1zM9 9h6m-6 4h6m-6 4h4"
                  />
                </svg>
                {content.interactive.downloadDocs}
              </Button>

              {copied ? (
                <Button
                  borderRadius="3rem"
                  className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(75,25,250,0.5)]  hover:text-slate-400 redtransition transform duration-300 ease-in-out"
                >
                  {content.interactive.copiedEmail}
                </Button>
              ) : (
                <Button
                  borderRadius="3rem"
                  className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(75,25,250,0.5)] hover:transition transform duration-300 ease-in-out hover:scale-105"
                  onClick={copyToClipboard}
                >
                  {content.interactive.copyEmail}
                </Button>
              )}
            </div>
          </div>
        </div>
        {/* Capacidades, experiencia, formación y stack */}
        <div id="experiencia" className="mt-12 md:mt-16 overflow-hidden">
          <TracingBeamDemo content={content} />
        </div>

        {/* Proyectos freelance */}
        <div id="proyectos" className="mt-16">
          <ProjectsSection content={content} />
        </div>

        {/* MusicStream, al final */}
        <div className="mt-12 md:mt-16 w-full max-w-6xl mx-auto px-4">
          <YouTubeVideo
            videoId="LcY-xoM4IZA"
            title={content.interactive.videoTitle}
            className="mb-8"
          />
        </div>

      </Vortex>
      
      {/* Floating Dock */}
      <div className="fixed bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-50 px-4">
        <FloatingDock
          items={links}
          desktopClassName="bg-black/20 backdrop-blur-md border border-white/10 scale-90 md:scale-100"
          mobileClassName="bg-black/20 backdrop-blur-md border border-white/10"
        />
      </div>
    </div>
  );
}
