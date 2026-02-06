import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-[clamp(16px,2vw,24px)] items-center">
        {/* Image - 5 cols desktop, full mobile */}
        <div className="md:col-span-5 w-full order-1 md:order-1 mb-6 md:mb-0">
          <img 
            src="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/portrait-headshot-blue-shirt.jpg" 
            alt="Lucas Terhaar" 
            className="w-full aspect-[3/4] object-cover rounded-lg"
          />
        </div>

        {/* Text - 6 cols desktop, full mobile */}
        <div className="md:col-span-6 md:col-start-7 order-2 md:order-2">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-4">
            Meet Your Teacher
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black mb-6">
            I Believe Every Student Has a Unique Musical Voice
          </h2>
          <div className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-warm-black space-y-4 mb-8">
            <p>
              Hi, I'm Lucas — a guitar teacher based in Berlin with over 8 years of experience working with students of all ages. I started playing guitar when I was young, fell in love with jazz and improvisation, and eventually turned my passion into a career helping others discover theirs.
            </p>
            <p>
              Whether your child is picking up a guitar for the first time or you're an adult looking to finally learn that song you've always loved, I create lessons around what excites you. No rigid textbooks. No boring exercises. Just real music, real progress, and a lot of fun along the way.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="primary">
              Book Free Meeting
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;