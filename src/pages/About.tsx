import logo from "@/assets/logo.svg";

const About = () => {
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
        About Us
      </h1>
      
      <p 
        className="mt-8 max-w-2xl text-center font-formula text-foreground text-lg md:text-xl font-light px-8"
        style={{ transform: 'scaleY(1.33)', display: 'inline-block' }}
      >
        We're building the future of freedom
      </p>
      
      <nav className="absolute bottom-12 flex gap-6 text-[10px] md:text-xs font-formula font-light">
        <a href="/" style={{ color: '#142318', transform: 'scaleY(1.4)', display: 'inline-block', opacity: 0.7 }} className="hover:opacity-90 transition-opacity">
          Home
        </a>
        <a href="/about" style={{ color: '#142318', transform: 'scaleY(1.4)', display: 'inline-block', opacity: 1 }} className="hover:opacity-90 transition-opacity">
          About
        </a>
        <a href="#thesis" style={{ color: '#142318', transform: 'scaleY(1.4)', display: 'inline-block', opacity: 0.7 }} className="hover:opacity-90 transition-opacity">
          Thesis
        </a>
        <a href="#portfolio" style={{ color: '#142318', transform: 'scaleY(1.4)', display: 'inline-block', opacity: 0.7 }} className="hover:opacity-90 transition-opacity">
          Portfolio
        </a>
        <a href="#team" style={{ color: '#142318', transform: 'scaleY(1.4)', display: 'inline-block', opacity: 0.7 }} className="hover:opacity-90 transition-opacity">
          Team
        </a>
      </nav>
    </div>
  );
};

export default About;
