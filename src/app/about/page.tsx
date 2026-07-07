import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          alt="Modern luxury villa at dusk"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 transform origin-center transition-transform duration-[10s] ease-out"
          src="https://lh3.googleusercontent.com/aida/AP1WRLsK2s5bHYAQ09oBe8ElnDFJu9x6Codli7CqA3Rk2rOlY79eGLGI3k6J4kPamX-28aV5rT9YOwAbhEzrxes5mYpGK8snQxvbKedy2ic_2LBoNpaLW1XURH2A3XKfxMGjtqC93HHXzkYJYLKqOWxDrbTHnNTEYa04phvvtgXvj65czAKsK_xwFAXOWs-fD7sJpxPmqXQPLUXiunaB-sIVUdblnsgqffVsDm1YTCMMkOUbveOr_aWKGdgDNEc"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-primary/60 z-10"></div>
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto mt-20">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
            Crafting the Future of Heritage
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl mx-auto">
            Curating exceptional properties for a discerning clientele, where
            architectural brilliance meets timeless legacy.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-2">
            <span className="font-label-md text-label-md text-secondary block mb-4 uppercase tracking-widest">
              Our Legacy
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
              Decades of Exclusivity
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Housick was founded on a singular principle: that extraordinary
              real estate is more than shelter; it is art, history, and a cornerstone of
              personal legacy. We manage portfolios that transcend market trends,
              focusing on properties with profound architectural significance.
            </p>
            <p className="font-body-md text-body-md text-surface-tint">
              Our approach is meticulous and discreet, ensuring that every transaction
              and management detail is executed with flawless precision, matching the
              caliber of the estates we represent.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 relative h-[500px]">
            <div className="absolute inset-0 bg-surface-container-highest -translate-x-4 translate-y-4 rounded-sm"></div>
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-sm border border-outline-variant/30"
              alt="A minimalist architectural detail shot"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHfCQnPzVg8lC-hKWJNMANfTt-_tsLNvmQ7Zj6GdZC0WlijU5QDNalniLjF4Hf8GXMwlNmbt4PZoyiH5GcxG53RNwI5V54dsUPGAsfmpgE2_xoa0aBiw4ksIP_8s114QfnA9A8uphOyr--HTVqV4eBr55yNMk4YuBT_eIS3hgvYV_qPNOMt_FL7fgSDX6vN908Mvi8YCjfQFEKNoUIe0YLaD8gDA38pgcK_VUdmKktRYEJkq4HIQsARg"
            />
          </div>
        </div>
      </section>

      {/* Concierge Section (Asymmetric Layout) */}
      <section className="py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-outline-variant/20">
            <div className="h-[600px] border-b md:border-b-0 md:border-r border-outline-variant/20 p-1">
              <img
                alt="A formally dressed concierge handing over leather-bound property documents"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsZdxq9qu0nrHILzX_Fg0ChG9fvx678bOGdyAGsklddS-SW3SHqqcoJ_XNFLFZhNnBpXvWFousEVEvUyr4YUYt2pDQDkOyvWe2DKAuMvikTdRU4Kd1aG5hwVhA5NpeSI3Tv2W_FMDDEbCjQ3_9CHxq0ivrjvgPKOIRH23NJdTdMsvgdhg-RY1hfIX0HKZ4oRslIt2udO5tGPdDvlo7kTiKKjtgoZPYsU98Ny4Wh4QDGYDziwTEUHBb7kr1_"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-surface">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                concierge
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                Bespoke Concierge
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Our relationship extends far beyond the acquisition. We provide a
                comprehensive suite of management services, ensuring your estate
                operates seamlessly. From private staff curation to specialized
                architectural maintenance, our concierge team anticipates every need.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-primary transition-colors w-fit border-b border-secondary hover:border-primary pb-1"
              >
                Discover Services
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
            Our Core Tenets
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            The principles that guide our curation and client relations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Card 1 */}
          <div className="md:col-span-2 bg-surface border border-outline-variant/30 p-8 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s] ease-out z-0"
              alt="A close-up abstract architectural shot of perfectly aligned marble slabs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJWVwOGobxnqYOsgQChVYx4inlBulQHDtc3403ntped5hQAXm6czU7H0VmKDsrLGQ79b1lC3LDxNv5nRJFhYcu8qPFO4AJozIlzl_7BrJzXP0JwXS7s6UpHzu_7x-owkbiGNdWRwdd0-CtSQYPNa0IWzwL1uhPgVWi2vhaO89_XnbO7WG3SJ3gzSApuuqcnVogVOU5Gcfnz9Swu0L0k-gJeYPF5_l-jPI_8QdS23PIZYufyUWyHBqXGA"
            />
            <div className="relative z-20">
              <span className="material-symbols-outlined text-secondary mb-2 text-3xl">
                architecture
              </span>
              <h4 className="font-headline-md text-headline-md text-on-primary mb-2">
                Architectural Integrity
              </h4>
              <p className="font-body-md text-body-md text-surface-container-highest">
                We champion properties that demonstrate exceptional design pedigree and
                structural permanence.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-low border border-outline-variant/30 p-8 flex flex-col justify-center items-center text-center hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-secondary mb-4 text-4xl">
              verified_user
            </span>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              Absolute Discretion
            </h4>
            <p className="font-body-sm text-label-md text-on-surface-variant font-normal">
              Privacy is paramount. We operate with the highest level of confidentiality
              in all client affairs.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-low border border-outline-variant/30 p-8 flex flex-col justify-center items-center text-center hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-secondary mb-4 text-4xl">
              trending_up
            </span>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              Generational Vision
            </h4>
            <p className="font-body-sm text-label-md text-on-surface-variant font-normal">
              We look beyond immediate cycles, focusing on assets that appreciate in
              both value and cultural significance.
            </p>
          </div>
          {/* Card 4 */}
          <div className="md:col-span-2 bg-primary text-on-primary p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary-fixed-dim/20">
            <div className="max-w-md">
              <h4 className="font-headline-md text-headline-md mb-2">
                Join the Portfolio
              </h4>
              <p className="font-body-md text-body-md text-primary-fixed-dim">
                Submit your property for consideration by our acquisition committee.
              </p>
            </div>
            <Link href="/contact">
              <button className="bg-secondary text-on-secondary px-8 py-3 font-label-md text-label-md hover:bg-secondary/90 transition-colors shrink-0 cursor-pointer">
                Inquire Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
