import type { Metadata } from "next";
import PlatformPageTemplate from "../components/PlatformPageTemplate";

export const metadata: Metadata = {
  title: "Performance Reviews",
  description:
    "Calibration, talent reviews, and continuous feedback — all in one place your managers will actually use.",
};

export default function PerformanceReviewsPage() {
  return <PlatformPageTemplate slug="performance-reviews" />;
}
