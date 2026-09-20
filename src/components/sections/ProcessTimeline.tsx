"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const CYCLE_MS = 4200;
const ease = [0.16, 1, 0.3, 1] as const;

export function ProcessTimeline() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = processSteps[activeIndex] ?? processSteps[0];

  useEffect(() => {
    if (reduceMotion || paused || processSteps.length < 2) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  if (!active) return null;

  return (
    <section
      className="relative overflow-hidden bg-[#050f16] py-20 text-white md:py-28"
      aria-labelledby="process-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(242,140,40,0.12),transparent_45%),radial-gradient(ellipse_at_10%_80%,rgba(22,138,173,0.14),transparent_40%)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange via-electric to-transparent"
      />

      {/* Giant watermark number */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active.number}
          aria-hidden="true"
          className="pointer-events-none absolute top-[8%] right-[-4%] select-none font-heading text-[clamp(10rem,28vw,22rem)] leading-none font-semibold tracking-[-0.08em] text-white/[0.035]"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -30 }}
          transition={{ duration: 0.45, ease }}
        >
          {active.number}
        </motion.p>
      </AnimatePresence>

      <Container className="relative">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease }}
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

        <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Step rail */}
          <ol className="relative flex flex-col" aria-label="Process steps">
            <motion.div
              aria-hidden="true"
              className="absolute top-3 bottom-3 left-[11px] w-px bg-white/10 md:left-[13px]"
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              style={{ originY: 0 }}
              transition={{ duration: 0.7, ease }}
            />

            {processSteps.map((step, index) => {
              const selected = index === activeIndex;
              return (
                <li key={step.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-current={selected ? "step" : undefined}
                    className={cn(
                      "group flex w-full items-center gap-4 py-3.5 text-left transition md:gap-5 md:py-4",
                      selected ? "opacity-100" : "opacity-45 hover:opacity-80",
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-[1] flex size-6 shrink-0 items-center justify-center rounded-full border transition duration-300 md:size-7",
                        selected
                          ? "border-orange bg-orange text-navy"
                          : "border-white/25 bg-[#050f16] text-transparent",
                      )}
                    >
                      {selected ? (
                        <motion.span
                          layoutId="process-dot"
                          className="size-2 rounded-full bg-navy"
                          transition={{ type: "spring", stiffness: 420, damping: 28 }}
                        />
                      ) : (
                        <span className="size-1.5 rounded-full bg-white/35" />
                      )}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline gap-3">
                        <span
                          className={cn(
                            "font-mono-tech text-[0.65rem] tracking-[0.16em]",
                            selected ? "text-orange" : "text-white/35",
                          )}
                        >
                          {step.number}
                        </span>
                        <span
                          className={cn(
                            "font-heading text-lg transition md:text-xl",
                            selected ? "text-white" : "text-white/70",
                          )}
                        >
                          {step.title}
                        </span>
                      </span>
                    </span>
                  </button>

                  {selected && !reduceMotion ? (
                    <motion.div
                      className="absolute bottom-0 left-10 right-0 h-px origin-left bg-orange/50 md:left-12"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                      key={`progress-${step.id}-${activeIndex}`}
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>

          {/* Active stage */}
          <div className="relative min-h-[300px] overflow-hidden border border-white/10 bg-white/[0.03] p-7 md:min-h-[340px] md:p-10">
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
            />
            <div className="noise-overlay opacity-[0.04]" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(242,140,40,0.08),transparent_45%)]"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="relative"
                initial={reduceMotion ? false : { opacity: 0, x: 28, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease }}
              >
                <p className="font-mono-tech text-sm text-orange">
                  {active.number} / 0{processSteps.length}
                </p>
                <h3 className="mt-4 font-heading text-[clamp(2.5rem,5.2vw,4.2rem)] leading-[0.96] tracking-[-0.045em]">
                  {active.title}
                </h3>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                  {active.description}
                </p>

                <div className="mt-10 flex items-center gap-2.5">
                  {processSteps.map((step, index) => (
                    <button
                      key={step.id}
                      type="button"
                      aria-label={`Go to ${step.title}`}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "relative h-1.5 flex-1 overflow-hidden bg-white/12 transition",
                        index === activeIndex ? "bg-white/20" : "hover:bg-white/25",
                      )}
                    >
                      {index === activeIndex && !reduceMotion ? (
                        <motion.span
                          className="absolute inset-y-0 left-0 bg-orange"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                          key={`bar-${step.id}-${activeIndex}`}
                        />
                      ) : index === activeIndex ? (
                        <span className="absolute inset-0 bg-orange" />
                      ) : null}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
