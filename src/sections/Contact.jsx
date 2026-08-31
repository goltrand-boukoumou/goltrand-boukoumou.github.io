import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/merci');
  };

  return (
    <>
      <SEO title="Contact | Goltrand Boukoumou" description="Contactez Goltrand Boukoumou pour discuter de votre projet web. Formulaire de contact et informations de contact." />
    <div>
      <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
        <nav aria-label="Fil d'Ariane" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
          <Link to="/">Accueil</Link> {'>'} <span>Contact</span>
        </nav>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <h1>Prenons contact</h1>
          <p style={{ color: 'var(--color-gray)' }}>
            Décrivez-moi votre projet et je reviendrai vers vous sous 24h. Tous les champs sont requis.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid #cbd5e1' }}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid #cbd5e1' }}
              />
            </div>

            <div>
              <label htmlFor="subject" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid #cbd5e1' }}
              />
            </div>

            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid #cbd5e1', resize: 'vertical' }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: 'var(--spacing-md)', fontSize: 'var(--font-size-base)' }}>
              Envoyer le message
            </button>

            {/* 15. Temps de réponse */}
            <p style={{ textAlign: 'center', color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>
              Temps de réponse habituel : sous 24h en jours ouvrés.
            </p>
          </form>
        </div>
      </section>
    </div>
    </>
  );
}
