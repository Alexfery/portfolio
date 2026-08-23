"use client";

import { useLang } from "@/lib/providers";

export default function EducationPage() {
  const { t } = useLang();

  return (
    <>
      <section id="skills" className="section" style={{ paddingTop: "48px" }}>
        <h2 className="section-title">
          <span className="tag">~/</span>
          {t.skills.title}
        </h2>
        <div className="skills-grid">
          {t.skills.groups.map((group) => (
            <div key={group.label} className="skills-card">
              <p className="skills-label">{group.label}</p>
              <div className="chip-row">
                {group.items.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <h2 className="section-title">
          <span className="tag">~/</span>
          {t.certifications.title}
        </h2>
        <div className="card-grid">
          {t.certifications.items.map((item) => (
            <article key={item.title} className="card-glass">
              <span className="badge badge-outline">{item.issuer}</span>
              <h3 className="card-title-sm">{item.title}</h3>
              <p className="card-desc">{item.detail}</p>
              <a href={`/${item.file}`} target="_blank" rel="noreferrer" className="card-link">
                {item.viewLabel} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">
          <span className="tag">~/</span>
          {t.education.title}
        </h2>
        <div className="edu-panel">
          {t.education.items.map((item) => (
            <div key={item.title} className="edu-row">
              <span className="edu-period">{item.period}</span>
              <div>
                <h3 className="edu-title">{item.title}</h3>
                <p className="edu-place">
                  {item.place} ·{" "}
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.urlLabel}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="languages" className="section">
        <h2 className="section-title">
          <span className="tag">~/</span>
          {t.languages.title}
        </h2>
        <div className="lang-panel">
          {t.languages.items.map((item) => (
            <div key={item.name} className="lang-row">
              <span className="lang-name">{item.name}</span>
              <div className="lang-track">
                <div className="lang-fill" style={{ width: `${item.pct}%` }} />
              </div>
              <span className="lang-level">{item.level}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
