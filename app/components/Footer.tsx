"use client";

import { NAV_ITEMS, handleHashNav } from "./nav-data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--subtle)" }}>
      <div className="vt-footer">
        <a href="#" className="vt-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <div className="vt-logo-mark">VT</div>
          VenmerTech
        </a>
        <div className="vt-footer-links">
          {NAV_ITEMS.map((n) => (
            <a key={n.label} href={n.href} className="vt-footer-link" onClick={(e) => { if (n.href.startsWith("#")) { e.preventDefault(); handleHashNav(n.href); } }}>{n.label}</a>
          ))}
        </div>
        <p className="vt-copy">© {new Date().getFullYear()} Venmer Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
