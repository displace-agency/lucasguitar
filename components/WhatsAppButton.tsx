import React from 'react';
import { trackWhatsAppClick } from '../hooks/useTracking';

interface WhatsAppButtonProps {
  isBannerVisible: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isBannerVisible }) => {
  return (
    <a
      href="https://wa.me/491627362969?text=Hi%20Lucas%2C%20I'm%20interested%20in%20guitar%20lessons.%20Could%20we%20chat%3F"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${isBannerVisible ? 'banner-visible' : ''}`}
      aria-label="Chat with Lucas on WhatsApp"
      onClick={() => trackWhatsAppClick('general')}
    >
      <span className="text-[20px] leading-none">🎸</span>
      <span className="whatsapp-label font-sans text-[13px] font-medium text-white">
        Chat with Lucas
      </span>
    </a>
  );
};

export default WhatsAppButton;