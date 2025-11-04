import logoAbout from "@/assets/logo-about.svg";

const About = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden pt-8" style={{ background: 'var(--gradient-radial-light)' }}>
      <img 
        src={logoAbout} 
        alt="Logo" 
        className="absolute top-8 w-8 h-auto md:w-10 lg:w-12" 
      />
      <p 
        className="font-formula font-light text-sm md:text-base lg:text-lg text-center px-8"
        style={{ 
          color: '#142318',
          transform: 'scaleY(1.33)',
          lineHeight: '1.4',
          maxWidth: '90%',
          width: '100%'
        }}
      >
        We back defiant students, dropouts, and recent grads building technologies that advance European and U.S. leadership in critical industries to strengthen our resilience and freedom. If that's you, we're your first believers. We write fast first checks up to $100k.
      </p>
      
      <nav className="absolute bottom-12 flex gap-6 text-[10px] md:text-xs font-formula font-light">
        <a href="/" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          Home
        </a>
        <a href="/about" style={{ color: '#142318', opacity: 1, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          About
        </a>
        <a href="/thesis" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          Thesis
        </a>
        <a href="#portfolio" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          Portfolio
        </a>
        <a href="/team" style={{ color: '#142318', opacity: 0.7, transform: 'scaleY(1.4)', display: 'inline-block' }} className="hover:opacity-90 transition-opacity">
          Team
        </a>
      </nav>
    </div>
  );
};

export default About;
