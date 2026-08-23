"use client";

import { CheckCircle } from "lucide-react";

export function Welcome() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tes-gold-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tes-teal-50 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p
            className="text-tes-gold text-xl md:text-2xl mb-2"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Welcome To TES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-tes-dark">
            Your Complete{" "}
            <span className="text-tes-teal">Hospitality Partner</span>
          </h2>
          <p className="mt-4 text-tes-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We craft strategic visions to achieve your Hotel Business Goals,
            Development and Operational improvement in the hospitality sector.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Gold */}
          <div className="group bg-tes-gold rounded-2xl p-6 shadow-gold hover:shadow-lg transition-all duration-400 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-black">T</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Travel</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Strategic positioning of hotels in the competitive travel
              marketplace with data-driven marketing approaches.
            </p>
            <div className="mt-4 flex items-center gap-2 text-white text-sm font-semibold">
              <CheckCircle size={14} />
              <span>Market Positioning</span>
            </div>
          </div>

          {/* Card 2 - Teal */}
          <div className="group bg-tes-teal rounded-2xl p-6 shadow-teal hover:shadow-lg transition-all duration-400 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-black">E</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Eat</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Comprehensive F&B service management including training, up-selling
              strategies, and revenue optimization.
            </p>
            <div className="mt-4 flex items-center gap-2 text-white text-sm font-semibold">
              <CheckCircle size={14} />
              <span>F&B Excellence</span>
            </div>
          </div>

          {/* Card 3 - Red */}
          <div className="group bg-tes-red rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-400 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-black">S</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Stay</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Creating the best-in-class hotel assets with operational excellence
              in housekeeping, front office, and guest experience.
            </p>
            <div className="mt-4 flex items-center gap-2 text-white text-sm font-semibold">
              <CheckCircle size={14} />
              <span>Guest Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
