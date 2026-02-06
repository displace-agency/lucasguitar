import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Compass, Music, Trophy, Play, Check } from 'lucide-react';

// Section 1: Hero
const MethodHero = () => {
  return (
    <section className="w-full bg-brown pt-[calc(72px+4rem)] pb-[3rem] lg:pt-[calc(72px+7rem)] lg:pb-[5rem] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="animate-on-scroll max-w-site mx-auto grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] items-center">
        {/* Mobile: Image First */}
        <div className="col-span-4 lg:col-span-5 lg:col-start-8 lg:order-2 order-1 mb-6 lg:mb-0">
          <img 
            src="https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-burgundy-portrait.jpg" 
            alt="Teaching Method" 
            className="w-full aspect-[3/4] object-cover rounded-lg shadow-offset-sm"
          />
        </div>

        {/* Text */}
        <div className="col-span-4 lg:col-span-6 lg:order-1 order-2">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-4 block">
            Teaching Method
          </span>
          <h1 className="font-serif text-[clamp(2rem,2rem+2vw,3.5rem)] leading-[1.1] text-white mb-6">
            How I Teach
          </h1>
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-white/80 max-w-[480px] mb-8">
            Every student is different. My approach adapts to your goals, your pace, and the music you love. No cookie-cutter lessons — just a path that works for you.
          </p>
          <Link to="/contact">
            <Button variant="secondary">Book Free Meeting</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Section 2: Philosophy
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
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            My Philosophy
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mx-auto">
            Four Pillars of Better Learning
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="stagger-child flex flex-col items-center text-center p-6 lg:p-8">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${pillar.color}1F` }} // 12% opacity hex approximation
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

// Section 3: Age Groups
const AgeGroups = () => {
  const groups = [
    {
      range: "Ages 5-8",
      color: "#E86F3A", // Coral
      title: "Little Musicians",
      desc: "Play-based exploration. Short exercises, fun songs, building coordination and confidence through games."
    },
    {
      range: "Ages 9-12",
      color: "#E8A535", // Amber
      title: "Foundation Builders",
      desc: "Structure meets fun. Learning chords, reading basics, playing real songs, building a practice routine."
    },
    {
      range: "Ages 13-18",
      color: "#3A7D8C", // Teal
      title: "Young Artists",
      desc: "Self-expression and style. Band skills, improvisation, songwriting, preparing for performances."
    },
    {
      range: "All Ages",
      color: "#8A3819", // Brown
      title: "Adult Learners",
      desc: "It's never too late. Whether you're a total beginner or picking it back up, we go at your pace."
    }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            For Every Age
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[500px]">
            Teaching That Adapts to Your Stage
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {groups.map((group, idx) => (
            <div key={idx} className="stagger-child bg-white rounded-lg p-7 border border-warm-mid h-full flex flex-col items-start">
              <span 
                className="font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4"
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

// Section 4: Instruments
const Instruments = () => {
  const instruments = [
    {
      title: "Electric Guitar",
      desc: "From classic rock to jazz fusion — explore distortion, effects, and techniques that define your sound.",
      img: "https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-burgundy-closeup.jpg"
    },
    {
      title: "Acoustic Guitar",
      desc: "Fingerpicking, strumming, and songwriting. The most versatile instrument and the foundation of it all.",
      img: "https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-wide-landscape.jpg"
    },
    {
      title: "Bass Guitar",
      desc: "The backbone of every band. Learn groove, rhythm, slap technique, and how to hold everything together.",
      img: "https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-burgundy-portrait.jpg"
    },
    {
      title: "Ukulele",
      desc: "Fun, portable, and the perfect entry point. Great for young beginners and anyone who wants to play quickly.",
      img: "https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-bw-portrait.jpg"
    }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Instruments
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            Find Your Sound
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {instruments.map((inst, idx) => (
            <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg overflow-hidden group hover:shadow-offset-md transition-shadow duration-200">
              <div className="h-[200px] w-full overflow-hidden">
                 <img src={inst.img} alt={inst.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[18px] text-warm-black mb-2">{inst.title}</h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">{inst.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: Genres
const Genres = () => {
  const genres = [
    "Jazz", "Gypsy Jazz", "Rock", "Blues", "Funk", "R&B", 
    "Pop", "Classical", "Fingerstyle", "Improvisation", "Songwriting"
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-black py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto text-center">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-3 block">
          Genres
        </span>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-12">
          Learn the Music You Love
        </h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto mb-12">
          {genres.map((g, idx) => (
            <span 
              key={idx} 
              className="px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-sans text-[14px] font-medium hover:bg-white/15 transition-colors cursor-default"
            >
              {g}
            </span>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto rounded-xl overflow-hidden aspect-[16/9] bg-[#1A1410] relative">
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

// Section 6: Lesson Structure
const LessonStructure = () => {
  const steps = [
    { time: "5 min", title: "Warm Up", desc: "Quick exercises to loosen fingers and get in the zone." },
    { time: "10 min", title: "Technique Focus", desc: "Targeted practice on a specific skill — chords, scales, picking." },
    { time: "15 min", title: "Song Work", desc: "Learn and practice a song you chose. This is the fun part." },
    { time: "10 min", title: "Creative Play", desc: "Improvisation, jam along, or explore something new." },
    { time: "5 min", title: "Review & Goals", desc: "What we accomplished, what to practice, and goals for next time." }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
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
          <div className="hidden sm:grid grid-cols-5 gap-6 relative">
            {/* Connecting Line */}
            <div className="absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-warm-mid -z-1" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-center text-center bg-warm-bg z-10">
                <div className="w-10 h-10 rounded-full bg-brown text-white font-sans text-[14px] font-bold flex items-center justify-center mb-3">
                  {idx + 1}
                </div>
                <span className="font-sans text-[11px] text-warm-gray mb-2 block">{step.time}</span>
                <h4 className="font-sans text-[14px] font-semibold text-warm-black mb-1">{step.title}</h4>
                <p className="font-sans text-[12px] text-warm-gray leading-[1.5] px-2">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical List */}
          <div className="sm:hidden flex flex-col gap-0 border-l-2 border-warm-mid ml-4">
            {steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-start pl-6 pb-8 relative last:pb-0">
                 <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-brown text-white font-sans text-[14px] font-bold flex items-center justify-center border-4 border-warm-bg">
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

// Section 7: Results
const Results = () => {
  const results = [
    { metric: "Week 1", title: "First Song", desc: "Most students play a recognizable song in their very first lesson. That spark keeps them coming back." },
    { metric: "6 Months", title: "First Performance", desc: "From shy beginner to confident performer. Many students play at school events or family gatherings." },
    { metric: "67 Years Old", title: "Oldest Beginner", desc: "It's never too late. My oldest student started from zero and now plays jazz standards at home." }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">
            Results
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">
            Where My Students End Up
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {results.map((res, idx) => (
             <div key={idx} className="stagger-child bg-white rounded-lg p-8 border border-warm-mid">
                <span className="font-serif text-[clamp(1.5rem,2vw,2.5rem)] text-brown block mb-2 leading-none">
                  {res.metric}
                </span>
                <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-2">
                  {res.title}
                </h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">
                  {res.desc}
                </p>
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
    <section className="animate-on-scroll w-full bg-brown py-[clamp(3rem,8vw,5rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
       <div className="max-w-[700px] mx-auto">
         <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-4">
           Let's Discuss Your Musical Goals
         </h2>
         <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/75 max-w-[500px] mx-auto mb-8 leading-[1.6]">
           Book a free, no-pressure meeting. We'll talk about what you want to learn and I'll create a plan just for you.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link to="/contact" className="w-full sm:w-auto">
             <Button variant="secondary" className="w-full sm:w-auto">Book Free Meeting</Button>
           </Link>
           <Link to="/pricing" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto bg-transparent border-2 border-white rounded-full px-7 py-[14px] text-white font-sans text-[13px] font-medium min-h-[44px] hover:bg-white hover:text-brown transition-all duration-200">
                View Pricing
             </button>
           </Link>
         </div>
       </div>
    </section>
  );
};

const TeachingMethod = () => {
  return (
    <div className="min-h-screen">
      <MethodHero />
      <Philosophy />
      <AgeGroups />
      <Instruments />
      <Genres />
      <LessonStructure />
      <Results />
      <PageCTA />
    </div>
  );
};

export default TeachingMethod;