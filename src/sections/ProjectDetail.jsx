import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import SEO from '../components/SEO.jsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function ProjectDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <SEO title={`${t.project_not_found} | Étude de cas`} description={t.project_not_found_desc} />
        <div className="container section">
          <h1>{t.project_not_found}</h1>
          <p>{t.project_not_found_desc}</p>
          <Link to="/projets" className="btn btn-primary">{t.back_to_projects}</Link>
        </div>
      </>
    );
  }

  const projectText = project.translations?.[language] || project.translations?.fr;

  return (
    <>
      <SEO title={`${projectText.title} | ${t.project_page_title}`} description={projectText.longDescription} ogImage={project.image} />
      <div>
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
          <nav aria-label={t.breadcrumb_aria_label} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
            <Link to="/">{t.home_breadcrumb}</Link> {'>'} <Link to="/projets">{t.projects_breadcrumb}</Link> {'>'} <span>{projectText.title}</span>
          </nav>
        </div>

        <article className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <h1>{projectText.title}</h1>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-gray)' }}>{projectText.longDescription}</p>

            <div style={{ margin: 'var(--spacing-xl) 0', height: '350px', background: '#e2e8f0', borderRadius: 'var(--border-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
              {t.project_placeholder}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
              <div>
                <h3>{t.project_problem}</h3>
                <p>{projectText.problem}</p>
              </div>
              <div>
                <h3>{t.project_solution}</h3>
                <p>{projectText.solution}</p>
              </div>
              <div>
                <h3>{t.project_impact}</h3>
                <p>{projectText.impact}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ background: '#eff6ff', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '12px', fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  {t.project_source}
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {t.project_demo}
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
