import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../page.css";
import "../use-cases.css";
import { getUseCasePage, USE_CASE_PAGES } from "../use-cases-data";
import { Icon } from "../../components/icons";
import RevealOnScroll from "../../components/RevealOnScroll";

export default function UseCasePageTemplate({ slug }: { slug: string }) {
  const content = getUseCasePage(slug);
  if (!content) notFound();

  const otherPages = USE_CASE_PAGES.filter((p) => p.slug !== slug);

  return (
    <div className="vt-uc-page">
      <Header />

      <div className="vt-uc-topbar" />

      <section className="vt-uc-hero">
        <span className="vt-uc-watermark" aria-hidden="true">
          {content.navLabel}
        </span>
        <div className="vt-uc-hero-inner">
          <p className="vt-uc-kicker">Use Case</p>
          <h1>{content.title}</h1>
          <p className="vt-uc-hero-sub">{content.subtitle}</p>
          <Link href="/#contact" className="vt-uc-btn">
            Get in Touch →
          </Link>
        </div>
      </section>

      <div className="vt-uc-body">
        <aside className="vt-uc-sidebar">
          <div>
            <p className="vt-uc-sidebar-label">Related Use Cases</p>
            <div className="vt-uc-sidebar-list">
              {otherPages.map((p) => (
                <Link key={p.slug} href={`/use-cases/${p.slug}`} className="vt-uc-sidebar-link">
                  {p.navLabel}
                </Link>
              ))}
            </div>
          </div>
          <div className="vt-uc-sidebar-card">
            <h4>Need a custom scope?</h4>
            <p>Every engagement starts with a conversation, not a fixed package.</p>
            <Link href="/#contact">Talk to Us →</Link>
          </div>
        </aside>

        <main className="vt-uc-main">
          <div className="vt-uc-mobile-siblings">
            {otherPages.map((p) => (
              <Link key={p.slug} href={`/use-cases/${p.slug}`}>
                {p.navLabel}
              </Link>
            ))}
          </div>

          <RevealOnScroll className="vt-uc-overview">
            <p className="vt-uc-block-label">Overview</p>
            <p>{content.overview}</p>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-uc-block-label">What We Deliver</p>
            <div className="vt-uc-capabilities-grid">
              {content.capabilities.map((c) => (
                <div key={c.title} className="vt-uc-cap">
                  <div className="vt-uc-cap-icon">
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <div className="vt-uc-cap-title">{c.title}</div>
                    <div className="vt-uc-cap-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-uc-block-label">Our Approach</p>
            <div className="vt-uc-timeline">
              {content.approach.map((step) => (
                <div key={step.title} className="vt-uc-timeline-item">
                  <div className="vt-uc-timeline-title">{step.title}</div>
                  <div className="vt-uc-timeline-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-uc-block-label">Outcomes</p>
            <div className="vt-uc-outcomes">
              {content.outcomes.map((o) => (
                <div key={o.label} className="vt-uc-outcome">
                  <div className="vt-uc-outcome-value">{o.value}</div>
                  <div className="vt-uc-outcome-label">{o.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </main>
      </div>

      <RevealOnScroll className="vt-uc-cta">
        <h3>{content.ctaHeading}</h3>
        <p>{content.ctaBody}</p>
        <Link href="/#contact" className="vt-uc-btn">
          Get in Touch →
        </Link>
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
