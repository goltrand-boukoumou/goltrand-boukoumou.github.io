import { useEffect } from 'react';

// Simple component that injects Google Analytics script.
// Replace 'G-XXXXXXXXXX' with the real GA Measurement ID.
export default function Analytics() {
  useEffect(() => {
    // Load gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);

    // Initialise GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }, []);

  return null;
}
