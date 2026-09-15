import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";

export function FeaturedProjects() {
  const [primary, ...rest] = projects;
  const secondary = rest.slice(0, 2);

  if (!primary) return null;

  return (
    <section className="bg-off-white py-20 md:py-28" aria-labelledby="projects-heading">
      <Container>
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-electric">Selected work</p>
            <h2 id="projects-heading" className="heading-section mt-3 text-navy">
              Projects shaped by real industrial constraints.
            </h2>
            <p className="body-copy mt-4 text-steel-gray">
              Structures ready for approved project details — published with clear preview labels
              until content is finalized.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex min-h-12 items-center gap-2 self-start font-heading font-semibold text-navy transition hover:text-orange"
          >
            All projects
            <ArrowUpRight
              className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProjectCard project={primary} featured className="min-h-[420px] md:min-h-[520px]" />
          </div>
          <div className="grid gap-4 lg:col-span-5">
            {secondary.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="min-h-[250px] lg:min-h-[252px]"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
