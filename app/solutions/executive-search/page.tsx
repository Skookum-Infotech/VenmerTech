import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Executive Search",
  description: "Confidential, high-touch search for technology leadership and executive roles.",
};

export default function ExecutiveSearchPage() {
  return <SolutionPageTemplate slug="executive-search" />;
}
