import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { getProjectsByService } from "@/data/projects";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesNav } from "@/components/sections/ServicesNav";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Industrial automation services including material handling, machine manufacturing, assembly lines, PLC/HMI/SCADA, commissioning, and engineering outsourcing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capability across the full automation lifecycle."
        description="Material handling, machine manufacturing, assembly lines, controls, commissioning, business automation, and engineering outsourcing — delivered as one engineering practice."
        image="/images/services/smart-engineering.jpg"
      />

      <ServicesNav />

      {services.map((service, index) => {
        const relatedProjects = getProjectsByService(service.slug).slice(0, 2);
        const reversed = index % 2 === 1;

        return (
          <section
            key={service.id}
            id={service.slug}
            className="scroll-mt-28 border-b border-muted-border bg-off-white py-16 md:py-24"
          >
            <Container>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-10 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 z-10 h-full w-1 bg-orange"
                  />
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-sm tracking-[0.2em] text-orange">
                    {service.number}
                  </p>
                  <h2 className="mt-2 font-heading text-[clamp(1.8rem,3vw,2.8rem)] text-navy">
                    {service.title}
                  </h2>
                  <p className="mt-3.5 text-base leading-relaxed text-steel-gray md:text-lg">
                    {service.description}
                  </p>
                  <h3 className="mt-6 font-heading text-lg text-navy">Technical capabilities</h3>
                  <ul className="mt-2.5 space-y-2">
                    {service.capabilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-steel-gray md:text-base"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-electric" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-11 items-center font-heading font-semibold text-steel hover:text-orange"
                  >
                    Discuss this capability →
                  </Link>
                </div>
              </div>

              {relatedProjects.length > 0 ? (
                <div className="mt-12">
                  <SectionHeading title="Related project structures" className="mb-6" />
                  <div className="grid gap-6 md:grid-cols-2">
                    {relatedProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              ) : null}
            </Container>
          </section>
        );
      })}

      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Lifecycle"
            title="How engagements typically move from discovery to support."
            description={`Our process mirrors published delivery phases: ${processSteps.map((step) => step.title).join(", ")}.`}
            className="mb-4"
          />
        </Container>
      </section>
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
