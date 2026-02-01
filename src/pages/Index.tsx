import logo from "@/assets/unit650-logo.png";

const Index = () => {
  return (
    <div className="fixed inset-0 bg-[#142318] p-8 md:p-12 lg:p-16">
      {/* Logo - upper left */}
      <img 
        src={logo} 
        alt="UNIT 650" 
        className="h-6 md:h-8 lg:h-10 w-auto"
      />
      
      {/* Plus sign - upper right */}
      <span 
        className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 text-white font-formula font-light leading-none"
        style={{ fontSize: 'calc(1.5rem * 5/6)', lineHeight: 1 }}
      >
        +
      </span>
      
      {/* Responsive plus for different breakpoints */}
      <style>{`
        @media (min-width: 768px) {
          .plus-sign { font-size: calc(2rem * 5/6) !important; }
        }
        @media (min-width: 1024px) {
          .plus-sign { font-size: calc(2.5rem * 5/6) !important; }
        }
      `}</style>
      
      {/* Text - lower left */}
      <p 
        className="absolute bottom-8 left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 text-white font-formula font-light text-sm md:text-base lg:text-lg max-w-[90vw] md:max-w-[60vw] lg:max-w-[50vw]"
        style={{ 
          textWrap: 'balance',
          lineHeight: 1.4
        }}
      >
        Freedom is a function of our technological independence. UNIT 650 backs students, dropouts, and recent graduates building technologies critical to European and U.S. leadership in manufacturing, robotics, AI, space, and defense. We write idea-stage checks up to $100k.
      </p>
    </div>
  );
};

export default Index;
