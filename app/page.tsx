"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { scrollTo } from "./components/nav-data";
import "./page.css";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1600);
  };
  return (
    <form onSubmit={submit} className="vt-form">
      <div className="vt-form-row">
        <input
          className="vt-input"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handle}
          required
        />
        <input
          className="vt-input"
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handle}
          required
        />
      </div>
      <input
        className="vt-input"
        name="company"
        placeholder="Company (optional)"
        value={form.company}
        onChange={handle}
      />
      <textarea
        className="vt-input vt-textarea"
        name="message"
        placeholder="Tell us about your project…"
        rows={5}
        value={form.message}
        onChange={handle}
        required
      />
      <button
        type="submit"
        disabled={status !== "idle"}
        className="vt-btn-primary"
      >
        {status === "idle" && "Send Message →"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "✓ Sent!"}
      </button>
    </form>
  );
}

const serviceIcons: Record<string, React.ReactNode> = {
  code: (
    <>
      <path
        d="M16 14L6 24L16 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 14L42 24L32 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 8L20 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),
  tools: (
    <>
      <path
        d="M14 34L22 10L30 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 26H34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="38" r="3" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M24 35V32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),
  web: (
    <>
      <rect
        x="6"
        y="8"
        width="36"
        height="24"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path d="M6 16H42" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M18 32H30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 28V32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="17" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  cloud: (
    <path
      d="M12 32C7.58172 32 4 28.4183 4 24C4 19.8645 7.14763 16.4643 11.1924 16.0496C12.3086 11.3056 16.5654 8 21.5 8C27.5731 8 32.5 12.9269 32.5 19C32.5 19.3358 32.4843 19.6683 32.4535 20C36.7863 20.5136 40 24.1324 40 28.5C40 33.1944 36.1944 37 31.5 37H12V32Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  ),
  check: (
    <>
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M15 24L21 30L33 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  people: (
    <>
      <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M12 36C12 29.3726 17.3726 24 24 24C30.6274 24 36 29.3726 36 36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 34C4 30.134 7.13401 27 11 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="38" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M44 34C44 30.134 40.866 27 37 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
};

const services = [
  {
    icon: "code",
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
    icon: "tools",
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
    icon: "web",
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
    icon: "cloud",
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
    icon: "check",
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
    icon: "people",
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
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const gridRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = grid.querySelectorAll<HTMLElement>(".vt-service-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      });
    };

    grid.addEventListener("mousemove", handleMouseMove);
    return () => grid.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const section = aboutRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = contactRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContactVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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
              We help organizations modernize operations, scale digital
              infrastructure, and accelerate business growth through
              enterprise-grade technology solutions.
            </p>

            <div className="vt-cinematic-actions">
              <button
                className="vt-btn-hero"
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
              <p className="vt-section-label">Services</p>

              <h2 className="vt-h2 vt-services-title">
                Technology solutions built to scale modern businesses.
              </h2>

              <p className="vt-services-sub">
                We help organizations modernize operations, improve digital
                efficiency, and accelerate growth through enterprise-grade
                technology solutions.
              </p>
            </div>

            <div className="vt-services-grid" ref={gridRef}>
              {services.map((service, i) => (
                <article
                  key={service.title}
                  className="vt-service-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="vt-service-accent" />
                  <div className="vt-service-icon-wrap">
                    <svg
                      className="vt-service-icon"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {serviceIcons[service.icon]}
                    </svg>
                  </div>
                  <div className="vt-service-content">
                    <h3 className="vt-service-heading">{service.title}</h3>
                    <p className="vt-service-description">
                      {service.description}
                    </p>
                    <div className="vt-service-points">
                      {service.points.map((point) => (
                        <div key={point} className="vt-service-point">
                          <svg
                            className="vt-service-check"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 8L6.5 11.5L13 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {point}
                        </div>
                      ))}
                    </div>

                    <button
                      className="vt-service-btn"
                      onClick={() => scrollTo("#contact")}
                    >
                      Discuss Solution
                      <svg
                        className="vt-service-btn-arrow"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 10H16M16 10L11 5M16 10L11 15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
        <section
          id="about"
          ref={aboutRef}
          className={`vt-about-section ${aboutVisible ? "is-visible" : ""}`}
        >
          <div className="vt-about">
            <div className="vt-about-frame">
              <span
                className="vt-about-orb vt-about-orb-left"
                aria-hidden="true"
              />
              <span
                className="vt-about-orb vt-about-orb-right"
                aria-hidden="true"
              />

              <div className="vt-about-header">
                <p className="vt-section-label vt-about-label">About Us</p>
                <h2 className="vt-h2 vt-h2-white">
                  Collaborative{" "}
                  <span className="vt-h2-ital">Transformation</span>
                </h2>
                <p className="vt-about-tagline">
                  We believe that innovation is achieved through the right
                  combination of meaningful relationships and technology.
                </p>
              </div>

              <div className="vt-about-grid">
                <div className="vt-about-story">
                  <p className="vt-about-copy">
                    <strong className="vt-about-strong">
                      Venmer Tech LLC{" "}
                    </strong>{" "}
                    is dedicated to achieve client&apos;s organizational goals
                    through the most effective use of Information Technology and
                    business vertical knowledge. Working as a business partner
                    with you, we plan, prepare and execute programs with
                    knowledge, experience and follow through while providing
                    solutions in a timely manner. Our solutions are the outcome
                    of the synergistic contribution of our most-valued
                    resources. Our depth and breadth of service and global reach
                    equips us to serve any client, anywhere across the globe.
                  </p>
                  <button
                    className="vt-btn-outline-white"
                    onClick={() => scrollTo("#contact")}
                  >
                    Work With Us →
                  </button>
                </div>
                <div className="vt-pillars">
                  {[
                    [
                      "Innovation",
                      "Innovation is the key to continued growth and relevance in the marketplace. At Venmer Tech, We listen, learn, and seek out the best ideas. We attack complacency and continually improve.",
                    ],
                    [
                      "Quality",
                      "Doing it right the first time — every time, Pace-setting and Innovative. Always striving to find a better way. We monitor and measure all parts of our business.",
                    ],
                    [
                      "Teamwork",
                      "Communicate and collaborate to succeed. We believe teamwork empowers our individual strengths and that working together as a team helps us exceed expectations.",
                    ],
                  ].map(([t, d], index) => (
                    <article
                      key={t}
                      className="vt-pillar"
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      <div className="vt-pillar-title">{t}</div>
                      <div className="vt-pillar-desc">{d}</div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────────────────────── */}
        <section
          id="contact"
          ref={contactRef}
          className={`vt-contact-section ${contactVisible ? "is-visible" : ""}`}
        >
          <div className="vt-section vt-contact-shell">
            <div className="vt-contact-header">
              <p className="vt-section-label">Contact</p>
              <h2 className="vt-h2">Let&apos;s start a conversation.</h2>
            </div>

            <div className="vt-contact-panel">
              <div className="vt-contact-grid">
                <ContactForm />
                <div className="vt-contact-info">
                  {[
                    {
                      label: "Address",
                      value: "2501 Lakeside Pkwy, Flower Mound, TX 75022-4180",
                      href: undefined,
                    },
                    {
                      label: "Call Us",
                      value: "+1 (940) 224-0696",
                      href: "tel:+19402240696",
                      

                    },
                    {
                      label: "Email Us",
                      value: "info@venmertech.com",
                      href: "mailto:info@venmertech.com",
                    },
                  ].map(({ label, value, href }, index) => (
                    <div
                      key={label}
                      className="vt-info-item"
                      style={{ transitionDelay: `${index * 110}ms` }}
                    >
                      <div className="vt-info-label">{label}</div>
                      {href ? (
                        <a href={href} className="vt-info-value">
                          {value}
                        </a>
                      ) : (
                        <p
                          className="vt-info-value"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="vt-map-card">
                <div className="vt-map-topline">
                  <span className="vt-map-badge">Office Map</span>
                  <span className="vt-map-meta">Houston, TX</span>
                </div>
                <div className="vt-map">
                  <iframe
                    title="Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.4!2d-95.4535!3d29.7365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3e1b1b1b1b1%3A0x0!2s1900+Yorktown+St%2C+Houston%2C+TX+77056!5e0!3m2!1sen!2sus!4v1680000000000"
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
