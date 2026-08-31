import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

export default function Navbar() {
  return (
    <header style={{ background: 'var(--color-white)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <Link to="/" style={{ fontWeight: '700', fontSize: 'var(--font-size-lg)', color: 'var(--color-dark)' }}>
          Goltrand<span style={{ color: 'var(--color-primary)' }}>.Boukoumou</span>
        </Link>

        {/* Fil d'Ariane / Navigation */}
        <nav aria-label="Navigation principale" style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
          <Link to="/">Accueil</Link>
          <Link to="/projets">Projets</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
