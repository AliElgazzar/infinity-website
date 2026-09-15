export type NavItem = {
  label: string;
  href: string;
};

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};

export type Service = {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
  relatedIndustries: string[];
};

export type Industry = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  challenges: string[];
  relatedServices: string[];
  image: string;
  imageAlt: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  services: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  metrics?: ProjectMetric[];
  /** When true, content is a structural draft awaiting real case-study details. */
  isDraft: boolean;
};

export type Stat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
};

export type Certification = {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  /** TODO: add verification URL when a public confirmation link is available */
  verificationUrl?: string;
};

export type ContactInfo = {
  companyName: string;
  legalName: string;
  addressLines: string[];
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneHref: string;
  email: string;
  hours?: string;
  mapEmbedUrl: string;
  mapLink: string;
  linkedIn?: string;
};
