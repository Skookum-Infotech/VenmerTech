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
          { label: "Performance Reviews", desc: "Calibration, talent reviews", href: "#" },
          { label: "Goals & OKRs", desc: "Aligned objectives, real progress", href: "#" },
          { label: "1:1s", desc: "Shared agendas, real follow-through", href: "#" },
          { label: "Engagement", desc: "Surveys, eNPS, and action plans", href: "#" },
          { label: "Grow", desc: "Career paths and development plans", href: "#" },
          { label: "Reward & Recognition", desc: "Values-based praise and rewards", href: "#" },
        ],
        cta: { label: "Explore the platform →", href: "/explore-the-platform" },
      },
    ],
  },
  {
    label: "Solutions",
    groups: [
      {
        title: "Technology",
        links: [
          { label: "Cloud Modernization", href: "#" },
          { label: "Data & AI", href: "#" },
          { label: "Application Modernization", href: "#" },
          { label: "Managed Services", href: "#" },
        ],
      },
      {
        title: "Staffing",
        links: [
          { label: "Permanent Placement", href: "#" },
          { label: "Contract & Contract-to-Hire", href: "#" },
          { label: "Executive Search", href: "#" },
          { label: "Recruitment Process Outsourcing", href: "#" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Solution Architecture", href: "#" },
          { label: "Modernization Strategy", href: "#" },
          { label: "Managed Services", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    groups: [
      {
        links: [
          { label: "Healthcare", desc: "Keep care teams whole", href: "#" },
          { label: "Retail & E-commerce", desc: "Frontline engagement, peak-ready", href: "#" },
          { label: "Manufacturing", desc: "For the people who run the floor", href: "#" },
          { label: "Technology", desc: "For fast-moving software teams", href: "#" },
        ],
        cta: { label: "All industries →", href: "#" },
      },
    ],
  },
  {
    label: "Use Cases",
    groups: [
      {
        links: [
          { label: "Performance Review Cycles", desc: "Fair reviews, on schedule", href: "#" },
          { label: "Employee Retention", desc: "Keep the people you can't replace", href: "#" },
          { label: "Company Goal Alignment", desc: "One strategy, every team", href: "#" },
          { label: "Manager Effectiveness", desc: "Every manager, a better coach", href: "#" },
          { label: "Onboarding & Ramp", desc: "Faster ramp, fewer early exits", href: "#" },
          { label: "Recognition & Culture", desc: "Make great work visible", href: "#" },
        ],
        cta: { label: "All use cases →", href: "#" },
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
