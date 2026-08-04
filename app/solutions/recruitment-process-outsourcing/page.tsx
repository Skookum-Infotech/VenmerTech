import type { Metadata } from "next";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Recruitment Process Outsourcing",
  description: "End-to-end RPO for companies that need to hire fast without building an internal team from scratch.",
};

export default function RecruitmentProcessOutsourcingPage() {
  return <SolutionPageTemplate slug="recruitment-process-outsourcing" />;
}
