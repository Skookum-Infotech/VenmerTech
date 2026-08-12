import type { Metadata } from "next";
import IndustryPageTemplate from "../components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Manufacturing",
  description: "Connect plant-floor systems to the tools your business runs on.",
};

export default function ManufacturingPage() {
  return <IndustryPageTemplate slug="manufacturing" />;
}
