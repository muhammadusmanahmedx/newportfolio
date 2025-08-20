"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  ArrowRight,
  Play,
  Figma,
  Palette,
  Monitor,
  Smartphone,
  Code,
  Eye,
  MousePointer,
  Download,
  Linkedin,
} from "lucide-react";

export default function UIUXDesignerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");

  const typedWords = [
    "UI/UX Designer",
    "Graphic Designer",
    "Figma Expert",
    "User Researcher",
    "Prototyper",
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typeEffect = setInterval(
      () => {
        const currentWord = typedWords[currentWordIndex];

        if (!isDeleting) {
          setTypedText(currentWord.substring(0, currentCharIndex + 1));
          currentCharIndex++;

          if (currentCharIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(() => {}, 2000);
          }
        } else {
          setTypedText(currentWord.substring(0, currentCharIndex - 1));
          currentCharIndex--;

          if (currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % typedWords.length;
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(typeEffect);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-section" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Services", href: "#services-section" },
    { name: "Portfolio", href: "#portfolio-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl py-3 sm:py-4"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755711503/depositphotos_65122799-stock-illustration-letter-f-wing-flag-logo_jtvub3.png"
                alt="Logo"
                className="w-25 h-25 sm:w-26 sm:h-26 object-contain"
              />
            </div>
            <div>
              <h1
                className={`text-xl sm:text-2xl font-bold transition-colors ${
                  isScrolled ? "text-[#831843]" : "text-white"
                }`}
              >
                Fatima Nazir
              </h1>
              <p
                className={`text-xs sm:text-sm transition-colors ${
                  isScrolled ? "text-[#BE185D]" : "text-white/80"
                }`}
              >
                Graphic & UI/UX Designer
              </p>
            </div>
            <Menu
              className={`w-5 h-5 sm:w-6 sm:h-6 cursor-pointer transition-colors ml-2 sm:ml-3 hidden lg:block ${
                isScrolled
                  ? "text-[#831843] hover:text-[#BE185D]"
                  : "text-white hover:text-[#E8B4CB]"
              }`}
              onClick={() => setIsSidebarOpen(true)}
            />
          </div>
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <a
                  href={item.href}
                  className={`font-medium text-sm xl:text-base transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-[#831843] hover:text-[#BE185D]"
                      : "text-white hover:text-[#E8B4CB]"
                  }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <button className="bg-white hover:bg-gray-200 text-[#831843] px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg">
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-[#831843]" : "text-white"
            }`}
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl mt-4 mx-4 sm:mx-6 rounded-2xl p-4 sm:p-6">
            {navItems.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <a
                  href={item.href}
                  className="block py-2 sm:py-3 text-[#831843] hover:text-[#BE185D] font-medium text-sm sm:text-base transition-colors flex-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <button className="w-full mt-4 bg-[#BE185D] text-white py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        )}
      </nav>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex flex-col sm:flex-row sm:justify-end">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div
            className={`
              relative bg-white/95 backdrop-blur-md shadow-2xl p-4 sm:p-8 overflow-y-auto
              w-full sm:w-80 md:w-96
              h-3/4 sm:h-full max-h-[75vh] sm:max-h-full
              transform transition-transform duration-300
              ${
                isSidebarOpen
                  ? "translate-y-0 sm:translate-x-0"
                  : "translate-y-full sm:translate-x-full"
              }
            `}
          >
            <button
              className="absolute top-4 right-4 text-[#831843] hover:text-[#BE185D]"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mt-12 flex flex-col space-y-6">
              <h2 className="text-2xl font-bold text-[#831843] mb-4">
                Contact Me
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#BE185D]" />
                  <a
                    href="mailto:fatimanaziir32@gmail.com"
                    className="text-[#831843] hover:text-[#BE185D] text-sm sm:text-base"
                  >
                    fatimanaziir32@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#BE185D]" />
                  <a
                    href="tel:+923415433994"
                    className="text-[#831843] hover:text-[#BE185D] text-sm sm:text-base"
                  >
                    0341 5433994
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#831843] mb-2">
                  About Me
                </h3>
                <p className="text-[#831843]/80 text-sm sm:text-base">
                  I&apos;m Fatima Nazir, a passionate Graphic and UI/UX Designer with a deep love for creating visually appealing and user-centered digital experiences. My journey combines creativity with technical knowledge as I pursue my Bachelor&apos;s degree in Computer Science at Riphah International University. What sets me apart is my diverse experience - from completing a UI/UX design internship at Bitech to working on ASO strategies at Capstone Technology. I also run my own nail studio business, which has given me valuable insights into entrepreneurship and customer experience design.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#831843] mb-2">
                  Connect
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/fatima-nazir-40471027a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6 text-[#831843] hover:text-[#BE185D] transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="relative min-h-[120vh] overflow-hidden bg-gradient-to-br from-[#831843] via-[#BE185D] to-[#831843] flex items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-gradient-to-br from-[#E8B4CB]/20 to-transparent blur-3xl animate-pulse sm:opacity-100 opacity-50" />
          <div
            className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 rounded-full bg-gradient-to-br from-[#BE185D]/30 to-transparent blur-3xl animate-pulse sm:opacity-100 opacity-50"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-96 lg:w-[600px] h-48 sm:h-64 md:h-96 lg:h-[600px] rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl sm:opacity-100 opacity-50" />
        </div>
        <div
          className="absolute top-16 sm:top-32 right-16 sm:right-32 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 rounded-full border-2 border-white/20 animate-spin"
          style={{ animation: "spin 20s linear infinite" }}
        />
        <div className="absolute bottom-20 sm:bottom-40 left-12 sm:left-24 w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 rounded-lg border border-white/30 animate-pulse rotate-12" />
        <div className="absolute top-20 sm:top-40 left-20 sm:left-40 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 rounded-lg bg-white/10 rotate-45 animate-bounce" />
        <div
          className="absolute bottom-24 sm:bottom-60 right-12 sm:right-40 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-[#E8B4CB]/40 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-24 sm:top-60 right-24 sm:right-60 w-6 sm:w-8 h-6 sm:h-8 rotate-45 bg-white/20 animate-pulse" />
        <div
          className="absolute bottom-32 sm:bottom-80 left-16 sm:left-60 w-6 h-6 rounded-full bg-[#E8B4CB] animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="absolute inset-0 opacity-5 hidden md:block">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-b border-white" />
            ))}
          </div>
        </div>
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border border-white/20 rotate-45" />
        <div className="absolute bottom-16 sm:bottom-32 right-16 sm:right-32 w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 border border-white/20 rounded-full" />
        <div className="absolute top-1/4 sm:top-1/3 right-10 sm:right-20 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white/10 rotate-12" />
        <div className="absolute bottom-1/4 left-12 sm:left-32 w-8 sm:w-12 md:14 h-8 sm:h-12 md:h-14 border-2 border-[#E8B4CB]/40 rounded-lg rotate-45" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-6"
              style={{ animation: "slideInUp 1s ease-out 0.2s both" }}
            >
              <Eye className="w-3 sm:w-4 h-3 sm:h-4 text-[#E8B4CB]" />
              <span className="text-xs sm:text-sm font-medium">
                Graphic & UI/UX Designer
              </span>
            </div>
            <div
              className="text-[#E8B4CB] text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 sm:mb-4"
              style={{ animation: "slideInUp 1s ease-out 0.3s both" }}
            >
              I'm a{" "}
              <span className="border-r-2 border-[#E8B4CB] animate-pulse">
                {typedText}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight"
              style={{ animation: "slideInUp 1s ease-out 0.4s both" }}
            >
              Bringing Ideas to Life 
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ animation: "slideInUp 1s ease-out 0.6s both" }}
            >
              Currently pursuing Computer Science at Riphah International
              University, I combine technical foundation with creative vision to
              craft beautiful digital experiences that users love.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center"
              style={{ animation: "slideInUp 1s ease-out 0.8s both" }}
            >
              <button className="bg-white hover:bg-gray-100 text-[#BE185D] px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl justify-center">
                View My Work <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#831843] px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 justify-center">
                <Play className="w-4 sm:w-5 h-4 sm:h-5" />
                Design Process
              </button>
            </div>
            <div
              className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center mb-12 sm:mb-16"
              style={{ animation: "slideInUp 1s ease-out 1s both" }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="text-white/80 text-xs sm:text-sm">Tools:</span>
                <div className="flex gap-2 sm:gap-3">
                  <Figma className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-[#E8B4CB] transition-colors cursor-pointer" />
                  <Palette className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-[#E8B4CB] transition-colors cursor-pointer" />
                  <Monitor className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-[#E8B4CB] transition-colors cursor-pointer" />
                  <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-[#E8B4CB] transition-colors cursor-pointer" />
                  <Code className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-[#E8B4CB] transition-colors cursor-pointer" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    10+
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Projects
                  </div>
                </div>
                <div className="text-center border-x border-white/20 px-3 sm:px-4 md:px-6">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    2+
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Years Exp
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    100%
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white">
          <MousePointer className="w-4 sm:w-5 h-4 sm:h-5 animate-bounce" />
          <span className="text-xs sm:text-sm">Explore</span>
        </div>
      </section>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 640px) {
          .absolute.top-10.sm\\:top-20.right-10.sm\\:right-20 {
            top: 10px;
            right: 10px;
            width: 48px;
            height: 48px;
          }
          .absolute.bottom-10.sm\\:bottom-20.left-10.sm\\:left-20 {
            bottom: 10px;
            left: 10px;
            width: 48px;
            height: 48px;
          }
          .absolute.top-1\\/2.left-1\\/2 {
            width: 48px;
            height: 48px;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .absolute.top-10.sm\\:top-20.right-10.sm\\:right-20 {
            top: 15px;
            right: 15px;
            width: 64px;
            height: 64px;
          }
          .absolute.bottom-10.sm\\:bottom-20.left-10.sm\\:left-20 {
            bottom: 15px;
            left: 15px;
            width: 64px;
            height: 64px;
          }
          .absolute.top-1\\/2.left-1\\/2 {
            width: 64px;
            height: 64px;
          }
        }
      `}</style>
    </>
  );
}