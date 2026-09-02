import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <SEO title={`404 - ${t.not_found} | Goltrand Boukoumou`} description={t.not_found_desc} />
      <div className="container section" style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
        <h2>{t.not_found}</h2>
        <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-lg)', marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          {t.not_found_desc}
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">{t.back_home_404}</Link>
          <Link to="/projets" className="btn btn-secondary">{t.view_projects_404}</Link>
        </div>
      </div>
    </>
  );
}