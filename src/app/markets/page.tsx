import Link from "next/link";
import Image from "next/image";

const markets = [
  {
    name: "Delhi",
    colSpan: "md:col-span-8",
    height: "h-[500px]",
    image: "/images/delhi.jpg",
    description: "The historic capital, offering unparalleled luxury estates.",
  },
  {
    name: "Mumbai",
    colSpan: "md:col-span-4",
    height: "h-[500px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3eV-c9OfLzfViSWg3auReczXrr9Jp8zpttrImc_aYTrmaExrGcmXzbGXZulz-pA2aTA45K67YaMabL3F5wzvtEA6aiVDqOAYZb9B-lgIHrHYFTwTFyKNQk-4LVs0BJSJ9QHgBnR9ieQ2RpUtsnyD5hBiYbUOAlexok1lycDXpKr_OyXCUpTgcVvvIDzxEGBN54FljYvITpyMtCq2C-XNm6hAQ-iislP20PKsA4eO9SxXuaD2FWwNJSg",
  },
  {
    name: "Gurgaon",
    colSpan: "md:col-span-4",
    height: "h-[350px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKdiYfoeRHwp4Mz5NOse36wxv51hS7E9_40Tysx_8JLqmnp2u7hQC2vEC7EtLoqKp08YejiEHJX1SbjVSWY23xFzDABoGl8QUN9HOLthT-FJRV2puZsenBCQdwWukJ145W0kKlTItecLfA3zrhSps-HhMOhR4-XhsGzWDUYDmZZu9FRKJ0r5BjqbMFQgKNjX3BWpaAVQ2pSuBUvEXkoHNkjQv29GOqAViMZacbSsS88QQbrTMR9s8ouQ",
  },
  {
    name: "Bangalore",
    colSpan: "md:col-span-4",
    height: "h-[350px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrweV8ebLyvkEUEGm6WC96qOSx9ldX0CHyBJP_LYgUDTkkJurBAnjOctNIvNfJgr2hzcvQr7Io9222QOII4sJC6Gtm51y5wtq06eZ3Q_mYbY1FmGhOeVkp7xrPGrE9QVV2jhmP8Cb24puxtHCAXeKkk00qF6ZM4noi5_Z819fE-NHi7Od-QUEkdNcqUVLtFDNYj4s6vRWFFeW13GnSHq6pm99xNrTBMloB9BTddFSLMsUIltdATB8b0A",
  },
  {
    name: "Pune",
    colSpan: "md:col-span-4",
    height: "h-[350px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxB6keL0D7jEKQihhmXgZXvMn8mzDqmXKGo0Rkrr5zJZexlbprIjvL_GA8lHVT9dm0yGfJ3pIV3jOlnhF4bcliVAjpRtLxj5EmteqGKn1ozNENcJF_aC6_gIVJD8K1umJ8as4Kn6Uq-1T1gvoreGco80FyGs2Mv0roo1p49cneCvja1rvV3Ud9VpEx9o-dmvCl6JXyAVRJfdLs6i9iGZJSbhOQIlrPh2Bk9unyQQt3mpP6YBeHy9acUw",
  },
  {
    name: "Noida",
    colSpan: "md:col-span-3",
    height: "h-[300px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXL9mYlqeMtVluZB5TimhSlmHEV3-756lU5lGjaMmx-pe83BB2XOPK5xaKbTvwmNruUab0OWI7j1lvdViowr1LjQXDVX0p37XC4aINPd6bgc8KlleABGVHDWk1MIgX67P67-2-dIJuM9WPuxP1XqkqNNsoYkmvk-icWq7shIShamPNsBYiK4MC58IZ2ZoRjEVcigvVZO0sY5NC61o_FOLyB_3FCusYC6ac51xyNmD1bc2i81gCtq3_PA",
  },
  {
    name: "Greater Noida",
    colSpan: "md:col-span-3",
    height: "h-[300px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cikJkO9y4sVqRv0I5_gchNKavLu4DY20lpmNaubpWgTcc1eRINtzFuZd2AH5S5QEOAw4YXpFnnbxreRbP2jZkPGLh0jOwreC86FA4q_2FcW1jPfbU2hrmn2dbvP1fBrXpLwnD7xCG7B3x-A35tRqeHieLgd94YnLmAj2SaWNT6V64nEHMQAwvpNDi18q9ffKQeiFC9VbeY9JNr29w1eE7iuxbd8OkZjQvm3mlBPsOJPDZtoObTuGIw",
  },
  {
    name: "Ghaziabad",
    colSpan: "md:col-span-3",
    height: "h-[300px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBatxFDtlVCkwBOlWOHxEwJHYp902zs0n09dwsrCj5Ano8QD2aBlcu5UhRIocu84FrOVT1TFgh6YPBbwOpLcnJ6eIbSM3bELDtcXm6bwatZ9wvNpy74MAAUsVD2Cl41BPKdhDJBMOKwxok2Va0uz7SCQ43kauGXbXchFcanFUm_ZFpbl4BUKFLLrdNbvta56VZA4f3nk8CPVKSTZgPsIN4OBXNYyPw3RrWMb3Ngrfk3tvgNIZ5mLK7avA",
  },
  {
    name: "Lucknow",
    colSpan: "md:col-span-3",
    height: "h-[300px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeDG5S75dBBUXgnHsbPrWkCAHed4BFyULI5eGtcLKeQrZJR3Z3MizDZfgMhNVVK6rHQXn7875-he74DZ08BNXkIjStzcGqtsC3fkx56h8r10YgKPPIT6dKUVvXzdIHNEY0SGZxA251bwogaV7QCoix6RQsktSA9Xk6NzW-cZlmw7VaAdSYJvI7wu1mNXVtGloa0h1kg8LPNwijgJOy1qM8vKGwvB1m3Zzj7qgY1DVpArqk-Wrjw4Ezjg",
  },
  {
    name: "Navi Mumbai",
    colSpan: "md:col-span-12",
    height: "h-[400px]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFvo2RruvhRGLl7D4pAKY64xGPZ7mZQ4Gh-ZDwnMXjfe-qbDyvpPneICeKBNqKwTuZ9oKB1F8qwlFMnfs9DYbhhhBTGlDtQPoZxgGlSNNhtAHgVxB-TKfNuh66rBfwX_d6QVEVRJbLjF3AHCsIgCKilX9hmAgnm2MrtFSPkQ-r8OF6EKQF_3FyF_dRr8b__B6cfP2i0u7xXwKFPowiesN2snqXRxOMcj0fOWd0-CiKT1fQotiTgwZl-Q",
    description: "Emerging infrastructure meets uncompromising luxury in our newest curated collection of waterfront estates.",
    isWide: true,
  },
];

