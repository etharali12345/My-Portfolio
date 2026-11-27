import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Code2,
  Database,
  Globe,
  Layers,
  Lock,
  Box,
  Server,
  Smartphone,
  Wind,
  Webhook,
} from "lucide-react";

export const profile = {
  name: "E",
  photo: "../../assets/Me.jpg",
  email: "etharali12345@outlook.com",
  github: "https://github.com/etharali12345",
  linkedin: "https://www.linkedin.com/in/ethar-abdelrahman-602a83286/",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export interface Skill {
  label: string;
  icon: LucideIcon;
  note?: string;
  placeholder?: boolean;
}

export const skillGroups: { title: string; span: string; skills: Skill[] }[] = [
  {
    title: "Frontend development",
    span: "lg:col-span-2 md:col-span-3",
    skills: [
      { label: "HTML & CSS", icon: Globe },
      { label: "React", icon: Code2 },
      { label: "REST APIs", icon: Webhook },
      { label: "Three.js", icon: Box, note: "WebGL" },
      { label: "Tailwind", icon: Wind },
      { label: "Bootstrap", icon: Layers },
    ],
  },
  {
    title: "Backend development",
    span: "lg:col-span-2  md:col-span-3",
    skills: [
      { label: "Flask", icon: Server },
      { label: "MySQL", icon: Database },
      { label: "Authen\u00ADtication", icon: Lock, note: "JWT" },
    ],
  },
  {
    title: "Mobile development",
    span: "lg:col-span-2  md:col-span-3",
    skills: [
      { label: "React Native", icon: Smartphone },
      { label: "NativeWind", icon: Wind, note: "Tailwind for React Native" },
    ],
  },

  {
    title: "Programming languages",
    span: "lg:col-span-6  md:col-span-3",
    skills: [
      { label: "JavaScript", icon: Braces },
      { label: "Python", icon: Braces },
      { label: "TypeScript", icon: Braces },
      { label: "Java", icon: Braces },
    ],
  },
];

export interface Project {
  name: string;
  image?: string;
  description: string;
  tech: string[];
  preview: boolean;
  github?: string;
  demo?: string;
}
export const projects: Project[] = [
  {
    name: "Missing persons facial recognition",
    image: "../../assets/project2.jpg",
    description:
      "a full-stack web app that helps families find their missing relatives. It compares faces across missing and found reports. Separate roles for users, authorities, and admins; Arabic RTL interface.",
    tech: ["React", "Flask", "MySQL", "ML", "CNN", "FAISS", "ArcFace"],
    preview: true,
    github:
      "https://github.com/etharali12345/Missing-Person-Identification-website",
    demo: "",
  },
  {
    name: "Restaurant delivery app: user personas",
    description:
      "A UX exercise that builds personas for a restaurant delivery app, separating what users need from what frustrates them.",
    tech: ["UX research", "Personas"],
    preview: true,
  },
  {
    name: "Restaurant delivery app: user personas",
    description:
      "A UX exercise that builds personas for a restaurant delivery app, separating what users need from what frustrates them.",
    tech: ["UX research", "Personas"],
    preview: true,
  },
];

export const timeline = {
  education: [
    {
      title: "Bachelor’s degree in Information Technology",
      org: "Sudan University",
      meta: "[Graduation year]",
      detail:
        "Thesis: missing persons facial recognition platform. Coursework included distributed databases, NoSQL and NewSQL systems, data warehousing, ERP and CRM, and cyber ethics.",
    },
  ],
  other: [
    {
      title: "[Internship or job title]",
      org: "[Organization]",
      meta: "[Dates]",
      detail: "Add your experience here.",
      placeholder: true,
    },
    {
      title: "[Certification name]",
      org: "[Issuer]",
      meta: "[Year]",
      detail: "Add certifications here.",
      placeholder: true,
    },
  ],
};
