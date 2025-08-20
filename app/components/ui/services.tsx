"use client";

import { useState } from "react";

const accordionItems = [
  {
    id: 1,
    title: "Web Design",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Digital Marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Brand Strategy",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Content Creation",
    imageUrl:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2090&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "SEO Optimization",
    imageUrl:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2070&auto=format&fit=crop",
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: {
  item: (typeof accordionItems)[0];
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl || "/placeholder.svg"}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x450/ec4899/ffffff?text=Image+Error";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-pink-500/20 to-transparent"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out drop-shadow-lg
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0" // Active state: horizontal, bottom-center
              : // Inactive state: vertical, positioned at the bottom, for all screen sizes
                "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100 font-sans min-h-screen">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
              Transform Your Business with Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                {" "}
                Premium Services
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              From stunning web design to powerful digital marketing strategies,
              we help your business grow and thrive in the digital landscape.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
