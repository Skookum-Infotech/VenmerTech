import type { Metadata } from "next";
import UnderDevelopment from "../components/UnderDevelopment";

export const metadata: Metadata = {
  title: "Explore the Platform",
  description: "A dedicated platform overview is on the way.",
};

export default function ExploreThePlatformPage() {
  return (
    <UnderDevelopment
      eyebrow="Coming Soon"
      title="This page is under development."
      description="We're building a dedicated space to explore the full VenmerTech platform. Check back soon, or reach out and we'll walk you through it directly."
    />
  );
}
