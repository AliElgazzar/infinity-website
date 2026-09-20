"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function ServicesGrid({
  limit,
  showAllLink = true,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="bg-navy py-20 text-white md:py-28" aria-labelledby="services-heading">
      <Container>
        <motion.div
          className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease }}
        >
          <div className="max-w-2xl">
            <p className="eyebrow text-orange">Capabilities</p>
            <h2 id="services-heading" className="heading-section mt-3">
              What we engineer.
            </h2>
            <p className="body-copy mt-4 text-white/65">
              From intelligent material handling to controls, commissioning, and engineering
              outsourcing — end-to-end industrial capability.
            </p>
          </div>
          {showAllLink ? (
            <Link
              href="/services"
              className="group inline-flex min-h-12 items-center gap-2 self-start font-heading font-semibold text-orange transition"
            >
              View all services
              <ArrowUpRight
                className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          ) : null}
        </motion.div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.24), ease }}
            >
              <Link
                href={`/services#${service.slug}`}
                className="group grid items-stretch transition hover:bg-white/[0.03] md:grid-cols-[6.5rem_1.05fr_0.95fr]"
              >
                <div className="flex items-center justify-between gap-4 px-1 py-6 md:flex-col md:items-start md:justify-between md:py-8">
                  <span className="font-mono-tech text-sm text-orange transition group-hover:tracking-[0.2em]">
                    {service.number}
                  </span>
                  <ArrowUpRight
                    className="size-5 text-white/25 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange md:mt-auto"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col justify-center border-white/10 py-5 md:border-x md:px-8 md:py-8">
                  <h3 className="heading-card text-xl transition duration-300 group-hover:text-orange md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="body-copy mt-3 max-w-xl text-sm text-white/58 md:text-base">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="relative min-h-[180px] overflow-hidden md:min-h-[220px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/45 to-transparent opacity-80 transition duration-400 group-hover:opacity-45 md:from-navy/70" />
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-0 bg-orange transition-all duration-400 group-hover:w-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
