import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../page.css";
import "../solutions.css";
import { getSolutionPage, getRelatedSolutions } from "../solutions-data";
import { Icon } from "../../components/icons";
import RevealOnScroll from "../../components/RevealOnScroll";

export default function SolutionPageTemplate({ slug }: { slug: string }) {
  const content = getSolutionPage(slug);
  if (!content) notFound();

  const related = getRelatedSolutions(content);
  const groupLabel = content.groups.join(" & ");

  return (
    <div className="vt-sol-page">
      <Header />

      <div className="vt-sol-topbar">
        <div className="vt-sol-topbar-inner">
          <span>Solutions</span>
          <span>/</span>
          <span>{groupLabel}</span>
          <span>/</span>
          <span className="current">{content.navLabel}</span>
        </div>
      </div>

      <section className="vt-sol-hero">
        <div className="vt-sol-hero-inner">
          <p className="vt-sol-pill">{groupLabel}</p>
          <h1>{content.title}</h1>
          <p className="vt-sol-hero-sub">{content.subtitle}</p>
          <div className="vt-sol-hero-actions">
            <Link href="/#contact" className="vt-sol-btn-primary">
              Get in Touch →
            </Link>
            <a href="#overview" className="vt-sol-btn-ghost">
              See how it works
            </a>
          </div>
          <div className="vt-sol-hero-stats">
            {content.heroStats.map((s) => (
              <div key={s.label}>
                <div className="vt-sol-stat-value">{s.value}</div>
                <div className="vt-sol-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="vt-sol-body">
        <aside className="vt-sol-sidebar">
          <div>
            <p className="vt-sol-sidebar-label">Related Solutions</p>
            <div className="vt-sol-sidebar-list">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/solutions/${p.slug}`}
                  className={`vt-sol-sidebar-link${p.slug === content.slug ? " active" : ""}`}
                >
                  {p.navLabel}
                </Link>
              ))}
            </div>
          </div>
          <div className="vt-sol-sidebar-card">
            <h4>Need a custom scope?</h4>
            <p>Every engagement starts with a conversation, not a fixed package.</p>
            <Link href="/#contact">Talk to Us →</Link>
          </div>
        </aside>

        <main className="vt-sol-main">
          <div className="vt-sol-mobile-siblings">
            {related.map((p) => (
              <Link key={p.slug} href={`/solutions/${p.slug}`}>
                {p.navLabel}
              </Link>
            ))}
          </div>

          <RevealOnScroll id="overview" className="vt-sol-overview">
            <p className="vt-sol-block-label">Overview</p>
            <p>{content.overview}</p>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-sol-block-label">What We Deliver</p>
            <div className="vt-sol-capabilities-grid">
              {content.capabilities.map((c) => (
                <div key={c.title} className="vt-sol-cap">
                  <div className="vt-sol-cap-icon">
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <div className="vt-sol-cap-title">{c.title}</div>
                    <div className="vt-sol-cap-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-sol-block-label">Our Approach</p>
            <div className="vt-sol-timeline">
              {content.approach.map((step) => (
                <div key={step.title} className="vt-sol-timeline-item">
                  <div className="vt-sol-timeline-title">{step.title}</div>
                  <div className="vt-sol-timeline-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="vt-sol-block-label">Outcomes</p>
            <div className="vt-sol-outcomes">
              {content.outcomes.map((o) => (
                <div key={o.label} className="vt-sol-outcome">
                  <div className="vt-sol-outcome-value">{o.value}</div>
                  <div className="vt-sol-outcome-label">{o.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </main>
      </div>

      <RevealOnScroll className="vt-sol-cta">
        <h3>{content.ctaHeading}</h3>
        <p>{content.ctaBody}</p>
        <Link href="/#contact" className="vt-sol-btn-primary">
          Get in Touch →
        </Link>
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
