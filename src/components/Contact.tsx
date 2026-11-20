import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data";
import { ExtLink, SectionHeading } from "../hooks/ui";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!profile.email) return setStatus("error");
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`;
    setStatus("sending");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setStatus("sent"), 600);
  };

  const row =
    "flex items-center gap-3 rounded-2xl border border-line bg-raised p-4 text-sm font-medium transition hover:border-brand-500/60 hover:text-brand-300";
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading title="Contact me">
        Have a role, project, or question? Send a message and I’ll reply by
        email.
      </SectionHeading>
      <div className="grid gap-4 lg:grid-cols-5">
        <form
          onSubmit={onSubmit}
          className="box grid gap-4 p-7 sm:grid-cols-2 lg:col-span-3"
        >
          <label className="text-sm font-medium">
            Name
            <input
              name="name"
              required
              autoComplete="name"
              className="input mt-2"
              placeholder="Your name"
            />
          </label>
          <label className="text-sm font-medium">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="input mt-2"
              placeholder="you@example.com"
            />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Subject
            <input
              name="subject"
              required
              className="input mt-2"
              placeholder="What’s this about?"
            />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="input mt-2 resize-y"
              placeholder="Write your message"
            />
          </label>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              <Send size={16} />
              {status === "sending" ? "Opening email…" : "Send message"}
            </button>
            <p role="status" className="text-sm text-muted">
              {status === "sent" &&
                "Your email app should open with the message ready to send."}
              {status === "error" &&
                "The contact email isn’t set yet. Add it in src/data.ts."}
            </p>
          </div>
        </form>
        <div className="grid content-start gap-3 lg:col-span-2">
          <ExtLink
            href={profile.email && `mailto:${profile.email}`}
            label="Email"
            className={row}
          >
            <Mail size={18} className="text-brand-400" />
            {profile.email || "[your email]"}
          </ExtLink>
          <ExtLink href={profile.linkedin} label="LinkedIn" className={row}>
            <FaLinkedin size={18} className="text-brand-400" />
            LinkedIn
          </ExtLink>
          <ExtLink href={profile.github} label="GitHub" className={row}>
            <FaGithub size={18} className="text-brand-400" />
            GitHub
          </ExtLink>
        </div>
      </div>
    </section>
  );
}
