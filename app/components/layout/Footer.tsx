"use client";

import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

const PLATFORM_LINKS: FooterLink[] = [
  { label: "Performance Reviews", href: "/platform/performance-reviews" },
  { label: "Goals & OKRs", href: "/platform/goals-okrs" },
  { label: "1:1s", href: "/platform/one-on-ones" },
  { label: "Engagement", href: "/platform/engagement" },
  { label: "Reward & Recognition", href: "/platform/reward-recognition" },
];

const SOLUTIONS_LINKS: FooterLink[] = [
  { label: "Cloud Modernization", href: "/solutions/cloud-modernization" },
  { label: "Data & AI", href: "/solutions/data-ai" },
  { label: "Application Modernization", href: "/solutions/application-modernization" },
  { label: "Permanent Placement", href: "/solutions/permanent-placement" },
  { label: "Executive Search", href: "/solutions/executive-search" },
];

const INDUSTRIES_LINKS: FooterLink[] = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Technology", href: "/industries/technology" },
];

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="vt-footer-list">
      {links.map((l) => (
        <li key={l.label}>
          <Link href={l.href}>{l.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="vt-footer-wrap">
      <div className="vt-footer-grid">
        <div className="vt-footer-col vt-footer-about">
          <Link href="/" className="vt-logo">
            <Image
              src="/logo-venmer.png"
              alt="VenmerTech"
              width={42}
              height={42}
              className="vt-logo-icon"
            />
            <div className="vt-logo-text-wrap">
              <div className="vt-logo-text">
                <span className="vt-logo-venmer">Venmer</span>
                <span className="vt-logo-tech">Tech</span>
              </div>
              <span className="vt-logo-tagline">
                Enterprise Technology Partner
              </span>
            </div>
          </Link>
          <p className="vt-footer-desc">
            Venmer Tech LLC is a leading Information Technology, Consulting and
            Outsourcing Company, that delivers solutions to enable its clients
            do business better.
          </p>
          <ul className="vt-footer-list vt-footer-contact">
            <li className="vt-footer-contact-item">
              <svg
                className="vt-footer-contact-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                2501 Lakeside Pkwy
                <br />
                Flower Mound, TX 75022-4180
                <br />
                United States
              </span>
            </li>
            <li className="vt-footer-contact-item">
              <svg
                className="vt-footer-contact-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <a href="tel:+19402631641">+1(940)240.6962</a>
            </li>
            <li className="vt-footer-contact-item">
              <svg
                className="vt-footer-contact-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <a href="mailto:info@venmertech.com">info@venmertech.com</a>
            </li>
          </ul>
        </div>

        <div className="vt-footer-links-group">
          <div className="vt-footer-col">
            <h4 className="vt-footer-heading">Platform</h4>
            <FooterLinkList links={PLATFORM_LINKS} />
          </div>

          <div className="vt-footer-col">
            <h4 className="vt-footer-heading">Solutions</h4>
            <FooterLinkList links={SOLUTIONS_LINKS} />
          </div>

          <div className="vt-footer-col">
            <h4 className="vt-footer-heading">Industries</h4>
            <FooterLinkList links={INDUSTRIES_LINKS} />
          </div>
        </div>
      </div>

      <div className="vt-footer-bottom">
        <p>© {year} Venmer Tech LLC. All rights reserved.</p>
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
        </div>
      </div>
    </footer>
  );
}
