import { PageHero } from "@/components/sections/PageHero";
import { ProjectFilters } from "@/components/sections/ProjectFilters";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Project gallery for Infinity Engineering Services. Case-study structures are ready for approved customer content.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work shaped by constraints, commissioning, and measurable outcomes."
        description="Filter by industry, service, or technology. Preview entries stay clearly labeled until company-approved details replace them."
        image="/images/services/factory.jpeg"
      />
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow text-electric">Gallery</p>
            <h2 className="heading-section mt-3 text-navy">Browse by focus area</h2>
            <p className="body-copy mt-4 text-steel-gray">
              Each entry is a structured case-study shell. Swap in approved narrative, metrics, and
              photography when ready — the layout is already live.
            </p>
          </div>
          <ProjectFilters />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
