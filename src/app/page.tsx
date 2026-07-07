import Image from "next/image";
import Link from "next/link";
import ConciergeSection from "@/components/home/ConciergeSection";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";
import HeroSearchBar from "@/components/home/HeroSearchBar";
import FeaturedCities from "@/components/home/FeaturedCities";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import VillaIcon from "@/components/icons/VillaIcon";

export default function Home() {
  return (
    <>
      {/* Immersive Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-start px-margin-mobile md:px-margin-desktop fade-in-up">
        {/* Video Background */}
        <HeroVideoBackground />

        {/* Content */}
        <div className="relative z-10 max-w-4xl pt-20">
          <span className="text-secondary font-label-md tracking-[0.2em] uppercase mb-6 block fade-in-up">
            Housick Exclusive Collection
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[85px] leading-[1.05] text-white mb-8 fade-in-up stagger-1">
            Discover Your Extraordinary Legacy.
          </h1>
          <p className="font-body-lg text-white/80 max-w-xl mb-12 fade-in-up stagger-2">
            Explore a curated portfolio of the most exceptional properties across India's premier destinations.
          </p>

          {/* Premium Glassmorphism Search Bar */}
          <HeroSearchBar />
        </div>
      </section>

      {/* Featured Cities Grid */}
      <FeaturedCities />

      {/* Featured Properties Carousel */}
      <FeaturedProperties />

      {/* Explore by Category */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-outline-variant/20">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
            Explore by Category
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg">
            Browse our meticulously organized collection by property type.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 fade-in-up stagger-1">
          {[
            { name: "Villas", icon: "villa" },
            { name: "Apartments", icon: "apartment" },
            { name: "Offices", icon: "domain" },
            { name: "Plots", icon: "landscape" },
            { name: "Flats", icon: "apartment" },
            { name: "Bungalows", icon: "house" },
          ].map((cat) => (
            <Link
              key={cat.name}
              href="/properties"
              className="flex flex-col items-center justify-center p-8 bg-surface border border-outline-variant/30 hover:border-primary hover:shadow-md transition-all group rounded"
            >
              <div className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform flex items-center justify-center">
                {cat.icon === "villa" ? (
                  <VillaIcon className="w-8 h-8 text-primary" />
                ) : (
                  <span className="material-symbols-outlined text-[32px]">
                    {cat.icon}
                  </span>
                )}
              </div>
              <span className="font-label-md text-primary uppercase tracking-widest text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>



      <ConciergeSection />
    </>
  );
}
