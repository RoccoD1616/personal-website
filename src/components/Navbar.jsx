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

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="/">Portfolio</a>
        <a href="/">Activities</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </nav>
    </div>
  );
}

export default Navbar;
