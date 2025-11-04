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
        className="font-formula text-foreground text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight"
        style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))' }}
      >
        Building for Freedom?
      </h1>
    </div>
  );
};

export default Index;
