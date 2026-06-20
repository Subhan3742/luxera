import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85"
        alt="LUXERA — Luxury Fashion"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />

      <div className="relative h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            <p
              className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              New Collection — Summer 2026
            </p>

            <h1
              className="text-6xl sm:text-7xl lg:text-[88px] font-bold leading-[1.04] mb-6 animate-fade-in-up"
              style={{
                fontFamily: "var(--font-playfair), serif",
                animationDelay: "0.4s",
                opacity: 0,
              }}
            >
              Dressed for
              <br />
              <em className="not-italic text-[#C9A06A]">the Exceptional</em>
            </h1>

            <p
              className="text-[#AAAAAA] text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              Curated luxury pieces for those who refuse to compromise.
              From evening wear to daily essentials — crafted for the discerning few.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-3 bg-[#C9A06A] text-[#080808] px-8 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#E8D5A3] hover:scale-[1.02] active:scale-[0.98]"
              >
                Shop Collection
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                href="#new-in"
                className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-xs font-light tracking-[0.25em] uppercase transition-all duration-300 hover:border-[#C9A06A] hover:text-[#C9A06A]"
              >
                Explore New In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1.3s", opacity: 0 }}
      >
        <span className="text-[#666666] text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#666666] to-transparent" />
      </div>

      {/* Stats — bottom right */}
      <div
        className="absolute bottom-10 right-10 hidden lg:flex gap-10 animate-fade-in"
        style={{ animationDelay: "1.1s", opacity: 0 }}
      >
        {[
          { num: "500+", label: "Designer Pieces" },
          { num: "50+", label: "Luxury Brands" },
          { num: "10K+", label: "Happy Clients" },
        ].map((stat) => (
          <div key={stat.label} className="text-right">
            <div
              className="text-2xl font-bold text-[#C9A06A]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {stat.num}
            </div>
            <div className="text-[10px] text-[#666666] tracking-[0.3em] uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
