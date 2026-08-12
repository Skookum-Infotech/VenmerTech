import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../page.css";
import "./solutions.css";
import { SOLUTION_PAGES, type SolutionGroup } from "./solutions-data";

export const metadata: Metadata = {
  title: "All Solutions",
  description: "Technology, staffing, and advisory solutions built for enterprise teams.",
};

const GROUPS: SolutionGroup[] = ["Technology", "Staffing", "Services"];

export default function SolutionsIndexPage() {
  return (
    <div className="vt-sol-page">
      <Header />

      <div className="vt-sol-topbar" />

      <section className="vt-sol-hero">
        <span className="vt-sol-watermark" aria-hidden="true">
          Solutions
        </span>
        <div className="vt-sol-hero-inner">
          <p className="vt-sol-kicker">Solutions</p>
          <h1>Every way we help you modernize, staff, and scale.</h1>
          <p className="vt-sol-hero-sub">
            Technology, staffing, and advisory solutions built for enterprise
            teams — browse the full list below.
          </p>
        </div>
      </section>

      <div className="vt-sol-index-body">
        {GROUPS.map((group) => {
          const items = SOLUTION_PAGES.filter((p) => p.groups.includes(group));
          if (items.length === 0) return null;
          return (
            <div className="vt-sol-index-group" key={group}>
              <p className="vt-sol-index-group-title">{group}</p>
              <div className="vt-sol-index-grid">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/solutions/${p.slug}`}
                    className="vt-sol-index-card"
                  >
                    <span className="vt-sol-index-card-title">{p.navLabel}</span>
                    <span className="vt-sol-index-card-desc">{p.subtitle}</span>
                    <span className="vt-sol-index-card-arrow">Learn more →</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
