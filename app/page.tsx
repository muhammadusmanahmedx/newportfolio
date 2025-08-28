
"use client";

import React from 'react';

// Portfolio items data
const portfolioItems: PortfolioItem[] = [
    {
    id: 1,
    title: "Smart Weather Forecast",
    description: "Get real-time weather updates, accurate forecasts, and personalized alerts to stay prepared anytime, anywhere.",
    imageUrl: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351800/WhatsApp_Image_2025-08-27_at_12.39.52_PM_bdfc55.jpg",
    link: "#",
    category: "Mobile App"
  },
  {
    id: 2,
    title: "GPS Navigator – Live Maps & Routes",
    description: "Find the best routes with real-time traffic updates, turn-by-turn voice guidance, and accurate GPS tracking wherever you go.",
    imageUrl: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756318079/Frame_8_vtzz5y.png",
    link: "#",
    category: "Mobile App"
  },
  {
    id: 3,
    title: "To Do List Mobile App Design",
    description: "A clean and intuitive mobile app design for managing tasks with ease and productivity",
    imageUrl: "https://res.cloudinary.com/dlyyiq2yo/image/upload/v1756235114/WhatsApp_Image_2025-08-26_at_11.54.57_PM_qgisvb.jpg",
    link: "#",
    category: "Mobile App"
  },
  {
    id: 4,
    title: "Universal Language Translator",
    description: "Instantly translate text, voice, and images across multiple languages with accuracy and ease. Your go-to app for seamless global communication.",
    imageUrl: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756318078/Frame_10_rc7nku.png",
    link: "#",
    category: "Playstore Graphics"
  },

  {
    id: 5,
    title: "Smart GPS Navigation",
    description: "Explore the fastest routes with live traffic updates, voice guidance, and real-time GPS tracking for a smooth and reliable journey.",
    imageUrl: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351799/WhatsApp_Image_2025-08-27_at_12.39.52_PM_1_lrhlln.jpg",
    link: "#",
    category: "Playstore Graphics"
  },
  
];

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  // Dynamic category styling
  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case 'mobile app':
        return {
          bg: 'bg-pink-50',
          text: 'text-pink-600',
          dot: 'bg-pink-400'
        };
      case 'web design':
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-600',
          dot: 'bg-blue-400'
        };
      case 'graphics':
        return {
          bg: 'bg-purple-50',
          text: 'text-purple-600',
          dot: 'bg-purple-400'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-600',
          dot: 'bg-gray-400'
        };
    }
  };

  const categoryStyle = getCategoryStyle(item.category);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100">
      {/* Image Container with Enhanced Gradient */}
      <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-t-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-700/30 via-transparent to-white/10 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)] z-10"></div>
        
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-all duration-700 drop-shadow-lg"
        />
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-white/40 rounded-full backdrop-blur-sm animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-white/30 rounded-full backdrop-blur-sm animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-8 left-6 w-4 h-4 bg-white/25 rounded-full backdrop-blur-sm animate-pulse"></div>
        
        {/* Gradient Orb */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Content Container with Better Spacing */}
      <div className="p-8 space-y-5">
        {/* Dynamic Category Tag */}
        <div className={`inline-flex items-center px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} rounded-full text-xs font-semibold uppercase tracking-wide`}>
          <span className={`w-1.5 h-1.5 ${categoryStyle.dot} rounded-full mr-2`}></span>
          {item.category}
        </div>

        {/* Title with Better Typography */}
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-500 leading-tight">
          {item.title}
        </h3>

        {/* Enhanced Description */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-4 font-light">
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

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ items }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Featured
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest creative works and innovative solutions that showcase modern design principles and cutting-edge technology.
          </p>
        </div>

        {/* Portfolio Grid with Better Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both'
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

// Demo with your portfolio items
export default function RefinedPortfolioDemo() {
  return <PortfolioSection items={portfolioItems} />;
}
