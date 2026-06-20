"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = ["Collections", "New In", "Women", "Men", "Accessories", "Sale"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#1E1E1E] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span
              className="text-2xl tracking-[0.35em] font-bold uppercase text-[#C9A06A] cursor-pointer"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              LUXERA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className={`nav-link text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300 ${
                  link === "Sale"
                    ? "text-[#E8C97E] font-medium"
                    : "text-[#BBBBBB] hover:text-white"
                }`}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-5">
            <button
              className="text-[#BBBBBB] hover:text-[#C9A06A] transition-colors duration-300"
              aria-label="Search"
            >
              <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button
              className="hidden sm:flex text-[#BBBBBB] hover:text-[#C9A06A] transition-colors duration-300"
              aria-label="Account"
            >
              <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
              </svg>
            </button>
            <button
              className="relative text-[#BBBBBB] hover:text-[#C9A06A] transition-colors duration-300"
              aria-label="Cart"
            >
              <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#C9A06A] text-[#080808] text-[9px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button
              className="lg:hidden text-[#BBBBBB] hover:text-[#C9A06A] transition-colors duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl flex flex-col items-center justify-center animate-fade-in">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-[#888888] hover:text-white"
            aria-label="Close"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className={`text-3xl tracking-[0.2em] uppercase animate-fade-in-up delay-${(i + 1) * 100} ${
                  link === "Sale" ? "text-[#C9A06A]" : "text-white hover:text-[#C9A06A]"
                } transition-colors`}
                style={{ fontFamily: "var(--font-playfair), serif", opacity: 0 }}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
