import React from 'react';
import SEO from '../components/SEO.jsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function Map() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <SEO title={`${t.map_title} | Goltrand Boukoumou`} description={t.map_title} />
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1>{t.map_title}</h1>
          <div style={{ width: '100%', height: '400px', background: '#e5e7eb', borderRadius: 'var(--border-radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
            {t.map_placeholder}
          </div>
        </div>
      </section>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Goltrand Boukoumou Portfolio",
          "url": "https://goltrand-boukoumou.io",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Rue Imaginaire",
            "addressLocality": "Paris",
            "postalCode": "75001",
            "addressCountry": "FR"
          },
          "telephone": "+33 1 23 45 67 89",
          "image": "https://goltrand-boukoumou.io/og-image.jpg"
        }
        `}
      </script>
    </div>
  );
}
