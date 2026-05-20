"use client";

import Link from "next/link";
import { handleHashNav } from "../nav-data";

const USEFUL_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Careers", href: "/careers" },
];

const SERVICE_LINKS = [
  "Application Development",
  "Web Design and Maintenance",
  "Application Support",
  "Talent Acquisition",
];

export default function Footer() {
  const year = new Date().getFullYear();

  function handleClick(e: React.MouseEvent, href: string) {
    const hash = href.startsWith("/#")
      ? href.slice(1)
      : href.startsWith("#")
        ? href
        : null;
    if (hash) {
      e.preventDefault();
      handleHashNav(hash);
    }
  }

  return (
    <footer className="vt-footer-wrap">
      <div className="vt-footer-grid">
        <div className="vt-footer-col vt-footer-about">
          <Link href="/" className="vt-logo">
            <div className="vt-logo-mark">VT</div>
            Venmer Tech LLC
          </Link>
          <p className="vt-footer-desc">
            Venmer Tech LLC is a leading Information Technology, Consulting and
            Outsourcing Company, that delivers solutions to enable its clients
            do business better.
          </p>
          <div className="vt-footer-social">
            <a
              href="https://www.linkedin.com/company/venmertech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="vt-footer-col">
          <h4 className="vt-footer-heading">Useful Links</h4>
          <ul className="vt-footer-list">
            {USEFUL_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} onClick={(e) => handleClick(e, l.href)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="vt-footer-col">
          <h4 className="vt-footer-heading">Our Services</h4>
          <ul className="vt-footer-list">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <Link
                  href="/#services"
                  onClick={(e) => handleClick(e, "/#services")}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="vt-footer-col">
          <h4 className="vt-footer-heading">Contact Us</h4>
          <ul className="vt-footer-list vt-footer-contact">
            <li>
              2501 Lakeside Pkwy 
              <br />
              Flower Mound, TX 75022-4180
              <br />
              United States
            </li>
            <li>
              <a href="tel:+19402631641">Phone: +1(940)224.0696</a>
            </li>
            <li>
              <a href="mailto:info@venmertech.com">
                Email: info@venmertech.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="vt-footer-bottom">
        <p>© {year} Venmer Tech LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
