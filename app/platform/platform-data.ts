import type { IconKey } from "../components/icons";

export interface PlatformCapability {
  icon: IconKey;
  title: string;
  desc: string;
}

export interface PlatformApproachStep {
  title: string;
  desc: string;
}

export interface PlatformOutcome {
  value: string;
  label: string;
}

export interface PlatformContent {
  slug: string;
  navLabel: string;
  title: string;
  subtitle: string;
  overview: string;
  capabilities: PlatformCapability[];
  approach: PlatformApproachStep[];
  outcomes: PlatformOutcome[];
  ctaHeading: string;
  ctaBody: string;
}

export const PLATFORM_PAGES: PlatformContent[] = [
  {
    slug: "performance-reviews",
    navLabel: "Performance Reviews",
    title: "Performance reviews that build trust, not dread.",
    subtitle:
      "Calibration, talent reviews, and continuous feedback — all in one place your managers will actually use.",
    overview:
      "Most review cycles run on memory and guesswork — feedback scattered across the year, ratings that vary manager to manager, deadlines that slip until HR has to chase them down. We built a review system your managers will actually use: shared criteria, structured feedback, and full visibility into where every cycle stands.",
    capabilities: [
      { icon: "users", title: "360° Feedback", desc: "Collect input from peers, managers, and direct reports for a complete picture." },
      { icon: "sync", title: "Calibration Sessions", desc: "Bring managers together to align ratings before reviews go out." },
      { icon: "calendar", title: "Custom Review Cycles", desc: "Run annual, quarterly, or project-based cycles — your call." },
      { icon: "chart", title: "Manager Dashboards", desc: "See cycle progress, completion rates, and rating trends at a glance." },
      { icon: "book", title: "Competency Frameworks", desc: "Score against role-specific competencies, not generic scales." },
      { icon: "gauge", title: "Review Analytics", desc: "Spot rating bias and trends across teams before they become problems." },
    ],
    approach: [
      { title: "Configure your cycle", desc: "Choose the cycle type, competencies, and reviewers that fit your organization." },
      { title: "Collect feedback", desc: "Gather 360° input from peers, managers, and direct reports in one place." },
      { title: "Calibrate together", desc: "Bring managers together to align ratings before reviews go out." },
      { title: "Review & act", desc: "Track completion, spot rating trends, and close out the cycle with confidence." },
    ],
    outcomes: [
      { value: "3x", label: "Faster cycle completion" },
      { value: "91%", label: "On-time completion rate" },
      { value: "50%", label: "Fewer rating disputes" },
    ],
    ctaHeading: "Ready to see it in action?",
    ctaBody: "Talk to our team about running your next review cycle on Venmer Tech.",
  },
  {
    slug: "goals-okrs",
    navLabel: "Goals & OKRs",
    title: "Goals everyone can see, progress everyone can trust.",
    subtitle:
      "Set ambitious objectives, cascade them across teams, and track real progress — not just check-ins.",
    overview:
      "Company strategy shouldn't live in a slide deck nobody revisits. We help you set OKRs that cascade from company to team to individual, stay visible through the quarter, and roll up automatically — so leadership always knows where things stand without a manual spreadsheet.",
    capabilities: [
      { icon: "target", title: "Company-wide OKRs", desc: "Set objectives at the company level and cascade them down." },
      { icon: "path", title: "Team Alignment Map", desc: "See how every team's goals ladder up to company strategy." },
      { icon: "chart", title: "Progress Tracking", desc: "Automatic progress bars pulled straight from weekly check-ins." },
      { icon: "bell", title: "Check-in Reminders", desc: "Nudge goal owners before objectives go stale." },
      { icon: "book", title: "Goal Templates", desc: "Start from proven OKR templates instead of a blank page." },
      { icon: "sync", title: "Manager Rollups", desc: "Roll individual goals into a single team view for 1:1s and reviews." },
    ],
    approach: [
      { title: "Set company objectives", desc: "Define what matters most at the company level, for the quarter or year." },
      { title: "Cascade to teams", desc: "Let teams build goals that ladder up to company strategy." },
      { title: "Track weekly progress", desc: "Check-ins update progress automatically, no manual reporting." },
      { title: "Roll up & review", desc: "See how every goal is tracking in a single leadership view." },
    ],
    outcomes: [
      { value: "2.1x", label: "More teams aligned to strategy" },
      { value: "88%", label: "Teams with aligned goals" },
      { value: "0", label: "Manual rollup spreadsheets" },
    ],
    ctaHeading: "Ready to align your teams?",
    ctaBody: "Talk to our team about rolling out OKRs across your organization.",
  },
  {
    slug: "one-on-ones",
    navLabel: "1:1s",
    title: "1:1s that actually move work forward.",
    subtitle:
      "Shared agendas, private notes, and action items that don't get lost after the meeting ends.",
    overview:
      "Great 1:1s don't happen by accident — they need a shared agenda, a place for notes, and a way to track what gets decided. We give managers and reports a single space to prepare, talk, and follow through, so conversations turn into progress instead of status updates.",
    capabilities: [
      { icon: "chat", title: "Shared Agendas", desc: "Build the agenda together before you sit down." },
      { icon: "book", title: "Talking Points Library", desc: "Pull from a library of proven prompts when you're stuck." },
      { icon: "target", title: "Action Item Tracking", desc: "Turn what you agreed on into tracked, assignable tasks." },
      { icon: "calendar", title: "Meeting History", desc: "Look back on every past 1:1 in one continuous thread." },
      { icon: "shield", title: "Private Manager Notes", desc: "Keep personal notes separate from the shared agenda." },
      { icon: "sync", title: "Calendar Sync", desc: "1:1s stay in step with your calendar automatically." },
    ],
    approach: [
      { title: "Build the agenda", desc: "Manager and report add topics together before the meeting." },
      { title: "Meet & take notes", desc: "Keep shared notes and private manager notes side by side." },
      { title: "Assign action items", desc: "Turn what you agreed on into tracked, owned tasks." },
      { title: "Look back over time", desc: "Review meeting history to spot patterns across 1:1s." },
    ],
    outcomes: [
      { value: "85%", label: "Managers who say 1:1 quality improved" },
      { value: "0", label: "1:1s dropped from the calendar" },
      { value: "3x", label: "More action items completed" },
    ],
    ctaHeading: "Ready to upgrade your 1:1s?",
    ctaBody: "Talk to our team about bringing structure to manager conversations.",
  },
  {
    slug: "engagement",
    navLabel: "Engagement",
    title: "Know how your people really feel — and do something about it.",
    subtitle:
      "Pulse surveys, eNPS tracking, and action plans that close the loop instead of just measuring it.",
    overview:
      "An annual survey tells you how people felt months ago. We help you run frequent, honest pulse checks — with benchmarks to make the numbers mean something and action plans that close the loop, so sentiment shifts get caught while there's still time to act.",
    capabilities: [
      { icon: "chat", title: "Pulse Surveys", desc: "Short, frequent check-ins that don't feel like a chore." },
      { icon: "gauge", title: "eNPS Tracking", desc: "Track employee net promoter score over time, by team." },
      { icon: "shield", title: "Anonymous Feedback", desc: "Give people a safe way to say what they really think." },
      { icon: "chart", title: "Benchmarking", desc: "See how your scores compare to industry norms." },
      { icon: "target", title: "Action Planning", desc: "Turn survey results into owned, tracked action items." },
      { icon: "path", title: "Sentiment Trends", desc: "Spot dips in morale before they show up in attrition." },
    ],
    approach: [
      { title: "Launch a pulse survey", desc: "Send short, frequent check-ins instead of one long annual survey." },
      { title: "Protect anonymity", desc: "Give people a safe, genuinely anonymous way to respond." },
      { title: "Benchmark the results", desc: "See how your scores compare to industry norms." },
      { title: "Plan & follow through", desc: "Turn results into owned action plans, not just a dashboard." },
    ],
    outcomes: [
      { value: "79%", label: "Survey response rate" },
      { value: "90 day", label: "Earlier signal on disengagement" },
      { value: "24%", label: "Lower regretted attrition" },
    ],
    ctaHeading: "Ready to hear from your team?",
    ctaBody: "Talk to our team about launching your first engagement survey.",
  },
  {
    slug: "grow",
    navLabel: "Grow",
    title: "Give every employee a clear path forward.",
    subtitle:
      "Career paths, skill assessments, and development plans that make growth visible.",
    overview:
      "Without a visible path forward, “what's next” is a guess. We help you map career paths, assess real skill gaps, and match people with mentors and internal opportunities — turning growth from a once-a-year conversation into something employees can see and plan around.",
    capabilities: [
      { icon: "path", title: "Career Path Builder", desc: "Map out what's next, role by role." },
      { icon: "gauge", title: "Skill Assessments", desc: "Benchmark current skills against where someone wants to go." },
      { icon: "book", title: "Development Plans", desc: "Turn assessments into concrete, trackable growth plans." },
      { icon: "users", title: "Mentorship Matching", desc: "Pair people with mentors based on goals, not guesswork." },
      { icon: "sync", title: "Internal Mobility", desc: "Surface open roles to the people already growing into them." },
      { icon: "star", title: "Learning Recommendations", desc: "Suggest courses and resources based on skill gaps." },
    ],
    approach: [
      { title: "Map the career path", desc: "Define what's next for each role, step by step." },
      { title: "Assess current skills", desc: "Benchmark where someone stands against where they want to go." },
      { title: "Match & develop", desc: "Pair people with mentors and a concrete development plan." },
      { title: "Surface opportunities", desc: "Show internal roles to the people already growing into them." },
    ],
    outcomes: [
      { value: "3x", label: "Faster time to productivity on a plan" },
      { value: "62%", label: "More internal moves filled" },
      { value: "24%", label: "Lower regretted attrition" },
    ],
    ctaHeading: "Ready to invest in growth?",
    ctaBody: "Talk to our team about building career paths your people can see.",
  },
  {
    slug: "reward-recognition",
    navLabel: "Reward & Recognition",
    title: "Make great work impossible to miss.",
    subtitle:
      "Peer recognition, values-based praise, and rewards that people actually want.",
    overview:
      "Great work shouldn't wait for an annual awards ceremony to get noticed. We help you build recognition into the everyday — peer-to-peer praise tied to your values, rewards people actually want, and visibility for leadership into who's living the culture.",
    capabilities: [
      { icon: "heart", title: "Peer Recognition", desc: "Let anyone recognize great work, not just managers." },
      { icon: "shield", title: "Values Badges", desc: "Tie recognition back to the values you actually care about." },
      { icon: "trophy", title: "Rewards Catalog", desc: "Redeem points for rewards people choose themselves." },
      { icon: "chat", title: "Recognition Feed", desc: "A live feed of shoutouts, visible company-wide." },
      { icon: "bell", title: "Manager Nudges", desc: "Remind managers when someone hasn't been recognized in a while." },
      { icon: "star", title: "Milestone Celebrations", desc: "Automatically mark work anniversaries and big wins." },
    ],
    approach: [
      { title: "Tie recognition to values", desc: "Set up values badges that reflect what you actually care about." },
      { title: "Open it up to everyone", desc: "Let peers recognize great work, not just managers." },
      { title: "Reward how they choose", desc: "Let people redeem points for rewards they actually want." },
      { title: "Keep the habit going", desc: "Nudge managers and celebrate milestones automatically." },
    ],
    outcomes: [
      { value: "79%", label: "Employees who feel valued" },
      { value: "48pt", label: "Increase in recognition frequency" },
      { value: "0", label: "Missed work anniversaries" },
    ],
    ctaHeading: "Ready to make recognition a habit?",
    ctaBody: "Talk to our team about bringing recognition into everyday work.",
  },
];

export function getPlatformPage(slug: string): PlatformContent | undefined {
  return PLATFORM_PAGES.find((p) => p.slug === slug);
}
