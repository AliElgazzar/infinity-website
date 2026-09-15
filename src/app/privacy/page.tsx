import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { contactInfo, siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Privacy",
  description: `Privacy information for ${siteConfig.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="How we handle inquiry information."
        description="This page summarizes how contact-form submissions are used. Replace with a formal legal policy when counsel provides final language."
      />
      <section className="bg-white py-16 md:py-24">
        <Container className="prose prose-neutral max-w-3xl">
          <div className="space-y-6 text-steel-gray">
            <p>
              Infinity Engineering Services uses information submitted through the website
              contact form to respond to project inquiries and related communications.
            </p>
            <p>
              Submitted fields may include your name, work email, company, phone number,
              service interest, project description, and preferred contact method.
            </p>
            <p>
              We do not sell personal information collected through this form. Access is
              limited to personnel responsible for responding to inquiries.
            </p>
            <p>
              Questions about privacy can be sent to{" "}
              <a className="text-steel hover:text-orange" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
              . A formal privacy policy will be published when available.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
