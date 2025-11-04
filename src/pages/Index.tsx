import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden pt-8" style={{ background: 'var(--gradient-radial)' }}>
      <img 
        src={logo} 
        alt="Logo" 
        className="absolute top-8 w-10 h-auto md:w-10 lg:w-12" 
        style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))' }}
      />
      <h1 
        className="font-formula text-foreground text-7xl md:text-7xl lg:text-8xl font-black tracking-normal animate-fade-in px-4 text-center leading-[0.9] md:leading-normal max-w-[90%]"
        style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))', transform: 'scaleY(1.33)', willChange: 'filter, transform' }}
      >
        Building for Freedom?
      </h1>
      
      <a 
        href="https://www.linkedin.com/in/max-schaldach/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 px-14 py-1 border border-white font-formula font-medium text-white text-sm md:text-sm cursor-pointer animate-fade-in transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          borderRadius: '14px',
          transform: 'scale(0.95) scaleY(1.33)',
          display: 'inline-block',
          paddingTop: '0.4rem',
          filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))',
          animationDelay: '0.4s',
          opacity: 0,
          animationFillMode: 'forwards'
        }}
      >
        Get your first check
      </a>
      
      <nav className="absolute bottom-12 flex gap-6 text-xs md:text-xs font-formula font-light">
        <Link to="/" className="text-white opacity-100 hover:opacity-90 hover:scale-110 transition-all duration-200" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          Home
        </Link>
        <Link to="/about" className="text-white opacity-70 hover:opacity-90 hover:scale-110 transition-all duration-200" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          About
        </Link>
        <Link to="/thesis" className="text-white opacity-70 hover:opacity-90 hover:scale-110 transition-all duration-200" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          Thesis
        </Link>
        <Link to="/portfolio" className="text-white opacity-70 hover:opacity-90 hover:scale-110 transition-all duration-200" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          Portfolio
        </Link>
        <Link to="/team" className="text-white opacity-70 hover:opacity-90 hover:scale-110 transition-all duration-200" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          Team
        </Link>
      </nav>
    </div>
  );
};

export default Index;
