import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brown text-white border-2 border-transparent hover:bg-brown-hover rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] min-h-[44px]",
    secondary: "bg-amber text-warm-black border-2 border-transparent hover:bg-[#D4941E] rounded-md text-[13px] px-7 py-3.5",
    outline: "bg-transparent border-2 border-brown text-brown rounded-full hover:bg-brown hover:text-white text-[13px] px-7 py-3.5",
    ghost: "bg-transparent text-brown hover:text-brown-hover underline underline-offset-4 text-[13px] px-4 py-3.5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};