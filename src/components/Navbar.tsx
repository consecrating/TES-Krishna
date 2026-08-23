"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#strengths", label: "Strengths" },
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#benefits", label: "Benefits" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="bg-tes-red px-3 py-1.5 md:px-4 md:py-2">
              <span className="text-white font-black text-lg md:text-2xl tracking-[0.2em]">
                T E S
              </span>
            </div>
            <span className="hidden sm:block text-tes-teal font-semibold text-sm">
              HOSPITALITY
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-tes-dark hover:text-tes-teal font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:7972374880"
              className="flex items-center gap-2 bg-tes-gold hover:bg-tes-gold-dark text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-tes-dark"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-tes-dark hover:text-tes-teal font-medium text-base py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7972374880"
              className="flex items-center justify-center gap-2 bg-tes-gold text-white px-4 py-3 rounded-full font-semibold mt-4"
            >
              <Phone size={16} />
              <span>Call Now - 7972374880</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
