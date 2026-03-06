import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { trackCTAClick } from '../hooks/useTracking';

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-404 flex flex-col items-center justify-center text-center min-h-[calc(100vh-72px-200px)] px-4 py-[clamp(3rem,8vw,6rem)] mt-[64px] lg:mt-[72px]">

      {/* Large Watermark Number */}
      <span className="font-serif text-[clamp(6rem,6rem+8vw,12rem)] text-[rgba(138,56,25,0.1)] leading-none select-none -mb-5 md:-mb-10">
        404
      </span>

      {/* Heading */}
      <h1 className="font-serif text-[clamp(1.5rem,2vw,2.5rem)] text-warm-black mb-4 z-10">
        {t('notFound.heading')}
      </h1>

      {/* Description */}
      <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-warm-gray max-w-[460px] leading-[1.6] mb-8 z-10">
        {t('notFound.desc')}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap z-10 w-full sm:w-auto">
        <Link to="/" className="w-full sm:w-auto" onClick={() => trackCTAClick('Back Home - 404', '/')}>
          <Button variant="primary" className="w-full sm:w-auto">
            {t('notFound.backHome')}
          </Button>
        </Link>
        <Link to="/how-i-teach" className="w-full sm:w-auto" onClick={() => trackCTAClick('View Lessons - 404', '/how-i-teach')}>
           <button className="w-full sm:w-auto bg-transparent border-2 border-brown rounded-full px-7 py-[13px] text-brown font-sans text-[13px] font-medium min-h-[44px] hover:bg-brown hover:text-white transition-all duration-200">
             {t('notFound.viewLessons')}
           </button>
        </Link>
        <Link to="/contact" className="w-full sm:w-auto" onClick={() => trackCTAClick('Contact Lucas - 404', '/contact')}>
          <Button variant="ghost" className="w-full sm:w-auto">
            {t('notFound.contactLucas')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
