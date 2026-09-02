import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const t = translations[language];
  const localeMap = { fr: 'fr-FR', en: 'en-US', es: 'es-ES', zh: 'zh-CN' };
  const formattedDate = new Date().toLocaleDateString(localeMap[language] || 'fr-FR');

  return (
    <>
      <SEO title={`${t.privacy_title} | Goltrand Boukoumou`} description={t.privacy_title} />
      <div className="container section">
        <div style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
          <nav aria-label={t.breadcrumb_aria_label} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)', marginBottom: 'var(--spacing-lg)' }}>
            <Link to="/">{t.nav_home}</Link> {'>'} <span>{t.nav_privacy}</span>
          </nav>
        </div>

        <div className="container" style={{ maxWidth: '800px', background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
          <h1>{t.privacy_title}</h1>
          <p style={{ color: 'var(--color-gray)', fontStyle: 'italic' }}>
            {t.privacy_last_updated} {formattedDate}
          </p>

          <h2>{t.privacy_section_1}</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            {t.privacy_data_collected}
          </p>

          <h2>{t.privacy_section_2}</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            {t.privacy_purpose}
          </p>

          <h2>{t.privacy_section_3}</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            {t.privacy_retention}
          </p>

          <h2>{t.privacy_section_4}</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            {t.privacy_rights} <a href="mailto:contact@goltrand-boukoumou.io">contact@goltrand-boukoumou.io</a>.
          </p>

          <h2>{t.privacy_section_5}</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            {t.privacy_cookies}
          </p>

          <h2>{t.privacy_section_6}</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            {t.privacy_hosting}
          </p>

          <h2>{t.privacy_section_7}</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            {t.privacy_contact_dpo} <a href="mailto:contact@goltrand-boukoumou.io">contact@goltrand-boukoumou.io</a>.
          </p>
        </div>
      </div>
    </>
  );
}