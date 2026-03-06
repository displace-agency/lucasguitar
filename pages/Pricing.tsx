import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { trackCTAClick } from '../hooks/useTracking';

// --- Section 1: Hero ---
const PricingHero = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-warm-bg pt-[calc(72px+4rem)] pb-[3rem] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
      <div className="animate-on-scroll max-w-site mx-auto">
        <span className="inline-block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-4">{t('pricing.hero.label')}</span>
        <h1 className="font-serif text-[clamp(2.5rem,3vw,4rem)] leading-[1.1] text-warm-black mb-5 max-w-[600px] mx-auto">{t('pricing.hero.heading')}</h1>
        <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-warm-gray max-w-[500px] mx-auto leading-[1.6]">{t('pricing.hero.desc')}</p>
      </div>
    </section>
  );
};

// --- Section 2: What You Get ---
const ValueGrid = () => {
  const { dict } = useLanguage();
  const values = dict.pricing.valueGrid.items;

  return (
    <section className="animate-on-scroll w-full bg-warm-bg px-4 lg:px-[clamp(24px,4vw,80px)] pb-[clamp(3rem,6vw,5rem)]">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)]">
          {values.map((item, idx) => (
            <div key={idx} className="stagger-child col-span-1 lg:col-span-3 text-center px-4 py-6">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-green flex items-center justify-center text-green mx-auto mb-4">
                <Check size={20} strokeWidth={3} />
              </div>
              <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-2">{item.title}</h3>
              <p className="font-sans text-[13px] text-warm-gray leading-[1.5]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Testimonial Strip ---
const TestimonialStrip = () => {
  const { t } = useLanguage();
  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-8 px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto text-center">
        <blockquote className="font-sans text-[16px] text-warm-black max-w-[700px] mx-auto leading-[1.6] mb-3">
          "{t('pricing.testimonialStrip.quote')}"
        </blockquote>
        <cite className="font-sans text-[14px] text-warm-gray not-italic block">
          {t('pricing.testimonialStrip.cite')}
        </cite>
      </div>
    </section>
  );
};

// --- Section 4: Pricing Tables ---
const PricingTables = () => {
  const { t, dict } = useLanguage();
  const tables = dict.pricing.tables;

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{tables.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{tables.heading}</h2>
        </div>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[clamp(16px,2vw,24px)]">

          {/* Card 1: Trial */}
          <div className="stagger-child col-span-1 md:col-span-4 bg-white border border-[#E8DFD3] rounded-xl p-8 text-center relative flex flex-col h-full">
            <h3 className="font-serif text-[20px] text-warm-black mb-2">{tables.trial.title}</h3>
            <div className="mb-1">
              <span className="font-serif text-[clamp(2rem,3vw,3rem)] text-warm-black leading-none">{tables.trial.price}</span>
            </div>
            <p className="font-sans text-[14px] text-warm-gray mb-6">{tables.trial.duration}</p>
            <p className="font-sans text-[13px] text-warm-gray leading-[1.5] mb-8 min-h-[40px]">{tables.trial.desc}</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {tables.trial.features.map((feat, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-green shrink-0" />
                  <span className="font-sans text-[13px] text-warm-black">{feat}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" onClick={() => trackCTAClick('Book Trial - Pricing', '/contact')}>
              <Button variant="outline" className="w-full">{tables.trial.cta}</Button>
            </Link>
          </div>

          {/* Card 2: Single (Featured) */}
          <div className="stagger-child col-span-1 md:col-span-4 bg-white border-2 border-brown rounded-xl p-8 text-center relative flex flex-col h-full shadow-offset-md order-first md:order-none">
            <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-brown text-white font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
              {tables.single.badge}
            </div>
            <h3 className="font-serif text-[20px] text-warm-black mb-4">{tables.single.title}</h3>
            <div className="flex flex-col gap-1 mb-6">
              {tables.single.prices.map((p, i) => (
                <div key={i}>
                  <span className="font-serif text-[24px] text-warm-black">{p.amount}</span>
                  <span className="font-sans text-[13px] text-warm-gray ml-2">{p.per}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-[13px] text-warm-gray leading-[1.5] mb-8 min-h-[40px]">{tables.single.desc}</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {tables.single.features.map((feat, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-green shrink-0" />
                  <span className="font-sans text-[13px] text-warm-black">{feat}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" onClick={() => trackCTAClick('Book Single - Pricing', '/contact')}>
              <Button variant="primary" className="w-full">{tables.single.cta}</Button>
            </Link>
          </div>

          {/* Card 3: Package */}
          <div className="stagger-child col-span-1 md:col-span-4 bg-white border border-[#E8DFD3] rounded-xl p-8 text-center relative flex flex-col h-full">
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-green text-white font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
              {tables.package.badge}
            </div>
            <h3 className="font-serif text-[20px] text-warm-black mb-2">{tables.package.title}</h3>
            <div className="mb-1">
              <span className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-warm-black leading-none">{tables.package.price}</span>
            </div>
            <p className="font-sans text-[14px] text-warm-gray mb-6">{tables.package.duration}</p>
            <p className="font-sans text-[13px] text-warm-gray leading-[1.5] mb-8 min-h-[40px]">{tables.package.desc}</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {tables.package.features.map((feat, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-green shrink-0" />
                  <span className="font-sans text-[13px] text-warm-black">{feat}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" onClick={() => trackCTAClick('Book Package - Pricing', '/contact')}>
              <Button variant="secondary" className="w-full">{tables.package.cta}</Button>
            </Link>
            <p className="mt-4 font-sans text-[12px] font-medium text-green">{tables.package.savings}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 5: Comparison Table ---
const ComparisonTable = () => {
  const { dict } = useLanguage();
  const c = dict.pricing.comparison;

  const renderCell = (value: string) => {
    if (value === "Included" || value === "Yes") {
      return <Check size={16} className="text-green mx-auto" />;
    }
    return value;
  };

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{c.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{c.heading}</h2>
        </div>
        <div className="max-w-[900px] mx-auto overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                {c.headers.map((h, i) => (
                  <th key={i} className={`font-sans text-[13px] font-bold text-warm-black ${i === 0 ? 'text-left' : 'text-center'} p-4 border-b-2 border-[#E8DFD3] w-1/4`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="font-sans text-[13px] font-medium text-warm-black p-4 border-b border-[#E8DFD3]">{row.feature}</td>
                  <td className="font-sans text-[13px] text-warm-gray text-center p-4 border-b border-[#E8DFD3]">{renderCell(row.trial)}</td>
                  <td className="font-sans text-[13px] text-warm-gray text-center p-4 border-b border-[#E8DFD3]">{renderCell(row.single)}</td>
                  <td className="font-sans text-[13px] text-warm-gray text-center p-4 border-b border-[#E8DFD3]">{renderCell(row.pack)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// --- Section 6: FAQ ---
const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { dict } = useLanguage();
  const faq = dict.pricing.faq;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{faq.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{faq.heading}</h2>
        </div>
        <div className="max-w-[800px] mx-auto">
          {faq.items.map((item, idx) => (
            <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg mb-2 overflow-hidden">
              <button onClick={() => toggle(idx)} className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none">
                <span className="font-sans text-[15px] font-semibold text-warm-black pr-4">{item.q}</span>
                {openIndex === idx ? <ChevronUp size={20} className="text-warm-gray shrink-0" /> : <ChevronDown size={20} className="text-warm-gray shrink-0" />}
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[200px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.6]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 7: Page CTA ---
const PricingCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="animate-on-scroll w-full bg-brown py-[clamp(3rem,8vw,5rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
      <div className="max-w-site mx-auto">
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-4">{t('pricing.cta.heading')}</h2>
        <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/75 max-w-[500px] mx-auto mb-8 leading-[1.6]">{t('pricing.cta.desc')}</p>
        <Link to="/contact" onClick={() => trackCTAClick('Book Free Trial - Pricing CTA', '/contact')}>
          <button className="w-full sm:w-auto bg-amber text-warm-black hover:bg-[#D4941E] font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-9 py-4 tracking-[0.3px] min-h-[44px]">
            {t('pricing.cta.cta')}
          </button>
        </Link>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <PricingHero />
      <ValueGrid />
      <TestimonialStrip />
      <PricingTables />
      <PricingFAQ />
      <PricingCTA />
    </div>
  );
};

export default Pricing;
