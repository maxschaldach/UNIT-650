import logoAbout from "@/assets/logo-about.svg";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";
import berkeleyLogo from "@/assets/berkeley-logo.svg";
import washuLogo from "@/assets/washu-logo.svg";
import ethZurichLogo from "@/assets/eth-zurich-logo.svg";
import tumLogo from "@/assets/tum-logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const portfolioCompanies = [
  {
    label: "Chips",
    text: "Next-generation algorithms for a new era in chip design",
    logos: [
      { src: berkeleyLogo, alt: "Berkeley", size: "h-6" },
      { src: washuLogo, alt: "WashU", size: "h-6" },
    ],
  },
  {
    label: "Chips",
    text: "Novel chip architecture for the parallel future of computation",
    logos: [
      { src: ethZurichLogo, alt: "ETH Zurich", size: "h-5" },
      { src: tumLogo, alt: "TUM", size: "h-5" },
    ],
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 7000);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioCompanies.length);
      setIsTransitioning(false);
    }, 700);
    resetTimer();
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + portfolioCompanies.length) % portfolioCompanies.length);
      setIsTransitioning(false);
    }, 700);
    resetTimer();
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center overflow-hidden"
      style={{ background: "var(--gradient-radial-light)" }}
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <img src={logoAbout} alt="Logo" className="w-12 h-auto md:w-10 lg:w-12" />
      </div>

      {/* Pre-render all companies - Label boxes */}
      <div className="absolute top-[calc(50%-90px)] md:top-[calc(50%-75px)] left-1/2 -translate-x-1/2">
        {portfolioCompanies.map((company, index) => (
          <div
            key={`label-${index}`}
            className={`absolute top-0 left-1/2 -translate-x-1/2 px-6 py-1 border rounded-full transition-opacity duration-700 ${
              isInitialLoad && index === 0
                ? "animate-fade-in-muted"
                : currentIndex === index && !isTransitioning
                ? "opacity-30"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              borderColor: "#142318",
            }}
          >
            <span
              className="font-formula font-light text-xs"
              style={{
                color: "#142318",
                transform: "scaleY(1.33)",
                display: "inline-block",
              }}
            >
              {company.label}
            </span>
          </div>
        ))}
      </div>

      {/* Pre-render all companies - Main text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 w-full max-w-4xl">
        {portfolioCompanies.map((company, index) => (
          <p
            key={`text-${index}`}
            className={`absolute top-0 left-0 right-0 font-formula font-light text-base md:text-base lg:text-lg text-center transition-opacity duration-700 ${
              isInitialLoad && index === 0
                ? "animate-fade-in"
                : currentIndex === index && !isTransitioning
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              color: "#142318",
              transform: "scaleY(1.33)",
              lineHeight: "1.4",
            }}
          >
            {company.text}
          </p>
        ))}
      </div>

      {/* Left arrow - positioned at center left */}
      <img
        src={arrowLeft}
        alt="Previous"
        onClick={handlePrevious}
        className="absolute top-[calc(50%-3px)] -translate-y-1/2 left-8 w-4 h-auto opacity-80 animate-fade-in-subtle cursor-pointer hover:opacity-90 transition-opacity"
      />

      {/* Right arrow - positioned at center right */}
      <img
        src={arrowRight}
        alt="Next"
        onClick={handleNext}
        className="absolute top-[calc(50%-3px)] -translate-y-1/2 right-8 w-4 h-auto opacity-80 animate-fade-in-subtle cursor-pointer hover:opacity-90 transition-opacity"
      />

      {/* Pre-render all companies - University logos */}
      <div className="absolute top-[calc(50%+60px)] md:top-[calc(50%+50px)] left-1/2 -translate-x-1/2">
        {portfolioCompanies.map((company, index) => (
          <div
            key={`logos-${index}`}
            className={`absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-8 md:gap-16 transition-opacity duration-700 ${
              isInitialLoad && index === 0
                ? "animate-fade-in-soft"
                : currentIndex === index && !isTransitioning
                ? "opacity-20"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {company.logos.map((logo, logoIndex) => (
              <img key={logoIndex} src={logo.src} alt={logo.alt} className={`${logo.size} w-auto`} />
            ))}
          </div>
        ))}
      </div>

      <nav className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 text-xs md:text-xs font-formula font-light">
        <Link
          to="/"
          style={{ color: "#142318", opacity: 0.7, transform: "scaleY(1.4)", display: "inline-block" }}
          className="hover:opacity-90 hover:scale-110 transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: "#142318", opacity: 0.7, transform: "scaleY(1.4)", display: "inline-block" }}
          className="hover:opacity-90 hover:scale-110 transition-all duration-200"
        >
          About
        </Link>
        <Link
          to="/thesis"
          style={{ color: "#142318", opacity: 0.7, transform: "scaleY(1.4)", display: "inline-block" }}
          className="hover:opacity-90 hover:scale-110 transition-all duration-200"
        >
          Thesis
        </Link>
        <Link
          to="/portfolio"
          style={{ color: "#142318", opacity: 1, transform: "scaleY(1.4)", display: "inline-block" }}
          className="hover:opacity-90 hover:scale-110 transition-all duration-200"
        >
          Portfolio
        </Link>
        <Link
          to="/team"
          style={{ color: "#142318", opacity: 0.7, transform: "scaleY(1.4)", display: "inline-block" }}
          className="hover:opacity-90 hover:scale-110 transition-all duration-200"
        >
          Team
        </Link>
      </nav>
    </div>
  );
};

export default Portfolio;
