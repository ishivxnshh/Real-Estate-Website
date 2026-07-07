"use client";

import { useState, useRef, useEffect } from "react";

const LOCATIONS = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurgaon",
  "Lucknow",
  "Bangalore",
  "Mumbai",
  "Pune",
  "Navi Mumbai",
];

export default function HeroSearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded flex flex-col md:flex-row gap-3 shadow-2xl fade-in-up stagger-3 max-w-2xl relative z-20">
      
      {/* Custom Dropdown Container */}
      <div 
        ref={dropdownRef}
        className="flex-1 relative bg-white/10 rounded border border-white/5 hover:bg-white/20 transition-colors cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center w-full h-full min-h-[64px] pl-16 pr-12">
          <span className="material-symbols-outlined absolute left-5 text-white/80 text-[28px]">
            location_on
          </span>
          
          <span className={`font-body-lg ${selectedLocation ? "text-white" : "text-white/60"}`}>
            {selectedLocation || "Select Location"}
          </span>
          
          <span className={`material-symbols-outlined absolute right-5 text-white/80 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            expand_more
          </span>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded shadow-2xl overflow-hidden z-50 origin-top animate-fade-in transition-all">
            <div className="max-h-[300px] overflow-y-auto">
              {LOCATIONS.map((loc) => (
                <div 
                  key={loc}
                  className={`px-6 py-4 font-body-md cursor-pointer transition-colors ${
                    selectedLocation === loc 
                      ? "bg-[#C5A880]/30 text-white" 
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLocation(loc);
                    setIsOpen(false);
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button className="bg-primary hover:bg-primary/90 text-on-primary px-12 py-5 rounded font-label-md tracking-widest uppercase transition-colors md:w-auto w-full cursor-pointer shadow-lg shadow-primary/20">
        Explore
      </button>
    </div>
  );
}
