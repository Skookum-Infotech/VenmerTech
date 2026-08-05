import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../page.css";
import "../industries.css";
import { getIndustryPage, INDUSTRY_PAGES } from "../industries-data";
import { Icon } from "../../components/icons";
import RevealOnScroll from "../../components/RevealOnScroll";

export default function IndustryPageTemplate({ slug }: { slug: string }) {
  const content = getIndustryPage(slug);
  if (!content) notFound();

  const otherPages = INDUSTRY_PAGES.filter((p) => p.slug !== slug);

  return (
    <div className="vt-ind-page">
      <Header />

      <div className="vt-ind-topbar" />

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

      <div className="vt-ind-body">
        <aside className="vt-ind-sidebar">
          <div>
            <p className="vt-ind-sidebar-label">Related Industries</p>
            <div className="vt-ind-sidebar-list">
              {otherPages.map((p) => (
                <Link key={p.slug} href={`/industries/${p.slug}`} className="vt-ind-sidebar-link">
                  {p.navLabel}
                </Link>
              ))}
            </div>
          </div>
          <div className="vt-ind-sidebar-card">
            <h4>Need a custom scope?</h4>
            <p>Every engagement starts with a conversation, not a fixed package.</p>
            <Link href="/#contact">Talk to Us →</Link>
          </div>
        </aside>

        <main className="vt-ind-main">
          <div className="vt-ind-mobile-siblings">
            {otherPages.map((p) => (
              <Link key={p.slug} href={`/industries/${p.slug}`}>
                {p.navLabel}
              </Link>
            ))}
          </div>

          <RevealOnScroll className="vt-ind-overview">
            <p className="vt-ind-block-label">Overview</p>
            <p>{content.overview}</p>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-ind-block-label">What We Deliver</p>
            <div className="vt-ind-capabilities-grid">
              {content.capabilities.map((c) => (
                <div key={c.title} className="vt-ind-cap">
                  <div className="vt-ind-cap-icon">
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <div className="vt-ind-cap-title">{c.title}</div>
                    <div className="vt-ind-cap-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-ind-block-label">Our Approach</p>
            <div className="vt-ind-timeline">
              {content.approach.map((step) => (
                <div key={step.title} className="vt-ind-timeline-item">
                  <div className="vt-ind-timeline-title">{step.title}</div>
                  <div className="vt-ind-timeline-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-ind-block-label">Outcomes</p>
            <div className="vt-ind-outcomes">
              {content.outcomes.map((o) => (
                <div key={o.label} className="vt-ind-outcome">
                  <div className="vt-ind-outcome-value">{o.value}</div>
                  <div className="vt-ind-outcome-label">{o.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </main>
      </div>

      <RevealOnScroll className="vt-ind-cta">
        <h3>{content.ctaHeading}</h3>
        <p>{content.ctaBody}</p>
        <Link href="/#contact" className="vt-ind-btn">
          Get in Touch →
        </Link>
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
