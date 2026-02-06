import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section className="w-full bg-warm-bg text-center py-[clamp(4rem,10vw,8rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-[700px] mx-auto">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-4">
          Ready to Start?
        </p>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black mb-5">
          Your Musical Journey Begins With a Conversation
        </h2>
        <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-warm-gray max-w-[500px] mx-auto mb-8">
          Book a free, no-pressure meeting to discuss your goals. Whether it's for you or your child, let's find the right path together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto px-9 py-4 text-[14px]">
              Book Free Meeting
            </Button>
          </Link>
          <Link to="/pricing" className="w-full sm:w-auto">
             <Button variant="outline" className="w-full sm:w-auto px-7 py-[14px]">
               View Pricing
             </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;