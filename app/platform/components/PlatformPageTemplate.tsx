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
  const [leadFeature] = content.features;

  return (
    <div className="vt-plat-page">
      <Header />

      <section className="vt-plat-hero">
        <div className="vt-plat-hero-glow" aria-hidden="true" />
        <div className="vt-plat-hero-inner">
          <div className="vt-plat-hero-copy">
            <p className="vt-plat-kicker">Platform</p>
            <h1>{content.title}</h1>
            <p className="vt-plat-hero-sub">{content.subtitle}</p>
            <div className="vt-plat-hero-actions">
              <Link href="/#contact" className="vt-plat-hero-cta">
                Get in Touch →
              </Link>
              <a href="#features" className="vt-plat-hero-ghost">
                See what&apos;s included
              </a>
            </div>
          </div>
          <div className="vt-plat-hero-visual">
            <div className="vt-plat-hero-card">
              <span className="vt-plat-hero-card-label">Featured</span>
              <span className="vt-plat-hero-card-title">{leadFeature.title}</span>
              <span className="vt-plat-hero-card-desc">{leadFeature.desc}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="vt-plat-features">
        <div className="vt-plat-section">
          <RevealOnScroll className="vt-plat-section-head">
            <p className="vt-plat-label">What&apos;s Included</p>
            <h2 className="vt-plat-h2">Everything you need, built in.</h2>
          </RevealOnScroll>
          <div className="vt-plat-features-grid">
            {content.features.map((f, i) => (
              <div
                key={f.title}
                className="vt-plat-feature-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="vt-plat-feature-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="vt-plat-feature-icon-wrap">
                  <Icon name={f.icon} className="vt-plat-feature-icon" />
                </div>
                <h3 className="vt-plat-feature-title">{f.title}</h3>
                <p className="vt-plat-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="vt-plat-section">
          <RevealOnScroll className="vt-plat-section-head">
            <p className="vt-plat-label">How It Works</p>
            <h2 className="vt-plat-h2">From setup to impact in four steps.</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="vt-plat-steps">
              {content.steps.map((s, i) => (
                <div key={s.title} className="vt-plat-step">
                  <div className="vt-plat-step-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="vt-plat-step-title">{s.title}</div>
                  <div className="vt-plat-step-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll className="vt-plat-crosslinks">
        <div className="vt-plat-crosslinks-inner">
          <p className="vt-plat-crosslinks-label">More from the Platform</p>
          <div className="vt-plat-crosslinks-list">
            {otherPages.map((p) => (
              <Link key={p.slug} href={`/platform/${p.slug}`} className="vt-plat-pill-link">
                {p.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="vt-plat-cta-band">
        <div className="vt-plat-cta-card">
          <h3>{content.ctaHeading}</h3>
          <p>{content.ctaBody}</p>
          <Link href="/#contact">Get in Touch →</Link>
        </div>
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
