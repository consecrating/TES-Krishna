"use client";

import { Plane } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Gold blob top-right */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tes-gold/20 blob-shape translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Left */}
          <div>
            {/* TES Logo */}
            <div className="inline-block bg-tes-red px-5 py-2 mb-6 shadow-lg">
              <span className="text-white font-black text-xl tracking-[0.2em]">
                T E S
              </span>
              <span className="block text-white font-semibold text-xs tracking-wider text-center">
                HOSPITALITY
              </span>
            </div>

            <p
              className="text-tes-gold text-2xl md:text-3xl mb-2"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Know More
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-6">
              <span className="text-tes-red">T</span>
              <span className="text-tes-teal">RAVEL </span>
              <span className="text-tes-red">E</span>
              <span className="text-tes-teal">AT </span>
              <span className="text-tes-red">S</span>
              <span className="text-tes-teal">TAY</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              As experts in Hospitality and Hotel Consultants in Mangalore, we
              craft a Strategic vision to achieve your Hotel Business Goals,
              Development and Operational improvement in hospitality sector.
              Understanding the fact that the hotel owners have a lot of passion
              and resources to build a hotel, we align the owners&apos; vision with
              our management services so that we can create the best asset in its
              class.
            </p>

            {/* How To Join Us CTA */}
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 bg-tes-gold hover:bg-tes-gold-dark text-white px-6 py-3 rounded-lg font-bold text-base transition-colors duration-200"
            >
              <Plane size={20} />
              <span>HOW TO JOIN US</span>
            </a>

            {/* Dot pattern */}
            <div className="mt-6 w-16 h-16 dot-pattern opacity-50" />
          </div>

          {/* Image Right */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80"
                alt="Travel landscape with hot air balloons"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Decorative X */}
            <div className="absolute top-4 right-4 text-tes-gold text-3xl font-bold">
              ✕
            </div>
            {/* Gold blob bottom */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tes-gold/30 blob-shape" />
          </div>
        </div>
      </div>
    </section>
  );
}
