import type { IconKey } from "../components/icons";

export interface PlatformFeature {
  icon: IconKey;
  title: string;
  desc: string;
}

export interface PlatformStep {
  title: string;
  desc: string;
}

export interface PlatformPageContent {
  slug: string;
  navLabel: string;
  title: string;
  subtitle: string;
  features: PlatformFeature[];
  steps: PlatformStep[];
  ctaHeading: string;
  ctaBody: string;
}

export const PLATFORM_PAGES: PlatformPageContent[] = [
  {
    slug: "performance-reviews",
    navLabel: "Performance Reviews",
    title: "Performance reviews that build trust, not dread.",
    subtitle:
      "Calibration, talent reviews, and continuous feedback — all in one place your managers will actually use.",
    features: [
      { icon: "chat", title: "360° Feedback", desc: "Collect input from peers, managers, and direct reports for a complete picture." },
      { icon: "users", title: "Calibration Sessions", desc: "Bring managers together to align ratings before reviews go out." },
      { icon: "calendar", title: "Custom Review Cycles", desc: "Run annual, quarterly, or project-based cycles — your call." },
      { icon: "chart", title: "Manager Dashboards", desc: "See cycle progress, completion rates, and rating trends at a glance." },
      { icon: "target", title: "Competency Frameworks", desc: "Score against role-specific competencies, not generic scales." },
      { icon: "gauge", title: "Review Analytics", desc: "Spot rating bias and trends across teams before they become problems." },
    ],
    steps: [
      { title: "Launch a cycle", desc: "Pick a template, set the timeline, and assign reviewers in minutes." },
      { title: "Collect feedback", desc: "Automated reminders keep self, peer, and manager reviews on track." },
      { title: "Calibrate as a team", desc: "Compare ratings side by side and align before anything is shared." },
      { title: "Share results & plan growth", desc: "Turn every review into a development plan, not just a score." },
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
    features: [
      { icon: "target", title: "Company-wide OKRs", desc: "Set objectives at the company level and cascade them down." },
      { icon: "users", title: "Team Alignment Map", desc: "See how every team's goals ladder up to company strategy." },
      { icon: "chart", title: "Progress Tracking", desc: "Automatic progress bars pulled straight from weekly check-ins." },
      { icon: "bell", title: "Check-in Reminders", desc: "Nudge goal owners before objectives go stale." },
      { icon: "path", title: "Goal Templates", desc: "Start from proven OKR templates instead of a blank page." },
      { icon: "gauge", title: "Manager Rollups", desc: "Roll individual goals into a single team view for 1:1s and reviews." },
    ],
    steps: [
      { title: "Set objectives", desc: "Define what matters most for the quarter, top to bottom." },
      { title: "Cascade to teams", desc: "Connect team and individual goals directly to company strategy." },
      { title: "Track weekly", desc: "Quick check-ins keep progress current without extra meetings." },
      { title: "Review outcomes", desc: "Close the loop with a clear view of what moved and what didn't." },
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
    features: [
      { icon: "chat", title: "Shared Agendas", desc: "Build the agenda together before you sit down." },
      { icon: "book", title: "Talking Points Library", desc: "Pull from a library of proven prompts when you're stuck." },
      { icon: "target", title: "Action Item Tracking", desc: "Turn what you agreed on into tracked, assignable tasks." },
      { icon: "calendar", title: "Meeting History", desc: "Look back on every past 1:1 in one continuous thread." },
      { icon: "shield", title: "Private Manager Notes", desc: "Keep personal notes separate from the shared agenda." },
      { icon: "sync", title: "Calendar Sync", desc: "1:1s stay in step with your calendar automatically." },
    ],
    steps: [
      { title: "Schedule", desc: "Set a recurring cadence that fits how your team works." },
      { title: "Build agenda together", desc: "Both sides add talking points before the meeting starts." },
      { title: "Meet & capture notes", desc: "Keep the conversation flowing while notes save themselves." },
      { title: "Follow up on actions", desc: "Action items carry forward until they're actually done." },
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
    features: [
      { icon: "chat", title: "Pulse Surveys", desc: "Short, frequent check-ins that don't feel like a chore." },
      { icon: "gauge", title: "eNPS Tracking", desc: "Track employee net promoter score over time, by team." },
      { icon: "shield", title: "Anonymous Feedback", desc: "Give people a safe way to say what they really think." },
      { icon: "chart", title: "Benchmarking", desc: "See how your scores compare against industry norms." },
      { icon: "target", title: "Action Planning", desc: "Turn survey results into owned, tracked action items." },
      { icon: "path", title: "Sentiment Trends", desc: "Spot dips in morale before they show up in attrition." },
    ],
    steps: [
      { title: "Send a pulse", desc: "Launch a short survey to the whole company or one team." },
      { title: "Gather honest feedback", desc: "Anonymous by default, so people tell you the truth." },
      { title: "Spot trends", desc: "Dashboards surface what's shifting before it becomes a problem." },
      { title: "Act & close the loop", desc: "Share what you heard and what's changing because of it." },
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
    features: [
      { icon: "path", title: "Career Path Builder", desc: "Map out what's next, role by role." },
      { icon: "target", title: "Skill Assessments", desc: "Benchmark current skills against where someone wants to go." },
      { icon: "book", title: "Development Plans", desc: "Turn assessments into concrete, trackable growth plans." },
      { icon: "users", title: "Mentorship Matching", desc: "Pair people with mentors based on goals, not guesswork." },
      { icon: "sync", title: "Internal Mobility", desc: "Surface open roles to the people already growing into them." },
      { icon: "star", title: "Learning Recommendations", desc: "Suggest courses and resources based on skill gaps." },
    ],
    steps: [
      { title: "Assess skills", desc: "Start with a clear picture of where someone stands today." },
      { title: "Map a path", desc: "Chart the roles and skills between here and the next step." },
      { title: "Build a plan", desc: "Break the path into concrete, trackable milestones." },
      { title: "Track growth", desc: "Revisit progress in every 1:1 and review cycle." },
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
    features: [
      { icon: "heart", title: "Peer Recognition", desc: "Let anyone recognize great work, not just managers." },
      { icon: "trophy", title: "Values Badges", desc: "Tie recognition back to the values you actually care about." },
      { icon: "star", title: "Rewards Catalog", desc: "Redeem points for rewards people choose themselves." },
      { icon: "chat", title: "Recognition Feed", desc: "A live feed of shoutouts, visible company-wide." },
      { icon: "bell", title: "Manager Nudges", desc: "Remind managers when someone hasn't been recognized in a while." },
      { icon: "calendar", title: "Milestone Celebrations", desc: "Automatically mark work anniversaries and big wins." },
    ],
    steps: [
      { title: "Give recognition", desc: "Send a shoutout in seconds, from any device." },
      { title: "Tie it to values", desc: "Every recognition links back to a company value." },
      { title: "Redeem rewards", desc: "Points convert into rewards people actually want." },
      { title: "Celebrate milestones", desc: "Anniversaries and wins get marked automatically." },
    ],
    ctaHeading: "Ready to make recognition a habit?",
    ctaBody: "Talk to our team about bringing recognition into everyday work.",
  },
];

export function getPlatformPage(slug: string): PlatformPageContent | undefined {
  return PLATFORM_PAGES.find((p) => p.slug === slug);
}
