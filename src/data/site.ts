import type { Certification, ContactInfo, NavItem, Stat } from "@/types";

/**
 * Centralized site configuration for Infinity Engineering Services.
 * Values below are verified against the existing infinityesc.com content unless marked TODO.
 */
export const siteConfig = {
  name: "Infinity Engineering Services",
  shortName: "IES",
  tagline: "Industrial Automation & Engineering",
  description:
    "Infinity Engineering Services designs and delivers intelligent automation, material-handling, controls, and manufacturing solutions built for performance.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://infinityesc.com",
  foundedYear: 2021,
  logo: {
    src: "/logos/infinity-logo.png",
    alt: "Infinity Engineering Services logo",
    width: 178,
    height: 89,
  },
} as const;

export const contactInfo: ContactInfo = {
  companyName: "Infinity Engineering Services",
  legalName: "Infinity Engineering Services",
  // Verified from infinityesc.com (existing site lists 5110, not 5100).
  // TODO: Confirm exact suite formatting with company management if needed.
  addressLines: ["5110 28th Street", "Suite 1040"],
  city: "Grand Rapids",
  state: "MI",
  postalCode: "49512",
  country: "United States",
  phone: "+1 (616) 589-3581",
  phoneHref: "tel:+16165893581",
  // Verified from infinityesc.com (info@infinityesc.com).
  // TODO: Confirm if info@infinityes.com is also an active mailbox.
  email: "info@infinityesc.com",
  // Verified from infinityesc.com contact page.
  hours: "Mon–Fri 9am–6pm EST",
  mapEmbedUrl:
    "https://www.google.com/maps?q=5110+28th+Street+Suite+1040+Grand+Rapids+MI+49512&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=5110+28th+Street+Suite+1040+Grand+Rapids+MI+49512",
  // Verified LinkedIn company presence.
  linkedIn: "https://www.linkedin.com/company/infinityengineeringservices",
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
];

/**
 * Statistics verified from the existing company website homepage.
 * Do not invent additional metrics.
 */
export const companyStats: Stat[] = [
  {
    id: "clients",
    value: 16,
    suffix: "+",
    label: "Active clients",
  },
  {
    id: "industries",
    value: 5,
    suffix: "+",
    label: "Industries served",
  },
  {
    id: "experience",
    value: 15,
    suffix: "+",
    label: "Years material-handling experience",
  },
  {
    id: "founded",
    value: 2021,
    suffix: "",
    label: "Year established",
  },
];

/**
 * Certifications listed on the existing about page.
 */
export const certifications: Certification[] = [
  {
    id: "ignition",
    title: "Certified Ignition Integrator",
    description:
      "Infinity Engineering Services is listed as a Certified Ignition Integrator, supporting industrial SCADA, HMI, and controls integration work on the Ignition platform.",
    image: "/images/certifications/ignition-badge.png",
    imageAlt: "Ignition Certified Integrator badge",
    // TODO: Add Inductive Automation partner directory verification URL when confirmed.
  },
  {
    id: "osha10",
    title: "OSHA 10",
    description:
      "Team credentials include OSHA 10 certification in support of safe on-site industrial work practices.",
  },
  {
    id: "gm-gccs2",
    title: "GM GCCS2 Certified",
    description:
      "GM GCCS2 certification supports automotive controls and commissioning work aligned with General Motors standards.",
  },
];

export const companyStory = {
  whoWeAre: [
    "Infinity Engineering Services (IES) is a full-scope engineering services firm established in 2021 and based in Grand Rapids, MI.",
    "Our specialty is industrial automation — electrical, mechanical, software, installation, project management, and site supervision — as well as business automation through software solutions for businesses.",
    "We support clients by increasing team capacity with skilled individuals for in-house and on-site work, helping minimize travel for customer teams while remaining ready to deploy at any project phase.",
    "We are professional, ethical, and compliant.",
  ],
  team: [
    "Our engineering team holds credentials in engineering and design, with practical understanding across different industries.",
    "Engineers design and deliver systems that meet strategic, operational, and financial goals — from system conception through final commissioning.",
    "With varied experience and skill sets, the team continues to strengthen its capability in industrial automation and customer satisfaction.",
    "The team is diverse, cooperative, and current with the latest technologies in the market.",
  ],
  mission:
    "Deliver reliable industrial automation and engineering solutions that improve system performance, throughput, and operational confidence — from design through commissioning and ongoing support.",
  values: [
    {
      title: "Professional & ethical",
      description: "We operate with compliance, integrity, and clear accountability on every engagement.",
    },
    {
      title: "Practical engineering",
      description:
        "Designs are grounded in real industrial constraints — installation, commissioning, and long-term maintainability.",
    },
    {
      title: "Deployment-ready support",
      description:
        "Teams can support in-house work or deploy on site at design, installation, pre-commissioning, commissioning, or upgrade phases.",
    },
    {
      title: "Technology fluency",
      description:
        "PLC, robot, HMI, SCADA, simulation, and hardware design skills stay aligned with current industrial platforms.",
    },
  ],
} as const;

export const expertiseAreas = [
  "In-house and on-site mechanical/electrical hardware design including AutoCAD, EPLAN, and BOM development",
  "Software design including PLC coding, robot programming and integration, HMI design, SCADA design, simulation, and test cases",
  "On-site mechanical/electrical installation supervision including inventory management and order tracking",
  "On-site electrical/mechanical pre-commissioning including I/O check, electrical debugging, configuration and parametrizing field devices, run-in, tracking, and verifications following client standards and checklists",
  "On-site commissioning, testing, startup, standby support, training, and customer care",
] as const;
