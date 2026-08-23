"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang, useTheme } from "@/lib/providers";

export default function Navbar() {
  const { t, lang, nextLang, cycleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const navItems = [
    { href: "/projects", label: t.navbar.projects },
    { href: "/education", label: t.navbar.education },
  ];

  const close = () => setOpen(false);

  const langButton = (
    <button type="button" onClick={cycleLang} className="pill-btn lang-btn">
      {lang.toUpperCase()} → {nextLang.toUpperCase()}
    </button>
  );

  const themeButton = (
    <button type="button" onClick={toggleTheme} className="pill-btn theme-btn">
      {theme === "dark" ? "◑" : "◐"} {t.navbar.theme}
    </button>
  );

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-pill" onClick={close}>
          fer@alexandru<span className="prompt">:~$</span>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          {langButton}
          {themeButton}
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={t.navbar.menu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="nav-toggle-box" aria-hidden="true">
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </span>
        </button>
      </div>

      {/* Collapsed rather than unmounted so the panel can animate; inert keeps
          its links and buttons out of the tab order while it is closed. */}
      <div id="mobile-menu" className="mobile-menu" data-open={open} inert={!open}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={close}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-actions">
            {langButton}
            {themeButton}
          </div>
        </div>
      </div>
    </header>
  );
}
