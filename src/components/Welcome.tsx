"use client";

export function Welcome() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Gold blob decorations */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-tes-gold/20 blob-shape" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-tes-gold/15 blob-shape" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80"
                alt="Hotel guest with luggage"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Decorative X mark */}
            <div className="absolute -top-4 -left-4 text-tes-gold text-4xl font-bold rotate-12">
              ✕
            </div>
          </div>

          {/* Content */}
          <div>
            {/* TES Logo small */}
            <div className="inline-block bg-tes-red px-5 py-2 mb-6 shadow-lg">
              <span className="text-white font-black text-xl tracking-[0.2em]">
                T E S
              </span>
              <span className="block text-white font-semibold text-xs tracking-wider text-center">
                HOSPITALITY
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tes-dark mb-2">
              <span
                className="text-tes-gold italic"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Welcome To
              </span>{" "}
              <span className="text-tes-teal font-black">TES</span>
            </h2>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              The specialist team of TES Hospitality offers hands-on and simple
              strategic on increasing the revenue generation and turnover for our
              clients.
            </p>

            {/* Dot pattern decoration */}
            <div className="mt-8 w-24 h-24 dot-pattern opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
