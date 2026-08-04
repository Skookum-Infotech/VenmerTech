import type { IconKey } from "../components/icons";

export type SolutionGroup = "Technology" | "Staffing" | "Services";

export interface SolutionCapability {
  icon: IconKey;
  title: string;
  desc: string;
}

export interface SolutionApproachStep {
  title: string;
  desc: string;
}

export interface SolutionStat {
  value: string;
  label: string;
}

export interface SolutionPageContent {
  slug: string;
  navLabel: string;
  groups: SolutionGroup[];
  title: string;
  subtitle: string;
  heroStats: SolutionStat[];
  overview: string;
  capabilities: SolutionCapability[];
  approach: SolutionApproachStep[];
  outcomes: SolutionStat[];
  ctaHeading: string;
  ctaBody: string;
}

export const SOLUTION_PAGES: SolutionPageContent[] = [
  {
    slug: "cloud-modernization",
    navLabel: "Cloud Modernization",
    groups: ["Technology"],
    title: "Modernize your cloud, without the migration headaches.",
    subtitle:
      "Move faster, cut infrastructure cost, and rebuild for scale — with a team that's done this before.",
    heroStats: [
      { value: "50+", label: "Migrations completed" },
      { value: "30%", label: "Avg. infra cost reduction" },
    ],
    overview:
      "We help enterprises move off legacy infrastructure and onto modern, scalable cloud platforms — without disrupting the business along the way. From assessment to cutover, our team plans the migration path, modernizes the architecture, and hands off a system your team can actually run.",
    capabilities: [
      { icon: "target", title: "Cloud Readiness Assessment", desc: "Understand what's ready to move and what needs rework first." },
      { icon: "sync", title: "Lift-and-Shift & Re-architecture", desc: "Move fast where it's safe, rebuild where it matters." },
      { icon: "path", title: "Multi-cloud & Hybrid Strategy", desc: "Avoid lock-in with an infrastructure plan that fits your business." },
      { icon: "chart", title: "Cost Optimization", desc: "Right-size resources so cloud spend tracks with actual usage." },
      { icon: "shield", title: "Security & Compliance Hardening", desc: "Build controls in during the migration, not after." },
      { icon: "bell", title: "24/7 Migration Support", desc: "A team on call through every cutover window." },
    ],
    approach: [
      { title: "Assess", desc: "Audit current infrastructure, dependencies, and risk." },
      { title: "Plan the migration", desc: "Sequence workloads by risk, cost, and business impact." },
      { title: "Migrate & modernize", desc: "Move workloads and re-architect where it pays off." },
      { title: "Optimize & handoff", desc: "Tune for cost and performance, then hand off a system your team owns." },
    ],
    outcomes: [
      { value: "30%", label: "Lower infra spend" },
      { value: "2x", label: "Faster deployments" },
      { value: "99.9%", label: "Uptime post-migration" },
    ],
    ctaHeading: "Ready to modernize your infrastructure?",
    ctaBody: "Talk to our cloud team about your migration.",
  },
  {
    slug: "data-ai",
    navLabel: "Data & AI",
    groups: ["Technology"],
    title: "Turn scattered data into decisions you can act on.",
    subtitle: "Data engineering, analytics, and applied AI built for how your business actually runs.",
    heroStats: [
      { value: "100+ TB", label: "Data pipelines managed" },
      { value: "15+", label: "AI models shipped" },
    ],
    overview:
      "Most organizations don't have a data problem — they have a data access problem. We build the pipelines, warehouses, and applied AI systems that turn raw data into something your teams can query, trust, and act on.",
    capabilities: [
      { icon: "sync", title: "Data Pipeline Engineering", desc: "Reliable pipelines that move data where it needs to go." },
      { icon: "book", title: "Cloud Data Warehousing", desc: "A single source of truth your teams can actually query." },
      { icon: "chart", title: "BI & Reporting", desc: "Dashboards people check instead of ignore." },
      { icon: "target", title: "Applied Machine Learning", desc: "Models built around a real business problem, not a demo." },
      { icon: "gauge", title: "MLOps & Model Monitoring", desc: "Keep models accurate after they ship, not just on day one." },
      { icon: "shield", title: "Data Governance", desc: "Access controls and lineage that hold up to an audit." },
    ],
    approach: [
      { title: "Audit your data", desc: "Map sources, quality gaps, and where the value actually is." },
      { title: "Build the pipeline", desc: "Engineer reliable data flow from source to warehouse." },
      { title: "Model & analyze", desc: "Turn clean data into dashboards, insights, and models." },
      { title: "Deploy & monitor", desc: "Ship to production with monitoring built in from day one." },
    ],
    outcomes: [
      { value: "3x", label: "Faster reporting cycles" },
      { value: "60%", label: "Less manual data work" },
      { value: "15+", label: "Models in production" },
    ],
    ctaHeading: "Ready to put your data to work?",
    ctaBody: "Talk to our data & AI team.",
  },
  {
    slug: "application-modernization",
    navLabel: "Application Modernization",
    groups: ["Technology"],
    title: "Legacy systems, rebuilt for how your business runs today.",
    subtitle: "Modernize monoliths into scalable, maintainable systems — without a risky big-bang rewrite.",
    heroStats: [
      { value: "40+", label: "Applications modernized" },
      { value: "12 yrs", label: "Avg. legacy system age" },
    ],
    overview:
      "Legacy applications don't need to be thrown away — they need a path forward. We modernize incrementally, breaking monoliths into services, upgrading stacks, and closing the gap between what your systems do and what your business needs.",
    capabilities: [
      { icon: "book", title: "Legacy Code Audits", desc: "Understand what's actually running before you touch it." },
      { icon: "sync", title: "Monolith-to-Microservices", desc: "Break apart the system without breaking the business." },
      { icon: "path", title: "API-First Re-architecture", desc: "Systems that integrate instead of trapping your data." },
      { icon: "star", title: "Framework & Language Upgrades", desc: "Get off end-of-life stacks without a rewrite." },
      { icon: "shield", title: "Automated Test Coverage", desc: "Confidence to change code without breaking production." },
      { icon: "target", title: "Zero-Downtime Cutover", desc: "Ship the new system without a maintenance window." },
    ],
    approach: [
      { title: "Audit the system", desc: "Map the codebase, dependencies, and hidden risk." },
      { title: "Plan the path", desc: "Sequence modernization by business risk and value." },
      { title: "Modernize incrementally", desc: "Replace piece by piece, never all at once." },
      { title: "Cut over safely", desc: "Move to the new system with a tested rollback plan." },
    ],
    outcomes: [
      { value: "40+", label: "Systems modernized" },
      { value: "70%", label: "Fewer production incidents" },
      { value: "0", label: "Downtime cutovers" },
    ],
    ctaHeading: "Ready to modernize your systems?",
    ctaBody: "Talk to our application modernization team.",
  },
  {
    slug: "managed-services",
    navLabel: "Managed Services",
    groups: ["Technology", "Services"],
    title: "An extension of your team, not another vendor to manage.",
    subtitle: "Ongoing monitoring, support, and optimization so your systems stay reliable long after launch.",
    heroStats: [
      { value: "24/7", label: "Coverage" },
      { value: "99.9%", label: "SLA uptime" },
    ],
    overview:
      "Shipping the system is the easy part — running it reliably for years is the real work. Our managed services team monitors, maintains, and continuously improves your systems, so your team can focus on what's next instead of firefighting.",
    capabilities: [
      { icon: "bell", title: "24/7 Monitoring & Alerting", desc: "Issues get caught before your customers notice." },
      { icon: "shield", title: "Incident Response & On-call", desc: "A team that answers, day or night." },
      { icon: "gauge", title: "Performance Tuning", desc: "Systems that stay fast as load grows." },
      { icon: "sync", title: "Patch & Dependency Management", desc: "Stay current without breaking things." },
      { icon: "chart", title: "Cost & Capacity Planning", desc: "Right-sized infrastructure, reviewed regularly." },
      { icon: "book", title: "Monthly Health Reporting", desc: "A clear view of what's running and how it's doing." },
    ],
    approach: [
      { title: "Onboard your systems", desc: "Document what's running and how it's put together." },
      { title: "Set up monitoring", desc: "Instrument the systems that matter most first." },
      { title: "Support & maintain", desc: "Ongoing patching, tuning, and incident response." },
      { title: "Review & optimize", desc: "Monthly reviews that catch drift before it's a problem." },
    ],
    outcomes: [
      { value: "99.9%", label: "SLA uptime" },
      { value: "<15min", label: "Avg. incident response" },
      { value: "20%", label: "Lower ops overhead" },
    ],
    ctaHeading: "Ready for a team that's always on?",
    ctaBody: "Talk to our managed services team.",
  },
  {
    slug: "permanent-placement",
    navLabel: "Permanent Placement",
    groups: ["Staffing"],
    title: "Full-time hires who fit the team, not just the job description.",
    subtitle: "Direct-hire recruiting for technology roles, backed by a network we've built over a decade.",
    heroStats: [
      { value: "500+", label: "Placements made" },
      { value: "45 days", label: "Avg. time to hire" },
    ],
    overview:
      "Permanent hiring is a long-term bet — we treat it that way. Our recruiters go beyond keyword matching to understand team dynamics, technical depth, and culture fit, so the hires you make actually stick.",
    capabilities: [
      { icon: "target", title: "Role Scoping & Job Design", desc: "Define the role before you go looking for it." },
      { icon: "shield", title: "Technical Screening", desc: "Real vetting, not just a resume pass." },
      { icon: "book", title: "Candidate Vetting & Reference Checks", desc: "Confidence beyond the interview." },
      { icon: "chat", title: "Offer & Negotiation Support", desc: "Get to a close without losing the candidate." },
      { icon: "sync", title: "Onboarding Coordination", desc: "A smooth first 90 days, not just a start date." },
      { icon: "star", title: "Guarantee Period Support", desc: "We stay involved after the hire is made." },
    ],
    approach: [
      { title: "Define the role", desc: "Align on scope, level, and what success looks like." },
      { title: "Source & screen", desc: "Tap a network built over a decade of placements." },
      { title: "Interview & vet", desc: "Technical and culture-fit screening before you meet them." },
      { title: "Offer & onboard", desc: "Close the hire and set them up to succeed early." },
    ],
    outcomes: [
      { value: "500+", label: "Placements made" },
      { value: "45", label: "Avg. days to hire" },
      { value: "92%", label: "1-year retention rate" },
    ],
    ctaHeading: "Ready to build your team?",
    ctaBody: "Talk to our permanent placement team.",
  },
  {
    slug: "contract-to-hire",
    navLabel: "Contract & Contract-to-Hire",
    groups: ["Staffing"],
    title: "Flexible talent, without the long-term risk.",
    subtitle: "Bring in vetted technologists on contract — and convert to full-time when it's the right fit.",
    heroStats: [
      { value: "300+", label: "Contractors placed" },
      { value: "2 wks", label: "Avg. time to start" },
    ],
    overview:
      "Sometimes you need capacity fast, or you want to see the fit before committing long-term. Our contract and contract-to-hire staffing gets skilled technologists into your team quickly, with a clear path to conversion when it makes sense.",
    capabilities: [
      { icon: "target", title: "Rapid Sourcing", desc: "Candidates in front of you in days, not months." },
      { icon: "shield", title: "Skills-Verified Candidates", desc: "Technical vetting before anyone gets on a call." },
      { icon: "sync", title: "Flexible Contract Terms", desc: "Scale up or down as the project changes." },
      { icon: "path", title: "Contract-to-Hire Conversion", desc: "A clear path to full-time when it's a fit." },
      { icon: "book", title: "Payroll & Compliance Handling", desc: "We handle the paperwork, you manage the work." },
      { icon: "chat", title: "Performance Check-ins", desc: "Regular touchpoints so nothing drifts unnoticed." },
    ],
    approach: [
      { title: "Scope the need", desc: "Define the skills, duration, and urgency." },
      { title: "Match candidates", desc: "Pre-vetted technologists ready to start fast." },
      { title: "Onboard on contract", desc: "Get them productive within the first week." },
      { title: "Convert or extend", desc: "Move to full-time or extend based on what works." },
    ],
    outcomes: [
      { value: "300+", label: "Contractors placed" },
      { value: "2", label: "Avg. weeks to start" },
      { value: "65%", label: "Convert to full-time" },
    ],
    ctaHeading: "Ready to scale your team fast?",
    ctaBody: "Talk to our contract staffing team.",
  },
  {
    slug: "executive-search",
    navLabel: "Executive Search",
    groups: ["Staffing"],
    title: "Leadership hires that shape where the company goes next.",
    subtitle: "Confidential, high-touch search for technology leadership and executive roles.",
    heroStats: [
      { value: "80+", label: "Executives placed" },
      { value: "6 wks", label: "Avg. search time" },
    ],
    overview:
      "Executive hires carry outsized weight — one wrong fit can cost years. Our search process is deliberate and confidential, built around a deep understanding of the role, the team, and where the company is headed.",
    capabilities: [
      { icon: "shield", title: "Confidential Search", desc: "Discreet outreach that protects both sides." },
      { icon: "path", title: "Market Mapping", desc: "A full view of who's out there before you decide." },
      { icon: "target", title: "Leadership Assessment", desc: "Evaluate for judgment, not just résumé lines." },
      { icon: "users", title: "Stakeholder Alignment", desc: "Get the whole leadership team on the same page." },
      { icon: "chart", title: "Compensation Benchmarking", desc: "Offers grounded in real market data." },
      { icon: "book", title: "Search Progress Reporting", desc: "Full visibility into the pipeline, every step." },
    ],
    approach: [
      { title: "Define the mandate", desc: "Align on the role's mission and success metrics." },
      { title: "Map the market", desc: "Identify who's realistically reachable and right." },
      { title: "Assess & shortlist", desc: "Rigorous evaluation before anyone meets the board." },
      { title: "Close & onboard", desc: "Land the hire and set them up for a strong start." },
    ],
    outcomes: [
      { value: "80+", label: "Executives placed" },
      { value: "6", label: "Avg. weeks to shortlist" },
      { value: "90%", label: "2-year retention" },
    ],
    ctaHeading: "Ready to make a leadership hire?",
    ctaBody: "Talk to our executive search team.",
  },
  {
    slug: "recruitment-process-outsourcing",
    navLabel: "Recruitment Process Outsourcing",
    groups: ["Staffing"],
    title: "Your recruiting team, running at your standards, at scale.",
    subtitle: "End-to-end RPO for companies that need to hire fast without building an internal team from scratch.",
    heroStats: [
      { value: "10+", label: "Programs run" },
      { value: "3x", label: "Faster hiring at scale" },
    ],
    overview:
      "When hiring volume outpaces your internal recruiting capacity, RPO fills the gap. We embed as your recruiting function — sourcing, screening, and managing the pipeline under your employer brand and standards.",
    capabilities: [
      { icon: "users", title: "Embedded Recruiting Team", desc: "Recruiters who work as part of your org, not outside it." },
      { icon: "sync", title: "Sourcing & Pipeline Management", desc: "A pipeline that never runs dry." },
      { icon: "star", title: "Employer Branding Support", desc: "Represent your brand the way you would." },
      { icon: "path", title: "ATS & Process Integration", desc: "Works inside the tools you already use." },
      { icon: "chat", title: "Hiring Manager Enablement", desc: "Equip your managers to move fast and decide well." },
      { icon: "chart", title: "Reporting & Analytics", desc: "Full visibility into funnel health and time to hire." },
    ],
    approach: [
      { title: "Scope the program", desc: "Define volume, roles, and hiring standards." },
      { title: "Embed the team", desc: "Recruiters plug into your process and tools." },
      { title: "Run the pipeline", desc: "Source, screen, and manage candidates at scale." },
      { title: "Report & refine", desc: "Tune the program against real hiring data." },
    ],
    outcomes: [
      { value: "10+", label: "Programs run" },
      { value: "3x", label: "Faster hiring at scale" },
      { value: "35%", label: "Lower cost per hire" },
    ],
    ctaHeading: "Ready to scale your hiring?",
    ctaBody: "Talk to our RPO team.",
  },
  {
    slug: "solution-architecture",
    navLabel: "Solution Architecture",
    groups: ["Services"],
    title: "The blueprint before the build.",
    subtitle: "Solution architecture that gets the hard decisions right before a single line of code ships.",
    heroStats: [
      { value: "60+", label: "Architectures delivered" },
      { value: "0", label: "Major rework projects" },
    ],
    overview:
      "The cost of an architecture mistake compounds every sprint it goes unnoticed. We design the system architecture up front — data flow, integration points, scalability, and failure modes — so your team builds on solid ground.",
    capabilities: [
      { icon: "path", title: "System Design & Diagrams", desc: "A shared reference the whole team builds against." },
      { icon: "target", title: "Technology Stack Selection", desc: "Choices grounded in your constraints, not trends." },
      { icon: "sync", title: "Integration & API Design", desc: "Interfaces that age well as the system grows." },
      { icon: "gauge", title: "Scalability & Failure Planning", desc: "Know how it breaks before it breaks in production." },
      { icon: "shield", title: "Security Architecture Review", desc: "Threat modeling built into the design, not bolted on." },
      { icon: "book", title: "Documentation & Handoff", desc: "A team can pick this up without you in the room." },
    ],
    approach: [
      { title: "Understand the goals", desc: "Get clear on constraints, scale, and priorities." },
      { title: "Design the system", desc: "Map data flow, services, and integration points." },
      { title: "Validate with stakeholders", desc: "Pressure-test the design before anyone builds." },
      { title: "Document & handoff", desc: "A reference your engineering team can build from." },
    ],
    outcomes: [
      { value: "60+", label: "Architectures delivered" },
      { value: "0", label: "Major rework projects" },
      { value: "100%", label: "Documented handoffs" },
    ],
    ctaHeading: "Ready to design it right the first time?",
    ctaBody: "Talk to our solution architecture team.",
  },
  {
    slug: "modernization-strategy",
    navLabel: "Modernization Strategy",
    groups: ["Services"],
    title: "A modernization roadmap you can actually execute.",
    subtitle: "Strategic planning that turns ‘we should modernize’ into a sequenced, funded plan.",
    heroStats: [
      { value: "35+", label: "Roadmaps delivered" },
      { value: "6 wks", label: "Avg. engagement" },
    ],
    overview:
      "Modernization fails more often from lack of sequencing than lack of ambition. We assess your current systems, prioritize by risk and impact, and build a roadmap your team and budget can actually follow through on.",
    capabilities: [
      { icon: "target", title: "Current-State Assessment", desc: "An honest read on where systems actually stand." },
      { icon: "gauge", title: "Risk & Impact Prioritization", desc: "Sequence work by what matters most, first." },
      { icon: "path", title: "Roadmap Sequencing", desc: "A plan that fits your team's real capacity." },
      { icon: "chart", title: "Budget & Resourcing Plans", desc: "A roadmap finance can actually approve." },
      { icon: "users", title: "Stakeholder Alignment", desc: "Get engineering and leadership pulling the same way." },
      { icon: "book", title: "Executive Reporting", desc: "Progress your leadership team can track easily." },
    ],
    approach: [
      { title: "Assess current state", desc: "Inventory systems, risk, and technical debt." },
      { title: "Prioritize the work", desc: "Rank initiatives by risk, cost, and business value." },
      { title: "Build the roadmap", desc: "Sequence the plan across realistic timelines." },
      { title: "Align & kick off", desc: "Get sign-off and hand off an execution-ready plan." },
    ],
    outcomes: [
      { value: "35+", label: "Roadmaps delivered" },
      { value: "6", label: "Avg. weeks to deliver" },
      { value: "3yr", label: "Avg. roadmap horizon" },
    ],
    ctaHeading: "Ready to plan your modernization?",
    ctaBody: "Talk to our strategy team.",
  },
];

export function getSolutionPage(slug: string): SolutionPageContent | undefined {
  return SOLUTION_PAGES.find((p) => p.slug === slug);
}

export function getRelatedSolutions(content: SolutionPageContent): SolutionPageContent[] {
  return SOLUTION_PAGES.filter((p) => p.groups.some((g) => content.groups.includes(g)));
}
