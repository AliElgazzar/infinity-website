"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

type FilterKey = "all" | string;

export function ProjectFilters() {
  const [industry, setIndustry] = useState<FilterKey>("all");
  const [service, setService] = useState<FilterKey>("all");
  const [technology, setTechnology] = useState<FilterKey>("all");

  const technologies = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.technologies.forEach((tech) => set.add(tech)));
    return Array.from(set).sort();
  }, []);

  const filtered = projects.filter((project) => {
    const industryMatch = industry === "all" || project.industry === industry;
    const serviceMatch = service === "all" || project.services.includes(service);
    const techMatch = technology === "all" || project.technologies.includes(technology);
    return industryMatch && serviceMatch && techMatch;
  });

  const clear = () => {
    setIndustry("all");
    setService("all");
    setTechnology("all");
  };

  const hasFilters = industry !== "all" || service !== "all" || technology !== "all";

  return (
    <div>
      <div className="space-y-6 border border-navy/10 bg-white p-5 md:p-7">
        <FilterRow
          label="Industry"
          value={industry}
          onChange={setIndustry}
          options={[
            { value: "all", label: "All" },
            ...industries.map((item) => ({ value: item.id, label: item.title })),
          ]}
        />
        <FilterRow
          label="Service"
          value={service}
          onChange={setService}
          options={[
            { value: "all", label: "All" },
            ...services.map((item) => ({ value: item.slug, label: item.title })),
          ]}
        />
        <FilterRow
          label="Technology"
          value={technology}
          onChange={setTechnology}
          options={[
            { value: "all", label: "All" },
            ...technologies.map((tech) => ({ value: tech, label: tech })),
          ]}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono-tech text-[0.65rem] tracking-[0.14em] text-muted uppercase" aria-live="polite">
          {filtered.length} project{filtered.length === 1 ? "" : "s"}
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={clear}
            className="text-sm font-semibold text-steel transition hover:text-orange"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 border border-dashed border-navy/15 bg-off-white p-8 text-center text-steel-gray">
          No projects match these filters. Try clearing filters or check back as approved case
          studies are published.
        </p>
      ) : null}
    </div>
  );
}

function FilterRow({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-3 font-mono-tech text-[0.62rem] tracking-[0.16em] text-muted uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                "min-h-10 border px-3.5 text-sm transition",
                active
                  ? "border-navy bg-navy text-white"
                  : "border-navy/12 bg-off-white text-navy hover:border-orange hover:text-orange",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
