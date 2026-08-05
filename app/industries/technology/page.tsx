import type { Metadata } from "next";
import IndustryPageTemplate from "../components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Technology",
  description: "Extra engineering capacity and infrastructure support that keeps pace with your roadmap.",
};

export default function TechnologyIndustryPage() {
  return <IndustryPageTemplate slug="technology" />;
}
