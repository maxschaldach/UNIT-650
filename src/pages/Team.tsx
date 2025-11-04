import logoAbout from "@/assets/logo-about.svg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden pt-8" style={{ background: 'var(--gradient-radial-light)' }}>
      <img 
        src={logoAbout} 
        alt="Logo" 
        className="absolute top-8 w-8 h-auto md:w-10 lg:w-12" 
      />
      <p 
        className="font-formula font-light text-sm md:text-base lg:text-lg text-center px-8 animate-fade-in"
        style={{ 
          color: '#142318',
          transform: 'scaleY(1.33)',
          lineHeight: '1.4',
          maxWidth: '90%',
          width: '100%'
        }}
      >
        UNIT 650 was born at Stanford and is powered by a European entrepreneur and investor in Spotify, Coinbase, and Revolut.
      </p>
      
      <nav className="absolute bottom-12 flex gap-6 text-[10px] md:text-xs font-formula font-light">
        <Link to="/" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          Home
        </Link>
        <Link to="/about" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          About
        </Link>
        <Link to="/thesis" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          Thesis
        </Link>
        <Link to="/portfolio" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          Portfolio
        </Link>
        <Link to="/team" style={{ color: '#142318', opacity: 1, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 hover:scale-110 transition-all duration-200">
          Team
        </Link>
      </nav>
    </div>
  );
};

export default Team;
