export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface PortfolioSectionProps {
  items: PortfolioItem[];
  // Add option to control image fitting behavior
  imageFit?: 'contain' | 'cover' | 'fill';
}

export function PortfolioSection({ items, imageFit = 'contain' }: PortfolioSectionProps) {
  // Optional: Log or validate items to catch issues early
  console.log("Portfolio items:", items);

  // Define image classes based on fit type
  const getImageClasses = () => {
    switch (imageFit) {
      case 'contain':
        // Image fits entirely within container, may have empty space
        return "w-full h-full object-contain";
      case 'cover':
        // Image covers entire container, may be cropped
        return "w-full h-full object-cover object-center";
      case 'fill':
        // Image stretches to fill container exactly, may be distorted
        return "w-full h-full object-fill";
      default:
        return "w-full h-full object-contain";
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#FBCFE8] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#BE185D] mb-4">
            My Portfolio
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A collection of projects that showcase my passion for creating
            beautiful, functional, and user-centered digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Clickable link wrapper for larger screens only */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block absolute inset-0 z-10"
                aria-label={`View ${item.title}`}
              />
              
              {/* Image container - always fits the card */}
              <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={`${getImageClasses()} group-hover:scale-105 transition-transform duration-300`}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Fallback content if image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg 
                      className="mx-auto h-12 w-12 mb-2 opacity-50" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    <p className="text-xs">Image</p>
                  </div>
                </div>
              </div>

              {/* Overlay that shows always on small screens, on hover for larger screens */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-white line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}