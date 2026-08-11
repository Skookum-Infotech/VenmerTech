"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NAV_DROPDOWNS,
  handleHashNav,
  NavDropdown,
  NavGroup,
  NavLinkItem,
} from "../nav-data";

function DropdownCaret() {
  return (
    <svg
      className="vt-dd-caret"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileChevron() {
  return <span className="vt-mobile-dd-caret">▾</span>;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const navCenterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        navCenterRef.current &&
        !navCenterRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function navClick(e: React.MouseEvent, href: string) {
    if (href === "#") {
      e.preventDefault();
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      handleHashNav(href);
    }
  }

  function buildBlocks(
    g: NavGroup,
  ): { title?: string; links: NavLinkItem[] }[] {
    const blocks: { title?: string; links: NavLinkItem[] }[] = [];
    const links = g.links;
    for (let i = 0; i < links.length; i += 3) {
      blocks.push({
        title: i === 0 ? g.title : undefined,
        links: links.slice(i, i + 3),
      });
    }
    return blocks;
  }

  function renderCta(g: NavGroup, closeOnClick?: () => void) {
    if (!g.cta) return null;
    return (
      <a
        key={`cta-${g.title ?? g.links[0].label}`}
        href={g.cta.href}
        className="vt-dd-cta"
        onClick={(e) => {
          navClick(e, g.cta!.href);
          closeOnClick?.();
        }}
      >
        {g.cta.label}
      </a>
    );
  }

  return (
    <header
      className={`vt-header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
    >
      <nav className={`vt-nav${scrolled ? " scrolled" : ""}`}>
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              window.location.href = "/";
            }
          }}
          className="vt-logo"
        >
          <Image
            src="/logo-venmer.png"
            alt="VenmerTech"
            width={42}
            height={42}
            priority
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

        <div className="vt-nav-center" ref={navCenterRef}>
          {NAV_DROPDOWNS.map((d) => (
            <div
              key={d.label}
              className={`vt-dd${openDropdown === d.label ? " open" : ""}`}
            >
              <button
                className="vt-dd-trigger"
                aria-haspopup="true"
                aria-expanded={openDropdown === d.label}
                onClick={() =>
                  setOpenDropdown(openDropdown === d.label ? null : d.label)
                }
              >
                {d.label}
                <DropdownCaret />
              </button>
              <div className="vt-dd-panel">
                <div className="vt-dd-groups">
                  {d.groups.flatMap((g) => {
                    const blocks = g.title
                      ? [{ title: g.title, links: g.links }]
                      : buildBlocks(g);
                    return blocks.map((b, bi) => (
                      <div
                        className="vt-dd-block"
                        key={`${g.title ?? "links"}-${bi}`}
                      >
                        {b.title && (
                          <p className="vt-dd-group-title">{b.title}</p>
                        )}
                        {b.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            className="vt-dd-link"
                            onClick={(e) => navClick(e, l.href)}
                          >
                            <span className="vt-dd-link-label">{l.label}</span>
                            {l.desc && (
                              <span className="vt-dd-link-desc">{l.desc}</span>
                            )}
                          </a>
                        ))}
                      </div>
                    ));
                  })}
                </div>
                {d.groups.map((g) => renderCta(g))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="vt-btn-nav"
          onClick={() => handleHashNav("#contact")}
        >
          Get in Touch
        </button>
        <button
          className={`vt-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="vt-mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div
        className={`vt-mobile-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        id="vt-mobile-menu"
        className={`vt-mobile-menu${menuOpen ? " open" : ""}`}
      >
        {NAV_DROPDOWNS.map((d: NavDropdown) => (
          <div className="vt-mobile-dd" key={d.label}>
            <button
              className="vt-mobile-dd-toggle"
              onClick={() =>
                setOpenMobile(openMobile === d.label ? null : d.label)
              }
              aria-expanded={openMobile === d.label}
            >
              {d.label}
              <MobileChevron />
            </button>
            <div
              className={`vt-mobile-dd-body${openMobile === d.label ? " open" : ""}`}
            >
              {d.groups.map((g) => (
                <div
                  className="vt-mobile-dd-group"
                  key={g.title ?? g.links[0].label}
                >
                  {g.title && (
                    <p className="vt-mobile-dd-group-title">{g.title}</p>
                  )}
                  {g.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="vt-mobile-sub"
                      onClick={(e) => {
                        navClick(e, l.href);
                        setMenuOpen(false);
                      }}
                    >
                      {l.label}
                      {l.desc && (
                        <span className="vt-mobile-link-desc">{l.desc}</span>
                      )}
                    </a>
                  ))}
                  {g.cta && (
                    <a
                      href={g.cta.href}
                      className="vt-mobile-sub vt-mobile-sub-cta"
                      onClick={(e) => {
                        navClick(e, g.cta!.href);
                        setMenuOpen(false);
                      }}
                    >
                      {g.cta.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <a
          href="#contact"
          className="vt-mobile-link vt-mobile-cta"
          onClick={(e) => {
            e.preventDefault();
            handleHashNav("#contact");
            setMenuOpen(false);
          }}
        >
          Get in Touch →
        </a>
      </div>
    </header>
  );
}
