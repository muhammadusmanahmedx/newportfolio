// import { OrbitingCircles } from "@components/magicui/orbiting-circles";

// import { OrbitingCircles } from "./magicui/orbiting-circles";
import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-rose-700 stroke-2"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className,
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

const Icons = {
  figma: () => (
    <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
      <img
        src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755712282/figma_5968705_gojoic.png"
        alt="Figma Logo"
        className="w-[40px] h-[40px] bg-[#FCE7F3]"
      />
    </a>
  ),
  canva: () => (
    <a href="https://www.canva.com" target="_blank" rel="noopener noreferrer">
      <img
        src="https://www.vectorlogo.zone/logos/canva/canva-icon.svg"
        alt="Canva Logo"
        className="w-[40px] h-[40px] rounded-full"
      />
    </a>
  ),
  photoshop: () => (
    <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
      <img
        src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755710882/photoshop_pgsngk.png"
        alt="Photoshop Logo"
        className="w-[40px] h-[40px] rounded-full"
      />
    </a>
  ),
  illustrator: () => (
    <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">
      <img
        src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755710826/illustrator_m0tajx.png"
        alt="Illustrator Logo"
        className="w-[40px] h-[40px] rounded-full"
      />
    </a>
  ),
  sketch: () => (
    <a href="https://www.sketch.com" target="_blank" rel="noopener noreferrer">
      <img
        src="https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg"
        alt="Sketch Logo"
        className="w-[40px] h-[40px] rounded-full "
      />
    </a>
  ),
 lucid: () => (
    <a href="https://www.lucidchart.com/pages" target="_blank" rel="noopener noreferrer">
      <img
        src="
  https://res.cloudinary.com/dshjm6hcx/image/upload/v1755712354/3865608556737_8f4ae4a98b36ab6912b3_512_z9dzdk.png"
        alt="lucid chart Logo"
        className="w-[40px] h-[40px] rounded-full bg-[#FCE7F3]"
      />
    </a>
  ),
 spline: () => (
    <a href="http://spline.design/" target="_blank" rel="noopener noreferrer">
      <img
        src="
  https://res.cloudinary.com/dshjm6hcx/image/upload/v1755712798/spline_logo_a3ykxm.webp"
        alt="Spline Logo"
        className="w-[40px] h-[40px] rounded-full bg-[#FCE7F3]"
      />
    </a>
  ),
   framer: () => (
    <a href="framer.com" target="_blank" rel="noopener noreferrer">
      <img
        src="
  https://res.cloudinary.com/dshjm6hcx/image/upload/v1755713160/framer-icon-logo-png_seeklogo-586477_ypg9td.png"
        alt="Framer Logo"
        className="w-[40px] h-[40px] rounded-full bg-[#FCE7F3]"
      />
    </a>
  ),

};

export default function TechStackSection() {
  return (
   <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#FCE7F3] overflow-hidden">
  <h2 className="text-4xl font-bold text-rose-800 mb-4">UI/UX Tech Stack</h2>
  <p className="text-lg text-rose-600 max-w-2xl text-center mb-8">
    Explore the powerful tools we use to craft stunning and user-friendly designs, from prototyping to final visuals.
  </p>

  <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
    {/* Center Image */}
  <div className="absolute z-10 flex items-center justify-center">
  <div className="relative w-44 h-44 flex items-center justify-center">
    {/* Gradient background */}
   {/* <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,1)_0%,rgba(236,72,153,0.3)_70%,#FCE7F3_100%)]"></div> */}

    
    {/* Logo */}
    <img
      src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755711503/depositphotos_65122799-stock-illustration-letter-f-wing-flag-logo_jtvub3.png"
      alt="Center Logo"
      className="w-40 h-40 object-contain rounded-full relative z-10"
    />
  </div>
</div>

    {/* Outer Orbit */}
    <OrbitingCircles iconSize={60} radius={190}>
      {/* <Icons.figma /> */}
      <Icons.canva />
   
      <Icons.spline/>
       <Icons.illustrator />
      <Icons.photoshop />
      {/* <Icons.photoshop /> */}
      {/* <Icons.illustrator /> */}
      <Icons.sketch />
    </OrbitingCircles>

    {/* Inner Orbit */}
    <OrbitingCircles iconSize={60} radius={110} reverse speed={2}>
      <Icons.figma />
       <Icons.lucid/>
      <Icons.framer/>
     
    </OrbitingCircles>
  </div>
</section>

  );
}