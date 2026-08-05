import type { Metadata } from "next";
import PlatformPageTemplate from "../components/PlatformPageTemplate";

export const metadata: Metadata = {
  title: "Engagement",
  description: "Surveys, eNPS, and action plans that help you understand — and improve — how your people feel.",
};

export default function EngagementPage() {
  return <PlatformPageTemplate slug="engagement" />;
}
