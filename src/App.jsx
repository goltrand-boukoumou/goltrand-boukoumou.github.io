import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MobileCTA from './components/MobileCTA.jsx';
import Analytics from './components/Analytics.jsx';
import Home from './sections/Home.jsx';
import Projects from './sections/Projects.jsx';
import ProjectDetail from './sections/ProjectDetail.jsx';
import Map from './sections/Map.jsx';
import Contact from './sections/Contact.jsx';
import ThankYou from './sections/ThankYou.jsx';
import PrivacyPolicy from './sections/PrivacyPolicy.jsx';
import NotFound from './sections/NotFound.jsx';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <Navbar />
            <MobileCTA />
            <Analytics />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/projets/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/merci" element={<ThankYou />} />
              <Route path="/carte" element={<Map />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
