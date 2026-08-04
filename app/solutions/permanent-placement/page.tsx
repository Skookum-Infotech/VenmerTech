import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Permanent Placement",
  description: "Direct-hire recruiting for technology roles, backed by a network built over a decade.",
};

export default function PermanentPlacementPage() {
  return <SolutionPageTemplate slug="permanent-placement" />;
}
