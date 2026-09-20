"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function FeaturedProjects() {
  const reduceMotion = useReducedMotion();
  const [primary, ...rest] = projects;
  const secondary = rest.slice(0, 2);

  if (!primary) return null;

  return (
    <section className="relative bg-off-white py-20 md:py-28" aria-labelledby="projects-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/[0.04] to-transparent"
      />

      <Container className="relative">
        <motion.div
          className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          <div className="max-w-2xl">
            <p className="eyebrow text-electric">Selected work</p>
            <h2 id="projects-heading" className="heading-section mt-3 text-navy">
              Projects shaped by real industrial constraints.
            </h2>
            <motion.div
              className="mt-5 h-px origin-left bg-gradient-to-r from-orange to-electric"
              initial={reduceMotion ? false : { scaleX: 0, width: 64 }}
              whileInView={{ scaleX: 1, width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
            />
            <p className="body-copy mt-5 text-steel-gray">
              Structures ready for approved project details — published with clear preview labels
              until content is finalized.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex min-h-12 items-center gap-2 self-start font-heading font-semibold text-navy transition hover:text-orange"
          >
            All projects
            <ArrowUpRight
              className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease }}
          >
            <ProjectCard project={primary} featured className="min-h-[420px] md:min-h-[540px]" />
          </motion.div>
          <div className="grid gap-4 lg:col-span-5">
            {secondary.map((project, index) => (
              <motion.div
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease }}
              >
                <ProjectCard project={project} className="min-h-[250px] lg:min-h-[262px]" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
