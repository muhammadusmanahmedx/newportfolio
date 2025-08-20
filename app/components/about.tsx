
"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
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
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <PenTool className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#E8B4CB]" />
      ),
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces for websites and web applications with a focus on user experience and conversion optimization, including wireframing, prototyping, and responsive design.",
      position: "left",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#E8B4CB]" />
      ),
      title: "Mobile App Design",
      description:
        "Designing engaging mobile app interfaces that provide seamless user experiences across iOS and Android platforms, with expertise in mobile UI, prototyping, and user flow mapping.",
      position: "left",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#E8B4CB]" />
      ),
      title: "Graphic Design",
      description:
        "Comprehensive graphic design services including logo design, brand identity, social media graphics, and print design to create visually stunning and cohesive brand experiences.",
      position: "right",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#E8B4CB]" />
      ),
      title: "ASO Consultation",
      description:
        "App Store Optimization strategies to improve your app's visibility and download rates, including keyword research, store optimization, competitor analysis, and performance tracking.",
      position: "right",
    },
  ];

  const stats = [
    { icon: <Award />, value: 10, label: "Projects Completed", suffix: "+" },
    { icon: <Users />, value: 100, label: "Client Satisfaction", suffix: "%" },
    { icon: <Calendar />, value: 2, label: "Years Experience", suffix: "+" },
    { icon: <CheckCircle />, value: 3, label: "Tools Mastered", suffix: "+" },
  ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-12 pt-8 px-4 bg-gradient-to-b from-[#FDF2F8] to-[#FCE7F3] text-[#831843] overflow-hidden relative"
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#BE185D]/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#E8B4CB]/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#BE185D]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#E8B4CB]/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center mb-6"
          variants={itemVariants}
        >
          <motion.span
            className="text-[#BE185D] font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            MY STORY
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
            About Me
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#BE185D]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-[#831843]/80"
          variants={itemVariants}
        >
          I&apos;m Fatima Nazir, a passionate Graphic and UI/UX Designer with a
          deep love for creating visually appealing and user-centered digital
          experiences. My journey combines creativity with technical knowledge as
          I pursue my Bachelor&apos;s degree in Computer Science at Riphah
          International University. What sets me apart is my diverse experience -
          from completing a UI/UX design internship at Bitech to working on ASO
          strategies at Capstone Technology. I also run my own nail studio
          business, which has given me valuable insights into entrepreneurship and
          customer experience design.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div
              className="relative w-full max-w-xs"
              variants={itemVariants}
            >
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755655934/d70a710bb5af9fe4b0b57428cc80999f_egjmpb.png"
                  alt="Design Portfolio"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#831843]/50 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-white text-[#831843] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Portfolio <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-[#E8B4CB] rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[#BE185D]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#E8B4CB]/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#BE185D]"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E8B4CB]"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* <motion.div
          className="mt-20 bg-[#831843] text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2">
              Ready to bring your design vision to life?
            </h3>
            <p className="text-white/80">
              Let&apos;s discuss your project and create something amazing together.
            </p>
          </div>
          <motion.button
            className="bg-[#BE185D] hover:bg-[#BE185D]/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div> */}
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: {
    hidden: { opacity: number; y?: number };
    visible: {
      opacity: number;
      y?: number;
      transition: { duration: number; ease: string };
    };
  };
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction,
}: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#BE185D] bg-[#BE185D]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#BE185D]/20 relative"
          whileHover={{
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-[#831843] group-hover:text-[#BE185D] transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-[#831843]/80 leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-[#BE185D] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest)
  );

  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#831843]/5 flex items-center justify-center mb-4 text-[#BE185D] group-hover:bg-[#BE185D]/10 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div
        ref={countRef}
        className="text-3xl font-bold text-[#831843] flex items-center"
      >
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#831843]/70 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[#BE185D] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}
