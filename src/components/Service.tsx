import { Smartphone, LaptopMinimal } from "lucide-react";
import { SectionHeading } from "../hooks/ui";

const services = [
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile apps with React Native.",
    icon: Smartphone,
  },
  {
    title: "Web Development",
    description:
      "Building responsive and accessible websites with modern technologies.",
    icon: LaptopMinimal,
  },
];

export default function Service() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-15">
      <SectionHeading title="What I Do" />
      <div className="grid gap-4 md:grid-cols-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="box rise p-6 md:col-span-3 hover:shadow-glow hover:-translate-y-1 transition duration-200"
            style={{ "--i": index + 2 } as React.CSSProperties}
          >
            <service.icon className="text-brand-400" size={22} aria-hidden />

            <p className="font-display text-2xl font-bold mt-4">
              {service.title}
            </p>
            <p className="mt-1 text-sm text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
