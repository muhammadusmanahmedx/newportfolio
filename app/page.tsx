import Image from "next/image";
// import { Preview } from "./components/hero";
import { LandingAccordionItem } from "./components/ui/services";
import { RevealImageList } from "./components/ui/revealimg";
import AboutUsSection from "./components/about";
import DesignWebsiteHeader from "./components/header";
import { Footer } from "./components/footer";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { PortfolioSection } from "./components/portfolio";
// import PortfolioSection from "./components/portfolio";
// import { Footer } from "./components/footer";

export default function Home() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "E-Commerce App",
      description:
        "A user-friendly shopping experience with intuitive navigation.",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 2,
      title: "Design System",
      description:
        "A reusable design system for consistent UI across projects.",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154526-990d71ebb710?auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Mobile Banking",
      description: "Secure and modern banking app interface.",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154495-3b9e6a716f8a?auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
  ];

  return (
    <>
      <DesignWebsiteHeader />
      <AboutUsSection />
      {/* <Preview /> */}
      <LandingAccordionItem />
      {/* <RevealImageList /> */}

      <PortfolioSection items={portfolioItems} />

      <Footer
        logo={
          <img src="/my-logo.svg" alt="Fatima Logo" className="h-8 w-auto" />
        }
        brandName="Fatima's Portfolio"
        socialLinks={[
          {
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://linkedin.com",
            label: "LinkedIn",
          },
          {
            icon: <Instagram className="w-5 h-5" />,
            href: "https://instagram.com",
            label: "Instagram",
          },
          {
            icon: <Twitter className="w-5 h-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
        ]}
        mainLinks={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/terms", label: "Terms of Service" },
        ]}
        copyright={{
          text: "© 2025 Fatima. All rights reserved.",
        }}
      />
    </>
  );
}
