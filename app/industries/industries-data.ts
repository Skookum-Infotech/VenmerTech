import type { IconKey } from "../components/icons";

export interface IndustryCapability {
  icon: IconKey;
  title: string;
  desc: string;
}

export interface IndustryApproachStep {
  title: string;
  desc: string;
}

export interface IndustryOutcome {
  value: string;
  label: string;
}

export interface IndustryContent {
  slug: string;
  navLabel: string;
  title: string;
  subtitle: string;
  overview: string;
  capabilities: IndustryCapability[];
  approach: IndustryApproachStep[];
  outcomes: IndustryOutcome[];
  ctaHeading: string;
  ctaBody: string;
}

export const INDUSTRY_PAGES: IndustryContent[] = [
  {
    slug: "healthcare",
    navLabel: "Healthcare",
    title: "Technology that keeps care teams focused on patients, not paperwork.",
    subtitle: "Modernize clinical and administrative systems without disrupting care delivery.",
    overview:
      "Healthcare technology can't afford downtime or disruption to patient care. We help healthcare organizations modernize legacy systems, connect fragmented patient data, and build compliance in from the start — while staffing the clinical and technical roles that keep everything running.",
    capabilities: [
      { icon: "sync", title: "Modernize core systems without care disruption", desc: "Incremental upgrades that never take clinical systems offline." },
      { icon: "path", title: "Unify patient data across every system", desc: "One connected view across EHR, billing, and scheduling." },
      { icon: "shield", title: "Build compliance into the architecture", desc: "Security and audit controls designed in from day one." },
      { icon: "users", title: "Staff clinical support and IT roles fast", desc: "Vetted talent that understands healthcare environments." },
    ],
    approach: [
      { title: "Assess clinical systems", desc: "Map what's running, what's fragile, and what compliance actually requires." },
      { title: "Plan around care delivery", desc: "Sequence changes so clinical operations never go offline." },
      { title: "Modernize & connect", desc: "Unify data and upgrade systems incrementally, with compliance built in." },
      { title: "Staff & support", desc: "Fill clinical support and IT roles with people who understand healthcare." },
    ],
    outcomes: [
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
    overview:
      "Retail systems only get tested once a year — on your busiest day. We help retail and e-commerce teams architect for peak load, unify data across every channel, and staff up before the season starts, so the biggest days of the year are the smoothest, not the riskiest.",
    capabilities: [
      { icon: "gauge", title: "Architect for peak load, not average traffic", desc: "Infrastructure that's tested against your busiest day, not your average one." },
      { icon: "path", title: "Unify inventory, orders, and customer data", desc: "One source of truth across every channel." },
      { icon: "users", title: "Staff seasonal and permanent roles fast", desc: "A pipeline that's ready before the season starts." },
      { icon: "star", title: "Design consistent experiences everywhere", desc: "One coherent brand across web, mobile, and store." },
    ],
    approach: [
      { title: "Stress-test for peak", desc: "Find out where systems break before Black Friday does." },
      { title: "Unify channel data", desc: "Bring inventory, orders, and customers into one source of truth." },
      { title: "Staff ahead of the season", desc: "Build the seasonal pipeline before demand hits." },
      { title: "Launch & monitor", desc: "Go into peak season with eyes on every system, live." },
    ],
    outcomes: [
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
    overview:
      "Plant-floor systems and business systems too often run as two disconnected worlds. We help manufacturers integrate OT and IT without ripping out working equipment, modernize incrementally to avoid costly downtime, and staff the technical roles the local market can't fill.",
    capabilities: [
      { icon: "sync", title: "Integrate OT and IT without ripping out equipment", desc: "Connect the floor to the business, not replace it." },
      { icon: "gauge", title: "Modernize incrementally to avoid downtime", desc: "Upgrades sequenced around your production schedule." },
      { icon: "users", title: "Source technical talent beyond your local market", desc: "A wider pipeline for roles you can't fill locally." },
      { icon: "path", title: "Build a sequenced roadmap that fits the budget", desc: "A plan finance and operations can both sign off on." },
    ],
    approach: [
      { title: "Map the floor", desc: "Understand what's running on the plant floor and how it connects — or doesn't — to the business." },
      { title: "Sequence the integration", desc: "Plan changes around the production schedule, not around convenience." },
      { title: "Connect without disruption", desc: "Integrate OT and IT incrementally, with zero unplanned downtime." },
      { title: "Staff the gaps", desc: "Source technical talent beyond your local labor market." },
    ],
    outcomes: [
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
    overview:
      "Fast-moving software teams don't need more process — they need more capacity. We help technology companies add vetted engineering talent quickly, right-size infrastructure as they scale, and extend the team with managed on-call, so the roadmap moves as fast as the business needs it to.",
    capabilities: [
      { icon: "users", title: "Add vetted engineering capacity fast", desc: "Contractors who ship in week one, not month three." },
      { icon: "chart", title: "Right-size cloud infrastructure as you scale", desc: "Spend that tracks with usage, not guesswork." },
      { icon: "sync", title: "Pay down technical debt alongside new work", desc: "Modernize incrementally without stalling the roadmap." },
      { icon: "bell", title: "Extend your team with managed on-call", desc: "24/7 coverage that doesn't burn out your core team." },
    ],
    approach: [
      { title: "Scope the gap", desc: "Identify where engineering capacity or infrastructure is the real bottleneck." },
      { title: "Add capacity fast", desc: "Bring in vetted engineers who ship in week one." },
      { title: "Right-size infrastructure", desc: "Tune cloud spend and architecture to match real usage." },
      { title: "Extend on-call coverage", desc: "Cover nights and weekends without burning out the core team." },
    ],
    outcomes: [
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
