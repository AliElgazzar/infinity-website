"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function ServicesNav() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");

  const updateArrows = () => {
    const node = scrollerRef.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth;
    setCanLeft(node.scrollLeft > 4);
    setCanRight(node.scrollLeft < max - 4);
  };

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    updateArrows();
    node.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      node.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  useEffect(() => {
    const sections = services
      .map((service) => document.getElementById(service.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSlug(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    const active = node.querySelector<HTMLElement>(`[data-slug="${activeSlug}"]`);
    if (!active) return;
    const left =
      active.offsetLeft - node.clientWidth / 2 + active.offsetWidth / 2;
    node.scrollTo({ left, behavior: "smooth" });
  }, [activeSlug]);

  const scrollBy = (dir: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(320, node.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="sticky top-[4.75rem] z-40 border-b border-white/10 bg-navy/95 backdrop-blur-md md:top-[5.25rem]">
      <Container className="relative py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-navy to-transparent md:left-6 md:w-14" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-navy to-transparent md:right-6 md:w-14" />

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Scroll services left"
            disabled={!canLeft}
            onClick={() => scrollBy(-1)}
            className={cn(
              "relative z-20 hidden size-10 shrink-0 items-center justify-center border border-white/15 text-white transition md:inline-flex",
              canLeft ? "hover:border-orange hover:text-orange" : "opacity-25",
            )}
          >
            <ChevronLeft className="size-4" />
          </button>

          <nav
            ref={scrollerRef}
            aria-label="Service sections"
            className="hide-scrollbar flex flex-1 gap-1 overflow-x-auto scroll-smooth px-1"
          >
            {services.map((service) => {
              const active = activeSlug === service.slug;
              return (
                <a
                  key={service.id}
                  href={`#${service.slug}`}
                  data-slug={service.slug}
                  className={cn(
                    "relative inline-flex min-h-11 shrink-0 items-center gap-2.5 px-4 text-sm transition",
                    active ? "text-white" : "text-white/55 hover:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono-tech text-[0.62rem]",
                      active ? "text-orange" : "text-white/35",
                    )}
                  >
                    {service.number}
                  </span>
                  <span className="whitespace-nowrap font-heading font-medium tracking-tight">
                    {service.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 bottom-0 h-0.5 origin-left bg-orange transition duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Scroll services right"
            disabled={!canRight}
            onClick={() => scrollBy(1)}
            className={cn(
              "relative z-20 hidden size-10 shrink-0 items-center justify-center border border-white/15 text-white transition md:inline-flex",
              canRight ? "hover:border-orange hover:text-orange" : "opacity-25",
            )}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
