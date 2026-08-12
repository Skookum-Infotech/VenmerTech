import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Data & AI",
  description: "Data engineering, analytics, and applied AI built for how your business actually runs.",
};

export default function DataAiPage() {
  return <SolutionPageTemplate slug="data-ai" />;
}
