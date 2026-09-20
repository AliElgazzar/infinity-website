"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const disciplines = [
  { label: "Electrical", detail: "Design & installation" },
  { label: "Mechanical", detail: "Hardware & systems" },
  { label: "Software", detail: "PLC · HMI · SCADA" },
  { label: "Commissioning", detail: "Startup & support" },
] as const;

export function CompanyIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-off-white py-20 md:py-28"
      aria-labelledby="intro-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="flex flex-col justify-center lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="eyebrow text-electric">Who we are</p>
            <h2 id="intro-heading" className="heading-section mt-3 text-navy">
              Built for the systems that cannot stop.
            </h2>
            <motion.div
              className="mt-5 h-px origin-left bg-gradient-to-r from-orange to-electric"
              initial={reduceMotion ? false : { scaleX: 0, width: 64 }}
              whileInView={{ scaleX: 1, width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15, ease }}
            />
            <p className="body-copy mt-6 text-steel-gray">
              Infinity Engineering Services provides automation and engineering solutions that
              help customers improve reliability, throughput, and operational performance —
              across design, integration, commissioning, and ongoing support.
            </p>
            <p className="body-copy mt-4 text-steel-gray">
              Established in 2021 in Grand Rapids, MI, IES is a full-scope engineering firm
              specializing in industrial automation: electrical, mechanical, software,
              installation, project management, and site supervision.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 font-heading font-semibold text-navy transition hover:text-orange"
            >
              Our story
              <ArrowUpRight
                className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          <motion.div
            className="relative lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            <div className="media-frame relative aspect-[16/11] overflow-hidden md:aspect-[5/3]">
              <Image
                src="/images/about-facility.jpg"
                alt="Industrial facility environment representing Infinity Engineering Services work"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 via-navy/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 grid gap-2.5 p-4 sm:grid-cols-2 md:gap-3 md:p-6">
                {disciplines.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 + index * 0.07, ease }}
                    className="border border-white/20 bg-navy/65 px-3.5 py-3 backdrop-blur-sm transition hover:border-orange/55 hover:bg-navy/80"
                  >
                    <p className="font-heading text-sm text-orange">{item.label}</p>
                    <p className="mt-0.5 text-xs text-white/70">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
