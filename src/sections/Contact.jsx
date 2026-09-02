import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function Contact() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
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
      <SEO title={`${t.nav_contact} | Goltrand Boukoumou`} description={t.contact_seo_description} />
      <div>
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
          <nav aria-label={t.breadcrumb_aria_label} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
            <Link to="/">{t.nav_home}</Link> {'>'} <span>{t.nav_contact}</span>
          </nav>
        </div>

        <section className="section">
          <div className="container" style={{ maxWidth: '700px' }}>
            <h1>{t.contact_title}</h1>
            <p style={{ color: 'var(--color-gray)' }}>
              {t.contact_subtitle}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  {t.form_name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid #cbd5e1', background: 'var(--color-bg-secondary)', color: 'var(--color-text)' }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  {t.form_email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid #cbd5e1', background: 'var(--color-bg-secondary)', color: 'var(--color-text)' }}
                />
              </div>

              <div>
                <label htmlFor="subject" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  {t.form_subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid #cbd5e1', background: 'var(--color-bg-secondary)', color: 'var(--color-text)' }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600' }}>
                  {t.form_message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid #cbd5e1', resize: 'vertical', background: 'var(--color-bg-secondary)', color: 'var(--color-text)' }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: 'var(--spacing-md)', fontSize: 'var(--font-size-base)' }}>
                {t.form_submit}
              </button>

              <p style={{ textAlign: 'center', color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>
                {t.contact_response_time}
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
