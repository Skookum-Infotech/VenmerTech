"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS, handleHashNav } from "../nav-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  function navClick(e: React.MouseEvent, href: string) {
    if (href.startsWith("#")) { e.preventDefault(); handleHashNav(href); }
  }

  return (
    <header>
      <nav className={`vt-nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="vt-logo">
          <div className="vt-logo-mark">VT</div>
          VenmerTech
        </a>
        <div className="vt-nav-links">
          {NAV_ITEMS.map((n) => (
            <a key={n.label} href={n.href} onClick={(e) => navClick(e, n.href)} className="vt-nav-link">
              {n.label}
            </a>
          ))}
          <button className="vt-btn-nav" onClick={() => handleHashNav("#contact")}>Get in Touch</button>
        </div>
        <button className={`vt-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`vt-mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((n) => (
          <a key={n.label} href={n.href} className="vt-mobile-link" onClick={(e) => { navClick(e, n.href); setMenuOpen(false); }}>{n.label}</a>
        ))}
        <a href="#contact" className="vt-mobile-link" onClick={(e) => { e.preventDefault(); handleHashNav("#contact"); setMenuOpen(false); }}>Get in Touch →</a>
      </div>
    </header>
  );
}
