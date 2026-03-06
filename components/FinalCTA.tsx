import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { trackCTAClick } from '../hooks/useTracking';

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-warm-bg text-center py-[clamp(4rem,10vw,8rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-[700px] mx-auto">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-4">
          {t('finalCTA.label')}
        </p>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black mb-5">
          {t('finalCTA.heading')}
        </h2>
        <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-warm-gray max-w-[500px] mx-auto mb-8">
          {t('finalCTA.desc')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="w-full sm:w-auto" onClick={() => trackCTAClick('Book Free Trial - Final CTA', '/contact')}>
            <Button variant="primary" className="w-full sm:w-auto px-9 py-4 text-[14px]">
              {t('finalCTA.cta')}
            </Button>
          </Link>
          <Link to="/pricing" className="w-full sm:w-auto" onClick={() => trackCTAClick('View Pricing - Final CTA', '/pricing')}>
             <Button variant="outline" className="w-full sm:w-auto px-7 py-[14px]">
               {t('finalCTA.viewPricing')}
             </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
