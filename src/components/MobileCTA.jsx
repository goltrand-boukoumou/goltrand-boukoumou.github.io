import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function MobileCTA() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="cta-mobile">
      <Link to="/contact" className="btn btn-primary" style={{ boxShadow: 'var(--shadow-xl)', borderRadius: '50px', padding: '0.75rem 1.5rem' }}>
        {t.mobile_contact}
      </Link>
    </div>
  );
}
