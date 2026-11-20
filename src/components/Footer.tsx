import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { nav, profile } from "../data";
import { ExtLink } from "../hooks/ui";

export default function Footer() {
  const icon = "text-muted transition hover:text-brand-300";
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Ethar. All rights reserved.
        </p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
        >
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-muted transition hover:text-fg"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          <ExtLink href={profile.github} label="GitHub" className={icon}>
            <FaGithub size={20} />
          </ExtLink>
          <ExtLink href={profile.linkedin} label="LinkedIn" className={icon}>
            <FaLinkedin size={20} />
          </ExtLink>
          <ExtLink
            href={profile.email && `mailto:${profile.email}`}
            label="Email"
            className={icon}
          >
            <Mail size={20} />
          </ExtLink>
        </div>
      </div>
    </footer>
  );
}
