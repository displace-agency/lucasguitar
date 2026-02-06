import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TeachingMethod from './pages/TeachingMethod';
import ForKids from './pages/ForKids';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to handle global functionality inside Router context
const AppContent = () => {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);
  
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col bg-warm-bg text-warm-black font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/method" element={<TeachingMethod />} />
          <Route path="/for-kids" element={<ForKids />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      
      <WhatsAppButton isBannerVisible={isCookieBannerVisible} />
      <CookieBanner onVisibilityChange={setIsCookieBannerVisible} />
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  );
}

export default App;