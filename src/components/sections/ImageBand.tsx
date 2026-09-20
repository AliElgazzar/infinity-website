"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const frames = [
  {
    src: "/images/hero/sorter.jpg",
    alt: "Industrial sorter and material-handling system",
    label: "Material handling",
  },
  {
    src: "/images/hero/merge.jpg",
    alt: "Conveyor merge system in an industrial facility",
    label: "Flow systems",
  },
  {
    src: "/images/services/factory.jpeg",
    alt: "Automated industrial production environment",
    label: "Production",
  },
  {
    src: "/images/services/smart-engineering.jpg",
    alt: "Engineers collaborating on industrial systems",
    label: "Engineering",
  },
  {
    src: "/images/services/smart-solution.webp",
    alt: "Digital industrial controls and systems",
    label: "Controls",
  },
  {
    src: "/images/services/civil-engineering.png",
    alt: "Engineering team supporting project delivery",
    label: "Field teams",
  },
  {
    src: "/images/about-facility.jpg",
    alt: "Industrial facility environment",
    label: "Facilities",
  },
] as const;

export function ImageBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy py-16 text-white md:py-20" aria-labelledby="gallery-heading">
      <Container>
        <motion.div
          className="mb-8 max-w-2xl md:mb-10"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          <p className="eyebrow text-orange">In the field</p>
          <h2 id="gallery-heading" className="heading-section mt-3">
            Environments we engineer for.
          </h2>
        </motion.div>
      </Container>

      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-7">
        {frames.map((frame, index) => (
          <motion.figure
            key={frame.src}
            className="group relative aspect-[3/4] overflow-hidden bg-navy"
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease }}
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              fill
              sizes="(max-width: 768px) 50vw, 14vw"
              className="object-cover transition duration-600 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90 transition duration-400 group-hover:opacity-100" />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0 bg-orange/80 transition-all duration-400 group-hover:h-1"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 px-3 pt-10 pb-3 transition duration-400 group-hover:translate-y-0">
              <span className="font-mono-tech text-[0.6rem] tracking-[0.14em] text-orange uppercase">
                {frame.label}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
