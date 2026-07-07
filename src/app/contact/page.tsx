"use client";

export default function ContactPage() {
  return (
    <div className="flex-grow pt-24 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Information */}
        <div className="fade-in-up">
          <span className="font-label-md text-label-md text-secondary block mb-4 uppercase tracking-widest">
            Reach Out
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">
            Connect With Our Concierge
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            Whether you are acquiring a generational asset, seeking bespoke management,
            or exploring our exclusive portfolio, our dedicated advisors are available
            at your convenience.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                location_on
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">
                  Global Headquarters
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  DLF Cyber City, Block B
                  <br />
                  New Delhi, Delhi 110001
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                mail
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">
                  Direct Correspondence
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  shivanshmittalsde@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                call
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">
                  Private Line
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  +91 7452862988
                  <br />
                  <span className="text-sm italic">Available 24/7 for clientele</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface border border-outline-variant/30 p-8 md:p-12 fade-in-up stagger-1 shadow-sm">
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            Schedule a Consultation
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Please provide your details, and a senior advisor will contact you shortly.
          </p>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  className="block w-full px-0 py-2 bg-transparent border-0 border-b border-outline-variant text-primary focus:ring-0 focus:border-primary peer font-body-md text-body-md focus:outline-none"
                  id="firstName"
                  placeholder=" "
                  type="text"
                />
                <label
                  className="absolute left-0 top-2 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  htmlFor="firstName"
                >
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  className="block w-full px-0 py-2 bg-transparent border-0 border-b border-outline-variant text-primary focus:ring-0 focus:border-primary peer font-body-md text-body-md focus:outline-none"
                  id="lastName"
                  placeholder=" "
                  type="text"
                />
                <label
                  className="absolute left-0 top-2 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
              </div>
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
            
            <div className="relative pt-4">
              <textarea
                className="block w-full px-0 py-2 bg-transparent border-0 border-b border-outline-variant text-primary focus:ring-0 focus:border-primary peer font-body-md text-body-md focus:outline-none min-h-[100px] resize-none"
                id="message"
                placeholder=" "
              ></textarea>
              <label
                className="absolute left-0 top-6 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                htmlFor="message"
              >
                Inquiry Details
              </label>
            </div>

            <button className="w-full mt-4 px-8 py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest hover:bg-inverse-surface transition-colors cursor-pointer">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
