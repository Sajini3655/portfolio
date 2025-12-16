export type Project = {
  slug: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  highlights: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    short: "Premium multi-page portfolio with Next.js + Tailwind.",
    description:
      "A recruiter-first portfolio with multi-page navigation, reusable components, and clean design.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "#",
    live: "#",
    highlights: [
      "Multi-page App Router architecture",
      "Reusable UI components (cards/buttons/layout)",
      "Dynamic project pages using slugs",
    ],
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    short: "Replace with your real project.",
    description:
      "Add your real project details here (goal, features, impact, and what you learned).",
    tech: ["React", "API", "UI/UX"],
    github: "#",
    live: "#",
    highlights: [
      "Impact-driven bullets look professional",
      "Tech stack listed clearly",
      "Add screenshots later if you want",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
