import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowITeach from './pages/HowITeach';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { trackPageView, trackScrollDepth } from './hooks/useTracking';

// Route-to-page mapping for tracking
const PAGE_MAP: Record<string, { type: string; title: string }> = {
  '/': { type: 'home', title: 'Home' },
  '/how-i-teach': { type: 'how-i-teach', title: 'How I Teach' },
  '/pricing': { type: 'pricing', title: 'Pricing' },
  '/contact': { type: 'contact', title: 'Contact' },
};

// Helper component to scroll to top and track page views on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const page = PAGE_MAP[pathname] || { type: 'other', title: document.title };
    trackPageView(page.type, page.title);
  }, [pathname]);

  return null;
};

// Component to handle global functionality inside Router context
const AppContent = () => {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);
  const { pathname } = useLocation();

  // Initialize scroll animations
  useScrollAnimation();

  // Scroll depth tracking
  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const fired = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);
      const page = PAGE_MAP[pathname] || { type: 'other' };
      thresholds.forEach(t => {
        if (percent >= t && !fired.has(t)) {
          fired.add(t);
          trackScrollDepth(`${t}%`, page.type);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-warm-bg text-warm-black font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-warm-black focus:rounded-md font-bold text-sm">
        Skip to Content
      </a>
      <Navbar />

      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-i-teach" element={<HowITeach />} />
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
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <AppContent />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;