import type { Metadata } from "next";
import PlatformPageTemplate from "../components/PlatformPageTemplate";

export const metadata: Metadata = {
  title: "Grow",
  description: "Career paths and development plans that give every employee a clear path forward.",
};

export default function GrowPage() {
  return <PlatformPageTemplate slug="grow" />;
}
