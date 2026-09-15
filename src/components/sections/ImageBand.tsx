"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";

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
  return (
    <section className="bg-navy py-16 text-white md:py-20" aria-labelledby="gallery-heading">
      <Container>
        <Reveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="eyebrow text-orange">In the field</p>
            <h2 id="gallery-heading" className="heading-section mt-3">
              Environments we engineer for.
            </h2>
          </div>
        </Reveal>
      </Container>

      <Stagger className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-7" stagger={0.05}>
        {frames.map((frame) => (
          <StaggerItem key={frame.src}>
            <figure className="group relative aspect-[3/4] overflow-hidden bg-navy">
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                sizes="(max-width: 768px) 50vw, 14vw"
                className="object-cover transition duration-[500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80 transition group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 px-3 pt-10 pb-3">
                <span className="font-mono-tech text-[0.6rem] tracking-[0.14em] text-orange uppercase">
                  {frame.label}
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
