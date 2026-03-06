import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Compass, Music, Trophy, Play, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { trackCTAClick } from '../hooks/useTracking';

// Section 1: Hero
const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="mt-[64px] lg:mt-[72px] w-full bg-brown py-[clamp(4rem,8vw,7rem)] px-[clamp(24px,4vw,80px)] pb-[clamp(3rem,6vw,5rem)]">
      <div className="teach-hero grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] max-w-[1400px] mx-auto items-center">
        <div className="teach-hero-text col-span-4 lg:col-span-6 order-2 lg:order-1">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-4 block">
            {t('howITeach.hero.label')}
          </span>
          <h1 className="font-serif text-[clamp(2rem,2rem+2vw,3.5rem)] leading-[1.1] text-white mb-6">
            {t('howITeach.hero.heading')}
          </h1>
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-white/80 max-w-[480px] mb-8">
            {t('howITeach.hero.desc')}
          </p>
          <Link to="/contact" onClick={() => trackCTAClick('Book Trial - How I Teach Hero', '/contact')}>
            <Button variant="secondary" className="bg-amber text-warm-black rounded-md">
              {t('howITeach.hero.cta')}
            </Button>
          </Link>
        </div>
        <div className="teach-hero-image col-span-4 lg:col-span-5 lg:col-start-8 order-1 lg:order-2 mb-6 lg:mb-0">
          <img src="/assets/guitar-couch-burgundy-portrait.avif" alt="Teaching Method" loading="lazy" className="w-full aspect-[3/4] object-cover rounded-xl shadow-offset-sm" />
        </div>
      </div>
    </section>
  );
};

