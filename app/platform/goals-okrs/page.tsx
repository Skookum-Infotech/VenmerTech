import type { Metadata } from "next";
import PlatformPageTemplate from "../components/PlatformPageTemplate";

export const metadata: Metadata = {
  title: "Goals & OKRs",
  description: "Aligned objectives, real progress — set, cascade, and track goals across your organization.",
};

export default function GoalsOkrsPage() {
  return <PlatformPageTemplate slug="goals-okrs" />;
}
