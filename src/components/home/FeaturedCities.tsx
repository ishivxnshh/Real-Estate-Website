import Link from "next/link";

const CITIES = [
  {
    name: "Mumbai",
    properties: "more than 450 properties",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    large: true,
  },
  {
    name: "Delhi",
    properties: "more than 320 properties",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    large: true,
  },
  {
    name: "Bangalore",
    properties: "more than 280 properties",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
    large: false,
  },
  {
    name: "Gurgaon",
    properties: "more than 150 properties",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    large: false,
  },
  {
    name: "Pune",
    properties: "more than 190 properties",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    large: false,
  },
];

export default function FeaturedCities() {
  return (
    <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop bg-[#fbfbfb] dark:bg-surface-container text-on-surface border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto text-center mb-16 fade-in-up">
        <h2 className="font-display-md text-3xl md:text-5xl mb-6 text-on-surface tracking-tight">Setting the Standard for Luxury Real Estate</h2>
        <p className="font-body-md text-on-surface-variant max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
          At Housick, we specialize in premium real estate, offering an exclusive portfolio of luxury properties across India's most prestigious markets. From elegant city apartments to breathtaking expansive villas, our local expertise provides access to the finest homes in the most desirable locations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-6 fade-in-up stagger-1">
        {/* Top Row: 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CITIES.filter(c => c.large).map(city => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>

        {/* Bottom Row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CITIES.filter(c => !c.large).map(city => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center fade-in-up stagger-2">
        <Link 
          href="/markets"
          className="bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-black/20 dark:border-white/20 text-on-surface px-12 py-4 rounded-sm font-label-md tracking-widest uppercase transition-colors inline-block"
        >
          Show More Locations
        </Link>
      </div>
    </section>
  );
}

function CityCard({ city }: { city: any }) {
  return (
    <Link href={`/markets`} className="group block bg-white dark:bg-[#1a1a1a] overflow-hidden hover:shadow-xl transition-shadow duration-500 border border-outline-variant/30 flex flex-col h-full">
      <div className="relative h-[250px] md:h-[320px] overflow-hidden w-full">
        <img 
          src={city.image} 
          alt={city.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex justify-between items-center bg-white dark:bg-[#1a1a1a] border-t border-outline-variant/20">
        <div>
          <h3 className="font-display-sm text-lg text-on-surface mb-0.5">{city.name}</h3>
          <p className="font-body-sm text-on-surface-variant text-[11px] uppercase tracking-wider">{city.properties}</p>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant font-light group-hover:text-primary transition-colors">
          arrow_forward
        </span>
      </div>
    </Link>
  );
}
