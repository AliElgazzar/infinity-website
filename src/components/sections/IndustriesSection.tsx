"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
  const [activeId, setActiveId] = useState(industries[0]?.id ?? "");
  const active = industries.find((item) => item.id === activeId) ?? industries[0];

  if (!active) return null;

  const related = services.filter((service) =>
    active.relatedServices.includes(service.slug),
  );

  return (
    <section className="bg-off-white py-16 md:py-24" aria-labelledby="industries-heading">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow text-orange">Industries</p>
          <h2 id="industries-heading" className="heading-section mt-3 text-navy">
            Where industrial systems have to perform.
          </h2>
          <p className="body-copy mt-4 text-steel-gray">
            Sector focus drawn from Infinity’s published capabilities, certifications, and
            service context.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div role="tablist" aria-label="Industry categories" className="flex flex-col">
            {industries.map((industry, index) => {
              const selected = industry.id === active.id;
              return (
                <button
                  key={industry.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={cn(
                    "group flex min-h-14 items-center gap-5 border-b border-navy/10 py-4 text-left transition",
                    selected ? "border-orange" : "hover:border-navy/25",
                  )}
                  onClick={() => setActiveId(industry.id)}
                >
                  <span
                    className={cn(
                      "font-mono-tech text-xs",
                      selected ? "text-orange" : "text-muted",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-heading text-lg md:text-xl",
                      selected ? "text-navy" : "text-steel-gray group-hover:text-navy",
                    )}
                  >
                    {industry.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div role="tabpanel">
            <div className="media-frame relative aspect-[16/10]">
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute right-5 bottom-5 left-5">
                <p className="font-mono-tech text-[0.65rem] text-orange uppercase">
                  Active sector
                </p>
                <p className="mt-1 font-heading text-2xl text-white md:text-3xl">
                  {active.title}
                </p>
              </div>
            </div>
            <p className="mt-5 text-steel-gray md:text-lg">{active.description}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {related.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.slug}`}
                  className="inline-flex min-h-10 items-center border-b border-navy/15 text-sm text-navy transition hover:border-orange hover:text-orange"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Link
              href="/industries"
              className="mt-6 inline-flex min-h-11 items-center gap-2 font-heading font-semibold text-steel transition hover:text-orange"
            >
              Explore all industries
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
