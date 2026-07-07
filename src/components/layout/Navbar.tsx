"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import PreferencesModal from "@/components/layout/PreferencesModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/rent" },
    { name: "Sell", path: "/sell" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 flex flex-col transition-transform duration-300 ease-in-out ${
        isScrolled ? "-translate-y-8" : "translate-y-0"
      }`}
    >
      
      {/* Top Utility Bar */}
      <div className="w-full h-8 bg-surface-variant/90 dark:bg-[#1a1a1a]/95 backdrop-blur-md px-margin-mobile md:px-margin-desktop flex justify-end items-center gap-6 text-[11px] font-label-sm tracking-widest text-on-surface-variant dark:text-gray-300 border-b border-outline-variant/20 leading-none">
        <Link href="/login" className="hover:text-primary transition-colors cursor-pointer uppercase flex items-center h-full pt-[2px]">Login</Link>
        <button onClick={() => setIsPreferencesOpen(true)} className="hover:text-primary transition-colors cursor-pointer uppercase flex items-center h-full pt-[2px] outline-none">Preferences</button>
        {/* We place the ThemeToggle here to keep the main nav clean */}
        <div className="flex items-center justify-center h-full scale-[0.6] origin-right -ml-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-surface/95 dark:bg-[#0a0a0a]/95 backdrop-blur-lg shadow-sm border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-2">
        
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity cursor-pointer block h-[60px] overflow-hidden flex items-center">
            <img src="/logo-light.png" alt="HOUSICK" className="h-[120px] w-auto max-w-none object-cover object-center dark:hidden" />
            <img src="/logo-dark.png" alt="HOUSICK" className="h-[120px] w-auto max-w-none object-cover object-center hidden dark:block" />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                className={`${
                  isActive
                    ? "text-primary border-primary"
                    : "text-on-surface-variant dark:text-gray-300 border-transparent hover:text-primary"
                } border-b-2 py-1 font-label-md text-[13px] xl:text-[14px] tracking-widest uppercase cursor-pointer transition-all duration-300`}
                href={link.path}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        {/* Right: Contact Button */}
        <div className="flex-1 flex items-center justify-end">
          <Link 
            href="/contact" 
            className="hidden lg:flex bg-[#C5A880] hover:bg-[#b0936c] text-white px-8 py-3 rounded-sm font-label-md tracking-widest uppercase transition-colors"
          >
            Contact Us
          </Link>
          
          {/* Mobile Menu Icon */}
          <button className="lg:hidden ml-4 text-on-surface">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

      </div>

      {/* Preferences Modal */}
      <PreferencesModal 
        isOpen={isPreferencesOpen} 
        onClose={() => setIsPreferencesOpen(false)} 
      />
    </header>
  );
}
