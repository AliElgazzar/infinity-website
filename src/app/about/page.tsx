import { PageHero } from "@/components/sections/PageHero";
import { AboutBody } from "@/components/sections/AboutBody";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { FinalCTA } from "@/components/sections/FinalCTA";
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
      <AboutBody />
      <CertificationSection />
      <ClientMarquee />
      <FinalCTA />
    </>
  );
}
