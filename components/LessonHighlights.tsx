import React from 'react';
import { Link } from 'react-router-dom';

interface LessonCardProps {
  title: string;
  description: string;
  image: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description, image }) => (
  <Link to="/how-i-teach" className="stagger-child block group h-full">
    <div className="bg-white border border-warm-mid rounded-lg overflow-hidden transition-shadow duration-200 ease-out hover:shadow-offset-md h-full flex flex-col">
      <div className="h-[180px] w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-serif text-[16px] text-warm-black mb-2">{title}</h3>
        <p className="font-sans text-[14px] text-warm-gray leading-[1.5] mb-4 flex-grow">{description}</p>
        <span className="font-sans text-[13px] font-medium text-brown underline underline-offset-4 mt-auto">Learn more →</span>
      </div>
    </div>
  </Link>
);

const LessonHighlights: React.FC = () => {
  const lessons = [
    {
      title: "Electric Guitar",
      description: "From rock riffs to jazz chords — explore your sound on electric.",
      image: "https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-burgundy-closeup.jpg"
    },
    {
      title: "Acoustic Guitar",
      description: "Fingerpicking, strumming, and songwriting — the heart of the guitar.",
      image: "https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-wide-landscape.jpg"
    },
    {
      title: "Bass Guitar",
      description: "Groove, rhythm, and the foundation of every great band.",
      image: "https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-burgundy-portrait.jpg"
    },
    {
      title: "Ukulele",
      description: "The perfect starter instrument — fun, portable, and surprisingly versatile.",
      image: "https://pub-4bf88f98ba4d45e5acd8c1b618eb037e.r2.dev/lucas-terhaar/website/guitar-couch-bw-portrait.jpg"
    }
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3">
          What You'll Learn
        </p>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mb-12">
          Lessons for Every Instrument & Style
        </h2>
        
        {/* Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {lessons.map((lesson, idx) => (
            <LessonCard key={idx} {...lesson} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonHighlights;