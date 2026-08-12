export interface NavLinkItem {
  label: string;
  desc?: string;
  href: string;
}

export interface NavGroup {
  title?: string;
  links: NavLinkItem[];
  cta?: NavLinkItem;
}

export interface NavDropdown {
  label: string;
  groups: NavGroup[];
}

export const NAV_DROPDOWNS: NavDropdown[] = [
  {
    label: "Platform",
    groups: [
      {
        links: [
          { label: "Performance Reviews", desc: "Calibration, talent reviews", href: "/platform/performance-reviews" },
          { label: "Goals & OKRs", desc: "Aligned objectives, real progress", href: "/platform/goals-okrs" },
          { label: "1:1s", desc: "Shared agendas, real follow-through", href: "/platform/one-on-ones" },
          { label: "Engagement", desc: "Surveys, eNPS, and action plans", href: "/platform/engagement" },
          { label: "Grow", desc: "Career paths and development plans", href: "/platform/grow" },
          { label: "Reward & Recognition", desc: "Values-based praise and rewards", href: "/platform/reward-recognition" },
        ],
        cta: { label: "Explore the platform →", href: "/explore-the-platform" },
      },
    ],
  },
  {
    label: "Solutions",
    groups: [
      {
        links: [
          { label: "Cloud Modernization", desc: "Migrate, modernize, and scale", href: "/solutions/cloud-modernization" },
          { label: "Data & AI", desc: "Turn data into decisions", href: "/solutions/data-ai" },
          { label: "Application Modernization", desc: "Legacy systems, reimagined", href: "/solutions/application-modernization" },
          { label: "Managed Services", desc: "Day-to-day IT, fully managed", href: "/solutions/managed-services" },
          { label: "Permanent Placement", desc: "The right hire, built to last", href: "/solutions/permanent-placement" },
          { label: "Contract & Contract-to-Hire", desc: "Flexible talent, when you need it", href: "/solutions/contract-to-hire" },
          { label: "Executive Search", desc: "Leadership hires that fit", href: "/solutions/executive-search" },
          { label: "Recruitment Process Outsourcing", desc: "Your hiring engine, outsourced", href: "/solutions/recruitment-process-outsourcing" },
          { label: "Solution Architecture", desc: "Blueprints for complex systems", href: "/solutions/solution-architecture" },
          { label: "Modernization Strategy", desc: "A clear plan to get there", href: "/solutions/modernization-strategy" },
        ],
        cta: { label: "All solutions →", href: "/solutions" },
      },
    ],
  },
  {
    label: "Industries",
    groups: [
      {
        links: [
          { label: "Healthcare", desc: "Keep care teams whole", href: "/industries/healthcare" },
          { label: "Retail & E-commerce", desc: "Frontline engagement, peak-ready", href: "/industries/retail-ecommerce" },
          { label: "Manufacturing", desc: "For the people who run the floor", href: "/industries/manufacturing" },
          { label: "Technology", desc: "For fast-moving software teams", href: "/industries/technology" },
        ],
        cta: { label: "All industries →", href: "/industries" },
      },
    ],
  },
  {
    label: "Use Cases",
    groups: [
      {
        links: [
          { label: "Performance Review Cycles", desc: "Fair reviews, on schedule", href: "/use-cases/performance-review-cycles" },
          { label: "Employee Retention", desc: "Keep the people you can't replace", href: "/use-cases/employee-retention" },
          { label: "Company Goal Alignment", desc: "One strategy, every team", href: "/use-cases/company-goal-alignment" },
          { label: "Manager Effectiveness", desc: "Every manager, a better coach", href: "/use-cases/manager-effectiveness" },
          { label: "Onboarding & Ramp", desc: "Faster ramp, fewer early exits", href: "/use-cases/onboarding-ramp" },
          { label: "Recognition & Culture", desc: "Make great work visible", href: "/use-cases/recognition-culture" },
        ],
        cta: { label: "All use cases →", href: "/use-cases" },
      },
    ],
  },
];

export function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function isHomePage() {
  return window.location.pathname === "/";
}

export function handleHashNav(href: string) {
  if (isHomePage()) {
    scrollTo(href);
  } else {
    window.location.href = "/" + href;
  }
}
