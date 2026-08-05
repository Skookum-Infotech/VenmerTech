import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Modernization Strategy",
  description: "Strategic planning that turns 'we should modernize' into a sequenced, funded plan.",
};

export default function ModernizationStrategyPage() {
  return <SolutionPageTemplate slug="modernization-strategy" />;
}
