import Image from "next/image";
import Link from "next/link";

export default function CollectionBanner() {
  return (
    <section id="new-in" className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="text-center mb-14">
        <p className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-3">Exclusive Drops</p>
        <h2
          className="text-4xl lg:text-5xl font-bold"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          New Collections
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Collection 1 */}
        <Link
          href="#"
          className="group relative overflow-hidden block"
          style={{ aspectRatio: "4/5" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80"
            alt="The Evening Edit"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-[#080808]/15 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
            <p className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-3">Summer 2026</p>
            <h3
              className="text-white text-3xl lg:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              The Evening Edit
            </h3>
            <p className="text-[#AAAAAA] text-sm leading-relaxed mb-6 max-w-xs">
              From cocktail soirées to black-tie galas — dress the night in pure luxury.
            </p>
            <div className="flex items-center gap-3 text-[#C9A06A] text-[10px] tracking-[0.35em] uppercase">
              <span>Explore Collection</span>
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                className="transform group-hover:translate-x-2 transition-transform duration-300"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Collection 2 */}
        <div className="flex flex-col gap-5">
          <Link
            href="#"
            className="group relative overflow-hidden flex-1 block"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80"
              alt="Street Luxe"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-2">New Drop</p>
              <h3
                className="text-white text-2xl lg:text-3xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Street Luxe
              </h3>
              <div className="flex items-center gap-3 text-[#C9A06A] text-[10px] tracking-[0.35em] uppercase">
                <span>Shop Now</span>
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="transform group-hover:translate-x-2 transition-transform duration-300"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href="#"
            className="group relative overflow-hidden flex-1 block"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
              alt="Resort Wear"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-2">Exclusive</p>
              <h3
                className="text-white text-2xl lg:text-3xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Resort Edit
              </h3>
              <div className="flex items-center gap-3 text-[#C9A06A] text-[10px] tracking-[0.35em] uppercase">
                <span>Discover</span>
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="transform group-hover:translate-x-2 transition-transform duration-300"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
