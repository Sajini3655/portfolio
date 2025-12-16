import Container from "@/components/Container";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const experience = [
  {
    role: "Software Engineer",
    org: "Open to opportunities",
    time: "2025 — Present",
    bullets: [
      "Building modern web interfaces with clean UI and maintainable code.",
      "Improving responsiveness, UX details, and performance.",
    ],
  },
  {
    role: "Projects & Learning",
    org: "Personal / Academic",
    time: "2024 — 2025",
    bullets: [
      "Built projects using React/Next.js and modern UI patterns.",
      "Practiced Git workflows, reusable components, and best practices.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <Container>
      <h1 className="section-title">Experience</h1>
      <p className="mt-3 muted">A simple timeline. Replace with your real roles and internships.</p>

      <div className="mt-8 grid gap-4">
        {experience.map((e) => (
          <Card key={e.role + e.time}>
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <div className="text-white font-semibold text-lg">{e.role}</div>
                <div className="muted">{e.org}</div>
              </div>
              <div className="text-sm text-neutral-400">{e.time}</div>
            </div>

            <ul className="mt-4 space-y-2 text-neutral-300">
              {e.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Footer />
    </Container>
  );
}
