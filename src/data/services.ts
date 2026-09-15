import type { Service } from "@/types";

/**
 * Services derived from verified infinityesc.com content and expertise listings.
 * Titles such as Intelligent Material Handling, Machine Manufacturing, and
 * Automation and Assembly Lines appear on the existing homepage.
 */
export const services: Service[] = [
  {
    id: "material-handling",
    slug: "intelligent-material-handling",
    number: "01",
    title: "Intelligent Material Handling",
    shortDescription:
      "Conveyance, sorting, and flow systems engineered for reliable throughput in demanding facilities.",
    description:
      "With deep material-handling experience, Infinity Engineering Services supports the design, integration, and commissioning of intelligent transport and flow systems that keep product moving with precision and control.",
    capabilities: [
      "Conveyor and sorter system support",
      "Controls integration for material flow",
      "Installation supervision and debugging",
      "Pre-commissioning and startup support",
      "Standby support and operator training",
    ],
    image: "/images/hero/sorter.jpg",
    imageAlt: "Industrial sorter and material-handling system",
    relatedIndustries: ["material-handling-logistics", "manufacturing", "automotive"],
  },
  {
    id: "machine-manufacturing",
    slug: "machine-manufacturing",
    number: "02",
    title: "Machine Manufacturing",
    shortDescription:
      "Engineering support for machine builds, hardware design, and production-ready mechanical systems.",
    description:
      "Our team provides engineering support for machine manufacturing initiatives — from mechanical and electrical hardware design through BOM development, installation supervision, and commissioning readiness.",
    capabilities: [
      "Mechanical and electrical hardware design",
      "AutoCAD and EPLAN documentation",
      "Bill of materials development",
      "Installation supervision",
      "System upgrade support",
    ],
    image: "/images/services/smart-engineering.jpg",
    imageAlt: "Engineers collaborating on industrial machine systems",
    relatedIndustries: ["manufacturing", "automotive", "machine-tools"],
  },
  {
    id: "automation-assembly",
    slug: "automation-and-assembly-lines",
    number: "03",
    title: "Automation and Assembly Lines",
    shortDescription:
      "Line automation, assembly integration, and controls that raise efficiency across production cells.",
    description:
      "We deliver tailored automation and assembly-line solutions that connect mechanical systems, controls software, and on-site commissioning so production lines perform with consistency.",
    capabilities: [
      "Assembly line automation support",
      "PLC programming and integration",
      "Robot programming and integration",
      "HMI design and operator interfaces",
      "Commissioning, testing, and startup",
    ],
    image: "/images/services/factory.jpeg",
    imageAlt: "Automated industrial production environment",
    relatedIndustries: ["manufacturing", "automotive", "assembly"],
  },
  {
    id: "controls-scada",
    slug: "controls-plc-hmi-scada",
    number: "04",
    title: "Controls, PLC, HMI & SCADA",
    shortDescription:
      "Software design spanning PLC logic, HMI screens, SCADA systems, simulation, and test cases.",
    description:
      "Software design capabilities include PLC coding, HMI design, SCADA design, simulation, and structured test cases — including Ignition-based integration work as a Certified Ignition Integrator.",
    capabilities: [
      "PLC coding and controls architecture",
      "HMI design and operator experience",
      "SCADA design and Ignition integration",
      "Simulation and test-case development",
      "Field device configuration and parametrizing",
    ],
    image: "/images/services/smart-solution.webp",
    imageAlt: "Industrial controls and digital engineering systems",
    relatedIndustries: ["manufacturing", "material-handling-logistics", "automotive"],
  },
  {
    id: "commissioning-support",
    slug: "commissioning-and-site-support",
    number: "05",
    title: "Commissioning & Site Support",
    shortDescription:
      "On-site pre-commissioning, startup, standby support, training, and customer care.",
    description:
      "Our engineers deploy for I/O checks, electrical debugging, field-device configuration, run-in verification, SAT support, startup, standby coverage, and training — following client standards and checklists.",
    capabilities: [
      "Pre-commissioning and I/O verification",
      "Electrical debugging and device configuration",
      "Commissioning, SAT, and startup",
      "Standby support and customer care",
      "On-site training",
    ],
    image: "/images/hero/merge.jpg",
    imageAlt: "Conveyor merge system during industrial commissioning",
    relatedIndustries: ["material-handling-logistics", "manufacturing", "automotive"],
  },
  {
    id: "business-automation",
    slug: "business-automation",
    number: "06",
    title: "Business Automation",
    shortDescription:
      "RPA and process-enhancement support that improves cycle time, accuracy, and productivity.",
    description:
      "Beyond plant-floor systems, Infinity supports business automation with RPA and process-enhancement teams focused on accuracy, reduced cycle time, and higher productivity for operational workflows.",
    capabilities: [
      "Robotic process automation (RPA)",
      "Business process enhancement",
      "Workflow accuracy improvements",
      "Cycle-time reduction support",
      "Software solutions for business operations",
    ],
    image: "/images/about-facility.jpg",
    imageAlt: "Modern facility representing business and operations systems",
    relatedIndustries: ["manufacturing", "material-handling-logistics"],
  },
  {
    id: "engineering-outsourcing",
    slug: "engineering-outsourcing",
    number: "07",
    title: "Engineering Outsourcing",
    shortDescription:
      "Skilled engineers ready to reinforce in-house teams or finish projects on site with competitive delivery.",
    description:
      "When projects need additional capacity, Infinity provides experienced engineers who can step into ongoing work — in-house or at the customer facility — to help finish on time with quality and competitive pricing.",
    capabilities: [
      "In-house engineering reinforcement",
      "On-site project deployment",
      "Hardware and software design support",
      "Installation and commissioning coverage",
      "Flexible project-lifecycle staffing",
    ],
    image: "/images/services/civil-engineering.png",
    imageAlt: "Engineering team supporting industrial project delivery",
    relatedIndustries: ["manufacturing", "automotive", "material-handling-logistics"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
