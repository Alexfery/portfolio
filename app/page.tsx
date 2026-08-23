"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/providers";
import { NAME } from "@/lib/translations";

export default function HomePage() {
  const { t } = useLang();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(NAME.slice(0, i));
      if (i >= NAME.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <p className="hero-eyebrow">$ whoami</p>
      <h1 className="hero-title">
        {typed}
        <span className="caret" />
      </h1>
      <div className="hero-grid">
        <p className="hero-desc-card">
          {t.hero.desc1}
          <b>{t.hero.studies}</b>
          {t.hero.desc2}
          <b className="tag-a">{t.hero.cyber}</b>
          {t.hero.desc3}
          <b className="tag-b">{t.hero.quantum}</b>
          {t.hero.mid}
          <b className="tag-a">{t.hero.web}</b>
          {t.hero.desc4}
        </p>
        <div className="hero-cta-col">
          <a href="https://github.com/Alexfery" target="_blank" rel="noreferrer" className="cta-pill primary">
            <span>GitHub</span>
            <span>↗</span>
          </a>
          <a href="mailto:fer_alexandru_virgil@outlook.com" className="cta-pill secondary">
            <span>Email</span>
            <span>→</span>
          </a>
          <a href="/assets/Fer_Alexandru_Virgil_CV.pdf" target="_blank" download className="cta-pill tertiary">
            <span>{t.hero.btn_cv}</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
