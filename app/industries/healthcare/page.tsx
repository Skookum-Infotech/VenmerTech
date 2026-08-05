import type { Metadata } from "next";
import IndustryPageTemplate from "../components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Healthcare",
  description: "Modernize clinical and administrative systems without disrupting care delivery.",
};

export default function HealthcarePage() {
  return <IndustryPageTemplate slug="healthcare" />;
}
