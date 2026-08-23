"use client";

import { Megaphone, BarChart3, Calendar, RotateCcw, PieChart } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Ongoing Promotional & Beneficial Offers",
    description: "Continuous marketing campaigns that drive bookings",
  },
  {
    icon: BarChart3,
    title: "Smart Dynamic Room Analysis",
    description: "Data-driven pricing strategies for maximum revenue",
  },
  {
    icon: Calendar,
    title: "Reservations Management",
    description: "Streamlined booking systems for optimal occupancy",
  },
  {
    icon: RotateCcw,
    title: "Revert Back to Go Forward",
    description: "Learn from past data to improve future performance",
  },
  {
    icon: PieChart,
    title: "Comp Set Analysis",
    description: "Competitive market analysis to stay ahead",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-tes-teal overflow-hidden">
      {/* Torn paper top and bottom */}
      <div className="absolute inset-0 torn-edge-bottom torn-edge-top bg-tes-teal" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left content */}
          <div>
            <p
              className="text-tes-gold text-2xl md:text-3xl mb-2"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Services
            </p>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-tight mb-6">
              OUR TEAM WILL HANDLE THE COMPLETE ONLINE{" "}
              <span className="text-tes-red">REVENUE MANAGEMENT</span> WITH REAL
              TIME <span className="text-tes-gold">INVENTORY DISTRIBUTION</span>
            </h2>

            {/* Service cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-tes-gold/20 rounded-full flex items-center justify-center mb-3">
                    <service.icon className="text-tes-gold" size={24} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-xs">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - hotel images */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
                alt="Luxury hotel room"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&q=80"
                  alt="Hotel key card"
                  className="w-full h-32 md:h-40 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&q=80"
                  alt="Hotel reception"
                  className="w-full h-32 md:h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
