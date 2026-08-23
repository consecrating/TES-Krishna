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
    title: "Front Office and HR",
    description:
      "Cross Training, Set SOP & Proper Reporting System on Cloud Based",
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    description:
      "Generate the Business from the Market around, Pre-set Revenue Budget for Financial Year.",
  },
  {
    icon: Sparkles,
    title: "House Keeping",
    description:
      "Cleaning and Maintaining the Hygiene on given Set of Timing, Set of SOP, Weekly & Monthly Cleaning",
  },
  {
    icon: UtensilsCrossed,
    title: "FNB Service",
    description:
      "Time Delivery Proper Guidance on Food, Training, Up Selling Responsibility on FNB, Revenue and Maintenance",
  },
  {
    icon: PackageCheck,
    title: "Stores and Purchase",
    description:
      "To get best Quality of Material with Low Price, responsible to Control the Expenses with over all Department.",
  },
  {
    icon: Wrench,
    title: "Engg Department",
    description:
      "Maintain all the expenses and Control, AMC with the Vendor, Daily, weekly and Monthly Servicing",
  },
];

export function AreaOfBenefit() {
  return (
    <section
      id="benefits"
      className="relative py-16 md:py-24 bg-tes-gold overflow-hidden"
    >
      {/* TES Logo top-right */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-tes-red px-4 py-1.5 shadow-lg z-10">
        <span className="text-white font-black text-lg tracking-[0.2em]">
          T E S
        </span>
        <span className="block text-white font-semibold text-xs tracking-wider text-center">
          HOSPITALITY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Benefits list */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-tes-dark uppercase mb-10">
              AREA OF BENEFIT
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-tes-teal/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <benefit.icon className="text-tes-teal" size={20} />
                    </div>
                    <div>
                      <h3 className="text-tes-dark font-bold text-base md:text-lg underline underline-offset-2">
                        {benefit.title}
                      </h3>
                      <p className="text-tes-dark/80 text-sm md:text-base mt-1 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Images */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&q=80"
                  alt="Modern hotel interior"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80"
                  alt="Hotel living room"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80"
                alt="Luxury hotel bedroom"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
