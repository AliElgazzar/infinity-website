"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Project, Service } from "@/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

type ServiceBlockProps = {
  service: Service;
  relatedProjects: Project[];
  reversed?: boolean;
};

export function ServiceBlock({ service, relatedProjects, reversed = false }: ServiceBlockProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={service.slug}
      className="scroll-mt-28 border-b border-muted-border bg-off-white py-16 md:py-24"
    >
      <Container>
        <div
          className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-10 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <motion.div
            className="relative aspect-[4/3] overflow-hidden"
            initial={reduceMotion ? false : { opacity: 0, x: reversed ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease }}
          >
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 z-10 h-full w-1 bg-orange"
            />
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-transparent to-transparent" />
            <p className="absolute right-4 bottom-4 font-mono-tech text-[0.65rem] tracking-[0.16em] text-white/80 uppercase">
              {service.number}
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: reversed ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.06, ease }}
          >
            <p className="font-heading text-sm tracking-[0.2em] text-orange">{service.number}</p>
            <h2 className="mt-2 font-heading text-[clamp(1.8rem,3vw,2.8rem)] text-navy">
              {service.title}
            </h2>
            <motion.div
              className="mt-4 h-px origin-left bg-gradient-to-r from-orange to-electric"
              initial={reduceMotion ? false : { scaleX: 0, width: 48 }}
              whileInView={{ scaleX: 1, width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15, ease }}
            />
            <p className="mt-5 text-base leading-relaxed text-steel-gray md:text-lg">
              {service.description}
            </p>
            <h3 className="mt-6 font-heading text-lg text-navy">Technical capabilities</h3>
            <ul className="mt-2.5 space-y-2">
              {service.capabilities.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex gap-3 text-sm text-steel-gray md:text-base"
                  initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: 0.05 + index * 0.04, ease }}
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-electric" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center font-heading font-semibold text-steel transition hover:text-orange"
            >
              Discuss this capability →
            </Link>
          </motion.div>
        </div>

        {relatedProjects.length > 0 ? (
          <motion.div
            className="mt-12"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease }}
          >
            <SectionHeading title="Related project structures" className="mb-6" />
            <div className="grid gap-6 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
}
