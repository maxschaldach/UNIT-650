import logoAbout from "@/assets/logo-about.svg";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";
import berkeleyLogo from "@/assets/berkeley-logo.svg";
import washuLogo from "@/assets/washu-logo.svg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center overflow-hidden" style={{ background: 'var(--gradient-radial-light)' }}>
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <img 
          src={logoAbout} 
          alt="Logo" 
          className="w-12 h-auto md:w-10 lg:w-12" 
        />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 w-full flex flex-col items-center gap-8">
        {/* Category box */}
        <div 
          className="px-6 py-1 border rounded-full animate-fade-in"
          style={{ 
            borderColor: '#142318',
            opacity: 0.3
          }}
        >
          <span 
            className="font-formula font-light text-xs"
            style={{ 
              color: '#142318',
              transform: 'scaleY(1.33)',
              display: 'inline-block'
            }}
          >
            Chips
          </span>
        </div>

        {/* Main content with arrows */}
        <div className="flex items-center gap-2 md:gap-3 w-full max-w-4xl">
          <img 
            src={arrowLeft} 
            alt="Previous" 
            className="w-4 h-auto flex-shrink-0 animate-fade-in cursor-pointer hover:opacity-10 transition-opacity"
            style={{ opacity: 0.05 }}
          />
          
          <p 
            className="font-formula font-light text-base md:text-base lg:text-lg text-center animate-fade-in flex-1"
            style={{ 
              color: '#142318',
              transform: 'scaleY(1.33)',
              lineHeight: '1.4'
            }}
          >
            Next-generation algorithms for a new area in chip design
          </p>
          
          <img 
            src={arrowRight} 
            alt="Next" 
            className="w-4 h-auto flex-shrink-0 animate-fade-in cursor-pointer hover:opacity-10 transition-opacity"
            style={{ opacity: 0.05 }}
          />
        </div>

        {/* University logos */}
        <div className="flex items-center justify-center gap-16 animate-fade-in">
          <img 
            src={berkeleyLogo} 
            alt="Berkeley" 
            className="h-6 w-auto"
            style={{ opacity: 0.15 }}
          />
          <img 
            src={washuLogo} 
            alt="WashU" 
            className="h-6 w-auto"
            style={{ opacity: 0.15 }}
          />
        </div>
      </div>
      
      <nav className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 text-xs md:text-xs font-formula font-light">
        <Link to="/" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          Home
        </Link>
        <Link to="/about" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          About
        </Link>
        <Link to="/thesis" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          Thesis
        </Link>
        <Link to="/portfolio" style={{ color: '#142318', opacity: 1, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          Portfolio
        </Link>
        <Link to="/team" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          Team
        </Link>
      </nav>
    </div>
  );
};

export default Portfolio;
