import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import translations from '../data/translations.json';
import '../styles/global.css';

export default function Navbar() {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  return (
    <>
      <header style={{ background: 'var(--color-bg)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          {/* Logo */}
          <Link to="/" style={{ fontWeight: '700', fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>
            Goltrand<span style={{ color: 'var(--color-primary)' }}>.Boukoumou</span>
          </Link>

          {/* Navigation + Sélecteurs */}
          <nav aria-label={t.main_nav_aria_label} style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
            <Link to="/" style={{ color: 'var(--color-text)' }}>{t.nav_home}</Link>
            <Link to="/projets" style={{ color: 'var(--color-text)' }}>{t.nav_projects}</Link>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>{t.nav_contact}</Link>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={t.theme_toggle_aria}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
                color: 'var(--color-text)'
              }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Language selector */}
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              style={{
                background: 'var(--color-bg-secondary)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--border-radius-sm)',
                padding: '0.25rem 0.5rem'
              }}
              aria-label={t.language_select_aria}
            >
              <option value="fr">{t.lang_fr}</option>
              <option value="en">{t.lang_en}</option>
              <option value="es">{t.lang_es}</option>
              <option value="zh">{t.lang_zh}</option>
            </select>
          </nav>
        </div>
      </header>
    </>
  );
}
