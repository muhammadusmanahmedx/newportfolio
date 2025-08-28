"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  PenTool,
  Smartphone,
  Palette,
  TrendingUp,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  Heart,
  Lightbulb,
} from "lucide-react";

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsValues, setStatsValues] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {


            // Animate stats // [Projects, Satisfaction, Years, Tools]
            const targetValues = [10, 100, 1, 5];
            

            targetValues.forEach((target, index) => {
              let current = 0;
              const increment = target / 30;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setStatsValues((prev) => {
                  const newValues = [...prev];
                  newValues[index] = Math.floor(current);
                  return newValues;
                });
              }, 50);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: (
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 text-pink-300" />
      ),
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces for websites and web applications with a focus on user experience and conversion optimization, including wireframing, prototyping, and responsive design.",
    },
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 text-pink-300" />
      ),
      title: "Mobile App Design",
      description:
        "Designing engaging mobile app interfaces that provide seamless user experiences across iOS and Android platforms, with expertise in mobile UI, prototyping, and user flow mapping.",
    },
    {
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: (
        <Star className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 text-pink-300" />
      ),
      title: "Graphic Design",
      description:
        "Comprehensive graphic design services including logo design, brand identity, social media graphics, and print design to create visually stunning and cohesive brand experiences.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: (
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 text-pink-300" />
      ),
      title: "ASO Consultation",
      description:
        "App Store Optimization strategies to improve your app's visibility and download rates, including keyword research, store optimization, competitor analysis, and performance tracking.",
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 text-pink-300" />
      ),
      title: "Professional Experience",
      description:
        "What sets me apart is my diverse experience - from completing a UI/UX design internship at Bitech to working on ASO strategies at Capstone Technology.",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: (
        <Star className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 text-pink-300" />
      ),
      title: "Entrepreneurial Spirit",
      description:
        "I also run my own nail studio business, which has given me valuable insights into entrepreneurship and customer experience design.",
    },
    
  ];

  const stats = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: statsValues[0],
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: statsValues[1],
      label: "Client Satisfaction",
      suffix: "%",
    },
    {
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: statsValues[2],
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: statsValues[3],
      label: "Tools Mastered",
      suffix: "+",
    },
  ];

  return (
    <section
      id="about-section"
      className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-pink-100 text-pink-900 overflow-hidden relative min-h-screen"
    >
      {/* Background Elements - Responsive positioning */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-pink-600/5 blur-2xl sm:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 rounded-full bg-pink-400/5 blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>

      {/* Floating particles - Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-pink-600/30 animate-bounce"></div>
      <div className="hidden sm:block absolute bottom-1/3 right-1/4 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-pink-400/30 animate-bounce delay-500"></div>

      <div
        className={`container mx-auto max-w-7xl relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Section - Responsive typography */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-pink-600 font-medium mb-2 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            MY STORY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-3 sm:mb-4 lg:mb-6 text-center leading-tight">
            About Me
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-pink-600 rounded-full"></div>
        </div>

        {/* About Text - Responsive text sizing */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-2 sm:px-4">
          <p className="text-pink-900/80 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed sm:leading-loose mb-6 sm:mb-8">
            I&apos;m Fatima Nazir, a passionate Graphic and UI/UX Designer with
            a deep love for creating visually appealing and user-centered
            digital experiences. My journey combines creativity with technical
            knowledge as I pursue my Bachelor&apos;s degree in Computer Science
            at Riphah International University.
          </p>
        </div>

        {/* Services Grid - Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              secondaryIcon={service.secondaryIcon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Stats Section - Responsive grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl flex flex-col items-center text-center group hover:bg-white hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-pink-900/5 flex items-center justify-center mb-3 sm:mb-4 text-pink-600 group-hover:bg-pink-600/10 group-hover:rotate-12 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-900 flex items-center">
                <span>{stat.value}</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-pink-900/70 text-xs sm:text-sm mt-1 leading-tight">
                {stat.label}
              </p>
              <div className="w-8 sm:w-10 h-0.5 bg-pink-600 mt-2 sm:mt-3 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  delay,
}: ServiceItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white/30 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl group hover:bg-white/50 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-md ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="text-pink-600 bg-pink-600/10 p-2 sm:p-3 rounded-lg transition-all duration-300 group-hover:bg-pink-600/20 group-hover:rotate-12 relative flex-shrink-0 self-start sm:self-center">
          {icon}
          {secondaryIcon}
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-pink-900 group-hover:text-pink-600 transition-colors duration-300 leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-xs sm:text-sm lg:text-base text-pink-900/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
