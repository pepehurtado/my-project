import type { ProfileContent } from "../../../content/types";
import Reveal from "./Reveal";

export function Profile({ profile }: { profile: ProfileContent }) {
  return (
    <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:gap-16">
      <Reveal>
        <div className="space-y-5">
          {profile.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-pretty leading-relaxed text-neutral-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="space-y-px overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.06]">
          {profile.highlights.map((item) => (
            <li key={item.title} className="bg-[#0A0B0F] p-5">
              <h3 className="text-sm font-medium text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export default Profile;
