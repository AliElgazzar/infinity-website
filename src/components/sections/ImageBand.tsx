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
  const loop = [...frames, ...frames];

  return (
    <section
      className="relative overflow-hidden bg-[#050f16] py-16 text-white md:py-20"
      aria-labelledby="gallery-heading"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
      />

      <Container>
        <motion.div
          className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          <div className="max-w-2xl">
            <p className="eyebrow text-orange">In the field</p>
            <h2 id="gallery-heading" className="heading-section mt-3">
              Environments we engineer for.
            </h2>
          </div>
          <p className="max-w-xs font-mono-tech text-[0.62rem] tracking-[0.16em] text-white/40 uppercase md:text-right">
            Hover to pause · Real facility contexts
          </p>
        </motion.div>
      </Container>

      <div className="marquee-paused relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#050f16] to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#050f16] to-transparent md:w-20" />

        <div
          className={`marquee-track flex w-max gap-2 ${reduceMotion ? "" : ""}`}
          style={{ animationDuration: "55s" }}
        >
          {loop.map((frame, index) => {
            const isDuplicate = index >= frames.length;
            return (
              <figure
                key={`${frame.src}-${index}`}
                className="group relative h-[280px] w-[210px] shrink-0 overflow-hidden md:h-[360px] md:w-[270px]"
                aria-hidden={isDuplicate}
              >
                <Image
                  src={frame.src}
                  alt={isDuplicate ? "" : frame.alt}
                  fill
                  sizes="270px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent opacity-90" />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0 bg-orange transition-all duration-400 group-hover:h-1"
                />
                <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4">
                  <span className="font-mono-tech text-[0.6rem] tracking-[0.16em] text-orange uppercase">
                    {frame.label}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
