import type { ReactNode } from "react";

export const cn = (...c: (string | false | undefined)[]) =>
  c.filter(Boolean).join(" ");

export function ExtLink({
  href,
  children,
  className,
  label,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  label: string;
}) {
  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={`${label} (not added yet)`}
        title="Not added yet. Set it in src/data.ts"
        className={cn(className, "cursor-not-allowed opacity-40")}
      >
        {children}
      </span>
    );
  }
  const mail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      aria-label={label}
      className={className}
      {...(mail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  title,
  mb = 10,
  children,
}: {
  title: string;
  mb?: number;
  children?: ReactNode;
}) {
  return (
    <div className={`mb-${mb} max-w-2xl`}>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-3 text-muted">{children}</p>}
    </div>
  );
}
