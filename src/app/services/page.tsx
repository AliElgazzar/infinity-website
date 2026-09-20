import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { getProjectsByService } from "@/data/projects";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesNav } from "@/components/sections/ServicesNav";
import { ServiceBlock } from "@/components/sections/ServiceBlock";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";
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

      {services.map((service, index) => (
        <ServiceBlock
          key={service.id}
          service={service}
          relatedProjects={getProjectsByService(service.slug).slice(0, 2)}
          reversed={index % 2 === 1}
        />
      ))}

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
