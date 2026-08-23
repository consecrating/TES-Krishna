"use client";

import {
  Award,
  Handshake,
  BarChart3,
  Target,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const strengths = [
  {
    icon: Award,
    title: "18+ Years Experience",
    text: "Deep expertise in hotel industry operations, management, and growth strategies.",
    color: "from-tes-gold to-tes-gold-dark",
    bg: "bg-tes-gold-50",
    iconColor: "text-tes-gold",
  },
  {
    icon: Handshake,
    title: "Business Understanding",
    text: "We understand the complete business of managing hotels from inside out.",
    color: "from-tes-teal to-tes-teal-dark",
    bg: "bg-tes-teal-50",
    iconColor: "text-tes-teal",
  },
  {
    icon: Target,
    title: "Collaborative Approach",
    text: "We collaborate and not just command — your vision drives our strategy.",
    color: "from-tes-gold to-tes-gold-dark",
    bg: "bg-tes-gold-50",
    iconColor: "text-tes-gold",
  },
  {
    icon: BarChart3,
    title: "Profit & Service Balance",
    text: "Creating balance between operating profits and service deliverables.",
    color: "from-tes-teal to-tes-teal-dark",
    bg: "bg-tes-teal-50",
    iconColor: "text-tes-teal",
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing Expertise",
    text: "Great understanding of marketing efforts to position your hotel competitively.",
    color: "from-tes-gold to-tes-gold-dark",
    bg: "bg-tes-gold-50",
    iconColor: "text-tes-gold",
  },
];

export function Strengths() {
  return (
    <section
      id="strengths"
      className="relative py-20 md:py-28 gradient-dark overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-tes-teal/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-tes-gold/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <Award size={14} className="text-tes-gold" />
            <span className="text-tes-gold text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tes-gold to-tes-gold-light">
              Strengths
            </span>
          </h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            What makes TES Hospitality the preferred partner for hotel businesses
          </p>
        </div>

        {/* Strengths grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-6 transition-all duration-400 hover-lift ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}
              >
                <item.icon className={item.iconColor} size={22} />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* Arrow on hover */}
              <div className="mt-4 flex items-center gap-1.5 text-tes-gold/0 group-hover:text-tes-gold text-sm font-medium transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Revenue formula bar */}
        <div className="mt-14 bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg md:text-xl">
                Our Revenue Formula
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Complete solution for your hotel&apos;s financial growth
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {[
                "Dynamic Rate",
                "Booking Engine",
                "Comp Set Analysis",
                "Trip Advisor",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-tes-gold/10 border border-tes-gold/20 text-tes-gold px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
