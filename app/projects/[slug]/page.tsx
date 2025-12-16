import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { getProject, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h1 className="section-title">{project.title}</h1>
        <p className="text-neutral-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.github && <Button href={project.github} newTab>GitHub</Button>}
          {project.live && <Button href={project.live} newTab variant="primary">Live Demo</Button>}
          <Button href="/projects">Back to Projects</Button>
        </div>
      </div>

      <div className="mt-10">
        <Card>
          <div className="text-white font-semibold">Highlights</div>
          <ul className="mt-4 space-y-2 text-neutral-300">
            {project.highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Footer />
    </Container>
  );
}
