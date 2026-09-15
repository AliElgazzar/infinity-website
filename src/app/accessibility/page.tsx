import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { contactInfo, siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Accessibility",
  description: `Accessibility statement for ${siteConfig.name}.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Designed for clarity, keyboard use, and reduced motion."
        description="We aim to meet WCAG 2.2 AA expectations across navigation, forms, contrast, and motion preferences."
      />
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-3xl space-y-6 text-steel-gray">
          <p>
            Infinity Engineering Services is committed to an accessible website experience,
            including semantic structure, visible focus states, skip-to-content support,
            labeled form controls, and reduced-motion alternatives.
          </p>
          <p>
            If you encounter an accessibility barrier, please contact us at{" "}
            <a className="text-steel hover:text-orange" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>{" "}
            or {contactInfo.phone} and we will work to provide the information another way.
          </p>
          <p>
            A formal accessibility conformance report can be provided on request.
          </p>
        </Container>
      </section>
    </>
  );
}
