import React from 'react';

const TrustBar: React.FC = () => {
  const stats = [
    { value: "8+", label: "Years Teaching" },
    { value: "200+", label: "Students Taught" },
    { value: "6+", label: "Genres Covered" },
    { value: "Berlin", label: "Based & Teaching" },
  ];

  return (
    <div className="w-full bg-white border-b border-warm-mid">
      <div className="max-w-site mx-auto px-4 lg:px-[clamp(24px,4vw,80px)] py-6 lg:py-[clamp(24px,4vw,80px)]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-[clamp(16px,2vw,24px)] text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="font-serif text-[clamp(1.5rem,1.5rem+1vw,2.25rem)] text-brown mb-1 leading-none">
                {stat.value}
              </span>
              <span className="font-sans text-[12px] font-medium text-warm-gray uppercase tracking-[1px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;