"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { companyStory, expertiseAreas, companyStats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutBody() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-8 border-b border-navy/10 pb-12 lg:grid-cols-2 lg:gap-10 lg:pb-16">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease }}
            >
              <p className="eyebrow text-orange">Who we are</p>
              <h2 className="heading-section mt-3 max-w-xl text-navy">
                A full-scope practice from concept to commissioning.
              </h2>
              <motion.div
                className="mt-5 h-px origin-left bg-gradient-to-r from-orange to-electric"
                initial={reduceMotion ? false : { scaleX: 0, width: 64 }}
                whileInView={{ scaleX: 1, width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.12, ease }}
              />
              <div className="mt-6 max-w-xl space-y-4 text-steel-gray">
                {companyStory.whoWeAre.map((paragraph, index) => (
                  <motion.p
                    key={paragraph}
                    className="body-copy"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.08, ease }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[5/4] overflow-hidden lg:aspect-[4/5]"
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08, ease }}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 z-10 h-full w-1 bg-orange"
              />
              <Image
                src="/images/services/smart-engineering.jpg"
                alt="Engineering collaboration at Infinity Engineering Services"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <Container>
          <motion.div
            className="max-w-3xl"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
          >
            <p className="eyebrow text-orange">Purpose</p>
            <h2 className="heading-section mt-3 text-navy">Mission & values</h2>
            <p className="body-copy mt-4 text-steel-gray">{companyStory.mission}</p>
          </motion.div>

          <Stagger className="mt-10 divide-y divide-navy/10 border-y border-navy/10" stagger={0.08}>
            {companyStory.values.map((value, index) => (
              <StaggerItem key={value.title}>
                <div className="group grid gap-3 py-6 transition md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.3fr)] md:items-start md:gap-8">
                  <span className="font-mono-tech text-sm text-orange">0{index + 1}</span>
                  <h3 className="font-heading text-xl text-navy transition group-hover:text-orange md:text-2xl">
                    {value.title}
                  </h3>
                  <p className="text-steel-gray">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(22,138,173,0.2),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(242,140,40,0.12),transparent_40%)]"
        />
        <motion.p
          aria-hidden="true"
          className="pointer-events-none absolute right-[-2%] bottom-[-10%] select-none font-heading text-[clamp(5rem,14vw,12rem)] leading-none font-semibold tracking-[-0.06em] text-white/[0.035]"
          initial={reduceMotion ? false : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          SCOPE
        </motion.p>

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease }}
            >
              <p className="eyebrow text-orange">Approach</p>
              <h2 className="heading-section mt-3 text-white">
                Engineering from conception through final commissioning.
              </h2>
              <div className="mt-5 space-y-4 text-white/70">
                {companyStory.team.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="text-sm text-white/40">
                  Team profiles and photographs will be added here when approved employee
                  information is available.
                </p>
              </div>
            </motion.div>

            <ul className="border-t border-white/15">
              {expertiseAreas.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex gap-4 border-b border-white/15 py-4 text-sm leading-relaxed text-white/80 transition hover:border-orange/40 hover:text-white md:text-base"
                  initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease }}
                >
                  <span className="shrink-0 font-mono-tech text-xs text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-navy px-5 py-7 text-center transition hover:bg-[#0a2433] sm:text-left"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 + index * 0.07, ease }}
              >
                <p className="font-heading text-4xl text-orange md:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="mt-2 font-mono-tech text-[0.65rem] tracking-[0.14em] text-white/50 uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
