"use client";

import { useState, useEffect, useRef } from "react";
import './page.css'

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavItem { label: string; href: string }
interface Service { num: string; title: string; description: string }
interface Stat { value: string; label: string }

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const SERVICES: Service[] = [
  { num: "01", title: "IT Infrastructure", description: "Scalable cloud, hybrid, or on-premises infrastructure engineered for reliability and zero downtime." },
  { num: "02", title: "Technology Consulting", description: "Strategic roadmaps that align IT investments with long-term business goals and measurable growth." },
  { num: "03", title: "Cybersecurity", description: "Comprehensive audits, threat monitoring, and compliance frameworks protecting every layer of your data." },
  { num: "04", title: "Cloud Solutions", description: "Seamless migrations and optimisations on AWS, Azure, and GCP — lower costs, higher performance." },
  { num: "05", title: "Managed Services", description: "24/7 proactive monitoring and expert support so your teams stay focused on innovation." },
  { num: "06", title: "Digital Transformation", description: "End-to-end modernisation of legacy systems and workflows to unlock agility at every level." },
];

const STATS: Stat[] = [
  { value: "200+", label: "Clients" },
  { value: "98%", label: "Uptime" },
  { value: "12+", label: "Years" },
  { value: "50+", label: "Engineers" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCountUp(target: string, go: boolean) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!go) return;
    const isP = target.endsWith("%"), isPlus = target.endsWith("+");
    const num = parseInt(target.replace(/\D/g, ""), 10);
    let cur = 0;
    const step = Math.max(1, Math.ceil(num / 40));
    const id = setInterval(() => {
      cur = Math.min(cur + step, num);
      setDisplay(cur + (cur === num && isP ? "%" : cur === num && isPlus ? "+" : ""));
      if (cur === num) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [go, target]);
  return display;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function StatItem({ value, label }: Stat) {
  const { ref, visible } = useInView(0.4);
  const count = useCountUp(value, visible);
  return (
    <div ref={ref} className="vt-stat">
      <span className="vt-stat-num">{count}</span>
      <span className="vt-stat-label">{label}</span>
    </div>
  );
}

function ServiceRow({ num, title, description }: Service) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`vt-service-row${visible ? " is-visible" : ""}`}>
      <span className="vt-service-num">{num}</span>
      <div className="vt-service-body">
        <h3 className="vt-service-title">{title}</h3>
        <p className="vt-service-desc">{description}</p>
      </div>
      <span className="vt-service-arrow">↗</span>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1600);
  };
  return (
    <form onSubmit={submit} className="vt-form">
      <div className="vt-form-row">
        <input className="vt-input" name="name" placeholder="Full Name" value={form.name} onChange={handle} required />
        <input className="vt-input" name="email" placeholder="Email" type="email" value={form.email} onChange={handle} required />
      </div>
      <input className="vt-input" name="company" placeholder="Company (optional)" value={form.company} onChange={handle} />
      <textarea className="vt-input vt-textarea" name="message" placeholder="Tell us about your project…" rows={5} value={form.message} onChange={handle} required />
      <button type="submit" disabled={status !== "idle"} className="vt-btn-primary">
        {status === "idle" && "Send Message →"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "✓ Sent!"}
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <header>
        <nav className={`vt-nav${scrolled ? " scrolled" : ""}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="vt-logo">
            <div className="vt-logo-mark">VT</div>
            VenmerTech
          </a>
          <div className="vt-nav-links">
            {NAV_ITEMS.map((n) => (
              <a key={n.label} href={n.href} onClick={(e) => { e.preventDefault(); scrollTo(n.href); }} className="vt-nav-link">
                {n.label}
              </a>
            ))}
            <button className="vt-btn-nav" onClick={() => scrollTo("#contact")}>Get in Touch</button>
          </div>
          <button className={`vt-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </nav>
        <div className={`vt-mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((n) => (
            <a key={n.label} href={n.href} className="vt-mobile-link" onClick={(e) => { e.preventDefault(); scrollTo(n.href); setMenuOpen(false); }}>{n.label}</a>
          ))}
          <a href="#contact" className="vt-mobile-link" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); setMenuOpen(false); }}>Get in Touch →</a>
        </div>
      </header>

      <main>
        {/* ── HERO ────────────────────────────────────────────────────────────── */}
        <section className="vt-cinematic-hero">

          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg"
            className="vt-hero-video"
          >
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <div className="vt-hero-overlay" />

          {/* CONTENT */}
          <div className="vt-cinematic-content">

            <p className="vt-cinematic-kicker">
              Enterprise Technology & Infrastructure
            </p>

            <h1 className="vt-cinematic-title">
              Building
              <span>Digital Momentum</span>
            </h1>

            <p className="vt-cinematic-description">
              Scalable infrastructure, secure systems,
              and modern digital ecosystems engineered
              for ambitious businesses.
            </p>

            <div className="vt-cinematic-actions">
              <button
                className="vt-btn-primary"
                onClick={() => scrollTo("#services")}
              >
                Explore Services
              </button>

              <button
                className="vt-btn-glass"
                onClick={() => scrollTo("#contact")}
              >
                Start a Conversation
              </button>
            </div>

          </div>

          {/* SCROLL INDICATOR */}
          <div className="vt-scroll-indicator">
            <div className="vt-scroll-line" />
            <span>Scroll</span>
          </div>

        </section>

        {/* ── SERVICES ──────────────────────────────────────────────────────── */}
        <section id="services">
          <div className="vt-section">
            <p className="vt-section-label">What We Do</p>
            <h2 className="vt-h2">Services built for modern business.</h2>
            <div className="vt-services-list">
              {SERVICES.map((s) => <ServiceRow key={s.num} {...s} />)}
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
        <section id="about" className="vt-about-section">
          <div className="vt-about">
            <p className="vt-section-label vt-about-label">About Us</p>
            <h2 className="vt-h2 vt-h2-white">
              Collaborative{" "}
              <span className="vt-h2-ital">Transformation</span>
            </h2>
            <p className="vt-about-tagline">
              We believe that innovation is achieved through the right combination
              of meaningful relationships and technology.
            </p>
            <div className="vt-about-grid">
              <div>
                <p className="vt-about-copy">
                  <strong className="vt-about-strong">Venmer Tech LLC</strong> is dedicated to achieve
                  client's organizational goals through the most effective use of Information Technology
                  and business vertical knowledge. Working as a business partner with you, we plan, prepare
                  and execute programs with knowledge, experience and follow through while providing solutions
                  in a timely manner. Our solutions are the outcome of the synergistic contribution of our
                  most-valued resources. Our depth and breadth of service and global reach equips us to serve
                  any client, anywhere across the globe.
                </p>
                <button className="vt-btn-outline-white" onClick={() => scrollTo("#contact")}>Work With Us →</button>
              </div>
              <div className="vt-pillars">
                {[
                  ["Innovation", "Innovation is the key to continued growth and relevance in the marketplace. At Venmer Tech, We listen, learn, and seek out the best ideas. We attack complacency and continually improve."],
                  ["Quality", "Doing it right the first time — every time, Pace-setting and Innovative. Always striving to find a better way. We monitor and measure all parts of our business."],
                  ["Teamwork", "Communicate and collaborate to succeed. We believe teamwork empowers our individual strengths and that working together as a team helps us exceed expectations."],
                ].map(([t, d]) => (
                  <div key={t} className="vt-pillar">
                    <div className="vt-pillar-title">{t}</div>
                    <div className="vt-pillar-desc">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WORK ──────────────────────────────────────────────────────────── */}
        <section id="work">
          <div className="vt-section">
            <p className="vt-section-label">Trusted By</p>
            <h2 className="vt-h2">Businesses that trust us.</h2>
            <div className="vt-logos">
              {["Arcova", "Meridian", "Halvex", "Nortis", "Quellar", "Stratum"].map((n) => (
                <div key={n} className="vt-logo-cell">{n}</div>
              ))}
            </div>
            <div className="vt-quote-block">
              <blockquote className="vt-quote">
                "Venmer Tech transformed our IT operations completely. Their team understood our business
                goals from day one and delivered infrastructure that scaled effortlessly with our growth."
              </blockquote>
              <div className="vt-quote-author">
                <div className="vt-avatar">AK</div>
                <div>
                  <div className="vt-author-name">Arjun Kumar</div>
                  <div className="vt-author-role">CTO, Meridian Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────────────────────── */}
        <section id="contact" style={{ background: "var(--white)", borderTop: "1px solid var(--subtle)" }}>
          <div className="vt-section">
            <p className="vt-section-label">Contact</p>
            <h2 className="vt-h2">Let's start a conversation.</h2>
            <div className="vt-contact-grid">
              <ContactForm />
              <div className="vt-contact-info">
                {[
                  { label: "Email", value: "hello@venmertech.com", href: "mailto:hello@venmertech.com" },
                  { label: "Phone", value: "+1 (800) 123-4567", href: "tel:+18001234567" },
                  { label: "Office", value: "450 Tech Park, Suite 12\nSan Francisco, CA 94105", href: undefined },
                ].map(({ label, value, href }) => (
                  <div key={label} className="vt-info-item">
                    <div className="vt-info-label">{label}</div>
                    {href
                      ? <a href={href} className="vt-info-value">{value}</a>
                      : <p className="vt-info-value" style={{ whiteSpace: "pre-line" }}>{value}</p>
                    }
                  </div>
                ))}
              </div>
            </div>
            <div className="vt-map">
              <iframe
                title="Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b7e3d7c5%3A0x0!2sSan+Francisco%2C+CA+94105!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid var(--subtle)" }}>
        <div className="vt-footer">
          <a href="#" className="vt-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <div className="vt-logo-mark">VT</div>
            VenmerTech
          </a>
          <div className="vt-footer-links">
            {NAV_ITEMS.map((n) => (
              <a key={n.label} href={n.href} className="vt-footer-link" onClick={(e) => { e.preventDefault(); scrollTo(n.href); }}>{n.label}</a>
            ))}
          </div>
          <p className="vt-copy">© {new Date().getFullYear()} Venmer Tech. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}