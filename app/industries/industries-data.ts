export interface IndustryPairItem {
  title: string;
  desc: string;
}

export interface IndustryTag {
  label: string;
  href: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryContent {
  slug: string;
  navLabel: string;
  title: string;
  subtitle: string;
  challenges: IndustryPairItem[];
  solutions: IndustryPairItem[];
  tags: IndustryTag[];
  quoteText: string;
  quoteAttribution: string;
  stats: IndustryStat[];
  ctaHeading: string;
  ctaBody: string;
}

export const INDUSTRY_PAGES: IndustryContent[] = [
  {
    slug: "healthcare",
    navLabel: "Healthcare",
    title: "Technology that keeps care teams focused on patients, not paperwork.",
    subtitle: "Modernize clinical and administrative systems without disrupting care delivery.",
    challenges: [
      { title: "Legacy systems slow down clinical staff", desc: "Outdated software adds friction to every patient interaction." },
      { title: "Patient data locked in disconnected systems", desc: "EHR, billing, and scheduling systems don't talk to each other." },
      { title: "Compliance requirements limit how fast you can move", desc: "Every change has to clear a higher bar." },
      { title: "Staffing gaps strain care teams during peak demand", desc: "Open technical and support roles go unfilled for months." },
    ],
    solutions: [
      { title: "Modernize core systems without care disruption", desc: "Incremental upgrades that never take clinical systems offline." },
      { title: "Unify patient data across every system", desc: "One connected view across EHR, billing, and scheduling." },
      { title: "Build compliance into the architecture", desc: "Security and audit controls designed in from day one." },
      { title: "Staff clinical support and IT roles fast", desc: "Vetted talent that understands healthcare environments." },
    ],
    tags: [
      { label: "Application Modernization", href: "/solutions/application-modernization" },
      { label: "Data & AI", href: "/solutions/data-ai" },
      { label: "Managed Services", href: "/solutions/managed-services" },
      { label: "Contract & Contract-to-Hire", href: "/solutions/contract-to-hire" },
    ],
    quoteText: "We cut patient record retrieval time from minutes to seconds — without a single day of system downtime.",
    quoteAttribution: "Engagement Snapshot — Regional Healthcare Network",
    stats: [
      { value: "40+", label: "Healthcare systems modernized" },
      { value: "99.99%", label: "Uptime during migration" },
      { value: "3 wks", label: "Avg. staffing turnaround" },
    ],
    ctaHeading: "Ready to modernize care delivery?",
    ctaBody: "Talk to our healthcare team.",
  },
  {
    slug: "retail-ecommerce",
    navLabel: "Retail & E-commerce",
    title: "Built for peak season, not just launch day.",
    subtitle: "Commerce platforms and teams that hold up when traffic — and expectations — spike.",
    challenges: [
      { title: "Systems buckle under seasonal traffic spikes", desc: "Infrastructure that works in June fails in November." },
      { title: "Inventory and order data live in silos", desc: "Every channel has its own version of the truth." },
      { title: "Frontline teams are hard to staff and retain", desc: "Seasonal hiring is a scramble every single year." },
      { title: "Customer experience breaks down across channels", desc: "Web, mobile, and store feel like three different brands." },
    ],
    solutions: [
      { title: "Architect for peak load, not average traffic", desc: "Infrastructure that's tested against your busiest day, not your average one." },
      { title: "Unify inventory, orders, and customer data", desc: "One source of truth across every channel." },
      { title: "Staff seasonal and permanent roles fast", desc: "A pipeline that's ready before the season starts." },
      { title: "Design consistent experiences everywhere", desc: "One coherent brand across web, mobile, and store." },
    ],
    tags: [
      { label: "Cloud Modernization", href: "/solutions/cloud-modernization" },
      { label: "Data & AI", href: "/solutions/data-ai" },
      { label: "Recruitment Process Outsourcing", href: "/solutions/recruitment-process-outsourcing" },
      { label: "Solution Architecture", href: "/solutions/solution-architecture" },
    ],
    quoteText: "Our platform held through Black Friday without a single scaling incident — for the first time in three years.",
    quoteAttribution: "Engagement Snapshot — National Retail Chain",
    stats: [
      { value: "25+", label: "Retail platforms scaled" },
      { value: "5x", label: "Peak traffic handled" },
      { value: "0", label: "Black Friday incidents" },
    ],
    ctaHeading: "Ready to build for peak season?",
    ctaBody: "Talk to our retail team.",
  },
  {
    slug: "manufacturing",
    navLabel: "Manufacturing",
    title: "For the people who run the floor, not just the office.",
    subtitle: "Connect plant-floor systems to the tools your business runs on.",
    challenges: [
      { title: "Plant-floor systems don't talk to business systems", desc: "Production data stays trapped on the floor." },
      { title: "Downtime on legacy equipment software is costly", desc: "Every outage stops a line, not just a screen." },
      { title: "Skilled technical talent is hard to find locally", desc: "Your labor market doesn't have the specialists you need." },
      { title: "Modernization projects stall without a roadmap", desc: "Ambition outpaces sequencing, so nothing ships." },
    ],
    solutions: [
      { title: "Integrate OT and IT without ripping out equipment", desc: "Connect the floor to the business, not replace it." },
      { title: "Modernize incrementally to avoid downtime", desc: "Upgrades sequenced around your production schedule." },
      { title: "Source technical talent beyond your local market", desc: "A wider pipeline for roles you can't fill locally." },
      { title: "Build a sequenced roadmap that fits the budget", desc: "A plan finance and operations can both sign off on." },
    ],
    tags: [
      { label: "Application Modernization", href: "/solutions/application-modernization" },
      { label: "Modernization Strategy", href: "/solutions/modernization-strategy" },
      { label: "Permanent Placement", href: "/solutions/permanent-placement" },
      { label: "Managed Services", href: "/solutions/managed-services" },
    ],
    quoteText: "We finally have one view of production data instead of five spreadsheets and a whiteboard.",
    quoteAttribution: "Engagement Snapshot — Industrial Manufacturer",
    stats: [
      { value: "18+", label: "Plants connected" },
      { value: "45%", label: "Fewer unplanned outages" },
      { value: "6 wks", label: "Avg. roadmap delivery" },
    ],
    ctaHeading: "Ready to connect your floor to your business?",
    ctaBody: "Talk to our manufacturing team.",
  },
  {
    slug: "technology",
    navLabel: "Technology",
    title: "For fast-moving software teams who can't afford to slow down.",
    subtitle: "Extra engineering capacity and infrastructure support that keeps pace with your roadmap.",
    challenges: [
      { title: "Engineering roadmap outpaces hiring capacity", desc: "There's more to build than there are people to build it." },
      { title: "Infrastructure costs scale faster than revenue", desc: "Cloud spend grows quietly until it's a board topic." },
      { title: "Technical debt slows down every new feature", desc: "Every sprint pays a tax on decisions made years ago." },
      { title: "On-call burden burns out a lean team", desc: "The same three engineers get paged every time." },
    ],
    solutions: [
      { title: "Add vetted engineering capacity fast", desc: "Contractors who ship in week one, not month three." },
      { title: "Right-size cloud infrastructure as you scale", desc: "Spend that tracks with usage, not guesswork." },
      { title: "Pay down technical debt alongside new work", desc: "Modernize incrementally without stalling the roadmap." },
      { title: "Extend your team with managed on-call", desc: "24/7 coverage that doesn't burn out your core team." },
    ],
    tags: [
      { label: "Contract & Contract-to-Hire", href: "/solutions/contract-to-hire" },
      { label: "Cloud Modernization", href: "/solutions/cloud-modernization" },
      { label: "Application Modernization", href: "/solutions/application-modernization" },
      { label: "Managed Services", href: "/solutions/managed-services" },
    ],
    quoteText: "Adding two contract engineers let us ship the roadmap a full quarter early.",
    quoteAttribution: "Engagement Snapshot — Series B Software Company",
    stats: [
      { value: "60+", label: "Engineering teams supported" },
      { value: "1 qtr", label: "Avg. roadmap acceleration" },
      { value: "24/7", label: "On-call coverage" },
    ],
    ctaHeading: "Ready to move faster?",
    ctaBody: "Talk to our technology team.",
  },
];

export function getIndustryPage(slug: string): IndustryContent | undefined {
  return INDUSTRY_PAGES.find((p) => p.slug === slug);
}

export function getNextIndustry(slug: string): IndustryContent {
  const i = INDUSTRY_PAGES.findIndex((p) => p.slug === slug);
  return INDUSTRY_PAGES[(i + 1) % INDUSTRY_PAGES.length];
}
