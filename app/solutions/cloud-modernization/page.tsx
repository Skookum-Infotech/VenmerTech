import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Cloud Modernization",
  description: "Move faster, cut infrastructure cost, and rebuild for scale — with a team that's done this before.",
};

export default function CloudModernizationPage() {
  return <SolutionPageTemplate slug="cloud-modernization" />;
}
