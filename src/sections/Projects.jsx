import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';

import SEO from '../components/SEO.jsx';

export default function Projects() {
  return (
    <>
      <SEO title="Projets | Goltrand Boukoumou" description="Découvrez les projets réalisés par Goltrand Boukoumou, développeur full‑stack et designer UI/UX." ogImage="/og-image.jpg" />
    <div>
      {/* 7. Fil d'Ariane */}
      <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
        <nav aria-label="Fil d'Ariane" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
          <Link to="/">Accueil</Link> {'>'} <span>Projets</span>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <h1 className="section-title">Tous mes projets</h1>
          <p style={{ textAlign: 'center', color: 'var(--color-gray)', marginBottom: 'var(--spacing-2xl)' }}>
            Une sélection de mes réalisations alliant design moderne et excellence technique.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {projects.map((project) => (
              <article key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                {project.image ? (
                  <img src={project.image} alt={`Capture d’écran du projet ${project.title}`} style={{ height: '200px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-md)', width: '100%' }} />
                ) : (
                  <div style={{ height: '200px', background: '#e2e8f0', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
                    Aperçu visuel
                  </div>
                )}
                <h2 style={{ fontSize: 'var(--font-size-xl)' }}>{project.title}</h2>
                <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>{project.description}</p>

                <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap', margin: 'var(--spacing-md) 0' }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{ background: '#eff6ff', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--font-size-xs)', fontWeight: '600' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--spacing-sm)' }}>
                  <Link to={`/projets/${project.id}`} className="btn btn-primary" style={{ flex: 1 }}>Détails</Link>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      Démo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
