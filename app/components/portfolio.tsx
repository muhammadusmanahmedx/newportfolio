export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

export function PortfolioSection({ items }: PortfolioSectionProps) {
  // Optional: Log or validate items to catch issues early
  console.log("Portfolio items:", items);

  return (
    <section className="bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#FBCFE8] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#BE185D] mb-4">
            My Portfolio
          </h2>{" "}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A collection of projects that showcase my passion for creating
            beautiful, functional, and user-centered digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Clickable link wrapper for larger screens only */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block absolute inset-0 z-10"
                aria-label={`View ${item.title}`}
              />

              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />

              {/* Overlay that shows always on small screens, on hover for larger screens */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 line-clamp-2 mt-1">
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
