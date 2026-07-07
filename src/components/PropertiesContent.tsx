"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { fetchProperties } from "@/utils/data";

interface PropertiesContentProps {
  city?: string;
}

export function PropertiesContent({ city }: PropertiesContentProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [allProperties, setAllProperties] = useState<any[]>([]);
  
  const locationParam = city;

  const [selectedPrice, setSelectedPrice] = useState("Any");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBeds, setSelectedBeds] = useState<string>("");

  useEffect(() => {
    fetchProperties().then((data) => setAllProperties(data));
  }, []);

  const displayedProperties = allProperties.filter((p) => {
    if (locationParam && !p.location.toLowerCase().includes(locationParam.toLowerCase())) return false;
    
    // Check price
    if (selectedPrice !== "Any") {
       const priceStr = p.price_formatted.replace(/[^0-9]/g, "");
       const priceNum = parseInt(priceStr, 10);
       if (selectedPrice === "$1M - $5M" && (priceNum < 1000000 || priceNum > 5000000)) return false;
       if (selectedPrice === "$5M - $10M" && (priceNum < 5000000 || priceNum > 10000000)) return false;
       if (selectedPrice === "$10M+" && priceNum < 10000000) return false;
    }
    
    // Check types
    if (selectedTypes.length > 0 && !selectedTypes.includes(p.type)) return false;
    
    // Check beds
    if (selectedBeds !== "") {
      if (selectedBeds === "3+" && p.beds < 3) return false;
      if (selectedBeds !== "3+" && p.beds.toString() !== selectedBeds) return false;
    }
    
    return true;
  });

  const clearFilters = () => {
    setSelectedPrice("Any");
    setSelectedTypes([]);
    setSelectedBeds("");
  };

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const displayLocation = locationParam ? capitalize(locationParam) : null;

  return (
    <div className="flex-grow pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-gutter">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
        {/* Mobile Toggle */}
        <div
          className="md:hidden flex justify-between items-center bg-surface-container p-4 rounded mb-4 cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <span className="font-label-md text-label-md">Filters</span>
          <span className="material-symbols-outlined">tune</span>
        </div>

        <div
          className={`${
            isFilterOpen ? "block" : "hidden"
          } md:block sticky top-28 h-[calc(100vh-140px)] overflow-y-auto filter-scroll pr-4`}
        >
          <h2 className="font-headline-md text-headline-md mb-8">Refine Search</h2>

          {/* Filter Group: Price */}
          <div className="mb-8 border-b border-outline-variant/30 pb-6">
            <h3 className="font-label-md text-label-md mb-4 text-on-surface-variant">
              Price Range
            </h3>
            <div className="flex flex-col gap-3">
              {["Any", "$1M - $5M", "$5M - $10M", "$10M+"].map((price, idx) => (
                <label key={idx} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    className="form-radio text-primary border-outline focus:ring-primary h-4 w-4 cursor-pointer"
                    name="price"
                    type="radio"
                    checked={selectedPrice === price}
                    onChange={() => setSelectedPrice(price)}
                  />
                  <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                    {price}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter Group: Property Type */}
          <div className="mb-8 border-b border-outline-variant/30 pb-6">
            <h3 className="font-label-md text-label-md mb-4 text-on-surface-variant">
              Property Type
            </h3>
            <div className="flex flex-col gap-3">
              {["Villa", "Penthouse", "Estate", "Apartment", "Plot"].map((type, idx) => (
                <label key={idx} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    className="form-checkbox text-primary border-outline focus:ring-primary rounded-sm h-4 w-4 cursor-pointer"
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => {
                      setSelectedTypes(prev => 
                        prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
                      );
                    }}
                  />
                  <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter Group: Bedrooms */}
          <div className="mb-8 border-b border-outline-variant/30 pb-6">
            <h3 className="font-label-md text-label-md mb-4 text-on-surface-variant">
              Bedrooms
            </h3>
            <div className="flex gap-2">
              {["1", "2", "3+"].map(bed => (
                <button
                  key={bed}
                  onClick={() => setSelectedBeds(selectedBeds === bed ? "" : bed)}
                  className={`w-10 h-10 flex items-center justify-center border font-body-md transition-colors cursor-pointer ${
                    selectedBeds === bed 
                      ? "border-primary bg-primary text-on-primary" 
                      : "border-outline-variant text-on-surface hover:border-primary"
                  }`}
                >
                  {bed}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={clearFilters}
            className="w-full bg-surface-container-high text-on-surface font-label-md text-label-md py-3 hover:bg-surface-variant transition-colors cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </aside>

      {/* Listings Grid */}
      <div className="flex-grow">
        {/* Grid Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
              {displayLocation ? `Properties in ${displayLocation}` : "Prime Markets"}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Showing {displayedProperties.length} curated properties.
            </p>
          </div>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-gutter">
          {displayedProperties.map((property) => (
            <article key={property.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] bg-surface-container mb-4 border border-outline-variant/20">
                <div
                  className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  style={{ backgroundImage: `url('${property.image_url}')` }}
                ></div>
                {property.is_new && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 font-label-sm text-label-sm text-primary">
                    New
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-label-md text-label-md text-primary truncate">
                  {property.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant truncate">
                  {property.location}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-headline-md text-headline-md text-primary">
                    {property.price_formatted}
                  </span>
                  <span className="font-label-md text-label-md text-secondary underline decoration-1 underline-offset-4 group-hover:text-primary transition-colors">
                    View Details
                  </span>
                </div>
                <div className="flex gap-4 mt-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">bed</span>{" "}
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      square_foot
                    </span>{" "}
                    {property.sqft} sqft
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {displayedProperties.length === 0 && (
          <div className="text-center py-24 border border-outline-variant/30 bg-surface-container-low">
            <span className="material-symbols-outlined text-4xl text-outline mb-4">search_off</span>
            <h3 className="font-headline-sm text-primary">No properties found</h3>
            <p className="text-on-surface-variant mt-2 font-body-md">Try adjusting your filters or location to find more results.</p>
            <button 
              onClick={clearFilters}
              className="mt-6 border border-primary text-primary px-6 py-2 rounded font-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {displayedProperties.length > 0 && (
          <div className="mt-16 flex justify-center border-t border-outline-variant/30 pt-8">
            <button className="border border-primary text-primary px-8 py-3 rounded font-label-md tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
