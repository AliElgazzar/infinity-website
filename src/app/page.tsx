import { Hero } from "@/components/sections/Hero";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ImageBand } from "@/components/sections/ImageBand";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StatsSection } from "@/components/sections/Stats";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <CompanyIntro />
      <ImageBand />
      <ServicesGrid />
      <ProcessTimeline />
      <FeaturedProjects />
      <StatsSection />
      <CertificationSection />
      <IndustriesSection />
      <FinalCTA />
    </>
  );
}
