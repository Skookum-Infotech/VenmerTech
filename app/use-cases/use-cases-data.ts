import type { IconKey } from "../components/icons";

export interface UseCaseCapability {
  icon: IconKey;
  title: string;
  desc: string;
}

export interface UseCaseApproachStep {
  title: string;
  desc: string;
}

export interface UseCaseOutcome {
  value: string;
  label: string;
}

export interface UseCaseContent {
  slug: string;
  navLabel: string;
  title: string;
  subtitle: string;
  overview: string;
  capabilities: UseCaseCapability[];
  approach: UseCaseApproachStep[];
  outcomes: UseCaseOutcome[];
  ctaHeading: string;
  ctaBody: string;
}

export const USE_CASE_PAGES: UseCaseContent[] = [
  {
    slug: "performance-review-cycles",
    navLabel: "Performance Review Cycles",
    title: "A review cycle people trust, not dread.",
    subtitle: "Turn a once-a-year scramble into a fair, on-schedule process managers and employees actually trust.",
    overview:
      "Most review cycles fail not because managers don't care, but because the process makes fairness hard — no shared criteria, no visibility into how other teams are rating, and a deadline that sneaks up every time. We help you build a structured cycle with shared templates, automated reminders, and calibration sessions, so every review reflects a full year of work instead of what a manager remembers from last month.",
    capabilities: [
      { icon: "gauge", title: "Performance Reviews", desc: "Shared criteria and calibration keep ratings consistent across the whole cycle." },
      { icon: "chat", title: "1:1s", desc: "Regular 1:1s feed real context into the review instead of a once-a-year memory test." },
      { icon: "target", title: "Goals & OKRs", desc: "Review conversations tie back to the goals someone was actually working toward." },
    ],
    approach: [
      { title: "Why review cycles break down", desc: "Most cycles fail not because managers don't care, but because the process makes fairness hard — no shared criteria, no visibility into how other teams are rating, and a deadline that sneaks up every time." },
      { title: "What changes with a structured cycle", desc: "Templates, automated reminders, and calibration sessions mean every manager works from the same criteria — and no cycle catches anyone off guard." },
      { title: "What managers experience", desc: "A clear queue of who's due, pre-filled context from the last cycle, and a calibration view before ratings go final." },
      { title: "What employees experience", desc: "Reviews that reflect a full year of work, not just what a manager remembers from last month." },
    ],
    outcomes: [
      { value: "3x", label: "Faster cycle completion" },
      { value: "91%", label: "On-time review completion" },
      { value: "2 weeks", label: "Cycle completion time" },
    ],
    ctaHeading: "Ready to fix your review cycle?",
    ctaBody: "Talk to our team about performance reviews.",
  },
  {
    slug: "employee-retention",
    navLabel: "Employee Retention",
    title: "Flight risks you catch months early, not after they've resigned.",
    subtitle: "Spot disengagement before the resignation letter, and act while there's still time to change the outcome.",
    overview:
      "By the time someone resigns, the decision was usually made months earlier — most teams only get signal after it's too late to act. We help you build continuous signal into how you work, with engagement pulses, 1:1 sentiment, and manager check-ins that surface risk early enough to actually change the outcome.",
    capabilities: [
      { icon: "chart", title: "Engagement", desc: "Pulse surveys and sentiment trends surface disengagement while there's still time to act." },
      { icon: "chat", title: "1:1s", desc: "Regular 1:1s catch the early signals a survey alone would miss." },
      { icon: "path", title: "Grow", desc: "A visible growth path gives people a reason to stay instead of look elsewhere." },
    ],
    approach: [
      { title: "Why retention surprises happen", desc: "By the time someone resigns, the decision was made months earlier. Most teams only get signal after it's too late to change anything." },
      { title: "What changes with continuous signal", desc: "Engagement pulses, 1:1 sentiment, and manager check-ins surface risk early enough to actually act on it." },
      { title: "What managers experience", desc: "A quiet flag when someone on their team shows early signs of disengagement — with context, not just a score." },
      { title: "What HR experiences", desc: "Aggregate retention risk by team, without reading every individual survey response." },
    ],
    outcomes: [
      { value: "24%", label: "Lower regretted attrition" },
      { value: "14%", label: "Regretted attrition" },
      { value: "90-day lead time", label: "Attrition signal lead time" },
    ],
    ctaHeading: "Ready to see risk earlier?",
    ctaBody: "Talk to our team about retention.",
  },
  {
    slug: "company-goal-alignment",
    navLabel: "Company Goal Alignment",
    title: "Company strategy visible in every team's goals, not stuck in a slide deck.",
    subtitle: "Connect company strategy to what every team is actually working on this quarter.",
    overview:
      "Strategy gets announced once and then lives in a slide deck nobody reopens, so teams end up setting goals based on their best guess at what matters. We help you connect every team goal back to a company objective, so leadership can see which priorities actually have work behind them — and which don't.",
    capabilities: [
      { icon: "target", title: "Goals & OKRs", desc: "Cascading OKRs give every team a direct line back to company strategy." },
      { icon: "gauge", title: "Performance Reviews", desc: "Reviews reinforce the goals that actually ladder up to the business." },
      { icon: "chart", title: "Engagement", desc: "Pulse surveys show whether people actually understand where the company is headed." },
    ],
    approach: [
      { title: "Why alignment breaks down", desc: "Strategy gets announced once and then lives in a slide deck nobody reopens. Teams set goals based on their best guess at what matters." },
      { title: "What changes with connected goals", desc: "Every team goal links back to a company objective, so anyone can see how their work ladders up." },
      { title: "What leadership experiences", desc: "A live view of which company objectives actually have team goals behind them — and which don't." },
      { title: "What teams experience", desc: "Clarity on why a goal matters, not just what the goal is." },
    ],
    outcomes: [
      { value: "2.1x", label: "More teams aligned to strategy" },
      { value: "88%", label: "Teams with aligned goals" },
      { value: "Always visible", label: "Strategy visibility" },
    ],
    ctaHeading: "Ready to connect strategy to execution?",
    ctaBody: "Talk to our team about goal alignment.",
  },
  {
    slug: "manager-effectiveness",
    navLabel: "Manager Effectiveness",
    title: "Every manager coached every week, not left to learn alone.",
    subtitle: "Give every manager the structure and prompts to run better 1:1s, reviews, and check-ins — without a training budget.",
    overview:
      "Most new managers get a title change and no playbook — what happens in a 1:1 or a review depends entirely on who they had as a manager. We give every manager talking-point libraries, review prompts, and lightweight nudges, so coaching quality doesn't come down to luck.",
    capabilities: [
      { icon: "chat", title: "1:1s", desc: "A talking-points library gives new managers a starting point instead of a blank page." },
      { icon: "gauge", title: "Performance Reviews", desc: "Structured review criteria mean quality doesn't depend on who a manager happens to be." },
      { icon: "path", title: "Grow", desc: "Development plans give managers a concrete way to coach, not just check in." },
    ],
    approach: [
      { title: "Why manager quality varies so much", desc: "Most new managers get a title change and no playbook. What happens in a 1:1 or a review depends entirely on who they had as a manager." },
      { title: "What changes with built-in coaching", desc: "Talking-point libraries, review prompts, and lightweight nudges give every manager a baseline to work from." },
      { title: "What new managers experience", desc: "A starting point for hard conversations instead of a blank page." },
      { title: "What their teams experience", desc: "More consistent 1:1s and reviews, regardless of who their manager is." },
    ],
    outcomes: [
      { value: "27pt", label: "Increase in manager trust scores" },
      { value: "85%", label: "Employees who trust their manager" },
      { value: "Weekly prompts", label: "Manager coaching cadence" },
    ],
    ctaHeading: "Ready to support your managers?",
    ctaBody: "Talk to our team about manager effectiveness.",
  },
  {
    slug: "onboarding-ramp",
    navLabel: "Onboarding & Ramp",
    title: "New hires productive in weeks, not months.",
    subtitle: "Structured ramp plans and early check-ins that catch confusion before it turns into an early exit.",
    overview:
      "The first 90 days set the tone for everything after. Without structure, new hires either drown quietly or never get context on how their work fits in. We help you build milestone-based ramp plans and early check-ins that catch confusion in week two instead of month three.",
    capabilities: [
      { icon: "path", title: "Grow", desc: "Milestone-based development plans set clear expectations for the first 90 days." },
      { icon: "chat", title: "1:1s", desc: "Early, frequent 1:1s catch confusion before it turns into an early exit." },
      { icon: "target", title: "Goals & OKRs", desc: "Clear 30/60/90-day goals give new hires a concrete definition of success." },
    ],
    approach: [
      { title: "Why early exits happen", desc: "The first 90 days set the tone. Without structure, new hires either drown quietly or never get context on how their work fits in." },
      { title: "What changes with a ramp plan", desc: "Milestone-based plans and early 1:1 check-ins catch confusion in week two instead of month three." },
      { title: "What new hires experience", desc: "A clear picture of what success looks like in their first 30, 60, and 90 days." },
      { title: "What managers experience", desc: "An early signal if a new hire is struggling, while there's still time to course-correct." },
    ],
    outcomes: [
      { value: "3x", label: "Faster time to productivity" },
      { value: "6%", label: "First-year attrition" },
      { value: "Structured plan", label: "Ramp process" },
    ],
    ctaHeading: "Ready to fix onboarding?",
    ctaBody: "Talk to our team about ramping new hires.",
  },
  {
    slug: "recognition-culture",
    navLabel: "Recognition & Culture",
    title: "Great work recognized every week, not once a year.",
    subtitle: "Make recognition part of how work happens, not an afterthought at the annual awards.",
    overview:
      "An annual awards ceremony can't carry the weight of a year's worth of good work — most of it goes unacknowledged. We help you make recognition a weekly habit instead of a yearly event, with peer-to-peer shoutouts tied to the values you actually care about.",
    capabilities: [
      { icon: "trophy", title: "Reward & Recognition", desc: "Peer-to-peer recognition tied to company values makes praise a weekly habit." },
      { icon: "chart", title: "Engagement", desc: "Recognition trends show leadership who's actually living the culture." },
      { icon: "path", title: "Grow", desc: "Being recognized for real contributions reinforces the growth path someone's already on." },
    ],
    approach: [
      { title: "Why recognition falls flat", desc: "An annual award ceremony can't carry the weight of a year's worth of good work. Most of it goes unacknowledged." },
      { title: "What changes with everyday recognition", desc: "Peer-to-peer shoutouts tied to company values make recognition a weekly habit, not a yearly event." },
      { title: "What employees experience", desc: "Visible appreciation for the work that usually goes unnoticed." },
      { title: "What leadership experiences", desc: "A live view of who's living the company's values, backed by real examples." },
    ],
    outcomes: [
      { value: "48pt", label: "Increase in employees who feel valued" },
      { value: "79%", label: "Employees who feel valued" },
      { value: "Weekly recognition", label: "Recognition cadence" },
    ],
    ctaHeading: "Ready to make recognition a habit?",
    ctaBody: "Talk to our team about recognition & culture.",
  },
];

export function getUseCasePage(slug: string): UseCaseContent | undefined {
  return USE_CASE_PAGES.find((p) => p.slug === slug);
}
