"use client";

import { contactInfo } from "@/data/site";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-navy py-24 text-white md:py-32"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(242,140,40,0.24),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(22,138,173,0.3),transparent_40%)]"
      />
      <div className="noise-overlay opacity-[0.045]" />
      <div
        aria-hidden="true"
        className="cta-rail absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
      />
      <span
        aria-hidden="true"
        className="absolute top-10 right-10 hidden h-10 w-10 border-t border-r border-white/20 lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-10 hidden h-10 w-10 border-b border-l border-white/20 lg:block"
      />
      <motion.p
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2%] bottom-[-12%] select-none font-heading text-[clamp(5rem,16vw,14rem)] leading-none font-semibold tracking-[-0.06em] text-white/[0.04]"
        initial={reduceMotion ? false : { opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        START
      </motion.p>

      <Container className="relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="eyebrow text-orange">Next engagement</p>
            <h2 id="cta-heading" className="heading-display mt-4 max-w-3xl">
              Have a system that needs to perform better?
            </h2>
            <motion.div
              className="mt-6 h-px origin-left bg-gradient-to-r from-orange to-electric"
              initial={reduceMotion ? false : { scaleX: 0, width: 88 }}
              whileInView={{ scaleX: 1, width: 88 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12, ease }}
            />
            <p className="body-copy mt-6 max-w-xl text-white/70">
              Tell us about your timeline, constraints, and goals. Infinity is ready for design,
              controls, commissioning, and on-site support.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start gap-4 lg:items-end"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease }}
          >
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
