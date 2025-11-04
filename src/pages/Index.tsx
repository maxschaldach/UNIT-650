import logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-radial)' }}>
      <img src={logo} alt="Logo" className="absolute top-8 h-auto" style={{ width: 'calc(100vw / 30)' }} />
      <h1 className="font-formula text-foreground text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
        Rewriting the World?
      </h1>
    </div>
  );
};

export default Index;
