"use client";

import { ArrowRight, Quote } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-tes-gray-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Images composition */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Main image */}
              <div className="col-span-8 row-span-2">
                <div className="rounded-2xl overflow-hidden shadow-premium h-[400px] md:h-[480px]">
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=80"
                    alt="Luxury hotel exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Side images */}
              <div className="col-span-4 flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg h-[190px] md:h-[230px]">
                  <img
                    src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80"
                    alt="Hotel lobby"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-[190px] md:h-[230px]">
                  <img
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80"
                    alt="Hotel room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-4 left-8 bg-white rounded-xl px-5 py-4 shadow-premium flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-tes-gold flex items-center justify-center">
                <span className="text-white font-black text-lg">18</span>
              </div>
              <div>
                <p className="text-tes-dark font-bold text-sm">Years of</p>
                <p className="text-tes-gray text-xs">Industry Excellence</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-tes-teal-50 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-tes-teal" />
              <span className="text-tes-teal text-sm font-semibold">
                About TES Hospitality
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-tes-dark leading-tight">
              We Align Your{" "}
              <span className="text-tes-gold">Vision</span> with
              <br />
              <span className="text-tes-teal">Management Excellence</span>
            </h2>

            <p className="mt-6 text-tes-gray text-base md:text-lg leading-relaxed">
              As experts in Hospitality and Hotel Consultants in Mangalore, we
              craft a Strategic vision to achieve your Hotel Business Goals,
              Development and Operational improvement in hospitality sector.
            </p>

            <p className="mt-4 text-tes-gray text-base leading-relaxed">
              Understanding the fact that hotel owners have a lot of passion and
              resources to build a hotel, we align the owners&apos; vision with our
              management services so that we can create the best asset in its
              class.
            </p>

            {/* Quote */}
            <div className="mt-8 bg-white rounded-xl p-5 border-l-4 border-tes-gold shadow-sm">
              <Quote size={20} className="text-tes-gold/40 mb-2" />
              <p className="text-tes-dark font-medium text-sm italic leading-relaxed">
                &ldquo;We collaborate and not just command — creating a balance between
                operating profits and service deliverables.&rdquo;
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 group inline-flex items-center gap-2 bg-tes-teal hover:bg-tes-teal-dark text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-teal"
            >
              Partner With Us
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
