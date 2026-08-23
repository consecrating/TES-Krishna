"use client";

import {
  Megaphone,
  BarChart3,
  Calendar,
  RotateCcw,
  PieChart,
  ArrowUpRight,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Promotional Offers",
    description:
      "Continuous marketing campaigns and beneficial offers that drive consistent bookings and brand visibility.",
    tag: "Marketing",
  },
  {
    icon: BarChart3,
    title: "Dynamic Room Pricing",
    description:
      "Smart data-driven rate analysis that maximizes RevPAR and keeps you competitive in real-time.",
    tag: "Revenue",
  },
  {
    icon: Calendar,
    title: "Reservation Management",
    description:
      "Streamlined OTA distribution with real-time inventory synchronization across all channels.",
    tag: "Operations",
  },
  {
    icon: RotateCcw,
    title: "Performance Analytics",
    description:
      "Learn from historical data to continuously improve future performance and strategy.",
    tag: "Analytics",
  },
  {
    icon: PieChart,
    title: "Comp Set Analysis",
    description:
      "Deep competitive market analysis to identify opportunities and stay ahead of competition.",
    tag: "Intelligence",
  },
  {
    icon: Zap,
    title: "Field Sales",
    description:
      "On-ground sales team management and corporate tie-ups to drive direct bookings.",
    tag: "Sales",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-tes-teal-50/50 rounded-full -translate-y-1/2 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-tes-teal-50 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 rounded-full bg-tes-teal" />
              <span className="text-tes-teal text-sm font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-tes-dark">
              Complete Online{" "}
              <span className="text-tes-teal">Revenue</span>
              <br />
              Management Solutions
            </h2>
          </div>
          <p className="text-tes-gray text-base max-w-md leading-relaxed lg:text-right">
            Our team handles end-to-end online revenue management with real-time
            inventory distribution across all platforms.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 hover:border-tes-teal/20 rounded-2xl p-6 transition-all duration-400 hover-lift overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-tes-teal-50/0 to-tes-teal-50/0 group-hover:from-tes-teal-50/50 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10">
                {/* Tag */}
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-tes-teal bg-tes-teal-50 px-2.5 py-1 rounded-md mb-4">
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-tes-teal/8 group-hover:bg-tes-teal/12 flex items-center justify-center mb-4 transition-colors">
                  <service.icon size={22} className="text-tes-teal" />
                </div>

                {/* Content */}
                <h3 className="text-tes-dark font-bold text-lg mb-2 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight
                    size={16}
                    className="text-tes-gray/0 group-hover:text-tes-teal transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>
                <p className="text-tes-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
