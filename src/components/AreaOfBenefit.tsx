"use client";

import {
  Users,
  TrendingUp,
  Sparkles,
  UtensilsCrossed,
  PackageCheck,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Front Office & HR",
    description:
      "Cross Training, Set SOP & Proper Reporting System on Cloud Based platforms.",
    accent: "border-tes-gold",
    iconBg: "bg-tes-gold-50",
    iconColor: "text-tes-gold",
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    description:
      "Generate business from the market, Pre-set Revenue Budget for the Financial Year.",
    accent: "border-tes-teal",
    iconBg: "bg-tes-teal-50",
    iconColor: "text-tes-teal",
  },
  {
    icon: Sparkles,
    title: "House Keeping",
    description:
      "Maintaining Hygiene on given timings, Set of SOP, Weekly & Monthly deep cleaning schedules.",
    accent: "border-tes-gold",
    iconBg: "bg-tes-gold-50",
    iconColor: "text-tes-gold",
  },
  {
    icon: UtensilsCrossed,
    title: "F&B Service",
    description:
      "Time Delivery, Food Training, Up-Selling strategy, Revenue optimization and maintenance.",
    accent: "border-tes-teal",
    iconBg: "bg-tes-teal-50",
    iconColor: "text-tes-teal",
  },
  {
    icon: PackageCheck,
    title: "Stores & Purchase",
    description:
      "Best quality materials at optimal prices, responsible expense control across departments.",
    accent: "border-tes-gold",
    iconBg: "bg-tes-gold-50",
    iconColor: "text-tes-gold",
  },
  {
    icon: Wrench,
    title: "Engineering",
    description:
      "Expense control, AMC with vendors, Daily/Weekly/Monthly servicing schedules and maintenance.",
    accent: "border-tes-teal",
    iconBg: "bg-tes-teal-50",
    iconColor: "text-tes-teal",
  },
];

export function AreaOfBenefit() {
  return (
    <section
      id="benefits"
      className="relative py-20 md:py-28 bg-tes-cream overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-tes-gold/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 left-0 w-[250px] h-[250px] bg-tes-teal/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-tes-gold-50 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-tes-gold" />
            <span className="text-tes-gold-dark text-sm font-semibold">
              Departments We Transform
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-tes-dark">
            Area of{" "}
            <span className="text-tes-gold">Benefit</span>
          </h2>
          <p className="mt-4 text-tes-gray text-base md:text-lg leading-relaxed">
            We provide operational excellence across all core hotel departments
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 border-l-4 ${benefit.accent} shadow-sm hover:shadow-premium transition-all duration-400 hover-lift`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${benefit.iconBg} flex items-center justify-center mb-4`}
              >
                <benefit.icon className={benefit.iconColor} size={22} />
              </div>

              {/* Content */}
              <h3 className="text-tes-dark font-bold text-base mb-2">
                {benefit.title}
              </h3>
              <p className="text-tes-gray text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-14 bg-gradient-to-r from-tes-teal to-tes-teal-dark rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl">
              Ready to transform your hotel operations?
            </h3>
            <p className="text-white/70 text-sm mt-2">
              Let&apos;s discuss how TES can improve every department of your hotel.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-white hover:bg-tes-gold-50 text-tes-teal-dark px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
