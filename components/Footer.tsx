import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-warm-surface pt-10 px-4 md:px-8 lg:pt-16 lg:px-[clamp(24px,4vw,80px)] lg:pb-8 pb-6">
      <div className="max-w-site mx-auto">
        
        {/* Desktop/Tablet Grid */}
        <div className="hidden md:grid grid-cols-8 lg:grid-cols-12 gap-x-4 lg:gap-x-[clamp(16px,2vw,24px)] mb-12">
          
          {/* Brand Section */}
          <div className="col-span-8 lg:col-span-5 mb-8 lg:mb-0">
            <Link to="/" className="font-serif text-[24px] text-brown block">
              Lucas Terhaar
            </Link>
            <p className="font-sans text-[14px] text-warm-gray mt-3 max-w-[280px] leading-relaxed">
              Personalized guitar lessons for kids and adults in Berlin.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-span-8 lg:col-span-6 lg:col-start-7 grid grid-cols-3 gap-4">
            
            {/* Navigate */}
            <div className="col-span-1">
              <h4 className="font-sans text-[11px] font-bold text-warm-gray uppercase tracking-[1.5px] mb-4">
                Navigate
              </h4>
              <ul className="space-y-2">
                {['Home', 'How I Teach', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="font-sans text-[14px] text-warm-black hover:text-brown transition-colors leading-[2.2]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More */}
            <div className="col-span-1">
              <h4 className="font-sans text-[11px] font-bold text-warm-gray uppercase tracking-[1.5px] mb-4">
                Learn More
              </h4>
              <ul className="space-y-2">
                <li><Link to="/#about" className="font-sans text-[14px] text-warm-black hover:text-brown transition-colors leading-[2.2]">About</Link></li>
                <li><Link to="/#testimonials" className="font-sans text-[14px] text-warm-black hover:text-brown transition-colors leading-[2.2]">Testimonials</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="col-span-1">
              <h4 className="font-sans text-[11px] font-bold text-warm-gray uppercase tracking-[1.5px] mb-4">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.instagram.com/lucasterhaar_guitar/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 font-sans text-[14px] text-warm-black hover:text-brown transition-colors leading-[2.2]"
                  >
                    <Instagram size={18} strokeWidth={1.5} /> Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@LucasTerhaar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 font-sans text-[14px] text-warm-black hover:text-brown transition-colors leading-[2.2]"
                  >
                    <Youtube size={18} strokeWidth={1.5} /> YouTube
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@lucasterhaar.com" className="flex items-center gap-2 font-sans text-[14px] text-warm-black hover:text-brown transition-colors leading-[2.2]">
                    <Mail size={18} strokeWidth={1.5} /> Email
                  </a>
                </li>
                <li>
                   <a 
                    href="https://wa.me/491627362969" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-sans text-[14px] text-warm-black hover:text-brown transition-colors leading-[2.2]"
                   >
                     <span className="text-[16px] leading-none">💬</span> WhatsApp
                   </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col">
          {/* Brand */}
          <div className="mb-8">
            <Link to="/" className="font-serif text-[22px] text-brown block">
              Lucas Terhaar
            </Link>
            <p className="font-sans text-[14px] text-warm-gray mt-2">
              Personalized guitar lessons for kids and adults in Berlin.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 mb-10">
            {/* Left Col: Navigate & Connect */}
            <div className="space-y-10">
              <div>
                <h4 className="font-sans text-[11px] font-bold text-warm-black/50 uppercase tracking-[1.5px] mb-4">
                  Navigate
                </h4>
                <ul className="space-y-1">
                  {['Home', 'How I Teach', 'Pricing', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link 
                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="font-sans text-[14px] text-warm-black leading-[2.2]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-sans text-[11px] font-bold text-warm-black/50 uppercase tracking-[1.5px] mb-4">
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.instagram.com/lucasterhaar_guitar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-[14px] text-warm-black">
                      <Instagram size={18} /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@LucasTerhaar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-[14px] text-warm-black">
                      <Youtube size={18} /> YouTube
                    </a>
                  </li>
                  <li><a href="mailto:hello@lucasterhaar.com" className="flex items-center gap-2 font-sans text-[14px] text-warm-black"><Mail size={18} /> Email</a></li>
                  <li>
                    <a href="https://wa.me/491627362969" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-[14px] text-warm-black">
                      <span className="text-[16px] leading-none">💬</span> WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Col: Learn More */}
            <div>
              <h4 className="font-sans text-[11px] font-bold text-warm-black/50 uppercase tracking-[1.5px] mb-4">
                Learn More
              </h4>
              <ul className="space-y-1">
                <li><Link to="/#about" className="font-sans text-[14px] text-warm-black leading-[2.2]">About</Link></li>
                <li><Link to="/#testimonials" className="font-sans text-[14px] text-warm-black leading-[2.2]">Testimonials</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="font-serif text-[clamp(2.5rem,2.5rem+4vw,4rem)] md:text-[clamp(3rem,3rem+4vw,6rem)] text-warm-black/5 text-center my-8 md:my-12 select-none whitespace-nowrap overflow-hidden">
          Lucas Terhaar
        </div>

        {/* Legal Row */}
        <div className="pt-6 border-t border-warm-mid">
          
          {/* Desktop/Tablet Legal */}
          <div className="hidden md:grid grid-cols-8 lg:grid-cols-12 gap-x-4 lg:gap-x-6 items-center">
            <div className="col-span-4 lg:col-span-6 flex gap-6">
              <Link to="/privacy" className="font-sans text-[12px] text-warm-gray underline hover:text-warm-black">Privacy Policy</Link>
              <Link to="/impressum" className="font-sans text-[12px] text-warm-gray underline hover:text-warm-black">Impressum</Link>
            </div>
            <div className="col-span-4 lg:col-span-6 text-right">
              <span className="font-sans text-[12px] text-warm-gray">© 2026 Lucas Terhaar Guitar. All rights reserved.</span>
            </div>
          </div>

          {/* Mobile Legal */}
          <div className="md:hidden flex flex-col gap-4">
            <div className="flex justify-between w-full">
              <Link to="/privacy" className="font-sans text-[12px] text-warm-black/50 underline">Privacy Policy</Link>
              <Link to="/impressum" className="font-sans text-[12px] text-warm-black/50 underline">Impressum</Link>
            </div>
            <div className="text-left">
              <span className="font-sans text-[11px] text-warm-black/40">© 2026 Lucas Terhaar Guitar.</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;