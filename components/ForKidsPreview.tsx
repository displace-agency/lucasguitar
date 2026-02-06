import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const ForKidsPreview: React.FC = () => {
  return (
    <section className="w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-[clamp(16px,2vw,24px)] items-center">
        
        {/* Text Content - Order 2 on mobile, Order 1 on Desktop */}
        <div className="order-2 md:order-1 md:col-span-6">
          <div className="inline-block bg-[rgba(232,111,58,0.12)] text-[#B85525] rounded-[20px] px-[14px] py-[6px] mb-5">
            <span className="font-sans text-[11px] font-semibold">For Kids & Parents</span>
          </div>
          
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black mb-5">
            Guitar Lessons Your Kids Will Actually Love
          </h2>
          
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-warm-gray mb-6">
            Structured, age-appropriate lessons that build confidence and creativity. From age 5 to 18, every student gets a personalized path that makes practice feel like play.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Play-based learning for young beginners (ages 5-8)",
              "Real songs they love — not boring exercises",
              "Stage confidence through gentle performance practice"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                 <div className="mt-1 flex-shrink-0 text-green">
                    <Check size={16} strokeWidth={3} />
                 </div>
                 <span className="font-sans text-[14px] text-warm-black">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/how-i-teach">
              <Button variant="primary">Learn More About Kids Lessons</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="ghost" className="px-0">View Pricing</Button>
            </Link>
          </div>
        </div>

        {/* Video - Order 1 on mobile, Order 2 on Desktop */}
        <div className="order-1 md:order-2 md:col-span-6 flex justify-center md:justify-end">
            <div className="w-full max-w-full aspect-[16/9] md:max-w-[360px] md:aspect-[9/16] rounded-lg overflow-hidden bg-warm-black relative group">
                 <video
                    className="w-full h-full object-cover"
                    poster="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/portrait-headshot-blue-shirt-alt.jpg"
                    controls
                    playsInline
                    preload="none"
                 >
                    <source src="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/stt-no-border-with-text.mp4" type="video/mp4" />
                 </video>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ForKidsPreview;