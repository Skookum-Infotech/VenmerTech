import type { Metadata } from "next";
import UseCasePageTemplate from "../components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Employee Retention",
  description: "Spot disengagement before the resignation letter, and act while there's still time to change the outcome.",
};

export default function EmployeeRetentionPage() {
  return <UseCasePageTemplate slug="employee-retention" />;
}
