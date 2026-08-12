"use client";

import { CLASSIC_PATHS } from "../../../content/types";
import type { Locale } from "../../../content/types";
import { useLocaleSwitch } from "./useLocaleSwitch";
import Capabilities from "./Capabilities";
import Contact from "./Contact";
import Credentials from "./Credentials";
import Hero from "./Hero";
import Nav from "./Nav";
import Profile from "./Profile";
import Section from "./Section";
import SideProjects from "./SideProjects";
import SiteFooter from "./SiteFooter";
import StackGrid from "./StackGrid";
import Timeline from "./Timeline";
import ToTop from "./ToTop";

export function SiteShell({ initialLocale }: { initialLocale: Locale }) {
  const { locale, content, switchLocale } = useLocaleSwitch({
    initialLocale,
    paths: CLASSIC_PATHS,
  });

  const homeHref = CLASSIC_PATHS[locale];

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-neutral-950"
      >
        {content.nav.work}
      </a>

      <Nav
        nav={content.nav}
        homeHref={homeHref}
        cvPath={content.cvPath}
        switchLanguageLabel={content.a11y.switchLanguage}
        onSwitchLocale={switchLocale}
      />

      <main>
        <h1 className="sr-only">
          {content.hero.name} — {content.hero.role}
        </h1>

        <Hero
          hero={content.hero}
          cvPath={content.cvPath}
          interactive={content.interactive}
        />

        <Section
          id="profile"
          accent="cyan"
          eyebrow={content.profile.eyebrow}
          title={content.profile.title}
        >
          <Profile profile={content.profile} />
        </Section>

        <Section
          id="work"
          accent="indigo"
          eyebrow={content.work.eyebrow}
          title={content.work.title}
          intro={content.work.intro}
        >
          <Capabilities work={content.work} />
        </Section>

        <Section
          id="stack"
          accent="emerald"
          eyebrow={content.stack.eyebrow}
          title={content.stack.title}
          intro={content.stack.intro}
        >
          <StackGrid stack={content.stack} />
        </Section>

        <Section
          id="experience"
          accent="violet"
          eyebrow={content.experience.eyebrow}
          title={content.experience.title}
        >
          <Timeline experience={content.experience} />
        </Section>

        <Section
          id="education"
          accent="amber"
          eyebrow={content.credentials.eyebrow}
          title={content.credentials.title}
        >
          <Credentials content={content.credentials} />
        </Section>

        <Section
          id="side-projects"
          accent="sky"
          eyebrow={content.sideProjects.eyebrow}
          title={content.sideProjects.title}
          intro={content.sideProjects.intro}
        >
          <SideProjects content={content.sideProjects} />
        </Section>

        <Section
          id="contact"
          accent="teal"
          eyebrow={content.contact.eyebrow}
          title={content.contact.title}
        >
          <Contact contact={content.contact} cvPath={content.cvPath} />
        </Section>
      </main>

      <SiteFooter content={content} onSwitchLocale={switchLocale} />

      <ToTop label={content.a11y.toTop} />
    </>
  );
}

export default SiteShell;
