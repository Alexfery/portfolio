"use client";

import { useLang } from "@/lib/providers";

export default function ProjectsPage() {
  const { t } = useLang();

  return (
    <>
      <section id="projects" className="section" style={{ paddingTop: "48px" }}>
        <h2 className="section-title">
          <span className="tag">~/</span>
          {t.projects.title}
        </h2>
        <div className="card-grid">
          {t.projects.items.map((item) => (
            <article key={item.title} className="card-glass">
              <div className="badge-row">
                <span className="badge badge-solid">{item.badge}</span>
                <span className="card-tech">{item.tech}</span>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="card-link">
                  {item.linkLabel}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="websites" className="section">
        <h2 className="section-title">
          <span className="tag">~/</span>
          {t.websites.title}
        </h2>
        <div className="card-grid">
          {t.websites.items.map((item) => (
            <article key={item.title} className="card-glass">
              <div className="badge-row">
                <span className="badge badge-marine">{item.badge}</span>
                <span className="card-tech">{item.tech}</span>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="card-link">
                {item.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
