import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function ThankYou() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <SEO title={`${t.thank_you} | Goltrand Boukoumou`} description={t.thank_you_desc} />
      <div className="container section" style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h1>{t.thank_you} 🎉</h1>
        <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-gray)' }}>
          {t.thank_you_desc}
        </p>
        <p>
          {t.thank_you_waiting}
        </p>
        <div style={{ marginTop: 'var(--spacing-xl)', display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">{t.back_home}</Link>
          <Link to="/projets" className="btn btn-secondary">{t.see_projects}</Link>
        </div>
      </div>
    </>
  );
}
