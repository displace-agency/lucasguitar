import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Compass, Music, Trophy, Play, Check, ChevronDown, ChevronUp } from 'lucide-react';

// Section 1: Hero
const Hero = () => {
  return (
    <section className="mt-[64px] lg:mt-[72px] w-full bg-brown py-[clamp(4rem,8vw,7rem)] px-[clamp(24px,4vw,80px)] pb-[clamp(3rem,6vw,5rem)]">
      <div className="teach-hero grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] max-w-[1400px] mx-auto items-center">
        {/* Text - Order 2 Mobile, Order 1 Desktop */}
        <div className="teach-hero-text col-span-4 lg:col-span-6 order-2 lg:order-1">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-4 block">
            How I Teach
          </span>
          <h1 className="font-serif text-[clamp(2rem,2rem+2vw,3.5rem)] leading-[1.1] text-white mb-6">
            Every Student Gets Their Own Path
          </h1>
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-white/80 max-w-[480px] mb-8">
            No cookie-cutter lessons. Whether you're 5 or 55, I adapt to your goals, your pace, and the music you love.
          </p>
          <Link to="/contact">
            <Button variant="secondary" className="bg-amber text-warm-black rounded-md">
              Book Free Meeting
            </Button>
          </Link>
        </div>

        {/* Image - Order 1 Mobile, Order 2 Desktop */}
        <div className="teach-hero-image col-span-4 lg:col-span-5 lg:col-start-8 order-1 lg:order-2 mb-6 lg:mb-0">
          <img 
            src="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-burgundy-portrait.jpg" 
            alt="Teaching Method" 
            className="w-full aspect-[3/4] object-cover rounded-xl shadow-offset-sm"
          />
        </div>
      </div>
    </section>
  );
};

// Section 2: Teaching Philosophy
const Philosophy = () => {
  const pillars = [
    {
      color: '#3A7D8C', // Teal
      icon: Compass,
      title: "Student-Led Learning",
      desc: "Your interests drive the lesson plan. We start with what excites you and build from there."
    },
    {
      color: '#E8A535', // Amber
      icon: Music,
      title: "Real Music From Day One",
      desc: "No months of scales before you play a song. You'll be making music from the very first lesson."
    },
    {
      color: '#5B8F6E', // Green
      icon: Trophy,
      title: "Small Wins Build Confidence",
      desc: "Achievable goals every week. The more you succeed, the more you want to practice."
    },
    {
      color: '#E86F3A', // Coral
      icon: Play,
      title: "Learn By Doing",
      desc: "Less theory lectures, more hands-on playing. The best way to learn guitar is to play guitar."
    }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-white py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            My Philosophy
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mx-auto">
            Four Pillars of Better Learning
          </h2>
        </div>

        <div className="philosophy-grid grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] max-w-[1400px] mx-auto">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="stagger-child pillar-card col-span-2 lg:col-span-3 text-center p-6 lg:p-8">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: `${pillar.color}1F` }}
              >
                <pillar.icon size={24} color={pillar.color} strokeWidth={2} />
              </div>
              <h3 className="font-serif text-[18px] text-warm-black mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 3: Who I Teach
