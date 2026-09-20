import { PageHero } from "@/components/sections/PageHero";
import { IndustriesPageBody } from "@/components/sections/IndustriesPageBody";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "Industries supported by Infinity Engineering Services across material handling, manufacturing, automotive, machine tools, and assembly lines.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Environments where uptime is the requirement, not the goal."
        description="Industry focus areas drawn from Infinity’s verified capabilities, certifications, and service context — without unsupported claims."
        image="/images/hero/sorter.jpg"
      />
      <IndustriesPageBody />
      <FinalCTA />
    </>
  );
}
