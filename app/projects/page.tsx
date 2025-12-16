import Container from "@/components/Container";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="section-title">Projects</h1>
      <p className="mt-3 muted">Case studies with goals, stack, highlights, and links.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.slug}>
            <h3 className="text-white font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-neutral-300">{p.short}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={`/projects/${p.slug}`} variant="primary">
                View Details
              </Button>
              {p.github && <Button href={p.github} newTab>GitHub</Button>}
              {p.live && <Button href={p.live} newTab>Live</Button>}
            </div>
          </Card>
        ))}
      </div>

      <Footer />
    </Container>
  );
}
