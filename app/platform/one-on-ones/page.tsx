import type { Metadata } from "next";
import PlatformPageTemplate from "../components/PlatformPageTemplate";

export const metadata: Metadata = {
  title: "1:1s",
  description: "Shared agendas, real follow-through — 1:1s that actually move work forward.",
};

export default function OneOnOnesPage() {
  return <PlatformPageTemplate slug="one-on-ones" />;
}
