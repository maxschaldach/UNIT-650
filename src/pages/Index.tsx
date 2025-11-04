import logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-radial)' }}>
      <img 
        src={logo} 
        alt="Logo" 
        className="absolute top-8 w-8 h-auto md:w-10 lg:w-12" 
        style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))' }}
      />
      <h1 
        className="font-formula text-foreground text-6xl md:text-8xl lg:text-9xl font-black tracking-normal"
        style={{ filter: 'drop-shadow(0 0 7px rgba(255, 255, 255, 0.6))', transform: 'scaleY(1.33)', display: 'inline-block' }}
      >
        Building for Freedom?
      </h1>
      
      <div 
        className="mt-20 px-20 py-1 border border-white rounded-2xl font-formula font-medium text-white text-xs md:text-sm"
        style={{ 
          transform: 'scale(1.05) scaleY(1.33)',
          display: 'inline-block',
          paddingTop: '0.3rem'
        }}
      >
        Get your first check
      </div>
      
      <nav className="absolute bottom-12 flex gap-6 text-[10px] md:text-xs font-formula font-light">
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
