import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Target, Star, Lightbulb, Infinity, Check, ChevronDown, ChevronUp } from 'lucide-react';

// Section 1: Hero
const KidsHero = () => {
  return (
    <section className="w-full bg-coral pt-[calc(72px+4rem)] pb-[3rem] lg:pt-[calc(72px+7rem)] lg:pb-[5rem] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="animate-on-scroll max-w-site mx-auto grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] items-center">
        {/* Mobile: Video First */}
        <div className="col-span-4 lg:col-span-5 lg:col-start-8 lg:order-2 order-1 mb-8 lg:mb-0 flex justify-center lg:justify-end">
          <div className="w-full max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden bg-warm-black shadow-offset-lg relative">
            <video 
              className="w-full h-full object-cover"
              controls
              playsInline
              poster="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/portrait-headshot-blue-shirt-alt.jpg"
            >
              <source src="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/sweet-child-fullscreen-no-text.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text */}
        <div className="col-span-4 lg:col-span-6 lg:order-1 order-2">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-white/80 mb-4 block">
            For Kids & Parents
          </span>
          <h1 className="font-serif text-[clamp(2rem,2rem+2vw,3.5rem)] leading-[1.1] text-white mb-6">
            Guitar Lessons Your Kids Will Love
          </h1>
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-white/85 max-w-[460px] mb-8">
            Parent-friendly lessons designed for ages 5-18. Structured, encouraging, and built around what your child enjoys.
          </p>
          <Link to="/contact">
            <button className="bg-white text-coral hover:bg-white/90 font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] min-h-[44px]">
              Book Free Meeting
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Section 2: Why Music
const WhyMusic = () => {
  const benefits = [
    {
      color: '#3A7D8C', // Teal
      icon: Target,
      title: "Focus & Discipline",
      desc: "Regular practice builds concentration and self-discipline — skills that translate to school and life."
    },
    {
      color: '#E8A535', // Amber
      icon: Star,
      title: "Confidence",
      desc: "Performing, even just for family, teaches kids they can do hard things. That belief carries them far."
    },
    {
      color: '#E86F3A', // Coral
      icon: Lightbulb,
      title: "Creativity",
      desc: "Music is one of the best outlets for creative expression. It gives kids a voice beyond words."
    },
    {
      color: '#5B8F6E', // Green
      icon: Infinity,
      title: "A Lifelong Skill",
      desc: "Unlike most hobbies, guitar stays with you forever. It's a gift they'll keep long after childhood."
    }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Why Music
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mx-auto mb-4">
            More Than Just an Instrument
          </h2>
          <p className="font-sans text-[clamp(1rem,1rem+0.1vw,1.125rem)] text-warm-gray text-center max-w-[500px] mx-auto">
            Learning guitar builds skills that go far beyond music.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {benefits.map((b, idx) => (
            <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg p-7">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${b.color}1F` }}
              >
                <b.icon size={24} color={b.color} strokeWidth={2} />
              </div>
              <h3 className="font-serif text-[18px] text-warm-black mb-2">
                {b.title}
              </h3>
              <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 3: Age Groups
const AgeGroups = () => {
  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Age Groups
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[500px]">
            Every Age Has Its Own Path
          </h2>
        </div>

        <div className="space-y-6">
          {/* Group 1 */}
          <div className="stagger-child bg-white rounded-lg p-8 border-l-[4px] border-coral max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <div className="md:w-1/3">
                <span className="inline-block bg-[#E86F3A1F] text-coral font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3">
                  Ages 5-8
                </span>
                <h3 className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] text-warm-black mb-4">
                  Little Musicians
                </h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.6]">
                  Play-based learning with short, focused exercises. We use games, simple songs, and lots of encouragement. Sessions are 30 minutes to match attention spans. Parents can sit in.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "First songs in the first lesson",
                  "Fun rhythm games and coordination exercises",
                  "No pressure, no homework — just musical play",
                  "30-minute sessions recommended"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-coral shrink-0 mt-[2px]" />
                    <span className="font-sans text-[14px] text-warm-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Group 2 */}
          <div className="stagger-child bg-white rounded-lg p-8 border-l-[4px] border-amber max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <div className="md:w-1/3">
                <span className="inline-block bg-[#E8A5351F] text-amber font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3">
                  Ages 9-12
                </span>
                <h3 className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] text-warm-black mb-4">
                  Foundation Builders
                </h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.6]">
                  This is where real progress happens. Students learn proper technique, basic theory, and start playing the songs they love. We introduce a light practice routine and set weekly goals.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Chords, scales, and reading basics",
                  "Songs they actually want to play",
                  "Building a practice habit (10-15 min/day)",
                  "45-minute sessions recommended"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-amber shrink-0 mt-[2px]" />
                    <span className="font-sans text-[14px] text-warm-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Group 3 */}
          <div className="stagger-child bg-white rounded-lg p-8 border-l-[4px] border-teal max-w-[1400px] mx-auto">
             <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <div className="md:w-1/3">
                <span className="inline-block bg-[#3A7D8C1F] text-teal font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3">
                  Ages 13-18
                </span>
                <h3 className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] text-warm-black mb-4">
                  Young Artists
                </h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.6]">
                  Teens want independence and self-expression. We dive into style, improvisation, and performance skills. Whether they're in a school band or learning for fun, lessons adapt to their goals.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Genre specialization and personal style",
                  "Improvisation and songwriting",
                  "Band skills and ensemble playing",
                  "45 or 60-minute sessions"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-teal shrink-0 mt-[2px]" />
                    <span className="font-sans text-[14px] text-warm-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 4: Curriculum
const Curriculum = () => {
  const skills = [
    { title: "Proper Technique", desc: "Correct posture, hand position, and picking — building good habits from day one." },
    { title: "Reading Basics", desc: "Tabs, chord diagrams, and basic notation — enough to learn any song independently." },
    { title: "Real Songs", desc: "Songs they choose and love. This is what keeps kids motivated to practice." },
    { title: "Rhythm & Timing", desc: "Strumming patterns, counting, and playing in time — the foundation of good music." },
    { title: "Music Theory", desc: "Age-appropriate theory that makes sense. Not boring worksheets — practical understanding." },
    { title: "Stage Confidence", desc: "Gentle performance practice. From playing for family to school concerts." }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Curriculum
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[500px]">
            What Your Child Will Learn
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {skills.map((skill, idx) => (
            <div key={idx} className="stagger-child p-6">
              <h3 className="font-sans text-[14px] font-bold text-warm-black mb-2">
                {skill.title}
              </h3>
              <p className="font-sans text-[13px] text-warm-gray leading-[1.6]">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: First Lesson
const FirstLesson = () => {
  const steps = [
    { title: "Meet Lucas", desc: "A friendly introduction. We talk about what your child likes, their experience, and what they want to learn." },
    { title: "Try the Guitar", desc: "Your child picks up the guitar (I have instruments if needed). We explore sounds, strings, and what feels comfortable." },
    { title: "Play a Simple Tune", desc: "By the end of the first lesson, most kids play a recognizable melody. This is the 'aha' moment." },
    { title: "Set Goals Together", desc: "We discuss a fun plan for the coming weeks. Parents get a clear picture of what to expect." }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            First Lesson
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mx-auto mb-4">
            What to Expect on Day One
          </h2>
          <p className="font-sans text-[clamp(1rem,1rem+0.1vw,1.125rem)] text-warm-gray text-center">
            No pressure, no tests, just music.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto">
          {/* Desktop Steps */}
          <div className="hidden sm:grid grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="absolute top-[18px] left-[12%] right-[12%] h-[1px] bg-warm-mid -z-1" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-center text-center bg-warm-surface z-10 px-2">
                <div className="w-9 h-9 rounded-full bg-coral text-white font-sans text-[14px] font-bold flex items-center justify-center mb-4 shadow-sm">
                  {idx + 1}
                </div>
                <h4 className="font-sans text-[14px] font-bold text-warm-black mb-2">{step.title}</h4>
                <p className="font-sans text-[13px] text-warm-gray leading-[1.5]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Steps */}
          <div className="sm:hidden flex flex-col gap-0 border-l-2 border-warm-mid ml-4">
            {steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-start pl-6 pb-8 relative last:pb-0">
                 <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-full bg-coral text-white font-sans text-[14px] font-bold flex items-center justify-center border-4 border-warm-surface">
                  {idx + 1}
                </div>
                <h4 className="font-sans text-[14px] font-bold text-warm-black mb-1 mt-1">{step.title}</h4>
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
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            From Parents
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            What Parents Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {testimonials.map((t, idx) => (
            <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg p-7">
              <p className="font-serif text-[18px] italic leading-[1.4] text-warm-black mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sans text-[14px] font-semibold text-warm-black">
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
    { q: "How long are lessons?", a: "For ages 5-8, I recommend 30-minute sessions. For ages 9-18, 45 or 60 minutes depending on attention span and goals." },
    { q: "Does my child need their own guitar?", a: "Not for the first lesson — I have instruments available. For regular lessons, I recommend getting a guitar. I can help you choose the right one for your child's age and size." },
    { q: "How much practice is expected?", a: "Ages 5-8: Just play for fun! Ages 9-12: 10-15 minutes daily. Ages 13-18: 20-30 minutes daily. But there's no homework — practice should feel like play, not a chore." },
    { q: "What's the cancellation policy?", a: "Life with kids is unpredictable — I get it. You can cancel or reschedule up to 24 hours before a lesson at no charge." },
    { q: "Can I sit in on lessons?", a: "Absolutely! For younger children (5-8), having a parent in the room often helps. For teens, I find they do better with some independence. We'll figure out what works." }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
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

// Section 8: CTA
const PageCTA = () => {
  return (
    <section className="animate-on-scroll w-full bg-coral py-[clamp(3rem,8vw,5rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
       <div className="max-w-[700px] mx-auto">
         <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-4">
           Let's Find the Right Path for Your Child
         </h2>
         <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/85 max-w-[500px] mx-auto mb-8 leading-[1.6]">
           Book a free meeting to discuss your child's interests and goals. No commitment, just a friendly conversation.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-coral hover:bg-white/90 font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] min-h-[44px]">
                Book Free Meeting
              </button>
           </Link>
           <Link to="/pricing" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto bg-transparent border-2 border-white rounded-full px-7 py-[14px] text-white font-sans text-[13px] font-medium min-h-[44px] hover:bg-white hover:text-coral transition-all duration-200">
                View Pricing
             </button>
           </Link>
         </div>
       </div>
    </section>
  );
};

const ForKids = () => {
  return (
    <div className="min-h-screen">
      <KidsHero />
      <WhyMusic />
      <AgeGroups />
      <Curriculum />
      <FirstLesson />
      <ParentTestimonials />
      <PracticalInfo />
      <PageCTA />
    </div>
  );
};

export default ForKids;