"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { scrollTo } from "./components/nav-data";
import "./page.css";

const SIGNAL_LINE_TILE_WIDTH = 600;
const SIGNAL_LINE_HEIGHT = 120;

function wavePath(amplitude: number, cycles: number, phase: number) {
  const steps = 100;
  const midY = SIGNAL_LINE_HEIGHT / 2;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * SIGNAL_LINE_TILE_WIDTH;
    const y =
      midY +
      amplitude * Math.sin((i / steps) * cycles * Math.PI * 2 + phase);
    d += `${i === 0 ? "M" : " L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }
  return d;
}

const signalLines = [
  { amplitude: 24, cycles: 5, phase: 1.4, top: "10%", duration: "72s", bright: true },
];

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);

    // Fail-safe: content must never stay stranded at opacity 0 because the
    // observer didn't deliver (background/throttled tabs pause the rendering
    // lifecycle that IntersectionObserver callbacks depend on).
    const fallback = window.setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, 3000);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, visible] as const;
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });
  const API_BASE_URL =
    process?.env?.NEXT_PUBLIC_API_BASE_URL ?? "https://sendemail-api.falling-band-ce89.workers.dev";
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setFieldErrors({});
    setErrorMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        }),
      });

      const data = await res.json();

      switch (res.status) {
        case 200:
          setForm({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
          setStatus("sent");
          break;

        case 400:
          if (data?.error === "validation_failed") {
            setStatus("error");
            setErrorMessage("Please correct the highlighted fields.");
            const details = (data?.details as Record<string, string>) ?? {};
            const fieldMap: Record<string, string> = {
              fullName: "name",
              email: "email",
              phone: "phone",
              company: "company",
              message: "message",
            };
            setFieldErrors(
              Object.fromEntries(
                Object.entries(details).map(([key, msg]) => [
                  fieldMap[key] ?? key,
                  String(msg),
                ]),
              ),
            );
          } else {
            setStatus("error");
            setErrorMessage(
              "The request could not be read. Please try again.",
            );
          }
          break;

        case 403:
          setStatus("error");
          setErrorMessage(
            data?.error === "recipient_not_allowed"
              ? "This recipient is not accepted. Please try again later."
              : "There is a configuration error on our end. Please try again later.",
          );
          break;

        case 429:
          setStatus("error");
          setErrorMessage(
            "Too many submissions. Please wait and try again later.",
          );
          break;

        case 502:
          setStatus("error");
          setErrorMessage(
            "Your message could not be sent. Please try again later.",
          );
          break;

        default:
          setStatus("error");
          setErrorMessage(
            "Something went wrong sending your message. Please try again.",
          );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again.",
      );
    }
  };
  return (
    <form onSubmit={submit} className="vt-form" noValidate>
      <div className="vt-form-row">
        <div className="vt-field">
          <label className="vt-field-label" htmlFor="cf-name">
            Full name
          </label>
          <input
            id="cf-name"
            className={`vt-input ${fieldErrors.name ? "vt-input-error" : ""}`}
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handle}
            aria-invalid={!!fieldErrors.name}
            required
          />
          {fieldErrors.name && (
            <span className="vt-field-error" role="alert">
              {fieldErrors.name}
            </span>
          )}
        </div>
        <div className="vt-field">
          <label className="vt-field-label" htmlFor="cf-email">
            Email
          </label>
          <input
            id="cf-email"
            className={`vt-input ${fieldErrors.email ? "vt-input-error" : ""}`}
            name="email"
            placeholder="username@company.com"
            type="email"
            value={form.email}
            onChange={handle}
            aria-invalid={!!fieldErrors.email}
            required
          />
          {fieldErrors.email && (
            <span className="vt-field-error" role="alert">
              {fieldErrors.email}
            </span>
          )}
        </div>
      </div>
      <div className="vt-form-row">
        <div className="vt-field">
          <label className="vt-field-label" htmlFor="cf-phone">
            Phone
          </label>
          <input
            id="cf-phone"
            className={`vt-input ${fieldErrors.phone ? "vt-input-error" : ""}`}
            name="phone"
            type="tel"
            placeholder="+1 234 567 8900"
            value={form.phone}
            onChange={handle}
            aria-invalid={!!fieldErrors.phone}
            required
          />
          {fieldErrors.phone && (
            <span className="vt-field-error" role="alert">
              {fieldErrors.phone}
            </span>
          )}
        </div>
        <div className="vt-field">
          <label className="vt-field-label" htmlFor="cf-company">
            Company <span className="vt-field-optional">(optional)</span>
          </label>
          <input
            id="cf-company"
            className={`vt-input ${fieldErrors.company ? "vt-input-error" : ""}`}
            name="company"
            placeholder="Enter Company Name"
            value={form.company}
            onChange={handle}
            aria-invalid={!!fieldErrors.company}
          />
          {fieldErrors.company && (
            <span className="vt-field-error" role="alert">
              {fieldErrors.company}
            </span>
          )}
        </div>
      </div>
      <div className="vt-field">
        <label className="vt-field-label" htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          className={`vt-input vt-textarea ${
            fieldErrors.message ? "vt-input-error" : ""
          }`}
          name="message"
          placeholder="Tell us about your inquiry"
          rows={5}
          value={form.message}
          onChange={handle}
          aria-invalid={!!fieldErrors.message}
          required
        />
        {fieldErrors.message && (
          <span className="vt-field-error" role="alert">
            {fieldErrors.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="vt-btn-primary"
      >
        {status === "idle" && (
          <>
            Send message <span className="vt-btn-arrow">→</span>
          </>
        )}
        {status === "sending" && (
          <>
            Sending
            <span className="vt-dots" aria-hidden="true">
              ···
            </span>
          </>
        )}
        {status === "sent" && (
          <>
            Sent <span aria-hidden="true">✓</span>
          </>
        )}
        {status === "error" && (
          <>
            Try again <span className="vt-btn-arrow">→</span>
          </>
        )}
      </button>

      {status === "error" && (
        <p className="vt-form-error" role="alert">
          {errorMessage}
        </p>
      )}
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

const pillars: [string, string][] = [
  [
    "Innovation",
    "We listen, learn, and seek out the best ideas — attacking complacency at every turn.",
  ],
  [
    "Quality",
    "Doing it right the first time, every time — always striving to find a better way.",
  ],
  [
    "Teamwork",
    "Communicate and collaborate to succeed — together, we exceed expectations.",
  ],
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [openService, setOpenService] = useState(0);
  const svcPanelRef = useRef<HTMLDivElement | null>(null);

  // Marks that scripting is live, which is what arms the scroll reveals.
  // Without it the CSS keeps every section fully visible, so the page still
  // reads correctly if hydration never happens.
  useEffect(() => {
    document.documentElement.classList.add("vt-motion");
  }, []);
  const [svcPanelHeight, setSvcPanelHeight] = useState(0);

  useEffect(() => {
    const el = svcPanelRef.current;
    if (!el) {
      setSvcPanelHeight(0);
      return;
    }

    const measure = () => setSvcPanelHeight(el.scrollHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [openService]);

  const [servicesRef, servicesVisible] = useInView<HTMLElement>(0.12);
  const [aboutRef, aboutVisible] = useInView<HTMLElement>(0.25);
  const [contactRef, contactVisible] = useInView<HTMLElement>(0.18);

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
        <section
          id="services"
          ref={servicesRef}
          className={`vt-index-services ${servicesVisible ? "is-visible" : ""}`}
        >
          <div className="vt-section">
            <div className="vt-index-head">
              <p className="vt-index-kicker">Services /</p>

              <h2 className="vt-index-title">
                Technology solutions built to scale modern businesses.
              </h2>

              <p className="vt-index-sub">
                We help organizations modernize operations, improve digital
                efficiency, and accelerate growth through enterprise-grade
                technology solutions.
              </p>
            </div>

            <div className="vt-index-list">
              {services.map((service, i) => {
                const isOpen = openService === i;
                return (
                  <div
                    key={service.title}
                    className={`vt-svc-row ${isOpen ? "is-open" : ""}`}
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <button
                      type="button"
                      className="vt-svc-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`svc-panel-${i}`}
                      id={`svc-trigger-${i}`}
                      onClick={() => setOpenService(isOpen ? -1 : i)}
                    >
                      <span className="vt-svc-index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="vt-svc-title">{service.title}</span>
                      <span className="vt-svc-toggle" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`vt-svc-panel-wrap ${isOpen ? "is-open" : ""}`}
                      id={`svc-panel-${i}`}
                      role="region"
                      aria-labelledby={`svc-trigger-${i}`}
                      style={{ maxHeight: isOpen ? svcPanelHeight : 0 }}
                    >
                      <div
                        className="vt-svc-panel-content"
                        ref={isOpen ? svcPanelRef : undefined}
                      >
                        <div>
                          <p className="vt-svc-desc">{service.description}</p>
                          <div className="vt-svc-points">
                            {service.points.map((point) => (
                              <div key={point} className="vt-svc-point">
                                <span
                                  className="vt-svc-point-mark"
                                  aria-hidden="true"
                                />
                                {point}
                              </div>
                            ))}
                          </div>
                        </div>
                        <svg
                          className="vt-svc-watermark"
                          viewBox="0 0 48 48"
                          fill="none"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {serviceIcons[service.icon]}
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
        <section
          id="about"
          ref={aboutRef}
          className={`vt-about-section ${aboutVisible ? "is-visible" : ""}`}
        >
          <div className="vt-about-noise" aria-hidden="true" />
          <div className="vt-about-glow" aria-hidden="true" />

          {/* --------------Motion animation intentionally commented------------ */}
          {/* <div className="vt-about-lines" aria-hidden="true">
            {signalLines.map((line, i) => {
              const d = wavePath(line.amplitude, line.cycles, line.phase);
              return (
                <svg
                  key={i}
                  className={`vt-signal-line ${line.bright ? "vt-signal-line-bright" : ""}`}
                  style={{
                    top: line.top,
                    animationDuration: line.duration,
                  }}
                  viewBox={`0 0 ${SIGNAL_LINE_TILE_WIDTH * 2} ${SIGNAL_LINE_HEIGHT}`}
                  preserveAspectRatio="none"
                >
                  <path d={d} />
                  <path
                    d={d}
                    transform={`translate(${SIGNAL_LINE_TILE_WIDTH}, 0)`}
                  />
                </svg>
              );
            })}
          </div> */}

          <div className="vt-about">
            <p className="vt-index-kicker">About Us /</p>

            <div className="vt-about-intro">
              <h2 className="vt-about-headline">
                Meaningful relationships, powered by technology.
              </h2>

              <p className="vt-about-copy">
                <strong>Venmer Tech LLC </strong> partners with organizations
                to achieve their goals through the effective use of
                technology and business expertise — delivering solutions
                with knowledge, experience, and follow-through.
              </p>

              <button
                className="vt-btn-signal"
                onClick={() => scrollTo("#contact")}
              >
                Work with us <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="vt-pillars-strip">
              {pillars.map(([title, desc], i) => (
                <div
                  key={title}
                  className="vt-pillar-item"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="vt-pillar-tag">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="vt-pillar-item-title">{title}</h3>
                  <p className="vt-pillar-item-desc">{desc}</p>
                </div>
              ))}
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
              <p className="vt-index-kicker">Contact /</p>
              <h2 className="vt-h2-signal">Ready to transform your enterprise with AI-first solutions?</h2>
            </div>

            <div className="vt-contact-grid-signal">
              <ContactForm />
              <div className="vt-contact-data">
                {[
                  {
                    label: "Address",
                    value: "5301 Alpha Road, Suite 80-14, Dallas, TX 75240",
                    href: undefined,
                  },
                  {
                    label: "Call Us",
                    value: "+1 (972) 823-9091",
                    href: "tel:+19728239091",
                  },
                  {
                    label: "Email Us",
                    value: "info@venmertech.com",
                    href: "mailto:info@venmertech.com",
                  },
                ].map(({ label, value, href }, index) => (
                  <div
                    key={label}
                    className="vt-data-row"
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <span className="vt-data-label">{label}</span>
                    {href ? (
                      <a href={href} className="vt-data-value">
                        {value}
                      </a>
                    ) : (
                      <span
                        className="vt-data-value"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {value}
                      </span>
                    )}
                    <span className="vt-data-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
