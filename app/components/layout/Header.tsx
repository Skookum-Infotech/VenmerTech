"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_ITEMS, handleHashNav } from "../nav-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function navClick(e: React.MouseEvent, href: string) {
    if (href.startsWith("#")) { e.preventDefault(); handleHashNav(href); }
  }

  return (
    <header className={`vt-header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <nav className={`vt-nav${scrolled ? " scrolled" : ""}`}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
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
        </a>
        <div className="vt-nav-links">
          {NAV_ITEMS.map((n) => (
            <a key={n.label} href={n.href} onClick={(e) => navClick(e, n.href)} className="vt-nav-link">
              {n.label}
            </a>
          ))}
          <button className="vt-btn-nav" onClick={() => handleHashNav("#contact")}>Get in Touch</button>
        </div>
        <button
          className={`vt-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="vt-mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`vt-mobile-backdrop${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
      <div id="vt-mobile-menu" className={`vt-mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="vt-mobile-meta">
          <div className="vt-mobile-brand">
            <div className="vt-logo vt-logo-mobile">
              <Image
                src="/logo-venmer.png"
                alt="VenmerTech"
                width={34}
                height={34}
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
            </div>          </div>
          <button className="vt-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">Close</button>
        </div>
        {NAV_ITEMS.map((n) => (
          <a key={n.label} href={n.href} className="vt-mobile-link" onClick={(e) => { navClick(e, n.href); setMenuOpen(false); }}>{n.label}</a>
        ))}
        <a href="#contact" className="vt-mobile-link" onClick={(e) => { e.preventDefault(); handleHashNav("#contact"); setMenuOpen(false); }}>Get in Touch →</a>
      </div>
    </header>
  );
}
