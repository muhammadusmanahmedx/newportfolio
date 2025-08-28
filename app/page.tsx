"use client";
import Image from "next/image";
import { LandingAccordionItem } from "./components/ui/services";
// import LandingAccordionItem from "./components/ui/services";
import { RevealImageList } from "./components/ui/revealimg";
import AboutUsSection from "./components/about";
import DesignWebsiteHeader from "./components/header";
import { Footer } from "./components/footer";
import { Linkedin } from "lucide-react";
// import { PortfolioSection} from "./components/portfolio";

import OrbitingCirclesDemo from "./components/techstack";
import ContactForm from "./components/Contactform";
import { PortfolioDemo } from "./components/portfolio";

export default function Home() {
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
        <PortfolioDemo />
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
