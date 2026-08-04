import type { Metadata } from "next";
import UseCasePageTemplate from "../components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Recognition & Culture",
  description: "Make recognition part of how work happens, not an afterthought at the annual awards.",
};

export default function RecognitionCulturePage() {
  return <UseCasePageTemplate slug="recognition-culture" />;
}
