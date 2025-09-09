"use client";
import Image from "next/image";


// Services section => ctrl + Click (landingaccordinitem)
import { LandingAccordionItem } from "./components/ui/services";

// About us section => ctrl + Click (aboutussection)
import AboutUsSection from "./components/about";

// header and hero => ctrl + Click (designwebsiteheader)
import DesignWebsiteHeader from "./components/header";

// Footer
import { Footer } from "./components/footer";

// Tech stack section
import OrbitingCirclesDemo from "./components/techstack";

// Contact form
import ContactForm from "./components/Contactform";

// Portfolio section
import { PortfolioDemo } from "./components/portfolio";

// Skills section
import SkillsSection from "./components/Skillsection";



// yaha se upar rehna

import { Linkedin } from "lucide-react";
export default function Home() {
  return (
    <>
      <section id="home">
        <DesignWebsiteHeader />
      </section>
      <section id="about-section">
        <AboutUsSection />
      </section>
         <section id="skills-section" className="bg-[#FCE7F3]">
        <SkillsSection />
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
            // footers logo image
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
            text: "© 2024 wonsol.com . All rights reserved.",
          }}
        />
      </section>
    </>
  );
}
