import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container =
    "absolute right-4 top-0 z-40 h-16 w-12 md:h-20 md:w-16 lg:h-24 lg:w-20";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-rose-300 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 overflow-hidden transition-all rounded-md border-2 border-transparent group-hover:border-rose-300";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-2 md:py-4 lg:py-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-rose-700 transition-all duration-500 group-hover:text-rose-500 text-left">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img
            alt={images[1].alt}
            src={images[1].src || "/placeholder.svg"}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-4 group-hover:translate-y-4 md:group-hover:translate-x-6 md:group-hover:translate-y-6 lg:group-hover:translate-x-8 lg:group-hover:translate-y-8 group-hover:rotate-12"
        )}
      >
        <div className={cn(effect, "duration-200 group-hover:shadow-pink-400")}>
          <img
            alt={images[0].alt}
            src={images[0].src || "/placeholder.svg"}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Branding",
      images: [
        {
          src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502997/representations-user-experience-interface-design-min_h0eybn.jpg",
          alt: "Branding Design 1",
        },
        {
          src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755499869/marketing-creative-collage-with-phone-min_onrsju.jpg",
          alt: "Branding Design 2",
        },
      ],
    },
    {
      text: "Web design",
      images: [
        {
          src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755501711/ui-ux-representations-with-laptop-min_oibioh.jpg",
          alt: "Web Design 1",
        },
        {
          src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755501617/web-design-technology-browsing-programming-concept-min_uvgpnx.jpg",
          alt: "Web Design 2",
        },
      ],
    },
    {
      text: "Illustration",
      images: [
        {
          src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755501134/hand-touching-screen-rpa-concept-min_ycz5ov.jpg",
          alt: "Illustration 1",
        },
        {
          src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502642/modern-equipped-computer-lab-min_o1mj02.jpg",
          alt: "Illustration 2",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-rose-200 via-rose-300 to-pink-200 py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8">
      <div className="w-full max-w-5xl mx-auto">
        <h3 className="text-xs sm:text-sm font-black uppercase text-rose-700 mb-4 sm:mb-6 md:mb-8 text-left">
          My Services
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto"
            >
              <RevealImageListItem text={item.text} images={item.images} />
              {index < items.length - 1 && (
                <div className="w-full sm:w-px h-px sm:h-12 md:h-16 bg-rose-400 flex-shrink-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { RevealImageList };
