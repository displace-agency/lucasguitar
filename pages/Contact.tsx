import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Check, ChevronLeft, ArrowRight, User, Users, Clock, Send, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { trackWizardStep, trackFormSubmit, trackContactClick, trackCTAClick } from '../hooks/useTracking';

// --- Types ---

type StudentType = 'child' | 'adult' | null;

interface FormData {
  studentType: StudentType;
  ageRange: string | null;
  experience: string | null;
  instruments: string[];
  genres: string[];
  availabilityDays: string[];
  availabilityTime: string | null;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_DATA: FormData = {
  studentType: null,
  ageRange: null,
  experience: null,
  instruments: [],
  genres: [],
  availabilityDays: [],
  availabilityTime: null,
  name: '',
  email: '',
  phone: '',
  message: ''
};

// --- Icons ---

const ChildIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
    <path d="M9 15C9 15 10 17 12 17C14 17 15 15 15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const AdultIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 21V19C6 16.2386 8.23858 14 11 14H13C15.7614 14 18 16.2386 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// --- Components ---

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSuccess, setIsSuccess] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [animating, setAnimating] = useState(false);
  const { t, dict } = useLanguage();
  const w = dict.contact.wizard;

  const wizardRef = useRef<HTMLDivElement>(null);

  const totalSteps = 6;

  const handleNext = () => {
    if (step < totalSteps) {
      setDirection('forward');
      setAnimating(true);
      setTimeout(() => {
        setStep(prev => prev + 1);
        trackWizardStep(step + 1, formData.studentType || 'unknown');
        setAnimating(false);
        if (window.innerWidth < 640 && wizardRef.current) {
             wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      submitForm();
    }
  };

  const handleBack = () => {
    setDirection('backward');
    setAnimating(true);
    setTimeout(() => {
      if (step === 3 && formData.studentType === 'adult') {
        setStep(1);
      } else {
        setStep(prev => prev - 1);
      }
      setAnimating(false);
    }, 300);
  };

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSelection = (field: 'instruments' | 'genres' | 'availabilityDays', value: string) => {
    setFormData(prev => {
      const current = prev[field];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const submitForm = () => {
    trackFormSubmit(formData.studentType || 'unknown');
    // Form values stay in English for Lucas
    console.log("Sending Email...");
    console.log(`
Subject: New Lesson Inquiry — ${formData.name} (${formData.studentType === 'child' ? 'Child' : 'Adult'}, ${formData.ageRange})

New Guitar Lesson Inquiry
━━━━━━━━━━━━━━━━━━━━━━━

Student Type: ${formData.studentType === 'child' ? 'For a Child' : 'Adult Learner'}
Age Range: ${formData.ageRange}
Experience: ${formData.experience}
Instruments: ${formData.instruments.join(', ')}
Genres: ${formData.genres.join(', ')}
Availability: ${formData.availabilityDays.join(', ')} — ${formData.availabilityTime}

━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Message:
${formData.message || "No additional message"}

━━━━━━━━━━━━━━━━━━━━━━━
    `);

    setAnimating(true);
    setTimeout(() => {
        setIsSuccess(true);
        setAnimating(false);
        if (wizardRef.current) {
            wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 800);
  };

  const canProceed = () => {
    if (step === 4) return formData.instruments.length > 0;
    if (step === 5) return formData.genres.length > 0;
    if (step === 6) {
      return (
        formData.availabilityDays.length > 0 &&
        formData.availabilityTime &&
        formData.name.trim().length > 0 &&
        formData.email.trim().length > 0
      );
    }
    return true;
  };

  // --- Render Steps ---

  const renderStep1 = () => (
    <div className="flex flex-col md:flex-row gap-4 h-full">
      {[
        { type: 'child' as const, label: w.step1.child, sub: w.step1.childSub, Icon: ChildIcon },
        { type: 'adult' as const, label: w.step1.adult, sub: w.step1.adultSub, Icon: AdultIcon }
      ].map((opt) => (
        <button
          key={opt.type}
          onClick={() => {
            updateField('studentType', opt.type);
            if (opt.type === 'adult') {
              updateField('ageRange', 'Adult (18+)');
              setDirection('forward');
              setAnimating(true);
              setTimeout(() => {
                setStep(3);
                trackWizardStep(3, 'adult');
                setAnimating(false);
              }, 300);
            } else {
              handleNext();
            }
          }}
          className={`option-card flex-1 flex flex-col items-center justify-center min-h-[160px] ${formData.studentType === opt.type ? 'selected' : ''}`}
        >
          <div className="text-brown mb-4"><opt.Icon /></div>
          <span className="font-sans text-[16px] font-semibold text-warm-black mb-1">{opt.label}</span>
          <span className="font-sans text-[12px] text-warm-gray">{opt.sub}</span>
        </button>
      ))}
    </div>
  );

  const renderStep2 = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {w.step2.options.map((opt) => (
        <button
          key={opt.label}
          onClick={() => {
            updateField('ageRange', opt.label);
            handleNext();
          }}
          className={`option-card flex flex-col items-center justify-center p-6 ${formData.ageRange === opt.label ? 'selected' : ''}`}
        >
          <span className="font-sans text-[14px] font-bold text-warm-black mb-2">{opt.label}</span>
          <span className="font-sans text-[12px] text-warm-gray leading-[1.4]">{opt.desc}</span>
        </button>
      ))}
    </div>
  );

  const renderStep3 = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {w.step3.options.map((opt) => (
        <button
          key={opt.label}
          onClick={() => {
            updateField('experience', opt.label);
            handleNext();
          }}
          className={`option-card flex flex-col items-center justify-center p-6 ${formData.experience === opt.label ? 'selected' : ''}`}
        >
          <span className="font-sans text-[14px] font-bold text-warm-black mb-2">{opt.label}</span>
          <span className="font-sans text-[12px] text-warm-gray leading-[1.4]">{opt.desc}</span>
        </button>
      ))}
    </div>
  );

  const renderStep4 = () => (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {w.step4.instruments.map((inst) => (
          <button
            key={inst}
            onClick={() => toggleSelection('instruments', inst)}
            className={`option-card multi-select relative flex items-center justify-center p-6 min-h-[80px] ${formData.instruments.includes(inst) ? 'selected' : ''}`}
          >
            <span className="font-sans text-[15px] font-semibold text-warm-black">{inst}</span>
          </button>
        ))}
      </div>
      <div className="mt-auto">
        <button
          onClick={handleNext}
          disabled={formData.instruments.length === 0}
          className="w-full bg-brown text-white disabled:bg-warm-mid disabled:cursor-not-allowed hover:bg-brown-hover font-medium transition-colors duration-200 ease-out rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] flex items-center justify-center gap-2"
        >
          {w.next} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="flex flex-col h-full">
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {w.step5.genres.map((genre) => (
          <button
            key={genre}
            onClick={() => toggleSelection('genres', genre)}
            className={`genre-pill ${formData.genres.includes(genre) ? 'selected' : ''}`}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="mt-auto">
        <button
          onClick={handleNext}
          disabled={formData.genres.length === 0}
          className="w-full bg-brown text-white disabled:bg-warm-mid disabled:cursor-not-allowed hover:bg-brown-hover font-medium transition-colors duration-200 ease-out rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] flex items-center justify-center gap-2"
        >
          {w.next} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="flex flex-col h-full">
      <div className="space-y-6 mb-8 text-left">
        <div>
          <label className="font-sans text-[12px] font-bold text-warm-black mb-2 block">{w.step6.availDays}</label>
          <div className="flex flex-wrap gap-2">
            {w.step6.days.map(day => (
              <button
                key={day}
                onClick={() => toggleSelection('availabilityDays', day)}
                className={`genre-pill px-4 py-2 text-[12px] ${formData.availabilityDays.includes(day) ? 'selected' : ''}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-sans text-[12px] font-bold text-warm-black mb-2 block">{w.step6.prefTime}</label>
          <div className="flex flex-wrap gap-2">
            {w.step6.times.map(time => (
              <button
                key={time}
                onClick={() => updateField('availabilityTime', time)}
                className={`genre-pill px-4 py-2 text-[12px] ${formData.availabilityTime === time ? 'selected' : ''}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div>
              <label className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">{w.step6.name}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder={w.step6.namePlaceholder}
                className="w-full p-[12px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] focus:border-brown focus:outline-none transition-colors"
              />
           </div>
           <div>
              <label className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">{w.step6.email}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder={w.step6.emailPlaceholder}
                className="w-full p-[12px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] focus:border-brown focus:outline-none transition-colors"
              />
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div>
              <label className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">{w.step6.phone}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder={w.step6.phonePlaceholder}
                className="w-full p-[12px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] focus:border-brown focus:outline-none transition-colors"
              />
           </div>
        </div>

        <div>
            <label className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">{w.step6.messageLbl}</label>
            <textarea
              value={formData.message}
              onChange={(e) => updateField('message', e.target.value)}
              placeholder={w.step6.messagePlaceholder}
              className="w-full p-[12px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] focus:border-brown focus:outline-none transition-colors min-h-[80px]"
            />
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className="w-full bg-brown text-white disabled:bg-warm-mid disabled:cursor-not-allowed hover:bg-brown-hover font-medium transition-colors duration-200 ease-out rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] flex items-center justify-center gap-2"
        >
          <Send size={16} /> {w.step6.submit}
        </button>
      </div>
    </div>
  );

  const getStepContent = () => {
    switch (step) {
      case 1: return { title: w.step1.title, content: renderStep1() };
      case 2: return { title: w.step2.title, content: renderStep2() };
      case 3: return { title: w.step3.title, content: renderStep3() };
      case 4: return { title: w.step4.title, subtitle: w.step4.subtitle, content: renderStep4() };
      case 5: return { title: w.step5.title, subtitle: w.step5.subtitle, content: renderStep5() };
      case 6: return { title: w.step6.title, content: renderStep6() };
      default: return { title: "", content: null };
    }
  };

  const currentStepData = getStepContent();

  return (
    <div className="min-h-screen bg-warm-bg flex flex-col">
      <style>{`
        .wizard-card {
          background: #FFFFFF;
          border: 1px solid #E8DFD3;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .option-card {
          background: #F4EDE4;
          border: 2px solid #E8DFD3;
          border-radius: 12px;
          cursor: pointer;
          text-align: center;
          transition: all 200ms ease-out;
        }
        .option-card:hover {
          border-color: #8A3819;
          transform: translateY(-2px);
        }
        .option-card.selected {
          border-color: #8A3819;
          background: rgba(138, 56, 25, 0.05);
          box-shadow: 3px 3px 6px rgba(0,0,0,0.08);
        }
        .option-card.multi-select.selected::after {
          content: '✓';
          position: absolute;
          top: 8px;
          right: 8px;
          width: 20px;
          height: 20px;
          background: #5B8F6E;
          color: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
        }
        .genre-pill {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border: 1.5px solid #E8DFD3;
          border-radius: 9999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #2D2218;
          background: #FFFFFF;
          cursor: pointer;
          transition: all 200ms ease-out;
        }
        .genre-pill:hover {
          border-color: #8A3819;
        }
        .genre-pill.selected {
          border-color: #8A3819;
          background: rgba(138, 56, 25, 0.08);
          color: #8A3819;
        }
        .wizard-anim-enter {
          opacity: 0;
        }
        .wizard-anim-active {
          opacity: 1;
          transition: opacity 200ms ease-out;
        }
        .wizard-anim-exit {
          opacity: 0;
          transition: opacity 150ms ease-out;
        }
        .wizard-card input::placeholder,
        .wizard-card textarea::placeholder {
          color: #A69A8E;
          opacity: 1;
        }
        .wizard-card input,
        .wizard-card textarea {
          color: #2D2218;
        }
      `}</style>

      {/* --- Section 1: Hero --- */}
      <section className="w-full pt-[calc(72px+4rem)] md:pt-[calc(72px+5rem)] pb-[clamp(2rem,4vw,3rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
        <div className="max-w-site mx-auto">
          <span className="inline-block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-4">{t('contact.hero.label')}</span>
          <h1 className="font-serif text-[clamp(2.5rem,3vw,4rem)] leading-[1.1] text-warm-black mb-5 max-w-[600px] mx-auto">{t('contact.hero.heading')}</h1>
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-warm-gray max-w-[480px] mx-auto leading-[1.6]">{t('contact.hero.desc')}</p>
        </div>
      </section>

      {/* --- Section 2: Smart Booking Wizard --- */}
      <section className="w-full px-4 lg:px-[clamp(24px,4vw,80px)] pb-[clamp(3rem,6vw,5rem)]">
        <div ref={wizardRef} className="wizard-card w-full max-w-[640px] mx-auto min-h-[520px] flex flex-col p-6 sm:p-10 relative overflow-hidden transition-all">

          {isSuccess ? (
            <div className="wizard-success flex flex-col items-center justify-center text-center h-full flex-grow py-8 animate-[fadeIn_500ms_ease-out]">
              <div className="w-16 h-16 bg-[#5B8F6E] rounded-full flex items-center justify-center mb-6 text-white shadow-offset-sm">
                <Check size={32} strokeWidth={3} />
              </div>
              <h3 className="font-serif text-[28px] text-warm-black mb-3">{w.success.heading}</h3>
              <p className="font-sans text-[15px] text-warm-gray max-w-[400px] leading-[1.6] mb-8">{w.success.desc}</p>
              <Link to="/">
                <button className="bg-transparent border-2 border-brown text-brown rounded-full hover:bg-brown hover:text-white text-[13px] font-medium px-8 py-3 transition-colors duration-200">
                  {w.success.backHome}
                </button>
              </Link>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="w-full mb-8 relative">
                 <div className="flex justify-between items-end mb-2">
                    {step > 1 && (
                      <button
                        onClick={handleBack}
                        className="text-[13px] font-sans text-warm-gray hover:text-brown flex items-center gap-1 transition-colors"
                      >
                        <ChevronLeft size={14} /> {w.back}
                      </button>
                    )}
                    <span className="font-sans text-[11px] font-bold text-warm-gray ml-auto">
                      {w.stepOf.replace('{step}', String(step)).replace('{total}', String(totalSteps))}
                    </span>
                 </div>
                 <div className="flex gap-1 h-1 w-full">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-[3px] rounded-full transition-all duration-300 ${
                          i + 1 <= step ? 'bg-brown' : 'bg-warm-mid'
                        }`}
                      />
                    ))}
                 </div>
              </div>

              {/* Wizard Content Container */}
              <div className={`flex flex-col flex-grow transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="text-center mb-8">
                  <h2 className="font-serif text-[24px] sm:text-[28px] text-warm-black leading-[1.2] mb-2">
                    {currentStepData.title}
                  </h2>
                  {(currentStepData as any).subtitle && (
                    <p className="font-sans text-[14px] text-warm-gray">{(currentStepData as any).subtitle}</p>
                  )}
                </div>

                <div className="flex-grow">
                  {currentStepData.content}
                </div>
              </div>
            </>
          )}

        </div>
      </section>

      {/* --- Section 3: Contact Info --- */}
      <section className="w-full bg-warm-surface py-[clamp(3rem,6vw,4rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-12 gap-0 sm:gap-6 lg:gap-8 contact-info-grid">
            <div className="col-span-1 sm:col-span-4 lg:col-span-4 flex flex-col items-center text-center p-6 border-b sm:border-b-0 sm:border-r border-[#E8DFD3] last:border-0 lg:border-0">
              <Mail size={32} className="text-brown mb-3" strokeWidth={1.5} />
              <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-1">{t('contact.info.emailLabel')}</h3>
              <a href="mailto:hello@lucasterhaar.com" onClick={() => trackContactClick('email')} className="font-sans text-[14px] text-[#7A6E62] hover:text-brown underline underline-offset-4 transition-colors">hello@lucasterhaar.com</a>
            </div>
            <div className="col-span-1 sm:col-span-4 lg:col-span-4 flex flex-col items-center text-center p-6 border-b sm:border-b-0 sm:border-r border-[#E8DFD3] last:border-0 lg:border-0">
              <Phone size={32} className="text-brown mb-3" strokeWidth={1.5} />
              <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-1">{t('contact.info.phoneLabel')}</h3>
              <a href="tel:+491627362969" onClick={() => trackContactClick('phone')} className="font-sans text-[14px] text-[#7A6E62] hover:text-brown underline underline-offset-4 transition-colors">+49 162 7362969</a>
            </div>
            <div className="col-span-1 sm:col-span-4 lg:col-span-4 flex flex-col items-center text-center p-6">
              <MapPin size={32} className="text-brown mb-3" strokeWidth={1.5} />
              <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-1">{t('contact.info.locationLabel')}</h3>
              <p className="font-sans text-[14px] text-[#7A6E62] max-w-[240px]">
                {t('contact.info.locationCity')}<br/>
                <span className="text-[13px] opacity-80">{t('contact.info.locationDesc')}</span>
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <span className="inline-block font-sans text-[12px] font-medium text-[#7A6E62] bg-[#E8DFD3]/30 px-3 py-1 rounded-full">
              {t('contact.info.replyTime')}
            </span>
          </div>
        </div>
      </section>

      {/* --- Section 4: Map --- */}
      <section className="w-full h-[200px] md:h-[300px] bg-warm-bg grayscale opacity-90 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155422.0!2d13.2!3d52.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
          loading="lazy"
          title="Lucas Terhaar Guitar - Berlin"
        />
        <div className="absolute inset-0 pointer-events-none border-t border-[#E8DFD3]" />
      </section>

      {/* --- Section 5: Page CTA --- */}
      <section className="w-full bg-brown py-[clamp(3rem,5vw,4rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
        <div className="max-w-site mx-auto">
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-3">{t('contact.cta.heading')}</h2>
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/75 mb-8">{t('contact.cta.desc')}</p>
          <button
              onClick={() => {
                trackCTAClick('Start Booking - Contact CTA', '#wizard');
                if (wizardRef.current) {
                   wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="bg-amber text-warm-black hover:bg-[#D4941E] font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-8 py-3.5 tracking-[0.3px] min-h-[44px]"
          >
            {t('contact.cta.cta')}
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;
