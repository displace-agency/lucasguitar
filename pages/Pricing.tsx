import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

// --- Section 1: Hero ---
const PricingHero = () => {
  return (
    <section className="w-full bg-warm-bg pt-[calc(72px+4rem)] pb-[3rem] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
      <div className="animate-on-scroll max-w-site mx-auto">
        <span className="inline-block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-4">
          Pricing
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,3vw,4rem)] leading-[1.1] text-warm-black mb-5 max-w-[600px] mx-auto">
          Invest in Your Musical Future
        </h1>
        <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-warm-gray max-w-[500px] mx-auto leading-[1.6]">
          Transparent pricing with no hidden fees. Every lesson is personalized, every session is progress.
        </p>
      </div>
    </section>
  );
};

// --- Section 2: What You Get ---
const ValueGrid = () => {
  const values = [
    { title: "Personalized Lesson Plan", desc: "Every lesson built around your goals, not a generic curriculum." },
    { title: "Technique + Theory + Songs", desc: "A balanced approach that covers everything you need." },
    { title: "Practice Guidance", desc: "Clear direction between lessons so you always know what to work on." },
    { title: "Flexible Scheduling", desc: "Book lessons when it works for you. Easy rescheduling." },
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-bg px-4 lg:px-[clamp(24px,4vw,80px)] pb-[clamp(3rem,6vw,5rem)]">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)]">
          {values.map((item, idx) => (
            <div key={idx} className="stagger-child col-span-1 lg:col-span-3 text-center px-4 py-6">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-green flex items-center justify-center text-green mx-auto mb-4">
                <Check size={20} strokeWidth={3} />
              </div>
              <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-[13px] text-warm-gray leading-[1.5]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Testimonial Strip ---
const TestimonialStrip = () => {
  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-8 px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto text-center">
        <blockquote className="font-serif text-[20px] italic text-warm-black max-w-[700px] mx-auto leading-[1.4] mb-3">
          "Worth every euro. Lucas's lessons have transformed my daughter's relationship with music."
        </blockquote>
        <cite className="font-sans text-[14px] text-warm-gray not-italic block">
          — Sarah M., parent of 10-year-old student
        </cite>
      </div>
    </section>
  );
};

// --- Section 4: Pricing Tables ---
const PricingTables = () => {
  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Lesson Packages
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            Simple, Transparent Pricing
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[clamp(16px,2vw,24px)]">
          
          {/* Card 1: Trial */}
          <div className="stagger-child col-span-1 md:col-span-4 bg-white border border-[#E8DFD3] rounded-xl p-8 text-center relative flex flex-col h-full">
            <h3 className="font-serif text-[20px] text-warm-black mb-2">Trial Lesson</h3>
            <div className="mb-1">
              <span className="font-serif text-[clamp(2rem,3vw,3rem)] text-warm-black leading-none">15€</span>
            </div>
            <p className="font-sans text-[14px] text-warm-gray mb-6">30 minutes</p>
            <p className="font-sans text-[13px] text-warm-gray leading-[1.5] mb-8 min-h-[40px]">
              A no-pressure introduction to see if we're a good fit.
            </p>
            <ul className="space-y-3 mb-8 flex-grow">
              {["Meet Lucas", "Try your first exercises", "Discuss your goals", "No commitment"].map((feat, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-green shrink-0" />
                  <span className="font-sans text-[13px] text-warm-black">{feat}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button variant="outline" className="w-full">Book Trial</Button>
            </Link>
          </div>

          {/* Card 2: Single (Featured) */}
          <div className="stagger-child col-span-1 md:col-span-4 bg-white border-2 border-brown rounded-xl p-8 text-center relative flex flex-col h-full shadow-offset-md order-first md:order-none">
            <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-brown text-white font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
              Most Popular
            </div>
            <h3 className="font-serif text-[20px] text-warm-black mb-4">Single Lesson</h3>
            <div className="flex flex-col gap-1 mb-6">
              <div>
                <span className="font-serif text-[24px] text-warm-black">40-45€</span>
                <span className="font-sans text-[13px] text-warm-gray ml-2">/ 45 min</span>
              </div>
              <div>
                <span className="font-serif text-[24px] text-warm-black">50-55€</span>
                <span className="font-sans text-[13px] text-warm-gray ml-2">/ 60 min</span>
              </div>
            </div>
            <p className="font-sans text-[13px] text-warm-gray leading-[1.5] mb-8 min-h-[40px]">
              Flexible, pay-as-you-go lessons with full personalization.
            </p>
            <ul className="space-y-3 mb-8 flex-grow">
              {["Personalized lesson plan", "Technique + theory + songs", "Practice guidance included", "Flexible scheduling"].map((feat, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-green shrink-0" />
                  <span className="font-sans text-[13px] text-warm-black">{feat}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button variant="primary" className="w-full">Book Free Meeting</Button>
            </Link>
          </div>

          {/* Card 3: Package */}
          <div className="stagger-child col-span-1 md:col-span-4 bg-white border border-[#E8DFD3] rounded-xl p-8 text-center relative flex flex-col h-full">
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-green text-white font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
              Best Value
            </div>
            <h3 className="font-serif text-[20px] text-warm-black mb-2">10-Lesson Package</h3>
            <div className="mb-1">
              <span className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-warm-black leading-none">Save 10-15%</span>
            </div>
            <p className="font-sans text-[14px] text-warm-gray mb-6">45 or 60 min sessions</p>
            <p className="font-sans text-[13px] text-warm-gray leading-[1.5] mb-8 min-h-[40px]">
              Commit to progress with a discounted package.
            </p>
            <ul className="space-y-3 mb-8 flex-grow">
              {["Everything in Single Lesson", "10-15% savings", "Priority scheduling", "Progress tracking"].map((feat, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <Check size={16} className="text-green shrink-0" />
                  <span className="font-sans text-[13px] text-warm-black">{feat}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button variant="secondary" className="w-full">Book Free Meeting</Button>
            </Link>
            <p className="mt-4 font-sans text-[12px] font-medium text-green">
              Save up to 80€
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 5: Comparison Table ---
const ComparisonTable = () => {
  const rows = [
    { feature: "Duration", trial: "30 min", single: "45 or 60 min", pack: "45 or 60 min" },
    { feature: "Personalized plan", trial: "Basic", single: "Full", pack: "Full" },
    { feature: "Song choice", trial: "Teacher picks", single: "You choose", pack: "You choose" },
    { feature: "Practice guidance", trial: "—", single: "Included", pack: "Included", isCheck: true },
    { feature: "Priority scheduling", trial: "—", single: "—", pack: "Yes", isCheck: true },
    { feature: "Savings", trial: "—", single: "—", pack: "10-15% off" },
    { feature: "Commitment", trial: "None", single: "None", pack: "10 sessions" },
  ];

  const renderCell = (value: string, isCheck?: boolean) => {
    if (value === "Included" || value === "Yes") {
      return <Check size={16} className="text-green mx-auto" />;
    }
    return value;
  };

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Compare
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            Which Option Is Right for You?
          </h2>
        </div>

        <div className="max-w-[900px] mx-auto overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="font-sans text-[13px] font-bold text-warm-black text-left p-4 border-b-2 border-[#E8DFD3] w-1/4">Feature</th>
                <th className="font-sans text-[13px] font-bold text-warm-black text-center p-4 border-b-2 border-[#E8DFD3] w-1/4">Trial</th>
                <th className="font-sans text-[13px] font-bold text-warm-black text-center p-4 border-b-2 border-[#E8DFD3] w-1/4">Single</th>
                <th className="font-sans text-[13px] font-bold text-warm-black text-center p-4 border-b-2 border-[#E8DFD3] w-1/4">10-Pack</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="font-sans text-[13px] font-medium text-warm-black p-4 border-b border-[#E8DFD3]">
                    {row.feature}
                  </td>
                  <td className="font-sans text-[13px] text-warm-gray text-center p-4 border-b border-[#E8DFD3]">
                    {renderCell(row.trial, row.isCheck)}
                  </td>
                  <td className="font-sans text-[13px] text-warm-gray text-center p-4 border-b border-[#E8DFD3]">
                    {renderCell(row.single, row.isCheck)}
                  </td>
                  <td className="font-sans text-[13px] text-warm-gray text-center p-4 border-b border-[#E8DFD3]">
                    {renderCell(row.pack, row.isCheck)}
                  </td>
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

  const faqs = [
    { q: "What payment methods do you accept?", a: "Bank transfer, PayPal, and cash. Payment is due before each lesson or at the start of a package." },
    { q: "Can I switch between 45 and 60 minute lessons?", a: "Absolutely. You can choose your session length each time you book. Many students start with 45 and move to 60 as they get more into it." },
    { q: "What happens if I need to cancel?", a: "No problem — just let me know 24 hours before your lesson. Late cancellations or no-shows are charged at the full rate." },
    { q: "Do packages expire?", a: "10-lesson packages are valid for 4 months from purchase. This gives you plenty of flexibility while maintaining momentum." },
    { q: "Is the trial lesson really only 15€?", a: "Yes! It's a get-to-know-each-other session. If you decide to continue, the trial fee is credited toward your first lesson package." },
    { q: "Do you offer discounts for siblings?", a: "Yes — if two or more siblings take lessons, I offer a 10% family discount on all sessions." },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            FAQ
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            Common Questions About Pricing
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg mb-2 overflow-hidden">
              <button 
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-sans text-[15px] font-semibold text-warm-black pr-4">{faq.q}</span>
                {openIndex === idx ? (
                  <ChevronUp size={20} className="text-warm-gray shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-warm-gray shrink-0" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[200px] pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-sans text-[14px] text-warm-gray leading-[1.6]">
                  {faq.a}
                </p>
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
  return (
    <section className="animate-on-scroll w-full bg-brown py-[clamp(3rem,8vw,5rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
      <div className="max-w-site mx-auto">
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-4">
          Not Sure Yet? Let's Talk.
        </h2>
        <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/75 max-w-[500px] mx-auto mb-8 leading-[1.6]">
          Book a free meeting — no commitment, no pressure. Just a conversation about your musical goals.
        </p>
        <Link to="/contact">
          <button className="w-full sm:w-auto bg-amber text-warm-black hover:bg-[#D4941E] font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-9 py-4 tracking-[0.3px] min-h-[44px]">
            Book Free Meeting
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
      <ComparisonTable />
      <PricingFAQ />
      <PricingCTA />
    </div>
  );
};

export default Pricing;