import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return buildMetadata({
      title: "Project not found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.isDraft
      ? "Project structure ready for approved case-study content."
      : project.challenge,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const industry = industries.find((item) => item.id === project.industry);
  const relatedServices = services.filter((service) =>
    project.services.includes(service.slug),
  );
  const blocks = [
    { number: "01", title: "Challenge", body: project.challenge },
    { number: "02", title: "Solution", body: project.solution },
    { number: "03", title: "Result", body: project.result },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 text-white md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,26,38,0.94)_0%,rgba(6,26,38,0.72)_55%,rgba(6,26,38,0.45)_100%)]" />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange via-electric to-transparent"
        />

        <Container className="relative">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-white/65 transition hover:text-orange"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono-tech text-[0.65rem] tracking-[0.16em] uppercase">
            <span className="text-orange">{industry?.title ?? project.industry}</span>
            {project.isDraft ? (
              <span className="border border-orange/40 bg-orange/10 px-2.5 py-1 text-orange">
                Awaiting approved details
              </span>
            ) : null}
          </div>

          <h1 className="heading-display mt-4 max-w-4xl">{project.title}</h1>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6">
            {relatedServices.slice(0, 3).map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.slug}`}
                className="text-sm text-white/65 transition hover:text-orange"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <ol className="divide-y divide-navy/10 border-y border-navy/10">
                {blocks.map((block) => (
                  <li key={block.title} className="grid gap-4 py-8 md:grid-cols-[4.5rem_1fr] md:gap-8">
                    <span className="font-mono-tech text-sm text-orange">{block.number}</span>
                    <div>
                      <h2 className="font-heading text-2xl text-navy md:text-3xl">{block.title}</h2>
                      <p className="body-copy mt-3 text-steel-gray">{block.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="h-fit border border-navy/10 bg-off-white p-6 md:p-8">
              <p className="eyebrow text-orange">Project data</p>

              <h2 className="mt-5 font-heading text-lg text-navy">Technologies</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-navy/12 bg-white px-3 py-1.5 text-sm text-steel-gray"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <h2 className="mt-7 font-heading text-lg text-navy">Services</h2>
              <ul className="mt-3 space-y-1">
                {relatedServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex min-h-10 items-center gap-2 text-sm text-steel transition hover:text-orange"
                    >
                      {service.title}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>

              {project.metrics?.length ? (
                <>
                  <h2 className="mt-7 font-heading text-lg text-navy">Metrics</h2>
                  <ul className="mt-3 space-y-3">
                    {project.metrics.map((metric) => (
                      <li key={metric.label} className="border-b border-navy/10 pb-3">
                        <p className="font-heading text-2xl text-orange">{metric.value}</p>
                        <p className="mt-1 font-mono-tech text-[0.62rem] tracking-[0.14em] text-muted uppercase">
                          {metric.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="mt-7 text-sm text-steel-gray">
                  Verified metrics will appear here when approved by the company.
                </p>
              )}

              <div className="mt-8">
                <Button href="/contact" size="md" className="w-full">
                  Discuss a similar project
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </aside>
          </div>

          {project.gallery.length > 0 ? (
            <div className="mt-16">
              <p className="eyebrow text-electric">Visual context</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div key={image} className="media-frame relative aspect-[16/10]">
                    <Image
                      src={image}
                      alt={`${project.title} — view ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
