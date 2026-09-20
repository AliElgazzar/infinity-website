"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { siteConfig } from "@/data/site";

const ease = [0.16, 1, 0.3, 1] as const;

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
          className={`absolute inset-0 h-full w-full object-cover ${reduceMotion ? "" : "hero-video-drift"}`}
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
        <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(6,26,38,0.94)_0%,rgba(6,26,38,0.72)_42%,rgba(6,26,38,0.38)_72%,rgba(6,26,38,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_20%,rgba(6,26,38,0.45)_100%)]" />
        <div className="noise-overlay opacity-[0.045]" />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 z-[2] h-full w-[3px] bg-gradient-to-b from-orange via-electric to-transparent"
      />

      {/* Technical corner marks */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2]">
        <span className="absolute top-28 right-6 hidden h-8 w-8 border-t border-r border-white/25 md:top-36 md:right-10 lg:block" />
        <span className="absolute right-6 bottom-10 hidden h-8 w-8 border-r border-b border-white/25 md:right-10 md:bottom-14 lg:block" />
        <span className="absolute bottom-10 left-6 hidden font-mono-tech text-[0.58rem] tracking-[0.2em] text-white/30 uppercase md:left-10 lg:block">
          GRR · MI · EST {siteConfig.foundedYear}
        </span>
      </div>

      <motion.p
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] right-[-5%] z-[1] hidden select-none font-heading text-[clamp(7rem,22vw,18rem)] leading-none font-semibold tracking-[-0.07em] text-white/[0.04] lg:block"
        initial={reduceMotion ? false : { opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease }}
      >
        INFINITY
      </motion.p>

      <Container className="relative z-[3] flex min-h-[100svh] flex-col justify-end pt-28 pb-14 md:justify-center md:pt-36 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mb-8 flex items-center gap-4"
          >
            <Image
              src={siteConfig.logo.src}
              alt=""
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-14 w-auto object-contain drop-shadow-[0_10px_30px_rgba(22,138,173,0.35)] md:h-16"
              priority
            />
            <div>
              <p className="font-heading text-lg font-semibold tracking-tight text-white md:text-xl">
                Infinity Engineering Services
              </p>
              <p className="mt-1 font-mono-tech text-[0.62rem] tracking-[0.22em] text-white/50 uppercase">
                Grand Rapids, MI · Est. {siteConfig.foundedYear}
              </p>
            </div>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="heading-display"
          >
            Engineering motion.
            <span className="mt-1 block bg-gradient-to-r from-electric via-[#5ec4dc] to-[#9adceb] bg-clip-text text-transparent">
              Automating possibility.
            </span>
          </motion.h1>

          <motion.div
            className="mt-6 h-px origin-left bg-gradient-to-r from-orange via-electric to-transparent"
            initial={reduceMotion ? false : { scaleX: 0, width: 120 }}
            animate={{ scaleX: 1, width: 120 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
          />

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22, ease }}
            className="body-copy mt-6 max-w-lg text-white/72"
          >
            Intelligent automation, material handling, controls, and manufacturing — engineered
            for systems that cannot stop.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton>
              <Button href="/services" size="lg">
                Explore Capabilities
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/contact" variant="secondary" size="lg">
                Start a Project
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.a
          href="#intro"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-14 inline-flex items-center gap-3 self-start font-mono-tech text-[0.65rem] tracking-[0.2em] text-white/45 uppercase transition hover:text-orange"
        >
          <span className="relative flex h-10 w-6 items-start justify-center overflow-hidden border border-white/25 pt-2">
            <span className="scroll-hint-dot size-1 rounded-full bg-orange" />
          </span>
          Scroll
          <ArrowDown className="size-3.5" aria-hidden="true" />
        </motion.a>
      </Container>
    </section>
  );
}
