import type { Metadata } from "next";
import UseCasePageTemplate from "../components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Manager Effectiveness",
  description: "Give every manager the structure and prompts to run better 1:1s, reviews, and check-ins.",
};

export default function ManagerEffectivenessPage() {
  return <UseCasePageTemplate slug="manager-effectiveness" />;
}
