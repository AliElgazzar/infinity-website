"use client";

import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { contactInfo } from "@/data/site";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactPanel() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(22,138,173,0.06),transparent_40%)]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="eyebrow text-orange">Office</p>
            <h2 className="heading-section mt-3 text-navy">Grand Rapids headquarters</h2>
            <motion.div
              className="mt-5 h-px origin-left bg-gradient-to-r from-orange to-electric"
              initial={reduceMotion ? false : { scaleX: 0, width: 56 }}
              whileInView={{ scaleX: 1, width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            />

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
          </motion.aside>

          <motion.div
            className="relative border border-navy/10 bg-off-white p-6 md:p-8 lg:p-10"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
          >
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
            />
            <div className="pl-1">
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
