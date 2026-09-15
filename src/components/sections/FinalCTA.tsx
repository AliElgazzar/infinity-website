"use client";

import { contactInfo } from "@/data/site";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-navy py-24 text-white md:py-32"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(242,140,40,0.22),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(22,138,173,0.28),transparent_40%)]"
      />
      <div className="noise-overlay opacity-[0.04]" />
      <div
        aria-hidden="true"
        className="cta-rail absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
      />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2%] bottom-[-12%] select-none font-heading text-[clamp(5rem,16vw,14rem)] leading-none font-semibold tracking-[-0.06em] text-white/[0.035]"
      >
        START
      </p>

      <Container className="relative">
        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
            <div>
              <p className="eyebrow text-orange">Next engagement</p>
              <h2 id="cta-heading" className="heading-display mt-4 max-w-3xl">
                Have a system that needs to perform better?
              </h2>
              <p className="body-copy mt-5 max-w-xl text-white/70">
                Tell us about your timeline, constraints, and goals. Infinity is ready for design,
                controls, commissioning, and on-site support.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <MagneticButton>
                <Button href="/contact" size="lg">
                  Start a Conversation
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
              </MagneticButton>
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-heading text-lg text-white/80 transition hover:text-orange"
              >
                {contactInfo.email}
              </a>
              <a
                href={contactInfo.phoneHref}
                className="font-mono-tech text-[0.7rem] tracking-[0.14em] text-white/45 uppercase transition hover:text-white"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
