import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../page.css";
import "./industries.css";
import { INDUSTRY_PAGES } from "./industries-data";

export const metadata: Metadata = {
  title: "All Industries",
  description: "Industries we build for, and the challenges specific to each.",
};

export default function IndustriesIndexPage() {
  return (
    <div className="vt-ind-page">
      <Header />

      <div className="vt-ind-topbar" />

      <section className="vt-ind-hero">
        <span className="vt-ind-watermark" aria-hidden="true">
          Industries
        </span>
        <div className="vt-ind-hero-inner">
          <p className="vt-ind-kicker">Industries</p>
          <h1>Built around what each industry actually needs.</h1>
          <p className="vt-ind-hero-sub">
            Every industry runs on different constraints — browse how we
            approach each one.
          </p>
        </div>
      </section>

      <div className="vt-ind-index-body">
        <div className="vt-ind-index-grid">
          {INDUSTRY_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/industries/${p.slug}`}
              className="vt-ind-index-card"
            >
              <span className="vt-ind-index-card-title">{p.navLabel}</span>
              <span className="vt-ind-index-card-desc">{p.subtitle}</span>
              <span className="vt-ind-index-card-arrow">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
