"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Subtle marble/white texture background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

      {/* Teal wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="var(--color-tes-teal)"
        >
          <path d="M0,60 C200,90 400,30 600,60 C800,90 1000,30 1200,60 C1350,80 1400,70 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-tes-red uppercase text-center mb-12">
          CONTACT US
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Logo and branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-tes-red px-6 py-3 shadow-xl mb-4">
              <span className="text-white font-black text-3xl tracking-[0.2em]">
                T E S
              </span>
              <span className="block text-white font-semibold text-sm tracking-wider text-center">
                HOSPITALITY
              </span>
            </div>
            <p className="text-xl md:text-2xl font-bold mt-4">
              <span className="text-tes-red">T</span>
              <span className="text-tes-teal">RAVEL </span>
              <span className="text-tes-red">E</span>
              <span className="text-tes-teal">AT </span>
              <span className="text-tes-red">S</span>
              <span className="text-tes-teal">TAY</span>
              <span className="text-tes-dark"> - </span>
              <span className="text-tes-teal">HOSPITALITY</span>
            </p>
          </div>

          {/* Right - Contact info card */}
          <div className="bg-tes-gold rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-white font-bold text-xl mb-6 text-center">
              Neha Naik - Director
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:7972374880"
                className="flex items-center gap-3 text-white hover:text-tes-cream transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <span className="font-semibold text-lg">7972374880</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@teshospitality.co.in"
                className="flex items-center gap-3 text-white hover:text-tes-cream transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <span className="font-semibold text-base">
                  info@teshospitality.co.in
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-white">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <p className="font-medium text-sm leading-relaxed">
                  Anitha Nilaya&quot; near Kondibettu Mala - Chowki, Mala (p.o),
                  Karkala (t.q), Udupi (d.t) - 574122
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
