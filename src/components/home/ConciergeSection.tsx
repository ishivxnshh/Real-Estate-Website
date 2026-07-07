"use client";

import { useState } from "react";

export default function ConciergeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full fade-in-up">
            <img
              alt="Luxury Concierge Service"
              className="w-full h-[600px] object-cover rounded"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWkyrqwAQQQxK7cIGAwYSxZA8YMhjVPh48W1SEDs0tRxq2BDyNiKMTnC9wQjgWqZiTEeZam7E83Cz3pQDdMCQ8kcljcgvPIHetMaOld_dZWMWTI7UjZXCZRMnZF2YSkXsx6s3mKE_SSm0yF8UsWxEY8jFe6UQC_lOzpo8UZY4SyP_xCvGQGACOsbeDy3tcjI4WDwTQeuegsRfe_qziB1DAtpNQ1DZtnCMIUjp_3Av2ShkbBSnThTIClQ"
            />
          </div>
          <div className="flex-1 fade-in-up stagger-1">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
              The Concierge Experience
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Our dedicated concierge team provides an unparalleled level of personalized
              service, ensuring every detail of your real estate journey is flawlessly
              executed. From exclusive property previews to seamless transaction
              management, we are here to cater to your unique needs with discretion and
              expertise.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Register your interest today to schedule a private consultation and discover
              how we can elevate your portfolio. Our advisors are available around the
              clock to assist our discerning clientele.
            </p>
            <button
              className="px-8 py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest hover:bg-inverse-surface transition-colors cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Request a Callback
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-primary/20 backdrop-blur-sm p-4"
          id="interestModal"
        >
          <div className="modal-content bg-surface w-full max-w-md border border-outline-variant/30 shadow-2xl relative p-8">
            <button
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Show Interest
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Register your interest to have our premium concierge schedule a call with
              you.
            </p>
            <form className="space-y-6">
              <div className="relative">
                <input
                  className="block w-full px-0 py-2 bg-transparent border-0 border-b border-outline-variant text-primary focus:ring-0 focus:border-primary peer font-body-md text-body-md focus:outline-none"
                  id="name"
                  placeholder=" "
                  type="text"
                />
                <label
                  className="absolute left-0 top-2 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  htmlFor="name"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  className="block w-full px-0 py-2 bg-transparent border-0 border-b border-outline-variant text-primary focus:ring-0 focus:border-primary peer font-body-md text-body-md focus:outline-none"
                  id="email"
                  placeholder=" "
                  type="email"
                />
                <label
                  className="absolute left-0 top-2 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  className="block w-full px-0 py-2 bg-transparent border-0 border-b border-outline-variant text-primary focus:ring-0 focus:border-primary peer font-body-md text-body-md focus:outline-none"
                  id="phone"
                  placeholder=" "
                  type="tel"
                />
                <label
                  className="absolute left-0 top-2 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
              </div>
              <button className="w-full mt-4 px-8 py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest hover:bg-inverse-surface transition-colors cursor-pointer">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
