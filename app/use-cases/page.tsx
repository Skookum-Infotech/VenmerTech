import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../page.css";
import "./use-cases.css";
import { USE_CASE_PAGES } from "./use-cases-data";

export const metadata: Metadata = {
  title: "All Use Cases",
  description: "Common problems teams bring to us, and how we solve them.",
};

export default function UseCasesIndexPage() {
  return (
    <div className="vt-uc-page">
      <Header />

      <div className="vt-uc-topbar" />

      <section className="vt-uc-hero">
        <span className="vt-uc-watermark" aria-hidden="true">
          Use Cases
        </span>
        <div className="vt-uc-hero-inner">
          <p className="vt-uc-kicker">Use Cases</p>
          <h1>Real problems teams bring to us, and how we solve them.</h1>
          <p className="vt-uc-hero-sub">
            Browse the situations we get called in for most often.
          </p>
        </div>
      </section>

      <div className="vt-uc-index-body">
        <div className="vt-uc-index-grid">
          {USE_CASE_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/use-cases/${p.slug}`}
              className="vt-uc-index-card"
            >
              <span className="vt-uc-index-card-title">{p.navLabel}</span>
              <span className="vt-uc-index-card-desc">{p.subtitle}</span>
              <span className="vt-uc-index-card-arrow">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
