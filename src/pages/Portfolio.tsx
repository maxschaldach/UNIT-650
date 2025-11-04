import logoAbout from "@/assets/logo-about.svg";
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
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 w-full">
        <p 
          className="font-formula font-light text-base md:text-base lg:text-lg text-center animate-fade-in"
          style={{ 
            color: '#142318',
            transform: 'scaleY(1.33)',
            lineHeight: '1.4',
            maxWidth: '90%',
            width: '100%',
            margin: '0 auto'
          }}
        >
          Portfolio content goes here.
        </p>
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
