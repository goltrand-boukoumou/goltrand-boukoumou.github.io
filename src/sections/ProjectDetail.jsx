import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import SEO from '../components/SEO.jsx';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
    <>
      <SEO title={`${project.title} | Étude de cas`} description={project.longDescription} ogImage={project.image} />
      <div className="container section">
        <h1>Projet introuvable</h1>
        <p>Le projet que vous cherchez n'existe pas.</p>
        <Link to="/projets" className="btn btn-primary">Retour aux projets</Link>
      </div>
      </>
    );
  }

  return (
    <>
      <SEO title={`${project.title} | Étude de cas`} description={project.longDescription} ogImage={project.image} />
    <div>
      {/* 7. Fil d'Ariane */}
      <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
        <nav aria-label="Fil d'Ariane" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
          <Link to="/">Accueil</Link> {'>'} <Link to="/projets">Projets</Link> {'>'} <span>{project.title}</span>
        </nav>
      </div>

      <article className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1>{project.title}</h1>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-gray)' }}>{project.longDescription}</p>

          <div style={{ margin: 'var(--spacing-xl) 0', height: '350px', background: '#e2e8f0', borderRadius: 'var(--border-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
            Image principale du projet
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
            <div>
              <h3>Problème</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
            <div>
              <h3>Impact</h3>
              <p>{project.impact}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xl)' }}>
            {project.technologies.map((tech, i) => (
              <span key={i} style={{ background: '#eff6ff', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '12px', fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>
                {tech}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Code source GitHub
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Voir la démo
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
    </>
  );
}
