import { skillGroups } from "../data";
import { cn, SectionHeading } from "../hooks/ui";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading title="Skills & technologies">
        What I’ve used in real projects, plus what I’m learning next.
      </SectionHeading>
      <div className="grid gap-4 lg:grid-cols-6">
        {skillGroups.map((g) => (
          <div key={g.title} className={cn("box p-6", g.span)}>
            <h3 className="font-display text-lg font-bold">{g.title}</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {g.skills.map(({ label, icon: Icon, note, placeholder }) => (
                <li
                  key={label}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border p-3 transition-colors",
                    placeholder
                      ? "border-dashed border-line text-muted"
                      : "border-line bg-raised hover:border-brand-500/50",
                  )}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600/15 text-brand-300">
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="min-w-0 text-sm font-medium leading-tight">
                    {label}
                    {note && (
                      <span className="block text-xs font-normal text-brand-300">
                        {note}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
