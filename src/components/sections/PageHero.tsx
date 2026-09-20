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
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,26,38,0.94)_8%,rgba(6,26,38,0.7)_55%,rgba(6,26,38,0.45)_100%)]" />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 z-[1] h-full w-[3px] bg-gradient-to-b from-orange via-electric to-transparent"
      />

      <Container className="relative z-[2]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="eyebrow text-orange">{eyebrow}</p>
          <h1 className="heading-display mt-4 max-w-4xl">{title}</h1>
          <p className="body-copy mt-5 max-w-2xl text-white/72">{description}</p>
        </motion.div>
      </Container>
    </section>
  );
}
