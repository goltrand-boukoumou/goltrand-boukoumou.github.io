import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function ThankYou() {
  return (
    <>
      <SEO title="Merci | Goltrand Boukoumou" description="Merci pour votre message. Je vous recontacte rapidement." />
      <div className="container section" style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h1>Merci pour votre message ! 🎉</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-gray)' }}>
        Votre demande a bien été prise en compte. Je vous recontacte dans les plus brefs délais.
      </p>
      <p>
        En attendant, n'hésitez pas à explorer mes autres projets ou à revenir à l'accueil.
      </p>
      <div style={{ marginTop: 'var(--spacing-xl)', display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
        <Link to="/projets" className="btn btn-secondary">Voir d'autres projets</Link>
      </div>
    </div>
    </>
  );
}
