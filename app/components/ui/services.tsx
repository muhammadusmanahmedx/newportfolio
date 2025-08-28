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

  
];

// --- Accordion Item Component ---
const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
  onClick,
}: {
  item: (typeof accordionItems)[0];
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}) => {
  return (
    <div
      className={`
        relative overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        rounded-2xl group
        
        /* Mobile: Stack vertically with equal heights */
        h-[160px] w-full mb-3 last:mb-0
        
        /* Tablet: Horizontal layout starts */
        sm:h-[220px] sm:mb-2
        
        /* Desktop: Full accordion behavior */
        lg:h-[400px] lg:mb-0
        ${isActive ? "lg:w-[350px] xl:w-[400px]" : "lg:w-[60px] xl:w-[70px]"}
        
        /* Mobile active state - slightly larger */
        ${isActive ? "sm:scale-[1.02]" : ""}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl || "/placeholder.svg"}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x450/ec4899/ffffff?text=Image+Error";
        }}
      />

      {/* Overlay gradient - more prominent on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-500/30 to-transparent lg:from-pink-900/60 lg:via-pink-500/20"></div>

      {/* Caption Text - Responsive positioning */}
      <span
        className={`
          absolute text-white font-semibold whitespace-nowrap
          transition-all duration-500 ease-in-out drop-shadow-lg
          
          /* Mobile: Always horizontal at bottom */
          text-base bottom-4 left-1/2 -translate-x-1/2 rotate-0
          
          /* Tablet: Larger text */
          sm:text-lg sm:bottom-5
          
          /* Desktop: Conditional rotation and positioning */
          lg:text-xl
          ${
            isActive
              ? "lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 lg:rotate-0"
              : "lg:bottom-32 lg:left-1/2 lg:-translate-x-1/2 lg:rotate-90 lg:origin-center"
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen  bg-[#FCE7F3] font-sans">
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
              Transform Your Business with
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                {" "}
                Premium Services
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From stunning web design to powerful digital marketing strategies,
              we help your business grow and thrive in the digital landscape.
            </p>
            <div className="mt-6 sm:mt-8">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            {/* Mobile/Tablet: Vertical Stack */}
            <div className="block lg:hidden">
              <div className="space-y-0">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isActive={index === activeIndex}
                    onMouseEnter={() => handleItemHover(index)}
                    onClick={() => handleItemClick(index)}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Horizontal Accordion */}
            <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-4 p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Optional: Service indicators for mobile */}
        {/* <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex space-x-2">
            {accordionItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-pink-500 w-4"
                    : "bg-pink-200 hover:bg-pink-300"
                }`}
                aria-label={`View service ${index + 1}`}
              />
            ))}
          </div>
        </div> */}
      </section>
    </div>
  );
}
