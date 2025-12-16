import Container from "@/components/Container";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <Container>
      <h1 className="section-title">About</h1>

      <div className="mt-6 grid gap-4">
        <Card>
          <p className="text-neutral-300 leading-relaxed">
            I’m <span className="text-white font-semibold">{site.name}</span>, a{" "}
            {site.role} who enjoys building responsive and accessible interfaces. I like
            working with modern JavaScript frameworks and refining UI details to deliver
            smooth user experiences.
          </p>
        </Card>

        <Card>
          <div className="text-white font-semibold">What I focus on</div>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>• Clean UI & responsive design</li>
            <li>• Maintainable, reusable components</li>
            <li>• Performance and accessibility</li>
            <li>• Real-world project building</li>
          </ul>
        </Card>
      </div>

      <Footer />
    </Container>
  );
}
