"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-[#831843] text-white p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s ease-out 0.8s",
      }}
    >
      {/* Text Section */}
      <div className="flex-1">
        <h3 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
          Ready to transform your space?
        </h3>
        <p className="text-white/80 text-xl md:text-2xl">
          Let's create something beautiful together.
        </p>
      </div>

      {/* Button Section */}
      <button className="bg-[#BE185D] hover:bg-[#BE185D]/90 text-white px-12 py-6 rounded-2xl flex items-center gap-4 text-xl font-semibold transition-all duration-300 hover:scale-105 transform shadow-xl hover:shadow-2xl">
        Get Started <ArrowRight className="w-7 h-7" />
      </button>
    </div>
  );
}
