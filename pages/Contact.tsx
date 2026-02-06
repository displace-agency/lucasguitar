import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, ChevronDown } from 'lucide-react';

// --- Section 1: Hero ---
const ContactHero = () => {
  return (
    <section className="animate-on-scroll w-full bg-warm-bg pt-[calc(64px+4rem)] md:pt-[calc(72px+4rem)] pb-[clamp(2rem,4vw,3rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
      <div className="max-w-site mx-auto">
        <span className="inline-block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-4">
          Contact
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,3vw,4rem)] leading-[1.1] text-warm-black mb-5 max-w-[600px] mx-auto">
          Let's Start a Conversation
        </h1>
        <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-warm-gray max-w-[480px] mx-auto leading-[1.6]">
          No commitment, just a friendly chat about your goals. I reply within 24 hours.
        </p>
      </div>
    </section>
  );
};

// --- Section 2: Booking Widget + Contact Form ---
const ContactMain = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <section className="animate-on-scroll w-full bg-warm-bg px-4 lg:px-[clamp(24px,4vw,80px)] pb-[clamp(3rem,6vw,5rem)]">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-[clamp(16px,2vw,24px)]">
        
        {/* Booking Widget (Left) */}
        <div className="stagger-child col-span-1 md:col-span-6 bg-white border border-[#E8DFD3] rounded-xl p-6 sm:p-8 h-fit">
          <div className="mb-6">
            <h3 className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] text-warm-black mb-1">
              Book a Free Meeting
            </h3>
            <p className="font-sans text-[14px] text-warm-gray">
              15 minutes, no pressure. Pick a time that works for you.
            </p>
          </div>
          <div className="w-full rounded-lg overflow-hidden min-h-[500px]">
             <iframe
              src="https://cal.com/lucas-terhaar/free-meeting"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '500px',
                border: 'none',
                borderRadius: '8px'
              }}
              title="Book a free meeting with Lucas"
            />
          </div>
        </div>

        {/* Contact Form (Right) */}
        <div className="stagger-child col-span-1 md:col-span-6 bg-white border border-[#E8DFD3] rounded-xl p-6 sm:p-8 h-fit">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-[400px]">
              <div className="w-16 h-16 bg-[#5B8F6E]/10 rounded-full flex items-center justify-center mb-6 text-[#5B8F6E]">
                <Check size={32} strokeWidth={3} />
              </div>
              <h3 className="font-serif text-[24px] text-warm-black mb-2">Message Sent!</h3>
              <p className="font-sans text-[16px] text-warm-gray">
                I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] text-warm-black mb-1">
                  Send a Message
                </h3>
                <p className="font-sans text-[14px] text-warm-gray">
                  Prefer writing? I'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">
                    NAME
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="Your name"
                    className="w-full p-[12px] px-[14px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] bg-white text-warm-black placeholder-[#A69A8E] focus:border-brown focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="your@email.com"
                    className="w-full p-[12px] px-[14px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] bg-white text-warm-black placeholder-[#A69A8E] focus:border-brown focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">
                    PHONE
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+49 XXX XXXXXXX (optional)"
                    className="w-full p-[12px] px-[14px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] bg-white text-warm-black placeholder-[#A69A8E] focus:border-brown focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Age & Level Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">
                      STUDENT AGE
                    </label>
                    <div className="relative">
                        <select 
                        id="age" 
                        defaultValue=""
                        className="w-full p-[12px] px-[14px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] bg-white text-warm-black focus:border-brown focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
                        >
                        <option value="" disabled>Select age</option>
                        <option value="under-5">Under 5</option>
                        <option value="5-8">5-8</option>
                        <option value="9-12">9-12</option>
                        <option value="13-18">13-18</option>
                        <option value="adult">Adult (18+)</option>
                        <option value="unsure">Not sure yet</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="level" className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">
                      EXPERIENCE LEVEL
                    </label>
                    <div className="relative">
                        <select 
                        id="level" 
                        defaultValue=""
                        className="w-full p-[12px] px-[14px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] bg-white text-warm-black focus:border-brown focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
                        >
                        <option value="" disabled>Select level</option>
                        <option value="beginner">Complete beginner</option>
                        <option value="some">Some experience</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="font-sans text-[11px] font-bold text-warm-black mb-1.5 block">
                    MESSAGE
                  </label>
                  <textarea 
                    id="message" 
                    required 
                    rows={4}
                    placeholder="Tell me about your goals, what instruments you're interested in, or any questions you have..."
                    className="w-full p-[12px] px-[14px] border-[1.5px] border-[#E8DFD3] rounded-lg font-sans text-[13px] bg-white text-warm-black placeholder-[#A69A8E] focus:border-brown focus:outline-none transition-colors duration-200 min-h-[120px] resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brown text-white hover:bg-brown-hover font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] min-h-[48px] mt-2"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Contact Info ---
const ContactInfo = () => {
  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,6vw,4rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(16px,2vw,24px)] mb-8">
          
          {/* Email */}
          <div className="stagger-child flex flex-col items-center text-center p-6 border-b sm:border-b-0 sm:border-r border-[#E8DFD3] last:border-0">
            <Mail size={40} className="text-brown mb-3" strokeWidth={1.5} />
            <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-1">Email</h3>
            <a href="mailto:hello@lucasterhaar.com" className="font-sans text-[14px] text-[#7A6E62] hover:text-brown underline underline-offset-4 transition-colors">
              hello@lucasterhaar.com
            </a>
          </div>

          {/* Phone */}
          <div className="stagger-child flex flex-col items-center text-center p-6 border-b sm:border-b-0 sm:border-r border-[#E8DFD3] last:border-0">
            <Phone size={40} className="text-brown mb-3" strokeWidth={1.5} />
            <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-1">Phone / WhatsApp</h3>
            <a href="tel:+49123456789" className="font-sans text-[14px] text-[#7A6E62] hover:text-brown underline underline-offset-4 transition-colors">
              +49 123 4567 89
            </a>
          </div>

          {/* Location */}
          <div className="stagger-child flex flex-col items-center text-center p-6">
            <MapPin size={40} className="text-brown mb-3" strokeWidth={1.5} />
            <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-1">Location</h3>
            <p className="font-sans text-[14px] text-[#7A6E62] max-w-[200px]">
              Berlin, Germany — home visits and studio sessions available.
            </p>
          </div>

        </div>
        
        <div className="text-center">
          <span className="inline-block font-sans text-[12px] font-medium text-[#7A6E62]">
            I reply within 24 hours
          </span>
        </div>
      </div>
    </section>
  );
};

// --- Section 4: Map ---
const LocationMap = () => {
  return (
    <section className="animate-on-scroll w-full h-[200px] md:h-[300px] bg-warm-bg grayscale opacity-90">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155422.0!2d13.2!3d52.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        allowFullScreen
        loading="lazy"
        title="Lucas Terhaar Guitar - Berlin"
      />
    </section>
  );
};

// --- Section 5: CTA ---
const ContactCTA = () => {
  return (
    <section className="animate-on-scroll w-full bg-brown py-[clamp(2rem,5vw,3rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
      <div className="max-w-site mx-auto">
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-3">
          Ready to Get Started?
        </h2>
        <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/75 mb-6">
          The first step is always a conversation.
        </p>
        <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-amber text-warm-black hover:bg-[#D4941E] font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-8 py-3.5 tracking-[0.3px] min-h-[44px]"
        >
          Book Free Meeting
        </button>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactMain />
      <ContactInfo />
      <LocationMap />
      <ContactCTA />
    </div>
  );
};

export default Contact;