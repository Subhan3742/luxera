"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    brand: "LUXERA Exclusive",
    price: 1890,
    originalPrice: null,
    category: "women",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    tag: "New In",
    colors: ["#1a1a1a", "#8B6F5E", "#2D4A3E"],
  },
  {
    id: 2,
    name: "Cashmere Trench Coat",
    brand: "Maison De Luxe",
    price: 3200,
    originalPrice: null,
    category: "women",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    tag: "Best Seller",
    colors: ["#C4A882", "#333333", "#8B0000"],
  },
  {
    id: 3,
    name: "Italian Leather Tote",
    brand: "Artisan Collective",
    price: 980,
    originalPrice: 1200,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    tag: "Sale",
    colors: ["#8B6F47", "#1a1a1a", "#C4A882"],
  },
  {
    id: 4,
    name: "Designer Leather Sneakers",
    brand: "LUXERA Sport",
    price: 650,
    originalPrice: null,
    category: "men",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    tag: "New In",
    colors: ["#E8E0D5", "#C13B3B", "#1a1a1a"],
  },
  {
    id: 5,
    name: "Swiss Gold Timepiece",
    brand: "Chronos Elite",
    price: 4500,
    originalPrice: null,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    tag: "Exclusive",
    colors: ["#C9A06A", "#1a1a1a", "#888888"],
  },
  {
    id: 6,
    name: "Pearl & Diamond Necklace",
    brand: "Bijoux Maison",
    price: 2100,
    originalPrice: null,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    tag: "New In",
    colors: ["#F5F5F0", "#C9A06A"],
  },
  {
    id: 7,
    name: "Tailored Wool Blazer",
    brand: "Atelier Moderne",
    price: 1450,
    originalPrice: 1750,
    category: "men",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    tag: "Sale",
    colors: ["#2C3E50", "#1a1a1a", "#C4A882"],
  },
  {
    id: 8,
    name: "Leather Biker Jacket",
    brand: "LUXERA Signature",
    price: 2200,
    originalPrice: null,
    category: "women",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    tag: "Best Seller",
    colors: ["#1a1a1a", "#4A0404", "#2C3E50"],
  },
];

const filters = ["All", "Women", "Men", "Accessories", "Sale"];

type TagStyle = {
  bg: string;
  text: string;
};

const tagStyles: Record<string, TagStyle> = {
  Sale: { bg: "bg-red-600", text: "text-white" },
  Exclusive: { bg: "bg-[#C9A06A]", text: "text-[#080808]" },
  "Best Seller": { bg: "bg-[#1E1E1E]", text: "text-[#C9A06A]" },
  "New In": { bg: "bg-[#080808]/80", text: "text-[#C9A06A]" },
};

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = products.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Sale") return p.tag === "Sale";
    return p.category === activeFilter.toLowerCase();
  });

  return (
    <section id="products" className="py-24 bg-[#060606]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[#C9A06A] text-[10px] tracking-[0.5em] uppercase mb-3">Curated For You</p>
            <h2
              className="text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Featured Pieces
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-[10px] tracking-[0.25em] uppercase transition-all duration-300 border ${
                  activeFilter === filter
                    ? "bg-[#C9A06A] text-[#080808] border-[#C9A06A] font-semibold"
                    : "border-[#2A2A2A] text-[#777777] hover:border-[#C9A06A] hover:text-[#C9A06A]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product) => {
            const ts = tagStyles[product.tag] ?? { bg: "bg-[#080808]/80", text: "text-[#C9A06A]" };
            return (
              <div key={product.id} className="product-card group cursor-pointer">
                <div className="relative overflow-hidden bg-[#111111] mb-4" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="product-img object-cover"
                    quality={75}
                  />

                  {/* Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[9px] tracking-[0.25em] uppercase px-2.5 py-1 font-semibold ${ts.bg} ${ts.text}`}>
                      {product.tag}
                    </span>
                  </div>

                  {/* Wishlist */}
                  <button className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-[#080808]/60 text-[#888888] hover:text-[#C9A06A] transition-all opacity-0 group-hover:opacity-100">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>

                  {/* Hover overlay */}
                  <div className="overlay absolute inset-0 bg-[#080808]/40 flex flex-col items-center justify-end pb-6 gap-2.5">
                    <button className="bg-[#C9A06A] text-[#080808] px-6 py-3 text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#E8D5A3] transition-colors w-4/5">
                      Quick Add
                    </button>
                    <button className="border border-white/40 text-white px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase hover:border-white transition-colors w-4/5">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="px-0.5">
                  <p className="text-[#666666] text-[10px] tracking-[0.3em] uppercase mb-1">{product.brand}</p>
                  <h3 className="text-sm font-medium text-[#E8E4DC] mb-2 group-hover:text-[#C9A06A] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E8E4DC] font-semibold text-sm">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-[#555555] text-xs line-through">${product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-3 h-3 rounded-full border border-[#333333] cursor-pointer hover:scale-125 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <Link
            href="#"
            className="inline-flex items-center gap-3 border border-[#C9A06A] text-[#C9A06A] px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#C9A06A] hover:text-[#080808] transition-all duration-300"
          >
            View All Products
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
