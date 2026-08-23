"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 gradient-dark overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-tes-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-tes-teal/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
              <Send size={14} className="text-tes-gold" />
              <span className="text-tes-gold text-sm font-semibold">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Let&apos;s Grow Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tes-gold to-tes-gold-light">
                Hotel Revenue
              </span>{" "}
              Together
            </h2>

            <p className="mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
              Connect with our expert team to discuss how we can elevate your
              hotel&apos;s performance and profitability.
            </p>

            {/* Contact cards */}
            <div className="mt-10 space-y-4">
              {/* Director */}
              <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <div className="w-14 h-14 rounded-full bg-tes-gold/15 flex items-center justify-center shrink-0">
                  <span className="text-tes-gold font-bold text-lg">NN</span>
                </div>
                <div>
                  <p className="text-white font-bold">Neha Naik</p>
                  <p className="text-white/50 text-sm">Director, TES Hospitality</p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:7972374880"
                className="group flex items-center gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-tes-gold/30 rounded-xl p-5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-tes-gold/10 flex items-center justify-center shrink-0 group-hover:bg-tes-gold/20 transition-colors">
                  <Phone size={20} className="text-tes-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-medium">
                    Phone
                  </p>
                  <p className="text-white font-semibold text-lg">
                    +91 7972374880
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@teshospitality.co.in"
                className="group flex items-center gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-tes-teal/30 rounded-xl p-5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-tes-teal/10 flex items-center justify-center shrink-0 group-hover:bg-tes-teal/20 transition-colors">
                  <Mail size={20} className="text-tes-teal-light" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-medium">
                    Email
                  </p>
                  <p className="text-white font-semibold">
                    info@teshospitality.co.in
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-tes-gold/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-tes-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-medium">
                    Office
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mt-1">
                    Anitha Nilaya, near Kondibettu Mala - Chowki,
                    <br />
                    Mala (p.o), Karkala (t.q), Udupi (d.t) - 574122
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form / Card */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/[0.04] border border-white/[0.1] rounded-3xl p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-white font-bold text-xl mb-6">
                Send us a message
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/[0.06] border border-white/10 focus:border-tes-gold/50 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/[0.06] border border-white/10 focus:border-tes-gold/50 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/[0.06] border border-white/10 focus:border-tes-gold/50 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your hotel..."
                    rows={4}
                    className="w-full bg-white/[0.06] border border-white/10 focus:border-tes-gold/50 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-tes-gold hover:bg-tes-gold-dark text-white py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-gold flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>

              {/* Business hours */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                <Clock size={16} className="text-white/40" />
                <p className="text-white/40 text-xs">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
