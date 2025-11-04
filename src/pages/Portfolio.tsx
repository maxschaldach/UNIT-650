import logoAbout from "@/assets/logo-about.svg";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";
import berkeleyLogo from "@/assets/berkeley-logo.svg";
import washuLogo from "@/assets/washu-logo.svg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center overflow-hidden"
      style={{ background: "var(--gradient-radial-light)" }}
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <img src={logoAbout} alt="Logo" className="w-12 h-auto md:w-10 lg:w-12" />
      </div>

      {/* Chips box - positioned above center */}
      <div className="absolute top-[calc(50%-60px)] left-1/2 -translate-x-1/2">
        <div
          className="px-6 py-1 border rounded-full animate-fade-in-muted"
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
            Chips
          </span>
        </div>
      </div>

      {/* Main text - positioned identically to other pages */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 w-full max-w-4xl">
        <p
          className="font-formula font-light text-base md:text-base lg:text-lg text-center animate-fade-in"
          style={{
            color: "#142318",
            transform: "scaleY(1.33)",
            lineHeight: "1.4",
          }}
        >
          Next-generation algorithms for a new era in chip design
        </p>
      </div>

      {/* Left arrow - positioned at center left */}
      <img
        src={arrowLeft}
        alt="Previous"
        className="absolute top-1/2 -translate-y-1/2 left-8 w-4 h-auto opacity-80 animate-fade-in-subtle cursor-pointer hover:opacity-10 transition-opacity"
      />

      {/* Right arrow - positioned at center right */}
      <img
        src={arrowRight}
        alt="Next"
        className="absolute top-1/2 -translate-y-1/2 right-8 w-4 h-auto opacity-80 animate-fade-in-subtle cursor-pointer hover:opacity-10 transition-opacity"
      />

      {/* University logos - positioned below center */}
      <div className="absolute top-[calc(50%+60px)] left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-center gap-8 md:gap-16 animate-fade-in-soft">
          <img src={berkeleyLogo} alt="Berkeley" className="h-6 w-auto" />
          <img src={washuLogo} alt="WashU" className="h-6 w-auto" />
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
