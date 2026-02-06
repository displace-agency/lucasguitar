import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Lucas has a gift for making guitar feel accessible. My son went from zero to playing his favorite songs in just a few months.",
      author: "Sarah M.",
      detail: "Parent of 10-year-old student"
    },
    {
      quote: "The best guitar teacher in Berlin. His lessons are structured but never rigid — I always leave feeling inspired.",
      author: "Thomas K.",
      detail: "Adult student, 2 years"
    },
    {
      quote: "My daughter was shy about performing. After 6 months with Lucas, she played at her school concert. We couldn't be prouder.",
      author: "Anna & Markus R.",
      detail: "Parents of 12-year-old student"
    }
  ];

  return (
    <section id="testimonials" className="animate-on-scroll w-full bg-brown py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-3">
          What Students & Parents Say
        </p>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-12">
          Real Stories, Real Progress
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {testimonials.map((t, idx) => (
            <div key={idx} className="stagger-child bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] rounded-lg p-8">
              <div className="font-serif text-[48px] text-white/20 leading-none mb-2">"</div>
              <p className="font-sans text-[16px] font-normal leading-[1.6] text-white mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sans text-[14px] font-semibold text-white">
                  {t.author}
                </p>
                <p className="font-sans text-[12px] text-white/60 mt-1">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;