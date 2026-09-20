import { PageHero } from "@/components/sections/PageHero";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Infinity Engineering Services in Grand Rapids, MI to start an automation or engineering project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what the system needs to do."
        description="Share goals, timeline, and constraints. We’ll respond using your preferred contact method from Grand Rapids, MI."
        image="/images/hero/merge.jpg"
      />
      <ContactPanel />
    </>
  );
}
