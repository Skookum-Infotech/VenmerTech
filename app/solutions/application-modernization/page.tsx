import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Application Modernization",
  description: "Modernize monoliths into scalable, maintainable systems — without a risky big-bang rewrite.",
};

export default function ApplicationModernizationPage() {
  return <SolutionPageTemplate slug="application-modernization" />;
}
