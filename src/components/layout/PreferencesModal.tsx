"use client";

import { useState, useEffect } from "react";

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreferencesModal({ isOpen, onClose }: PreferencesModalProps) {
  const [unit, setUnit] = useState("Square Feet (sq ft)");
  const [currency, setCurrency] = useState("INR");
  const [language, setLanguage] = useState("en-IN");

  // Load preferences from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUnit = localStorage.getItem("pref-unit-v2");
      const savedCurrency = localStorage.getItem("pref-currency-v2");
      const savedLang = localStorage.getItem("pref-lang-v2");
      if (savedUnit) setUnit(savedUnit);
      if (savedCurrency) setCurrency(savedCurrency);
      if (savedLang) setLanguage(savedLang);
    }
  }, []);

  if (!isOpen) return null;

  const handleSave = () => {
    localStorage.setItem("pref-unit-v2", unit);
    localStorage.setItem("pref-currency-v2", currency);
    localStorage.setItem("pref-lang-v2", language);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="bg-surface dark:bg-[#1a1a1a] w-full max-w-lg p-10 shadow-2xl relative z-10 fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined font-light text-[28px]">close</span>
        </button>

        <h2 className="font-display-md text-4xl text-center text-on-surface mb-10 tracking-tight">Preferences</h2>

        <div className="space-y-6">
          {/* Unit of Measure */}
          <div className="relative border border-outline-variant/60 focus-within:border-primary transition-colors bg-surface dark:bg-[#222]">
            <label className="block text-[10px] text-on-surface-variant uppercase tracking-widest px-3 pt-2">Property Area Unit</label>
            <select 
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md px-3 pb-2 pt-1 appearance-none outline-none cursor-pointer [&>option]:text-black"
            >
              <option value="Square Feet (sq ft)">Square Feet (sq ft)</option>
              <option value="Square Meter (sq m)">Square Meter (sq m)</option>
              <option value="Gaj (sq Yard)">Gaj (sq Yard)</option>
              <option value="Acre">Acre</option>
              <option value="Hectare">Hectare</option>
              <option value="Bigha">Bigha</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
          </div>

          {/* Currency */}
          <div className="relative border border-outline-variant/60 focus-within:border-primary transition-colors bg-surface dark:bg-[#222]">
            <label className="block text-[10px] text-on-surface-variant uppercase tracking-widest px-3 pt-2">Currency</label>
            <select 
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md px-3 pb-2 pt-1 appearance-none outline-none cursor-pointer [&>option]:text-black"
            >
              <option value="INR">Indian Rupee (₹)</option>
              <option value="USD">US Dollar ($)</option>
              <option value="AED">UAE Dirham (AED)</option>
              <option value="GBP">British Pound (£)</option>
              <option value="EUR">Euro (€)</option>
              <option value="SGD">Singapore Dollar (SGD)</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
          </div>

          {/* Language */}
          <div className="relative border border-outline-variant/60 focus-within:border-primary transition-colors bg-surface dark:bg-[#222]">
            <label className="block text-[10px] text-on-surface-variant uppercase tracking-widest px-3 pt-2">Language</label>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md px-3 pb-2 pt-1 appearance-none outline-none cursor-pointer [&>option]:text-black"
            >
              <option value="en-IN">English (India)</option>
              <option value="hi-IN">हिन्दी (Hindi)</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
          </div>

          <button 
            onClick={handleSave}
            className="w-full bg-[#C5A880] hover:bg-[#b0936c] text-white py-4 mt-8 rounded-sm font-label-md tracking-widest uppercase transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
