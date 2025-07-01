import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with duration
  const smoothScrollTo = (targetId, duration = 1000) => {
    const target = document.getElementById(targetId);
    if (!target) return;
  
    const navbarOffset = 60;
    const targetY = target.offsetTop - navbarOffset;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();
  
    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * progress);
  
      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }
  
    requestAnimationFrame(scrollStep);
  };

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <a href="#home" onClick={(e) => { e.preventDefault(); smoothScrollTo("home"); }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo("about"); }}>About</a>
        <a href="#portfolio" onClick={(e) => { e.preventDefault(); smoothScrollTo("portfolio"); }}>Portfolio</a>
        <a href="#activities" onClick={(e) => { e.preventDefault(); smoothScrollTo("activities"); }}>Activities</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScrollTo("projects"); }}>Projects</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo("contact"); }}>Contact</a>
      </nav>
    </div>
  );
}

export default Navbar;
