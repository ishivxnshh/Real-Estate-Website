"use client";

import { useState, useEffect, useRef } from "react";

const VIDEOS = [
  "/assets/videos/Luxury_residential_community.mp4",
  "/assets/videos/Luxury_Indian_villa_Gurgaon.mp4",
  "/assets/videos/Luxury_residential_towers_Mumbai.mp4",
];

export default function HeroVideoBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Page visibility logic: pause when tab is inactive, resume when active
  useEffect(() => {
    const handleVisibilityChange = () => {
      const activeVideo = videoRefs.current[activeIndex];
      if (!activeVideo) return;
      
      if (document.hidden) {
        activeVideo.pause();
      } else {
        // Only attempt to play if we are visible
        activeVideo.play().catch((err) => {
          console.error("Autoplay failed on resume:", err);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [activeIndex]);

  const handleVideoEnded = (index: number) => {
    const nextIndex = (index + 1) % VIDEOS.length;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    // Play the newly active video smoothly
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo && !document.hidden) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch((err) => {
        console.error("Autoplay failed:", err);
      });
    }
  }, [activeIndex]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {VIDEOS.map((src, index) => {
        const isActive = index === activeIndex;
        // Preload the current one and the immediately next one
        const isNext = index === (activeIndex + 1) % VIDEOS.length;
        const shouldPreload = isActive || isNext ? "auto" : "none";
        
        return (
          <video
            key={src}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={src}
            onEnded={() => handleVideoEnded(index)}
            muted
            playsInline
            preload={shouldPreload}
            autoPlay={index === 0} // Only rely on native autoplay for the very first video
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        );
      })}

      {/* Dark Luxury Overlay */}
      <div 
        className="absolute inset-0 z-20"
        style={{
          background: "linear-gradient(90deg, rgba(8,8,8,.72) 0%, rgba(8,8,8,.58) 30%, rgba(8,8,8,.28) 65%, rgba(8,8,8,.10) 100%)"
        }}
      />
    </div>
  );
}
