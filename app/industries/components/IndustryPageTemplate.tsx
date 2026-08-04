import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../page.css";
import "../industries.css";
import { getIndustryPage, getNextIndustry, INDUSTRY_PAGES } from "../industries-data";
import RevealOnScroll from "../../components/RevealOnScroll";

export default function IndustryPageTemplate({ slug }: { slug: string }) {
  const content = getIndustryPage(slug);
  if (!content) notFound();

  const next = getNextIndustry(slug);

  return (
    <div className="vt-ind-page">
      <Header />

      <nav className="vt-ind-tabbar">
        <div className="vt-ind-tabbar-inner">
          {INDUSTRY_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/industries/${p.slug}`}
              className={`vt-ind-tab${p.slug === content.slug ? " active" : ""}`}
            >
              {p.navLabel}
            </Link>
          ))}
        </div>
      </nav>

      <section className="vt-ind-hero">
        <span className="vt-ind-watermark" aria-hidden="true">
          {content.navLabel}
        </span>
        <div className="vt-ind-hero-inner">
          <p className="vt-ind-kicker">Industry</p>
          <h1>{content.title}</h1>
          <p className="vt-ind-hero-sub">{content.subtitle}</p>
          <Link href="/#contact" className="vt-ind-btn">
            Get in Touch →
          </Link>
        </div>
      </section>

      <RevealOnScroll className="vt-ind-pair-section">
        <div className="vt-ind-pair-grid">
          <div className="vt-ind-pair-col">
            <p className="vt-ind-pair-heading">The Challenge</p>
            {content.challenges.map((c) => (
              <div key={c.title} className="vt-ind-pair-item">
                <span className="vt-ind-pair-marker minus">×</span>
                <div>
                  <div className="vt-ind-pair-title">{c.title}</div>
                  <div className="vt-ind-pair-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="vt-ind-pair-col">
            <p className="vt-ind-pair-heading">How We Help</p>
            {content.solutions.map((s) => (
              <div key={s.title} className="vt-ind-pair-item">
                <span className="vt-ind-pair-marker check">✓</span>
                <div>
                  <div className="vt-ind-pair-title">{s.title}</div>
                  <div className="vt-ind-pair-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="vt-ind-tags-section">
        <p className="vt-ind-label">Relevant Solutions</p>
        <div className="vt-ind-tags">
          {content.tags.map((t) => (
            <Link key={t.label} href={t.href} className="vt-ind-tag">
              {t.label}
            </Link>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="vt-ind-quote-band">
        <div className="vt-ind-quote-mark">&ldquo;</div>
        <p className="vt-ind-quote-text">{content.quoteText}</p>
        <p className="vt-ind-quote-attr">{content.quoteAttribution}</p>
      </RevealOnScroll>

      <RevealOnScroll className="vt-ind-stats-strip">
        {content.stats.map((s) => (
          <div key={s.label}>
            <div className="vt-ind-stat-value">{s.value}</div>
            <div className="vt-ind-stat-label">{s.label}</div>
          </div>
        ))}
      </RevealOnScroll>

      <div className="vt-ind-cta">
        <h3>{content.ctaHeading}</h3>
        <Link href="/#contact" className="vt-ind-btn">
          {content.ctaBody}
        </Link>
      </div>

      <Link href={`/industries/${next.slug}`} className="vt-ind-next">
        <div className="vt-ind-next-inner">
          <div>
            <p className="vt-ind-next-label">Next Industry</p>
            <p className="vt-ind-next-name">{next.navLabel}</p>
          </div>
          <span className="vt-ind-next-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>

      <Footer />
    </div>
  );
}
