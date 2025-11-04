import logoAbout from "@/assets/logo-about.svg";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";
import berkeleyLogo from "@/assets/berkeley-logo.svg";
import washuLogo from "@/assets/washu-logo.svg";
import ethZurichLogo from "@/assets/eth-zurich-logo.svg";
import tumLogo from "@/assets/tum-logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const portfolioCompanies = [
  {
    label: "Chips",
    text: "Next-generation algorithms for a new era in chip design",
    logos: [
      { src: berkeleyLogo, alt: "Berkeley" },
      { src: washuLogo, alt: "WashU" },
    ],
  },
  {
    label: "Chips",
    text: "Novel chip architecture for the parallel future of computation",
    logos: [
      { src: ethZurichLogo, alt: "ETH Zurich" },
      { src: tumLogo, alt: "TUM" },
    ],
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioCompanies.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + portfolioCompanies.length) % portfolioCompanies.length);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentCompany = portfolioCompanies[currentIndex];

  return (
    <div
      className="fixed inset-0 flex flex-col items-center overflow-hidden"
      style={{ background: "var(--gradient-radial-light)" }}
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <img src={logoAbout} alt="Logo" className="w-12 h-auto md:w-10 lg:w-12" />
      </div>

      {/* Label box - positioned above center */}
      <div className="absolute top-[calc(50%-90px)] md:top-[calc(50%-75px)] left-1/2 -translate-x-1/2">
        <div
          className={`px-6 py-1 border rounded-full transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100 animate-fade-in-muted"
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
            {currentCompany.label}
          </span>
        </div>
      </div>

      {/* Main text - positioned identically to other pages */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 w-full max-w-4xl">
        <p
          className={`font-formula font-light text-base md:text-base lg:text-lg text-center transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100 animate-fade-in"
          }`}
          style={{
            color: "#142318",
            transform: "scaleY(1.33)",
            lineHeight: "1.4",
          }}
        >
          {currentCompany.text}
        </p>
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

      {/* University logos - positioned below center */}
      <div className="absolute top-[calc(50%+60px)] md:top-[calc(50%+50px)] left-1/2 -translate-x-1/2">
        <div className={`flex items-center justify-center gap-8 md:gap-16 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100 animate-fade-in-soft"
        }`}>
          {currentCompany.logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="h-6 w-auto" />
          ))}
        </div>
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
