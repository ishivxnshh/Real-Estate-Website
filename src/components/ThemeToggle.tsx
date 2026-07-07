"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8" />; // Placeholder of same size
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-16 h-8 rounded-full transition-all duration-500 ease-in-out outline-none
        ${isDark 
          ? "bg-neutral-900 shadow-[inset_2px_2px_5px_#000000,inset_-2px_-2px_5px_#262626]" 
          : "bg-neutral-200 shadow-[inset_2px_2px_5px_#c8c8c8,inset_-2px_-2px_5px_#ffffff]"
        }
      `}
      aria-label="Toggle Theme"
    >
      <div
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-500 ease-in-out
          ${isDark 
            ? "translate-x-0 rotate-0 bg-transparent shadow-[inset_6px_-2px_0px_0px_#f8fafc]" 
            : "translate-x-8 rotate-[360deg] bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"
          }
        `}
      />
    </button>
  );
}
