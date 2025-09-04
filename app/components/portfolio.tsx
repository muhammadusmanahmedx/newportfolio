"use client";
import React, { useState, useMemo } from "react";

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

// Category filter interface
interface CategoryFilter {
  name: string;
  value: string;
  icon: string;
}

// Portfolio Card Component
const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
  // Dynamic category styling
  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case "mobile app designs":
        return {
          bg: "bg-pink-50",
          text: "text-pink-600",
          dot: "bg-pink-400",
        };
      case "website designs":
        return {
          bg: "bg-pink-100",
          text: "text-pink-700",
          dot: "bg-pink-500",
        };
      case "posts design":
        return {
          bg: "bg-pink-200",
          text: "text-pink-800",
          dot: "bg-pink-600",
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
            item.category.toLowerCase().includes("posts")
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
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-pink-200/15 via-pink-300/10 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
    </div>
  );
};

// Category Filter Button Component
const CategoryButton: React.FC<{
  category: CategoryFilter;
  isActive: boolean;
  onClick: (value: string) => void;
  count: number;
}> = ({ category, isActive, onClick, count }) => {
  return (
    <button
      onClick={() => onClick(category.value)}
      className={`relative group px-6 py-3 rounded-full transition-all duration-500 font-medium text-sm tracking-wide ${
        isActive
          ? "bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-lg transform scale-105"
          : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-pink-600 hover:bg-white shadow-sm hover:shadow-md hover:scale-105 border border-gray-200"
      }`}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">{category.icon}</span>
        <span>{category.name}</span>
        <span
          className={`px-2 py-0.5 rounded-full text-xs ${
            isActive
              ? "bg-white/20 text-white"
              : "bg-gray-100 text-gray-500 group-hover:bg-pink-100 group-hover:text-pink-600"
          }`}
        >
          {count}
        </span>
      </span>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
      )}
    </button>
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Define category filters
  const categoryFilters: CategoryFilter[] = [
    { name: "Website Designs", value: "website designs", icon: "🌐" },
    { name: "Mobile App Designs", value: "mobile app designs", icon: "📱" },
    { name: "Posts Design", value: "posts design", icon: "🎨" },
  ];

  // Get unique categories from items and count projects
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    items.forEach((item) => {
      const category = item.category.toLowerCase();
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  }, [items]);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (!activeCategory) {
      return [];
    }
    return items.filter(
      (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [items, activeCategory]);

  return (
    <section
      className={`py-20 px-4 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
            {subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {title.includes(" ") ? (
              <>
                {title.split(" ").slice(0, -1).join(" ")}
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {" " + title.split(" ").slice(-1)[0]}
                </span>
              </>
            ) : (
              <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
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

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryFilters.map((category) => (
            <CategoryButton
              key={category.value}
              category={category}
              isActive={activeCategory === category.value}
              onClick={setActiveCategory}
              count={categoryCounts[category.value] || 0}
            />
          ))}
        </div>

        {/* Portfolio Grid */}
        {activeCategory ? (
          filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
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
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-3xl text-gray-400">📁</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Designs Found
              </h3>
              <p className="text-gray-600">
                No Designs available in this category yet.
              </p>
            </div>
          )
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Choose a Category
            </h3>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Select a category above to explore our amazing projects and
              creative work.
            </p>
          </div>
        )}
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

// Export the main component as default export
export default Portfolio;

// Sample data for demonstration
export const samplePortfolioItems: PortfolioItem[] = [
  // Website Designs
  // {
  //   id: 1,
  //   title: "Modern E-commerce Platform",
  //   description:
  //     "A sleek and responsive e-commerce website with advanced filtering, smooth animations, and optimized checkout process.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  //   link: "#",
  //   category: "Website Designs",
  // },
  // {
  //   id: 2,
  //   title: "Creative Portfolio Website",
  //   description:
  //     "An innovative portfolio website showcasing creative work with interactive elements and stunning visual effects.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
  //   link: "#",
  //   category: "Website Designs",
  // },
  // {
  //   id: 3,
  //   title: "Corporate Business Site",
  //   description:
  //     "Professional corporate website with clean design, fast performance, and comprehensive business solutions.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1486312338219-ce68e2c6b6c8?w=800&h=600&fit=crop",
  //   link: "#",
  //   category: "Website Designs",
  // },

  // Mobile App Designs
    {
    id: 6,
    title: "Food Delivery App",
    description:
      "Designed a user-friendly mobile app interface for browsing restaurants, tracking orders, and seamless food delivery experience.",
    imageUrl:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756912561/WhatsApp_Image_2025-09-03_at_6.27.21_PM_savcjk.jpg",
    link: "#",
    category: "Mobile App Designs",
  },
  
  {
    id: 4,
    title: "Smart Weather Forecast",
    description:
      "Get real-time weather updates, accurate forecasts, and personalized alerts to stay prepared anytime, anywhere.",
    imageUrl:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351800/WhatsApp_Image_2025-08-27_at_12.39.52_PM_bdfc55.jpg",
    link: "#",
    category: "Mobile App Designs",
  },
  {
    id: 5,
    title: "To Do List Mobile App Design",
    description:
      "A clean and intuitive mobile app design for managing tasks with ease and productivity",
    imageUrl:
      "https://res.cloudinary.com/dlyyiq2yo/image/upload/v1756235114/WhatsApp_Image_2025-08-26_at_11.54.57_PM_qgisvb.jpg",
    link: "#",
    category: "Mobile App Designs",
  },

 

  // Posts Design
  // {
  //   id: 7,
  //   title: "Social Media Campaign Posts",
  //   description:
  //     "Engaging social media post designs with vibrant colors and compelling call-to-actions for maximum engagement.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
  //   link: "#",
  //   category: "Posts Design",
  // },
  // {
  //   id: 8,
  //   title: "Brand Promotional Graphics",
  //   description:
  //     "Eye-catching promotional graphics designed to boost brand awareness and drive conversions across platforms.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
  //   link: "#",
  //   category: "Posts Design",
  // },
  // {
  //   id: 9,
  //   title: "Event Announcement Designs",
  //   description:
  //     "Professional event announcement posts with modern typography and compelling visual hierarchy.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
  //   link: "#",
  //   category: "Posts Design",
  // },
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
