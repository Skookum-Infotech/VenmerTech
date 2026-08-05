import type { Metadata } from "next";
import UseCasePageTemplate from "../components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Company Goal Alignment",
  description: "Connect company strategy to what every team is actually working on this quarter.",
};

export default function CompanyGoalAlignmentPage() {
  return <UseCasePageTemplate slug="company-goal-alignment" />;
}
