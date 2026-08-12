import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Managed Services",
  description: "Ongoing monitoring, support, and optimization so your systems stay reliable long after launch.",
};

export default function ManagedServicesPage() {
  return <SolutionPageTemplate slug="managed-services" />;
}
