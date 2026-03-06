import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { trackCTAClick } from '../hooks/useTracking';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[85vh] md:h-[75vh] lg:h-[90vh] min-h-[500px] max-h-[700px] md:max-h-[700px] lg:max-h-[900px] mt-[64px] lg:mt-[72px] overflow-hidden">

      {/* Background Video (Desktop/Tablet) */}
      <video
        className="hidden sm:block absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/guitar-couch-wide-landscape.avif"
      >
        <source src="/assets/improv-fullscreen-no-text.mp4" type="video/mp4" />
      </video>

      {/* Background Image Fallback (Mobile) */}
      <img
        src="/assets/guitar-couch-wide-landscape.avif"
        alt="Lucas Terhaar playing guitar"
        className="sm:hidden block absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(45,34,24,0.55)]" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full max-w-site mx-auto px-4 md:px-8 lg:px-[clamp(24px,4vw,80px)] pb-8 md:pb-12 lg:pb-[clamp(48px,6vw,80px)]">

        {/* Label */}
        <p className="font-sans font-bold text-[11px] uppercase tracking-[1.5px] text-amber mb-4">
          {t('hero.label')}
        </p>

        {/* Heading */}
        <h1 className="font-serif text-white text-[clamp(2.5rem,2.5rem+3vw,4.5rem)] leading-[1.05] max-w-[700px] mb-6" dangerouslySetInnerHTML={{ __html: t('hero.heading') }} />

        {/* Description */}
        <p className="font-sans text-[clamp(1rem,1rem+0.3vw,1.25rem)] text-white/75 max-w-[520px] leading-[1.6] mb-8">
          {t('hero.desc')}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-auto" onClick={() => trackCTAClick('Book Free Trial - Hero', '/contact')}>
             <button className="w-full sm:w-auto bg-brown border-2 border-transparent rounded-md px-8 py-4 text-white font-sans text-[14px] font-medium min-h-[48px] hover:bg-brown-hover transition-colors duration-200">
                {t('hero.cta')}
             </button>
          </Link>
          <Link to="/pricing" className="w-full sm:w-auto" onClick={() => trackCTAClick('View Pricing - Hero', '/pricing')}>
             <button className="w-full sm:w-auto bg-transparent border-2 border-white rounded-full px-7 py-[14px] text-white font-sans text-[13px] font-medium min-h-[48px] hover:bg-white hover:text-warm-black transition-all duration-200">
                {t('hero.viewPricing')}
             </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;
