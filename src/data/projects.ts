import type { Project } from "@/types";

/**
 * Project/case-study structure.
 *
 * TODO: Replace every draft entry with real, company-approved case studies.
 * Do not publish fabricated customer names, metrics, or results.
 * The gallery and filters are fully wired so content can be swapped in place.
 */
export const projects: Project[] = [
  {
    id: "draft-material-flow",
    slug: "material-flow-controls-integration",
    title: "Material Flow Controls Integration",
    industry: "material-handling-logistics",
    services: ["intelligent-material-handling", "controls-plc-hmi-scada"],
    technologies: ["PLC", "HMI", "SCADA", "Field devices"],
    challenge:
      "TODO: Document the real operational challenge for this material-handling controls engagement.",
    solution:
      "TODO: Summarize the controls architecture, integration approach, and commissioning plan used.",
    result:
      "TODO: Add verified outcomes only. Do not invent throughput or uptime statistics.",
    image: "/images/hero/sorter.jpg",
    imageAlt: "Industrial sorter representing a material-flow project",
    gallery: ["/images/hero/sorter.jpg", "/images/hero/merge.jpg"],
    isDraft: true,
  },
  {
    id: "draft-assembly-line",
    slug: "assembly-line-automation-support",
    title: "Assembly Line Automation Support",
    industry: "assembly",
    services: ["automation-and-assembly-lines", "commissioning-and-site-support"],
    technologies: ["PLC", "Robot programming", "HMI"],
    challenge:
      "TODO: Capture the production-line constraint that required automation and commissioning support.",
    solution:
      "TODO: Describe mechanical/controls integration and on-site bring-up activities.",
    result: "TODO: Replace with approved results from the completed engagement.",
    image: "/images/services/factory.jpeg",
    imageAlt: "Factory automation environment for an assembly-line project",
    gallery: ["/images/services/factory.jpeg", "/images/services/smart-solution.webp"],
    isDraft: true,
  },
  {
    id: "draft-ignition-scada",
    slug: "ignition-scada-and-hmi-delivery",
    title: "Ignition SCADA & HMI Delivery",
    industry: "manufacturing",
    services: ["controls-plc-hmi-scada", "business-automation"],
    technologies: ["Ignition", "SCADA", "HMI", "PLC"],
    challenge:
      "TODO: Define the visibility, control, or integration gap addressed with Ignition.",
    solution:
      "TODO: Outline SCADA/HMI design, PLC tag integration, and validation approach.",
    result: "TODO: Add confirmed operational improvements after customer approval.",
    image: "/images/services/smart-solution.webp",
    imageAlt: "Digital industrial systems representing SCADA and HMI work",
    gallery: [
      "/images/services/smart-solution.webp",
      "/images/services/smart-engineering.jpg",
    ],
    isDraft: true,
  },
  {
    id: "draft-automotive-commissioning",
    slug: "automotive-commissioning-program",
    title: "Automotive Commissioning Program",
    industry: "automotive",
    services: ["commissioning-and-site-support", "engineering-outsourcing"],
    technologies: ["PLC", "I/O verification", "Field devices", "GM standards"],
    challenge:
      "TODO: Describe the automotive launch or upgrade scenario supported on site.",
    solution:
      "TODO: Detail pre-commissioning, debugging, SAT support, and standby coverage.",
    result: "TODO: Publish only verified launch or quality outcomes.",
    image: "/images/hero/merge.jpg",
    imageAlt: "Industrial conveyance system associated with automotive commissioning",
    gallery: ["/images/hero/merge.jpg", "/images/about-facility.jpg"],
    isDraft: true,
  },
  {
    id: "draft-machine-build",
    slug: "machine-build-engineering-package",
    title: "Machine Build Engineering Package",
    industry: "machine-tools",
    services: ["machine-manufacturing", "controls-plc-hmi-scada"],
    technologies: ["AutoCAD", "EPLAN", "BOM", "PLC"],
    challenge:
      "TODO: State the machine-build requirement that needed hardware and controls design support.",
    solution:
      "TODO: Summarize design deliverables, installation supervision, and integration steps.",
    result: "TODO: Add approved delivery outcomes when available.",
    image: "/images/services/civil-engineering.png",
    imageAlt: "Engineering collaboration for a machine-build package",
    gallery: [
      "/images/services/civil-engineering.png",
      "/images/services/smart-engineering.jpg",
    ],
    isDraft: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((project) => project.services.includes(serviceSlug));
}

export function getProjectsByIndustry(industrySlug: string): Project[] {
  return projects.filter((project) => project.industry === industrySlug);
}
