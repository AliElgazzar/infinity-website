"use client";

import { motion, useReducedMotion } from "motion/react";
import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProcessTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-[#050f16] py-20 text-white md:py-28"
      aria-labelledby="process-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-15"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange via-electric to-transparent"
      />

      <Container className="relative">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease }}
        >
          <p className="eyebrow text-orange">Method</p>
          <h2 id="process-heading" className="heading-section mt-3 text-white">
            An engineering process built for handoff and uptime.
          </h2>
          <p className="body-copy mt-4 text-white/65">
            A lifecycle aligned to Infinity’s published capabilities — from discovery and design
            through commissioning and support.
          </p>
        </motion.div>

        <div className="relative mt-14 md:mt-16">
          {/* Desktop connector line that draws in */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute top-[2.15rem] right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-orange via-electric to-orange/30 xl:block"
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          />

          <motion.ol
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.08,
                  delayChildren: reduceMotion ? 0 : 0.1,
                },
              },
            }}
          >
            {processSteps.map((step, index) => (
              <motion.li
                key={step.id}
                variants={{
                  hidden: reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 28, scale: 0.96 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.42, ease },
                  },
                }}
                className="group relative"
              >
                <article className="relative h-full overflow-hidden border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-orange/45 hover:bg-white/[0.055] hover:shadow-[0_18px_50px_rgba(6,26,38,0.45)] md:p-7">
                  {/* Orange sweep on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-orange to-electric transition duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-start justify-between gap-4">
                    <motion.span
                      className="font-mono-tech text-sm text-orange"
                      initial={reduceMotion ? false : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.06, duration: 0.3 }}
                    >
                      {step.number}
                    </motion.span>

                    {/* Step node for the connector */}
                    <span
                      aria-hidden="true"
                      className="relative mt-1 hidden size-2.5 shrink-0 rounded-full border border-orange/70 bg-[#050f16] xl:block"
                    >
                      <span className="absolute inset-0 rounded-full bg-orange/40 opacity-0 transition group-hover:animate-ping group-hover:opacity-100" />
                      <span className="absolute inset-[2px] rounded-full bg-orange transition group-hover:scale-110" />
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-xl transition duration-300 group-hover:text-orange md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/68 md:text-base">
                    {step.description}
                  </p>

                  {/* Bottom index watermark */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 bottom-1 select-none font-heading text-5xl font-semibold text-white/[0.03] transition duration-500 group-hover:text-orange/[0.08]"
                  >
                    {step.number}
                  </span>
                </article>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
