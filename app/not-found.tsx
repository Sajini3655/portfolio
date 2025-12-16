import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <h1 className="section-title">Page not found</h1>
      <p className="mt-3 muted">That route doesn’t exist.</p>
      <Link href="/" className="mt-6 inline-block text-neutral-200 underline underline-offset-4">
        Go home
      </Link>
    </Container>
  );
}
