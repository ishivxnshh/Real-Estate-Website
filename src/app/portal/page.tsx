"use client";

import { useState, useEffect } from "react";
import { fetchProperties, submitLead } from "@/utils/data";

export default function CustomerPortal() {
  const [activeTab, setActiveTab] = useState<"buying" | "renting">("buying");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [properties, setProperties] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  const handleShowInterest = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await submitLead({
      property_id: selectedProperty?.id,
      full_name: formData.name,
      phone: formData.phone,
      email: "portal-user@example.com", // Assuming logged in user's email in real app
      inquiry_details: `Interested in ${selectedProperty?.title}`,
      status: "Pending",
    });
    setIsModalOpen(false);
    setFormData({ name: "", phone: "" });
    alert("Inquiry submitted successfully!");
  };

  return (
    <div className="flex-grow pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full fade-in-up">
      {/* Header & Segmented Control */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-in-up stagger-1">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
            Curated Properties
          </h1>
          <p className="text-on-surface-variant font-body-lg text-body-lg">
            Discover exclusive real estate opportunities curated for the most discerning
            investors.
          </p>
        </div>
        <div className="flex bg-surface-container rounded-DEFAULT p-1 w-full md:w-auto">
          <button
            className={`flex-1 md:flex-none px-6 py-2 rounded font-label-md text-label-md transition-all cursor-pointer ${
              activeTab === "buying"
                ? "bg-primary text-on-primary shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            }`}
            onClick={() => setActiveTab("buying")}
          >
            Buying
          </button>
          <button
            className={`flex-1 md:flex-none px-6 py-2 rounded font-label-md text-label-md transition-all cursor-pointer ${
              activeTab === "renting"
                ? "bg-primary text-on-primary shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            }`}
            onClick={() => setActiveTab("renting")}
          >
            Renting
          </button>
        </div>
      </div>

      {/* Bento Grid Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter fade-in-up stagger-2">
        {properties.map((prop) => (
          <article
            key={prop.id}
            className="group relative bg-surface border border-outline-variant/30 overflow-hidden flex flex-col h-[500px]"
          >
            <div className="absolute top-4 left-4 z-10 bg-surface/90 backdrop-blur px-3 py-1 font-label-sm text-label-sm text-primary uppercase tracking-widest">
              {prop.type}
            </div>
            <div className="flex-1 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={prop.title}
                src={prop.image_url}
              />
            </div>
            <div className="p-6 bg-surface z-10">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-headline-md text-headline-md text-primary">
                  {prop.title}
                </h2>
                <span className="font-headline-md text-headline-md text-secondary">
                  {prop.price_formatted}
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-6 uppercase">
                {prop.location}
              </p>
              <button
                onClick={() => handleShowInterest(prop)}
                className={`w-full py-3 font-label-md text-label-md uppercase tracking-widest transition-colors cursor-pointer bg-primary text-on-primary hover:bg-inverse-surface`}
              >
                Show Interest
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/20 backdrop-blur-sm p-4 fade-in">
          <div className="bg-surface w-full max-w-md border border-outline-variant/30 shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Show Interest
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Express interest in <strong>{selectedProperty?.title}</strong>. A dedicated advisor will reach out.
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="block w-full px-0 py-2 bg-transparent border-0 border-b border-outline-variant text-primary focus:ring-0 focus:border-primary peer font-body-md text-body-md focus:outline-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-2 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="block w-full px-0 py-2 bg-transparent border-0 border-b border-outline-variant text-primary focus:ring-0 focus:border-primary peer font-body-md text-body-md focus:outline-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-2 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Phone Number
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 px-8 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest hover:bg-inverse-surface transition-colors cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
