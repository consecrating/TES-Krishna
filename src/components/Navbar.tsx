"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#strengths", label: "Strengths" },
    { href: "#services", label: "Services" },
    { href: "#benefits", label: "Benefits" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative bg-tes-red px-3 py-1.5 rounded-md overflow-hidden">
              <span className="relative z-10 text-white font-black text-lg tracking-[0.15em]">
                TES
              </span>
              <div className="absolute inset-0 bg-tes-red-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-bold text-sm tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-tes-dark" : "text-white"
                }`}
              >
                HOSPITALITY
              </span>
              <span
                className={`block text-[10px] tracking-wider transition-colors duration-300 ${
                  scrolled ? "text-tes-gray" : "text-white/70"
                }`}
              >
                TRAVEL • EAT • STAY
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-tes-teal/10 ${
                  scrolled
                    ? "text-tes-dark hover:text-tes-teal"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:7972374880"
              className="group flex items-center gap-2 bg-tes-gold hover:bg-tes-gold-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-gold hover:shadow-lg"
            >
              <Phone size={15} />
              <span>Call Us</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-lg transition-colors ${
              scrolled ? "text-tes-dark" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-premium transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-5 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-tes-dark hover:text-tes-teal hover:bg-tes-teal-50 font-medium text-base py-3 px-4 rounded-xl transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 mt-4">
            <a
              href="tel:7972374880"
              className="flex items-center justify-center gap-2 bg-tes-gold text-white px-5 py-3.5 rounded-xl font-bold shadow-gold"
            >
              <Phone size={16} />
              <span>Call Now — 7972374880</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
