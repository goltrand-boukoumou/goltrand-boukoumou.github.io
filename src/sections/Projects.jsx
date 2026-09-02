import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';
import SEO from '../components/SEO.jsx';

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <SEO title={`${t.projects_breadcrumb_title} | Goltrand Boukoumou`} description={t.projects_intro} ogImage="/og-image.jpg" />
      <div>
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
          <nav aria-label={t.breadcrumb_aria_label} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
            <Link to="/">{t.nav_home}</Link> {'>'} <span>{t.projects_breadcrumb_title}</span>
          </nav>
        </div>

        <section className="section">
          <div className="container">
            <h1 className="section-title">{t.projects_all}</h1>
            <p style={{ textAlign: 'center', color: 'var(--color-gray)', marginBottom: 'var(--spacing-2xl)' }}>
              {t.projects_intro}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-xl)' }}>
              {projects.map((project) => {
                const projectText = project.translations?.[language] || project.translations?.fr;

                return (
                  <article key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    {project.image ? (
                      <img src={project.image} alt={`${t.project_preview} ${projectText.title}`} style={{ height: '200px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-md)', width: '100%' }} />
                    ) : (
                      <div style={{ height: '200px', background: '#e2e8f0', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
                        {t.projects_preview}
                      </div>
                    )}
                    <h2 style={{ fontSize: 'var(--font-size-xl)' }}>{projectText.title}</h2>
                    <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>{projectText.description}</p>

                    <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap', margin: 'var(--spacing-md) 0' }}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} style={{ background: '#eff6ff', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--font-size-xs)', fontWeight: '600' }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--spacing-sm)' }}>
                      <Link to={`/projets/${project.id}`} className="btn btn-primary" style={{ flex: 1 }}>{t.project_details_button}</Link>
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                          {t.project_demo_short}
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
