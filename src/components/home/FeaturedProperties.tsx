"use client";

import { useRef } from "react";
import Link from "next/link";

const PROPERTIES = [
  {
    id: 1,
    price: "₹ 85,00,00,000",
    title: "Estate in Lutyens, Delhi",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    price: "₹ 62,50,00,000",
    title: "Villa in Alibaug, Maharashtra",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    price: "₹ 45,00,00,000",
    title: "Penthouse in Worli, Mumbai",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    price: "₹ 32,00,00,000",
    title: "Mansion in Jubilee Hills, Hyderabad",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    price: "₹ 28,50,00,000",
    title: "Beachfront Villa in Goa",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface dark:bg-[#0a0a0a] text-on-surface">
      <div className="max-w-7xl mx-auto border-b border-outline-variant/20 pb-20">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 fade-in-up">
          <h2 className="font-display-md text-3xl md:text-[44px] tracking-tight">Featured Properties</h2>
          
          <div className="flex items-center gap-6">
            <Link href="/properties" className="text-xs font-label-md tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors hidden md:block">
              View All
            </Link>
            <div className="flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Scroll left"
              >
                <span className="material-symbols-outlined font-light text-xl">chevron_left</span>
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined font-light text-xl">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar fade-in-up stagger-1 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROPERTIES.map((property) => (
            <div 
              key={property.id} 
              className="w-[85vw] sm:w-[280px] lg:w-[calc(25%-1.125rem)] flex-shrink-0 snap-start group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden mb-5 bg-surface-variant">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <h3 className="font-body-md text-base md:text-[17px] tracking-wide text-on-surface/90 mb-1.5">{property.price}</h3>
              <p className="font-body-sm text-on-surface-variant/90 text-[13px] md:text-[14px] font-light">{property.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
