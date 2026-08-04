"use client";

import Link from "next/link";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./page.css";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="vt-404-page">
      <Header />
      <main className="vt-404">
        <div className="vt-404-inner">
          <p className="vt-404-code">404</p>
          <h1 className="vt-404-title">Page Not Found</h1>
          <p className="vt-404-desc">
            The page you&apos;re looking for doesn&apos;t exist, may have been
            moved, or is still being built.
          </p>
          <Link href="/" className="vt-404-btn">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