export default function MarketsPage() {
  return (
    <div className="flex-grow pt-24 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="text-center mb-16 fade-in-up">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
          City Directory
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore our exclusive collections across India's most prestigious urban centers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {markets.map((market, idx) => (
          <Link
            key={market.name}
            href={`/markets/${encodeURIComponent(market.name.toLowerCase())}`}
            className={`card-hover group relative block ${market.colSpan} ${market.height} ${
              market.isWide ? "mt-8" : ""
            } overflow-hidden rounded bg-surface border border-outline-variant/30 hover:shadow-[0_40px_80px_rgba(26,26,26,0.04)] transition-all duration-500 fade-in-up stagger-${idx % 5}`}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out z-0 group-hover:scale-105"
              src={market.image}
              alt={market.name}
            />
            <div
              className={`absolute inset-0 ${
                market.isWide
                  ? "bg-gradient-to-r from-primary/80 via-primary/30 to-transparent"
                  : "bg-gradient-to-t from-primary/80 via-transparent to-transparent"
              } z-10`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 ${
                market.isWide ? "p-10 w-full md:w-1/2 flex flex-col justify-end h-full" : "p-6 lg:p-8 w-full"
              } z-20`}
            >
              <h2
                className={`${
                  market.isWide ? "font-headline-lg" : "font-headline-md"
                } text-on-primary mb-1`}
              >
                {market.name}
              </h2>
              {market.description && (
                <p
                  className={`font-body-md text-on-primary/80 mb-6 ${
                    market.isWide ? "hidden md:block" : ""
                  }`}
                >
                  {market.description}
                </p>
              )}
              <span className="font-label-md text-secondary-fixed flex items-center group-hover:underline mt-4">
                View Portfolio <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
