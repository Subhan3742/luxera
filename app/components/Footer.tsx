import Link from "next/link";

const footerLinks = {
  Shop: ["Women", "Men", "Accessories", "New Arrivals", "Sale", "Gift Cards"],
  Help: ["Size Guide", "Shipping & Returns", "Order Tracking", "FAQ", "Contact Us"],
  Company: ["Our Story", "Sustainability", "Press", "Careers", "Affiliate Program"],
};

export default function Footer() {
  return (
    <footer className="bg-[#040404] border-t border-[#181818]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div
              className="text-2xl tracking-[0.35em] font-bold uppercase text-[#C9A06A] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              LUXERA
            </div>
            <p className="text-[#555555] text-sm leading-relaxed mb-6 max-w-xs">
              Luxury fashion crafted for the discerning few. Where elegance meets authenticity.
            </p>
            <div className="flex gap-3">
              {[
                {
                  label: "Instagram",
                  icon: (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter / X",
                  icon: (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  ),
                },
                {
                  label: "Pinterest",
                  icon: (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.1-2 .1-2.9.2-.8 1.4-5.9 1.4-5.9s-.3-.7-.3-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.5 2.2 1.8 2.2 2.2 0 3.7-2.8 3.7-6.1 0-2.4-1.6-4.2-4.4-4.2-3.2 0-5.2 2.4-5.2 5.1 0 .9.3 1.9.7 2.5.1.1.1.2.1.3-.1.3-.2 1.1-.3 1.4 0 .2-.1.3-.3.2-1.8-1-2.7-3.7-2.7-5.9 0-4.4 3.6-9.3 10.8-9.3 5.9 0 9.5 4.4 9.5 9.1 0 5.9-3.3 10.3-8.1 10.3-1.6 0-3.2-.9-3.7-1.9l-1.1 4c-.3 1.3-1.2 2.8-1.8 3.8" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#252525] flex items-center justify-center text-[#555555] hover:border-[#C9A06A] hover:text-[#C9A06A] transition-all duration-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-[10px] tracking-[0.35em] uppercase font-semibold mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[#555555] text-sm hover:text-[#C9A06A] transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#181818] flex flex-col lg:flex-row justify-between items-center gap-5">
          <p className="text-[#3A3A3A] text-xs">
            © 2026 LUXERA. All rights reserved. Crafted with care.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[#3A3A3A] text-xs hover:text-[#C9A06A] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            {["VISA", "MC", "AMEX", "PAYPAL"].map((p) => (
              <div
                key={p}
                className="border border-[#252525] px-2.5 py-1.5 text-[#444444] text-[9px] tracking-[0.2em] font-bold"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
