const testimonials = [
  {
    quote:
      "LUXERA has completely transformed the way I dress. Every piece is a work of art — the quality, the cut, the attention to detail is simply unmatched.",
    name: "Sophia Laurent",
    title: "Creative Director, Paris",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    rating: 5,
  },
  {
    quote:
      "I've shopped at all the major luxury houses, but LUXERA offers something truly special — a curation that feels personal, elevated, and effortlessly chic.",
    name: "James Whitmore",
    title: "CEO, London",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    rating: 5,
  },
  {
    quote:
      "The service is as luxurious as the pieces themselves. From packaging to the moment I slip it on — it's an experience, not just a purchase.",
    name: "Isabella Chen",
    title: "Fashion Editor, New York",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#060606]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-3">Client Stories</p>
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-[#1A1A1A] p-8 lg:p-10 hover:border-[#C9A06A]/30 transition-all duration-500 group relative"
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-8 text-5xl text-[#1E1E1E] leading-none select-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} width="12" height="12" viewBox="0 0 24 24" fill="#C9A06A">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#AAAAAA] text-sm leading-relaxed mb-8 italic relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#2A2A2A]"
                />
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-[#666666] text-xs tracking-wider mt-0.5">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
