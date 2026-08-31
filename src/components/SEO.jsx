import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO helper component – injects common meta tags per page.
 * Props:
 *   title: string – page title (unique per page)
 *   description: string – meta description
 *   ogImage: string – URL to Open Graph image (absolute or relative)
 */
export default function SEO({ title, description, ogImage }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
