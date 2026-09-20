"use client";

import { companyStats } from "@/data/site";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function StatsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-[#071822] py-20 text-white md:py-28"
      aria-labelledby="stats-heading"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,138,173,0.12),transparent_55%)]"
      />

      <Container className="relative">
        <motion.div
          className="mb-12 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          <div>
            <p className="eyebrow text-orange">Infinity by the numbers</p>
            <h2 id="stats-heading" className="heading-section mt-3 text-white">
              Measured from our published profile.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/45 md:text-right">
            Only statistics confirmed from company source material.
          </p>
        </motion.div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease }}
              className="group relative overflow-hidden bg-[#071822] px-6 py-12"
            >
              <p className="font-heading text-[clamp(3rem,6vw,4.5rem)] leading-none tracking-[-0.04em] text-orange">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </p>
              <p className="mt-5 font-mono-tech text-[0.65rem] tracking-[0.16em] text-white/45 uppercase">
                {stat.label}
              </p>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-orange to-electric transition duration-500 group-hover:scale-x-100"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
