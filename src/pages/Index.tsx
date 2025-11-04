import logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-radial)' }}>
      <img 
        src={logo} 
        alt="Logo" 
        className="absolute top-8 w-10 h-auto md:w-12 lg:w-16" 
        style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))' }}
      />
      <h1 
        className="font-formula text-foreground text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
        style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))' }}
      >
        Building for Freedom?
      </h1>
      
      <nav className="absolute bottom-12 flex gap-8 text-xs md:text-sm font-formula font-light">
        <a href="#" className="text-white opacity-100 hover:opacity-90 transition-opacity" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          Home
        </a>
        <a href="#about" className="text-white opacity-70 hover:opacity-90 transition-opacity" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          About
        </a>
        <a href="#thesis" className="text-white opacity-70 hover:opacity-90 transition-opacity" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          Thesis
        </a>
        <a href="#portfolio" className="text-white opacity-70 hover:opacity-90 transition-opacity" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          Portfolio
        </a>
        <a href="#team" className="text-white opacity-70 hover:opacity-90 transition-opacity" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}>
          Team
        </a>
      </nav>
    </div>
  );
};

export default Index;
