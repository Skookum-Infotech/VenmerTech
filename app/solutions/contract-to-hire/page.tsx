import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Contract & Contract-to-Hire",
  description: "Bring in vetted technologists on contract — and convert to full-time when it's the right fit.",
};

export default function ContractToHirePage() {
  return <SolutionPageTemplate slug="contract-to-hire" />;
}
