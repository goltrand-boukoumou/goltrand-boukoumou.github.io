import React from 'react';
import SEO from '../components/SEO.jsx';

export default function Map() {
  return (
    <div>
      <SEO title="Carte & Itinéraire | Goltrand Boukoumou" description="Carte interactive et itinéraire pour rejoindre le bureau de Goltrand Boukoumou." />
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1>Carte & Itinéraire</h1>
          {/* Placeholder map – replace with real map library (e.g., Leaflet) */}
          <div style={{ width: '100%', height: '400px', background: '#e5e7eb', borderRadius: 'var(--border-radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
            Map placeholder
          </div>
        </div>
      </section>
      {/* LocalBusiness schema – minimal implementation */}
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
