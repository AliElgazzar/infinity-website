"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    if (mediaQuery.matches || connection?.saveData) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.15 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-navy text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/sorter.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          poster="/images/hero/sorter.jpg"
          aria-hidden="true"
        >
          <source src="/video/industrial-fallback.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,26,38,0.92)_0%,rgba(6,26,38,0.7)_48%,rgba(6,26,38,0.3)_100%)]" />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 z-[2] h-full w-[3px] bg-gradient-to-b from-orange via-electric to-transparent"
      />

      <p
        aria-hidden="true"
        className="pointer-events-none absolute top-[12%] right-[-6%] z-[1] hidden select-none font-heading text-[clamp(7rem,22vw,18rem)] leading-none font-semibold tracking-[-0.07em] text-white/[0.045] lg:block"
      >
        INFINITY
      </p>

      <Container className="relative z-[3] flex min-h-[100svh] flex-col justify-end pt-28 pb-14 md:justify-center md:pt-36 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="mb-5 flex items-center gap-4"
          >
            <Image
              src={siteConfig.logo.src}
              alt=""
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-12 w-auto object-contain md:h-14"
              priority
            />
            <div>
              <p className="font-heading text-base font-semibold tracking-tight text-white md:text-lg">
                Infinity Engineering Services
              </p>
              <p className="mt-0.5 font-mono-tech text-[0.62rem] tracking-[0.2em] text-white/50 uppercase">
                Grand Rapids, MI · Est. 2021
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.04 }}
            className="mb-4 inline-flex items-center gap-2.5 border border-white/15 bg-white/5 px-3.5 py-2"
          >
            <span className="pulse-dot size-1.5 rounded-full bg-orange" aria-hidden="true" />
            <span className="font-mono-tech text-[0.65rem] tracking-[0.16em] text-white/75 uppercase">
              Systems online · Engineering ready
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.06 }}
            className="heading-display"
          >
            Engineering motion.
            <span className="mt-1 block text-electric">Automating possibility.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.1 }}
            className="body-copy mt-5 max-w-lg text-white/72"
          >
            Intelligent automation, material handling, controls, and manufacturing — engineered
            for systems that cannot stop.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.14 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/services" size="lg">
              Explore Capabilities
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Start a Project
            </Button>
          </motion.div>
        </div>

        <a
          href="#intro"
          className="mt-12 inline-flex items-center gap-3 self-start font-mono-tech text-[0.65rem] tracking-[0.2em] text-white/50 uppercase transition hover:text-orange"
        >
          <span className="relative flex h-10 w-6 items-start justify-center overflow-hidden rounded-full border border-white/25 pt-2">
            <span className="scroll-hint-dot size-1 rounded-full bg-orange" />
          </span>
          Scroll
          <ArrowDown className="size-3.5" aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}
