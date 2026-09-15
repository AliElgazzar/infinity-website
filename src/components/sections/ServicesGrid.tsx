"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";

export function ServicesGrid({
  limit,
  showAllLink = true,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="bg-navy py-20 text-white md:py-28" aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
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
          </div>
        </Reveal>

        <Stagger className="divide-y divide-white/10 border-y border-white/10" stagger={0.05}>
          {items.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                href={`/services#${service.slug}`}
                className="group grid items-stretch transition hover:bg-white/[0.03] md:grid-cols-[6.5rem_1.05fr_0.95fr]"
              >
                <div className="flex items-center justify-between gap-4 px-1 py-6 md:flex-col md:items-start md:justify-between md:py-8">
                  <span className="font-mono-tech text-sm text-orange transition group-hover:tracking-[0.18em]">
                    {service.number}
                  </span>
                  <ArrowUpRight
                    className="size-5 text-white/25 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange md:mt-auto"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col justify-center border-white/10 py-5 md:border-x md:px-8 md:py-8">
                  <h3 className="heading-card text-xl transition group-hover:text-orange md:text-2xl">
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
                    className="object-cover transition duration-[500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent opacity-75 md:from-navy/60" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