const AgeGroups = () => {
  const groups = [
    {
      range: "Ages 5-8",
      color: "#E86F3A", // Coral
      title: "Little Musicians",
      desc: "Play-based exploration. Short exercises, fun songs, and building coordination through games."
    },
    {
      range: "Ages 9-12",
      color: "#E8A535", // Amber
      title: "Foundation Builders",
      desc: "Structure meets fun. Chords, reading basics, real songs, and building a practice routine."
    },
    {
      range: "Ages 13-18",
      color: "#3A7D8C", // Teal
      title: "Young Artists",
      desc: "Self-expression and style. Improvisation, songwriting, band skills, and performance prep."
    },
    {
      range: "All Ages",
      color: "#8A3819", // Brown
      title: "Adult Learners",
      desc: "It's never too late. Whether you're a total beginner or picking it back up, we go at your pace."
    }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            For Every Age
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[500px]">
            Teaching That Adapts to Your Stage
          </h2>
        </div>

        <div className="age-grid grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] max-w-[1400px] mx-auto">
          {groups.map((group, idx) => (
            <div key={idx} className="stagger-child age-card col-span-2 lg:col-span-3 bg-white rounded-xl p-7 border border-warm-mid">
              <span 
                className="inline-block font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4"
                style={{ 
                  backgroundColor: `${group.color}1F`, 
                  color: group.color 
                }}
              >
                {group.range}
              </span>
              <h3 className="font-serif text-[18px] text-warm-black mb-2">
                {group.title}
              </h3>
              <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">
                {group.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Genres
const Genres = () => {
  const genres = [
    "Jazz", "Gypsy Jazz", "Rock", "Blues", "Funk", "R&B", 
    "Pop", "Classical", "Fingerstyle", "Improvisation", "Songwriting"
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-black py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto text-center">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-3 block">
          Genres
        </span>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-12">
          Learn the Music You Love
        </h2>

        <div className="genre-tags flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto mb-12">
          {genres.map((g, idx) => (
            <span 
              key={idx} 
              className="genre-tag px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-sans text-[14px] font-medium hover:bg-white/15 transition-colors cursor-default"
            >
              {g}
            </span>
          ))}
        </div>

        <div className="genre-video max-w-[800px] mx-auto rounded-xl overflow-hidden aspect-[16/9] bg-[#1A1410] relative mt-12">
          <video 
            className="w-full h-full object-cover"
            controls
            playsInline
            poster="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-wide-landscape.jpg"
          >
             <source src="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/minor-swing-fullscreen-with-text.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

// Section 5: Lesson Structure
const LessonStructure = () => {
  const steps = [
    { time: "5 min", title: "Warm Up", desc: "Quick exercises to loosen fingers and get in the zone." },
    { time: "10 min", title: "Technique Focus", desc: "Targeted practice on a specific skill — chords, scales, picking." },
    { time: "15 min", title: "Song Work", desc: "Learn and practice a song you chose. This is the fun part." },
    { time: "10 min", title: "Creative Play", desc: "Improvisation, jam along, or explore something new." },
    { time: "5 min", title: "Review & Goals", desc: "What we accomplished, what to practice, and goals for next time." }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-white py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Lesson Structure
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            What a Typical Lesson Looks Like
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto">
          {/* Desktop/Tablet Grid */}
          <div className="lesson-steps hidden sm:grid grid-cols-5 gap-6 relative">
            {/* Connecting Line */}
            <div className="absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-warm-mid -z-1" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-center text-center bg-warm-white z-10">
                <div className="w-10 h-10 rounded-full bg-brown text-white font-sans text-[14px] font-bold flex items-center justify-center mb-3">
                  {idx + 1}
                </div>
                <span className="font-sans text-[11px] text-warm-gray mb-2 block mt-3">{step.time}</span>
                <h4 className="font-sans text-[14px] font-semibold text-warm-black mb-1 mt-2">{step.title}</h4>
                <p className="font-sans text-[12px] text-warm-gray leading-[1.5] px-2 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical List */}
          <div className="sm:hidden flex flex-col gap-0 border-l-2 border-warm-mid ml-4">
            {steps.map((step, idx) => (
              <div key={idx} className="lesson-step stagger-child flex flex-col items-start pl-6 pb-8 relative last:pb-0">
                 <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-brown text-white font-sans text-[14px] font-bold flex items-center justify-center border-4 border-warm-white">
                  {idx + 1}
                </div>
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
  const testimonials = [
    {
      quote: "My daughter was nervous about starting. After the first lesson with Lucas, she couldn't stop talking about it. Now she practices every day without me asking.",
      author: "Maria S.",
      detail: "Mother of 8-year-old student"
    },
    {
      quote: "We tried two other teachers before Lucas. The difference is night and day. He actually listens to what the kids want to play.",
      author: "Jens & Katrin W.",
      detail: "Parents of 11-year-old student"
    },
    {
      quote: "My son played at his school concert after 4 months of lessons. I cried. Lucas gave him the confidence to get on that stage.",
      author: "Christina L.",
      detail: "Mother of 13-year-old student"
    }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            From Parents
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            What Parents Are Saying
          </h2>
        </div>

        <div className="parent-testimonials-grid grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] max-w-[1400px] mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="stagger-child parent-testimonial col-span-4 bg-white border border-warm-mid rounded-xl p-7 relative">
              <div className="font-serif text-[48px] text-brown/20 leading-none absolute top-6 left-6">"</div>
              <p className="font-sans text-[16px] font-normal leading-[1.6] text-warm-black mb-6 relative z-10 pt-4">
                "{t.quote}"
              </p>
              <div className="relative z-10">
                <p className="font-sans text-[14px] font-semibold text-warm-black mt-5">
                  {t.author}
                </p>
                <p className="font-sans text-[12px] text-warm-gray mt-1">
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

// Section 7: FAQ
const PracticalInfo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "How long are lessons?", a: "For ages 5-8, I recommend 30-minute sessions. For ages 9-18, 45 or 60 minutes depending on attention span and goals. Adults typically do 45 or 60 minutes." },
    { q: "Does my child need their own guitar?", a: "Not for the first lesson — I have instruments available. For regular lessons, I recommend getting a guitar. I can help you choose the right one for your child's age and size." },
    { q: "How much practice is expected?", a: "Ages 5-8: Just play for fun! Ages 9-12: 10-15 minutes daily. Ages 13-18: 20-30 minutes daily. Adults: whatever fits your schedule. Practice should feel like play, not a chore." },
    { q: "What's the cancellation policy?", a: "Life is unpredictable — I get it. You can cancel or reschedule up to 24 hours before a lesson at no charge." },
    { q: "Can parents sit in on lessons?", a: "Absolutely! For younger children (5-8), having a parent in the room often helps. For teens, I find they do better with some independence. We'll figure out what works." }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="animate-on-scroll w-full bg-warm-white py-[clamp(3rem,8vw,6rem)] px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Practical Info
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            Everything Parents Need to Know
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="stagger-child faq-item bg-white border border-warm-mid rounded-lg mb-2 overflow-hidden max-w-[1400px] mx-auto">
              <button 
                onClick={() => toggle(idx)}
                className="faq-question w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-sans text-[15px] font-semibold text-warm-black pr-4">{faq.q}</span>
                {openIndex === idx ? (
                  <ChevronUp size={20} className="text-warm-gray shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-warm-gray shrink-0" />
                )}
              </button>
              <div 
                className={`faq-answer px-6 overflow-hidden transition-all duration-300 ease-in-out ${
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

// Section 8: CTA
const PageCTA = () => {
  return (
    <section className="animate-on-scroll w-full bg-brown py-[clamp(3rem,8vw,5rem)] px-[clamp(24px,4vw,80px)] text-center">
       <div className="max-w-[700px] mx-auto">
         <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-4">
           Let's Find the Right Path for You
         </h2>
         <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/75 max-w-[500px] mx-auto mb-8 leading-[1.6]">
           Book a free, no-pressure meeting. We'll talk about what you want to learn and I'll create a plan just for you.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-amber text-warm-black hover:bg-[#D4941E] font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-8 py-3.5 tracking-[0.3px] min-h-[44px]">
                Book Free Meeting
              </button>
           </Link>
           <Link to="/pricing" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto bg-transparent border-2 border-white rounded-full px-8 py-[14px] text-white font-sans text-[13px] font-medium min-h-[44px] hover:bg-white hover:text-brown transition-all duration-200">
                View Pricing
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