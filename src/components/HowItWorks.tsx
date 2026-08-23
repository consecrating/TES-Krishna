"use client";

import { TrendingUp, Lightbulb, Building2 } from "lucide-react";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Split background */}
      <div className="absolute inset-0 flex">
        <div className="w-full md:w-1/2 bg-tes-teal" />
        <div className="hidden md:block w-1/2 bg-tes-gold" />
      </div>

      {/* Torn paper divider */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[47%] w-[8%] z-10">
        <svg
          viewBox="0 0 100 800"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="var(--color-tes-gold)"
        >
          <path d="M70,0 Q40,50 60,100 Q80,150 50,200 Q20,250 60,300 Q90,350 50,400 Q30,450 70,500 Q90,550 50,600 Q20,650 60,700 Q80,750 50,800 L100,800 L100,0 Z" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - How it works */}
          <div className="text-white">
            {/* TES Logo */}
            <div className="inline-block bg-tes-red px-4 py-1.5 mb-6 shadow-lg">
              <span className="text-white font-black text-lg tracking-[0.2em]">
                T E S
              </span>
              <span className="block text-white font-semibold text-xs tracking-wider text-center">
                HOSPITALITY
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-8">
              HOW IT WORKS
            </h2>

            {/* Feature image */}
            <div className="rounded-xl overflow-hidden shadow-2xl mb-8 max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80"
                alt="Luxury hotel exterior"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Steps */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-tes-gold rounded-full" />
                <p className="text-white/90 font-semibold text-base md:text-lg">
                  On Going Promotional and Beneficial Offer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-tes-gold rounded-full" />
                <p className="text-white/90 font-semibold text-base md:text-lg">
                  Smart Dynamic Room Analysis
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-tes-gold rounded-full" />
                <p className="text-white/90 font-semibold text-base md:text-lg">
                  Reservation
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-tes-gold rounded-full" />
                <p className="text-white/90 font-semibold text-base md:text-lg">
                  Revert Back to Go Forward
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-tes-gold rounded-full" />
                <p className="text-white/90 font-semibold text-base md:text-lg">
                  Comp Set Analysis
                </p>
              </div>
            </div>

            {/* Dot pattern */}
            <div className="mt-6 w-20 h-20 dot-pattern opacity-40" />
          </div>

          {/* Right - Online Revenue Management */}
          <div className="bg-tes-gold md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none">
            {/* TES Logo */}
            <div className="inline-block bg-tes-red px-4 py-1.5 mb-6 shadow-lg">
              <span className="text-white font-black text-lg tracking-[0.2em]">
                T E S
              </span>
              <span className="block text-white font-semibold text-xs tracking-wider text-center">
                HOSPITALITY
              </span>
            </div>

            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-black uppercase mb-6">
              ONLINE REVENUE MANAGEMENT AND FIELD SALES
            </h3>

            {/* OTA and Field Sales */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-tes-teal rounded-xl p-4 text-center">
                <Lightbulb className="text-tes-gold mx-auto mb-2" size={32} />
                <p className="text-white font-bold text-sm">OTA&apos;s</p>
              </div>
              <div className="flex-1 bg-tes-teal rounded-xl p-4 text-center">
                <TrendingUp className="text-tes-gold mx-auto mb-2" size={32} />
                <p className="text-white font-bold text-sm">FIELD SALES</p>
              </div>
            </div>

            <p className="text-white/90 text-sm md:text-base mb-6">
              To create value, we Endeavour to protect the owner&apos;s interest,
              economic value and maintain an excellent physical condition of the
              investment.
            </p>

            {/* Leading path metrics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
              <p className="text-white text-xs uppercase tracking-wider mb-3 font-semibold">
                THE LEADING PATH
              </p>
              <div className="flex gap-2 flex-wrap">
                {[
                  "Revenue",
                  "Percentage",
                  "ARR",
                  "Comp-Set",
                  "First to Be",
                  "On Field Work",
                  "Publicity",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-tes-teal/80 text-white text-xs px-3 py-1.5 rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              It&apos;s hard for independent hotels to manage with such competitive
              market. TES Hospitality is a company which empowers independent
              hotels to not only compete effectively but also stay a step ahead
              in today&apos;s highly complex and competitive marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
