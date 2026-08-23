"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Revenue Audit",
    description: "Complete analysis of your current revenue streams, OTA presence, and pricing strategy.",
  },
  {
    number: "02",
    title: "Strategy Design",
    description: "Custom revenue management plan with dynamic pricing, channel optimization, and comp set positioning.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Hands-on execution of promotional offers, smart room analysis, and reservation management.",
  },
  {
    number: "04",
    title: "Growth & Scale",
    description: "Continuous monitoring, field sales, and iterative improvements for sustained revenue growth.",
  },
];

const metrics = [
  { label: "Revenue", value: "↑ 200%" },
  { label: "Occupancy", value: "↑ 85%" },
  { label: "ARR Growth", value: "↑ 150%" },
  { label: "Market Position", value: "Top 3" },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#042d2f] via-[#053e41] to-[#063a3c]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Process steps */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-tes-gold animate-pulse" />
              <span className="text-white/90 text-sm font-semibold">
                Our Process
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tes-gold to-tes-gold-light">
                Transform
              </span>
              <br />
              Your Revenue
            </h2>

            <p className="mt-4 text-white/60 text-base md:text-lg max-w-lg leading-relaxed">
              A proven 4-step process to make your work smart with TES Hospitality&apos;s
              expert management.
            </p>

            {/* Steps */}
            <div className="mt-10 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group flex gap-5 bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.2] rounded-xl p-5 transition-all duration-300"
                >
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="text-tes-gold font-black text-2xl">
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Metrics + CTA */}
          <div>
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-premium mb-8">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80"
                alt="Hotel management dashboard"
                className="w-full h-[240px] md:h-[300px] object-cover"
              />
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/[0.08] border border-white/[0.12] rounded-xl p-5 text-center"
                >
                  <p className="text-tes-gold font-black text-2xl md:text-3xl">
                    {metric.value}
                  </p>
                  <p className="text-white/60 text-xs font-medium mt-1 uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Leading path tags */}
            <div className="bg-white/[0.08] border border-white/[0.12] rounded-xl p-5">
              <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-3">
                The Leading Path
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Revenue",
                  "Percentage",
                  "ARR",
                  "Comp-Set",
                  "On Field Work",
                  "Publicity",
                  "OTA Management",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-tes-gold/15 border border-tes-gold/30 text-tes-gold-light px-3 py-1.5 rounded-lg text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 group w-full inline-flex items-center justify-center gap-2 bg-tes-gold hover:bg-tes-gold-dark text-white px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-gold"
            >
              Start Your Revenue Transformation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
