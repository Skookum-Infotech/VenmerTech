import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Solution Architecture",
  description: "Solution architecture that gets the hard decisions right before a single line of code ships.",
};

export default function SolutionArchitecturePage() {
  return <SolutionPageTemplate slug="solution-architecture" />;
}
