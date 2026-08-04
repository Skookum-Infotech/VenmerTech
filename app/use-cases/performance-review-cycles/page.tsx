import type { Metadata } from "next";
import UseCasePageTemplate from "../components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Performance Review Cycles",
  description: "Turn a once-a-year scramble into a fair, on-schedule process managers and employees actually trust.",
};

export default function PerformanceReviewCyclesPage() {
  return <UseCasePageTemplate slug="performance-review-cycles" />;
}
