const values = [
  "Handcrafted Excellence",
  "Sustainable Luxury",
  "Timeless Design",
  "Global Curation",
  "White Glove Service",
  "Certified Authentic",
  "Free Express Shipping",
  "Exclusive Members Only",
];

export default function BrandValues() {
  const repeated = [...values, ...values];

  return (
    <section className="py-10 border-y border-[#1A1A1A] overflow-hidden bg-[#060606]">
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {repeated.map((val, i) => (
          <div key={i} className="flex items-center gap-6 px-8">
            <span className="text-[#888888] text-[10px] tracking-[0.35em] uppercase font-light">
              {val}
            </span>
            <span className="text-[#C9A06A] text-base leading-none">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
