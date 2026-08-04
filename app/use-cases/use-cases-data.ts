export interface MetricChip {
  before: string;
  after: string;
  label: string;
}

export interface PlaybookItem {
  title: string;
  body: string;
}

export interface UseCaseTag {
  label: string;
  href: string;
}

export interface UseCaseContent {
  slug: string;
  navLabel: string;
  beforePhrase: string;
  afterPhrase: string;
  subtitle: string;
  metrics: MetricChip[];
  playbook: PlaybookItem[];
  tags: UseCaseTag[];
  impactValue: string;
  impactLabel: string;
  ctaHeading: string;
  ctaBody: string;
}

export const USE_CASE_PAGES: UseCaseContent[] = [
  {
    slug: "performance-review-cycles",
    navLabel: "Performance Review Cycles",
    beforePhrase: "Reviews everyone dreads",
    afterPhrase: "Reviews people trust",
    subtitle: "Turn a once-a-year scramble into a fair, on-schedule process managers and employees actually trust.",
    metrics: [
      { before: "6 weeks", after: "2 weeks", label: "Cycle completion time" },
      { before: "52%", after: "91%", label: "On-time review completion" },
      { before: "1x / year", after: "Continuous", label: "Feedback cadence" },
    ],
    playbook: [
      { title: "Why review cycles break down", body: "Most cycles fail not because managers don't care, but because the process makes fairness hard — no shared criteria, no visibility into how other teams are rating, and a deadline that sneaks up every time." },
      { title: "What changes with a structured cycle", body: "Templates, automated reminders, and calibration sessions mean every manager works from the same criteria — and no cycle catches anyone off guard." },
      { title: "What managers experience", body: "A clear queue of who's due, pre-filled context from the last cycle, and a calibration view before ratings go final." },
      { title: "What employees experience", body: "Reviews that reflect a full year of work, not just what a manager remembers from last month." },
    ],
    tags: [
      { label: "Performance Reviews", href: "/platform/performance-reviews" },
      { label: "1:1s", href: "/platform/one-on-ones" },
      { label: "Goals & OKRs", href: "/platform/goals-okrs" },
    ],
    impactValue: "3x",
    impactLabel: "Faster cycle completion",
    ctaHeading: "Ready to fix your review cycle?",
    ctaBody: "Talk to our team about performance reviews.",
  },
  {
    slug: "employee-retention",
    navLabel: "Employee Retention",
    beforePhrase: "Good people leave quietly",
    afterPhrase: "Flight risks get seen early",
    subtitle: "Spot disengagement before the resignation letter, and act while there's still time to change the outcome.",
    metrics: [
      { before: "No warning", after: "90-day lead time", label: "Attrition signal lead time" },
      { before: "38%", after: "14%", label: "Regretted attrition" },
      { before: "Exit interviews", after: "Ongoing pulse", label: "Feedback timing" },
    ],
    playbook: [
      { title: "Why retention surprises happen", body: "By the time someone resigns, the decision was made months earlier. Most teams only get signal after it's too late to change anything." },
      { title: "What changes with continuous signal", body: "Engagement pulses, 1:1 sentiment, and manager check-ins surface risk early enough to actually act on it." },
      { title: "What managers experience", body: "A quiet flag when someone on their team shows early signs of disengagement — with context, not just a score." },
      { title: "What HR experiences", body: "Aggregate retention risk by team, without reading every individual survey response." },
    ],
    tags: [
      { label: "Engagement", href: "/platform/engagement" },
      { label: "1:1s", href: "/platform/one-on-ones" },
      { label: "Grow", href: "/platform/grow" },
    ],
    impactValue: "24%",
    impactLabel: "Lower regretted attrition",
    ctaHeading: "Ready to see risk earlier?",
    ctaBody: "Talk to our team about retention.",
  },
  {
    slug: "company-goal-alignment",
    navLabel: "Company Goal Alignment",
    beforePhrase: "Strategy stuck in a slide deck",
    afterPhrase: "Strategy visible in every team's goals",
    subtitle: "Connect company strategy to what every team is actually working on this quarter.",
    metrics: [
      { before: "Quarterly all-hands", after: "Always visible", label: "Strategy visibility" },
      { before: "Guesswork", after: "Direct line", label: "Team-to-strategy mapping" },
      { before: "41%", after: "88%", label: "Teams with aligned goals" },
    ],
    playbook: [
      { title: "Why alignment breaks down", body: "Strategy gets announced once and then lives in a slide deck nobody reopens. Teams set goals based on their best guess at what matters." },
      { title: "What changes with connected goals", body: "Every team goal links back to a company objective, so anyone can see how their work ladders up." },
      { title: "What leadership experiences", body: "A live view of which company objectives actually have team goals behind them — and which don't." },
      { title: "What teams experience", body: "Clarity on why a goal matters, not just what the goal is." },
    ],
    tags: [
      { label: "Goals & OKRs", href: "/platform/goals-okrs" },
      { label: "Performance Reviews", href: "/platform/performance-reviews" },
      { label: "Engagement", href: "/platform/engagement" },
    ],
    impactValue: "2.1x",
    impactLabel: "More teams aligned to strategy",
    ctaHeading: "Ready to connect strategy to execution?",
    ctaBody: "Talk to our team about goal alignment.",
  },
  {
    slug: "manager-effectiveness",
    navLabel: "Manager Effectiveness",
    beforePhrase: "Managers learning on the job, alone",
    afterPhrase: "Managers coached, every week",
    subtitle: "Give every manager the structure and prompts to run better 1:1s, reviews, and check-ins — without a training budget.",
    metrics: [
      { before: "None", after: "Weekly prompts", label: "Manager coaching cadence" },
      { before: "58%", after: "85%", label: "Employees who trust their manager" },
      { before: "Inconsistent", after: "Standardized", label: "1:1 quality across teams" },
    ],
    playbook: [
      { title: "Why manager quality varies so much", body: "Most new managers get a title change and no playbook. What happens in a 1:1 or a review depends entirely on who they had as a manager." },
      { title: "What changes with built-in coaching", body: "Talking-point libraries, review prompts, and lightweight nudges give every manager a baseline to work from." },
      { title: "What new managers experience", body: "A starting point for hard conversations instead of a blank page." },
      { title: "What their teams experience", body: "More consistent 1:1s and reviews, regardless of who their manager is." },
    ],
    tags: [
      { label: "1:1s", href: "/platform/one-on-ones" },
      { label: "Performance Reviews", href: "/platform/performance-reviews" },
      { label: "Grow", href: "/platform/grow" },
    ],
    impactValue: "27pt",
    impactLabel: "Increase in manager trust scores",
    ctaHeading: "Ready to support your managers?",
    ctaBody: "Talk to our team about manager effectiveness.",
  },
  {
    slug: "onboarding-ramp",
    navLabel: "Onboarding & Ramp",
    beforePhrase: "New hires figuring it out alone",
    afterPhrase: "New hires productive by week four",
    subtitle: "Structured ramp plans and early check-ins that catch confusion before it turns into an early exit.",
    metrics: [
      { before: "12 weeks", after: "4 weeks", label: "Time to full productivity" },
      { before: "22%", after: "6%", label: "First-year attrition" },
      { before: "Ad hoc", after: "Structured plan", label: "Ramp process" },
    ],
    playbook: [
      { title: "Why early exits happen", body: "The first 90 days set the tone. Without structure, new hires either drown quietly or never get context on how their work fits in." },
      { title: "What changes with a ramp plan", body: "Milestone-based plans and early 1:1 check-ins catch confusion in week two instead of month three." },
      { title: "What new hires experience", body: "A clear picture of what success looks like in their first 30, 60, and 90 days." },
      { title: "What managers experience", body: "An early signal if a new hire is struggling, while there's still time to course-correct." },
    ],
    tags: [
      { label: "Grow", href: "/platform/grow" },
      { label: "1:1s", href: "/platform/one-on-ones" },
      { label: "Goals & OKRs", href: "/platform/goals-okrs" },
    ],
    impactValue: "3x",
    impactLabel: "Faster time to productivity",
    ctaHeading: "Ready to fix onboarding?",
    ctaBody: "Talk to our team about ramping new hires.",
  },
  {
    slug: "recognition-culture",
    navLabel: "Recognition & Culture",
    beforePhrase: "Great work goes unnoticed",
    afterPhrase: "Great work gets seen, every week",
    subtitle: "Make recognition part of how work happens, not an afterthought at the annual awards.",
    metrics: [
      { before: "Annual awards", after: "Weekly recognition", label: "Recognition cadence" },
      { before: "31%", after: "79%", label: "Employees who feel valued" },
      { before: "Top-down only", after: "Peer-to-peer", label: "Who gives recognition" },
    ],
    playbook: [
      { title: "Why recognition falls flat", body: "An annual award ceremony can't carry the weight of a year's worth of good work. Most of it goes unacknowledged." },
      { title: "What changes with everyday recognition", body: "Peer-to-peer shoutouts tied to company values make recognition a weekly habit, not a yearly event." },
      { title: "What employees experience", body: "Visible appreciation for the work that usually goes unnoticed." },
      { title: "What leadership experiences", body: "A live view of who's living the company's values, backed by real examples." },
    ],
    tags: [
      { label: "Reward & Recognition", href: "/platform/reward-recognition" },
      { label: "Engagement", href: "/platform/engagement" },
      { label: "Grow", href: "/platform/grow" },
    ],
    impactValue: "48pt",
    impactLabel: "Increase in employees who feel valued",
    ctaHeading: "Ready to make recognition a habit?",
    ctaBody: "Talk to our team about recognition & culture.",
  },
];

export function getUseCasePage(slug: string): UseCaseContent | undefined {
  return USE_CASE_PAGES.find((p) => p.slug === slug);
}
