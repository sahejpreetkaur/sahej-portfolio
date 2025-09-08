import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certificates", href: "#certificates" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-md transition-all duration-300 ${
        scrolled ? "h-12" : "h-16"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo / Name */}
        <a
          href="#hero"
          className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 whitespace-nowrap transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
          style={{ backgroundSize: "200% auto" }}
        >
          Sahejpreet Kaur
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group text-gray-200 hover:text-cyan-400 transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors duration-300 ${
            open ? "text-purple-400" : "text-cyan-400"
          } text-2xl`}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md flex flex-col items-center py-6 gap-4 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="text-lg text-gray-200 hover:text-cyan-400 transition"
            onClick={() => setOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
