import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileCTA() {
  return (
    <div className="cta-mobile">
      <Link to="/contact" className="btn btn-primary" style={{ boxShadow: 'var(--shadow-xl)', borderRadius: '50px', padding: '0.75rem 1.5rem' }}>
        Contactez-moi
      </Link>
    </div>
  );
}
