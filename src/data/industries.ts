import type { Industry } from "@/types";

/**
 * Industries inferred only from verified company offerings, certifications,
 * and published client/context signals on the existing site.
 * TODO: Replace challenge copy with company-approved industry narratives when available.
 */
export const industries: Industry[] = [
  {
    id: "material-handling-logistics",
    slug: "material-handling-logistics",
    title: "Material Handling & Logistics",
    shortDescription:
      "Sorter, conveyor, and flow systems backed by deep material-handling experience.",
    description:
      "Infinity brings more than 15 years of material-handling experience to conveyance, sorting, and logistics automation programs — from controls integration through on-site commissioning and standby support.",
    challenges: [
      "Maintaining throughput during system upgrades",
      "Coordinating mechanical installation with controls bring-up",
      "Validating field devices against client checklists",
      "Supporting startup windows with limited downtime",
    ],
    relatedServices: [
      "intelligent-material-handling",
      "controls-plc-hmi-scada",
      "commissioning-and-site-support",
    ],
    image: "/images/hero/sorter.jpg",
    imageAlt: "High-speed industrial sorting and logistics equipment",
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription:
      "Automation, assembly, and controls support for production environments that cannot stop.",
    description:
      "From machine manufacturing support to assembly-line automation and SCADA/HMI integration, Infinity helps manufacturers improve reliability and operational performance across the project lifecycle.",
    challenges: [
      "Integrating new equipment into existing lines",
      "Aligning mechanical design with controls software",
      "Reducing commissioning risk before production release",
      "Building operator-ready HMI and training support",
    ],
    relatedServices: [
      "machine-manufacturing",
      "automation-and-assembly-lines",
      "controls-plc-hmi-scada",
    ],
    image: "/images/services/factory.jpeg",
    imageAlt: "Manufacturing floor with automated production systems",
  },
  {
    id: "automotive",
    slug: "automotive",
    title: "Automotive",
    shortDescription:
      "Controls and commissioning support aligned with automotive standards, including GM GCCS2 certification.",
    description:
      "Automotive programs benefit from Infinity’s controls engineering, commissioning discipline, and GM GCCS2 certification for work that must meet rigorous plant standards.",
    challenges: [
      "Meeting OEM controls and safety expectations",
      "Coordinating multi-discipline commissioning schedules",
      "Documenting verification to client standards",
      "Providing standby coverage during launch",
    ],
    relatedServices: [
      "automation-and-assembly-lines",
      "controls-plc-hmi-scada",
      "commissioning-and-site-support",
      "engineering-outsourcing",
    ],
    image: "/images/hero/merge.jpg",
    imageAlt: "Industrial conveyance system supporting automotive production flow",
  },
  {
    id: "machine-tools",
    slug: "machine-tools-and-equipment",
    title: "Machine Tools & Equipment",
    shortDescription:
      "Hardware design, machine support, and integration for advanced production equipment.",
    description:
      "Infinity supports machine and equipment programs with mechanical/electrical design, BOM development, installation supervision, and controls integration for complex industrial assets.",
    challenges: [
      "Translating machine requirements into build-ready design packages",
      "Synchronizing electrical and mechanical installation",
      "Debugging field devices during run-in",
      "Handing over maintainable documentation and training",
    ],
    relatedServices: [
      "machine-manufacturing",
      "controls-plc-hmi-scada",
      "commissioning-and-site-support",
    ],
    image: "/images/services/smart-engineering.jpg",
    imageAlt: "Precision industrial equipment and engineering collaboration",
  },
  {
    id: "assembly",
    slug: "assembly-and-production-lines",
    title: "Assembly & Production Lines",
    shortDescription:
      "Line automation, robotics integration, and commissioning for assembly operations.",
    description:
      "Assembly and production-line projects draw on Infinity’s automation, robot programming, PLC/HMI, and on-site commissioning capabilities to bring systems online smoothly.",
    challenges: [
      "Balancing cycle time with reliable controls logic",
      "Integrating robots with upstream and downstream equipment",
      "Validating I/O and safety before production",
      "Training operators on new interfaces",
    ],
    relatedServices: [
      "automation-and-assembly-lines",
      "controls-plc-hmi-scada",
      "commissioning-and-site-support",
    ],
    image: "/images/services/civil-engineering.png",
    imageAlt: "Engineering support for assembly and production programs",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
