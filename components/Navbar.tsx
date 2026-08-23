"use client";

import Link from "next/link";
import { useLang, useTheme } from "@/lib/providers";

export default function Navbar() {
  const { t, lang, nextLang, cycleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-pill">
          fer@alexandru<span className="prompt">:~$</span>
        </Link>

        <nav className="nav-links">
          <Link href="/projects" className="nav-link">
            {t.navbar.projects}
          </Link>
          <Link href="/education" className="nav-link">
            {t.navbar.education}
          </Link>
        </nav>

        <div className="header-actions">
          <button type="button" onClick={cycleLang} className="pill-btn lang-btn">
            {lang.toUpperCase()} → {nextLang.toUpperCase()}
          </button>
          <button type="button" onClick={toggleTheme} className="pill-btn theme-btn">
            {theme === "dark" ? "◑" : "◐"} {t.navbar.theme}
          </button>
        </div>
      </div>
    </header>
  );
}
