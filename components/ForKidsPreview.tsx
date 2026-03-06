import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { trackCTAClick } from '../hooks/useTracking';

const ForKidsPreview: React.FC = () => {
  const { t, dict } = useLanguage();

  return (
    <section className="w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-[clamp(16px,2vw,24px)] items-center">

        {/* Text Content - Order 2 on mobile, Order 1 on Desktop */}
        <div className="order-2 md:order-1 md:col-span-6">
          <div className="inline-block bg-[rgba(232,111,58,0.12)] text-[#B85525] rounded-[20px] px-[14px] py-[6px] mb-5">
            <span className="font-sans text-[11px] font-semibold">{t('forKidsPreview.badge')}</span>
          </div>

          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black mb-5">
            {t('forKidsPreview.heading')}
          </h2>

          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-warm-gray mb-6">
            {t('forKidsPreview.desc')}
          </p>

          <ul className="space-y-3 mb-8">
            {dict.forKidsPreview.bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                 <div className="mt-1 flex-shrink-0 text-green">
                    <Check size={16} strokeWidth={3} />
                 </div>
                 <span className="font-sans text-[14px] text-warm-black">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/how-i-teach" onClick={() => trackCTAClick('Learn More - Kids Preview', '/how-i-teach')}>
              <Button variant="primary">{t('forKidsPreview.learnMore')}</Button>
            </Link>
            <Link to="/pricing" onClick={() => trackCTAClick('View Pricing - Kids Preview', '/pricing')}>
              <Button variant="ghost" className="px-0">{t('forKidsPreview.viewPricing')}</Button>
            </Link>
          </div>
        </div>

        {/* Photo - Order 1 on mobile, Order 2 on Desktop */}
        <div className="order-1 md:order-2 md:col-span-6 flex justify-center md:justify-end">
            <div className="w-full max-w-full aspect-[16/9] md:max-w-[360px] md:aspect-[9/16] rounded-lg overflow-hidden">
                 <img
                    className="w-full h-full object-cover"
                    src="/assets/nailah-kids-lesson.jpg"
                    alt="Lucas Terhaar teaching guitar"
                    loading="lazy"
                 />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ForKidsPreview;
