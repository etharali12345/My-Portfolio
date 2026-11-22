import { SectionHeading } from "../../hooks/ui";
import { UserRound } from "lucide-react";
import About3D from "./About3D";
import { useInView } from "@/hooks/useInView";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const words = [
  { text: "test1", icon: "Smartphone" },
  { text: "try2", icon: "Mail" },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [wave, setWave] = useState<number | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const device = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";

  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const rippleAxis = {
    desktop: { x: 45, y: 70 },
    tablet: { x: 50, y: 60 },
    mobile: { x: 50, y: 50 },
  };

  useEffect(() => {
    if (!wave || wave < 1) return;

    const disp = dispRef.current;
    const turb = turbRef.current;
    const content = contentRef.current;
    if (!disp || !turb || !content) return;

    content.style.filter = "url(#water)";
    const start = performance.now();
    const duration = 2200;
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1); // 0 → 1
      const strength = Math.sin(p * Math.PI) * (1 - p); // rises, then fades to 0
      disp.setAttribute("scale", String(strength * 40));

      // slowly move the noise so the ripple appears to travel
      const f = 0.012 + p * 0.004;
      turb.setAttribute("baseFrequency", `${f} ${f * 1.6}`);

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        content.style.filter = "";
      }
    };
    raf = requestAnimationFrame(tick);

    if (wave === 1)
      setRipples((r) => [
        ...r,
        { id: Date.now(), x: rippleAxis[device].x, y: rippleAxis[device].y },
      ]);

    return () => {
      cancelAnimationFrame(raf);
      content.style.filter = "";
    };
  }, [wave]);

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pt-20">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="water" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.012 0.02"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <SectionHeading title="About me" mb={0} />
      <div
        ref={ref}
        className="relative grid gap-4 md:grid-cols-6 pt-10 pb-20 "
      >
        <div
          ref={contentRef}
          className="relative md:col-span-4 group box p-7 md:p-9 hover:shadow-glow hover:-translate-y-1.5 transition duration-200"
        >
          <UserRound className="text-brand-400" size={22} aria-hidden="true" />
          <p className="mt-4 leading-relaxed text-muted md:text-lg group-hover:text-fg/75">
            I’m a recent Information Technology graduate from Sudan University,
            focused on building clean, user-friendly mobile and web apps. For my
            graduation project, I built a full-stack, deep-learning-based facial
            recognition platform that helps reunite missing persons with their
            families, from the React frontend with a right-to-left Arabic
            interface to the Flask backend and deployment. With a solid React
            background, I’m now moving into mobile development with React
            Native, and I’m open to opportunities in mobile and frontend
            development. I work comfortably in both Arabic and English.
          </p>
          <div className="flex h-8 overflow-hidden bg-ink mt-10">
            <p>
              per
              <span className="slider">
                {words.map((word, index) => (
                  <span key={index} className="bg-raised mb-2">
                    <span>{word.text}</span>
                  </span>
                ))}
              </span>
            </p>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          >
            {ripples.map((r) =>
              [0, 0.25, 0.5].map((delay, i) => {
                return (
                  <span
                    key={`${r.id}-${i}`}
                    className="ripple"
                    style={{
                      left: `${r.x}%`,
                      top: `${r.y}%`,
                      animationDelay: `${delay}s`,
                    }}
                    onAnimationEnd={
                      i === 2
                        ? () =>
                            setRipples((l) => l.filter((x) => x.id !== r.id))
                        : undefined
                    }
                  />
                );
              }),
            )}
          </div>
        </div>
        <div className="h-45 md:hidden" aria-hidden={true} />
        <div
          className="absolute w-full h-full xl:-right-15 md:-right-5 -top-25 pointer-events-none "
          aria-hidden={true}
        >
          <About3D device={device} active={inView} onWaypoint={setWave} />
        </div>
      </div>
    </section>
  );
}
