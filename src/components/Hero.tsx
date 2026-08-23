"use client";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Background split - left image, right gold */}
      <div className="absolute inset-0 flex">
        {/* Left side - image background */}
        <div className="w-full md:w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        {/* Right side - gold background */}
        <div className="hidden md:block w-1/2 bg-tes-gold" />
      </div>

      {/* Torn paper edge divider between halves */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[48%] w-[6%] z-10">
        <svg
          viewBox="0 0 100 800"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="var(--color-tes-gold)"
        >
          <path d="M30,0 Q60,50 40,100 Q20,150 50,200 Q80,250 40,300 Q10,350 50,400 Q70,450 30,500 Q10,550 50,600 Q80,650 40,700 Q20,750 50,800 L100,800 L100,0 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left content (over the image on mobile) */}
          <div className="flex flex-col justify-center md:pr-8">
            <div className="bg-white/90 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none">
              <p className="text-tes-gold font-semibold text-sm md:text-base uppercase tracking-wider mb-2 md:hidden">
                Your Hospitality Partner
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-tes-dark md:text-white leading-tight">
                Your Trusted
                <br />
                <span className="text-tes-gold md:text-tes-cream">
                  Hospitality Partner
                </span>
              </h1>
              <p className="mt-4 text-gray-700 md:text-white/90 text-base md:text-lg max-w-md">
                Elevating hotel businesses with 18+ years of expertise in
                revenue management and operational excellence.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center px-6 py-3 bg-tes-red hover:bg-tes-red-dark text-white font-bold rounded-full transition-colors duration-200 text-sm md:text-base"
                >
                  Know More
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-tes-dark md:border-white text-tes-dark md:text-white hover:bg-white/10 font-bold rounded-full transition-colors duration-200 text-sm md:text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="hidden md:flex flex-col items-center justify-center text-center">
            {/* TES Logo */}
            <div className="bg-tes-red px-8 py-4 mb-6 shadow-2xl">
              <h2 className="text-white font-black text-5xl lg:text-6xl tracking-[0.3em]">
                T E S
              </h2>
              <p className="text-white font-semibold text-lg mt-1 tracking-wider">
                HOSPITALITY
              </p>
            </div>
            <h3 className="text-white text-4xl lg:text-5xl font-black mt-4 uppercase">
              Your
              <br />
              Partner
            </h3>
          </div>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tes-gold/30 blob-shape hidden md:block" />
    </section>
  );
}
