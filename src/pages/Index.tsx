import logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden pt-8" style={{ background: 'var(--gradient-radial)' }}>
      <img 
        src={logo} 
        alt="Logo" 
        className="absolute top-8 w-8 h-auto md:w-10 lg:w-12" 
        style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))' }}
      />
      <h1 
        className="font-formula text-foreground text-6xl md:text-7xl lg:text-8xl font-black tracking-normal"
        style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))', transform: 'scaleY(1.33)', display: 'inline-block' }}
      >
        Building for Freedom?
      </h1>
      
      <div 
        className="mt-16 px-20 py-2 border border-white rounded-2xl font-formula font-medium text-white text-xs md:text-sm"
        style={{ 
          transform: 'scale(0.95) scaleY(1.33)',
          display: 'inline-block',
          paddingTop: '0.5rem'
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