// Section 2: Teaching Philosophy
const Philosophy = () => {
  const { dict } = useLanguage();
  const p = dict.howITeach.philosophy;
  const icons = [Compass, Music, Trophy, Play];
  const colors = ['#3A7D8C', '#E8A535', '#5B8F6E', '#E86F3A'];

  return (
    <section className="animate-on-scroll w-full bg-warm-white py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{p.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mx-auto">{p.heading}</h2>
        </div>
        <div className="philosophy-grid grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] max-w-[1400px] mx-auto">
          {p.pillars.map((pillar, idx) => {
            const Icon = icons[idx];
            const color = colors[idx];
            return (
              <div key={idx} className="stagger-child pillar-card col-span-2 lg:col-span-3 text-center p-6 lg:p-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: `${color}1F` }}>
                  <Icon size={24} color={color} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-[18px] text-warm-black mb-2">{pillar.title}</h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Section 3: Who I Teach
const AgeGroups = () => {
  const { dict } = useLanguage();
  const a = dict.howITeach.ageGroups;
  const colors = ['#E86F3A', '#E8A535', '#3A7D8C', '#8A3819'];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{a.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[500px]">{a.heading}</h2>
        </div>
        <div className="age-grid grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] max-w-[1400px] mx-auto">
          {a.groups.map((group, idx) => (
            <div key={idx} className="stagger-child age-card col-span-2 lg:col-span-3 bg-white rounded-xl p-7 border border-warm-mid">
              <span className="inline-block font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4" style={{ backgroundColor: `${colors[idx]}1F`, color: colors[idx] }}>
                {group.range}
              </span>
              <h3 className="font-serif text-[18px] text-warm-black mb-2">{group.title}</h3>
              <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">{group.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Genres
const Genres = () => {
  const { t, dict } = useLanguage();
  const genres = dict.genres;

  return (
    <section className="animate-on-scroll w-full bg-warm-black py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto text-center">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-3 block">{t('howITeach.genres.label')}</span>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-12">{t('howITeach.genres.heading')}</h2>
        <div className="genre-tags flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto mb-12">
          {genres.map((g, idx) => (
            <span key={idx} className="genre-tag px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-sans text-[14px] font-medium hover:bg-white/15 transition-colors cursor-default">{g}</span>
          ))}
        </div>
        <div className="genre-video max-w-[800px] mx-auto rounded-xl overflow-hidden aspect-[16/9] bg-[#1A1410] relative mt-12">
          <video className="w-full h-full object-cover" controls playsInline poster="/assets/guitar-couch-wide-landscape.avif">
             <source src="/assets/minor-swing-fullscreen-with-text.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

// Section 5: Lesson Structure
const LessonStructure = () => {
  const { dict } = useLanguage();
  const ls = dict.howITeach.lessonStructure;

  return (
    <section className="animate-on-scroll w-full bg-warm-white py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{ls.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{ls.heading}</h2>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <div className="lesson-steps hidden sm:grid grid-cols-5 gap-6 relative">
            <div className="absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-warm-mid -z-1" />
            {ls.steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-center text-center bg-warm-white z-10">
                <div className="w-10 h-10 rounded-full bg-brown text-white font-sans text-[14px] font-bold flex items-center justify-center mb-3">{idx + 1}</div>
                <span className="font-sans text-[11px] text-warm-gray mb-2 block mt-3">{step.time}</span>
                <h4 className="font-sans text-[14px] font-semibold text-warm-black mb-1 mt-2">{step.title}</h4>
                <p className="font-sans text-[12px] text-warm-gray leading-[1.5] px-2 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="sm:hidden flex flex-col gap-0 border-l-2 border-warm-mid ml-4">
            {ls.steps.map((step, idx) => (
              <div key={idx} className="lesson-step stagger-child flex flex-col items-start pl-6 pb-8 relative last:pb-0">
                 <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-brown text-white font-sans text-[14px] font-bold flex items-center justify-center border-4 border-warm-white">{idx + 1}</div>
                <span className="font-sans text-[11px] text-warm-gray mb-1 mt-1">{step.time}</span>
                <h4 className="font-sans text-[14px] font-semibold text-warm-black mb-1">{step.title}</h4>
                <p className="font-sans text-[13px] text-warm-gray leading-[1.5]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 6: Testimonials
const ParentTestimonials = () => {
  const { dict } = useLanguage();
  const pt = dict.howITeach.parentTestimonials;

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{pt.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{pt.heading}</h2>
        </div>
        <div className="parent-testimonials-grid grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] max-w-[1400px] mx-auto">
          {pt.items.map((item, idx) => (
            <div key={idx} className="stagger-child parent-testimonial col-span-4 bg-white border border-warm-mid rounded-xl p-7 relative">
              <div className="font-serif text-[48px] text-brown/20 leading-none absolute top-6 left-6">"</div>
              <p className="font-sans text-[16px] font-normal leading-[1.6] text-warm-black mb-6 relative z-10 pt-4">"{item.quote}"</p>
              <div className="relative z-10">
                <p className="font-sans text-[14px] font-semibold text-warm-black mt-5">{item.author}</p>
                <p className="font-sans text-[12px] text-warm-gray mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7: FAQ
const PracticalInfo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { dict } = useLanguage();
  const faq = dict.howITeach.faq;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="animate-on-scroll w-full bg-warm-white py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{faq.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{faq.heading}</h2>
        </div>
        <div className="max-w-[1400px] mx-auto">
          {faq.items.map((item, idx) => (
            <div key={idx} className="stagger-child faq-item bg-white border border-warm-mid rounded-lg mb-2 overflow-hidden max-w-[1400px] mx-auto">
              <button onClick={() => toggle(idx)} className="faq-question w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none">
                <span className="font-sans text-[15px] font-semibold text-warm-black pr-4">{item.q}</span>
                {openIndex === idx ? <ChevronUp size={20} className="text-warm-gray shrink-0" /> : <ChevronDown size={20} className="text-warm-gray shrink-0" />}
              </button>
              <div className={`faq-answer px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[200px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.6]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 8: CTA
const PageCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="animate-on-scroll w-full bg-brown py-[clamp(3rem,8vw,5rem)] px-[clamp(24px,4vw,80px)] text-center">
       <div className="max-w-[700px] mx-auto">
         <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-4">{t('howITeach.cta.heading')}</h2>
         <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/75 max-w-[500px] mx-auto mb-8 leading-[1.6]">{t('howITeach.cta.desc')}</p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link to="/contact" className="w-full sm:w-auto" onClick={() => trackCTAClick('Book Trial - How I Teach CTA', '/contact')}>
              <button className="w-full sm:w-auto bg-amber text-warm-black hover:bg-[#D4941E] font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-8 py-3.5 tracking-[0.3px] min-h-[44px]">
                {t('howITeach.cta.cta')}
              </button>
           </Link>
           <Link to="/pricing" className="w-full sm:w-auto" onClick={() => trackCTAClick('View Pricing - How I Teach CTA', '/pricing')}>
             <button className="w-full sm:w-auto bg-transparent border-2 border-white rounded-full px-8 py-[14px] text-white font-sans text-[13px] font-medium min-h-[44px] hover:bg-white hover:text-brown transition-all duration-200">
                {t('howITeach.cta.viewPricing')}
             </button>
           </Link>
         </div>
       </div>
    </section>
  );
};

const HowITeach = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Philosophy />
      <AgeGroups />
      <Genres />
      <LessonStructure />
      <ParentTestimonials />
      <PracticalInfo />
      <PageCTA />
    </div>
  );
};

export default HowITeach;
