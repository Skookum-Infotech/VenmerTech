import type { Metadata } from "next";
import IndustryPageTemplate from "../components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Retail & E-commerce",
  description: "Commerce platforms and teams that hold up when traffic — and expectations — spike.",
};

export default function RetailEcommercePage() {
  return <IndustryPageTemplate slug="retail-ecommerce" />;
}
