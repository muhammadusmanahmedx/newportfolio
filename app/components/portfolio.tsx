"use client";

import React from "react";

// Portfolio item interface
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: string;
}

// Portfolio section props interface
export interface PortfolioSectionProps {
  items: PortfolioItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

// Portfolio card props interface
interface PortfolioCardProps {
  item: PortfolioItem;
  onClick?: (item: PortfolioItem) => void;
}

// Portfolio Card Component
const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
  // Dynamic category styling
  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case "mobile app":
        return {
          bg: "bg-pink-50",
          text: "text-pink-600",
          dot: "bg-pink-400",
        };
      case "web design":
        return {
          bg: "bg-blue-50",
          text: "text-blue-600",
          dot: "bg-blue-400",
        };
      case "playstore graphics":
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          dot: "bg-purple-400",
        };
      case "graphics":
        return {
          bg: "bg-green-50",
          text: "text-green-600",
          dot: "bg-green-400",
        };
      case "ui/ux":
        return {
          bg: "bg-orange-50",
          text: "text-orange-600",
          dot: "bg-orange-400",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          dot: "bg-gray-400",
        };
    }
  };

  const categoryStyle = getCategoryStyle(item.category);

  const handleClick = () => {
    if (onClick) {
      onClick(item);
    } else if (item.link && item.link !== "#") {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100 h-[450px] w-full flex flex-col cursor-pointer"
      onClick={handleClick}
    >
      {/* Image Container - Fixed Height */}
      <div className="relative h-[240px] w-full overflow-hidden bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-t-2xl flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-700/30 via-transparent to-white/10 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)] z-10"></div>

        <img
          src={item.imageUrl}
          alt={item.title}
          className={`w-full h-full ${
            item.category.toLowerCase().includes("graphics")
              ? "object-contain p-4"
              : "object-cover"
          } group-hover:scale-110 transition-all duration-700 drop-shadow-lg`}
          loading="lazy"
        />

        {/* Enhanced Floating Elements */}
        <div
          className="absolute top-6 right-6 w-3 h-3 bg-white/40 rounded-full backdrop-blur-sm animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-12 right-12 w-2 h-2 bg-white/30 rounded-full backdrop-blur-sm animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute bottom-8 left-6 w-4 h-4 bg-white/25 rounded-full backdrop-blur-sm animate-pulse"></div>

        {/* Gradient Orb */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Content Container - Compact */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Dynamic Category Tag */}
        <div
          className={`inline-flex items-center px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} rounded-full text-xs font-semibold uppercase tracking-wide mb-3 w-fit`}
        >
          <span
            className={`w-1.5 h-1.5 ${categoryStyle.dot} rounded-full mr-2`}
          ></span>
          {item.category}
        </div>

        {/* Title - Compact */}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-500 leading-tight mb-2 line-clamp-2">
          {item.title}
        </h3>

        {/* Description - Compact */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Subtle Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-pink-200/0 group-hover:ring-pink-300/50 transition-all duration-700"></div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-300/20 via-pink-400/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-purple-300/15 via-pink-300/10 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
    </div>
  );
};

// Main Portfolio Component
const Portfolio: React.FC<PortfolioSectionProps> = ({
  items,
  title = "Featured Projects",
  subtitle = "Portfolio Showcase",
  description = "Discover our latest creative works and innovative solutions that showcase modern design principles and cutting-edge technology.",
  className = "",
  ...props
}) => {
  return (
    <section
      className={`py-20 px-4  bg-[#FCE7F3] ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
            {subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {title.includes(" ") ? (
              <>
                {title.split(" ").slice(0, -1).join(" ")}
                <span className="bg-pink-600 bg-clip-text text-transparent">
                  {" " + title.split(" ").slice(-1)[0]}
                </span>
              </>
            ) : (
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {title}
              </span>
            )}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "both",
              }}
            >
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

// Export the main component as default
export default Portfolio;

// Sample data for demonstration
export const samplePortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Smart Weather Forecast",
    description:
      "Get real-time weather updates, accurate forecasts, and personalized alerts to stay prepared anytime, anywhere.",
    imageUrl:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351800/WhatsApp_Image_2025-08-27_at_12.39.52_PM_bdfc55.jpg",
    link: "#",
    category: "Mobile App",
  },
  // {
  //   id: 2,
  //   title: "GPS Navigator – Live Maps & Routes",
  //   description:
  //     "Find the best routes with real-time traffic updates, turn-by-turn voice guidance, and accurate GPS tracking wherever you go.",
  //   imageUrl:
  //     "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756318079/Frame_8_vtzz5y.png",
  //   link: "#",
  //   category: "Mobile App",
  // },
  {
    id: 3,
    title: "To Do List Mobile App Design",
    description:
      "A clean and intuitive mobile app design for managing tasks with ease and productivity",
    imageUrl:
      "https://res.cloudinary.com/dlyyiq2yo/image/upload/v1756235114/WhatsApp_Image_2025-08-26_at_11.54.57_PM_qgisvb.jpg",
    link: "#",
    category: "Mobile App",
  },
  // {
  //   id: 4,
  //   title: "Universal Language Translator",
  //   description:
  //     "Instantly translate text, voice, and images across multiple languages with accuracy and ease. Your go-to app for seamless global communication.",
  //   imageUrl:
  //     "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756318078/Frame_10_rc7nku.png",
  //   link: "#",
  //   category: "Playstore Graphics",
  // },
  {
    id: 5,
    title: "Smart GPS Navigation",
    description:
      "Explore the fastest routes with live traffic updates, voice guidance, and real-time GPS tracking for a smooth and reliable journey.",
    imageUrl:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351799/WhatsApp_Image_2025-08-27_at_12.39.52_PM_1_lrhlln.jpg",
    link: "#",
    category: "Playstore Graphics",
  },
  {
    id: 6,
    title: "Food Delivery App",
    description:
      "Designed a user-friendly mobile app interface for browsing restaurants, tracking orders, and seamless food delivery experience.",
    imageUrl:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756912561/WhatsApp_Image_2025-09-03_at_6.27.21_PM_savcjk.jpg",
    link: "#",
    category: "Mobile App",
  },
];

// Demo component showing usage
export function PortfolioDemo() {
  return (
    <Portfolio
      items={samplePortfolioItems}
      title="Featured Projects"
      subtitle="Portfolio Showcase"
      description="Discover our latest creative works and innovative solutions that showcase modern design principles and cutting-edge technology."
    />
  );
}
