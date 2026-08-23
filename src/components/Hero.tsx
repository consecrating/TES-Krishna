"use client";

import { ArrowRight, Star, Award, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=85"
          alt="Luxury hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tes-dark/95 via-tes-dark/80 to-tes-dark/60" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 cols */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-tes-gold/15 border border-tes-gold/30 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Star size={14} className="text-tes-gold fill-tes-gold" />
              <span className="text-tes-gold text-sm font-semibold tracking-wide">
                18+ Years in Hospitality Industry
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight animate-fade-in-up delay-100">
              Elevate Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tes-gold via-tes-gold-light to-tes-gold">
                Hotel Revenue
              </span>
              <br />
              <span className="text-white/90 text-3xl sm:text-4xl md:text-5xl font-bold">
                with Expert Strategy
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-white/70 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed animate-fade-in-up delay-200">
              The specialist team of TES Hospitality offers hands-on strategic
              consulting to increase revenue generation and turnover for your
              hotel business.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#services"
                className="group inline-flex items-center gap-2.5 bg-tes-gold hover:bg-tes-gold-dark text-white px-7 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-gold hover:shadow-lg"
              >
                Explore Services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-4 rounded-xl font-bold text-base transition-all duration-300 backdrop-blur-sm"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-6 sm:gap-10 animate-fade-in-up delay-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-tes-gold/15 flex items-center justify-center">
                  <Award size={20} className="text-tes-gold" />
                </div>
                <div>
                  <p className="text-white font-black text-xl">18+</p>
                  <p className="text-white/50 text-xs font-medium">Years Exp</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-tes-teal/20 flex items-center justify-center">
                  <TrendingUp size={20} className="text-tes-teal-light" />
                </div>
                <div>
                  <p className="text-white font-black text-xl">200%</p>
                  <p className="text-white/50 text-xs font-medium">
                    Revenue Growth
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-tes-gold/15 flex items-center justify-center">
                  <Star size={20} className="text-tes-gold" />
                </div>
                <div>
                  <p className="text-white font-black text-xl">50+</p>
                  <p className="text-white/50 text-xs font-medium">
                    Hotels Managed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Floating Card */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="glass-card rounded-3xl p-8 w-[340px] animate-float">
                <div className="bg-tes-red rounded-xl px-6 py-4 text-center mb-6 shadow-lg">
                  <h2 className="text-white font-black text-4xl tracking-[0.2em]">
                    TES
                  </h2>
                  <p className="text-white/90 font-medium text-sm mt-1 tracking-widest">
                    HOSPITALITY
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className="text-tes-gold text-2xl"
                    style={{ fontFamily: "var(--font-script)" }}
                  >
                    Travel • Eat • Stay
                  </p>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <p className="mt-4 text-white/80 text-sm leading-relaxed">
                    Hotel Consultants in Mangalore offering complete revenue &
                    operations management
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-tes-gold/20 rounded-2xl rotate-12 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-tes-teal/20 rounded-full blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
