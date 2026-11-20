import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data";
import { ExtLink } from "../hooks/ui";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-10 pt-28 md:pt-32">
      <div className="grid gap-4 md:grid-cols-6">
        <div
          className="box rise relative overflow-hidden p-7 md:p-10 md:col-span-4"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 bg-brand-600/25 blur-3xl rounded-full"
          />
          <div className="relative">
            <p className="chip text-brand-300">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              Open to work
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Ethar Ali Abdelrahman
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
              Software Developer | Mobile & Frontend. I build a clean, intuitive
              mobile and web applications. with focusing and delivering a great
              user experience, responsive design, and a beautiful UI.
            </p>
            <div className="mt-4 flex gap-3">
              <ExtLink href={profile.github} label="GitHub" className="social">
                <FaGithub size={22} />
              </ExtLink>
              <ExtLink
                href={profile.linkedin}
                label="LinkedIn"
                className="social"
              >
                <FaLinkedin size={22} />
              </ExtLink>
              <ExtLink
                href={profile.email && `mailto:${profile.email}`}
                label="Email"
                className="social"
              >
                <Mail size={22} />
              </ExtLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                View my work
                <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact me
              </a>
            </div>
          </div>
        </div>

        <div
          className="box rise overflow-hidden md:col-span-2 rounded-4xl md:h-0 h-120 min-h-full"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
