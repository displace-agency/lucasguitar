import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'DE'>('EN');

  const navLinks = [
    { name: 'How I Teach', path: '/how-i-teach' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[64px] lg:h-[72px] bg-white border-b border-warm-mid z-[100] flex items-center justify-center px-4 lg:px-[clamp(24px,4vw,80px)]">
        <div className="w-full max-w-site flex items-center justify-between">
          
          {/* Mobile Left: Hamburger */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(true)} 
              className="text-warm-black p-1"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="font-serif text-[18px] lg:text-[20px] text-brown z-[101]">
            Lucas Terhaar
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0 xl:gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="font-sans text-[13px] xl:text-[14px] font-medium text-warm-black px-3 xl:px-4 py-2 hover:text-brown transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side: Lang + CTA */}
          <div className="flex items-center gap-4">
            {/* Desktop Lang Toggle */}
            <div className="hidden lg:flex items-center gap-1 text-[12px] font-sans text-warm-black">
              <button 
                onClick={() => setLang('EN')} 
                className={`p-1 ${lang === 'EN' ? 'font-semibold opacity-100' : 'font-normal opacity-40'}`}
              >
                EN
              </button>
              <span className="opacity-40">/</span>
              <button 
                onClick={() => setLang('DE')} 
                className={`p-1 ${lang === 'DE' ? 'font-semibold opacity-100' : 'font-normal opacity-40'}`}
              >
                DE
              </button>
            </div>

            {/* Desktop & Mobile CTA */}
            <Link to="/contact">
              <Button 
                variant="primary" 
                className="text-[11px] px-[14px] lg:text-[12px] lg:px-[20px] py-[10px] h-[44px] rounded-md"
              >
                Book Free Meeting
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[99] transition-transform duration-300 ease-out pt-[64px] px-4 pb-8 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-[20px] left-[16px] text-warm-black"
            aria-label="Close menu"
          >
            <X size={24} />
        </button>

        <div className="flex flex-col w-full mt-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-serif text-[24px] text-warm-black py-4 border-b border-warm-mid w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-1 text-[14px] font-sans text-warm-black mb-8">
          <button 
            onClick={() => setLang('EN')} 
            className={`p-1 ${lang === 'EN' ? 'font-semibold opacity-100' : 'font-normal opacity-40'}`}
          >
            EN
          </button>
          <span className="opacity-40">/</span>
          <button 
            onClick={() => setLang('DE')} 
            className={`p-1 ${lang === 'DE' ? 'font-semibold opacity-100' : 'font-normal opacity-40'}`}
          >
            DE
          </button>
        </div>

        <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full">
          <Button variant="primary" className="w-full h-[48px] text-[13px]">
            Book Free Meeting
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;