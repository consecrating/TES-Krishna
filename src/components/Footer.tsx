"use client";

export function Footer() {
  return (
    <footer className="bg-tes-teal py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-tes-red px-3 py-1.5">
              <span className="text-white font-black text-sm tracking-[0.2em]">
                T E S
              </span>
            </div>
            <span className="text-white font-semibold text-sm">
              HOSPITALITY
            </span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#benefits" className="hover:text-white transition-colors">
              Benefits
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm text-center">
            © {new Date().getFullYear()} TES Hospitality. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
