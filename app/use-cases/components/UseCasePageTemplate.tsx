import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../page.css";
import "../use-cases.css";
import { getUseCasePage, USE_CASE_PAGES } from "../use-cases-data";
import RevealOnScroll from "../../components/RevealOnScroll";
import PlaybookAccordion from "./PlaybookAccordion";

export default function UseCasePageTemplate({ slug }: { slug: string }) {
  const content = getUseCasePage(slug);
  if (!content) notFound();

  const index = USE_CASE_PAGES.findIndex((p) => p.slug === slug) + 1;
  const total = USE_CASE_PAGES.length;

  return (
    <div className="vt-uc-page">
      <Header />

      <div className="vt-uc-topbar">
        <div className="vt-uc-topbar-inner">
          <span>
            Use Cases / <strong>{content.navLabel}</strong>
          </span>
          <span className="vt-uc-topbar-index">
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      <section className="vt-uc-hero">
        <div className="vt-uc-hero-inner">
          <p className="vt-uc-kicker">Use Case</p>
          <span className="vt-uc-before">{content.beforePhrase}</span>
          <span className="vt-uc-arrow-row" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="vt-uc-after">{content.afterPhrase}</span>
          <p className="vt-uc-hero-sub">{content.subtitle}</p>
          <Link href="/#contact" className="vt-uc-btn">
            Get in Touch →
          </Link>

          <div className="vt-uc-chips">
            {content.metrics.map((m) => (
              <div key={m.label} className="vt-uc-chip">
                <div className="vt-uc-chip-row">
                  <span className="vt-uc-chip-before">{m.before}</span>
                  <svg className="vt-uc-chip-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="vt-uc-chip-after">{m.after}</span>
                </div>
                <div className="vt-uc-chip-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RevealOnScroll className="vt-uc-playbook">
        <p className="vt-uc-label">The Playbook</p>
        <PlaybookAccordion items={content.playbook} />
      </RevealOnScroll>

      <RevealOnScroll className="vt-uc-impact">
        <div className="vt-uc-impact-value">{content.impactValue}</div>
        <div className="vt-uc-impact-label">{content.impactLabel}</div>
        <div className="vt-uc-impact-tags">
          <span className="vt-uc-impact-tags-label">Built With</span>
          <div className="vt-uc-tags">
            {content.tags.map((t) => (
              <Link key={t.label} href={t.href} className="vt-uc-tag">
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="vt-uc-cta-wrap">
        <div className="vt-uc-cta-panel">
          <h3>{content.ctaHeading}</h3>
          <p>{content.ctaBody}</p>
          <Link href="/#contact">Get in Touch →</Link>
        </div>
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
