import React from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-pink-500 to-pink-600 rounded-t-3xl">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent z-10"></div>
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>

      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Projects
            </button>
            <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
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
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "To Do List Mobile App Design",
    description: "A clean and intuitive mobile app design for managing tasks with ease and productivity",
    imageUrl: "https://res.cloudinary.com/dlyyiq2yo/image/upload/v1756235114/WhatsApp_Image_2025-08-26_at_11.54.57_PM_qgisvb.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Universal Language Translator",
    description: "Instantly translate text, voice, and images across multiple languages with accuracy and ease. Your go-to app for seamless global communication.",
    imageUrl: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756318078/Frame_10_rc7nku.png",
    link: "#",
  },
  {
    id: 3,
    title: "Smart Weather Forecast",
    description: "Get real-time weather updates, accurate forecasts, and personalized alerts to stay prepared anytime, anywhere.",
    imageUrl: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351800/WhatsApp_Image_2025-08-27_at_12.39.52_PM_bdfc55.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Smart GPS Navigation",
    description: "Explore the fastest routes with live traffic updates, voice guidance, and real-time GPS tracking for a smooth and reliable journey.",
    imageUrl: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351799/WhatsApp_Image_2025-08-27_at_12.39.52_PM_1_lrhlln.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "GPS Navigator – Live Maps & Routes",
    description: "Find the best routes with real-time traffic updates, turn-by-turn voice guidance, and accurate GPS tracking wherever you go.",
    imageUrl: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756318079/Frame_8_vtzz5y.png",
    link: "#",
  },
];

export default function RefinedPortfolioDemo() {
  return <PortfolioSection items={portfolioItems} />;
}
