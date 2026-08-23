"use client";

import { useLang } from "@/lib/providers";

export default function ContactFooter() {
  const { t } = useLang();

  return (
    <footer id="contact" className="contact-footer">
      <div className="contact-wrap">
        <h2 className="section-title">
          <span className="tag">~/</span>
          {t.contact.title}
        </h2>
        <div className="contact-panel">
          <p className="contact-prompt">$ {t.contact.prompt}</p>
          <p className="contact-heading">{t.contact.heading}</p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:fer_alexandru_virgil@outlook.com" className="contact-value">
                fer_alexandru_virgil@outlook.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">{t.contact.phoneLabel}</span>
              <a href="tel:+40753128888" className="contact-value">
                (+40) 753 128 888
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a href="https://github.com/Alexfery" target="_blank" rel="noreferrer" className="contact-value">
                github.com/Alexfery ↗
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Web</span>
              <a href="https://feralexandru.com" target="_blank" rel="noreferrer" className="contact-value">
                feralexandru.com ↗
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <p>© 2026 Fer Alexandru Virgil · Cluj-Napoca, RO</p>
      </div>
    </footer>
  );
}
