"use client";
import Image from "next/image";
import { LandingAccordionItem } from "./components/ui/services";
// import LandingAccordionItem from "./components/ui/services";
import { RevealImageList } from "./components/ui/revealimg";
import AboutUsSection from "./components/about";
import DesignWebsiteHeader from "./components/header";
import { Footer } from "./components/footer";
import { Linkedin } from "lucide-react";
import { PortfolioSection, PortfolioItem } from "./components/portfolio";
import OrbitingCirclesDemo from "./components/techstack";
import ContactForm from "./components/Contactform";

export default function Home() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "To Do List Mobile App Design",
      description:
        "A clean and intuitive mobile app design for managing tasks with ease and productivity",
      imageUrl:
        "https://res.cloudinary.com/dlyyiq2yo/image/upload/v1756235114/WhatsApp_Image_2025-08-26_at_11.54.57_PM_qgisvb.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Universal Language Translator",
      description:
        "Instantly translate text, voice, and images across multiple languages with accuracy and ease. Your go-to app for seamless global communication.",
      imageUrl:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756318078/Frame_10_rc7nku.png",
      link: "#",
    },
    {
      id: 3,
      title: "Smart Weather Forecast",
      description:
        "Get real-time weather updates, accurate forecasts, and personalized alerts to stay prepared anytime, anywhere.",
      imageUrl:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351800/WhatsApp_Image_2025-08-27_at_12.39.52_PM_bdfc55.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Smart GPS Navigation",
      description:
        "Explore the fastest routes with live traffic updates, voice guidance, and real-time GPS tracking for a smooth and reliable journey.",
      imageUrl:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756351799/WhatsApp_Image_2025-08-27_at_12.39.52_PM_1_lrhlln.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "GPS Navigator – Live Maps & Routes",
      description:
        "Find the best routes with real-time traffic updates, turn-by-turn voice guidance, and accurate GPS tracking wherever you go.",
      imageUrl:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1756318079/Frame_8_vtzz5y.png",
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
      <section id="contact">
        <ContactForm />
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
