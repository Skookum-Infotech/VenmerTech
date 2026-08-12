import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../page.css";
import "../platform.css";
import { getPlatformPage, PLATFORM_PAGES } from "../platform-data";
import { Icon } from "../../components/icons";
import RevealOnScroll from "../../components/RevealOnScroll";

export default function PlatformPageTemplate({ slug }: { slug: string }) {
  const content = getPlatformPage(slug);
  if (!content) notFound();

  const otherPages = PLATFORM_PAGES.filter((p) => p.slug !== slug);

  return (
    <div className="vt-plat-page">
      <Header />

      <div className="vt-plat-topbar" />

      <section className="vt-plat-hero">
        <span className="vt-plat-watermark" aria-hidden="true">
          {content.navLabel}
        </span>
        <div className="vt-plat-hero-inner">
          <p className="vt-plat-kicker">Platform</p>
          <h1>{content.title}</h1>
          <p className="vt-plat-hero-sub">{content.subtitle}</p>
          <Link href="/#contact" className="vt-plat-btn">
            Get in Touch →
          </Link>
        </div>
      </section>

      <div className="vt-plat-body">
        <aside className="vt-plat-sidebar">
          <div>
            <p className="vt-plat-sidebar-label">Related Platform Pages</p>
            <div className="vt-plat-sidebar-list">
              {otherPages.map((p) => (
                <Link key={p.slug} href={`/platform/${p.slug}`} className="vt-plat-sidebar-link">
                  {p.navLabel}
                </Link>
              ))}
            </div>
          </div>
          <div className="vt-plat-sidebar-card">
            <h4>Need a custom scope?</h4>
            <p>Every engagement starts with a conversation, not a fixed package.</p>
            <Link href="/#contact">Talk to Us →</Link>
          </div>
        </aside>

        <main className="vt-plat-main">
          <div className="vt-plat-mobile-siblings">
            {otherPages.map((p) => (
              <Link key={p.slug} href={`/platform/${p.slug}`}>
                {p.navLabel}
              </Link>
            ))}
          </div>

          <RevealOnScroll className="vt-plat-overview">
            <p className="vt-plat-block-label">Overview</p>
            <p>{content.overview}</p>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-plat-block-label">What We Deliver</p>
            <div className="vt-plat-capabilities-grid">
              {content.capabilities.map((c) => (
                <div key={c.title} className="vt-plat-cap">
                  <div className="vt-plat-cap-icon">
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <div className="vt-plat-cap-title">{c.title}</div>
                    <div className="vt-plat-cap-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-plat-block-label">Our Approach</p>
            <div className="vt-plat-timeline">
              {content.approach.map((step) => (
                <div key={step.title} className="vt-plat-timeline-item">
                  <div className="vt-plat-timeline-title">{step.title}</div>
                  <div className="vt-plat-timeline-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-plat-block-label">Outcomes</p>
            <div className="vt-plat-outcomes">
              {content.outcomes.map((o) => (
                <div key={o.label} className="vt-plat-outcome">
                  <div className="vt-plat-outcome-value">{o.value}</div>
                  <div className="vt-plat-outcome-label">{o.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </main>
      </div>

      <RevealOnScroll className="vt-plat-cta">
        <h3>{content.ctaHeading}</h3>
        <p>{content.ctaBody}</p>
        <Link href="/#contact" className="vt-plat-btn">
          Get in Touch →
        </Link>
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
