import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { getProjectsByIndustry } from "@/data/projects";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";
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

      <section className="bg-white py-16 md:py-24">
        <Container>
          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {industries.map((industry, index) => (
              <li key={industry.id}>
                <a
                  href={`#${industry.slug}`}
                  className="group grid gap-4 py-7 transition md:grid-cols-[4.5rem_1fr_auto] md:items-center md:gap-10"
                >
                  <span className="font-mono-tech text-sm text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-heading text-2xl text-navy transition group-hover:text-orange md:text-3xl">
                      {industry.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-steel-gray">{industry.shortDescription}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-[0.14em] text-muted uppercase transition group-hover:text-orange">
                    View
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {industries.map((industry, index) => {
        const relatedServices = services.filter((service) =>
          industry.relatedServices.includes(service.slug),
        );
        const relatedProjects = getProjectsByIndustry(industry.id);
        const odd = index % 2 === 1;

        return (
          <section
            key={industry.id}
            id={industry.slug}
            className={`scroll-mt-28 py-16 md:py-24 ${odd ? "bg-white" : "bg-off-white"}`}
          >
            <Container>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                <div className={odd ? "lg:order-2" : undefined}>
                  <p className="eyebrow text-orange">
                    Sector {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="heading-section mt-3 text-navy">{industry.title}</h2>
                  <p className="body-copy mt-4 text-steel-gray">{industry.description}</p>

                  {relatedServices.length > 0 ? (
                    <div className="mt-6">
                      <p className="font-mono-tech text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                        Related services
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                        {relatedServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services#${service.slug}`}
                              className="inline-flex min-h-10 items-center border-b border-navy/15 text-sm text-navy transition hover:border-orange hover:text-orange"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {industry.challenges.length > 0 ? (
                    <div className="mt-8">
                      <p className="font-mono-tech text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                        Typical pressures
                      </p>
                      <ul className="mt-3 space-y-2">
                        {industry.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="flex gap-3 text-sm text-steel-gray md:text-base"
                          >
                            <span className="mt-2 size-1.5 shrink-0 bg-orange" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>

                <div className={`media-frame relative aspect-[16/11] ${odd ? "lg:order-1" : ""}`}>
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {relatedProjects.length > 0 ? (
                <div className="mt-12">
                  <p className="font-mono-tech text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                    Related projects
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {relatedProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              ) : null}
            </Container>
          </section>
        );
      })}

      <FinalCTA />
    </>
  );
}
