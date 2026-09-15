"use client";

import { processSteps } from "@/data/process";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";

export function ProcessTimeline() {
  return (
    <section
      className="relative overflow-hidden bg-[#050f16] py-20 text-white md:py-28"
      aria-labelledby="process-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-15"
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-orange">Method</p>
            <h2 id="process-heading" className="heading-section mt-3 text-white">
              An engineering process built for handoff and uptime.
            </h2>
            <p className="body-copy mt-4 text-white/65">
              A lifecycle aligned to Infinity’s published capabilities — from discovery and design
              through commissioning and support.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 xl:grid-cols-3" stagger={0.06}>
          {processSteps.map((step) => (
            <StaggerItem key={step.id}>
              <div className="h-full border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-orange/35">
                <p className="font-mono-tech text-xs text-orange">{step.number}</p>
                <h3 className="mt-2 font-heading text-xl md:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/68 md:text-base">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
