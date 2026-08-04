import type { Metadata } from "next";
import PlatformPageTemplate from "../components/PlatformPageTemplate";

export const metadata: Metadata = {
  title: "Reward & Recognition",
  description: "Values-based praise and rewards that make great work impossible to miss.",
};

export default function RewardRecognitionPage() {
  return <PlatformPageTemplate slug="reward-recognition" />;
}
