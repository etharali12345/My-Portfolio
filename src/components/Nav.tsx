import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data";
import { useActiveSection } from "./useActiveSection";
import { cn } from "../hooks/ui";

const ids = nav.map((n) => n.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const link = (id: string) =>
    cn(
      "rounded-full px-3 py-1.5 text-sm transition-colors",
      active === id ? "bg-raised text-brand-300" : "text-muted hover:text-fg",
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          aria-label={`${profile.name}, back to top`}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white transition hover:bg-brand-500"
        >
          {profile.name.charAt(0)}
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "true" : undefined}
              className={link(n.id)}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary hidden md:inline-flex">
          Contact me
        </a>
        <button
          type="button"
          className="btn btn-ghost !p-2.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-line/60 px-5 py-4 md:hidden"
        >
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className={cn(link(n.id), "!py-3 text-base")}
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
