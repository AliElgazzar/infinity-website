import Image from "next/image";
import { companyStory, expertiseAreas, companyStats } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Infinity Engineering Services — a Grand Rapids industrial automation firm established in 2021.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About IES"
        title="Engineering built for systems that cannot fail quietly."
        description="Established in 2021 in Grand Rapids, MI, Infinity Engineering Services supports clients across design, software, installation, commissioning, and site supervision."
        image="/images/about-facility.jpg"
      />

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-8 border-b border-navy/10 pb-12 lg:grid-cols-2 lg:gap-10 lg:pb-16">
            <div>
              <p className="eyebrow text-orange">Who we are</p>
              <h2 className="heading-section mt-3 max-w-xl text-navy">
                A full-scope practice from concept to commissioning.
              </h2>
              <div className="mt-5 max-w-xl space-y-4 text-steel-gray">
                {companyStory.whoWeAre.map((paragraph) => (
                  <p key={paragraph} className="body-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden lg:aspect-[4/5]">
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 z-10 h-full w-1 bg-orange"
              />
              <Image
                src="/images/services/smart-engineering.jpg"
                alt="Engineering collaboration at Infinity Engineering Services"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow text-orange">Purpose</p>
            <h2 className="heading-section mt-3 text-navy">Mission & values</h2>
            <p className="body-copy mt-4 text-steel-gray">{companyStory.mission}</p>
          </div>
          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {companyStory.values.map((value, index) => (
              <li
                key={value.title}
                className="grid gap-3 py-6 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.3fr)] md:items-start md:gap-8"
              >
                <span className="font-mono-tech text-sm text-orange">0{index + 1}</span>
                <h3 className="font-heading text-xl text-navy md:text-2xl">{value.title}</h3>
                <p className="text-steel-gray">{value.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
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
            </div>
            <ul className="border-t border-white/15">
              {expertiseAreas.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-white/15 py-4 text-sm leading-relaxed text-white/80 md:text-base"
                >
                  <span className="shrink-0 font-mono-tech text-xs text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {companyStats.map((stat) => (
              <div key={stat.id} className="bg-navy px-5 py-7 text-center sm:text-left">
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CertificationSection />
      <ClientMarquee />
      <FinalCTA />
    </>
  );
}
