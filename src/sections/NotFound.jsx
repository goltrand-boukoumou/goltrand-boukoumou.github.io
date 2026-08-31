import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page non trouvée | Goltrand Boukoumou" description="La page que vous recherchez est introuvable. Retournez à l'accueil." />
      <div className="container section" style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
        <h2>Page introuvable</h2>
        <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-lg)', marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          La page que vous cherchez s'est égarée dans le cyberespace. Mais pas d'inquiétude, je peux vous aider à retrouver votre chemin.
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
          <Link to="/projets" className="btn btn-secondary">Voir mes projets</Link>
        </div>
      </div>
    </>
  );
}