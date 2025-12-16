"use client";

import Container from "@/components/Container";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { site } from "@/lib/site";
import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <Container>
      <h1 className="section-title">Contact</h1>
      <p className="mt-3 muted">Let’s work together. Reach out anytime.</p>

      <div className="mt-8 grid gap-4">
        <Card>
          <div className="text-white font-semibold">Email</div>
          <p className="mt-2 text-neutral-300">{site.email}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`} variant="primary">
              Send Email
            </Button>
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950/40 px-5 py-2.5 text-sm font-semibold text-neutral-100 hover:bg-neutral-900/60 hover:border-neutral-600 transition"
            >
              {copied ? "Copied ✅" : "Copy Email"}
            </button>
          </div>
        </Card>

        <Card>
          <div className="text-white font-semibold">Links</div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={site.github} newTab>GitHub</Button>
            <Button href={site.linkedin} newTab>LinkedIn</Button>
          </div>
        </Card>
      </div>

      <Footer />
    </Container>
  );
}
