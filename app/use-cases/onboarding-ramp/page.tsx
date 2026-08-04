import type { Metadata } from "next";
import UseCasePageTemplate from "../components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Onboarding & Ramp",
  description: "Structured ramp plans and early check-ins that catch confusion before it turns into an early exit.",
};

export default function OnboardingRampPage() {
  return <UseCasePageTemplate slug="onboarding-ramp" />;
}
