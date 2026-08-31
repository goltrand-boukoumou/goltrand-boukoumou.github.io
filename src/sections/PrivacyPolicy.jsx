import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Politique de confidentialité | Goltrand Boukoumou" description="Politique de confidentialité (RGPD) pour le portfolio de Goltrand Boukoumou." />
      <div className="container section">
        <div style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
          <nav aria-label="Fil d'Ariane" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)', marginBottom: 'var(--spacing-lg)' }}>
            <Link to="/">Accueil</Link> {'>'} <span>Politique de confidentialité</span>
          </nav>
        </div>

        <div className="container" style={{ maxWidth: '800px', background: 'var(--color-white)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
          <h1>Politique de confidentialité (RGPD)</h1>
          <p style={{ color: 'var(--color-gray)', fontStyle: 'italic' }}>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <h2>1. Données collectées</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            Lorsque vous utilisez le formulaire de contact, je collecte votre nom, adresse email, sujet et message. Ces informations sont utilisées uniquement pour répondre à votre demande.
          </p>

          <h2>2. Finalités</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            Les données sont utilisées pour : vous recontacter, comprendre votre besoin, et proposer un devis ou une collaboration.
          </p>

          <h2>3. Durée de conservation</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            Vos données sont conservées pendant une durée maximale de 3 ans après le dernier contact.
          </p>

          <h2>4. Vos droits (RGPD)</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition concernant vos données. Pour exercer ces droits, contactez-moi à : <a href="mailto:contact@goltrand-boukoumou.io">contact@goltrand-boukoumou.io</a>.
          </p>

          <h2>5. Cookies</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking publicitaire n'est déposé.
          </p>

          <h2>6. Hébergement & Sécurité</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            Le site est hébergé sur une infrastructure sécurisée (Vercel/Netlify). Les communications sont chiffrées via HTTPS.
          </p>

          <h2>7. Contact DPO</h2>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-md)' }}>
            Pour toute question relative à la protection de vos données : <a href="mailto:contact@goltrand-boukoumou.io">contact@goltrand-boukoumou.io</a>.
          </p>
        </div>
      </div>
    </>
  );
}