import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
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

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <aside>
              <p className="eyebrow text-orange">Office</p>
              <h2 className="heading-section mt-3 text-navy">Grand Rapids headquarters</h2>

              <ul className="mt-8 space-y-5 border-y border-navy/10 py-7 text-steel-gray">
                <li className="flex gap-3">
                  <MapPin className="mt-1 size-5 shrink-0 text-electric" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-navy">{contactInfo.companyName}</p>
                    <p>{contactInfo.addressLines.join(", ")}</p>
                    <p>
                      {contactInfo.city}, {contactInfo.state} {contactInfo.postalCode}
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    href={contactInfo.phoneHref}
                    className="inline-flex min-h-11 items-center gap-3 transition hover:text-orange"
                  >
                    <Phone className="size-5 text-electric" aria-hidden="true" />
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex min-h-11 items-center gap-3 transition hover:text-orange"
                  >
                    <Mail className="size-5 text-electric" aria-hidden="true" />
                    {contactInfo.email}
                  </a>
                </li>
                {contactInfo.hours ? (
                  <li className="flex gap-3">
                    <Clock className="mt-1 size-5 shrink-0 text-electric" aria-hidden="true" />
                    <span>{contactInfo.hours}</span>
                  </li>
                ) : null}
              </ul>

              {contactInfo.linkedIn ? (
                <a
                  href={contactInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-steel transition hover:text-orange"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : null}

              <div className="media-frame relative mt-10 overflow-hidden">
                <iframe
                  title="Infinity Engineering Services office map"
                  src={contactInfo.mapEmbedUrl}
                  className="h-72 w-full border-0 md:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-steel transition hover:text-orange"
              >
                Open in Google Maps
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </aside>

            <div className="border border-navy/10 bg-off-white p-6 md:p-8 lg:p-10">
              <div className="border-l-[3px] border-orange pl-4">
                <p className="font-mono-tech text-[0.68rem] text-orange uppercase">Inquiry</p>
                <h2 className="mt-2 font-heading text-2xl text-navy md:text-3xl">
                  Project inquiry
                </h2>
              </div>
              <p className="mt-4 text-sm text-steel-gray md:text-base">
                Tell us about your system, timeline, and constraints. Fields are validated on the
                client and server.
              </p>
              <div className="relative mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
