import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CookieBannerProps {
  onVisibilityChange: (isVisible: boolean) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
      onVisibilityChange(true);
    }
  }, [onVisibilityChange]);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    onVisibilityChange(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    onVisibilityChange(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner fixed bottom-0 left-0 right-0 z-95 bg-white border-t border-[#E8DFD3] shadow-[0_-2px_8px_rgba(0,0,0,0.06)] px-4 lg:px-[clamp(24px,4vw,80px)] py-4">
      <div className="max-w-site mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        <p className="font-sans text-[13px] text-[#7A6E62]">
          This website uses cookies to ensure you get the best experience. {' '}
          <Link to="/privacy" className="underline text-brown hover:text-brown-hover">
            Privacy Policy
          </Link>
        </p>
        
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 rounded-md border border-[#E8DFD3] bg-transparent font-sans text-[12px] font-medium text-[#7A6E62] hover:bg-warm-surface transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 rounded-md bg-brown text-white font-sans text-[12px] font-medium hover:bg-brown-hover transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;