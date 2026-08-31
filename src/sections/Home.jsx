import React from 'react';
import { Link } from 'react-router-dom';
import { projects, skills, testimonials, faqData, teamMembers } from '../data/portfolioData';
import SEO from '../components/SEO.jsx';

export default function Home() {
  return (
    <>
      <SEO title="Accueil | Goltrand Boukoumou" description="Portfolio de Goltrand Boukoumou – développeur full‑stack et designer UI/UX. Découvrez ses projets, compétences et contactez‑le." ogImage="/og-image.jpg" />
    <div>
      {/* 7. Fil d'Ariane */}
      <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-lg)' }}>
        <nav aria-label="Fil d'Ariane" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
          <Link to="/">Accueil</Link>
        </nav>
      </div>

      {/* Hero / CTA sans scroll */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: 'var(--spacing-xl)' }}>
        <div className="container">
          <h1 style={{ maxWidth: '800px', margin: '0 auto var(--spacing-md) auto' }}>
            Conception & Développement d'Expériences Web Immersives
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl) auto', color: 'var(--color-gray)', fontSize: 'var(--font-size-lg)' }}>
            Je suis Goltrand Boukoumou, développeur JavaScript et designer UI/UX. Je transforme vos idées en applications web modernes, performantes et centrées sur l'utilisateur.
          </p>
          {/* 13. CTA sans scroll */}
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Démarrer un projet</Link>
            <Link to="/projets" className="btn btn-secondary">Explorer mes travaux</Link>
          </div>
        </div>
      </section>

      {/* 19. Études de cas & Projets */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <h2 className="section-title">Études de cas & Projets récents</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1px))', gap: 'var(--spacing-xl)' }}>
            {projects.map((project) => (
              <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* 14. alt text images */}
                  {project.image ? (
                    <img src={project.image} alt={`Capture d'écran du projet ${project.title}`} style={{ height: '180px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-md)', width: '100%' }} />
                  ) : (
                    <div style={{ height: '180px', background: '#e2e8f0', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
                      <span>Aperçu {project.title}</span>
                    </div>
                  )}
                  <h3>{project.title}</h3>
                  <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>{project.description}</p>
                  <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap', marginBottom: 'var(--spacing-md)' }}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={{ background: '#eff6ff', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--font-size-xs)', fontWeight: '600' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={`/projets/${project.id}`} className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                  Voir l'étude de cas
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Compétences Techniques</h2>
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
            <h2>À propos de moi</h2>
            <p>
              Passionné par le code propre, l'accessibilité et la performance web, j'accompagne les startups et entreprises dans la création d'interfaces robustes et esthétiques.
            </p>
            <p style={{ color: 'var(--color-gray)' }}>
              Mon approche combine rigueur technique en JavaScript/React et sensibilité artistique pour offrir des expériences mémorables.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>Me contacter</Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '280px', height: '280px', margin: '0 auto', background: '#cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold' }}>
              Photo Goltrand Boukoumou
            </div>
            <p style={{ marginTop: 'var(--spacing-md)', fontWeight: '650' }}>Goltrand Boukoumou</p>
            <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>Développeur & Designer</p>
          </div>
        </div>
      </section>

      {/* 4. Avis clients (Schema.org) */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Ce que disent mes clients</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
            {testimonials.map((t) => (
              <div key={t.id} className="card" itemScope itemType="https://schema.org/Review">
                <p itemProp="reviewBody" style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>"{t.content}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#94a3b8' }}></div>
                  <div>
                    <span itemProp="name" style={{ display: 'block', fontWeight: 'bold' }}>{t.name}</span>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray)' }}>{t.role} - {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ (Schema FAQPage) */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Questions Fréquentes (FAQ)</h2>
          <div itemScope itemType="https://schema.org/FAQPage" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {faqData.map((faq, index) => (
              <div key={index} className="card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" style={{ padding: 'var(--spacing-md)' }}>
                <h3 itemProp="name" style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>{faq.question}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" style={{ color: 'var(--color-gray)' }}>{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
