import Image from "next/image";
import { LandingAccordionItem } from "./components/ui/services";
import { RevealImageList } from "./components/ui/revealimg";
import AboutUsSection from "./components/about";
import DesignWebsiteHeader from "./components/header";
import { Footer } from "./components/footer";
import { Linkedin } from "lucide-react";
import { PortfolioSection, PortfolioItem } from "./components/portfolio";
import OrbitingCirclesDemo from "./components/techstack";

export default function Home() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Website UI/UX Designs",
      description: "Showcase of web designs and responsive layouts - Coming Soon",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 2,
      title: "Mobile App UI/UX Designs",
      description: "Screens of mobile app interfaces and prototypes - Coming Soon",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154495-3b9e6a716f8a?auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Branding & Graphic Design",
      description: "Logos, posters, brand kits, and marketing graphics - Coming Soon",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154526-990d71ebb710?auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 4,
      title: "Creative Experiments",
      description: "Personal projects, concept art, and visual explorations - Coming Soon",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
  ];

  return (
    <>
    <section id="home">
      <DesignWebsiteHeader />
      </section>
      <section id="about-section">
        <AboutUsSection />
      </section>
      <section id="tech-stack">
        <OrbitingCirclesDemo />
      </section>
      <section id="services-section">
        <LandingAccordionItem />
      </section>
      <section id="portfolio-section">
        <PortfolioSection items={portfolioItems} />
      </section>
      <section id="contact-section">
        <Footer
          logo={
            <img
              src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755711503/depositphotos_65122799-stock-illustration-letter-f-wing-flag-logo_jtvub3.png"
              alt="Fatima Logo"
              className="h-8 w-auto"
            />
          }
          brandName="Fatima Nazir"
          socialLinks={[
            {
              icon: <Linkedin className="w-5 h-5" />,
              href: "https://linkedin.com/in/fatima-nazir-40471027a",
              label: "LinkedIn",
            },
          ]}
          mainLinks={[
            { href: "#about-section", label: "About" },
            { href: "#portfolio-section", label: "Portfolio" },
            { href: "#contact-section", label: "Contact" },
          ]}
          legalLinks={[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
          ]}
          copyright={{
            text: "© 2024 Fatima Nazir. All rights reserved.",
          }}
        />
      </section>
    </>
  );
}