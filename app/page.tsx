"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { scrollTo } from "./components/nav-data";
import './page.css'

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
  return (
    <>
      <Header />

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
              Enterprise Technology • Cloud • Consulting
            </p>

            <h1 className="vt-cinematic-title">
              Collaborative
              <span>Transformation</span>
            </h1>

            <p className="vt-cinematic-description">
              We help organizations modernize operations, scale digital infrastructure, and accelerate business growth through enterprise-grade technology solutions.
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
        <section id="services" className="vt-services-wrap">

          <div className="vt-section">

            <div className="vt-services-head">

              <p className="vt-section-label">
                Services
              </p>

              <h2 className="vt-h2 vt-services-title">
                Technology solutions built to scale modern businesses.
              </h2>

              <p className="vt-services-sub">
                We help organizations modernize operations, improve digital
                efficiency, and accelerate growth through enterprise-grade
                technology solutions.
              </p>

            </div>

            <div className="vt-services-grid">

              {[
                {
                  number: "01",
                  title: "Application Development",
                  description:
                    "Custom business applications engineered to automate operations, streamline workflows, and modernize enterprise systems.",
                  points: [
                    "Custom enterprise applications",
                    "Workflow automation",
                    "System integrations",
                    "Scalable architecture",
                  ],
                },

                {
                  number: "02",
                  title: "Maintenance & Support",
                  description:
                    "Continuous support and optimization services designed to improve reliability, scalability, and long-term system performance.",
                  points: [
                    "Performance monitoring",
                    "Cloud migration support",
                    "Code audits & reviews",
                    "Troubleshooting & maintenance",
                  ],
                },

                {
                  number: "03",
                  title: "Web Design & Maintenance",
                  description:
                    "Modern responsive web platforms and interactive digital experiences focused on usability, speed, and scalability.",
                  points: [
                    "Responsive web applications",
                    "CMS & ecommerce systems",
                    "UI/UX optimization",
                    "Continuous maintenance",
                  ],
                },

                {
                  number: "04",
                  title: "Cloud Services",
                  description:
                    "Secure cloud infrastructure and deployment solutions optimized for enterprise scalability and operational efficiency.",
                  points: [
                    "Hybrid cloud solutions",
                    "Infrastructure optimization",
                    "Secure deployments",
                    "Cloud migration",
                  ],
                },

                {
                  number: "05",
                  title: "Quality Assurance",
                  description:
                    "Automation-driven testing and QA systems ensuring reliability, performance, and faster product delivery cycles.",
                  points: [
                    "Automation testing",
                    "Performance validation",
                    "Agile & DevOps QA",
                    "End-to-end testing",
                  ],
                },

                {
                  number: "06",
                  title: "Talent Acquisition",
                  description:
                    "Strategic staffing and consulting solutions connecting businesses with highly skilled technology professionals.",
                  points: [
                    "Technical staffing",
                    "IT consulting experts",
                    "Rapid team scaling",
                    "Project-based hiring",
                  ],
                },
              ].map((service) => (

                <article
                  key={service.number}
                  className="vt-service-card"
                >

                  <div className="vt-service-no">
                    {service.number}
                  </div>

                  <div className="vt-service-content">

                    <h3 className="vt-service-heading">
                      {service.title}
                    </h3>

                    <p className="vt-service-description">
                      {service.description}
                    </p>

                    <div className="vt-service-points">

                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="vt-service-point"
                        >
                          <span className="vt-service-bullet" />
                          {point}
                        </div>
                      ))}

                    </div>

                    <button
                      className="vt-service-btn"
                      onClick={() => scrollTo("#contact")}
                    >
                      Discuss Solution →
                    </button>

                  </div>

                </article>
              ))}

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
        {/* ── TRUST ───────────────────────────────────────── */}
        <section id="work" className="vt-trust-section">

          <div className="vt-section">

            <div className="vt-trust-wrap">

              <div className="vt-trust-left">

                <p className="vt-section-label">
                  Why Us
                </p>

                <h2 className="vt-h2">
                  Reliable technology partnerships built for long-term growth.
                </h2>

              </div>

              <div className="vt-trust-right">

                {[
                  "Enterprise-focused delivery",
                  "Scalable cloud infrastructure",
                  "Modern development practices",
                  "Quality-driven execution",
                ].map((item) => (

                  <div
                    key={item}
                    className="vt-trust-item"
                  >
                    <span className="vt-trust-dot" />
                    {item}
                  </div>

                ))}

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
                  { label: "Address", value: "1900 Yorktown St, #508, Houston, TX, 77056", href: undefined },
                  { label: "Call Us", value: "+1 (940) 263-1641", href: "tel:+19402631641" },
                  { label: "Email Us", value: "info@cognillc.com", href: "mailto:info@cognillc.com" },
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

      <Footer />
    </>
  );
}