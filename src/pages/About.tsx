import logoAbout from "@/assets/logo-about.svg";

const About = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden pt-8" style={{ background: 'var(--gradient-radial-light)' }}>
      <img 
        src={logoAbout} 
        alt="Logo" 
        className="absolute top-8 w-8 h-auto md:w-10 lg:w-12" 
      />
      <h1 
        className="font-formula text-6xl md:text-7xl lg:text-8xl font-black tracking-normal"
        style={{ color: '#142318', filter: 'drop-shadow(0 0 5px rgba(20, 35, 24, 0.5))', transform: 'scaleY(1.33)', display: 'inline-block' }}
      >
        Building for Freedom?
      </h1>
      
      <button 
        className="mt-16 px-20 py-1 border rounded-2xl font-formula font-medium text-xs md:text-sm cursor-pointer"
        style={{ 
          borderColor: '#142318',
          color: '#142318',
          transform: 'scale(0.95) scaleY(1.33)',
          display: 'inline-block',
          paddingTop: '0.4rem',
          filter: 'drop-shadow(0 0 0px rgba(20, 35, 24, 0))',
          transition: 'filter 0.4s ease-in-out'
        }}
        onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 3px rgba(20, 35, 24, 0.6))'}
        onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(20, 35, 24, 0))'}
        onClick={() => console.log('Get your first check clicked')}
      >
        Get your first check
      </button>
      
      <nav className="absolute bottom-12 flex gap-6 text-[10px] md:text-xs font-formula font-light">
        <a href="/" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          Home
        </a>
        <a href="#about" style={{ color: '#142318', opacity: 1, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          About
        </a>
        <a href="#thesis" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          Thesis
        </a>
        <a href="#portfolio" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          Portfolio
        </a>
        <a href="#team" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          Team
        </a>
      </nav>
    </div>
  );
};

export default About;
