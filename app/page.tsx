"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function HomePage() {
  const reduced = useReducedMotion();
  const featured = projects.filter((p) => p.featured);

  return (
    <Container>
      <section className="mt-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="muted text-sm">{site.role} • Open to opportunities</p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              {site.name}
            </span>
            <br />
            I build clean, modern web experiences.
          </h1>

          <p className="max-w-xl text-neutral-300 leading-relaxed">
            I focus on responsive UI, clean code, and performance. I enjoy turning ideas into polished,
            user-friendly products.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/projects" variant="primary">
              View Projects <ArrowRight size={18} />
            </Button>
            <Button href={`mailto:${site.email}`}>
              Email <Mail size={18} />
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button href={site.github} newTab>
              <Github size={18} /> GitHub
            </Button>
            <Button href={site.linkedin} newTab>
              <Linkedin size={18} /> LinkedIn
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-r from-indigo-500/15 to-cyan-500/10 blur-2xl" />
            <Image
              src="/profile.jpg"
              alt={site.name}
              width={380}
              height={380}
              priority
              className="aspect-square rounded-2xl border border-neutral-800 object-cover shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)]"
            />
            <p className="mt-3 text-center text-xs tracking-wide uppercase text-neutral-500">
              {site.name}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mt-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="section-title">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-neutral-300 hover:text-white transition">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
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

              <div className="mt-5">
                <Button href={`/projects/${p.slug}`} variant="primary">
                  Read Case Study <ArrowRight size={18} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </Container>
  );
}
