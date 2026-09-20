"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/hero/merge.jpg",
  imageAlt = "",
  className,
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy pt-32 pb-20 text-white md:pt-40 md:pb-28",
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${reduceMotion ? "" : "hero-video-drift"}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,26,38,0.94)_6%,rgba(6,26,38,0.72)_52%,rgba(6,26,38,0.42)_100%)]" />
        <div className="noise-overlay opacity-[0.04]" />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 z-[1] h-full w-[3px] bg-gradient-to-b from-orange via-electric to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute top-28 right-8 z-[1] hidden h-8 w-8 border-t border-r border-white/20 md:top-36 md:right-12 lg:block"
      />

      <Container className="relative z-[2]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow text-orange">{eyebrow}</p>
          <h1 className="heading-display mt-4 max-w-4xl">{title}</h1>
          <motion.div
            className="mt-6 h-px origin-left bg-gradient-to-r from-orange via-electric to-transparent"
            initial={reduceMotion ? false : { scaleX: 0, width: 96 }}
            animate={{ scaleX: 1, width: 96 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
          />
          <p className="body-copy mt-6 max-w-2xl text-white/72">{description}</p>
        </motion.div>
      </Container>
    </section>
  );
}
