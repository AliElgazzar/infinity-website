"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { certifications } from "@/data/site";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function CertificationSection() {
  const reduceMotion = useReducedMotion();
  const ignition = certifications.find((item) => item.id === "ignition");
  const others = certifications.filter((item) => item.id !== "ignition");

  if (!ignition) return null;

  return (
    <section
      className="relative overflow-hidden bg-surface-dark py-16 text-white md:py-24"
      aria-labelledby="cert-heading"
    >
      <div aria-hidden="true" className="absolute top-0 left-0 h-full w-[3px] bg-orange" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(242,140,40,0.1),transparent_50%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <motion.div
            className="mx-auto flex max-w-sm items-center justify-center bg-white p-10 md:p-12"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease }}
          >
            {ignition.image ? (
              <Image
                src={ignition.image}
                alt={ignition.imageAlt ?? ignition.title}
                width={280}
                height={280}
                className="h-auto w-full max-w-[200px] object-contain"
              />
            ) : null}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
          >
            <p className="eyebrow text-orange">Credentials</p>
            <h2 id="cert-heading" className="heading-section mt-3 text-white">
              {ignition.title}
            </h2>
            <p className="body-copy mt-4 max-w-xl text-white/70">{ignition.description}</p>

            <ul className="mt-8 divide-y divide-white/12 border-y border-white/12">
              {others.map((cert, index) => (
                <motion.li
                  key={cert.id}
                  className="grid gap-2 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.12 + index * 0.08, ease }}
                >
                  <span className="font-mono-tech text-xs text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg text-white md:text-xl">{cert.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65 md:text-base">
                      {cert.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 font-mono-tech text-[0.65rem] text-white/35 uppercase">
              Verification link available on request
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
