"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const link = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={
          "text-sm transition " + (active ? "text-white" : "text-neutral-300 hover:text-white")
        }
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-tight">
          Sajini
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {link("/about", "About")}
          {link("/projects", "Projects")}
          {link("/experience", "Experience")}
          {link("/contact", "Contact")}
        </nav>

        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-950/40 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-900/60 hover:border-neutral-600 transition"
        >
          Resume <Download size={16} />
        </a>
      </div>
    </header>
  );
}
