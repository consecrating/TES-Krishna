"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-tes-dark-soft pt-16 pb-8 overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tes-teal via-tes-gold to-tes-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-tes-red px-2.5 py-1.5 rounded-md">
                <span className="text-white font-black text-base tracking-[0.1em]">
                  TES
                </span>
              </div>
              <span className="text-white font-bold text-sm">HOSPITALITY</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Your trusted hospitality partner with 18+ years of experience in
              hotel revenue management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Strengths", "Services", "Benefits", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/50 hover:text-tes-gold text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Revenue Management",
                "Dynamic Pricing",
                "OTA Management",
                "Field Sales",
                "Comp Set Analysis",
                "Staff Training",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-tes-gold shrink-0" />
                <a
                  href="tel:7972374880"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  +91 7972374880
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-tes-gold shrink-0" />
                <a
                  href="mailto:info@teshospitality.co.in"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  info@teshospitality.co.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-tes-gold shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Karkala, Udupi - 574122
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} TES Hospitality. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-white/30 hover:text-tes-gold text-xs transition-colors"
          >
            Back to top
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
