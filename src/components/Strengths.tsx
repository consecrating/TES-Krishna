"use client";

import { Award, Handshake, BarChart3, Target, TrendingUp } from "lucide-react";

const strengths = [
  {
    icon: Award,
    text: "18 Year of Experience in Hotel Industry",
  },
  {
    icon: Handshake,
    text: "We understand the Business of Managing hotels.",
  },
  {
    icon: Target,
    text: "We collaborate and not just command",
  },
  {
    icon: BarChart3,
    text: "We create a balance between the operating profits and service deliverables at the hotel",
  },
  {
    icon: TrendingUp,
    text: "Great understanding of sales and marketing efforts required to position a hotel in the competitive marketplace",
  },
];

export function Strengths() {
  return (
    <section
      id="strengths"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Teal background with torn edges */}
      <div className="absolute inset-0 bg-tes-teal torn-edge-bottom torn-edge-top" />

      {/* Decorative dots */}
      <div className="absolute left-6 top-1/4 w-16 h-24 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80"
                alt="Professional hospitality consultant"
                className="rounded-2xl shadow-2xl w-full max-w-md h-[400px] object-cover"
              />
            </div>
            {/* Revenue Solution text below image */}
            <div className="absolute -bottom-8 left-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-tight">
                OUR SOLUTION
                <br />
                FOR YOUR
                <br />
                REVENUE
              </h3>
            </div>
          </div>

          {/* Right - Strengths */}
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

            <h2 className="text-white text-2xl md:text-3xl font-black uppercase mb-6">
              OUR STRENGTHS
            </h2>

            <div className="space-y-3">
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="bg-tes-gold/90 backdrop-blur-sm rounded-lg px-5 py-4 flex items-start gap-3"
                >
                  <item.icon className="text-white shrink-0 mt-0.5" size={22} />
                  <p className="text-white font-medium text-sm md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue formula */}
            <div className="mt-8 text-white/90 text-sm md:text-base font-medium">
              <p>
                Dynamic Rate + Booking Engine + Comp Set Analysis + Trip Advisor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
