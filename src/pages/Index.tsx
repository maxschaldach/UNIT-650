import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden pt-8" style={{ background: 'var(--gradient-radial)' }}>
      <img 
        src={logo} 
        alt="Logo" 
        className="absolute top-8 w-10 h-auto md:w-10 lg:w-12" 
        style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.4))' }}
      />
      <h1 
        className="font-formula text-foreground text-7xl md:text-7xl lg:text-8xl font-black tracking-normal animate-fade-in px-4 text-center leading-[0.9] md:leading-normal max-w-[90%]"
        style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.45))', transform: 'scaleY(1.33)', willChange: 'filter, transform' }}
      >
        Building for Freedom?
      </h1>
      
      <a 
        href="https://www.linkedin.com/in/max-schaldach/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        className="mt-16 px-14 py-1 border border-white font-formula font-medium text-white text-sm md:text-sm cursor-pointer animate-fade-in transition-all duration-200 active:scale-95"
        style={{
          borderRadius: '14px',
          transform: `scale(${isButtonHovered ? 1.045 : 0.95}) scaleY(1.33)`,
          display: 'inline-block',
          paddingTop: '0.4rem',
          background: 'transparent',
          boxShadow: '0 0 5px rgba(255, 255, 255, 0.5), inset 0 0 5px rgba(255, 255, 255, 0.3)',
          animationDelay: '0.4s',
          opacity: 0,
          animationFillMode: 'forwards'
        }}
      >
        Get your first check
      </a>
      
      <nav className="absolute bottom-12 flex gap-6 text-xs md:text-xs font-formula font-light">
        <Link 
          to="/" 
          onMouseEnter={() => setHoveredLink('home')}
          onMouseLeave={() => setHoveredLink(null)}
          className="text-white opacity-100 hover:opacity-90 transition-all duration-200" 
          style={{ transform: `scale(${hoveredLink === 'home' ? 1.1 : 1}) scaleY(1.4)`, display: 'inline-block' }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          onMouseEnter={() => setHoveredLink('about')}
          onMouseLeave={() => setHoveredLink(null)}
          className="text-white opacity-70 hover:opacity-90 transition-all duration-200" 
          style={{ transform: `scale(${hoveredLink === 'about' ? 1.1 : 1}) scaleY(1.4)`, display: 'inline-block' }}
        >
          About
        </Link>
        <Link 
          to="/thesis" 
          onMouseEnter={() => setHoveredLink('thesis')}
          onMouseLeave={() => setHoveredLink(null)}
          className="text-white opacity-70 hover:opacity-90 transition-all duration-200" 
          style={{ transform: `scale(${hoveredLink === 'thesis' ? 1.1 : 1}) scaleY(1.4)`, display: 'inline-block' }}
        >
          Thesis
        </Link>
        <Link 
          to="/portfolio" 
          onMouseEnter={() => setHoveredLink('portfolio')}
          onMouseLeave={() => setHoveredLink(null)}
          className="text-white opacity-70 hover:opacity-90 transition-all duration-200" 
          style={{ transform: `scale(${hoveredLink === 'portfolio' ? 1.1 : 1}) scaleY(1.4)`, display: 'inline-block' }}
        >
          Portfolio
        </Link>
        <Link 
          to="/team" 
          onMouseEnter={() => setHoveredLink('team')}
          onMouseLeave={() => setHoveredLink(null)}
          className="text-white opacity-70 hover:opacity-90 transition-all duration-200" 
          style={{ transform: `scale(${hoveredLink === 'team' ? 1.1 : 1}) scaleY(1.4)`, display: 'inline-block' }}
        >
          Team
        </Link>
      </nav>
    </div>
  );
};

export default Index;
