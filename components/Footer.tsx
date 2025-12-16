import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-900 pt-8 text-sm text-neutral-500">
      © {new Date().getFullYear()} {site.name}. Built with Next.js.
    </footer>
  );
}
