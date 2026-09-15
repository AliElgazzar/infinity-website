"use client";

import { companyStats } from "@/data/site";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";

export function StatsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#071822] py-20 text-white md:py-24"
      aria-labelledby="stats-heading"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
      />

      <Container className="relative">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-orange">Infinity by the numbers</p>
              <h2 id="stats-heading" className="heading-section mt-3 text-white">
                Measured from our published profile.
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/45 md:text-right">
              Only statistics confirmed from company source material.
            </p>
          </div>
        </Reveal>

        <Stagger
          className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4"
          stagger={0.08}
        >
          {companyStats.map((stat) => (
            <StaggerItem key={stat.id}>
              <div className="group relative bg-[#071822] px-6 py-10 transition hover:bg-white/[0.03]">
                <p className="font-heading text-[clamp(2.8rem,5vw,4rem)] leading-none text-orange">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="mt-4 font-mono-tech text-[0.65rem] tracking-[0.16em] text-white/45 uppercase">
                  {stat.label}
                </p>
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-all duration-500 group-hover:w-full"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
