import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { certifications, contactInfo, mainNav, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { currentYear } from "@/lib/utils";

export function Footer() {
  const ignition = certifications.find((item) => item.id === "ignition");

  return (
    <footer className="relative overflow-hidden bg-[#040f16] text-white">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
      />
      <div className="noise-overlay opacity-[0.03]" />

      <Container className="relative py-16 md:py-20">
        <div className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Image
              src={siteConfig.logo.src}
              alt=""
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-12 w-auto object-contain"
            />
            <h2 className="mt-6 font-heading text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.08]">
              Precision automation for operations that cannot pause.
            </h2>
          </div>
          <Button href="/contact" size="lg">
            Start a Project
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.7fr_0.7fr_1fr]">
          <div>
            <p className="body-copy max-w-md text-sm text-white/60 md:text-base">
              Full-scope industrial automation and engineering — from design and controls to
              commissioning and on-site support.
            </p>
            {ignition?.image ? (
              <div className="mt-6 inline-flex items-center gap-4 border border-white/10 bg-white px-4 py-3">
                <Image
                  src={ignition.image}
                  alt={ignition.imageAlt ?? ignition.title}
                  width={56}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <p className="font-mono-tech text-[0.58rem] tracking-[0.14em] text-navy/50 uppercase">
                    Credential
                  </p>
                  <p className="font-heading text-sm text-navy">{ignition.title}</p>
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="eyebrow text-orange">Navigate</h3>
            <ul className="mt-4 space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-orange">Services</h3>
            <ul className="mt-4 space-y-1">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex min-h-11 items-center text-white/70 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-orange">Contact</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/75 md:text-base">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-electric" aria-hidden="true" />
                <span>
                  {contactInfo.addressLines.join(", ")}
                  <br />
                  {contactInfo.city}, {contactInfo.state} {contactInfo.postalCode}
                </span>
              </li>
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex min-h-11 items-center gap-3 transition hover:text-orange"
                >
                  <Phone className="size-4 text-electric" aria-hidden="true" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex min-h-11 items-center gap-3 transition hover:text-orange"
                >
                  <Mail className="size-4 text-electric" aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </li>
              {contactInfo.linkedIn ? (
                <li>
                  <a
                    href={contactInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-3 transition hover:text-orange"
                  >
                    <Linkedin className="size-4 text-electric" aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/40">
            © {currentYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-sm text-white/50">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-white">
              Privacy
            </Link>
            <Link
              href="/accessibility"
              className="inline-flex min-h-11 items-center hover:text-white"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
