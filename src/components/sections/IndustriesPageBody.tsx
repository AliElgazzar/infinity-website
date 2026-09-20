"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { getProjectsByIndustry } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function IndustriesPageBody() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Stagger className="divide-y divide-navy/10 border-y border-navy/10" stagger={0.06}>
            {industries.map((industry, index) => (
              <StaggerItem key={industry.id}>
                <a
                  href={`#${industry.slug}`}
                  className="group grid gap-4 py-7 transition md:grid-cols-[4.5rem_1fr_auto] md:items-center md:gap-10"
                >
                  <span className="font-mono-tech text-sm text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-heading text-2xl text-navy transition group-hover:text-orange md:text-3xl">
                      {industry.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-steel-gray">{industry.shortDescription}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-[0.14em] text-muted uppercase transition group-hover:text-orange">
                    View
                    <ArrowUpRight
                      className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {industries.map((industry, index) => {
        const relatedServices = services.filter((service) =>
          industry.relatedServices.includes(service.slug),
        );
        const relatedProjects = getProjectsByIndustry(industry.id);
        const odd = index % 2 === 1;

        return (
          <section
            key={industry.id}
            id={industry.slug}
            className={`scroll-mt-28 py-16 md:py-24 ${odd ? "bg-white" : "bg-off-white"}`}
          >
            <Container>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                <motion.div
                  className={odd ? "lg:order-2" : undefined}
                  initial={reduceMotion ? false : { opacity: 0, x: odd ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <p className="eyebrow text-orange">
                    Sector {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="heading-section mt-3 text-navy">{industry.title}</h2>
                  <motion.div
                    className="mt-4 h-px origin-left bg-gradient-to-r from-orange to-electric"
                    initial={reduceMotion ? false : { scaleX: 0, width: 48 }}
                    whileInView={{ scaleX: 1, width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.12, ease }}
                  />
                  <p className="body-copy mt-5 text-steel-gray">{industry.description}</p>

                  {relatedServices.length > 0 ? (
                    <div className="mt-6">
                      <p className="font-mono-tech text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                        Related services
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                        {relatedServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services#${service.slug}`}
                              className="inline-flex min-h-10 items-center border-b border-navy/15 text-sm text-navy transition hover:border-orange hover:text-orange"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {industry.challenges.length > 0 ? (
                    <div className="mt-8">
                      <p className="font-mono-tech text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                        Typical pressures
                      </p>
                      <ul className="mt-3 space-y-2">
                        {industry.challenges.map((challenge, cIndex) => (
                          <motion.li
                            key={challenge}
                            className="flex gap-3 text-sm text-steel-gray md:text-base"
                            initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.28, delay: cIndex * 0.05, ease }}
                          >
                            <span className="mt-2 size-1.5 shrink-0 bg-orange" />
                            {challenge}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </motion.div>

                <motion.div
                  className={`media-frame relative aspect-[16/11] overflow-hidden ${odd ? "lg:order-1" : ""}`}
                  initial={reduceMotion ? false : { opacity: 0, x: odd ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.06, ease }}
                >
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
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
                  <p className="font-mono-tech text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                    Related projects
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {relatedProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </Container>
          </section>
        );
      })}
    </>
  );
}
