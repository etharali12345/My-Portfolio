import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  CalendarClock,
  Globe,
  Languages,
  Layers,
  Lock,
  Network,
  ScanFace,
  Search,
  Server,
  Smartphone,
} from "lucide-react";

export const profile = {
  name: "E",
  photo: "../../assets/images.jpg",
  email: "",
  github: "",
  linkedin: "",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
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
    span: "lg:col-span-2",
    skills: [
      { label: "React", icon: Code2 },
      { label: "Bootstrap", icon: Layers },
      { label: "Arabic RTL interfaces", icon: Languages },
      { label: "HTML & CSS", icon: Globe },
    ],
  },
  {
    title: "Backend development",
    span: "lg:col-span-2",
    skills: [
      { label: "Flask", icon: Server },
      { label: "JWT authentication", icon: Lock },
      { label: "MySQL", icon: Database },
      { label: "Scheduled jobs", icon: CalendarClock },
    ],
  },
  {
    title: "Tools & technologies",
    span: "lg:col-span-2",
    skills: [
      { label: "RetinaFace & ArcFace", icon: ScanFace },
      { label: "FAISS vector search", icon: Search },
      { label: "Railway & Vercel", icon: Cloud },
      { label: "UML modelling", icon: Network },
    ],
  },
  {
    title: "Mobile development",
    span: "lg:col-span-3",
    skills: [
      { label: "React Native", icon: Smartphone, note: "Learning now" },
      { label: "Flutter", icon: Smartphone, note: "Planned next" },
    ],
  },
  {
    title: "Programming languages",
    span: "lg:col-span-3",
    skills: [
      { label: "Python", icon: Braces },
      { label: "JavaScript", icon: Braces },
      { label: "SQL", icon: Database },
      { label: "Add more", icon: Braces, placeholder: true },
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
    tech: [
      "React",
      "Flask",
      "MySQL",
      "ML",
      "CNN",
      "FAISS",
      "Railway",
      "Vercel",
    ],
    preview: true,
    github: "",
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
