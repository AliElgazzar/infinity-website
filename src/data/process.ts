import type { ProcessStep } from "@/types";

/**
 * Engineering process synthesized from verified project-lifecycle language on
 * the existing site: design, installation, pre-commissioning, commissioning,
 * SAT, startup, standby support, and training.
 */
export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description:
      "Clarify operational goals, site constraints, standards, and success criteria before engineering begins.",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description:
      "Develop mechanical, electrical, and software design packages — including AutoCAD, EPLAN, and BOM deliverables.",
  },
  {
    id: "engineer",
    number: "03",
    title: "Engineer",
    description:
      "Build PLC logic, HMI/SCADA interfaces, robot programs, simulations, and test cases aligned to the design intent.",
  },
  {
    id: "integrate",
    number: "04",
    title: "Integrate",
    description:
      "Supervise installation, connect field devices, and prepare systems for structured pre-commissioning.",
  },
  {
    id: "commission",
    number: "05",
    title: "Commission",
    description:
      "Execute I/O checks, debugging, configuration, run-in, SAT support, testing, and controlled startup.",
  },
  {
    id: "support",
    number: "06",
    title: "Support",
    description:
      "Provide standby coverage, training, customer care, and upgrade assistance after systems go live.",
  },
];
