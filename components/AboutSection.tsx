import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { trackCTAClick } from '../hooks/useTracking';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-[clamp(16px,2vw,24px)] items-center">
        {/* Image - 5 cols desktop, full mobile */}
        <div className="md:col-span-5 w-full order-1 md:order-1 mb-6 md:mb-0">
          <img
            src="/assets/portrait-headshot-blue-shirt.avif"
            alt="Lucas Terhaar"
            loading="lazy"
            className="w-full aspect-[3/4] object-cover rounded-lg"
          />
        </div>

        {/* Text - 6 cols desktop, full mobile */}
        <div className="md:col-span-6 md:col-start-7 order-2 md:order-2">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-4">
            {t('about.label')}
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black mb-6">
            {t('about.heading')}
          </h2>
          <div className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-warm-black space-y-4 mb-8">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>
          <Link to="/contact" onClick={() => trackCTAClick('Book Trial - About', '/contact')}>
            <Button variant="primary">
              {t('about.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
