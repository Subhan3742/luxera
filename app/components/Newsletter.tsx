"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-28 px-6 lg:px-10">
      <div className="max-w-[700px] mx-auto text-center">
        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A06A]/30" />
          <div className="w-2 h-2 bg-[#C9A06A] rotate-45 flex-shrink-0" />
          <div className="w-1 h-1 bg-[#C9A06A]/50 rotate-45 flex-shrink-0" />
          <div className="w-2 h-2 bg-[#C9A06A] rotate-45 flex-shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A06A]/30" />
        </div>

        <p className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-4">Exclusive Access</p>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Join the Inner Circle
        </h2>
        <p className="text-[#777777] text-base leading-relaxed mb-10 max-w-md mx-auto">
          Be the first to discover new arrivals, private sales, and exclusive events
          curated for our most discerning clients.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <div className="w-14 h-14 border border-[#C9A06A] flex items-center justify-center">
              <svg width="22" height="22" fill="none" stroke="#C9A06A" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p
              className="text-[#C9A06A] tracking-[0.3em] uppercase text-sm"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Welcome to LUXERA
            </p>
            <p className="text-[#666666] text-sm">
              Your invitation is confirmed. Expect something special soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-[#0E0E0E] border border-[#2A2A2A] text-white placeholder-[#444444] px-6 py-4 text-sm outline-none focus:border-[#C9A06A] transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-[#C9A06A] text-[#080808] px-8 py-4 text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-[#E8D5A3] transition-colors duration-300 whitespace-nowrap"
            >
              Join Now
            </button>
          </form>
        )}

        <p className="text-[#444444] text-xs mt-6">
          By subscribing you agree to our Privacy Policy. Unsubscribe at any time.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mt-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A06A]/30" />
          <div className="w-2 h-2 bg-[#C9A06A] rotate-45 flex-shrink-0" />
          <div className="w-1 h-1 bg-[#C9A06A]/50 rotate-45 flex-shrink-0" />
          <div className="w-2 h-2 bg-[#C9A06A] rotate-45 flex-shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A06A]/30" />
        </div>
      </div>
    </section>
  );
}
