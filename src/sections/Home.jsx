import React from 'react';
import { Link } from 'react-router-dom';
import { projects, skills, testimonials, faqData } from '../data/portfolioData';
import SEO from '../components/SEO.jsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
      <SEO title={`${t.welcome} | Goltrand Boukoumou`} description={t.description} ogImage="/og-image.jpg" />
      <div>
        {/* 7. Fil d'Ariane */}
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
          <nav aria-label={t.breadcrumb_aria_label} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
            <Link to="/" style={{ color: 'var(--color-text)' }}>{t.nav_home}</Link>
          </nav>
        </div>

        {/* Hero / CTA sans scroll */}
        <section className="section" style={{ textAlign: 'center', paddingBottom: 'var(--spacing-xl)' }}>
          <div className="container">
            <h1 style={{ maxWidth: '800px', margin: '0 auto var(--spacing-md) auto' }}>
              {t.welcome}
            </h1>
            <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl) auto', color: 'var(--color-gray)', fontSize: 'var(--font-size-lg)' }}>
              {t.description}
            </p>
            {/* 13. CTA sans scroll */}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">{t.cta_start}</Link>
              <Link to="/projets" className="btn btn-secondary">{t.cta_explore}</Link>
            </div>
          </div>
        </section>

        {/* 19. Études de cas & Projets */}
        <section className="section" style={{ background: 'var(--color-white)' }}>
          <div className="container">
            <h2 className="section-title">{t.projects_title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1px))', gap: 'var(--spacing-xl)' }}>
              {projects.map((project) => {
                const projectText = project.translations?.[language] || project.translations?.fr;

                return (
                  <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {project.image ? (
                        <img src={project.image} alt={`${t.project_preview} ${projectText.title}`} style={{ height: '180px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-md)', width: '100%' }} />
                      ) : (
                        <div style={{ height: '180px', background: '#e2e8f0', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
                          <span>{t.project_preview} {projectText.title}</span>
                        </div>
                      )}
                      <h3>{projectText.title}</h3>
                      <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>{projectText.description}</p>
                      <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap', marginBottom: 'var(--spacing-md)' }}>
                        {project.technologies.map((tech, i) => (
                          <span key={i} style={{ background: '#eff6ff', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--font-size-xs)', fontWeight: '600' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to={`/projets/${project.id}`} className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                      {t.view_case_study}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t.skills_title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
              {skills.map((skill, index) => (
                <div key={index} className="card" style={{ padding: 'var(--spacing-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-xs)' }}>
                    <span style={{ fontWeight: '600' }}>{skill.name}</span>
                    <span style={{ color: 'var(--color-primary)' }}>{skill.level}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${skill.level}%`, height: '100%', background: 'var(--color-primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 20. Photo d'équipe / Profil */}
        <section className="section" style={{ background: 'var(--color-white)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-2xl)', alignItems: 'center' }}>
            <div>
              <h2>{t.about_title}</h2>
              <p>
                {t.about_text}
              </p>
              <p style={{ color: 'var(--color-gray)' }}>
                {t.about_text2}
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>{t.nav_contact}</Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '280px', height: '280px', margin: '0 auto', background: '#cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold' }}>
                {t.profile_photo_placeholder}
              </div>
              <p style={{ marginTop: 'var(--spacing-md)', fontWeight: '650' }}>Goltrand Boukoumou</p>
              <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>{t.profile_role}</p>
            </div>
          </div>
        </section>

        {/* 4. Avis clients (Schema.org) */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t.testimonials_title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
              {testimonials.map((testimonial) => {
                const testimonialText = testimonial.translations?.[language] || testimonial.translations?.fr;

                return (
                  <div key={testimonial.id} className="card" itemScope itemType="https://schema.org/Review">
                    <p itemProp="reviewBody" style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>{`“${testimonialText.content}”`}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#94a3b8' }}></div>
                      <div>
                        <span itemProp="name" style={{ display: 'block', fontWeight: 'bold' }}>{testimonial.name}</span>
                        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray)' }}>{testimonial.role} - {testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. FAQ (Schema FAQPage) */}
        <section className="section" style={{ background: 'var(--color-white)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="section-title">{t.faq_title}</h2>
            <div itemScope itemType="https://schema.org/FAQPage" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {faqData.map((faq, index) => {
                const faqText = faq.translations?.[language] || faq.translations?.fr;

                return (
                  <div key={index} className="card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" style={{ padding: 'var(--spacing-md)' }}>
                    <h3 itemProp="name" style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>{faqText.question}</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <div itemProp="text" style={{ color: 'var(--color-gray)' }}>{faqText.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
