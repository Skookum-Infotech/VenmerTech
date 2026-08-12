import Link from "next/link";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "../page.css";
import "./under-development.css";

export default function UnderDevelopment({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="vt-devel-page">
      <Header />
      <main className="vt-devel">
        <div className="vt-devel-inner">
          <p className="vt-devel-eyebrow">{eyebrow}</p>
          <h1 className="vt-devel-title">{title}</h1>
          <p className="vt-devel-desc">{description}</p>
          <div className="vt-devel-actions">
            <Link href="/" className="vt-devel-btn">
              Back to Home
            </Link>
            <Link href="/#contact" className="vt-devel-btn vt-devel-btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
