import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Women",
    description: "Timeless elegance",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    href: "#",
  },
  {
    name: "Men",
    description: "Refined classics",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80",
    href: "#",
  },
  {
    name: "Accessories",
    description: "The finishing touch",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    href: "#",
  },
  {
    name: "New Season",
    description: "Summer 2026",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    href: "#",
  },
];

export default function CategoryStrip() {
  return (
    <section className="py-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <div className="text-center mb-14">
        <p className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-3">Browse By</p>
        <h2
          className="text-4xl lg:text-5xl font-bold"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Shop Categories
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="group relative overflow-hidden block"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/15 to-transparent" />
            <div className="absolute inset-0 bg-[#C9A06A]/0 group-hover:bg-[#C9A06A]/8 transition-colors duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
              <p className="text-[#C9A06A] text-[10px] tracking-[0.35em] uppercase mb-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {cat.description}
              </p>
              <h3
                className="text-white text-xl lg:text-2xl font-bold"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {cat.name}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#CCCCCC] text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                </span>
                <svg
                  width="10"
                  height="10"
                  fill="none"
                  stroke="#C9A06A"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
