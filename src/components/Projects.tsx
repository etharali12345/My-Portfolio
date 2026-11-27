import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
import { ExtLink, SectionHeading } from "../hooks/ui";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-15">
      <SectionHeading title="Projects">Selected work</SectionHeading>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={i}
            className="box group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-glow  md:max-lg:last:odd:col-span-2 md:max-lg:last:odd:justify-self-center md:max-lg:last:odd:w-[calc(50%-0.5rem)]"
          >
            <div className="h-80 border-b border-line bg-gradient-to-br from-brand-700/20 to-surface overflow-hidden">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="grid h-full grid-cols-2 gap-3 p-6" aria-hidden>
                  {["Core needs", "Frustrations"].map((t, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-line bg-raised p-3"
                    >
                      <p className="text-xs font-semibold text-muted">{t}</p>
                      <div className="mt-3 space-y-2">
                        {[80, 60, 70].map((w) => (
                          <div
                            key={w}
                            className={
                              i
                                ? "h-1.5 rounded bg-line"
                                : "h-1.5 rounded bg-brand-500/60"
                            }
                            style={{ width: `${w}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <li key={i} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
              {p.preview && (
                <div className="mt-5 flex gap-5">
                  <ExtLink
                    href={p.github}
                    label={`${p.name} on GitHub`}
                    className="link"
                  >
                    <FaGithub size={16} />
                    Code
                  </ExtLink>
                  {p.demo && (
                    <ExtLink
                      href={p.demo}
                      label={`${p.name} live demo`}
                      className="link"
                    >
                      <ExternalLink size={16} />
                      Live demo
                    </ExtLink>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
