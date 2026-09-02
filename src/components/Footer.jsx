import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer style={{ background: 'var(--color-dark)', color: 'var(--color-white)', padding: 'var(--spacing-2xl) 0', marginTop: 'var(--spacing-2xl)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
        <div>
          <h3 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-md)' }}>Goltrand Boukoumou</h3>
          <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>
            {t.footer_desc}
          </p>
          <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
            <img src="/team-goltrand.webp" alt={t.profile_image_alt} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', background: '#475569' }} />
          </div>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-md)' }}>{t.footer_nav}</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <li><Link to="/" style={{ color: 'var(--color-gray)' }}>{t.nav_home}</Link></li>
            <li><Link to="/projets" style={{ color: 'var(--color-gray)' }}>{t.nav_projects}</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--color-gray)' }}>{t.nav_contact}</Link></li>
            <li><Link to="/politique-confidentialite" style={{ color: 'var(--color-gray)' }}>{t.nav_privacy}</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-md)' }}>{t.footer_social}</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
            <a href="https://github.com/goltrand-boukoumou" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-white)' }}>GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-white)' }}>LinkedIn</a>
          </div>
          <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>{t.footer_email} contact@goltrand-boukoumou.io</p>
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-xs)', marginBottom: 0 }}>
          &copy; {new Date().getFullYear()} Goltrand Boukoumou. {t.footer_rights}
        </p>
      </div>
    </footer>
  );
}
