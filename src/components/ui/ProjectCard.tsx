"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  featured?: boolean;
};

export function ProjectCard({ project, className, featured = false }: ProjectCardProps) {
  const industry = industries.find((item) => item.id === project.industry);

  return (
    <article
      className={cn(
        "group relative overflow-hidden bg-navy text-white",
        featured ? "md:min-h-[520px]" : "min-h-[380px]",
        className,
      )}
    >
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View project: {project.title}</span>
      </Link>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-600 ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/10 transition duration-400 group-hover:via-navy/60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(242,140,40,0.22),transparent_55%)]" />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 z-[1] h-full w-[3px] origin-top scale-y-40 bg-orange transition duration-400 group-hover:scale-y-100"
      />
      <div className="relative z-[1] flex h-full flex-col justify-end p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2 font-mono-tech text-[0.62rem] uppercase">
          <span className="border border-white/20 bg-white/5 px-3 py-1 text-orange">
            {industry?.title ?? project.industry}
          </span>
          {project.isDraft ? (
            <span className="border border-white/15 px-3 py-1 text-white/55">Preview</span>
          ) : null}
        </div>
        <h3 className="heading-card transition duration-300 group-hover:text-orange md:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="body-copy mt-3 max-w-xl text-sm text-white/68 md:text-base">
          {project.isDraft
            ? "Framework ready for approved case-study details."
            : project.challenge}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:gap-3 group-hover:text-orange">
          View project
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
