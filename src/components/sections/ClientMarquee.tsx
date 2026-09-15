"use client";

import Image from "next/image";
import { clients } from "@/data/clients";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

function LogoRow({
  items,
  reverse = false,
  duration = 42,
}: {
  items: typeof clients;
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];

  return (
    <div className="marquee-paused relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#071822] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#071822] to-transparent md:w-24" />

      <div
        className={`marquee-track flex w-max items-center gap-5 ${reverse ? "marquee-track-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((client, index) => {
          const isDuplicate = index >= items.length;
          return (
            <div
              key={`${client.id}-${index}-${reverse ? "r" : "f"}`}
              className="group flex h-[4.5rem] w-[150px] shrink-0 items-center justify-center border border-white/10 bg-white px-4 transition duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-[0_12px_30px_rgba(242,140,40,0.2)] md:w-[170px]"
              aria-hidden={isDuplicate}
            >
              <Image
                src={client.src}
                alt={isDuplicate ? "" : `${client.name} logo`}
                width={client.width}
                height={client.height}
                className="max-h-11 w-auto object-contain opacity-90 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ClientMarquee() {
  const mid = Math.ceil(clients.length / 2);
  const rowA = clients.slice(0, mid);
  const rowB = clients.slice(mid);

  return (
    <section
      id="trust"
      aria-labelledby="clients-heading"
      className="relative overflow-hidden border-y border-white/10 bg-[#071822] py-14 text-white md:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
      />

      <Container>
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-orange">Partners & clients</p>
              <h2 id="clients-heading" className="heading-section mt-3 text-white">
                Trusted across demanding operations.
              </h2>
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="space-y-3">
        <LogoRow items={rowA} duration={38} />
        <LogoRow items={rowB.length ? rowB : rowA} reverse duration={44} />
      </div>
    </section>
  );
}
